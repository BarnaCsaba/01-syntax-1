const {createApp, ref} = Vue

// const app = Vue.createApp({
const app = createApp({
    setup() {
        // let counter = 0
        // let counter = Vue.ref(0)
        const price = ref(0)

        function increasePrice() {
            price.value++
            console.log(price.value)
        }

        function decreasePrice() {
            price.value--
            console.log(price.value)
        }

        function formatPrice() {
            return price.value.toLocaleString('en-US', { 
                style: 'currency',
                currency: 'EUR' })
        }


        return { 
            price, 
            formatPrice,
            increasePrice, 
            decreasePrice}
    }
})

app.mount("#appdiv")