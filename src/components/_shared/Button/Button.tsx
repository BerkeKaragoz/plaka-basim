import { FunctionalComponent } from "preact";
import s from "./button.module.scss";
import clsx from "clsx";

const Button: FunctionalComponent<{
  className?: string;
  big?: boolean;
  colored?: boolean;
}> = (props) => {
  const { children, className, big, colored, ...rest } = props;

  return (
    <button
      className={clsx(s.root, className, {
        [s.big]: big,
        [s.colored]: colored,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
