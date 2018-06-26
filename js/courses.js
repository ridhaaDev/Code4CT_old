function Cart(object){
  this.name="Cart";
  this.price=0.00;

  this.calculateTotal=function(object){
    for (var key in value) {
    this.price+=value[key];
    console.log(this.price);
  }
}
}

let firstCourse={
  price:6000,
  price:5000
}

let firstTransaction=new Cart(firstCourse);
firstTransaction.calculateTotal();
//
// {
//   name:"ridhaa",
//   age:18,
//   price:5000
// }
