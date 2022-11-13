import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import "./App.css";
import Search from "./pages/optimailSearch/Search";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Search />
      </div>
    </QueryClientProvider>
  );
}

export default App;
