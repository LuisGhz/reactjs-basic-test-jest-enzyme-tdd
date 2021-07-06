// Shallow: It loads only the main component (without children components)
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import App, { Todo, TodoForm } from './App';

// This line is necessary to run enzyme within react 17
configure({ adapter: new Adapter() });

describe('App', () => {

  describe('Todo', () => {
    
    it('Run completeTodo when it makes click on Complete button', () => {

      // Create mock for Todo
      // The mock returns an array with n arrays depending how many times it was called, each array contains the arguments of each call
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();

      // Create basic arguments for Todo
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'Task'
      };

      const wrapper = shallow(
        <Todo 
          completeTodo={ completeTodo }
          removeTodo={ removeTodo }
          index={ index }
          todo={ todo }
        />
      );

      wrapper
        .find('button')
        .at(0)
        .simulate('click');

      expect(completeTodo.mock.calls).toEqual([[5]]);
      expect(removeTodo.mock.calls).toEqual([]);

    })

    it('Run removeTodo when it makes click on Remove button', () => {

      // Create mock for Todo
      // The mock returns an array with n arrays depending how many times it was called, each array contains the arguments of each call
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();

      // Create basic arguments for Todo
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'Task'
      };

      const wrapper = shallow(
        <Todo 
          completeTodo={ completeTodo }
          removeTodo={ removeTodo }
          index={ index }
          todo={ todo }
        />
      );

      wrapper
        .find('button')
        .at(1)
        .simulate('click');

      expect(removeTodo.mock.calls).toEqual([[5]]);
      expect(completeTodo.mock.calls).toEqual([]);

    });

  });

  describe('TodoForm', () => {

    it('Call AddTodo when form has a value', () => {
      const addTodo = jest.fn();

      const wrapper = shallow(<TodoForm addTodo={ addTodo } />);

      wrapper
        .find('input')
        .simulate('change', { target: { value: 'my new todo' } });
    });

  });
  
});