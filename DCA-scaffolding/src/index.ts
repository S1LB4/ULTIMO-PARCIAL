import "./components/export"
import { dispatch } from "./store";
import { getRecetas } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getRecetas())
        this.render()
    }
    render() {
        const form = this.ownerDocument.createElement('app-form');
        
        const pList = this.ownerDocument.createElement('productlist');
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(pList);
    }
}

customElements.define('app-container', AppContainer)