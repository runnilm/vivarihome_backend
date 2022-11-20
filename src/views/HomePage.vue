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
                <div class="child-data center">
                    <h4> 
                        Hot side: xx°F
                    </h4>
                    <h4>
                        Cold side: xx°F
                    </h4>
                </div>
            </div>
            <div class="child-section right">
                <div class="child-header">
                    <h3 class="noselect">
                        Humidity
                    </h3>
                </div>
                <div class="child-data center">
                    <h4>
                        Current: xx%
                    </h4>
                    <h4>
                        Goal: xx%
                    </h4>
                </div>
            </div>
            <div class="child-section left">
                <div class="child-header">
                    <h3 class="noselect">
                        Mister Level
                    </h3>
                </div>
                <div class="child-data center">
                    <h4>
                        xx%
                    </h4>
                </div>
            </div>
            <div class="child-section right">
                <div class="child-header">
                    <h3 class="noselect">
                        Security
                    </h3>
                </div>
                <div class="child-data center">
                    <h4>
                        Doors are both closed.
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