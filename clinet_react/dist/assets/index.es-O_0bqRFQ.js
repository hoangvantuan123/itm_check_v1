import { c as Ke, g as Io, _ as xe, a as xi } from './index-DcEcJrXq.js'
var vt = function (a) {
    return a && a.Math === Math && a
  },
  V =
    vt(typeof globalThis == 'object' && globalThis) ||
    vt(typeof window == 'object' && window) ||
    vt(typeof self == 'object' && self) ||
    vt(typeof Ke == 'object' && Ke) ||
    vt(typeof Ke == 'object' && Ke) ||
    (function () {
      return this
    })() ||
    Function('return this')(),
  $t = {},
  k = function (a) {
    try {
      return !!a()
    } catch {
      return !0
    }
  },
  Sl = k,
  le = !Sl(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1] !== 7
    )
  }),
  El = k,
  mr = !El(function () {
    var a = function () {}.bind()
    return typeof a != 'function' || a.hasOwnProperty('prototype')
  }),
  $l = mr,
  Ut = Function.prototype.call,
  Y = $l
    ? Ut.bind(Ut)
    : function () {
        return Ut.apply(Ut, arguments)
      },
  Mo = {},
  _o = {}.propertyIsEnumerable,
  Vo = Object.getOwnPropertyDescriptor,
  wl = Vo && !_o.call({ 1: 2 }, 1)
Mo.f = wl
  ? function (e) {
      var t = Vo(this, e)
      return !!t && t.enumerable
    }
  : _o
var Ti = function (a, e) {
    return {
      enumerable: !(a & 1),
      configurable: !(a & 2),
      writable: !(a & 4),
      value: e,
    }
  },
  Do = mr,
  ko = Function.prototype,
  Ga = ko.call,
  Cl = Do && ko.bind.bind(Ga, Ga),
  L = Do
    ? Cl
    : function (a) {
        return function () {
          return Ga.apply(a, arguments)
        }
      },
  Lo = L,
  Al = Lo({}.toString),
  Pl = Lo(''.slice),
  Be = function (a) {
    return Pl(Al(a), 8, -1)
  },
  Rl = L,
  Nl = k,
  Il = Be,
  Qr = Object,
  Ml = Rl(''.split),
  Bo = Nl(function () {
    return !Qr('z').propertyIsEnumerable(0)
  })
    ? function (a) {
        return Il(a) === 'String' ? Ml(a, '') : Qr(a)
      }
    : Qr,
  Fe = function (a) {
    return a == null
  },
  _l = Fe,
  Vl = TypeError,
  he = function (a) {
    if (_l(a)) throw new Vl("Can't call method on " + a)
    return a
  },
  Dl = Bo,
  kl = he,
  wt = function (a) {
    return Dl(kl(a))
  },
  Kr = typeof document == 'object' && document.all,
  B =
    typeof Kr > 'u' && Kr !== void 0
      ? function (a) {
          return typeof a == 'function' || a === Kr
        }
      : function (a) {
          return typeof a == 'function'
        },
  Ll = B,
  ve = function (a) {
    return typeof a == 'object' ? a !== null : Ll(a)
  },
  Zr = V,
  Bl = B,
  Fl = function (a) {
    return Bl(a) ? a : void 0
  },
  je = function (a, e) {
    return arguments.length < 2 ? Fl(Zr[a]) : Zr[a] && Zr[a][e]
  },
  jl = L,
  br = jl({}.isPrototypeOf),
  Ul = V,
  gn = Ul.navigator,
  dn = gn && gn.userAgent,
  Ct = dn ? String(dn) : '',
  Fo = V,
  Jr = Ct,
  pn = Fo.process,
  yn = Fo.Deno,
  mn = (pn && pn.versions) || (yn && yn.version),
  bn = mn && mn.v8,
  ue,
  fr
bn &&
  ((ue = bn.split('.')), (fr = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1])))
!fr &&
  Jr &&
  ((ue = Jr.match(/Edge\/(\d+)/)),
  (!ue || ue[1] >= 74) &&
    ((ue = Jr.match(/Chrome\/(\d+)/)), ue && (fr = +ue[1])))
var Oi = fr,
  xn = Oi,
  zl = k,
  Gl = V,
  Hl = Gl.String,
  jo =
    !!Object.getOwnPropertySymbols &&
    !zl(function () {
      var a = Symbol('symbol detection')
      return (
        !Hl(a) ||
        !(Object(a) instanceof Symbol) ||
        (!Symbol.sham && xn && xn < 41)
      )
    }),
  Yl = jo,
  Uo = Yl && !Symbol.sham && typeof Symbol.iterator == 'symbol',
  Xl = je,
  Wl = B,
  ql = br,
  Ql = Uo,
  Kl = Object,
  zo = Ql
    ? function (a) {
        return typeof a == 'symbol'
      }
    : function (a) {
        var e = Xl('Symbol')
        return Wl(e) && ql(e.prototype, Kl(a))
      },
  Zl = String,
  xr = function (a) {
    try {
      return Zl(a)
    } catch {
      return 'Object'
    }
  },
  Jl = B,
  eh = xr,
  th = TypeError,
  Te = function (a) {
    if (Jl(a)) return a
    throw new th(eh(a) + ' is not a function')
  },
  rh = Te,
  ah = Fe,
  ot = function (a, e) {
    var t = a[e]
    return ah(t) ? void 0 : rh(t)
  },
  ea = Y,
  ta = B,
  ra = ve,
  ih = TypeError,
  nh = function (a, e) {
    var t, r
    if (
      (e === 'string' && ta((t = a.toString)) && !ra((r = ea(t, a)))) ||
      (ta((t = a.valueOf)) && !ra((r = ea(t, a)))) ||
      (e !== 'string' && ta((t = a.toString)) && !ra((r = ea(t, a))))
    )
      return r
    throw new ih("Can't convert object to primitive value")
  },
  Go = { exports: {} },
  Tn = V,
  sh = Object.defineProperty,
  Si = function (a, e) {
    try {
      sh(Tn, a, { value: e, configurable: !0, writable: !0 })
    } catch {
      Tn[a] = e
    }
    return e
  },
  oh = V,
  uh = Si,
  On = '__core-js_shared__',
  Sn = (Go.exports = oh[On] || uh(On, {}))
;(Sn.versions || (Sn.versions = [])).push({
  version: '3.38.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
  source: 'https://github.com/zloirock/core-js',
})
var Ei = Go.exports,
  En = Ei,
  $i = function (a, e) {
    return En[a] || (En[a] = e || {})
  },
  lh = he,
  hh = Object,
  Tr = function (a) {
    return hh(lh(a))
  },
  vh = L,
  fh = Tr,
  ch = vh({}.hasOwnProperty),
  fe =
    Object.hasOwn ||
    function (e, t) {
      return ch(fh(e), t)
    },
  gh = L,
  dh = 0,
  ph = Math.random(),
  yh = gh((1).toString),
  Ho = function (a) {
    return 'Symbol(' + (a === void 0 ? '' : a) + ')_' + yh(++dh + ph, 36)
  },
  mh = V,
  bh = $i,
  $n = fe,
  xh = Ho,
  Th = jo,
  Oh = Uo,
  Ze = mh.Symbol,
  aa = bh('wks'),
  Sh = Oh ? Ze.for || Ze : (Ze && Ze.withoutSetter) || xh,
  G = function (a) {
    return (
      $n(aa, a) || (aa[a] = Th && $n(Ze, a) ? Ze[a] : Sh('Symbol.' + a)), aa[a]
    )
  },
  Eh = Y,
  wn = ve,
  Cn = zo,
  $h = ot,
  wh = nh,
  Ch = G,
  Ah = TypeError,
  Ph = Ch('toPrimitive'),
  Rh = function (a, e) {
    if (!wn(a) || Cn(a)) return a
    var t = $h(a, Ph),
      r
    if (t) {
      if ((e === void 0 && (e = 'default'), (r = Eh(t, a, e)), !wn(r) || Cn(r)))
        return r
      throw new Ah("Can't convert object to primitive value")
    }
    return e === void 0 && (e = 'number'), wh(a, e)
  },
  Nh = Rh,
  Ih = zo,
  Yo = function (a) {
    var e = Nh(a, 'string')
    return Ih(e) ? e : e + ''
  },
  Mh = V,
  An = ve,
  Ha = Mh.document,
  _h = An(Ha) && An(Ha.createElement),
  Or = function (a) {
    return _h ? Ha.createElement(a) : {}
  },
  Vh = le,
  Dh = k,
  kh = Or,
  Xo =
    !Vh &&
    !Dh(function () {
      return (
        Object.defineProperty(kh('div'), 'a', {
          get: function () {
            return 7
          },
        }).a !== 7
      )
    }),
  Lh = le,
  Bh = Y,
  Fh = Mo,
  jh = Ti,
  Uh = wt,
  zh = Yo,
  Gh = fe,
  Hh = Xo,
  Pn = Object.getOwnPropertyDescriptor
$t.f = Lh
  ? Pn
  : function (e, t) {
      if (((e = Uh(e)), (t = zh(t)), Hh))
        try {
          return Pn(e, t)
        } catch {}
      if (Gh(e, t)) return jh(!Bh(Fh.f, e, t), e[t])
    }
var Oe = {},
  Yh = le,
  Xh = k,
  Wo =
    Yh &&
    Xh(function () {
      return (
        Object.defineProperty(function () {}, 'prototype', {
          value: 42,
          writable: !1,
        }).prototype !== 42
      )
    }),
  Wh = ve,
  qh = String,
  Qh = TypeError,
  J = function (a) {
    if (Wh(a)) return a
    throw new Qh(qh(a) + ' is not an object')
  },
  Kh = le,
  Zh = Xo,
  Jh = Wo,
  zt = J,
  Rn = Yo,
  ev = TypeError,
  ia = Object.defineProperty,
  tv = Object.getOwnPropertyDescriptor,
  na = 'enumerable',
  sa = 'configurable',
  oa = 'writable'
Oe.f = Kh
  ? Jh
    ? function (e, t, r) {
        if (
          (zt(e),
          (t = Rn(t)),
          zt(r),
          typeof e == 'function' &&
            t === 'prototype' &&
            'value' in r &&
            oa in r &&
            !r[oa])
        ) {
          var i = tv(e, t)
          i &&
            i[oa] &&
            ((e[t] = r.value),
            (r = {
              configurable: sa in r ? r[sa] : i[sa],
              enumerable: na in r ? r[na] : i[na],
              writable: !1,
            }))
        }
        return ia(e, t, r)
      }
    : ia
  : function (e, t, r) {
      if ((zt(e), (t = Rn(t)), zt(r), Zh))
        try {
          return ia(e, t, r)
        } catch {}
      if ('get' in r || 'set' in r) throw new ev('Accessors not supported')
      return 'value' in r && (e[t] = r.value), e
    }
var rv = le,
  av = Oe,
  iv = Ti,
  At = rv
    ? function (a, e, t) {
        return av.f(a, e, iv(1, t))
      }
    : function (a, e, t) {
        return (a[e] = t), a
      },
  qo = { exports: {} },
  Ya = le,
  nv = fe,
  Qo = Function.prototype,
  sv = Ya && Object.getOwnPropertyDescriptor,
  wi = nv(Qo, 'name'),
  ov = wi && function () {}.name === 'something',
  uv = wi && (!Ya || (Ya && sv(Qo, 'name').configurable)),
  Sr = { EXISTS: wi, PROPER: ov, CONFIGURABLE: uv },
  lv = L,
  hv = B,
  Xa = Ei,
  vv = lv(Function.toString)
hv(Xa.inspectSource) ||
  (Xa.inspectSource = function (a) {
    return vv(a)
  })
var Ci = Xa.inspectSource,
  fv = V,
  cv = B,
  Nn = fv.WeakMap,
  gv = cv(Nn) && /native code/.test(String(Nn)),
  dv = $i,
  pv = Ho,
  In = dv('keys'),
  Ai = function (a) {
    return In[a] || (In[a] = pv(a))
  },
  Pi = {},
  yv = gv,
  Ko = V,
  mv = ve,
  bv = At,
  ua = fe,
  la = Ei,
  xv = Ai,
  Tv = Pi,
  Mn = 'Object already initialized',
  Wa = Ko.TypeError,
  Ov = Ko.WeakMap,
  cr,
  Ot,
  gr,
  Sv = function (a) {
    return gr(a) ? Ot(a) : cr(a, {})
  },
  Ev = function (a) {
    return function (e) {
      var t
      if (!mv(e) || (t = Ot(e)).type !== a)
        throw new Wa('Incompatible receiver, ' + a + ' required')
      return t
    }
  }
if (yv || la.state) {
  var de = la.state || (la.state = new Ov())
  ;(de.get = de.get),
    (de.has = de.has),
    (de.set = de.set),
    (cr = function (a, e) {
      if (de.has(a)) throw new Wa(Mn)
      return (e.facade = a), de.set(a, e), e
    }),
    (Ot = function (a) {
      return de.get(a) || {}
    }),
    (gr = function (a) {
      return de.has(a)
    })
} else {
  var Ye = xv('state')
  ;(Tv[Ye] = !0),
    (cr = function (a, e) {
      if (ua(a, Ye)) throw new Wa(Mn)
      return (e.facade = a), bv(a, Ye, e), e
    }),
    (Ot = function (a) {
      return ua(a, Ye) ? a[Ye] : {}
    }),
    (gr = function (a) {
      return ua(a, Ye)
    })
}
var Er = { set: cr, get: Ot, has: gr, enforce: Sv, getterFor: Ev },
  Ri = L,
  $v = k,
  wv = B,
  Gt = fe,
  qa = le,
  Cv = Sr.CONFIGURABLE,
  Av = Ci,
  Zo = Er,
  Pv = Zo.enforce,
  Rv = Zo.get,
  _n = String,
  sr = Object.defineProperty,
  Nv = Ri(''.slice),
  Iv = Ri(''.replace),
  Mv = Ri([].join),
  _v =
    qa &&
    !$v(function () {
      return sr(function () {}, 'length', { value: 8 }).length !== 8
    }),
  Vv = String(String).split('String'),
  Dv = (qo.exports = function (a, e, t) {
    Nv(_n(e), 0, 7) === 'Symbol(' &&
      (e = '[' + Iv(_n(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
      t && t.getter && (e = 'get ' + e),
      t && t.setter && (e = 'set ' + e),
      (!Gt(a, 'name') || (Cv && a.name !== e)) &&
        (qa ? sr(a, 'name', { value: e, configurable: !0 }) : (a.name = e)),
      _v &&
        t &&
        Gt(t, 'arity') &&
        a.length !== t.arity &&
        sr(a, 'length', { value: t.arity })
    try {
      t && Gt(t, 'constructor') && t.constructor
        ? qa && sr(a, 'prototype', { writable: !1 })
        : a.prototype && (a.prototype = void 0)
    } catch {}
    var r = Pv(a)
    return (
      Gt(r, 'source') || (r.source = Mv(Vv, typeof e == 'string' ? e : '')), a
    )
  })
Function.prototype.toString = Dv(function () {
  return (wv(this) && Rv(this).source) || Av(this)
}, 'toString')
var Jo = qo.exports,
  kv = B,
  Lv = Oe,
  Bv = Jo,
  Fv = Si,
  Ue = function (a, e, t, r) {
    r || (r = {})
    var i = r.enumerable,
      n = r.name !== void 0 ? r.name : e
    if ((kv(t) && Bv(t, n, r), r.global)) i ? (a[e] = t) : Fv(e, t)
    else {
      try {
        r.unsafe ? a[e] && (i = !0) : delete a[e]
      } catch {}
      i
        ? (a[e] = t)
        : Lv.f(a, e, {
            value: t,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable,
          })
    }
    return a
  },
  eu = {},
  jv = Math.ceil,
  Uv = Math.floor,
  zv =
    Math.trunc ||
    function (e) {
      var t = +e
      return (t > 0 ? Uv : jv)(t)
    },
  Gv = zv,
  $r = function (a) {
    var e = +a
    return e !== e || e === 0 ? 0 : Gv(e)
  },
  Hv = $r,
  Yv = Math.max,
  Xv = Math.min,
  Wv = function (a, e) {
    var t = Hv(a)
    return t < 0 ? Yv(t + e, 0) : Xv(t, e)
  },
  qv = $r,
  Qv = Math.min,
  ut = function (a) {
    var e = qv(a)
    return e > 0 ? Qv(e, 9007199254740991) : 0
  },
  Kv = ut,
  Ni = function (a) {
    return Kv(a.length)
  },
  Zv = wt,
  Jv = Wv,
  ef = Ni,
  Vn = function (a) {
    return function (e, t, r) {
      var i = Zv(e),
        n = ef(i)
      if (n === 0) return !a && -1
      var o = Jv(r, n),
        s
      if (a && t !== t) {
        for (; n > o; ) if (((s = i[o++]), s !== s)) return !0
      } else
        for (; n > o; o++) if ((a || o in i) && i[o] === t) return a || o || 0
      return !a && -1
    }
  },
  tu = { includes: Vn(!0), indexOf: Vn(!1) },
  tf = L,
  ha = fe,
  rf = wt,
  af = tu.indexOf,
  nf = Pi,
  Dn = tf([].push),
  ru = function (a, e) {
    var t = rf(a),
      r = 0,
      i = [],
      n
    for (n in t) !ha(nf, n) && ha(t, n) && Dn(i, n)
    for (; e.length > r; ) ha(t, (n = e[r++])) && (~af(i, n) || Dn(i, n))
    return i
  },
  Ii = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  sf = ru,
  of = Ii,
  uf = of.concat('length', 'prototype')
eu.f =
  Object.getOwnPropertyNames ||
  function (e) {
    return sf(e, uf)
  }
var au = {}
au.f = Object.getOwnPropertySymbols
var lf = je,
  hf = L,
  vf = eu,
  ff = au,
  cf = J,
  gf = hf([].concat),
  df =
    lf('Reflect', 'ownKeys') ||
    function (e) {
      var t = vf.f(cf(e)),
        r = ff.f
      return r ? gf(t, r(e)) : t
    },
  kn = fe,
  pf = df,
  yf = $t,
  mf = Oe,
  bf = function (a, e, t) {
    for (var r = pf(e), i = mf.f, n = yf.f, o = 0; o < r.length; o++) {
      var s = r[o]
      !kn(a, s) && !(t && kn(t, s)) && i(a, s, n(e, s))
    }
  },
  xf = k,
  Tf = B,
  Of = /#|\.prototype\./,
  Pt = function (a, e) {
    var t = Ef[Sf(a)]
    return t === wf ? !0 : t === $f ? !1 : Tf(e) ? xf(e) : !!e
  },
  Sf = (Pt.normalize = function (a) {
    return String(a).replace(Of, '.').toLowerCase()
  }),
  Ef = (Pt.data = {}),
  $f = (Pt.NATIVE = 'N'),
  wf = (Pt.POLYFILL = 'P'),
  iu = Pt,
  Ht = V,
  Cf = $t.f,
  Af = At,
  Pf = Ue,
  Rf = Si,
  Nf = bf,
  If = iu,
  ee = function (a, e) {
    var t = a.target,
      r = a.global,
      i = a.stat,
      n,
      o,
      s,
      u,
      l,
      h
    if (
      (r
        ? (o = Ht)
        : i
          ? (o = Ht[t] || Rf(t, {}))
          : (o = Ht[t] && Ht[t].prototype),
      o)
    )
      for (s in e) {
        if (
          ((l = e[s]),
          a.dontCallGetSet ? ((h = Cf(o, s)), (u = h && h.value)) : (u = o[s]),
          (n = If(r ? s : t + (i ? '.' : '#') + s, a.forced)),
          !n && u !== void 0)
        ) {
          if (typeof l == typeof u) continue
          Nf(l, u)
        }
        ;(a.sham || (u && u.sham)) && Af(l, 'sham', !0), Pf(o, s, l, a)
      }
  },
  ft = V,
  Mf = Ct,
  _f = Be,
  Yt = function (a) {
    return Mf.slice(0, a.length) === a
  },
  nu = (function () {
    return Yt('Bun/')
      ? 'BUN'
      : Yt('Cloudflare-Workers')
        ? 'CLOUDFLARE'
        : Yt('Deno/')
          ? 'DENO'
          : Yt('Node.js/')
            ? 'NODE'
            : ft.Bun && typeof Bun.version == 'string'
              ? 'BUN'
              : ft.Deno && typeof Deno.version == 'object'
                ? 'DENO'
                : _f(ft.process) === 'process'
                  ? 'NODE'
                  : ft.window && ft.document
                    ? 'BROWSER'
                    : 'REST'
  })(),
  Vf = nu,
  wr = Vf === 'NODE',
  Df = L,
  kf = Te,
  Lf = function (a, e, t) {
    try {
      return Df(kf(Object.getOwnPropertyDescriptor(a, e)[t]))
    } catch {}
  },
  Bf = ve,
  Ff = function (a) {
    return Bf(a) || a === null
  },
  jf = Ff,
  Uf = String,
  zf = TypeError,
  Gf = function (a) {
    if (jf(a)) return a
    throw new zf("Can't set " + Uf(a) + ' as a prototype')
  },
  Hf = Lf,
  Yf = ve,
  Xf = he,
  Wf = Gf,
  su =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var a = !1,
            e = {},
            t
          try {
            ;(t = Hf(Object.prototype, '__proto__', 'set')),
              t(e, []),
              (a = e instanceof Array)
          } catch {}
          return function (i, n) {
            return Xf(i), Wf(n), Yf(i) && (a ? t(i, n) : (i.__proto__ = n)), i
          }
        })()
      : void 0),
  qf = Oe.f,
  Qf = fe,
  Kf = G,
  Ln = Kf('toStringTag'),
  Cr = function (a, e, t) {
    a && !t && (a = a.prototype),
      a && !Qf(a, Ln) && qf(a, Ln, { configurable: !0, value: e })
  },
  Bn = Jo,
  Zf = Oe,
  Jf = function (a, e, t) {
    return (
      t.get && Bn(t.get, e, { getter: !0 }),
      t.set && Bn(t.set, e, { setter: !0 }),
      Zf.f(a, e, t)
    )
  },
  ec = je,
  tc = Jf,
  rc = G,
  ac = le,
  Fn = rc('species'),
  ic = function (a) {
    var e = ec(a)
    ac &&
      e &&
      !e[Fn] &&
      tc(e, Fn, {
        configurable: !0,
        get: function () {
          return this
        },
      })
  },
  nc = br,
  sc = TypeError,
  oc = function (a, e) {
    if (nc(e, a)) return a
    throw new sc('Incorrect invocation')
  },
  uc = G,
  lc = uc('toStringTag'),
  ou = {}
ou[lc] = 'z'
var hc = String(ou) === '[object z]',
  vc = hc,
  fc = B,
  or = Be,
  cc = G,
  gc = cc('toStringTag'),
  dc = Object,
  pc =
    or(
      (function () {
        return arguments
      })(),
    ) === 'Arguments',
  yc = function (a, e) {
    try {
      return a[e]
    } catch {}
  },
  Mi = vc
    ? or
    : function (a) {
        var e, t, r
        return a === void 0
          ? 'Undefined'
          : a === null
            ? 'Null'
            : typeof (t = yc((e = dc(a)), gc)) == 'string'
              ? t
              : pc
                ? or(e)
                : (r = or(e)) === 'Object' && fc(e.callee)
                  ? 'Arguments'
                  : r
      },
  mc = L,
  bc = k,
  uu = B,
  xc = Mi,
  Tc = je,
  Oc = Ci,
  lu = function () {},
  hu = Tc('Reflect', 'construct'),
  _i = /^\s*(?:class|function)\b/,
  Sc = mc(_i.exec),
  Ec = !_i.test(lu),
  ct = function (e) {
    if (!uu(e)) return !1
    try {
      return hu(lu, [], e), !0
    } catch {
      return !1
    }
  },
  vu = function (e) {
    if (!uu(e)) return !1
    switch (xc(e)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return !1
    }
    try {
      return Ec || !!Sc(_i, Oc(e))
    } catch {
      return !0
    }
  }
vu.sham = !0
var $c =
    !hu ||
    bc(function () {
      var a
      return (
        ct(ct.call) ||
        !ct(Object) ||
        !ct(function () {
          a = !0
        }) ||
        a
      )
    })
      ? vu
      : ct,
  wc = $c,
  Cc = xr,
  Ac = TypeError,
  Pc = function (a) {
    if (wc(a)) return a
    throw new Ac(Cc(a) + ' is not a constructor')
  },
  jn = J,
  Rc = Pc,
  Nc = Fe,
  Ic = G,
  Mc = Ic('species'),
  fu = function (a, e) {
    var t = jn(a).constructor,
      r
    return t === void 0 || Nc((r = jn(t)[Mc])) ? e : Rc(r)
  },
  _c = mr,
  cu = Function.prototype,
  Un = cu.apply,
  zn = cu.call,
  gu =
    (typeof Reflect == 'object' && Reflect.apply) ||
    (_c
      ? zn.bind(Un)
      : function () {
          return zn.apply(Un, arguments)
        }),
  Vc = Be,
  Dc = L,
  Ar = function (a) {
    if (Vc(a) === 'Function') return Dc(a)
  },
  Gn = Ar,
  kc = Te,
  Lc = mr,
  Bc = Gn(Gn.bind),
  Vi = function (a, e) {
    return (
      kc(a),
      e === void 0
        ? a
        : Lc
          ? Bc(a, e)
          : function () {
              return a.apply(e, arguments)
            }
    )
  },
  Fc = je,
  du = Fc('document', 'documentElement'),
  jc = L,
  Uc = jc([].slice),
  zc = TypeError,
  Gc = function (a, e) {
    if (a < e) throw new zc('Not enough arguments')
    return a
  },
  Hc = Ct,
  pu = /(?:ipad|iphone|ipod).*applewebkit/i.test(Hc),
  ae = V,
  Yc = gu,
  Xc = Vi,
  Hn = B,
  Wc = fe,
  yu = k,
  Yn = du,
  qc = Uc,
  Xn = Or,
  Qc = Gc,
  Kc = pu,
  Zc = wr,
  Qa = ae.setImmediate,
  Ka = ae.clearImmediate,
  Jc = ae.process,
  va = ae.Dispatch,
  eg = ae.Function,
  Wn = ae.MessageChannel,
  tg = ae.String,
  fa = 0,
  xt = {},
  qn = 'onreadystatechange',
  St,
  Ie,
  ca,
  ga
yu(function () {
  St = ae.location
})
var Di = function (a) {
    if (Wc(xt, a)) {
      var e = xt[a]
      delete xt[a], e()
    }
  },
  da = function (a) {
    return function () {
      Di(a)
    }
  },
  Qn = function (a) {
    Di(a.data)
  },
  Kn = function (a) {
    ae.postMessage(tg(a), St.protocol + '//' + St.host)
  }
;(!Qa || !Ka) &&
  ((Qa = function (e) {
    Qc(arguments.length, 1)
    var t = Hn(e) ? e : eg(e),
      r = qc(arguments, 1)
    return (
      (xt[++fa] = function () {
        Yc(t, void 0, r)
      }),
      Ie(fa),
      fa
    )
  }),
  (Ka = function (e) {
    delete xt[e]
  }),
  Zc
    ? (Ie = function (a) {
        Jc.nextTick(da(a))
      })
    : va && va.now
      ? (Ie = function (a) {
          va.now(da(a))
        })
      : Wn && !Kc
        ? ((ca = new Wn()),
          (ga = ca.port2),
          (ca.port1.onmessage = Qn),
          (Ie = Xc(ga.postMessage, ga)))
        : ae.addEventListener &&
            Hn(ae.postMessage) &&
            !ae.importScripts &&
            St &&
            St.protocol !== 'file:' &&
            !yu(Kn)
          ? ((Ie = Kn), ae.addEventListener('message', Qn, !1))
          : qn in Xn('script')
            ? (Ie = function (a) {
                Yn.appendChild(Xn('script'))[qn] = function () {
                  Yn.removeChild(this), Di(a)
                }
              })
            : (Ie = function (a) {
                setTimeout(da(a), 0)
              }))
var mu = { set: Qa, clear: Ka },
  Zn = V,
  rg = le,
  ag = Object.getOwnPropertyDescriptor,
  ig = function (a) {
    if (!rg) return Zn[a]
    var e = ag(Zn, a)
    return e && e.value
  },
  bu = function () {
    ;(this.head = null), (this.tail = null)
  }
bu.prototype = {
  add: function (a) {
    var e = { item: a, next: null },
      t = this.tail
    t ? (t.next = e) : (this.head = e), (this.tail = e)
  },
  get: function () {
    var a = this.head
    if (a) {
      var e = (this.head = a.next)
      return e === null && (this.tail = null), a.item
    }
  },
}
var xu = bu,
  ng = Ct,
  sg = /ipad|iphone|ipod/i.test(ng) && typeof Pebble < 'u',
  og = Ct,
  ug = /web0s(?!.*chrome)/i.test(og),
  it = V,
  lg = ig,
  Jn = Vi,
  pa = mu.set,
  hg = xu,
  vg = pu,
  fg = sg,
  cg = ug,
  ya = wr,
  es = it.MutationObserver || it.WebKitMutationObserver,
  ts = it.document,
  rs = it.process,
  Xt = it.Promise,
  Za = lg('queueMicrotask'),
  Xe,
  ma,
  ba,
  Wt,
  as
if (!Za) {
  var qt = new hg(),
    Qt = function () {
      var a, e
      for (ya && (a = rs.domain) && a.exit(); (e = qt.get()); )
        try {
          e()
        } catch (t) {
          throw (qt.head && Xe(), t)
        }
      a && a.enter()
    }
  !vg && !ya && !cg && es && ts
    ? ((ma = !0),
      (ba = ts.createTextNode('')),
      new es(Qt).observe(ba, { characterData: !0 }),
      (Xe = function () {
        ba.data = ma = !ma
      }))
    : !fg && Xt && Xt.resolve
      ? ((Wt = Xt.resolve(void 0)),
        (Wt.constructor = Xt),
        (as = Jn(Wt.then, Wt)),
        (Xe = function () {
          as(Qt)
        }))
      : ya
        ? (Xe = function () {
            rs.nextTick(Qt)
          })
        : ((pa = Jn(pa, it)),
          (Xe = function () {
            pa(Qt)
          })),
    (Za = function (a) {
      qt.head || Xe(), qt.add(a)
    })
}
var gg = Za,
  dg = function (a, e) {
    try {
      arguments.length === 1 ? console.error(a) : console.error(a, e)
    } catch {}
  },
  ki = function (a) {
    try {
      return { error: !1, value: a() }
    } catch (e) {
      return { error: !0, value: e }
    }
  },
  pg = V,
  Pr = pg.Promise,
  yg = V,
  Tt = Pr,
  mg = B,
  bg = iu,
  xg = Ci,
  Tg = G,
  is = nu,
  xa = Oi
