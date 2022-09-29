import { useEffect } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getCartAC, getCounterCartAC } from './store/cart/actionCreators';
import { getCarsAC } from './store/cars/actionCreators';
import { getFavoriteAC, getCounterFavoriteAC } from './store/cars/actionCreators';
import CardViewSwitcher from './components/CardViewSwitcher/CardViewSwitcher';
import ViewContextProvider from './contexts/viewContext/ViewContextProvider';


const App = () => {
	const isFavorite = useSelector(store => store.cars.counterFavorite);
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getCarsAC())
		dispatch(getCartAC())
		dispatch(getCounterCartAC())
		dispatch(getFavoriteAC())
		dispatch(getCounterFavoriteAC())
	}, [dispatch]);


	return (
		<BrowserRouter>
			<>
				<Header title={'Lexus official'} isFav={isFavorite} />
				<ViewContextProvider>
					<CardViewSwitcher />
					<AppRoutes />
				</ViewContextProvider>
			</>
		</BrowserRouter>
	);

}

export default App;
