# angular-slidedeck
Create presentation slides – the AngularJS way!

## Example
Head over to [the example](https://github.com/paperhive/angular-slidedeck-example).

## What does `angular-slidedeck` provide?
 * the native AngularJS module `ngSlidedeck`
 * the directives `<slides>` and `<slide>`
 * a mechanism to change the current slide via a scope variable
 * animation support via `ngAnimate` (AngularJS core module)
 * you're able to use all AngularJS directives in your slides!

`angular-slidedeck` does *not* tie you to a specific CSS framework – it only provides a sane default CSS file for displaying a slide.

## How does the code look like?
```
<slides>
  <slide>
    <div class="slide-body">
      <h1>Welcome to Darth Vader's slide deck</h1>
    </div>
  </slide>
  ...
</slides>
```
