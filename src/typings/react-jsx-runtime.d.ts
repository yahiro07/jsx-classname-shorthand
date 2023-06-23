declare module "react/jsx-runtime";

declare function jsx(
  tag: string | Function,
  props: any,
  key?: string
): JSX.Element;

declare function jsxs(
  tag: string | Function,
  props: any,
  key?: string
): JSX.Element;
