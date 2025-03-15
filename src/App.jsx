import HeaderComponent from "./components/layout/HeaderComponent";
import NavigationComponent from "./components/layout/NavigationComponent";
import BodyLayoutComponent from "./components/layout/BodyLayoutComponent";

import { useResumeData } from './hooks/useResumeData';

function App() {
  const { person, experience, skills, loading, error } = useResumeData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <NavigationComponent />
      {/** Nav Component */}
      <div id="mainContent" className="container clearfix bg-primary-subtle p1">
        <HeaderComponent propsTitle={person.name} propsHeight={110} />
        {/** Header Component */}
        <BodyLayoutComponent />
        {/** Body Layout Component */}
        {/** Footer Component */}
      </div>
    </>
  );
}

export default App;
