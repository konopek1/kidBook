import { render } from '@testing-library/react';
import App from './App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {

  test('Render properly check snapshot state', () => {
    const appComponent = renderer.create(<App />);
    
    let tree = appComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

});
