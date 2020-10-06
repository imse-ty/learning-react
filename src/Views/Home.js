import React from 'react'
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HTTPRequest';

function Home() {
    const url = 'https://5f7b89e100bd740016909a8a.mockapi.io/products?page=1&limit=10';
    let content = null;
    let products = useAxiosGet(url);

    if (products.loading) {
        content = <Loader />
    }

    if (products.error) {
        content = <p>There was an error. Please refresh or try again.</p>
    }

    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            );
    }


    return (
        <div>
            <h1 className='font-bold text-2xl mb-3'>Best Sellers</h1>
            {content}
        </div>
    );
}

export default Home
