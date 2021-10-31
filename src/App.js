import "./App.css";
import ListingPage from "./components/pages/ListingPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <ListingPage />
      {/* // OUTER DIV */}

      {/* //DATA FETHCING CONTAINER */}

      {/* SERACH OANEL */}

      {/* list grid virtualsed*/}
    </Provider>
  );
}

export default App;
