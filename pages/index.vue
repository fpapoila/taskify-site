<template>
    <header class="hero is-fullheight is-primary">
        <div class="hero-head">
            <nav class="navbar">
                <div class="navbar-brand">
                    <div class="navbar-item has-text-weight-bold is-size-4">
                        Taskify
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body has-text-centered">
            <div class="container">
                <div class="title">
                    Taskify Your Works
                </div>
                <div class="subtitle has-text-white-ter">
                    Create a project, organize your tasks into a Kanban board, integrate them with GitHub issues
                </div>
                <button class="button is-warning is-medium">
                    <span class="icon">
                        <font-awesome-icon :icon="icons.github"></font-awesome-icon>
                    </span>
                    <span>Sign up with GitHub</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    import {faGithub} from "@fortawesome/free-brands-svg-icons"

    export default {
        head() {
            return {
                title: "Home"
            }
        },
        data() {
            return {
                icons: {
                    github: faGithub,
                }
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
