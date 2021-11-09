import React, { useState, useEffect } from "react";
import cx from "classnames";
import { VerticalNav } from "../VerticalNav/VerticalNav";
import { NavWrapper } from "../NavWrapper/NavWrapper";

export interface PageProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  stripped?: boolean;
}

export const Page: React.FunctionComponent<PageProps> = ({
  children,
  className,
  title,
  stripped = false,
}) => {
  const [menuOpen, toggleMenu] = useState<boolean>(false);

  useEffect(() => {
    if (!title) {
      document.title = "Lib";
      return;
    }
    document.title = `${title} | Lib`;
  }, [title]);

  if (stripped) {
    return (
      <main className={cx("page", "stripped", className)}>{children}</main>
    );
  }

  return (
    <main className={cx("page", className)}>
      <NavWrapper toggleMenu={toggleMenu} menuOpen={menuOpen}>
        <VerticalNav />
        {children}
      </NavWrapper>
    </main>
  );
};
