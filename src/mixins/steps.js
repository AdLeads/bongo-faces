export default {
    methods: {
        next() {
            this.$emit("valid", true);
        },
        back() {
            this.$emit("valid", false);
        },
    }
}