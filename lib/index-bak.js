"use strict";

exports.__esModule = true;
exports.install = exports.default = exports.Toast = exports.Tabbar = exports.TabItem = exports.TabContainerItem = exports.TabContainer = exports.Switch = exports.SwipeItem = exports.Swipe = exports.Sticky = exports.Spinner = exports.Search = exports.Range = exports.Radio = exports.Progress = exports.Popup = exports.Popper = exports.Picker = exports.PaletteButton = exports.NoticeBar = exports.Navbar = exports.MessageBox = exports.Loadmore = exports.Lazyload = exports.InfiniteScroll = exports.Indicator = exports.IndexSection = exports.IndexList = exports.ImagePreview = exports.Image = exports.Icon = exports.Header = exports.Field = exports.Dialog = exports.DatetimePicker = exports.Checklist = exports.CellSwipe = exports.Cell = exports.Button = exports.Badge = exports.Actionsheet = void 0;

var _header = _interopRequireDefault(require("../packages/header"));

exports.Header = _header.default;

var _button = _interopRequireDefault(require("../packages/button"));

exports.Button = _button.default;

var _cell = _interopRequireDefault(require("../packages/cell"));

exports.Cell = _cell.default;

var _cellSwipe = _interopRequireDefault(require("../packages/cell-swipe"));

exports.CellSwipe = _cellSwipe.default;

var _field = _interopRequireDefault(require("../packages/field"));

exports.Field = _field.default;

var _badge = _interopRequireDefault(require("../packages/badge"));

exports.Badge = _badge.default;

var _switch = _interopRequireDefault(require("../packages/switch"));

exports.Switch = _switch.default;

var _spinner = _interopRequireDefault(require("../packages/spinner"));

exports.Spinner = _spinner.default;

var _tabItem = _interopRequireDefault(require("../packages/tab-item"));

exports.TabItem = _tabItem.default;

var _tabContainerItem = _interopRequireDefault(require("../packages/tab-container-item"));

exports.TabContainerItem = _tabContainerItem.default;

var _tabContainer = _interopRequireDefault(require("../packages/tab-container"));

exports.TabContainer = _tabContainer.default;

var _navbar = _interopRequireDefault(require("../packages/navbar"));

exports.Navbar = _navbar.default;

var _tabbar = _interopRequireDefault(require("../packages/tabbar"));

exports.Tabbar = _tabbar.default;

var _icon = _interopRequireDefault(require("../packages/icon"));

exports.Icon = _icon.default;

var _image = _interopRequireDefault(require("../packages/image"));

exports.Image = _image.default;

var _imagePreview = _interopRequireDefault(require("../packages/image-preview"));

exports.ImagePreview = _imagePreview.default;

var _search = _interopRequireDefault(require("../packages/search"));

exports.Search = _search.default;

var _checklist = _interopRequireDefault(require("../packages/checklist"));

exports.Checklist = _checklist.default;

var _radio = _interopRequireDefault(require("../packages/radio"));

exports.Radio = _radio.default;

var _loadmore = _interopRequireDefault(require("../packages/loadmore"));

exports.Loadmore = _loadmore.default;

var _actionsheet = _interopRequireDefault(require("../packages/actionsheet"));

exports.Actionsheet = _actionsheet.default;

var _popup = _interopRequireDefault(require("../packages/popup"));

exports.Popup = _popup.default;

var _popper = _interopRequireDefault(require("../packages/popper"));

exports.Popper = _popper.default;

var _swipe = _interopRequireDefault(require("../packages/swipe"));

exports.Swipe = _swipe.default;

var _swipeItem = _interopRequireDefault(require("../packages/swipe-item"));

exports.SwipeItem = _swipeItem.default;

var _range = _interopRequireDefault(require("../packages/range"));

exports.Range = _range.default;

var _picker = _interopRequireDefault(require("../packages/picker"));

exports.Picker = _picker.default;

var _progress = _interopRequireDefault(require("../packages/progress"));

exports.Progress = _progress.default;

var _toast = _interopRequireDefault(require("../packages/toast"));

exports.Toast = _toast.default;

var _indicator = _interopRequireDefault(require("../packages/indicator"));

exports.Indicator = _indicator.default;

var _dialog = _interopRequireDefault(require("../packages/dialog"));

exports.Dialog = _dialog.default;

var _messageBox = _interopRequireDefault(require("../packages/message-box"));

exports.MessageBox = _messageBox.default;

var _infiniteScroll = _interopRequireDefault(require("../packages/infinite-scroll"));

exports.InfiniteScroll = _infiniteScroll.default;

var _lazyload = _interopRequireDefault(require("../packages/lazyload"));

exports.Lazyload = _lazyload.default;

var _datetimePicker = _interopRequireDefault(require("../packages/datetime-picker"));

exports.DatetimePicker = _datetimePicker.default;

var _indexList = _interopRequireDefault(require("../packages/index-list"));

