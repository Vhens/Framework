<template>
  <div class="box">
      <div class="countdown">
          距离进入：2019年1月1日0时0分0秒<br />
          还有：：{{countdownTime.day}}天 {{countdownTime.hour}}小时 {{countdownTime.minute}}分 {{countdownTime.second}}秒
      </div>
  </div>
</template>

<script>
  import { countdown } from '../../utils/countdown.js';

  export default {
    data () {
      return {
        countdownTime: {},
        countdownTimer: null
      };
    },
    mounted() {
      this.countdownTime = countdown(2019, 1, 1, 0, 0, 0);
      clearInterval(this.countdownTimer);
      this.countdownTimer = setInterval(() => {
        this.countdownTime = countdown(2019, 1, 1, 0, 0, 0);
      }, 1000);
    }
  };
</script>
