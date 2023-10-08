import Router from "./router";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
