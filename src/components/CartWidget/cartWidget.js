import logo from '../Assets/img/logo.png'
import './cartWidget.css'


const Logo = () => {
    return(
        <div>
            <a href="/">
                <img className= "logo" src = {logo} alt= "" width="35%" height="35%"></img>
            </a>    
        </div>    
    )
}


export default Logo;