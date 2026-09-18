<<<<<<< HEAD
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
=======
const app = Vue.createApp({
    setup() {
        const counter = Vue.ref(0)

        function increaseCounter() {
            counter.value++
>>>>>>> 7843167e6920dc9e8acaba2be52557cbb36fdf81
        }

        function decreaseCounter() {
            counter.value--
<<<<<<< HEAD
            console.log(counter.value)
        }

        return { 
            counter, 
            increaseCounter, 
            decreaseCounter}
=======
        }

        return { counter, increaseCounter, decreaseCounter }
>>>>>>> 7843167e6920dc9e8acaba2be52557cbb36fdf81
    }
})

app.mount("#appdiv")