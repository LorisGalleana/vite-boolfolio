<script>
import axios from 'axios';
import { store } from '../store/store';

    export default {
        name: 'Contacts',
        data(){
            return{
                name: '',
                email: '',
                message: '',
            }
        },
        methods:{
            sendForm(){
                
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                //chiamo con axios l'API di invio email
                axios.post(store.apiUrl + 'send-email', data)
                    .then(res => {

                    })
                    .catch( er => {

                    })
            }
        }
    }
</script>


<template>
  <h1>Contatti</h1>
  <form action="#" @onsubmit.prevent="sendForm">
    <div>
        <label for="name">Nome</label>
        <input type="text" id="name" placeholder="Nome" v-model="name">
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" v-model="email">
    </div>
    <div>
        <label for="message">Messaggio</label>
        <textarea name="" id="message" rows="10" placeholder="Messaggio" v-model="message"></textarea>
    </div>
    <button type="submit">Invia</button>
    <button type="reset">Annulla</button>
  </form>
</template>

<style lang="scss" scoped>
label{
    display: block;
    margin-bottom: 5px;
}

input, textarea{
    width: 80%;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
}
</style>