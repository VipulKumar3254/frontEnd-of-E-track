import Footer from "./component/Footer";
import Header from "./component/Header";
import View from "./component/View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formfordev from "./component/Formfordev";
import Upper from "./component/Upper";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <><Header name="Document" procs="Development" link="/dev" /> <Upper name="Document"/> <View/><Footer/></>}  />
      <Route path="/dev" element={ <><Header name="Development" procs="Tracking" link="/"/> <Upper name="Development"/><Formfordev/><Footer/></>}  />
    </Routes>
  </BrowserRouter>
 
 
 );
}

export default App;
