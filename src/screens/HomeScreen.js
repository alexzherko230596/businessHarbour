import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import AboutUs from "../components/AboutUs/AboutUs";
import HowWeCanHelpYou from "../components/HowWeCanHelpYou/HowWeCanHelpYou";
import ShowingOff from "../components/ShowingOff/ShowingOff";
import BusinessHarbor from "../components/BusinessHarbor/BusinessHarbor";
import TableBusinessHarbor from "../components/TableBusinessHarbor/TableBusinessHarbor"; 

import "../index.css"
import FAQ from "../components/FAQ/FAQ";
import LeaveAnApplication from "../components/LeaveAnApplication/LeaveAnApplication";
import GoogleApiWrapper from "../components/MapBlock/MapBlock";
import Footer from "../components/Footer/Footer";
import Languages from "../Languages";

function HomeScreen() {
    return(
        <div className="wrapperBlocks">
            <Header />
            <MainPage />
            <AboutUs />
            <HowWeCanHelpYou />
            <ShowingOff />
            <BusinessHarbor /> 
            <TableBusinessHarbor />
            <FAQ />
            <LeaveAnApplication />
            <GoogleApiWrapper />
            <Footer />
        </div>
    )
}

export default HomeScreen