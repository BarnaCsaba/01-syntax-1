const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')
        const formData= Vue.reactive({ name: '', email: '' })
        const email = Vue.ref('')

        function handleSubmit(event)
        {
            console.log(formData)
            document.getElementById('userForm').reset()
           
            console.log(`Name: ${formData.name}, Email: ${formData.email}`)
        }
        return {  handleSubmit, formData }

})

app.mount("#appdiv")