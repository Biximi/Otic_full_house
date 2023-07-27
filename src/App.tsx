import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OticSuiteAdminDashboard from "./pages/OticSuiteAdminDashboard";
import DivcolMd8 from "./pages/DivcolMd8";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Signin from "./pages/Signin";
import StudentsAttendence from "./pages/StudentsAttendence";
import OticExam from "./pages/OticExam";
import CompanyDetails from "./pages/CompanyDetails";
import TecherClassAttendence from "./pages/TecherClassAttendence";
import OticSuiteEditIndividualDet from "./pages/OticSuiteEditIndividualDet";
import OticSuiteAssignRoles from "./pages/OticSuiteAssignRoles";
import OticSuiteResultsEntryForm from "./pages/OticSuiteResultsEntryForm";
import OticSuiteStudentsForm from "./pages/OticSuiteStudentsForm";
import OticSuiteUserEntryForm from "./pages/OticSuiteUserEntryForm";
import OticSuiteSubjetcs from "./pages/OticSuiteSubjetcs";
import OticSuiteStudentList from "./pages/OticSuiteStudentList";
import OticSuiteAdminProfile from "./pages/OticSuiteAdminProfile";
import OticSuiteTimetable from "./pages/OticSuiteTimetable";
import OticSuiteViewIdividualForm from "./pages/OticSuiteViewIdividualForm";
import OticSuiteTeachersDashboard from "./pages/OticSuiteTeachersDashboard";
import OticSuiteAdminDashboard1 from "./pages/OticSuiteAdminDashboard1";
import Signin1 from "./pages/Signin1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/divcolmd8":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/students-attendence":
        title = "";
        metaDescription = "";
        break;
      case "/otic-exam":
        title = "";
        metaDescription = "";
        break;
      case "/company-details":
        title = "";
        metaDescription = "";
        break;
      case "/techer-class-attendence":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-edit-individual-details":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-assign-roles":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-results-entry-form":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-students-form":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-user-entry-form":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-subjetcs":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-studentlist":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-adminprofile":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-timetable":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-view-idividual-formsnew":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-teachersdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/otic-suite-admindashboard":
        title = "";
        metaDescription = "";
        break;
      case "/signin1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OticSuiteAdminDashboard />} />
      <Route path="/divcolmd8" element={<DivcolMd8 />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/students-attendence" element={<StudentsAttendence />} />
      <Route path="/otic-exam" element={<OticExam />} />
      <Route path="/company-details" element={<CompanyDetails />} />
      <Route
        path="/techer-class-attendence"
        element={<TecherClassAttendence />}
      />
      <Route
        path="/otic-suite-edit-individual-details"
        element={<OticSuiteEditIndividualDet />}
      />
      <Route
        path="/otic-suite-assign-roles"
        element={<OticSuiteAssignRoles />}
      />
      <Route
        path="/otic-suite-results-entry-form"
        element={<OticSuiteResultsEntryForm />}
      />
      <Route
        path="/otic-suite-students-form"
        element={<OticSuiteStudentsForm />}
      />
      <Route
        path="/otic-suite-user-entry-form"
        element={<OticSuiteUserEntryForm />}
      />
      <Route path="/otic-suite-subjetcs" element={<OticSuiteSubjetcs />} />
      <Route
        path="/otic-suite-studentlist"
        element={<OticSuiteStudentList />}
      />
      <Route
        path="/otic-suite-adminprofile"
        element={<OticSuiteAdminProfile />}
      />
      <Route path="/otic-suite-timetable" element={<OticSuiteTimetable />} />
      <Route
        path="/otic-suite-view-idividual-formsnew"
        element={<OticSuiteViewIdividualForm />}
      />
      <Route
        path="/otic-suite-teachersdashboard"
        element={<OticSuiteTeachersDashboard />}
      />
      <Route
        path="/otic-suite-admindashboard"
        element={<OticSuiteAdminDashboard1 />}
      />
      <Route path="/signin1" element={<Signin1 />} />
    </Routes>
  );
}
export default App;
