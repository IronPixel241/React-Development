import "./Product(Amazon).css";
import Price from "./Price(Amazon).jsx";

function Product({title , idx}) {
    let oldPrices = ["12,999" , "14,999" , "9,999" , "3,599"];
    let newPrices = ["10,000" , "11,999" , "7,500" , "2,699"];
    let description = [["8,000 DPI" , "5 programmable buttons"], 
                       ["intuitive surface" , "designed for ipad pro"], 
                       ["designed for ipad pro" , "intuitive surface"], 
                       ["wireless" , "Optical orientation"]]; 
    return (
        <div className="Product">
            <p><b>{title}</b></p>
            <p>
                <li>{description[idx][0]}</li>
                <li>{description[idx][1]}</li>
            </p>
            <Price oldPrices = {oldPrices[idx]} newPrices = {newPrices[idx]}/>
        </div>
    );
}

export default Product;