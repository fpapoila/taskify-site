<template>
    <div>
        <div class="logo-background-container">
            <v-logo class="logo-background"></v-logo>
        </div>
        <header class="hero is-fullheight is-primary">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="navbar-brand">
                        <div class="navbar-item">
                            <v-logo class="icon is-medium logo"></v-logo>
                            <span class="has-text-weight-bold is-size-4">Taskify</span>
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
                    <button class="button is-warning is-medium" @click="signUpWithGithub">
                    <span class="icon">
                        <font-awesome-icon :icon="icons.github"></font-awesome-icon>
                    </span>
                        <span>Sign up with GitHub</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import {faGithub} from "@fortawesome/free-brands-svg-icons"
    import vLogo from '@/components/v-logo.vue'

    export default {
        head() {
            return {
                title: "Home"
            }
        },
        components: {
            vLogo
        },
        data() {
            return {
                icons: {
                    github: faGithub,
                }
            }
        },
        methods: {
            signUpWithGithub() {

            }
        },
    }
</script>

<style lang="scss">
    .title, .subtitle {
        text-shadow: .2rem .2rem 1.4rem rgba(30,30,30,.5) ;
    }

    .logo {
        margin: 5px;
    }

    .logo-background-container {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        overflow: hidden;

        .logo-background {
            @media screen and (max-width: 768px) {
                height: calc(120vh);
                top: -10vh;
                left: -35vw;
            }
            @media screen and (min-width: 769px) {
                height: calc(160vh);
                top: -30vh;
                left: -10vw;
            }
            position: relative;

            g {
                fill: hsla(0, 0%, 100%, 0.06);
            }
        }
    }
</style>
