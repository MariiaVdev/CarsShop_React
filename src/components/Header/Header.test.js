import { render } from "@testing-library/react"
import Header from './Header'
import { Provider } from "react-redux"
import store from "../../store"
import { BrowserRouter } from "react-router-dom"

const Wrapper = () => {
    return (
        <>
        <BrowserRouter>
        <Provider store={store}>
        <Header />
        </Provider>
        </BrowserRouter>
        </>
    )

}
describe("Render Header", () => {
    test("should Header render with default props", () => {
        const { asFragment } = render(<Wrapper/>);
        expect(asFragment()).toMatchSnapshot()
    })
})


