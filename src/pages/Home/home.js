import React from "react";
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from "./../../store/actions/language";

const Home = () => {
  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeLanguage(language == "en" ? "ar" : "en"));
  };
  return (
    <div dir={language == "en" ? "ltr" : "rtl"}>
      Home
      <h2>App language is :{language}</h2>
      <button onClick={() => handleChange()} className="btn btn-success">
        change language
      </button>
    </div>
  );
};

export default Home;
