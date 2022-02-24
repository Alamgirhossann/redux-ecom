import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeProduct, singleProduct } from '../../action';

const SelectedProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const selectProduct = useSelector((state) => state.singleProducerReducer)
    const { title, price, description, category, image } = selectProduct;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => dispatch(singleProduct(data)))
        dispatch(removeProduct())
    }, [id]);

    return (
        <div>
            {
               Object.keys(selectProduct).length === 0 ? <p>...Loading</p>
                    : (
                        <div class="card text-center" style={{ width: "40%" }}>
                            <img style={{ width: "100%", height: "25rem" }} src={image} class="card-img-top" alt="..." />
                            <div class="card-body" >
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{description}</p>
                                <p class="card-text">Category: {category}</p>
                                <p class="card-text">Price: ${price}</p>
                            </div>
                        </div>
                    )
            }

        </div>

    );
};

export default SelectedProduct;