import React, { FC, useCallback } from "react";
import cx from "classnames";
import "./Button.scss";

interface ButtonProps {
  onClick: (data: any) => void;
  children: React.ReactNode | React.ReactNode[];
  data?: any;
  small?: boolean;
  mini?: boolean;
  ghost?: boolean;
  block?: boolean;
  action?: boolean;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  data,
  small,
  mini,
  ghost,
  block,
  action,
}) => {
  const internalClick = useCallback(() => onClick(data), [onClick, data]);

  return (
    <button
      className={cx("button", {
        small,
        mini,
        ghost,
        block,
        action,
      })}
      onClick={internalClick}
    >
      {children}
    </button>
  );
};
