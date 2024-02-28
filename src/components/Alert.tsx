import { ReactNode } from "react";

interface AlertProps {
  //children: is used to pass values as children to a component
  //ReactNode is used to pass html content inside the component
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-success alert-dismissible">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      {children}
    </div>
  );
};

export default Alert;
