import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageURL}')`
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                />
            </Link>
            <div className="p-3">
                <h2 className="font-bold text-xl mb-3">
                    {props.product.name}
                </h2>
                <div className="font-bold mb-3">
                    $ {props.product.price}
                </div>
                <div className="mb-3">
                    {props.product.description}
                </div>
                <Link
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center"
                >
                    View
                </Link>
            </div>
        </div >
    )
}
