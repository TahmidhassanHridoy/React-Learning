import React from "react";
import "./App.css";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import Inline from "./components/Inline";
import Stylesheet from "./components/Stylesheet";

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true} />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      {/* <NameList /> */}
      {/*<UserGreeting />*/}
      {/*<FunctionClick />*/}
      {/*<ClassClick />}
      {/*<EventBind />*/}
      {/* <Counter />*/}
      {/*<Message /> */}
      {/* <Greet name="tahmid" Position="devops">
        <p>this is children props</p>
      </Greet>
      <Greet name="hassan" Position="SQA">
        <button>Action</button>
      </Greet>*/}
      {/*<Greet name="Ridoy" Position="Software Engineer" /> */}
      {/*<Welcome name="tahmid" Position="devops" />
      <Welcome name="hassan" Position="SQA" />
      <Welcome name="Hridoy" Position="Software Engineer" />
      <Hello />
    </div>
  */}
    </div>
  );
}

export default App;
