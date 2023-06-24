import { jsxDEV as reactJsxDEV } from "react/jsx-dev-runtime";
import { customJsxAdapter } from "./customJsxAdapter";
export { Fragment } from "react";

export function jsxDEV(
  tag: string | Function,
  props: object,
  key: string | undefined,
  ...jsxRestArgs: any[]
) {
  return customJsxAdapter(reactJsxDEV, tag, props, key, ...jsxRestArgs);
}
