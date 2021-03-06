import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Provider } from "react-redux";
import store from "./store/cart";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Products />
      </Layout>
    </Provider>
  );
}

export default App;
