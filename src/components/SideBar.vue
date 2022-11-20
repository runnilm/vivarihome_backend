<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/images/reptile.png" alt="Reptile">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3 class="noselect">Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/monitor">
                <span class="material-icons">thermostat</span>
                <span class="text">Monitor</span>
            </router-link>
            <router-link class="button" to="/events">
                <span class="material-icons">event</span>
                <span class="text">Events</span>
            </router-link>
            <router-link class="button" to="/controls">
                <span class="material-icons">tune</span>
                <span class="text">Controls</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    // position: absolute;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 1rem;

    background-color: var(--greenDark);
    color: var(--greenLight);

    transition: 0.2s ease-out;

    .flex {
        flex: 1 1 0;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2 ease-out;

            .material-icons {
                font-size: 2rem;
                color: white;
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--magentaLight);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        font-family: 'Barriecito', cursive;
        font-size: 2rem;
        color: var(--bgColor);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: white;
                transition: 0.2s ease-out;
            }

            .text {
                color: white;
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--bgColor);
                min-width: 101%;

                .material-icons, .text {
                    color: var(--magentaDark);
                }
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3.5rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}

@media (max-width: 768px) {
    aside {
        min-height: 100%;
    }
}

</style>