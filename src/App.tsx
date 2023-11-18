import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import { queryClient } from "./api/auth";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";

const App = () => {


  return (

    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/chats/:id" element={<ChatPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </QueryClientProvider>
  );

}

export default App