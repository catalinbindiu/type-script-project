import Aliment from "../models/aliment.js";
class Aliments {
    products = [];
    alimentscontainer;
    selectListe;
    constructor(cssSelector) {
        this.alimentscontainer = document.querySelector(cssSelector);
        this.selectListe = document.querySelector('select');
        this.products.push(new Aliment('potato', 'vegetable'));
        this.products.push(new Aliment('carot', 'vegetable'));
        this.products.push(new Aliment('strawberry', 'fruit'));
        this.products.push(new Aliment('kiwi', 'fruit'));
        this.productsShow();
        this.selectListe.addEventListener("input", (e) => {
            const choose = e.target.value;
            const rankedAliments = this.products.filter((product) => product.type === choose);
            this.alimentscontainer.innerText = "";
            for (const product of rankedAliments) {
                this.alimentscontainer.innerText += `${product.name} - ${product.type}\n`;
            }
        });
    }
    productsShow = () => {
        for (const product of this.products) {
            this.alimentscontainer.innerText += `${product.name} - ${product.type}\n`;
        }
    };
}
export default Aliments;
