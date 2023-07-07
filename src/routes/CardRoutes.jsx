import { Navigate, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import CatalogView from '../components/CatalogView';
import CartView from '../components/CartView';

const CardRoutes = ({
	handleAddProduct,
	cartItems,
	handlerDeleteProductCart,
}) => {
	return (
		<>
			<Routes>
				<Route
					path='catalog'
					element={<CatalogView handler={handleAddProduct} />}
				/>
				<Route
					path='cart'
					element={
						cartItems.length > 0 ? (
							<div className='my-4 w-50'>
								<CartView
									items={cartItems}
									handlerDelete={handlerDeleteProductCart}
								/>
							</div>
						) : (
							<div className='alert alert-warning'>No hay productos</div>
						)
					}
				/>

				<Route path='/' element={<Navigate to={'/catalog'} />} />
			</Routes>
		</>
	);
};

CardRoutes.propTypes = {
	handleAddProduct: PropTypes.func,
	cartItems: PropTypes.array,
	handlerDeleteProductCart: PropTypes.func,
};

export default CardRoutes;
