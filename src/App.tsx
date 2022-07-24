import MyProvider from "./context/MyProvider";
import RouteMap from "./routes";

const App = () => {
  return (
    <MyProvider>
      <RouteMap />
    </MyProvider>
  );
};

export default App;
