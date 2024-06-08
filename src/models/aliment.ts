import { log } from "console";

class Aliment{

private _fruits:HTMLElement;
private _legumes:HTMLElement;
private _container:HTMLElement;
private products= [{
     product:"pomme", 
     type:"fruit",
   },
   {
     product:"potato", 
     type:"vegetable",
   }, 

   {
     product:"carot", 
     type:"vegetable"

   },
   {
     product:"strawberry", 
     type:"fruit",

   }
  ];
    constructor(fruit:string, legume:string, div:string){
      this._fruits = document.querySelector(fruit) as HTMLElement;
      this._legumes = document.querySelector(legume) as HTMLElement;
      this._container = document.querySelector(div) as HTMLElement;

    this.changerElements();
    }

  

  changerElements(){
      const elements = this.products.map(product =>{
        return product.type ===this._fruits.innerText? `<li>${product.product}</li> <li>${product.type}</li>`:console.log(".fruit");
         
      })
    return this._fruits.addEventListener("click",(e:Event)=>{
     this._container.innerHTML = `<ul>${elements}</ul>`
     console.log(this._container.innerText);
    });
}


}

 export default Aliment;
 