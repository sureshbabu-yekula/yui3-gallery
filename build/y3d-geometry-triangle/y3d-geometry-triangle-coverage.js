if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/y3d-geometry-triangle/y3d-geometry-triangle.js']) {
   __coverage__['build/y3d-geometry-triangle/y3d-geometry-triangle.js'] = {"path":"build/y3d-geometry-triangle/y3d-geometry-triangle.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":38,"column":68}},"2":{"start":{"line":3,"column":0},"end":{"line":36,"column":3}}},"branchMap":{},"code":["(function () { YUI.add('y3d-geometry-triangle', function (Y, NAME) {","","Y.Triangle = Y.Base.create('triangle', Y.Geometry, [], {","}, {","\tATTRS: {","\t\tindices: {","\t\t\tvalue: [","\t\t\t\t0, 1, 2","\t\t\t]","\t\t},","","\t\tnormals: {","\t\t\tvalue: [","\t\t\t\t0, 0, 1,","\t\t\t\t0, 0, 1,","\t\t\t\t0, 0, 1","\t\t\t]","\t\t},","","\t\ttextureCoordinates: {","\t\t\tvalue: [","\t\t\t\t0, 0,","\t\t\t\t1, 0,","\t\t\t\t1, 1","\t\t\t]","\t\t},","","\t\tvertices: {","\t\t\tvalue: [","\t\t\t\t-1, -1, 0,","\t\t\t\t1, -1, 0,","\t\t\t\t0, Math.sqrt(0.75), 0","\t\t\t]","\t\t}","\t}","});","","}, 'gallery-2013.08.15-00-45', {\"requires\": [\"y3d-geometry-base\"]});","","}());"]};
}
var __cov_LAoXoirNTO0nb6sUxCdObg = __coverage__['build/y3d-geometry-triangle/y3d-geometry-triangle.js'];
__cov_LAoXoirNTO0nb6sUxCdObg.s['1']++;YUI.add('y3d-geometry-triangle',function(Y,NAME){__cov_LAoXoirNTO0nb6sUxCdObg.f['1']++;__cov_LAoXoirNTO0nb6sUxCdObg.s['2']++;Y.Triangle=Y.Base.create('triangle',Y.Geometry,[],{},{ATTRS:{indices:{value:[0,1,2]},normals:{value:[0,0,1,0,0,1,0,0,1]},textureCoordinates:{value:[0,0,1,0,1,1]},vertices:{value:[-1,-1,0,1,-1,0,0,Math.sqrt(0.75),0]}}});},'gallery-2013.08.15-00-45',{'requires':['y3d-geometry-base']});
