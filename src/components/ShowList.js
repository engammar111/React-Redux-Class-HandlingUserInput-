import React, { Component } from "react";

const users = [
  { id: 1, name: "ammar abdo" },
  { id: 2, name: "ali abdo" },

  { id: 3, name: "ahmed abdo" },
  { id: 4, name: "amr abdo" },
];
export default class ShowList extends Component {
  render() {
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}
