import React, { useEffect, useState } from "react";
import { Fragment } from "react";

const ProductState = () => {
    //state is used to change data dynamically
    const [product, setProduct] = useState('Desktop');
    //useffect is used whenever page loads this effect runs
    // useefftect will run the code when page is loaded
    useEffect(() => {
        alert('page loaded!');
    }, []);
    
    return (
        <Fragment>
            <h1>Products</h1>
            <p>You want to purcase a {product}</p>
            <div className="button">
                <button style={{ margin: 10 }} type="button" onClick={() => setProduct("Laptop")}>Laptop</button>
                <button style={{ margin: 10 }} type="button" onClick={() => setProduct("Desktop")}>Desktop</button>
                <button style={{ margin: 10 }} type="button" onClick={() => setProduct("Keyboard")}>Keyboard</button>
            </div>
        </Fragment>
        
    );
}
export default ProductState;