Tt && Tt.prototype
var Og = Tg('species'),
  Ja = !1,
  Tu = mg(yg.PromiseRejectionEvent),
  Sg = bg('Promise', function () {
    var a = xg(Tt),
      e = a !== String(Tt)
    if (!e && xa === 66) return !0
    if (!xa || xa < 51 || !/native code/.test(a)) {
      var t = new Tt(function (n) {
          n(1)
        }),
        r = function (n) {
          n(
            function () {},
            function () {},
          )
        },
        i = (t.constructor = {})
      if (((i[Og] = r), (Ja = t.then(function () {}) instanceof r), !Ja))
        return !0
    }
    return !e && (is === 'BROWSER' || is === 'DENO') && !Tu
  }),
  Rt = { CONSTRUCTOR: Sg, REJECTION_EVENT: Tu, SUBCLASSING: Ja },
  lt = {},
  ns = Te,
  Eg = TypeError,
  $g = function (a) {
    var e, t
    ;(this.promise = new a(function (r, i) {
      if (e !== void 0 || t !== void 0) throw new Eg('Bad Promise constructor')
      ;(e = r), (t = i)
    })),
      (this.resolve = ns(e)),
      (this.reject = ns(t))
  }
lt.f = function (a) {
  return new $g(a)
}
var wg = ee,
  dr = wr,
  we = V,
  nt = Y,
  ss = Ue,
  os = su,
  Cg = Cr,
  Ag = ic,
  Pg = Te,
  ur = B,
  Rg = ve,
  Ng = oc,
  Ig = fu,
  Ou = mu.set,
  Li = gg,
  Mg = dg,
  _g = ki,
  Vg = xu,
  Su = Er,
  pr = Pr,
  Bi = Rt,
  Eu = lt,
  Rr = 'Promise',
  $u = Bi.CONSTRUCTOR,
  Dg = Bi.REJECTION_EVENT,
  kg = Bi.SUBCLASSING,
  Ta = Su.getterFor(Rr),
  Lg = Su.set,
  Qe = pr && pr.prototype,
  De = pr,
  Kt = Qe,
  wu = we.TypeError,
  ei = we.document,
  Fi = we.process,
  ti = Eu.f,
  Bg = ti,
  Fg = !!(ei && ei.createEvent && we.dispatchEvent),
  Cu = 'unhandledrejection',
  jg = 'rejectionhandled',
  us = 0,
  Au = 1,
  Ug = 2,
  ji = 1,
  Pu = 2,
  Zt,
  ls,
  zg,
  hs,
  Ru = function (a) {
    var e
    return Rg(a) && ur((e = a.then)) ? e : !1
  },
  Nu = function (a, e) {
    var t = e.value,
      r = e.state === Au,
      i = r ? a.ok : a.fail,
      n = a.resolve,
      o = a.reject,
      s = a.domain,
      u,
      l,
      h
    try {
      i
        ? (r || (e.rejection === Pu && Hg(e), (e.rejection = ji)),
          i === !0
            ? (u = t)
            : (s && s.enter(), (u = i(t)), s && (s.exit(), (h = !0))),
          u === a.promise
            ? o(new wu('Promise-chain cycle'))
            : (l = Ru(u))
              ? nt(l, u, n, o)
              : n(u))
        : o(t)
    } catch (f) {
      s && !h && s.exit(), o(f)
    }
  },
  Iu = function (a, e) {
    a.notified ||
      ((a.notified = !0),
      Li(function () {
        for (var t = a.reactions, r; (r = t.get()); ) Nu(r, a)
        ;(a.notified = !1), e && !a.rejection && Gg(a)
      }))
  },
  Mu = function (a, e, t) {
    var r, i
    Fg
      ? ((r = ei.createEvent('Event')),
        (r.promise = e),
        (r.reason = t),
        r.initEvent(a, !1, !0),
        we.dispatchEvent(r))
      : (r = { promise: e, reason: t }),
      !Dg && (i = we['on' + a])
        ? i(r)
        : a === Cu && Mg('Unhandled promise rejection', t)
  },
  Gg = function (a) {
    nt(Ou, we, function () {
      var e = a.facade,
        t = a.value,
        r = vs(a),
        i
      if (
        r &&
        ((i = _g(function () {
          dr ? Fi.emit('unhandledRejection', t, e) : Mu(Cu, e, t)
        })),
        (a.rejection = dr || vs(a) ? Pu : ji),
        i.error)
      )
        throw i.value
    })
  },
  vs = function (a) {
    return a.rejection !== ji && !a.parent
  },
  Hg = function (a) {
    nt(Ou, we, function () {
      var e = a.facade
      dr ? Fi.emit('rejectionHandled', e) : Mu(jg, e, a.value)
    })
  },
  Je = function (a, e, t) {
    return function (r) {
      a(e, r, t)
    }
  },
  tt = function (a, e, t) {
    a.done ||
      ((a.done = !0), t && (a = t), (a.value = e), (a.state = Ug), Iu(a, !0))
  },
  ri = function (a, e, t) {
    if (!a.done) {
      ;(a.done = !0), t && (a = t)
      try {
        if (a.facade === e) throw new wu("Promise can't be resolved itself")
        var r = Ru(e)
        r
          ? Li(function () {
              var i = { done: !1 }
              try {
                nt(r, e, Je(ri, i, a), Je(tt, i, a))
              } catch (n) {
                tt(i, n, a)
              }
            })
          : ((a.value = e), (a.state = Au), Iu(a, !1))
      } catch (i) {
        tt({ done: !1 }, i, a)
      }
    }
  }
if (
  $u &&
  ((De = function (e) {
    Ng(this, Kt), Pg(e), nt(Zt, this)
    var t = Ta(this)
    try {
      e(Je(ri, t), Je(tt, t))
    } catch (r) {
      tt(t, r)
    }
  }),
  (Kt = De.prototype),
  (Zt = function (e) {
    Lg(this, {
      type: Rr,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new Vg(),
      rejection: !1,
      state: us,
      value: null,
    })
  }),
  (Zt.prototype = ss(Kt, 'then', function (e, t) {
    var r = Ta(this),
      i = ti(Ig(this, De))
    return (
      (r.parent = !0),
      (i.ok = ur(e) ? e : !0),
      (i.fail = ur(t) && t),
      (i.domain = dr ? Fi.domain : void 0),
      r.state === us
        ? r.reactions.add(i)
        : Li(function () {
            Nu(i, r)
          }),
      i.promise
    )
  })),
  (ls = function () {
    var a = new Zt(),
      e = Ta(a)
    ;(this.promise = a), (this.resolve = Je(ri, e)), (this.reject = Je(tt, e))
  }),
  (Eu.f = ti =
    function (a) {
      return a === De || a === zg ? new ls(a) : Bg(a)
    }),
  ur(pr) && Qe !== Object.prototype)
) {
  ;(hs = Qe.then),
    kg ||
      ss(
        Qe,
        'then',
        function (e, t) {
          var r = this
          return new De(function (i, n) {
            nt(hs, r, i, n)
          }).then(e, t)
        },
        { unsafe: !0 },
      )
  try {
    delete Qe.constructor
  } catch {}
  os && os(Qe, Kt)
}
wg({ global: !0, constructor: !0, wrap: !0, forced: $u }, { Promise: De })
Cg(De, Rr, !1)
Ag(Rr)
var Nt = {},
  Yg = G,
  Xg = Nt,
  Wg = Yg('iterator'),
  qg = Array.prototype,
  Qg = function (a) {
    return a !== void 0 && (Xg.Array === a || qg[Wg] === a)
  },
  Kg = Mi,
  fs = ot,
  Zg = Fe,
  Jg = Nt,
  ed = G,
  td = ed('iterator'),
  _u = function (a) {
    if (!Zg(a)) return fs(a, td) || fs(a, '@@iterator') || Jg[Kg(a)]
  },
  rd = Y,
  ad = Te,
  id = J,
  nd = xr,
  sd = _u,
  od = TypeError,
  ud = function (a, e) {
    var t = arguments.length < 2 ? sd(a) : e
    if (ad(t)) return id(rd(t, a))
    throw new od(nd(a) + ' is not iterable')
  },
  ld = Y,
  cs = J,
  hd = ot,
  vd = function (a, e, t) {
    var r, i
    cs(a)
    try {
      if (((r = hd(a, 'return')), !r)) {
        if (e === 'throw') throw t
        return t
      }
      r = ld(r, a)
    } catch (n) {
      ;(i = !0), (r = n)
    }
    if (e === 'throw') throw t
    if (i) throw r
    return cs(r), t
  },
  fd = Vi,
  cd = Y,
  gd = J,
  dd = xr,
  pd = Qg,
  yd = Ni,
  gs = br,
  md = ud,
  bd = _u,
  ds = vd,
  xd = TypeError,
  lr = function (a, e) {
    ;(this.stopped = a), (this.result = e)
  },
  ps = lr.prototype,
  Vu = function (a, e, t) {
    var r = t && t.that,
      i = !!(t && t.AS_ENTRIES),
      n = !!(t && t.IS_RECORD),
      o = !!(t && t.IS_ITERATOR),
      s = !!(t && t.INTERRUPTED),
      u = fd(e, r),
      l,
      h,
      f,
      c,
      v,
      d,
      g,
      p = function (x) {
        return l && ds(l, 'normal', x), new lr(!0, x)
      },
      y = function (x) {
        return i
          ? (gd(x), s ? u(x[0], x[1], p) : u(x[0], x[1]))
          : s
            ? u(x, p)
            : u(x)
      }
    if (n) l = a.iterator
    else if (o) l = a
    else {
      if (((h = bd(a)), !h)) throw new xd(dd(a) + ' is not iterable')
      if (pd(h)) {
        for (f = 0, c = yd(a); c > f; f++)
          if (((v = y(a[f])), v && gs(ps, v))) return v
        return new lr(!1)
      }
      l = md(a, h)
    }
    for (d = n ? a.next : l.next; !(g = cd(d, l)).done; ) {
      try {
        v = y(g.value)
      } catch (x) {
        ds(l, 'throw', x)
      }
      if (typeof v == 'object' && v && gs(ps, v)) return v
    }
    return new lr(!1)
  },
  Td = G,
  Du = Td('iterator'),
  ku = !1
try {
  var Od = 0,
    ys = {
      next: function () {
        return { done: !!Od++ }
      },
      return: function () {
        ku = !0
      },
    }
  ;(ys[Du] = function () {
    return this
  }),
    Array.from(ys, function () {
      throw 2
    })
} catch {}
var Sd = function (a, e) {
    try {
      if (!e && !ku) return !1
    } catch {
      return !1
    }
    var t = !1
    try {
      var r = {}
      ;(r[Du] = function () {
        return {
          next: function () {
            return { done: (t = !0) }
          },
        }
      }),
        a(r)
    } catch {}
    return t
  },
  Ed = Pr,
  $d = Sd,
  wd = Rt.CONSTRUCTOR,
  Lu =
    wd ||
    !$d(function (a) {
      Ed.all(a).then(void 0, function () {})
    }),
  Cd = ee,
  Ad = Y,
  Pd = Te,
  Rd = lt,
  Nd = ki,
  Id = Vu,
  Md = Lu
Cd(
  { target: 'Promise', stat: !0, forced: Md },
  {
    all: function (e) {
      var t = this,
        r = Rd.f(t),
        i = r.resolve,
        n = r.reject,
        o = Nd(function () {
          var s = Pd(t.resolve),
            u = [],
            l = 0,
            h = 1
          Id(e, function (f) {
            var c = l++,
              v = !1
            h++,
              Ad(s, t, f).then(function (d) {
                v || ((v = !0), (u[c] = d), --h || i(u))
              }, n)
          }),
            --h || i(u)
        })
      return o.error && n(o.value), r.promise
    },
  },
)
var _d = ee,
  Vd = Rt.CONSTRUCTOR,
  ai = Pr,
  Dd = je,
  kd = B,
  Ld = Ue,
  ms = ai && ai.prototype
_d(
  { target: 'Promise', proto: !0, forced: Vd, real: !0 },
  {
    catch: function (a) {
      return this.then(void 0, a)
    },
  },
)
if (kd(ai)) {
  var bs = Dd('Promise').prototype.catch
  ms.catch !== bs && Ld(ms, 'catch', bs, { unsafe: !0 })
}
var Bd = ee,
  Fd = Y,
  jd = Te,
  Ud = lt,
  zd = ki,
  Gd = Vu,
  Hd = Lu
Bd(
  { target: 'Promise', stat: !0, forced: Hd },
  {
    race: function (e) {
      var t = this,
        r = Ud.f(t),
        i = r.reject,
        n = zd(function () {
          var o = jd(t.resolve)
          Gd(e, function (s) {
            Fd(o, t, s).then(r.resolve, i)
          })
        })
      return n.error && i(n.value), r.promise
    },
  },
)
var Yd = ee,
  Xd = lt,
  Wd = Rt.CONSTRUCTOR
Yd(
  { target: 'Promise', stat: !0, forced: Wd },
  {
    reject: function (e) {
      var t = Xd.f(this),
        r = t.reject
      return r(e), t.promise
    },
  },
)
var qd = J,
  Qd = ve,
  Kd = lt,
  Zd = function (a, e) {
    if ((qd(a), Qd(e) && e.constructor === a)) return e
    var t = Kd.f(a),
      r = t.resolve
    return r(e), t.promise
  },
  Jd = ee,
  ep = je,
  tp = Rt.CONSTRUCTOR,
  rp = Zd
ep('Promise')
Jd(
  { target: 'Promise', stat: !0, forced: tp },
  {
    resolve: function (e) {
      return rp(this, e)
    },
  },
)
var ap = Mi,
  ip = String,
  pe = function (a) {
    if (ap(a) === 'Symbol')
      throw new TypeError('Cannot convert a Symbol value to a string')
    return ip(a)
  },
  np = J,
  Bu = function () {
    var a = np(this),
      e = ''
    return (
      a.hasIndices && (e += 'd'),
      a.global && (e += 'g'),
      a.ignoreCase && (e += 'i'),
      a.multiline && (e += 'm'),
      a.dotAll && (e += 's'),
      a.unicode && (e += 'u'),
      a.unicodeSets && (e += 'v'),
      a.sticky && (e += 'y'),
      e
    )
  },
  Ui = k,
  sp = V,
  zi = sp.RegExp,
  Gi = Ui(function () {
    var a = zi('a', 'y')
    return (a.lastIndex = 2), a.exec('abcd') !== null
  }),
  op =
    Gi ||
    Ui(function () {
      return !zi('a', 'y').sticky
    }),
  up =
    Gi ||
    Ui(function () {
      var a = zi('^r', 'gy')
      return (a.lastIndex = 2), a.exec('str') !== null
    }),
  Fu = { BROKEN_CARET: up, MISSED_STICKY: op, UNSUPPORTED_Y: Gi },
  ju = {},
  lp = ru,
  hp = Ii,
  vp =
    Object.keys ||
    function (e) {
      return lp(e, hp)
    },
  fp = le,
  cp = Wo,
  gp = Oe,
  dp = J,
  pp = wt,
  yp = vp
ju.f =
  fp && !cp
    ? Object.defineProperties
    : function (e, t) {
        dp(e)
        for (var r = pp(t), i = yp(t), n = i.length, o = 0, s; n > o; )
          gp.f(e, (s = i[o++]), r[s])
        return e
      }
var mp = J,
  bp = ju,
  xs = Ii,
  xp = Pi,
  Tp = du,
  Op = Or,
  Sp = Ai,
  Ts = '>',
  Os = '<',
  ii = 'prototype',
  ni = 'script',
  Uu = Sp('IE_PROTO'),
  Oa = function () {},
  zu = function (a) {
    return Os + ni + Ts + a + Os + '/' + ni + Ts
  },
  Ss = function (a) {
    a.write(zu('')), a.close()
    var e = a.parentWindow.Object
    return (a = null), e
  },
  Ep = function () {
    var a = Op('iframe'),
      e = 'java' + ni + ':',
      t
    return (
      (a.style.display = 'none'),
      Tp.appendChild(a),
      (a.src = String(e)),
      (t = a.contentWindow.document),
      t.open(),
      t.write(zu('document.F=Object')),
      t.close(),
      t.F
    )
  },
  Jt,
  hr = function () {
    try {
      Jt = new ActiveXObject('htmlfile')
    } catch {}
    hr =
      typeof document < 'u' ? (document.domain && Jt ? Ss(Jt) : Ep()) : Ss(Jt)
    for (var a = xs.length; a--; ) delete hr[ii][xs[a]]
    return hr()
  }
xp[Uu] = !0
var Hi =
    Object.create ||
    function (e, t) {
      var r
      return (
        e !== null
          ? ((Oa[ii] = mp(e)), (r = new Oa()), (Oa[ii] = null), (r[Uu] = e))
          : (r = hr()),
        t === void 0 ? r : bp.f(r, t)
      )
    },
  $p = k,
  wp = V,
  Cp = wp.RegExp,
  Ap = $p(function () {
    var a = Cp('.', 's')
    return !(
      a.dotAll &&
      a.test(`
`) &&
      a.flags === 's'
    )
  }),
  Pp = k,
  Rp = V,
  Np = Rp.RegExp,
  Ip = Pp(function () {
    var a = Np('(?<a>b)', 'g')
    return a.exec('b').groups.a !== 'b' || 'b'.replace(a, '$<a>c') !== 'bc'
  }),
  et = Y,
  Nr = L,
  Mp = pe,
  _p = Bu,
  Vp = Fu,
  Dp = $i,
  kp = Hi,
  Lp = Er.get,
  Bp = Ap,
  Fp = Ip,
  jp = Dp('native-string-replace', String.prototype.replace),
  yr = RegExp.prototype.exec,
  si = yr,
  Up = Nr(''.charAt),
  zp = Nr(''.indexOf),
  Gp = Nr(''.replace),
  Sa = Nr(''.slice),
  oi = (function () {
    var a = /a/,
      e = /b*/g
    return (
      et(yr, a, 'a'), et(yr, e, 'a'), a.lastIndex !== 0 || e.lastIndex !== 0
    )
  })(),
  Gu = Vp.BROKEN_CARET,
  ui = /()??/.exec('')[1] !== void 0,
  Hp = oi || ui || Gu || Bp || Fp
Hp &&
  (si = function (e) {
    var t = this,
      r = Lp(t),
      i = Mp(e),
      n = r.raw,
      o,
      s,
      u,
      l,
      h,
      f,
      c
    if (n)
      return (
        (n.lastIndex = t.lastIndex),
        (o = et(si, n, i)),
        (t.lastIndex = n.lastIndex),
        o
      )
    var v = r.groups,
      d = Gu && t.sticky,
      g = et(_p, t),
      p = t.source,
      y = 0,
      x = i
    if (
      (d &&
        ((g = Gp(g, 'y', '')),
        zp(g, 'g') === -1 && (g += 'g'),
        (x = Sa(i, t.lastIndex)),
        t.lastIndex > 0 &&
          (!t.multiline ||
            (t.multiline &&
              Up(i, t.lastIndex - 1) !==
                `
`)) &&
          ((p = '(?: ' + p + ')'), (x = ' ' + x), y++),
        (s = new RegExp('^(?:' + p + ')', g))),
      ui && (s = new RegExp('^' + p + '$(?!\\s)', g)),
      oi && (u = t.lastIndex),
      (l = et(yr, d ? s : t, x)),
      d
        ? l
          ? ((l.input = Sa(l.input, y)),
            (l[0] = Sa(l[0], y)),
            (l.index = t.lastIndex),
            (t.lastIndex += l[0].length))
          : (t.lastIndex = 0)
        : oi && l && (t.lastIndex = t.global ? l.index + l[0].length : u),
      ui &&
        l &&
        l.length > 1 &&
        et(jp, l[0], s, function () {
          for (h = 1; h < arguments.length - 2; h++)
            arguments[h] === void 0 && (l[h] = void 0)
        }),
      l && v)
    )
      for (l.groups = f = kp(null), h = 0; h < v.length; h++)
        (c = v[h]), (f[c[0]] = l[c[1]])
    return l
  })
var Yi = si,
  Yp = ee,
  Es = Yi
Yp({ target: 'RegExp', proto: !0, forced: /./.exec !== Es }, { exec: Es })
var $s = Y,
  ws = Ue,
  Xp = Yi,
  Cs = k,
  Hu = G,
  Wp = At,
  qp = Hu('species'),
  Ea = RegExp.prototype,
  Xi = function (a, e, t, r) {
    var i = Hu(a),
      n = !Cs(function () {
        var l = {}
        return (
          (l[i] = function () {
            return 7
          }),
          ''[a](l) !== 7
        )
      }),
      o =
        n &&
        !Cs(function () {
          var l = !1,
            h = /a/
          return (
            a === 'split' &&
              ((h = {}),
              (h.constructor = {}),
              (h.constructor[qp] = function () {
                return h
              }),
              (h.flags = ''),
              (h[i] = /./[i])),
            (h.exec = function () {
              return (l = !0), null
            }),
            h[i](''),
            !l
          )
        })
    if (!n || !o || t) {
      var s = /./[i],
        u = e(i, ''[a], function (l, h, f, c, v) {
          var d = h.exec
          return d === Xp || d === Ea.exec
            ? n && !v
              ? { done: !0, value: $s(s, h, f, c) }
              : { done: !0, value: $s(l, f, h, c) }
            : { done: !1 }
        })
      ws(String.prototype, a, u[0]), ws(Ea, i, u[1])
    }
    r && Wp(Ea[i], 'sham', !0)
  },
  Wi = L,
  Qp = $r,
  Kp = pe,
  Zp = he,
  Jp = Wi(''.charAt),
  As = Wi(''.charCodeAt),
  ey = Wi(''.slice),
  Ps = function (a) {
    return function (e, t) {
      var r = Kp(Zp(e)),
        i = Qp(t),
        n = r.length,
        o,
        s
      return i < 0 || i >= n
        ? a
          ? ''
          : void 0
        : ((o = As(r, i)),
          o < 55296 ||
          o > 56319 ||
          i + 1 === n ||
          (s = As(r, i + 1)) < 56320 ||
          s > 57343
            ? a
              ? Jp(r, i)
              : o
            : a
              ? ey(r, i, i + 2)
              : ((o - 55296) << 10) + (s - 56320) + 65536)
    }
  },
  ty = { codeAt: Ps(!1), charAt: Ps(!0) },
  ry = ty.charAt,
  qi = function (a, e, t) {
    return e + (t ? ry(a, e).length : 1)
  },
  Rs = Y,
  ay = J,
  iy = B,
  ny = Be,
  sy = Yi,
  oy = TypeError,
  Qi = function (a, e) {
    var t = a.exec
    if (iy(t)) {
      var r = Rs(t, a, e)
      return r !== null && ay(r), r
    }
    if (ny(a) === 'RegExp') return Rs(sy, a, e)
    throw new oy('RegExp#exec called on incompatible receiver')
  },
  uy = Y,
  ly = Xi,
  hy = J,
  vy = Fe,
  fy = ut,
  $a = pe,
  cy = he,
  gy = ot,
  dy = qi,
  Ns = Qi
