import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, name, description, price, handler }) => {
	const navigate = useNavigate();

	const addProduct = product => {
		handler(product);
		navigate('/cart');
	};
	return (
		<div>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text'>{description}</p>
					<p className='card-text'>$ {price}</p>
					<button
						className='btn btn-primary'
						/*Se esta creando un objeto implicitamente
            { id: id,
              name:name, 
              description:description
              ...
            }
            */
						onClick={() => addProduct({ id, name, description, price })}
					>
						Agregar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
