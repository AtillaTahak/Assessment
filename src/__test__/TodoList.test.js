import { cleanup, getByDisplayValue, getByRole, getByText, render as rtlRender, screen } from '@testing-library/react';
import TodosList from '../components/TodosList';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

const render = component => rtlRender(
    <Provider store={store}>
      {component}
    </Provider>
  )

const example = {
    title:"Todo item"
}
test('should list item', () => {
    render(<TodosList data={example}/>)
    const element = screen.getByText(/todo/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
    
})
