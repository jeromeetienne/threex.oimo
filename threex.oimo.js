/**
 * @namespace 
 */
var THREEx	= THREEx	|| {}

/**
 * @namespace 
 */
THREEx.Oimo	= {}

//////////////////////////////////////////////////////////////////////////////////
//		THREEx.Oimo.createBodyFromMesh
//////////////////////////////////////////////////////////////////////////////////

/**
 * Helper to create a body from a mesh
 * 
 * @param {OIMO.World} world - the physics world
 * @param {THREE.Mesh} mesh  - the mesh 
 * @param {Boolean=} move  - true if the object gonna move, false othersize. default to true
 */
THREEx.Oimo.createBodyFromMesh	= function(world, mesh, userOptions){
	userOptions	= userOptions	|| {}

	// build body options based on mesh
	if( mesh.geometry instanceof THREE.BoxGeometry ){
		var options	= {
			type	:'box',
			size	: [
				mesh.geometry.parameters.width  * mesh.scale.x,
				mesh.geometry.parameters.height * mesh.scale.y,
				mesh.geometry.parameters.depth  * mesh.scale.z,
			],
			pos	: mesh.position.toArray(),
			rot	: mesh.rotation.toArray().slice(0,3).map(radianToDegree),
			world	: world,
			move	: true,
		}
	}else if( mesh.geometry instanceof THREE.SphereGeometry ){
		var options	= {
			type	:'sphere',
			size	: [mesh.geometry.parameters.radius * mesh.scale.x],
			pos	: mesh.position.toArray(),
			rot	: mesh.rotation.toArray().slice(0,3).map(radianToDegree),
			world	: world,
			move	: true,
		}
	}else	console.assert(false, 'Unknown geometry')
	
	// push the object from userOptions
	Object.keys(userOptions).forEach(function(name){
		options[name]	= userOptions[name]
	})

	// actually build the OIMO.Body
	var body	= new OIMO.Body(options)
	return body

	//////////////////////////////////////////////////////////////////////////////////
	//		Comments
	//////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * convert radian to degree
	 * 
	 * @param {Number} radian - the input
	 * @return {Number} - the result
	 */
	function radianToDegree(radian) {
		return radian * (180 / Math.PI);
	}
}

//////////////////////////////////////////////////////////////////////////////////
//		THREEx.Oimo.Body2MeshUpdater
//////////////////////////////////////////////////////////////////////////////////

/**
 * update a mesh with a body
 * 
 * @param {THREE.Object3D} object3d - the object3d to update
 * @param {OIMO.Body} body - the body from which we update
 */
THREEx.Oimo.updateObject3dWithBody	= function(object3d, body){
	// copy the position
        object3d.position.copy(body.getPosition());
	// copy the rotation
        // - this works on three r70 only
        //   ``` object3d.quaternion.copy(body.getQuaternion());
	var bodyQuaternion	= body.getQuaternion()
	object3d.quaternion.set(
		bodyQuaternion.x,
		bodyQuaternion.y,
		bodyQuaternion.z,
		bodyQuaternion.w
	)
}



//////////////////////////////////////////////////////////////////////////////////
//		THREEx.Oimo.Stats
//////////////////////////////////////////////////////////////////////////////////

/**
 * display stats ala stats.js
 * 
 * @param {OIMO.World} world - the oimo world
 */
THREEx.Oimo.Stats	= function(world){
	// build the DOMElement
	var domElement	= document.createElement('div')
	this.domElement	= domElement
	domElement.style.position	= 'absolute'
	domElement.style.top		= '10px'
	domElement.style.left		= '10px'
	domElement.style.width		= '400px'
	domElement.style.height		= '400px'

	// update periodically the stats DOMElement
	var fps=0, time, time_prev=0, fpsint = 0;
	this.update	= function(){
		time = Date.now();
		if (time - 1000 > time_prev) {
			time_prev = time; fpsint = fps; fps = 0;
		} fps++;
		domElement.innerHTML = world.performance.show();
	}
}
