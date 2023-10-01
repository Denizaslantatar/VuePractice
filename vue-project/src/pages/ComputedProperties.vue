<script>
export default {
    data() {
        return {
            basePrice: 100, // Original Price
            discount: 20, // Discount Percentage
            products: [], // An Array of products
        };
    },
    computed: {
        productName() {
            return "Mouse"; // Product Name is here Static
        },
        productPrice() {
            return this.basePrice; // Original Price
        },
        discountedPrice() {
            // Computed property that calculates the discounted price
            return this.basePrice - (this.basePrice * this.discount) / 100;
        },
        productCount() {
            // Computed property that calculates the number of products
            return this.products.length;
        },
    },
    methods: {
        addProduct() {
            // Adds a new product and the computed property is automatically updated.
            this.products.push({name: "New Product"});
        },
    },
};
</script>
<template>
    <!-------------Calculation of Computed Property----------------->
    <div class="row align-content-start">
        <p>Product Name: {{ productName }}</p>
        <p>Product Price: {{ productPrice }} $</p>
        <p>Discounted Price: {{ discountedPrice }} $</p>
    </div>
    <!----------------Dynamic Updates Computed Property-------------->
    <div class="row">
        <p class="col-md-6">Total Product Count: {{ productCount }}</p>
        <button class="btn btn-info col-md-6" @click="addProduct">Add Product</button>
    </div>
</template>

<style lang="scss" scoped></style>
