YUI.add("gallery-inview-event",function(e,t){var n={_getTop:function(e){var t=0;while(!!e)t=parseInt(t,10)+parseInt(e.offsetTop,10),e=e.offsetParent;return console.log("--->",t),t},_attachedNode:[],_isInitialized:!1,_getScroll:function(){var e=this;try{return window.scrollY+e._getViewPortHeight()}catch(t){return 1e5}},_fireInView:function(e){var t=this,n=[],r,i;for(i=0;i<t._attachedNode.length;i++)r=t._attachedNode[i].top,r<e?t._attachedNode[i].notifier.fire():(console.log("not fired",r,e),n.push(t._attachedNode[i]));t._attachedNode=n},_getViewPortHeight:function(){try{return document.documentElement.clientHeight||1200}catch(e){return 1200}},_initialize:function(){var t=this;e.on("scroll",function(){var e=t._getScroll();t._fireInView(e)})}},r=n;e.Event.define("inview",{on:function(e,t,n){r._isInitialized||r._initialize(),r._attachedNode.push({node:e,top:r._getTop(e._node),notifier:n}),r._fireInView(r._getViewPortHeight())}})},"@VERSION@",{requires:["node","event"]});