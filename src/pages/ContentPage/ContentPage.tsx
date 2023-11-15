import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar"; 
import { universitiesList } from "../../store/universitiesSlice";
import { useSelector } from "react-redux";
 

 

const ContentPage = ( ) => {
    const  {index} = useParams(); 
    const id=Number(index)
    const { data, loading, error } =useSelector(universitiesList);
    console.log(data);
    
    const item=data[id]
  return (
    <div>
      <Navbar />
      <div className="flex  my-auto h-[85vh] items-center gap-[20vh] justify-center ">
        <div className="flex items-center justify-center  ">
          <span className="h-[35vh] w-[35vh] flex-shrink-0 rounded-full bg-gray-500 text-white font-inter-400 text-[20vh] inline-flex items-center justify-center p-1">
            { item?.name.split(" ").length > 1
              ? item?.name.split(" ")[0][0] + item?.name.split(" ")[1][0]
              : item?.name.split(" ")[0][0]}
          </span>
        </div>
        <div className="p-4  ">
                <div className='flex  gap-[10px] mt-4'>
                     <p className='font-bold text-lg'>University : </p>
                <p>{item?.name}</p>
                </div >
                
                <div  className='flex items-start gap-[10px] mt-4'>
                     <p className='font-bold text-lg'>Country : </p>
                <p className=' text-lg'>{item?.country}</p>
                </div>
                <div  className='flex items-start gap-[10px] mt-4'>
                     <p className='font-bold text-lg'>Alpha Two Code : </p>
                <p className=' text-lg'>{item?.alpha_two_code}</p>
                </div>
               
                <div className="mt-8 flex items-center justify-center">
                <a
                  href={item?.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full"
                >
                  Visit Website
                </a>
                </div>
              
               
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentPage;
