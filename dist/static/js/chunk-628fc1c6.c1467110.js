(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628fc1c6"],{3837:function(p,t,o){},a53b:function(p,t,o){"use strict";o("3837")},adc2:function(p,t,o){"use strict";o.r(t);var i=function(){var p=this,t=p.$createElement,o=p._self._c||t;return o("div",{staticClass:"page-popup"},[o("h1",{staticClass:"page-title"},[p._v("Popup")]),o("div",{staticClass:"page-popup-wrapper"},[o("zmbl-button",{ref:"button",attrs:{size:"large"},nativeOn:{click:function(t){p.popupVisible1=!0}}},[p._v("中部弹出 popup")]),o("zmbl-button",{attrs:{size:"large"},nativeOn:{click:function(t){p.popupVisible2=!0}}},[p._v("上侧弹出 popup")]),o("zmbl-button",{attrs:{size:"large"},nativeOn:{click:function(t){p.popupVisible3=!0}}},[p._v("右侧弹出 popup")]),o("zmbl-button",{attrs:{size:"large"},nativeOn:{click:function(t){p.popupVisible4=!0}}},[p._v("下侧弹出 popup")])],1),o("zmbl-popup",{staticClass:"zmbl-popup-1",style:{top:p.buttonBottom+10+"px"},attrs:{"popup-transition":"popup-fade"},model:{value:p.popupVisible1,callback:function(t){p.popupVisible1=t},expression:"popupVisible1"}},[o("h1",[p._v("popup")]),o("p",[p._v("/ ˈpɑpˌʌp /")]),o("p",[p._v("n. 弹出式; [棒]内野飞球; 自动起跳式装置")]),o("p",[p._v("adj. 弹起的; 有自动起跳装置的")])]),o("zmbl-popup",{staticClass:"zmbl-popup-2",attrs:{position:"top",modal:!1},model:{value:p.popupVisible2,callback:function(t){p.popupVisible2=t},expression:"popupVisible2"}},[o("p",[p._v("更新成功")])]),o("zmbl-popup",{staticClass:"zmbl-popup-3",attrs:{"close-on-popstate":"",position:"right",modal:!1},model:{value:p.popupVisible3,callback:function(t){p.popupVisible3=t},expression:"popupVisible3"}},[o("zmbl-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(t){p.popupVisible3=!1}}},[p._v("关闭 popup")])],1),o("zmbl-popup",{staticClass:"zmbl-popup-4",attrs:{position:"bottom"},model:{value:p.popupVisible4,callback:function(t){p.popupVisible4=t},expression:"popupVisible4"}},[o("zmbl-picker",{attrs:{slots:p.dateSlots,"visible-item-count":5,"show-toolbar":!1},on:{change:p.onDateChange}})],1)],1)},e=[],s={data:function(){return{popupVisible1:!1,popupVisible2:!1,popupVisible3:!1,popupVisible4:!1,buttonBottom:0,dateSlots:[{flex:1,values:["2016-01","2016-02","2016-03","2016-04","2016-05","2016-06"],className:"slot1",textAlign:"right"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:["2016-01","2016-02","2016-03","2016-04","2016-05","2016-06"],className:"slot3",textAlign:"left"}]}},watch:{popupVisible2:function(p){var t=this;p&&setTimeout((function(){t.popupVisible2=!1}),2e3)}},methods:{onDateChange:function(p,t){t[0]>t[1]&&p.setSlotValue(1,t[0]),this.dateStart=t[0],this.dateEnd=t[1]}},mounted:function(){this.buttonBottom=this.$refs.button.$el.getBoundingClientRect().bottom}},l=s,n=(o("a53b"),o("2877")),a=Object(n["a"])(l,i,e,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-628fc1c6.c1467110.js.map