import { dispatch } from '../store';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';
import { getInfo } from '../services/firebase';

// Objeto base para almacenar los datos del formulario antes de enviarlos

const things = {
  
	img: '',
    title: '',
    dateandtime: '',
    location: '',
    asistentes: '',

 

}



class eventCard extends HTMLElement {
   
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
                <div>
                    
                
                <p class="img">${this.img}</p>
                <p class="tit">${this.title}</p>
                <p class="dateandtime">${this.dateandtime}</p>
                <p class="location">${this.location}</p>
                <p class="assistentes">${this.asistentes}</p>

                
    
    
                    <button id="register" type="submit">registerAsAsisstent</button>
                </div>
            `;

        
            });

               

                
        }
        
    }


customElements.define("event-card", eventCard);


export default eventCard;