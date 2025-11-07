export type registerFormType = {
  type?: "register";
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
};
export type loginFormType = {
  type?: "login";
  username: string;
  password: string;
};

export type formDataType = registerFormType | loginFormType;
export type formPropType = {
  type: "input" | "textarea";
  name: string;
  placeholder: string;
  describtion?: string;
  Label: string;
  formValue: formDataType;
  setFormValue: React.Dispatch<React.SetStateAction<formDataType>>;
};
export type authFormType = "register" | "login";
export type authPropType = {
  authFormType: authFormType;
  setAuthFormType: React.Dispatch<React.SetStateAction<authFormType>>;
};

export type FormValidationResult = {
  isValid: boolean;
  isUserNameValidate: boolean;
  isEmailValidate: boolean;
  isPasswordValidate: boolean;
  isRepeatPasswordValidate: boolean;
};
