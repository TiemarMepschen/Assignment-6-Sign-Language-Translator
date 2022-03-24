import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../LostInTranslation_Resources/Logo.png'
import splash from '../LostInTranslation_Resources/Splash.svg'
import { sessionLogoutAction } from "../Store/actions/sessionActions";

const Header = () => {
    let dispatch = useDispatch()
    const navigate = useNavigate();

    const credentials = JSON.parse(localStorage.getItem("user-session"));
    const username = (credentials === null) ? "" : credentials.username;

    const logout = () => {
      dispatch(sessionLogoutAction())
      navigate("/")
    }

    return (
        <header className="container-fluid p-3 mb-4 header bg-warning">
          <div className="row">
            <div className="col-md-1 logo-container">
              <img src={splash} alt="Splash" className="header-logo"/>
              <img src={logo} alt="Logo" className="header-logo"/>
            </div>
            <div className="col">
              <h1 className="translation-title text-start align-baseline text-white display-3">Lost in Translation</h1>
            </div>
            <div className="col-md-2 text-white display-6 align-middle justify-content-right">
              <div className="col text-center">
                <h1 className="row translation-title d-flex justify-content-center">{ username }</h1>
                <button onClick={ logout } className="row btn btn-primary w-75">Logout</button>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header;