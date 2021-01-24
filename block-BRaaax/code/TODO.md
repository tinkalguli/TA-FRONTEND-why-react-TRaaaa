# Button Design System

Create multiple sets of button on the basis of the following:

- `type`
- `size`
- `color`

## These are the requirements

Button Types -

- primary
- secondary
- tertiary

Button Sizes -

- small
- medium
- large

- Component will also accept a `handleClick` prop which will accept a callback function. That callback function will be called when you click on the button.

### Bonus

Add Theme Support -

- light
- dark

### Example of using the Button component

```jsx
<Button
  size="medium"
  label="Button"
  type="primary"
/>

<Button
  size="small"
  label="Button"
  type="secondary"
/>

<Button
  size="large"
  label="Button"
  type="tertiary"
  onClickHandler={() => alert("You CLicked Me!")}
/>
```

### Demo

![Button Display](https://github.com/nnnkit/react-tasks/raw/master/button-types/buttons.png)
