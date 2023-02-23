import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-photo-view/dist/react-photo-view.css';
import { createContext, useState } from 'react';
const queryClient = new QueryClient();
export const UserContext = createContext();
function App() {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
       <QueryClientProvider client={queryClient}>
        {/* <UserContext.Provider selectedDate={selectedDate} setSelectedDate={setSelectedDate}>
        <RouterProvider router={router} />
        </UserContext.Provider> */}
        <RouterProvider router={router} />
       </QueryClientProvider>

    </div>
  );
}

export default App;

