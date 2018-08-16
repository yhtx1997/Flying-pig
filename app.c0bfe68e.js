(function (t) {
  function e(e) {
    for (var s, r, c = e[0], o = e[1], l = e[2], u = 0, h = []; u < c.length; u++) r = c[u], a[r] && h.push(a[r][0]), a[r] = 0;
    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
    d && d(e);
    while (h.length) h.shift()();
    return n.push.apply(n, l || []), i()
  }

  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], s = !0, c = 1; c < i.length; c++) {
        var o = i[c];
        0 !== a[o] && (s = !1)
      }
      s && (n.splice(e--, 1), t = r(r.s = i[0]))
    }
    return t
  }
  var s = {},
    a = {
      0: 0
    },
    n = [];

  function r(e) {
    if (s[e]) return s[e].exports;
    var i = s[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }
  r.m = t, r.c = s, r.d = function (t, e, i) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (r.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var s in t) r.d(i, s, function (e) {
        return t[e]
      }.bind(null, s));
    return i
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "";
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
    o = c.push.bind(c);
  c.push = e, c = c.slice();
  for (var l = 0; l < c.length; l++) e(c[l]);
  var d = o;
  n.push([0, 1]), i()
})({
  "+kEL": function (t, e, i) {},
  "/wlS": function (t, e, i) {
    "use strict";
    var s = i("0XSm"),
      a = i.n(s);
    a.a
  },
  0: function (t, e, i) {
    t.exports = i("Vtdi")
  },
  "0XSm": function (t, e, i) {},
  "4P34": function (t, e, i) {},
  "5LqM": function (t, e, i) {
    "use strict";
    var s = i("4P34"),
      a = i.n(s);
    a.a
  },
  "6hsj": function (t, e, i) {
    "use strict";
    var s = i("rk+l"),
      a = i.n(s);
    a.a
  },
  "8sCz": function (t, e, i) {
    "use strict";
    var s = i("Sj+k"),
      a = i.n(s);
    a.a
  },
  "9fYL": function (t, e, i) {
    "use strict";
    var s = i("VjbT"),
      a = i.n(s);
    a.a
  },
  Bu9B: function (t, e, i) {},
  Cgly: function (t, e, i) {
    "use strict";
    var s = i("LqNu"),
      a = i.n(s);
    a.a
  },
  EjOM: function (t, e, i) {
    "use strict";
    var s = i("xguS"),
      a = i.n(s);
    a.a
  },
  KTeX: function (t, e, i) {
    "use strict";
    var s = i("YBri"),
      a = i.n(s);
    a.a
  },
  LMne: function (t, e, i) {
    "use strict";
    var s = i("XVkY"),
      a = i.n(s);
    a.a
  },
  LqNu: function (t, e, i) {},
  Nx5h: function (t, e, i) {
    "use strict";
    var s = i("sLZW"),
      a = i.n(s);
    a.a
  },
  OWaS: function (t, e, i) {},
  PbQS: function (t, e, i) {},
  S9dI: function (t, e, i) {},
  "Sj+k": function (t, e, i) {},
  UncG: function (t, e, i) {
    "use strict";
    var s = i("Bu9B"),
      a = i.n(s);
    a.a
  },
  VBR8: function (t, e, i) {},
  VjbT: function (t, e, i) {},
  Vtdi: function (t, e, i) {
    "use strict";
    i.r(e);
    var s = i("Kw5r"),
      a = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          attrs: {
            id: "app"
          }
        }, [i("keep-alive", [i("router-view")], 1)], 1)
      },
      n = [],
      r = {
        name: "app"
      },
      c = r,
      o = (i("6hsj"), i("KHd+")),
      l = Object(o["a"])(c, a, n, !1, null, "9d851866", null),
      d = l.exports,
      u = i("jE9Z"),
      h = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "home"
        }, [i("home-header"), i("home-swiper", {
          attrs: {
            swiperList: t.swiperList
          }
        }), i("home-icons", {
          attrs: {
            iconList: t.iconList
          }
        }), i("home-random", {
          attrs: {
            randomList: t.randomList
          }
        }), i("home-like", {
          attrs: {
            likeList: t.likeList
          }
        })], 1)
      },
      m = [],
      p = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "header"
        }, [i("div", {
          staticClass: "header-left iconfont"
        }, [t._v("")]), i("div", {
          staticClass: "header-center iconfont"
        }, [t._v("  输入城市/景点/游玩主题")]), i("router-link", {
          attrs: {
            to: "/city"
          }
        }, [i("div", {
          staticClass: "header-right iconfont"
        }, [t._v("" + t._s(this.city))])])], 1)
      },
      f = [],
      v = i("L2JU"),
      y = {
        name: "HomeHeader",
        computed: { ...Object(v["c"])(["city"])
        }
      },
      C = y,
      b = (i("m2qV"), Object(o["a"])(C, p, f, !1, null, "6ba6f071", null)),
      g = b.exports,
      _ = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "wrapper"
        }, [t.swiperList.length ? i("swiper", {
          attrs: {
            options: t.swiperOption
          }
        }, [t._l(t.swiperList, function (t) {
          return i("swiper-slide", {
            key: t.id
          }, [i("img", {
            staticClass: "swiper-images",
            attrs: {
              src: t.imgUrl
            }
          })])
        }), i("div", {
          staticClass: "swiper-pagination",
          attrs: {
            slot: "pagination"
          },
          slot: "pagination"
        })], 2) : t._e()], 1)
      },
      w = [],
      k = {
        name: "HomeSwiper",
        props: {
          swiperList: Array
        },
        data() {
          return {
            swiperOption: {
              pagination: {
                el: ".swiper-pagination"
              },
              delay: 3e3,
              autoplay: !0,
              loop: !0
            }
          }
        }
      },
      j = k,
      L = (i("KTeX"), Object(o["a"])(j, _, w, !1, null, "2590fb42", null)),
      O = L.exports,
      S = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "icons"
        }, [t.iconList.length ? i("swiper", {
          attrs: {
            options: t.swiperOption
          }
        }, [t._l(t.pages, function (e, s) {
          return i("swiper-slide", {
            key: s
          }, t._l(e, function (e) {
            return i("div", {
              key: e.id,
              staticClass: "icon"
            }, [i("img", {
              staticClass: "icon-img",
              attrs: {
                src: e.imgUrl,
                alt: e.desc
              }
            }), i("div", {
              staticClass: "icon-desc"
            }, [t._v(t._s(e.desc))])])
          }))
        }), i("div", {
          staticClass: "swiper-pagination",
          attrs: {
            slot: "pagination"
          },
          slot: "pagination"
        })], 2) : t._e()], 1)
      },
      x = [],
      I = {
        name: "HomeIcons",
        props: {
          iconList: Array
        },
        data() {
          return {
            swiperOption: {
              pagination: {
                el: ".swiper-pagination"
              }
            }
          }
        },
        computed: {
          pages() {
            const t = [];
            return this.iconList.forEach(function (e, i) {
              const s = Math.floor(i / 8);
              t[s] || (t[s] = []), t[s].push(e)
            }), t
          }
        }
      },
      E = I,
      $ = (i("Nx5h"), Object(o["a"])(E, S, x, !1, null, "6221913b", null)),
      B = $.exports,
      T = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "recommend"
        }, [t._m(0), t.randomList.length ? i("div", {
          staticClass: "items"
        }, t._l(t.randomList, function (e) {
          return i("router-link", {
            key: e.id,
            staticClass: "item",
            attrs: {
              tag: "div",
              to: "/detail/" + e.id
            }
          }, [i("div", {
            staticClass: "warpper"
          }, [i("img", {
            staticClass: "item-img",
            attrs: {
              src: e.imgUrl,
              alt: "item.title"
            }
          })]), i("div", {
            staticClass: "desc"
          }, [i("p", {
            staticClass: "item-title"
          }, [t._v(t._s(e.title))]), i("p", {
            staticClass: "item-desc"
          }, [t._v(t._s(e.desc))])])])
        })) : t._e()])
      },
      H = [function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "title"
        }, [i("img", {
          staticClass: "title-img",
          attrs: {
            src: "https://gw.alicdn.com/tfs/TB1seGJnxTI8KJjSspiXXbM4FXa-750-110.png",
            alt: "旅行任意门"
          }
        })])
      }],
      R = {
        name: "HomeRandom",
        props: {
          randomList: Array
        }
      },
      M = R,
      D = (i("ble3"), Object(o["a"])(M, T, H, !1, null, "efe2ef1a", null)),
      N = D.exports,
      X = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "like"
        }, [t._m(0), t.likeList.length ? i("div", {
          staticClass: "items"
        }, t._l(t.likeList, function (e) {
          return i("div", {
            key: e.id,
            staticClass: "item"
          }, [i("div", {
            staticClass: "warpper"
          }, [i("img", {
            staticClass: "item-img",
            attrs: {
              src: e.imgUrl,
              alt: e.title
            }
          })]), i("div", {
            staticClass: "desc"
          }, [i("p", {
            staticClass: "item-title"
          }, [t._v(t._s(e.title))]), i("p", {
            staticClass: "item-desc"
          }, [t._v(t._s(e.desc))])])])
        })) : t._e()])
      },
      P = [function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "title"
        }, [i("img", {
          staticClass: "title-img",
          attrs: {
            src: "https://gw.alicdn.com/tfs/TB1zm3lnrYI8KJjy0FaXXbAiVXa-750-110.png",
            alt: "猜你喜欢"
          }
        })])
      }],
      A = {
        name: "HomeLike",
        props: {
          likeList: Array
        }
      },
      Y = A,
      q = (i("LMne"), Object(o["a"])(Y, X, P, !1, null, "3f899524", null)),
      G = q.exports,
      K = i("vDqi"),
      V = i.n(K),
      F = {
        name: "Home",
        components: {
          HomeHeader: g,
          HomeSwiper: O,
          HomeIcons: B,
          HomeRandom: N,
          HomeLike: G
        },
        data() {
          return {
            swiperList: [],
            iconList: [],
            randomList: [],
            likeList: [],
            lastCity: ""
          }
        },
        methods: {
          getHomeInfo() {
            V.a.get("./api/index.json?id=" + this.city).then(this.getHomeInfdSucc)
          },
          getHomeInfdSucc(t) {
            if (t = t.data, t.ret && t.data) {
              const e = t.data;
              this.swiperList = e.swiperList, this.iconList = e.iconList, this.randomList = e.randomList, this.likeList = e.likeList
            }
          }
        },
        computed: { ...Object(v["c"])(["city"])
        },
        mounted() {
          this.lastCity = this.city, this.getHomeInfo()
        },
        activated() {
          this.lastCity === this.city || (this.lastCity = this.city, this.getHomeInfo())
        }
      },
      U = F,
      J = (i("UncG"), Object(o["a"])(U, h, m, !1, null, "5e5f15f4", null)),
      Z = J.exports,
      z = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "city"
        }, [i("city-header"), i("city-search", {
          attrs: {
            domesticCity: t.domesticCity,
            abroadCity: t.abroadCity,
            choice: t.choice
          }
        }), i("city-choice", {
          attrs: {
            choice: t.choice
          },
          on: {
            choice: t.choiceClick
          }
        }), i("city-list", {
          attrs: {
            domesticCity: t.domesticCity,
            domesticRecommend: t.domesticRecommend,
            abroadCity: t.abroadCity,
            abroadRecommend: t.abroadRecommend,
            choice: t.choice,
            letter: t.letter
          }
        }), i("city-alphabet", {
          attrs: {
            domesticCity: t.domesticCity,
            abroadCity: t.abroadCity,
            choice: t.choice
          },
          on: {
            change: t.letterChange
          }
        })], 1)
      },
      W = [],
      Q = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "header"
        })
      },
      tt = [],
      et = {
        name: "CityHeader"
      },
      it = et,
      st = (i("tU/Y"), Object(o["a"])(it, Q, tt, !1, null, "1fc49728", null)),
      at = st.exports,
      nt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "choice"
        }, [i("div", {
          staticClass: "warpper"
        }, [i("div", {
          class: t.choiceClass1,
          on: {
            click: t.choiceClick1
          }
        }, [t._v("境外目的地")]), i("div", {
          class: t.choiceClass2,
          on: {
            click: t.choiceClick2
          }
        }, [t._v("境内目的地")])])])
      },
      rt = [],
      ct = {
        name: "CityChoice",
        props: {
          choice: Boolean
        },
        methods: {
          choiceClick1() {
            this.$emit("choice", !1)
          },
          choiceClick2() {
            this.$emit("choice", !0)
          }
        },
        computed: {
          choiceClass1() {
            return this.choice ? "chiceBut" : "chiceBut on"
          },
          choiceClass2() {
            return this.choice ? "chiceBut on" : "chiceBut"
          }
        }
      },
      ot = ct,
      lt = (i("wh+x"), Object(o["a"])(ot, nt, rt, !1, null, "7e080ad0", null)),
      dt = lt.exports,
      ut = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          ref: "wrapper",
          staticClass: "list"
        }, [i("div", [i("div", {
          staticClass: "area"
        }, [i("div", {
          staticClass: "title border-topbottom"
        }, [t._v("当前城市")]), i("div", {
          staticClass: "button-list"
        }, [i("div", {
          staticClass: "button-wrapper"
        }, [i("div", {
          staticClass: "button"
        }, [t._v(t._s(this.currentCity))])])])]), i("div", {
          staticClass: "area"
        }, [i("div", {
          staticClass: "title border-topbottom"
        }, [t._v("热门城市")]), i("div", {
          staticClass: "button-list"
        }, t._l(t.Recommend, function (e) {
          return t.Recommend.length ? i("div", {
            key: e.id,
            staticClass: "button-wrapper",
            on: {
              click: function (i) {
                t.cityClick(e.title)
              }
            }
          }, [i("div", {
            staticClass: "button"
          }, [t._v(t._s(e.title))])]) : t._e()
        }))]), t._l(t.City, function (e, s) {
          return t.City ? i("div", {
            key: s,
            staticClass: "area"
          }, [i("div", {
            ref: s,
            refInFor: !0,
            staticClass: "title border-topbottom"
          }, [t._v(t._s(s))]), i("div", {
            staticClass: "item-list"
          }, t._l(e, function (e) {
            return i("div", {
              key: e.id,
              staticClass: "item border-bottom",
              on: {
                click: function (i) {
                  t.cityClick(e.title)
                }
              }
            }, [t._v(t._s(e.title))])
          }))]) : t._e()
        })], 2)])
      },
      ht = [],
      mt = i("H7qB"),
      pt = {
        name: "CityList",
        props: {
          choice: Boolean,
          domesticCity: Object,
          domesticRecommend: Array,
          abroadCity: Object,
          abroadRecommend: Array,
          letter: String
        },
        computed: {
          City() {
            return this.choice ? this.domesticCity : this.abroadCity
          },
          Recommend() {
            return this.choice ? this.domesticRecommend : this.abroadRecommend
          },
          ...Object(v["c"])({
            currentCity: "city"
          })
        },
        watch: {
          letter() {
            if (this.letter) {
              const t = this.$refs[this.letter][0];
              this.scroll.scrollToElement(t)
            }
          }
        },
        methods: {
          cityClick(t) {
            this.changeCity(t), this.$router.push("/")
          },
          ...Object(v["b"])(["changeCity"])
        },
        mounted() {
          this.scroll = new mt["a"](this.$refs.wrapper, {
            click: !0
          })
        }
      },
      ft = pt,
      vt = (i("tCYq"), Object(o["a"])(ft, ut, ht, !1, null, "291d061b", null)),
      yt = vt.exports,
      Ct = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("ul", {
          staticClass: "list"
        }, t._l(t.City, function (e, s) {
          return i("li", {
            key: s,
            ref: e,
            refInFor: !0,
            staticClass: "item",
            on: {
              click: t.handleClick,
              touchstart: function (e) {
                return e.preventDefault(), t.handleTouchStart(e)
              },
              touchmove: t.handleTouchMove,
              touchend: t.handleTouchEnd
            }
          }, [t._v(t._s(s))])
        }))
      },
      bt = [],
      gt = {
        name: "CityAlphabet",
        props: {
          choice: Boolean,
          domesticCity: Object,
          abroadCity: Object
        },
        data() {
          return {
            touchStatus: !1
          }
        },
        methods: {
          handleClick(t) {
            this.$emit("change", t.target.innerText)
          },
          handleTouchStart() {
            this.touchStatus = !0
          },
          handleTouchMove(t) {},
          handleTouchEnd() {
            this.touchStatus = !1
          }
        },
        computed: {
          City() {
            return this.choice ? this.domesticCity : this.abroadCity
          }
        }
      },
      _t = gt,
      wt = (i("/wlS"), Object(o["a"])(_t, Ct, bt, !1, null, "66eff680", null)),
      kt = wt.exports,
      jt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "search"
        }, [i("router-link", {
          attrs: {
            to: "/"
          }
        }, [i("div", {
          staticClass: "header-left iconfont"
        }, [t._v("")])]), i("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.keyword,
            expression: "keyword"
          }],
          staticClass: "header-center iconfont",
          attrs: {
            type: "text",
            value: "",
            placeholder: "搜索地名请输汉字"
          },
          domProps: {
            value: t.keyword
          },
          on: {
            input: function (e) {
              e.target.composing || (t.keyword = e.target.value)
            }
          }
        }), i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.keyword,
            expression: "keyword"
          }],
          ref: "search",
          staticClass: "search-content"
        }, [i("div", [t._l(t.list, function (e) {
          return i("div", {
            key: e.id,
            staticClass: "search-item border-bottom",
            on: {
              click: function (i) {
                t.cityClick(e.title)
              }
            }
          }, [t._v(t._s(e.title))])
        }), i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.hasNoData,
            expression: "hasNoData"
          }],
          staticClass: "search-item border-bottom"
        }, [t._v("没有找到匹配数据")])], 2)])], 1)
      },
      Lt = [],
      Ot = {
        name: "CitySearch",
        props: {
          domesticCity: Object,
          abroadCity: Object,
          choice: Boolean
        },
        data() {
          return {
            Citys: {},
            list: [],
            keyword: ""
          }
        },
        computed: {
          City() {
            return this.choice ? this.domesticCity : this.abroadCity
          },
          hasNoData() {
            return !this.list.length
          }
        },
        watch: {
          keyword() {
            this.SearchItem(this.City)
          },
          choice() {
            this.choice ? this.Citys = this.domesticCity : this.Citys = this.abroadCity, this.SearchItem(this.Citys)
          }
        },
        methods: {
          SearchItem(t) {
            const e = this.keyword,
              i = [];
            for (let s in t) t[s].forEach(function (t) {
              t.title.indexOf(e) > -1 && "" != e && i.push(t)
            });
            this.list = i
          },
          cityClick(t) {
            this.changeCity(t), this.keyword = "", this.$router.push("/")
          },
          ...Object(v["b"])(["changeCity"])
        },
        mounted() {
          this.scroll = new mt["a"](this.$refs.search, {
            click: !0
          })
        }
      },
      St = Ot,
      xt = (i("5LqM"), Object(o["a"])(St, jt, Lt, !1, null, "50c80cec", null)),
      It = xt.exports,
      Et = {
        name: "City",
        data() {
          return {
            domesticCity: {},
            domesticRecommend: [],
            abroadCity: {},
            abroadRecommend: [],
            choice: !0,
            letter: " "
          }
        },
        components: {
          CityHeader: at,
          CityChoice: dt,
          CityList: yt,
          CityAlphabet: kt,
          CitySearch: It
        },
        methods: {
          letterChange(t) {
            this.letter = t
          },
          choiceClick(t) {
            this.choice = t
          },
          getCityInfo() {
            V.a.get("./api/city.json").then(this.grtCityInfoSucc)
          },
          grtCityInfoSucc(t) {
            if (t = t.data, t.ret && t.data) {
              const e = t.data;
              this.ret = !0, this.domesticCity = e.domestic.city, this.domesticRecommend = e.domestic.recommend.list, this.abroadCity = e.abroad.city, this.abroadRecommend = e.abroad.recommend.list
            }
          }
        },
        mounted() {
          this.getCityInfo()
        }
      },
      $t = Et,
      Bt = (i("u5Hw"), Object(o["a"])($t, z, W, !1, null, "14587bf0", null)),
      Tt = Bt.exports,
      Ht = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", [i("detail-bneer", {
          attrs: {
            images: t.images,
            bannerInfo: t.bannerInfo
          }
        }), i("detail-header"), i("detail-list", {
          attrs: {
            list: t.list
          }
        }), i("div", {
          staticClass: "cont"
        })], 1)
      },
      Rt = [],
      Mt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", [i("div", {
          staticClass: "banner",
          on: {
            click: t.bannerClick
          }
        }, [i("swiper", {
          attrs: {
            options: t.swiperOptions
          }
        }, [t._l(t.images, function (t, e) {
          return i("swiper-slide", {
            key: e
          }, [i("img", {
            staticClass: "banner-images",
            attrs: {
              src: t
            }
          })])
        }), i("div", {
          staticClass: "swiper-pagination",
          attrs: {
            slot: "pagination"
          },
          slot: "pagination"
        })], 2), i("div", {
          staticClass: "banner-info"
        }, [t._v(t._s(this.bannerInfo))])], 1), i("fade-animation", [i("gallary", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.showGallary,
            expression: "showGallary"
          }],
          attrs: {
            images: t.images
          },
          on: {
            close: t.gallaryClose
          }
        })], 1)], 1)
      },
      Dt = [],
      Nt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "gallary",
          on: {
            click: t.gallaryClick
          }
        }, [i("div", {
          staticClass: "wrappper"
        }, [i("swiper", {
          attrs: {
            options: t.swiperOptions
          }
        }, [t._l(t.images, function (t, e) {
          return i("swiper-slide", {
            key: e
          }, [i("img", {
            staticClass: "gallary-images",
            attrs: {
              src: t
            }
          })])
        }), i("div", {
          staticClass: "swiper-pagination",
          attrs: {
            slot: "pagination"
          },
          slot: "pagination"
        })], 2)], 1)])
      },
      Xt = [],
      Pt = {
        name: "gallary",
        props: {
          images: {
            type: Array,
            default () {
              return ["https://img.alicdn.com/bao/uploaded/i4/2175412743/TB2um1TnhTI8KJjSspiXXbM4FXa_!!2175412743.jpg_640x640q30.jpg", "https://img.alicdn.com/bao/uploaded/i4/TB1GQgzeRfM8KJjSZFOH94r5XXa_074451.jpg_640x640q30.jpg"]
            }
          }
        },
        data() {
          return {
            swiperOptions: {
              observer: !0,
              observeParents: !0,
              loop: !0,
              pagination: {
                el: ".swiper-pagination",
                type: "fraction"
              }
            }
          }
        },
        methods: {
          gallaryClick() {
            this.$emit("close")
          }
        }
      },
      At = Pt,
      Yt = (i("9fYL"), Object(o["a"])(At, Nt, Xt, !1, null, "1d27aac7", null)),
      qt = Yt.exports,
      Gt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("transition", [t._t("default")], 2)
      },
      Kt = [],
      Vt = {
        name: "FadeAnimation"
      },
      Ft = Vt,
      Ut = (i("Cgly"), Object(o["a"])(Ft, Gt, Kt, !1, null, "93889c8c", null)),
      Jt = Ut.exports,
      Zt = {
        name: "DetailBneer",
        props: {
          images: Array,
          bannerInfo: String
        },
        data() {
          return {
            showGallary: !1,
            swiperOptions: {
              observer: !0,
              observeParents: !0,
              delay: 3e3,
              autoplay: !0,
              loop: !0,
              pagination: {
                el: ".swiper-pagination"
              }
            }
          }
        },
        components: {
          gallary: qt,
          FadeAnimation: Jt
        },
        methods: {
          bannerClick() {
            this.showGallary = !0
          },
          gallaryClose() {
            this.showGallary = !1
          }
        }
      },
      zt = Zt,
      Wt = (i("xRMI"), Object(o["a"])(zt, Mt, Dt, !1, null, "e11acf02", null)),
      Qt = Wt.exports,
      te = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "header"
        }, [i("router-link", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.showBack,
            expression: "showBack"
          }],
          staticClass: "header-back iconfont",
          attrs: {
            to: "/",
            tag: "div"
          }
        }, [t._v("")]), i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !t.showBack,
            expression: "!showBack"
          }],
          staticClass: "header-fixed",
          style: t.opacityStyle
        }, [i("router-link", {
          staticClass: "header-fixed-back iconfont",
          attrs: {
            to: "/",
            tag: "div"
          }
        }, [t._v("")]), i("div", {
          staticClass: "header-title"
        }, [t._v("景点详情")])], 1)], 1)
      },
      ee = [],
      ie = {
        name: "DetailHeader",
        data() {
          return {
            showBack: !0,
            opacityStyle: {
              opacity: 0
            }
          }
        },
        methods: {
          headerScroll() {
            let t = document.documentElement.scrollTop;
            if (t > 60) {
              let e = t / 140;
              e > 1 && (e = 1), this.opacityStyle = {
                opacity: e
              }, this.showBack = !1
            } else this.showBack = !0
          }
        },
        activated() {
          window.addEventListener("scroll", this.headerScroll)
        },
        deactivated() {
          window.removeEventListener("scroll", this.headerScroll)
        }
      },
      se = ie,
      ae = (i("o22E"), Object(o["a"])(se, te, ee, !1, null, "1d61e9b8", null)),
      ne = ae.exports,
      re = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", t._l(t.list, function (e, s) {
          return i("div", {
            key: s,
            staticClass: "item"
          }, [i("div", {
            staticClass: "item-title border-bottom"
          }, [i("span", {
            staticClass: "item-title-icon"
          }), t._v("\n      " + t._s(e.title) + "\n    ")]), e.children ? i("div", {
            staticClass: "item-children"
          }, [i("detail-list", {
            attrs: {
              list: e.children
            }
          })], 1) : t._e()])
        }))
      },
      ce = [],
      oe = {
        name: "DetailList",
        props: {
          list: Array
        }
      },
      le = oe,
      de = (i("8sCz"), Object(o["a"])(le, re, ce, !1, null, "03fac955", null)),
      ue = de.exports,
      he = {
        name: "Detail",
        components: {
          DetailBneer: Qt,
          DetailHeader: ne,
          DetailList: ue
        },
        data() {
          return {
            list: [],
            bannerInfo: "",
            images: [],
            lastId: ""
          }
        },
        methods: {
          getDetailInfo() {
            V.a.get("./api/detail.json", {
              params: {
                id: this.$route.params.id
              }
            }).then(this.getDataSucc)
          },
          getDataSucc(t) {
            if (t = t.data, t.ret && t.data) {
              const e = t.data;
              this.list = e.list, this.bannerInfo = e.bannerInfo, this.images = e.images
            }
          }
        },
        mounted() {
          this.lastId = this.$route.params.id, this.getDetailInfo()
        },
        activated() {
          this.lastId === this.$route.params.id || (this.lastId = this.$route.params.id, this.getDetailInfo())
        }
      },
      me = he,
      pe = (i("EjOM"), Object(o["a"])(me, Ht, Rt, !1, null, "22abbf1b", null)),
      fe = pe.exports;
    s["a"].use(u["a"]);
    var ve = new u["a"]({
      routes: [{
        path: "/",
        name: "home",
        component: Z
      }, {
        path: "/city",
        name: "city",
        component: Tt
      }, {
        path: "/detail/:id",
        name: "detail",
        component: fe
      }],
      scrollBehavior(t, e, i) {
        return {
          x: 0,
          y: 0
        }
      }
    });
    let ye = "北京";
    try {
      localStorage.city && (ye = localStorage.city)
    } catch (t) {}
    var Ce = {
        city: ye
      },
      be = {
        changeCity(t, e) {
          t.city = e;
          try {
            localStorage.city = e
          } catch (t) {}
        }
      };
    s["a"].use(v["a"]);
    var ge = new v["a"].Store({
        state: Ce,
        actions: {},
        mutations: be
      }),
      _e = (i("PbQS"), i("yPTG"), i("VBR8"), i("/jzl")),
      we = i.n(_e),
      ke = (i("201c"), i("chKg")),
      je = i.n(ke);
    i("36R9");
    s["a"].config.productionTip = !1, we.a.attach(document.body), s["a"].config.productionTip = !1, we.a.attach(document.body), s["a"].use(je.a), new s["a"]({
      router: ve,
      store: ge,
      render: t => t(d)
    }).$mount("#app")
  },
  XVkY: function (t, e, i) {},
  YBri: function (t, e, i) {},
  YixN: function (t, e, i) {},
  ZNT7: function (t, e, i) {},
  alFK: function (t, e, i) {},
  ble3: function (t, e, i) {
    "use strict";
    var s = i("YixN"),
      a = i.n(s);
    a.a
  },
  jkkL: function (t, e, i) {},
  lIbj: function (t, e, i) {},
  m2qV: function (t, e, i) {
    "use strict";
    var s = i("S9dI"),
      a = i.n(s);
    a.a
  },
  o22E: function (t, e, i) {
    "use strict";
    var s = i("alFK"),
      a = i.n(s);
    a.a
  },
  "rk+l": function (t, e, i) {},
  sLZW: function (t, e, i) {},
  tCYq: function (t, e, i) {
    "use strict";
    var s = i("ZNT7"),
      a = i.n(s);
    a.a
  },
  "tU/Y": function (t, e, i) {
    "use strict";
    var s = i("+kEL"),
      a = i.n(s);
    a.a
  },
  u5Hw: function (t, e, i) {
    "use strict";
    var s = i("jkkL"),
      a = i.n(s);
    a.a
  },
  "wh+x": function (t, e, i) {
    "use strict";
    var s = i("lIbj"),
      a = i.n(s);
    a.a
  },
  xRMI: function (t, e, i) {
    "use strict";
    var s = i("OWaS"),
      a = i.n(s);
    a.a
  },
  xguS: function (t, e, i) {},
  yPTG: function (t, e, i) {}
});
//# sourceMappingURL=app.c0bfe68e.js.map