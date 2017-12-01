import Counter from './counter/counter';
import Bar from './bar/bar';
import Icon from './icon/icon';
import Switch from './switch/switch';
import Toast from './toast';
import Button from './button/button';
import Grid from './grid/grid';
import GridItem from './grid-item/grid-item';

const Components = {
  Counter,
  Bar,
  Icon,
  Switch,
  Button,
  Grid,
  GridItem
};
const install = (Vue) => {
  Object.keys(Components).forEach((key) => {
    Vue.component(`gt${key}`, Components[key]);
  });
  Vue.prototype.$toast = Toast;
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Object.assign({}, Components, { install });
