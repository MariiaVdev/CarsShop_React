import Card from './Card'
import renderWithProviders from '../../utils/utilsModalForm/utilsModalFormTest';
import ViewContextProvider from '../../contexts/viewContext/ViewContextProvider';
import UtilsViewContextProvider from '../../utils/utilsCard/utilsViewContextProvider'


const ComponentCard = () => {
    return (
        <ViewContextProvider>
            <Card name={'test'} price={12345} img={'img'} isFavorite={false} />
        </ViewContextProvider>
    )
}
const ComponentTable = () => {
    return (
        <UtilsViewContextProvider>
            <Card name={'test'} price={12345} img={'img'} code={1234} color={'red'} isFavorite={true} />
        </UtilsViewContextProvider>
    )
}


describe("Render Card", () => {
    test("should Card render in Card view, default props and Favorite is false", () => {
        const { asFragment } = renderWithProviders(<ComponentCard />);
        expect(asFragment()).toMatchSnapshot()
    })
    test("should Card render in Table view and Favorite is true", () => {
        const { asFragment } = renderWithProviders(<ComponentTable />);
        expect(asFragment()).toMatchSnapshot()
    })
})


