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
  private _name:string ;
  private _type:string ;

  constructor(name:string, type:string){
      this._name = name;
      this._type = type;
  }
  
  public get name():string  {
      return  this._name;
  }

  
  public set name(value : string) {
      this._name = value;
  }

  public get type():string {
      return  this._type;
  }

  
  public set type(value : string) {
      this._type = value;
  }
  
  
}

 
 export default Aliment;

  
