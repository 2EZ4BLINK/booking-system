import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Account,
  Bookings,
  Cabins,
  Dashboard,
  Login,
  PageNotFound,
  Settings,
  Users,
} from "./pages/index";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
