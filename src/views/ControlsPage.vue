<template>
    <main class="ControlsPage">
        <h1 class="noselect h1Large">Controls</h1>
        <div class="button-parent">
            <div class="button-child">
                <h3 class="noselect">Toggle UV</h3>
                <button class="noselect" @click="uvButton()">Toggle UV</button>
            </div>
            <div class="button-child">
                <h3 class="noselect">Toggle Mister</h3>
                <button class="noselect" @click="misterButton()">Toggle Mister</button>
            </div>
            <div class="button-child">
                <h3 class="noselect">Toggle Basking</h3>
                <button class="noselect" @click="baskingButton()">Toggle Basking</button>
            </div>
            <div class="button-child">
                <h3 class="noselect">Toggle CHE</h3>
                <button class="noselect" @click="cheButton()">Toggle CHE</button>
            </div>
            <div class="button-child">
                <h3 class="noselect">Toggle LED</h3>
                <button class="noselect" @click="ledButton()">Toggle LED</button>
            </div>
        </div>
    </main>
</template>

<script>
import io from 'socket.io-client';
import SocketioService from '/home/vivarihome/vivarihome/src/services/socketio.service.js';

export default {
    name: 'ControlsPage',
    data() {
        return {
            socket: {},
            uvState: false,
            misterState: false,
            baskingState: false,
            cheState: false,
            ledState: false,
            interval: null
        }
    },
    created() {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
        this.interval = setInterval(this.refreshStates, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    mounted() {
        this.refreshStates();
    },
    methods: {
        uvButton() {
            SocketioService.toggleUV();
        },
        misterButton() {
            SocketioService.toggleMister();
        },
        baskingButton() {
            SocketioService.toggleBasking();
        },
        cheButton() {
            SocketioService.toggleCHE();
        },
        ledButton() {
            SocketioService.toggleLED();
        },
        refreshStates() {
            this.socket.on("uvValue", data => {
                this.uvState = data;
                console.log("UV on? " + data);
            });
            this.socket.on('misterValue', data => {
                this.misterState = data;
                console.log("Mister on? " + data);
            });
            this.socket.on('baskingValue', data => {
                this.baskingState = data;
                console.log("Basking on? " + data);
            });
            this.socket.on('cheValue', data => {
                this.cheState = data;
                console.log("CHE on? " + data);
            });
            this.socket.on('ledValue', data => {
                this.ledState = data;
                console.log("LED on? " + data);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

.button-parent {
    display: table;
    table-layout: fixed;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.button-child {
    display: inline-block;
    margin: 1em;
    width: 40%;
    vertical-align: top;
}

</style>