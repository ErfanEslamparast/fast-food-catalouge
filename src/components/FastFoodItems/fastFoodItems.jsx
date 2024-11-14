import FastFoodItem from "./fastFoodItem";
const FastFoodItems = ({fastFoodItems})=>{
    let delay = 0.1;
    return (
       <div className="row">
        {fastFoodItems.map(item=>{
            delay+= 0.1;
            return(
             <div className="col-4 mb-3">
                 <FastFoodItem {...item} key={item.id} delay={delay}></FastFoodItem>

             </div>

            )
            })}
       </div>
    )
}
export default FastFoodItems;
