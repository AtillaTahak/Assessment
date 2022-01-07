import { getByDisplayValue, getByRole, getByText, render as rtlRender, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from './redux/configureStore'


const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)


test('To Do List render correctly', () => {
  const { getByPlaceholderText } = render(<App />);

  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();

  expect(getByPlaceholderText(/Write/i)).toBeInTheDocument();

  const addInput = screen.getByRole('button', { name: /add/i })
  expect(addInput).toBeInTheDocument();

  const error = screen.getByTestId('error');
   userEvent.click(addInput);
});


test('submit work properly',()=>{
  const test ="test";
  render(<App />);
  const inputArea = screen.getByPlaceholderText(/Write/i);
  userEvent.paste(inputArea,test)
  const addInput = screen.getByRole('button', { name: /add/i })
  userEvent.click(addInput);
  screen.getByText("test")

})