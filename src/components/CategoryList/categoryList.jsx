    import { useEffect,useState } from "react";
    import axios from "../../axios";
    import Loading from "../Loading/loading";
    import SearchBar from "../SearchBar/searchBar";
    const CategoryList = ({filterItems,children})=>{
        const [categories, setCategories] = useState([]);
        const [loading, setLoading] = useState(false)

        const fetchCategories = async ()=>{

                try {
                    setLoading(true);
                    const response = await axios.get('/FoodCategory/categories');
                    setCategories(response.data);
                } catch (error) {
                    console.error("Error fetching categories:", error);
                } finally {
                    setLoading(false);
                }
           
            
        }
        
        useEffect(() => {
            fetchCategories()
            
        }, []);
        const renderContent = ()=> {
            if(loading) {return (<Loading/>)}
            else return(
                <div className="w-100 bg-light d-flex justify-content-between align-items-center rounded-3 p-3 position-absolute top-0 translate-middle-y">
            <ul className="nav w-50 d-flex justify-content-between align-items-center" style={{height:"50px"}}>
                <li className="nav-item" onClick={()=>filterItems('')}> <a className="nav-link" href="#">همه فست فود ها</a></li>
                {
                    categories.map(category=>(
                        <li className="nav-item" onClick={()=>filterItems(category.id)} key={category.id}>
                            <a className="nav-link" href="#">
                            {category.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            {children}
            </div>
            );
        };


        return(
        
            <nav className="container navbar d-flex justify-content-center w-100 mb-5 ">
                {renderContent()}
            </nav>

            )

    }
    export default CategoryList;