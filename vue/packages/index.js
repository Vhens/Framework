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
import Rater from './rater/rater';
import SlideOut from './slideout/slideout';
import SlideOutButton from './slideout/slideoutButton';
import Input from './input/input';
import Textarea from './textarea/textarea';
import Card from './card/card';
import CardHeader from './card/cardHeader';
import CardContent from './card/cardContent';
import CardFooter from './card/cardFooter';
import Message from './message';
import Badge from './badge/badge';
import Divider from './divider/divider';
import Notice from './notice/notice';
import Lightbox from './lightbox/lightbox';
import Number from './number/number';
import DragSort from './dragsort/dragsort';
import Timeline from './timeline/timeline';
import TimelineItem from './timeline/timelineItem';
import Swipe from './swipe/swipe';
import SwipeItem from './swipe/swipeItem';
import Picker from './picker/picker';
import DatetimePicker from './datetime-picker/datetime-picker';
import Spinner from './spinner/spinner';
import Tab from './tab/tab';
import TabPanel from './tab/tab-panel';

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
  SlideOutButton,
  Rater,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Badge,
  Divider,
  Notice,
  Lightbox,
  Number,
  DragSort,
  Timeline,
  TimelineItem,
  Swipe,
  SwipeItem,
  Picker,
  DatetimePicker,
  Spinner,
  Tab,
  TabPanel
};
const install = (Vue) => {
  Object.keys(Components).forEach((key) => {
    Vue.component(`gt${key}`, Components[key]);
  });
  Vue.prototype.$toast = Toast;
  Vue.prototype.$message = Message;
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Object.assign({}, Components, { install });
