
// import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'                             // now <Description/> & <Greetings/> can access css in App.css
// import Description from './Description'        // added component 1 inside this component
// import Greetings from './Greetings'            // added component 2 inside this component
// import FunctionConcept from './FunctionConcept'
import Objects from "./Objects"
import Arrays from "./Arrays"
import ConditionalRenderig from "./ConditionalRendering"
import UsingProps from "./UsingProps"
import FunctionAsProps from "./FunctionAsProps"
import Dashboard from "./Dashboard"
import State from "./State"

function App() {

  // const Hobbies = ["Reading", "Writing", "Speaking", "Listening"]

  // function Message () {
  //   alert`Button Is Pressed`
  // }
  // function NewMessage () {
  //   alert`Happy Birthday To You`
  // }

//  return (
//   <>
//   <UsingProps name="Talha" age={22} city="Sargodha" Hobbies={Hobbies}/>
//   {/* <UsingProps name="Tally" /> */}


//   {/* We're using 1 componenet in multiple times with many actions & also passing function in button */}
//   <FunctionAsProps label="Click Me" handle={Message}/>
//   <FunctionAsProps label="Just Click" handle={NewMessage}/>


//   <Dashboard />
//   </>
//  )

//---------------------------------------------------

return (
  <>
  <State />
  </>
)
}

export default App
