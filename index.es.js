import Ce, { useCallback as A, useState as L, useEffect as Q, useId as ge, memo as me, useRef as F, useMemo as ne, createContext as Ee, useContext as Se } from "react";
import { createPortal as ye } from "react-dom";
var ce = { exports: {} }, le = {};
var he;
function ke() {
  if (he) return le;
  he = 1;
  var s = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(o, n, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      i = {};
      for (var l in n)
        l !== "key" && (i[l] = n[l]);
    } else i = n;
    return n = i.ref, {
      $$typeof: s,
      type: o,
      key: d,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return le.Fragment = r, le.jsx = u, le.jsxs = u, le;
}
var ie = {};
var fe;
function Te() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === H ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case b:
          return "Fragment";
        case j:
          return "Profiler";
        case $:
          return "StrictMode";
        case _:
          return "Suspense";
        case D:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case S:
            return "Portal";
          case E:
            return t.displayName || "Context";
          case T:
            return (t._context.displayName || "Context") + ".Consumer";
          case g:
            var a = t.render;
            return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case w:
            return a = t.displayName || null, a !== null ? a : s(t.type) || "Memo";
          case M:
            a = t._payload, t = t._init;
            try {
              return s(t(a));
            } catch {
            }
        }
      return null;
    }
    function r(t) {
      return "" + t;
    }
    function u(t) {
      try {
        r(t);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var y = a.error, f = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return y.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), r(t);
      }
    }
    function o(t) {
      if (t === b) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === M)
        return "<...>";
      try {
        var a = s(t);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var t = G.A;
      return t === null ? null : t.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function d(t) {
      if (q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function l(t, a) {
      function y() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: y,
        configurable: !0
      });
    }
    function m() {
      var t = s(this.type);
      return V[t] || (V[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function N(t, a, y, f, R, U) {
      var k = y.ref;
      return t = {
        $$typeof: C,
        type: t,
        key: a,
        props: y,
        _owner: f
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function c(t, a, y, f, R, U) {
      var k = a.children;
      if (k !== void 0)
        if (f)
          if (W(k)) {
            for (f = 0; f < k.length; f++)
              x(k[f]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(k);
      if (q.call(a, "key")) {
        k = s(t);
        var O = Object.keys(a).filter(function(I) {
          return I !== "key";
        });
        f = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", v[k + f] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          k,
          O,
          k
        ), v[k + f] = !0);
      }
      if (k = null, y !== void 0 && (u(y), k = "" + y), d(a) && (u(a.key), k = "" + a.key), "key" in a) {
        y = {};
        for (var P in a)
          P !== "key" && (y[P] = a[P]);
      } else y = a;
      return k && l(
        y,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), N(
        t,
        k,
        y,
        n(),
        R,
        U
      );
    }
    function x(t) {
      h(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === M && (t._payload.status === "fulfilled" ? h(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function h(t) {
      return typeof t == "object" && t !== null && t.$$typeof === C;
    }
    var p = Ce, C = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), E = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), G = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, W = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var J, V = {}, z = p.react_stack_bottom_frame.bind(
      p,
      i
    )(), Z = Y(o(i)), v = {};
    ie.Fragment = b, ie.jsx = function(t, a, y) {
      var f = 1e4 > G.recentlyCreatedOwnerStacks++;
      return c(
        t,
        a,
        y,
        !1,
        f ? Error("react-stack-top-frame") : z,
        f ? Y(o(t)) : Z
      );
    }, ie.jsxs = function(t, a, y) {
      var f = 1e4 > G.recentlyCreatedOwnerStacks++;
      return c(
        t,
        a,
        y,
        !0,
        f ? Error("react-stack-top-frame") : z,
        f ? Y(o(t)) : Z
      );
    };
  })()), ie;
}
var pe;
function $e() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? ce.exports = ke() : ce.exports = Te()), ce.exports;
}
var e = $e();
const xe = (s) => typeof s == "object" && s !== null, K = (s, r) => {
  if (!xe(s))
    return r[s] || "";
  const u = [];
  if (s.base && r[s.base] && u.push(r[s.base]), s.sm && r[s.sm]) {
    const o = r[s.sm].split(" ").map((n) => `sm:${n}`);
    u.push(...o);
  }
  if (s.md && r[s.md]) {
    const o = r[s.md].split(" ").map((n) => `md:${n}`);
    u.push(...o);
  }
  if (s.lg && r[s.lg]) {
    const o = r[s.lg].split(" ").map((n) => `lg:${n}`);
    u.push(...o);
  }
  if (s.xl && r[s.xl]) {
    const o = r[s.xl].split(" ").map((n) => `xl:${n}`);
    u.push(...o);
  }
  if (s["2xl"] && r[s["2xl"]]) {
    const o = r[s["2xl"]].split(" ").map((n) => `2xl:${n}`);
    u.push(...o);
  }
  return u.join(" ");
}, Ke = (...s) => s.filter(Boolean).join(" "), ee = {
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
}, Ae = (s, r, u) => {
  if (!xe(s))
    return s ?? u;
  let o = s.base ?? u;
  const n = ["sm", "md", "lg", "xl", "2xl"];
  for (const i of n) {
    const d = Re[i];
    r >= d && s[i] !== void 0 && (o = s[i]);
  }
  return o;
}, Le = (s, r) => {
  const u = A(
    () => typeof window > "u" ? r : Ae(s, window.innerWidth, r),
    [r, s]
  ), [o, n] = L(u);
  return Q(() => {
    if (!xe(s)) {
      n(s ?? r);
      return;
    }
    const i = () => n(u());
    return i(), window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [r, u, s]), o;
}, X = ({
  variant: s = "primary",
  size: r = "md",
  className: u = "",
  disabled: o = !1,
  children: n,
  ...i
}) => {
  const d = [
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
  ].join(" "), l = (x) => K(x, ee.button), m = (x, h) => ({
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
  })[x][h ? "disabled" : "enabled"], N = [
    d,
    l(r),
    m(s, o),
    u
  ].filter(Boolean).join(" "), c = s === "primary" && !o;
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: N,
      disabled: o,
      ...i,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "relative z-10", children: n }),
        c && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
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
      X,
      {
        variant: "primary",
        size: { base: "md", lg: "lg" },
        onClick: () => window.open("https://patrickkuei.github.io/CyberUI/storybook/", "_blank"),
        children: "View Documentation"
      }
    ),
    /* @__PURE__ */ e.jsx(
      X,
      {
        variant: "secondary",
        size: { base: "md", lg: "lg" },
        onClick: () => window.open("https://github.com/patrickkuei/CyberUI", "_blank"),
        children: "GitHub Repository"
      }
    )
  ] })
] }), be = ({
  variant: s = "primary",
  size: r = "md",
  label: u,
  helperText: o,
  error: n,
  leftIcon: i,
  rightIcon: d,
  className: l = "",
  disabled: m = !1,
  ...N
}) => {
  const c = ge(), x = N.id || c, h = [
    "w-full",
    "rounded-lg",
    "bg-surface",
    "text-default",
    "placeholder-muted",
    "transition-all",
    "duration-300",
    "focus:outline-none",
    m ? "cursor-not-allowed opacity-60" : "cursor-text"
  ].join(" "), p = (E) => K(E, ee.input), C = (E) => {
    const g = p(E);
    return i && d ? `pl-10 pr-10 ${g}` : i ? `pl-10 pr-4 ${g}` : d ? `pl-4 pr-10 ${g}` : `px-4 ${g}`;
  }, S = (E, g, _) => g ? "border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base" : _ ? {
    primary: "border-2 border-accent/20 shadow-none",
    secondary: "border-2 border-secondary/20 shadow-none",
    danger: "border-2 border-error/20 shadow-none",
    ghost: "border border-border-default shadow-none"
  }[E] : {
    primary: "border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",
    secondary: "border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",
    danger: "border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",
    ghost: "border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"
  }[E], b = (E) => ({
    primary: "text-accent",
    secondary: "text-secondary",
    danger: "text-error",
    ghost: "text-muted"
  })[E], $ = [
    h,
    C(r),
    S(s, !!n, m),
    l
  ].filter(Boolean).join(" "), j = b(s), T = n ? `${x}-error` : o ? `${x}-help` : void 0;
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
    u && /* @__PURE__ */ e.jsx("label", { htmlFor: x, className: "block text-sm font-medium text-default", children: u }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      i && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-y-0 left-0 flex items-center pl-3 ${j}`, children: i }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: $,
          disabled: m,
          id: x,
          "aria-invalid": !!n,
          "aria-describedby": T,
          ...N
        }
      ),
      d && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-y-0 right-0 flex items-center pr-3 ${j}`, children: d })
    ] }),
    (o || n) && /* @__PURE__ */ e.jsx("div", { id: n ? `${x}-error` : `${x}-help`, className: `text-xs font-mono ${n ? "text-error" : "text-muted"}`, children: n || o })
  ] });
}, se = ({
  variant: s = "default",
  size: r = "md",
  title: u,
  titleBorder: o = !0,
  children: n,
  className: i = "",
  ...d
}) => {
  const l = (c) => K(c, ee.card), m = (c) => {
    const x = l(r);
    return {
      default: `bg-base border border-border-default rounded-xl ${x}`,
      accent: `bg-surface border-2 border-accent rounded-xl shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform ${x}`,
      small: `bg-base rounded-lg border border-border-default ${x}`
    }[c];
  }, N = (c) => c ? "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2" : "text-xl font-semibold text-secondary mb-4";
  return /* @__PURE__ */ e.jsxs("div", { className: `${m(s)} ${i}`, ...d, children: [
    u && /* @__PURE__ */ e.jsx("h3", { className: N(o), children: u }),
    n
  ] });
}, _e = {
  openDuration: 50,
  closeDuration: 350,
  cyberpunkEffects: !0
}, ae = me(
  ({
    src: s,
    alt: r,
    size: u = "md",
    preview: o = !0,
    fallback: n,
    placeholder: i,
    className: d = "",
    animation: l,
    eager: m = !1,
    previewClassName: N = "",
    onPreviewOpen: c,
    onPreviewClose: x,
    onLoad: h,
    onError: p,
    ...C
  }) => {
    const S = { ..._e, ...l }, [b, $] = L(!1), [j, T] = L(!1), [E, g] = L(!1), [_, D] = L(!0), [w, M] = L(!1), [B, H] = L(!1), G = F(null), q = F(null), W = A(
      (f) => K(f, ee.card),
      []
    ), Y = A(
      (f) => {
        D(!1), M(!1), h?.(f);
      },
      [h]
    ), J = A(
      (f) => {
        D(!1), n && !B ? (H(!0), M(!1)) : M(!0), p?.(f);
      },
      [p, n, B]
    ), V = A(() => {
      o && !w && (g(!0), $(!0), c?.(), setTimeout(() => {
        g(!1);
      }, S.openDuration));
    }, [o, w, c, S.openDuration]), z = A(() => {
      T(!0), x?.(), setTimeout(() => {
        $(!1), T(!1);
      }, S.closeDuration);
    }, [x, S.closeDuration]), Z = A(
      (f) => {
        (f.target === G.current || f.target === f.currentTarget) && z();
      },
      [z]
    ), v = A(
      (f) => {
        f.key === "Escape" && z();
      },
      [z]
    );
    Q(() => {
      if (b) {
        document.addEventListener("keydown", v);
        const f = document.body.style.overflow, R = document.documentElement.style.scrollbarGutter, U = document.body.style.paddingRight, k = window.innerWidth - document.documentElement.clientWidth;
        return document.body.style.overflow = "hidden", document.body.style.paddingRight = `${k}px`, document.documentElement.style.scrollbarGutter = "auto", () => {
          document.removeEventListener("keydown", v), document.body.style.overflow = f, document.body.style.paddingRight = U, document.documentElement.style.scrollbarGutter = R;
        };
      }
    }, [b, v]);
    const t = ne(
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
        o && !w ? "cursor-pointer hover:scale-105 hover:border-accent hover:shadow-lg-accent focus:outline-none focus:ring-4 focus:ring-accent/50" : "",
        W(u),
        d
      ].filter(Boolean).join(" "),
      [o, w, W, u, d]
    ), a = ne(
      () => ({
        role: o ? "button" : "img",
        tabIndex: o && !w ? 0 : -1,
        "aria-label": o ? `${r}. Click to enlarge` : r,
        "aria-expanded": o ? b : void 0,
        onKeyDown: o && !w ? (f) => {
          (f.key === "Enter" || f.key === " ") && (f.preventDefault(), V());
        } : void 0
      }),
      [o, w, r, b, V]
    ), y = ne(
      () => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: t,
          onClick: V,
          ...a,
          children: [
            _ && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute m-0 inset-0 flex items-center justify-center bg-surface border-2 border-accent/20",
                role: "status",
                "aria-label": "Loading image",
                children: i || /* @__PURE__ */ e.jsx("div", { className: "animate-pulse bg-gradient-to-r from-accent/20 to-secondary/20 w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-muted text-sm", children: "Loading..." }) })
              }
            ),
            w ? /* @__PURE__ */ e.jsx(
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
            ) : B ? /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: q,
                src: n,
                alt: `${r} (fallback)`,
                className: "w-full h-full m-0 object-cover transition-opacity duration-300",
                style: { opacity: _ ? 0 : 1 },
                onLoad: Y,
                onError: () => {
                  M(!0), H(!1);
                },
                loading: m ? "eager" : "lazy",
                decoding: "async",
                ...C
              }
            ) : /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: q,
                src: s,
                alt: r,
                className: "w-full h-full m-0 object-cover transition-opacity duration-300",
                style: { opacity: _ ? 0 : 1 },
                onLoad: Y,
                onError: J,
                loading: m ? "eager" : "lazy",
                decoding: "async",
                ...C
              }
            ),
            o && !_ && !w && /* @__PURE__ */ e.jsx(
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
        t,
        V,
        a,
        _,
        i,
        w,
        B,
        n,
        r,
        Y,
        m,
        C,
        s,
        J,
        o
      ]
    );
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      y,
      b && ye(
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: G,
            className: `fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${N} ${j ? "bg-black/0 backdrop-blur-none opacity-0 duration-300" : E ? "bg-black/80 backdrop-blur-sm opacity-100 duration-500" : "bg-black/80 backdrop-blur-sm opacity-100 duration-300"}`,
            style: {
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              maxWidth: "none"
            },
            onClick: Z,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `Preview: ${r}`,
            children: [
              S.cyberpunkEffects && /* @__PURE__ */ e.jsx(
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
                  onClick: Z,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: z,
                        className: `absolute top-4 right-4 text-white hover:text-accent/80 transition-all duration-300 font-bold z-20 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform ${j ? "bg-black/0 scale-50 rotate-180 opacity-0" : E ? "bg-black/50 scale-0 rotate-0 opacity-0 duration-500" : "bg-black/50 hover:bg-accent/20 scale-100 rotate-0 opacity-100 hover:scale-110"}`,
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
                        className: `relative max-w-full max-h-full flex items-center justify-center transition-all ease-out ${j ? "scale-75 opacity-0 rotate-1 duration-300" : E ? "scale-95 opacity-0 rotate-0 duration-500" : "scale-100 opacity-100 rotate-0 duration-300"}`,
                        onClick: (f) => f.stopPropagation(),
                        children: [
                          S.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: `absolute inset-0 rounded-lg border-2 transition-all duration-300 ${j ? "border-transparent shadow-none" : "border-accent shadow-lg-accent animate-pulse"}`,
                              "aria-hidden": "true"
                            }
                          ),
                          S.cyberpunkEffects && /* @__PURE__ */ e.jsx(
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
                              src: B ? n : s,
                              alt: B ? `${r} (fallback)` : r,
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
                                B ? `${r} (fallback)` : r,
                                S.cyberpunkEffects && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 text-accent opacity-20 animate-pulse", children: B ? `${r} (fallback)` : r })
                              ] })
                            }
                          ),
                          S.cyberpunkEffects && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
