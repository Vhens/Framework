<template>
  <!-- 数值计数器 -->
  <section class="gt-counter">
    <span class="gt-counter-num" ref="counter">{{counter}}</span>
  </section>
</template>

<script>
  export default {
    name: 'gtCounter',
    props: {
      startVal: {
        type: [Number,String],
        required: false,
        default: 0
      },
      endVal: { //结束数字
        type: [Number,String],
        required: false,
        default: 2017
      },
      duration: { //延迟时间
        type: [Number,String],
        required: false,
        default: 3000
      },
      autoplay: { // 自动计数
        type: Boolean,
        required: false,
        default: true
      },
      decimals: {
        type: Number,
        required: false,
        default: 0,
        validator(value) {
          return value >= 0;
        }
      },
      decimal: {  //小数
        type: String,
        required: false,
        default: '.'
      },
      separator: { //分隔符
        type: String,
        required: false,
        default: ','
      },
      prefix: { //前缀
        type: String,
        required: false,
        default: ''
      },
      suffix: { //后缀
        type: String,
        required: false,
        default: ''
      },
      useEasing: {
        type: Boolean,
        required: false,
        default: true
      },
      easingFn: {
        type: Function,
        default (t, b, c, d) {
          return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        }
      },
      color: { // 设置字体颜色
        type: [String, Number],
        required: false,
        default: '#ccc'
      }
    },
    data() {
      return {
        localStartVal: this.startVal,
        counter: this.formatNumber(this.startVal),
        printVal: null,
        paused: false,
        localDuration: this.duration,
        startTime: null,
        timestamp: null,
        remaining: null,
        rAF: null
      };
    },
    computed: {
      countDown() {
        return this.startVal > this.endVal;
      }
    },
    watch: {
      startVal () {
        if (this.autoplay) {
          this.start();
        }
      },
      endVal () {
        if (this.autoplay) {
          this.start();
        }
      }
    },
    mounted () {
      this.gerColor();
      if (this.autoplay) {
        this.start();
      }
      this.$emit('mountedCallback');
    },
    methods: {
      start () {
        this.localStartVal = this.startVal;
        this.startTime = null;
        this.localDuration = this.duration;
        this.paused = false;
        this.rAF = requestAnimationFrame(this.count);
      },
      pauseResume () {
        if (this.paused) {
          this.resume();
          this.paused = false;
        } else {
          this.pause();
          this.paused = true;
        }
      },
      pause () {
        cancelAnimationFrame(this.rAF);
      },
      resume () {
        this.startTime = null;
        this.localDuration = +this.remaining;
        this.localStartVal = +this.printVal;
        requestAnimationFrame(this.count);
      },
      reset () {
        this.startTime = null;
        cancelAnimationFrame(this.rAF);
        this.counter = this.formatNumber(this.startVal);
      },
      count (timestamp) {
        if (!this.startTime) this.startTime = timestamp;
        this.timestamp = timestamp;
        const progress = timestamp - this.startTime;
        this.remaining = this.localDuration - progress;
        if (this.useEasing) {
          if (this.countDown) {
            this.printVal = this.localStartVal - this.easingFn(progress, 0, this.localStartVal - this.endVal, this.localDuration)
          } else {
            this.printVal = this.easingFn(progress, this.localStartVal, this.endVal - this.localStartVal, this.localDuration);
          }
        } else {
          if (this.countDown) {
            this.printVal = this.localStartVal - ((this.localStartVal - this.endVal) * (progress / this.localDuration));
          } else {
            this.printVal = this.localStartVal + (this.localStartVal - this.startVal) * (progress / this.localDuration);
          }
        }
        if (this.countDown) {
          this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal;
        } else {
          this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal;
        }
        this.counter = this.formatNumber(this.printVal);
        if (progress < this.localDuration) {
          this.rAF = requestAnimationFrame(this.count);
        } else {
          this.$emit('callback');
        }
      },
      isNumber (val) {
        return !isNaN(parseFloat(val))
      },
      formatNumber (num) {
        num = ~~num;
        num = num.toFixed(this.decimals);
        num += '';
        const x = num.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? this.decimal + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        if (this.separator && !this.isNumber(this.separator)) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + this.separator + '$2');
          }
        }
        return this.prefix + x1 + x2 + this.suffix;
      },
      gerColor () {
        this.$refs.counter.style.color = this.color;
      }
    },
    destroyed () {
      cancelAnimationFrame(this.rAF);
    }
  };

</script>

<style>
  .gt-counter-num{
    font-size:16px
  }
</style>
