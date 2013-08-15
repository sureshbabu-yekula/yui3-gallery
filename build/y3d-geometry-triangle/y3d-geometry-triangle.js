YUI.add('y3d-geometry-triangle', function (Y, NAME) {

Y.Triangle = Y.Base.create('triangle', Y.Geometry, [], {
}, {
	ATTRS: {
		indices: {
			value: [
				0, 1, 2
			]
		},

		normals: {
			value: [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1
			]
		},

		textureCoordinates: {
			value: [
				0, 0,
				1, 0,
				1, 1
			]
		},

		vertices: {
			value: [
				-1, -1, 0,
				1, -1, 0,
				0, Math.sqrt(0.75), 0
			]
		}
	}
});

}, 'gallery-2013.08.15-00-45', {"requires": ["y3d-geometry-base"]});
