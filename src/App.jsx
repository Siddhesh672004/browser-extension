import './App.css'
import { images } from "./db/images";
import { Home } from "./pages/Home/Home.jsx";
import { useBrowser }  from "./context/browser-context.jsx";

function App() {

  const index = Math.floor(Math.random() * images.length);
  const bgImage = images[index].image;
  
  const {name} = useBrowser();

  console.log("name: ", name);

  return (
      <div className="app" style={{backgroundImage: `url("${bgImage}")`}}>
        <Home />
      </div>
  )
}

export default App
