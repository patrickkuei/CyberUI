import Ce, { useCallback as R, useState as A, useEffect as Q, useId as ge, memo as me, useRef as F, useMemo as oe, createContext as Ee, useContext as Se } from "react";
import { createPortal as ye } from "react-dom";
var ce = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function ke() {
  if (he) return le;
  he = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function m(o, n, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), n.key !== void 0 && (u = "" + n.key), "key" in n) {
      c = {};
      for (var i in n)
        i !== "key" && (c[i] = n[i]);
    } else c = n;
    return n = c.ref, {
      $$typeof: t,
      type: o,
      key: u,
      ref: n !== void 0 ? n : null,
      props: c
    };
  }
  return le.Fragment = r, le.jsx = m, le.jsxs = m, le;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Te() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === U ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case E:
          return "Fragment";
        case $:
          return "Profiler";
        case b:
          return "StrictMode";
        case y:
          return "Suspense";
        case M:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case C:
            return "Portal";
          case T:
            return (s.displayName || "Context") + ".Provider";
          case j:
            return (s._context.displayName || "Context") + ".Consumer";
          case S:
            var a = s.render;
            return s = s.displayName, s || (s = a.displayName || a.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case D:
            return a = s.displayName || null, a !== null ? a : t(s.type) || "Memo";
          case v:
            a = s._payload, s = s._init;
            try {
              return t(s(a));
            } catch {
            }
        }
      return null;
    }
    function r(s) {
      return "" + s;
    }
    function m(s) {
      try {
        r(s);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var l = a.error, N = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return l.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), r(s);
      }
    }
    function o(s) {
      if (s === E) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === v)
        return "<...>";
      try {
        var a = t(s);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var s = H.A;
      return s === null ? null : s.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(s) {
      if (V.call(s, "key")) {
        var a = Object.getOwnPropertyDescriptor(s, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function i(s, a) {
      function l() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: l,
        configurable: !0
      });
    }
    function x() {
      var s = t(this.type);
      return J[s] || (J[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function w(s, a, l, N, g, k, W, _) {
      return l = k.ref, s = {
        $$typeof: p,
        type: s,
        key: a,
        props: k,
        _owner: g
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function d(s, a, l, N, g, k, W, _) {
      var L = a.children;
      if (L !== void 0)
        if (N)
          if (K(L)) {
            for (N = 0; N < L.length; N++)
              h(L[N]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(L);
      if (V.call(a, "key")) {
        L = t(s);
        var O = Object.keys(a).filter(function(re) {
          return re !== "key";
        });
        N = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", q[L + N] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          L,
          O,
          L
        ), q[L + N] = !0);
      }
      if (L = null, l !== void 0 && (m(l), L = "" + l), u(a) && (m(a.key), L = "" + a.key), "key" in a) {
        l = {};
        for (var I in a)
          I !== "key" && (l[I] = a[I]);
      } else l = a;
      return L && i(
        l,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), w(
        s,
        L,
        k,
        g,
        n(),
        l,
        W,
        _
      );
    }
    function h(s) {
      typeof s == "object" && s !== null && s.$$typeof === p && s._store && (s._store.validated = 1);
    }
    var f = Ce, p = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), T = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, K = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var X, J = {}, G = f.react_stack_bottom_frame.bind(
      f,
      c
    )(), B = z(o(c)), q = {};
    ie.Fragment = E, ie.jsx = function(s, a, l, N, g) {
      var k = 1e4 > H.recentlyCreatedOwnerStacks++;
      return d(
        s,
        a,
        l,
        !1,
        N,
        g,
        k ? Error("react-stack-top-frame") : G,
        k ? z(o(s)) : B
      );
    }, ie.jsxs = function(s, a, l, N, g) {
      var k = 1e4 > H.recentlyCreatedOwnerStacks++;
      return d(
        s,
        a,
        l,
        !0,
        N,
        g,
        k ? Error("react-stack-top-frame") : G,
        k ? z(o(s)) : B
      );
    };
  })()), ie;
}
var pe;
function $e() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? ce.exports = ke() : ce.exports = Te()), ce.exports;
}
var e = $e();
const xe = (t) => typeof t == "object" && t !== null, Z = (t, r) => {
  if (!xe(t))
    return r[t] || "";
  const m = [];
  if (t.base && r[t.base] && m.push(r[t.base]), t.sm && r[t.sm]) {
    const o = r[t.sm].split(" ").map((n) => `sm:${n}`);
    m.push(...o);
  }
  if (t.md && r[t.md]) {
    const o = r[t.md].split(" ").map((n) => `md:${n}`);
    m.push(...o);
  }
  if (t.lg && r[t.lg]) {
    const o = r[t.lg].split(" ").map((n) => `lg:${n}`);
    m.push(...o);
  }
  if (t.xl && r[t.xl]) {
    const o = r[t.xl].split(" ").map((n) => `xl:${n}`);
    m.push(...o);
  }
  if (t["2xl"] && r[t["2xl"]]) {
    const o = r[t["2xl"]].split(" ").map((n) => `2xl:${n}`);
    m.push(...o);
  }
  return m.join(" ");
}, Ke = (...t) => t.filter(Boolean).join(" "), ee = {
  button: {
    sm: "py-1 px-4 text-sm",
    md: "py-2 px-6 text-lg",
    lg: "py-3 px-8 text-xl"
  },
  badge: {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-3"
  },
  input: {
    sm: "py-2 text-sm",
    md: "py-3 text-base",
    lg: "py-4 text-lg"
  },
  card: {
    sm: "p-3 space-y-3 text-sm",
    md: "p-6 space-y-6 text-base",
    lg: "p-8 space-y-8 text-lg"
  },
  notification: {
    sm: "p-3 space-x-2",
    md: "p-4 space-x-4",
    lg: "p-6 space-x-6"
  },
  tabNavigation: {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-lg",
    lg: "px-8 py-3 text-xl"
  },
  linearProgress: {
    width: {
      sm: "w-48",
      md: "w-80",
      lg: "w-96"
    },
    height: {
      sm: "h-1.5",
      md: "h-3",
      lg: "h-4"
    }
  },
  skeleton: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  },
  carousel: {
    sm: "h-48",
    md: "h-64",
    lg: "h-80"
  }
}, Re = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, Ae = (t, r, m) => {
  if (!xe(t))
    return t ?? m;
  let o = t.base ?? m;
  const n = ["sm", "md", "lg", "xl", "2xl"];
  for (const c of n) {
    const u = Re[c];
    r >= u && t[c] !== void 0 && (o = t[c]);
  }
  return o;
}, Le = (t, r) => {
  const m = R(
    () => typeof window > "u" ? r : Ae(t, window.innerWidth, r),
    [r, t]
  ), [o, n] = A(m);
  return Q(() => {
    if (!xe(t)) {
      n(t ?? r);
      return;
    }
    const c = () => n(m());
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [r, m, t]), o;
}, Y = ({
  variant: t = "primary",
  size: r = "md",
  className: m = "",
  disabled: o = !1,
  children: n,
  ...c
}) => {
  const u = [
    "group",
    "relative",
    "overflow-hidden",
    "rounded-lg",
    "font-bold",
    "uppercase",
    "tracking-wider",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "transform",
    "focus:outline-none",
    o ? "cursor-not-allowed" : "cursor-pointer"
  ].join(" "), i = (h) => Z(h, ee.button), x = (h, f) => ({
    primary: {
      enabled: "bg-linear-(--gradient-accent) text-base shadow-primary border-none hover:shadow-lg-accent hover:scale-105 focus:ring-4 focus:ring-accent active:scale-95",
      disabled: "bg-base border-2 border-accent/20 text-accent/40 shadow-none opacity-50 hover:scale-100"
    },
    secondary: {
      enabled: "bg-surface border-2 border-secondary text-secondary shadow-secondary/30 hover:bg-secondary hover:text-base hover:shadow-secondary hover:scale-105 focus:ring-4 focus:ring-secondary active:scale-95",
      disabled: "bg-base border-2 border-secondary/20 text-secondary/40 shadow-none opacity-50 hover:bg-base hover:text-secondary/40 hover:scale-100"
    },
    danger: {
      enabled: "bg-surface border-2 border-error text-error shadow-error/30 hover:bg-error hover:text-base hover:shadow-error hover:scale-105 focus:ring-4 focus:ring-error active:scale-95",
      disabled: "bg-base border-2 border-error/20 text-error/40 shadow-none opacity-50 hover:bg-base hover:text-error/40 hover:scale-100"
    },
    ghost: {
      enabled: "bg-surface border-2 border-accent text-accent shadow-secondary hover:bg-accent hover:text-base hover:shadow-lg-accent hover:scale-105 focus:ring-4 focus:ring-accent active:scale-95",
      disabled: "bg-base border-2 border-accent/10 text-muted/60 shadow-none opacity-40 hover:bg-base hover:text-muted/60 hover:scale-100"
    }
  })[h][f ? "disabled" : "enabled"], w = [
    u,
    i(r),
    x(t, o),
    m
  ].filter(Boolean).join(" "), d = t === "primary" && !o;
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: w,
      disabled: o,
      ...c,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "relative z-10", children: n }),
        d && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
        o && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-base/10 to-transparent pointer-events-none" })
      ]
    }
  );
}, Je = () => /* @__PURE__ */ e.jsxs("div", { className: "text-center max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-6 md:space-y-8", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-tight uppercase", children: "CyberUI" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-lg md:text-xl text-secondary font-light italic tracking-wide", children: "A cyberpunk-themed React UI library" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-muted max-w-lg md:max-w-2xl mx-auto font-normal leading-relaxed", children: "Build futuristic interfaces with neon-styled components, smooth animations, and cyberpunk aesthetics. Perfect for sci-fi projects and modern web applications." })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center p-4 md:p-6 bg-surface border border-border-default rounded-lg", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-primary text-xl md:text-2xl mb-2 md:mb-3", children: "⚡" }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-base md:text-lg font-semibold text-secondary mb-2", children: "Fast & Lightweight" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Optimized components with minimal bundle size" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "text-center p-4 md:p-6 bg-surface border border-border-default rounded-lg", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-accent text-xl md:text-2xl mb-2 md:mb-3", children: "🎨" }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-base md:text-lg font-semibold text-secondary mb-2", children: "Cyberpunk Theme" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Neon colors, glitch effects, and futuristic styling" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "text-center p-4 md:p-6 bg-surface border border-border-default rounded-lg", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-primary text-xl md:text-2xl mb-2 md:mb-3", children: "📱" }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-base md:text-lg font-semibold text-secondary mb-2", children: "Fully Responsive" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Works perfectly on all screen sizes" })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-8", children: [
    /* @__PURE__ */ e.jsx(
      Y,
      {
        variant: "primary",
        size: { base: "md", lg: "lg" },
        onClick: () => window.open("https://patrickkuei.github.io/CyberUI/storybook/", "_blank"),
        children: "View Documentation"
      }
    ),
    /* @__PURE__ */ e.jsx(
      Y,
      {
        variant: "secondary",
        size: { base: "md", lg: "lg" },
        onClick: () => window.open("https://github.com/patrickkuei/CyberUI", "_blank"),
        children: "GitHub Repository"
      }
    )
  ] })
] }), be = ({
  variant: t = "primary",
  size: r = "md",
  label: m,
  helperText: o,
  error: n,
  leftIcon: c,
  rightIcon: u,
  className: i = "",
  disabled: x = !1,
  ...w
}) => {
  const d = ge(), h = w.id || d, f = [
    "w-full",
    "rounded-lg",
    "bg-surface",
    "text-default",
    "placeholder-muted",
    "transition-all",
    "duration-300",
    "focus:outline-none",
    x ? "cursor-not-allowed opacity-60" : "cursor-text"
  ].join(" "), p = (S) => Z(S, ee.input), C = (S) => {
    const y = p(S);
    return c && u ? `pl-10 pr-10 ${y}` : c ? `pl-10 pr-4 ${y}` : u ? `pl-4 pr-10 ${y}` : `px-4 ${y}`;
  }, E = (S, y, M) => y ? "border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base" : M ? {
    primary: "border-2 border-accent/20 shadow-none",
    secondary: "border-2 border-secondary/20 shadow-none",
    danger: "border-2 border-error/20 shadow-none",
    ghost: "border border-border-default shadow-none"
  }[S] : {
    primary: "border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",
    secondary: "border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",
    danger: "border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",
    ghost: "border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"
  }[S], b = (S) => ({
    primary: "text-accent",
    secondary: "text-secondary",
    danger: "text-error",
    ghost: "text-muted"
  })[S], $ = [
    f,
    C(r),
    E(t, !!n, x),
    i
  ].filter(Boolean).join(" "), j = b(t), T = n ? `${h}-error` : o ? `${h}-help` : void 0;
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
    m && /* @__PURE__ */ e.jsx("label", { htmlFor: h, className: "block text-sm font-medium text-default", children: m }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      c && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-y-0 left-0 flex items-center pl-3 ${j}`, children: c }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: $,
          disabled: x,
          id: h,
          "aria-invalid": !!n,
          "aria-describedby": T,
          ...w
        }
      ),
      u && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-y-0 right-0 flex items-center pr-3 ${j}`, children: u })
    ] }),
    (o || n) && /* @__PURE__ */ e.jsx("div", { id: n ? `${h}-error` : `${h}-help`, className: `text-xs font-mono ${n ? "text-error" : "text-muted"}`, children: n || o })
  ] });
}, se = ({
  variant: t = "default",
  size: r = "md",
  title: m,
  titleBorder: o = !0,
  children: n,
  className: c = "",
  ...u
}) => {
  const i = (d) => Z(d, ee.card), x = (d) => {
    const h = i(r);
    return {
      default: `bg-base border border-border-default rounded-xl ${h}`,
      accent: `bg-surface border-2 border-accent rounded-xl shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform ${h}`,
      small: `bg-base rounded-lg border border-border-default ${h}`
    }[d];
  }, w = (d) => d ? "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2" : "text-xl font-semibold text-secondary mb-4";
  return /* @__PURE__ */ e.jsxs("div", { className: `${x(t)} ${c}`, ...u, children: [
    m && /* @__PURE__ */ e.jsx("h3", { className: w(o), children: m }),
    n
  ] });
}, Me = {
  openDuration: 50,
  closeDuration: 350,
  cyberpunkEffects: !0
}, ne = me(
  ({
    src: t,
    alt: r,
    size: m = "md",
    preview: o = !0,
    fallback: n,
    placeholder: c,
    className: u = "",
    animation: i,
    eager: x = !1,
    previewClassName: w = "",
    onPreviewOpen: d,
    onPreviewClose: h,
    onLoad: f,
    onError: p,
    ...C
  }) => {
    const E = { ...Me, ...i }, [b, $] = A(!1), [j, T] = A(!1), [S, y] = A(!1), [M, D] = A(!0), [v, P] = A(!1), [U, H] = A(!1), V = F(null), K = F(null), z = R(
      (g) => Z(g, ee.card),
      []
    ), X = R(
      (g) => {
        D(!1), P(!1), f?.(g);
      },
      [f]
    ), J = R(
      (g) => {
        D(!1), n && !U ? (H(!0), P(!1)) : P(!0), p?.(g);
      },
      [p, n, U]
    ), G = R(() => {
      o && !v && (y(!0), $(!0), d?.(), setTimeout(() => {
        y(!1);
      }, E.openDuration));
    }, [o, v, d, E.openDuration]), B = R(() => {
      T(!0), h?.(), setTimeout(() => {
        $(!1), T(!1);
      }, E.closeDuration);
    }, [h, E.closeDuration]), q = R(
      (g) => {
        (g.target === V.current || g.target === g.currentTarget) && B();
      },
      [B]
    ), s = R(
      (g) => {
        g.key === "Escape" && B();
      },
      [B]
    );
    Q(() => {
      if (b) {
        document.addEventListener("keydown", s);
        const g = document.body.style.overflow, k = document.documentElement.style.scrollbarGutter, W = document.body.style.paddingRight, _ = window.innerWidth - document.documentElement.clientWidth;
        return document.body.style.overflow = "hidden", document.body.style.paddingRight = `${_}px`, document.documentElement.style.scrollbarGutter = "auto", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = g, document.body.style.paddingRight = W, document.documentElement.style.scrollbarGutter = k;
        };
      }
    }, [b, s]);
    const a = oe(
      () => [
        "relative",
        "rounded-lg",
        "overflow-hidden",
        "border-2",
        "border-accent/30",
        "transition-all",
        "duration-300",
        "ease-in-out",
        "transform",
        "flex",
        "justify-center",
        "content-center",
        o && !v ? "cursor-pointer hover:scale-105 hover:border-accent hover:shadow-lg-accent focus:outline-none focus:ring-4 focus:ring-accent/50" : "",
        z(m),
        u
      ].filter(Boolean).join(" "),
      [o, v, z, m, u]
    ), l = oe(
      () => ({
        role: o ? "button" : "img",
        tabIndex: o && !v ? 0 : -1,
        "aria-label": o ? `${r}. Click to enlarge` : r,
        "aria-expanded": o ? b : void 0,
        onKeyDown: o && !v ? (g) => {
          (g.key === "Enter" || g.key === " ") && (g.preventDefault(), G());
        } : void 0
      }),
      [o, v, r, b, G]
    ), N = oe(
      () => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: a,
          onClick: G,
          ...l,
          children: [
            M && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute m-0 inset-0 flex items-center justify-center bg-surface border-2 border-accent/20",
                role: "status",
                "aria-label": "Loading image",
                children: c || /* @__PURE__ */ e.jsx("div", { className: "animate-pulse bg-gradient-to-r from-accent/20 to-secondary/20 w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-muted text-sm", children: "Loading..." }) })
              }
            ),
            v ? /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "flex items-center justify-center bg-surface border-2 border-error/30 text-error p-4 rounded-lg min-h-[100px]",
                role: "alert",
                "aria-label": "Failed to load image",
                children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "text-2xl mb-2", "aria-hidden": "true", children: "⚠" }),
                  /* @__PURE__ */ e.jsx("div", { className: "text-sm", children: "Failed to load image" })
                ] })
              }
            ) : U ? /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: K,
                src: n,
                alt: `${r} (fallback)`,
                className: "w-full h-full m-0 object-cover transition-opacity duration-300",
                style: { opacity: M ? 0 : 1 },
                onLoad: X,
                onError: () => {
                  P(!0), H(!1);
                },
                loading: x ? "eager" : "lazy",
                decoding: "async",
                ...C
              }
            ) : /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: K,
                src: t,
                alt: r,
                className: "w-full h-full m-0 object-cover transition-opacity duration-300",
                style: { opacity: M ? 0 : 1 },
                onLoad: X,
                onError: J,
                loading: x ? "eager" : "lazy",
                decoding: "async",
                ...C
              }
            ),
            o && !M && !v && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100",
                "aria-hidden": "true",
                children: /* @__PURE__ */ e.jsx("div", { className: "bg-accent/90 text-base px-3 py-1 rounded-md text-sm font-semibold tracking-wider uppercase", children: "Preview" })
              }
            )
          ]
        }
      ),
      [
        a,
        G,
        l,
        M,
        c,
        v,
        U,
        n,
        r,
        X,
        x,
        C,
        t,
        J,
        o
      ]
    );
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      N,
      b && ye(
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: V,
            className: `fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${w} ${j ? "bg-black/0 backdrop-blur-none opacity-0 duration-300" : S ? "bg-black/80 backdrop-blur-sm opacity-100 duration-500" : "bg-black/80 backdrop-blur-sm opacity-100 duration-300"}`,
            style: {
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              maxWidth: "none"
            },
            onClick: q,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `Preview: ${r}`,
            children: [
              E.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `absolute transition-opacity duration-300 ${j ? "opacity-0" : "opacity-20"}`,
                  style: {
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh"
                  },
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "absolute",
                      style: {
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundImage: `
                  linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
                `,
                        backgroundSize: "40px 40px"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "relative w-full h-full flex items-center justify-center",
                  onClick: q,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: B,
                        className: `absolute top-4 right-4 text-white hover:text-accent/80 transition-all duration-300 font-bold z-20 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform ${j ? "bg-black/0 scale-50 rotate-180 opacity-0" : S ? "bg-black/50 scale-0 rotate-0 opacity-0 duration-500" : "bg-black/50 hover:bg-accent/20 scale-100 rotate-0 opacity-100 hover:scale-110"}`,
                        style: { lineHeight: "1" },
                        children: /* @__PURE__ */ e.jsxs(
                          "svg",
                          {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            className: "relative",
                            children: [
                              /* @__PURE__ */ e.jsx(
                                "path",
                                {
                                  d: "M12 4L4 12M4 4L12 12",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round"
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                "path",
                                {
                                  d: "M12 4L4 12M4 4L12 12",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  className: "absolute inset-0 text-accent opacity-0 hover:opacity-100 transition-opacity duration-200 animate-pulse"
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: `relative max-w-full max-h-full flex items-center justify-center transition-all ease-out ${j ? "scale-75 opacity-0 rotate-1 duration-300" : S ? "scale-95 opacity-0 rotate-0 duration-500" : "scale-100 opacity-100 rotate-0 duration-300"}`,
                        onClick: (g) => g.stopPropagation(),
                        children: [
                          E.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: `absolute inset-0 rounded-lg border-2 transition-all duration-300 ${j ? "border-transparent shadow-none" : "border-accent shadow-lg-accent animate-pulse"}`,
                              "aria-hidden": "true"
                            }
                          ),
                          E.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: `absolute inset-0 overflow-hidden rounded-lg transition-opacity duration-300 z-10 ${j ? "opacity-0" : "opacity-100"}`,
                              "aria-hidden": "true",
                              children: /* @__PURE__ */ e.jsxs("div", { className: "absolute top-0 left-0 w-full h-px animate-scan opacity-20", children: [
                                /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent shadow-lg-accent opacity-80" }),
                                /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60" })
                              ] })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "img",
                            {
                              src: U ? n : t,
                              alt: U ? `${r} (fallback)` : r,
                              className: `max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg transition-all duration-300 ease-out ${j ? "filter blur-sm brightness-50" : "filter blur-0 brightness-100"}`,
                              style: {
                                maxWidth: "95vw",
                                maxHeight: "95vh",
                                width: "auto",
                                height: "auto"
                              }
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-b-lg transition-all duration-300 ${j ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`,
                              children: /* @__PURE__ */ e.jsxs("p", { className: "text-white text-sm font-medium truncate relative", children: [
                                U ? `${r} (fallback)` : r,
                                E.cyberpunkEffects && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 text-accent opacity-20 animate-pulse", children: U ? `${r} (fallback)` : r })
                              ] })
                            }
                          ),
                          E.cyberpunkEffects && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent transition-all duration-300 ${j ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent transition-all duration-300 ${j ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent transition-all duration-300 ${j ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent transition-all duration-300 ${j ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            )
                          ] })
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        document.body
      )
    ] });
  }
);
ne.displayName = "CyberUI.Image";
const Ie = ({
  images: t,
  currentIndex: r,
  onChange: m,
  size: o = "md",
  autoPlay: n = !0,
  interval: c = 3e3,
  infinite: u = !0,
  transition: i = "slide",
  objectFit: x = "cover",
  showArrows: w = !0,
  showIndicators: d = !0,
  className: h = "",
  disableImagePreview: f = !1,
  glitchRate: p = 1,
  onBeforeChange: C,
  onAfterChange: E
}) => {
  const [b, $] = A(!1), [j, T] = A(n), [S, y] = A(!0), M = oe(
    () => Z(o, ee.carousel),
    [o]
  ), D = "w-full h-full", v = R(
    (s) => {
      if (s === r || b) return;
      const a = i === "signal-glitch" && (typeof p == "boolean" ? p : Math.random() < p);
      y(a), $(!0), C?.(r, s), setTimeout(() => {
        m(s), $(!1), E?.(s);
      }, i === "slide" ? 0 : i === "signal-glitch" && a ? 600 : 250);
    },
    [
      r,
      b,
      m,
      C,
      E,
      i,
      p
    ]
  );
  Q(() => {
    if (!j || t.length <= 1) return;
    const s = setInterval(() => {
      const a = u ? (r + 1) % t.length : Math.min(r + 1, t.length - 1);
      if (!u && a === t.length - 1) {
        T(!1);
        return;
      }
      v(a);
    }, c);
    return () => clearInterval(s);
  }, [
    j,
    r,
    t.length,
    u,
    c,
    v
  ]);
  const P = R(() => {
    if (t.length <= 1) return;
    const s = u ? (r - 1 + t.length) % t.length : Math.max(r - 1, 0);
    T(!1), v(s);
  }, [r, t.length, u, v]), U = R(() => {
    if (t.length <= 1) return;
    const s = u ? (r + 1) % t.length : Math.min(r + 1, t.length - 1);
    T(!1), v(s);
  }, [r, t.length, u, v]), H = R(
    (s) => {
      T(!1), v(s);
    },
    [v]
  );
  Q(() => {
    const s = (a) => {
      a.key === "ArrowLeft" && P(), a.key === "ArrowRight" && U();
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [P, U]);
  const V = () => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex h-full transition-transform duration-500 ease-in-out",
      style: {
        transform: `translateX(-${r * 100}%)`,
        willChange: "transform"
      },
      children: t.map((s, a) => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
        ne,
        {
          src: s.src,
          alt: s.alt,
          fallback: s.fallbackSrc,
          className: D,
          size: "lg",
          preview: !f,
          loading: a <= 1 ? "eager" : "lazy",
          onPreviewOpen: () => T(!1),
          onPreviewClose: () => T(n)
        }
      ) }, a))
    }
  ), K = () => /* @__PURE__ */ e.jsx(e.Fragment, { children: t.map((s, a) => {
    const l = a === r, N = i === "fade" ? {
      opacity: l ? 1 : 0,
      transition: "opacity 500ms ease-in-out",
      willChange: "opacity"
    } : i === "matrix" ? {
      opacity: l ? 1 : 0,
      transform: l ? "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0) skew(0deg) perspective(1000px)" : b ? "scale(0.6) rotateX(35deg) rotateY(15deg) rotateZ(-3deg) translateZ(-80px) skew(5deg, 2deg) perspective(1000px)" : "scale(0.92) rotateX(8deg) rotateY(2deg) translateZ(-20px) skew(1deg) perspective(1000px)",
      filter: l ? "brightness(1) contrast(1) hue-rotate(0deg) saturate(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))" : b ? "brightness(0.1) contrast(4) hue-rotate(270deg) saturate(3) blur(2px) drop-shadow(0 0 20px rgba(255, 0, 93, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 249, 0.6))" : "brightness(0.7) contrast(1.5) hue-rotate(120deg) saturate(1.4) drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))",
      transition: "all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      willChange: "transform, opacity, filter",
      boxShadow: l ? "0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.15), 0 0 60px rgba(0, 255, 136, 0.2)" : b ? "0 0 50px rgba(255, 0, 93, 1), 0 0 100px rgba(0, 255, 249, 0.8), 0 0 150px rgba(255, 251, 0, 0.6), inset 0 0 50px rgba(255, 0, 93, 0.3), inset 0 0 80px rgba(0, 255, 249, 0.2), 0 0 0 3px rgba(255, 0, 93, 0.8), 0 0 0 6px rgba(0, 255, 249, 0.6), 0 0 200px rgba(255, 251, 0, 0.3)" : "0 0 20px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1), 0 0 40px rgba(0, 255, 136, 0.2)"
    } : {};
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-0 w-full h-full",
        style: {
          ...N,
          pointerEvents: l ? "auto" : "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            ne,
            {
              src: s.src,
              alt: s.alt,
              fallback: s.fallbackSrc,
              className: D,
              size: "lg",
              preview: !f,
              loading: a <= 1 ? "eager" : "lazy",
              onPreviewOpen: () => T(!1),
              onPreviewClose: () => T(n)
            }
          ),
          i === "matrix" && X(l, b)
        ]
      },
      a
    );
  }) }), z = () => /* @__PURE__ */ e.jsx(e.Fragment, { children: t.map((s, a) => {
    const l = a === r, N = a === (r - 1 + t.length) % t.length, g = b && i === "signal-glitch" && S ? {
      opacity: l ? 1 : N ? 0.8 : 0,
      animation: l ? "signal-image-flicker-in 1s ease-out forwards" : N ? "signal-image-flicker-out 1s ease-out forwards" : "none",
      willChange: "opacity",
      pointerEvents: b && !l ? "none" : "auto",
      transform: b ? "translateZ(0)" : "none"
      // Reduce jumping with hardware acceleration
    } : {
      opacity: l ? 1 : 0,
      transition: "opacity 250ms ease-in-out",
      willChange: "opacity",
      pointerEvents: l ? "auto" : "none"
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-0 w-full h-full",
        style: g,
        children: [
          /* @__PURE__ */ e.jsx(
            ne,
            {
              src: s.src,
              alt: s.alt,
              fallback: s.fallbackSrc,
              className: D,
              size: "lg",
              preview: !f && !(b && i === "signal-glitch" && S),
              loading: a <= 1 ? "eager" : "lazy",
              onPreviewOpen: () => T(!1),
              onPreviewClose: () => T(n)
            }
          ),
          i === "signal-glitch" && b && S && J(l)
        ]
      },
      a
    );
  }) }), X = (s, a) => /* @__PURE__ */ e.jsx(e.Fragment, { children: a && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: s ? (
    // Active image gets subtle enhancement effects
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-30" })
  ) : (
    // Transitioning image gets more dramatic effects
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10 opacity-50" })
  ) }) }), J = (s) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute inset-0 pointer-events-none z-5 ${s ? "opacity-30" : "opacity-15"}`,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
              animation: "signal-glitch-blink 1s ease-in-out infinite"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 pointer-events-none z-10 overflow-hidden", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-80",
          style: {
            top: "20%",
            animation: "signal-glitch-vertical-sweep 1s linear infinite",
            boxShadow: "0 0 8px rgba(255, 0, 93, 1), 0 0 16px rgba(255, 0, 93, 0.5)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60",
          style: {
            top: "60%",
            animation: "signal-glitch-vertical-sweep 1.5s linear infinite 0.3s",
            boxShadow: "0 0 6px rgba(0, 255, 249, 0.8)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70",
          style: {
            top: "80%",
            animation: "signal-glitch-vertical-sweep 0.8s linear infinite 0.7s",
            boxShadow: "0 0 10px rgba(255, 251, 0, 0.9)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 pointer-events-none z-30", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent",
          style: {
            animation: "signal-glitch-blink 1s ease-in-out infinite"
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute w-full h-px bg-accent/80 top-1/3",
          style: {
            animation: "signal-scanline-jitter 1s linear infinite",
            boxShadow: "0 0 4px rgba(255, 251, 0, 1)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute w-full h-px bg-secondary/60 top-2/3",
          style: {
            animation: "signal-scanline-jitter 1s linear infinite 0.4s",
            boxShadow: "0 0 4px rgba(0, 255, 249, 0.8)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none z-40",
        style: {
          animation: "signal-rgb-separation 1s ease-in-out infinite",
          mixBlendMode: "screen"
        },
        children: /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-transparent" })
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 pointer-events-none z-50", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute top-1/4 left-1/2 w-24 h-2 bg-white/30",
          style: {
            animation: "signal-glitch-blink 1s ease-in-out infinite 0.1s",
            transform: "translateX(-50%)",
            filter: "blur(0.8px)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute top-3/4 right-1/4 w-20 h-1 bg-primary/40",
          style: {
            animation: "signal-glitch-blink 1s ease-in-out infinite 0.8s",
            filter: "blur(0.4px)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/4 w-3 h-12 bg-accent/60",
          style: {
            animation: "signal-glitch-blink 1s ease-in-out infinite 0.5s",
            filter: "blur(1.5px)"
          }
        }
      )
    ] })
  ] }), G = () => w && t.length > 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: P,
        disabled: !u && r === 0 || b && i === "signal-glitch" && S,
        className: "group absolute left-2 top-1/2 -translate-y-1/2 w-16 h-16 text-primary hover:text-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none transition-all duration-300 flex items-center justify-center hover:scale-110",
        "aria-label": "Previous image",
        children: /* @__PURE__ */ e.jsxs(
          "svg",
          {
            width: "48",
            height: "48",
            viewBox: "0 0 100 100",
            className: "transition-all duration-300 group-hover:scale-110 overflow-visible",
            style: { overflow: "visible" },
            children: [
              /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
                "linearGradient",
                {
                  id: "arrow-gradient-left",
                  x1: "100%",
                  y1: "0%",
                  x2: "0%",
                  y2: "0%",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "stop",
                      {
                        offset: "0%",
                        stopColor: "rgb(0, 255, 136)",
                        stopOpacity: "1",
                        className: "transition-all duration-500 opacity-0 group-hover:opacity-100"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "stop",
                      {
                        offset: "50%",
                        stopColor: "rgb(0, 255, 249)",
                        stopOpacity: "1",
                        className: "transition-all duration-500 opacity-0 group-hover:opacity-100"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "stop",
                      {
                        offset: "100%",
                        stopColor: "rgb(255, 0, 93)",
                        stopOpacity: "1",
                        className: "transition-all duration-500 opacity-0 group-hover:opacity-100"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M70 20 L20 50 L70 80 L60 50 Z",
                  stroke: "currentColor",
                  strokeWidth: "3",
                  fill: "none",
                  className: "transition-all duration-300 group-hover:stroke-[4]"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M70 20 L20 50 L70 80 L60 50 Z",
                  stroke: "rgb(255, 0, 93)",
                  strokeWidth: "4",
                  fill: "none",
                  className: "opacity-0 group-hover:opacity-100 group-hover:animate-[rgbStroke_1.5s_linear_infinite] group-active:opacity-0",
                  style: {
                    filter: "drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 18px currentColor)"
                  }
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M70 20 L20 50 L70 80 L60 50 Z",
                  stroke: "rgb(255, 0, 93)",
                  strokeWidth: "4",
                  fill: "none",
                  className: "opacity-0 group-active:opacity-100 group-active:animate-[rgbStroke_1.5s_linear_infinite]"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: U,
        disabled: !u && r === t.length - 1 || b && i === "signal-glitch" && S,
        className: "group absolute right-2 top-1/2 -translate-y-1/2 w-16 h-16 text-primary hover:text-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none transition-all duration-300 flex items-center justify-center hover:scale-110",
        "aria-label": "Next image",
        children: /* @__PURE__ */ e.jsxs(
          "svg",
          {
            width: "48",
            height: "48",
            viewBox: "0 0 100 100",
            className: "transition-all duration-300 group-hover:scale-110 overflow-visible",
            style: { overflow: "visible" },
            children: [
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M30 20 L80 50 L30 80 L40 50 Z",
                  stroke: "currentColor",
                  strokeWidth: "3",
                  fill: "none",
                  className: "transition-all duration-300 group-hover:stroke-[4]"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M30 20 L80 50 L30 80 L40 50 Z",
                  stroke: "rgb(255, 0, 93)",
                  strokeWidth: "4",
                  fill: "none",
                  className: "opacity-0 group-hover:opacity-100 group-hover:animate-[rgbStroke_1.5s_linear_infinite] group-active:opacity-0",
                  style: {
                    filter: "drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 18px currentColor)"
                  }
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M30 20 L80 50 L30 80 L40 50 Z",
                  stroke: "rgb(255, 0, 93)",
                  strokeWidth: "4",
                  fill: "none",
                  className: "opacity-0 group-active:opacity-100 group-active:animate-[rgbStroke_1.5s_linear_infinite]"
                }
              )
            ]
          }
        )
      }
    )
  ] }), B = () => d && t.length > 1 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4 space-x-4", children: t.map((s, a) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => H(a),
      disabled: b && i === "signal-glitch" && S,
      className: "group relative transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",
      style: {
        width: "24px",
        height: "24px"
      },
      "aria-label": `Go to slide ${a + 1}`,
      children: [
        a === r && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-[-1px] border-2",
            style: {
              borderColor: "rgb(255, 0, 93)",
              animation: "rotateFocusRing 0.8s ease-out forwards, rgbBorder 1.5s linear infinite 0.8s"
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `absolute inset-0 border-2 transition-all duration-300 ${a === r ? "border-primary bg-primary/30 shadow-lg-primary animate-[rgbBorder_1.5s_linear_infinite]" : "border-accent bg-surface/50 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-primary group-hover:animate-[rgbBorder_1.5s_linear_infinite]"}`,
            style: {
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            }
          }
        ),
        a === r && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-2 bg-primary/60 animate-pulse",
            style: {
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              animation: "rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"
            }
          }
        ),
        a === r && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 opacity-80", children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute top-1/2 left-2 right-2 h-0.5 bg-primary/80 animate-pulse",
              style: {
                transform: "translateY(-50%)",
                animation: "rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-1/2 top-2 bottom-2 w-0.5 bg-primary/80 animate-pulse",
              style: {
                transform: "translateX(-50%)",
                animation: "rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"
              }
            }
          )
        ] })
      ]
    },
    a
  )) });
  if (t.length === 0)
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${M} w-full bg-surface border border-accent rounded-lg flex items-center justify-center ${h}`,
        children: /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "No images to display" })
      }
    );
  const q = t[r];
  return /* @__PURE__ */ e.jsxs("div", { className: `relative w-full ${h}`, children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative w-full overflow-hidden rounded-lg border border-accent bg-surface ${M}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
            /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60" }),
            /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60" }),
            /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60" }),
            /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60" }),
            /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1 animate-pulse" })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `relative w-full h-full overflow-hidden carousel-${x}`,
              children: [
                i === "slide" && V(),
                (i === "fade" || i === "matrix") && K(),
                i === "signal-glitch" && z()
              ]
            }
          ),
          q.caption && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4", children: /* @__PURE__ */ e.jsx("p", { className: "text-white text-sm font-medium", children: q.caption }) }),
          G()
        ]
      }
    ),
    B()
  ] });
}, _e = me(Ie), Oe = {
  openDuration: 600,
  closeDuration: 400,
  crtEffects: !0
}, Pe = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-none w-full h-full"
}, ae = me(
  ({
    isOpen: t,
    onClose: r,
    title: m,
    children: o,
    footer: n,
    onCancel: c,
    onConfirm: u,
    cancelText: i = "Cancel",
    confirmText: x = "Confirm",
    confirmLoading: w = !1,
    showCancel: d = !0,
    showConfirm: h = !0,
    size: f = "md",
    closeOnOverlayClick: p = !0,
    closeOnEscape: C = !0,
    animation: E,
    className: b = "",
    overlayClassName: $ = "",
    showCloseButton: j = !0,
    onOpen: T,
    onCRTBootComplete: S
  }) => {
    const y = oe(
      () => ({ ...Oe, ...E }),
      [E]
    ), [M, D] = A(!1), [v, P] = A(!0), U = F(null), H = F(null), V = F(null), K = F(`modal-title-${Math.random().toString(36).slice(2)}`), z = R(() => {
      D(!0), setTimeout(() => {
        D(!1), P(!0), r();
      }, y.closeDuration);
    }, [r, y.closeDuration]);
    Q(() => {
      t && !M && (V.current = document.activeElement || null, P(!0), T?.(), setTimeout(() => {
        P(!1), S?.(), H.current?.focus();
      }, y.openDuration));
    }, [
      t,
      M,
      T,
      S,
      y.openDuration
    ]);
    const X = R(() => {
      c?.(), z();
    }, [c, z]), J = R(() => {
      u?.(), z();
    }, [u, z]), G = R(
      (s) => {
        p && (s.target === U.current || s.target === s.currentTarget) && z();
      },
      [z, p]
    ), B = R(
      (s) => {
        C && s.key === "Escape" && z();
      },
      [z, C]
    );
    Q(() => {
      if (t) {
        document.addEventListener("keydown", B);
        const s = document.body.style.overflow, a = window.innerWidth - document.documentElement.clientWidth;
        return document.body.style.overflow = "hidden", document.body.style.paddingRight = `${a}px`, () => {
          document.removeEventListener("keydown", B), document.body.style.overflow = s, document.body.style.paddingRight = "", V.current?.focus?.();
        };
      }
    }, [t, B]);
    const q = oe(
      () => [
        "relative",
        "bg-surface",
        "border-2",
        "rounded-lg",
        "max-h-[90vh]",
        "overflow-hidden",
        "flex",
        "flex-col",
        "transform",
        "transition-all",
        "duration-300",
        Pe[f],
        y.crtEffects && v ? "animate-crt-power-on border-accent shadow-lg-accent" : y.crtEffects && M ? "animate-crt-power-off border-accent shadow-lg-accent" : M ? "scale-95 opacity-0 border-accent/20" : v ? "scale-105 opacity-90 border-accent shadow-input-accent/50" : "scale-100 opacity-100 animate-rgb-glow",
        b
      ].filter(Boolean).join(" "),
      [f, y.crtEffects, M, v, b]
    );
    return t ? ye(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: U,
          className: `fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${$} ${M ? "bg-black/0 backdrop-blur-none opacity-0 duration-800" : v ? "bg-black/30 backdrop-blur-md opacity-100 duration-500" : "bg-black/30 backdrop-blur-sm opacity-100 duration-300"}`,
          style: {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh"
          },
          onClick: G,
          "aria-hidden": !0,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: H,
              className: q,
              onClick: (s) => s.stopPropagation(),
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": m ? K.current : void 0,
              tabIndex: -1,
              children: [
                j && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: z,
                    className: `absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${M ? "scale-0 rotate-180 opacity-0" : v ? "scale-0 opacity-0" : "scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,
                    "aria-label": "Close modal",
                    children: /* @__PURE__ */ e.jsx(
                      "svg",
                      {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "relative",
                        children: /* @__PURE__ */ e.jsx(
                          "path",
                          {
                            d: "M12 4L4 12M4 4L12 12",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    )
                  }
                ),
                m && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `px-6 py-4 border-b border-accent/20 flex-shrink-0 transition-all duration-300 ${v ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`,
                    children: /* @__PURE__ */ e.jsx("h2", { id: K.current, className: "text-lg font-semibold text-primary", children: m })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `flex-1 overflow-auto p-6 transition-all duration-500 ${v ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`,
                    children: o
                  }
                ),
                (n || c || u) && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `px-6 py-4 border-t border-accent/20 flex-shrink-0 transition-all duration-300 ${v ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`,
                    children: n || /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-muted text-sm font-mono", children: "> ESC to abort" }),
                      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
                        d && c && /* @__PURE__ */ e.jsx(Y, { variant: "ghost", size: "sm", onClick: X, children: i }),
                        h && u && /* @__PURE__ */ e.jsx(
                          Y,
                          {
                            variant: "primary",
                            size: "sm",
                            onClick: J,
                            disabled: w,
                            children: x
                          }
                        )
                      ] })
                    ] })
                  }
                )
              ]
            }
          )
        }
      ),
      document.body
    ) : null;
  }
);
ae.displayName = "CyberUI.Modal";
const ve = Ee(void 0), De = () => {
  const t = Se(ve);
  if (t === void 0)
    throw new Error(
      "useCyberNotifications must be used within a CyberNotificationProvider"
    );
  return t;
}, Qe = () => {
  const [t, r] = A(""), [m, o] = A(0), [n, c] = A(!1), [u, i] = A(!1), [x, w] = A(!1), [d, h] = A(!1), [f, p] = A(!1), [C, E] = A(!1), { showNotification: b } = De(), $ = [
    {
      src: "image_demo_1.jpg",
      alt: "Cyberpunk cityscape with neon lights",
      caption: "Neo-Tokyo District 7"
    },
    {
      src: "image_demo_2.jpg",
      alt: "Futuristic architecture",
      caption: "Corporate Megastructure"
    },
    {
      src: "image_demo_3.jpg",
      alt: "Cyberpunk street scene",
      caption: "Underground Market"
    }
  ], j = () => /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      clipRule: "evenodd"
    }
  ) });
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2", children: "Interactive Components" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "Test input fields, buttons, and user interactions" })
    ] }),
    /* @__PURE__ */ e.jsx(se, { title: "User Input", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ e.jsx(
        be,
        {
          variant: "primary",
          label: "Neural Interface Command",
          placeholder: "Enter command sequence...",
          value: t,
          onChange: (T) => r(T.target.value),
          helperText: t.length > 0 ? `Input: ${t.length} characters` : "Awaiting neural input..."
        }
      ),
      /* @__PURE__ */ e.jsx(
        be,
        {
          variant: "secondary",
          label: "Database Query",
          placeholder: "Search corporate database...",
          leftIcon: /* @__PURE__ */ e.jsx(j, {}),
          helperText: "Search through encrypted corporate files"
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsxs(se, { title: "System Actions", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e.jsx(Y, { variant: "primary", onClick: () => c(!0), children: "Execute Protocol" }),
        /* @__PURE__ */ e.jsx(Y, { variant: "secondary", onClick: () => i(!0), children: "Scan System" }),
        /* @__PURE__ */ e.jsx(Y, { variant: "danger", onClick: () => w(!0), children: "Emergency Stop" }),
        /* @__PURE__ */ e.jsx(Y, { variant: "ghost", onClick: () => h(!0), children: "Run Diagnostics" })
      ] }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2", children: "System Status: Offline" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e.jsx(Y, { variant: "primary", disabled: !0, children: "System Offline" }),
        /* @__PURE__ */ e.jsx(Y, { variant: "secondary", disabled: !0, children: "Access Denied" }),
        /* @__PURE__ */ e.jsx(Y, { variant: "danger", disabled: !0, children: "Critical Error" }),
        /* @__PURE__ */ e.jsx(Y, { variant: "ghost", disabled: !0, children: "Network Down" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(se, { title: "Visual Data Stream", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-muted text-center", children: "Navigate through archived data streams" }),
      /* @__PURE__ */ e.jsx(
        _e,
        {
          images: $,
          currentIndex: m,
          onChange: o,
          size: "md",
          transition: "signal-glitch",
          glitchRate: 0.3,
          autoPlay: !0,
          interval: 4e3,
          onBeforeChange: (T, S) => b(
            "warning",
            "SURVEILLANCE.SYS",
            `Switching surveillance feed ${T} → ${S}`
          ),
          onAfterChange: (T) => b(
            "success",
            "SURVEILLANCE.SYS",
            `Now monitoring sector ${T + 1}`
          )
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center text-sm text-muted", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Feed ",
          m + 1,
          " of ",
          $.length
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "font-mono", children: "AUTO-SCAN: ACTIVE" })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(se, { title: "Interactive Demo Card", children: /* @__PURE__ */ e.jsx(se, { variant: "accent", titleBorder: !1, children: /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("h4", { className: "text-xl font-semibold text-default", children: "Neural Interface Status" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "Monitor and control your cybernetic enhancements through this interactive panel." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
        /* @__PURE__ */ e.jsxs(se, { variant: "small", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-primary font-mono font-bold", children: "ONLINE" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Connection Status" })
        ] }),
        /* @__PURE__ */ e.jsxs(se, { variant: "small", children: [
          /* @__PURE__ */ e.jsx("div", { className: "text-secondary font-mono font-bold", children: "87%" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Neural Sync Rate" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ e.jsx(
          Y,
          {
            variant: "primary",
            size: "sm",
            className: "flex-1",
            onClick: () => p(!0),
            children: "Sync"
          }
        ),
        /* @__PURE__ */ e.jsx(
          Y,
          {
            variant: "secondary",
            size: "sm",
            className: "flex-1",
            onClick: () => E(!0),
            children: "Monitor"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(
      ae,
      {
        isOpen: n,
        onClose: () => c(!1),
        title: "Neural Link Protocol",
        onCancel: () => c(!1),
        onConfirm: () => {
          b(
            "success",
            "NEURAL.EXE",
            "Neural link protocol executed successfully"
          ), c(!1);
        },
        cancelText: "Abort",
        confirmText: "Execute",
        children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-primary rounded-full animate-pulse" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-primary font-semibold", children: "Neural Interface Synchronization Initiated" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-surface/30 p-4 rounded border border-primary/30", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-sm font-mono", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Protocol:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-accent", children: "NEURALLINK_v2.45" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Target Interface:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-primary", children: "CORTEX_PRIME" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Security Level:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-success", children: "AUTHORIZED" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Data Transfer Rate:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-secondary", children: "2.4TB/s" })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "This protocol will establish a direct neural interface connection with the primary cortex module. All sensory data will be enhanced through cybernetic augmentation layers." }),
          /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-primary pl-4", children: /* @__PURE__ */ e.jsxs("p", { className: "text-primary text-sm font-mono", children: [
            "> WARNING: Neural bandwidth at 87% capacity",
            /* @__PURE__ */ e.jsx("br", {}),
            "> Recommend defragmenting memory banks before execution"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      ae,
      {
        isOpen: u,
        onClose: () => i(!1),
        title: "System Diagnostic Scan",
        onCancel: () => i(!1),
        onConfirm: () => {
          b(
            "success",
            "DIAGNOSTIC.SYS",
            "Deep system scan initiated successfully"
          ), i(!1);
        },
        cancelText: "Cancel",
        confirmText: "Start Scan",
        children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-secondary rounded-full animate-pulse" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-secondary font-semibold", children: "Deep System Analysis Ready" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-surface/30 p-4 rounded border border-secondary/30", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ e.jsxs("div", { className: "text-sm font-mono space-y-1", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "CPU Cores:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-success", children: "16/16 ONLINE" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Memory Banks:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-warning", children: "64TB (73% USED)" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Neural Networks:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-success", children: "STABLE" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Firewall Status:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-error", children: "3 INTRUSION ATTEMPTS" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Comprehensive scan will analyze all system components, neural pathways, and security protocols. Estimated scan time: 47 seconds." }),
          /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-secondary pl-4", children: /* @__PURE__ */ e.jsxs("p", { className: "text-secondary text-sm font-mono", children: [
            "> Scanning priority: Critical vulnerabilities",
            /* @__PURE__ */ e.jsx("br", {}),
            "> Background processes will be temporarily suspended"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      ae,
      {
        isOpen: x,
        onClose: () => w(!1),
        title: "⚠️ EMERGENCY SHUTDOWN",
        onCancel: () => w(!1),
        onConfirm: () => {
          b(
            "error",
            "EMERGENCY.SYS",
            "Critical shutdown sequence initiated"
          ), w(!1);
        },
        cancelText: "Abort",
        confirmText: "SHUTDOWN NOW",
        children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-error rounded-full animate-pulse" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-error font-semibold", children: "CRITICAL SYSTEM ALERT" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-error/10 p-4 rounded border border-error/50", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Alert Level:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-error font-mono", children: "DEFCON 1" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Threat Source:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-error font-mono", children: "UNKNOWN" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Systems Affected:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-error font-mono", children: "ALL MODULES" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Time to Breach:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-error font-mono", children: "00:00:47" })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-error text-sm", children: [
            /* @__PURE__ */ e.jsx("strong", { children: "WARNING:" }),
            " Emergency shutdown will immediately terminate all neural connections and cybernetic processes. This action cannot be undone and may result in temporary disorientation or memory fragments."
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-error pl-4", children: /* @__PURE__ */ e.jsxs("p", { className: "text-error text-sm font-mono", children: [
            "> ALL DATA WILL BE PRESERVED IN EMERGENCY CACHE",
            /* @__PURE__ */ e.jsx("br", {}),
            "> NEURAL INTERFACE WILL BE FORCIBLY DISCONNECTED",
            /* @__PURE__ */ e.jsx("br", {}),
            "> AUTOMATIC REBOOT IN SAFE MODE WILL COMMENCE"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      ae,
      {
        isOpen: d,
        onClose: () => h(!1),
        title: "Advanced Diagnostics",
        onCancel: () => h(!1),
        onConfirm: () => {
          b(
            "success",
            "DIAGNOSTICS.EXE",
            "Comprehensive system analysis started"
          ), h(!1);
        },
        cancelText: "Skip",
        confirmText: "Run Tests",
        children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-accent rounded-full animate-pulse" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-accent font-semibold", children: "Comprehensive System Analysis" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-surface/30 p-4 rounded border border-accent/30", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-accent font-mono text-sm", children: "DIAGNOSTIC MODULES AVAILABLE:" }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs font-mono", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "✓ Memory Integrity" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "✓ Neural Pathways" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "✓ Cybernetic Sync" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-warning", children: "⚠ Security Layers" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "✓ Data Streams" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-error", children: "✗ Quantum Encryption" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "✓ Bio-signatures" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "✓ Network Protocols" })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Advanced diagnostics will perform deep analysis on all system components including neural interface stability, cybernetic implant functionality, and quantum encryption matrices." }),
          /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-accent pl-4", children: /* @__PURE__ */ e.jsxs("p", { className: "text-accent text-sm font-mono", children: [
            "> Estimated completion time: 2 minutes 34 seconds",
            /* @__PURE__ */ e.jsx("br", {}),
            "> System performance may be temporarily reduced",
            /* @__PURE__ */ e.jsx("br", {}),
            "> All anomalies will be logged for review"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      ae,
      {
        isOpen: f,
        onClose: () => p(!1),
        title: "Neural Synchronization",
        onCancel: () => p(!1),
        onConfirm: () => {
          b(
            "success",
            "NEURAL.SYS",
            "Neural interface synchronization completed"
          ), p(!1);
        },
        cancelText: "Cancel",
        confirmText: "Synchronize",
        children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-primary rounded-full animate-pulse" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-primary font-semibold", children: "Neural Interface Calibration" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-surface/30 p-4 rounded border border-primary/30", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Current Sync Rate:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-primary font-mono", children: "87.3%" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Target Sync Rate:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-success font-mono", children: "99.8%" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Latency:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-accent font-mono", children: "0.003ms" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted", children: "Neural Bandwidth:" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-secondary font-mono", children: "2.4 PB/s" })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Neural synchronization will optimize the connection between your biological neural networks and cybernetic augmentations for maximum efficiency and response time." }),
          /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-primary pl-4", children: /* @__PURE__ */ e.jsxs("p", { className: "text-primary text-sm font-mono", children: [
            "> Backup neural patterns before sync",
            /* @__PURE__ */ e.jsx("br", {}),
            "> Calibrating synaptic response timing",
            /* @__PURE__ */ e.jsx("br", {}),
            "> Optimizing data flow protocols"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      ae,
      {
        isOpen: C,
        onClose: () => E(!1),
        title: "Real-time System Monitor",
        onCancel: () => E(!1),
        onConfirm: () => {
          b(
            "success",
            "MONITOR.SYS",
            "Real-time monitoring activated successfully"
          ), E(!1);
        },
        cancelText: "Close",
        confirmText: "Enable Monitoring",
        children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-secondary rounded-full animate-pulse" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-secondary font-semibold", children: "Live System Metrics" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "bg-surface/30 p-4 rounded border border-secondary/30", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm font-mono", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "CPU Usage" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "23.7%" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Memory Load" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-warning", children: "73.2%" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Neural Activity" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-primary", children: "High" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Network I/O" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-accent", children: "847 MB/s" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Power Draw" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-success", children: "67.4 kW" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-muted", children: "Heat Index" }),
              /* @__PURE__ */ e.jsx("div", { className: "text-error", children: "94.1°C" })
            ] })
          ] }) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm", children: "Real-time monitoring provides continuous oversight of all system functions, neural activity patterns, and cybernetic implant performance metrics." }),
          /* @__PURE__ */ e.jsx("div", { className: "border-l-2 border-secondary pl-4", children: /* @__PURE__ */ e.jsxs("p", { className: "text-secondary text-sm font-mono", children: [
            "> Auto-refresh every 100ms",
            /* @__PURE__ */ e.jsx("br", {}),
            "> Alert thresholds configured",
            /* @__PURE__ */ e.jsx("br", {}),
            "> Logging all anomalies to secure buffer"
          ] }) })
        ] })
      }
    )
  ] });
}, je = {
  RADIUS: 20,
  SEGMENT_COUNT: 20,
  SEGMENT_ANGLE: 360 / 20,
  GAP_ANGLE: 4,
  INNER_RADIUS: 18.5,
  OUTER_RADIUS: 23.5,
  OUTER_TICK_RADIUS: 30
}, ze = [
  "Arasaka Corporation",
  "Militech Industries",
  "Kang Tao Systems",
  "NetWatch Division"
], ue = ({
  variant: t = "primary",
  size: r = "md",
  children: m,
  className: o = "",
  leftIcon: n,
  rightIcon: c,
  clickable: u = !1,
  onClick: i,
  ...x
}) => {
  const w = (f) => Z(f, ee.badge), d = (f) => ({
    primary: "text-base bg-primary shadow-lg",
    secondary: "text-base bg-secondary shadow-lg",
    accent: "text-base bg-accent shadow-lg",
    success: "text-base bg-success shadow-lg",
    error: "text-base bg-error shadow-lg",
    warning: "text-base bg-warning shadow-lg"
  })[f], h = (f, p) => !p && !i ? "transition-shadow" : {
    primary: "hover:shadow-primary transition-shadow cursor-pointer",
    secondary: "hover:shadow-secondary transition-shadow cursor-pointer",
    accent: "hover:shadow-lg-accent transition-shadow cursor-pointer",
    success: "hover:shadow-success transition-shadow cursor-pointer",
    error: "hover:shadow-error transition-shadow cursor-pointer",
    warning: "hover:shadow-warning transition-shadow cursor-pointer"
  }[f];
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: `inline-flex items-center ${w(r)} rounded-full font-semibold ${d(t)} ${h(t, u || !!i)} ${o}`,
      onClick: i,
      ...x,
      children: [
        n,
        /* @__PURE__ */ e.jsx("span", { children: m }),
        c
      ]
    }
  );
}, Be = ({
  label: t,
  size: r = "md",
  variant: m = "primary",
  className: o = "",
  checked: n = !1,
  onChange: c,
  disabled: u = !1,
  id: i,
  ...x
}) => {
  const w = (E) => {
    c && c(E.target.checked);
  }, d = (E) => Z(E, {
    sm: "w-10 h-5 after:h-4 after:w-4",
    md: "w-14 h-7 after:h-6 after:w-6",
    lg: "w-16 h-8 after:h-7 after:w-7"
  }), h = (E, b) => {
    if (b)
      return "bg-gray-600 peer-checked:bg-gray-500 opacity-50 cursor-not-allowed";
    const $ = {
      primary: "bg-gray-600 peer-checked:bg-linear-(--gradient-accent) peer-focus:ring-primary",
      secondary: "bg-gray-600 peer-checked:bg-secondary peer-focus:ring-secondary",
      accent: "bg-gray-600 peer-checked:bg-accent peer-focus:ring-accent"
    };
    return $[E] || $.primary;
  }, f = [
    "relative inline-flex items-center cursor-pointer",
    u ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  ].join(" "), p = [
    d(r),
    h(m, u),
    "peer-focus:outline-none rounded-full peer",
    "peer-checked:after:translate-x-full peer-checked:after:border-white",
    "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
    "after:bg-white after:rounded-full after:transition-all",
    "transition-colors duration-300"
  ].filter(Boolean).join(" "), C = [
    "flex items-center justify-between",
    t ? "space-x-3" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: C, children: [
    t && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: i,
        className: `text-default font-medium ${u ? "text-muted opacity-50" : "cursor-pointer"}`,
        children: t
      }
    ),
    /* @__PURE__ */ e.jsxs("label", { className: f, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "sr-only peer",
          checked: n,
          onChange: w,
          disabled: u,
          id: i,
          ...x
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: p })
    ] })
  ] });
}, Ue = ({
  label: t,
  size: r = "md",
  variant: m = "primary",
  options: o,
  placeholder: n,
  helperText: c,
  error: u,
  className: i = "",
  disabled: x = !1,
  id: w,
  name: d,
  ...h
}) => {
  const f = ge(), p = w || f, C = d || p, E = (y) => Z(y, ee.input), b = (y, M, D) => {
    if (M)
      return "bg-base border-2 border-border-default/30 text-muted/50 cursor-not-allowed opacity-50";
    if (D)
      return "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error";
    const v = {
      primary: "bg-surface border-2 border-border-default text-default focus:ring-2 focus:ring-primary focus:border-primary shadow-primary",
      secondary: "bg-surface border-2 border-secondary text-default focus:ring-2 focus:ring-secondary focus:border-secondary shadow-secondary/30",
      danger: "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error/30",
      ghost: "bg-base border-2 border-accent/20 text-default focus:ring-2 focus:ring-accent focus:border-accent shadow-secondary"
    };
    return v[y] || v.primary;
  }, $ = [
    "appearance-none w-full rounded-lg font-mono transition-all duration-300",
    "focus:outline-none px-4 pr-10",
    E(r),
    b(m, x, !!u),
    i
  ].filter(Boolean).join(" "), j = "relative w-full", T = [
    "block text-sm font-medium mb-2 transition-colors duration-200",
    x ? "text-muted opacity-50" : u ? "text-error" : "text-default"
  ].join(" "), S = [
    "mt-2 text-xs transition-colors duration-200",
    u ? "text-error" : "text-muted"
  ].join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    t && /* @__PURE__ */ e.jsx("label", { htmlFor: p, className: T, children: t }),
    /* @__PURE__ */ e.jsxs("div", { className: j, children: [
      /* @__PURE__ */ e.jsxs(
        "select",
        {
          className: $,
          disabled: x,
          id: p,
          name: C,
          ...h,
          children: [
            n && /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: n }),
            o.map((y) => /* @__PURE__ */ e.jsx(
              "option",
              {
                value: y.value,
                disabled: y.disabled,
                className: "bg-surface text-default",
                children: y.label
              },
              y.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ${x ? "text-muted/50" : u ? "text-error" : "text-accent"}`,
          children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              clipRule: "evenodd"
            }
          ) })
        }
      )
    ] }),
    (c || u) && /* @__PURE__ */ e.jsx("div", { className: S, children: u || c })
  ] });
}, et = () => {
  const [t, r] = A(!1), [m, o] = A(""), n = ze.map((c) => ({
    value: c.toLowerCase().replace(/\s+/g, "_"),
    label: c
  }));
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2", children: "UI Elements" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "Essential components for cyberpunk interfaces" })
    ] }),
    /* @__PURE__ */ e.jsx(se, { title: "Form Controls", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-center", children: [
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
        Ue,
        {
          label: "Corporate Faction",
          variant: "primary",
          options: n,
          placeholder: "Select your faction...",
          value: m,
          onChange: (c) => o(c.target.value)
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-default mb-2", children: "Stealth Protocol" }),
        /* @__PURE__ */ e.jsx("div", { className: "bg-surface border border-border-default rounded-lg p-3", children: /* @__PURE__ */ e.jsx(
          Be,
          {
            label: "Enable Ghost Mode",
            variant: "primary",
            checked: t,
            onChange: r
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(se, { title: "Status Indicators", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-default mb-3", children: "Security Clearance Levels" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ e.jsx(
            ue,
            {
              variant: "primary",
              clickable: !0,
              leftIcon: /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 bg-base rounded-full mr-2" }),
              children: "Administrator"
            }
          ),
          /* @__PURE__ */ e.jsx(
            ue,
            {
              variant: "secondary",
              clickable: !0,
              leftIcon: /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 bg-base rounded-full mr-2" }),
              children: "Operator"
            }
          ),
          /* @__PURE__ */ e.jsx(
            ue,
            {
              variant: "accent",
              clickable: !0,
              leftIcon: /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 bg-base rounded-full mr-2" }),
              children: "Guest Access"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-default mb-3", children: "Network Status" }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between bg-surface border border-border-default rounded-lg p-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-primary rounded-full animate-pulse" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-default", children: "Mainframe Link" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs text-primary font-mono", children: "ACTIVE" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between bg-surface border border-border-default rounded-lg p-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 bg-secondary rounded-full" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-default", children: "Secure Channel" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-xs text-secondary font-mono", children: "STANDBY" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(se, { title: "Media Gallery", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-default mb-3", children: "Enhanced Visual Analysis System" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted text-sm mb-4", children: "Access enhanced imaging protocol for detailed examination" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "h-48", children: /* @__PURE__ */ e.jsx(
            ne,
            {
              src: "image_demo_1.jpg",
              alt: "Cyberpunk cityscape with neon lights reflecting on wet streets",
              size: "md",
              className: "h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted text-center", children: "Neon Cityscape" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "h-48", children: /* @__PURE__ */ e.jsx(
            ne,
            {
              src: "image_demo_3.jpg",
              alt: "Holographic display showing system diagnostics",
              size: "md",
              className: "h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted text-center", children: "System Diagnostics" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "h-48", children: /* @__PURE__ */ e.jsx(
            ne,
            {
              src: "noexist.jpg",
              alt: "Futuristic neural network interface with data streams",
              size: "md",
              className: "h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted text-center", children: "Neural Interface Offline" })
        ] })
      ] })
    ] }) }) })
  ] });
}, We = (t = {}) => {
  const { min: r = 5, max: m = 95, speed: o = 30 } = t, [n, c] = A(0), [u, i] = A(1);
  return Q(() => {
    const x = setInterval(() => {
      c((w) => {
        let d = w + u;
        return d >= m ? (d = m, i(-1)) : d <= r && (d = r, i(1)), d;
      });
    }, o);
    return () => clearInterval(x);
  }, [u, r, m, o]), n;
}, Fe = ({
  progress: t,
  radius: r,
  className: m = "",
  children: o,
  ariaLabel: n
}) => {
  const c = 2 * Math.PI * r, u = c / 2, i = u * (1 - t / 100), x = u * (1 - t / 100);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative ${m}`,
      role: "progressbar",
      "aria-label": n || "Progress",
      "aria-valuenow": Math.max(0, Math.min(100, t)),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: "w-full h-full overflow-visible",
            viewBox: "0 0 50 50",
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  cx: "25",
                  cy: "25",
                  r,
                  fill: "none",
                  stroke: "var(--color-accent)",
                  strokeWidth: "4",
                  strokeLinecap: "butt",
                  strokeDasharray: `${u * 0.98} ${c}`,
                  strokeDashoffset: i,
                  transform: "rotate(-90 25 25)",
                  style: {
                    filter: "drop-shadow(0 0 8px var(--color-accent))"
                  }
                }
              ),
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  cx: "25",
                  cy: "25",
                  r,
                  fill: "none",
                  stroke: "var(--color-primary)",
                  strokeWidth: "4",
                  strokeLinecap: "butt",
                  strokeDasharray: `${u * 0.98} ${c}`,
                  strokeDashoffset: x,
                  transform: "rotate(90 25 25)",
                  style: {
                    filter: "drop-shadow(0 0 8px var(--color-primary))"
                  }
                }
              )
            ]
          }
        ),
        o && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: o })
      ]
    }
  );
}, He = ({
  progress: t,
  className: r = "",
  children: m
}) => {
  const {
    SEGMENT_COUNT: o,
    SEGMENT_ANGLE: n,
    GAP_ANGLE: c,
    INNER_RADIUS: u,
    OUTER_RADIUS: i,
    OUTER_TICK_RADIUS: x
  } = je, w = n - c;
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${r}`, children: [
    /* @__PURE__ */ e.jsxs(
      "svg",
      {
        className: "w-full h-full",
        viewBox: "0 0 60 60",
        style: { overflow: "visible" },
        children: [
          [...Array(60)].map((d, h) => {
            const f = 6 * h, C = h % 5 === 0 ? 6 : 3, E = "var(--color-muted)", b = 30 + x * Math.cos(f * Math.PI / 180), $ = 30 + x * Math.sin(f * Math.PI / 180), j = 30 + (x - C) * Math.cos(f * Math.PI / 180), T = 30 + (x - C) * Math.sin(f * Math.PI / 180);
            return /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: b,
                y1: $,
                x2: j,
                y2: T,
                stroke: E,
                strokeWidth: 1,
                strokeLinecap: "round",
                opacity: 0.7
              },
              `tick-${h}`
            );
          }),
          [...Array(o)].map((d, h) => {
            const f = n * h - 90 + c / 2, p = f + w, C = (P) => P * Math.PI / 180, E = 30 + u * Math.cos(C(f)), b = 30 + u * Math.sin(C(f)), $ = 30 + i * Math.cos(C(f)), j = 30 + i * Math.sin(C(f)), T = 30 + i * Math.cos(C(p)), S = 30 + i * Math.sin(C(p)), y = 30 + u * Math.cos(C(p)), M = 30 + u * Math.sin(C(p)), D = `M ${E} ${b} L ${$} ${j} L ${T} ${S} L ${y} ${M} Z`, v = h < Math.floor(t / 5);
            return /* @__PURE__ */ e.jsx(
              "path",
              {
                d: D,
                fill: v ? "var(--color-accent)" : "var(--color-border-default)",
                style: {
                  filter: v ? "drop-shadow(0 0 6px var(--color-accent))" : "none",
                  transition: "fill 0.3s ease"
                }
              },
              `segment-${h}`
            );
          })
        ]
      }
    ),
    m && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: m })
  ] });
}, de = ({
  type: t,
  title: r,
  message: m,
  size: o = "md",
  onClose: n
}) => {
  const c = (h) => Z(h, ee.notification), i = (() => {
    switch (t) {
      case "success":
        return {
          container: "bg-linear-(--gradient-accent) shadow-lg-accent",
          textColor: "text-base",
          icon: /* @__PURE__ */ e.jsx("svg", { className: "w-6 h-6 text-base", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
              clipRule: "evenodd"
            }
          ) })
        };
      case "warning":
        return {
          container: "bg-surface border-l-4 border-secondary shadow-lg",
          textColor: "text-default",
          icon: /* @__PURE__ */ e.jsx("svg", { className: "w-6 h-6 text-secondary", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
              clipRule: "evenodd"
            }
          ) })
        };
      case "error":
        return {
          container: "bg-error shadow-error",
          textColor: "text-base",
          icon: /* @__PURE__ */ e.jsx("svg", { className: "w-6 h-6 text-base", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
              clipRule: "evenodd"
            }
          ) })
        };
      default:
        return {
          container: "bg-surface border-l-4 border-secondary shadow-lg",
          textColor: "text-default",
          icon: null
        };
    }
  })(), x = c(o), w = t === "error" ? "alert" : "status", d = t === "warning" ? "hover:text-default/70" : "hover:text-base/70";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start rounded-lg ${x} ${i.container}`, role: w, "aria-atomic": "true", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: i.icon }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ e.jsx("h4", { className: `font-bold ${i.textColor}`, children: r }),
      /* @__PURE__ */ e.jsx("p", { className: `${t === "success" || t === "error" ? "text-base/80" : "text-muted"} text-sm mt-1`, children: m })
    ] }),
    n && /* @__PURE__ */ e.jsx(
      "button",
      {
        className: `flex-shrink-0 ${i.textColor} ${d} transition-colors cursor-pointer`,
        onClick: n,
        "aria-label": "Close notification",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            clipRule: "evenodd"
          }
        ) })
      }
    )
  ] });
}, Ge = ({
  progress: t,
  size: r = "md",
  className: m = ""
}) => {
  const o = (w) => Z(w, ee.linearProgress.width), n = (w) => Z(w, ee.linearProgress.height), c = o(r), u = n(r), i = [
    "bg-surface",
    "rounded-full",
    "shadow-inner",
    u,
    m || c
  ].join(" "), x = [
    "bg-gradient-to-r",
    "from-accent",
    "to-primary",
    "rounded-full",
    "shadow-lg-accent",
    "transition-all",
    "duration-500",
    "ease-out",
    u
  ].join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i,
      role: "progressbar",
      "aria-valuenow": Math.max(0, Math.min(100, t)),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: x,
          style: { width: `${t}%` }
        }
      )
    }
  );
}, Ye = ({
  variant: t = "text",
  size: r = "md",
  width: m,
  height: o,
  className: n = "",
  lines: c = 3,
  animate: u = !0
}) => {
  const x = [
    "bg-gray-600",
    u ? "animate-pulse" : "",
    ((d) => Z(d, ee.skeleton))(r),
    n
  ].filter(Boolean).join(" "), w = () => {
    const d = {};
    return m && (d.width = typeof m == "number" ? `${m}px` : m), o && (d.height = typeof o == "number" ? `${o}px` : o), d;
  };
  if (t === "text")
    return /* @__PURE__ */ e.jsx("div", { className: `space-y-3 ${n}`, children: Array.from({ length: c }).map((d, h) => {
      const p = h === c - 1 ? "w-2/3" : h % 2 === 0 ? "w-full" : "w-5/6";
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `h-3 rounded ${x} ${p}`,
          style: w()
        },
        h
      );
    }) });
  if (t === "circular") {
    const d = r === "sm" ? "h-12 w-12" : r === "lg" ? "h-20 w-20" : "h-16 w-16";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `rounded-full ${x} ${d}`,
        style: w()
      }
    );
  }
  if (t === "rectangular") {
    const d = r === "sm" ? "h-20" : r === "lg" ? "h-40" : "h-32";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `rounded-lg ${x} w-full ${d}`,
        style: w()
      }
    );
  }
  if (t === "avatar-text") {
    const d = r === "sm" ? "h-12 w-12" : r === "lg" ? "h-20 w-20" : "h-16 w-16";
    return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center space-x-4 ${n}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: `rounded-full ${x} ${d}` }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ e.jsx("div", { className: `h-4 rounded w-3/4 ${x}` }),
        /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-1/2 ${x}` })
      ] })
    ] });
  }
  if (t === "button-group") {
    const d = r === "sm" ? "h-8" : r === "lg" ? "h-12" : "h-10";
    return /* @__PURE__ */ e.jsxs("div", { className: `flex space-x-4 ${n}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: `${d} rounded w-20 ${x}` }),
      /* @__PURE__ */ e.jsx("div", { className: `${d} rounded w-24 ${x}` })
    ] });
  }
  if (t === "card") {
    const d = r === "sm" ? "p-4" : r === "lg" ? "p-8" : "p-6";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `border border-border-default rounded-lg bg-surface ${d} space-y-4 ${n}`,
        children: u && /* @__PURE__ */ e.jsxs("div", { className: "animate-pulse space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ e.jsx("div", { className: `rounded-full ${x} h-16 w-16` }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: `h-4 rounded w-3/4 ${x}` }),
              /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-1/2 ${x}` })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded ${x}` }),
            /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-5/6 ${x}` }),
            /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-4/6 ${x}` })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-4 pt-4", children: [
            /* @__PURE__ */ e.jsx("div", { className: `h-8 rounded w-20 ${x}` }),
            /* @__PURE__ */ e.jsx("div", { className: `h-8 rounded w-24 ${x}` })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `h-4 rounded ${x} w-full`,
      style: w()
    }
  );
}, tt = () => {
  const t = We();
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2", children: "User Feedback" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "System responses and loading states" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-base border border-border-default rounded-xl p-6 space-y-6", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2", children: "System Notifications" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(
          de,
          {
            type: "success",
            title: "Neural Link Established",
            message: "Successfully connected to the cybernet mainframe",
            onClose: () => {
            },
            size: { base: "sm", md: "md", lg: "lg" }
          }
        ),
        /* @__PURE__ */ e.jsx(
          de,
          {
            type: "warning",
            title: "Security Protocol Warning",
            message: "Unauthorized access attempt detected on port 2077",
            onClose: () => {
            },
            size: { base: "sm", md: "md", lg: "lg" }
          }
        ),
        /* @__PURE__ */ e.jsx(
          de,
          {
            type: "error",
            title: "System Breach Detected",
            message: "Critical firewall failure - immediate action required",
            onClose: () => {
            },
            size: { base: "sm", md: "md", lg: "lg" }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-base border border-border-default rounded-xl p-6 space-y-6", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2", children: "Loading States" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-default font-medium", children: "Data Transfer" }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-accent font-mono text-sm", children: [
              t,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(Ge, { progress: t, className: "w-full" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted", children: "Uploading neural patterns..." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ e.jsx(
            Fe,
            {
              progress: t,
              radius: je.RADIUS,
              className: "w-20 h-20",
              children: /* @__PURE__ */ e.jsxs("span", { className: "text-accent font-mono text-sm", children: [
                t,
                "%"
              ] })
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-default font-medium", children: "System Scan" }),
            /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted mt-1", children: "Analyzing threat vectors..." })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ e.jsx(He, { progress: t, className: "w-28 h-28", children: /* @__PURE__ */ e.jsxs("span", { className: "text-accent font-mono text-sm", children: [
            t,
            "%"
          ] }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-default font-medium", children: "Segmented Progress" }),
            /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted mt-1", children: "Monitoring segmented data flow..." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-base border border-border-default rounded-xl p-6 space-y-6", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2", children: "Loading Placeholder" }),
      /* @__PURE__ */ e.jsx(Ye, { variant: "card", size: "md" })
    ] })
  ] });
}, Ve = ({
  tabs: t,
  activeTab: r,
  onTabChange: m,
  sizeClasses: o,
  containerClassName: n = "",
  anchorClassName: c = "",
  menuClassName: u = "",
  menuItemClassName: i = "",
  dropdownLabel: x,
  anchorIcon: w,
  showAnchorLabel: d = !0,
  anchorAriaLabel: h,
  closeOnSelect: f = !0
}) => {
  const [p, C] = A(!1), [E, b] = A(!1), [$, j] = A(!1), [T, S] = A(!1), y = F(null), M = F(null);
  Q(() => {
    if (!p) return;
    const v = (P) => {
      y.current && !y.current.contains(P.target) && (j(!0), setTimeout(() => {
        C(!1), j(!1);
      }, 180));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [p]), Q(() => {
    if (!p) return;
    const v = M.current;
    if (!v) return;
    const P = v.getBoundingClientRect();
    S(P.right > window.innerWidth);
  }, [p]);
  const D = () => {
    p ? (j(!0), setTimeout(() => {
      C(!1), j(!1);
    }, 180)) : (b(!0), C(!0), setTimeout(() => b(!1), 30));
  };
  return /* @__PURE__ */ e.jsx("div", { className: `${n}`, children: /* @__PURE__ */ e.jsxs("div", { ref: y, className: "relative inline-block", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: D,
        className: `inline-flex items-center gap-2 ${o} bg-surface text-default border-2 border-border-default rounded-lg transition-all duration-300 hover:text-secondary hover:border-secondary hover:cursor-pointer shadow-secondary/30 ${c}`,
        "aria-haspopup": "menu",
        "aria-expanded": p,
        "aria-label": d ? void 0 : h ?? (typeof x == "string" ? x : "Open tabs"),
        children: [
          w ?? /* @__PURE__ */ e.jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: [
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "5", width: "14", height: "2", rx: "1" }),
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "9", width: "14", height: "2", rx: "1" }),
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "13", width: "14", height: "2", rx: "1" })
          ] }),
          d && /* @__PURE__ */ e.jsx("span", { children: x ?? r })
        ]
      }
    ),
    (p || $) && /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: M,
        "aria-hidden": !p,
        className: `absolute ${T ? "right-0" : "left-0"} mt-2 min-w-40 z-50 bg-surface border-2 border-border-default rounded-lg shadow-secondary overflow-hidden ${u}
              transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity ${E || $ ? "opacity-0 scale-y-0 pointer-events-none" : "opacity-100 scale-y-100 pointer-events-auto"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "py-1", children: t.map((v) => /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              m(v), f && (j(!0), setTimeout(() => {
                C(!1), j(!1);
              }, 180));
            },
            className: `w-full flex items-center justify-between text-left px-4 py-2 font-bold transition-colors duration-200 outline-none hover:cursor-pointer ${r === v ? "text-secondary relative pl-4 before:content-[''] before:h-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[3px] before:rounded before:bg-accent before:shadow-lg-accent" : "text-default hover:text-secondary hover:bg-base/70"} ${i}`,
            children: /* @__PURE__ */ e.jsx("span", { children: v })
          },
          v
        )) })
      }
    )
  ] }) });
}, st = ({
  tabs: t,
  activeTab: r,
  onTabChange: m,
  size: o = "md",
  mode: n = "scroll",
  containerClassName: c = "",
  tabsClassName: u = "",
  dropdownLabel: i,
  anchorIcon: x,
  showAnchorLabel: w = !0,
  anchorAriaLabel: d,
  closeOnSelect: h = !0,
  anchorClassName: f = "",
  menuClassName: p = "",
  menuItemClassName: C = ""
}) => {
  const b = ((S) => Z(S, ee.tabNavigation))(o), $ = Le(n, "scroll"), j = () => {
    switch ($) {
      case "scroll":
        return "w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-border-default scrollbar-track-transparent hover:scrollbar-thumb-secondary/50 py-1";
      case "wrap":
        return "flex flex-wrap gap-2";
      case "dropdown":
      case "collapsible":
        return "flex space-x-2";
      // Will be handled by specific implementations
      default:
        return "flex space-x-2";
    }
  }, T = /* @__PURE__ */ e.jsx(e.Fragment, { children: t.map((S) => /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => m(S),
      className: `
            ${b} font-bold transition-colors duration-200 rounded-t-lg cursor-pointer whitespace-nowrap flex-shrink-0 relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[6px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200
            ${r === S ? "text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100" : "text-muted hover:text-secondary hover:before:opacity-70"}
            ${u}
          `,
      role: "tab",
      "aria-selected": r === S,
      tabIndex: r === S ? 0 : -1,
      children: S
    },
    S
  )) });
  return $ === "dropdown" ? /* @__PURE__ */ e.jsx(
    Ve,
    {
      tabs: t,
      activeTab: r,
      onTabChange: m,
      sizeClasses: b,
      containerClassName: c,
      anchorClassName: f,
      menuClassName: p,
      menuItemClassName: C,
      dropdownLabel: i,
      anchorIcon: x,
      showAnchorLabel: w,
      anchorAriaLabel: d,
      closeOnSelect: h
    }
  ) : $ === "scroll" ? /* @__PURE__ */ e.jsx("div", { className: `${j()} ${c}`, role: "tablist", "aria-label": "Tabs", children: /* @__PURE__ */ e.jsx("div", { className: "w-max mx-auto flex space-x-2", children: T }) }) : /* @__PURE__ */ e.jsx("div", { className: `${j()} ${c}`, role: "tablist", "aria-label": "Tabs", children: T });
}, te = {
  MOBILE_BREAKPOINT: 768,
  STABLE_TIMEOUT: 1e3,
  MOBILE_HIDE_DELAY: 1e3,
  VELOCITY_MULTIPLIER: 2,
  DISTANCE_THRESHOLD: 100,
  MAX_ANIMATION_SPEED: 5,
  MIN_GLOW_DURATION: 150
}, rt = (t = {}) => {
  const {
    glowColor: r = "primary",
    sensitivity: m = 2,
    disabled: o = !1,
    pageLevel: n,
    variant: c = "default",
    className: u = ""
  } = t, i = F(null), x = F(null), w = F(Date.now()), d = F(0), h = F(void 0), f = F([]), p = F(void 0), [C, E] = A({
    isScrolling: !1,
    direction: null,
    velocity: 0,
    position: 0,
    scrollDistance: 0
  }), [b, $] = A(!1), [j, T] = A(() => typeof window > "u" ? !1 : window.innerWidth >= te.MOBILE_BREAKPOINT), S = F(0), [y, M] = A(n ?? !1);
  Q(() => {
    if (n !== void 0)
      M(n);
    else {
      const a = setTimeout(() => {
        const l = i.current !== null;
        M(!l);
      }, 0);
      return () => clearTimeout(a);
    }
  }, [n]);
  const D = R((a) => {
    switch (a) {
      case "transparent":
        return {
          background: "transparent",
          backdropFilter: "none",
          border: "none",
          boxShadow: "none"
        };
      case "minimal":
        return {
          background: "rgba(26, 26, 46, 0.6)",
          backdropFilter: "blur(3px)",
          border: "1px solid rgba(255, 0, 93, 0.2)",
          boxShadow: "0 0 5px rgba(255, 0, 93, 0.2)"
        };
      case "default":
      default:
        return {
          background: "linear-gradient(180deg, rgba(26, 26, 46, 0.95), rgba(45, 45, 68, 0.95))",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 0, 93, 0.3)",
          boxShadow: "0 0 10px rgba(255, 0, 93, 0.3), inset 0 0 10px rgba(255, 0, 93, 0.1)"
        };
    }
  }, []), v = R(() => {
    const a = window.innerWidth < te.MOBILE_BREAKPOINT;
    return {
      isMobile: a,
      scrollbarWidth: a ? 12 : 16,
      arrowSize: a ? 10 : 14,
      lineSize: a ? 8 : 12,
      arrowGap: a ? 2 : 4
    };
  }, []), P = R((a, l, N, g) => {
    const k = (g + N) * 2, W = N * 4, L = (a - k - W) / 2;
    return Math.floor(L / (l + N));
  }, []), U = R((a) => {
    if (y) {
      if (!document.querySelector("#cyber-page-scrollbar-styles")) {
        const l = document.createElement("style");
        l.id = "cyber-page-scrollbar-styles", l.textContent = `
          html::-webkit-scrollbar { display: none; }
          html { scrollbar-width: none; -ms-overflow-style: none; }
        `, document.head.appendChild(l);
      }
    } else if (a) {
      if (a.style.scrollbarWidth = "none", a.style.msOverflowStyle = "none", !document.querySelector("#cyber-scrollbar-styles")) {
        const l = document.createElement("style");
        l.id = "cyber-scrollbar-styles", l.textContent = `
          .cyber-scrollbar-container::-webkit-scrollbar { display: none; }
        `, document.head.appendChild(l);
      }
      a.classList.add("cyber-scrollbar-container");
    }
  }, [y]), H = R((a, l, N, g) => {
    const k = document.createElement("div"), W = a === "arrow";
    W && l ? (k.className = `cyber-arrow cyber-arrow-${l} cyber-arrow-${N}`, k.innerHTML = l === "up" ? "▲" : "▼") : (k.className = `cyber-line cyber-line-${N}`, k.innerHTML = "=");
    const _ = g.isMobile ? "none" : `drop-shadow(0 0 6px var(--color-${r}))
         drop-shadow(0 0 12px var(--color-${r}))
         drop-shadow(0 0 18px var(--color-${r}))`;
    return k.style.cssText = `
      font-size: ${W ? g.arrowSize : g.lineSize}px;
      color: var(--color-${r});
      opacity: 0;
      transition: all 0.2s ease;
      filter: ${_};
      line-height: 1;
      font-weight: bold;
    `, k;
  }, [r]), V = R(() => {
    if (y)
      return {
        height: window.innerHeight,
        top: 0,
        right: 0
      };
    {
      const l = i.current.getBoundingClientRect();
      return {
        height: l.height,
        top: l.top,
        right: window.innerWidth - l.right
      };
    }
  }, [y]), K = R(() => {
    if (o || !y && !i.current || (x.current && x.current.remove(), !(y ? document.body.scrollHeight > window.innerHeight : i.current.scrollHeight > i.current.clientHeight))) return;
    const l = v(), N = V(), g = P(N.height, l.arrowSize, l.arrowGap, l.lineSize);
    U(y ? void 0 : i.current || void 0);
    const k = document.createElement("div");
    k.className = `cyber-scrollbar ${u}`.trim();
    const _ = l.isMobile ? "transparent" : c, L = D(_);
    k.style.cssText = `
      position: fixed;
      top: ${N.top}px;
      right: ${N.right}px;
      width: ${l.scrollbarWidth}px;
      height: ${N.height}px;
      pointer-events: none;
      z-index: 9999;
      display: ${j ? "flex" : "none"};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${l.arrowGap}px;
      background: ${L.background};
      backdrop-filter: ${L.backdropFilter};
      border-radius: ${y ? "4px 0 0 4px" : "4px"};
      border: ${L.border};
      box-shadow: ${L.boxShadow};
    `;
    for (let I = 0; I < g; I++)
      k.appendChild(H("arrow", "up", I, l));
    for (let I = 0; I < 2; I++)
      k.appendChild(H("line", void 0, I, l));
    for (let I = 0; I < g; I++)
      k.appendChild(H("arrow", "down", I, l));
    document.body.appendChild(k), x.current = k;
    const O = y ? void 0 : () => {
      const I = i.current;
      if (I) {
        const re = I.getBoundingClientRect();
        k.style.top = `${re.top}px`, k.style.right = `${window.innerWidth - re.right}px`, k.style.height = `${re.height}px`;
      }
    };
    return O && (window.addEventListener("resize", O), window.addEventListener("scroll", O)), () => {
      k.remove(), !y && i.current && i.current.classList.remove("cyber-scrollbar-container"), O && (window.removeEventListener("resize", O), window.removeEventListener("scroll", O));
    };
  }, [o, y, j, U, V, H, v, P, D, c, u]), z = R((a, l) => {
    const N = Math.max(1, Math.min(3, Math.ceil(a * 0.8))), g = Math.floor(l / te.DISTANCE_THRESHOLD);
    return N + g;
  }, []), X = R((a, l, N) => {
    const g = Array.from(a).filter(
      (W) => W.classList.contains(`cyber-arrow-${l}`)
    ), k = Math.min(N, g.length);
    return l === "up" ? g.slice(-k) : g.slice(0, k);
  }, []), J = R((a, l, N) => {
    const g = Math.min(l * m, te.MAX_ANIMATION_SPEED), k = window.innerWidth < te.MOBILE_BREAKPOINT, W = Math.max(300 / g, te.MIN_GLOW_DURATION) * (k ? 1.5 : 1), _ = Math.max(40, 80 / g) * (k ? 1.25 : 1), L = N === "up" ? [...a].reverse() : a;
    L.forEach((O) => {
      O.style.opacity = "0.3";
    }), L.forEach((O, I) => {
      const re = I * _, we = setTimeout(() => {
        O.style.opacity = "1";
        const Ne = setTimeout(() => {
          O.style.opacity = "0.3";
        }, W);
        f.current.push(Ne);
      }, re);
      f.current.push(we);
    });
  }, [m]), G = R(() => {
    if (!x.current) return;
    const { isScrolling: a, direction: l, velocity: N, scrollDistance: g } = C, k = x.current.querySelectorAll(".cyber-arrow"), W = x.current.querySelectorAll(".cyber-line");
    if (a && l) {
      W.forEach((L) => {
        L.style.opacity = "0";
      });
      const _ = z(N, g);
      if (_ !== S.current) {
        f.current.forEach((O) => clearTimeout(O)), f.current = [], k.forEach((O) => {
          O.style.opacity = "0";
        });
        const L = X(Array.from(k), l, _);
        J(L, N, l), S.current = _;
      }
    } else
      f.current.forEach((_) => clearTimeout(_)), f.current = [], S.current = 0, k.forEach((_) => {
        _.style.opacity = "0";
      }), b && W.forEach((_) => {
        _.style.opacity = "0.6";
      });
  }, [C, b, J, z, X]), B = F(null), q = R(() => {
    if (o || !y && !i.current) return;
    const a = Date.now(), l = y ? {
      currentScrollTop: window.scrollY,
      scrollHeight: document.body.scrollHeight,
      clientHeight: window.innerHeight
    } : {
      currentScrollTop: i.current.scrollTop,
      scrollHeight: i.current.scrollHeight,
      clientHeight: i.current.clientHeight
    }, N = a - w.current, g = l.currentScrollTop - d.current, W = Math.abs(g) / Math.max(N, 1) * te.VELOCITY_MULTIPLIER, _ = g > 0 ? "down" : g < 0 ? "up" : null, L = l.currentScrollTop / (l.scrollHeight - l.clientHeight);
    b || $(!0);
    const O = window.innerWidth < te.MOBILE_BREAKPOINT;
    O && !j && T(!0), E((I) => ({
      isScrolling: !0,
      direction: _,
      velocity: W,
      position: L,
      scrollDistance: I.direction !== _ ? Math.abs(g) : I.scrollDistance + Math.abs(g)
    })), h.current && clearTimeout(h.current), p.current && clearTimeout(p.current), h.current = setTimeout(() => {
      f.current.forEach((I) => clearTimeout(I)), f.current = [], E((I) => ({
        ...I,
        isScrolling: !1,
        velocity: 0,
        scrollDistance: 0
      })), O && (p.current = setTimeout(() => {
        T(!1);
      }, te.MOBILE_HIDE_DELAY));
    }, te.STABLE_TIMEOUT), w.current = a, d.current = l.currentScrollTop;
  }, [o, y, b, j]), s = R(() => {
    B.current === null && (B.current = requestAnimationFrame(() => {
      B.current = null, q();
    }));
  }, [q]);
  return Q(() => {
    if (o || !y && !i.current) return;
    const a = K(), l = y ? window : i.current;
    return l.addEventListener("scroll", s, { passive: !0 }), () => {
      l.removeEventListener("scroll", s), h.current && clearTimeout(h.current), p.current && clearTimeout(p.current), f.current.forEach((N) => clearTimeout(N)), B.current !== null && (cancelAnimationFrame(B.current), B.current = null), a?.();
    };
  }, [K, s, o, y]), Q(() => {
    G();
  }, [G]), i;
}, at = ({ children: t, position: r = "top-right", defaultDuration: m = 2500 }) => {
  const [o, n] = A([]), c = R(
    (d, h, f, p = {}) => {
      const C = Date.now().toString(), { autoHide: E = !0, duration: b = m } = p;
      return n(($) => [...$, { id: C, type: d, title: h, message: f }]), E && setTimeout(() => {
        n(
          ($) => $.map((j) => j.id === C ? { ...j, isClosing: !0 } : j)
        ), setTimeout(() => {
          n(($) => $.filter((j) => j.id !== C));
        }, 500);
      }, b), C;
    },
    [m]
  ), u = R((d) => {
    n(
      (h) => h.map((f) => f.id === d ? { ...f, isClosing: !0 } : f)
    ), setTimeout(() => {
      n((h) => h.filter((f) => f.id !== d));
    }, 500);
  }, []), i = R(() => {
    n([]);
  }, []), x = R((d, h) => {
    n(
      (f) => f.map((p) => p.id === d ? { ...p, width: h } : p)
    );
  }, []), w = {
    notifications: o,
    showNotification: c,
    hideNotification: u,
    clearAllNotifications: i
  };
  return /* @__PURE__ */ e.jsxs(ve.Provider, { value: w, children: [
    t,
    o.length > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `fixed z-50 ${Xe(r)}`,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "true",
        children: o.map((d, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute",
            style: {
              right: r.includes("right") ? 0 : void 0,
              left: r.includes("left") ? 0 : void 0,
              top: `${h * 70}px`,
              width: d.width ? `${d.width}px` : "auto"
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `transform transition-all duration-500 ease-out scale-75 opacity-90 w-full ${r.includes("right") ? "flex justify-end" : "flex justify-start"} ${d.isClosing ? `${r.includes("right") ? "translate-x-full" : "-translate-x-full"} opacity-0` : "translate-x-0 opacity-90"}`,
                style: {
                  whiteSpace: "nowrap",
                  transformOrigin: r.includes("right") ? "right center" : "left center",
                  transform: d.isClosing ? `translateX(${r.includes("right") ? "100%" : "-100%"}) scale(0.75)` : `translateX(${d.width ? "0px" : r.includes("right") ? "100%" : "-100%"}) scale(0.75)`
                },
                ref: (f) => {
                  if (f && !d.width) {
                    const p = f.scrollWidth;
                    x(d.id, p);
                  }
                },
                children: /* @__PURE__ */ e.jsx(
                  de,
                  {
                    type: d.type,
                    title: d.title,
                    message: d.message,
                    onClose: () => u(d.id),
                    size: "sm"
                  }
                )
              }
            )
          },
          d.id
        ))
      }
    )
  ] });
}, Xe = (t) => {
  const r = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  };
  return r[t] || r["top-right"];
}, nt = "1.3.2";
export {
  ue as Badge,
  Y as Button,
  se as Card,
  _e as Carousel,
  Fe as CircularProgress,
  at as CyberNotificationProvider,
  et as ElementsTab,
  tt as FeedbackTab,
  Je as HomeTab,
  ne as Image,
  be as Input,
  Qe as InteractiveTab,
  Ge as LinearProgress,
  ae as Modal,
  de as Notification,
  ee as RESPONSIVE_SIZE_MAPS,
  He as SegmentedProgress,
  Ue as Select,
  Ye as Skeleton,
  st as TabNavigation,
  Be as Toggle,
  Ke as combineResponsiveClasses,
  Z as getResponsiveClasses,
  De as useCyberNotifications,
  rt as useCyberScrollbar,
  nt as version
};
//# sourceMappingURL=index.es.js.map
