import React from 'react';
import ProductsJson from '../Shared/ProductsJson';

class ProductDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: props.id,
            item: null
        }
    }
    componentDidMount() {   
        const product = ProductsJson.products.find(e => {
            return e.id == this.props.id;
        });
        this.setState({
            isLoaded: true,
            item: product

        });
        console.log("products: ", ProductsJson.products);
        console.log("id: ", this.props.id);
        console.log("item: ", product);
    }

    display = () => {
        if(this.state.item){
        return (
        <div>
            <h1>Product Detail : {this.props.id}</h1>
            <p>{this.state.item.title}</p>
            </div>);
        }
    }

    render() {
        return(
        <div>
        {this.display()}
        </div>);
    }
}

export default ProductDetail;