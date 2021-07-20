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
            .then(this.$router.push('success'))
            .catch(err => console.log(`Error: ${err}`))
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

<style lang="scss" scoped>

.contact-container {
        & > div {
            margin-top: 8vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            & > div {
                align-self: center;
                margin: -3em 0 1em;
            }
            form {
                align-self: center;
                display: flex;
                flex-direction: column;
                width: 45%;

                & > input, & > textarea {
                    font-family: 'Montserrat', sans-serif;
                    margin-bottom: 1rem;
                    font-size: 1em;
                    outline: none;
                    border-top-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    border: none;
                    background: rgba($darkmode-bg-color, 0.85);
                    border: 1px solid $lightmode-bg-color;
                    color: white;
                    padding: 0.5rem;

                    &::placeholder {
                        color: white;
                    }
                }

                button {
                    width: 100px;
                    margin: 1rem auto 0;
                    background: rgba($darkmode-bg-color, 0.85);
                    padding: 0.5rem;
                    border: 1px solid white;
                    color: white;
                    border-radius: 10px;
                    cursor: pointer;

                    &:hover, &:focus {
                        box-shadow: 0 0 3px 3px rgba(255,255,255,0.4);
                    }
                }

                textarea {
                    resize: none;
                }
            }
        }
    }

@media screen and (max-width: 750px) {
    .contact-container {
        & > div {
            & > div {
                width: 80%;
                align-self: center;
                margin-bottom: 2rem;
            }
            form {
                width: 80%;
                align-self: center;
            }
        }
    }
}
</style>