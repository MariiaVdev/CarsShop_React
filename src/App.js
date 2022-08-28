import { Component } from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';

class App extends Component {
	state = {
		cars: [],
		counter: 0,
		counterFav: 0,
		favorite: [],
		carts: [],
		modalProps: {},
		cardProps: {},
		isOpenModal: false
	}


	addToCart = (card) => {
		this.setState((current) => {
			const carts = [...current.carts];

			const index = carts.findIndex(el => el.code === card.code)

			if (index === -1) {
				carts.push({ ...card, count: 1 })
			} else {
				carts[index].count += 1
			}

			localStorage.setItem("carts", JSON.stringify(carts))
			return { carts }
		})
	}

	toggleModal = (value) => {
		this.setState({ isOpenModal: value })
	}

	setModalProps = (value) => {
		this.setState({ modalProps: value })
	}

	setCardProps = (value) => {
		this.setState({ cardProps: value })
	}
	cartCounter = (carts) => {
		const acc = carts.reduce((acc, el) => {
			if (el.count) {
				acc += el.count;
			}
			return acc;
		}, 0);
		localStorage.setItem('counter', acc);
		this.setState({ counter: acc })

	}

	markAsFavorite = (card) => {
		this.setState((current) => {
			const favorite = [...current.favorite];
			const cars = [...current.cars];
			const index = cars.findIndex(el => el.code === card.code)
			const indexFav = favorite.findIndex(el => el.code === card.code)

			cars[index].isFavorite = !cars[index].isFavorite;

			if (indexFav === -1 && cars[index].isFavorite) {
				favorite.push({ ...cars[index] });
			} else if (!cars[index].isFavorite) {
				if (indexFav > -1) {
					favorite.splice(indexFav, 1);

				}
			}

			localStorage.setItem("favorite", JSON.stringify(favorite));
			localStorage.setItem("cars", JSON.stringify(cars));

			this.favCounter(favorite);
			return { favorite, cars}
		})

	}


	favCounter = (favorite) => {
		const acc = favorite.reduce((acc, el) => {
			if (el.isFavorite) {
				acc += 1;
			}
			return acc;
		}, 0);
		localStorage.setItem('counterFav', acc);
		this.setState({ counterFav: acc })

	}


	async componentDidMount() {

		const carsArr = localStorage.getItem('cars');
		const carts = localStorage.getItem('carts');
		const favorite = localStorage.getItem('favorite');
		const counter = localStorage.getItem('counter');
		const counterFav = localStorage.getItem('counterFav');


		if (carts) {
			this.setState({ carts: JSON.parse(carts) });
		}

		if (favorite) {
			this.setState({ favorite: JSON.parse(favorite) })
		}

		if (counter) {
			this.setState({ counter: JSON.parse(counter) });
		}
		if (counterFav) {
			this.setState({ counterFav: JSON.parse(counterFav) });
		}

		if (!carsArr) {
			const cars = await fetch(`./cars.json`).then(res => res.json());
			this.setState({ cars: cars })
		} else {
			this.setState({ cars: JSON.parse(carsArr) })
		}

	}

	render() {
		return (
			<>
				<Header title={'Lexus official'} isFav={this.state.counterFav} inCart={this.state.counter} />

				<CardList cars={this.state.cars} markAsFavorite={this.markAsFavorite} counter={this.counterCart}
					setModalProps={this.setModalProps} toggleModal={this.toggleModal} setCardProps={this.setCardProps}/>
				<Modal isOpen={this.state.isOpenModal} toggleModal={this.toggleModal} header={`Do you want to add this to cart?`}
					closeButton={true} text={this.state.modalProps}
					actions={<>
						<button className={styles.modalConfirmBtn} onClick={() => {
							this.addToCart(this.state.cardProps);
							this.cartCounter(this.state.carts);
							this.toggleModal(false);
						}}>Ok</button>
						<button className={styles.modalCancelBtn} onClick={() => this.toggleModal(false)}>Cancel</button>
					</>} />

			</>
		);
	}
}

export default App;
