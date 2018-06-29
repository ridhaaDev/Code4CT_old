/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    function c(a) {
        this.t = a
    }
    function l(a, b) {
        for (var e = b.split("."); e.length; ) {
            if (!(e[0]in a))
                return!1;
            a = a[e.shift()]
        }
        return a
    }
    function d(a, b) {
        return a.replace(h, function (e, a, i, f, c, h, k, m) {
            var f = l(b, f), j = "", g;
            if (!f)
                return"!" == i ? d(c, b) : k ? d(m, b) : "";
            if (!i)
                return d(h, b);
            if ("@" == i) {
                e = b._key;
                a = b._val;
                for (g in f)
                    f.hasOwnProperty(g) && (b._key = g, b._val = f[g], j += d(c, b));
                b._key = e;
                b._val = a;
                return j
            }
        }).replace(k, function (a, c, d) {
            return(a = l(b, d)) || 0 === a ? "%" == c ? (new Option(a)).innerHTML.replace(/"/g, "&quot;") :
                    a : ""
        })
    }
    var h = /\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g, k = /\{\{([=%])(.+?)\}\}/g;
    c.prototype.render = function (a) {
        return d(this.t, a)
    };
    window.t = c
})();
// end of 't';

Number.prototype.to_$ = function () {
    return "R" + parseFloat(this).toFixed(2);
};
String.prototype.strip$ = function () {
    return this.split("R")[1];
};

var app = {
    shipping: 1.00,
    products: [
        {
            "name": "Create With Code Series",
            "price": "19.95",
            "img": "http://fillmurray.com/g/159/159",
            "desc": "The Create with Code series is designed to give learners an introduction to the exciting world of coding, helping them to explore how creative coding can be. "
        },
        {
            "name": "Tech Innovators Level 1",
            "price": "0.99",
            "img": "http://shechive.files.wordpress.com/2011/08/odd-products-28.jpg?w=159&h=159",
            "desc": "Covering an introduction to web development as well as an introduction to design thinking, this course helps a learner explore how technology can be used for social innovation while developing fundamentals knowledge of programming. "
        },
        {
            "name": "Tech Innovators Level 2",
            "price": "40.00",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Going beyond the basics, this course enables a learner move from basic coding proficiency to the level where they are able to implement a basic coding project independently. The course has a strong focus on developing leadership skills and offers abundant opportunity for learners to interact with the tech industry. "
        }
    ],
    removeProduct: function () {
        "use strict";

        var item = $(this).closest(".shopping-cart--list-item");

        item.addClass("closing");
        window.setTimeout(function () {
            item.remove();
            app.updateTotals();
        }, 500); // Timeout for css animation
    },
    addProduct: function () {
        "use strict";

        var qtyCtr = $(this).prev(".product-qty"),
                quantity = parseInt(qtyCtr.html(), 10) + 1;

        app.updateProductSubtotal(this, quantity);
    },
    subtractProduct: function () {
        "use strict";

        var qtyCtr = $(this).next(".product-qty"),
                num = parseInt(qtyCtr.html(), 10) - 1,
                quantity = num <= 0 ? 0 : num;

        app.updateProductSubtotal(this, quantity);
    },
    updateProductSubtotal: function (context, quantity) {
        "use strict";

        var ctr = $(context).closest(".product-modifiers"),
                productQtyCtr = ctr.find(".product-qty"),
                productPrice = parseFloat(ctr.data("product-price")),
                subtotalCtr = ctr.find(".product-total-price"),
                subtotalPrice = quantity * productPrice;

        productQtyCtr.html(quantity);
        subtotalCtr.html(subtotalPrice.to_$());

        app.updateTotals();
    },
    updateTotals: function () {
        "use strict";

        var products = $(".shopping-cart--list-item"),
                subtotal = 0,
                shipping;

        for (var i = 0; i < products.length; i += 1) {
            subtotal += parseFloat($(products[i]).find(".product-total-price").html().strip$());
        }

        shipping = (subtotal > 0 && subtotal < (100 / 1.06)) ? app.shipping : 0;

        $("#subtotalCtr").find(".cart-totals-value").html(subtotal.to_$());
        $("#taxesCtr").find(".cart-totals-value").html((subtotal * 0.15).to_$());
//        $("#totalCtr").find(".cart-totals-value").html((subtotal * 1.06 + shipping).to_$());
        $("#totalCtr").find(".cart-totals-value").html((subtotal * 1.15).to_$());
//        $("#shippingCtr").find(".cart-totals-value").html(shipping.to_$());
    },
    attachEvents: function () {
        "use strict";

        $(".product-remove").on("click", app.removeProduct);
        $(".product-plus").on("click", app.addProduct);
        $(".product-subtract").on("click", app.subtractProduct);
    },
    setProductImages: function () {
        "use strict";

        var images = $(".product-image"),
                ctr,
                img;

        for (var i = 0; i < images.length; i += 1) {
            ctr = $(images[i]),
                    img = ctr.find(".product-image--img");

            ctr.css("background-image", "url(" + img.attr("src") + ")");
            img.remove();
        }
    },
    renderTemplates: function () {
        "use strict";

        var products = app.products,
                content = [],
                template = new t($("#shopping-cart--list-item-template").html());

        for (var i = 0; i < products.length; i += 1) {
            content[i] = template.render(products[i]);
        }

        $("#shopping-cart--list").html(content.join(""));
    }

};

app.renderTemplates();
app.setProductImages();
app.attachEvents();




//My styles
$(document).ready(function(){
    $("#recommended courses").click(function(){
        $("#shopping-cart--list").hide();
        
    });
});