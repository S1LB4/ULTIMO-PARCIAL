import { dispatch } from "../../store";
import { saveReceta } from "../../store/actions";
import { Receta } from "../../types/receta";

const receraInp: Receta = {
    name: "",
    ingredientes: "",
    instrucciones: "",
}

export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const receta = this.ownerDocument.createElement('label');
        receta.textContent = "Nombre de la receta";
        const recet = this.ownerDocument.createElement('input');
        recet.addEventListener("change", (e: any) =>{
            console.log(e.target.value);
            receraInp.name = e.target.value;
        });
        const ingredientes = this.ownerDocument.createElement('label');
        ingredientes.textContent = "Ingredientes";
        const ingredient = this.ownerDocument.createElement('input');
        recet.addEventListener("change", (e: any) =>{
            console.log(e.target.value);
            receraInp.ingredientes = e.target.value;
        });
        const instrucciones = this.ownerDocument.createElement('label');
        instrucciones.textContent = "instrucciones";
        const instrucc = this.ownerDocument.createElement('input');
        recet.addEventListener("change", (e: any) =>{
            console.log(e.target.value);
            receraInp.instrucciones = e.target.value;
        });
      
        const btn = this.ownerDocument.createElement("button")
        btn.textContent = "GUARDAR"
        btn.addEventListener("click", async () => {
            console.log(receraInp);
            dispatch(await saveReceta(receraInp));
        });

        this.shadowRoot?.appendChild(receta);
        this.shadowRoot?.appendChild(recet);
        this.shadowRoot?.appendChild(ingredientes);
        this.shadowRoot?.appendChild(ingredient);
        this.shadowRoot?.appendChild(instrucciones);
        this.shadowRoot?.appendChild(instrucc);
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-form', Form);
export default Form;