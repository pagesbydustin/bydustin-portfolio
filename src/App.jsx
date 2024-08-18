import HeaderComponent from "./components/layout/HeaderComponent";
import NavigationComponent from "./components/layout/NavigationComponent";
import BodyLayoutComponent from "./components/layout/BodyLayoutComponent";
import FooterComponent from "./components/layout/FooterComponent";

import Resume from "./assets/Resume-Data_2024.json";

function App() {
  const resumeData = Resume;

  const Person = {
    name: resumeData.Name,
    address: resumeData.Address,
    phone: resumeData.Phone,
    summary: resumeData["Professional Summary"],
    links: resumeData.links,
    store: (key, value) => {
      sessionStorage.setItem(key, value);
    },
  };

  function extractAllSkills(data) {
    const skills = [];
    const skillSet = new Set(); // Use a Set to prevent duplicates

    // Loop through each experience
    data.Experience.forEach((experience) => {
      // Combine existing skills with the current experience's skills
      skills.push(...experience.Skills);

      // Add skills to the Set to prevent duplicates
      experience.Skills.forEach((skill) => {
        skillSet.add(skill);
      });
    });

    // Convert the Set back to an array
    const uniqueSkills = Array.from(skillSet);

    return uniqueSkills;
  }

  // Example usage
  const allSkills = extractAllSkills(resumeData);

  Person.store("person", JSON.stringify(Person));
  Person.store("experience", JSON.stringify(resumeData.Experience));
  Person.store("skills", JSON.stringify(allSkills));

  return (
    <>
      <NavigationComponent />
      {/** Nav Component */}
      <div id="mainContent" className="container clearfix bg-primary-subtle p1">
        <HeaderComponent propsTitle={Person.name} propsHeight={110} />
        {/** Header Component */}

        <BodyLayoutComponent />
        {/** Body Layout Component */}
        
        <div
          id="contact"
          className="text-center align-content-center p-4 bg-body m-3 rounded-top-3 text-light"
        >
          <h4>{Person.name}</h4>
          <hr />
          <h5> pagesbydustin@gmail.com</h5>
          <h5>admin@theparkersarereal.com </h5>
          <div> {Person.address}</div>
          <div>{Person.phone}</div>
        </div>
      </div>
      <FooterComponent />
      {/** Footer Component */}
    </>
  );
}

export default App;
