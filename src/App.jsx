import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import MyFavourites from "./components/MyFavourites";
import Usage from "./components/Usage";
import WhySoLittle from "./components/WhySoLittle";
import Feedback from "./components/Feedback";
const tele = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tele.ready();
  }, []);

  return (
    //dashboard
    <div className="mx-3">
      {/* <Dashboard /> */}
      {/* <MyFavourites /> */}
      {/* <Usage /> */}
      {/* <WhySoLittle /> */}
      {/* <Feedback /> */}
    </div>
  );
}

export default App;
