import { render as rtlRender, screen } from '@testing-library/react';
import InputTodo from '../components/InputTodo';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

const render = component => rtlRender(
    <Provider store={store}>
      {component}
    </Provider>
  )

test('Input To do list render correctly',()=>{
    const {debug}=render(<InputTodo/>);
    const linkElement = screen.getAllByPlaceholderText(/Write/i);
    expect(linkElement).toBeTruthy();
    const addInput = screen.getByRole('button', { name: /add/i })
    expect(addInput).toBeInTheDocument();
    userEvent.click(addInput);
    const error = screen.getByTestId('error');
    expect(error).toBeInTheDocument();

    debug();

})
test ('Test input type',()=>{
    render(<InputTodo/>);
 
    const addInput = screen.getByRole('button', { name: /add/i })
    expect(addInput.type).toEqual("submit")



});