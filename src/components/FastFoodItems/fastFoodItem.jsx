import {HiShoppingCart} from 'react-icons/hi'
import './fastFoodItem.css'
const FastFoodItem = ({name,price,ingredients,imageUrl,delay})=>{
return (
    <div className="card text-center p-1 border-0 shadow-sm h-100 position-relative fade-animation" style={{animationDelay:delay+"s"}}>
        <div className="place-holder z-0 ">
        </div>
          <img src={imageUrl} className="card-img-top w-100 position-absolute px-1 end-0"/>
        <span className="badge shadow-sm fs-6 bg-success position-absolute mt-2 me-2">قیمت: {price.toLocaleString()} تومان</span>
        <div class="card-body  d-flex flex-column">
    <h5 class="card-title">{name}</h5>
    <p class="card-text text-muted py-3">{ingredients}</p>
    <button className="btn btn-outline-success btn-sm fw-bold w-100 mt-auto">
    <HiShoppingCart className='ms-2 fs-5'></HiShoppingCart>
        افزودن به سبد خرید
    </button>
        </div>
    </div>

    )
}
export default FastFoodItem;