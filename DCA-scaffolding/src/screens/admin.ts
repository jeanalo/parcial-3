import '../components/banner'

class adminScreen extends HTMLElement {
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    async render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <banner-commponent></banner-commponent>
            <event-form></event-form>
        `;

        }
        
    }

}

customElements.define('app-admin', adminScreen);