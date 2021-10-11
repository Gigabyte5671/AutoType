# AutoType
A simple auto-typing/typewriter effect written in vanilla JS.  
  
You can see the demo [here.](https://gigabyte5671.github.io/AutoType/)

### Usage ###

Include:

```html
<script src="https://gigabyte5671.github.io/AutoType/dist/autotype.min.js" type="text/javascript"></script>
```
Or download the zip from the releases page.  
  
To add the effect to a text element, call the AutoType() function with arguments for the text element's ID, the string you want typed, and optionally a callback function for when the effect has finished.  

```javascript
AutoType("element_ID", "Your Text Here", <optional> callback);
```

You can also use autotype.css to add a blinking cursor to the end of your autotyped text. Just add the autotype_horizontal_cursor or autotype_vertical_cursor class to the text element:

```html
<link rel="stylesheet" href="https://gigabyte5671.github.io/AutoType/dist/autotype.min.css">  
  
<h1 id="elem" class="autotype_horizontal_cursor">Horizontal cursor!</h1>
<h1 id="elem" class="autotype_vertical_cursor">Vertical cursor!</h1>
```

(Caution: This will also set the text element's position to relative.)  
