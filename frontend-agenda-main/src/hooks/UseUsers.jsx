import { useEffect, useState } from "react";
import getAllUsers from './../services/users/getAll.js';

function UseUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      const { users } = data;
      if (users) {
        setUsers(users);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    // Realizar una solicitud cada X segundos (por ejemplo, cada 10 segundos)
    const pollingInterval = 10000; // 10 segundos
    const intervalId = setInterval(fetchUsers, pollingInterval);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { users, loading };
}

export default UseUsers;
