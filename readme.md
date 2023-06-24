# jsx-classname-shorthand

Make jsx accepts `q` props as a shorthand alias for `className`.

I usually give class names to elements for styling, but since the prop `className` is a long word for how often it is used. I therefore created a wrapper for the jsx runtime that allows `className` to be written in short props called `q`.

This library is assumed to be used in conjunction with React.

## install

```
npm install jsx-classname-shorthand
```

## configuration

tsconfig.json
```json
{
  "compilerOptions": {
    ...,
    "jsx": "react-jsx",
    "jsxImportSource": "jsx-classname-shorthand",
  }
}
```
Specify `jsx-classname-shorthand` for `jsxImportSource`.

## code example

Say there is a jsx code with `className` as follows
```tsx
  <div className="article-card">
    <div className="header-row">
      <div className="icon">{article.authorIconText}</div>
      <div className="name">{article.authorName}</div>
    </div>
    <div className="content-row">{article.contentText}</div>
  </div>
```

Now it can be written this way using `q` props
```tsx
  <div q="article-card">
    <div q="header-row">
      <div q="icon">{article.authorIconText}</div>
      <div q="name">{article.authorName}</div>
    </div>
    <div q="content-row">{article.contentText}</div>
  </div>
```

There is a working code at
[examples/timeline-ui](https://github.com/yahiro07/jsx-classname-shorthand/blob/main/examples/timeline-ui/src/App.tsx)


## multiple classnames

```tsx
  <div q={["foo", "bar", "buzz"]} />
```
Props `q` accepts an array of classname values


## if props
There is `if` props added for conditional rendering. It is similar to `ngIf` in angular or `v-if` in vue.
```tsx
  <div if={someCondition}>hello</div>
```
it results equivalent to
```tsx
  {someCondition && <div>hello</div> }
```

Happy Coding!!

## License
MIT
