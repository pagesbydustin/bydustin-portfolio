import HeaderComponent from "./components/layout/HeaderComponent";
import NavigationComponent from "./components/layout/NavigationComponent";
import BodyLayoutComponent from "./components/layout/BodyLayoutComponent";
import FooterComponent from "./components/layout/FooterComponent";
import { useResumeData } from './hooks/useResumeData';

function App() {
  const { person, loading, error } = useResumeData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <>
      <NavigationComponent />
      <div id="mainContent" className="container clearfix bg-primary-subtle p1 rounded-bottom-2">
        <HeaderComponent propsTitle={person.name} propsHeight={110} />
        <BodyLayoutComponent />
        <div id="contact" className="text-center align-content-center p-4 bg-body m-3 rounded-top-3 text-light">
          <h4>{person.name}</h4>
          <hr />
          <h5>{person.email}</h5>
          <div>{person.address}</div>
          <div>{person.phone}</div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
