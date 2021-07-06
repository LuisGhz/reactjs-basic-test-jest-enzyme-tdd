import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import App, { Todo } from './App';

// This line is necessary to run enzyme within react 17
configure({ adapter: new Adapter() });

describe('App', () => {

  describe('Todo', () => {
    
    it('Run completeTodo when it makes click on Complete button', () => {

      // Create mock for Todo
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();

      // Create basic arguments for Todo
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'Task'
      };



    })

  });
  
});