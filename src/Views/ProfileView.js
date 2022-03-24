import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import translateToSign from '../Utils/translateToSign.js'
import { translationAttemptAction } from "../Store/actions/translationActions";
import Header from "../Header/Header.js";

const ProfileView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getTranslations = () => {
        return JSON.parse(localStorage.getItem("user-session")).translations
    }

    const [ history, setHistory ] = useState({ value: getTranslations() })

    const historyElement = (plainText, index) => {
        return (
            <div key={ index } className="m-3 row border rounded">
                <h3 className="ml-3 col-4 text-start align-middle">{ plainText }</h3>
                <div className="mr-3 col text-end">
                    { translateToSign(plainText) }
                </div>
            </div>
        )
    }

    const showHistory = (translations) => {

        const translationHistory = translations.map((plainText, index) => historyElement(plainText, index))
        return translationHistory
    }

    const clearHistory = () => {
        const credentials = JSON.parse(localStorage.getItem("user-session"));

        const values = {
            id: credentials.id,
            translation: [],
          };
        dispatch(translationAttemptAction(values));
        setHistory({ value: [] })
    }

    const routeChange = () => {
        let path = `/translation`;
        navigate(path);
      };

    return (
        <div>
            <header>
                <Header/>
            </header>
            <div>
                <h1 className="translation-title">History</h1>
                { showHistory(history.value) }
            </div>
            <button type="submit" onClick={ clearHistory } className="m-2 btn btn-primary">Clear history</button>
            <button type="submit" onClick={ routeChange } className="m-2 btn btn-primary">Translate more</button>
        </div>
    )
}

export default ProfileView