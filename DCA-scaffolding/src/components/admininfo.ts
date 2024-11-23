import { dispatch } from '../store';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';
import { getInfo } from '../services/firebase';

// Objeto base para almacenar los datos del formulario antes de enviarlos

const addpr = {
    createaventt: '',
    deleteevent: '',
    id: '',
    title:'',
    date:'',
    location:'',
    image:'',
    attendees: '',
   
}

// Definición de un componente personalizado de tipo `HTMLElement`

class eventForm extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    crrrreate(e: any)  {
        addpr.createaventt = e.target.value;
    }

    deeelete(e: any)  {
        addpr.deleteevent = e.target.value;
    }
 
    
// Método para manejar el envío del formulario

    submitForm()  {
        getInfo();
        alert('Evento Creado')
        dispatch(navigate(Screens.USERR))
    }

    // Método para renderizar el contenido del componente
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                    
                      <input type="number" id="createavent" placeholder="create Event" >
                    <button id="delete" type="submit">eventForm Product</button>
                </div>
            `;

            

                const songAlbum = this.shadowRoot?.querySelector("#createavent") as HTMLInputElement;
                songAlbum.addEventListener('change', this.crrrreate);

                const songDuration = this.shadowRoot?.querySelector("#delete") as HTMLInputElement;
                songDuration.addEventListener('change', this.deeelete);

                
        }
        
    }
}


customElements.define("event-form", eventForm);


export default eventForm;