import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import translateToSign from "../Utils/translateToSign";
import { translationAttemptAction } from "../Store/actions/translationActions";
import Header from "../Header/Header.js";

const TranslationView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [plainText, setPlainText] = useState({ value: "" });
  const [translatedText, setTranslatedText] = useState({ value: "" });

  const handlePlainTextChange = (event) => {
    setPlainText({ value: event.target.value });
  };

  const translate = (event) => {
    event.preventDefault();
    if (plainText.value.length > 0) {
      setTranslatedText({ value: translateToSign(plainText.value) });
      updateTranslations();
    }
  };

  const updateTranslations = () => {
    // get user details
    const credentials = JSON.parse(localStorage.getItem("user-session"));
    // get current strings in translations and add the new text
    const translations = credentials.translations;

    // remove first element from array if length === 10
    if (translations.length >= 10) {
        translations.shift()
    }
    
    translations.push(plainText.value);
    // create an object to pass to the action
    const values = {
      id: credentials.id,
      translation: translations,
    };
    dispatch(translationAttemptAction(values));
  };

  const routeChange = () => {
    let path = `/profile`;
    navigate(path);
  };
  return (
    <div>
      <header>
        <Header/>
      </header>
      <form onSubmit={translate}>
        <input
          type="text"
          value={plainText.value}
          onChange={handlePlainTextChange}
        />
        <button type="submit" className="mb-2 p-1 btn btn-primary">Translate</button>
      </form>
      <div className="translation-box">{translatedText.value}</div>
      <button
        id="goToProfile"
        className="mt-3 btn btn-primary"
        onClick={routeChange}
      >
      Go to profile
      </button>
    </div>
  );
};

export default TranslationView;
