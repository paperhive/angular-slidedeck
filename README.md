# angular-slidedeck
Create presentation slides – the AngularJS way!

## Example and live demo
Head over to the [example](https://github.com/paperhive/angular-slidedeck-example) or the [example live demo](https://paperhive.github.io/angular-slidedeck-example/).

## What does `angular-slidedeck` provide?
 * the native AngularJS module `ngSlidedeck`
 * the directives `<slides>` and `<slide>`, see [the code](#how-does-the-code-look-like)
 * a mechanism to change the current slide via a scope variable
 * animation support via `ngAnimate` (AngularJS core module)
 * you're able to use all AngularJS directives in your slides!

`angular-slidedeck` does *not* tie you to a specific CSS framework – it only provides a sane default CSS file for displaying a slide.

## How does the code look like?
```
<slides>
  <slide>
    <h1>Welcome to Darth Vader's slide deck</h1>
  </slide>
  ...
</slides>
```

## Install
```
bower install angular-slidedeck
```
Add `angular-slidedeck` to your `<head>`:
```
<script src="bower_components/angular-slidedeck/angular-slidedeck.min.js"></script>
<link rel="stylesheet" href="bower_components/angular-slidedeck/angular-slidedeck.min.css">
```
Then inject the `ngSlidedeck` module to your AngularJS app:
```
angular.module('myApp', ['ngSlidedeck']);
```
### Dependencies
```
bower install angular angular-animate
```
Add dependencies to your `<head>`:
```
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-animate/angular-animate.min.js"></script>
```
