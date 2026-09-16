const app = Vue.createApp({
    setup() {
        const guitars = [
            {id: 1, name: "Fender Stratocaster", stock: 0},
            {id: 2, name: "Gibson Les Paul", stock: 3},
            {id: 3, name: "Ibanez RG", stock: 5},
            {id: 4, name: "ESP Eclipse", stock: 0},
            {id: 5, name: "PRS Custom 24", stock: 2}
        ]
        const outofstock = {color:"red", fontSize: "1.25rem"}
        const onlyfewleft = {color:"orange", fontSize: "1.5rem"}

        const instock = {color:"lightgreen", fontSize:"1rem"}
        return { guitars, outofstock, onlyfewleft, instock}
    }
})

app.mount("#appdiv")