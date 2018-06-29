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
            "price": "1800",
            "img": "http://fillmurray.com/g/159/159",
            "desc": "The Create with Code series is designed to give learners an introduction to the exciting world of coding, helping them to explore how creative coding can be. "
        },
        {
            "name": "Tech Innovators Level 1",
            "price": "4200",
            "img": "http://shechive.files.wordpress.com/2011/08/odd-products-28.jpg?w=159&h=159",
            "desc": "Covering an introduction to web development as well as an introduction to design thinking, this course helps a learner explore how technology can be used for social innovation while developing fundamentals knowledge of programming. "
        },
        {
            "name": "Tech Innovators Level 2",
            "price": "5600",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Going beyond the basics, this course enables a learner move from basic coding proficiency to the level where they are able to implement a basic coding project independently. The course has a strong focus on developing leadership skills and offers abundant opportunity for learners to interact with the tech industry. "
        }

        ,
        {
            "name": "Intro to Coding: Web Pages",
            "price": "250",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Code a simple one-page website using HTML and JQuery."
        },
        {
            "name": "Intro to Coding: Music",
            "price": "250",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Code a song using SonicPi software on a Raspberry Pi computer."
        },
        {
            "name": "Intro to Coding: Animation",
            "price": "250",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Create a 2D animation using coding language JavaScript."
        },
        {
            "name": "Create with Code: Web Pages",
            "price": "960",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how the internet works and code a simple one-page website using HTML, CSS and JQuery."
        },
        {
            "name": "Beginner JavaScript",
            "price": "1800",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Develop a basic proficiency in programming structures and methods in JavaScript so that you are able to create an interactive web application."
        },
        {
            "name": "Beginner Front End Web Development",
            "price": "1800",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Develop a good proficiency in CSS and an understanding of web design principles so that you are able to create visually pleasing web pages."
        },
        {
            "name": "Beginner Python",
            "price": "1800",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Develop a basic proficiency in programming principles and methods in Python."
        },
        {
            "name": "Full Stack JavaScript",
            "price": "1800",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Develop an understanding of the front and backend development environment and basic proficiency in server side JavaScript and object-oriented programming. By the end of the course you will be able to architect an application, control flow in an application and persist and retrieve data in a database."
        },
        {
            "name": "Website Deployment",
            "price": "1200",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how to manage and deploy code to a server environment so that you can host your own web pages."
        },
        {
            "name": "Innovation Challenge",
            "price": "750",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Work in groups to design an innovative solution to a social issue by using the design thinking process."
        },
        {
            "name": "CodeStorm",
            "price": "1500",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Work in groups to create and present a code project that addresses a particular issue. "
        },
        {
            "name": "Hackathon",
            "price": "TBC",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how to manage and deploy code to a server environment so that you can host your own web pages."
        },
        {
            "name": "Industry Immersion",
            "price": "1500",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Spend a week at a tech company and gain experience in industry."
        },
        {
            "name": "Code Conversation",
            "price": "300",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn about tech careers from a panel of working professionals who will share their experiences with you."
        },
        {
            "name": "Presentation Skills",
            "price": "300",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how to present an idea or project in a compelling manner. "
        },
        {
            "name": "CV & LinkedIn",
            "price": "300",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how to present your skills effectively. "
        },
        {
            "name": "Networking",
            "price": "300",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how to present yourself professionally when networking and put your skills to the test by attending local tech events. You will attend a training session and attend one event of your choice. "
        },
        {
            "name": "Digital Communication Skills",
            "price": "300",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Learn how to communicate and collaborate in a 21st century work environment using digital workplace tools.  "
        },
        {
            "name": "Applying to Tertiary Studies",
            "price": "300",
            "img": "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
            "desc": "Make informed decisions about your future studies.  "
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
