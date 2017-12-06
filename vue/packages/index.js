import Counter from './counter/counter';
import Header from './header/header';
import Icon from './icon/icon';
import Switch from './switch/switch';
import Toast from './toast';
import Button from './button/button';
import Grid from './grid/grid';
import GridItem from './grid/gridItem';
import Actionsheet from './actionsheet/actionsheet';
import Popup from './popup/popup';
import Accordion from './accordion/accordion';
import AccordionItem from './accordion/accordionItem';
import Row from './row/row';
import SlideOut from './slideout/slideout';
import Rater from './rater/rater';
const Components = {
  Actionsheet,
  Counter,
  Header,
  Icon,
  Switch,
  Button,
  Grid,
  GridItem,
  Popup,
  Accordion,
  AccordionItem,
  Row,
  SlideOut,
  Rater
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
