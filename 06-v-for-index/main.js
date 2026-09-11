const app = Vue.createApp({
    setup() {
        const frameworks = [
            {name: "Vue.js"},
            {name: "React"},
            {name: "Angular"}
        ]
        return { frameworks }
    }
})

app.mount("#appdiv")