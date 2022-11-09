# WAI-ARIA example

```html
<form>
  <label for="nameInput">Name</label>
  <input type="text" 
    id="nameInput"
    name="name"
    aria-invalid="true"
    aria-descibedby="helperText">
  <div id="helperText" class="error">Name must not be empty</div>
</form>
```
