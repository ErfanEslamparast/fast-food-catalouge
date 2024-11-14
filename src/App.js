import "./App.css";
import { useEffect, useState } from "react";
import axios from "./axios";
import CategoryList from "./components/CategoryList/categoryList";
import Header from "./components/Header/header";
import Loading from "./components/Loading/loading";
import FastFoodItems from "./components/FastFoodItems/fastFoodItems";
import SearchBar from "./components/SearchBar/searchBar"; 
import notFound from './assets/images/404.png'
function App() {
  const [fastFoodItems, setFastFoodItems] = useState([]);
  const [loading, setLoading] = useState();

  const listFetching = async (categoryId) => {
    setLoading(true);
    const response = await axios.get(`FastFood/list?categoryId=${categoryId}`);
    setFastFoodItems(response.data);
    setLoading(false);
  };
  const searchFunction = async (term)=>{
    setLoading(true)
    const response = await axios.get(`/FastFood/search?term=${term || ''}`)
    setFastFoodItems(response.data)
    setLoading(false)
  }
  useEffect(() => {
    listFetching("");
  }, []);
  const filterItems = (categoryId) => {
    listFetching(categoryId);
  };
  const renderContent = () => {
    if (loading) {
      return <Loading></Loading>;
    }else if(fastFoodItems.length == 0){
      return (
        <>
        <p className="alert alert-warning text-center ">هیچ آیتمی یافت نشد</p>
        <img className="d-block mx-auto" src={notFound} />
        </>
      )
    } else {
      return <FastFoodItems fastFoodItems={fastFoodItems}></FastFoodItems>
    };
  };
  return (
    <div className="wrapper">
      <Header></Header>
      <CategoryList filterItems={filterItems}><SearchBar searchFunction={searchFunction}/></CategoryList>
      <div className="container pt-3">{renderContent()}</div>
    </div>
  );
}
export default App;
