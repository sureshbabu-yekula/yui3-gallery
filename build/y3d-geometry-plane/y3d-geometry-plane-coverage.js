if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/y3d-geometry-plane/y3d-geometry-plane.js']) {
   __coverage__['build/y3d-geometry-plane/y3d-geometry-plane.js'] = {"path":"build/y3d-geometry-plane/y3d-geometry-plane.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":42,"column":68}},"2":{"start":{"line":3,"column":0},"end":{"line":40,"column":3}}},"branchMap":{},"code":["(function () { YUI.add('y3d-geometry-plane', function (Y, NAME) {","","Y.Plane = Y.Base.create('plane', Y.Geometry, [], {","}, {","\tATTRS: {","\t\tindices: {","\t\t\tvalue: [","\t\t\t\t0, 1, 2,","\t\t\t\t0, 2, 3","\t\t\t]","\t\t},","","\t\tnormals: {","\t\t\tvalue: [","\t\t\t\t0, 0, 1,","\t\t\t\t0, 0, 1,","\t\t\t\t0, 0, 1,","\t\t\t\t0, 0, 1","\t\t\t]","\t\t},","","\t\ttextureCoordinates: {","\t\t\tvalue: [","\t\t\t\t0, 0,","\t\t\t\t1, 0,","\t\t\t\t1, 1,","\t\t\t\t0, 1","\t\t\t]","\t\t},","","\t\tvertices: {","\t\t\tvalue: [","\t\t\t\t-1, -1,  0,","\t\t\t\t1,  -1,  0,","\t\t\t\t1,   1,  0,","\t\t\t\t-1,  1,  0","\t\t\t]","\t\t}","\t}","});","","}, 'gallery-2013.08.15-00-45', {\"requires\": [\"y3d-geometry-base\"]});","","}());"]};
}
var __cov_6iSbIqhA9XpWdfl0IL$yUQ = __coverage__['build/y3d-geometry-plane/y3d-geometry-plane.js'];
__cov_6iSbIqhA9XpWdfl0IL$yUQ.s['1']++;YUI.add('y3d-geometry-plane',function(Y,NAME){__cov_6iSbIqhA9XpWdfl0IL$yUQ.f['1']++;__cov_6iSbIqhA9XpWdfl0IL$yUQ.s['2']++;Y.Plane=Y.Base.create('plane',Y.Geometry,[],{},{ATTRS:{indices:{value:[0,1,2,0,2,3]},normals:{value:[0,0,1,0,0,1,0,0,1,0,0,1]},textureCoordinates:{value:[0,0,1,0,1,1,0,1]},vertices:{value:[-1,-1,0,1,-1,0,1,1,0,-1,1,0]}}});},'gallery-2013.08.15-00-45',{'requires':['y3d-geometry-base']});
