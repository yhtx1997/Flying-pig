(function (t) {
  function e(e) {
    for (var a, c, o = e[0], r = e[1], l = e[2], u = 0, h = []; u < o.length; u++) c = o[u], s[c] && h.push(s[c][0]), s[c] = 0;
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    d && d(e);
    while (h.length) h.shift()();
    return n.push.apply(n, l || []), i()
  }

  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], a = !0, o = 1; o < i.length; o++) {
        var r = i[o];
        0 !== s[r] && (a = !1)
      }
      a && (n.splice(e--, 1), t = c(c.s = i[0]))
    }
    return t
  }
  var a = {},
    s = {
      0: 0
    },
    n = [];

  function c(e) {
    if (a[e]) return a[e].exports;
    var i = a[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(i.exports, i, i.exports, c), i.l = !0, i.exports
  }
  c.m = t, c.c = a, c.d = function (t, e, i) {
    c.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, c.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, c.t = function (t, e) {
    if (1 & e && (t = c(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (c.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var a in t) c.d(i, a, function (e) {
        return t[e]
      }.bind(null, a));
    return i
  }, c.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return c.d(e, "a", e), e
  }, c.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, c.p = "";
  var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
    r = o.push.bind(o);
  o.push = e, o = o.slice();
  for (var l = 0; l < o.length; l++) e(o[l]);
  var d = r;
  n.push([0, 1]), i()
})({
  "+kEL": function (t, e, i) {},
  0: function (t, e, i) {
    t.exports = i("Vtdi")
  },
  "0yE7": function (t, e, i) {
    "use strict";
    var a = i("uN0a"),
      s = i.n(a);
    s.a
  },
  "2hNJ": function (t, e, i) {},
  "8sCz": function (t, e, i) {
    "use strict";
    var a = i("Sj+k"),
      s = i.n(a);
    s.a
  },
  "9fYL": function (t, e, i) {
    "use strict";
    var a = i("VjbT"),
      s = i.n(a);
    s.a
  },
  Bu9B: function (t, e, i) {},
  Cgly: function (t, e, i) {
    "use strict";
    var a = i("LqNu"),
      s = i.n(a);
    s.a
  },
  CirT: function (t, e) {
    window.onload = window.onresize = function () {
      var t = document.getElementsByTagName("html")[0].getBoundingClientRect().width,
        e = document.getElementsByTagName("html")[0];
      t > 640 ? (e.style.fontSize = "50px", e.style.margin = "0 auto") : e.style.fontSize = t / 12.8 + "px"
    }
  },
  IaQq: function (t, e, i) {},
  KTeX: function (t, e, i) {
    "use strict";
    var a = i("YBri"),
      s = i.n(a);
    s.a
  },
  KjEo: function (t, e, i) {},
  "L7+y": function (t, e, i) {},
  LqNu: function (t, e, i) {},
  NWp7: function (t, e, i) {},
  OWaS: function (t, e, i) {},
  PELR: function (t, e, i) {},
  PbQS: function (t, e, i) {},
  QVVx: function (t, e, i) {
    "use strict";
    var a = i("PELR"),
      s = i.n(a);
    s.a
  },
  Qooe: function (t, e, i) {},
  S9dI: function (t, e, i) {},
  "Sj+k": function (t, e, i) {},
  Uhgf: function (t, e, i) {
    "use strict";
    var a = i("v2ih"),
      s = i.n(a);
    s.a
  },
  UncG: function (t, e, i) {
    "use strict";
    var a = i("Bu9B"),
      s = i.n(a);
    s.a
  },
  VBR8: function (t, e, i) {},
  VjbT: function (t, e, i) {},
  Vtdi: function (t, e, i) {
    "use strict";
    i.r(e);
    var a = i("Kw5r"),
      s = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          attrs: {
            id: "app"
          }
        }, [i("keep-alive", {
          attrs: {
            exclude: "Detail"
          }
        }, [i("router-view")], 1)], 1)
      },
      n = [],
      c = {
        name: "app"
      },
      o = c,
      r = (i("Uhgf"), i("KHd+")),
      l = Object(r["a"])(o, s, n, !1, null, "15adacf1", null),
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
      g = (i("m2qV"), Object(r["a"])(C, p, f, !1, null, "6ba6f071", null)),
      b = g.exports,
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
      L = (i("KTeX"), Object(r["a"])(j, _, w, !1, null, "2590fb42", null)),
      O = L.exports,
      x = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "icons"
        }, [t.iconList.length ? i("swiper", {
          attrs: {
            options: t.swiperOption
          }
        }, [t._l(t.pages, function (e, a) {
          return i("swiper-slide", {
            key: a
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
      S = [],
      E = {
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
              const a = Math.floor(i / 8);
              t[a] || (t[a] = []), t[a].push(e)
            }), t
          }
        }
      },
      B = E,
      I = (i("oaVu"), Object(r["a"])(B, x, S, !1, null, "7e4a2f36", null)),
      $ = I.exports,
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
      D = R,
      N = (i("0yE7"), Object(r["a"])(D, T, H, !1, null, "7cfae3cc", null)),
      G = N.exports,
      P = function () {
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
      V = [function () {
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
      K = A,
      X = (i("QVVx"), Object(r["a"])(K, P, V, !1, null, "1ce65f54", null)),
      M = X.exports,
      U = i("vDqi"),
      q = i.n(U),
      F = {
        name: "Home",
        components: {
          HomeHeader: b,
          HomeSwiper: O,
          HomeIcons: $,
          HomeRandom: G,
          HomeLike: M
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
            q.a.get("./api/index.json").then(this.getHomeInfdSucc)
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
      J = F,
      Q = (i("UncG"), Object(r["a"])(J, h, m, !1, null, "5e5f15f4", null)),
      z = Q.exports,
      Y = function () {
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
      Z = function () {
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
      at = (i("tU/Y"), Object(r["a"])(it, Z, tt, !1, null, "1fc49728", null)),
      st = at.exports,
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
      ct = [],
      ot = {
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
      rt = ot,
      lt = (i("ouvW"), Object(r["a"])(rt, nt, ct, !1, null, "1c6bcece", null)),
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
        }))]), t._l(t.City, function (e, a) {
          return t.City ? i("div", {
            key: a,
            staticClass: "area"
          }, [i("div", {
            ref: a,
            refInFor: !0,
            staticClass: "title border-topbottom"
          }, [t._v(t._s(a))]), i("div", {
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
          this.scroll = new mt["a"](this.$refs.wrapper)
        }
      },
      ft = pt,
      vt = (i("pGfD"), Object(r["a"])(ft, ut, ht, !1, null, "4e16228f", null)),
      yt = vt.exports,
      Ct = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("ul", {
          staticClass: "list"
        }, t._l(t.City, function (e, a) {
          return i("li", {
            key: a,
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
          }, [t._v(t._s(a))])
        }))
      },
      gt = [],
      bt = {
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
      _t = bt,
      wt = (i("ndni"), Object(r["a"])(_t, Ct, gt, !1, null, "cf7e673a", null)),
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
            for (let a in t) t[a].forEach(function (t) {
              t.title.indexOf(e) > -1 && "" != e && i.push(t)
            });
            this.list = i
          },
          cityClick(t) {
            this.changeCity(t), this.keyword="", this.$router.push("/")
          },
          ...Object(v["b"])(["changeCity"])
        },
        mounted() {
          this.scroll = new mt["a"](this.$refs.search)
        }
      },
      xt = Ot,
      St = (i("d8xo"), Object(r["a"])(xt, jt, Lt, !1, null, "46fcd34a", null)),
      Et = St.exports,
      Bt = {
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
          CityHeader: st,
          CityChoice: dt,
          CityList: yt,
          CityAlphabet: kt,
          CitySearch: Et
        },
        methods: {
          letterChange(t) {
            this.letter = t
          },
          choiceClick(t) {
            this.choice = t
          },
          getCityInfo() {
            q.a.get("./api/city.json").then(this.grtCityInfoSucc)
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
      It = Bt,
      $t = (i("u5Hw"), Object(r["a"])(It, Y, W, !1, null, "14587bf0", null)),
      Tt = $t.exports,
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
      Dt = function () {
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
      Nt = [],
      Gt = function () {
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
      Pt = [],
      Vt = {
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
      At = Vt,
      Kt = (i("9fYL"), Object(r["a"])(At, Gt, Pt, !1, null, "1d27aac7", null)),
      Xt = Kt.exports,
      Mt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("transition", [t._t("default")], 2)
      },
      Ut = [],
      qt = {
        name: "FadeAnimation"
      },
      Ft = qt,
      Jt = (i("Cgly"), Object(r["a"])(Ft, Mt, Ut, !1, null, "93889c8c", null)),
      Qt = Jt.exports,
      zt = {
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
          gallary: Xt,
          FadeAnimation: Qt
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
      Yt = zt,
      Wt = (i("xRMI"), Object(r["a"])(Yt, Dt, Nt, !1, null, "e11acf02", null)),
      Zt = Wt.exports,
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
      ae = ie,
      se = (i("o22E"), Object(r["a"])(ae, te, ee, !1, null, "1d61e9b8", null)),
      ne = se.exports,
      ce = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", t._l(t.list, function (e, a) {
          return i("div", {
            key: a,
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
      oe = [],
      re = {
        name: "DetailList",
        props: {
          list: Array
        }
      },
      le = re,
      de = (i("8sCz"), Object(r["a"])(le, ce, oe, !1, null, "03fac955", null)),
      ue = de.exports,
      he = {
        name: "Detail",
        components: {
          DetailBneer: Zt,
          DetailHeader: ne,
          DetailList: ue
        },
        data() {
          return {
            list: [],
            bannerInfo: "",
            images: []
          }
        },
        methods: {
          getDetailInfo() {
            q.a.get("./api/detail.json").then(this.getDataSucc)
          },
          getDataSucc(t) {
            if (t = t.data, t.ret && t.data) {
              const e = t.data;
              this.list = e.list, this.bannerInfo = e.bannerInfo, this.images = e.images
            }
          }
        },
        mounted() {
          this.getDetailInfo()
        }
      },
      me = he,
      pe = (i("uGi2"), Object(r["a"])(me, Ht, Rt, !1, null, "28d42254", null)),
      fe = pe.exports;
    a["a"].use(u["a"]);
    var ve = new u["a"]({
      routes: [{
        path: "/",
        name: "home",
        component: z
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
      ge = {
        changeCity(t, e) {
          t.city = e;
          try {
            localStorage.city = e
          } catch (t) {}
        }
      };
    a["a"].use(v["a"]);
    var be = new v["a"].Store({
        state: Ce,
        actions: {},
        mutations: ge
      }),
      _e = (i("PbQS"), i("yPTG"), i("VBR8"), i("/jzl")),
      we = i.n(_e),
      ke = (i("CirT"), i("201c"), i("chKg")),
      je = i.n(ke);
    i("36R9");
    a["a"].config.productionTip = !1, we.a.attach(document.body), a["a"].config.productionTip = !1, we.a.attach(document.body), a["a"].use(je.a), new a["a"]({
      router: ve,
      store: be,
      render: t => t(d)
    }).$mount("#app")
  },
  YBri: function (t, e, i) {},
  alFK: function (t, e, i) {},
  d8xo: function (t, e, i) {
    "use strict";
    var a = i("Qooe"),
      s = i.n(a);
    s.a
  },
  jkkL: function (t, e, i) {},
  m2qV: function (t, e, i) {
    "use strict";
    var a = i("S9dI"),
      s = i.n(a);
    s.a
  },
  ndni: function (t, e, i) {
    "use strict";
    var a = i("L7+y"),
      s = i.n(a);
    s.a
  },
  o22E: function (t, e, i) {
    "use strict";
    var a = i("alFK"),
      s = i.n(a);
    s.a
  },
  oaVu: function (t, e, i) {
    "use strict";
    var a = i("2hNJ"),
      s = i.n(a);
    s.a
  },
  ouvW: function (t, e, i) {
    "use strict";
    var a = i("IaQq"),
      s = i.n(a);
    s.a
  },
  pGfD: function (t, e, i) {
    "use strict";
    var a = i("NWp7"),
      s = i.n(a);
    s.a
  },
  "tU/Y": function (t, e, i) {
    "use strict";
    var a = i("+kEL"),
      s = i.n(a);
    s.a
  },
  u5Hw: function (t, e, i) {
    "use strict";
    var a = i("jkkL"),
      s = i.n(a);
    s.a
  },
  uGi2: function (t, e, i) {
    "use strict";
    var a = i("KjEo"),
      s = i.n(a);
    s.a
  },
  uN0a: function (t, e, i) {},
  v2ih: function (t, e, i) {},
  xRMI: function (t, e, i) {
    "use strict";
    var a = i("OWaS"),
      s = i.n(a);
    s.a
  },
  yPTG: function (t, e, i) {}
});
//# sourceMappingURL=app.9afea325.js.map
