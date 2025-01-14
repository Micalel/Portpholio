import React, { useState } from "react";
import Welcome from "./components/welcome/welcome";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AppRoutes from "./routes/appRoutes";

const App: React.FC = () => {
  const [isWelcomeFading, setWelcomeFading] = useState(false);
  const [isWelcomeVisible, setWelcomeVisible] = useState(true);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isFooterVisible, setFooterVisible] = useState(false);

  const handleWelcomeClose = () => {
    setWelcomeFading(true);
    setHeaderVisible(true);
    setFooterVisible(true);

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
