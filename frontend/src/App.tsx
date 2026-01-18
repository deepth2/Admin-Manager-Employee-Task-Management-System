import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="/manager" element={
            <ProtectedRoute role="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          } />

          <Route path="/employee" element={
            <ProtectedRoute role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
