class Aliment {
    _fruits;
    _legumes;
    _container;
    products = [{
            product: "pomme",
            type: "fruit",
        },
        {
            product: "potato",
            type: "vegetable",
        },
        {
            product: "carot",
            type: "vegetable"
        },
        {
            product: "strawberry",
            type: "fruit",
        }
    ];
    constructor(fruit, legume, div) {
        this._fruits = document.querySelector(fruit);
        this._legumes = document.querySelector(legume);
        this._container = document.querySelector(div);
        this.changerElements();
    }
    changerElements() {
        const elements = this.products.map(product => {
            return product.type === this._fruits.innerText ? `<li>${product.product}</li> <li>${product.type}</li>` : console.log(".fruit");
        });
        return this._fruits.addEventListener("click", (e) => {
            this._container.innerHTML = `<ul>${elements}</ul>`;
            console.log(this._container.innerText);
        });
    }
}
export default Aliment;
