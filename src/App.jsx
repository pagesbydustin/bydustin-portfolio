import HeaderComponent from "./components/layout/HeaderComponent"
import NavigationComponent from "./components/layout/NavigationComponent"
import BodyLayoutComponent from "./components/layout/BodyLayoutComponent"

function App() {

  return (
    <>
      <NavigationComponent />{/** Nav Component */}
      <div id="mainContent" className='container clearfix bg-primary-subtle p1'>
        <HeaderComponent propsTitle={"Welcome"} propsHeight={110} />{/** Header Component */}
        <BodyLayoutComponent welcomeMsg={"Portfolio"} />{/** Body Layout Component */}
        {/** Footer Component */}
      </div>
    </>
  )
}

export default App
