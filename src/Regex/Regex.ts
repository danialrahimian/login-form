const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*()_\-+=\[\]{};:'",.<>\/?\\|`~])[A-Za-z\d!@#\$%\^&\*()_\-+=\[\]{};:'",.<>\/?\\|`~]{8,}$/;
const usernameRegex: RegExp =
  /^(?=.{3,20}$)(?![._])(?!.*[._]{2})[a-zA-Z0-9._]+(?<![._])$/;

export { emailRegex, passwordRegex, usernameRegex };
