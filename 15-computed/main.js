<<<<<<< HEAD
const {createApp, ref, computed} = Vue

// const app = Vue.createApp({
const app = createApp({
    setup() {
        // let counter = 0
        // let counter = Vue.ref(0)
        const price = ref(0)

        function increasePrice() {
            price.value++
            console.log(price.value)
=======
const app = Vue.createApp({
    setup() {
        const price = Vue.ref(0)

        

        function increasePrice() {
            price.value++
>>>>>>> 7843167e6920dc9e8acaba2be52557cbb36fdf81
        }

        function decreasePrice() {
            price.value--
<<<<<<< HEAD
            console.log(price.value)
        }

        // function formatPrice() {
        //     return price.value.toLocaleString('en-US', { 
        //         style: 'currency',
        //         currency: 'EUR' })
        // }

        const formattedPrice = computed(() => {
            return price.value.toLocaleString('en-US', { 
                style: 'currency',
                currency: 'EUR' })
        })

        return { 
            price, 
            formattedPrice,
            increasePrice, 
            decreasePrice}
=======
        }
        const formattedPrice = Vue.computed(() => {
            return price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
        })
        // return { price, increasePrice, decreasePrice }
    // return { price, increasePrice, decreasePrice, formattedPrice     
    
    return { price, increasePrice, decreasePrice, formattedPrice }
>>>>>>> 7843167e6920dc9e8acaba2be52557cbb36fdf81
    }
})

app.mount("#appdiv")