const app = Vue.createApp({
    setup() {
        // const src_ = "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        // const alt_ = "Vue.js logo"
        // const width_ = 200

        const logoObject = { 
            src : "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            alt : "Vue.js logo",
            width : 200
        }

        // return { src_, alt_, width_ }
        return { logoObject }

    }
})

app.mount("#appdiv")