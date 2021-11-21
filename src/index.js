import Actionsheet from '../packages/actionsheet';
import Badge from '../packages/badge';
import Button from '../packages/button';
import Cell from '../packages/cell';
import CellSwipe from '../packages/cell-swipe';
import Checklist from '../packages/checklist';
import DatetimePicker from '../packages/datetime-picker';
import Dialog from '../packages/dialog';
import Field from '../packages/field';
import Header from '../packages/header';
import Icon from '../packages/icon';
import Image from '../packages/image';
import ImagePreview from '../packages/image-preview';
import IndexList from '../packages/index-list';
import IndexSection from '../packages/index-section';
import Indicator from '../packages/indicator';
import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload';
import Loadmore from '../packages/loadmore';
import MessageBox from '../packages/message-box';
import Navbar from '../packages/navbar';
import NoticeBar from '../packages/notice-bar';
import PaletteButton from '../packages/palette-button';
import Picker from '../packages/picker';
import Popper from '../packages/popper';
import Popup from '../packages/popup';
import Progress from '../packages/progress';
import Radio from '../packages/radio';
import Range from '../packages/range';
import Search from '../packages/search';
import Spinner from '../packages/spinner';
import Sticky from '../packages/sticky';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Switch from '../packages/switch';
import TabContainer from '../packages/tab-container';
import TabContainerItem from '../packages/tab-container-item';
import TabItem from '../packages/tab-item';
import Tabbar from '../packages/tabbar';
import Toast from '../packages/toast';
import '../src/assets/font/iconfont.css';
import '../src/assets/font/icon.css';
import merge from './utils/merge';

const version = '1.0.0';
export const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Badge.name, Badge);
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Checklist.name, Checklist);
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(Dialog.name, Dialog);
  Vue.component(Field.name, Field);
  Vue.component(Header.name, Header);
  Vue.component(Icon.name, Icon);
  Vue.component(Image.name, Image);
  Vue.component(ImagePreview.name, ImagePreview);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Navbar.name, Navbar);
  Vue.component(NoticeBar.name, NoticeBar);
  Vue.component(PaletteButton.name, PaletteButton);
  Vue.component(Picker.name, Picker);
  Vue.component(Popper.name, Popper);
  Vue.component(Popup.name, Popup);
  Vue.component(Progress.name, Progress);
  Vue.component(Radio.name, Radio);
  Vue.component(Range.name, Range);
  Vue.component(Search.name, Search);
  Vue.component(Spinner.name, Spinner);
  Vue.component(Sticky.name, Sticky);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Switch.name, Switch);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(TabItem.name, TabItem);
  Vue.component(Tabbar.name, Tabbar);
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
export { default as Actionsheet } from '../packages/actionsheet';
export { default as Badge } from '../packages/badge';
export { default as Button } from '../packages/button';
export { default as Cell } from '../packages/cell';
export { default as CellSwipe } from '../packages/cell-swipe';
export { default as Checklist } from '../packages/checklist';
export { default as DatetimePicker } from '../packages/datetime-picker';
export { default as Dialog } from '../packages/dialog';
export { default as Field } from '../packages/field';
export { default as Header } from '../packages/header';
export { default as Icon } from '../packages/icon';
export { default as Image } from '../packages/image';
export { default as ImagePreview } from '../packages/image-preview';
export { default as IndexList } from '../packages/index-list';
export { default as IndexSection } from '../packages/index-section';
export { default as Indicator } from '../packages/indicator';
export { default as InfiniteScroll } from '../packages/infinite-scroll';
export { default as Lazyload } from '../packages/lazyload';
export { default as Loadmore } from '../packages/loadmore';
export { default as MessageBox } from '../packages/message-box';
export { default as Navbar } from '../packages/navbar';
export { default as NoticeBar } from '../packages/notice-bar';
export { default as PaletteButton } from '../packages/palette-button';
export { default as Picker } from '../packages/picker';
export { default as Popper } from '../packages/popper';
export { default as Popup } from '../packages/popup';
export { default as Progress } from '../packages/progress';
export { default as Radio } from '../packages/radio';
export { default as Range } from '../packages/range';
export { default as Search } from '../packages/search';
export { default as Spinner } from '../packages/spinner';
export { default as Sticky } from '../packages/sticky';
export { default as Swipe } from '../packages/swipe';
export { default as SwipeItem } from '../packages/swipe-item';
export { default as Switch } from '../packages/switch';
export { default as TabContainer } from '../packages/tab-container';
export { default as TabContainerItem } from '../packages/tab-container-item';
export { default as TabItem } from '../packages/tab-item';
export { default as Tabbar } from '../packages/tabbar';
export { default as Toast } from '../packages/toast';
export default {
  install,
  version,
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellSwipe,
  Checklist,
  DatetimePicker,
  Dialog,
  Field,
  Header,
  Icon,
  Image,
  ImagePreview,
  IndexList,
  IndexSection,
  Indicator,
  InfiniteScroll,
  Lazyload,
  Loadmore,
  MessageBox,
  Navbar,
  NoticeBar,
  PaletteButton,
  Picker,
  Popper,
  Popup,
  Progress,
  Radio,
  Range,
  Search,
  Spinner,
  Sticky,
  Swipe,
  SwipeItem,
  Switch,
  TabContainer,
  TabContainerItem,
  TabItem,
  Tabbar,
  Toast
};
