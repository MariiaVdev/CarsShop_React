import Modal from './Modal';
import { render, screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../utils/utilsModal/utilsModalTest';
import { Provider } from 'react-redux';
import store from '../../store/index'

const Component = () => {
    return (
        <Provider store={store}>
            <Modal header={'header'} closeButton={true} actions={'<button>OK</button>'} />
        </Provider>
    )

}

describe('Modal renders', () => {
    test('should Modal no render without isOpen state', () => {
        const { asFragment } = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
    })
    test('should Modal render when state isOpen set true', () => {
        const { asFragment } = renderWithProviders(<Modal header={'header'} closeButton={true} actions={'<button>OK</button>'} />);
        expect(asFragment()).toMatchSnapshot();

    })
    test('should Modal render without close button', () => {
        const { asFragment } = renderWithProviders(<Modal header={'header'} closeButton={false} actions={'<button>OK</button>'} />);
        expect(asFragment()).toMatchSnapshot();

    })
    test('should Modal render with close button', () => {
        const { asFragment } = renderWithProviders(<Modal header={'header'} closeButton={true} actions={'<button>OK</button>'} />);
        expect(asFragment()).toMatchSnapshot();

    })
    test('should Modal render with default text', () => {
        const { asFragment } = renderWithProviders(<Modal header={'header'} closeButton={true} actions={'<button>OK</button>'} />);
        expect(asFragment()).toMatchSnapshot();

    })
    test('should Modal render with custom text', () => {
        const { asFragment } = renderWithProviders(<Modal header={'test header'} closeButton={true} text={{ code: 1234, name: 'test' }} actions={'<button>TEST</button>'} />);
        expect(asFragment()).toMatchSnapshot();

    })
})
describe('Modal close', () => {
    test('should Modal background close work', () => {
        renderWithProviders(<Modal header={'header'} closeButton={true} actions={'<button>OK</button>'} />);
        const bgd = screen.getByTestId("Modal-bgd");
        expect(screen.getByTestId("Modal-bgd")).toBeInTheDocument();
        fireEvent.click(bgd)
        expect(screen.queryByTestId("Modal-bgd")).not.toBeInTheDocument();
    })

})
