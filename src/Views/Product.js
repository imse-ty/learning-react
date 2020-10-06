import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HTTPRequest';

function Product() {
    const { id } = useParams();
    const url = `https://5f7b89e100bd740016909a8a.mockapi.io/products/${id}`;
    const product = useAxiosGet(url);
    let content = null;

    if (product.loading) {
        content = <Loader />
    }

    if (product.error) {
        content = <p>There was an error. Please refresh or try again.</p>
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageURL}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    );

}

export default Product;
