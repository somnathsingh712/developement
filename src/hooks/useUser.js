import api from "../api/axios";
import { useEffect, useState } from "react";
import { showError,showSuccess,showInfo } from "../utils/toast";

export default function useUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        showInfo("Fetching users...");

        const response = await api.get("/users");
        setUsers(response.data);

        showSuccess("Users loaded successfully!");
      } catch (error) {
        showError("Failed to fetch users");
        console.error(error);
      }finally{
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);
  return {users,isLoading};
}
