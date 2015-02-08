threex.oimo
===========
threex.oimo is a [threex game extension for three.js](http://www.threejsgames.com/extensions/). It provides a [realistic physics](http://en.wikipedia.org/wiki/Game_physics) easy to include in your own games. So you can take objects in your game and make them fall as if it was the real world! You can code a [pool game](http://en.wikipedia.org/wiki/Pool_\(cue_sports\)) in a day!
You make rocks fall from the sky in a realistic fashion! Sky is the limit!
It is a warper over the excelent library [oimo.js](https://github.com/lo-th/Oimo.js) physics library. [lo-th](https://plus.google.com/114170447432405103307/posts), the author does [a lot of crazy things](http://3dflashlo.wordpress.com/)! Be sure to check it out!


Show Don't Tell
===============
* [examples/crates.html](http://jeromeetienne.github.io/threex.oimo/examples/crates.html)
\[[view source](https://github.com/jeromeetienne/threex.oimo/blob/master/examples/crates.html)\] :
It shows a slow motion demo of a football hitting a wall of crates.
* [examples/basic.html](http://jeromeetienne.github.io/threex.oimo/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.oimo/blob/master/examples/basic.html)\] :
It shows a bunch of cube and sphere falling on a ground.
* [examples/demo.html](http://jeromeetienne.github.io/threex.oimo/examples/demo.html)
\[[view source](https://github.com/jeromeetienne/threex.oimo/blob/master/examples/demo.html)\] :
It shows a more elaborate rendering. Planets falling down a pyramid in space.

A Screenshot
============
[![screenshot](https://raw.githubusercontent.com/jeromeetienne/threex.oimo/master/examples/images/screenshot-threex-oimo-512x512.jpg)](http://jeromeetienne.github.io/threex.oimo/examples/demo.html)


How To Install It
=================

You can install it via script tag

```
 <script src='threex.oimo.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```
bower install threex.oimo
```

How To Use It
=============

Well first you need to create a oimo.js world. You do that like this

```
var world	= new OIMO.World()
```

Then, at every frame, update your mesh position/rotation.

```
world.step()
```

Then you need to create physics bodies and make them move

## .createBodyFromMesh()

It will create the ```IOMO.Body``` from a three.js mesh you give it. 
Currently it support ```THREE.CubeGeometry``` and ```THREE.SphereGeometry```. First create a normal ```THREE.Mesh```

```
var geometry	= new THREE.CubeGeometry(1,1,1)
var material	= new THREE.MeshNormalMaterial()
var mesh	= new THREE.Mesh( geometry, material )
scene.add(mesh)
```

Then you create the ```IOMO.Body``` for it

```	
var body	= THREEx.Iomo.createBodyFromMesh(world, mesh)
```

## .Body2MeshUpdater()

It will update the position/rotation of a ```THREE.Mesh``` 
based on a position/rotation of a ```IOMO.Body```. You need
this to see your meshes moves according to oimo.js physics.
First you create the object

```
var updater	= new THREEx.Iomo.Body2MeshUpdater(body, mesh)
```

Then, at every frame, update your mesh position/rotation.

```
updater.update()
```


## .Stats()

It will display statistic from oimo.js, it may be useful to know what is going on.
It acts very much like 
[mrdoob's stats]()
or 
[threex.rendererstats]().

```
var oimoStats	= new THREEx.Iomo.Stats(world)
document.body.appendChild(oimoStats.domElement)
```

Then, at every frame, update it.

```
oimoStats.update()
```
