import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjById() {
      // Need a function that can be called (firebase Service) in order to get the user data based on the userId
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjById();
    }
  }, [user]);

  return { user: activeUser };
}
