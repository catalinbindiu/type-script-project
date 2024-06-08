// import { log } from "console";
// class Aliment {
//   fruit;
//   vegetable;
//   div;
//     products= [{
//      product:"pomme", 
//      type:"fruit",
//    },
//    {
//      product:"potato", 
//      type:"vegetable",
//    }, 
//    {
//      product:"carot", 
//      type:"vegetable"
//    },
//    {
//      product:"strawberry", 
//      type:"fruit",
//    }
//   ];
//     constructor(){
//       this.fruit = document.querySelector(".fruit-option") as HTMLElement;
//       this.vegetable = document.querySelector(".legume-option") as HTMLElement;
//       this.div = document.querySelector("#aliments-container") as HTMLElement;
//       this.changer();
//     }
//   changer() {
//     const   test =  this.fruit.addEventListener("click", e =>{
//     const  arr = this.products.map(product => {
//         let text = "";
//         if(product.type === this.fruit.innerHTML) {
//       text  = `<ul> <li>${ product.product + product.type}</li></ul>`;
//       return text;
//         }
//         this.div.innerHTML = text;
//         console.log(text);
//       })
//        return arr;
//     }
//     )
//     return test;
//   }
// }
class Aliment {
    _name;
    _type;
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
export default Aliment;
