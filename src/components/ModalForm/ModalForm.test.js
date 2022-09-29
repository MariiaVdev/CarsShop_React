import ModalForm from './ModalForm';
import { render, screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../utils/utilsModalForm/utilsModalFormTest';
import { Provider } from 'react-redux';
import store from '../../store/index'

const Component = () => {
    return (
        <Provider store={store}>
            <ModalForm />
        </Provider>
    )

}
jest.mock('../OrderedGoods/OrderedGoods', () => {
    return {
    __esModule: true,
    default: () => {
      return <span>OrderedGoods</span>;
    },
  };})
  jest.mock('../OrderForm/OrderForm', () => {
    return {
    __esModule: true,
    default: () => {
      return <span>OrderForm</span>;
    },
  };})
describe('Modal renders', () => {
    test('should Modal no render without isOpen state', () => {
        const { asFragment } = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
    })
    test('should Modal render when state isOpen set true', () => {
        const { asFragment } = renderWithProviders(<ModalForm/>);
        expect(asFragment()).toMatchSnapshot();

    })
})
describe('Modal close', () => {
    test('should Modal background close work', () => {
        renderWithProviders(<ModalForm/>);
        const bgd = screen.getByTestId("ModalForm-bgd");
        expect(screen.getByTestId("ModalForm-bgd")).toBeInTheDocument();
        fireEvent.click(bgd)
        expect(screen.queryByTestId("ModalForm-bgd")).not.toBeInTheDocument();
    })
    test('should Modal header button close work', () => {
        renderWithProviders(<ModalForm/>);
        const btn = screen.getByTestId("ModalForm-btn");
        expect(screen.getByTestId("ModalForm-btn")).toBeInTheDocument();
        fireEvent.click(btn)
        expect(screen.queryByTestId("ModalForm-btn")).not.toBeInTheDocument();
    })

})
