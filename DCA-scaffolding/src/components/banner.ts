import { dispatch } from '../store/index'
import { Screens } from '../types/store';
import { navigate } from '../store/actions';



class Banner extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
              
                    <h1>EVENTOS CULTURALES</h1>
                    <p id="admin">ADMIN ACCOUNT</p>
                    <p id="userr">USERR ACCOUNTt</p>
                    
              
          
            `;


            const home = this.shadowRoot?.querySelector('#admin')
            home?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.ADMIN)); 
            })


            const add = this.shadowRoot?.querySelector('#userr')
            add?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.USERR));  
            })

        }
        
    }
}

customElements.define("banner-commponent", Banner);
export default Banner;