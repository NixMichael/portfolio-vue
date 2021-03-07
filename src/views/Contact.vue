<template>
    <div id='contact' class='contact-container container'>
        <div>
            <div class='text-content'>
                <h1><span class='title-font highlight-color'>Get in touch...</span></h1>
                <p class='first-para'>
                    Got a question or interested in collaborating? I'd love to hear from you!
                </p>
            </div>
            <form @submit.prevent='handleSubmit' name='web-message' method='POST' data-netlify='true' data-netlify-honeypot="bot-field">
                <input type='hidden' name='form-name' value='web-message'/>
                <input type='text' name='name' placeholder='Your name' v-model='form.name'/>
                <input type='text' name='address' placeholder='Your email address' v-model='form.address'/>
                <textarea name='message' placeholder='Type your message here...' v-model='form.message' rows='6'></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            form: {
                name: '',
                address: '',
                message: ''
            }
        }
    },
    methods: {
        encode (data) {
        return Object.keys(data)
            .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join("&");
        },
        handleSubmit () {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            }
            axios.post(
                "/",
                this.encode({
                "form-name": "web-message",
                ...this.form
                }),
                axiosConfig
            )
            .then(response => console.log(`submitted: ${response}`))
            .catch(console.log('oops'))
        }
    },
    mounted () {
        window.scrollTo(0,0)
        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 50)
    }
}
</script>