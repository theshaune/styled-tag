# styled-tag

Styled tag is a simple function that allows you to change the HTML Tag on components built with styled-components.


## Why?

When building websites, often the semantics for SEO and the design can clash. In other words, a semantic H2 for SEO doesn't **always** require the same design, often it will take the design of the H1 or H3 etc. 

This package will allow you to set a default prop on the Component and then override it with the `tag` prop.

If no prop and no default prop is set the function will default to a div tag.


## Installation

```
npm install styled-tag --save
```


## Usage

```js
styledTag(styles: string);
```

```js
import { css } from 'styled-components';
import styledTag from 'styled-tag';

const Title = styledTag(css`
  color: palevioletred;
`);

Title.defaultProps = {
  tag: 'h1'
};

export default () => (
  <div>
    <Title>
      Inspect me to see that I am the default h1.
    </Title>

    <Title tag='h2'>
      Inspect me to see that I am a h2.
    </Title>
  </div>
);
```
