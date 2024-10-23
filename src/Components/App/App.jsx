import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
function App() {
  const [user, setuser] = useState(null);
  const [qouery, setquery] = useState("");
  const fetchuser = async () => {
    const res = await axios.get("http://localhost:3000/user");
    setuser(res.data);
  };

  useEffect(() => {
    fetchuser();
  }, []);
  const keys=["first_name","last_name","email","gender"]
  const search = (data) => {
    return data?.filter(
      (item) =>
        keys.some((x) => item[x].toLowerCase()
      .includes(qouery))
  );
    
  };

  return (
    <div className="app text-center ">
      <input
        type="text"
        placeholder="جستجو"
        onChange={(e) => {
          setquery(e.target.value);
        }}
        className="saerch mx-auto mt-5 w-50 form-control"
      />
      <ul className="list list-unstyled">
        <User user={search(user)} />
      </ul>
    </div>
  );
}

export default App;
