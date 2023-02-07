import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Navbar from "./components/Navbar";
import DispatchCard from "./components/DispatchCard";
import { WagmiProvider } from "./providers/Wagmi";
import TestSwipe from "./components/TestSwipe";
import Intro from "./components/Intro";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";
import { MoreLikeThisStep } from "./components/MoreLikeThisStep/MoreLikeThisStep";
import Topics from "./components/Topics";

// CRA and buffer dont play nice
window.Buffer = window.Buffer || require("buffer").Buffer;

function Layout() {
  const [step, setStep] = useState(0);
  return (
    <>
      <Modal onClick={() => setStep(step + 1)}>
        <div>
          {step === 2 && (
            <MoreLikeThisStep onClick={() => console.log("next choice")} />
          )}
        </div>
      </Modal>
      <TestSwipe />
      <Outlet />
    </>
  );
}

function App() {
  const navigate = useNavigate();

  // if there is no route, redirect to /info-card
  // useEffect(() => {
  //   if (window.location.pathname === '/') {
  //     navigate("/intro")
  //   }
  // }, [navigate]);

  return (
    <WagmiProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="intro" element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="topics" element={<Topics />} />
          <Route
            path="info-card"
            element={<DispatchCard dispatchMessageId="120" />}
          />
          <Route
            path="poll-card"
            element={<DispatchCard dispatchMessageId="196" />}
          />
          <Route
            path="action-card"
            element={<DispatchCard dispatchMessageId="269" />}
          /> */}
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" />
    </WagmiProvider>
  );
}

export default App;
