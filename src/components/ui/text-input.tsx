import clsx from "clsx";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";

const TextInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, title, type, ...props }, ref) => {
  return (
    <div className={clsx(`flex flex-col space-y-2 ${className}`)}>
      <Label className="text-slate-600">{title}</Label>
      <Input type={type} ref={ref} {...props} />
    </div>
  );
});

TextInput.displayName = "TextInput";

export { TextInput };
