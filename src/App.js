import Footer from "./Footer/Footer";

import Header from "./Header/Header";
import { useState } from "react";
import Posts from "./blogs/Posts";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  const [userPosts, setUserPost] = useState(null);
  const [users, setUsers] = useState(null);
  const [active, setActive] = useState("all users");

  return (
    <div className="App">
      <Header
        setUserPost={setUserPost}
        users={users}
        setUsers={setUsers}
        setActive={setActive}
        active={active}
      />
      {(active === "all users" || active === "users") && (
        <Posts userPosts={userPosts} users={users} active={active} />
      )}
      {active === "about" && <About />}
      {active === "contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