ly('match', function (a, e, t) {
  return [
    function (i) {
      var n = cy(this),
        o = vy(i) ? void 0 : gy(i, a)
      return o ? uy(o, i, n) : new RegExp(i)[a]($a(n))
    },
    function (r) {
      var i = hy(this),
        n = $a(r),
        o = t(e, i, n)
      if (o.done) return o.value
      if (!i.global) return Ns(i, n)
      var s = i.unicode
      i.lastIndex = 0
      for (var u = [], l = 0, h; (h = Ns(i, n)) !== null; ) {
        var f = $a(h[0])
        ;(u[l] = f), f === '' && (i.lastIndex = dy(n, fy(i.lastIndex), s)), l++
      }
      return l === 0 ? null : u
    },
  ]
})
var Ki = L,
  py = Tr,
  yy = Math.floor,
  wa = Ki(''.charAt),
  my = Ki(''.replace),
  Ca = Ki(''.slice),
  by = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  xy = /\$([$&'`]|\d{1,2})/g,
  Ty = function (a, e, t, r, i, n) {
    var o = t + a.length,
      s = r.length,
      u = xy
    return (
      i !== void 0 && ((i = py(i)), (u = by)),
      my(n, u, function (l, h) {
        var f
        switch (wa(h, 0)) {
          case '$':
            return '$'
          case '&':
            return a
          case '`':
            return Ca(e, 0, t)
          case "'":
            return Ca(e, o)
          case '<':
            f = i[Ca(h, 1, -1)]
            break
          default:
            var c = +h
            if (c === 0) return l
            if (c > s) {
              var v = yy(c / 10)
              return v === 0
                ? l
                : v <= s
                  ? r[v - 1] === void 0
                    ? wa(h, 1)
                    : r[v - 1] + wa(h, 1)
                  : l
            }
            f = r[c - 1]
        }
        return f === void 0 ? '' : f
      })
    )
  },
  Oy = gu,
  Is = Y,
  Ir = L,
  Sy = Xi,
  Ey = k,
  $y = J,
  wy = B,
  Cy = Fe,
  Ay = $r,
  Py = ut,
  We = pe,
  Ry = he,
  Ny = qi,
  Iy = ot,
  My = Ty,
  _y = Qi,
  Vy = G,
  li = Vy('replace'),
  Dy = Math.max,
  ky = Math.min,
  Ly = Ir([].concat),
  Aa = Ir([].push),
  Ms = Ir(''.indexOf),
  _s = Ir(''.slice),
  By = function (a) {
    return a === void 0 ? a : String(a)
  },
  Fy = (function () {
    return 'a'.replace(/./, '$0') === '$0'
  })(),
  Vs = (function () {
    return /./[li] ? /./[li]('a', '$0') === '' : !1
  })(),
  jy = !Ey(function () {
    var a = /./
    return (
      (a.exec = function () {
        var e = []
        return (e.groups = { a: '7' }), e
      }),
      ''.replace(a, '$<a>') !== '7'
    )
  })
Sy(
  'replace',
  function (a, e, t) {
    var r = Vs ? '$' : '$0'
    return [
      function (n, o) {
        var s = Ry(this),
          u = Cy(n) ? void 0 : Iy(n, li)
        return u ? Is(u, n, s, o) : Is(e, We(s), n, o)
      },
      function (i, n) {
        var o = $y(this),
          s = We(i)
        if (typeof n == 'string' && Ms(n, r) === -1 && Ms(n, '$<') === -1) {
          var u = t(e, o, s, n)
          if (u.done) return u.value
        }
        var l = wy(n)
        l || (n = We(n))
        var h = o.global,
          f
        h && ((f = o.unicode), (o.lastIndex = 0))
        for (var c = [], v; (v = _y(o, s)), !(v === null || (Aa(c, v), !h)); ) {
          var d = We(v[0])
          d === '' && (o.lastIndex = Ny(s, Py(o.lastIndex), f))
        }
        for (var g = '', p = 0, y = 0; y < c.length; y++) {
          v = c[y]
          for (
            var x = We(v[0]),
              b = Dy(ky(Ay(v.index), s.length), 0),
              T = [],
              $,
              E = 1;
            E < v.length;
            E++
          )
            Aa(T, By(v[E]))
          var O = v.groups
          if (l) {
            var C = Ly([x], T, b, s)
            O !== void 0 && Aa(C, O), ($ = We(Oy(n, void 0, C)))
          } else $ = My(x, s, b, T, O, n)
          b >= p && ((g += _s(s, p, b) + $), (p = b + x.length))
        }
        return g + _s(s, p)
      },
    ]
  },
  !jy || !Fy || Vs,
)
var Uy = ve,
  zy = Be,
  Gy = G,
  Hy = Gy('match'),
  Yy = function (a) {
    var e
    return Uy(a) && ((e = a[Hy]) !== void 0 ? !!e : zy(a) === 'RegExp')
  },
  Xy = Yy,
  Wy = TypeError,
  Zi = function (a) {
    if (Xy(a)) throw new Wy("The method doesn't accept regular expressions")
    return a
  },
  qy = G,
  Qy = qy('match'),
  Ji = function (a) {
    var e = /./
    try {
      '/./'[a](e)
    } catch {
      try {
        return (e[Qy] = !1), '/./'[a](e)
      } catch {}
    }
    return !1
  },
  Ky = ee,
  Zy = Ar,
  Jy = $t.f,
  em = ut,
  Ds = pe,
  tm = Zi,
  rm = he,
  am = Ji,
  im = Zy(''.slice),
  nm = Math.min,
  Yu = am('startsWith'),
  sm =
    !Yu &&
    !!(function () {
      var a = Jy(String.prototype, 'startsWith')
      return a && !a.writable
    })()
Ky(
  { target: 'String', proto: !0, forced: !sm && !Yu },
  {
    startsWith: function (e) {
      var t = Ds(rm(this))
      tm(e)
      var r = em(nm(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        i = Ds(e)
      return im(t, r, r + i.length) === i
    },
  },
)
var om = G,
  um = Hi,
  lm = Oe.f,
  hi = om('unscopables'),
  vi = Array.prototype
vi[hi] === void 0 && lm(vi, hi, { configurable: !0, value: um(null) })
var hm = function (a) {
    vi[hi][a] = !0
  },
  vm = k,
  fm = !vm(function () {
    function a() {}
    return (
      (a.prototype.constructor = null),
      Object.getPrototypeOf(new a()) !== a.prototype
    )
  }),
  cm = fe,
  gm = B,
  dm = Tr,
  pm = Ai,
  ym = fm,
  ks = pm('IE_PROTO'),
  fi = Object,
  mm = fi.prototype,
  Xu = ym
    ? fi.getPrototypeOf
    : function (a) {
        var e = dm(a)
        if (cm(e, ks)) return e[ks]
        var t = e.constructor
        return gm(t) && e instanceof t
          ? t.prototype
          : e instanceof fi
            ? mm
            : null
      },
  bm = k,
  xm = B,
  Tm = ve,
  Ls = Xu,
  Om = Ue,
  Sm = G,
  ci = Sm('iterator'),
  Wu = !1,
  ke,
  Pa,
  Ra
;[].keys &&
  ((Ra = [].keys()),
  'next' in Ra
    ? ((Pa = Ls(Ls(Ra))), Pa !== Object.prototype && (ke = Pa))
    : (Wu = !0))
var Em =
  !Tm(ke) ||
  bm(function () {
    var a = {}
    return ke[ci].call(a) !== a
  })
Em && (ke = {})
xm(ke[ci]) ||
  Om(ke, ci, function () {
    return this
  })
var qu = { IteratorPrototype: ke, BUGGY_SAFARI_ITERATORS: Wu },
  $m = qu.IteratorPrototype,
  wm = Hi,
  Cm = Ti,
  Am = Cr,
  Pm = Nt,
  Rm = function () {
    return this
  },
  Nm = function (a, e, t, r) {
    var i = e + ' Iterator'
    return (
      (a.prototype = wm($m, { next: Cm(+!r, t) })),
      Am(a, i, !1),
      (Pm[i] = Rm),
      a
    )
  },
  Im = ee,
  Mm = Y,
  Qu = Sr,
  _m = B,
  Vm = Nm,
  Bs = Xu,
  Fs = su,
  Dm = Cr,
  km = At,
  Na = Ue,
  Lm = G,
  Bm = Nt,
  Ku = qu,
  Fm = Qu.PROPER,
  jm = Qu.CONFIGURABLE,
  js = Ku.IteratorPrototype,
  er = Ku.BUGGY_SAFARI_ITERATORS,
  gt = Lm('iterator'),
  Us = 'keys',
  dt = 'values',
  zs = 'entries',
  Um = function () {
    return this
  },
  zm = function (a, e, t, r, i, n, o) {
    Vm(t, e, r)
    var s = function (y) {
        if (y === i && c) return c
        if (!er && y && y in h) return h[y]
        switch (y) {
          case Us:
            return function () {
              return new t(this, y)
            }
          case dt:
            return function () {
              return new t(this, y)
            }
          case zs:
            return function () {
              return new t(this, y)
            }
        }
        return function () {
          return new t(this)
        }
      },
      u = e + ' Iterator',
      l = !1,
      h = a.prototype,
      f = h[gt] || h['@@iterator'] || (i && h[i]),
      c = (!er && f) || s(i),
      v = (e === 'Array' && h.entries) || f,
      d,
      g,
      p
    if (
      (v &&
        ((d = Bs(v.call(new a()))),
        d !== Object.prototype &&
          d.next &&
          (Bs(d) !== js && (Fs ? Fs(d, js) : _m(d[gt]) || Na(d, gt, Um)),
          Dm(d, u, !0))),
      Fm &&
        i === dt &&
        f &&
        f.name !== dt &&
        (jm
          ? km(h, 'name', dt)
          : ((l = !0),
            (c = function () {
              return Mm(f, this)
            }))),
      i)
    )
      if (((g = { values: s(dt), keys: n ? c : s(Us), entries: s(zs) }), o))
        for (p in g) (er || l || !(p in h)) && Na(h, p, g[p])
      else Im({ target: e, proto: !0, forced: er || l }, g)
    return h[gt] !== c && Na(h, gt, c, { name: i }), (Bm[e] = c), g
  },
  Gm = function (a, e) {
    return { value: a, done: e }
  },
  Hm = wt,
  en = hm,
  Gs = Nt,
  Zu = Er,
  Ym = Oe.f,
  Xm = zm,
  tr = Gm,
  Wm = le,
  Ju = 'Array Iterator',
  qm = Zu.set,
  Qm = Zu.getterFor(Ju),
  Km = Xm(
    Array,
    'Array',
    function (a, e) {
      qm(this, { type: Ju, target: Hm(a), index: 0, kind: e })
    },
    function () {
      var a = Qm(this),
        e = a.target,
        t = a.index++
      if (!e || t >= e.length) return (a.target = null), tr(void 0, !0)
      switch (a.kind) {
        case 'keys':
          return tr(t, !1)
        case 'values':
          return tr(e[t], !1)
      }
      return tr([t, e[t]], !1)
    },
    'values',
  ),
  Hs = (Gs.Arguments = Gs.Array)
en('keys')
en('values')
en('entries')
if (Wm && Hs.name !== 'values')
  try {
    Ym(Hs, 'name', { value: 'values' })
  } catch {}
var Zm = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  Jm = Or,
  Ia = Jm('span').classList,
  Ys = Ia && Ia.constructor && Ia.constructor.prototype,
  e0 = Ys === Object.prototype ? void 0 : Ys,
  Xs = V,
  el = Zm,
  t0 = e0,
  yt = Km,
  Ws = At,
  r0 = Cr,
  a0 = G,
  Ma = a0('iterator'),
  _a = yt.values,
  tl = function (a, e) {
    if (a) {
      if (a[Ma] !== _a)
        try {
          Ws(a, Ma, _a)
        } catch {
          a[Ma] = _a
        }
      if ((r0(a, e, !0), el[e])) {
        for (var t in yt)
          if (a[t] !== yt[t])
            try {
              Ws(a, t, yt[t])
            } catch {
              a[t] = yt[t]
            }
      }
    }
  }
for (var Va in el) tl(Xs[Va] && Xs[Va].prototype, Va)
tl(t0, 'DOMTokenList')
var i0 = Te,
  n0 = Tr,
  s0 = Bo,
  o0 = Ni,
  qs = TypeError,
  Qs = 'Reduce of empty array with no initial value',
  Ks = function (a) {
    return function (e, t, r, i) {
      var n = n0(e),
        o = s0(n),
        s = o0(n)
      if ((i0(t), s === 0 && r < 2)) throw new qs(Qs)
      var u = a ? s - 1 : 0,
        l = a ? -1 : 1
      if (r < 2)
        for (;;) {
          if (u in o) {
            ;(i = o[u]), (u += l)
            break
          }
          if (((u += l), a ? u < 0 : s <= u)) throw new qs(Qs)
        }
      for (; a ? u >= 0 : s > u; u += l) u in o && (i = t(i, o[u], u, n))
      return i
    }
  },
  u0 = { left: Ks(!1), right: Ks(!0) },
  l0 = k,
  rl = function (a, e) {
    var t = [][a]
    return (
      !!t &&
      l0(function () {
        t.call(
          null,
          e ||
            function () {
              return 1
            },
          1,
        )
      })
    )
  },
  h0 = ee,
  v0 = u0.left,
  f0 = rl,
  Zs = Oi,
  c0 = wr,
  g0 = !c0 && Zs > 79 && Zs < 83,
  d0 = g0 || !f0('reduce')
h0(
  { target: 'Array', proto: !0, forced: d0 },
  {
    reduce: function (e) {
      var t = arguments.length
      return v0(this, e, t, t > 1 ? arguments[1] : void 0)
    },
  },
)
var p0 = ee,
  y0 = Ar,
  m0 = $t.f,
  b0 = ut,
  Js = pe,
  x0 = Zi,
  T0 = he,
  O0 = Ji,
  S0 = y0(''.slice),
  E0 = Math.min,
  al = O0('endsWith'),
  $0 =
    !al &&
    !!(function () {
      var a = m0(String.prototype, 'endsWith')
      return a && !a.writable
    })()
p0(
  { target: 'String', proto: !0, forced: !$0 && !al },
  {
    endsWith: function (e) {
      var t = Js(T0(this))
      x0(e)
      var r = arguments.length > 1 ? arguments[1] : void 0,
        i = t.length,
        n = r === void 0 ? i : E0(b0(r), i),
        o = Js(e)
      return S0(t, n - o.length, n) === o
    },
  },
)
var Da = Y,
  il = L,
  w0 = Xi,
  C0 = J,
  A0 = Fe,
  P0 = he,
  R0 = fu,
  N0 = qi,
  I0 = ut,
  eo = pe,
  M0 = ot,
  to = Qi,
  _0 = Fu,
  V0 = k,
  qe = _0.UNSUPPORTED_Y,
  D0 = 4294967295,
  k0 = Math.min,
  ka = il([].push),
  La = il(''.slice),
  L0 = !V0(function () {
    var a = /(?:)/,
      e = a.exec
    a.exec = function () {
      return e.apply(this, arguments)
    }
    var t = 'ab'.split(a)
    return t.length !== 2 || t[0] !== 'a' || t[1] !== 'b'
  }),
  ro =
    'abbc'.split(/(b)*/)[1] === 'c' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
w0(
  'split',
  function (a, e, t) {
    var r = '0'.split(void 0, 0).length
      ? function (i, n) {
          return i === void 0 && n === 0 ? [] : Da(e, this, i, n)
        }
      : e
    return [
      function (n, o) {
        var s = P0(this),
          u = A0(n) ? void 0 : M0(n, a)
        return u ? Da(u, n, s, o) : Da(r, eo(s), n, o)
      },
      function (i, n) {
        var o = C0(this),
          s = eo(i)
        if (!ro) {
          var u = t(r, o, s, n, r !== e)
          if (u.done) return u.value
        }
        var l = R0(o, RegExp),
          h = o.unicode,
          f =
            (o.ignoreCase ? 'i' : '') +
            (o.multiline ? 'm' : '') +
            (o.unicode ? 'u' : '') +
            (qe ? 'g' : 'y'),
          c = new l(qe ? '^(?:' + o.source + ')' : o, f),
          v = n === void 0 ? D0 : n >>> 0
        if (v === 0) return []
        if (s.length === 0) return to(c, s) === null ? [s] : []
        for (var d = 0, g = 0, p = []; g < s.length; ) {
          c.lastIndex = qe ? 0 : g
          var y = to(c, qe ? La(s, g) : s),
            x
          if (
            y === null ||
            (x = k0(I0(c.lastIndex + (qe ? g : 0)), s.length)) === d
          )
            g = N0(s, g, h)
          else {
            if ((ka(p, La(s, d, g)), p.length === v)) return p
            for (var b = 1; b <= y.length - 1; b++)
              if ((ka(p, y[b]), p.length === v)) return p
            g = d = x
          }
        }
        return ka(p, La(s, d)), p
      },
    ]
  },
  ro || !L0,
  qe,
)
var Mr = { exports: {} },
  mt = { exports: {} }
;(function () {
  var a, e, t, r, i, n
  typeof performance < 'u' && performance !== null && performance.now
    ? (mt.exports = function () {
        return performance.now()
      })
    : typeof process < 'u' && process !== null && process.hrtime
      ? ((mt.exports = function () {
          return (a() - i) / 1e6
        }),
        (e = process.hrtime),
        (a = function () {
          var o
          return (o = e()), o[0] * 1e9 + o[1]
        }),
        (r = a()),
        (n = process.uptime() * 1e9),
        (i = r - n))
      : Date.now
        ? ((mt.exports = function () {
            return Date.now() - t
          }),
          (t = Date.now()))
        : ((mt.exports = function () {
            return new Date().getTime() - t
          }),
          (t = new Date().getTime()))
}).call(Ke)
var B0 = mt.exports,
  F0 = B0,
  be = typeof window > 'u' ? Ke : window,
  rr = ['moz', 'webkit'],
  rt = 'AnimationFrame',
  st = be['request' + rt],
  Et = be['cancel' + rt] || be['cancelRequest' + rt]
for (var pt = 0; !st && pt < rr.length; pt++)
  (st = be[rr[pt] + 'Request' + rt]),
    (Et = be[rr[pt] + 'Cancel' + rt] || be[rr[pt] + 'CancelRequest' + rt])
if (!st || !Et) {
  var Ba = 0,
    ao = 0,
    Me = [],
    j0 = 1e3 / 60
  ;(st = function (a) {
    if (Me.length === 0) {
      var e = F0(),
        t = Math.max(0, j0 - (e - Ba))
      ;(Ba = t + e),
        setTimeout(function () {
          var r = Me.slice(0)
          Me.length = 0
          for (var i = 0; i < r.length; i++)
            if (!r[i].cancelled)
              try {
                r[i].callback(Ba)
              } catch (n) {
                setTimeout(function () {
                  throw n
                }, 0)
              }
        }, Math.round(t))
    }
    return Me.push({ handle: ++ao, callback: a, cancelled: !1 }), ao
  }),
    (Et = function (a) {
      for (var e = 0; e < Me.length; e++)
        Me[e].handle === a && (Me[e].cancelled = !0)
    })
}
Mr.exports = function (a) {
  return st.call(be, a)
}
Mr.exports.cancel = function () {
  Et.apply(be, arguments)
}
Mr.exports.polyfill = function (a) {
  a || (a = be), (a.requestAnimationFrame = st), (a.cancelAnimationFrame = Et)
}
var U0 = Mr.exports
const Fa = Io(U0)
var nl = `	
\v\f\r                　\u2028\u2029\uFEFF`,
  z0 = L,
  G0 = he,
  H0 = pe,
  gi = nl,
  io = z0(''.replace),
  Y0 = RegExp('^[' + gi + ']+'),
  X0 = RegExp('(^|[^' + gi + '])[' + gi + ']+$'),
  ja = function (a) {
    return function (e) {
      var t = H0(G0(e))
      return a & 1 && (t = io(t, Y0, '')), a & 2 && (t = io(t, X0, '$1')), t
    }
  },
  W0 = { start: ja(1), end: ja(2), trim: ja(3) },
  q0 = Sr.PROPER,
  Q0 = k,
  no = nl,
  so = '​᠎',
  K0 = function (a) {
    return Q0(function () {
      return !!no[a]() || so[a]() !== so || (q0 && no[a].name !== a)
    })
  },
  Z0 = ee,
  J0 = W0.trim,
  eb = K0
Z0(
  { target: 'String', proto: !0, forced: eb('trim') },
  {
    trim: function () {
      return J0(this)
    },
  },
)
var tb = function (a) {
  ;(this.ok = !1),
    (this.alpha = 1),
    a.charAt(0) == '#' && (a = a.substr(1, 6)),
    (a = a.replace(/ /g, '')),
    (a = a.toLowerCase())
  var e = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '663399',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32',
  }
  a = e[a] || a
  for (
    var t = [
        {
          re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
          example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
          process: function (u) {
            return [
              parseInt(u[1]),
              parseInt(u[2]),
              parseInt(u[3]),
              parseFloat(u[4]),
            ]
          },
        },
        {
          re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
          process: function (u) {
            return [parseInt(u[1]), parseInt(u[2]), parseInt(u[3])]
          },
        },
        {
          re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          example: ['#00ff00', '336699'],
          process: function (u) {
            return [parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16)]
          },
        },
        {
          re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          example: ['#fb0', 'f0f'],
          process: function (u) {
            return [
              parseInt(u[1] + u[1], 16),
              parseInt(u[2] + u[2], 16),
              parseInt(u[3] + u[3], 16),
            ]
          },
        },
      ],
      r = 0;
    r < t.length;
    r++
  ) {
    var i = t[r].re,
      n = t[r].process,
      o = i.exec(a)
    if (o) {
      var s = n(o)
      ;(this.r = s[0]),
        (this.g = s[1]),
        (this.b = s[2]),
        s.length > 3 && (this.alpha = s[3]),
        (this.ok = !0)
    }
  }
  ;(this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
    (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
    (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
    (this.alpha =
      this.alpha < 0
        ? 0
        : this.alpha > 1 || isNaN(this.alpha)
          ? 1
          : this.alpha),
    (this.toRGB = function () {
      return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')'
    }),
    (this.toRGBA = function () {
      return (
        'rgba(' +
        this.r +
        ', ' +
        this.g +
        ', ' +
        this.b +
        ', ' +
        this.alpha +
        ')'
      )
    }),
    (this.toHex = function () {
      var u = this.r.toString(16),
        l = this.g.toString(16),
        h = this.b.toString(16)
      return (
        u.length == 1 && (u = '0' + u),
        l.length == 1 && (l = '0' + l),
        h.length == 1 && (h = '0' + h),
        '#' + u + l + h
      )
    }),
    (this.getHelpXML = function () {
      for (var u = new Array(), l = 0; l < t.length; l++)
        for (var h = t[l].example, f = 0; f < h.length; f++) u[u.length] = h[f]
      for (var c in e) u[u.length] = c
      var v = document.createElement('ul')
      v.setAttribute('id', 'rgbcolor-examples')
      for (var l = 0; l < u.length; l++)
        try {
          var d = document.createElement('li'),
            g = new RGBColor(u[l]),
            p = document.createElement('div')
          ;(p.style.cssText =
            'margin: 3px; border: 1px solid black; background:' +
            g.toHex() +
            '; color:' +
            g.toHex()),
            p.appendChild(document.createTextNode('test'))
          var y = document.createTextNode(
            ' ' + u[l] + ' -> ' + g.toRGB() + ' -> ' + g.toHex(),
          )
          d.appendChild(p), d.appendChild(y), v.appendChild(d)
        } catch {}
      return v
    })
}
const di = Io(tb)
var rb = ee,
  ab = Ar,
  ib = tu.indexOf,
  nb = rl,
  pi = ab([].indexOf),
  sl = !!pi && 1 / pi([1], 1, -0) < 0,
  sb = sl || !nb('indexOf')
rb(
  { target: 'Array', proto: !0, forced: sb },
  {
    indexOf: function (e) {
      var t = arguments.length > 1 ? arguments[1] : void 0
      return sl ? pi(this, e, t) || 0 : ib(this, e, t)
    },
  },
)
var ob = ee,
  ub = L,
  lb = Zi,
  hb = he,
  oo = pe,
  vb = Ji,
  fb = ub(''.indexOf)
ob(
  { target: 'String', proto: !0, forced: !vb('includes') },
  {
    includes: function (e) {
      return !!~fb(
        oo(hb(this)),
        oo(lb(e)),
        arguments.length > 1 ? arguments[1] : void 0,
      )
    },
  },
)
var cb = Be,
  gb =
    Array.isArray ||
    function (e) {
      return cb(e) === 'Array'
    },
  db = ee,
  pb = L,
  yb = gb,
  mb = pb([].reverse),
  uo = [1, 2]
db(
  { target: 'Array', proto: !0, forced: String(uo) === String(uo.reverse()) },
  {
    reverse: function () {
      return yb(this) && (this.length = this.length), mb(this)
    },
  },
)
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var ol =
  function (a, e) {
    return (ol =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, r) {
          t.__proto__ = r
        }) ||
      function (t, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
      })(a, e)
  }
function ul(a, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(
      'Class extends value ' + String(e) + ' is not a constructor or null',
    )
  function t() {
    this.constructor = a
  }
  ol(a, e),
    (a.prototype =
      e === null ? Object.create(e) : ((t.prototype = e.prototype), new t()))
}
function bb(a) {
  var e = ''
  Array.isArray(a) || (a = [a])
  for (var t = 0; t < a.length; t++) {
    var r = a[t]
    if (r.type === m.CLOSE_PATH) e += 'z'
    else if (r.type === m.HORIZ_LINE_TO) e += (r.relative ? 'h' : 'H') + r.x
    else if (r.type === m.VERT_LINE_TO) e += (r.relative ? 'v' : 'V') + r.y
    else if (r.type === m.MOVE_TO)
      e += (r.relative ? 'm' : 'M') + r.x + ' ' + r.y
    else if (r.type === m.LINE_TO)
      e += (r.relative ? 'l' : 'L') + r.x + ' ' + r.y
    else if (r.type === m.CURVE_TO)
      e +=
        (r.relative ? 'c' : 'C') +
        r.x1 +
        ' ' +
        r.y1 +
        ' ' +
        r.x2 +
        ' ' +
        r.y2 +
        ' ' +
        r.x +
        ' ' +
        r.y
    else if (r.type === m.SMOOTH_CURVE_TO)
      e += (r.relative ? 's' : 'S') + r.x2 + ' ' + r.y2 + ' ' + r.x + ' ' + r.y
    else if (r.type === m.QUAD_TO)
      e += (r.relative ? 'q' : 'Q') + r.x1 + ' ' + r.y1 + ' ' + r.x + ' ' + r.y
    else if (r.type === m.SMOOTH_QUAD_TO)
      e += (r.relative ? 't' : 'T') + r.x + ' ' + r.y
    else {
      if (r.type !== m.ARC)
        throw new Error(
          'Unexpected command type "' + r.type + '" at index ' + t + '.',
        )
      e +=
        (r.relative ? 'a' : 'A') +
        r.rX +
        ' ' +
        r.rY +
        ' ' +
        r.xRot +
        ' ' +
        +r.lArcFlag +
        ' ' +
        +r.sweepFlag +
        ' ' +
        r.x +
        ' ' +
        r.y
    }
  }
  return e
}
function yi(a, e) {
  var t = a[0],
    r = a[1]
  return [t * Math.cos(e) - r * Math.sin(e), t * Math.sin(e) + r * Math.cos(e)]
}
function oe() {
  for (var a = [], e = 0; e < arguments.length; e++) a[e] = arguments[e]
  for (var t = 0; t < a.length; t++)
    if (typeof a[t] != 'number')
      throw new Error(
        'assertNumbers arguments[' +
          t +
          '] is not a number. ' +
          typeof a[t] +
          ' == typeof ' +
          a[t],
      )
  return !0
}
var Ee = Math.PI
function Ua(a, e, t) {
  ;(a.lArcFlag = a.lArcFlag === 0 ? 0 : 1),
    (a.sweepFlag = a.sweepFlag === 0 ? 0 : 1)
  var r = a.rX,
    i = a.rY,
    n = a.x,
    o = a.y
  ;(r = Math.abs(a.rX)), (i = Math.abs(a.rY))
  var s = yi([(e - n) / 2, (t - o) / 2], (-a.xRot / 180) * Ee),
    u = s[0],
    l = s[1],
    h = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(l, 2) / Math.pow(i, 2)
  1 < h && ((r *= Math.sqrt(h)), (i *= Math.sqrt(h))), (a.rX = r), (a.rY = i)
  var f = Math.pow(r, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(u, 2),
    c =
      (a.lArcFlag !== a.sweepFlag ? 1 : -1) *
      Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(i, 2) - f) / f)),
    v = ((r * l) / i) * c,
    d = ((-i * u) / r) * c,
    g = yi([v, d], (a.xRot / 180) * Ee)
  ;(a.cX = g[0] + (e + n) / 2),
    (a.cY = g[1] + (t + o) / 2),
    (a.phi1 = Math.atan2((l - d) / i, (u - v) / r)),
    (a.phi2 = Math.atan2((-l - d) / i, (-u - v) / r)),
    a.sweepFlag === 0 && a.phi2 > a.phi1 && (a.phi2 -= 2 * Ee),
    a.sweepFlag === 1 && a.phi2 < a.phi1 && (a.phi2 += 2 * Ee),
    (a.phi1 *= 180 / Ee),
    (a.phi2 *= 180 / Ee)
}
function lo(a, e, t) {
  oe(a, e, t)
  var r = a * a + e * e - t * t
  if (0 > r) return []
  if (r === 0) return [[(a * t) / (a * a + e * e), (e * t) / (a * a + e * e)]]
  var i = Math.sqrt(r)
  return [
    [(a * t + e * i) / (a * a + e * e), (e * t - a * i) / (a * a + e * e)],
    [(a * t - e * i) / (a * a + e * e), (e * t + a * i) / (a * a + e * e)],
  ]
}
var U,
  ye = Math.PI / 180
function ho(a, e, t) {
  return (1 - t) * a + t * e
}
function vo(a, e, t, r) {
  return a + Math.cos((r / 180) * Ee) * e + Math.sin((r / 180) * Ee) * t
}
function fo(a, e, t, r) {
  var i = 1e-6,
    n = e - a,
    o = t - e,
    s = 3 * n + 3 * (r - t) - 6 * o,
    u = 6 * (o - n),
    l = 3 * n
  return Math.abs(s) < i
    ? [-l / u]
    : (function (h, f, c) {
        c === void 0 && (c = 1e-6)
        var v = (h * h) / 4 - f
        if (v < -c) return []
        if (v <= c) return [-h / 2]
        var d = Math.sqrt(v)
        return [-h / 2 - d, -h / 2 + d]
      })(u / s, l / s, i)
}
function co(a, e, t, r, i) {
  var n = 1 - i
  return (
    a * (n * n * n) +
    e * (3 * n * n * i) +
    t * (3 * n * i * i) +
    r * (i * i * i)
  )
}
;(function (a) {
  function e() {
    return i(function (s, u, l) {
      return (
        s.relative &&
          (s.x1 !== void 0 && (s.x1 += u),
          s.y1 !== void 0 && (s.y1 += l),
          s.x2 !== void 0 && (s.x2 += u),
          s.y2 !== void 0 && (s.y2 += l),
          s.x !== void 0 && (s.x += u),
          s.y !== void 0 && (s.y += l),
          (s.relative = !1)),
        s
      )
    })
  }
  function t() {
    var s = NaN,
      u = NaN,
      l = NaN,
      h = NaN
    return i(function (f, c, v) {
      return (
        f.type & m.SMOOTH_CURVE_TO &&
          ((f.type = m.CURVE_TO),
          (s = isNaN(s) ? c : s),
          (u = isNaN(u) ? v : u),
          (f.x1 = f.relative ? c - s : 2 * c - s),
          (f.y1 = f.relative ? v - u : 2 * v - u)),
        f.type & m.CURVE_TO
          ? ((s = f.relative ? c + f.x2 : f.x2),
            (u = f.relative ? v + f.y2 : f.y2))
          : ((s = NaN), (u = NaN)),
        f.type & m.SMOOTH_QUAD_TO &&
          ((f.type = m.QUAD_TO),
          (l = isNaN(l) ? c : l),
          (h = isNaN(h) ? v : h),
          (f.x1 = f.relative ? c - l : 2 * c - l),
          (f.y1 = f.relative ? v - h : 2 * v - h)),
        f.type & m.QUAD_TO
          ? ((l = f.relative ? c + f.x1 : f.x1),
            (h = f.relative ? v + f.y1 : f.y1))
          : ((l = NaN), (h = NaN)),
        f
      )
    })
  }
  function r() {
    var s = NaN,
      u = NaN
    return i(function (l, h, f) {
      if (
        (l.type & m.SMOOTH_QUAD_TO &&
          ((l.type = m.QUAD_TO),
          (s = isNaN(s) ? h : s),
          (u = isNaN(u) ? f : u),
          (l.x1 = l.relative ? h - s : 2 * h - s),
          (l.y1 = l.relative ? f - u : 2 * f - u)),
        l.type & m.QUAD_TO)
      ) {
        ;(s = l.relative ? h + l.x1 : l.x1), (u = l.relative ? f + l.y1 : l.y1)
        var c = l.x1,
          v = l.y1
        ;(l.type = m.CURVE_TO),
          (l.x1 = ((l.relative ? 0 : h) + 2 * c) / 3),
          (l.y1 = ((l.relative ? 0 : f) + 2 * v) / 3),
          (l.x2 = (l.x + 2 * c) / 3),
          (l.y2 = (l.y + 2 * v) / 3)
      } else (s = NaN), (u = NaN)
      return l
    })
  }
  function i(s) {
    var u = 0,
      l = 0,
      h = NaN,
      f = NaN
    return function (c) {
      if (isNaN(h) && !(c.type & m.MOVE_TO))
        throw new Error('path must start with moveto')
      var v = s(c, u, l, h, f)
      return (
        c.type & m.CLOSE_PATH && ((u = h), (l = f)),
        c.x !== void 0 && (u = c.relative ? u + c.x : c.x),
        c.y !== void 0 && (l = c.relative ? l + c.y : c.y),
        c.type & m.MOVE_TO && ((h = u), (f = l)),
        v
      )
    }
  }
  function n(s, u, l, h, f, c) {
    return (
      oe(s, u, l, h, f, c),
      i(function (v, d, g, p) {
        var y = v.x1,
          x = v.x2,
          b = v.relative && !isNaN(p),
          T = v.x !== void 0 ? v.x : b ? 0 : d,
          $ = v.y !== void 0 ? v.y : b ? 0 : g
        function E(ne) {
          return ne * ne
        }
        v.type & m.HORIZ_LINE_TO &&
          u !== 0 &&
          ((v.type = m.LINE_TO), (v.y = v.relative ? 0 : g)),
          v.type & m.VERT_LINE_TO &&
            l !== 0 &&
            ((v.type = m.LINE_TO), (v.x = v.relative ? 0 : d)),
          v.x !== void 0 && (v.x = v.x * s + $ * l + (b ? 0 : f)),
          v.y !== void 0 && (v.y = T * u + v.y * h + (b ? 0 : c)),
          v.x1 !== void 0 && (v.x1 = v.x1 * s + v.y1 * l + (b ? 0 : f)),
          v.y1 !== void 0 && (v.y1 = y * u + v.y1 * h + (b ? 0 : c)),
          v.x2 !== void 0 && (v.x2 = v.x2 * s + v.y2 * l + (b ? 0 : f)),
          v.y2 !== void 0 && (v.y2 = x * u + v.y2 * h + (b ? 0 : c))
        var O = s * h - u * l
        if (v.xRot !== void 0 && (s !== 1 || u !== 0 || l !== 0 || h !== 1))
          if (O === 0)
            delete v.rX,
              delete v.rY,
              delete v.xRot,
              delete v.lArcFlag,
              delete v.sweepFlag,
              (v.type = m.LINE_TO)
          else {
            var C = (v.xRot * Math.PI) / 180,
              I = Math.sin(C),
              _ = Math.cos(C),
              F = 1 / E(v.rX),
              P = 1 / E(v.rY),
              X = E(_) * F + E(I) * P,
              W = 2 * I * _ * (F - P),
              z = E(I) * F + E(_) * P,
              q = X * h * h - W * u * h + z * u * u,
              H = W * (s * h + u * l) - 2 * (X * l * h + z * s * u),
              Q = X * l * l - W * s * l + z * s * s,
              R = ((Math.atan2(H, q - Q) + Math.PI) % Math.PI) / 2,
              M = Math.sin(R),
              K = Math.cos(R)
            ;(v.rX = Math.abs(O) / Math.sqrt(q * E(K) + H * M * K + Q * E(M))),
              (v.rY = Math.abs(O) / Math.sqrt(q * E(M) - H * M * K + Q * E(K))),
              (v.xRot = (180 * R) / Math.PI)
          }
        return (
          v.sweepFlag !== void 0 && 0 > O && (v.sweepFlag = +!v.sweepFlag), v
        )
      })
    )
  }
  function o() {
    return function (s) {
      var u = {}
      for (var l in s) u[l] = s[l]
      return u
    }
  }
  ;(a.ROUND = function (s) {
    function u(l) {
      return Math.round(l * s) / s
    }
    return (
      s === void 0 && (s = 1e13),
      oe(s),
      function (l) {
        return (
          l.x1 !== void 0 && (l.x1 = u(l.x1)),
          l.y1 !== void 0 && (l.y1 = u(l.y1)),
          l.x2 !== void 0 && (l.x2 = u(l.x2)),
          l.y2 !== void 0 && (l.y2 = u(l.y2)),
          l.x !== void 0 && (l.x = u(l.x)),
          l.y !== void 0 && (l.y = u(l.y)),
          l.rX !== void 0 && (l.rX = u(l.rX)),
          l.rY !== void 0 && (l.rY = u(l.rY)),
          l
        )
      }
    )
  }),
    (a.TO_ABS = e),
    (a.TO_REL = function () {
      return i(function (s, u, l) {
        return (
          s.relative ||
            (s.x1 !== void 0 && (s.x1 -= u),
            s.y1 !== void 0 && (s.y1 -= l),
            s.x2 !== void 0 && (s.x2 -= u),
            s.y2 !== void 0 && (s.y2 -= l),
            s.x !== void 0 && (s.x -= u),
            s.y !== void 0 && (s.y -= l),
            (s.relative = !0)),
          s
        )
      })
    }),
    (a.NORMALIZE_HVZ = function (s, u, l) {
      return (
        s === void 0 && (s = !0),
        u === void 0 && (u = !0),
        l === void 0 && (l = !0),
        i(function (h, f, c, v, d) {
          if (isNaN(v) && !(h.type & m.MOVE_TO))
            throw new Error('path must start with moveto')
          return (
            u &&
              h.type & m.HORIZ_LINE_TO &&
              ((h.type = m.LINE_TO), (h.y = h.relative ? 0 : c)),
            l &&
              h.type & m.VERT_LINE_TO &&
              ((h.type = m.LINE_TO), (h.x = h.relative ? 0 : f)),
            s &&
              h.type & m.CLOSE_PATH &&
              ((h.type = m.LINE_TO),
              (h.x = h.relative ? v - f : v),
              (h.y = h.relative ? d - c : d)),
            h.type & m.ARC &&
              (h.rX === 0 || h.rY === 0) &&
              ((h.type = m.LINE_TO),
              delete h.rX,
              delete h.rY,
              delete h.xRot,
              delete h.lArcFlag,
              delete h.sweepFlag),
            h
          )
        })
      )
    }),
    (a.NORMALIZE_ST = t),
    (a.QT_TO_C = r),
    (a.INFO = i),
    (a.SANITIZE = function (s) {
      s === void 0 && (s = 0), oe(s)
      var u = NaN,
        l = NaN,
        h = NaN,
        f = NaN
      return i(function (c, v, d, g, p) {
        var y = Math.abs,
          x = !1,
          b = 0,
          T = 0
        if (
          (c.type & m.SMOOTH_CURVE_TO &&
            ((b = isNaN(u) ? 0 : v - u), (T = isNaN(l) ? 0 : d - l)),
          c.type & (m.CURVE_TO | m.SMOOTH_CURVE_TO)
            ? ((u = c.relative ? v + c.x2 : c.x2),
              (l = c.relative ? d + c.y2 : c.y2))
            : ((u = NaN), (l = NaN)),
          c.type & m.SMOOTH_QUAD_TO
            ? ((h = isNaN(h) ? v : 2 * v - h), (f = isNaN(f) ? d : 2 * d - f))
            : c.type & m.QUAD_TO
              ? ((h = c.relative ? v + c.x1 : c.x1),
                (f = c.relative ? d + c.y1 : c.y2))
              : ((h = NaN), (f = NaN)),
          c.type & m.LINE_COMMANDS ||
            (c.type & m.ARC && (c.rX === 0 || c.rY === 0 || !c.lArcFlag)) ||
            c.type & m.CURVE_TO ||
            c.type & m.SMOOTH_CURVE_TO ||
            c.type & m.QUAD_TO ||
            c.type & m.SMOOTH_QUAD_TO)
        ) {
          var $ = c.x === void 0 ? 0 : c.relative ? c.x : c.x - v,
            E = c.y === void 0 ? 0 : c.relative ? c.y : c.y - d
          ;(b = isNaN(h)
            ? c.x1 === void 0
              ? b
              : c.relative
                ? c.x
                : c.x1 - v
            : h - v),
            (T = isNaN(f)
              ? c.y1 === void 0
                ? T
                : c.relative
                  ? c.y
                  : c.y1 - d
              : f - d)
          var O = c.x2 === void 0 ? 0 : c.relative ? c.x : c.x2 - v,
            C = c.y2 === void 0 ? 0 : c.relative ? c.y : c.y2 - d
          y($) <= s &&
            y(E) <= s &&
            y(b) <= s &&
            y(T) <= s &&
            y(O) <= s &&
            y(C) <= s &&
            (x = !0)
        }
        return (
          c.type & m.CLOSE_PATH && y(v - g) <= s && y(d - p) <= s && (x = !0),
          x ? [] : c
        )
      })
    }),
    (a.MATRIX = n),
    (a.ROTATE = function (s, u, l) {
      u === void 0 && (u = 0), l === void 0 && (l = 0), oe(s, u, l)
      var h = Math.sin(s),
        f = Math.cos(s)
      return n(f, h, -h, f, u - u * f + l * h, l - u * h - l * f)
    }),
    (a.TRANSLATE = function (s, u) {
      return u === void 0 && (u = 0), oe(s, u), n(1, 0, 0, 1, s, u)
    }),
    (a.SCALE = function (s, u) {
      return u === void 0 && (u = s), oe(s, u), n(s, 0, 0, u, 0, 0)
    }),
    (a.SKEW_X = function (s) {
      return oe(s), n(1, 0, Math.atan(s), 1, 0, 0)
    }),
    (a.SKEW_Y = function (s) {
      return oe(s), n(1, Math.atan(s), 0, 1, 0, 0)
    }),
    (a.X_AXIS_SYMMETRY = function (s) {
      return s === void 0 && (s = 0), oe(s), n(-1, 0, 0, 1, s, 0)
    }),
    (a.Y_AXIS_SYMMETRY = function (s) {
      return s === void 0 && (s = 0), oe(s), n(1, 0, 0, -1, 0, s)
    }),
    (a.A_TO_C = function () {
      return i(function (s, u, l) {
        return m.ARC === s.type
          ? (function (h, f, c) {
              var v, d, g, p
              h.cX || Ua(h, f, c)
              for (
                var y = Math.min(h.phi1, h.phi2),
                  x = Math.max(h.phi1, h.phi2) - y,
                  b = Math.ceil(x / 90),
                  T = new Array(b),
                  $ = f,
                  E = c,
                  O = 0;
                O < b;
                O++
              ) {
                var C = ho(h.phi1, h.phi2, O / b),
                  I = ho(h.phi1, h.phi2, (O + 1) / b),
                  _ = I - C,
                  F = (4 / 3) * Math.tan((_ * ye) / 4),
                  P = [
                    Math.cos(C * ye) - F * Math.sin(C * ye),
                    Math.sin(C * ye) + F * Math.cos(C * ye),
                  ],
                  X = P[0],
                  W = P[1],
                  z = [Math.cos(I * ye), Math.sin(I * ye)],
                  q = z[0],
                  H = z[1],
                  Q = [q + F * Math.sin(I * ye), H - F * Math.cos(I * ye)],
                  R = Q[0],
                  M = Q[1]
                T[O] = { relative: h.relative, type: m.CURVE_TO }
                var K = function (ne, ge) {
                  var Se = yi([ne * h.rX, ge * h.rY], h.xRot),
                    Ge = Se[0],
                    Mt = Se[1]
                  return [h.cX + Ge, h.cY + Mt]
                }
                ;(v = K(X, W)),
                  (T[O].x1 = v[0]),
                  (T[O].y1 = v[1]),
                  (d = K(R, M)),
                  (T[O].x2 = d[0]),
                  (T[O].y2 = d[1]),
                  (g = K(q, H)),
                  (T[O].x = g[0]),
                  (T[O].y = g[1]),
                  h.relative &&
                    ((T[O].x1 -= $),
                    (T[O].y1 -= E),
                    (T[O].x2 -= $),
                    (T[O].y2 -= E),
                    (T[O].x -= $),
                    (T[O].y -= E)),
                  ($ = (p = [T[O].x, T[O].y])[0]),
                  (E = p[1])
              }
              return T
            })(s, s.relative ? 0 : u, s.relative ? 0 : l)
          : s
      })
    }),
    (a.ANNOTATE_ARCS = function () {
      return i(function (s, u, l) {
        return (
          s.relative && ((u = 0), (l = 0)), m.ARC === s.type && Ua(s, u, l), s
        )
      })
    }),
    (a.CLONE = o),
    (a.CALCULATE_BOUNDS = function () {
      var s = function (c) {
          var v = {}
          for (var d in c) v[d] = c[d]
          return v
        },
        u = e(),
        l = r(),
        h = t(),
        f = i(function (c, v, d) {
          var g = h(l(u(s(c))))
          function p(M) {
            M > f.maxX && (f.maxX = M), M < f.minX && (f.minX = M)
          }
          function y(M) {
            M > f.maxY && (f.maxY = M), M < f.minY && (f.minY = M)
          }
          if (
            (g.type & m.DRAWING_COMMANDS && (p(v), y(d)),
            g.type & m.HORIZ_LINE_TO && p(g.x),
            g.type & m.VERT_LINE_TO && y(g.y),
            g.type & m.LINE_TO && (p(g.x), y(g.y)),
            g.type & m.CURVE_TO)
          ) {
            p(g.x), y(g.y)
            for (var x = 0, b = fo(v, g.x1, g.x2, g.x); x < b.length; x++)
              0 < (R = b[x]) && 1 > R && p(co(v, g.x1, g.x2, g.x, R))
            for (var T = 0, $ = fo(d, g.y1, g.y2, g.y); T < $.length; T++)
              0 < (R = $[T]) && 1 > R && y(co(d, g.y1, g.y2, g.y, R))
          }
          if (g.type & m.ARC) {
            p(g.x), y(g.y), Ua(g, v, d)
            for (
              var E = (g.xRot / 180) * Math.PI,
                O = Math.cos(E) * g.rX,
                C = Math.sin(E) * g.rX,
                I = -Math.sin(E) * g.rY,
                _ = Math.cos(E) * g.rY,
                F =
                  g.phi1 < g.phi2
                    ? [g.phi1, g.phi2]
                    : -180 > g.phi2
                      ? [g.phi2 + 360, g.phi1 + 360]
                      : [g.phi2, g.phi1],
                P = F[0],
                X = F[1],
                W = function (M) {
                  var K = M[0],
                    ne = M[1],
                    ge = (180 * Math.atan2(ne, K)) / Math.PI
                  return ge < P ? ge + 360 : ge
                },
                z = 0,
                q = lo(I, -O, 0).map(W);
              z < q.length;
              z++
            )
              (R = q[z]) > P && R < X && p(vo(g.cX, O, I, R))
            for (var H = 0, Q = lo(_, -C, 0).map(W); H < Q.length; H++) {
              var R
              ;(R = Q[H]) > P && R < X && y(vo(g.cY, C, _, R))
            }
          }
          return c
        })
      return (
        (f.minX = 1 / 0),
        (f.maxX = -1 / 0),
        (f.minY = 1 / 0),
        (f.maxY = -1 / 0),
        f
      )
    })
})(U || (U = {}))
var se,
  ll = (function () {
    function a() {}
    return (
      (a.prototype.round = function (e) {
        return this.transform(U.ROUND(e))
      }),
      (a.prototype.toAbs = function () {
        return this.transform(U.TO_ABS())
      }),
      (a.prototype.toRel = function () {
        return this.transform(U.TO_REL())
      }),
      (a.prototype.normalizeHVZ = function (e, t, r) {
        return this.transform(U.NORMALIZE_HVZ(e, t, r))
      }),
      (a.prototype.normalizeST = function () {
        return this.transform(U.NORMALIZE_ST())
      }),
      (a.prototype.qtToC = function () {
        return this.transform(U.QT_TO_C())
      }),
      (a.prototype.aToC = function () {
        return this.transform(U.A_TO_C())
      }),
      (a.prototype.sanitize = function (e) {
        return this.transform(U.SANITIZE(e))
      }),
      (a.prototype.translate = function (e, t) {
        return this.transform(U.TRANSLATE(e, t))
      }),
      (a.prototype.scale = function (e, t) {
        return this.transform(U.SCALE(e, t))
      }),
      (a.prototype.rotate = function (e, t, r) {
        return this.transform(U.ROTATE(e, t, r))
      }),
      (a.prototype.matrix = function (e, t, r, i, n, o) {
        return this.transform(U.MATRIX(e, t, r, i, n, o))
      }),
      (a.prototype.skewX = function (e) {
        return this.transform(U.SKEW_X(e))
      }),
      (a.prototype.skewY = function (e) {
        return this.transform(U.SKEW_Y(e))
      }),
      (a.prototype.xSymmetry = function (e) {
        return this.transform(U.X_AXIS_SYMMETRY(e))
      }),
      (a.prototype.ySymmetry = function (e) {
        return this.transform(U.Y_AXIS_SYMMETRY(e))
      }),
      (a.prototype.annotateArcs = function () {
        return this.transform(U.ANNOTATE_ARCS())
      }),
      a
    )
  })(),
  xb = function (a) {
    return (
      a === ' ' ||
      a === '	' ||
      a === '\r' ||
      a ===
        `
`
    )
  },
  go = function (a) {
    return 48 <= a.charCodeAt(0) && a.charCodeAt(0) <= 57
  },
  Tb = (function (a) {
    function e() {
      var t = a.call(this) || this
      return (
        (t.curNumber = ''),
        (t.curCommandType = -1),
        (t.curCommandRelative = !1),
        (t.canParseCommandOrComma = !0),
        (t.curNumberHasExp = !1),
        (t.curNumberHasExpDigits = !1),
        (t.curNumberHasDecimal = !1),
        (t.curArgs = []),
        t
      )
    }
    return (
      ul(e, a),
      (e.prototype.finish = function (t) {
        if (
          (t === void 0 && (t = []),
          this.parse(' ', t),
          this.curArgs.length !== 0 || !this.canParseCommandOrComma)
        )
          throw new SyntaxError('Unterminated command at the path end.')
        return t
      }),
      (e.prototype.parse = function (t, r) {
        var i = this
        r === void 0 && (r = [])
        for (
          var n = function (f) {
              r.push(f), (i.curArgs.length = 0), (i.canParseCommandOrComma = !0)
            },
            o = 0;
          o < t.length;
          o++
        ) {
          var s = t[o],
            u = !(
              this.curCommandType !== m.ARC ||
              (this.curArgs.length !== 3 && this.curArgs.length !== 4) ||
              this.curNumber.length !== 1 ||
              (this.curNumber !== '0' && this.curNumber !== '1')
            ),
            l = go(s) && ((this.curNumber === '0' && s === '0') || u)
          if (!go(s) || l)
            if (s !== 'e' && s !== 'E')
              if (
                (s !== '-' && s !== '+') ||
                !this.curNumberHasExp ||
                this.curNumberHasExpDigits
              )
                if (
                  s !== '.' ||
                  this.curNumberHasExp ||
                  this.curNumberHasDecimal ||
                  u
                ) {
                  if (this.curNumber && this.curCommandType !== -1) {
                    var h = Number(this.curNumber)
                    if (isNaN(h))
                      throw new SyntaxError('Invalid number ending at ' + o)
                    if (this.curCommandType === m.ARC) {
                      if (
                        this.curArgs.length === 0 ||
                        this.curArgs.length === 1
                      ) {
                        if (0 > h)
                          throw new SyntaxError(
                            'Expected positive number, got "' +
                              h +
                              '" at index "' +
                              o +
                              '"',
                          )
                      } else if (
                        (this.curArgs.length === 3 ||
                          this.curArgs.length === 4) &&
                        this.curNumber !== '0' &&
                        this.curNumber !== '1'
                      )
                        throw new SyntaxError(
                          'Expected a flag, got "' +
                            this.curNumber +
                            '" at index "' +
                            o +
                            '"',
                        )
                    }
                    this.curArgs.push(h),
                      this.curArgs.length === Ob[this.curCommandType] &&
                        (m.HORIZ_LINE_TO === this.curCommandType
                          ? n({
                              type: m.HORIZ_LINE_TO,
                              relative: this.curCommandRelative,
                              x: h,
                            })
                          : m.VERT_LINE_TO === this.curCommandType
                            ? n({
                                type: m.VERT_LINE_TO,
                                relative: this.curCommandRelative,
                                y: h,
                              })
                            : this.curCommandType === m.MOVE_TO ||
                                this.curCommandType === m.LINE_TO ||
                                this.curCommandType === m.SMOOTH_QUAD_TO
                              ? (n({
                                  type: this.curCommandType,
                                  relative: this.curCommandRelative,
                                  x: this.curArgs[0],
                                  y: this.curArgs[1],
                                }),
                                m.MOVE_TO === this.curCommandType &&
                                  (this.curCommandType = m.LINE_TO))
                              : this.curCommandType === m.CURVE_TO
                                ? n({
                                    type: m.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5],
                                  })
                                : this.curCommandType === m.SMOOTH_CURVE_TO
                                  ? n({
                                      type: m.SMOOTH_CURVE_TO,
                                      relative: this.curCommandRelative,
                                      x2: this.curArgs[0],
                                      y2: this.curArgs[1],
                                      x: this.curArgs[2],
                                      y: this.curArgs[3],
                                    })
                                  : this.curCommandType === m.QUAD_TO
                                    ? n({
                                        type: m.QUAD_TO,
                                        relative: this.curCommandRelative,
                                        x1: this.curArgs[0],
                                        y1: this.curArgs[1],
                                        x: this.curArgs[2],
                                        y: this.curArgs[3],
                                      })
                                    : this.curCommandType === m.ARC &&
                                      n({
                                        type: m.ARC,
                                        relative: this.curCommandRelative,
                                        rX: this.curArgs[0],
                                        rY: this.curArgs[1],
                                        xRot: this.curArgs[2],
                                        lArcFlag: this.curArgs[3],
                                        sweepFlag: this.curArgs[4],
                                        x: this.curArgs[5],
                                        y: this.curArgs[6],
                                      })),
                      (this.curNumber = ''),
                      (this.curNumberHasExpDigits = !1),
                      (this.curNumberHasExp = !1),
                      (this.curNumberHasDecimal = !1),
                      (this.canParseCommandOrComma = !0)
                  }
                  if (!xb(s))
                    if (s === ',' && this.canParseCommandOrComma)
                      this.canParseCommandOrComma = !1
                    else if (s !== '+' && s !== '-' && s !== '.')
                      if (l)
                        (this.curNumber = s), (this.curNumberHasDecimal = !1)
                      else {
                        if (this.curArgs.length !== 0)
                          throw new SyntaxError(
                            'Unterminated command at index ' + o + '.',
                          )
                        if (!this.canParseCommandOrComma)
                          throw new SyntaxError(
                            'Unexpected character "' +
                              s +
                              '" at index ' +
                              o +
                              '. Command cannot follow comma',
                          )
                        if (
                          ((this.canParseCommandOrComma = !1),
                          s !== 'z' && s !== 'Z')
                        )
                          if (s === 'h' || s === 'H')
                            (this.curCommandType = m.HORIZ_LINE_TO),
                              (this.curCommandRelative = s === 'h')
                          else if (s === 'v' || s === 'V')
                            (this.curCommandType = m.VERT_LINE_TO),
                              (this.curCommandRelative = s === 'v')
                          else if (s === 'm' || s === 'M')
                            (this.curCommandType = m.MOVE_TO),
                              (this.curCommandRelative = s === 'm')
                          else if (s === 'l' || s === 'L')
                            (this.curCommandType = m.LINE_TO),
                              (this.curCommandRelative = s === 'l')
                          else if (s === 'c' || s === 'C')
                            (this.curCommandType = m.CURVE_TO),
                              (this.curCommandRelative = s === 'c')
                          else if (s === 's' || s === 'S')
                            (this.curCommandType = m.SMOOTH_CURVE_TO),
                              (this.curCommandRelative = s === 's')
                          else if (s === 'q' || s === 'Q')
                            (this.curCommandType = m.QUAD_TO),
                              (this.curCommandRelative = s === 'q')
                          else if (s === 't' || s === 'T')
                            (this.curCommandType = m.SMOOTH_QUAD_TO),
                              (this.curCommandRelative = s === 't')
                          else {
                            if (s !== 'a' && s !== 'A')
                              throw new SyntaxError(
                                'Unexpected character "' +
                                  s +
                                  '" at index ' +
                                  o +
                                  '.',
                              )
                            ;(this.curCommandType = m.ARC),
                              (this.curCommandRelative = s === 'a')
                          }
                        else
                          r.push({ type: m.CLOSE_PATH }),
                            (this.canParseCommandOrComma = !0),
                            (this.curCommandType = -1)
                      }
                    else
                      (this.curNumber = s),
                        (this.curNumberHasDecimal = s === '.')
                } else (this.curNumber += s), (this.curNumberHasDecimal = !0)
              else this.curNumber += s
            else (this.curNumber += s), (this.curNumberHasExp = !0)
          else
            (this.curNumber += s),
              (this.curNumberHasExpDigits = this.curNumberHasExp)
        }
        return r
      }),
      (e.prototype.transform = function (t) {
        return Object.create(this, {
          parse: {
            value: function (r, i) {
              i === void 0 && (i = [])
              for (
                var n = 0, o = Object.getPrototypeOf(this).parse.call(this, r);
                n < o.length;
                n++
              ) {
                var s = o[n],
                  u = t(s)
                Array.isArray(u) ? i.push.apply(i, u) : i.push(u)
              }
              return i
            },
          },
        })
      }),
      e
    )
  })(ll),
  m = (function (a) {
    function e(t) {
      var r = a.call(this) || this
      return (r.commands = typeof t == 'string' ? e.parse(t) : t), r
    }
    return (
      ul(e, a),
      (e.prototype.encode = function () {
        return e.encode(this.commands)
      }),
      (e.prototype.getBounds = function () {
        var t = U.CALCULATE_BOUNDS()
        return this.transform(t), t
      }),
      (e.prototype.transform = function (t) {
        for (var r = [], i = 0, n = this.commands; i < n.length; i++) {
          var o = t(n[i])
          Array.isArray(o) ? r.push.apply(r, o) : r.push(o)
        }
        return (this.commands = r), this
      }),
      (e.encode = function (t) {
        return bb(t)
      }),
      (e.parse = function (t) {
        var r = new Tb(),
          i = []
        return r.parse(t, i), r.finish(i), i
      }),
      (e.CLOSE_PATH = 1),
      (e.MOVE_TO = 2),
      (e.HORIZ_LINE_TO = 4),
      (e.VERT_LINE_TO = 8),
      (e.LINE_TO = 16),
      (e.CURVE_TO = 32),
      (e.SMOOTH_CURVE_TO = 64),
      (e.QUAD_TO = 128),
      (e.SMOOTH_QUAD_TO = 256),
      (e.ARC = 512),
      (e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO),
      (e.DRAWING_COMMANDS =
        e.HORIZ_LINE_TO |
        e.VERT_LINE_TO |
        e.LINE_TO |
        e.CURVE_TO |
        e.SMOOTH_CURVE_TO |
        e.QUAD_TO |
        e.SMOOTH_QUAD_TO |
        e.ARC),
      e
    )
  })(ll),
  Ob =
    (((se = {})[m.MOVE_TO] = 2),
    (se[m.LINE_TO] = 2),
    (se[m.HORIZ_LINE_TO] = 1),
    (se[m.VERT_LINE_TO] = 1),
    (se[m.CLOSE_PATH] = 0),
    (se[m.QUAD_TO] = 4),
    (se[m.SMOOTH_QUAD_TO] = 2),
    (se[m.CURVE_TO] = 6),
    (se[m.SMOOTH_CURVE_TO] = 4),
    (se[m.ARC] = 7),
    se),
  Sb = Y,
  Eb = fe,
  $b = br,
  wb = Bu,
  po = RegExp.prototype,
  Cb = function (a) {
    var e = a.flags
    return e === void 0 && !('flags' in po) && !Eb(a, 'flags') && $b(po, a)
      ? Sb(wb, a)
      : e
  },
  Ab = Sr.PROPER,
  Pb = Ue,
  Rb = J,
  yo = pe,
  Nb = k,
  Ib = Cb,
  tn = 'toString',
  hl = RegExp.prototype,
  vl = hl[tn],
  Mb = Nb(function () {
    return vl.call({ source: 'a', flags: 'b' }) !== '/a/b'
  }),
  _b = Ab && vl.name !== tn
