import Counter from './counter/src/counter';
import Bar from './bar/src/bar';
import Icon from './icon/src/icon';
import Switch from './switch/src/switch';

const Components = {
  Counter,
  Bar,
  Icon,
  Switch
};

const install = (Vue) => {
  Object.keys(Components).forEach((key) => {
    Vue.component(`gt${key}`, Components[key]);
  });
};

export default Object.assign({}, Components, { install });