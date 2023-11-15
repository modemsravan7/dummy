import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const languages = {
    en: "English",
    te: "తెలుగు",
    hi: "हिंदी",
  };

  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { language } = useParams(); 
 console.log(language)
  useEffect(()=>{
    const lan:string=language?.toLowerCase() ==="hindi" ? 'hi' : language?.toLowerCase() ==="telugu" ? 'te' : language?.toLowerCase() ==="english" ? 'en' : navigate("/404")
    changeLanguage(lan)
  }, [])
  const changeLanguage = (lng: string) => {
    console.log("lang", lng)
    i18n.changeLanguage(lng);
  };
 
  const handleOnChange = (value:string ) => {  
    changeLanguage(value);
    const optionLanguage:string=languages[value]==="తెలుగు"? "Telugu" :languages[value]==="हिंदी" ? "Hindi":"English";
    console.log(value, "hi");
    
    navigate(`/${optionLanguage}/Home`);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">
          Logo
        </a>

        <div className="flex items-center">
          <Link to="/loginForm">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Login
            </button>
          </Link>

          <div>
            <select
              className="w-[150px]"
              name="languages"
              id="languages"
              onChange={(e)=>handleOnChange(e.target.value)}
            >
              {Object.entries(languages).map(([key, value]) => (
                <option id={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
