import './App.css'
import { images } from "./db/images";
import { Home } from "./pages/Home/Home.jsx";

function App() {

  const index = Math.floor(Math.random() * images.length);
  const bgImage = images[index].image;
  console.log(bgImage);

  return (
      <div className="app" style={{backgroundImage: `url("${bgImage}")`}}>
        <Home />
      </div>
  )
}

export default App
