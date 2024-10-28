import SplashBackground from "../components/SplashBackground";
import "../css_modules/app.css"
import NavButton from "../components/NavButton";


//This is the Splash Screen when the application starts.
function SplashScreen() {
  
    return (
      <>
  
        <SplashBackground/>
  
        <div className="splash-items">
  
          <img className="logo" src="src/assets/Emblem 1 3.png" alt="" />
          <h1>Campaign Companion</h1>
          <div className="card">
            
            <NavButton text="Create Campaign" destination="/campaign-form"/>
          </div>
  
        </div> 
  
      </>
    )
  }
  
  export default SplashScreen