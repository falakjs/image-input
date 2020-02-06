# Image Input

# Installation
`flk install @flk/image-input`

OR 

`npm install @flk/image-input`

OR 

`yarn add @flk/image-input`


# Usage

`hello-world.component.html`

```html
<flk-image-input [src]="this.imageSrc" [required]="true" (change)="this.onChangeImage()" name="image"></flk-image-input>
```

This component is an improved version of the default file input and offers more features.

# General Properties

This the list of all accepted properties

## label

**name**: `label` | `[label]`

The label of the image input shown above it.


# Input attributes

## src

**name**: `src` | `[src]`

The source of the image that is used to view the image. If there's no image provided, a placeholder image will be shown instead.

> To show the placeholder image, You have to Add the following to the `config.js` file:

```js
form: {
    imagePreview: assets('images/placeholder.png'),
}
```
## name

**name**: `name` | `[name]`

**required**: `false` but **Recommended**

Set the input name.

## required

**name**: `required` | `[required]`

**default**: `false`

If set to true, the user **MUST** select a value.

# Events

**name**: `change`

Triggered when user selects an image.

> The selected image object is passed to the event.
