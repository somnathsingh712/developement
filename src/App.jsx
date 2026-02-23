import useUser from "./hooks/useUser";
import { Toaster } from "react-hot-toast";
export default function App() {
  const { users, isLoading } = useUser();
  const shimmerStyle = {
    height: "20px",
    width: "80%",
    marginBottom: "12px",
    borderRadius: "6px",
    background:
      "linear-gradient(90deg, #eeeeee 25%, #dddddd 50%, #eeeeee 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.2s infinite",
  };

  return (
    <div style={{ padding: 40 }}>
      <Toaster position="top-right" />

      
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}
      </style>

      <h1>Axios Instance Demo</h1>
      <h3>User List:</h3>

      {isLoading ? (
        <ul>
          {[...Array(5)].map((_, index) => (
            <li key={index} style={shimmerStyle}></li>
          ))}
        </ul>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
