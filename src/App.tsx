import MyProvider from './context/MyProvider';
import RouteMap from './routes';

function App() {
  return (
    <MyProvider>
      <RouteMap />
    </MyProvider>
  );
}

export default App;
