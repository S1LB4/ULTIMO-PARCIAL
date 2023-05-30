import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
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