YUI.add("gallery-affix",function(e,t){function n(t){var n=t.host,r=t.offset||Math.floor(parseFloat(n.getData("offset"))),i=n.getXY();e.Widget&&n instanceof e.Widget&&(n=n.get("boundingBox")),this._node=n,this._offset=r,this._offsetLeft=typeof r.left=="number"?r.left:n.getData("offset-left")||0,this._offsetTop=typeof r.top=="number"?r.top:n.getData("offset-top")||0,this._x=i[0],this._y=i[1],this._handle=e.on("scroll",e.throttle(e.bind(this.refresh,this),15)),this.refresh()}e.mix(n.prototype,{refresh:function(){var t=this._offset,n=this._offsetLeft||t,r=this._offsetTop||t,i=this._y-e.DOM.docScrollY()<r||this._x-e.DOM.docScrollX()<n;this._node.setStyles({position:i?"fixed":"",left:i&&this._offsetLeft?n+"px":"",top:i&&this._offsetTop?r+"px":""})},destroy:function(){this._handle.detach(),this._handle=this._node=null}}),n.NS="affix",e.namespace("Plugin").Affix=n},"gallery-2013.05.15-21-12",{requires:["node-base","node-screen","node-style","node-pluginhost","yui-throttle","oop"]});