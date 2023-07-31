import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

export default function ActiveLink({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const pathname = usePathname();

  const computedClassName =
    pathname === props.href
      ? `${className} ${activeClassName}`.trim()
      : `${className}`.trim();

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
}
