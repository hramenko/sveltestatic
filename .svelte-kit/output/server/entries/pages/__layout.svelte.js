import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index-f7fc2589.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/svelte-logo-87df40b8.svg";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-xmj7lk.svelte-xmj7lk{display:flex;justify-content:space-between}.corner.svelte-xmj7lk.svelte-xmj7lk{width:3em;height:3em}.corner.svelte-xmj7lk a.svelte-xmj7lk{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-xmj7lk img.svelte-xmj7lk{width:2em;height:2em;object-fit:contain}nav.svelte-xmj7lk.svelte-xmj7lk{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-xmj7lk.svelte-xmj7lk:first-child{margin-right:-1px;width:2em;height:3em;display:block;fill:#fff}svg.svelte-xmj7lk.svelte-xmj7lk:last-child{margin-left:-1px;width:2em;height:3em;display:block;fill:#fff}nav.svelte-xmj7lk path.svelte-xmj7lk{fill:#fff}ul.svelte-xmj7lk.svelte-xmj7lk{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:#fff}li.svelte-xmj7lk.svelte-xmj7lk{position:relative;height:100%}li.active.svelte-xmj7lk.svelte-xmj7lk::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-xmj7lk a.svelte-xmj7lk{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-xmj7lk.svelte-xmj7lk:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-xmj7lk"}"><div class="${"corner svelte-xmj7lk"}"><a href="${"https://kit.svelte.dev"}" class="${"svelte-xmj7lk"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-xmj7lk"}"></a></div>

	<nav class="${"svelte-xmj7lk"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-xmj7lk"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-xmj7lk"}"></path></svg>
		<ul class="${"svelte-xmj7lk"}"><li class="${["svelte-xmj7lk", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-xmj7lk"}">Home</a></li>
			<li class="${["svelte-xmj7lk", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-xmj7lk"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-xmj7lk"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-xmj7lk"}"></path></svg></nav>

	<div class="${"corner svelte-xmj7lk"}"></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1izrdc8"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
export { _layout as default };
