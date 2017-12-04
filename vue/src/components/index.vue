<template>
  <div class="hello">
    <gt-grid>
      <gt-grid-item :to="item.to" v-for="(item, index) of navList" :key="index">
        <gt-icon icon="add" slot="icon" size="50"></gt-icon>
        <span slot="label">{{item.label}}</span>
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
      navList: [
        {
          to: 'switch',
          label: 'switch'
        },
        {
          to: 'counter',
          label: 'counter'
        },
        {
          to: 'button',
          label: 'button'
        },
        {
          to: 'toast',
          label: 'toast'
        },
        {
          to: 'actionsheet',
          label: 'actionsheet'
        }
      ]
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
  }
};
</script>

