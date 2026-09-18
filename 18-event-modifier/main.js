const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')
        const email = Vue.ref('')

        function handleSubmit(event)
        {
            event.preventDefault()
            console.log(`Name: ${name.value}, Email: ${email.value}`)
        }
        return { name,email, handleSubmit

         }
    }
})

app.mount("#appdiv")