import '../components/nav/nav'
import '../components/add/add'
class UserScreen extends HTMLElement {
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
            <event-card></event-card>
        `;

        }
        
    }

}

customElements.define('app-user', UserScreen);