import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  //specifying the color codes to ensure that invalid names throw compilation errors.
  // add '?' to specify that it is optional to give the color theme always.
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: ButtonProps) {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
