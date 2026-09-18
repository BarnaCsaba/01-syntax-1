const app = Vue.createApp({
    setup() {
<<<<<<< HEAD
        const name = Vue.ref('')

        return { name,
         }
=======
        const name = Vue.ref("")

        function updateName(event) {
            name.value = event.target.value
        }

        return { name, updateName }
>>>>>>> 7843167e6920dc9e8acaba2be52557cbb36fdf81
    }
})

app.mount("#appdiv")