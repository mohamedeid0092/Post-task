import Footer from "./Footer/Footer";

import Header from "./Header/Header";
import { useState } from "react";
import Posts from "./blogs/Posts";

function App() {
  const [userPosts, setUserPost] = useState(null);
  const [users, setUsers] = useState(null);
  console.log(users);
  return (
    <div className="App">
      <Header setUserPost={setUserPost} users={users} setUsers={setUsers} />
      <Posts userPosts={userPosts} users={users} />
      <Footer />
    </div>
  );
}

export default App;
