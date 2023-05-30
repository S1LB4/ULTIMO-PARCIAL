import { appState } from "../../store";
class RecetaList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        appState.recetas.forEach(() => {
        const contenedor = this.ownerDocument.createElement('article');
        const receta = this.ownerDocument.createElement('h3');
        const ingredientes = this.ownerDocument.createElement('h3');
        const instrucciones = this.ownerDocument.createElement('h3');
        contenedor.appendChild(receta);
        contenedor.appendChild(ingredientes);
        contenedor.appendChild(instrucciones);
        this.shadowRoot?.appendChild(contenedor);
        });
    }
}

customElements.define('productlist', RecetaList);
export default RecetaList;