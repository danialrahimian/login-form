import type { Middleware } from "redux";
import { addUser } from "../reducers/userReducer";
export const addUserMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);
  if (addUser.match(action)) {
    fetch("https://68f0a3aa0b966ad500339b27.mockapi.io/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(action.payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return result;
};
