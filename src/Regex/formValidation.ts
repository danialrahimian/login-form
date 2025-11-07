import type { formDataType } from "@/Types/formTypes";
import { emailRegex, passwordRegex, usernameRegex } from "./Regex";
export default function useForm(formData: formDataType) {
  const isUserNameValidate = usernameRegex.test(formData.username);

  const isPasswordValidate = passwordRegex.test(formData.password);

  const isRepeatPasswordValidate =
    formData.type === "register"
      ? formData.repeatPassword === formData.password
      : false;

  const isEmailValidate =
    formData.type === "register" ? emailRegex.test(formData.email) : true;
  const isValidate: boolean =
    isUserNameValidate &&
    isPasswordValidate &&
    isRepeatPasswordValidate &&
    isEmailValidate;

  return {
    isValidate,
    isUserNameValidate,
    isPasswordValidate,
    isRepeatPasswordValidate,
    isEmailValidate,
  };
}
