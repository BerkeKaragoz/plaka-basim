import s from "./text.module.scss";
import clsx from "clsx";
import { FunctionalComponent } from "preact";

interface TextProps {
  className?: string;
  caption?: boolean;
  light?: boolean;
  bold?: boolean;
  disableGutters?: boolean;
  headline?: boolean;
  heading?: boolean;
  noDecoration?: boolean;
  as?: any; //TODO
  [key: string]: any;
}

const Text = (props: TextProps) => {
  const {
    children,
    className,
    caption,
    as: TextComponent = "p",
    disableGutters,
    noDecoration,
    light,
    bold,
    headline,
    heading,
    ...rest
  } = props;

  return (
    <TextComponent
      className={clsx(s.root, className, {
        [s.caption]: caption,
        [s.headline]: headline,
        [s.heading]: heading,
        [s.bold]: bold,
        [s.light]: light,
        [s.noDecoration]: noDecoration,
        [s.noGutters]: disableGutters,
      })}
      {...rest}
    >
      {children}
    </TextComponent>
  );
};

export default Text;
