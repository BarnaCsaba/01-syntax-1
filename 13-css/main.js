const app = Vue.createApp({
    setup() {
        const guitars = [
            {id: 1, name: "Fender Stratocaster", stock: 0},
            {id: 2, name: "Gibson Les Paul", stock: 3},
            {id: 3, name: "Ibanez RG", stock: 5},
            {id: 4, name: "ESP Eclipse", stock: 0},
            {id: 5, name: "PRS Custom 24", stock: 2}
        ]
<<<<<<< HEAD

        return { guitars}
        }
    }
)
=======
        
        return { guitars, outofstock, onlyfewleft, instock}
    }
})
>>>>>>> 7843167e6920dc9e8acaba2be52557cbb36fdf81

app.mount("#appdiv")