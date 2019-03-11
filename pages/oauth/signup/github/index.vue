<template>
    <h1>Hi</h1>
</template>

<script>
    export default {
        async asyncData({store, query}) {
            return store.dispatch("getGitHubToken", {code: query.code, state: query.state})
        }
    }
</script>

<style scoped>

</style>
