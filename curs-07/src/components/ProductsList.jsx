import React from 'react';

function ProductsList(props) {
    console.log(props);
    const {products} = props;
    return (
        <div className="container">
            <div className="row">
                {
                products.map((product)=> {
                    return (
                    
                            <div className="col-4 ">
                                <img src={product.image} alt=""/>
                                <p>{product.name}</p>
                                <p>{product.price} {product.currency}</p>
                                <button className="btn btn-outline-dark">Adauga in cos</button>
                            </div>
                        
                        )})
                }
            </div>
        </div>
    )
}

export default ProductsList;
