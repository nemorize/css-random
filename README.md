# css-random

This external CSS file provides you random numbers as CSS variables.

In most situations (honeslty, in all situations), this file is completely useless, but if you want to host your no-JS 
website as a static file, you might need this.

## Usage

All you need to do is, add the following line of code inside your `<head />`.
```html
<link rel="stylesheet" href="https://css-random.nemorize.me/" />
```

If you want to use the @import syntax, you can also use the code below.
```css
@import url('https://css-random.nemorize.me/');
```

If you don't pass any paths and simply insert the code like the example above, the `--random` variable will be assigned
a 4-digit decimal between 0 and 1.

```css
@import url('https://css-random.nemorize.me/');
div {
  width: calc(var(--random) * 100%);
}
```

If you need multiple different random variables, you can pass comma-separated variable names on the URL path.

```css
@import url('https://css-random.nemorize.me/rnd-width,rnd-height');
div {
  width: calc(var(--rnd-width) * 100%);
  height: calc(var(--rnd-height) * 100%);
}
```

That's it! Now you're free from JS. (This CSS file is hosted as a Cloudflare Workers function, written in JS. LoL)

## Important things

### Don't use it where it takes up a large area

This CSS file is just a small, joke file that I host for my own personal use. It's hosted on Cloudflare Workers for 
almost free, and as such has many performance limitations, including long cold-start times and latency depending on your 
connection.

This means that your CSS files, which have dependencies on random variables in my file, will load faster and may not
work properly until my file loads, and you may see flickering issue after it loads properly.

This flicker is especially noticeable when applied to large areas (like `html { background-color }`), so don't use it 
that way.

### Specify a default value

This file may become inaccessible at any time. I don't make any effort to host them reliably, so don't rely heavily on 
it. If I decide to discontinue hosting of my own volition, I will give at least one week's notice before doing so. I'll
pin an issue, so if you want to be notified, write a comment on the issue.

Even if hosting is not down, this file can be unstable at any time. So you should provide a default value to ensure that
your CSS works properly in such situations. I strongly recommend declaring and using a new variable that takes a random 
value.

```css
div {
  --random-with-default-value: var(--random, 0.2735);
  width: calc(var(--random-with-default-value) * 100%);
}
```

### Host it yourself

Fortunately, it's not hard to host it yourself. Fork it, and submit the forked repo to Cloudflare Workers. You don't
need to do any configuration afterward, and it will host the exact same function as yours. Alternatively, you can 
implement it yourself using your favorite server and language, since it's only about 30 lines.

## License

DO WHAT THE FUCK YOU WANT TO PUBLIC
