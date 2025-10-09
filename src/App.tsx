// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentsWithProps from "./components/ArrowFunctionalComponentsWithProps.tsx";

function App() {

  return (
    <>
        {/*<ViteIntro/>*/}
        <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentsWithProps title="Is an Arrow Functional Component with Props"/>
    </>
  )
}

export default App
