<script>
export default {
    data() {
        return {
            message: "Hi there!",
        };
    },
    methods: {
        changeMessage() {
            this.message = "Hello everyone! How are you today?";
        },
    },
};
</script>
<template>
    <div class="row">
        <div class="col-md-6">
            {{ message }}
        </div>
        <button class="btn btn-info col-md-6" @click="changeMessage()">Change Message</button>
    </div>
</template>
<style></style>
