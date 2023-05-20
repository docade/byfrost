import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import "antd/dist/reset.css";
import BasicLayout from "./component/LayOut/BasicLayout";
import Test from "./page/Test";
//import Chainrunner from "./component/wallet/Chainrunner";
import PlayButton from "./component/pixelstreaming/PlayButton";
import BackSer from "./page/BackSer";
// import Minting from "./component/wallet/NFTminting";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/backser" element={<BackSer />}></Route>
        <Route path="/test" element={<Test />}></Route>
        {/* <Route path="/chainrunner" element={<Chainrunner />}></Route> */}
        <Route path="/game" element={<PlayButton />}></Route>
        {/* <Route path="/minting" element={<Minting />}></Route> */}
      </Routes>
    </BasicLayout>
  );
}

export default App;
