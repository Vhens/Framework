<template>
  <div class="hello">
    <gt-bar title="vue 组件" color="#fff" fontSize="32">
    </gt-bar>
    <gt-grid>
      <gt-grid-item to="dddd">
        <gt-icon icon="add" slot="icon" fontSize="50"></gt-icon>
        <span slot="label">ddddd</span>
      </gt-grid-item>
    </gt-grid>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'index',
  data () {
    return {
    };
  },
  methods: {
    ...mapActions('detail', ['getSiteDetail'])
  },
  computed: {
    ...mapGetters('detail', ['getSiteDetails'])
  },
  mounted () {
    this.Service.detail.detail().then(res => {
      console.log('我是从接口来的数据:', res);
    });
    this.getSiteDetail();
    setTimeout(() => {
      console.log('我是从vuex来的数据:', this.getSiteDetails);
    }, 500);
    // console.log(this.toast);
    // this.toast('success');
  }
};
</script>

