import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const languages = {
    en: "English",
    te: "తెలుగు",
    hi: "हिंदी",
  };

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleOnChange = (e: any) => {
    console.log(e.target.value);
    changeLanguage(e.target.value);
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
              onChange={handleOnChange}
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
