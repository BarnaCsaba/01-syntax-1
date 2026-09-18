const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')
        const formData= Vue.reactive({ name: '', email: '' })
        const email = Vue.ref('')

        function handleSubmit(event)
        {
            event.preventDefault()
            console.log(`Name: ${formData.name}, Email: ${formData.email}`)
        }
        return { name, email, handleSubmit, formData }

})

app.mount("#appdiv")