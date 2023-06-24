import { jsx as reactJsx, jsxs as reactJsxs } from "react/jsx-runtime";
import { customJsxAdapter } from "./customJsxAdapter";
export { Fragment } from "react/jsx-runtime";

export function jsx(tag: string | Function, props: object, key?: string) {
  return customJsxAdapter(reactJsx, tag, props, key);
}

export function jsxs(tag: string | Function, props: object, key?: string) {
  return customJsxAdapter(reactJsxs, tag, props, key);
}
