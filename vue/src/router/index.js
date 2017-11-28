import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/components/index');

// Router.prototype.goBack = () => {
//   console.log(222);
//   this.isBack = true;
//   this.go(-1);
// };

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
  // beforeRouteUpdate(to, from, next) {
  //   const isBack = this.$router.isBack;
  //   console.log(this);
  //   if (isBack) {
  //     this.transitionName = 'slide-right';
  //   } else {
  //     this.transitionName = 'slide-left';
  //   }
  //   this.$router.isBack = false;
  //   next();
  // }
});
export default router;
