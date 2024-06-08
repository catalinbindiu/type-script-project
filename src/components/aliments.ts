 
import Aliment from "../models/aliment.js";


class Aliments{

private products : Aliment[] =[];
private alimentscontainer:HTMLElement;

private selectListe: HTMLElement;

constructor (cssSelector:string){
    this.alimentscontainer = document.querySelector(cssSelector) as HTMLElement;
    this.selectListe = document.querySelector('select') as HTMLElement;
    this.products.push(new Aliment('potato', 'vegetable'));
    this.products.push(new Aliment('carot','vegetable'));
    this.products.push(new Aliment('strawberry', 'fruit'));
    this.products.push(new Aliment('kiwi', 'fruit'));
 

    this.productsShow();

   this.selectListe.addEventListener("input", (e:Event)=>{
    const choose = (e. target as HTMLSelectElement).value;
    const rankedAliments = this.products.filter
   ((product) => product.type === choose);
     this.alimentscontainer.innerText = "";
  
     for( const product of rankedAliments){
        this.alimentscontainer.innerText += `${product.name} - ${product.type}\n`;
     }


    
})
    

}

private productsShow = (): void => {
   for (const product of this.products) {
       this.alimentscontainer.innerText += `${product.name} - ${product.type}\n`;
   }
} 


}

export default Aliments;

