//inheriTANCE
let food={
    veg:true
}

let fruit=Object.create(food)
fruit.taste="sweet"

let Mango=Object.create(fruit)
Mango.color="yellow"

console.log(Mango)      //only color is displayed
console.log(fruit)      //only taste is displayed  
console.log(food)       //only veg is displayed
console.log(Mango.color)
console.log(Mango.veg)   
//shows true. takes property of previous obj.
//first check his property,if found ok else finds in its proto(bigger obj)
//if found there it returns it
console.log(Mango.veg)
console.log(Mango.veg)
console.log(typeof Mango)
Mango.taste="sour"
//creates taste in its own property . makes a copy
console.log(Mango.taste)
console.log(Mango)   //property created of taste
console.log(fruit.taste)
console.log(Mango.__proto__)  //proto is propreties of inhereted class
//error Mango.prototype.size="large"

// on window-console
// food.__proto__===Object.prototype
// true
// fruit.__proto__===food.prototype
// false
// fruit.__proto__===Object.prototype
// false
// fruit.__proto__===fruit.prototype
// false
// fruit.__proto__===fruit.prototype
// false
// fruit.__proto__
// {veg: true}
// Mango.__proto__
// {taste: "sweet"}
// Mango.Prototype
// undefined
// Number.prototype
// Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
// Number.__proto__
// ƒ () { [native code] }









