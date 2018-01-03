<template>
  <section class="yd-tab">
    <ul class="yd-tab-nav" :style="{color: activeColor}" v-show="navList.length > 0">
      <li class="yd-tab-nav-item"
        v-for="item, key in navList"
        :key="key"
        :class="item._uid == activeIndex ? 'yd-tab-active' : ''"
        @click="changeHandler(item._uid, item.label, item.tabkey)">
          <span>{{item.label}}</span>
      </li>
    </ul>
    <div class="yd-tab-panel">
        <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'gtTab',
  data() {
    return {
      navList: [],
      activeIndex: 0,
      tmpIndex: 0
    };
  },
  props: {
    change: Function,
    callback: Function,
    activeColor: {
      type: String,
      default: '#FF5E53'
    }
  },
  methods: {
    init(update, status) {
      const tabPanels = this.$children.filter(item => item.$options.name === 'yd-tab-panel');
      let num = 0;
      if (!update) {
        this.navList = [];
      }
      tabPanels.forEach((panel, index) => {
        if (status === 'label') {
          return (this.navList[index] = panel);
        }
        if (!update) {
          this.navList.push({ _uid: panel._uid, label: panel.label, tabkey: panel.tabkey });
        }
        if (panel.active) {
          this.activeIndex = this.tmpIndex = panel._uid;
        } else {
          ++num;
          if (num >= tabPanels.length) {
            this.activeIndex = this.tmpIndex = tabPanels[0]._uid;
          }
        }
      });
    },
    emitChange(label, tabkey) {
      if (this.change) {
        this.change(label, tabkey);
      }
      this.callback && this.callback(label, tabkey);
    },
    changeHandler(uid, label, tabkey) {
      if (this.tmpIndex != uid) {
        this.activeIndex = this.tmpIndex = uid;
        this.emitChange(label, tabkey);
      }
    }
  }
};
</script>
