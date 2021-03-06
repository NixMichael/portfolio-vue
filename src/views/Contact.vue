<template>
    <div id='contact' class='contact-container container'>
        <div>
            <div class='text-content'>
                <h1><span class='title-font highlight-color'>Get in touch...</span></h1>
                <p class='first-para'>
                    Got a question or interested in collaborating? I'd love to hear from you!
                </p>
            </div>
            <form name='web-message' method='POST' data-netlify='true' data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="web-message" />
                <input type='text' name='name' placeholder='Your name'/>
                <input type='text' name='address' placeholder='Your email address'/>
                <textarea name='message' placeholder='Type your message here...' rows='6'></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        window.scrollTo(0,0)
    }
}
</script>