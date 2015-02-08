var THREEx	= THREEx	|| {}

THREEx.Oimo	= {}

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Oimo.createBodyFromMesh	= function(world, mesh, move){


	// TODO this move parameter is crap, remove it
	move	= move !== undefined ? move : true
	console.assert( mesh instanceof THREE.Mesh )
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
			move	: move,
		}
	}else if( mesh.geometry instanceof THREE.SphereGeometry ){
		var options	= {
			type	:'sphere',
			size	: [mesh.geometry.parameters.radius * mesh.scale.x],
			pos	: mesh.position.toArray(),
			rot	: mesh.rotation.toArray().slice(0,3).map(radianToDegree),
			world	: world,
			move	: move,
		}
	}else	console.assert(false, 'Unknown geometry')
	
	var body	= new OIMO.Body(options)
	// console.log('options', options, mesh)
	// console.log('position', body.getPosition(), mesh.position)
	// debugger
	return body

	function radianToDegree(radian) {
		return radian * (180 / Math.PI);
	}
}

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Oimo.Body2MeshUpdater	= function(body, mesh){
	this.update	= function(){
		// console.log('position', body.getPosition())
                mesh.position.copy(body.getPosition());
                // mesh.quaternion.copy(body.getQuaternion());
                // console.log('quaternion', body.getQuaternion());
		var bodyQuaternion	= body.getQuaternion()
		mesh.quaternion.set(
			bodyQuaternion.x,
			bodyQuaternion.y,
			bodyQuaternion.z,
			bodyQuaternion.w
		)
	}
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

	var domElement	= document.createElement('div')
	this.domElement	= domElement
	// domElement.style.color	= 'bl'
	domElement.style.position	= 'absolute'
	domElement.style.top		= '10px'
	domElement.style.left		= '10px'
	domElement.style.width		= '400px'
	domElement.style.height		= '400px'

	var fps=0, time, time_prev=0, fpsint = 0;
	this.update	= function(){
		time = Date.now();
		if (time - 1000 > time_prev) {
			time_prev = time; fpsint = fps; fps = 0;
		} fps++;
		domElement.innerHTML = world.performance.show();
	}
}
