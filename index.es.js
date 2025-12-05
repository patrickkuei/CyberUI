import le, { useCallback as R, useState as B, useEffect as Q, useRef as G, useId as me, memo as ie, useMemo as te, createContext as ye, useContext as we } from "react";
import { createPortal as be } from "react-dom";
var oe = { exports: {} }, se = {};
var de;
function je() {
  if (de) return se;
  de = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function u(n, o, h) {
    var l = null;
    if (h !== void 0 && (l = "" + h), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      h = {};
      for (var i in o)
        i !== "key" && (h[i] = o[i]);
    } else h = o;
    return o = h.ref, {
      $$typeof: r,
      type: n,
      key: l,
      ref: o !== void 0 ? o : null,
      props: h
    };
  }
  return se.Fragment = s, se.jsx = u, se.jsxs = u, se;
}
var ae = {};
var ue;
function Ne() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === U ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case y:
          return "Fragment";
        case w:
          return "Profiler";
        case S:
          return "StrictMode";
        case L:
          return "Suspense";
        case D:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case v:
            return "Portal";
          case j:
            return t.displayName || "Context";
          case $:
            return (t._context.displayName || "Context") + ".Consumer";
          case x:
            var a = t.render;
            return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case k:
            return a = t.displayName || null, a !== null ? a : r(t.type) || "Memo";
          case A:
            a = t._payload, t = t._init;
            try {
              return r(t(a));
            } catch {
            }
        }
      return null;
    }
    function s(t) {
      return "" + t;
    }
    function u(t) {
      try {
        s(t);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var N = a.error, g = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return N.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), s(t);
      }
    }
    function n(t) {
      if (t === y) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === A)
        return "<...>";
      try {
        var a = r(t);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var t = V.A;
      return t === null ? null : t.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function l(t) {
      if (X.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function i(t, a) {
      function N() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: N,
        configurable: !0
      });
    }
    function m() {
      var t = r(this.type);
      return Z[t] || (Z[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function E(t, a, N, g, T, F) {
      var _ = N.ref;
      return t = {
        $$typeof: p,
        type: t,
        key: a,
        props: N,
        _owner: g
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(t, "ref", {
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
        value: T
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function f(t, a, N, g, T, F) {
      var _ = a.children;
      if (_ !== void 0)
        if (g)
          if (H(_)) {
            for (g = 0; g < _.length; g++)
              b(_[g]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(_);
      if (X.call(a, "key")) {
        _ = r(t);
        var P = Object.keys(a).filter(function(O) {
          return O !== "key";
        });
        g = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", C[_ + g] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          _,
          P,
          _
        ), C[_ + g] = !0);
      }
      if (_ = null, N !== void 0 && (u(N), _ = "" + N), l(a) && (u(a.key), _ = "" + a.key), "key" in a) {
        N = {};
        for (var I in a)
          I !== "key" && (N[I] = a[I]);
      } else N = a;
      return _ && i(
        N,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), E(
        t,
        _,
        N,
        o(),
        T,
        F
      );
    }
    function b(t) {
      c(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === A && (t._payload.status === "fulfilled" ? c(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function c(t) {
      return typeof t == "object" && t !== null && t.$$typeof === p;
    }
    var d = le, p = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), j = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), V = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, H = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var K, Z = {}, z = d.react_stack_bottom_frame.bind(
      d,
      h
    )(), q = Y(n(h)), C = {};
    ae.Fragment = y, ae.jsx = function(t, a, N) {
      var g = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        t,
        a,
        N,
        !1,
        g ? Error("react-stack-top-frame") : z,
        g ? Y(n(t)) : q
      );
    }, ae.jsxs = function(t, a, N) {
      var g = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        t,
        a,
        N,
        !0,
        g ? Error("react-stack-top-frame") : z,
        g ? Y(n(t)) : q
      );
    };
  })()), ae;
}
var fe;
function Ce() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? oe.exports = je() : oe.exports = Ne()), oe.exports;
}
var e = Ce();
const ce = (r) => typeof r == "object" && r !== null, M = (r, s) => {
  if (!ce(r))
    return s[r] || "";
  const u = [];
  if (r.base && s[r.base] && u.push(s[r.base]), r.sm && s[r.sm]) {
    const n = s[r.sm].split(" ").map((o) => `sm:${o}`);
    u.push(...n);
  }
  if (r.md && s[r.md]) {
    const n = s[r.md].split(" ").map((o) => `md:${o}`);
    u.push(...n);
  }
  if (r.lg && s[r.lg]) {
    const n = s[r.lg].split(" ").map((o) => `lg:${o}`);
    u.push(...n);
  }
  if (r.xl && s[r.xl]) {
    const n = s[r.xl].split(" ").map((o) => `xl:${o}`);
    u.push(...n);
  }
  if (r["2xl"] && s[r["2xl"]]) {
    const n = s[r["2xl"]].split(" ").map((o) => `2xl:${o}`);
    u.push(...n);
  }
  return u.join(" ");
}, De = (...r) => r.filter(Boolean).join(" "), J = {
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
}, ke = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, $e = (r, s, u) => {
  if (!ce(r))
    return r ?? u;
  let n = r.base ?? u;
  const o = ["sm", "md", "lg", "xl", "2xl"];
  for (const h of o) {
    const l = ke[h];
    s >= l && r[h] !== void 0 && (n = r[h]);
  }
  return n;
}, pe = (r, s) => {
  const u = R(
    () => typeof window > "u" ? s : $e(r, window.innerWidth, s),
    [s, r]
  ), [n, o] = B(u);
  return Q(() => {
    if (!ce(r)) {
      o(r ?? s);
      return;
    }
    const h = () => o(u());
    return h(), window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, [s, u, r]), n;
}, Ee = ({
  tabs: r,
  activeTab: s,
  onTabChange: u,
  sizeClasses: n,
  containerClassName: o = "",
  anchorClassName: h = "",
  menuClassName: l = "",
  menuItemClassName: i = "",
  dropdownLabel: m,
  anchorIcon: E,
  showAnchorLabel: f = !0,
  anchorAriaLabel: b,
  closeOnSelect: c = !0
}) => {
  const [d, p] = B(!1), [v, y] = B(!1), [S, w] = B(!1), [$, j] = B(!1), x = G(null), L = G(null);
  Q(() => {
    if (!d) return;
    const k = (A) => {
      x.current && !x.current.contains(A.target) && (w(!0), setTimeout(() => {
        p(!1), w(!1);
      }, 180));
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [d]), Q(() => {
    if (!d) return;
    const k = L.current;
    if (!k) return;
    const A = k.getBoundingClientRect();
    j(A.right > window.innerWidth);
  }, [d]);
  const D = () => {
    d ? (w(!0), setTimeout(() => {
      p(!1), w(!1);
    }, 180)) : (y(!0), p(!0), setTimeout(() => y(!1), 30));
  };
  return /* @__PURE__ */ e.jsx("div", { className: `${o}`, children: /* @__PURE__ */ e.jsxs("div", { ref: x, className: "relative inline-block", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: D,
        className: `inline-flex items-center gap-2 ${n} bg-surface text-default border-2 border-border-default rounded-lg transition-all duration-300 hover:text-secondary hover:border-secondary hover:cursor-pointer shadow-secondary/30 ${h}`,
        "aria-haspopup": "menu",
        "aria-expanded": d,
        "aria-label": f ? void 0 : b ?? (typeof m == "string" ? m : "Open tabs"),
        children: [
          E ?? /* @__PURE__ */ e.jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: [
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "5", width: "14", height: "2", rx: "1" }),
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "9", width: "14", height: "2", rx: "1" }),
            /* @__PURE__ */ e.jsx("rect", { x: "3", y: "13", width: "14", height: "2", rx: "1" })
          ] }),
          f && /* @__PURE__ */ e.jsx("span", { children: m ?? s })
        ]
      }
    ),
    (d || S) && /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: L,
        "aria-hidden": !d,
        className: `absolute ${$ ? "right-0" : "left-0"} mt-2 min-w-40 z-50 bg-surface border-2 border-border-default rounded-lg shadow-secondary overflow-hidden ${l}
              transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity ${v || S ? "opacity-0 scale-y-0 pointer-events-none" : "opacity-100 scale-y-100 pointer-events-auto"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "py-1", children: r.map((k) => /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              u(k), c && (w(!0), setTimeout(() => {
                p(!1), w(!1);
              }, 180));
            },
            className: `w-full flex items-center justify-between text-left px-4 py-2 font-bold transition-colors duration-200 outline-none hover:cursor-pointer ${s === k ? "text-secondary relative pl-4 before:content-[''] before:h-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[3px] before:rounded before:bg-accent before:shadow-lg-accent" : "text-default hover:text-secondary hover:bg-base/70"} ${i}`,
            children: /* @__PURE__ */ e.jsx("span", { children: k })
          },
          k
        )) })
      }
    )
  ] }) });
}, ze = ({
  tabs: r,
  activeTab: s,
  onTabChange: u,
  size: n = "md",
  mode: o = "scroll",
  containerClassName: h = "",
  tabsClassName: l = "",
  dropdownLabel: i,
  anchorIcon: m,
  showAnchorLabel: E = !0,
  anchorAriaLabel: f,
  closeOnSelect: b = !0,
  anchorClassName: c = "",
  menuClassName: d = "",
  menuItemClassName: p = ""
}) => {
  const y = ((j) => M(j, J.tabNavigation))(n), S = pe(o, "scroll"), w = () => {
    switch (S) {
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
  }, $ = /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((j) => /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => u(j),
      className: `
            ${y} font-bold transition-colors duration-200 rounded-t-lg cursor-pointer whitespace-nowrap flex-shrink-0 relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[6px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200
            ${s === j ? "text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100" : "text-muted hover:text-secondary hover:before:opacity-70"}
            ${l}
          `,
      role: "tab",
      "aria-selected": s === j,
      tabIndex: s === j ? 0 : -1,
      children: j
    },
    j
  )) });
  return S === "dropdown" ? /* @__PURE__ */ e.jsx(
    Ee,
    {
      tabs: r,
      activeTab: s,
      onTabChange: u,
      sizeClasses: y,
      containerClassName: h,
      anchorClassName: c,
      menuClassName: d,
      menuItemClassName: p,
      dropdownLabel: i,
      anchorIcon: m,
      showAnchorLabel: E,
      anchorAriaLabel: f,
      closeOnSelect: b
    }
  ) : S === "scroll" ? /* @__PURE__ */ e.jsx("div", { className: `${w()} ${h}`, role: "tablist", "aria-label": "Tabs", children: /* @__PURE__ */ e.jsx("div", { className: "w-max mx-auto flex space-x-2", children: $ }) }) : /* @__PURE__ */ e.jsx("div", { className: `${w()} ${h}`, role: "tablist", "aria-label": "Tabs", children: $ });
}, Be = ({
  progress: r,
  radius: s,
  className: u = "",
  children: n,
  ariaLabel: o
}) => {
  const h = 2 * Math.PI * s, l = h / 2, i = l * (1 - r / 100), m = l * (1 - r / 100);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative ${u}`,
      role: "progressbar",
      "aria-label": o || "Progress",
      "aria-valuenow": Math.max(0, Math.min(100, r)),
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
                  r: s,
                  fill: "none",
                  stroke: "var(--color-accent)",
                  strokeWidth: "4",
                  strokeLinecap: "butt",
                  strokeDasharray: `${l * 0.98} ${h}`,
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
                  r: s,
                  fill: "none",
                  stroke: "var(--color-primary)",
                  strokeWidth: "4",
                  strokeLinecap: "butt",
                  strokeDasharray: `${l * 0.98} ${h}`,
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
        n && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: n })
      ]
    }
  );
}, Se = {
  SEGMENT_COUNT: 20,
  SEGMENT_ANGLE: 360 / 20,
  GAP_ANGLE: 4,
  INNER_RADIUS: 18.5,
  OUTER_RADIUS: 23.5,
  OUTER_TICK_RADIUS: 30
}, We = ({
  progress: r,
  className: s = "",
  children: u
}) => {
  const {
    SEGMENT_COUNT: n,
    SEGMENT_ANGLE: o,
    GAP_ANGLE: h,
    INNER_RADIUS: l,
    OUTER_RADIUS: i,
    OUTER_TICK_RADIUS: m
  } = Se, E = o - h;
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${s}`, children: [
    /* @__PURE__ */ e.jsxs(
      "svg",
      {
        className: "w-full h-full",
        viewBox: "0 0 60 60",
        style: { overflow: "visible" },
        children: [
          [...Array(60)].map((f, b) => {
            const c = 6 * b, p = b % 5 === 0 ? 6 : 3, v = "var(--color-muted)", y = 30 + m * Math.cos(c * Math.PI / 180), S = 30 + m * Math.sin(c * Math.PI / 180), w = 30 + (m - p) * Math.cos(c * Math.PI / 180), $ = 30 + (m - p) * Math.sin(c * Math.PI / 180);
            return /* @__PURE__ */ e.jsx(
              "line",
              {
                x1: y,
                y1: S,
                x2: w,
                y2: $,
                stroke: v,
                strokeWidth: 1,
                strokeLinecap: "round",
                opacity: 0.7
              },
              `tick-${b}`
            );
          }),
          [...Array(n)].map((f, b) => {
            const c = o * b - 90 + h / 2, d = c + E, p = (A) => A * Math.PI / 180, v = 30 + l * Math.cos(p(c)), y = 30 + l * Math.sin(p(c)), S = 30 + i * Math.cos(p(c)), w = 30 + i * Math.sin(p(c)), $ = 30 + i * Math.cos(p(d)), j = 30 + i * Math.sin(p(d)), x = 30 + l * Math.cos(p(d)), L = 30 + l * Math.sin(p(d)), D = `M ${v} ${y} L ${S} ${w} L ${$} ${j} L ${x} ${L} Z`, k = b < Math.floor(r / 5);
            return /* @__PURE__ */ e.jsx(
              "path",
              {
                d: D,
                fill: k ? "var(--color-accent)" : "var(--color-border-default)",
                style: {
                  filter: k ? "drop-shadow(0 0 6px var(--color-accent))" : "none",
                  transition: "fill 0.3s ease"
                }
              },
              `segment-${b}`
            );
          })
        ]
      }
    ),
    u && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: u })
  ] });
}, Fe = ({
  progress: r,
  size: s = "md",
  className: u = ""
}) => {
  const n = (E) => M(E, J.linearProgress.width), o = (E) => M(E, J.linearProgress.height), h = n(s), l = o(s), i = [
    "bg-surface",
    "rounded-full",
    "shadow-inner",
    l,
    u || h
  ].join(" "), m = [
    "bg-gradient-to-r",
    "from-accent",
    "to-primary",
    "rounded-full",
    "shadow-lg-accent",
    "transition-all",
    "duration-500",
    "ease-out",
    l
  ].join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i,
      role: "progressbar",
      "aria-valuenow": Math.max(0, Math.min(100, r)),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: m,
          style: { width: `${r}%` }
        }
      )
    }
  );
}, _e = ({
  type: r,
  title: s,
  message: u,
  size: n = "md",
  onClose: o
}) => {
  const h = (b) => M(b, J.notification), i = (() => {
    switch (r) {
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
  })(), m = h(n), E = r === "error" ? "alert" : "status", f = r === "warning" ? "hover:text-default/70" : "hover:text-base/70";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start rounded-lg ${m} ${i.container}`, role: E, "aria-atomic": "true", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: i.icon }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ e.jsx("h4", { className: `font-bold ${i.textColor}`, children: s }),
      /* @__PURE__ */ e.jsx("p", { className: `${r === "success" || r === "error" ? "text-base/80" : "text-muted"} text-sm mt-1`, children: u })
    ] }),
    o && /* @__PURE__ */ e.jsx(
      "button",
      {
        className: `flex-shrink-0 ${i.textColor} ${f} transition-colors cursor-pointer`,
        onClick: o,
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
}, he = ({
  variant: r = "primary",
  size: s = "md",
  className: u = "",
  disabled: n = !1,
  children: o,
  ...h
}) => {
  const l = [
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
    n ? "cursor-not-allowed" : "cursor-pointer"
  ].join(" "), i = (b) => M(b, J.button), m = (b, c) => ({
    primary: {
      enabled: "bg-linear-(--gradient-accent) text-base shadow-primary border-none hover:shadow-lg-accent hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent/50 active:scale-95",
      disabled: "bg-base border-2 border-accent/20 text-accent/40 shadow-none opacity-50 hover:scale-100"
    },
    secondary: {
      enabled: "bg-surface border-2 border-secondary text-secondary shadow-secondary/30 hover:bg-secondary hover:text-base hover:shadow-secondary hover:scale-105 focus-visible:ring-2 focus-visible:ring-secondary/50 active:scale-95",
      disabled: "bg-base border-2 border-secondary/20 text-secondary/40 shadow-none opacity-50 hover:bg-base hover:text-secondary/40 hover:scale-100"
    },
    danger: {
      enabled: "bg-surface border-2 border-error text-error shadow-error/30 hover:bg-error hover:text-base hover:shadow-error hover:scale-105 focus-visible:ring-2 focus-visible:ring-error/50 active:scale-95",
      disabled: "bg-base border-2 border-error/20 text-error/40 shadow-none opacity-50 hover:bg-base hover:text-error/40 hover:scale-100"
    },
    ghost: {
      enabled: "bg-surface border-2 border-accent text-accent shadow-secondary hover:bg-accent hover:text-base hover:shadow-lg-accent hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent/50 active:scale-95",
      disabled: "bg-base border-2 border-accent/10 text-muted/60 shadow-none opacity-40 hover:bg-base hover:text-muted/60 hover:scale-100"
    }
  })[b][c ? "disabled" : "enabled"], E = [
    l,
    i(s),
    m(r, n),
    u
  ].filter(Boolean).join(" "), f = r === "primary" && !n;
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: E,
      disabled: n,
      ...h,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "relative z-10", children: o }),
        f && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
        n && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-base/10 to-transparent pointer-events-none" })
      ]
    }
  );
}, He = ({
  variant: r = "primary",
  size: s = "md",
  label: u,
  helperText: n,
  error: o,
  leftIcon: h,
  rightIcon: l,
  className: i = "",
  disabled: m = !1,
  ...E
}) => {
  const f = me(), b = E.id || f, c = [
    "w-full",
    "rounded-lg",
    "bg-surface",
    "text-default",
    "placeholder-muted",
    "transition-all",
    "duration-300",
    "focus:outline-none",
    m ? "cursor-not-allowed opacity-60" : "cursor-text"
  ].join(" "), d = (j) => M(j, J.input), p = (j) => {
    const x = d(j);
    return h && l ? `pl-10 pr-10 ${x}` : h ? `pl-10 pr-4 ${x}` : l ? `pl-4 pr-10 ${x}` : `px-4 ${x}`;
  }, v = (j, x, L) => x ? "border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base" : L ? {
    primary: "border-2 border-accent/20 shadow-none",
    secondary: "border-2 border-secondary/20 shadow-none",
    danger: "border-2 border-error/20 shadow-none",
    ghost: "border border-border-default shadow-none"
  }[j] : {
    primary: "border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",
    secondary: "border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",
    danger: "border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",
    ghost: "border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"
  }[j], y = (j) => ({
    primary: "text-accent",
    secondary: "text-secondary",
    danger: "text-error",
    ghost: "text-muted"
  })[j], S = [
    c,
    p(s),
    v(r, !!o, m),
    i
  ].filter(Boolean).join(" "), w = y(r), $ = o ? `${b}-error` : n ? `${b}-help` : void 0;
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
    u && /* @__PURE__ */ e.jsx("label", { htmlFor: b, className: "block text-sm font-medium text-default", children: u }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      h && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-y-0 left-0 flex items-center pl-3 ${w}`, children: h }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: S,
          disabled: m,
          id: b,
          "aria-invalid": !!o,
          "aria-describedby": $,
          ...E
        }
      ),
      l && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-y-0 right-0 flex items-center pr-3 ${w}`, children: l })
    ] }),
    (n || o) && /* @__PURE__ */ e.jsx("div", { id: o ? `${b}-error` : `${b}-help`, className: `text-xs font-mono ${o ? "text-error" : "text-muted"}`, children: o || n })
  ] });
}, Ge = ({
  variant: r = "default",
  size: s = "md",
  title: u,
  titleBorder: n = !0,
  children: o,
  className: h = "",
  ...l
}) => {
  const i = (f) => M(f, J.card), m = (f) => {
    const b = i(s);
    return {
      default: `bg-base border border-border-default rounded-xl ${b}`,
      accent: `bg-surface border-2 border-accent rounded-xl shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform ${b}`,
      small: `bg-base rounded-lg border border-border-default ${b}`
    }[f];
  }, E = (f) => f ? "text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2" : "text-xl font-semibold text-secondary mb-4";
  return /* @__PURE__ */ e.jsxs("div", { className: `${m(r)} ${h}`, ...l, children: [
    u && /* @__PURE__ */ e.jsx("h3", { className: E(n), children: u }),
    o
  ] });
}, Ue = ({
  variant: r = "primary",
  size: s = "md",
  children: u,
  className: n = "",
  leftIcon: o,
  rightIcon: h,
  clickable: l = !1,
  onClick: i,
  ...m
}) => {
  const E = (c) => M(c, J.badge), f = (c) => ({
    primary: "text-base bg-primary shadow-lg",
    secondary: "text-base bg-secondary shadow-lg",
    accent: "text-base bg-accent shadow-lg",
    success: "text-base bg-success shadow-lg",
    error: "text-base bg-error shadow-lg",
    warning: "text-base bg-warning shadow-lg"
  })[c], b = (c, d) => !d && !i ? "transition-shadow" : {
    primary: "hover:shadow-primary transition-shadow cursor-pointer",
    secondary: "hover:shadow-secondary transition-shadow cursor-pointer",
    accent: "hover:shadow-lg-accent transition-shadow cursor-pointer",
    success: "hover:shadow-success transition-shadow cursor-pointer",
    error: "hover:shadow-error transition-shadow cursor-pointer",
    warning: "hover:shadow-warning transition-shadow cursor-pointer"
  }[c];
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: `inline-flex items-center ${E(s)} rounded-full font-semibold ${f(r)} ${b(r, l || !!i)} ${n}`,
      onClick: i,
      ...m,
      children: [
        o,
        /* @__PURE__ */ e.jsx("span", { children: u }),
        h
      ]
    }
  );
}, Ve = ({
  label: r,
  size: s = "md",
  variant: u = "primary",
  className: n = "",
  checked: o = !1,
  onChange: h,
  disabled: l = !1,
  id: i,
  ...m
}) => {
  const E = (v) => {
    h && h(v.target.checked);
  }, f = (v) => M(v, {
    sm: "w-10 h-5 after:h-4 after:w-4",
    md: "w-14 h-7 after:h-6 after:w-6",
    lg: "w-16 h-8 after:h-7 after:w-7"
  }), b = (v, y) => {
    if (y)
      return "bg-gray-600 peer-checked:bg-gray-500 opacity-50 cursor-not-allowed";
    const S = {
      primary: "bg-gray-600 peer-checked:bg-linear-(--gradient-accent) peer-focus:ring-primary",
      secondary: "bg-gray-600 peer-checked:bg-secondary peer-focus:ring-secondary",
      accent: "bg-gray-600 peer-checked:bg-accent peer-focus:ring-accent"
    };
    return S[v] || S.primary;
  }, c = [
    "relative inline-flex items-center cursor-pointer",
    l ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  ].join(" "), d = [
    f(s),
    b(u, l),
    "peer-focus:outline-none rounded-full peer",
    "peer-checked:after:translate-x-full peer-checked:after:border-white",
    "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
    "after:bg-white after:rounded-full after:transition-all",
    "transition-colors duration-300"
  ].filter(Boolean).join(" "), p = [
    "flex items-center justify-between",
    r ? "space-x-3" : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: p, children: [
    r && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: i,
        className: `text-default font-medium ${l ? "text-muted opacity-50" : "cursor-pointer"}`,
        children: r
      }
    ),
    /* @__PURE__ */ e.jsxs("label", { className: c, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "sr-only peer",
          checked: o,
          onChange: E,
          disabled: l,
          id: i,
          ...m
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: d })
    ] })
  ] });
}, Ye = ({
  label: r,
  size: s = "md",
  variant: u = "primary",
  options: n,
  placeholder: o,
  helperText: h,
  error: l,
  className: i = "",
  disabled: m = !1,
  id: E,
  name: f,
  ...b
}) => {
  const c = me(), d = E || c, p = f || d, v = (x) => M(x, J.input), y = (x, L, D) => {
    if (L)
      return "bg-base border-2 border-border-default/30 text-muted/50 cursor-not-allowed opacity-50";
    if (D)
      return "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error";
    const k = {
      primary: "bg-surface border-2 border-border-default text-default focus:ring-2 focus:ring-primary focus:border-primary shadow-primary",
      secondary: "bg-surface border-2 border-secondary text-default focus:ring-2 focus:ring-secondary focus:border-secondary shadow-secondary/30",
      danger: "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error/30",
      ghost: "bg-base border-2 border-accent/20 text-default focus:ring-2 focus:ring-accent focus:border-accent shadow-secondary"
    };
    return k[x] || k.primary;
  }, S = [
    "appearance-none w-full rounded-lg font-mono transition-all duration-300",
    "focus:outline-none px-4 pr-10",
    v(s),
    y(u, m, !!l),
    i
  ].filter(Boolean).join(" "), w = "relative w-full", $ = [
    "block text-sm font-medium mb-2 transition-colors duration-200",
    m ? "text-muted opacity-50" : l ? "text-error" : "text-default"
  ].join(" "), j = [
    "mt-2 text-xs transition-colors duration-200",
    l ? "text-error" : "text-muted"
  ].join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    r && /* @__PURE__ */ e.jsx("label", { htmlFor: d, className: $, children: r }),
    /* @__PURE__ */ e.jsxs("div", { className: w, children: [
      /* @__PURE__ */ e.jsxs(
        "select",
        {
          className: S,
          disabled: m,
          id: d,
          name: p,
          ...b,
          children: [
            o && /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: o }),
            n.map((x) => /* @__PURE__ */ e.jsx(
              "option",
              {
                value: x.value,
                disabled: x.disabled,
                className: "bg-surface text-default",
                children: x.label
              },
              x.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ${m ? "text-muted/50" : l ? "text-error" : "text-accent"}`,
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
    (h || l) && /* @__PURE__ */ e.jsx("div", { className: j, children: l || h })
  ] });
}, Ze = ({
  variant: r = "text",
  size: s = "md",
  width: u,
  height: n,
  className: o = "",
  lines: h = 3,
  animate: l = !0
}) => {
  const m = [
    "bg-gray-600",
    l ? "animate-pulse" : "",
    ((f) => M(f, J.skeleton))(s),
    o
  ].filter(Boolean).join(" "), E = () => {
    const f = {};
    return u && (f.width = typeof u == "number" ? `${u}px` : u), n && (f.height = typeof n == "number" ? `${n}px` : n), f;
  };
  if (r === "text")
    return /* @__PURE__ */ e.jsx("div", { className: `space-y-3 ${o}`, children: Array.from({ length: h }).map((f, b) => {
      const d = b === h - 1 ? "w-2/3" : b % 2 === 0 ? "w-full" : "w-5/6";
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `h-3 rounded ${m} ${d}`,
          style: E()
        },
        b
      );
    }) });
  if (r === "circular") {
    const f = s === "sm" ? "h-12 w-12" : s === "lg" ? "h-20 w-20" : "h-16 w-16";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `rounded-full ${m} ${f}`,
        style: E()
      }
    );
  }
  if (r === "rectangular") {
    const f = s === "sm" ? "h-20" : s === "lg" ? "h-40" : "h-32";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `rounded-lg ${m} w-full ${f}`,
        style: E()
      }
    );
  }
  if (r === "avatar-text") {
    const f = s === "sm" ? "h-12 w-12" : s === "lg" ? "h-20 w-20" : "h-16 w-16";
    return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center space-x-4 ${o}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: `rounded-full ${m} ${f}` }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ e.jsx("div", { className: `h-4 rounded w-3/4 ${m}` }),
        /* @__PURE__ */ e.jsx("div", { className: `h-3 rounded w-1/2 ${m}` })
      ] })
    ] });
  }
  if (r === "button-group") {
    const f = s === "sm" ? "h-8" : s === "lg" ? "h-12" : "h-10";
    return /* @__PURE__ */ e.jsxs("div", { className: `flex space-x-4 ${o}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: `${f} rounded w-20 ${m}` }),
      /* @__PURE__ */ e.jsx("div", { className: `${f} rounded w-24 ${m}` })
    ] });
  }
  if (r === "card") {
    const f = s === "sm" ? "p-4" : s === "lg" ? "p-8" : "p-6";
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `border border-border-default rounded-lg bg-surface ${f} space-y-4 ${o}`,
        children: l && /* @__PURE__ */ e.jsxs("div", { className: "animate-pulse space-y-4", children: [
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
      style: E()
    }
  );
}, Te = {
  openDuration: 50,
  closeDuration: 350,
  cyberpunkEffects: !0
}, ne = ie(
  ({
    src: r,
    alt: s,
    size: u = "md",
    preview: n = !0,
    fallback: o,
    placeholder: h,
    className: l = "",
    animation: i,
    eager: m = !1,
    previewClassName: E = "",
    onPreviewOpen: f,
    onPreviewClose: b,
    onLoad: c,
    onError: d,
    ...p
  }) => {
    const v = { ...Te, ...i }, [y, S] = B(!1), [w, $] = B(!1), [j, x] = B(!1), [L, D] = B(!0), [k, A] = B(!1), [W, U] = B(!1), V = G(null), X = G(null), H = R(
      (g) => M(g, J.card),
      []
    ), Y = R(
      (g) => {
        D(!1), A(!1), c?.(g);
      },
      [c]
    ), K = R(
      (g) => {
        D(!1), o && !W ? (U(!0), A(!1)) : A(!0), d?.(g);
      },
      [d, o, W]
    ), Z = R(() => {
      n && !k && (x(!0), S(!0), f?.(), setTimeout(() => {
        x(!1);
      }, v.openDuration));
    }, [n, k, f, v.openDuration]), z = R(() => {
      $(!0), b?.(), setTimeout(() => {
        S(!1), $(!1);
      }, v.closeDuration);
    }, [b, v.closeDuration]), q = R(
      (g) => {
        (g.target === V.current || g.target === g.currentTarget) && z();
      },
      [z]
    ), C = R(
      (g) => {
        g.key === "Escape" && z();
      },
      [z]
    );
    Q(() => {
      if (y) {
        document.addEventListener("keydown", C);
        const g = document.body.style.overflow, T = document.documentElement.style.scrollbarGutter, F = document.body.style.paddingRight, _ = window.innerWidth - document.documentElement.clientWidth;
        return document.body.style.overflow = "hidden", document.body.style.paddingRight = `${_}px`, document.documentElement.style.scrollbarGutter = "auto", () => {
          document.removeEventListener("keydown", C), document.body.style.overflow = g, document.body.style.paddingRight = F, document.documentElement.style.scrollbarGutter = T;
        };
      }
    }, [y, C]);
    const t = te(
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
        n && !k ? "cursor-pointer hover:scale-105 hover:border-accent hover:shadow-lg-accent focus:outline-none focus:ring-4 focus:ring-accent/50" : "",
        H(u),
        l
      ].filter(Boolean).join(" "),
      [n, k, H, u, l]
    ), a = te(
      () => ({
        role: n ? "button" : "img",
        tabIndex: n && !k ? 0 : -1,
        "aria-label": n ? `${s}. Click to enlarge` : s,
        "aria-expanded": n ? y : void 0,
        onKeyDown: n && !k ? (g) => {
          (g.key === "Enter" || g.key === " ") && (g.preventDefault(), Z());
        } : void 0
      }),
      [n, k, s, y, Z]
    ), N = te(
      () => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: t,
          onClick: Z,
          ...a,
          children: [
            L && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute m-0 inset-0 flex items-center justify-center bg-surface border-2 border-accent/20",
                role: "status",
                "aria-label": "Loading image",
                children: h || /* @__PURE__ */ e.jsx("div", { className: "animate-pulse bg-gradient-to-r from-accent/20 to-secondary/20 w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-muted text-sm", children: "Loading..." }) })
              }
            ),
            k ? /* @__PURE__ */ e.jsx(
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
            ) : W ? /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: X,
                src: o,
                alt: `${s} (fallback)`,
                className: "w-full h-full m-0 object-cover transition-opacity duration-300",
                style: { opacity: L ? 0 : 1 },
                onLoad: Y,
                onError: () => {
                  A(!0), U(!1);
                },
                loading: m ? "eager" : "lazy",
                decoding: "async",
                ...p
              }
            ) : /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: X,
                src: r,
                alt: s,
                className: "w-full h-full m-0 object-cover transition-opacity duration-300",
                style: { opacity: L ? 0 : 1 },
                onLoad: Y,
                onError: K,
                loading: m ? "eager" : "lazy",
                decoding: "async",
                ...p
              }
            ),
            n && !L && !k && /* @__PURE__ */ e.jsx(
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
        Z,
        a,
        L,
        h,
        k,
        W,
        o,
        s,
        Y,
        m,
        p,
        r,
        K,
        n
      ]
    );
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      N,
      y && be(
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: V,
            className: `fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${E} ${w ? "bg-black/0 backdrop-blur-none opacity-0 duration-300" : j ? "bg-black/80 backdrop-blur-sm opacity-100 duration-500" : "bg-black/80 backdrop-blur-sm opacity-100 duration-300"}`,
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
            "aria-label": `Preview: ${s}`,
            children: [
              v.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `absolute transition-opacity duration-300 ${w ? "opacity-0" : "opacity-20"}`,
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
                        onClick: z,
                        className: `absolute top-4 right-4 text-white hover:text-accent/80 transition-all duration-300 font-bold z-20 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform ${w ? "bg-black/0 scale-50 rotate-180 opacity-0" : j ? "bg-black/50 scale-0 rotate-0 opacity-0 duration-500" : "bg-black/50 hover:bg-accent/20 scale-100 rotate-0 opacity-100 hover:scale-110"}`,
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
                        className: `relative max-w-full max-h-full flex items-center justify-center transition-all ease-out ${w ? "scale-75 opacity-0 rotate-1 duration-300" : j ? "scale-95 opacity-0 rotate-0 duration-500" : "scale-100 opacity-100 rotate-0 duration-300"}`,
                        onClick: (g) => g.stopPropagation(),
                        children: [
                          v.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: `absolute inset-0 rounded-lg border-2 transition-all duration-300 ${w ? "border-transparent shadow-none" : "border-accent shadow-lg-accent animate-pulse"}`,
                              "aria-hidden": "true"
                            }
                          ),
                          v.cyberpunkEffects && /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: `absolute inset-0 overflow-hidden rounded-lg transition-opacity duration-300 z-10 ${w ? "opacity-0" : "opacity-100"}`,
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
                              src: W ? o : r,
                              alt: W ? `${s} (fallback)` : s,
                              className: `max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg transition-all duration-300 ease-out ${w ? "filter blur-sm brightness-50" : "filter blur-0 brightness-100"}`,
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
                              className: `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-b-lg transition-all duration-300 ${w ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`,
                              children: /* @__PURE__ */ e.jsxs("p", { className: "text-white text-sm font-medium truncate relative", children: [
                                W ? `${s} (fallback)` : s,
                                v.cyberpunkEffects && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 text-accent opacity-20 animate-pulse", children: W ? `${s} (fallback)` : s })
                              ] })
                            }
                          ),
                          v.cyberpunkEffects && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent transition-all duration-300 ${w ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent transition-all duration-300 ${w ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent transition-all duration-300 ${w ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
                                "aria-hidden": "true"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: `absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent transition-all duration-300 ${w ? "opacity-0 scale-0" : "opacity-60 scale-100"}`,
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
const Re = ({
  images: r,
  currentIndex: s,
  onChange: u,
  size: n = "md",
  autoPlay: o = !0,
  interval: h = 3e3,
  infinite: l = !0,
  transition: i = "slide",
  objectFit: m = "cover",
  showArrows: E = !0,
  showIndicators: f = !0,
  className: b = "",
  disableImagePreview: c = !1,
  glitchRate: d = 1,
  onBeforeChange: p,
  onAfterChange: v
}) => {
  const [y, S] = B(!1), [w, $] = B(o), [j, x] = B(!0), L = te(
    () => M(n, J.carousel),
    [n]
  ), D = "w-full h-full", k = R(
    (C) => {
      if (C === s || y) return;
      const t = i === "signal-glitch" && (typeof d == "boolean" ? d : Math.random() < d);
      x(t), S(!0), p?.(s, C), setTimeout(() => {
        u(C), S(!1), v?.(C);
      }, i === "slide" ? 0 : i === "signal-glitch" && t ? 600 : 250);
    },
    [
      s,
      y,
      u,
      p,
      v,
      i,
      d
    ]
  );
  Q(() => {
    if (!w || r.length <= 1) return;
    const C = setInterval(() => {
      const t = l ? (s + 1) % r.length : Math.min(s + 1, r.length - 1);
      if (!l && t === r.length - 1) {
        $(!1);
        return;
      }
      k(t);
    }, h);
    return () => clearInterval(C);
  }, [
    w,
    s,
    r.length,
    l,
    h,
    k
  ]);
  const A = R(() => {
    if (r.length <= 1) return;
    const C = l ? (s - 1 + r.length) % r.length : Math.max(s - 1, 0);
    $(!1), k(C);
  }, [s, r.length, l, k]), W = R(() => {
    if (r.length <= 1) return;
    const C = l ? (s + 1) % r.length : Math.min(s + 1, r.length - 1);
    $(!1), k(C);
  }, [s, r.length, l, k]), U = R(
    (C) => {
      $(!1), k(C);
    },
    [k]
  );
  Q(() => {
    const C = (t) => {
      t.key === "ArrowLeft" && A(), t.key === "ArrowRight" && W();
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [A, W]);
  const V = () => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex h-full transition-transform duration-500 ease-in-out",
      style: {
        transform: `translateX(-${s * 100}%)`,
        willChange: "transform"
      },
      children: r.map((C, t) => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
        ne,
        {
          src: C.src,
          alt: C.alt,
          fallback: C.fallbackSrc,
          className: D,
          size: "lg",
          preview: !c,
          loading: t <= 1 ? "eager" : "lazy",
          onPreviewOpen: () => $(!1),
          onPreviewClose: () => $(o)
        }
      ) }, t))
    }
  ), X = () => /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((C, t) => {
    const a = t === s, N = i === "fade" ? {
      opacity: a ? 1 : 0,
      transition: "opacity 500ms ease-in-out",
      willChange: "opacity"
    } : i === "matrix" ? {
      opacity: a ? 1 : 0,
      transform: a ? "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0) skew(0deg) perspective(1000px)" : y ? "scale(0.6) rotateX(35deg) rotateY(15deg) rotateZ(-3deg) translateZ(-80px) skew(5deg, 2deg) perspective(1000px)" : "scale(0.92) rotateX(8deg) rotateY(2deg) translateZ(-20px) skew(1deg) perspective(1000px)",
      filter: a ? "brightness(1) contrast(1) hue-rotate(0deg) saturate(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))" : y ? "brightness(0.1) contrast(4) hue-rotate(270deg) saturate(3) blur(2px) drop-shadow(0 0 20px rgba(255, 0, 93, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 249, 0.6))" : "brightness(0.7) contrast(1.5) hue-rotate(120deg) saturate(1.4) drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))",
      transition: "all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      willChange: "transform, opacity, filter",
      boxShadow: a ? "0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.15), 0 0 60px rgba(0, 255, 136, 0.2)" : y ? "0 0 50px rgba(255, 0, 93, 1), 0 0 100px rgba(0, 255, 249, 0.8), 0 0 150px rgba(255, 251, 0, 0.6), inset 0 0 50px rgba(255, 0, 93, 0.3), inset 0 0 80px rgba(0, 255, 249, 0.2), 0 0 0 3px rgba(255, 0, 93, 0.8), 0 0 0 6px rgba(0, 255, 249, 0.6), 0 0 200px rgba(255, 251, 0, 0.3)" : "0 0 20px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1), 0 0 40px rgba(0, 255, 136, 0.2)"
    } : {};
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-0 w-full h-full",
        style: {
          ...N,
          pointerEvents: a ? "auto" : "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            ne,
            {
              src: C.src,
              alt: C.alt,
              fallback: C.fallbackSrc,
              className: D,
              size: "lg",
              preview: !c,
              loading: t <= 1 ? "eager" : "lazy",
              onPreviewOpen: () => $(!1),
              onPreviewClose: () => $(o)
            }
          ),
          i === "matrix" && Y(a, y)
        ]
      },
      t
    );
  }) }), H = () => /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((C, t) => {
    const a = t === s, N = t === (s - 1 + r.length) % r.length, g = y && i === "signal-glitch" && j ? {
      opacity: a ? 1 : N ? 0.8 : 0,
      animation: a ? "signal-image-flicker-in 1s ease-out forwards" : N ? "signal-image-flicker-out 1s ease-out forwards" : "none",
      willChange: "opacity",
      pointerEvents: y && !a ? "none" : "auto",
      transform: y ? "translateZ(0)" : "none"
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
        style: g,
        children: [
          /* @__PURE__ */ e.jsx(
            ne,
            {
              src: C.src,
              alt: C.alt,
              fallback: C.fallbackSrc,
              className: D,
              size: "lg",
              preview: !c && !(y && i === "signal-glitch" && j),
              loading: t <= 1 ? "eager" : "lazy",
              onPreviewOpen: () => $(!1),
              onPreviewClose: () => $(o)
            }
          ),
          i === "signal-glitch" && y && j && K(a)
        ]
      },
      t
    );
  }) }), Y = (C, t) => /* @__PURE__ */ e.jsx(e.Fragment, { children: t && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: C ? (
    // Active image gets subtle enhancement effects
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-30" })
  ) : (
    // Transitioning image gets more dramatic effects
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10 opacity-50" })
  ) }) }), K = (C) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute inset-0 pointer-events-none z-5 ${C ? "opacity-30" : "opacity-15"}`,
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
  ] }), Z = () => E && r.length > 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: A,
        disabled: !l && s === 0 || y && i === "signal-glitch" && j,
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
        onClick: W,
        disabled: !l && s === r.length - 1 || y && i === "signal-glitch" && j,
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
  ] }), z = () => f && r.length > 1 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4 space-x-4", children: r.map((C, t) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => U(t),
      disabled: y && i === "signal-glitch" && j,
      className: "group relative transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",
      style: {
        width: "24px",
        height: "24px"
      },
      "aria-label": `Go to slide ${t + 1}`,
      children: [
        t === s && /* @__PURE__ */ e.jsx(
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
            className: `absolute inset-0 border-2 transition-all duration-300 ${t === s ? "border-primary bg-primary/30 shadow-lg-primary animate-[rgbBorder_1.5s_linear_infinite]" : "border-accent bg-surface/50 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-primary group-hover:animate-[rgbBorder_1.5s_linear_infinite]"}`,
            style: {
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            }
          }
        ),
        t === s && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-2 bg-primary/60 animate-pulse",
            style: {
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              animation: "rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"
            }
          }
        ),
        t === s && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 opacity-80", children: [
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
  if (r.length === 0)
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${L} w-full bg-surface border border-accent rounded-lg flex items-center justify-center ${b}`,
        children: /* @__PURE__ */ e.jsx("p", { className: "text-muted", children: "No images to display" })
      }
    );
  const q = r[s];
  return /* @__PURE__ */ e.jsxs("div", { className: `relative w-full ${b}`, children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative w-full overflow-hidden rounded-lg border border-accent bg-surface ${L}`,
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
                i === "slide" && V(),
                (i === "fade" || i === "matrix") && X(),
                i === "signal-glitch" && H()
              ]
            }
          ),
          q.caption && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4", children: /* @__PURE__ */ e.jsx("p", { className: "text-white text-sm font-medium", children: q.caption }) }),
          Z()
        ]
      }
    ),
    z()
  ] });
}, Xe = ie(Re), Le = {
  openDuration: 600,
  closeDuration: 400,
  crtEffects: !0
}, Me = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-none w-full h-full"
}, Ae = ie(
  ({
    isOpen: r,
    onClose: s,
    title: u,
    children: n,
    footer: o,
    onCancel: h,
    onConfirm: l,
    cancelText: i = "Cancel",
    confirmText: m = "Confirm",
    confirmLoading: E = !1,
    showCancel: f = !0,
    showConfirm: b = !0,
    size: c = "md",
    closeOnOverlayClick: d = !0,
    closeOnEscape: p = !0,
    animation: v,
    className: y = "",
    overlayClassName: S = "",
    showCloseButton: w = !0,
    onOpen: $,
    onCRTBootComplete: j
  }) => {
    const x = te(
      () => ({ ...Le, ...v }),
      [v]
    ), [L, D] = B(!1), [k, A] = B(!0), W = G(null), U = G(null), V = G(null), X = G(`modal-title-${Math.random().toString(36).slice(2)}`), H = R(() => {
      D(!0), setTimeout(() => {
        D(!1), A(!0), s();
      }, x.closeDuration);
    }, [s, x.closeDuration]);
    Q(() => {
      r && !L && (V.current = document.activeElement || null, A(!0), $?.(), setTimeout(() => {
        A(!1), j?.(), U.current?.focus();
      }, x.openDuration));
    }, [
      r,
      L,
      $,
      j,
      x.openDuration
    ]);
    const Y = R(() => {
      h?.(), H();
    }, [h, H]), K = R(() => {
      l?.(), H();
    }, [l, H]), Z = R(
      (C) => {
        d && (C.target === W.current || C.target === C.currentTarget) && H();
      },
      [H, d]
    ), z = R(
      (C) => {
        p && C.key === "Escape" && H();
      },
      [H, p]
    );
    Q(() => {
      if (r) {
        document.addEventListener("keydown", z);
        const C = document.body.style.overflow, t = window.innerWidth - document.documentElement.clientWidth;
        return document.body.style.overflow = "hidden", document.body.style.paddingRight = `${t}px`, () => {
          document.removeEventListener("keydown", z), document.body.style.overflow = C, document.body.style.paddingRight = "", V.current?.focus?.();
        };
      }
    }, [r, z]);
    const q = te(
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
        Me[c],
        x.crtEffects && k ? "animate-crt-power-on border-accent shadow-lg-accent" : x.crtEffects && L ? "animate-crt-power-off border-accent shadow-lg-accent" : L ? "scale-95 opacity-0 border-accent/20" : k ? "scale-105 opacity-90 border-accent shadow-input-accent/50" : "scale-100 opacity-100 animate-rgb-glow",
        y
      ].filter(Boolean).join(" "),
      [c, x.crtEffects, L, k, y]
    );
    return r ? be(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: W,
          className: `fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${S} ${L ? "bg-black/0 backdrop-blur-none opacity-0 duration-800" : k ? "bg-black/30 backdrop-blur-md opacity-100 duration-500" : "bg-black/30 backdrop-blur-sm opacity-100 duration-300"}`,
          style: {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh"
          },
          onClick: Z,
          "aria-hidden": !0,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: U,
              className: q,
              onClick: (C) => C.stopPropagation(),
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": u ? X.current : void 0,
              tabIndex: -1,
              children: [
                w && /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: H,
                    className: `absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${L ? "scale-0 rotate-180 opacity-0" : k ? "scale-0 opacity-0" : "scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,
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
                    className: `px-6 py-4 border-b border-accent/20 flex-shrink-0 transition-all duration-300 ${k ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`,
                    children: /* @__PURE__ */ e.jsx("h2", { id: X.current, className: "text-lg font-semibold text-primary", children: u })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `flex-1 overflow-auto p-6 transition-all duration-500 ${k ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`,
                    children: n
                  }
                ),
                (o || h || l) && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: `px-6 py-4 border-t border-accent/20 flex-shrink-0 transition-all duration-300 ${k ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`,
                    children: o || /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col-reverse sm:flex-row justify-between items-center gap-3", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-muted text-xs font-mono hidden sm:block", children: "> ESC to abort" }),
                      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3 w-full sm:w-auto", children: [
                        f && h && /* @__PURE__ */ e.jsx(he, { variant: "ghost", size: "sm", onClick: Y, className: "flex-1 sm:flex-none", children: i }),
                        b && l && /* @__PURE__ */ e.jsx(
                          he,
                          {
                            variant: "primary",
                            size: "sm",
                            onClick: K,
                            disabled: E,
                            className: "flex-1 sm:flex-none",
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
Ae.displayName = "CyberUI.Modal";
const qe = ({
  children: r,
  variant: s = "primary",
  as: u = "span",
  className: n = ""
}) => {
  const o = (l) => ({
    primary: "bg-linear-(--gradient-primary)",
    secondary: "bg-linear-(--gradient-secondary)",
    accent: "bg-linear-(--gradient-accent)"
  })[l];
  return /* @__PURE__ */ e.jsx(
    u,
    {
      className: `bg-clip-text text-transparent inline-block ${o(s)} ${n}`,
      children: r
    }
  );
}, Ke = ({
  children: r,
  showLine: s = !0,
  size: u = "md",
  className: n = ""
}) => {
  const o = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, h = {
    sm: "mb-4",
    md: "mb-6",
    lg: "mb-8"
  }, l = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-5"
  }, i = M(u, o), m = M(u, h), f = `flex items-center ${M(u, l)} ${m}`, b = `uppercase tracking-[0.2em] text-secondary font-bold whitespace-nowrap ${i}`;
  return /* @__PURE__ */ e.jsxs("div", { className: `${f} ${n}`, children: [
    /* @__PURE__ */ e.jsx("h2", { className: b, children: r }),
    s && /* @__PURE__ */ e.jsx("div", { className: "h-[1px] w-full bg-gradient-to-r from-secondary/50 to-transparent" })
  ] });
}, Je = ({
  events: r,
  size: s = "md",
  className: u = ""
}) => {
  const n = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }, o = {
    sm: "inset-1.5",
    md: "inset-2",
    lg: "inset-2.5"
  }, h = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }, l = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, i = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm"
  }, m = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-5"
  }, E = {
    sm: "space-y-4",
    md: "space-y-6",
    lg: "space-y-8"
  }, f = M(s, n), b = M(s, o), c = M(s, h), d = M(s, l), p = M(s, i), v = M(s, m), y = M(s, E), S = ($) => {
    const j = {
      success: {
        border: "border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]",
        background: "border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]",
        inner: "bg-success/60"
      },
      error: {
        border: "border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]",
        background: "border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]",
        inner: "bg-error/60"
      },
      warning: {
        border: "border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]",
        background: "border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]",
        inner: "bg-warning/60"
      },
      info: {
        border: "border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]",
        background: "border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]",
        inner: "bg-info/60"
      }
    };
    return j[$] || j.info;
  }, w = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
  return /* @__PURE__ */ e.jsx("div", { className: `${y} ${u}`, children: r.map(($, j) => {
    const x = S($.status);
    return /* @__PURE__ */ e.jsxs("div", { className: `flex ${v} group`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e.jsxs("div", { className: `relative ${f} flex-shrink-0 mt-1.5`, children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute inset-0 border-2 transition-all duration-300 ${x.border}`,
              style: { clipPath: w }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `absolute ${b} ${x.inner}`,
              style: { clipPath: w }
            }
          )
        ] }),
        j < r.length - 1 && /* @__PURE__ */ e.jsx("div", { className: "w-[2px] flex-1 bg-gradient-to-b from-secondary/50 to-transparent mt-2" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 pb-6", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ e.jsx("h4", { className: `font-semibold text-default group-hover:text-secondary transition-colors ${c}`, children: $.title }),
          /* @__PURE__ */ e.jsx("span", { className: `text-muted whitespace-nowrap ml-4 ${p}`, children: $.time })
        ] }),
        $.description && /* @__PURE__ */ e.jsx("p", { className: `text-muted mt-1 ${d}`, children: $.description })
      ] })
    ] }, j);
  }) });
}, Qe = ({
  items: r,
  current: s = 0,
  orientation: u = { base: "vertical", md: "horizontal" },
  className: n = ""
}) => {
  const h = pe(u, "vertical") === "vertical", l = (c, d) => {
    const p = c.status === "completed" || c.status === void 0 && d < s, v = c.status === "current" || c.status === void 0 && d === s && s < r.length, y = c.status === "error";
    return { isCompleted: p, isCurrent: v, isError: y };
  }, i = (c, d, p) => {
    const v = [
      "relative px-2 py-1 pb-2 font-bold text-sm transition-colors duration-200 whitespace-nowrap overflow-hidden",
      "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out",
      "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[3px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200"
    ].join(" ");
    return c ? `${v} text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100` : d ? `${v} text-secondary before:opacity-100` : p ? `${v} text-error` : `${v} text-muted`;
  }, m = (c, d, p, v) => ({
    color: "var(--color-primary)",
    opacity: p ? 0.8 : 0.3,
    filter: p ? "drop-shadow(0 0 4px color-mix(in srgb, var(--color-primary), transparent 40%))" : "none",
    animation: d && c ? `chevronFlow 1.5s ease-in-out infinite ${v * 0.2}s` : "none"
  }), E = h ? `flex flex-col items-start gap-0 ${n}` : `flex items-center justify-center gap-4 ${n}`, f = (c, d, p) => c ? "text-secondary drop-shadow-[0_0_4px_var(--color-secondary)]" : d ? "text-accent drop-shadow-[0_0_6px_var(--color-accent)]" : p ? "text-error drop-shadow-[0_0_4px_var(--color-error)]" : "text-muted/50", b = (c, d, p) => {
    const v = [
      "relative font-bold text-sm transition-colors duration-200 pb-1 w-fit",
      "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out"
    ].join(" ");
    return c ? `${v} text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100` : d ? `${v} text-secondary` : p ? `${v} text-error` : `${v} text-muted`;
  };
  return /* @__PURE__ */ e.jsx("div", { className: E, children: r.map((c, d) => {
    const { isCompleted: p, isCurrent: v, isError: y } = l(c, d), S = d < r.length - 1 && (r[d + 1]?.status === "current" || r[d + 1]?.status === void 0 && d + 1 === s && s < r.length), w = d < r.length - 1 && (r[d + 1]?.status === "completed" || r[d + 1]?.status === void 0 && d + 1 < s);
    return /* @__PURE__ */ e.jsxs(le.Fragment, { children: [
      h ? (
        // Vertical layout: step row + chevrons below
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col w-full", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-1.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: `text-xs leading-5 flex-shrink-0 ${f(p, v, y)}`, children: "▸" }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ e.jsx("div", { className: b(p, v, y), children: c.title }),
              c.description && /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted mt-0.5 font-normal", children: c.description })
            ] })
          ] }),
          d < r.length - 1 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center py-0.5", children: [0, 1, 2].map(($) => /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "text-sm font-bold transition-all duration-300 rotate-90 leading-[0.6]",
              style: m(p, S, w, $),
              children: "›"
            },
            $
          )) })
        ] })
      ) : (
        // Horizontal layout: title and description stacked with underline indicator
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ e.jsx("div", { className: i(p, v, y), children: c.title }),
          c.description && /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted mt-1 font-normal", children: c.description })
        ] })
      ),
      !h && d < r.length - 1 && /* @__PURE__ */ e.jsx("div", { className: "flex", children: [0, 1, 2].map(($) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "text-2xl font-bold transition-all duration-300",
          style: m(p, S, w, $),
          children: "›"
        },
        $
      )) })
    ] }, d);
  }) });
}, et = ({
  variant: r = "gradient",
  orientation: s = "horizontal",
  className: u = ""
}) => {
  const n = (l) => l === "horizontal" ? "w-full h-[1px]" : "w-[1px] h-full", o = (l, i) => ({
    gradient: i === "horizontal" ? "bg-gradient-to-r from-transparent via-secondary/50 to-transparent" : "bg-gradient-to-b from-transparent via-secondary/50 to-transparent",
    solid: "bg-secondary/30",
    dashed: `border-dashed border-secondary/50 ${i === "horizontal" ? "border-t" : "border-l"}`
  })[l], h = [
    n(s),
    o(r, s),
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx("div", { className: h });
}, tt = ({
  label: r,
  error: s,
  size: u = "md",
  className: n = "",
  checked: o,
  onChange: h,
  disabled: l,
  ...i
}) => {
  const [m, E] = le.useState(i.defaultChecked || !1), f = o !== void 0 ? o : m, b = (j) => {
    l || (o === void 0 && E(j.target.checked), h?.(j));
  }, c = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, d = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, p = {
    sm: "ml-6",
    md: "ml-8",
    lg: "ml-9"
  }, v = M(u, c), y = M(u, d), S = M(u, p), w = (j) => {
    if (l) return "stroke-muted/20";
    const x = "transition-all duration-200 group-hover:stroke-secondary group-hover:stroke-[1.5]";
    return j ? `${x} stroke-secondary` : `${x} stroke-secondary/50`;
  }, $ = (j) => {
    const x = "transition-all duration-200";
    return l ? j ? `${x} fill-muted/20` : `${x} fill-transparent` : j ? `${x} fill-secondary` : `${x} fill-transparent`;
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col gap-1 ${n} ${l ? "opacity-50 cursor-not-allowed" : ""}`, children: [
    /* @__PURE__ */ e.jsxs("label", { className: `flex items-center gap-3 group ${l ? "cursor-not-allowed pointer-events-none" : "cursor-pointer"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: `relative flex-shrink-0 ${v}`, children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            className: "absolute opacity-0 w-0 h-0",
            checked: f,
            onChange: b,
            disabled: l,
            ...i
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full pointer-events-none",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M 1 1 L 19 1 L 19 15 L 15 19 L 1 19 Z",
                  className: "fill-base/50"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M 1 1 L 19 1 L 19 15 L 15 19 L 1 19 Z",
                  className: w(f),
                  strokeWidth: "1",
                  fill: "none"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  d: "M 4 4 L 16 4 L 16 13 L 13 16 L 4 16 Z",
                  className: $(f)
                }
              )
            ]
          }
        )
      ] }),
      r && /* @__PURE__ */ e.jsx("span", { className: `transition-colors ${y} ${l ? "text-muted" : "text-muted group-hover:text-secondary"}`, children: r })
    ] }),
    s && !l && /* @__PURE__ */ e.jsx("span", { className: `text-xs text-error ${S}`, children: s })
  ] });
}, ee = {
  MOBILE_BREAKPOINT: 768,
  STABLE_TIMEOUT: 1e3,
  MOBILE_HIDE_DELAY: 1e3,
  VELOCITY_MULTIPLIER: 2,
  DISTANCE_THRESHOLD: 100,
  MAX_ANIMATION_SPEED: 5,
  MIN_GLOW_DURATION: 150
}, rt = (r = {}) => {
  const {
    glowColor: s = "primary",
    sensitivity: u = 2,
    disabled: n = !1,
    pageLevel: o,
    variant: h = "default",
    className: l = ""
  } = r, i = G(null), m = G(null), E = G(Date.now()), f = G(0), b = G(void 0), c = G([]), d = G(void 0), [p, v] = B({
    isScrolling: !1,
    direction: null,
    velocity: 0,
    position: 0,
    scrollDistance: 0
  }), [y, S] = B(!1), [w, $] = B(() => typeof window > "u" ? !1 : window.innerWidth >= ee.MOBILE_BREAKPOINT), j = G(0), [x, L] = B(o ?? !1);
  Q(() => {
    if (o !== void 0)
      L(o);
    else {
      const t = setTimeout(() => {
        const a = i.current !== null;
        L(!a);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [o]);
  const D = R((t) => {
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
  }, []), k = R(() => {
    const t = window.innerWidth < ee.MOBILE_BREAKPOINT;
    return {
      isMobile: t,
      scrollbarWidth: t ? 12 : 16,
      arrowSize: t ? 10 : 14,
      lineSize: t ? 8 : 12,
      arrowGap: t ? 2 : 4
    };
  }, []), A = R((t, a, N, g) => {
    const T = (g + N) * 2, F = N * 4, P = (t - T - F) / 2;
    return Math.floor(P / (a + N));
  }, []), W = R((t) => {
    if (x) {
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
  }, [x]), U = R((t, a, N, g) => {
    const T = document.createElement("div"), F = t === "arrow";
    F && a ? (T.className = `cyber-arrow cyber-arrow-${a} cyber-arrow-${N}`, T.innerHTML = a === "up" ? "▲" : "▼") : (T.className = `cyber-line cyber-line-${N}`, T.innerHTML = "=");
    const _ = g.isMobile ? "none" : `drop-shadow(0 0 6px var(--color-${s}))
         drop-shadow(0 0 12px var(--color-${s}))
         drop-shadow(0 0 18px var(--color-${s}))`;
    return T.style.cssText = `
      font-size: ${F ? g.arrowSize : g.lineSize}px;
      color: var(--color-${s});
      opacity: 0;
      transition: all 0.2s ease;
      filter: ${_};
      line-height: 1;
      font-weight: bold;
    `, T;
  }, [s]), V = R(() => {
    if (x)
      return {
        height: window.innerHeight,
        top: 0,
        right: 0
      };
    {
      const a = i.current.getBoundingClientRect();
      return {
        height: a.height,
        top: a.top,
        right: window.innerWidth - a.right
      };
    }
  }, [x]), X = R(() => {
    if (n || !x && !i.current || (m.current && m.current.remove(), !(x ? document.body.scrollHeight > window.innerHeight : i.current.scrollHeight > i.current.clientHeight))) return;
    const a = k(), N = V(), g = A(N.height, a.arrowSize, a.arrowGap, a.lineSize);
    W(x ? void 0 : i.current || void 0);
    const T = document.createElement("div");
    T.className = `cyber-scrollbar ${l}`.trim();
    const _ = a.isMobile ? "transparent" : h, P = D(_);
    T.style.cssText = `
      position: fixed;
      top: ${N.top}px;
      right: ${N.right}px;
      width: ${a.scrollbarWidth}px;
      height: ${N.height}px;
      pointer-events: none;
      z-index: 9999;
      display: ${w ? "flex" : "none"};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${a.arrowGap}px;
      background: ${P.background};
      backdrop-filter: ${P.backdropFilter};
      border-radius: ${x ? "4px 0 0 4px" : "4px"};
      border: ${P.border};
      box-shadow: ${P.boxShadow};
    `;
    for (let O = 0; O < g; O++)
      T.appendChild(U("arrow", "up", O, a));
    for (let O = 0; O < 2; O++)
      T.appendChild(U("line", void 0, O, a));
    for (let O = 0; O < g; O++)
      T.appendChild(U("arrow", "down", O, a));
    document.body.appendChild(T), m.current = T;
    const I = x ? void 0 : () => {
      const O = i.current;
      if (O) {
        const re = O.getBoundingClientRect();
        T.style.top = `${re.top}px`, T.style.right = `${window.innerWidth - re.right}px`, T.style.height = `${re.height}px`;
      }
    };
    return I && (window.addEventListener("resize", I), window.addEventListener("scroll", I)), () => {
      T.remove(), !x && i.current && i.current.classList.remove("cyber-scrollbar-container"), I && (window.removeEventListener("resize", I), window.removeEventListener("scroll", I));
    };
  }, [n, x, w, W, V, U, k, A, D, h, l]), H = R((t, a) => {
    const N = Math.max(1, Math.min(3, Math.ceil(t * 0.8))), g = Math.floor(a / ee.DISTANCE_THRESHOLD);
    return N + g;
  }, []), Y = R((t, a, N) => {
    const g = Array.from(t).filter(
      (F) => F.classList.contains(`cyber-arrow-${a}`)
    ), T = Math.min(N, g.length);
    return a === "up" ? g.slice(-T) : g.slice(0, T);
  }, []), K = R((t, a, N) => {
    const g = Math.min(a * u, ee.MAX_ANIMATION_SPEED), T = window.innerWidth < ee.MOBILE_BREAKPOINT, F = Math.max(300 / g, ee.MIN_GLOW_DURATION) * (T ? 1.5 : 1), _ = Math.max(40, 80 / g) * (T ? 1.25 : 1), P = N === "up" ? [...t].reverse() : t;
    P.forEach((I) => {
      I.style.opacity = "0.3";
    }), P.forEach((I, O) => {
      const re = O * _, xe = setTimeout(() => {
        I.style.opacity = "1";
        const ve = setTimeout(() => {
          I.style.opacity = "0.3";
        }, F);
        c.current.push(ve);
      }, re);
      c.current.push(xe);
    });
  }, [u]), Z = R(() => {
    if (!m.current) return;
    const { isScrolling: t, direction: a, velocity: N, scrollDistance: g } = p, T = m.current.querySelectorAll(".cyber-arrow"), F = m.current.querySelectorAll(".cyber-line");
    if (t && a) {
      F.forEach((P) => {
        P.style.opacity = "0";
      });
      const _ = H(N, g);
      if (_ !== j.current) {
        c.current.forEach((I) => clearTimeout(I)), c.current = [], T.forEach((I) => {
          I.style.opacity = "0";
        });
        const P = Y(Array.from(T), a, _);
        K(P, N, a), j.current = _;
      }
    } else
      c.current.forEach((_) => clearTimeout(_)), c.current = [], j.current = 0, T.forEach((_) => {
        _.style.opacity = "0";
      }), y && F.forEach((_) => {
        _.style.opacity = "0.6";
      });
  }, [p, y, K, H, Y]), z = G(null), q = R(() => {
    if (n || !x && !i.current) return;
    const t = Date.now(), a = x ? {
      currentScrollTop: window.scrollY,
      scrollHeight: document.body.scrollHeight,
      clientHeight: window.innerHeight
    } : {
      currentScrollTop: i.current.scrollTop,
      scrollHeight: i.current.scrollHeight,
      clientHeight: i.current.clientHeight
    }, N = t - E.current, g = a.currentScrollTop - f.current, F = Math.abs(g) / Math.max(N, 1) * ee.VELOCITY_MULTIPLIER, _ = g > 0 ? "down" : g < 0 ? "up" : null, P = a.currentScrollTop / (a.scrollHeight - a.clientHeight);
    y || S(!0);
    const I = window.innerWidth < ee.MOBILE_BREAKPOINT;
    I && !w && $(!0), v((O) => ({
      isScrolling: !0,
      direction: _,
      velocity: F,
      position: P,
      scrollDistance: O.direction !== _ ? Math.abs(g) : O.scrollDistance + Math.abs(g)
    })), b.current && clearTimeout(b.current), d.current && clearTimeout(d.current), b.current = setTimeout(() => {
      c.current.forEach((O) => clearTimeout(O)), c.current = [], v((O) => ({
        ...O,
        isScrolling: !1,
        velocity: 0,
        scrollDistance: 0
      })), I && (d.current = setTimeout(() => {
        $(!1);
      }, ee.MOBILE_HIDE_DELAY));
    }, ee.STABLE_TIMEOUT), E.current = t, f.current = a.currentScrollTop;
  }, [n, x, y, w]), C = R(() => {
    z.current === null && (z.current = requestAnimationFrame(() => {
      z.current = null, q();
    }));
  }, [q]);
  return Q(() => {
    if (n || !x && !i.current) return;
    const t = X(), a = x ? window : i.current;
    return a.addEventListener("scroll", C, { passive: !0 }), () => {
      a.removeEventListener("scroll", C), b.current && clearTimeout(b.current), d.current && clearTimeout(d.current), c.current.forEach((N) => clearTimeout(N)), z.current !== null && (cancelAnimationFrame(z.current), z.current = null), t?.();
    };
  }, [X, C, n, x]), Q(() => {
    Z();
  }, [Z]), i;
}, ge = ye(void 0), st = () => {
  const r = we(ge);
  if (r === void 0)
    throw new Error(
      "useCyberNotifications must be used within a CyberNotificationProvider"
    );
  return r;
}, at = ({ children: r, position: s = "top-right", defaultDuration: u = 2500 }) => {
  const [n, o] = B([]), h = R(
    (f, b, c, d = {}) => {
      const p = Date.now().toString(), { autoHide: v = !0, duration: y = u } = d;
      return o((S) => [...S, { id: p, type: f, title: b, message: c }]), v && setTimeout(() => {
        o(
          (S) => S.map((w) => w.id === p ? { ...w, isClosing: !0 } : w)
        ), setTimeout(() => {
          o((S) => S.filter((w) => w.id !== p));
        }, 500);
      }, y), p;
    },
    [u]
  ), l = R((f) => {
    o(
      (b) => b.map((c) => c.id === f ? { ...c, isClosing: !0 } : c)
    ), setTimeout(() => {
      o((b) => b.filter((c) => c.id !== f));
    }, 500);
  }, []), i = R(() => {
    o([]);
  }, []), m = R((f, b) => {
    o(
      (c) => c.map((d) => d.id === f ? { ...d, width: b } : d)
    );
  }, []), E = {
    notifications: n,
    showNotification: h,
    hideNotification: l,
    clearAllNotifications: i
  };
  return /* @__PURE__ */ e.jsxs(ge.Provider, { value: E, children: [
    r,
    n.length > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `fixed z-50 ${Oe(s)}`,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "true",
        children: n.map((f, b) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute",
            style: {
              right: s.includes("right") ? 0 : void 0,
              left: s.includes("left") ? 0 : void 0,
              top: `${b * 70}px`,
              width: f.width ? `${f.width}px` : "auto"
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `transform transition-all duration-500 ease-out scale-75 opacity-90 w-full ${s.includes("right") ? "flex justify-end" : "flex justify-start"} ${f.isClosing ? `${s.includes("right") ? "translate-x-full" : "-translate-x-full"} opacity-0` : "translate-x-0 opacity-90"}`,
                style: {
                  whiteSpace: "nowrap",
                  transformOrigin: s.includes("right") ? "right center" : "left center",
                  transform: f.isClosing ? `translateX(${s.includes("right") ? "100%" : "-100%"}) scale(0.75)` : `translateX(${f.width ? "0px" : s.includes("right") ? "100%" : "-100%"}) scale(0.75)`
                },
                ref: (c) => {
                  if (c && !f.width) {
                    const d = c.scrollWidth;
                    m(f.id, d);
                  }
                },
                children: /* @__PURE__ */ e.jsx(
                  _e,
                  {
                    type: f.type,
                    title: f.title,
                    message: f.message,
                    onClose: () => l(f.id),
                    size: "sm"
                  }
                )
              }
            )
          },
          f.id
        ))
      }
    )
  ] });
}, Oe = (r) => {
  const s = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  };
  return s[r] || s["top-right"];
}, ot = "1.3.2";
export {
  Ue as Badge,
  he as Button,
  Ge as Card,
  Xe as Carousel,
  tt as Checkbox,
  Be as CircularProgress,
  at as CyberNotificationProvider,
  et as Divider,
  qe as GradientText,
  ne as Image,
  He as Input,
  Fe as LinearProgress,
  Ae as Modal,
  _e as Notification,
  J as RESPONSIVE_SIZE_MAPS,
  Ke as SectionTitle,
  We as SegmentedProgress,
  Ye as Select,
  Ze as Skeleton,
  Qe as Steps,
  ze as TabNavigation,
  Je as Timeline,
  Ve as Toggle,
  De as combineResponsiveClasses,
  M as getResponsiveClasses,
  st as useCyberNotifications,
  rt as useCyberScrollbar,
  ot as version
};
//# sourceMappingURL=index.es.js.map
