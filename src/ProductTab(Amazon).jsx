import Product from "./Product(Amazon).jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "2px"
    };
    return (
        <div style = {styles}>
            <Product title = "Logitech MX Master" idx = {0}/>
            <Product title = "Apple Pencil Pro" idx = {1} />
            <Product title = "Zebronics Zeb-Transformer" idx = {2} />
            <Product title = "Petronics Toad 23" idx = {3} />
        </div>
    );
}

export default ProductTab;