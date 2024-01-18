# AutoType JS
A simple auto-typing/typewriter effect written in vanilla JS.  
  
[Demo](https://autotype.zakweb.dev/)

### Usage:

Include:

```html
<script src="https://autotype.zakweb.dev/dist/autotype.min.js" type="text/javascript"></script>
```
Or download the files you want from the releases page.  
  
To add the effect to an element, call the `AutoType()` function with the following arguments:
- A reference to the element, or its ID.
- The string you want typed.
- And optionally, the delay (in ms) between typed characters.

```javascript
AutoType("element_ID", "Your Text Here", character_delay);
```

`AutoBackspace()` can also be called with the same arguments (except the string to be typed) to get a backspacing effect:  
```javascript
AutoBackspace("element_ID", character_delay);
```

Both of these functions can be `await`ed so you can run your own code after the effects have finished.
```javascript
await AutoBackspace("element_ID");

// Or

AutoBackspace("element_ID").then(() => {
	// Do something awesome
});
```
  
### CSS:
You can also use autotype.css to add a blinking cursor to the end of your autotyped text. Just add the `autotype_horizontal_cursor` or `autotype_vertical_cursor` class to the text element:

```html
<link rel="stylesheet" href="https://gigabyte5671.github.io/AutoType/dist/autotype.min.css">  
  
<h1 id="elem" class="autotype_horizontal_cursor">Horizontal cursor!_</h1>
<h1 id="elem" class="autotype_vertical_cursor">Vertical cursor!|</h1>
```

> [!NOTE]  
> Using either of these classes will set the text element's position to relative.
