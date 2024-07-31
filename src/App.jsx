
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";

import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const queryClient = new QueryClient();


  return (
    <>
     <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
     </QueryClientProvider>
        <Footer />
  
    </>
  );
}

export default App;
