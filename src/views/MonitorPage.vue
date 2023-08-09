<template>
  <main class="MonitorPage">
      <h1 class="noselect h1Medium">Monitor</h1>
      <div class="parent">
              <div class="child-section">
                  <div class="random">
                      <trend-chart
                          :datasets="datasets"
                          :grid="grid"
                          :labels="labels"
                          :min="0"
                          padding="5"
                          :interactive="true"
                          @mouse-move="onMouseMove"
                          class="random-chart"
                          v-if="datasets.length"
                      ></trend-chart>
                      <div id="pop" role="tooltip" ref="tooltip" class="tooltip" :class="{'is-active': tooltipData}">
                      <div class="tooltip-container" v-if="tooltipData">
                          <strong>{{labels.xLabels[tooltipData.index]}}</strong>
                          <div class="tooltip-data">
                          <div class="tooltip-data-item tooltip-data-item--1">{{tooltipData.data[0]}}</div>
                          <div class="tooltip-data-item tooltip-data-item--2">{{tooltipData.data[1]}}</div>
                          <div class="tooltip-data-item tooltip-data-item--3">{{tooltipData.data[2]}}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import Popper from "popper.js";

export default {
  data() {
      return {
      datasets: [
          {
          data: [78, 81, 84, 80, 90, 87, 88],
          smooth: true,
          showPoints: true,
          fill: true,
          className: "curve1"
          },
          {
          data: [60, 65, 70, 65, 80, 75, 80],
          smooth: true,
          showPoints: true,
          className: "curve2"
          },
          {
          data: [96, 90, 84, 78, 72, 66, 60],
          smooth: true,
          showPoints: true,
          className: "curve3"
          }
      ],
      grid: {
          verticalLines: true,
          horizontalLines: true
      },
      labels: {
          xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          yLabels: 5,
          yLabelsTextFormatter: val => Math.round(val * 100) / 100
      },
      tooltipData: null,
      popper: null,
      popperIsActive: false
      };
  },
  methods: {
      initPopper() {
      const chart = document.querySelector(".random-chart");
      const ref = chart.querySelector(".active-line");
      const tooltip = this.$refs.tooltip;
      this.popper = new Popper(ref, tooltip, {
          placement: "right",
          modifiers: {
          offset: { offset: "0,10" },
          preventOverflow: {
              boundariesElement: chart
          }
          }
      });
      },
      onMouseMove(params) {
      this.popperIsActive = !!params;
      this.popper.scheduleUpdate();
      this.tooltipData = params || null;
      }
  },
  mounted() {
      this.initPopper();
  }
};
</script>

<style lang="scss" scoped>
main {
  margin-left: calc(1rem);
}

.parent {
    display: table;
    table-layout: fixed;
    width: 90%;
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
    width: 100%;
    vertical-align: top;
}

@media (max-width: 768px) {
  main {
      margin-left: 0;
  }
}

.random {
  width: 100%;
  .vtc {
      height: 250px;
      font-size: 12px;
      @media (min-width: 699px) {
      height: 320px;
      }
  }
  .labels {
      stroke: white;
  }
  .active-line {
      stroke: white;
  }
  .point {
      stroke-width: 2;
      transition: stroke-width 0.2s;
  }
  .point.is-active {
      stroke-width: 5;
  }
  .curve1 {
      .stroke {
      stroke: #fbac91;
      stroke-width: 2;
      }
      .fill {
      fill: #fbac91;
      opacity: 0.05;
      }
      .point {
      fill: #fbac91;
      stroke: #fbac91;
      }
  }
  .curve2 {
      .stroke {
      stroke: #fbe1b6;
      stroke-width: 2;
      }
      .point {
      fill: #fbe1b6;
      stroke: #fbe1b6;
      }
  }
  .curve3 {
      .stroke {
      stroke: #7fdfd4;
      stroke-width: 2;
      }
      .point {
      fill: #7fdfd4;
      stroke: #7fdfd4;
      }
  }
  .tooltip {
      &:not(.is-active) {
      display: none;
      }
      padding: 10px;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      &-data {
      display: flex;
      &-item {
          display: flex;
          align-items: center;
          &:not(:first-child) {
          margin-left: 20px;
          }
          &:before {
          content: "";
          display: block;
          width: 15px;
          height: 15px;
          margin-right: 5px;
          }
          &--1:before {
          background: #fbac91;
          }
          &--2:before {
          background: #fbe1b6;
          }
          &--3:before {
          background: #7fdfd4;
          }
      }
      }
  }
}
</style>