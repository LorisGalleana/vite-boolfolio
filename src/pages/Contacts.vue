<script>
import axios from 'axios';
import { store } from '../store/store';
import Loader from '../components/partials/Loader.vue';

    export default {
        name: 'Contacts',
        components:{
            Loader
        },
        data(){
            return{
                name: '',
                email: '',
                message: '',
                errors:{
                    name:[],
                    email:[],
                    message:[]
                },
                sending: false,
                sent: false,
                isError: false,
                errorMessage: ''
            }
        },
        methods:{
            sendForm(){
                this.sending = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                //chiamo con axios l'API di invio email
                axios.post(store.apiUrl + 'send-email', data)
                    .then(res => {
                        this.sending = false;
                        if(!res.data.success){
                            this.errors = res.data.errors;
                        }
                        else{
                            this.sent = true;
                            this.errors = {
                                name:[],
                                email:[],
                                message:[]
                            }
                        }

                    })
                    .catch( er => {
                        this.sending = false;
                        this.errorMessage = er.message;
                        this.isError = true;
                    })
            },
            resetError(){
                this.errorMessage = '',
                this.isError = false;
            }
        }
    }
</script>


<template>
  <h1>Contatti</h1>
  <div v-if="!sending && !isError">
    <form action="#" @onsubmit.prevent="sendForm" v-if="!sent">
        <div>
            <label for="name">Nome</label>
            <input type="text" id="name" placeholder="Nome" v-model="name">
            <p class="error">{{ errors.name?.toString() }}</p>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email" v-model="email">
            <p class="error">{{ errors.email?.toString() }}</p>
        </div>
        <div>
            <label for="message">Messaggio</label>
            <textarea name="" id="message" rows="10" placeholder="Messaggio" v-model="message"></textarea>
            <p class="error">{{ errors.message?.toString() }}</p>
        </div>
        <button type="submit">Invia</button>
        <button type="reset">Annulla</button>
    </form>
    <h2 v-else>Messaggio inviato correttamente</h2>
  </div>
  <Loader v-else-if="!isError" />
  <div v-if="isError">
    <h2>{{ errorMessage }}</h2>
    <button @click="resetError">Riprova</button>
  </div>
</template>

<style lang="scss" scoped>
label{
    display: block;
    margin-bottom: 5px;
    margin-top: 10px;
}

input, textarea{
    width: 80%;
    border-radius: 5px;
    padding: 10px;
}
.error{
    color: red;
    font-size: .9rem;
    margin: 0;
}
</style>