import { FunctionalComponent } from "preact";
import s from "./floating-button.module.scss";
import clsx from "clsx";
import Icon from "../Icon/Icon";

interface FloatingButtonProps {
  className?: string;
  as?: any; //TODO
  onClick?: () => void;
  [key: string]: any;
}

const FloatingButton = (props: FloatingButtonProps) => {
  const {
    children,
    className,
    as: FloatingButtonComponent = "div",
    onClick,
    ...rest
  } = props;

  return (
    <FloatingButtonComponent
      className={clsx(s.root, className)}
      onClick={onClick}
      {...rest}
    >
      <Icon>{children}</Icon>
    </FloatingButtonComponent>
  );
};

export default FloatingButton;
