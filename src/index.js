import Header from '../packages/header';
import Button from '../packages/button';
import Cell from '../packages/cell';
import CellSwipe from '../packages/cell-swipe';
import Field from '../packages/field';
import Badge from '../packages/badge';
import Switch from '../packages/switch';
import Spinner from '../packages/spinner';
import TabItem from '../packages/tab-item';
import TabContainerItem from '../packages/tab-container-item';
import TabContainer from '../packages/tab-container';
import Navbar from '../packages/navbar';
import Tabbar from '../packages/tabbar';
import Image from '../packages/image';
import ImagePreview from '../packages/image-preview';
import Search from '../packages/search';
import Checklist from '../packages/checklist';
import Radio from '../packages/radio';
import Loadmore from '../packages/loadmore';
import Actionsheet from '../packages/actionsheet';
import Popup from '../packages/popup';
import Popper from '../packages/popper';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Range from '../packages/range';
import Picker from '../packages/picker';
import Progress from '../packages/progress';
import Toast from '../packages/toast';
import Indicator from '../packages/indicator';
import Dialog from '../packages/dialog';
import MessageBox from '../packages/message-box';
import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload';
import DatetimePicker from '../packages/datetime-picker';
import IndexList from '../packages/index-list';
import IndexSection from '../packages/index-section';
import PaletteButton from '../packages/palette-button';
import '../src/assets/font/iconfont.css';
import merge from './utils/merge';

const version = '1.0.0';
export const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Header.name, Header);
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Field.name, Field);
  Vue.component(Badge.name, Badge);
  Vue.component(Switch.name, Switch);
  Vue.component(Spinner.name, Spinner);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(Navbar.name, Navbar);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(Image.name, Image);
  Vue.component(ImagePreview.name, ImagePreview);
  Vue.component(Search.name, Search);
  Vue.component(Checklist.name, Checklist);
  Vue.component(Radio.name, Radio);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Popup.name, Popup);
  Vue.component(Popper.name, Popper);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Range.name, Range);
  Vue.component(Picker.name, Picker);
  Vue.component(Progress.name, Progress);
  Vue.component(Dialog.name, Dialog);
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  Vue.component(PaletteButton.name, PaletteButton);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
export { default as Header } from '../packages/header';
export { default as Button } from '../packages/button';
export { default as Cell } from '../packages/cell';
export { default as CellSwipe } from '../packages/cell-swipe';
export { default as Field } from '../packages/field';
export { default as Badge } from '../packages/badge';
export { default as Switch } from '../packages/switch';
export { default as Spinner } from '../packages/spinner';
export { default as TabItem } from '../packages/tab-item';
export { default as TabContainerItem } from '../packages/tab-container-item';
export { default as TabContainer } from '../packages/tab-container';
export { default as Navbar } from '../packages/navbar';
export { default as Tabbar } from '../packages/tabbar';
export { default as Image } from '../packages/image';
export { default as ImagePreview } from '../packages/image-preview';
export { default as Search } from '../packages/search';
export { default as Checklist } from '../packages/checklist';
export { default as Radio } from '../packages/radio';
export { default as Loadmore } from '../packages/loadmore';
export { default as Actionsheet } from '../packages/actionsheet';
export { default as Popup } from '../packages/popup';
export { default as Popper } from '../packages/popper';
export { default as Swipe } from '../packages/swipe';
export { default as SwipeItem } from '../packages/swipe-item';
export { default as Range } from '../packages/range';
export { default as Picker } from '../packages/picker';
export { default as Progress } from '../packages/progress';
export { default as Toast } from '../packages/toast';
export { default as Indicator } from '../packages/indicator';
export { default as Dialog } from '../packages/dialog';
export { default as MessageBox } from '../packages/message-box';
export { default as InfiniteScroll } from '../packages/infinite-scroll';
export { default as Lazyload } from '../packages/lazyload';
export { default as DatetimePicker } from '../packages/datetime-picker';
export { default as IndexList } from '../packages/index-list';
export { default as IndexSection } from '../packages/index-section';
export { default as PaletteButton } from '../packages/palette-button';
export default {
  install,
  version,
  Header,
  Button,
  Cell,
  CellSwipe,
  Field,
  Badge,
  Switch,
  Spinner,
  TabItem,
  TabContainerItem,
  TabContainer,
  Navbar,
  Tabbar,
  Image,
  ImagePreview,
  Search,
  Checklist,
  Radio,
  Loadmore,
  Actionsheet,
  Popup,
  Popper,
  Swipe,
  SwipeItem,
  Range,
  Picker,
  Progress,
  Toast,
  Indicator,
  Dialog,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  DatetimePicker,
  IndexList,
  IndexSection,
  PaletteButton
};
