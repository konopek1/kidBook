import App from '../App';
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

describe('App', () => {

  test('Render properly check snapshot state', () => {
    const appComponent = renderer.create(<MemoryRouter><App /></MemoryRouter>);
    
    let tree = appComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

});
