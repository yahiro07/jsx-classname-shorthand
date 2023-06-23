import "react";

type IPropsIfValue = object | any[] | string | boolean | undefined;
type IPropsQValue = string | false | (string | false | undefined)[];

export namespace JsxExtendedReactJSX {
  export type Element = JSX.Element;

  export type ElementChildrenAttribute = JSX.ElementChildrenAttribute;

  export type IntrinsicAttributes = JSX.IntrinsicAttributes & {
    if?: IPropsIfValue;
    q?: IPropsQValue;
  };

  export type IntrinsicElements = {
    [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] & {
      if?: IPropsIfValue;
      q?: IPropsQValue;
    };
  };
}
