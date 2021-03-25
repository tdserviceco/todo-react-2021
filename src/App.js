import React, {useEffect} from 'react';
import Img from './img/logo.png';
import DemoComp from './components/DemoComp'; // Demo purpose only

function App() {
  const env = process.env.NODE_ENV;
  useEffect(() => {
    document.title = "Demo page"
 }, []);

  return (
    <main>
      <h1>Helloworld</h1>
      <p>Demo text from ReactJS</p>
      <em>Your using: {env}</em>
      <img src={Img} alt="reactJS" />
      <DemoComp text="Comp" />
    </main>
  )
}

export default App;