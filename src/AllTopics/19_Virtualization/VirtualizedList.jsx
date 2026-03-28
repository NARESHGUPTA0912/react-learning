import React, { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";

const VirtualizedList = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let resp = await fetch("https://dummyjson.com/users?limit=1000");
    let data = await resp.json();
    console.log(data.users);
    setUsers(data.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-5 text-center">
      <h2 className="my-10 font-bold text-4xl">Learn Virtualized List</h2>
      {/* {users.length > 10 ? (
        <section>
          {users.map((user) => {
            return (
              <div>
                <h3 className="font-bold">{user.id + "  "}{user.firstName}</h3>
                <button>Hire me</button>
              </div>
            );
          })}
        </section>
      ) : (
        <p>Loading... </p>
      )} */}

      {users.length > 0 ? (
        <>
          <Virtuoso
            style={{
              height: "800px",
              width: "1450px",
              border: "1px solid black",
              margin: "0 auto",
            }}
            totalCount={users.length}
            itemContent={(index) => {
              console.log(index);
              let user = users[index];
              return (
                <div style={{padding:"10px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <h1>
                    {user.id} Name: {user.firstName} {user.maidenName} {user.lastName} Age: {user.age} Gender: {user.gender} Email: {user.email} Mobile: {user.phone}
                  </h1>
                  <button>Hire Me</button>
                </div>
              );
            }}
          />
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default VirtualizedList;