;(Mb || _b) &&
  Pb(
    hl,
    tn,
    function () {
      var e = Rb(this),
        t = yo(e.source),
        r = yo(Ib(e))
      return '/' + t + '/' + r
    },
    { unsafe: !0 },
  )
function vr(a) {
  '@babel/helpers - typeof'
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (vr = function (e) {
          return typeof e
        })
      : (vr = function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }),
    vr(a)
  )
}
function Vb(a, e) {
  if (!(a instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
var Db = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ],
  kb = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ]
function Lb(a, e, t, r, i) {
  if (
    (typeof a == 'string' && (a = document.getElementById(a)),
    !a || vr(a) !== 'object' || !('getContext' in a))
  )
    throw new TypeError(
      'Expecting canvas with `getContext` method in processCanvasRGB(A) calls!',
    )
  var n = a.getContext('2d')
  try {
    return n.getImageData(e, t, r, i)
  } catch (o) {
    throw new Error('unable to access image data: ' + o)
  }
}
function Bb(a, e, t, r, i, n) {
  if (!(isNaN(n) || n < 1)) {
    n |= 0
    var o = Lb(a, e, t, r, i)
    ;(o = Fb(o, e, t, r, i, n)), a.getContext('2d').putImageData(o, e, t)
  }
}
function Fb(a, e, t, r, i, n) {
  for (
    var o = a.data,
      s = 2 * n + 1,
      u = r - 1,
      l = i - 1,
      h = n + 1,
      f = (h * (h + 1)) / 2,
      c = new mo(),
      v = c,
      d,
      g = 1;
    g < s;
    g++
  )
    (v = v.next = new mo()), g === h && (d = v)
  v.next = c
  for (
    var p = null, y = null, x = 0, b = 0, T = Db[n], $ = kb[n], E = 0;
    E < i;
    E++
  ) {
    v = c
    for (
      var O = o[b], C = o[b + 1], I = o[b + 2], _ = o[b + 3], F = 0;
      F < h;
      F++
    )
      (v.r = O), (v.g = C), (v.b = I), (v.a = _), (v = v.next)
    for (
      var P = 0,
        X = 0,
        W = 0,
        z = 0,
        q = h * O,
        H = h * C,
        Q = h * I,
        R = h * _,
        M = f * O,
        K = f * C,
        ne = f * I,
        ge = f * _,
        Se = 1;
      Se < h;
      Se++
    ) {
      var Ge = b + ((u < Se ? u : Se) << 2),
        Mt = o[Ge],
        nn = o[Ge + 1],
        sn = o[Ge + 2],
        on = o[Ge + 3],
        _t = h - Se
      ;(M += (v.r = Mt) * _t),
        (K += (v.g = nn) * _t),
        (ne += (v.b = sn) * _t),
        (ge += (v.a = on) * _t),
        (P += Mt),
        (X += nn),
        (W += sn),
        (z += on),
        (v = v.next)
    }
    ;(p = c), (y = d)
    for (var Lr = 0; Lr < r; Lr++) {
      var Br = (ge * T) >>> $
      if (((o[b + 3] = Br), Br !== 0)) {
        var Fr = 255 / Br
        ;(o[b] = ((M * T) >>> $) * Fr),
          (o[b + 1] = ((K * T) >>> $) * Fr),
          (o[b + 2] = ((ne * T) >>> $) * Fr)
      } else o[b] = o[b + 1] = o[b + 2] = 0
      ;(M -= q),
        (K -= H),
        (ne -= Q),
        (ge -= R),
        (q -= p.r),
        (H -= p.g),
        (Q -= p.b),
        (R -= p.a)
      var Ae = Lr + n + 1
      ;(Ae = (x + (Ae < u ? Ae : u)) << 2),
        (P += p.r = o[Ae]),
        (X += p.g = o[Ae + 1]),
        (W += p.b = o[Ae + 2]),
        (z += p.a = o[Ae + 3]),
        (M += P),
        (K += X),
        (ne += W),
        (ge += z),
        (p = p.next)
      var Vt = y,
        un = Vt.r,
        ln = Vt.g,
        hn = Vt.b,
        vn = Vt.a
      ;(q += un),
        (H += ln),
        (Q += hn),
        (R += vn),
        (P -= un),
        (X -= ln),
        (W -= hn),
        (z -= vn),
        (y = y.next),
        (b += 4)
    }
    x += r
  }
  for (var He = 0; He < r; He++) {
    b = He << 2
    var Pe = o[b],
      Re = o[b + 1],
      Ne = o[b + 2],
      te = o[b + 3],
      jr = h * Pe,
      Ur = h * Re,
      zr = h * Ne,
      Gr = h * te,
      Dt = f * Pe,
      kt = f * Re,
      Lt = f * Ne,
      Bt = f * te
    v = c
    for (var fn = 0; fn < h; fn++)
      (v.r = Pe), (v.g = Re), (v.b = Ne), (v.a = te), (v = v.next)
    for (var cn = r, Hr = 0, Yr = 0, Xr = 0, Wr = 0, Ft = 1; Ft <= n; Ft++) {
      b = (cn + He) << 2
      var jt = h - Ft
      ;(Dt += (v.r = Pe = o[b]) * jt),
        (kt += (v.g = Re = o[b + 1]) * jt),
        (Lt += (v.b = Ne = o[b + 2]) * jt),
        (Bt += (v.a = te = o[b + 3]) * jt),
        (Wr += Pe),
        (Hr += Re),
        (Yr += Ne),
        (Xr += te),
        (v = v.next),
        Ft < l && (cn += r)
    }
    ;(b = He), (p = c), (y = d)
    for (var qr = 0; qr < i; qr++) {
      var re = b << 2
      ;(o[re + 3] = te = (Bt * T) >>> $),
        te > 0
          ? ((te = 255 / te),
            (o[re] = ((Dt * T) >>> $) * te),
            (o[re + 1] = ((kt * T) >>> $) * te),
            (o[re + 2] = ((Lt * T) >>> $) * te))
          : (o[re] = o[re + 1] = o[re + 2] = 0),
        (Dt -= jr),
        (kt -= Ur),
        (Lt -= zr),
        (Bt -= Gr),
        (jr -= p.r),
        (Ur -= p.g),
        (zr -= p.b),
        (Gr -= p.a),
        (re = (He + ((re = qr + h) < l ? re : l) * r) << 2),
        (Dt += Wr += p.r = o[re]),
        (kt += Hr += p.g = o[re + 1]),
        (Lt += Yr += p.b = o[re + 2]),
        (Bt += Xr += p.a = o[re + 3]),
        (p = p.next),
        (jr += Pe = y.r),
        (Ur += Re = y.g),
        (zr += Ne = y.b),
        (Gr += te = y.a),
        (Wr -= Pe),
        (Hr -= Re),
        (Yr -= Ne),
        (Xr -= te),
        (y = y.next),
        (b += r)
    }
  }
  return a
}
var mo = function a() {
  Vb(this, a),
    (this.r = 0),
    (this.g = 0),
    (this.b = 0),
    (this.a = 0),
    (this.next = null)
}
function jb() {
  var { DOMParser: a } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = {
      window: null,
      ignoreAnimation: !0,
      ignoreMouse: !0,
      DOMParser: a,
      createCanvas(t, r) {
        return new OffscreenCanvas(t, r)
      },
      createImage(t) {
        return xe(function* () {
          var r = yield fetch(t),
            i = yield r.blob(),
            n = yield createImageBitmap(i)
          return n
        })()
      },
    }
  return (
    (typeof DOMParser < 'u' || typeof a > 'u') &&
      Reflect.deleteProperty(e, 'DOMParser'),
    e
  )
}
function Ub(a) {
  var { DOMParser: e, canvas: t, fetch: r } = a
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: e,
    fetch: r,
    createCanvas: t.createCanvas,
    createImage: t.loadImage,
  }
}
var e2 = Object.freeze({ __proto__: null, offscreen: jb, node: Ub })
function ht(a) {
  return a.replace(/(?!\u3000)\s+/gm, ' ')
}
function zb(a) {
  return a.replace(/^[\n \t]+/, '')
}
function Gb(a) {
  return a.replace(/[\n \t]+$/, '')
}
function ie(a) {
  var e =
    (a || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []
  return e.map(parseFloat)
}
var Hb = /^[A-Z-]+$/
function Yb(a) {
  return Hb.test(a) ? a.toLowerCase() : a
}
function fl(a) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(a) || []
  return e[2] || e[3] || e[4]
}
function Xb(a) {
  if (!a.startsWith('rgb')) return a
  var e = 3,
    t = a.replace(/\d+(\.\d+)?/g, (r, i) =>
      e-- && i ? String(Math.round(parseFloat(r))) : r,
    )
  return t
}
var Wb = /(\[[^\]]+\])/g,
  qb = /(#[^\s+>~.[:]+)/g,
  Qb = /(\.[^\s+>~.[:]+)/g,
  Kb = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
  Zb = /(:[\w-]+\([^)]*\))/gi,
  Jb = /(:[^\s+>~.[:]+)/g,
  e1 = /([^\s+>~.[:]+)/g
function _e(a, e) {
  var t = e.exec(a)
  return t ? [a.replace(e, ' '), t.length] : [a, 0]
}
function t1(a) {
  var e = [0, 0, 0],
    t = a.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' '),
    r = 0
  return (
    ([t, r] = _e(t, Wb)),
    (e[1] += r),
    ([t, r] = _e(t, qb)),
    (e[0] += r),
    ([t, r] = _e(t, Qb)),
    (e[1] += r),
    ([t, r] = _e(t, Kb)),
    (e[2] += r),
    ([t, r] = _e(t, Zb)),
    (e[1] += r),
    ([t, r] = _e(t, Jb)),
    (e[1] += r),
    (t = t.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ')),
    ([t, r] = _e(t, e1)),
    (e[2] += r),
    e.join('')
  )
}
var at = 1e-8
function bo(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
}
function mi(a, e) {
  return (a[0] * e[0] + a[1] * e[1]) / (bo(a) * bo(e))
}
function xo(a, e) {
  return (a[0] * e[1] < a[1] * e[0] ? -1 : 1) * Math.acos(mi(a, e))
}
function To(a) {
  return a * a * a
}
function Oo(a) {
  return 3 * a * a * (1 - a)
}
function So(a) {
  return 3 * a * (1 - a) * (1 - a)
}
function Eo(a) {
  return (1 - a) * (1 - a) * (1 - a)
}
function $o(a) {
  return a * a
}
function wo(a) {
  return 2 * a * (1 - a)
}
function Co(a) {
  return (1 - a) * (1 - a)
}
class S {
  constructor(e, t, r) {
    ;(this.document = e),
      (this.name = t),
      (this.value = r),
      (this.isNormalizedColor = !1)
  }
  static empty(e) {
    return new S(e, 'EMPTY', '')
  }
  split() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ' ',
      { document: t, name: r } = this
    return ht(this.getString())
      .trim()
      .split(e)
      .map((i) => new S(t, r, i))
  }
  hasValue(e) {
    var { value: t } = this
    return t !== null && t !== '' && (e || t !== 0) && typeof t < 'u'
  }
  isString(e) {
    var { value: t } = this,
      r = typeof t == 'string'
    return !r || !e ? r : e.test(t)
  }
  isUrlDefinition() {
    return this.isString(/^url\(/)
  }
  isPixels() {
    if (!this.hasValue()) return !1
    var e = this.getString()
    switch (!0) {
      case e.endsWith('px'):
      case /^[0-9]+$/.test(e):
        return !0
      default:
        return !1
    }
  }
  setValue(e) {
    return (this.value = e), this
  }
  getValue(e) {
    return typeof e > 'u' || this.hasValue() ? this.value : e
  }
  getNumber(e) {
    if (!this.hasValue()) return typeof e > 'u' ? 0 : parseFloat(e)
    var { value: t } = this,
      r = parseFloat(t)
    return this.isString(/%$/) && (r /= 100), r
  }
  getString(e) {
    return typeof e > 'u' || this.hasValue()
      ? typeof this.value > 'u'
        ? ''
        : String(this.value)
      : String(e)
  }
  getColor(e) {
    var t = this.getString(e)
    return (
      this.isNormalizedColor ||
        ((this.isNormalizedColor = !0), (t = Xb(t)), (this.value = t)),
      t
    )
  }
  getDpi() {
    return 96
  }
  getRem() {
    return this.document.rootEmSize
  }
  getEm() {
    return this.document.emSize
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, '')
  }
  getPixels(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    if (!this.hasValue()) return 0
    var [r, i] = typeof e == 'boolean' ? [void 0, e] : [e],
      { viewPort: n } = this.document.screen
    switch (!0) {
      case this.isString(/vmin$/):
        return (
          (this.getNumber() / 100) *
          Math.min(n.computeSize('x'), n.computeSize('y'))
        )
      case this.isString(/vmax$/):
        return (
          (this.getNumber() / 100) *
          Math.max(n.computeSize('x'), n.computeSize('y'))
        )
      case this.isString(/vw$/):
        return (this.getNumber() / 100) * n.computeSize('x')
      case this.isString(/vh$/):
        return (this.getNumber() / 100) * n.computeSize('y')
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem()
      case this.isString(/em$/):
        return this.getNumber() * this.getEm()
      case this.isString(/ex$/):
        return (this.getNumber() * this.getEm()) / 2
      case this.isString(/px$/):
        return this.getNumber()
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72)
      case this.isString(/pc$/):
        return this.getNumber() * 15
      case this.isString(/cm$/):
        return (this.getNumber() * this.getDpi()) / 2.54
      case this.isString(/mm$/):
        return (this.getNumber() * this.getDpi()) / 25.4
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi()
      case this.isString(/%$/) && i:
        return this.getNumber() * this.getEm()
      case this.isString(/%$/):
        return this.getNumber() * n.computeSize(r)
      default: {
        var o = this.getNumber()
        return t && o < 1 ? o * n.computeSize(r) : o
      }
    }
  }
  getMilliseconds() {
    return this.hasValue()
      ? this.isString(/ms$/)
        ? this.getNumber()
        : this.getNumber() * 1e3
      : 0
  }
  getRadians() {
    if (!this.hasValue()) return 0
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180)
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200)
      case this.isString(/rad$/):
        return this.getNumber()
      default:
        return this.getNumber() * (Math.PI / 180)
    }
  }
  getDefinition() {
    var e = this.getString(),
      t = /#([^)'"]+)/.exec(e)
    return t && (t = t[1]), t || (t = e), this.document.definitions[t]
  }
  getFillStyleDefinition(e, t) {
    var r = this.getDefinition()
    if (!r) return null
    if (typeof r.createGradient == 'function')
      return r.createGradient(this.document.ctx, e, t)
    if (typeof r.createPattern == 'function') {
      if (r.getHrefAttribute().hasValue()) {
        var i = r.getAttribute('patternTransform')
        ;(r = r.getHrefAttribute().getDefinition()),
          i.hasValue() &&
            r.getAttribute('patternTransform', !0).setValue(i.value)
      }
      return r.createPattern(this.document.ctx, e, t)
    }
    return null
  }
  getTextBaseline() {
    return this.hasValue() ? S.textBaselineMapping[this.getString()] : null
  }
  addOpacity(e) {
    for (
      var t = this.getColor(), r = t.length, i = 0, n = 0;
      n < r && (t[n] === ',' && i++, i !== 3);
      n++
    );
    if (e.hasValue() && this.isString() && i !== 3) {
      var o = new di(t)
      o.ok && ((o.alpha = e.getNumber()), (t = o.toRGBA()))
    }
    return new S(this.document, this.name, t)
  }
}
S.textBaselineMapping = {
  baseline: 'alphabetic',
  'before-edge': 'top',
  'text-before-edge': 'top',
  middle: 'middle',
  central: 'middle',
  'after-edge': 'bottom',
  'text-after-edge': 'bottom',
  ideographic: 'ideographic',
  alphabetic: 'alphabetic',
  hanging: 'hanging',
  mathematical: 'alphabetic',
}
class r1 {
  constructor() {
    this.viewPorts = []
  }
  clear() {
    this.viewPorts = []
  }
  setCurrent(e, t) {
    this.viewPorts.push({ width: e, height: t })
  }
  removeCurrent() {
    this.viewPorts.pop()
  }
  getCurrent() {
    var { viewPorts: e } = this
    return e[e.length - 1]
  }
  get width() {
    return this.getCurrent().width
  }
  get height() {
    return this.getCurrent().height
  }
  computeSize(e) {
    return typeof e == 'number'
      ? e
      : e === 'x'
        ? this.width
        : e === 'y'
          ? this.height
          : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) /
            Math.sqrt(2)
  }
}
class D {
  constructor(e, t) {
    ;(this.x = e), (this.y = t)
  }
  static parse(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      [r = t, i = t] = ie(e)
    return new D(r, i)
  }
  static parseScale(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
      [r = t, i = r] = ie(e)
    return new D(r, i)
  }
  static parsePath(e) {
    for (var t = ie(e), r = t.length, i = [], n = 0; n < r; n += 2)
      i.push(new D(t[n], t[n + 1]))
    return i
  }
  angleTo(e) {
    return Math.atan2(e.y - this.y, e.x - this.x)
  }
  applyTransform(e) {
    var { x: t, y: r } = this,
      i = t * e[0] + r * e[2] + e[4],
      n = t * e[1] + r * e[3] + e[5]
    ;(this.x = i), (this.y = n)
  }
}
class a1 {
  constructor(e) {
    ;(this.screen = e),
      (this.working = !1),
      (this.events = []),
      (this.eventElements = []),
      (this.onClick = this.onClick.bind(this)),
      (this.onMouseMove = this.onMouseMove.bind(this))
  }
  isWorking() {
    return this.working
  }
  start() {
    if (!this.working) {
      var { screen: e, onClick: t, onMouseMove: r } = this,
        i = e.ctx.canvas
      ;(i.onclick = t), (i.onmousemove = r), (this.working = !0)
    }
  }
  stop() {
    if (this.working) {
      var e = this.screen.ctx.canvas
      ;(this.working = !1), (e.onclick = null), (e.onmousemove = null)
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0
  }
  runEvents() {
    if (this.working) {
      var { screen: e, events: t, eventElements: r } = this,
        { style: i } = e.ctx.canvas
      i && (i.cursor = ''),
        t.forEach((n, o) => {
          for (var { run: s } = n, u = r[o]; u; ) s(u), (u = u.parent)
        }),
        (this.events = []),
        (this.eventElements = [])
    }
  }
  checkPath(e, t) {
    if (!(!this.working || !t)) {
      var { events: r, eventElements: i } = this
      r.forEach((n, o) => {
        var { x: s, y: u } = n
        !i[o] && t.isPointInPath && t.isPointInPath(s, u) && (i[o] = e)
      })
    }
  }
  checkBoundingBox(e, t) {
    if (!(!this.working || !t)) {
      var { events: r, eventElements: i } = this
      r.forEach((n, o) => {
        var { x: s, y: u } = n
        !i[o] && t.isPointInBox(s, u) && (i[o] = e)
      })
    }
  }
  mapXY(e, t) {
    for (
      var { window: r, ctx: i } = this.screen, n = new D(e, t), o = i.canvas;
      o;

    )
      (n.x -= o.offsetLeft), (n.y -= o.offsetTop), (o = o.offsetParent)
    return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), n
  }
  onClick(e) {
    var { x: t, y: r } = this.mapXY(e.clientX, e.clientY)
    this.events.push({
      type: 'onclick',
      x: t,
      y: r,
      run(i) {
        i.onClick && i.onClick()
      },
    })
  }
  onMouseMove(e) {
    var { x: t, y: r } = this.mapXY(e.clientX, e.clientY)
    this.events.push({
      type: 'onmousemove',
      x: t,
      y: r,
      run(i) {
        i.onMouseMove && i.onMouseMove()
      },
    })
  }
}
var cl = typeof window < 'u' ? window : null,
  gl = typeof fetch < 'u' ? fetch.bind(void 0) : null
