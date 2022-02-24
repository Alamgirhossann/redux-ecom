import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../action';


const ProductCard = () => {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(addProduct(json)))
    }, [])
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productReducer.product);
    
    const newProductList = product.map((element) => {
        const { title, price, description, category, image, id } = element;

        return (

            <div className="col-md-3">
                <Link className='text-decoration-none' to={`/selectedProduct/${id}`}>
                    <div class="card text-dark mb-4">
                        <img style={{ width: "100%", height: "15rem" }} src={image} class="card-img-top" alt="..." />
                        <div class="card-body" >
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text">Category: {category}</p>
                            <p class="card-text">Price: ${price}</p>
                        </div>
                    </div>
                </Link>
            </div>

        )
    })

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                {newProductList}
            </div>
        </div>


    );
};

export default ProductCard;