import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';


const App = () => {
	const [cars, setCars] = useState([]);
	const [counter, setCounter] = useState(0);
	const [counterFav, setCounterFav] = useState(0);
	const [favorite, setFavorite] = useState([]);
	const [carts, setCarts] = useState([]);
	const [modalProps, setModalProps] = useState({});
	const [cardProps, setCardProps] = useState({});
	const [isOpenModal, setIsOpenModal] = useState(false);


	const addToCart = (card) => {
		setCarts((current) => {
			const carts = [...current];

			const index = carts.findIndex(el => el.code === card.code)

			if (index === -1) {
				carts.push({ ...card, count: 1 })
			} else {
				carts[index].count += 1
			}

			localStorage.setItem("carts", JSON.stringify(carts))
			return carts
		})
	}

	const toggleModal = (value) => {
		setIsOpenModal(value)
	}

	const cartCounter = (carts) => {
		const acc = carts.reduce((acc, el) => {
			if (el.count) {
				acc += el.count;
			}
			return acc;
		}, 1);
		localStorage.setItem('counter', acc);
		setCounter(acc);

	}
	const dicrementCartCounter = (carts, counter, code) => {
		const acc = carts.reduce((acc, el) => {
			if (el.code === code) {
				acc = counter - el.count;
			}
			return acc;
		}, 1);
		localStorage.setItem('counter', acc);
		setCounter(acc);

	}


	const markAsFavorite = (card) => {
		setCars((current) => {
			const cars = [...current];
			const index = cars.findIndex(el => el.code === card.code)

			cars[index].isFavorite = !cars[index].isFavorite;

			localStorage.setItem("cars", JSON.stringify(cars));

			return cars
		})

		setFavorite((current) => {
			const favorite = [...current];
			const index = cars.findIndex(el => el.code === card.code)
			const indexFav = favorite.findIndex(el => el.code === card.code)

			if (indexFav === -1 && cars[index].isFavorite) {
				favorite.push({ ...cars[index] });
			} else if (!cars[index].isFavorite) {
				if (indexFav > -1) {
					favorite.splice(indexFav, 1);

				}
			}

			localStorage.setItem("favorite", JSON.stringify(favorite));

			favCounter(favorite);
			return favorite
		})

	}



	const favCounter = (favorite) => {
		const acc = favorite.reduce((acc, el) => {
			if (el.isFavorite) {
				acc += 1;
			}
			return acc;
		}, 0);
		localStorage.setItem('counterFav', acc);
		setCounterFav(acc);

	}

	const deleteCartItem = (code) => {
		setCarts((current) => {
			const carts = [...current]

			const index = carts.findIndex(el => el.code === code)

			if (index !== -1) {
				carts.splice(index, 1);
			}

			localStorage.setItem("carts", JSON.stringify(carts))
			return carts
		})
	}

	useEffect(() => {
		const getData = async () => {
			const carsArr = localStorage.getItem('cars');
			const carts = localStorage.getItem('carts');
			const favorite = localStorage.getItem('favorite');
			const counter = localStorage.getItem('counter');
			const counterFav = localStorage.getItem('counterFav');


			if (carts) {
				setCarts(JSON.parse(carts));
			}

			if (favorite) {
				setFavorite(JSON.parse(favorite))
			}

			if (counter) {
				setCounter(JSON.parse(counter));
			}
			if (counterFav) {
				setCounterFav(JSON.parse(counterFav));
			}

			if (!carsArr) {
				const cars = await fetch(`./cars.json`).then(res => res.json());
				setCars(cars)
			} else {
				setCars(JSON.parse(carsArr))
			}
		}
		getData()
	}, [])

	return (
		<BrowserRouter>
			<>
				<Header title={'Lexus official'} isFav={counterFav} inCart={counter} />
				<AppRoutes cars={cars} markAsFavorite={markAsFavorite} favorite={favorite} cartCounter={cartCounter}
					setModalProps={setModalProps} toggleModal={toggleModal} setCardProps={setCardProps}
					isOpenModal={isOpenModal} modalProps={modalProps}
					addToCart={addToCart} carts={carts} cardProps={cardProps} 
					deleteCartItem={deleteCartItem} dicrementCartCounter={dicrementCartCounter} counter={counter}/>
			</>
		</BrowserRouter>
	);

}

export default App;
