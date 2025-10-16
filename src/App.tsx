// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentsWithProps from "./components/ArrowFunctionalComponentsWithProps.tsx";
// import ArrowFunctionalComponentsWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChanger from "./components/NameChanger.tsx";
//import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import ClassComponent from "./components/ClassComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";

function App() {

  return (
    <>
        {/*/!*<ViteIntro/>*!/*/}
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentsWithProps title="Is an Arrow Functional Component with Props"/>*/}
        {/*<ArrowFunctionalComponentsWithPropsType*/}
        {/*    title="Is an Arrow Functional Component with two Props"*/}

        {/*    description="Lorem ipsum dolor sit amet,*/}
        {/*                consectetur adipisicing elit. "*/}
        {/*/>*/}

        {/*<Card title="Card">*/}

        {/*</Card>*/}

        <Layout>
            {/*<ArrowFunctionalComponentsWithPropsType*/}
            {/*    title="Is an Arrow Functional Component with two Props"*/}

            {/*    description="Lorem ipsum dolor sit amet,*/}
            {/*            consectetur adipisicing elit. "*/}
            {/*/>*/}

            {/*<FunctionalComponentWithState/>*/}
            {/*<ClassComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterAdvanced/>*/}
            <CounterWithCustomHook/>
        </Layout>
    </>
  )
}

export default App