class _r {
  constructor(e) {
    var { fetch: t = gl, window: r = cl } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.ctx = e),
      (this.FRAMERATE = 30),
      (this.MAX_VIRTUAL_PIXELS = 3e4),
      (this.CLIENT_WIDTH = 800),
      (this.CLIENT_HEIGHT = 600),
      (this.viewPort = new r1()),
      (this.mouse = new a1(this)),
      (this.animations = []),
      (this.waits = []),
      (this.frameDuration = 0),
      (this.isReadyLock = !1),
      (this.isFirstRender = !0),
      (this.intervalId = null),
      (this.window = r),
      (this.fetch = t)
  }
  wait(e) {
    this.waits.push(e)
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve()
  }
  isReady() {
    if (this.isReadyLock) return !0
    var e = this.waits.every((t) => t())
    return (
      e && ((this.waits = []), this.resolveReady && this.resolveReady()),
      (this.isReadyLock = e),
      e
    )
  }
  setDefaults(e) {
    ;(e.strokeStyle = 'rgba(0,0,0,0)'),
      (e.lineCap = 'butt'),
      (e.lineJoin = 'miter'),
      (e.miterLimit = 4)
  }
  setViewBox(e) {
    var {
        document: t,
        ctx: r,
        aspectRatio: i,
        width: n,
        desiredWidth: o,
        height: s,
        desiredHeight: u,
        minX: l = 0,
        minY: h = 0,
        refX: f,
        refY: c,
        clip: v = !1,
        clipX: d = 0,
        clipY: g = 0,
      } = e,
      p = ht(i).replace(/^defer\s/, ''),
      [y, x] = p.split(' '),
      b = y || 'xMidYMid',
      T = x || 'meet',
      $ = n / o,
      E = s / u,
      O = Math.min($, E),
      C = Math.max($, E),
      I = o,
      _ = u
    T === 'meet' && ((I *= O), (_ *= O)), T === 'slice' && ((I *= C), (_ *= C))
    var F = new S(t, 'refX', f),
      P = new S(t, 'refY', c),
      X = F.hasValue() && P.hasValue()
    if ((X && r.translate(-O * F.getPixels('x'), -O * P.getPixels('y')), v)) {
      var W = O * d,
        z = O * g
      r.beginPath(),
        r.moveTo(W, z),
        r.lineTo(n, z),
        r.lineTo(n, s),
        r.lineTo(W, s),
        r.closePath(),
        r.clip()
    }
    if (!X) {
      var q = T === 'meet' && O === E,
        H = T === 'slice' && C === E,
        Q = T === 'meet' && O === $,
        R = T === 'slice' && C === $
      b.startsWith('xMid') && (q || H) && r.translate(n / 2 - I / 2, 0),
        b.endsWith('YMid') && (Q || R) && r.translate(0, s / 2 - _ / 2),
        b.startsWith('xMax') && (q || H) && r.translate(n - I, 0),
        b.endsWith('YMax') && (Q || R) && r.translate(0, s - _)
    }
    switch (!0) {
      case b === 'none':
        r.scale($, E)
        break
      case T === 'meet':
        r.scale(O, O)
        break
      case T === 'slice':
        r.scale(C, C)
        break
    }
    r.translate(-l, -h)
  }
  start(e) {
    var {
        enableRedraw: t = !1,
        ignoreMouse: r = !1,
        ignoreAnimation: i = !1,
        ignoreDimensions: n = !1,
        ignoreClear: o = !1,
        forceRedraw: s,
        scaleWidth: u,
        scaleHeight: l,
        offsetX: h,
        offsetY: f,
      } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      { FRAMERATE: c, mouse: v } = this,
      d = 1e3 / c
    if (
      ((this.frameDuration = d),
      (this.readyPromise = new Promise((b) => {
        this.resolveReady = b
      })),
      this.isReady() && this.render(e, n, o, u, l, h, f),
      !!t)
    ) {
      var g = Date.now(),
        p = g,
        y = 0,
        x = () => {
          ;(g = Date.now()),
            (y = g - p),
            y >= d &&
              ((p = g - (y % d)),
              this.shouldUpdate(i, s) &&
                (this.render(e, n, o, u, l, h, f), v.runEvents())),
            (this.intervalId = Fa(x))
        }
      r || v.start(), (this.intervalId = Fa(x))
    }
  }
  stop() {
    this.intervalId && (Fa.cancel(this.intervalId), (this.intervalId = null)),
      this.mouse.stop()
  }
  shouldUpdate(e, t) {
    if (!e) {
      var { frameDuration: r } = this,
        i = this.animations.reduce((n, o) => o.update(r) || n, !1)
      if (i) return !0
    }
    return !!(
      (typeof t == 'function' && t()) ||
      (!this.isReadyLock && this.isReady()) ||
      this.mouse.hasEvents()
    )
  }
  render(e, t, r, i, n, o, s) {
    var {
        CLIENT_WIDTH: u,
        CLIENT_HEIGHT: l,
        viewPort: h,
        ctx: f,
        isFirstRender: c,
      } = this,
      v = f.canvas
    h.clear(),
      v.width && v.height ? h.setCurrent(v.width, v.height) : h.setCurrent(u, l)
    var d = e.getStyle('width'),
      g = e.getStyle('height')
    !t &&
      (c || (typeof i != 'number' && typeof n != 'number')) &&
      (d.hasValue() &&
        ((v.width = d.getPixels('x')),
        v.style && (v.style.width = ''.concat(v.width, 'px'))),
      g.hasValue() &&
        ((v.height = g.getPixels('y')),
        v.style && (v.style.height = ''.concat(v.height, 'px'))))
    var p = v.clientWidth || v.width,
      y = v.clientHeight || v.height
    if (
      (t &&
        d.hasValue() &&
        g.hasValue() &&
        ((p = d.getPixels('x')), (y = g.getPixels('y'))),
      h.setCurrent(p, y),
      typeof o == 'number' && e.getAttribute('x', !0).setValue(o),
      typeof s == 'number' && e.getAttribute('y', !0).setValue(s),
      typeof i == 'number' || typeof n == 'number')
    ) {
      var x = ie(e.getAttribute('viewBox').getString()),
        b = 0,
        T = 0
      if (typeof i == 'number') {
        var $ = e.getStyle('width')
        $.hasValue()
          ? (b = $.getPixels('x') / i)
          : isNaN(x[2]) || (b = x[2] / i)
      }
      if (typeof n == 'number') {
        var E = e.getStyle('height')
        E.hasValue()
          ? (T = E.getPixels('y') / n)
          : isNaN(x[3]) || (T = x[3] / n)
      }
      b || (b = T),
        T || (T = b),
        e.getAttribute('width', !0).setValue(i),
        e.getAttribute('height', !0).setValue(n)
      var O = e.getStyle('transform', !0, !0)
      O.setValue(
        ''
          .concat(O.getString(), ' scale(')
          .concat(1 / b, ', ')
          .concat(1 / T, ')'),
      )
    }
    r || f.clearRect(0, 0, p, y), e.render(f), c && (this.isFirstRender = !1)
  }
}
_r.defaultWindow = cl
_r.defaultFetch = gl
var { defaultFetch: i1 } = _r,
  n1 = typeof DOMParser < 'u' ? DOMParser : null
class za {
  constructor() {
    var { fetch: e = i1, DOMParser: t = n1 } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.fetch = e), (this.DOMParser = t)
  }
  parse(e) {
    var t = this
    return xe(function* () {
      return e.startsWith('<') ? t.parseFromString(e) : t.load(e)
    })()
  }
  parseFromString(e) {
    var t = new this.DOMParser()
    try {
      return this.checkDocument(t.parseFromString(e, 'image/svg+xml'))
    } catch {
      return this.checkDocument(t.parseFromString(e, 'text/xml'))
    }
  }
  checkDocument(e) {
    var t = e.getElementsByTagName('parsererror')[0]
    if (t) throw new Error(t.textContent)
    return e
  }
  load(e) {
    var t = this
    return xe(function* () {
      var r = yield t.fetch(e),
        i = yield r.text()
      return t.parseFromString(i)
    })()
  }
}
class s1 {
  constructor(e, t) {
    ;(this.type = 'translate'), (this.point = null), (this.point = D.parse(t))
  }
  apply(e) {
    var { x: t, y: r } = this.point
    e.translate(t || 0, r || 0)
  }
  unapply(e) {
    var { x: t, y: r } = this.point
    e.translate(-1 * t || 0, -1 * r || 0)
  }
  applyToPoint(e) {
    var { x: t, y: r } = this.point
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0])
  }
}
class o1 {
  constructor(e, t, r) {
    ;(this.type = 'rotate'),
      (this.angle = null),
      (this.originX = null),
      (this.originY = null),
      (this.cx = 0),
      (this.cy = 0)
    var i = ie(t)
    ;(this.angle = new S(e, 'angle', i[0])),
      (this.originX = r[0]),
      (this.originY = r[1]),
      (this.cx = i[1] || 0),
      (this.cy = i[2] || 0)
  }
  apply(e) {
    var { cx: t, cy: r, originX: i, originY: n, angle: o } = this,
      s = t + i.getPixels('x'),
      u = r + n.getPixels('y')
    e.translate(s, u), e.rotate(o.getRadians()), e.translate(-s, -u)
  }
  unapply(e) {
    var { cx: t, cy: r, originX: i, originY: n, angle: o } = this,
      s = t + i.getPixels('x'),
      u = r + n.getPixels('y')
    e.translate(s, u), e.rotate(-1 * o.getRadians()), e.translate(-s, -u)
  }
  applyToPoint(e) {
    var { cx: t, cy: r, angle: i } = this,
      n = i.getRadians()
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0]),
      e.applyTransform([
        Math.cos(n),
        Math.sin(n),
        -Math.sin(n),
        Math.cos(n),
        0,
        0,
      ]),
      e.applyTransform([1, 0, 0, 1, -t || 0, -r || 0])
  }
}
class u1 {
  constructor(e, t, r) {
    ;(this.type = 'scale'),
      (this.scale = null),
      (this.originX = null),
      (this.originY = null)
    var i = D.parseScale(t)
    ;(i.x === 0 || i.y === 0) && ((i.x = at), (i.y = at)),
      (this.scale = i),
      (this.originX = r[0]),
      (this.originY = r[1])
  }
  apply(e) {
    var {
        scale: { x: t, y: r },
        originX: i,
        originY: n,
      } = this,
      o = i.getPixels('x'),
      s = n.getPixels('y')
    e.translate(o, s), e.scale(t, r || t), e.translate(-o, -s)
  }
  unapply(e) {
    var {
        scale: { x: t, y: r },
        originX: i,
        originY: n,
      } = this,
      o = i.getPixels('x'),
      s = n.getPixels('y')
    e.translate(o, s), e.scale(1 / t, 1 / r || t), e.translate(-o, -s)
  }
  applyToPoint(e) {
    var { x: t, y: r } = this.scale
    e.applyTransform([t || 0, 0, 0, r || 0, 0, 0])
  }
}
class dl {
  constructor(e, t, r) {
    ;(this.type = 'matrix'),
      (this.matrix = []),
      (this.originX = null),
      (this.originY = null),
      (this.matrix = ie(t)),
      (this.originX = r[0]),
      (this.originY = r[1])
  }
  apply(e) {
    var { originX: t, originY: r, matrix: i } = this,
      n = t.getPixels('x'),
      o = r.getPixels('y')
    e.translate(n, o),
      e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
      e.translate(-n, -o)
  }
  unapply(e) {
    var { originX: t, originY: r, matrix: i } = this,
      n = i[0],
      o = i[2],
      s = i[4],
      u = i[1],
      l = i[3],
      h = i[5],
      f = 0,
      c = 0,
      v = 1,
      d = 1 / (n * (l * v - h * c) - o * (u * v - h * f) + s * (u * c - l * f)),
      g = t.getPixels('x'),
      p = r.getPixels('y')
    e.translate(g, p),
      e.transform(
        d * (l * v - h * c),
        d * (h * f - u * v),
        d * (s * c - o * v),
        d * (n * v - s * f),
        d * (o * h - s * l),
        d * (s * u - n * h),
      ),
      e.translate(-g, -p)
  }
  applyToPoint(e) {
    e.applyTransform(this.matrix)
  }
}
class pl extends dl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'skew'),
      (this.angle = null),
      (this.angle = new S(e, 'angle', t))
  }
}
class l1 extends pl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'skewX'),
      (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0])
  }
}
class h1 extends pl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'skewY'),
      (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0])
  }
}
function v1(a) {
  return ht(a)
    .trim()
    .replace(/\)([a-zA-Z])/g, ') $1')
    .replace(/\)(\s?,\s?)/g, ') ')
    .split(/\s(?=[a-z])/)
}
function f1(a) {
  var [e, t] = a.split('(')
  return [e.trim(), t.trim().replace(')', '')]
}
class Le {
  constructor(e, t, r) {
    ;(this.document = e), (this.transforms = [])
    var i = v1(t)
    i.forEach((n) => {
      if (n !== 'none') {
        var [o, s] = f1(n),
          u = Le.transformTypes[o]
        typeof u < 'u' && this.transforms.push(new u(this.document, s, r))
      }
    })
  }
  static fromElement(e, t) {
    var r = t.getStyle('transform', !1, !0),
      [i, n = i] = t.getStyle('transform-origin', !1, !0).split(),
      o = [i, n]
    return r.hasValue() ? new Le(e, r.getString(), o) : null
  }
  apply(e) {
    for (var { transforms: t } = this, r = t.length, i = 0; i < r; i++)
      t[i].apply(e)
  }
  unapply(e) {
    for (var { transforms: t } = this, r = t.length, i = r - 1; i >= 0; i--)
      t[i].unapply(e)
  }
  applyToPoint(e) {
    for (var { transforms: t } = this, r = t.length, i = 0; i < r; i++)
      t[i].applyToPoint(e)
  }
}
Le.transformTypes = {
  translate: s1,
  rotate: o1,
  scale: u1,
  matrix: dl,
  skewX: l1,
  skewY: h1,
}
class N {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    if (
      ((this.document = e),
      (this.node = t),
      (this.captureTextNodes = r),
      (this.attributes = {}),
      (this.styles = {}),
      (this.stylesSpecificity = {}),
      (this.animationFrozen = !1),
      (this.animationFrozenValue = ''),
      (this.parent = null),
      (this.children = []),
      !(!t || t.nodeType !== 1))
    ) {
      if (
        (Array.from(t.attributes).forEach((s) => {
          var u = Yb(s.nodeName)
          this.attributes[u] = new S(e, u, s.value)
        }),
        this.addStylesFromStyleDefinition(),
        this.getAttribute('style').hasValue())
      ) {
        var i = this.getAttribute('style')
          .getString()
          .split(';')
          .map((s) => s.trim())
        i.forEach((s) => {
          if (s) {
            var [u, l] = s.split(':').map((h) => h.trim())
            this.styles[u] = new S(e, u, l)
          }
        })
      }
      var { definitions: n } = e,
        o = this.getAttribute('id')
      o.hasValue() && (n[o.getString()] || (n[o.getString()] = this)),
        Array.from(t.childNodes).forEach((s) => {
          if (s.nodeType === 1) this.addChild(s)
          else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
            var u = e.createTextNode(s)
            u.getText().length > 0 && this.addChild(u)
          }
        })
    }
  }
  getAttribute(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = this.attributes[e]
    if (!r && t) {
      var i = new S(this.document, e, '')
      return (this.attributes[e] = i), i
    }
    return r || S.empty(this.document)
  }
  getHrefAttribute() {
    for (var e in this.attributes)
      if (e === 'href' || e.endsWith(':href')) return this.attributes[e]
    return S.empty(this.document)
  }
  getStyle(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = this.styles[e]
    if (i) return i
    var n = this.getAttribute(e)
    if (n != null && n.hasValue()) return (this.styles[e] = n), n
    if (!r) {
      var { parent: o } = this
      if (o) {
        var s = o.getStyle(e)
        if (s != null && s.hasValue()) return s
      }
    }
    if (t) {
      var u = new S(this.document, e, '')
      return (this.styles[e] = u), u
    }
    return i || S.empty(this.document)
  }
  render(e) {
    if (
      !(
        this.getStyle('display').getString() === 'none' ||
        this.getStyle('visibility').getString() === 'hidden'
      )
    ) {
      if ((e.save(), this.getStyle('mask').hasValue())) {
        var t = this.getStyle('mask').getDefinition()
        t && (this.applyEffects(e), t.apply(e, this))
      } else if (this.getStyle('filter').getValue('none') !== 'none') {
        var r = this.getStyle('filter').getDefinition()
        r && (this.applyEffects(e), r.apply(e, this))
      } else this.setContext(e), this.renderChildren(e), this.clearContext(e)
      e.restore()
    }
  }
  setContext(e) {}
  applyEffects(e) {
    var t = Le.fromElement(this.document, this)
    t && t.apply(e)
    var r = this.getStyle('clip-path', !1, !0)
    if (r.hasValue()) {
      var i = r.getDefinition()
      i && i.apply(e)
    }
  }
  clearContext(e) {}
  renderChildren(e) {
    this.children.forEach((t) => {
      t.render(e)
    })
  }
  addChild(e) {
    var t = e instanceof N ? e : this.document.createElement(e)
    ;(t.parent = this),
      N.ignoreChildTypes.includes(t.type) || this.children.push(t)
  }
  matchesSelector(e) {
    var t,
      { node: r } = this
    if (typeof r.matches == 'function') return r.matches(e)
    var i =
      (t = r.getAttribute) === null || t === void 0
        ? void 0
        : t.call(r, 'class')
    return !i || i === '' ? !1 : i.split(' ').some((n) => '.'.concat(n) === e)
  }
  addStylesFromStyleDefinition() {
    var { styles: e, stylesSpecificity: t } = this.document
    for (var r in e)
      if (!r.startsWith('@') && this.matchesSelector(r)) {
        var i = e[r],
          n = t[r]
        if (i)
          for (var o in i) {
            var s = this.stylesSpecificity[o]
            typeof s > 'u' && (s = '000'),
              n >= s &&
                ((this.styles[o] = i[o]), (this.stylesSpecificity[o] = n))
          }
      }
  }
  removeStyles(e, t) {
    var r = t.reduce((i, n) => {
      var o = e.getStyle(n)
      if (!o.hasValue()) return i
      var s = o.getString()
      return o.setValue(''), [...i, [n, s]]
    }, [])
    return r
  }
  restoreStyles(e, t) {
    t.forEach((r) => {
      var [i, n] = r
      e.getStyle(i, !0).setValue(n)
    })
  }
  isFirstChild() {
    var e
    return (
      ((e = this.parent) === null || e === void 0
        ? void 0
        : e.children.indexOf(this)) === 0
    )
  }
}
N.ignoreChildTypes = ['title']
class c1 extends N {
  constructor(e, t, r) {
    super(e, t, r)
  }
}
function g1(a) {
  var e = a.trim()
  return /^('|")/.test(e) ? e : '"'.concat(e, '"')
}
function d1(a) {
  return typeof process > 'u' ? a : a.trim().split(',').map(g1).join(',')
}
function p1(a) {
  if (!a) return ''
  var e = a.trim().toLowerCase()
  switch (e) {
    case 'normal':
    case 'italic':
    case 'oblique':
    case 'inherit':
    case 'initial':
    case 'unset':
      return e
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : ''
  }
}
function y1(a) {
  if (!a) return ''
  var e = a.trim().toLowerCase()
  switch (e) {
    case 'normal':
    case 'bold':
    case 'lighter':
    case 'bolder':
    case 'inherit':
    case 'initial':
    case 'unset':
      return e
    default:
      return /^[\d.]+$/.test(e) ? e : ''
  }
}
class Z {
  constructor(e, t, r, i, n, o) {
    var s = o ? (typeof o == 'string' ? Z.parse(o) : o) : {}
    ;(this.fontFamily = n || s.fontFamily),
      (this.fontSize = i || s.fontSize),
      (this.fontStyle = e || s.fontStyle),
      (this.fontWeight = r || s.fontWeight),
      (this.fontVariant = t || s.fontVariant)
  }
  static parse() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
      t = arguments.length > 1 ? arguments[1] : void 0,
      r = '',
      i = '',
      n = '',
      o = '',
      s = '',
      u = ht(e).trim().split(' '),
      l = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 }
    return (
      u.forEach((h) => {
        switch (!0) {
          case !l.fontStyle && Z.styles.includes(h):
            h !== 'inherit' && (r = h), (l.fontStyle = !0)
            break
          case !l.fontVariant && Z.variants.includes(h):
            h !== 'inherit' && (i = h), (l.fontStyle = !0), (l.fontVariant = !0)
            break
          case !l.fontWeight && Z.weights.includes(h):
            h !== 'inherit' && (n = h),
              (l.fontStyle = !0),
              (l.fontVariant = !0),
              (l.fontWeight = !0)
            break
          case !l.fontSize:
            h !== 'inherit' && ([o] = h.split('/')),
              (l.fontStyle = !0),
              (l.fontVariant = !0),
              (l.fontWeight = !0),
              (l.fontSize = !0)
            break
          default:
            h !== 'inherit' && (s += h)
        }
      }),
      new Z(r, i, n, o, s, t)
    )
  }
  toString() {
    return [
      p1(this.fontStyle),
      this.fontVariant,
      y1(this.fontWeight),
      this.fontSize,
      d1(this.fontFamily),
    ]
      .join(' ')
      .trim()
  }
}
Z.styles = 'normal|italic|oblique|inherit'
Z.variants = 'normal|small-caps|inherit'
Z.weights =
  'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit'
