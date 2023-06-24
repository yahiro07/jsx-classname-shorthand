export { Fragment } from "react";

type IVNodeTag = string | IComponentFn;

type IClassName = string | false | undefined;

type IComponentFn = Function;
type IProps = {};

type IPropsIfValue = object | any[] | string | boolean | undefined;
type IPropsQValue = string | false | (string | false | undefined)[];

type IComponentPropsExtra = {
  if?: IPropsIfValue;
  q?: IPropsQValue;
};

const enclose = <T>(item: T | T[]): T[] =>
  Array.isArray(item) ? item : [item];

function cx(...classNames: IClassName[]) {
  return classNames.filter((it) => !!it).join(" ");
}

function addClassNamesToProps(props: any, ...classNames: IClassName[]) {
  return { ...props, className: cx(props.className, ...classNames) };
}

function createFcResultAdditionalClassPropInterceptor(
  originalFc: IComponentFn,
  classNameToAdd: IPropsQValue
) {
  return (innerProps: any) => {
    const { className: innerPropsClass, ...restInnerProps } = innerProps;
    const res2 = originalFc(restInnerProps);
    if (!res2) return null;
    return {
      ...res2,
      props: addClassNamesToProps(
        res2.props,
        ...enclose(classNameToAdd),
        innerPropsClass
      ),
    };
  };
}

export function customJsxAdapter(
  destJsxFn: IComponentFn,
  tag: IVNodeTag,
  props: IComponentPropsExtra,
  key: string | undefined,
  ...jsxRestArgs: any[]
) {
  const { if: _if, q: propsQ, ...restProps } = props;
  if ("if" in props && !props.if) return null;

  if (typeof tag !== "function" && propsQ) {
    const classNames = enclose(propsQ);
    const modProps = addClassNamesToProps(restProps, ...classNames);
    return destJsxFn(tag, modProps, key, ...jsxRestArgs);
  }

  const res = destJsxFn(tag, restProps, key, ...jsxRestArgs);

  if (typeof tag === "function" && propsQ) {
    const originalFc = res.type;
    const keyQ =
      typeof props === "string" ? (propsQ as string) : JSON.stringify(propsQ);
    originalFc.__propsQAdapters ||= {};
    const propsQAdapterFn = (originalFc.__propsQAdapters[keyQ] ||=
      createFcResultAdditionalClassPropInterceptor(originalFc, propsQ));
    return {
      ...res,
      type: propsQAdapterFn,
    };
  }
  return res;
}
