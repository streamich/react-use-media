import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useMedia} from '..';

const Demo1 = () => {
  const isWide = useMedia('(min-width: 1000px)');

  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
  );
};

const Demo2 = () => {
  const isWide = useMedia({
    minWidth: 1000,
  });

  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
  );
};

storiesOf('useMedia', module)
  .add('(min-width: 1000px)', () =>
    <Demo1/>
  )
  .add('{minWidth: 1000}', () =>
    <Demo2/>
  );
