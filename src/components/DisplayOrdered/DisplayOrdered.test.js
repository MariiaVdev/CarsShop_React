import { render } from "@testing-library/react"
import DisplayOrdered from './DisplayOrdered'


describe("Render DisplayOrdered", () => {
    test("should DisplayOrdered render with default props", () => {
        const { asFragment } = render(<DisplayOrdered name={'test'} price={12345} img={'img'} />);
        expect(asFragment()).toMatchSnapshot()
    })
    test("should DisplayOrdered render with custom props", () => {
        const { asFragment } = render(<DisplayOrdered name={'test'} price={12345} img={'img'} code={1234} color={'red'} />);
        expect(asFragment()).toMatchSnapshot()
    })
})


