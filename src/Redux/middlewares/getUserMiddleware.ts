import type { Middleware } from "@reduxjs/toolkit";
import { getUsers } from "../reducers/userReducer";
export const getUserMiddleware: Middleware = () => (next) => async (action) => {
  const result = next(action);
  if (getUsers.match(action)) {
    try {
      const res = await fetch(
        "https://68f0a3aa0b966ad500339b27.mockapi.io/register"
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const users = await res.json();
      console.log("users:", users);
    } catch (error) {
      console.error(error);
    }
  }

  return result;
};
