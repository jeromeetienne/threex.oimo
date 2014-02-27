threex.crates
=============

threex.crates is a three.js extension which provide crates models.
This is a content extension, it helps when starting new projects.

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.crates/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.crates/blob/master/examples/basic.html)\] :
It shows all the balls on a single screen.

How To Install It
=================

You can install it via script tag

```html
<script src='threex.crates.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.crates
```

How To Use It
=============

To create a crate0, just do

```
var mesh = THREEx.Crates.createCrate0()
scene.add(mesh)
```

To create a crate1, just do

```
var mesh = THREEx.Crates.createCrate1()
scene.add(mesh)
```

To create a crate2, just do

```
var mesh = THREEx.Crates.createCrate2()
scene.add(mesh)
```
