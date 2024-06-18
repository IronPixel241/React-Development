import Product from "./Product.jsx";

function ProductTab() {
    let options = ["Hi-Tech" , "Durable" , "Fast"];
    return (
        <>
            <Product title = "Phone" price = {15000} features = {options}/>
            <Product title = "Laptop" price = {75000} features = {options}/>
            <Product title = "pen" price = {150} features = {options}/>
        </>
    );
}

export default ProductTab;