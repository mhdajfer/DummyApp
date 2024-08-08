import { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  const [data, setData] = useState("Hi");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState("");

  const getData = async () => {
    const res = await axios.get("http://dummy.com/api/home");
    setData(res.data?.message);
  };

  const getUser = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://dummy.com/api/getUser", {
      userName,
    });
    console.log(res);
    setData(res.data?.user?.firstName);
  };

  const createUser = async (e) => {
    e.preventDefault();
    console.log(firstName, age);
    const res = await axios.post("http://dummy.com/api/createUser", {
      firstName,
      age,
    });
    console.log(res);
    setData("user created");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>HomePage</h1>

      <h1>Data: {data}</h1>

      <form
        onSubmit={(e) => {
          getUser(e);
        }}
      >
        <input
          type="text"
          placeholder="enter name of user to search"
          className="mx-4 border border-black px-12"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button>getUser</button>
      </form>
      <form onSubmit={(e) => createUser(e)}>
        <input
          type="text"
          value={firstName}
          placeholder="Enter your name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
