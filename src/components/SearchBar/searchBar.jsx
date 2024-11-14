import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
const SearchBar = ({searchFunction})=>{
    const [Value , setValue] = useState('')

    const submitForm = (e)=>{
        e.preventDefault();
        searchFunction(Value)
    }
return (

    <form onSubmit={submitForm} className="search flex-fill d-flex align-items-center me-5 ">
        <div className="input-group w-75 shadow-sm  ">
        <input onChange={e=> setValue(e.target.value)} className="form-control rounded p-2 pe-5 fs-6 fw-light z-2" type="text"  placeholder="جستجوی فست فود ... "/>
        <BsSearch onClick={submitForm} className='position-absolute fs-5 top-50 translate-middle-y me-3 z-3 h-100 ' style={{cursor:'pointer'}}></BsSearch>
        </div>
    </form>
)
}
export default SearchBar;