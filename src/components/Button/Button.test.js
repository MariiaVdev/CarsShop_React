import {render, screen, fireEvent} from "@testing-library/react"
import Button from './Button'

const handleClick = jest.fn()

describe("Render Button", () => {
    test("should button render with all props", () => {
        const {asFragment} = render(<Button bgColor={'red'} textBtn={'test'}/>);
        expect(asFragment()).toMatchSnapshot()
    })
    test("should button render with default bgColor", () => {
        const {asFragment} = render(<Button textBtn={'test without bg'}/>);
        expect(asFragment()).toMatchSnapshot()
    })
    test("should button render with default text", () => {
        const {asFragment} = render(<Button bgColor={'red'}/>);
        expect(asFragment()).toMatchSnapshot()
    })
    test("should button render with default props", () => {
        const {asFragment} = render(<Button />);
        expect(asFragment()).toMatchSnapshot()
    })
})

describe("Handle click at a button", () => {
    test("should handleClick work", () => {
        render(<Button textBtn={'test'} onClick={handleClick} />);
        const btn = screen.getByText("test");
        fireEvent.click(btn)
        expect(handleClick).toHaveBeenCalled();
    })
})

