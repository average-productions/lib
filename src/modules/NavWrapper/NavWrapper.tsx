import React, { useCallback, ReactNode, useEffect, useRef } from "react";
import cx from "classnames";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { Button } from "../../components/Button/Button";
import { MoreVertical } from "../../components/icons/MoreVertical";
import "./NavWrapper.scss";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  menuOpen: boolean;
  toggleMenu: (open: boolean) => void;
}

export const NavWrapper: React.FunctionComponent<Props> = ({
  children,
  icon = <MoreVertical />,
  menuOpen,
  toggleMenu,
}) => {
  const { pathname } = window.location;
  const elemRef = useRef<HTMLDivElement>(null);
  const onOpen = useCallback(() => toggleMenu(true), [toggleMenu]);
  const onClose = useCallback(() => toggleMenu(false), [toggleMenu]);

  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  useEffect(() => {
    if (elemRef.current) {
      menuOpen
        ? disableBodyScroll(elemRef.current)
        : enableBodyScroll(elemRef.current);
    }
  }, [menuOpen]);

  return (
    <div
      className={cx("nav-wrapper", {
        "is-open": menuOpen,
      })}
      ref={elemRef}
    >
      <div id="nav-wrapper-backdrop" onClick={onClose} />
      {children}
      <div className="nav-wrapper-button">
        <Button action onClick={onOpen}>
          {icon}
        </Button>
      </div>
    </div>
  );
};
