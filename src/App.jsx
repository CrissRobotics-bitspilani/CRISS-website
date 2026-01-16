import{ lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
const Sponsorship = lazy(() => import("./components/sponsorship/Sponsorship"));
const Competitions = lazy(() => import("./components/competitions/Competitions"));
const Achievements = lazy(() => import("./components/Achievements/Achievements"));
const Team = lazy(() => import("./components/Team/Team"));
const Alumni = lazy(() => import("./components/Alumni/Alumni"));
const Developer = lazy(() => import("./components/Developer/Developer"));
// const IRCPage = lazy(() => import("./components/IRCPage/IRCPage"));  
// const Events = lazy(() => import("./components/Events/Events"));
// const Funding = lazy(() => import("./components/Funding/Funding"));


ReactGA.initialize("G-N42MZLRJ3F");

function App() {
    // const [showLoader, setShowLoader] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowLoader(false);
    //     }, 1500);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sponsorship" element={<Sponsorship />} />
                    <Route path="/competitions" element={<Competitions />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/developers" element={<Developer />} />
                    <Route path="/achievements" element={<Achievements />} />
                    {/* <Route path="/irc" element={<IRCPage />} /> */}
                    {/* <Route path="/events" element={<Events />} /> */}
                    {/* <Route path="/funding" element={<Funding />} /> */}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
