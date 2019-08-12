
### Demo/Tutorial available here: <a href="#">https://swanson-tyler.github.io/motionlab/</a>

Features 🎉
---------------

* **Simple** – Uses basic CSS transition animations.
* **Advanced Control** – Customize every aspect of the reveal to match any design.

Getting Started
---------------

1. Install:

  ```
  npm install --save react-text-reveal
  ```

2. Use:

```jsx
<Reveal>WELCOME!</Reveal>
```

```jsx
<WordReveal
    copy={['Word Reveal']}
    canPlay={true}
/>
```

```jsx
<MultilineReveal
    copy={['Multiline', 'Reveal']}
    canPlay={true}
/>
```

```jsx
<CharacterReveal
    copy={['Character', 'Reveal']}
    canPlay={true}
/>
```

API
---------------

## Basic Properties

These props can be used on all 4 component exports. (<Reveal />, <WordReveal/>, <MultilineReveal />, <CharacterReveal />)

- **className** *(string)*  
  This prop allows you to append your own custom className to the outer div of the component.

- **ease** *(string)*  
  This prop allows you to control the transition-timing-function of your animation.

- **from** *(string)*  
  This prop allows you to control which direction your animation starts from.

- **duration** *(float)*
  This prop allows you to control the transition-duration of you animation in ms.

- **offset** *(float)*  
  The distance (in px) your animation travels.

- **opacityDelay** *(float)*  
  The amount of delay in ms for the 'opacity' property.

- **perspective** *(boolean)*  
  Whether your animation uses CSS 3D perspective.

- **perspectiveFOV** *(integer)*  [default: 1000]
  This prop sets the perspective (in px) property of your animation. (This requires the 'perspective' prop be set to 'true')

- **perspectiveX** *(integer)*  [default: 0]
  This prop sets the rotateX() property of your animation. (This requires the 'perspective' prop be set to 'true')

- **perspectiveY** *(integer)*  [default: 0]
  This prop sets the rotateY() property of your animation. (This requires the 'perspective' prop be set to 'true')

- **perspectiveZ** *(integer)*  [default: 0]
  This prop sets the rotateZ() property of your animation. (This requires the 'perspective' prop be set to 'true')

## <Reveal /> Specific Properties

These props can be used for the <WordReveal /> component.

- **copy** *(children)*  
  This can be any valid jsx.

## <WordReveal /> Specific Properties

These props can be used for the <WordReveal /> component.

- **copy** *(array<string>)*  
  The copy to be animated. Separate array values represent new lines (\n).

- **multilineMasking** *(boolean)* [default: false]
  Whether each line of your animation should be masked out by its boundary box.

- **multilineOffsetDelay** *(integer)* [default: 200]  
  The time delay (in ms) between each separate line of your animation.

- **wordOffsetDelay** *(integer)* [default: 200]  
  The time delay (in ms) between each separate word of your animation.


## <MultilineReveal /> Specific Properties

These props can be used for the <MultilineReveal /> component.

- **copy** *(array<string>)*  
  The copy to be animated. Separate array values represent new lines (\n).

- **multilineMasking** *(boolean)* [default: false]
  Whether each line of your animation should be masked out by its boundary box.

- **multilineOffsetDelay** *(integer)* [default: 200]  
  The time delay (in ms) between each separate line of your animation.


## <CharacterReveal /> Specific Properties

These props can be used for the <CharacterReveal /> component.

- **copy** *(array<string>)*  
  The copy to be animated. Separate array values represent new lines (\n).

- **multilineMasking** *(boolean)* [default: false]  
  Whether each line of your animation should be masked out by its boundary box.

- **multilineOffsetDelay** *(integer)* [default: 200]  
  The time delay (in ms) between each separate line of your animation.

- **characterOffsetDelay** *(integer)* [default: 25]  
  The time delay (in ms) between each separate character of your animation.

 **characterWordSpacing** *(string)* [default: '.15em']  
  The space between the words of each line. (Normal css text styling doesn't work properly, so spacing must be added manually.)


Contributing
---------------

I'd love that.