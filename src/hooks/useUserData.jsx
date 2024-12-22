import { useEffect, useState } from "react";

const useUserData = () => {
  const [user, setUser] = useState(null);
  //   console.log(user);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data?.results[0]);
        setUser(data?.results[0]);
      })
      .catch((err) => console.log("error", err));
  }, []);
  return user;
};

export default useUserData;
