import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProsps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...linkProps
}: ActiveLinkProsps) {
  const { asPath } = useRouter();

  const className = asPath == linkProps.href ? activeClassName : "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
}
