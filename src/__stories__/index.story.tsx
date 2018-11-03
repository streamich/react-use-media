import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useMedia, createUseMedia} from '..';

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

const useMedia1 = createUseMedia({
  minWidth: 1000,
});

const Demo3 = () => {
  const isWide = useMedia1();

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


storiesOf('createUseMedia', module)
  .add('Demo', () =>
    <Demo3/>
  )
