import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-photo-view/dist/react-photo-view.css';
const queryClient = new QueryClient();

function App() {
  return (
    <div>
       <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       </QueryClientProvider>

    </div>
  );
}

export default App;

