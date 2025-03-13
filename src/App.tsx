import Kambaz from "./Kambaz";
import Labs from "./Labs";
import store from "./Kambaz/store";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes, Navigate } from "react-router";
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Project" element={<h1>Project</h1>} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
