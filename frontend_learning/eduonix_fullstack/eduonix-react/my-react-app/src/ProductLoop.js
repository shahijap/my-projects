import React, { Fragment } from "react"
const ProductLoop = () => {
    const products = ['keyboard', 'Desktop', 'mouse', 'laptop'];
    return (
        <Fragment>
            <h2>Products</h2>
            <ul>
                {products.map(product => <li>{product}</li>)}
            </ul>

        </Fragment>
    );
}
export default ProductLoop;