import { useEffect, useState } from 'react';
import { getProducts } from './services/productsService';
import CatalogView from './components/CatalogView';
import CartVIew from './components/CartVIew';
// const initialCardItems = [
// {
// 	product: {},
// 	quantity: 0,
// 	total: 0,
// },
// ];
const initialCardItems = JSON.parse(sessionStorage.getItem('cart')) || [];
const CartApp = () => {
	const [cartItems, setCartItems] = useState(initialCardItems);

	const handleAddProduct = product => {
		const hasItem = cartItems.find(i => i.product.id === product.id);
		if (hasItem) {
			// setCartItems([
			// 	...cartItems.filter(i => i.product.id !== product.id),
			// 	{
			// 		product,
			// 		quantity: hasItem.quantity + 1,
			// 	},
			// ]);
			setCartItems(
				cartItems.map(i => {
					if (i.product.id === product.id) {
						i.quantity += 1;
					}
					return i;
				})
			);
		} else {
			setCartItems([
				...cartItems,
				{
					product,
					quantity: 1,
				},
			]);
		}
	};

	const handlerDeleteProductCart = id => {
		setCartItems([...cartItems.filter(i => i.product.id !== id)]);
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
