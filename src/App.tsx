import React, { useState, useEffect } from "react";
import Welcome from "./components/welcome/welcome";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AppRoutes from "./routes/appRoutes";

const App: React.FC = () => {
  const [isWelcomeFading, setWelcomeFading] = useState(false);
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isFooterVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setWelcomeVisible(true);
    } else {
      setHeaderVisible(true);
      setFooterVisible(true);
    }
  }, []);

  const handleWelcomeClose = () => {
    setWelcomeFading(true); 
    setHeaderVisible(true);
    setFooterVisible(true);

    
    localStorage.setItem("hasSeenWelcome", "true");

    setTimeout(() => {
      setWelcomeVisible(false);
    }, 1000); 
  };

  return (
    <>
      {isWelcomeVisible ? (
        <Welcome isFading={isWelcomeFading} onClick={handleWelcomeClose} />
      ) : (
        <>
          {isHeaderVisible && <Header />}
          <AppRoutes />
          {isFooterVisible && <Footer />}
        </>
      )}
    </>
  );
};

export default App;