exports.IndexList = _indexList.default;

var _indexSection = _interopRequireDefault(require("../packages/index-section"));

exports.IndexSection = _indexSection.default;

var _paletteButton = _interopRequireDefault(require("../packages/palette-button"));

exports.PaletteButton = _paletteButton.default;

var _noticeBar = _interopRequireDefault(require("../packages/notice-bar"));

exports.NoticeBar = _noticeBar.default;

var _sticky = _interopRequireDefault(require("../packages/sticky"));

exports.Sticky = _sticky.default;

require("../src/assets/font/iconfont.css");

require("../src/assets/font/icon.css");

var _merge = _interopRequireDefault(require("./utils/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '1.0.0';

var install = function install(Vue, config) {
  if (config === void 0) {
    config = {};
  }

  if (install.installed) return;
  Vue.component(_header.default.name, _header.default);
  Vue.component(_button.default.name, _button.default);
  Vue.component(_cell.default.name, _cell.default);
  Vue.component(_cellSwipe.default.name, _cellSwipe.default);
  Vue.component(_field.default.name, _field.default);
  Vue.component(_badge.default.name, _badge.default);
  Vue.component(_switch.default.name, _switch.default);
  Vue.component(_spinner.default.name, _spinner.default);
  Vue.component(_tabItem.default.name, _tabItem.default);
  Vue.component(_tabContainerItem.default.name, _tabContainerItem.default);
  Vue.component(_tabContainer.default.name, _tabContainer.default);
  Vue.component(_navbar.default.name, _navbar.default);
  Vue.component(_tabbar.default.name, _tabbar.default);
  Vue.component(_icon.default.name, _icon.default);
  Vue.component(_image.default.name, _image.default);
  Vue.component(_imagePreview.default.name, _imagePreview.default);
  Vue.component(_search.default.name, _search.default);
  Vue.component(_checklist.default.name, _checklist.default);
  Vue.component(_radio.default.name, _radio.default);
  Vue.component(_loadmore.default.name, _loadmore.default);
  Vue.component(_actionsheet.default.name, _actionsheet.default);
  Vue.component(_popup.default.name, _popup.default);
  Vue.component(_popper.default.name, _popper.default);
  Vue.component(_swipe.default.name, _swipe.default);
  Vue.component(_swipeItem.default.name, _swipeItem.default);
  Vue.component(_range.default.name, _range.default);
  Vue.component(_picker.default.name, _picker.default);
  Vue.component(_progress.default.name, _progress.default);
  Vue.component(_dialog.default.name, _dialog.default);
  Vue.component(_datetimePicker.default.name, _datetimePicker.default);
  Vue.component(_indexList.default.name, _indexList.default);
  Vue.component(_indexSection.default.name, _indexSection.default);
  Vue.component(_paletteButton.default.name, _paletteButton.default);
  Vue.component(_noticeBar.default.name, _noticeBar.default);
  Vue.component(_sticky.default.name, _sticky.default);
  Vue.use(_infiniteScroll.default);
  Vue.use(_lazyload.default, (0, _merge.default)({
    loading: require("./assets/loading-spin.svg"),
    attempt: 3
  }, config.lazyload));
  Vue.$messagebox = Vue.prototype.$messagebox = _messageBox.default;
  Vue.$toast = Vue.prototype.$toast = _toast.default;
  Vue.$indicator = Vue.prototype.$indicator = _indicator.default;
}; // auto install


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

;
var _default = {
  install: install,
  version: version,
  Header: _header.default,
  Button: _button.default,
  Cell: _cell.default,
  CellSwipe: _cellSwipe.default,
  Field: _field.default,
  Badge: _badge.default,
  Switch: _switch.default,
  Spinner: _spinner.default,
  TabItem: _tabItem.default,
  TabContainerItem: _tabContainerItem.default,
  TabContainer: _tabContainer.default,
  Navbar: _navbar.default,
  Tabbar: _tabbar.default,
  Icon: _icon.default,
  Image: _image.default,
  ImagePreview: _imagePreview.default,
  Search: _search.default,
  Checklist: _checklist.default,
  Radio: _radio.default,
  Loadmore: _loadmore.default,
  Actionsheet: _actionsheet.default,
  Popup: _popup.default,
  Popper: _popper.default,
  Swipe: _swipe.default,
  SwipeItem: _swipeItem.default,
  Range: _range.default,
  Picker: _picker.default,
  Progress: _progress.default,
  Toast: _toast.default,
  Indicator: _indicator.default,
  Dialog: _dialog.default,
  MessageBox: _messageBox.default,
  InfiniteScroll: _infiniteScroll.default,
  Lazyload: _lazyload.default,
  DatetimePicker: _datetimePicker.default,
  IndexList: _indexList.default,
  IndexSection: _indexSection.default,
  PaletteButton: _paletteButton.default,
  NoticeBar: _noticeBar.default,
  Sticky: _sticky.default
};
exports.default = _default;