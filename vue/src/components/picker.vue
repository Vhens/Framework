<template>
  <div class="box1">
    <gt-row title="地区联动" is-link :value="address | arr2string" @click.native="isShowAdderss=true"></gt-row>
    <gt-popup v-model="isShowAdderss" position="bottom">
      <gt-picker
        ref="addressPicker"
        showToolbar
        :slots="addressSlots"
        @cancel="handleCancel"
        @confirm="handleConfirm"
        @change="onAddressChange"
        :visible-item-count="5">
      </gt-picker>
    </gt-popup>
  </div>
</template>

<script>
  import { province, getCity, getArea } from '../assets/address';

  export default {
    data () {
      return {
        address: '',
        isShowAdderss: false,
        addressSlots: [
          {
            values: province
          },
          {
            values: []
          },
          {
            values: []
          }
        ]
      };
    },
    methods: {
      onAddressChange(picker, value) {
        picker.setSlotValues(1, getCity(value[0]));
        picker.setSlotValues(2, getArea(value[0], value[1]));
      },
      handleCancel () {
        this.isShowAdderss = false;
      },
      handleConfirm (picker) {
        this.address = picker.getValues();
        this.isShowAdderss = false;
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.addressPicker.setValues(['福建省', '厦门市', '集美区']);
      });
    },
    filters: {
      arr2string (arr) {
        const str = Array.isArray(arr) ? arr.toString() : '请选择';
        return str;
      }
    }
  };
</script>
