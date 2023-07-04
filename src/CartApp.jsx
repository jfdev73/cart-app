import { useEffect, useReducer, useState } from 'react';
import { getProducts } from './services/productsService';
import CatalogView from './components/CatalogView';
import CartVIew from './components/CartVIew';
import { itemsReducer } from './reducer/itemsReducer';
// const initialCardItems = [
// {
// 	product: {},
// 	quantity: 0,
// 	total: 0,
// },
// ];
const initialCardItems = JSON.parse(sessionStorage.getItem('cart')) || [];
const CartApp = () => {
	const [cartItems, dispatch] = useReducer(itemsReducer, initialCardItems);
	useEffect(() => {
		sessionStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);
	const handleAddProduct = product => {
		const hasItem = cartItems.find(i => i.product.id === product.id);
		if (hasItem) {
			dispatch({
				type: 'updateQuantityProductCart',
				payload: product,
			});
		} else {
			dispatch({
				type: 'addProductCart',
				payload: product,
			});
		}
	};

	const handlerDeleteProductCart = id => {
		dispatch({
			type: 'deleteProductCart',
			payload: id,
		});
	};

	return (
		<>
			<div className='container my-4'>
				<h1>CartApp</h1>
				<CatalogView handler={handleAddProduct} />

				<div className='my-4 w-50'>
					{cartItems.length > 0 && (
						<CartVIew
							items={cartItems}
							handlerDelete={handlerDeleteProductCart}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default CartApp;
