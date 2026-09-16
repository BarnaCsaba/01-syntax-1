const app = Vue.createApp({
    setup() {
        const name = Vue.ref("")

        function updateName(event) {
            name.value = event.target.value
        }

        return { name, updateName }
    }
})

app.mount("#appdiv")