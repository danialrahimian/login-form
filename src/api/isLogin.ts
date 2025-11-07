import type { formDataType } from "@/Types/formTypes";
import type { User } from "@/Types/userType";

export const isLogin = async (user: formDataType) => {
  let users: User[];
  let ok: boolean = false;
  await fetch("https://68f0a3aa0b966ad500339b27.mockapi.io/register")
    .then((res) => res.json())
    .then((data) => {
      users = data;
      ok = users.some(
        (u) => u.username === user.username && u.password === user.password
      );
    });

  return ok;
};
