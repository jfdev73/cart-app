import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsService';
import ProductCard from './ProductCard';

const CatalogView = ({ handler }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(getProducts);
	}, []);
	return (
		<>
			<div className='row'>
				{products.map(product => (
					<div className='col-4 my-2' key={product.id}>
						<ProductCard
							id={product.id}
							name={product.name}
							description={product.description}
							price={product.price}
							handler={handler}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default CatalogView;
