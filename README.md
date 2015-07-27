# container-class

Manage CSS classes on an element that reflect exclusive state based on a slug. For example, if you want to toggle visual theme changes in a page, you could do this.

```javascript
var containerClass = require('container-class');
var el = document.querySelector('html');
containerClass(el, 'theme', 'dark');
```

The renderd DOM would be:
```html
<html class="theme-dark">....</html>
```
If you wanted to update the page theme, like after some user selection, you would:

```javascript
containerClass(el, 'theme', 'bold');
```

And the DOM would now be:
```html
<html class="theme-bold">....</html>
```
