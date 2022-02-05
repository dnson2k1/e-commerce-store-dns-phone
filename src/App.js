import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />

        <div className="container">
          <div className="main">
            <Router />
          </div>
        </div>
        <Footer />
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
