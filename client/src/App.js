import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Calendar from "./components/Calendar";
import AppLayOut from "./components/AppLayOut";

const queryClient = new QueryClient()


export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>login page</div>} />
          <Route path="register" element={<div>register page</div>} />

          {/* <Route element={<div>protected route</div>}> */}
          <Route element={<AppLayOut />}>
            <Route index element={<Navigate replace to="calendar" />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="events/:id" element={<div>edit event</div>} />
          </Route>
          {/* </Route> */}
          <Route path="*" element={<Navigate replace to="login" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}







