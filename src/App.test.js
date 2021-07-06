import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import App, { Todo } from './App';

// This line is necessary to run enzyme within react 17
configure({ adapter: new Adapter() });

describe('App', () => {

  describe('Todo', () => {

  });
  
});