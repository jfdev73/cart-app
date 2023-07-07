// import { useEffect, useReducer, useState } from 'react';
// import { getProducts } from './services/productsService';

import { useItemsCart } from './hooks/useItemsCart';
('react-router-dom');
import NavBar from './components/NavBar';
import CardRoutes from './routes/CardRoutes';

// const initialCardItems = [
// {
// 	product: {},
// 	quantity: 0,
// 	total: 0,
// },
// ];

const CartApp = () => {
	const { cartItems, handleAddProduct, handlerDeleteProductCart } =
		useItemsCart();
	return (
		<>
			<NavBar />
			<div className='container my-4'>
				<h3>CartApp</h3>
				<CardRoutes
					cartItems={cartItems}
					handleAddProduct={handleAddProduct}
					handlerDeleteProductCart={handlerDeleteProductCart}
				/>
			</div>
		</>
	);
};

export default CartApp;
