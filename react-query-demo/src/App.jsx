import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";
import { useState } from "react";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <h1>React Query Demo</h1>
        <button onClick={() => setShowPosts(!showPosts)} className="toggle-btn">
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>
        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
