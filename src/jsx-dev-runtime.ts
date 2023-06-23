import { jsxDEV as reactJsxDEV } from "react/jsx-dev-runtime";
import { customJsxAdapter } from "./jsx-runtime";
export { Fragment } from "react";

export function jsxDEV(tag: any, props: any, key: any, ...jsxRestArgs: any[]) {
  return customJsxAdapter(reactJsxDEV, tag, props, key, ...jsxRestArgs);
}
