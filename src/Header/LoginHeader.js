import logoHello from '../LostInTranslation_Resources/Logo-Hello.png'
import splash from '../LostInTranslation_Resources/Splash.svg'

const LoginHeader = () => {
    return (
        <header className="container-fluid p-3 mb-4 header bg-warning">
          <div className="row">
            <div className="col-md-1 logo-container">
              <img src={splash} alt="Splash" className="header-logo"/>
              <img src={logoHello} alt="Logo hello" className="login-header-logo"/>
            </div>
            <div className="col">
              <h1 className="translation-title text-start align-baseline text-white display-3">Lost in Translation</h1>
            </div>
          </div>
        </header>
    )
}

export default LoginHeader;