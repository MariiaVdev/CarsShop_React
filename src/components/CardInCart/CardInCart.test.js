import { render } from "@testing-library/react"
import CardInCart from './CardInCart'


describe("Render CardInCart", () => {
    test("should CardInCart render with default props", () => {
        const { asFragment } = render(<CardInCart name={'test'} price={12345} img={'img'} />);
        expect(asFragment()).toMatchSnapshot()
    })
    test("should CardInCart render with custom props", () => {
        const { asFragment } = render(<CardInCart name={'test'} price={12345} img={'img'} code={1234} color={'red'} />);
        expect(asFragment()).toMatchSnapshot()
    })
})


