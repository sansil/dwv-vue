webpackJsonp([1],{0:function(e,t){},"0UbK":function(e,t){},1:function(e,t){},"4+hh":function(e,t){},"A+Sw":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),s=a("Lgyv"),n=a.n(s),d=a("hoy5"),o=a.n(d);i.default.use(n.a),o.a.utils.decodeQuery=o.a.utils.base.decodeQuery,o.a.gui.displayProgress=function(){},o.a.gui.getWindowSize=o.a.gui.base.getWindowSize,o.a.gui.getElement=o.a.gui.base.getElement,o.a.gui.refreshElement=o.a.gui.base.refreshElement,o.a.image.decoderScripts={jpeg2000:"static/dwv/decoders/pdfjs/decode-jpeg2000.js","jpeg-lossless":"static/dwv/decoders/rii-mango/decode-jpegloss.js","jpeg-baseline":"static/dwv/decoders/pdfjs/decode-jpegbaseline.js"};var r={name:"dwv",data:function(){return{legend:"Powered by dwv "+o.a.getVersion()+" and Vue.js "+i.default.version,dwvApp:null,loaded:0}},mounted:function(){this.dwvApp=new o.a.App,this.dwvApp.init({containerDivId:"dwv",fitToWindow:!0,tools:["Scroll","ZoomAndPan","WindowLevel","Draw"],shapes:["Ruler"],isMobile:!0});var e=this;this.dwvApp.addEventListener("load-progress",function(t){e.loaded=t.loaded})},methods:{onClick:function(e){this.dwvApp.onChangeTool(e)}}},l=a("XyMi");var c=function(e){a("A+Sw")},u={name:"App",components:{dwvVue:Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dwv"}},[a("md-progress-bar",{attrs:{"md-mode":"determinate","md-value":e.loaded}}),e._v(" "),a("div",{staticClass:"button-row"},[a("md-button",{staticClass:"md-raised md-primary",attrs:{value:"Scroll"},on:{click:e.onClick}},[e._v("Scroll")]),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{value:"WindowLevel"},on:{click:e.onClick}},[e._v("WindowLevel")]),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{value:"ZoomAndPan"},on:{click:e.onClick}},[e._v("ZoomAndPan")]),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{value:"Draw"},on:{click:e.onClick}},[e._v("Draw")])],1),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"legend"},[e._v(e._s(e.legend))])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"layerContainer"},[t("div",{staticClass:"dropBox"}),this._v(" "),t("canvas",{staticClass:"imageLayer"},[this._v("Only for HTML5 compatible browsers...")]),this._v(" "),t("div",{staticClass:"drawDiv"})])}],!1,c,"data-v-aad67d58",null).exports}};var v=function(e){a("0UbK")},p=Object(l.a)(u,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("dwvVue")],1)},[],!1,v,null,null).exports;a("4+hh"),a("giDI");i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:p},template:"<App/>"})},giDI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.99d9f2c0b9ede880c9d8.js.map