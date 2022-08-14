import ShoppingItem from "./ShoppingItem.js";

function ShoppingList({header,items}) {
    return (
        <div>
            <h3>{header}</h3>
            <ol>
                {
                    items && items.map((item) => <ShoppingItem key ={item} item={item}/>)}
            </ol>
        </div>
    );
}
export default ShoppingList;