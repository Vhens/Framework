<template>
  <div class="gt-slide-out gt-slide-box">
    <div class="gt-slide-out-btn" ref="gtSlideoutBtn" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <gt-row :title="title" :value="value" :is-link="isLink" :to="to"></gt-row>
    </div>
    <div class="gt-slide-out-btn-right" ref="slideoutRigthBtn">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import gtRow from '../row/row'
  import Transform from 'css3transform'

  export default {
    name: 'gt-slide-out',

    components: {
      gtRow
    },
    props: {
      title: {
        type: [String, Number]
      },
      value: {
        type: [String, Number]
      },
      isLink: Boolean,
      to: String
    },
    data () {
      return {
        dragState: {}
      }
    },
    methods: {
      touchStart (event) {
        event.preventDefault()
        if (this.isDragging){
          return false;
        }
        const gtSlideoutBtn = this.$refs.gtSlideoutBtn
        event.type === 'touchstart' ? this.dragState.startPositionX = event.changedTouches[0].clientX :  this.dragState.startPositionX = event.clientX;
        this.dragState.startTranslateX = gtSlideoutBtn.translateX
        this.dragState.startTimestamp = new Date()
        gtSlideoutBtn.style.transition = '';
      },

      touchMove (event) {
        event.preventDefault()
        this.isDragging = true;
        let deltaX;
        deltaX = event.type === 'touchmove' ? event.changedTouches[0].clientX - this.dragState.startPositionX : deltaX = event.clientX - this.dragState.startPositionX;
        const gtSlideoutBtn = this.$refs.gtSlideoutBtn
        const btnsWidth = this.$refs.slideoutRigthBtn.clientWidth
        let targetTranslateX;
        targetTranslateX = deltaX < 0 ? (Math.abs(this.dragState.startTranslateX + deltaX) < btnsWidth ? this.dragState.startTranslateX + deltaX : -1 * btnsWidth) :
        this.dragState.startTranslateX + deltaX < 0 ? this.dragState.startTranslateX + deltaX : 0;
        gtSlideoutBtn.translateX = targetTranslateX;
      },

      touchEnd (event) {
        event.preventDefault()
        this.isDragging = false
        const gtSlideoutBtn = this.$refs.gtSlideoutBtn
        const btnsWidth = this.$refs.slideoutRigthBtn.clientWidth
        event.type === 'touchend' ? this.dragState.endPositionX = event.changedTouches[0].clientX :  this.dragState.endPositionX = event.clientX;
        this.dragState.endTranslateX = gtSlideoutBtn.translateX;
        this.dragState.totalDeltaX = this.dragState.endPositionX - this.dragState.startPositionX;
        this.dragState.endTimestamp = new Date()

        const touchTime = this.dragState.endTimestamp - this.dragState.startTimestamp

        // 500ms 内当作点击处理
        if (touchTime <= 500 && ~~(this.dragState.totalDeltaX) === 0) {
          this.$children[0].$emit('CLICK_IN_CELLSWIPE', event)
        }

        if (this.dragState.startTranslateX === 0 && this.dragState.totalDeltaX < 0) {
          if (Math.abs(this.dragState.totalDeltaX) >= 30) {
            gtSlideoutBtn.translateX = -btnsWidth
          } else {
            gtSlideoutBtn.translateX = 0
          }
          gtSlideoutBtn.style.transition = 'all .2s ease'
        } else if (this.dragState.startTranslateX === -btnsWidth && this.dragState.totalDeltaX > 0) {
          if (Math.abs(this.dragState.totalDeltaX) >= 30) {
            gtSlideoutBtn.translateX = 0
          } else {
            gtSlideoutBtn.translateX = -btnsWidth
          }
          gtSlideoutBtn.style.transition = 'all .2s ease'
        }
        this.dragState = {}
      },
      close () {
        const gtSlideoutBtn = this.$refs.gtSlideoutBtn;
        gtSlideoutBtn.translateX = 0;
        gtSlideoutBtn.style.transition = 'all .2s ease';
        this.$emit('close')
      }
    },
    mounted () {
      this.isDragging = false;
      const gtSlideoutBtn = this.$refs.gtSlideoutBtn;
      Transform(gtSlideoutBtn, true);
    }

  }
</script>
