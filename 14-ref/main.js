const {createApp, ref} = Vue

// const app = Vue.createApp({
const app = createApp({
    setup() {
        // let counter = 0
        // let counter = Vue.ref(0)
        const counter = ref(0)

        function increaseCounter() {
            counter.value++
            console.log(counter.value)
        }

        function decreaseCounter() {
            counter.value--
            console.log(counter.value)
        }

        return { 
            counter, 
            increaseCounter, 
            decreaseCounter}
    }
})

app.mount("#appdiv")