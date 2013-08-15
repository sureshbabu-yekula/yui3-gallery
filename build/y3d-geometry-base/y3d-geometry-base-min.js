YUI.add("y3d-geometry-base",function(e,t){var n=e.Lang;e.Geometry=e.Base.create("geometry",e.y3d.Model,[],{_generateId:function(){return Math.floor(Math.random()*16777215).toString(16)},_setColor:function(t){var r=this,i=r.get("vertices").length/3,s=[],o;n.isArray(t)&&t.length===3?t.push(1):n.isString(t)&&(t=e.Color.normalizedColorArray(t));for(o=0;o<i;o++)s=s.concat(t);return s},_setTexture:function(t){return n.isString(t)&&(t=new e.Texture({imageUrl:t})),t},_setWireframe:function(e){var t=this,n=t.get("lines"),r=t.get("indices"),i;if(e&&n.length==0){for(i=0;i<r.length;i+=3)n.push(r[i]),n.push(r[i+1]),n.push(r[i+1]),n.push(r[i+2]),n.push(r[i+2]),n.push(r[i]);t.set("lines",n)}return e}},{ATTRS:{color:{value:"white",setter:"_setColor",validator:function(e){return n.isArray(e)||n.isString(e)}},id:{writeOnce:!0,valueFn:"_generateId"},indices:{value:[],validator:n.isArray},lines:{value:[],validator:n.isArray},normals:{value:[],validator:n.isArray},texture:{value:null,setter:"_setTexture"},textureCoordinates:{value:[],validator:n.isArray},vertices:{value:[],validator:n.isArray},wireframe:{value:!1,setter:"_setWireframe",validator:n.isBoolean}}})},"gallery-2013.08.15-00-45",{requires:["y3d-model","y3d-texture"]});
