import { FunctionalComponent } from "preact";
import s from "./icon.module.scss";
import clsx from "clsx";

interface IconProps {
  className?: string;
  as?: any; //TODO
  button?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const Icon = (props: IconProps) => {
  const {
    children,
    className,
    as: IconComponent = "div",
    button,
    onClick,
    ...rest
  } = props;

  return (
    <IconComponent
      className={clsx(s.root, className, {
        [s.button]: button,
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </IconComponent>
  );
};

export default Icon;
