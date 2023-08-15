import "./styles/reset.css"
import "./styles/fonts.css" 
import "./styles/container.css"
import Header from './Components/Header/Header'
import Services from './Components/Service/Services';
import Destinations from './Components/Destination/Destinations';
import Banner from "./Components/Banner/Banner"


function App() {
  return (
    <div>
        <Header />
        <Services />
        <Destinations />
        <Banner />
    </div>
  )
}

export default App;