ae.displayName = "CyberUI.Image";
const Me = ({
  images: s,
  currentIndex: r,
  onChange: u,
  size: o = "md",
  autoPlay: n = !0,
  interval: i = 3e3,
  infinite: d = !0,
  transition: l = "slide",
  objectFit: m = "cover",
  showArrows: N = !0,
  showIndicators: c = !0,
  className: x = "",
  disableImagePreview: h = !1,
  glitchRate: p = 1,
  onBeforeChange: C,
  onAfterChange: S
}) => {
  const [b, $] = L(!1), [j, T] = L(n), [E, g] = L(!0), _ = ne(
    () => K(o, ee.carousel),
    [o]
  ), D = "w-full h-full", w = A(
    (v) => {
      if (v === r || b) return;
      const t = l === "signal-glitch" && (typeof p == "boolean" ? p : Math.random() < p);
      g(t), $(!0), C?.(r, v), setTimeout(() => {
        u(v), $(!1), S?.(v);
      }, l === "slide" ? 0 : l === "signal-glitch" && t ? 600 : 250);
    },
    [
      r,
      b,
      u,
      C,
      S,
      l,
      p
    ]
  );
  Q(() => {
    if (!j || s.length <= 1) return;
    const v = setInterval(() => {
      const t = d ? (r + 1) % s.length : Math.min(r + 1, s.length - 1);
      if (!d && t === s.length - 1) {
        T(!1);
        return;
      }
      w(t);
    }, i);
    return () => clearInterval(v);
  }, [
    j,
    r,
    s.length,
    d,
    i,
    w
  ]);
  const M = A(() => {
    if (s.length <= 1) return;
    const v = d ? (r - 1 + s.length) % s.length : Math.max(r - 1, 0);
    T(!1), w(v);
  }, [r, s.length, d, w]), B = A(() => {
    if (s.length <= 1) return;
    const v = d ? (r + 1) % s.length : Math.min(r + 1, s.length - 1);
    T(!1), w(v);
  }, [r, s.length, d, w]), H = A(
    (v) => {
      T(!1), w(v);
    },
    [w]
  );
  Q(() => {
    const v = (t) => {
      t.key === "ArrowLeft" && M(), t.key === "ArrowRight" && B();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [M, B]);
  const G = () => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex h-full transition-transform duration-500 ease-in-out",
      style: {
        transform: `translateX(-${r * 100}%)`,
        willChange: "transform"
      },
      children: s.map((v, t) => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
        ae,
        {
          src: v.src,
          alt: v.alt,
          fallback: v.fallbackSrc,
          className: D,
          size: "lg",
          preview: !h,
          loading: t <= 1 ? "eager" : "lazy",
          onPreviewOpen: () => T(!1),
          onPreviewClose: () => T(n)
        }
      ) }, t))
    }
  ), q = () => /* @__PURE__ */ e.jsx(e.Fragment, { children: s.map((v, t) => {
    const a = t === r, y = l === "fade" ? {
      opacity: a ? 1 : 0,
      transition: "opacity 500ms ease-in-out",
      willChange: "opacity"
    } : l === "matrix" ? {
      opacity: a ? 1 : 0,
      transform: a ? "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0) skew(0deg) perspective(1000px)" : b ? "scale(0.6) rotateX(35deg) rotateY(15deg) rotateZ(-3deg) translateZ(-80px) skew(5deg, 2deg) perspective(1000px)" : "scale(0.92) rotateX(8deg) rotateY(2deg) translateZ(-20px) skew(1deg) perspective(1000px)",
      filter: a ? "brightness(1) contrast(1) hue-rotate(0deg) saturate(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))" : b ? "brightness(0.1) contrast(4) hue-rotate(270deg) saturate(3) blur(2px) drop-shadow(0 0 20px rgba(255, 0, 93, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 249, 0.6))" : "brightness(0.7) contrast(1.5) hue-rotate(120deg) saturate(1.4) drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))",
      transition: "all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      willChange: "transform, opacity, filter",
      boxShadow: a ? "0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.15), 0 0 60px rgba(0, 255, 136, 0.2)" : b ? "0 0 50px rgba(255, 0, 93, 1), 0 0 100px rgba(0, 255, 249, 0.8), 0 0 150px rgba(255, 251, 0, 0.6), inset 0 0 50px rgba(255, 0, 93, 0.3), inset 0 0 80px rgba(0, 255, 249, 0.2), 0 0 0 3px rgba(255, 0, 93, 0.8), 0 0 0 6px rgba(0, 255, 249, 0.6), 0 0 200px rgba(255, 251, 0, 0.3)" : "0 0 20px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1), 0 0 40px rgba(0, 255, 136, 0.2)"
    } : {};
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-0 w-full h-full",
        style: {
          ...y,
          pointerEvents: a ? "auto" : "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            ae,
            {
              src: v.src,
              alt: v.alt,
              fallback: v.fallbackSrc,
              className: D,
              size: "lg",
              preview: !h,
              loading: t <= 1 ? "eager" : "lazy",
              onPreviewOpen: () => T(!1),
              onPreviewClose: () => T(n)
            }
          ),
          l === "matrix" && Y(a, b)
        ]
      },
      t
    );
  }) }), W = () => /* @__PURE__ */ e.jsx(e.Fragment, { children: s.map((v, t) => {
    const a = t === r, y = t === (r - 1 + s.length) % s.length, f = b && l === "signal-glitch" && E ? {
      opacity: a ? 1 : y ? 0.8 : 0,
      animation: a ? "signal-image-flicker-in 1s ease-out forwards" : y ? "signal-image-flicker-out 1s ease-out forwards" : "none",
      willChange: "opacity",
      pointerEvents: b && !a ? "none" : "auto",
      transform: b ? "translateZ(0)" : "none"
      // Reduce jumping with hardware acceleration
    } : {
      opacity: a ? 1 : 0,
      transition: "opacity 250ms ease-in-out",
      willChange: "opacity",
      pointerEvents: a ? "auto" : "none"
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-0 w-full h-full",
        style: f,
        children: [
          /* @__PURE__ */ e.jsx(
            ae,
            {
              src: v.src,
              alt: v.alt,
              fallback: v.fallbackSrc,
              className: D,
              size: "lg",
              preview: !h && !(b && l === "signal-glitch" && E),
              loading: t <= 1 ? "eager" : "lazy",
              onPreviewOpen: () => T(!1),
              onPreviewClose: () => T(n)
            }
          ),
          l === "signal-glitch" && b && E && J(a)
        ]
      },
      t
    );
  }) }), Y = (v, t) => /* @__PURE__ */ e.jsx(e.Fragment, { children: t && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: v ? (
    // Active image gets subtle enhancement effects
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-30" })
  ) : (
    // Transitioning image gets more dramatic effects
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10 opacity-50" })
  ) }) }), J = (v) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute inset-0 pointer-events-none z-5 ${v ? "opacity-30" : "opacity-15"}`,
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
  ] }), V = () => N && s.length > 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: M,
        disabled: !d && r === 0 || b && l === "signal-glitch" && E,
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
        onClick: B,
        disabled: !d && r === s.length - 1 || b && l === "signal-glitch" && E,
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
  ] }), z = () => c && s.length > 1 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4 space-x-4", children: s.map((v, t) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => H(t),
      disabled: b && l === "signal-glitch" && E,
      className: "group relative transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",
      style: {
        width: "24px",
        height: "24px"
      },
      "aria-label": `Go to slide ${t + 1}`,
      children: [
        t === r && /* @__PURE__ */ e.jsx(
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
            className: `absolute inset-0 border-2 transition-all duration-300 ${t === r ? "border-primary bg-primary/30 shadow-lg-primary animate-[rgbBorder_1.5s_linear_infinite]" : "border-accent bg-surface/50 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-primary group-hover:animate-[rgbBorder_1.5s_linear_infinite]"}`,
            style: {
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            }
          }
        ),
        t === r && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-2 bg-primary/60 animate-pulse",
            style: {
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              animation: "rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"
            }
          }
        ),
        t === r && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 opacity-80", children: [
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
    t
  )) });
  if (s.length === 0)
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${_} w-full bg-surface border border-accent rounded-lg flex items-center justify-center ${x}`,
        children: /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "No images to display" })
      }
    );
  const Z = s[r];
  return /* @__PURE__ */ e.jsxs("div", { className: `relative w-full ${x}`, children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative w-full overflow-hidden rounded-lg border border-accent bg-surface ${_}`,
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
              className: `relative w-full h-full overflow-hidden carousel-${m}`,
              children: [
                l === "slide" && G(),
                (l === "fade" || l === "matrix") && q(),
                l === "signal-glitch" && W()
              ]
            }
          ),
          Z.caption && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4", children: /* @__PURE__ */ e.jsx("p", { className: "text-white text-sm font-medium", children: Z.caption }) }),
          V()
        ]
      }
    ),
    z()
  ] });
}, Ie = me(Me), Oe = {
  openDuration: 600,
  closeDuration: 400,
  crtEffects: !0
}, Pe = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-none w-full h-full"
}, re = me(
  ({
    isOpen: s,
    onClose: r,
    title: u,
    children: o,
    footer: n,
    onCancel: i,
    onConfirm: d,
    cancelText: l = "Cancel",
    confirmText: m = "Confirm",
    confirmLoading: N = !1,
    showCancel: c = !0,
    showConfirm: x = !0,
    size: h = "md",
    closeOnOverlayClick: p = !0,
    closeOnEscape: C = !0,
    animation: S,
    className: b = "",
    overlayClassName: $ = "",
    showCloseButton: j = !0,
    onOpen: T,
    onCRTBootComplete: E
  }) => {
    const g = ne(
      () => ({ ...Oe, ...S }),
      [S]
    ), [_, D] = L(!1), [w, M] = L(!0), B = F(null), H = F(null), G = F(null), q = F(`modal-title-${Math.random().toString(36).slice(2)}`), W = A(() => {
      D(!0), setTimeout(() => {
        D(!1), M(!0), r();
      }, g.closeDuration);
    }, [r, g.closeDuration]);
    Q(() => {
      s && !_ && (G.current = document.activeElement || null, M(!0), T?.(), setTimeout(() => {
        M(!1), E?.(), H.current?.focus();
      }, g.openDuration));
    }, [
      s,
      _,
      T,
      E,
      g.openDuration
    ]);
    const Y = A(() => {
      i?.(), W();
    }, [i, W]), J = A(() => {
      d?.(), W();
    }, [d, W]), V = A(
      (v) => {
        p && (v.target === B.current || v.target === v.currentTarget) && W();
      },
      [W, p]
    ), z = A(
      (v) => {
        C && v.key === "Escape" && W();
      },
      [W, C]
    );
    Q(() => {
      if (s) {
        document.addEventListener("keydown", z);
        const v = document.body.style.overflow, t = window.innerWidth - document.documentElement.clientWidth;
        return document.body.style.overflow = "hidden", document.body.style.paddingRight = `${t}px`, () => {
          document.removeEventListener("keydown", z), document.body.style.overflow = v, document.body.style.paddingRight = "", G.current?.focus?.();
        };
      }
    }, [s, z]);
    const Z = ne(
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
        Pe[h],
        g.crtEffects && w ? "animate-crt-power-on border-accent shadow-lg-accent" : g.crtEffects && _ ? "animate-crt-power-off border-accent shadow-lg-accent" : _ ? "scale-95 opacity-0 border-accent/20" : w ? "scale-105 opacity-90 border-accent shadow-input-accent/50" : "scale-100 opacity-100 animate-rgb-glow",
        b
      ].filter(Boolean).join(" "),
      [h, g.crtEffects, _, w, b]
    );
    return s ? ye(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: B,
          className: `fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${$} ${_ ? "bg-black/0 backdrop-blur-none opacity-0 duration-800" : w ? "bg-black/30 backdrop-blur-md opacity-100 duration-500" : "bg-black/30 backdrop-blur-sm opacity-100 duration-300"}`,
          style: {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh"
          },
          onClick: V,
          "aria-hidden": !0,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: H,
              className: Z,
              onClick: (v) => v.stopPropagation(),
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": u ? q.current : void 0,
              tabIndex: -1,
              children: [
                j && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: W,
                    className: `absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${_ ? "scale-0 rotate-180 opacity-0" : w ? "scale-0 opacity-0" : "scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,
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
                u && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `px-6 py-4 border-b border-accent/20 flex-shrink-0 transition-all duration-300 ${w ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`,
                    children: /* @__PURE__ */ e.jsx("h2", { id: q.current, className: "text-lg font-semibold text-primary", children: u })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `flex-1 overflow-auto p-6 transition-all duration-500 ${w ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`,
                    children: o
                  }
                ),
                (n || i || d) && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `px-6 py-4 border-t border-accent/20 flex-shrink-0 transition-all duration-300 ${w ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`,
                    children: n || /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-muted text-sm font-mono", children: "> ESC to abort" }),
                      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
                        c && i && /* @__PURE__ */ e.jsx(X, { variant: "ghost", size: "sm", onClick: Y, children: l }),
                        x && d && /* @__PURE__ */ e.jsx(
                          X,
                          {
                            variant: "primary",
                            size: "sm",
                            onClick: J,
                            disabled: N,
                            children: m
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
re.displayName = "CyberUI.Modal";
const ve = Ee(void 0), De = () => {
  const s = Se(ve);
  if (s === void 0)
    throw new Error(
      "useCyberNotifications must be used within a CyberNotificationProvider"
    );
  return s;
}, Qe = () => {
  const [s, r] = L(""), [u, o] = L(0), [n, i] = L(!1), [d, l] = L(!1), [m, N] = L(!1), [c, x] = L(!1), [h, p] = L(!1), [C, S] = L(!1), { showNotification: b } = De(), $ = [
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
          value: s,
          onChange: (T) => r(T.target.value),
          helperText: s.length > 0 ? `Input: ${s.length} characters` : "Awaiting neural input..."
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
        /* @__PURE__ */ e.jsx(X, { variant: "primary", onClick: () => i(!0), children: "Execute Protocol" }),
        /* @__PURE__ */ e.jsx(X, { variant: "secondary", onClick: () => l(!0), children: "Scan System" }),
        /* @__PURE__ */ e.jsx(X, { variant: "danger", onClick: () => N(!0), children: "Emergency Stop" }),
        /* @__PURE__ */ e.jsx(X, { variant: "ghost", onClick: () => x(!0), children: "Run Diagnostics" })
      ] }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2", children: "System Status: Offline" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e.jsx(X, { variant: "primary", disabled: !0, children: "System Offline" }),
        /* @__PURE__ */ e.jsx(X, { variant: "secondary", disabled: !0, children: "Access Denied" }),
        /* @__PURE__ */ e.jsx(X, { variant: "danger", disabled: !0, children: "Critical Error" }),
        /* @__PURE__ */ e.jsx(X, { variant: "ghost", disabled: !0, children: "Network Down" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(se, { title: "Visual Data Stream", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-muted text-center", children: "Navigate through archived data streams" }),
      /* @__PURE__ */ e.jsx(
        Ie,
        {
          images: $,
          currentIndex: u,
          onChange: o,
          size: "md",
          transition: "signal-glitch",
          glitchRate: 0.3,
          autoPlay: !0,
          interval: 4e3,
          onBeforeChange: (T, E) => b(
            "warning",
            "SURVEILLANCE.SYS",
            `Switching surveillance feed ${T} → ${E}`
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
          u + 1,
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
          X,
          {
            variant: "primary",
            size: "sm",
            className: "flex-1",
            onClick: () => p(!0),
            children: "Sync"
          }
        ),
        /* @__PURE__ */ e.jsx(
          X,
          {
            variant: "secondary",
            size: "sm",
            className: "flex-1",
            onClick: () => S(!0),
            children: "Monitor"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(
      re,
      {
        isOpen: n,
        onClose: () => i(!1),
        title: "Neural Link Protocol",
        onCancel: () => i(!1),
        onConfirm: () => {
          b(
            "success",
            "NEURAL.EXE",
            "Neural link protocol executed successfully"
          ), i(!1);
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
      re,
      {
        isOpen: d,
        onClose: () => l(!1),
        title: "System Diagnostic Scan",
        onCancel: () => l(!1),
        onConfirm: () => {
          b(
            "success",
            "DIAGNOSTIC.SYS",
            "Deep system scan initiated successfully"
          ), l(!1);
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
      re,
      {
        isOpen: m,
        onClose: () => N(!1),
        title: "⚠️ EMERGENCY SHUTDOWN",
        onCancel: () => N(!1),
        onConfirm: () => {
          b(
            "error",
            "EMERGENCY.SYS",
            "Critical shutdown sequence initiated"
          ), N(!1);
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
      re,
      {
        isOpen: c,
        onClose: () => x(!1),
        title: "Advanced Diagnostics",
        onCancel: () => x(!1),
        onConfirm: () => {
          b(
            "success",
            "DIAGNOSTICS.EXE",
            "Comprehensive system analysis started"
          ), x(!1);
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
      re,
      {
        isOpen: h,
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
      re,
      {
        isOpen: C,
        onClose: () => S(!1),
        title: "Real-time System Monitor",
        onCancel: () => S(!1),
        onConfirm: () => {
          b(
            "success",
            "MONITOR.SYS",
            "Real-time monitoring activated successfully"
          ), S(!1);
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
  variant: s = "primary",
  size: r = "md",
  children: u,
  className: o = "",
  leftIcon: n,
  rightIcon: i,
  clickable: d = !1,
  onClick: l,
  ...m
}) => {
  const N = (h) => K(h, ee.badge), c = (h) => ({
    primary: "text-base bg-primary shadow-lg",
    secondary: "text-base bg-secondary shadow-lg",
    accent: "text-base bg-accent shadow-lg",
    success: "text-base bg-success shadow-lg",
    error: "text-base bg-error shadow-lg",
    warning: "text-base bg-warning shadow-lg"
  })[h], x = (h, p) => !p && !l ? "transition-shadow" : {
    primary: "hover:shadow-primary transition-shadow cursor-pointer",
    secondary: "hover:shadow-secondary transition-shadow cursor-pointer",
    accent: "hover:shadow-lg-accent transition-shadow cursor-pointer",
    success: "hover:shadow-success transition-shadow cursor-pointer",
    error: "hover:shadow-error transition-shadow cursor-pointer",
    warning: "hover:shadow-warning transition-shadow cursor-pointer"
  }[h];
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: `inline-flex items-center ${N(r)} rounded-full font-semibold ${c(s)} ${x(s, d || !!l)} ${o}`,
      onClick: l,
      ...m,
      children: [
        n,
        /* @__PURE__ */ e.jsx("span", { children: u }),
        i
      ]
    }
  );
}, Be = ({
  label: s,
  size: r = "md",
  variant: u = "primary",
  className: o = "",
  checked: n = !1,
  onChange: i,
  disabled: d = !1,
  id: l,
  ...m
}) => {
  const N = (S) => {
    i && i(S.target.checked);
  }, c = (S) => K(S, {
    sm: "w-10 h-5 after:h-4 after:w-4",
    md: "w-14 h-7 after:h-6 after:w-6",
    lg: "w-16 h-8 after:h-7 after:w-7"
  }), x = (S, b) => {
    if (b)
      return "bg-gray-600 peer-checked:bg-gray-500 opacity-50 cursor-not-allowed";
    const $ = {
      primary: "bg-gray-600 peer-checked:bg-linear-(--gradient-accent) peer-focus:ring-primary",
      secondary: "bg-gray-600 peer-checked:bg-secondary peer-focus:ring-secondary",
      accent: "bg-gray-600 peer-checked:bg-accent peer-focus:ring-accent"
    };
    return $[S] || $.primary;
  }, h = [
    "relative inline-flex items-center cursor-pointer",
    d ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  ].join(" "), p = [
    c(r),
    x(u, d),
    "peer-focus:outline-none rounded-full peer",
    "peer-checked:after:translate-x-full peer-checked:after:border-white",
    "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
    "after:bg-white after:rounded-full after:transition-all",
    "transition-colors duration-300"
  ].filter(Boolean).join(" "), C = [
    "flex items-center justify-between",
    s ? "space-x-3" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: C, children: [
    s && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: l,
        className: `text-default font-medium ${d ? "text-muted opacity-50" : "cursor-pointer"}`,
        children: s
      }
    ),
    /* @__PURE__ */ e.jsxs("label", { className: h, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "sr-only peer",
          checked: n,
          onChange: N,
          disabled: d,
          id: l,
          ...m
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: p })
    ] })
  ] });
}, Ue = ({
  label: s,
  size: r = "md",
  variant: u = "primary",
  options: o,
  placeholder: n,
  helperText: i,
  error: d,
  className: l = "",
  disabled: m = !1,
  id: N,
  name: c,
  ...x
}) => {
  const h = ge(), p = N || h, C = c || p, S = (g) => K(g, ee.input), b = (g, _, D) => {
    if (_)
      return "bg-base border-2 border-border-default/30 text-muted/50 cursor-not-allowed opacity-50";
    if (D)
      return "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error";
    const w = {
      primary: "bg-surface border-2 border-border-default text-default focus:ring-2 focus:ring-primary focus:border-primary shadow-primary",
      secondary: "bg-surface border-2 border-secondary text-default focus:ring-2 focus:ring-secondary focus:border-secondary shadow-secondary/30",
      danger: "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error/30",
      ghost: "bg-base border-2 border-accent/20 text-default focus:ring-2 focus:ring-accent focus:border-accent shadow-secondary"
    };
    return w[g] || w.primary;
  }, $ = [
    "appearance-none w-full rounded-lg font-mono transition-all duration-300",
    "focus:outline-none px-4 pr-10",
    S(r),
    b(u, m, !!d),
    l
  ].filter(Boolean).join(" "), j = "relative w-full", T = [
    "block text-sm font-medium mb-2 transition-colors duration-200",
    m ? "text-muted opacity-50" : d ? "text-error" : "text-default"
  ].join(" "), E = [
    "mt-2 text-xs transition-colors duration-200",
    d ? "text-error" : "text-muted"
  ].join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    s && /* @__PURE__ */ e.jsx("label", { htmlFor: p, className: T, children: s }),
    /* @__PURE__ */ e.jsxs("div", { className: j, children: [
      /* @__PURE__ */ e.jsxs(
        "select",
        {
          className: $,
          disabled: m,
          id: p,
          name: C,
          ...x,
          children: [
            n && /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: n }),
            o.map((g) => /* @__PURE__ */ e.jsx(
              "option",
              {
                value: g.value,
                disabled: g.disabled,
                className: "bg-surface text-default",
                children: g.label
              },
              g.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ${m ? "text-muted/50" : d ? "text-error" : "text-accent"}`,
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
    (i || d) && /* @__PURE__ */ e.jsx("div", { className: E, children: d || i })
  ] });
}, et = () => {
  const [s, r] = L(!1), [u, o] = L(""), n = ze.map((i) => ({
    value: i.toLowerCase().replace(/\s+/g, "_"),
    label: i
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
          value: u,
          onChange: (i) => o(i.target.value)
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-default mb-2", children: "Stealth Protocol" }),
        /* @__PURE__ */ e.jsx("div", { className: "bg-surface border border-border-default rounded-lg p-3", children: /* @__PURE__ */ e.jsx(
          Be,
          {
            label: "Enable Ghost Mode",
            variant: "primary",
            checked: s,
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
            ae,
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
            ae,
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
            ae,
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
}, We = (s = {}) => {
  const { min: r = 5, max: u = 95, speed: o = 30 } = s, [n, i] = L(0), [d, l] = L(1);
  return Q(() => {
    const m = setInterval(() => {
      i((N) => {
        let c = N + d;
        return c >= u ? (c = u, l(-1)) : c <= r && (c = r, l(1)), c;
      });
    }, o);
    return () => clearInterval(m);
  }, [d, r, u, o]), n;
}, Fe = ({
  progress: s,
  radius: r,
  className: u = "",
  children: o,
  ariaLabel: n
}) => {
  const i = 2 * Math.PI * r, d = i / 2, l = d * (1 - s / 100), m = d * (1 - s / 100);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative ${u}`,
      role: "progressbar",
      "aria-label": n || "Progress",
      "aria-valuenow": Math.max(0, Math.min(100, s)),
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
                  strokeDasharray: `${d * 0.98} ${i}`,
                  strokeDashoffset: l,
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
                  strokeDasharray: `${d * 0.98} ${i}`,
                  strokeDashoffset: m,
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
  progress: s,
  className: r = "",
  children: u
}) => {
  const {
    SEGMENT_COUNT: o,
    SEGMENT_ANGLE: n,
    GAP_ANGLE: i,
    INNER_RADIUS: d,
    OUTER_RADIUS: l,
    OUTER_TICK_RADIUS: m
  } = je, N = n - i;
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${r}`, children: [
    /* @__PURE__ */ e.jsxs(
      "svg",
      {
        className: "w-full h-full",
        viewBox: "0 0 60 60",
        style: { overflow: "visible" },
        children: [
          [...Array(60)].map((c, x) => {
            const h = 6 * x, C = x % 5 === 0 ? 6 : 3, S = "var(--color-muted)", b = 30 + m * Math.cos(h * Math.PI / 180), $ = 30 + m * Math.sin(h * Math.PI / 180), j = 30 + (m - C) * Math.cos(h * Math.PI / 180), T = 30 + (m - C) * Math.sin(h * Math.PI / 180);
            return /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: b,
                y1: $,
                x2: j,
                y2: T,
                stroke: S,
                strokeWidth: 1,
                strokeLinecap: "round",
                opacity: 0.7
              },
              `tick-${x}`
            );
          }),
          [...Array(o)].map((c, x) => {
            const h = n * x - 90 + i / 2, p = h + N, C = (M) => M * Math.PI / 180, S = 30 + d * Math.cos(C(h)), b = 30 + d * Math.sin(C(h)), $ = 30 + l * Math.cos(C(h)), j = 30 + l * Math.sin(C(h)), T = 30 + l * Math.cos(C(p)), E = 30 + l * Math.sin(C(p)), g = 30 + d * Math.cos(C(p)), _ = 30 + d * Math.sin(C(p)), D = `M ${S} ${b} L ${$} ${j} L ${T} ${E} L ${g} ${_} Z`, w = x < Math.floor(s / 5);
            return /* @__PURE__ */ e.jsx(
              "path",
              {
                d: D,
                fill: w ? "var(--color-accent)" : "var(--color-border-default)",
                style: {
                  filter: w ? "drop-shadow(0 0 6px var(--color-accent))" : "none",
                  transition: "fill 0.3s ease"
                }
              },
              `segment-${x}`
            );
          })
        ]
      }
    ),
    u && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: u })
  ] });
}, de = ({
  type: s,
  title: r,
  message: u,
  size: o = "md",
  onClose: n
}) => {
  const i = (x) => K(x, ee.notification), l = (() => {
    switch (s) {
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
  })(), m = i(o), N = s === "error" ? "alert" : "status", c = s === "warning" ? "hover:text-default/70" : "hover:text-base/70";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start rounded-lg ${m} ${l.container}`, role: N, "aria-atomic": "true", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: l.icon }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ e.jsx("h4", { className: `font-bold ${l.textColor}`, children: r }),
      /* @__PURE__ */ e.jsx("p", { className: `${s === "success" || s === "error" ? "text-base/80" : "text-muted"} text-sm mt-1`, children: u })
    ] }),
    n && /* @__PURE__ */ e.jsx(
      "button",
      {
        className: `flex-shrink-0 ${l.textColor} ${c} transition-colors cursor-pointer`,
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
  progress: s,
  size: r = "md",
  className: u = ""
}) => {
  const o = (N) => K(N, ee.linearProgress.width), n = (N) => K(N, ee.linearProgress.height), i = o(r), d = n(r), l = [
    "bg-surface",
    "rounded-full",
    "shadow-inner",
    d,
    u || i
  ].join(" "), m = [
    "bg-gradient-to-r",
    "from-accent",
    "to-primary",
    "rounded-full",
    "shadow-lg-accent",
    "transition-all",
    "duration-500",
    "ease-out",
    d
  ].join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l,
      role: "progressbar",
      "aria-valuenow": Math.max(0, Math.min(100, s)),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: m,
          style: { width: `${s}%` }
        }
      )
    }
  );
}, Ye = ({
  variant: s = "text",
  size: r = "md",
  width: u,
  height: o,
  className: n = "",
  lines: i = 3,
  animate: d = !0
}) => {
  const m = [
    "bg-gray-600",
    d ? "animate-pulse" : "",
    ((c) => K(c, ee.skeleton))(r),
    n
  ].filter(Boolean).join(" "), N = () => {
    const c = {};
    return u && (c.width = typeof u == "number" ? `${u}px` : u), o && (c.height = typeof o == "number" ? `${o}px` : o), c;
  };
  if (s === "text")
    return /* @__PURE__ */ e.jsx("div", { className: `space-y-3 ${n}`, children: Array.from({ length: i }).map((c, x) => {
      const p = x === i - 1 ? "w-2/3" : x % 2 === 0 ? "w-full" : "w-5/6";
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `h-3 rounded ${m} ${p}`,
          style: N()
        },
        x
      );
    }) });
  if (s === "circular") {
    const c = r === "sm" ? "h-12 w-12" : r === "lg" ? "h-20 w-20" : "h-16 w-16";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `rounded-full ${m} ${c}`,
        style: N()
      }
    );
  }
  if (s === "rectangular") {
    const c = r === "sm" ? "h-20" : r === "lg" ? "h-40" : "h-32";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `rounded-lg ${m} w-full ${c}`,
        style: N()
      }
    );
  }
  if (s === "avatar-text") {
    const c = r === "sm" ? "h-12 w-12" : r === "lg" ? "h-20 w-20" : "h-16 w-16";
    return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center space-x-4 ${n}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: `rounded-full ${m} ${c}` }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ e.jsx("div", { className: `h-4 rounded w-3/4 ${m}` }),
        /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-1/2 ${m}` })
      ] })
    ] });
  }
  if (s === "button-group") {
    const c = r === "sm" ? "h-8" : r === "lg" ? "h-12" : "h-10";
    return /* @__PURE__ */ e.jsxs("div", { className: `flex space-x-4 ${n}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: `${c} rounded w-20 ${m}` }),
      /* @__PURE__ */ e.jsx("div", { className: `${c} rounded w-24 ${m}` })
    ] });
  }
  if (s === "card") {
    const c = r === "sm" ? "p-4" : r === "lg" ? "p-8" : "p-6";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `border border-border-default rounded-lg bg-surface ${c} space-y-4 ${n}`,
        children: d && /* @__PURE__ */ e.jsxs("div", { className: "animate-pulse space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ e.jsx("div", { className: `rounded-full ${m} h-16 w-16` }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: `h-4 rounded w-3/4 ${m}` }),
              /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-1/2 ${m}` })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded ${m}` }),
            /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-5/6 ${m}` }),
            /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-4/6 ${m}` })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-4 pt-4", children: [
            /* @__PURE__ */ e.jsx("div", { className: `h-8 rounded w-20 ${m}` }),
            /* @__PURE__ */ e.jsx("div", { className: `h-8 rounded w-24 ${m}` })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `h-4 rounded ${m} w-full`,
      style: N()
    }
  );
}, tt = () => {
  const s = We();
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
              s,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(Ge, { progress: s, className: "w-full" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted", children: "Uploading neural patterns..." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ e.jsx(
            Fe,
            {
              progress: s,
              radius: je.RADIUS,
              className: "w-20 h-20",
              children: /* @__PURE__ */ e.jsxs("span", { className: "text-accent font-mono text-sm", children: [
                s,
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
          /* @__PURE__ */ e.jsx(He, { progress: s, className: "w-28 h-28", children: /* @__PURE__ */ e.jsxs("span", { className: "text-accent font-mono text-sm", children: [
            s,
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
  tabs: s,
  activeTab: r,
  onTabChange: u,
  sizeClasses: o,
  containerClassName: n = "",
  anchorClassName: i = "",
  menuClassName: d = "",
  menuItemClassName: l = "",
  dropdownLabel: m,
  anchorIcon: N,
  showAnchorLabel: c = !0,
  anchorAriaLabel: x,
  closeOnSelect: h = !0
}) => {
  const [p, C] = L(!1), [S, b] = L(!1), [$, j] = L(!1), [T, E] = L(!1), g = F(null), _ = F(null);
  Q(() => {
    if (!p) return;
    const w = (M) => {
      g.current && !g.current.contains(M.target) && (j(!0), setTimeout(() => {
        C(!1), j(!1);
      }, 180));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [p]), Q(() => {
    if (!p) return;
    const w = _.current;
    if (!w) return;
    const M = w.getBoundingClientRect();
    E(M.right > window.innerWidth);
  }, [p]);
  const D = () => {
    p ? (j(!0), setTimeout(() => {
      C(!1), j(!1);
    }, 180)) : (b(!0), C(!0), setTimeout(() => b(!1), 30));
  };
  return /* @__PURE__ */ e.jsx("div", { className: `${n}`, children: /* @__PURE__ */ e.jsxs("div", { ref: g, className: "relative inline-block", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: D,
        className: `inline-flex items-center gap-2 ${o} bg-surface text-default border-2 border-border-default rounded-lg transition-all duration-300 hover:text-secondary hover:border-secondary hover:cursor-pointer shadow-secondary/30 ${i}`,
        "aria-haspopup": "menu",
        "aria-expanded": p,
        "aria-label": c ? void 0 : x ?? (typeof m == "string" ? m : "Open tabs"),
        children: [
          N ?? /* @__PURE__ */ e.jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: [
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "5", width: "14", height: "2", rx: "1" }),
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "9", width: "14", height: "2", rx: "1" }),
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "13", width: "14", height: "2", rx: "1" })
          ] }),
          c && /* @__PURE__ */ e.jsx("span", { children: m ?? r })
        ]
      }
    ),
    (p || $) && /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: _,
        "aria-hidden": !p,
        className: `absolute ${T ? "right-0" : "left-0"} mt-2 min-w-40 z-50 bg-surface border-2 border-border-default rounded-lg shadow-secondary overflow-hidden ${d}
              transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity ${S || $ ? "opacity-0 scale-y-0 pointer-events-none" : "opacity-100 scale-y-100 pointer-events-auto"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "py-1", children: s.map((w) => /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              u(w), h && (j(!0), setTimeout(() => {
                C(!1), j(!1);
              }, 180));
            },
            className: `w-full flex items-center justify-between text-left px-4 py-2 font-bold transition-colors duration-200 outline-none hover:cursor-pointer ${r === w ? "text-secondary relative pl-4 before:content-[''] before:h-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[3px] before:rounded before:bg-accent before:shadow-lg-accent" : "text-default hover:text-secondary hover:bg-base/70"} ${l}`,
            children: /* @__PURE__ */ e.jsx("span", { children: w })
          },
          w
        )) })
      }
    )
  ] }) });
}, st = ({
  tabs: s,
  activeTab: r,
  onTabChange: u,
  size: o = "md",
  mode: n = "scroll",
  containerClassName: i = "",
  tabsClassName: d = "",
  dropdownLabel: l,
  anchorIcon: m,
  showAnchorLabel: N = !0,
  anchorAriaLabel: c,
  closeOnSelect: x = !0,
  anchorClassName: h = "",
  menuClassName: p = "",
  menuItemClassName: C = ""
}) => {
  const b = ((E) => K(E, ee.tabNavigation))(o), $ = Le(n, "scroll"), j = () => {
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
  }, T = /* @__PURE__ */ e.jsx(e.Fragment, { children: s.map((E) => /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => u(E),
      className: `
            ${b} font-bold transition-colors duration-200 rounded-t-lg cursor-pointer whitespace-nowrap flex-shrink-0 relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[6px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200
            ${r === E ? "text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100" : "text-muted hover:text-secondary hover:before:opacity-70"}
            ${d}
          `,
      role: "tab",
      "aria-selected": r === E,
      tabIndex: r === E ? 0 : -1,
      children: E
    },
    E
  )) });
  return $ === "dropdown" ? /* @__PURE__ */ e.jsx(
    Ve,
    {
      tabs: s,
      activeTab: r,
      onTabChange: u,
      sizeClasses: b,
      containerClassName: i,
      anchorClassName: h,
      menuClassName: p,
      menuItemClassName: C,
      dropdownLabel: l,
      anchorIcon: m,
      showAnchorLabel: N,
      anchorAriaLabel: c,
      closeOnSelect: x
    }
  ) : $ === "scroll" ? /* @__PURE__ */ e.jsx("div", { className: `${j()} ${i}`, role: "tablist", "aria-label": "Tabs", children: /* @__PURE__ */ e.jsx("div", { className: "w-max mx-auto flex space-x-2", children: T }) }) : /* @__PURE__ */ e.jsx("div", { className: `${j()} ${i}`, role: "tablist", "aria-label": "Tabs", children: T });
}, te = {
  MOBILE_BREAKPOINT: 768,
  STABLE_TIMEOUT: 1e3,
  MOBILE_HIDE_DELAY: 1e3,
  VELOCITY_MULTIPLIER: 2,
  DISTANCE_THRESHOLD: 100,
  MAX_ANIMATION_SPEED: 5,
  MIN_GLOW_DURATION: 150
}, rt = (s = {}) => {
  const {
    glowColor: r = "primary",
    sensitivity: u = 2,
    disabled: o = !1,
    pageLevel: n,
    variant: i = "default",
    className: d = ""
  } = s, l = F(null), m = F(null), N = F(Date.now()), c = F(0), x = F(void 0), h = F([]), p = F(void 0), [C, S] = L({
    isScrolling: !1,
    direction: null,
    velocity: 0,
    position: 0,
    scrollDistance: 0
  }), [b, $] = L(!1), [j, T] = L(() => typeof window > "u" ? !1 : window.innerWidth >= te.MOBILE_BREAKPOINT), E = F(0), [g, _] = L(n ?? !1);
  Q(() => {
    if (n !== void 0)
      _(n);
    else {
      const t = setTimeout(() => {
        const a = l.current !== null;
        _(!a);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [n]);
  const D = A((t) => {
    switch (t) {
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
  }, []), w = A(() => {
    const t = window.innerWidth < te.MOBILE_BREAKPOINT;
    return {
      isMobile: t,
      scrollbarWidth: t ? 12 : 16,
      arrowSize: t ? 10 : 14,
      lineSize: t ? 8 : 12,
      arrowGap: t ? 2 : 4
    };
  }, []), M = A((t, a, y, f) => {
    const R = (f + y) * 2, U = y * 4, O = (t - R - U) / 2;
    return Math.floor(O / (a + y));
  }, []), B = A((t) => {
    if (g) {
      if (!document.querySelector("#cyber-page-scrollbar-styles")) {
        const a = document.createElement("style");
        a.id = "cyber-page-scrollbar-styles", a.textContent = `
          html::-webkit-scrollbar { display: none; }
          html { scrollbar-width: none; -ms-overflow-style: none; }
        `, document.head.appendChild(a);
      }
    } else if (t) {
      if (t.style.scrollbarWidth = "none", t.style.msOverflowStyle = "none", !document.querySelector("#cyber-scrollbar-styles")) {
        const a = document.createElement("style");
        a.id = "cyber-scrollbar-styles", a.textContent = `
          .cyber-scrollbar-container::-webkit-scrollbar { display: none; }
        `, document.head.appendChild(a);
      }
      t.classList.add("cyber-scrollbar-container");
    }
  }, [g]), H = A((t, a, y, f) => {
    const R = document.createElement("div"), U = t === "arrow";
    U && a ? (R.className = `cyber-arrow cyber-arrow-${a} cyber-arrow-${y}`, R.innerHTML = a === "up" ? "▲" : "▼") : (R.className = `cyber-line cyber-line-${y}`, R.innerHTML = "=");
    const k = f.isMobile ? "none" : `drop-shadow(0 0 6px var(--color-${r}))
         drop-shadow(0 0 12px var(--color-${r}))
         drop-shadow(0 0 18px var(--color-${r}))`;
    return R.style.cssText = `
      font-size: ${U ? f.arrowSize : f.lineSize}px;
      color: var(--color-${r});
      opacity: 0;
      transition: all 0.2s ease;
      filter: ${k};
      line-height: 1;
      font-weight: bold;
    `, R;
  }, [r]), G = A(() => {
    if (g)
      return {
        height: window.innerHeight,
        top: 0,
        right: 0
      };
    {
      const a = l.current.getBoundingClientRect();
      return {
        height: a.height,
        top: a.top,
        right: window.innerWidth - a.right
      };
    }
  }, [g]), q = A(() => {
    if (o || !g && !l.current || (m.current && m.current.remove(), !(g ? document.body.scrollHeight > window.innerHeight : l.current.scrollHeight > l.current.clientHeight))) return;
    const a = w(), y = G(), f = M(y.height, a.arrowSize, a.arrowGap, a.lineSize);
    B(g ? void 0 : l.current || void 0);
    const R = document.createElement("div");
    R.className = `cyber-scrollbar ${d}`.trim();
    const k = a.isMobile ? "transparent" : i, O = D(k);
    R.style.cssText = `
      position: fixed;
      top: ${y.top}px;
      right: ${y.right}px;
      width: ${a.scrollbarWidth}px;
      height: ${y.height}px;
      pointer-events: none;
      z-index: 9999;
      display: ${j ? "flex" : "none"};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${a.arrowGap}px;
      background: ${O.background};
      backdrop-filter: ${O.backdropFilter};
      border-radius: ${g ? "4px 0 0 4px" : "4px"};
      border: ${O.border};
      box-shadow: ${O.boxShadow};
    `;
    for (let I = 0; I < f; I++)
      R.appendChild(H("arrow", "up", I, a));
    for (let I = 0; I < 2; I++)
      R.appendChild(H("line", void 0, I, a));
    for (let I = 0; I < f; I++)
      R.appendChild(H("arrow", "down", I, a));
    document.body.appendChild(R), m.current = R;
    const P = g ? void 0 : () => {
      const I = l.current;
      if (I) {
        const oe = I.getBoundingClientRect();
        R.style.top = `${oe.top}px`, R.style.right = `${window.innerWidth - oe.right}px`, R.style.height = `${oe.height}px`;
      }
    };
    return P && (window.addEventListener("resize", P), window.addEventListener("scroll", P)), () => {
      R.remove(), !g && l.current && l.current.classList.remove("cyber-scrollbar-container"), P && (window.removeEventListener("resize", P), window.removeEventListener("scroll", P));
    };
  }, [o, g, j, B, G, H, w, M, D, i, d]), W = A((t, a) => {
    const y = Math.max(1, Math.min(3, Math.ceil(t * 0.8))), f = Math.floor(a / te.DISTANCE_THRESHOLD);
    return y + f;
  }, []), Y = A((t, a, y) => {
    const f = Array.from(t).filter(
      (U) => U.classList.contains(`cyber-arrow-${a}`)
    ), R = Math.min(y, f.length);
    return a === "up" ? f.slice(-R) : f.slice(0, R);
  }, []), J = A((t, a, y) => {
    const f = Math.min(a * u, te.MAX_ANIMATION_SPEED), R = window.innerWidth < te.MOBILE_BREAKPOINT, U = Math.max(300 / f, te.MIN_GLOW_DURATION) * (R ? 1.5 : 1), k = Math.max(40, 80 / f) * (R ? 1.25 : 1), O = y === "up" ? [...t].reverse() : t;
    O.forEach((P) => {
      P.style.opacity = "0.3";
    }), O.forEach((P, I) => {
      const oe = I * k, we = setTimeout(() => {
        P.style.opacity = "1";
        const Ne = setTimeout(() => {
          P.style.opacity = "0.3";
        }, U);
        h.current.push(Ne);
      }, oe);
      h.current.push(we);
    });
  }, [u]), V = A(() => {
    if (!m.current) return;
    const { isScrolling: t, direction: a, velocity: y, scrollDistance: f } = C, R = m.current.querySelectorAll(".cyber-arrow"), U = m.current.querySelectorAll(".cyber-line");
    if (t && a) {
      U.forEach((O) => {
        O.style.opacity = "0";
      });
      const k = W(y, f);
      if (k !== E.current) {
        h.current.forEach((P) => clearTimeout(P)), h.current = [], R.forEach((P) => {
          P.style.opacity = "0";
        });
        const O = Y(Array.from(R), a, k);
        J(O, y, a), E.current = k;
      }
    } else
      h.current.forEach((k) => clearTimeout(k)), h.current = [], E.current = 0, R.forEach((k) => {
        k.style.opacity = "0";
      }), b && U.forEach((k) => {
        k.style.opacity = "0.6";
      });
  }, [C, b, J, W, Y]), z = F(null), Z = A(() => {
    if (o || !g && !l.current) return;
    const t = Date.now(), a = g ? {
      currentScrollTop: window.scrollY,
      scrollHeight: document.body.scrollHeight,
      clientHeight: window.innerHeight
    } : {
      currentScrollTop: l.current.scrollTop,
      scrollHeight: l.current.scrollHeight,
      clientHeight: l.current.clientHeight
    }, y = t - N.current, f = a.currentScrollTop - c.current, U = Math.abs(f) / Math.max(y, 1) * te.VELOCITY_MULTIPLIER, k = f > 0 ? "down" : f < 0 ? "up" : null, O = a.currentScrollTop / (a.scrollHeight - a.clientHeight);
    b || $(!0);
    const P = window.innerWidth < te.MOBILE_BREAKPOINT;
    P && !j && T(!0), S((I) => ({
      isScrolling: !0,
      direction: k,
      velocity: U,
      position: O,
      scrollDistance: I.direction !== k ? Math.abs(f) : I.scrollDistance + Math.abs(f)
    })), x.current && clearTimeout(x.current), p.current && clearTimeout(p.current), x.current = setTimeout(() => {
      h.current.forEach((I) => clearTimeout(I)), h.current = [], S((I) => ({
        ...I,
        isScrolling: !1,
        velocity: 0,
        scrollDistance: 0
      })), P && (p.current = setTimeout(() => {
        T(!1);
      }, te.MOBILE_HIDE_DELAY));
    }, te.STABLE_TIMEOUT), N.current = t, c.current = a.currentScrollTop;
  }, [o, g, b, j]), v = A(() => {
    z.current === null && (z.current = requestAnimationFrame(() => {
      z.current = null, Z();
    }));
  }, [Z]);
  return Q(() => {
    if (o || !g && !l.current) return;
    const t = q(), a = g ? window : l.current;
    return a.addEventListener("scroll", v, { passive: !0 }), () => {
      a.removeEventListener("scroll", v), x.current && clearTimeout(x.current), p.current && clearTimeout(p.current), h.current.forEach((y) => clearTimeout(y)), z.current !== null && (cancelAnimationFrame(z.current), z.current = null), t?.();
    };
  }, [q, v, o, g]), Q(() => {
    V();
  }, [V]), l;
}, at = ({ children: s, position: r = "top-right", defaultDuration: u = 2500 }) => {
  const [o, n] = L([]), i = A(
    (c, x, h, p = {}) => {
      const C = Date.now().toString(), { autoHide: S = !0, duration: b = u } = p;
      return n(($) => [...$, { id: C, type: c, title: x, message: h }]), S && setTimeout(() => {
        n(
          ($) => $.map((j) => j.id === C ? { ...j, isClosing: !0 } : j)
        ), setTimeout(() => {
          n(($) => $.filter((j) => j.id !== C));
        }, 500);
      }, b), C;
    },
    [u]
  ), d = A((c) => {
    n(
      (x) => x.map((h) => h.id === c ? { ...h, isClosing: !0 } : h)
    ), setTimeout(() => {
      n((x) => x.filter((h) => h.id !== c));
    }, 500);
  }, []), l = A(() => {
    n([]);
  }, []), m = A((c, x) => {
    n(
      (h) => h.map((p) => p.id === c ? { ...p, width: x } : p)
    );
  }, []), N = {
    notifications: o,
    showNotification: i,
    hideNotification: d,
    clearAllNotifications: l
  };
  return /* @__PURE__ */ e.jsxs(ve.Provider, { value: N, children: [
    s,
    o.length > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `fixed z-50 ${Xe(r)}`,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "true",
        children: o.map((c, x) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute",
            style: {
              right: r.includes("right") ? 0 : void 0,
              left: r.includes("left") ? 0 : void 0,
              top: `${x * 70}px`,
              width: c.width ? `${c.width}px` : "auto"
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `transform transition-all duration-500 ease-out scale-75 opacity-90 w-full ${r.includes("right") ? "flex justify-end" : "flex justify-start"} ${c.isClosing ? `${r.includes("right") ? "translate-x-full" : "-translate-x-full"} opacity-0` : "translate-x-0 opacity-90"}`,
                style: {
                  whiteSpace: "nowrap",
                  transformOrigin: r.includes("right") ? "right center" : "left center",
                  transform: c.isClosing ? `translateX(${r.includes("right") ? "100%" : "-100%"}) scale(0.75)` : `translateX(${c.width ? "0px" : r.includes("right") ? "100%" : "-100%"}) scale(0.75)`
                },
                ref: (h) => {
                  if (h && !c.width) {
                    const p = h.scrollWidth;
                    m(c.id, p);
                  }
                },
                children: /* @__PURE__ */ e.jsx(
                  de,
                  {
                    type: c.type,
                    title: c.title,
                    message: c.message,
                    onClose: () => d(c.id),
                    size: "sm"
                  }
                )
              }
            )
          },
          c.id
        ))
      }
    )
  ] });
}, Xe = (s) => {
  const r = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  };
  return r[s] || r["top-right"];
}, nt = "1.3.2";
export {
  ue as Badge,
  X as Button,
  se as Card,
  Ie as Carousel,
  Fe as CircularProgress,
  at as CyberNotificationProvider,
  et as ElementsTab,
  tt as FeedbackTab,
  Je as HomeTab,
  ae as Image,
  be as Input,
  Qe as InteractiveTab,
  Ge as LinearProgress,
  re as Modal,
  de as Notification,
  ee as RESPONSIVE_SIZE_MAPS,
  He as SegmentedProgress,
  Ue as Select,
  Ye as Skeleton,
  st as TabNavigation,
  Be as Toggle,
  Ke as combineResponsiveClasses,
  K as getResponsiveClasses,
  De as useCyberNotifications,
  rt as useCyberScrollbar,
  nt as version
};
//# sourceMappingURL=index.es.js.map
