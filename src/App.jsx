import HeaderComponent from "./components/layout/HeaderComponent";
import NavigationComponent from "./components/layout/NavigationComponent";
import BodyLayoutComponent from "./components/layout/BodyLayoutComponent";
import Resume from "./assets/Resume-Data_2024.json";

function App() {
  const resumeData = Resume;
  const Person = {
    name: resumeData.Name,
    address: resumeData.Address,
    phone: resumeData.Phone,
    summary: resumeData["Professional Summary"],
    social: { linkedIn: resumeData.LinkedIn },
  };
  Person.store = (key, value) => {
    sessionStorage.setItem(key, value);
  };
  Person.store("resume", JSON.stringify(Resume));
  return (
    <>
      <NavigationComponent />
      {/** Nav Component */}
      <div id="mainContent" className="container clearfix bg-primary-subtle p1">
        <HeaderComponent propsTitle={Person.name} propsHeight={110} />
        {/** Header Component */}
        <BodyLayoutComponent />
        {/** Body Layout Component */}
        {/** Footer Component */}
      </div>
    </>
  );
}

export default App;
