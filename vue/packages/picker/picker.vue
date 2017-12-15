<template>
  <div class="gt-picker" :class="{ 'gt-picker-3d': rotateEffect }">
    <div class="gt-picker-toolbar" v-if="showToolbar">
      <template v-if="!$slots.toolbar">
        <a class="gt-picker-cancel gt-picker-btn" @click="cancel" v-text="cancelText"></a>
        <a class="gt-picker-confirm gt-picker-btn" @click="confirm" v-text="confirmText"></a>
      </template>
      <template v-else>
        <slot name="toolbar"></slot>
      </template>
    </div>
    <div class="gt-picker-item">
      <gt-picker-slot v-for="(slot, index) of slots"
        :key="index" :valueKey="valueKey"
        :values="slot.values || []"
        :text-align="slot.textAlign || 'center'"
        :visible-item-count="visibleItemCount"
        :class-name="slot.className"
        :flex="slot.flex"
        v-model="values[slot.valueIndex]"
        :rotate-effect="rotateEffect"
        :divider="slot.divider" :content="slot.content"
        :itemHeight="itemHeight"
        :default-index="slot.defaultIndex">
      </gt-picker-slot>
      <div class="gt-picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>
<script>
  import pickerSlot from './picker-slot';

  export default {
    name: 'gtPicker',
    componentName: 'picker',
    props: {
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      slots: {
        type: Array
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
      valueKey: String,
      rotateEffect: {
        type: Boolean,
        default: false
      },
      itemHeight: {
        type: Number,
        default: 60
      }
    },

    created() {
      this.$on('slotValueChange', this.slotValueChange);
      var slots = this.slots || [];
      var values = [];
      var valueIndexCount = 0;
      slots.forEach(slot => {
        if (!slot.divider) {
          slot.valueIndex = valueIndexCount++;
          values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
        }
      });
      this.values = values;
      this.slotValueChange();
    },

    methods: {
      slotValueChange() {
        this.$emit('change', this, this.values);
      },

      getSlot(slotIndex) {
        var slots = this.slots || [];
        var count = 0;
        var target;
        var children = this.$children.filter(child => child.$options.name === 'picker-slot');

        slots.forEach(function(slot, index) {
          if (!slot.divider) {
            if (slotIndex === count) {
              target = children[index];
            }
            count++;
          }
        });

        return target;
      },
      getSlotValue(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.value;
        }
        return null;
      },
      setSlotValue(index, value) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.currentValue = value;
        }
      },
      getSlotValues(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.mutatingValues;
        }
        return null;
      },
      setSlotValues(index, values) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.mutatingValues = values;
        }
      },
      getValues() {
        return this.values;
      },
      setValues(values) {
        var slotCount = this.slotCount;
        values = values || [];
        if (slotCount !== values.length) {
          throw new Error('values length is not equal slot count.');
        }
        values.forEach((value, index) => {
          this.setSlotValue(index, value);
        });
      },
      cancel () {
        this.$emit('cancel', this)
      },
      confirm () {
        this.$emit('confirm', this)
      }
    },

    computed: {
      values: {
        get() {
          var slots = this.slots || [];
          var values = [];
          slots.forEach(function(slot) {
            if (!slot.divider) values.push(slot.value);
          });

          return values;
        },
        set(values) {
          var slots = this.slots || [];
          var valueIndexCount = 0;
          slots.forEach(function(slot) {
            if (!slot.divider) slot.value = values[valueIndexCount++];
          });
        }
      },
      slotCount() {
        var slots = this.slots || [];
        var result = 0;
        slots.forEach(function(slot) {
          if (!slot.divider) result++;
        });
        return result;
      }
    },

    components: {
      gtPickerSlot: pickerSlot
    }
  };
</script>
