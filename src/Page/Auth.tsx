import Form from "@/Components/Form";
import { Button } from "@/Components/ui/button";
import { useEffect, useState } from "react";
import formValidation from "@/Regex/formValidation";
import type {
  formDataType,
  authPropType,
  registerFormType,
  loginFormType,
} from "@/Types/formTypes";
import { useDispatch } from "react-redux";
import { isLogin } from "@/api/isLogin";
import { toast } from "sonner";

export default function Auth({ authFormType, setAuthFormType }: authPropType) {
  const [formValue, setFormValue] = useState<formDataType>({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });
  const dispach = useDispatch();
  useEffect(() => {
    dispach({ type: "getUsers" });
  }, []);
  const registerUser = (formData: formDataType) => {
    if (formData.type === "register") {
      const {
        isValidate,
        isUserNameValidate,
        isPasswordValidate,
        isRepeatPasswordValidate,
        isEmailValidate,
      } = formValidation({
        ...formData,
        type: "register",
      });

      if (isValidate) {
        toast.success("Register Successfuly");
        dispach({ type: "addUser", payload: formData });
      } else {
        toast.error("Please Fill Out Form Corectly");
      }
      if (!isUserNameValidate) {
        toast.error("Username is invalid!");
      }
      if (!isPasswordValidate) {
        toast.error("Password is invalid!");
      }
      if (!isRepeatPasswordValidate) {
        toast.error("Password and repeat password do not match!");
      }
      if (!isEmailValidate) {
        toast.error("Email is invalid!");
      }
    }
  };
  const loginUser = async (formData: formDataType) => {
    if (formData.type === "login") {
      try {
        const ok = await isLogin(formData);
        if (ok) {
          toast.success("Login Successfully");
        } else {
          toast.error("Login Failed");
        }
      } catch (e: any) {
        toast.error(e);
      }
    } else {
      return;
    }
  };
  if (authFormType === "register") {
    return (
      <div className="border-[var(--border)] w-96 border rounded-[var(--radius)] p-5">
        <Form
          type={"input"}
          name={"email"}
          placeholder={"Email"}
          Label={"Email"}
          formValue={formValue}
          setFormValue={setFormValue}
        />
        <Form
          type={"input"}
          name={"username"}
          placeholder={"User Name"}
          Label={"User Name"}
          setFormValue={setFormValue}
          formValue={formValue}
        />
        <Form
          type={"input"}
          name={"password"}
          placeholder={"Password"}
          Label={"Password"}
          setFormValue={setFormValue}
          formValue={formValue}
        />
        <Form
          type={"input"}
          name={"repeatPassword"}
          placeholder={"Repeat Password"}
          Label={"Repeat Password"}
          setFormValue={setFormValue}
          formValue={formValue}
        />
        <div className="flex items-center justify-between ">
          <Button
            variant="outline"
            onClick={() =>
              registerUser({
                type: "register",
                ...formValue,
              } as registerFormType)
            }
          >
            Register
          </Button>

          <p
            className="cursor-pointer"
            onClick={() => setAuthFormType("login")}
          >
            have an account ?
          </p>
        </div>
      </div>
    );
  }
  if (authFormType === "login") {
    return (
      <div className="border-[var(--border)] w-96 border rounded-[var(--radius)] p-5">
        <Form
          type={"input"}
          name={"username"}
          placeholder={"User Name"}
          Label={"User Name"}
          setFormValue={setFormValue}
          formValue={formValue}
        />
        <Form
          type={"input"}
          name={"password"}
          placeholder={"Password"}
          Label={"Password"}
          setFormValue={setFormValue}
          formValue={formValue}
        />
        <div className="flex items-center justify-between ">
          <Button
            onClick={() =>
              loginUser({ ...formValue, type: "login" } as loginFormType)
            }
            variant="outline"
          >
            Login
          </Button>

          <p
            className="cursor-pointer"
            onClick={() => setAuthFormType("login")}
          >
            forgot your password ?
          </p>
        </div>
      </div>
    );
  }
}
