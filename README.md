# react-use-media

[`react-media`](https://github.com/ReactTraining/react-media) using hooks.

```js
import {useMedia} from 'react-use-media';

const Demo = () => {
  const isWide = useMedia({
    minWidth: 1000,
  });

  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
  );
};
```

Or, prepare hook once.

```js
const useMedia = createUseMedia({
  minWidth: 1000,
});

const Demo = () => {
  const isWide = useMedia();

  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
  );
};
```
