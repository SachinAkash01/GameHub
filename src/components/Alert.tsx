import { ReactNode } from "react";

interface AlertProps {
  //children: is used to pass values as children to a component
  //ReactNode is used to pass html content inside the component
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
