import "./Product.css";

function Product({title , price , features}) {
    let lists = features.map((feature) => <li>{feature}</li>);

    let isDiscount = price > 50000;
    let styles = {backgroundColor : isDiscount ? "Pink" : ""};  // Object

    return (
        <div className="Product" style = {styles}>
            <h3>{title}</h3>
            <h5>Price of {title} is {price}</h5>
            <p>{lists}</p>
            {price > 50000 ? <p><b>Discount of 5%</b></p> : null}
        </div>
    );
}

export default Product;