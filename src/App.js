import './App.css';
import Test from './component/Test';
import UseMemo from './component/UseMemo';
import ListOfNames, { UserForm } from './component/UseReducer';
import NameList from "./component/UseState";
import UserEffect from "./component/UserEffect";

function App() {
  return (
    <div className="App">
      {/* <NameList/> */}
      <UserEffect/>
      {/* <UserForm/> */}
      {/* <ListOfNames/> */}
      {/* <UseMemo/> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;
