import React, { Component } from 'react';
import products from '../utils/products.json';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }    
    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        // this.setState({
        //     product: products[productId].items
        // });
        const categoryValue = Object.values(products);
        // console.log(categoryValue);

        let currentProduct;

        categoryValue.forEach((category) => {
            const products = category.items;
            const findResult = products.find((product) => {
                // console.log(product.id , productId);
                return product.id === Number(productId)
            })

            if (findResult) {
                currentProduct = findResult;
            }
        })

        // console.log(currentProduct);
        this.setState({product: currentProduct})
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h2>{this.state.product && this.state.product.name}</h2>
                {/* <h2>{this.state.product.name}</h2> */} {/* merge asa daca dau in state product: {} si nu null */}
            </div>
        )
    }
}

export default Product;