class ce {
  constructor() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : Number.NaN,
      t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : Number.NaN,
      r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : Number.NaN,
      i =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : Number.NaN
    ;(this.x1 = e),
      (this.y1 = t),
      (this.x2 = r),
      (this.y2 = i),
      this.addPoint(e, t),
      this.addPoint(r, i)
  }
  get x() {
    return this.x1
  }
  get y() {
    return this.y1
  }
  get width() {
    return this.x2 - this.x1
  }
  get height() {
    return this.y2 - this.y1
  }
  addPoint(e, t) {
    typeof e < 'u' &&
      ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = e), (this.x2 = e)),
      e < this.x1 && (this.x1 = e),
      e > this.x2 && (this.x2 = e)),
      typeof t < 'u' &&
        ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = t), (this.y2 = t)),
        t < this.y1 && (this.y1 = t),
        t > this.y2 && (this.y2 = t))
  }
  addX(e) {
    this.addPoint(e, null)
  }
  addY(e) {
    this.addPoint(null, e)
  }
  addBoundingBox(e) {
    if (e) {
      var { x1: t, y1: r, x2: i, y2: n } = e
      this.addPoint(t, r), this.addPoint(i, n)
    }
  }
  sumCubic(e, t, r, i, n) {
    return (
      Math.pow(1 - e, 3) * t +
      3 * Math.pow(1 - e, 2) * e * r +
      3 * (1 - e) * Math.pow(e, 2) * i +
      Math.pow(e, 3) * n
    )
  }
  bezierCurveAdd(e, t, r, i, n) {
    var o = 6 * t - 12 * r + 6 * i,
      s = -3 * t + 9 * r - 9 * i + 3 * n,
      u = 3 * r - 3 * t
    if (s === 0) {
      if (o === 0) return
      var l = -u / o
      0 < l &&
        l < 1 &&
        (e
          ? this.addX(this.sumCubic(l, t, r, i, n))
          : this.addY(this.sumCubic(l, t, r, i, n)))
      return
    }
    var h = Math.pow(o, 2) - 4 * u * s
    if (!(h < 0)) {
      var f = (-o + Math.sqrt(h)) / (2 * s)
      0 < f &&
        f < 1 &&
        (e
          ? this.addX(this.sumCubic(f, t, r, i, n))
          : this.addY(this.sumCubic(f, t, r, i, n)))
      var c = (-o - Math.sqrt(h)) / (2 * s)
      0 < c &&
        c < 1 &&
        (e
          ? this.addX(this.sumCubic(c, t, r, i, n))
          : this.addY(this.sumCubic(c, t, r, i, n)))
    }
  }
  addBezierCurve(e, t, r, i, n, o, s, u) {
    this.addPoint(e, t),
      this.addPoint(s, u),
      this.bezierCurveAdd(!0, e, r, n, s),
      this.bezierCurveAdd(!1, t, i, o, u)
  }
  addQuadraticCurve(e, t, r, i, n, o) {
    var s = e + 0.6666666666666666 * (r - e),
      u = t + (2 / 3) * (i - t),
      l = s + (1 / 3) * (n - e),
      h = u + (1 / 3) * (o - t)
    this.addBezierCurve(e, t, s, l, u, h, n, o)
  }
  isPointInBox(e, t) {
    var { x1: r, y1: i, x2: n, y2: o } = this
    return r <= e && e <= n && i <= t && t <= o
  }
}
class w extends m {
  constructor(e) {
    super(
      e
        .replace(/([+\-.])\s+/gm, '$1')
        .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''),
    ),
      (this.control = null),
      (this.start = null),
      (this.current = null),
      (this.command = null),
      (this.commands = this.commands),
      (this.i = -1),
      (this.previousCommand = null),
      (this.points = []),
      (this.angles = [])
  }
  reset() {
    ;(this.i = -1),
      (this.command = null),
      (this.previousCommand = null),
      (this.start = new D(0, 0)),
      (this.control = new D(0, 0)),
      (this.current = new D(0, 0)),
      (this.points = []),
      (this.angles = [])
  }
  isEnd() {
    var { i: e, commands: t } = this
    return e >= t.length - 1
  }
  next() {
    var e = this.commands[++this.i]
    return (this.previousCommand = this.command), (this.command = e), e
  }
  getPoint() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'x',
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'y',
      r = new D(this.command[e], this.command[t])
    return this.makeAbsolute(r)
  }
  getAsControlPoint(e, t) {
    var r = this.getPoint(e, t)
    return (this.control = r), r
  }
  getAsCurrentPoint(e, t) {
    var r = this.getPoint(e, t)
    return (this.current = r), r
  }
  getReflectedControlPoint() {
    var e = this.previousCommand.type
    if (
      e !== m.CURVE_TO &&
      e !== m.SMOOTH_CURVE_TO &&
      e !== m.QUAD_TO &&
      e !== m.SMOOTH_QUAD_TO
    )
      return this.current
    var {
        current: { x: t, y: r },
        control: { x: i, y: n },
      } = this,
      o = new D(2 * t - i, 2 * r - n)
    return o
  }
  makeAbsolute(e) {
    if (this.command.relative) {
      var { x: t, y: r } = this.current
      ;(e.x += t), (e.y += r)
    }
    return e
  }
  addMarker(e, t, r) {
    var { points: i, angles: n } = this
    r &&
      n.length > 0 &&
      !n[n.length - 1] &&
      (n[n.length - 1] = i[i.length - 1].angleTo(r)),
      this.addMarkerAngle(e, t ? t.angleTo(e) : null)
  }
  addMarkerAngle(e, t) {
    this.points.push(e), this.angles.push(t)
  }
  getMarkerPoints() {
    return this.points
  }
  getMarkerAngles() {
    for (var { angles: e } = this, t = e.length, r = 0; r < t; r++)
      if (!e[r]) {
        for (var i = r + 1; i < t; i++)
          if (e[i]) {
            e[r] = e[i]
            break
          }
      }
    return e
  }
}
class ze extends N {
  constructor() {
    super(...arguments), (this.modifiedEmSizeStack = !1)
  }
  calculateOpacity() {
    for (var e = 1, t = this; t; ) {
      var r = t.getStyle('opacity', !1, !0)
      r.hasValue(!0) && (e *= r.getNumber()), (t = t.parent)
    }
    return e
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    if (!t) {
      var r = this.getStyle('fill'),
        i = this.getStyle('fill-opacity'),
        n = this.getStyle('stroke'),
        o = this.getStyle('stroke-opacity')
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, i)
        s && (e.fillStyle = s)
      } else if (r.hasValue()) {
        r.getString() === 'currentColor' &&
          r.setValue(this.getStyle('color').getColor())
        var u = r.getColor()
        u !== 'inherit' && (e.fillStyle = u === 'none' ? 'rgba(0,0,0,0)' : u)
      }
      if (i.hasValue()) {
        var l = new S(this.document, 'fill', e.fillStyle)
          .addOpacity(i)
          .getColor()
        e.fillStyle = l
      }
      if (n.isUrlDefinition()) {
        var h = n.getFillStyleDefinition(this, o)
        h && (e.strokeStyle = h)
      } else if (n.hasValue()) {
        n.getString() === 'currentColor' &&
          n.setValue(this.getStyle('color').getColor())
        var f = n.getString()
        f !== 'inherit' && (e.strokeStyle = f === 'none' ? 'rgba(0,0,0,0)' : f)
      }
      if (o.hasValue()) {
        var c = new S(this.document, 'stroke', e.strokeStyle)
          .addOpacity(o)
          .getString()
        e.strokeStyle = c
      }
      var v = this.getStyle('stroke-width')
      if (v.hasValue()) {
        var d = v.getPixels()
        e.lineWidth = d || at
      }
      var g = this.getStyle('stroke-linecap'),
        p = this.getStyle('stroke-linejoin'),
        y = this.getStyle('stroke-miterlimit'),
        x = this.getStyle('stroke-dasharray'),
        b = this.getStyle('stroke-dashoffset')
      if (
        (g.hasValue() && (e.lineCap = g.getString()),
        p.hasValue() && (e.lineJoin = p.getString()),
        y.hasValue() && (e.miterLimit = y.getNumber()),
        x.hasValue() && x.getString() !== 'none')
      ) {
        var T = ie(x.getString())
        typeof e.setLineDash < 'u'
          ? e.setLineDash(T)
          : typeof e.webkitLineDash < 'u'
            ? (e.webkitLineDash = T)
            : typeof e.mozDash < 'u' &&
              !(T.length === 1 && T[0] === 0) &&
              (e.mozDash = T)
        var $ = b.getPixels()
        typeof e.lineDashOffset < 'u'
          ? (e.lineDashOffset = $)
          : typeof e.webkitLineDashOffset < 'u'
            ? (e.webkitLineDashOffset = $)
            : typeof e.mozDashOffset < 'u' && (e.mozDashOffset = $)
      }
    }
    if (((this.modifiedEmSizeStack = !1), typeof e.font < 'u')) {
      var E = this.getStyle('font'),
        O = this.getStyle('font-style'),
        C = this.getStyle('font-variant'),
        I = this.getStyle('font-weight'),
        _ = this.getStyle('font-size'),
        F = this.getStyle('font-family'),
        P = new Z(
          O.getString(),
          C.getString(),
          I.getString(),
          _.hasValue() ? ''.concat(_.getPixels(!0), 'px') : '',
          F.getString(),
          Z.parse(E.getString(), e.font),
        )
      O.setValue(P.fontStyle),
        C.setValue(P.fontVariant),
        I.setValue(P.fontWeight),
        _.setValue(P.fontSize),
        F.setValue(P.fontFamily),
        (e.font = P.toString()),
        _.isPixels() &&
          ((this.document.emSize = _.getPixels()),
          (this.modifiedEmSizeStack = !0))
    }
    t || (this.applyEffects(e), (e.globalAlpha = this.calculateOpacity()))
  }
  clearContext(e) {
    super.clearContext(e), this.modifiedEmSizeStack && this.document.popEmSize()
  }
}
class A extends ze {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'path'),
      (this.pathParser = null),
      (this.pathParser = new w(this.getAttribute('d').getString()))
  }
  path(e) {
    var { pathParser: t } = this,
      r = new ce()
    for (t.reset(), e && e.beginPath(); !t.isEnd(); )
      switch (t.next().type) {
        case w.MOVE_TO:
          this.pathM(e, r)
          break
        case w.LINE_TO:
          this.pathL(e, r)
          break
        case w.HORIZ_LINE_TO:
          this.pathH(e, r)
          break
        case w.VERT_LINE_TO:
          this.pathV(e, r)
          break
        case w.CURVE_TO:
          this.pathC(e, r)
          break
        case w.SMOOTH_CURVE_TO:
          this.pathS(e, r)
          break
        case w.QUAD_TO:
          this.pathQ(e, r)
          break
        case w.SMOOTH_QUAD_TO:
          this.pathT(e, r)
          break
        case w.ARC:
          this.pathA(e, r)
          break
        case w.CLOSE_PATH:
          this.pathZ(e, r)
          break
      }
    return r
  }
  getBoundingBox(e) {
    return this.path()
  }
  getMarkers() {
    var { pathParser: e } = this,
      t = e.getMarkerPoints(),
      r = e.getMarkerAngles(),
      i = t.map((n, o) => [n, r[o]])
    return i
  }
  renderChildren(e) {
    this.path(e), this.document.screen.mouse.checkPath(this, e)
    var t = this.getStyle('fill-rule')
    e.fillStyle !== '' &&
      (t.getString('inherit') !== 'inherit' ? e.fill(t.getString()) : e.fill()),
      e.strokeStyle !== '' &&
        (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke'
          ? (e.save(),
            e.setTransform(1, 0, 0, 1, 0, 0),
            e.stroke(),
            e.restore())
          : e.stroke())
    var r = this.getMarkers()
    if (r) {
      var i = r.length - 1,
        n = this.getStyle('marker-start'),
        o = this.getStyle('marker-mid'),
        s = this.getStyle('marker-end')
      if (n.isUrlDefinition()) {
        var u = n.getDefinition(),
          [l, h] = r[0]
        u.render(e, l, h)
      }
      if (o.isUrlDefinition())
        for (var f = o.getDefinition(), c = 1; c < i; c++) {
          var [v, d] = r[c]
          f.render(e, v, d)
        }
      if (s.isUrlDefinition()) {
        var g = s.getDefinition(),
          [p, y] = r[i]
        g.render(e, p, y)
      }
    }
  }
  static pathM(e) {
    var t = e.getAsCurrentPoint()
    return (e.start = e.current), { point: t }
  }
  pathM(e, t) {
    var { pathParser: r } = this,
      { point: i } = A.pathM(r),
      { x: n, y: o } = i
    r.addMarker(i), t.addPoint(n, o), e && e.moveTo(n, o)
  }
  static pathL(e) {
    var { current: t } = e,
      r = e.getAsCurrentPoint()
    return { current: t, point: r }
  }
  pathL(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n } = A.pathL(r),
      { x: o, y: s } = n
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s)
  }
  static pathH(e) {
    var { current: t, command: r } = e,
      i = new D((r.relative ? t.x : 0) + r.x, t.y)
    return (e.current = i), { current: t, point: i }
  }
  pathH(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n } = A.pathH(r),
      { x: o, y: s } = n
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s)
  }
  static pathV(e) {
    var { current: t, command: r } = e,
      i = new D(t.x, (r.relative ? t.y : 0) + r.y)
    return (e.current = i), { current: t, point: i }
  }
  pathV(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n } = A.pathV(r),
      { x: o, y: s } = n
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s)
  }
  static pathC(e) {
    var { current: t } = e,
      r = e.getPoint('x1', 'y1'),
      i = e.getAsControlPoint('x2', 'y2'),
      n = e.getAsCurrentPoint()
    return { current: t, point: r, controlPoint: i, currentPoint: n }
  }
  pathC(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n, controlPoint: o, currentPoint: s } = A.pathC(r)
    r.addMarker(s, o, n),
      t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y),
      e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y)
  }
  static pathS(e) {
    var { current: t } = e,
      r = e.getReflectedControlPoint(),
      i = e.getAsControlPoint('x2', 'y2'),
      n = e.getAsCurrentPoint()
    return { current: t, point: r, controlPoint: i, currentPoint: n }
  }
  pathS(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n, controlPoint: o, currentPoint: s } = A.pathS(r)
    r.addMarker(s, o, n),
      t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y),
      e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y)
  }
  static pathQ(e) {
    var { current: t } = e,
      r = e.getAsControlPoint('x1', 'y1'),
      i = e.getAsCurrentPoint()
    return { current: t, controlPoint: r, currentPoint: i }
  }
  pathQ(e, t) {
    var { pathParser: r } = this,
      { current: i, controlPoint: n, currentPoint: o } = A.pathQ(r)
    r.addMarker(o, n, n),
      t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y),
      e && e.quadraticCurveTo(n.x, n.y, o.x, o.y)
  }
  static pathT(e) {
    var { current: t } = e,
      r = e.getReflectedControlPoint()
    e.control = r
    var i = e.getAsCurrentPoint()
    return { current: t, controlPoint: r, currentPoint: i }
  }
  pathT(e, t) {
    var { pathParser: r } = this,
      { current: i, controlPoint: n, currentPoint: o } = A.pathT(r)
    r.addMarker(o, n, n),
      t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y),
      e && e.quadraticCurveTo(n.x, n.y, o.x, o.y)
  }
  static pathA(e) {
    var { current: t, command: r } = e,
      { rX: i, rY: n, xRot: o, lArcFlag: s, sweepFlag: u } = r,
      l = o * (Math.PI / 180),
      h = e.getAsCurrentPoint(),
      f = new D(
        (Math.cos(l) * (t.x - h.x)) / 2 + (Math.sin(l) * (t.y - h.y)) / 2,
        (-Math.sin(l) * (t.x - h.x)) / 2 + (Math.cos(l) * (t.y - h.y)) / 2,
      ),
      c = Math.pow(f.x, 2) / Math.pow(i, 2) + Math.pow(f.y, 2) / Math.pow(n, 2)
    c > 1 && ((i *= Math.sqrt(c)), (n *= Math.sqrt(c)))
    var v =
      (s === u ? -1 : 1) *
      Math.sqrt(
        (Math.pow(i, 2) * Math.pow(n, 2) -
          Math.pow(i, 2) * Math.pow(f.y, 2) -
          Math.pow(n, 2) * Math.pow(f.x, 2)) /
          (Math.pow(i, 2) * Math.pow(f.y, 2) +
            Math.pow(n, 2) * Math.pow(f.x, 2)),
      )
    isNaN(v) && (v = 0)
    var d = new D((v * i * f.y) / n, (v * -n * f.x) / i),
      g = new D(
        (t.x + h.x) / 2 + Math.cos(l) * d.x - Math.sin(l) * d.y,
        (t.y + h.y) / 2 + Math.sin(l) * d.x + Math.cos(l) * d.y,
      ),
      p = xo([1, 0], [(f.x - d.x) / i, (f.y - d.y) / n]),
      y = [(f.x - d.x) / i, (f.y - d.y) / n],
      x = [(-f.x - d.x) / i, (-f.y - d.y) / n],
      b = xo(y, x)
    return (
      mi(y, x) <= -1 && (b = Math.PI),
      mi(y, x) >= 1 && (b = 0),
      {
        currentPoint: h,
        rX: i,
        rY: n,
        sweepFlag: u,
        xAxisRotation: l,
        centp: g,
        a1: p,
        ad: b,
      }
    )
  }
  pathA(e, t) {
    var { pathParser: r } = this,
      {
        currentPoint: i,
        rX: n,
        rY: o,
        sweepFlag: s,
        xAxisRotation: u,
        centp: l,
        a1: h,
        ad: f,
      } = A.pathA(r),
      c = 1 - s ? 1 : -1,
      v = h + c * (f / 2),
      d = new D(l.x + n * Math.cos(v), l.y + o * Math.sin(v))
    if (
      (r.addMarkerAngle(d, v - (c * Math.PI) / 2),
      r.addMarkerAngle(i, v - c * Math.PI),
      t.addPoint(i.x, i.y),
      e && !isNaN(h) && !isNaN(f))
    ) {
      var g = n > o ? n : o,
        p = n > o ? 1 : n / o,
        y = n > o ? o / n : 1
      e.translate(l.x, l.y),
        e.rotate(u),
        e.scale(p, y),
        e.arc(0, 0, g, h, h + f, !!(1 - s)),
        e.scale(1 / p, 1 / y),
        e.rotate(-u),
        e.translate(-l.x, -l.y)
    }
  }
  static pathZ(e) {
    e.current = e.start
  }
  pathZ(e, t) {
    A.pathZ(this.pathParser),
      e && t.x1 !== t.x2 && t.y1 !== t.y2 && e.closePath()
  }
}
class yl extends A {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'glyph'),
      (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber()),
      (this.unicode = this.getAttribute('unicode').getString()),
      (this.arabicForm = this.getAttribute('arabic-form').getString())
  }
}
class Ce extends ze {
  constructor(e, t, r) {
    super(e, t, new.target === Ce ? !0 : r),
      (this.type = 'text'),
      (this.x = 0),
      (this.y = 0),
      (this.measureCache = -1)
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    super.setContext(e, t)
    var r =
      this.getStyle('dominant-baseline').getTextBaseline() ||
      this.getStyle('alignment-baseline').getTextBaseline()
    r && (e.textBaseline = r)
  }
  initializeCoordinates() {
    ;(this.x = 0),
      (this.y = 0),
      (this.leafTexts = []),
      (this.textChunkStart = 0),
      (this.minX = Number.POSITIVE_INFINITY),
      (this.maxX = Number.NEGATIVE_INFINITY)
  }
  getBoundingBox(e) {
    if (this.type !== 'text') return this.getTElementBoundingBox(e)
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e)
    var t = null
    return (
      this.children.forEach((r, i) => {
        var n = this.getChildBoundingBox(e, this, this, i)
        t ? t.addBoundingBox(n) : (t = n)
      }),
      t
    )
  }
  getFontSize() {
    var { document: e, parent: t } = this,
      r = Z.parse(e.ctx.font).fontSize,
      i = t.getStyle('font-size').getNumber(r)
    return i
  }
  getTElementBoundingBox(e) {
    var t = this.getFontSize()
    return new ce(this.x, this.y - t, this.x + this.measureText(e), this.y)
  }
  getGlyph(e, t, r) {
    var i = t[r],
      n = null
    if (e.isArabic) {
      var o = t.length,
        s = t[r - 1],
        u = t[r + 1],
        l = 'isolated'
      if (
        ((r === 0 || s === ' ') && r < o - 1 && u !== ' ' && (l = 'terminal'),
        r > 0 && s !== ' ' && r < o - 1 && u !== ' ' && (l = 'medial'),
        r > 0 && s !== ' ' && (r === o - 1 || u === ' ') && (l = 'initial'),
        typeof e.glyphs[i] < 'u')
      ) {
        var h = e.glyphs[i]
        n = h instanceof yl ? h : h[l]
      }
    } else n = e.glyphs[i]
    return n || (n = e.missingGlyph), n
  }
  getText() {
    return ''
  }
  getTextFromNode(e) {
    var t = e || this.node,
      r = Array.from(t.parentNode.childNodes),
      i = r.indexOf(t),
      n = r.length - 1,
      o = ht(t.textContent || '')
    return i === 0 && (o = zb(o)), i === n && (o = Gb(o)), o
  }
  renderChildren(e) {
    if (this.type !== 'text') {
      this.renderTElementChildren(e)
      return
    }
    this.initializeCoordinates(),
      this.adjustChildCoordinatesRecursive(e),
      this.children.forEach((r, i) => {
        this.renderChild(e, this, this, i)
      })
    var { mouse: t } = this.document.screen
    t.isWorking() && t.checkBoundingBox(this, this.getBoundingBox(e))
  }
  renderTElementChildren(e) {
    var { document: t, parent: r } = this,
      i = this.getText(),
      n = r.getStyle('font-family').getDefinition()
    if (n) {
      for (
        var { unitsPerEm: o } = n.fontFace,
          s = Z.parse(t.ctx.font),
          u = r.getStyle('font-size').getNumber(s.fontSize),
          l = r.getStyle('font-style').getString(s.fontStyle),
          h = u / o,
          f = n.isRTL ? i.split('').reverse().join('') : i,
          c = ie(r.getAttribute('dx').getString()),
          v = f.length,
          d = 0;
        d < v;
        d++
      ) {
        var g = this.getGlyph(n, f, d)
        e.translate(this.x, this.y), e.scale(h, -h)
        var p = e.lineWidth
        ;(e.lineWidth = (e.lineWidth * o) / u),
          l === 'italic' && e.transform(1, 0, 0.4, 1, 0, 0),
          g.render(e),
          l === 'italic' && e.transform(1, 0, -0.4, 1, 0, 0),
          (e.lineWidth = p),
          e.scale(1 / h, -1 / h),
          e.translate(-this.x, -this.y),
          (this.x += (u * (g.horizAdvX || n.horizAdvX)) / o),
          typeof c[d] < 'u' && !isNaN(c[d]) && (this.x += c[d])
      }
      return
    }
    var { x: y, y: x } = this
    e.fillStyle && e.fillText(i, y, x), e.strokeStyle && e.strokeText(i, y, x)
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e = this.leafTexts[this.textChunkStart],
        t = e.getStyle('text-anchor').getString('start'),
        r = !1,
        i = 0
      ;(t === 'start' && !r) || (t === 'end' && r)
        ? (i = e.x - this.minX)
        : (t === 'end' && !r) || (t === 'start' && r)
          ? (i = e.x - this.maxX)
          : (i = e.x - (this.minX + this.maxX) / 2)
      for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
        this.leafTexts[n].x += i
      ;(this.minX = Number.POSITIVE_INFINITY),
        (this.maxX = Number.NEGATIVE_INFINITY),
        (this.textChunkStart = this.leafTexts.length)
    }
  }
  adjustChildCoordinatesRecursive(e) {
    this.children.forEach((t, r) => {
      this.adjustChildCoordinatesRecursiveCore(e, this, this, r)
    }),
      this.applyAnchoring()
  }
  adjustChildCoordinatesRecursiveCore(e, t, r, i) {
    var n = r.children[i]
    n.children.length > 0
      ? n.children.forEach((o, s) => {
          t.adjustChildCoordinatesRecursiveCore(e, t, n, s)
        })
      : this.adjustChildCoordinates(e, t, r, i)
  }
  adjustChildCoordinates(e, t, r, i) {
    var n = r.children[i]
    if (typeof n.measureText != 'function') return n
    e.save(), n.setContext(e, !0)
    var o = n.getAttribute('x'),
      s = n.getAttribute('y'),
      u = n.getAttribute('dx'),
      l = n.getAttribute('dy'),
      h = n.getStyle('font-family').getDefinition(),
      f = !!h && h.isRTL
    i === 0 &&
      (o.hasValue() || o.setValue(n.getInheritedAttribute('x')),
      s.hasValue() || s.setValue(n.getInheritedAttribute('y')),
      u.hasValue() || u.setValue(n.getInheritedAttribute('dx')),
      l.hasValue() || l.setValue(n.getInheritedAttribute('dy')))
    var c = n.measureText(e)
    return (
      f && (t.x -= c),
      o.hasValue()
        ? (t.applyAnchoring(),
          (n.x = o.getPixels('x')),
          u.hasValue() && (n.x += u.getPixels('x')))
        : (u.hasValue() && (t.x += u.getPixels('x')), (n.x = t.x)),
      (t.x = n.x),
      f || (t.x += c),
      s.hasValue()
        ? ((n.y = s.getPixels('y')), l.hasValue() && (n.y += l.getPixels('y')))
        : (l.hasValue() && (t.y += l.getPixels('y')), (n.y = t.y)),
      (t.y = n.y),
      t.leafTexts.push(n),
      (t.minX = Math.min(t.minX, n.x, n.x + c)),
      (t.maxX = Math.max(t.maxX, n.x, n.x + c)),
      n.clearContext(e),
      e.restore(),
      n
    )
  }
  getChildBoundingBox(e, t, r, i) {
    var n = r.children[i]
    if (typeof n.getBoundingBox != 'function') return null
    var o = n.getBoundingBox(e)
    return o
      ? (n.children.forEach((s, u) => {
          var l = t.getChildBoundingBox(e, t, n, u)
          o.addBoundingBox(l)
        }),
        o)
      : null
  }
  renderChild(e, t, r, i) {
    var n = r.children[i]
    n.render(e),
      n.children.forEach((o, s) => {
        t.renderChild(e, t, n, s)
      })
  }
  measureText(e) {
    var { measureCache: t } = this
    if (~t) return t
    var r = this.getText(),
      i = this.measureTargetText(e, r)
    return (this.measureCache = i), i
  }
  measureTargetText(e, t) {
    if (!t.length) return 0
    var { parent: r } = this,
      i = r.getStyle('font-family').getDefinition()
    if (i) {
      for (
        var n = this.getFontSize(),
          o = i.isRTL ? t.split('').reverse().join('') : t,
          s = ie(r.getAttribute('dx').getString()),
          u = o.length,
          l = 0,
          h = 0;
        h < u;
        h++
      ) {
        var f = this.getGlyph(i, o, h)
        ;(l += ((f.horizAdvX || i.horizAdvX) * n) / i.fontFace.unitsPerEm),
          typeof s[h] < 'u' && !isNaN(s[h]) && (l += s[h])
      }
      return l
    }
    if (!e.measureText) return t.length * 10
    e.save(), this.setContext(e, !0)
    var { width: c } = e.measureText(t)
    return this.clearContext(e), e.restore(), c
  }
  getInheritedAttribute(e) {
    for (var t = this; t instanceof Ce && t.isFirstChild(); ) {
      var r = t.parent.getAttribute(e)
      if (r.hasValue(!0)) return r.getValue('0')
      t = t.parent
    }
    return null
  }
}
class Vr extends Ce {
  constructor(e, t, r) {
    super(e, t, new.target === Vr ? !0 : r),
      (this.type = 'tspan'),
      (this.text = this.children.length > 0 ? '' : this.getTextFromNode())
  }
  getText() {
    return this.text
  }
}
class m1 extends Vr {
  constructor() {
    super(...arguments), (this.type = 'textNode')
  }
}
class It extends ze {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.root = !1)
  }
  setContext(e) {
    var t,
      { document: r } = this,
      { screen: i, window: n } = r,
      o = e.canvas
    if (
      (i.setDefaults(e),
      o.style && typeof e.font < 'u' && n && typeof n.getComputedStyle < 'u')
    ) {
      e.font = n.getComputedStyle(o).getPropertyValue('font')
      var s = new S(r, 'fontSize', Z.parse(e.font).fontSize)
      s.hasValue() &&
        ((r.rootEmSize = s.getPixels('y')), (r.emSize = r.rootEmSize))
    }
    this.getAttribute('x').hasValue() || this.getAttribute('x', !0).setValue(0),
      this.getAttribute('y').hasValue() ||
        this.getAttribute('y', !0).setValue(0)
    var { width: u, height: l } = i.viewPort
    this.getStyle('width').hasValue() ||
      this.getStyle('width', !0).setValue('100%'),
      this.getStyle('height').hasValue() ||
        this.getStyle('height', !0).setValue('100%'),
      this.getStyle('color').hasValue() ||
        this.getStyle('color', !0).setValue('black')
    var h = this.getAttribute('refX'),
      f = this.getAttribute('refY'),
      c = this.getAttribute('viewBox'),
      v = c.hasValue() ? ie(c.getString()) : null,
      d =
        !this.root &&
        this.getStyle('overflow').getValue('hidden') !== 'visible',
      g = 0,
      p = 0,
      y = 0,
      x = 0
    v && ((g = v[0]), (p = v[1])),
      this.root ||
        ((u = this.getStyle('width').getPixels('x')),
        (l = this.getStyle('height').getPixels('y')),
        this.type === 'marker' && ((y = g), (x = p), (g = 0), (p = 0))),
      i.viewPort.setCurrent(u, l),
      this.node &&
        (!this.parent ||
          ((t = this.node.parentNode) === null || t === void 0
            ? void 0
            : t.nodeName) === 'foreignObject') &&
        this.getStyle('transform', !1, !0).hasValue() &&
        !this.getStyle('transform-origin', !1, !0).hasValue() &&
        this.getStyle('transform-origin', !0, !0).setValue('50% 50%'),
      super.setContext(e),
      e.translate(
        this.getAttribute('x').getPixels('x'),
        this.getAttribute('y').getPixels('y'),
      ),
      v && ((u = v[2]), (l = v[3])),
      r.setViewBox({
        ctx: e,
        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
        width: i.viewPort.width,
        desiredWidth: u,
        height: i.viewPort.height,
        desiredHeight: l,
        minX: g,
        minY: p,
        refX: h.getValue(),
        refY: f.getValue(),
        clip: d,
        clipX: y,
        clipY: x,
      }),
      v && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, l))
  }
  clearContext(e) {
    super.clearContext(e), this.document.screen.viewPort.removeCurrent()
  }
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = this.getAttribute('width', !0),
      n = this.getAttribute('height', !0),
      o = this.getAttribute('viewBox'),
      s = this.getAttribute('style'),
      u = i.getNumber(0),
      l = n.getNumber(0)
    if (r)
      if (typeof r == 'string')
        this.getAttribute('preserveAspectRatio', !0).setValue(r)
      else {
        var h = this.getAttribute('preserveAspectRatio')
        h.hasValue() &&
          h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'))
      }
    if (
      (i.setValue(e),
      n.setValue(t),
      o.hasValue() || o.setValue('0 0 '.concat(u || e, ' ').concat(l || t)),
      s.hasValue())
    ) {
      var f = this.getStyle('width'),
        c = this.getStyle('height')
      f.hasValue() && f.setValue(''.concat(e, 'px')),
        c.hasValue() && c.setValue(''.concat(t, 'px'))
    }
  }
}
class ml extends A {
  constructor() {
    super(...arguments), (this.type = 'rect')
  }
  path(e) {
    var t = this.getAttribute('x').getPixels('x'),
      r = this.getAttribute('y').getPixels('y'),
      i = this.getStyle('width', !1, !0).getPixels('x'),
      n = this.getStyle('height', !1, !0).getPixels('y'),
      o = this.getAttribute('rx'),
      s = this.getAttribute('ry'),
      u = o.getPixels('x'),
      l = s.getPixels('y')
    if (
      (o.hasValue() && !s.hasValue() && (l = u),
      s.hasValue() && !o.hasValue() && (u = l),
      (u = Math.min(u, i / 2)),
      (l = Math.min(l, n / 2)),
      e)
    ) {
      var h = 4 * ((Math.sqrt(2) - 1) / 3)
      e.beginPath(),
        n > 0 &&
          i > 0 &&
          (e.moveTo(t + u, r),
          e.lineTo(t + i - u, r),
          e.bezierCurveTo(
            t + i - u + h * u,
            r,
            t + i,
            r + l - h * l,
            t + i,
            r + l,
          ),
          e.lineTo(t + i, r + n - l),
          e.bezierCurveTo(
            t + i,
            r + n - l + h * l,
            t + i - u + h * u,
            r + n,
            t + i - u,
            r + n,
          ),
          e.lineTo(t + u, r + n),
          e.bezierCurveTo(
            t + u - h * u,
            r + n,
            t,
            r + n - l + h * l,
            t,
            r + n - l,
          ),
          e.lineTo(t, r + l),
          e.bezierCurveTo(t, r + l - h * l, t + u - h * u, r, t + u, r),
          e.closePath())
    }
    return new ce(t, r, t + i, r + n)
  }
  getMarkers() {
    return null
  }
}
class b1 extends A {
  constructor() {
    super(...arguments), (this.type = 'circle')
  }
  path(e) {
    var t = this.getAttribute('cx').getPixels('x'),
      r = this.getAttribute('cy').getPixels('y'),
      i = this.getAttribute('r').getPixels()
    return (
      e &&
        i > 0 &&
        (e.beginPath(), e.arc(t, r, i, 0, Math.PI * 2, !1), e.closePath()),
      new ce(t - i, r - i, t + i, r + i)
    )
  }
  getMarkers() {
    return null
  }
}
class x1 extends A {
  constructor() {
    super(...arguments), (this.type = 'ellipse')
  }
  path(e) {
    var t = 4 * ((Math.sqrt(2) - 1) / 3),
      r = this.getAttribute('rx').getPixels('x'),
      i = this.getAttribute('ry').getPixels('y'),
      n = this.getAttribute('cx').getPixels('x'),
      o = this.getAttribute('cy').getPixels('y')
    return (
      e &&
        r > 0 &&
        i > 0 &&
        (e.beginPath(),
        e.moveTo(n + r, o),
        e.bezierCurveTo(n + r, o + t * i, n + t * r, o + i, n, o + i),
        e.bezierCurveTo(n - t * r, o + i, n - r, o + t * i, n - r, o),
        e.bezierCurveTo(n - r, o - t * i, n - t * r, o - i, n, o - i),
        e.bezierCurveTo(n + t * r, o - i, n + r, o - t * i, n + r, o),
        e.closePath()),
      new ce(n - r, o - i, n + r, o + i)
    )
  }
  getMarkers() {
    return null
  }
}
class T1 extends A {
  constructor() {
    super(...arguments), (this.type = 'line')
  }
  getPoints() {
    return [
      new D(
        this.getAttribute('x1').getPixels('x'),
        this.getAttribute('y1').getPixels('y'),
      ),
      new D(
        this.getAttribute('x2').getPixels('x'),
        this.getAttribute('y2').getPixels('y'),
      ),
    ]
  }
  path(e) {
    var [{ x: t, y: r }, { x: i, y: n }] = this.getPoints()
    return (
      e && (e.beginPath(), e.moveTo(t, r), e.lineTo(i, n)), new ce(t, r, i, n)
    )
  }
  getMarkers() {
    var [e, t] = this.getPoints(),
      r = e.angleTo(t)
    return [
      [e, r],
      [t, r],
    ]
  }
}
class bl extends A {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'polyline'),
      (this.points = []),
      (this.points = D.parsePath(this.getAttribute('points').getString()))
  }
  path(e) {
    var { points: t } = this,
      [{ x: r, y: i }] = t,
      n = new ce(r, i)
    return (
      e && (e.beginPath(), e.moveTo(r, i)),
      t.forEach((o) => {
        var { x: s, y: u } = o
        n.addPoint(s, u), e && e.lineTo(s, u)
      }),
      n
    )
  }
  getMarkers() {
    var { points: e } = this,
      t = e.length - 1,
      r = []
    return (
      e.forEach((i, n) => {
        n !== t && r.push([i, i.angleTo(e[n + 1])])
      }),
      r.length > 0 && r.push([e[e.length - 1], r[r.length - 1][1]]),
      r
    )
  }
}
class O1 extends bl {
  constructor() {
    super(...arguments), (this.type = 'polygon')
  }
  path(e) {
    var t = super.path(e),
      [{ x: r, y: i }] = this.points
    return e && (e.lineTo(r, i), e.closePath()), t
  }
}
class S1 extends N {
  constructor() {
    super(...arguments), (this.type = 'pattern')
  }
  createPattern(e, t, r) {
    var i = this.getStyle('width').getPixels('x', !0),
      n = this.getStyle('height').getPixels('y', !0),
      o = new It(this.document, null)
    ;(o.attributes.viewBox = new S(
      this.document,
      'viewBox',
      this.getAttribute('viewBox').getValue(),
    )),
      (o.attributes.width = new S(this.document, 'width', ''.concat(i, 'px'))),
      (o.attributes.height = new S(
        this.document,
        'height',
        ''.concat(n, 'px'),
      )),
      (o.attributes.transform = new S(
        this.document,
        'transform',
        this.getAttribute('patternTransform').getValue(),
      )),
      (o.children = this.children)
    var s = this.document.createCanvas(i, n),
      u = s.getContext('2d'),
      l = this.getAttribute('x'),
      h = this.getAttribute('y')
    l.hasValue() &&
      h.hasValue() &&
      u.translate(l.getPixels('x', !0), h.getPixels('y', !0)),
      r.hasValue()
        ? (this.styles['fill-opacity'] = r)
        : Reflect.deleteProperty(this.styles, 'fill-opacity')
    for (var f = -1; f <= 1; f++)
      for (var c = -1; c <= 1; c++)
        u.save(),
          (o.attributes.x = new S(this.document, 'x', f * s.width)),
          (o.attributes.y = new S(this.document, 'y', c * s.height)),
          o.render(u),
          u.restore()
    var v = e.createPattern(s, 'repeat')
    return v
  }
}
class E1 extends N {
  constructor() {
    super(...arguments), (this.type = 'marker')
  }
  render(e, t, r) {
    if (t) {
      var { x: i, y: n } = t,
        o = this.getAttribute('orient').getString('auto'),
        s = this.getAttribute('markerUnits').getString('strokeWidth')
      e.translate(i, n),
        o === 'auto' && e.rotate(r),
        s === 'strokeWidth' && e.scale(e.lineWidth, e.lineWidth),
        e.save()
      var u = new It(this.document, null)
      ;(u.type = this.type),
        (u.attributes.viewBox = new S(
          this.document,
          'viewBox',
          this.getAttribute('viewBox').getValue(),
        )),
        (u.attributes.refX = new S(
          this.document,
          'refX',
          this.getAttribute('refX').getValue(),
        )),
        (u.attributes.refY = new S(
          this.document,
          'refY',
          this.getAttribute('refY').getValue(),
        )),
        (u.attributes.width = new S(
          this.document,
          'width',
          this.getAttribute('markerWidth').getValue(),
        )),
        (u.attributes.height = new S(
          this.document,
          'height',
          this.getAttribute('markerHeight').getValue(),
        )),
        (u.attributes.overflow = new S(
          this.document,
          'overflow',
          this.getAttribute('overflow').getValue(),
        )),
        (u.attributes.fill = new S(
          this.document,
          'fill',
          this.getAttribute('fill').getColor('black'),
        )),
        (u.attributes.stroke = new S(
          this.document,
          'stroke',
          this.getAttribute('stroke').getValue('none'),
        )),
        (u.children = this.children),
        u.render(e),
        e.restore(),
        s === 'strokeWidth' && e.scale(1 / e.lineWidth, 1 / e.lineWidth),
        o === 'auto' && e.rotate(-r),
        e.translate(-i, -n)
    }
  }
}
class $1 extends N {
  constructor() {
    super(...arguments), (this.type = 'defs')
  }
  render() {}
}
class rn extends ze {
  constructor() {
    super(...arguments), (this.type = 'g')
  }
  getBoundingBox(e) {
    var t = new ce()
    return (
      this.children.forEach((r) => {
        t.addBoundingBox(r.getBoundingBox(e))
      }),
      t
    )
  }
}
class xl extends N {
  constructor(e, t, r) {
    super(e, t, r),
      (this.attributesToInherit = ['gradientUnits']),
      (this.stops = [])
    var { stops: i, children: n } = this
    n.forEach((o) => {
      o.type === 'stop' && i.push(o)
    })
  }
  getGradientUnits() {
    return this.getAttribute('gradientUnits').getString('objectBoundingBox')
  }
  createGradient(e, t, r) {
    var i = this
    this.getHrefAttribute().hasValue() &&
      ((i = this.getHrefAttribute().getDefinition()),
      this.inheritStopContainer(i))
    var { stops: n } = i,
      o = this.getGradient(e, t)
    if (!o) return this.addParentOpacity(r, n[n.length - 1].color)
    if (
      (n.forEach((p) => {
        o.addColorStop(p.offset, this.addParentOpacity(r, p.color))
      }),
      this.getAttribute('gradientTransform').hasValue())
    ) {
      var { document: s } = this,
        { MAX_VIRTUAL_PIXELS: u, viewPort: l } = s.screen,
        [h] = l.viewPorts,
        f = new ml(s, null)
      ;(f.attributes.x = new S(s, 'x', -u / 3)),
        (f.attributes.y = new S(s, 'y', -u / 3)),
        (f.attributes.width = new S(s, 'width', u)),
        (f.attributes.height = new S(s, 'height', u))
      var c = new rn(s, null)
      ;(c.attributes.transform = new S(
        s,
        'transform',
        this.getAttribute('gradientTransform').getValue(),
      )),
        (c.children = [f])
      var v = new It(s, null)
      ;(v.attributes.x = new S(s, 'x', 0)),
        (v.attributes.y = new S(s, 'y', 0)),
        (v.attributes.width = new S(s, 'width', h.width)),
        (v.attributes.height = new S(s, 'height', h.height)),
        (v.children = [c])
      var d = s.createCanvas(h.width, h.height),
        g = d.getContext('2d')
      return (g.fillStyle = o), v.render(g), g.createPattern(d, 'no-repeat')
    }
    return o
  }
  inheritStopContainer(e) {
    this.attributesToInherit.forEach((t) => {
      !this.getAttribute(t).hasValue() &&
        e.getAttribute(t).hasValue() &&
        this.getAttribute(t, !0).setValue(e.getAttribute(t).getValue())
    })
  }
  addParentOpacity(e, t) {
    if (e.hasValue()) {
      var r = new S(this.document, 'color', t)
      return r.addOpacity(e).getColor()
    }
    return t
  }
}
class w1 extends xl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'linearGradient'),
      this.attributesToInherit.push('x1', 'y1', 'x2', 'y2')
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === 'objectBoundingBox',
      i = r ? t.getBoundingBox(e) : null
    if (r && !i) return null
    !this.getAttribute('x1').hasValue() &&
      !this.getAttribute('y1').hasValue() &&
      !this.getAttribute('x2').hasValue() &&
      !this.getAttribute('y2').hasValue() &&
      (this.getAttribute('x1', !0).setValue(0),
      this.getAttribute('y1', !0).setValue(0),
      this.getAttribute('x2', !0).setValue(1),
      this.getAttribute('y2', !0).setValue(0))
    var n = r
        ? i.x + i.width * this.getAttribute('x1').getNumber()
        : this.getAttribute('x1').getPixels('x'),
      o = r
        ? i.y + i.height * this.getAttribute('y1').getNumber()
        : this.getAttribute('y1').getPixels('y'),
      s = r
        ? i.x + i.width * this.getAttribute('x2').getNumber()
        : this.getAttribute('x2').getPixels('x'),
      u = r
        ? i.y + i.height * this.getAttribute('y2').getNumber()
        : this.getAttribute('y2').getPixels('y')
    return n === s && o === u ? null : e.createLinearGradient(n, o, s, u)
  }
}
class C1 extends xl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'radialGradient'),
      this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr')
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === 'objectBoundingBox',
      i = t.getBoundingBox(e)
    if (r && !i) return null
    this.getAttribute('cx').hasValue() ||
      this.getAttribute('cx', !0).setValue('50%'),
      this.getAttribute('cy').hasValue() ||
        this.getAttribute('cy', !0).setValue('50%'),
      this.getAttribute('r').hasValue() ||
        this.getAttribute('r', !0).setValue('50%')
    var n = r
        ? i.x + i.width * this.getAttribute('cx').getNumber()
        : this.getAttribute('cx').getPixels('x'),
      o = r
        ? i.y + i.height * this.getAttribute('cy').getNumber()
        : this.getAttribute('cy').getPixels('y'),
      s = n,
      u = o
    this.getAttribute('fx').hasValue() &&
      (s = r
        ? i.x + i.width * this.getAttribute('fx').getNumber()
        : this.getAttribute('fx').getPixels('x')),
      this.getAttribute('fy').hasValue() &&
        (u = r
          ? i.y + i.height * this.getAttribute('fy').getNumber()
          : this.getAttribute('fy').getPixels('y'))
    var l = r
        ? ((i.width + i.height) / 2) * this.getAttribute('r').getNumber()
        : this.getAttribute('r').getPixels(),
      h = this.getAttribute('fr').getPixels()
    return e.createRadialGradient(s, u, h, n, o, l)
  }
}
class A1 extends N {
  constructor(e, t, r) {
    super(e, t, r), (this.type = 'stop')
    var i = Math.max(0, Math.min(1, this.getAttribute('offset').getNumber())),
      n = this.getStyle('stop-opacity'),
      o = this.getStyle('stop-color', !0)
    o.getString() === '' && o.setValue('#000'),
      n.hasValue() && (o = o.addOpacity(n)),
      (this.offset = i),
      (this.color = o.getColor())
  }
}
class an extends N {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'animate'),
      (this.duration = 0),
      (this.initialValue = null),
      (this.initialUnits = ''),
      (this.removed = !1),
      (this.frozen = !1),
      e.screen.animations.push(this),
      (this.begin = this.getAttribute('begin').getMilliseconds()),
      (this.maxDuration =
        this.begin + this.getAttribute('dur').getMilliseconds()),
      (this.from = this.getAttribute('from')),
      (this.to = this.getAttribute('to')),
      (this.values = new S(e, 'values', null))
    var i = this.getAttribute('values')
    i.hasValue() && this.values.setValue(i.getString().split(';'))
  }
  getProperty() {
    var e = this.getAttribute('attributeType').getString(),
      t = this.getAttribute('attributeName').getString()
    return e === 'CSS'
      ? this.parent.getStyle(t, !0)
      : this.parent.getAttribute(t, !0)
  }
  calcValue() {
    var { initialUnits: e } = this,
      { progress: t, from: r, to: i } = this.getProgress(),
      n = r.getNumber() + (i.getNumber() - r.getNumber()) * t
    return e === '%' && (n *= 100), ''.concat(n).concat(e)
  }
  update(e) {
    var { parent: t } = this,
      r = this.getProperty()
    if (
      (this.initialValue ||
        ((this.initialValue = r.getString()),
        (this.initialUnits = r.getUnits())),
      this.duration > this.maxDuration)
    ) {
      var i = this.getAttribute('fill').getString('remove')
      if (
        this.getAttribute('repeatCount').getString() === 'indefinite' ||
        this.getAttribute('repeatDur').getString() === 'indefinite'
      )
        this.duration = 0
      else if (i === 'freeze' && !this.frozen)
        (this.frozen = !0),
          (t.animationFrozen = !0),
          (t.animationFrozenValue = r.getString())
      else if (i === 'remove' && !this.removed)
        return (
          (this.removed = !0),
          r.setValue(
            t.animationFrozen ? t.animationFrozenValue : this.initialValue,
          ),
          !0
        )
      return !1
    }
    this.duration += e
    var n = !1
    if (this.begin < this.duration) {
      var o = this.calcValue(),
        s = this.getAttribute('type')
      if (s.hasValue()) {
        var u = s.getString()
        o = ''.concat(u, '(').concat(o, ')')
      }
      r.setValue(o), (n = !0)
    }
    return n
  }
  getProgress() {
    var { document: e, values: t } = this,
      r = {
        progress:
          (this.duration - this.begin) / (this.maxDuration - this.begin),
      }
    if (t.hasValue()) {
      var i = r.progress * (t.getValue().length - 1),
        n = Math.floor(i),
        o = Math.ceil(i)
      ;(r.from = new S(e, 'from', parseFloat(t.getValue()[n]))),
        (r.to = new S(e, 'to', parseFloat(t.getValue()[o]))),
        (r.progress = (i - n) / (o - n))
    } else (r.from = this.from), (r.to = this.to)
    return r
  }
}
class P1 extends an {
  constructor() {
    super(...arguments), (this.type = 'animateColor')
  }
  calcValue() {
    var { progress: e, from: t, to: r } = this.getProgress(),
      i = new di(t.getColor()),
      n = new di(r.getColor())
    if (i.ok && n.ok) {
      var o = i.r + (n.r - i.r) * e,
        s = i.g + (n.g - i.g) * e,
        u = i.b + (n.b - i.b) * e
      return 'rgb('
        .concat(Math.floor(o), ', ')
        .concat(Math.floor(s), ', ')
        .concat(Math.floor(u), ')')
    }
    return this.getAttribute('from').getColor()
  }
}
class R1 extends an {
  constructor() {
    super(...arguments), (this.type = 'animateTransform')
  }
  calcValue() {
    var { progress: e, from: t, to: r } = this.getProgress(),
      i = ie(t.getString()),
      n = ie(r.getString()),
      o = i
        .map((s, u) => {
          var l = n[u]
          return s + (l - s) * e
        })
        .join(' ')
    return o
  }
}
class N1 extends N {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'font'),
      (this.glyphs = {}),
      (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber())
    var { definitions: i } = e,
      { children: n } = this
    for (var o of n)
      switch (o.type) {
        case 'font-face': {
          this.fontFace = o
          var s = o.getStyle('font-family')
          s.hasValue() && (i[s.getString()] = this)
          break
        }
        case 'missing-glyph':
          this.missingGlyph = o
          break
        case 'glyph': {
          var u = o
          u.arabicForm
            ? ((this.isRTL = !0),
              (this.isArabic = !0),
              typeof this.glyphs[u.unicode] > 'u' &&
                (this.glyphs[u.unicode] = {}),
              (this.glyphs[u.unicode][u.arabicForm] = u))
            : (this.glyphs[u.unicode] = u)
          break
        }
      }
  }
  render() {}
}
class I1 extends N {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'font-face'),
      (this.ascent = this.getAttribute('ascent').getNumber()),
      (this.descent = this.getAttribute('descent').getNumber()),
      (this.unitsPerEm = this.getAttribute('units-per-em').getNumber())
  }
}
class M1 extends A {
  constructor() {
    super(...arguments), (this.type = 'missing-glyph'), (this.horizAdvX = 0)
  }
}
class _1 extends Ce {
  constructor() {
    super(...arguments), (this.type = 'tref')
  }
  getText() {
    var e = this.getHrefAttribute().getDefinition()
    if (e) {
      var t = e.children[0]
      if (t) return t.getText()
    }
    return ''
  }
}
class V1 extends Ce {
  constructor(e, t, r) {
    super(e, t, r), (this.type = 'a')
    var { childNodes: i } = t,
      n = i[0],
      o = i.length > 0 && Array.from(i).every((s) => s.nodeType === 3)
    ;(this.hasText = o), (this.text = o ? this.getTextFromNode(n) : '')
  }
  getText() {
    return this.text
  }
  renderChildren(e) {
    if (this.hasText) {
      super.renderChildren(e)
      var { document: t, x: r, y: i } = this,
        { mouse: n } = t.screen,
        o = new S(t, 'fontSize', Z.parse(t.ctx.font).fontSize)
      n.isWorking() &&
        n.checkBoundingBox(
          this,
          new ce(r, i - o.getPixels('y'), r + this.measureText(e), i),
        )
    } else if (this.children.length > 0) {
      var s = new rn(this.document, null)
      ;(s.children = this.children), (s.parent = this), s.render(e)
    }
  }
  onClick() {
    var { window: e } = this.document
    e && e.open(this.getHrefAttribute().getString())
  }
  onMouseMove() {
    var e = this.document.ctx
    e.canvas.style.cursor = 'pointer'
  }
}
function Ao(a, e) {
  var t = Object.keys(a)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a)
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable
      })),
      t.push.apply(t, r)
  }
  return t
}
function ar(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Ao(Object(t), !0).forEach(function (r) {
          xi(a, r, t[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
        : Ao(Object(t)).forEach(function (r) {
            Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r))
          })
  }
  return a
}
class D1 extends Ce {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'textPath'),
      (this.textWidth = 0),
      (this.textHeight = 0),
      (this.pathLength = -1),
      (this.glyphInfo = null),
      (this.letterSpacingCache = []),
      (this.measuresCache = new Map([['', 0]]))
    var i = this.getHrefAttribute().getDefinition()
    ;(this.text = this.getTextFromNode()),
      (this.dataArray = this.parsePathData(i))
  }
  getText() {
    return this.text
  }
  path(e) {
    var { dataArray: t } = this
    e && e.beginPath(),
      t.forEach((r) => {
        var { type: i, points: n } = r
        switch (i) {
          case w.LINE_TO:
            e && e.lineTo(n[0], n[1])
            break
          case w.MOVE_TO:
            e && e.moveTo(n[0], n[1])
            break
          case w.CURVE_TO:
            e && e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
            break
          case w.QUAD_TO:
            e && e.quadraticCurveTo(n[0], n[1], n[2], n[3])
            break
          case w.ARC: {
            var [o, s, u, l, h, f, c, v] = n,
              d = u > l ? u : l,
              g = u > l ? 1 : u / l,
              p = u > l ? l / u : 1
            e &&
              (e.translate(o, s),
              e.rotate(c),
              e.scale(g, p),
              e.arc(0, 0, d, h, h + f, !!(1 - v)),
              e.scale(1 / g, 1 / p),
              e.rotate(-c),
              e.translate(-o, -s))
            break
          }
          case w.CLOSE_PATH:
            e && e.closePath()
            break
        }
      })
  }
  renderChildren(e) {
    this.setTextData(e), e.save()
    var t = this.parent.getStyle('text-decoration').getString(),
      r = this.getFontSize(),
      { glyphInfo: i } = this,
      n = e.fillStyle
    t === 'underline' && e.beginPath(),
      i.forEach((o, s) => {
        var { p0: u, p1: l, rotation: h, text: f } = o
        e.save(),
          e.translate(u.x, u.y),
          e.rotate(h),
          e.fillStyle && e.fillText(f, 0, 0),
          e.strokeStyle && e.strokeText(f, 0, 0),
          e.restore(),
          t === 'underline' &&
            (s === 0 && e.moveTo(u.x, u.y + r / 8), e.lineTo(l.x, l.y + r / 5))
      }),
      t === 'underline' &&
        ((e.lineWidth = r / 20),
        (e.strokeStyle = n),
        e.stroke(),
        e.closePath()),
      e.restore()
  }
  getLetterSpacingAt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0
    return this.letterSpacingCache[e] || 0
  }
  findSegmentToFitChar(e, t, r, i, n, o, s, u, l) {
    var h = o,
      f = this.measureText(e, u)
    u === ' ' && t === 'justify' && r < i && (f += (i - r) / n),
      l > -1 && (h += this.getLetterSpacingAt(l))
    var c = this.textHeight / 20,
      v = this.getEquidistantPointOnPath(h, c, 0),
      d = this.getEquidistantPointOnPath(h + f, c, 0),
      g = { p0: v, p1: d },
      p = v && d ? Math.atan2(d.y - v.y, d.x - v.x) : 0
    if (s) {
      var y = Math.cos(Math.PI / 2 + p) * s,
        x = Math.cos(-p) * s
      ;(g.p0 = ar(ar({}, v), {}, { x: v.x + y, y: v.y + x })),
        (g.p1 = ar(ar({}, d), {}, { x: d.x + y, y: d.y + x }))
    }
    return (h += f), { offset: h, segment: g, rotation: p }
  }
  measureText(e, t) {
    var { measuresCache: r } = this,
      i = t || this.getText()
    if (r.has(i)) return r.get(i)
    var n = this.measureTargetText(e, i)
    return r.set(i, n), n
  }
  setTextData(e) {
    if (!this.glyphInfo) {
      var t = this.getText(),
        r = t.split(''),
        i = t.split(' ').length - 1,
        n = this.parent
          .getAttribute('dx')
          .split()
          .map((T) => T.getPixels('x')),
        o = this.parent.getAttribute('dy').getPixels('y'),
        s = this.parent.getStyle('text-anchor').getString('start'),
        u = this.getStyle('letter-spacing'),
        l = this.parent.getStyle('letter-spacing'),
        h = 0
      !u.hasValue() || u.getValue() === 'inherit'
        ? (h = l.getPixels())
        : u.hasValue() &&
          u.getValue() !== 'initial' &&
          u.getValue() !== 'unset' &&
          (h = u.getPixels())
      var f = [],
        c = t.length
      this.letterSpacingCache = f
      for (var v = 0; v < c; v++) f.push(typeof n[v] < 'u' ? n[v] : h)
      var d = f.reduce((T, $, E) => (E === 0 ? 0 : T + $ || 0), 0),
        g = this.measureText(e),
        p = Math.max(g + d, 0)
      ;(this.textWidth = g),
        (this.textHeight = this.getFontSize()),
        (this.glyphInfo = [])
      var y = this.getPathLength(),
        x = this.getStyle('startOffset').getNumber(0) * y,
        b = 0
      ;(s === 'middle' || s === 'center') && (b = -p / 2),
        (s === 'end' || s === 'right') && (b = -p),
        (b += x),
        r.forEach((T, $) => {
          var {
            offset: E,
            segment: O,
            rotation: C,
          } = this.findSegmentToFitChar(e, s, p, y, i, b, o, T, $)
          ;(b = E),
            !(!O.p0 || !O.p1) &&
              this.glyphInfo.push({
                text: r[$],
                p0: O.p0,
                p1: O.p1,
                rotation: C,
              })
        })
    }
  }
  parsePathData(e) {
    if (((this.pathLength = -1), !e)) return []
    var t = [],
      { pathParser: r } = e
    for (r.reset(); !r.isEnd(); ) {
      var { current: i } = r,
        n = i ? i.x : 0,
        o = i ? i.y : 0,
        s = r.next(),
        u = s.type,
        l = []
      switch (s.type) {
        case w.MOVE_TO:
          this.pathM(r, l)
          break
        case w.LINE_TO:
          u = this.pathL(r, l)
          break
        case w.HORIZ_LINE_TO:
          u = this.pathH(r, l)
          break
        case w.VERT_LINE_TO:
          u = this.pathV(r, l)
          break
        case w.CURVE_TO:
          this.pathC(r, l)
          break
        case w.SMOOTH_CURVE_TO:
          u = this.pathS(r, l)
          break
        case w.QUAD_TO:
          this.pathQ(r, l)
          break
        case w.SMOOTH_QUAD_TO:
          u = this.pathT(r, l)
          break
        case w.ARC:
          l = this.pathA(r)
          break
        case w.CLOSE_PATH:
          A.pathZ(r)
          break
      }
      s.type !== w.CLOSE_PATH
        ? t.push({
            type: u,
            points: l,
            start: { x: n, y: o },
            pathLength: this.calcLength(n, o, u, l),
          })
        : t.push({ type: w.CLOSE_PATH, points: [], pathLength: 0 })
    }
    return t
  }
  pathM(e, t) {
    var { x: r, y: i } = A.pathM(e).point
    t.push(r, i)
  }
  pathL(e, t) {
    var { x: r, y: i } = A.pathL(e).point
    return t.push(r, i), w.LINE_TO
  }
  pathH(e, t) {
    var { x: r, y: i } = A.pathH(e).point
    return t.push(r, i), w.LINE_TO
  }
  pathV(e, t) {
    var { x: r, y: i } = A.pathV(e).point
    return t.push(r, i), w.LINE_TO
  }
  pathC(e, t) {
    var { point: r, controlPoint: i, currentPoint: n } = A.pathC(e)
    t.push(r.x, r.y, i.x, i.y, n.x, n.y)
  }
  pathS(e, t) {
    var { point: r, controlPoint: i, currentPoint: n } = A.pathS(e)
    return t.push(r.x, r.y, i.x, i.y, n.x, n.y), w.CURVE_TO
  }
  pathQ(e, t) {
    var { controlPoint: r, currentPoint: i } = A.pathQ(e)
    t.push(r.x, r.y, i.x, i.y)
  }
  pathT(e, t) {
    var { controlPoint: r, currentPoint: i } = A.pathT(e)
    return t.push(r.x, r.y, i.x, i.y), w.QUAD_TO
  }
  pathA(e) {
    var {
      rX: t,
      rY: r,
      sweepFlag: i,
      xAxisRotation: n,
      centp: o,
      a1: s,
      ad: u,
    } = A.pathA(e)
    return (
      i === 0 && u > 0 && (u -= 2 * Math.PI),
      i === 1 && u < 0 && (u += 2 * Math.PI),
      [o.x, o.y, t, r, s, u, n, i]
    )
  }
  calcLength(e, t, r, i) {
    var n = 0,
      o = null,
      s = null,
      u = 0
    switch (r) {
      case w.LINE_TO:
        return this.getLineLength(e, t, i[0], i[1])
      case w.CURVE_TO:
        for (
          n = 0,
            o = this.getPointOnCubicBezier(
              0,
              e,
              t,
              i[0],
              i[1],
              i[2],
              i[3],
              i[4],
              i[5],
            ),
            u = 0.01;
          u <= 1;
          u += 0.01
        )
          (s = this.getPointOnCubicBezier(
            u,
            e,
            t,
            i[0],
            i[1],
            i[2],
            i[3],
            i[4],
            i[5],
          )),
            (n += this.getLineLength(o.x, o.y, s.x, s.y)),
            (o = s)
        return n
      case w.QUAD_TO:
        for (
          n = 0,
            o = this.getPointOnQuadraticBezier(0, e, t, i[0], i[1], i[2], i[3]),
            u = 0.01;
          u <= 1;
          u += 0.01
        )
          (s = this.getPointOnQuadraticBezier(u, e, t, i[0], i[1], i[2], i[3])),
            (n += this.getLineLength(o.x, o.y, s.x, s.y)),
            (o = s)
        return n
      case w.ARC: {
        n = 0
        var l = i[4],
          h = i[5],
          f = i[4] + h,
          c = Math.PI / 180
        if (
          (Math.abs(l - f) < c && (c = Math.abs(l - f)),
          (o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0)),
          h < 0)
        )
          for (u = l - c; u > f; u -= c)
            (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
              (n += this.getLineLength(o.x, o.y, s.x, s.y)),
              (o = s)
        else
          for (u = l + c; u < f; u += c)
            (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
              (n += this.getLineLength(o.x, o.y, s.x, s.y)),
              (o = s)
        return (
          (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], f, 0)),
          (n += this.getLineLength(o.x, o.y, s.x, s.y)),
          n
        )
      }
    }
    return 0
  }
  getPointOnLine(e, t, r, i, n) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : t,
      s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r,
      u = (n - r) / (i - t + at),
      l = Math.sqrt((e * e) / (1 + u * u))
    i < t && (l *= -1)
    var h = u * l,
      f = null
    if (i === t) f = { x: o, y: s + h }
    else if ((s - r) / (o - t + at) === u) f = { x: o + l, y: s + h }
    else {
      var c = 0,
        v = 0,
        d = this.getLineLength(t, r, i, n)
      if (d < at) return null
      var g = (o - t) * (i - t) + (s - r) * (n - r)
      ;(g /= d * d), (c = t + g * (i - t)), (v = r + g * (n - r))
      var p = this.getLineLength(o, s, c, v),
        y = Math.sqrt(e * e - p * p)
      ;(l = Math.sqrt((y * y) / (1 + u * u))),
        i < t && (l *= -1),
        (h = u * l),
        (f = { x: c + l, y: v + h })
    }
    return f
  }
  getPointOnPath(e) {
    var t = this.getPathLength(),
      r = 0,
      i = null
    if (e < -5e-5 || e - 5e-5 > t) return null
    var { dataArray: n } = this
    for (var o of n) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < e)) {
        r += o.pathLength
        continue
      }
      var s = e - r,
        u = 0
      switch (o.type) {
        case w.LINE_TO:
          i = this.getPointOnLine(
            s,
            o.start.x,
            o.start.y,
            o.points[0],
            o.points[1],
            o.start.x,
            o.start.y,
          )
          break
        case w.ARC: {
          var l = o.points[4],
            h = o.points[5],
            f = o.points[4] + h
          if (
            ((u = l + (s / o.pathLength) * h),
            (h < 0 && u < f) || (h >= 0 && u > f))
          )
            break
          i = this.getPointOnEllipticalArc(
            o.points[0],
            o.points[1],
            o.points[2],
            o.points[3],
            u,
            o.points[6],
          )
          break
        }
        case w.CURVE_TO:
          ;(u = s / o.pathLength),
            u > 1 && (u = 1),
            (i = this.getPointOnCubicBezier(
              u,
              o.start.x,
              o.start.y,
              o.points[0],
              o.points[1],
              o.points[2],
              o.points[3],
              o.points[4],
              o.points[5],
            ))
          break
        case w.QUAD_TO:
          ;(u = s / o.pathLength),
            u > 1 && (u = 1),
            (i = this.getPointOnQuadraticBezier(
              u,
              o.start.x,
              o.start.y,
              o.points[0],
              o.points[1],
              o.points[2],
              o.points[3],
            ))
          break
      }
      if (i) return i
      break
    }
    return null
  }
  getLineLength(e, t, r, i) {
    return Math.sqrt((r - e) * (r - e) + (i - t) * (i - t))
  }
  getPathLength() {
    return (
      this.pathLength === -1 &&
        (this.pathLength = this.dataArray.reduce(
          (e, t) => (t.pathLength > 0 ? e + t.pathLength : e),
          0,
        )),
      this.pathLength
    )
  }
  getPointOnCubicBezier(e, t, r, i, n, o, s, u, l) {
    var h = u * To(e) + o * Oo(e) + i * So(e) + t * Eo(e),
      f = l * To(e) + s * Oo(e) + n * So(e) + r * Eo(e)
    return { x: h, y: f }
  }
  getPointOnQuadraticBezier(e, t, r, i, n, o, s) {
    var u = o * $o(e) + i * wo(e) + t * Co(e),
      l = s * $o(e) + n * wo(e) + r * Co(e)
    return { x: u, y: l }
  }
  getPointOnEllipticalArc(e, t, r, i, n, o) {
    var s = Math.cos(o),
      u = Math.sin(o),
      l = { x: r * Math.cos(n), y: i * Math.sin(n) }
    return { x: e + (l.x * s - l.y * u), y: t + (l.x * u + l.y * s) }
  }
  buildEquidistantCache(e, t) {
    var r = this.getPathLength(),
      i = t || 0.25,
      n = e || r / 100
    if (
      !this.equidistantCache ||
      this.equidistantCache.step !== n ||
      this.equidistantCache.precision !== i
    ) {
      this.equidistantCache = { step: n, precision: i, points: [] }
      for (var o = 0, s = 0; s <= r; s += i) {
        var u = this.getPointOnPath(s),
          l = this.getPointOnPath(s + i)
        !u ||
          !l ||
          ((o += this.getLineLength(u.x, u.y, l.x, l.y)),
          o >= n &&
            (this.equidistantCache.points.push({ x: u.x, y: u.y, distance: s }),
            (o -= n)))
      }
    }
  }
  getEquidistantPointOnPath(e, t, r) {
    if (
      (this.buildEquidistantCache(t, r),
      e < 0 || e - this.getPathLength() > 5e-5)
    )
      return null
    var i = Math.round(
      (e / this.getPathLength()) * (this.equidistantCache.points.length - 1),
    )
    return this.equidistantCache.points[i] || null
  }
}
var k1 =
  /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i
