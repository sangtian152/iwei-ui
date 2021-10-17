import Swipe from './src/swipe';
Swipe.install = (Vue) => Vue.component(Swipe.name, Swipe);
export { default as SwipeItem }  from './src/swipe-item';
export default Swipe;
