const app = Vue.createApp({
    setup() {
        const shopName = 'PixelBolt'
        const slogan = 'A te infós webshopod'
        const tooltip = 'PixelBolt — 2026/2027 tanév, Vue.js alapok'
        const welcomeHtml = '<strong>Üdvözöljük!</strong> Heti akció: minden SSD <em>20% kedvezménnyel</em>!'

        const logo = {
            src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
            alt: 'PixelBolt logó',
            width: 120
        }

        const kiemeltek = [
            { id: 1, name: 'Vezeték nélküli egér' },
            { id: 2, name: 'Mechanikus billentyűzet' },
            { id: 3, name: 'USB-C hub' }
        ]

        const polcok = [
            ['Egér', 'Billentyűzet', 'Headset'],
            ['Monitor', 'Webkamera', 'Mikrofon'],
            ['Pendrive', 'SSD', 'Memóriakártya']
        ]

        const termekek = [
            { id: 1, name: 'Logitech G305', keszlet: 0, ar: 14990, akcios: false },
            { id: 2, name: 'Keychron K2', keszlet: 2, ar: 42990, akcios: true },
            { id: 3, name: 'HyperX Cloud II', keszlet: 8, ar: 32990, akcios: false },
            { id: 4, name: 'Samsung T7 SSD', keszlet: 1, ar: 27990, akcios: true },
            { id: 5, name: 'Logitech C920', keszlet: 5, ar: 19990, akcios: false },
            { id: 6, name: 'Razer DeathAdder', keszlet: 0, ar: 18990, akcios: false }
        ]

        const elfogyottSzin = 'red'
        const utolsoDarabSzin = 'orange'
        const raktaronSzin = 'green'

        return {
            shopName,
            slogan,
            tooltip,
            welcomeHtml,
            logo,
            kiemeltek,
            polcok,
            termekek,
            elfogyottSzin,
            utolsoDarabSzin,
            raktaronSzin
        }
    }
})

app.mount('#app')
