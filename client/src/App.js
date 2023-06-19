import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import CoordinatorLoginPage from "./pages/login/coordinator/CoordinatorLoginPage";
import SupervisorLoginPage from "./pages/login/supervisor/SupervisorLoginPage";
import InternLoginPage from "./pages/login/intern/InternLoginPage";
import InternDetailVerificationPage from "./auth-pages/intern/InternDetailVerificationPage";
import ActivateAccountPage from "./auth-pages/intern/ActivateAccountPage";
import InternDashboard from "./auth-pages/intern/InternDashboard";
import SupervisorDashboard from "./auth-pages/supervisor/SupervisorDashboard";
import CoordinatorDashboard from "./auth-pages/coordinator/CoordinatorDashboard";
import ScholarshipListings from "./auth-pages/intern/ScholarshipListings";
import AccommodationListings from "./auth-pages/intern/AccommodationListings";
import InternshipListings from "./auth-pages/intern/InternshipListings";
import InternshipListingMapPage from "./auth-pages/intern/InternshipListingMapPage";
import ContactPage from "./pages/contact/ContactPage";
import ScholarsPage from "./pages/research/ScholarsPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import LoginGridPage from "./pages/login/LoginGridPage";
import AboutUsPage from "./pages/about-us/AboutUsPage";
import LandingPage from "./pages/landing/LandingPage";
import {AuthProvider} from "./hooks/AuthContext";
import ActivateSupervisorAccountPage from "./auth-pages/supervisor/ActivateSupervisorAccountPage";
import SupervisorDetailVerificationPage from "./auth-pages/supervisor/SupervisorDetailVerificationPage";
import InternshipMenuPage from "./auth-pages/coordinator/internships/InternshipMenuPage";
import AddNewsSegmentPage from "./auth-pages/project_manager/AddNewsSegmentPage";
import SupervisorMenuPage from "./auth-pages/coordinator/supervisors/SupervisorMenuPage";
import InternsMenuPage from "./auth-pages/coordinator/interns/InternsMenuPage";
import AccommodationMenuPage from "./auth-pages/coordinator/accommodation/AccommodationMenuPage";
import CreateThemePage from "./auth-pages/coordinator/internships/CreateThemePage";
import ThemeListPage from "./auth-pages/coordinator/internships/ThemeListingPage";
import ViewEditThemePage from "./auth-pages/coordinator/internships/ViewEditThemePage";
import PartnersMenuPage from "./auth-pages/coordinator/partners/PartnersMenuPage";
import SupervisorAssignmentPage from "./auth-pages/coordinator/internships/SupervisorAssignmentPage";


function NotFound() {
    return <h1>404 - Page Not Found</h1>;
}



function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* General Home-Page Navigation */}
                    <Route path='/' exact element={<LandingPage/>}/>
                    <Route path='/about-us' exact element={<AboutUsPage/>}/>
                    {/* <Route path='/login' exact element={<LoginPage/>}/>*/}
                    <Route path='/login' exact element={<LoginGridPage/>}/>
                    <Route path='/login/supervisor' exact element={<SupervisorLoginPage/>}/>
                    <Route path='/login/coordinator' exact element={<CoordinatorLoginPage/>}/>
                    <Route path='/login/intern' exact element={<InternLoginPage/>}/>

                    {/*<Route path='/trial-login' exact element={<TrialLoginScreen/>}/>*/}

                    <Route path='/projects' exact element={<ProjectsPage/>}/>
                    <Route path='/scholars' exact element={<ScholarsPage/>}/>
                    <Route path='/contact' exact element={<ContactPage/>}/>

                    <Route path='/map' exact element={<InternshipListingMapPage/>}/>
                    <Route path='/internships' exact element={<InternshipListings/>}/>
                    <Route path='/accommodation' exact element={<AccommodationListings/>}/>
                    <Route path='/scholarships' exact element={<ScholarshipListings/>}/>



                    <Route path='/supervisor/dashboard' exact element={<SupervisorDashboard/>}/>
                    <Route path='/supervisor/account-activation' exact element={<ActivateSupervisorAccountPage/>}/>
                    <Route path='/supervisor/detail-verification' exact element={<SupervisorDetailVerificationPage/>}/>

                    <Route path='/intern/dashboard' exact element={<InternDashboard/>}/>
                    <Route path='/intern/account-activation' exact element={<ActivateAccountPage/>}/>
                    <Route path='/intern/detail-verification' exact element={<InternDetailVerificationPage/>}/>
                     {/*<Route path='/internships/:id/' exact element={<ViewAdvertisementDetailsPage/>}/>*/}

                    <Route path='/coordinator/dashboard' exact element={<CoordinatorDashboard/>}/>
                    <Route path='/coordinator/internships/menu' exact element={<InternshipMenuPage/>}/>
                    <Route path='/coordinator/students/menu' exact element={<InternsMenuPage/>}/>
                    <Route path='/coordinator/partners/menu' exact element={<PartnersMenuPage/>}/>
                    <Route path='/coordinator/supervisors/menu' exact element={<SupervisorMenuPage/>}/>
                    <Route path='/coordinator/accommodation/menu' exact element={<AccommodationMenuPage/>}/>
                    <Route path='/coordinator/support/menu' exact element={<InternshipMenuPage/>}/>
                    <Route path='/coordinator/create-theme' exact element={<CreateThemePage/>}/>
                    <Route path='/coordinator/themes' exact element={<ThemeListPage/>}/>
                    <Route path='/coordinator/assign-supervisors' exact element={<SupervisorAssignmentPage/>}/>
                    <Route path='/coordinator/themes/:themeId/' exact element={<ViewEditThemePage/>}/>

                    <Route path='/project-assistant/news/add' exact element={<AddNewsSegmentPage/>}/>

                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Router>
        </AuthProvider>
      )
}

export default App;
