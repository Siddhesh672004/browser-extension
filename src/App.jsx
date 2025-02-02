import './App.css'
import { images } from "./db/images";
import { Home } from "./pages/Home/Home.jsx";
import { Task } from "./pages/Task/Task.jsx";
import { useBrowser }  from "./context/browser-context.jsx";
import { useEffect } from 'react';

function App() {

  const index = Math.floor(Math.random() * images.length);
  const bgImage = images[index].image;
  
  const {name, browserDispatch} = useBrowser();

  useEffect(() => {
    const userName = localStorage.getItem("name");
    browserDispatch({
      type: "NAME",
      payload: userName
    });
  }, [])

  return (
      <div className="app" style={{backgroundImage: `url("${bgImage}")`}}>
        {name ? <Task /> : <Home />}
      </div>
  );
}

export default App
