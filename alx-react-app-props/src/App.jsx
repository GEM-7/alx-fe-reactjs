import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserContext from "./components/UserContext.js";
import ProfilePage from "./components/ProfilePage.jsx";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserContext.Provider value={props}>
        <UserProfile />
      </UserContext.Provider>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
