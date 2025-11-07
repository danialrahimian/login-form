import { useState, type ChangeEvent } from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import type { formPropType } from "@/Types/formTypes";

export default function Form({
  type,
  name,
  placeholder,
  describtion,
  Label,
  formValue,
  setFormValue,
}: formPropType) {
  const [value, setValue] = useState<string>("");
  if (type === "input") {
    return (
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="username">{Label}</FieldLabel>
          <Input
            id="username"
            name={name}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const { value: next } = e.target;
              setValue(next); // async
              console.log(value);

              setFormValue((prev) => ({
                ...prev,
                [name]: next,
              }));
              console.log(formValue);
            }}
          />
          <FieldDescription>{describtion}</FieldDescription>
        </Field>
      </FieldSet>
    );
  }
  if (type === "textarea") {
    return (
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
          <Textarea
            id="feedback"
            placeholder={placeholder}
            rows={4}
            name={name}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setValue(e.target.value);
            }}
          />
          <FieldDescription>
            Share your thoughts about our service.
          </FieldDescription>
        </Field>
      </FieldSet>
    );
  }
}
