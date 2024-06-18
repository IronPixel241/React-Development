import "./Price(Amazon).css"

function Price({oldPrices , newPrices}) {
    return (
        <div className="Price">
            <p><s>{oldPrices}</s> &nbsp; {newPrices}</p>
        </div>
    );
}

export default Price;