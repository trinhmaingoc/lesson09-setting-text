(this["webpackJsonpsetting-text"]=this["webpackJsonpsetting-text"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),i=(n(12),n(1)),l=n(2),s=n(3),u=n(4),m=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).setActiveColor=function(e){o.props.onReceiveColor(e)},o.state={colors:["red","green","blue","yellow","#ccc"]},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.colors.map((function(t,n){return a.a.createElement("span",{key:n,style:{backgroundColor:t},className:e.props.color===t?"active":"",onClick:function(){return e.setActiveColor(t)}})}));return a.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},a.a.createElement("div",{className:"panel panel-primary"},a.a.createElement("div",{className:"panel-heading"},a.a.createElement("h3",{className:"panel-title"},"Color Picker")),a.a.createElement("div",{className:"panel-body"},t,a.a.createElement("hr",null))))}}]),n}(o.Component)),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).setFontSize=function(t){e.props.onReceiveFontSize(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"panel panel-warning"},a.a.createElement("div",{className:"panel-heading"},a.a.createElement("h3",{className:"panel-title"},"Size : ",this.props.fontSize)),a.a.createElement("div",{className:"panel-body"},a.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.setFontSize(2)}},"T\u0103ng")," \xa0",a.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.setFontSize(-2)}},"Gi\u1ea3m")))}}]),n}(o.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onClick=function(){e.props.onReset()},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onClick},"Reset")}}]),n}(o.Component),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},a.a.createElement("p",null,"Color : ",this.props.color," - Fontsize : ",this.props.fontSize,"px"),a.a.createElement("div",{id:"content",style:{color:this.props.color,fontSize:this.props.fontSize}},"N\u1ed9i dung setting"))}}]),n}(o.Component),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).onSetColor=function(e){o.setState({color:e})},o.onSetFontSize=function(e){o.state.fontSize+e>=8&&o.state.fontSize+e<=36&&o.setState({fontSize:o.state.fontSize+e})},o.onResetSetting=function(){o.setState({color:"red",fontSize:12})},o.state={color:"red",fontSize:12},o}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container mt-50"},a.a.createElement("div",{className:"row"},a.a.createElement(m,{color:this.state.color,onReceiveColor:this.onSetColor}),a.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},a.a.createElement(p,{fontSize:this.state.fontSize,onReceiveFontSize:this.onSetFontSize}),a.a.createElement(f,{onReset:this.onResetSetting})),a.a.createElement(h,{color:this.state.color,fontSize:this.state.fontSize})))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.788b4349.chunk.js.map