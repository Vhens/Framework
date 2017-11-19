import Counter from './counter/src/counter';
import Bar from './bar/src/bar';
import Icon from './icon/src/icon';
import Switch from './switch/src/switch';
import Toast from './toast/src/toast';
import Button from './button/src/button';
import Grid from './grid/src/grid';
import GridItem from './grid-item/src/grid-item';

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
  Vue.prototype.toast = Toast;
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Object.assign({}, Components, { install });
