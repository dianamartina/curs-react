import React, { Component } from 'react';
import products from '../utils/products.json';
import Layout from '../components/Layout';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            category: {}
        }
    }
    componentDidMount() {/* request for server */
        
        console.log(this.props.match.params.categoryName);
        const categoryName = this.props.match.params.categoryName;
        const categoryInfo = products[categoryName];
        this.setState({category:categoryInfo});
    }

    render() {
        // console.log(this.props);
        return (
            <Layout>
                <div>
                    <h1>{this.state.category.name}</h1>
                </div>
            </Layout>
        )
    }
}


