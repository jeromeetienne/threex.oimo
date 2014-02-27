threex.sportballs
=============

threex.sportballs is a three.js extension which provide sport balls models.
This is a content extension, it helps when starting new projects.

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.sportballs/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.sportballs/blob/master/examples/basic.html)\] :
It shows all the balls on a single screen.

How To Install It
=================

You can install it via script tag

```html
<script src='threex.sportballs.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.sportballs
```

How To Use It
=============

To create a backball, just do

```
var mesh = THREEx.SportBalls.createBasket()
scene.add(mesh)
```

To create a beachball, just do

```
var mesh	= THREEx.SportBalls.createBeach()
scene.add(mesh)
```

To create a tennisball, just do

```
var mesh	= THREEx.SportBalls.createTennis()
scene.add(mesh)
```

To create a football, just do

```
var mesh	= THREEx.SportBalls.createFootball()
scene.add(mesh)
```

To create a baseball/softball, just do

```
var mesh	= THREEx.SportBalls.createSoftball()
scene.add(mesh)
```
		