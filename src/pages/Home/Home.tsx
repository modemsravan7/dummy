
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { RootState } from "../../store/store";
import CardSlider from "../../components/Card/Card"; 
import { universitiesList } from "../../store/universitiesSlice";
// import { MyContext } from "../../App";
// import { useContext } from "react"; 

const Home = () => {

  const { data, loading, error } =useSelector(universitiesList);

  // const contextdata= useContext(MyContext)  
  console.log(data, "data" , loading);
   

  return (
    <div>
      <Navbar />
      <div>
       
      </div>
      {loading ==="pending" ?<div className="flex items-center justify-center h-[85vh] w-full">
      <div className="border-t-4 border-blue-500 border-solid h-20 w-20 rounded-full animate-spin"></div>
    </div> : data?.length ?<div className="container h-[80vh] w-full mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Featured Institutions</h2>
        <CardSlider data={data} />
      </div>:null}

      <Footer />
    </div>
  );
};
 
export default Home
