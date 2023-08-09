<template>
    <main class="HomePage">
        <div class="clear">
            <h1 class="noselect h1Small">
                Vivari
                <span class="noselect h1Small home1">H</span>
                <span class="noselect h1Small home2">o</span>
                <span class="noselect h1Small home1">m</span>
                <span class="noselect h1Small home2">e</span>
            </h1>
        </div>
        <div class="parent">
            <div class="child-section left">
                <div class="child-header">
                    <h3 class="noselect">
                        Temperature
                    </h3>
                </div>
                <div id='temps' class="child-data center">
                    <h4 class="noselect">
                        Basking spot: {{this.tempBasking}}°F
                    </h4>
                    <h4 class="noselect"> 
                        Hot side: {{this.tempHot}}°F
                    </h4>
                    <h4 class="noselect">
                        Cold side: {{this.tempCool}}°F
                    </h4>
                </div>
            </div>
            <div class="child-section right">
                <div class="child-header">
                    <h3 class="noselect">
                        Humidity
                    </h3>
                </div>
                <div id='humidity' class="child-data center">
                    <h4 class="noselect">
                        Current: {{this.humidity}}%
                    </h4>
                </div>
            </div>
            <div class="child-section left">
                <div class="child-header">
                    <h3 class="noselect">
                        Mister Level
                    </h3>
                </div>
                <div id='mistLevel' class="child-data center">
                    <h4 class="noselect">
                        {{this.mistPercent}}%
                    </h4>
                </div>
            </div>
            <div class="child-section right">
                <div class="child-header">
                    <h3 class="noselect">
                        Security
                    </h3>
                </div>
                <div id='doorsOpen' class="child-data center">
                    <h4 class="noselect" v-if="this.doorsOpen">
                        Doors are open.
                    </h4>
                    <h4 class="noselect" v-if="!this.doorsOpen">
                        Doors are closed.
                    </h4>
                </div>
            </div>
        </div>
        <!-- <div class="brLiz">
            <img class="lizardCham" v-bind:src="require('../assets/images/lizard1.png')">
            <img class="leafGreen" v-bind:src="require('../assets/images/leaf1.png')">
            <img class="leafPink" v-bind:src="require('../assets/images/leaf2.png')">
        </div> -->
    </main>
</template>

<script>
import io from 'socket.io-client';
//import SocketioService from '/home/vivarihome/vivarihome/src/services/socketio.service.js';

export default {
    name: 'HomePage',
    data() {
        return {
            socket: {},
            tempCool: 0,
            tempBasking: 0,
            tempHot: 0,
            humidity: 0,
            mistPercent: 0,
            doorsOpen: false,
            interval: null
        }
    },
    created() {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
        this.interval = setInterval(this.refreshData, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    mounted() {
        this.refreshData();
    },
    methods: {
        refreshData() {
            this.socket.emit('refreshData');
            this.socket.on("temp3", data => {
                this.tempCool = data;
                console.log("Cool side: " + data);
            });
            this.socket.on('temp4', data => {
                this.tempBasking = data;
                console.log("Basking spot: " + data);
            });
            this.socket.on('temp5', data => {
                this.tempHot = data;
                console.log("Hot side: " + data);
            });
            this.socket.on('dhtHum', data => {
                this.humidity = data;
                console.log("Humidity: " + data);
            });
            this.socket.on('mistPercent', data => {
                this.mistPercent = data;
                console.log("Misting reservoir: " + data);
            });
            this.socket.on('doorsOpen', data => {
                this.doorsOpen = data;
                if (data) {
                    console.log("The doors are open.");
                } else {
                    console.log("The doors are closed.");
                }
            });
            console.log("data refreshed");
            this.socket.emit('refreshed');
        }
    }
}

const getFontSize = (textLength) => {
    const baseSize = 9
    if (textLength >= baseSize) {
        textLength = baseSize - 2
    }
    const fontSize = baseSize - textLength
    return `${fontSize}vw`
}

const boxes = document.querySelectorAll('.main h1')
  
boxes.forEach(box => {
  box.style.fontSize = getFontSize(box.textContent.length)
})

</script>


<style lang="scss" scoped>
main {
    margin-left: calc(1rem);
}

@media (max-width: 768px) {
    main {
        margin-left: 0;
    }
}

.home1 {
    font-family: 'Barriecito', cursive;
    font-size: 15vh;
    color: var(--greenLight);
    text-transform: uppercase;
    border: none;
    padding: 0;
    text-align: center;
}

.home2 {
    font-family: 'Barriecito', cursive;
    font-size: 15vh;
    color: var(--greenDark);
    text-transform: uppercase;
    border: none;
    padding: 0;
    text-align: center;
}

.brLiz {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 500px;
    width: 500px;
}

.brLiz img {
    transform: scaleX(-1);
    z-index: -99;
}

.leafGreen {
    transition: 0.2s ease-out;
    position: absolute;
    display: flex;
    height: auto;
    transform: scale(50%) scaleX(-1);
    right: 0px;
    bottom: 0px;
    z-index: -98;
}

.leafPink {
    transition: 0.2s ease-out;
    position: absolute;
    display: flex;
    height: auto;
    transform: scale(50%) scaleX(-1);
    right: -150px;
    bottom: -75px;
    z-index: -97;
}

.parent {
    display: table;
    table-layout: fixed;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.child-section {
    display: inline-block;
    margin: 1em;
    border-style:outset;
    border-radius: 1em;
    border-color: var(--greenLight);
    background: var(--greenDark);
    width: 40%;
    vertical-align: top;
}

.left {
    margin-right: 2em;
}

.right {
    margin-left: 2em;
}

.child-header {
    text-align: center;
}

.child-data {
    text-align: left;
    margin: 2rem;
}

.center {
    text-align: center;
}

@media (max-width: 768px) {
    h3 {
        font-size: 9vw;
    }

    h4 {
        font-size: 5vw;
    }

    .h1Small {
        font-size: 20vw;
    }

    .h1Medium {
        font-size: 19vw;
    }

    .h1Large {
        font-size: 16vw;
    }

    .left {
        margin: 0em;
    }

    .right {
        margin: 0em;
    }

    .parent {
        margin-top: 2em;
    }

    .child-section {
        margin-bottom: 2em;
        width: 80%;
    }
}

</style>