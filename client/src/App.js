import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>login page</div>} />
          <Route path="register" element={<div>register page</div>} />

          <Route element={<div>protected route</div>}>
            <Route element={<div>applayout</div>}>
              <Route index element={<Navigate replace to="calendar" />} />
              <Route path="calendar" element={<div>calendar</div>} />
              <Route path="events/:id" element={<div>edit event</div>} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate replace to="login" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}







