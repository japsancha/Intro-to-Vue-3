const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            onSale: false,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariasnt: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariasnt = index
        }
    },
    computed: {
        title() {
            let onSale = ""
            if (this.onSale) {
                onSale = "is on sale"
            }
            return this.brand + ' ' + this.product + ' ' + onSale
        },
        image() {
            return this.variants[this.selectedVariasnt].image
        },
        inStock() {
            return this.variants[this.selectedVariasnt].quantity
        }

    }
})
