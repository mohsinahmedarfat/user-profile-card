import "./App.css";

import ProfileCard from "./components/ProfileCard";
import useUserData from "./hooks/useUserData";

function App() {
  const user = useUserData();
  // console.log(user);
  // if (!user) return <h3>Loading...</h3>;

  return (
    <>
      <ProfileCard user={user} />
    </>
  );
}

export default App;
