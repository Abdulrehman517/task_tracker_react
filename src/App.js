// import "./App.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Tasks from "./components/Tasks";

// const CustomToast = ({ closeToast }) => {
//   return (
//     <div>
//       SomeThing went Wrong!
//       <button onClick={closeToast}>Close</button>
//     </div>
//   );
// };

// toast.configure();
function App() {
  // const notify = () => {
  //   toast.info("NOtification ALert", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //     autoClose: 8000,
  //   });
  //   toast(<CustomToast />, { position: toast.POSITION.BOTTOM_CENTER });
  // };
  return (
    <div className="App">
      <Tasks />
      {/* <button onClick={notify}>Notify</button> */}
    </div>
  );
}

export default App;
