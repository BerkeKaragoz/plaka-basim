import s from "./paper.module.scss";
import clsx from "clsx";

const Paper = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(s.root, className)} {...rest}>
      {children}
    </div>
  );
};

export default Paper;
