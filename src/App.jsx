import { useEffect } from "react";

const tele = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tele.ready();
  }, []);

  return <div></div>;
}

export default App;
