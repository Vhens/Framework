<template>
  <div class="box1">
    <gt-row title="选择时间" is-link :value="selectVal || '请选择'"  @click.native="open('picker1')"></gt-row>
     <gt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value1"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </gt-datetime-picker>
  </div>
</template>

<script>
  import { formatDate } from '../../utils/format';

  export default {
    data () {
      return {
        selectVal: '',
        value: null,
        value1: null,
        visible: false
      };
    },
    methods: {
      open (picker) {
        this.$refs[picker].open();
      },
      handleChange (value) {
        this.selectVal = formatDate(value.toString());
      }
    }
  };
</script>
