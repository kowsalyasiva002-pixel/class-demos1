import { Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./AuthContext";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </AuthProvider>
  );
}

export default App;

