class L1 extends ze {
  constructor(e, t, r) {
    super(e, t, r), (this.type = 'image'), (this.loaded = !1)
    var i = this.getHrefAttribute().getString()
    if (i) {
      var n = i.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(i)
      e.images.push(this),
        n ? this.loadSvg(i) : this.loadImage(i),
        (this.isSvg = n)
    }
  }
  loadImage(e) {
    var t = this
    return xe(function* () {
      try {
        var r = yield t.document.createImage(e)
        t.image = r
      } catch (i) {
        console.error('Error while loading image "'.concat(e, '":'), i)
      }
      t.loaded = !0
    })()
  }
  loadSvg(e) {
    var t = this
    return xe(function* () {
      var r = k1.exec(e)
      if (r) {
        var i = r[5]
        r[4] === 'base64'
          ? (t.image = atob(i))
          : (t.image = decodeURIComponent(i))
      } else
        try {
          var n = yield t.document.fetch(e),
            o = yield n.text()
          t.image = o
        } catch (s) {
          console.error('Error while loading image "'.concat(e, '":'), s)
        }
      t.loaded = !0
    })()
  }
  renderChildren(e) {
    var { document: t, image: r, loaded: i } = this,
      n = this.getAttribute('x').getPixels('x'),
      o = this.getAttribute('y').getPixels('y'),
      s = this.getStyle('width').getPixels('x'),
      u = this.getStyle('height').getPixels('y')
    if (!(!i || !r || !s || !u)) {
      if ((e.save(), e.translate(n, o), this.isSvg)) {
        var l = t.canvg.forkString(e, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u,
        })
        ;(l.document.documentElement.parent = this), l.render()
      } else {
        var h = this.image
        t.setViewBox({
          ctx: e,
          aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
          width: s,
          desiredWidth: h.width,
          height: u,
          desiredHeight: h.height,
        }),
          this.loaded &&
            (typeof h.complete > 'u' || h.complete) &&
            e.drawImage(h, 0, 0)
      }
      e.restore()
    }
  }
  getBoundingBox() {
    var e = this.getAttribute('x').getPixels('x'),
      t = this.getAttribute('y').getPixels('y'),
      r = this.getStyle('width').getPixels('x'),
      i = this.getStyle('height').getPixels('y')
    return new ce(e, t, e + r, t + i)
  }
}
class B1 extends ze {
  constructor() {
    super(...arguments), (this.type = 'symbol')
  }
  render(e) {}
}
class F1 {
  constructor(e) {
    ;(this.document = e), (this.loaded = !1), e.fonts.push(this)
  }
  load(e, t) {
    var r = this
    return xe(function* () {
      try {
        var { document: i } = r,
          n = yield i.canvg.parser.load(t),
          o = n.getElementsByTagName('font')
        Array.from(o).forEach((s) => {
          var u = i.createElement(s)
          i.definitions[e] = u
        })
      } catch (s) {
        console.error('Error while loading font "'.concat(t, '":'), s)
      }
      r.loaded = !0
    })()
  }
}
class Tl extends N {
  constructor(e, t, r) {
    super(e, t, r), (this.type = 'style')
    var i = ht(
        Array.from(t.childNodes)
          .map((o) => o.textContent)
          .join('')
          .replace(
            /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
            '',
          )
          .replace(/@import.*;/g, ''),
      ),
      n = i.split('}')
    n.forEach((o) => {
      var s = o.trim()
      if (s) {
        var u = s.split('{'),
          l = u[0].split(','),
          h = u[1].split(';')
        l.forEach((f) => {
          var c = f.trim()
          if (c) {
            var v = e.styles[c] || {}
            if (
              (h.forEach((p) => {
                var y = p.indexOf(':'),
                  x = p.substr(0, y).trim(),
                  b = p.substr(y + 1, p.length - y).trim()
                x && b && (v[x] = new S(e, x, b))
              }),
              (e.styles[c] = v),
              (e.stylesSpecificity[c] = t1(c)),
              c === '@font-face')
            ) {
              var d = v['font-family'].getString().replace(/"|'/g, ''),
                g = v.src.getString().split(',')
              g.forEach((p) => {
                if (p.indexOf('format("svg")') > 0) {
                  var y = fl(p)
                  y && new F1(e).load(d, y)
                }
              })
            }
          }
        })
      }
    })
  }
}
Tl.parseExternalUrl = fl
class j1 extends ze {
  constructor() {
    super(...arguments), (this.type = 'use')
  }
  setContext(e) {
    super.setContext(e)
    var t = this.getAttribute('x'),
      r = this.getAttribute('y')
    t.hasValue() && e.translate(t.getPixels('x'), 0),
      r.hasValue() && e.translate(0, r.getPixels('y'))
  }
  path(e) {
    var { element: t } = this
    t && t.path(e)
  }
  renderChildren(e) {
    var { document: t, element: r } = this
    if (r) {
      var i = r
      if (
        (r.type === 'symbol' &&
          ((i = new It(t, null)),
          (i.attributes.viewBox = new S(
            t,
            'viewBox',
            r.getAttribute('viewBox').getString(),
          )),
          (i.attributes.preserveAspectRatio = new S(
            t,
            'preserveAspectRatio',
            r.getAttribute('preserveAspectRatio').getString(),
          )),
          (i.attributes.overflow = new S(
            t,
            'overflow',
            r.getAttribute('overflow').getString(),
          )),
          (i.children = r.children),
          (r.styles.opacity = new S(t, 'opacity', this.calculateOpacity()))),
        i.type === 'svg')
      ) {
        var n = this.getStyle('width', !1, !0),
          o = this.getStyle('height', !1, !0)
        n.hasValue() && (i.attributes.width = new S(t, 'width', n.getString())),
          o.hasValue() &&
            (i.attributes.height = new S(t, 'height', o.getString()))
      }
      var s = i.parent
      ;(i.parent = this), i.render(e), (i.parent = s)
    }
  }
  getBoundingBox(e) {
    var { element: t } = this
    return t ? t.getBoundingBox(e) : null
  }
  elementTransform() {
    var { document: e, element: t } = this
    return Le.fromElement(e, t)
  }
  get element() {
    return (
      this.cachedElement ||
        (this.cachedElement = this.getHrefAttribute().getDefinition()),
      this.cachedElement
    )
  }
}
function ir(a, e, t, r, i, n) {
  return a[t * r * 4 + e * 4 + n]
}
function nr(a, e, t, r, i, n, o) {
  a[t * r * 4 + e * 4 + n] = o
}
function j(a, e, t) {
  var r = a[e]
  return r * t
}
function me(a, e, t, r) {
  return e + Math.cos(a) * t + Math.sin(a) * r
}
class Ol extends N {
  constructor(e, t, r) {
    super(e, t, r), (this.type = 'feColorMatrix')
    var i = ie(this.getAttribute('values').getString())
    switch (this.getAttribute('type').getString('matrix')) {
      case 'saturate': {
        var n = i[0]
        i = [
          0.213 + 0.787 * n,
          0.715 - 0.715 * n,
          0.072 - 0.072 * n,
          0,
          0,
          0.213 - 0.213 * n,
          0.715 + 0.285 * n,
          0.072 - 0.072 * n,
          0,
          0,
          0.213 - 0.213 * n,
          0.715 - 0.715 * n,
          0.072 + 0.928 * n,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
        ]
        break
      }
      case 'hueRotate': {
        var o = (i[0] * Math.PI) / 180
        i = [
          me(o, 0.213, 0.787, -0.213),
          me(o, 0.715, -0.715, -0.715),
          me(o, 0.072, -0.072, 0.928),
          0,
          0,
          me(o, 0.213, -0.213, 0.143),
          me(o, 0.715, 0.285, 0.14),
          me(o, 0.072, -0.072, -0.283),
          0,
          0,
          me(o, 0.213, -0.213, -0.787),
          me(o, 0.715, -0.715, 0.715),
          me(o, 0.072, 0.928, 0.072),
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
        ]
        break
      }
      case 'luminanceToAlpha':
        i = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721,
          0, 0, 0, 0, 0, 0, 1,
        ]
        break
    }
    ;(this.matrix = i),
      (this.includeOpacity = this.getAttribute('includeOpacity').hasValue())
  }
  apply(e, t, r, i, n) {
    for (
      var { includeOpacity: o, matrix: s } = this,
        u = e.getImageData(0, 0, i, n),
        l = 0;
      l < n;
      l++
    )
      for (var h = 0; h < i; h++) {
        var f = ir(u.data, h, l, i, n, 0),
          c = ir(u.data, h, l, i, n, 1),
          v = ir(u.data, h, l, i, n, 2),
          d = ir(u.data, h, l, i, n, 3),
          g = j(s, 0, f) + j(s, 1, c) + j(s, 2, v) + j(s, 3, d) + j(s, 4, 1),
          p = j(s, 5, f) + j(s, 6, c) + j(s, 7, v) + j(s, 8, d) + j(s, 9, 1),
          y =
            j(s, 10, f) + j(s, 11, c) + j(s, 12, v) + j(s, 13, d) + j(s, 14, 1),
          x =
            j(s, 15, f) + j(s, 16, c) + j(s, 17, v) + j(s, 18, d) + j(s, 19, 1)
        o && ((g = 0), (p = 0), (y = 0), (x *= d / 255)),
          nr(u.data, h, l, i, n, 0, g),
          nr(u.data, h, l, i, n, 1, p),
          nr(u.data, h, l, i, n, 2, y),
          nr(u.data, h, l, i, n, 3, x)
      }
    e.clearRect(0, 0, i, n), e.putImageData(u, 0, 0)
  }
}
class Dr extends N {
  constructor() {
    super(...arguments), (this.type = 'mask')
  }
  apply(e, t) {
    var { document: r } = this,
      i = this.getAttribute('x').getPixels('x'),
      n = this.getAttribute('y').getPixels('y'),
      o = this.getStyle('width').getPixels('x'),
      s = this.getStyle('height').getPixels('y')
    if (!o && !s) {
      var u = new ce()
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(e))
      }),
        (i = Math.floor(u.x1)),
        (n = Math.floor(u.y1)),
        (o = Math.floor(u.width)),
        (s = Math.floor(u.height))
    }
    var l = this.removeStyles(t, Dr.ignoreStyles),
      h = r.createCanvas(i + o, n + s),
      f = h.getContext('2d')
    r.screen.setDefaults(f),
      this.renderChildren(f),
      new Ol(r, {
        nodeType: 1,
        childNodes: [],
        attributes: [
          { nodeName: 'type', value: 'luminanceToAlpha' },
          { nodeName: 'includeOpacity', value: 'true' },
        ],
      }).apply(f, 0, 0, i + o, n + s)
    var c = r.createCanvas(i + o, n + s),
      v = c.getContext('2d')
    r.screen.setDefaults(v),
      t.render(v),
      (v.globalCompositeOperation = 'destination-in'),
      (v.fillStyle = f.createPattern(h, 'no-repeat')),
      v.fillRect(0, 0, i + o, n + s),
      (e.fillStyle = v.createPattern(c, 'no-repeat')),
      e.fillRect(0, 0, i + o, n + s),
      this.restoreStyles(t, l)
  }
  render(e) {}
}
Dr.ignoreStyles = ['mask', 'transform', 'clip-path']
var Po = () => {}
class U1 extends N {
  constructor() {
    super(...arguments), (this.type = 'clipPath')
  }
  apply(e) {
    var { document: t } = this,
      r = Reflect.getPrototypeOf(e),
      { beginPath: i, closePath: n } = e
    r && ((r.beginPath = Po), (r.closePath = Po)),
      Reflect.apply(i, e, []),
      this.children.forEach((o) => {
        if (!(typeof o.path > 'u')) {
          var s = typeof o.elementTransform < 'u' ? o.elementTransform() : null
          s || (s = Le.fromElement(t, o)),
            s && s.apply(e),
            o.path(e),
            r && (r.closePath = n),
            s && s.unapply(e)
        }
      }),
      Reflect.apply(n, e, []),
      e.clip(),
      r && ((r.beginPath = i), (r.closePath = n))
  }
  render(e) {}
}
class kr extends N {
  constructor() {
    super(...arguments), (this.type = 'filter')
  }
  apply(e, t) {
    var { document: r, children: i } = this,
      n = t.getBoundingBox(e)
    if (n) {
      var o = 0,
        s = 0
      i.forEach((y) => {
        var x = y.extraFilterDistance || 0
        ;(o = Math.max(o, x)), (s = Math.max(s, x))
      })
      var u = Math.floor(n.width),
        l = Math.floor(n.height),
        h = u + 2 * o,
        f = l + 2 * s
      if (!(h < 1 || f < 1)) {
        var c = Math.floor(n.x),
          v = Math.floor(n.y),
          d = this.removeStyles(t, kr.ignoreStyles),
          g = r.createCanvas(h, f),
          p = g.getContext('2d')
        r.screen.setDefaults(p),
          p.translate(-c + o, -v + s),
          t.render(p),
          i.forEach((y) => {
            typeof y.apply == 'function' && y.apply(p, 0, 0, h, f)
          }),
          e.drawImage(g, 0, 0, h, f, c - o, v - s, h, f),
          this.restoreStyles(t, d)
      }
    }
  }
  render(e) {}
}
kr.ignoreStyles = ['filter', 'transform', 'clip-path']
class z1 extends N {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'feDropShadow'),
      this.addStylesFromStyleDefinition()
  }
  apply(e, t, r, i, n) {}
}
class G1 extends N {
  constructor() {
    super(...arguments), (this.type = 'feMorphology')
  }
  apply(e, t, r, i, n) {}
}
class H1 extends N {
  constructor() {
    super(...arguments), (this.type = 'feComposite')
  }
  apply(e, t, r, i, n) {}
}
class Y1 extends N {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = 'feGaussianBlur'),
      (this.blurRadius = Math.floor(
        this.getAttribute('stdDeviation').getNumber(),
      )),
      (this.extraFilterDistance = this.blurRadius)
  }
  apply(e, t, r, i, n) {
    var { document: o, blurRadius: s } = this,
      u = o.window ? o.window.document.body : null,
      l = e.canvas
    ;(l.id = o.getUniqueId()),
      u && ((l.style.display = 'none'), u.appendChild(l)),
      Bb(l, t, r, i, n, s),
      u && u.removeChild(l)
  }
}
class X1 extends N {
  constructor() {
    super(...arguments), (this.type = 'title')
  }
}
class W1 extends N {
  constructor() {
    super(...arguments), (this.type = 'desc')
  }
}
var q1 = {
  svg: It,
  rect: ml,
  circle: b1,
  ellipse: x1,
  line: T1,
  polyline: bl,
  polygon: O1,
  path: A,
  pattern: S1,
  marker: E1,
  defs: $1,
  linearGradient: w1,
  radialGradient: C1,
  stop: A1,
  animate: an,
  animateColor: P1,
  animateTransform: R1,
  font: N1,
  'font-face': I1,
  'missing-glyph': M1,
  glyph: yl,
  text: Ce,
  tspan: Vr,
  tref: _1,
  a: V1,
  textPath: D1,
  image: L1,
  g: rn,
  symbol: B1,
  style: Tl,
  use: j1,
  mask: Dr,
  clipPath: U1,
  filter: kr,
  feDropShadow: z1,
  feMorphology: G1,
  feComposite: H1,
  feColorMatrix: Ol,
  feGaussianBlur: Y1,
  title: X1,
  desc: W1,
}
function Ro(a, e) {
  var t = Object.keys(a)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a)
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable
      })),
      t.push.apply(t, r)
  }
  return t
}
function Q1(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Ro(Object(t), !0).forEach(function (r) {
          xi(a, r, t[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
        : Ro(Object(t)).forEach(function (r) {
            Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r))
          })
  }
  return a
}
function K1(a, e) {
  var t = document.createElement('canvas')
  return (t.width = a), (t.height = e), t
}
function Z1(a) {
  return bi.apply(this, arguments)
}
function bi() {
  return (
    (bi = xe(function* (a) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        t = document.createElement('img')
      return (
        e && (t.crossOrigin = 'Anonymous'),
        new Promise((r, i) => {
          ;(t.onload = () => {
            r(t)
          }),
            (t.onerror = (n, o, s, u, l) => {
              i(l)
            }),
            (t.src = a)
        })
      )
    })),
    bi.apply(this, arguments)
  )
}
class $e {
  constructor(e) {
    var {
      rootEmSize: t = 12,
      emSize: r = 12,
      createCanvas: i = $e.createCanvas,
      createImage: n = $e.createImage,
      anonymousCrossOrigin: o,
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.canvg = e),
      (this.definitions = {}),
      (this.styles = {}),
      (this.stylesSpecificity = {}),
      (this.images = []),
      (this.fonts = []),
      (this.emSizeStack = []),
      (this.uniqueId = 0),
      (this.screen = e.screen),
      (this.rootEmSize = t),
      (this.emSize = r),
      (this.createCanvas = i),
      (this.createImage = this.bindCreateImage(n, o)),
      this.screen.wait(this.isImagesLoaded.bind(this)),
      this.screen.wait(this.isFontsLoaded.bind(this))
  }
  bindCreateImage(e, t) {
    return typeof t == 'boolean'
      ? (r, i) => e(r, typeof i == 'boolean' ? i : t)
      : e
  }
  get window() {
    return this.screen.window
  }
  get fetch() {
    return this.screen.fetch
  }
  get ctx() {
    return this.screen.ctx
  }
  get emSize() {
    var { emSizeStack: e } = this
    return e[e.length - 1]
  }
  set emSize(e) {
    var { emSizeStack: t } = this
    t.push(e)
  }
  popEmSize() {
    var { emSizeStack: e } = this
    e.pop()
  }
  getUniqueId() {
    return 'canvg'.concat(++this.uniqueId)
  }
  isImagesLoaded() {
    return this.images.every((e) => e.loaded)
  }
  isFontsLoaded() {
    return this.fonts.every((e) => e.loaded)
  }
  createDocumentElement(e) {
    var t = this.createElement(e.documentElement)
    return (
      (t.root = !0),
      t.addStylesFromStyleDefinition(),
      (this.documentElement = t),
      t
    )
  }
  createElement(e) {
    var t = e.nodeName.replace(/^[^:]+:/, ''),
      r = $e.elementTypes[t]
    return typeof r < 'u' ? new r(this, e) : new c1(this, e)
  }
  createTextNode(e) {
    return new m1(this, e)
  }
  setViewBox(e) {
    this.screen.setViewBox(Q1({ document: this }, e))
  }
}
$e.createCanvas = K1
$e.createImage = Z1
$e.elementTypes = q1
function No(a, e) {
  var t = Object.keys(a)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a)
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable
      })),
      t.push.apply(t, r)
  }
  return t
}
function Ve(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? No(Object(t), !0).forEach(function (r) {
          xi(a, r, t[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
        : No(Object(t)).forEach(function (r) {
            Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r))
          })
  }
  return a
}
class bt {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    ;(this.parser = new za(r)), (this.screen = new _r(e, r)), (this.options = r)
    var i = new $e(this, r),
      n = i.createDocumentElement(t)
    ;(this.document = i), (this.documentElement = n)
  }
  static from(e, t) {
    var r = arguments
    return xe(function* () {
      var i = r.length > 2 && r[2] !== void 0 ? r[2] : {},
        n = new za(i),
        o = yield n.parse(t)
      return new bt(e, o, i)
    })()
  }
  static fromString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = new za(r),
      n = i.parseFromString(t)
    return new bt(e, n, r)
  }
  fork(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return bt.from(e, t, Ve(Ve({}, this.options), r))
  }
  forkString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return bt.fromString(e, t, Ve(Ve({}, this.options), r))
  }
  ready() {
    return this.screen.ready()
  }
  isReady() {
    return this.screen.isReady()
  }
  render() {
    var e = arguments,
      t = this
    return xe(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {}
      t.start(
        Ve({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r),
      ),
        yield t.ready(),
        t.stop()
    })()
  }
  start() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { documentElement: t, screen: r, options: i } = this
    r.start(t, Ve(Ve({ enableRedraw: !0 }, i), e))
  }
  stop() {
    this.screen.stop()
  }
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    this.documentElement.resize(e, t, r)
  }
}
export {
  V1 as AElement,
  P1 as AnimateColorElement,
  an as AnimateElement,
  R1 as AnimateTransformElement,
  ce as BoundingBox,
  To as CB1,
  Oo as CB2,
  So as CB3,
  Eo as CB4,
  bt as Canvg,
  b1 as CircleElement,
  U1 as ClipPathElement,
  $1 as DefsElement,
  W1 as DescElement,
  $e as Document,
  N as Element,
  x1 as EllipseElement,
  Ol as FeColorMatrixElement,
  H1 as FeCompositeElement,
  z1 as FeDropShadowElement,
  Y1 as FeGaussianBlurElement,
  G1 as FeMorphologyElement,
  kr as FilterElement,
  Z as Font,
  N1 as FontElement,
  I1 as FontFaceElement,
  rn as GElement,
  yl as GlyphElement,
  xl as GradientElement,
  L1 as ImageElement,
  T1 as LineElement,
  w1 as LinearGradientElement,
  E1 as MarkerElement,
  Dr as MaskElement,
  dl as Matrix,
  M1 as MissingGlyphElement,
  a1 as Mouse,
  at as PSEUDO_ZERO,
  za as Parser,
  A as PathElement,
  w as PathParser,
  S1 as PatternElement,
  D as Point,
  O1 as PolygonElement,
  bl as PolylineElement,
  S as Property,
  $o as QB1,
  wo as QB2,
  Co as QB3,
  C1 as RadialGradientElement,
  ml as RectElement,
  ze as RenderedElement,
  o1 as Rotate,
  It as SVGElement,
  F1 as SVGFontLoader,
  u1 as Scale,
  _r as Screen,
  pl as Skew,
  l1 as SkewX,
  h1 as SkewY,
  A1 as StopElement,
  Tl as StyleElement,
  B1 as SymbolElement,
  _1 as TRefElement,
  Vr as TSpanElement,
  Ce as TextElement,
  D1 as TextPathElement,
  X1 as TitleElement,
  Le as Transform,
  s1 as Translate,
  c1 as UnknownElement,
  j1 as UseElement,
  r1 as ViewPort,
  ht as compressSpaces,
  bt as default,
  t1 as getSelectorSpecificity,
  Yb as normalizeAttributeName,
  Xb as normalizeColor,
  fl as parseExternalUrl,
  e2 as presets,
  ie as toNumbers,
  zb as trimLeft,
  Gb as trimRight,
  bo as vectorMagnitude,
  xo as vectorsAngle,
  mi as vectorsRatio,
}
