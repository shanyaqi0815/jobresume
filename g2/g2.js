! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.G2_3 = e() : t.G2_3 = e() }(this, function() { return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports } var n = {}; return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 189) }([function(t, e, n) {
        function r(t, e) { for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n]) }

        function i(t, e, n) { n = n || 0; for (var r in e)
                if (e.hasOwnProperty(r)) { var s = e[r];
                    null !== s && a.isPlainObject(s) ? (a.isPlainObject(t[r]) || (t[r] = {}), n < o ? i(t[r], e[r], n + 1) : t[r] = e[r]) : a.isArray(s) ? (t[r] = [], t[r] = t[r].concat(s)) : void 0 !== s && (t[r] = e[r]) } } var o = 5,
            a = { each: n(317), map: n(318), isObject: n(7), isNumber: n(97), isString: n(64), isFunction: n(25), isFinite: n(333), isBoolean: n(96), isEmpty: n(98), lowerFirst: n(334), upperFirst: n(124), upperCase: n(335), isNil: n(63), isNull: n(344), isArray: n(4), isDate: n(345), isPlainObject: n(123), toArray: n(133), indexOf: n(347), assign: n(50), groupBy: n(349), cloneDeep: n(168), maxBy: n(353), minBy: n(355), round: n(357), filter: n(359), isEqualWith: n(361), isEqual: n(129), replace: n(362), union: n(363), pick: n(370), snapEqual: function(t, e) { return Math.abs(t - e) < .001 }, fixedBase: function(t, e) { var n = e.toString(),
                        r = n.indexOf("."); if (-1 === r) return Math.round(t); var i = n.substr(r + 1).length; return i > 20 && (i = 20), parseFloat(t.toFixed(i)) }, mix: function(t, e, n, i) { return e && r(t, e), n && r(t, n), i && r(t, i), t }, inArray: function(t, e) { return t.indexOf(e) >= 0 }, wrapBehavior: function(t, e) { if (t["_wrap_" + e]) return t["_wrap_" + e]; var n = function(n) { t[e](n) }; return t["_wrap_" + e] = n, n }, getWrapBehavior: function(t, e) { return t["_wrap_" + e] }, toAllPadding: function(t) { var e = 0,
                        n = 0,
                        r = 0,
                        i = 0; return a.isNumber(t) || a.isString(t) ? e = n = r = i = t : a.isArray(t) ? (e = t[0], r = a.isNil(t[1]) ? t[0] : t[1], i = a.isNil(t[2]) ? t[0] : t[2], n = a.isNil(t[3]) ? r : t[3]) : a.isObject(t) && (e = t.top || 0, r = t.right || 0, i = t.bottom || 0, n = t.left || 0), [e, r, i, n] }, substitute: function(t, e) { return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, n) { return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? "" : e[n] }) : t } };
        a.deepMix = function() { for (var t = a.toArray(arguments), e = t[0], n = 1; n < t.length; n++) { i(e, t[n]) } return e }, a.Array = { merge: function(t) { for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]); return e }, values: function(t, e) { for (var n = [], r = {}, i = 0; i < t.length; i++) { var o = t[i][e];
                    a.isNil(o) || (a.isArray(o) || (o = [o]), a.each(o, function(t) { r[t] || (n.push(t), r[t] = !0) })) } return n }, getRange: function(t) { if (!t.length) return { min: 0, max: 0 }; if (a.isArray(t[0])) { for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
                    t = e } var r = Math.max.apply(null, t); return { min: Math.min.apply(null, t), max: r } }, firstValue: function(t, e) { for (var n = null, r = 0; r < t.length; r++) { var i = t[r][e]; if (!a.isNil(i)) { n = a.isArray(i) ? i[0] : i; break } } return n }, group: function(t, e) { if (!e) return [t]; var n = a.Array.groupToMap(t, e),
                    r = []; for (var i in n) r.push(n[i]); return r }, groupToMap: function(t, e) { if (!e) return { 0: t }; if (!a.isFunction(e)) { var n = a.isArray(e) ? e : e.replace(/\s+/g, "").split("*");
                    e = function(t) { for (var e = "_", r = 0, i = n.length; r < i; r++) e += t[n[r]] && t[n[r]].toString(); return e } } return a.groupBy(t, e) }, remove: function(t, e) { var n = a.indexOf(t, e); - 1 !== n && t.splice(n, 1) } }, t.exports = a }, function(t, e, n) {
        function r(t) { for (var e in a) a.hasOwnProperty(e) && delete a[e]; var n = {};
            n = i.isObject(t) ? t : -1 !== i.indexOf(Object.keys(o), t) ? o[t] : o.default, i.deepMix(a, s, n), a.setTheme = r } var i = n(0),
            o = n(386),
            a = {},
            s = { version: "3.0.0", trackable: !0, animate: !0, snapArray: [0, 1, 2, 4, 5, 10], snapCountArray: [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 3, 4, 5, 6, 7.5, 8, 10], widthRatio: { column: .5, rose: .9999999, multiplePie: 1 / 1.3 }, showSinglePoint: !1, connectNulls: !1, scales: {} };
        r("default"), t.exports = a }, function(t, e, n) { t.exports = { Canvas: n(190), Group: n(136), Shape: n(5), Rect: n(148), Circle: n(149), Ellipse: n(150), Path: n(151), Text: n(152), Line: n(153), Image: n(154), Polygon: n(155), Polyline: n(156), Arc: n(157), Fan: n(158), Cubic: n(159), Quadratic: n(160), Marker: n(161), PathUtil: n(79), MatrixUtil: n(8), DomUtil: n(134), Event: n(135) } }, function(t, e, n) { var r = n(62),
            i = n(134),
            o = {};
        r.merge(o, r, i, { mixin: function(t, e) { var n = t.CFG ? "CFG" : "ATTRS"; if (t && e) { t._mixins = e, t[n] = t[n] || {}; var r = {};
                    o.each(e, function(e) { o.augment(t, e); var i = e[n];
                        i && o.merge(r, i) }), t[n] = o.merge(r, t[n]) } } }), t.exports = o }, function(t, e) { var n = Array.isArray;
        t.exports = n }, function(t, e, n) { var r = n(3),
            i = n(137),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.ATTRS = {}, r.extend(a, i), r.augment(a, { isShape: !0, createPath: function() {}, drawInner: function(t) { var e = this.__attrs;
                this.createPath(t); var n = t.globalAlpha; if (this.hasFill()) { var i = e.fillOpacity;
                    r.isNil(i) || 1 === i ? t.fill() : (t.globalAlpha = i, t.fill(), t.globalAlpha = n) } if (this.hasStroke()) { if (this.__attrs.lineWidth > 0) { var o = e.strokeOpacity;
                        r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke() } } }, isPointInPath: function() { return !1 }, isHitBox: function() { return !0 }, isHit: function(t, e) { var n = [t, e, 1]; if (this.invert(n), this.isHitBox()) { var r = this.getBBox(); if (r && !o.box(r.minX, r.maxX, r.minY, r.maxY, n[0], n[1])) return !1 } var i = this.__attrs.clip; return i ? !!i.inside(t, e) && this.isPointInPath(n[0], n[1]) : this.isPointInPath(n[0], n[1]) }, calculateBox: function() { return null }, clearTotalMatrix: function() { this.__cfg.totalMatrix = null, this.__cfg.region = null }, clearBBox: function() { this.__cfg.box = null, this.__cfg.region = null }, getBBox: function() { var t = this.__cfg.box; return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this.__cfg.box = t), t } }), t.exports = a }, function(t, e, n) { var r = n(85),
            i = n(86),
            o = n(55),
            a = n(87);
        t.exports = { line: function(t, e, n, i, o, a, s) { var u = r.box(t, e, n, i, o); if (!this.box(u.minX, u.maxX, u.minY, u.maxY, a, s)) return !1; var c = r.pointDistance(t, e, n, i, a, s); return !isNaN(c) && c <= o / 2 }, polyline: function(t, e, n, r) { var i = t.length - 1; if (i < 1) return !1; for (var o = 0; o < i; o++) { var a = t[o][0],
                        s = t[o][1],
                        u = t[o + 1][0],
                        c = t[o + 1][1]; if (this.line(a, s, u, c, e, n, r)) return !0 } return !1 }, cubicline: function(t, e, n, r, i, a, s, u, c, l, h) { return o.pointDistance(t, e, n, r, i, a, s, u, l, h) <= c / 2 }, quadraticline: function(t, e, n, r, o, a, s, u, c) { return i.pointDistance(t, e, n, r, o, a, u, c) <= s / 2 }, arcline: function(t, e, n, r, i, o, s, u, c) { return a.pointDistance(t, e, n, r, i, o, u, c) <= s / 2 }, rect: function(t, e, n, r, i, o) { return t <= i && i <= t + n && e <= o && o <= e + r }, circle: function(t, e, n, r, i) { return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2) }, box: function(t, e, n, r, i, o) { return t <= i && i <= e && n <= o && o <= r } } }, function(t, e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { var e = void 0 === t ? "undefined" : n(t); return null != t && ("object" == e || "function" == e) } }, function(t, e, n) { var r = n(62),
            i = n(283),
            o = n(284),
            a = n(285);
        a.angle = function(t, e) { var n = a.dot(t, e) / (a.length(t) * a.length(e)); return Math.acos(r.clamp(n, -1, 1)) }, a.direction = function(t, e) { return t[0] * e[1] - e[0] * t[1] }, a.angleTo = function(t, e, n) { var r = a.angle(t, e),
                i = a.direction(t, e) >= 0; return n ? i ? 2 * Math.PI - r : r : i ? r : 2 * Math.PI - r }, a.vertical = function(t, e, n) { return n ? (t[0] = e[1], t[1] = -1 * e[0]) : (t[0] = -1 * e[1], t[1] = e[0]), t }, i.translate = function(t, e, n) { var r = new Array(9); return i.fromTranslation(r, n), i.multiply(t, r, e) }, i.rotate = function(t, e, n) { var r = new Array(9); return i.fromRotation(r, n), i.multiply(t, r, e) }, i.scale = function(t, e, n) { var r = new Array(9); return i.fromScaling(r, n), i.multiply(t, r, e) }, t.exports = { mat3: i, vec2: a, vec3: o, transform: function(t, e) { return t = r.clone(t), r.each(e, function(e) { switch (e[0]) {
                        case "t":
                            i.translate(t, t, [e[1], e[2]]); break;
                        case "s":
                            i.scale(t, t, [e[1], e[2]]); break;
                        case "r":
                            i.rotate(t, t, e[1]); break;
                        case "m":
                            i.multiply(t, t, e[1]); break;
                        default:
                            return !1 } }), t } } }, function(t, e, n) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(95),
            o = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
            a = i || o || Function("return this")();
        t.exports = a }, function(t, e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { return null != t && "object" == (void 0 === t ? "undefined" : n(t)) } }, function(t, e, n) { var r = n(15),
            i = n(192),
            o = n(193),
            a = "[object Null]",
            s = "[object Undefined]",
            u = r ? r.toStringTag : void 0;
        t.exports = function(t) { return null == t ? void 0 === t ? s : a : u && u in Object(t) ? i(t) : o(t) } }, function(t, e, n) { var r = n(25),
            i = n(66);
        t.exports = function(t) { return null != t && i(t.length) && !r(t) } }, function(t, e, n) {
        function r(t) { return s.isArray(t) ? t : s.isString(t) ? t.split("*") : [t] }

        function i(t) { return s.isString(t) && (t = [t]), s.each(t, function(e, n) { s.isObject(e) || (t[n] = { type: e }) }), t } var o = n(90),
            a = n(380),
            s = n(0),
            u = n(1),
            c = n(388),
            l = n(393),
            h = n(93),
            f = n(404),
            p = n(405),
            g = n(406),
            d = ["size", "shape", "color"],
            y = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return s.assign(r, f, p, g), r.get("container") && r._initContainer(), r._initOptions(), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { _id: null, type: "base", coord: null, attrs: {}, view: null, data: [], scales: {}, container: null, labelContainer: null, shapeContainer: null, attrOptions: {}, styleOptions: null, selectedOptions: null, hasDefaultAdjust: !1, adjusts: null, shapeType: null, generatePoints: !1, sortable: !1, labelCfg: null, shareTooltip: !0, tooltipCfg: null, animate: !0, animateCfg: null } }, e.prototype._initOptions = function() { var t = this.get("adjusts");
                    t && (t = i(t), this.set("adjusts", t)) }, e.prototype._createScale = function(t) { var e = this.get("scales"),
                        n = e[t]; return n || (n = this.get("view").createScale(t), e[t] = n), n }, e.prototype._setAttrOptions = function(t, e) { this.get("attrOptions")[t] = e }, e.prototype._createAttrOption = function(t, e, n, r) { var i = {};
                    i.field = e, n ? s.isFunction(n) ? i.callback = n : i.values = n : "color" !== t && (i.values = r), this._setAttrOptions(t, i) }, e.prototype.position = function(t) { return this._setAttrOptions("position", { field: t }), this }, e.prototype.color = function(t, e) { return this._createAttrOption("color", t, e, u.colors), this }, e.prototype.size = function(t, e) { return this._createAttrOption("size", t, e, u.sizes), this }, e.prototype.shape = function(t, e) { var n = this.get("type"),
                        r = u.shapes[n] || []; return this._createAttrOption("shape", t, e, r), this }, e.prototype.opacity = function(t, e) { return this._createAttrOption("opacity", t, e, u.opacities), this }, e.prototype.style = function(t, e) { var n = this.get("styleOptions");
                    n || (n = {}, this.set("styleOptions", n)), s.isObject(t) && (e = t, t = null); var i = void 0; return t && (i = r(t)), n.fields = i, n.style = e, this }, e.prototype.label = function(t, e, n) { var i = this.get("labelCfg");
                    i || (i = {}, this.set("labelCfg", i)); var o = void 0; return t && (o = r(t)), i.fields = o, s.isFunction(e) ? (n || (n = {}), n.content = e) : s.isObject(e) && (n = e), i.cfg = n, this }, e.prototype.tooltip = function(t, e) { var n = this.get("tooltipCfg"); if (n || (n = {}), !1 === t) this.set("tooltipCfg", !1);
                    else { var i = void 0;
                        t && (i = r(t)), n.fields = i, n.cfg = e } return this.set("tooltipCfg", n), this }, e.prototype.animate = function(t) { return this.set("animateCfg", t), this }, e.prototype.active = function(t) { return this.set("allowActive", t), this }, e.prototype.adjust = function(t) { return this.get("hasDefaultAdjust") || (t && (t = i(t)), this.set("adjusts", t)), this }, e.prototype.select = function(t, e) { return !1 === t ? this.set("allowSelect", !1) : s.isObject(t) ? (this.set("allowSelect", !0), this.set("selectedOptions", t)) : (this.set("allowSelect", !0), this.set("selectedOptions", e)), this }, e.prototype.hasAdjust = function(t) { var e = this.get("adjusts"); if (!t) return !1; var n = !1; return s.each(e, function(e) { if (e.type === t) return n = !0, !1 }), n }, e.prototype.hasStack = function() { var t = this.get("isStacked"); return s.isNil(t) && (t = this.hasAdjust("stack"), this.set("isStacked", t)), t }, e.prototype.isInCircle = function() { var t = this.get("coord"); return t && t.isPolar }, e.prototype._initContainer = function() { if (!this.get("shapeContainer")) { var t = this.get("container");
                        this.set("shapeContainer", t.addGroup()) } }, e.prototype.init = function() { var t = this; if (t._initContainer(), t._initAttrs(), t.get("tooltipCfg") && t.get("tooltipCfg").fields) { var e = t.get("tooltipCfg").fields;
                        s.each(e, function(e) { t._createScale(e) }) } var n = t._processData();
                    t.get("adjusts") && t._adjust(n), t.set("dataArray", n) }, e.prototype._initAttrs = function() { var t = this.get("attrs"),
                        e = this.get("attrOptions"),
                        n = this.get("coord"),
                        i = !1; for (var o in e)
                        if (e.hasOwnProperty(o)) { var c = e[o],
                                l = s.upperFirst(o),
                                h = r(c.field); "position" === o && (c.coord = n, 1 === h.length && "theta" === n.type && (h.unshift("1"), i = !0)); for (var f = [], p = 0; p < h.length; p++) { var g = h[p],
                                    d = this._createScale(g); "color" === o && s.isNil(c.values) && (d.values.length <= 8 ? c.values = i ? u.colors_pie : u.colors : d.values.length <= 16 ? c.values = i ? u.colors_pie_16 : u.colors_16 : c.values = u.colors_24, s.isNil(c.values) && (c.values = u.colors)), f.push(d) } if ("theta" === n.type && "position" === o && f.length > 1) { var y = f[1];
                                y.change({ nice: !1, min: 0, max: Math.max.apply(null, y.values) }) } c.scales = f; var v = new a[l](c);
                            t[o] = v } }, e.prototype._processData = function() { for (var t = this.get("data"), e = [], n = this._groupData(t), r = 0; r < n.length; r++) { var i = n[r],
                            o = this._saveOrigin(i);
                        this._numberic(o), e.push(o) } return e }, e.prototype._groupData = function(t) { var e = this._getGroupScales().map(function(t) { return t.field }); return s.Array.group(t, e) }, e.prototype._saveOrigin = function(t) { for (var e = [], n = 0; n < t.length; n++) { var r = t[n],
                            i = {}; for (var o in r) i[o] = r[o];
                        i._origin = r, e.push(i) } return e }, e.prototype._numberic = function(t) { for (var e = this.getAttr("position").scales, n = 0; n < t.length; n++)
                        for (var r = t[n], i = 0; i < Math.min(2, e.length); i++) { var o = e[i]; if (o.isCategory) { var a = o.field;
                                r[a] = o.translate(r[a]) } } }, e.prototype._getGroupScales = function() { var t = this.get("groupScales"); if (!t) { t = []; var e = this.get("attrs");
                        s.each(e, function(e) { if (-1 !== d.indexOf(e.type)) { var n = e.scales;
                                s.each(n, function(e) { e.isCategory && -1 === s.indexOf(t, e) && t.push(e) }) } }), this.set("groupScales", t) } return t }, e.prototype._updateStackRange = function(t, e, n) { for (var r = s.Array.merge(n), i = e.min, o = e.max, a = 0; a < r.length; a++) { var u = r[a],
                            c = Math.min.apply(null, u[t]),
                            l = Math.max.apply(null, u[t]);
                        c < i && (i = c), l > o && (o = l) }(i < e.min || o > e.max) && e.change({ min: i, max: o }) }, e.prototype._adjust = function(t) { var e = this,
                        n = e.get("adjusts"),
                        r = e.getYScale(),
                        i = e.getXScale(),
                        o = i.field,
                        a = r ? r.field : null;
                    s.each(n, function(n) { var u = s.mix({ xField: o, yField: a }, n),
                            l = s.upperFirst(n.type); if ("Dodge" === l) { var h = []; if (i.isCategory || i.isIdentity) h.push("x");
                            else { if (r) throw new Error("dodge is not support linear attribute, please use category attribute!");
                                h.push("y") } u.adjustNames = h } else if ("Stack" === l) { var f = e.get("coord"); if (!r) { u.height = f.getHeight(); var p = e.getDefaultValue("size") || 3;
                                u.size = p } f.isTransposed || (u.reverseOrder = !0) } new c[l](u).processAdjust(t), "Stack" === l && r && e._updateStackRange(a, r, t) }) }, e.prototype.setCoord = function(t) { this.set("coord", t); var e = this.getAttr("position");
                    this.get("shapeContainer").setMatrix(t.matrix), e && (e.coord = t) }, e.prototype.paint = function() { var t = this.get("dataArray"),
                        e = [],
                        n = this.getShapeFactory();
                    n.setCoord(this.get("coord")); var r = this.get("shapeContainer");
                    this._beforeMapping(t); for (var i = 0; i < t.length; i++) { var o = t[i],
                            a = i;
                        o = this._mapping(o), e.push(o), this.draw(o, r, n, a) } this.get("labelCfg") && this._addLabels(s.union.apply(null, e)), this.get("sortable") ? this.set("dataArray", e) : this._sort(e) }, e.prototype._sort = function(t) { var e = this.getXScale(),
                        n = e.field;
                    s.each(t, function(t) { t.sort(function(t, r) { return e.translate(t._origin[n]) - e.translate(r._origin[n]) }) }), this.set("dataArray", t) }, e.prototype._beforeMapping = function(t) { var e = this; if (e.get("sortable")) { var n = e.getXScale(),
                            r = n.field;
                        s.each(t, function(t) { t.sort(function(t, e) { return n.translate(t[r]) - n.translate(e[r]) }) }) } e.get("generatePoints") && (s.each(t, function(t) { e._generatePoints(t) }), s.each(t, function(e, n) { var r = t[n + 1];
                        r && (e[0].nextPoints = r[0].points) })) }, e.prototype._addLabels = function(t) { var e = this,
                        n = e.get("type"),
                        r = e.get("coord"),
                        i = l.getLabelsClass(r.type, n),
                        o = e.get("container"),
                        a = s.map(e.get("labelCfg").fields, function(t) { return e._createScale(t) }),
                        u = o.addGroup(i, { _id: this.get("_id"), labelCfg: s.mix({ scales: a }, e.get("labelCfg")), coord: r, geom: e, geomType: n });
                    u.showLabels(t), e.set("labelContainer", u) }, e.prototype.getShapeFactory = function() { var t = this.get("shapeFactory"); if (!t) { var e = this.get("shapeType");
                        t = h.getShapeFactory(e), this.set("shapeFactory", t) } return t }, e.prototype._generatePoints = function(t) { for (var e = this.getShapeFactory(), n = this.getAttr("shape"), r = 0; r < t.length; r++) { var i = t[r],
                            o = this.createShapePointsCfg(i),
                            a = n ? this._getAttrValues(n, i) : null,
                            s = e.getShapePoints(a, o);
                        i.points = s } }, e.prototype.createShapePointsCfg = function(t) { var e = this.getXScale(),
                        n = this.getYScale(),
                        r = this._normalizeValues(t[e.field], e),
                        i = void 0; return i = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1, { x: r, y: i, y0: n ? n.scale(this.getYMinValue()) : void 0 } }, e.prototype.getYMinValue = function() { var t = this.getYScale().min; return t >= 0 ? t : 0 }, e.prototype._normalizeValues = function(t, e) { var n = []; if (s.isArray(t))
                        for (var r = 0; r < t.length; r++) { var i = t[r];
                            n.push(e.scale(i)) } else n = e.scale(t); return n }, e.prototype._mapping = function(t) { for (var e = this.get("attrs"), n = [], r = 0; r < t.length; r++) { var i = t[r],
                            o = {};
                        o._origin = i._origin, o.points = i.points, o.nextPoints = i.nextPoints; for (var a in e)
                            if (e.hasOwnProperty(a)) { var u = e[a],
                                    c = u.names,
                                    l = this._getAttrValues(u, i); if (c.length > 1)
                                    for (var h = 0; h < l.length; h++) { var f = l[h];
                                        o[c[h]] = s.isArray(f) && 1 === f.length ? f[0] : f } else o[c[0]] = 1 === l.length ? l[0] : l }
                        n.push(o) } return n }, e.prototype._getAttrValues = function(t, e) { for (var n = t.scales, r = [], i = 0; i < n.length; i++) { var o = n[i],
                            a = o.field; "identity" === o.type ? r.push(o.value) : r.push(e[a]) } return t.mapping.apply(t, r) }, e.prototype.getAttrValue = function(t, e) { var n = this.getAttr(t),
                        r = null; if (n) { r = this._getAttrValues(n, e)[0] } return r }, e.prototype.getDefaultValue = function(t) { var e = this.get(t),
                        n = this.getAttr(t); if (n) { var r = n.getScale(t); "identity" === r.type && (e = r.value) } return e }, e.prototype.draw = function(t, e, n, r) { for (var i = 0; i < t.length; i++) { var o = t[i];
                        this.drawPoint(o, e, n, r + i) } }, e.prototype.getCallbackCfg = function(t, e, n) { if (!t) return e; var r = {},
                        i = t.map(function(t) { return n[t] }); return s.each(e, function(t, e) { s.isFunction(t) ? r[e] = t.apply(null, i) : r[e] = t }), r }, e.prototype._getShapeId = function(t) { var e = this.get("_id"),
                        n = this.get("keyFields"); if (n && n.length > 0) s.each(n, function(n) { e += "-" + t[n] });
                    else { var r = this.get("type"),
                            i = this.getXScale(),
                            o = this.getYScale(),
                            a = i.field || "x",
                            u = o.field || "y",
                            c = t[u],
                            l = void 0;
                        l = i.isIdentity ? i.value : t[a], e += "interval" === r || "schema" === r ? "-" + l : "line" === r || "area" === r || "path" === r ? "-" + r : "-" + l + "-" + c; var h = this._getGroupScales();
                        s.isEmpty(h) || s.each(h, function(n) { var r = n.field; "identity" !== n.type && (e += "-" + t[r]) }) } return e }, e.prototype.getDrawCfg = function(t) { var e = { origin: t, x: t.x, y: t.y, color: t.color, size: t.size, shape: t.shape, isInCircle: this.isInCircle(), opacity: t.opacity },
                        n = this.get("styleOptions"); return n && n.style && (e.style = this.getCallbackCfg(n.fields, n.style, t._origin)), this.get("generatePoints") && (e.points = t.points, e.nextPoints = t.nextPoints), this.get("animate") && (e._id = this._getShapeId(t._origin)), e }, e.prototype.drawPoint = function(t, e, n, r) { var i = t.shape,
                        o = this.getDrawCfg(t),
                        a = n.drawShape(i, o, e);
                    a.setSilent("index", r), a.setSilent("coord", this.get("coord")), this.get("animate") && this.get("animateCfg") && a.setSilent("animateCfg", this.get("animateCfg")) }, e.prototype.getAttr = function(t) { return this.get("attrs")[t] }, e.prototype.getXScale = function() { return this.getAttr("position").scales[0] }, e.prototype.getYScale = function() { return this.getAttr("position").scales[1] }, e.prototype.getShapes = function() { var t = [],
                        e = this.get("shapeContainer").get("children"); return s.each(e, function(e) { e.get("origin") && t.push(e) }), t }, e.prototype.getAttrsForLegend = function() { var t = this.get("attrs"),
                        e = []; return s.each(t, function(t) {-1 !== d.indexOf(t.type) && e.push(t) }), e }, e.prototype.changeVisible = function(t, e) { var n = this.get("shapeContainer");
                    n.set("visible", t); var r = this.get("labelContainer"); if (r && r.set("visible", t), !e) { n.get("canvas").draw() } }, e.prototype.reset = function() { this.set("attrOptions", {}), this.clearInner() }, e.prototype.clearInner = function() { this.clearActivedShapes(), this.clearSelected(); var t = this.get("shapeContainer");
                    t && t.clear(); var e = this.get("labelContainer");
                    e && e.remove(), this.set("attrs", {}), this.set("groupScales", null), this.set("labelContainer", null), this.set("xDistance", null), this.set("isStacked", null) }, e.prototype.clear = function() { this.clearInner(), this.set("scales", {}) }, e.prototype.destroy = function() { this.clear(); var e = this.get("shapeContainer");
                    e && e.remove(), this.offEvents(), t.prototype.destroy.call(this) }, e.prototype.bindEvents = function() { this.get("view") && (this._bindActiveAction(), this._bindSelectedAction()) }, e.prototype.offEvents = function() { this.get("view") && (this._offActiveAction(), this._offSelectedAction()) }, e }(o);
        t.exports = y }, function(t, e, n) { var r = n(0),
            i = n(19),
            o = n(2).PathUtil,
            a = {},
            s = { _coord: null, draw: function(t, e) { return this.drawShape ? this.drawShape(t, e) : null }, setCoord: function(t) { this._coord = t }, parsePath: function(t, e) { var n = this._coord; return t = o.parsePathString(t), t = n.isPolar && !1 !== e ? i.convertPolarPath(n, t) : i.convertNormalPath(n, t) }, parsePoint: function(t) { return this._coord.convertPoint(t) }, parsePoints: function(t) { var e = this._coord,
                        n = []; return r.each(t, function(t) { n.push(e.convertPoint(t)) }), n } },
            u = { defaultShapeType: null, setCoord: function(t) { this._coord = t }, getShape: function(t) { r.isArray(t) && (t = t[0]); var e = this[t] || this[this.defaultShapeType]; return e._coord = this._coord, e }, getShapePoints: function(t, e) { var n = this.getShape(t); return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e) }, getDefaultPoints: function() { return [] }, getMarkerCfg: function(t, e) { var n = this.getShape(t); if (!n.getMarkerCfg) { var r = this.defaultShapeType;
                        n = this.getShape(r) } return n.getMarkerCfg(e) }, drawShape: function(t, e, n) { var r = this.getShape(t).draw(e, n); return r && (r.setSilent("origin", e.origin), r._id = e.yIndex ? e._id + e.yIndex : e._id, r.name = this.name), r } };
        a.registerFactory = function(t, e) { var n = r.upperFirst(t),
                i = r.assign({}, u, e); return a[n] = i, i.name = t, i }, a.registerShape = function(t, e, n) { var i = r.upperFirst(t),
                o = a[i],
                u = r.assign({}, s, n); return o[e] = u, u }, a.getShapeFactory = function(t) { t = t || "point"; return this[r.upperFirst(t)] }, t.exports = a }, function(t, e, n) { var r = n(9).Symbol;
        t.exports = r }, function(t, e, n) { var r = n(196),
            i = n(199);
        t.exports = function(t, e) { var n = i(t, e); return r(n) ? n : void 0 } }, function(t, e, n) { var r = n(206);
        t.exports = function(t) { return null == t ? "" : r(t) } }, function(t, e, n) { var r = n(107),
            i = n(99),
            o = n(12);
        t.exports = function(t) { return o(t) ? r(t) : i(t) } }, function(t, e, n) {
        function r(t, e) { var n = t.getCenter(); return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)) }

        function i(t, e) { for (var n = t.length, r = [t[0]], i = 1; i < n; i += 2) { var o = e.convertPoint({ x: t[i], y: t[i + 1] });
                r.push(o.x, o.y) } return r } var o = n(0),
            a = n(395),
            s = { getLinePath: function(t, e) { return function(t, e) { if (!t.length) return []; for (var n = [], r = 0, i = t.length; r < i; r++) { var o = t[r];
                            0 === r ? n.push(["M", o.x, o.y]) : n.push(["L", o.x, o.y]) } return e && n.push(["Z"]), n }(t, e) }, getSplinePath: function(t, e, n) { var r = [],
                        i = t[0],
                        u = null; if (t.length <= 2) return s.getLinePath(t, e);
                    o.each(t, function(t) { u && u.x === t.x && u.y === t.y || (r.push(t.x), r.push(t.y), u = t) }), n = n || [
                        [0, 0],
                        [1, 1]
                    ]; var c = a.catmullRom2bezier(r, e, n); return c.unshift(["M", i.x, i.y]), c }, getPointRadius: function(t, e) { return r(t, e) }, getPointAngle: function(t, e) { var n = t.getCenter(); return Math.atan2(e.y - n.y, e.x - n.x) }, convertNormalPath: function(t, e) { var n = []; return o.each(e, function(e) { switch (e[0].toLowerCase()) {
                            case "m":
                            case "l":
                            case "c":
                                n.push(i(e, t)); break;
                            case "z":
                            default:
                                n.push(e) } }), n }, convertPolarPath: function(t, e) { var n = [],
                        a = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0; return o.each(e, function(o, l) { switch (o[0].toLowerCase()) {
                                case "m":
                                case "c":
                                case "q":
                                    n.push(i(o, t)); break;
                                case "l":
                                    a = e[l - 1], s = o, u = t.isTransposed, (c = u ? a[a.length - 2] === s[1] : a[a.length - 1] === s[2]) ? n = n.concat(function(t, e, n) { var i = n.isTransposed,
                                            o = n.startAngle,
                                            a = n.endAngle,
                                            s = { x: t[1], y: t[2] },
                                            u = { x: e[1], y: e[2] },
                                            c = [],
                                            l = i ? "y" : "x",
                                            h = Math.abs(u[l] - s[l]) * (a - o),
                                            f = u[l] >= s[l] ? 1 : 0,
                                            p = h > Math.PI ? 1 : 0,
                                            g = n.convertPoint(u),
                                            d = r(n, g); if (d >= .5)
                                            if (h === 2 * Math.PI) { var y = { x: (u.x + s.x) / 2, y: (u.y + s.y) / 2 },
                                                    v = n.convertPoint(y);
                                                c.push(["A", d, d, 0, p, f, v.x, v.y]), c.push(["A", d, d, 0, p, f, g.x, g.y]) } else c.push(["A", d, d, 0, p, f, g.x, g.y]); return c }(a, s, t)) : n.push(i(o, t)); break;
                                case "z":
                                default:
                                    n.push(o) } }),
                        function(t) { o.each(t, function(e, n) { if ("a" === e[0].toLowerCase()) { var r = t[n - 1],
                                        i = t[n + 1];
                                    i && "a" === i[0].toLowerCase() ? r && "l" === r[0].toLowerCase() && (r[0] = "M") : r && "a" === r[0].toLowerCase() && i && "l" === i[0].toLowerCase() && (i[0] = "M") } }) }(n), n } };
        t.exports = s }, function(t, e, n) { var r = n(45),
            i = n(46);
        t.exports = function(t, e, n, o) { var a = !n;
            n || (n = {}); for (var s = -1, u = e.length; ++s < u;) { var c = e[s],
                    l = o ? o(n[c], t[c], c, n, t) : void 0;
                void 0 === l && (l = t[c]), a ? i(n, c, l) : r(n, c, l) } return n } }, function(t, e, n) { "use strict"; var r = n(82);
        n.d(e, "a", function() { return r.e }), n.d(e, "f", function() { return r.g }), n.d(e, "d", function() { return r.f }); var i = n(302);
        n.d(e, "e", function() { return i.a }), n.d(e, "c", function() { return i.b }); var o = n(303);
        n.d(e, "b", function() { return o.a }) }, function(t, e) {
        function n(t, e, n, c, l, h) { var f = void 0,
                p = void 0,
                g = void 0,
                d = void 0,
                y = void 0,
                v = void 0,
                x = void 0; if (!e.fill) { var m = e.arrowLength || s,
                    b = e.arrowAngle ? e.arrowAngle * r / 180 : u;
                x = a(h - c, l - n), x -= r, y = e.lineWidth * o(x), v = e.lineWidth * i(x), f = l + m * o(x + b / 2), p = h + m * i(x + b / 2), g = l + m * o(x - b / 2), d = h + m * i(x - b / 2), t.moveTo(f - y, p - v), t.lineTo(l - y, h - v), t.lineTo(g - y, d - v), t.moveTo(l - y, h - v), t.lineTo(l + y, h + v), t.moveTo(l, h) } } var r = Math.PI,
            i = Math.sin,
            o = Math.cos,
            a = Math.atan2,
            s = 10,
            u = r / 3;
        t.exports = { addStartArrow: function(t, e, r, i, o, a) { e.startArrow && n(t, e, r, i, o, a) }, addEndArrow: function(t, e, r, i, o, a) { e.endArrow && n(t, e, r, i, o, a) } } }, function(t, e, n) {
        function r(t, e) { return i.isString(e) ? e : t.invert(t.scale(e)) } var i = n(0),
            o = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], this.linear = null, i.mix(this, e) } return t.prototype.get = function(t) { return this[t] }, t.prototype.set = function(t, e) { this[t] = e }, t.prototype._getAttrValue = function(t, e) { var n = this.values; if (t.isCategory && !this.linear) { return n[t.translate(e) % n.length] } var r = t.scale(e); return this.getLinearValue(r) }, t.prototype.getLinearValue = function(t) { var e = this.values,
                        n = e.length - 1,
                        r = Math.floor(n * t),
                        i = n * t - r,
                        o = e[r]; return o + ((r === n ? o : e[r + 1]) - o) * i }, t.prototype.callback = function(t) { var e = this.scales[0]; return "identity" === e.type ? e.value : this._getAttrValue(e, t) }, t.prototype.getNames = function() { for (var t = this.scales, e = this.names, n = Math.min(t.length, e.length), r = [], i = 0; i < n; i++) r.push(e[i]); return r }, t.prototype.getFields = function() { var t = this.scales,
                        e = []; return i.each(t, function(t) { e.push(t.field) }), e }, t.prototype.getScale = function(t) { return this.scales[this.names.indexOf(t)] }, t.prototype.mapping = function() { for (var t = this.scales, e = this.callback, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o]; var a = r; if (e) { for (var s = 0; s < r.length; s++) r[s] = this._toOriginParam(r[s], t[s]);
                        a = e.apply(this, r) } return i.isArray(a) || (a = [a]), a }, t.prototype._toOriginParam = function(t, e) { var n = t; if (!e.isLinear)
                        if (i.isArray(t)) { n = []; for (var o = 0; o < t.length; o++) n.push(r(e, t[o])) } else n = r(e, t); return n }, t }();
        t.exports = o }, function(t, e, n) {
        function r(t) { var e = void 0; return i.each(t, function(t) { if (t) return e = t, !1 }), e } var i = n(0),
            o = ["min", "max", "median"],
            a = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = this.getDefaultCfg();
                    e = i.deepMix({}, n, e), i.mix(this, e) } return t.prototype.getDefaultCfg = function() { return { zIndex: 1, xScales: null, yScales: null, el: null } }, t.prototype._getNormalizedValue = function(t, e) { var n = void 0; if (-1 !== i.indexOf(o, t)) { var r = void 0; "median" === t ? (r = e.isCategory ? (e.values.length - 1) / 2 : (e.min + e.max) / 2, n = e.scale(r)) : (r = e.isCategory ? "min" === t ? 0 : e.values.length - 1 : e[t], n = e.scale(r)) } else n = e.scale(t); return n }, t.prototype.parsePoint = function(t, e) { var n = this.xScales,
                        o = this.yScales;
                    i.isFunction(e) && (e = e(n, o)); var a = void 0,
                        s = void 0; if (i.isArray(e) && i.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e); if (i.isArray(e)) a = this._getNormalizedValue(e[0], r(n)), s = this._getNormalizedValue(e[1], r(o));
                    else
                        for (var u in e) { var c = e[u];
                            n[u] && (a = this._getNormalizedValue(c, n[u])), o[u] && (s = this._getNormalizedValue(c, o[u])) }
                    return i.isNil(a) || i.isNil(s) ? void 0 : t.convert({ x: a, y: s }) }, t.prototype.parsePercentPoint = function(t, e) { var n = parseFloat(e[0]) / 100,
                        r = parseFloat(e[1]) / 100,
                        i = t.start,
                        o = t.end,
                        a = { x: Math.min(i.x, o.x), y: Math.min(i.y, o.y) }; return { x: t.width * n + a.x, y: t.height * r + a.y } }, t.prototype.setVisible = function(t) { var e = this.el;
                    e && (e.set ? e.set("visible", t) : e.style.display = t ? "" : "none") }, t.prototype.render = function() {}, t.prototype.remove = function() { var t = this.el;
                    t && t.remove() }, t }();
        t.exports = a }, function(t, e, n) { var r = n(11),
            i = n(7),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            s = "[object GeneratorFunction]",
            u = "[object Proxy]";
        t.exports = function(t) { if (!i(t)) return !1; var e = r(t); return e == a || e == s || e == o || e == u } }, function(t, e) { var n = Object.prototype;
        t.exports = function(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || n) } }, function(t, e, n) { var r = n(202),
            i = n(10),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.propertyIsEnumerable,
            u = r(function() { return arguments }()) ? r : function(t) { return i(t) && a.call(t, "callee") && !s.call(t, "callee") };
        t.exports = u }, function(t, e, n) {
        (function(t) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                i = n(9),
                o = n(203),
                a = "object" == r(e) && e && !e.nodeType && e,
                s = a && "object" == r(t) && t && !t.nodeType && t,
                u = s && s.exports === a ? i.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || o;
            t.exports = c }).call(e, n(67)(t)) }, function(t, e, n) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(11),
            o = n(10),
            a = "[object Symbol]";
        t.exports = function(t) { return "symbol" == (void 0 === t ? "undefined" : r(t)) || o(t) && i(t) == a } }, function(t, e) { t.exports = function(t, e) { return t === e || t != t && e != e } }, function(t, e) { t.exports = function(t) { var e = -1,
                n = Array(t.size); return t.forEach(function(t) { n[++e] = t }), n } }, function(t, e, n) { "use strict";

        function r(t, e) { return function(n) { return t + n * e } }

        function i(t, e) { var n = e - t; return n ? r(t, n) : Object(o.a)(isNaN(t) ? e : t) } e.c = function(t, e) { var n = e - t; return n ? r(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Object(o.a)(isNaN(t) ? e : t) }, e.b = function(t) { return 1 == (t = +t) ? i : function(e, n) { return n - e ? function(t, e, n) { return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                        function(r) { return Math.pow(t + r * e, n) } }(e, n, t) : Object(o.a)(isNaN(e) ? n : e) } }, e.a = i; var o = n(141) }, function(t, e, n) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(319),
            o = n(322),
            a = n(51),
            s = n(4),
            u = n(329);
        t.exports = function(t) { return "function" == typeof t ? t : null == t ? a : "object" == (void 0 === t ? "undefined" : r(t)) ? s(t) ? o(t[0], t[1]) : i(t) : u(t) } }, function(t, e, n) { var r = n(29),
            i = 1 / 0;
        t.exports = function(t) { if ("string" == typeof t || r(t)) return t; var e = t + ""; return "0" == e && 1 / t == -i ? "-0" : e } }, function(t, e, n) { var r = n(0),
            i = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = this.getDefaultCfg();
                    r.assign(this, n, e) } return t.prototype.getDefaultCfg = function() { return { xField: null, yField: null, adjustNames: ["x", "y"], groupFields: null } }, t.prototype.isAdjust = function(t) { return this.adjustNames.indexOf(t) >= 0 }, t.prototype.processAdjust = function(t) { var e = r.Array.merge(t);
                    this.adjDataArray = t, this.mergeData = e, this.adjustData(t, e), this.adjFrames = null, this.mergeData = null }, t.prototype._getDimValues = function(t) { var e = {},
                        n = []; if (this.xField && this.isAdjust("x") && n.push(this.xField), this.yField && this.isAdjust("y") && n.push(this.yField), r.each(n, function(n) { var i = r.Array.values(t, n);
                            i.sort(function(t, e) { return t - e }), e[n] = i }), !this.yField && this.isAdjust("y")) { var i = [0, 1];
                        e.y = i } return e }, t.prototype.adjustData = function(t, e) { var n = this,
                        i = n._getDimValues(e);
                    r.each(t, function(e, o) { r.each(i, function(r, i) { n.adjustDim(i, r, e, t.length, o) }) }) }, t.prototype.adjustDim = function() {}, t.prototype.getAdjustRange = function(t, e, n) { var r = n.indexOf(e),
                        i = n.length,
                        o = void 0,
                        a = void 0; return !this.yField && this.isAdjust("y") ? (o = 0, a = 1) : i > 1 ? (o = 0 === r ? n[0] : n[r - 1], a = r === i - 1 ? n[i - 1] : n[r + 1], 0 !== r ? o += (e - o) / 2 : o -= (a - e) / 2, r !== i - 1 ? a -= (a - e) / 2 : a += (e - n[i - 2]) / 2) : (o = 0 === e ? 0 : e - .5, a = 0 === e ? 1 : e + .5), { pre: o, next: a } }, t.prototype.groupData = function(t, e) { var n = {}; return r.each(t, function(t) { var r = t[e];
                        void 0 === r && (r = t[e] = 0), n[r] || (n[r] = []), n[r].push(t) }), n }, t }();
        t.exports = i }, function(t, e, n) { t.exports = { Axis: n(429), Guide: n(435), Label: n(92), Legend: n(442), Plot: n(447), Tooltip: n(448) } }, function(t, e, n) { var r = n(195),
            i = n(65),
            o = n(200),
            a = n(102),
            s = n(201),
            u = n(11),
            c = n(101),
            l = c(r),
            h = c(i),
            f = c(o),
            p = c(a),
            g = c(s),
            d = u;
        (r && "[object DataView]" != d(new r(new ArrayBuffer(1))) || i && "[object Map]" != d(new i) || o && "[object Promise]" != d(o.resolve()) || a && "[object Set]" != d(new a) || s && "[object WeakMap]" != d(new s)) && (d = function(t) { var e = u(t),
                n = "[object Object]" == e ? t.constructor : void 0,
                r = n ? c(n) : ""; if (r) switch (r) {
                case l:
                    return "[object DataView]";
                case h:
                    return "[object Map]";
                case f:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case g:
                    return "[object WeakMap]" }
            return e }), t.exports = d }, function(t, e, n) { var r = n(204),
            i = n(68),
            o = n(103),
            a = o && o.isTypedArray,
            s = a ? i(a) : r;
        t.exports = s }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t); return i } }, function(t, e, n) {
        function r(t) { var e = this.__data__ = new i(t);
            this.size = e.size } var i = n(41),
            o = n(213),
            a = n(214),
            s = n(215),
            u = n(216),
            c = n(217);
        r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = s, r.prototype.has = u, r.prototype.set = c, t.exports = r }, function(t, e, n) {
        function r(t) { var e = -1,
                n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
                this.set(r[0], r[1]) } } var i = n(208),
            o = n(209),
            a = n(210),
            s = n(211),
            u = n(212);
        r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r }, function(t, e, n) { var r = n(30);
        t.exports = function(t, e) { for (var n = t.length; n--;)
                if (r(t[n][0], e)) return n; return -1 } }, function(t, e, n) { var r = n(16)(Object, "create");
        t.exports = r }, function(t, e, n) { var r = n(226);
        t.exports = function(t, e) { var n = t.__data__; return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map } }, function(t, e, n) { var r = n(46),
            i = n(30),
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n) { var a = t[e];
            o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n) } }, function(t, e, n) { var r = n(106);
        t.exports = function(t, e, n) { "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n } }, function(t, e) { var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) { return !!(e = null == e ? n : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e } }, function(t, e, n) { var r = n(107),
            i = n(233),
            o = n(12);
        t.exports = function(t) { return o(t) ? r(t, !0) : i(t) } }, function(t, e) { t.exports = function(t, e) { var n = -1,
                r = t.length; for (e || (e = Array(r)); ++n < r;) e[n] = t[n]; return e } }, function(t, e, n) { var r = n(45),
            i = n(20),
            o = n(117),
            a = n(12),
            s = n(26),
            u = n(18),
            c = Object.prototype.hasOwnProperty,
            l = o(function(t, e) { if (s(e) || a(e)) i(e, u(e), t);
                else
                    for (var n in e) c.call(e, n) && r(t, n, e[n]) });
        t.exports = l }, function(t, e) { t.exports = function(t) { return t } }, function(t, e, n) { var r = n(269),
            i = n(270)(r);
        t.exports = i }, function(t, e, n) {
        function r(t, e, n, a, s) { return t === e || (null == t || null == e || !o(t) && !o(e) ? t != t && e != e : i(t, e, n, a, r, s)) } var i = n(272),
            o = n(10);
        t.exports = r }, function(t, e, n) { "use strict";
        e.a = function(t, e) { return t = +t, e -= t,
                function(n) { return t + e * n } } }, function(t, e, n) {
        function r(t, e, n, r, i) { var o = 1 - i; return o * o * (o * r + 3 * i * n) + i * i * (i * t + 3 * o * e) }

        function i(t, e, n, i, o, a, u, c, l, h, f) { var p = void 0,
                g = .005,
                d = 1 / 0,
                y = void 0,
                v = void 0,
                x = void 0,
                m = void 0,
                b = void 0,
                _ = void 0,
                w = void 0,
                S = [l, h]; for (y = 0; y < 1; y += .05) v = [r(t, n, o, u, y), r(e, i, a, c, y)], (x = s.squaredDistance(S, v)) < d && (p = y, d = x);
            d = 1 / 0; for (var M = 0; M < 32 && !(g < 1e-4); M++) w = p + g, v = [r(t, n, o, u, _ = p - g), r(e, i, a, c, _)], x = s.squaredDistance(S, v), _ >= 0 && x < d ? (p = _, d = x) : (b = [r(t, n, o, u, w), r(e, i, a, c, w)], m = s.squaredDistance(S, b), w <= 1 && m < d ? (p = w, d = m) : g *= .5); return f && (f.x = r(t, n, o, u, p), f.y = r(e, i, a, c, p)), Math.sqrt(d) }

        function o(t, e, n, r, i) { return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n } var a = n(3),
            s = n(8).vec2;
        t.exports = { at: r, derivativeAt: function(t, e, n, r, i) { var o = 1 - i; return 3 * (((e - t) * o + 2 * (n - e) * i) * o + (r - n) * i * i) }, projectPoint: function(t, e, n, r, o, a, s, u, c, l) { var h = {}; return i(t, e, n, r, o, a, s, u, c, l, h), h }, pointDistance: i, extrema: function(t, e, n, r) { var i = 3 * t - 9 * e + 9 * n - 3 * r,
                    o = 6 * e - 12 * n + 6 * r,
                    s = 3 * n - 3 * r,
                    u = [],
                    c = void 0,
                    l = void 0,
                    h = void 0; if (a.isNumberEqual(i, 0)) a.isNumberEqual(o, 0) || (c = -s / o) >= 0 && c <= 1 && u.push(c);
                else { var f = o * o - 4 * i * s;
                    a.isNumberEqual(f, 0) ? u.push(-o / (2 * i)) : f > 0 && (l = (-o - (h = Math.sqrt(f))) / (2 * i), (c = (-o + h) / (2 * i)) >= 0 && c <= 1 && u.push(c), l >= 0 && l <= 1 && u.push(l)) } return u }, len: function(t, e, n, r, i, s, u, c, l) { a.isNil(l) && (l = 1); for (var h = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], g = 0, d = 0; d < 12; d++) { var y = h * f[d] + h,
                        v = o(y, t, n, i, u),
                        x = o(y, e, r, s, c),
                        m = v * v + x * x;
                    g += p[d] * Math.sqrt(m) } return h * g } } }, function(t, e, n) { var r = n(4),
            i = n(89),
            o = n(324),
            a = n(17);
        t.exports = function(t, e) { return r(t) ? t : i(t, e) ? [t] : o(a(t)) } }, function(t, e, n) { var r = n(0),
            i = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = this.getDefaultCfg();
                    r.mix(this, n, e), this.init() } return t.prototype.getDefaultCfg = function() { return { type: "base", formatter: null, range: [0, 1], ticks: null, values: [] } }, t.prototype.init = function() {}, t.prototype.getTicks = function() { var t = this,
                        e = t.ticks,
                        n = []; return r.each(e, function(e) { var i = void 0;
                        i = r.isObject(e) ? e : { text: t.getText(e), tickValue: e, value: t.scale(e) }, n.push(i) }), n }, t.prototype.getText = function(t) { var e = this.formatter; return t = e ? e(t) : t, !r.isNil(t) && t.toString || (t = ""), t.toString() }, t.prototype.rangeMin = function() { return this.range[0] }, t.prototype.rangeMax = function() { var t = this.range; return t[t.length - 1] }, t.prototype.invert = function(t) { return t }, t.prototype.translate = function(t) { return t }, t.prototype.scale = function(t) { return t }, t.prototype.clone = function() { var t = this,
                        e = t.constructor,
                        n = {}; return r.each(t, function(e, r) { n[r] = t[r] }), new e(n) }, t.prototype.change = function(t) { return this.ticks = null, r.mix(this, t), this.init(), this }, t }();
        t.exports = i }, function(t, e, n) { var r = n(57),
            i = n(0),
            o = n(416),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return i.mix({}, e, { type: "linear", isLinear: !0, min: null, minLimit: null, max: null, maxLimit: null, nice: !1, tickCount: null, tickInterval: null, snapArray: null }) }, e.prototype.init = function() { if (this.ticks) { var t = this.ticks,
                            e = this.translate(t[0]),
                            n = this.translate(t[t.length - 1]);
                        (i.isNil(this.min) || this.min > e) && (this.min = e), (i.isNil(this.max) || this.max < n) && (this.max = n) } else this.min = this.translate(this.min), this.max = this.translate(this.max), this.initTicks() }, e.prototype.calculateTicks = function() { var t = this.min,
                        e = this.max,
                        n = this.tickCount,
                        r = this.tickInterval; if (e < t) throw new Error("max: " + e + " should not be less than min: " + t); return o({ min: t, max: e, minLimit: this.minLimit, maxLimit: this.maxLimit, minCount: n, maxCount: n, interval: r, snapArray: this.snapArray }).ticks }, e.prototype.initTicks = function() { var t = this,
                        e = t.calculateTicks(); if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
                    else { var n = [];
                        i.each(e, function(e) { e >= t.min && e <= t.max && n.push(e) }), t.ticks = n } }, e.prototype.scale = function(t) { if (null === t || void 0 === t) return NaN; var e = this.max,
                        n = this.min; if (e === n) return 0; var r = (t - n) / (e - n),
                        i = this.rangeMin(); return i + r * (this.rangeMax() - i) }, e.prototype.invert = function(t) { var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()); return this.min + e * (this.max - this.min) }, e }(r);
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(2).MatrixUtil,
            o = i.mat3,
            a = i.vec3,
            s = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = this.getDefaultCfg();
                    r.mix(this, n, e), this.init() } return t.prototype.getDefaultCfg = function() { return { isTransposed: !1, matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] } }, t.prototype.init = function() { var t = this.start,
                        e = this.end,
                        n = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 };
                    this.center = n, this.width = Math.abs(e.x - t.x), this.height = Math.abs(e.y - t.y) }, t.prototype._swapDim = function(t) { var e = this[t]; if (e) { var n = e.start;
                        e.start = e.end, e.end = n } }, t.prototype.getCenter = function() { return this.center }, t.prototype.getWidth = function() { return this.width }, t.prototype.getHeight = function() { return this.height }, t.prototype.convertDim = function(t, e) { var n = this[e],
                        r = n.start; return r + t * (n.end - r) }, t.prototype.invertDim = function(t, e) { var n = this[e],
                        r = n.start; return (t - r) / (n.end - r) }, t.prototype.convertPoint = function(t) { return t }, t.prototype.invertPoint = function(t) { return t }, t.prototype.applyMatrix = function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = this.matrix,
                        i = [t, e, n]; return a.transformMat3(i, i, r), i }, t.prototype.invertMatrix = function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = this.matrix,
                        i = o.invert([], r),
                        s = [t, e, n]; return a.transformMat3(s, s, i), s }, t.prototype.convert = function(t) { var e = this.convertPoint(t),
                        n = e.x,
                        r = e.y,
                        i = this.applyMatrix(n, r, 1); return { x: i[0], y: i[1] } }, t.prototype.invert = function(t) { var e = this.invertMatrix(t.x, t.y, 1); return this.invertPoint({ x: e[0], y: e[1] }) }, t.prototype.rotate = function(t) { var e = this.matrix,
                        n = this.center; return o.translate(e, e, [-n.x, -n.y]), o.rotate(e, e, t), o.translate(e, e, [n.x, n.y]), this }, t.prototype.reflect = function(t) { switch (t) {
                        case "x":
                            this._swapDim("x"); break;
                        case "y":
                            this._swapDim("y"); break;
                        default:
                            this._swapDim("y") } return this }, t.prototype.scale = function(t, e) { var n = this.matrix,
                        r = this.center; return o.translate(n, n, [-r.x, -r.y]), o.scale(n, n, [t, e]), o.translate(n, n, [r.x, r.y]), this }, t.prototype.translate = function(t, e) { var n = this.matrix; return o.translate(n, n, [t, e]), this }, t.prototype.transpose = function() { return this.isTransposed = !this.isTransposed, this }, t }();
        t.exports = s }, function(t, e, n) { var r = n(0),
            i = n(92).LabelsRenderer,
            o = n(2).Group,
            a = n(431),
            s = n(1),
            u = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { _id: null, zIndex: 4, ticks: null, line: null, tickLine: null, subTickCount: 0, subTickLine: null, grid: null, label: { textStyle: {}, autoRotate: !0, formatter: null }, title: { autoRotate: !0, textStyle: {} }, autoPaint: !0 } }, e.prototype._beforeRenderUI = function() { var t = this.get("title"),
                        e = this.get("label"),
                        n = this.get("grid");
                    t && this.setSilent("title", r.deepMix({ autoRotate: !0, textStyle: { fontSize: 12, fill: "#ccc", textBaseline: "middle", fontFamily: s.fontFamily, textAlign: "center" }, offset: 48 }, t)), e && this.setSilent("label", r.deepMix({ autoRotate: !0, textStyle: { fontSize: 12, fill: "#ccc", textBaseline: "middle", fontFamily: s.fontFamily }, offset: 10 }, e)), n && this.setSilent("grid", r.deepMix({ lineStyle: { lineWidth: 1, stroke: "#C0D0E0" } }, n)) }, e.prototype._renderUI = function() { this.get("label") && this.renderLabels(), this.get("autoPaint") && this.paint(), r.isNil(this.get("title")) || this.renderTitle(), this.sort() }, e.prototype._parseTicks = function(t) { for (var e = (t = t || []).length, n = 0; n < e; n++) { var i = t[n];
                        r.isObject(i) || (t[n] = this.parseTick(i, n, e)) } return this.set("ticks", t), t }, e.prototype._addTickItem = function(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        i = this.get("tickItems"),
                        o = this.get("subTickItems"),
                        a = this.getTickEnd(e, n, t),
                        s = { x1: e.x, y1: e.y, x2: a.x, y2: a.y };
                    i || (i = []), o || (o = []), "sub" === r ? o.push(s) : i.push(s), this.set("tickItems", i), this.set("subTickItems", o) }, e.prototype._renderLine = function() { var t = this.get("line"),
                        e = void 0; if (t) { e = this.getLinePath(), t = r.mix({ path: e }, t); var n = this.addShape("path", { attrs: t });
                        n.name = "axis-line", this.set("lineShape", n) } }, e.prototype._processTicks = function() { var t = this,
                        e = t.get("label"),
                        n = t.get("subTickCount"),
                        i = t.get("tickLine"),
                        o = t.get("ticks"); if (o = t._parseTicks(o), r.each(o, function(n, r) { var o = t.getTickPoint(n.value, r);
                            i && t._addTickItem(r, o, i.length), e && t.addLabel(n, o, r) }), n) { var a = t.get("subTickLine");
                        r.each(o, function(e, r) { if (r > 0) { var s = e.value - o[r - 1].value;
                                s /= t.get("subTickCount") + 1; for (var u = 1; u <= n; u++) { var c = { text: "", value: r ? o[r - 1].value + u * s : u * s },
                                        l = t.getTickPoint(c.value),
                                        h = void 0;
                                    h = a && a.length ? a.length : parseInt(.6 * i.length, 10), t._addTickItem(u - 1, l, h, "sub") } } }) } }, e.prototype._addTickLine = function(t, e) { var n = r.mix({}, e),
                        i = [];
                    r.each(t, function(t) { i.push(["M", t.x1, t.y1]), i.push(["L", t.x2, t.y2]) }), delete n.length, n.path = i; var o = this.addShape("path", { attrs: n });
                    o.name = "axis-ticks", o._id = this.get("_id") + "-ticks", o.set("coord", this.get("coord")) }, e.prototype._renderTicks = function() { var t = this.get("tickItems"),
                        e = this.get("subTickItems"); if (!r.isEmpty(t)) { var n = this.get("tickLine");
                        this._addTickLine(t, n) } if (!r.isEmpty(e)) { var i = this.get("subTickLine") || this.get("tickLine");
                        this._addTickLine(e, i) } }, e.prototype._renderGrid = function() { var t = this.get("grid");
                    t && (t.coord = this.get("coord"), this.set("gridGroup", this.addGroup(a, t))) }, e.prototype.paint = function() { this._renderLine(), this._processTicks(), this._renderTicks(), this._renderGrid(); var t = this.get("label");
                    t && t.autoRotate && this.autoRotateLabels() }, e.prototype.parseTick = function(t, e, n) { return { text: t, value: e / (n - 1) } }, e.prototype.getTextAnchor = function(t) { return Math.abs(t[1] / t[0]) >= 1 ? "center" : t[0] > 0 ? "start" : "end" }, e.prototype.getMaxLabelWidth = function(t) { var e = t.get("children"),
                        n = 0; return r.each(e, function(t) { var e = t.getBBox().width;
                        n < e && (n = e) }), n }, e.prototype.remove = function() { t.prototype.remove.call(this); var e = this.get("gridGroup");
                    e && e.remove(), this.removeLabels() }, e.prototype.autoRotateLabels = function() {}, e.prototype.renderTitle = function() {}, e.prototype.getLinePath = function() {}, e.prototype.getTickPoint = function() {}, e.prototype.getTickEnd = function() {}, e.prototype.getSideVector = function() {}, e }(o);
        r.assign(u.prototype, i, { addLabel: function(t, e, n) { var i = this.get("labelsGroup"),
                    o = {},
                    a = void 0; if (i) { var s = this.get("_labelOffset");
                    r.isNil(this.get("label").offset) || (s = this.get("label").offset); var u = this.getSideVector(s, e, n);
                    e = { x: e.x + u[0], y: e.y + u[1] }, o.text = t.text, o.x = e.x, o.y = e.y, o.textAlign = this.getTextAnchor(u), (a = i.addLabel(o)) && (a.name = "axis-label", a._id = this.get("_id") + "-" + t.tickValue, a.set("coord", this.get("coord"))) } return a } }), t.exports = u }, function(t, e, n) {
        function r(t, e) { if (t["_wrap_" + e]) return t["_wrap_" + e]; var n = function(n) { t[e](n) }; return t["_wrap_" + e] = n, n }

        function i(t, e) { return t["_wrap_" + e] } var o = n(50),
            a = n(63),
            s = n(4),
            u = n(168),
            c = n(1),
            l = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = this.getDefaultCfg();
                    o(this, n, e), this.init() } return t.prototype.getDefaultCfg = function() { return { chart: null, group: null, showTitle: !0, autoSetAxis: !0, padding: 10, eachView: null, fields: [], colTitle: { offsetY: -15, style: { fontSize: 14, textAlign: "center", fill: "#444", fontFamily: c.fontFamily } }, rowTitle: { offsetX: 15, style: { fontSize: 14, textAlign: "center", rotate: 90, fill: "#444", fontFamily: c.fontFamily } } } }, t.prototype.init = function() { if (!this.chart) throw new Error("Facets Error: please specify the chart!");
                    this._bindEvent(), this.initContainer(), this.chart.get("data") && this.initViews() }, t.prototype.initContainer = function() { var t = this.chart.get("frontPlot").addGroup();
                    this.group = t }, t.prototype.initViews = function() { for (var t = this.chart, e = t.get("data"), n = this.eachView, r = this.generateFacets(e), i = 0; i < r.length; i++) { var o = r[i],
                            a = o.region,
                            s = t.view({ start: a.start, end: a.end, padding: this.padding });
                        s.source(o.data), this.beforeProcessView(s, o), n && n(s, o), this.afterProcessView(s, o), o.view = s } this.facets = r }, t.prototype.beforeProcessView = function() {}, t.prototype.afterProcessView = function(t, e) { this.autoSetAxis && this.processAxis(t, e) }, t.prototype.processAxis = function(t, e) { var n = t.get("options"),
                        r = t.get("geoms"); if ((!n.coord.type || "rect" === n.coord.type) && r.length) { var i = r[0].get("attrOptions").position.field,
                            o = s(i) ? i : i.split("*").map(function(t) { return t.trim() }),
                            u = o[0],
                            c = o[1];
                        a(n.axes) && (n.axes = {}); var l = n.axes;!1 !== l && (u && !1 !== l[u] && (l[u] = l[u] || {}, this.setXAxis(u, l, e)), c && !1 !== l[c] && (l[c] = l[c] || {}, this.setYAxis(c, l, e))) } }, t.prototype.setXAxis = function() {}, t.prototype.setYAxis = function() {}, t.prototype.renderTitle = function(t, e) { this.drawColTitle(t, e) }, t.prototype.getScaleText = function(t, e, n) { var r = void 0; if (t) { var i = n.get("scales")[t];
                        i || (i = n.createScale(t)), r = i.getText(e) } else r = e; return r }, t.prototype.drawColTitle = function(t, e) { var n = this.getScaleText(e.colField, e.colValue, t),
                        r = o({ position: ["50%", "0%"], content: n }, this.colTitle);
                    t.guide().text(r) }, t.prototype.drawRowTitle = function(t, e) { var n = this.getScaleText(e.rowField, e.rowValue, t),
                        r = o({ position: ["100%", "50%"], content: n }, u(this.rowTitle));
                    t.guide().text(r) }, t.prototype.getFilter = function(t) { return function(e) { var n = !0; return t.forEach(function(t) { var r = t.field,
                                i = t.value,
                                o = !0;!a(i) && r && (o = e[r] === i), n = n && o }), n } }, t.prototype.getFieldValues = function(t, e) { for (var n = [], r = {}, i = 0; i < e.length; i++) { var o = e[i][t];
                        a(o) || r[o] || (n.push(o), r[o] = !0) } return n }, t.prototype.getRegion = function(t, e, n, r) { var i = 1 / e,
                        o = 1 / t,
                        a = { x: i * n, y: o * r }; return { start: a, end: { x: a.x + i, y: a.y + o } } }, t.prototype.generateFacets = function() { return [] }, t.prototype._bindEvent = function() { var t = this.chart;
                    t.on("afterchangedata", r(this, "onDataChange")), t.on("beforeclear", r(this, "onClear")), t.on("beforedestroy", r(this, "destroy")), t.on("beforepaint", r(this, "onPaint")), t.on("setdata", r(this, "onDataChange")) }, t.prototype._clearEvent = function() { var t = this.chart;
                    t && (t.off("afterchangedata", i(this, "onDataChange")), t.off("beforeclear", i(this, "onClear")), t.off("beforedestroy", i(this, "destroy")), t.off("beforepaint", i(this, "onPaint")), t.off("setdata", i(this, "onDataChange"))) }, t.prototype._clearFacets = function() { var t = this.facets,
                        e = this.chart; if (t)
                        for (var n = 0; n < t.length; n++) { var r = t[n];
                            e.removeView(r.view) } this.facets = null }, t.prototype.onClear = function() { this.onRemove() }, t.prototype.onPaint = function() { if (this.showTitle)
                        for (var t = this.facets, e = 0; e < t.length; e++) { var n = t[e],
                                r = n.view;
                            this.renderTitle(r, n) } }, t.prototype.onDataChange = function() { this._clearFacets(), this.initViews() }, t.prototype.onRemove = function() { this._clearFacets(), this._clearEvent(), this.group && this.group.remove(), this.chart = null, this.facets = null, this.group = null }, t.prototype.destroy = function() { this.onRemove(), this.destroyed = !0 }, t }();
        t.exports = l }, function(t, e, n) { var r = Math.PI / 180,
            i = 180 / Math.PI;
        t.exports = { isFunction: n(25), isObject: n(7), isBoolean: n(96), isNil: n(63), isString: n(64), isArray: n(4), isNumber: n(97), isEmpty: n(98), uniqueId: n(205), clone: n(207), assign: n(50), merge: n(253), upperFirst: n(124), remove: n(262), each: n(128), isEqual: n(129), toArray: n(133), extend: function(t, e, n, r) { this.isFunction(e) || (n = e, e = t, t = function() {}); var i = Object.create ? function(t, e) { return Object.create(t, { constructor: { value: e } }) } : function(t, e) {
                        function n() {} n.prototype = t; var r = new n; return r.constructor = e, r },
                    o = i(e.prototype, t); return t.prototype = this.merge(o, t.prototype), t.superclass = i(e.prototype, e), this.merge(o, n), this.merge(t, r), t }, augment: function(t) { for (var e = this.toArray(arguments), n = 1; n < e.length; n++) { var r = e[n];
                    this.isFunction(r) && (r = r.prototype), this.merge(t.prototype, r) } }, isNumberEqual: function(t, e) { return Math.abs(t - e) < 1e-5 }, toRadian: function(t) { return r * t }, toDegree: function(t) { return i * t }, mod: function(t, e) { return (t % e + e) % e }, clamp: function(t, e, n) { return t < e ? e : t > n ? n : t } } }, function(t, e) { t.exports = function(t) { return null == t } }, function(t, e, n) { var r = n(11),
            i = n(4),
            o = n(10),
            a = "[object String]";
        t.exports = function(t) { return "string" == typeof t || !i(t) && o(t) && r(t) == a } }, function(t, e, n) { var r = n(16)(n(9), "Map");
        t.exports = r }, function(t, e) { var n = 9007199254740991;
        t.exports = function(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n } }, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, function(t, e) { t.exports = function(t) { return function(e) { return t(e) } } }, function(t, e, n) {
        function r(t) { var e = -1,
                n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
                this.set(r[0], r[1]) } } var i = n(218),
            o = n(225),
            a = n(227),
            s = n(228),
            u = n(229);
        r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r }, function(t, e, n) { var r = n(109),
            i = n(110),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            s = a ? function(t) { return null == t ? [] : (t = Object(t), r(a(t), function(e) { return o.call(t, e) })) } : i;
        t.exports = s }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n]; return t } }, function(t, e, n) { var r = n(100)(Object.getPrototypeOf, Object);
        t.exports = r }, function(t, e, n) { var r = n(114);
        t.exports = function(t) { var e = new t.constructor(t.byteLength); return new r(e).set(new r(t)), e } }, function(t, e) { t.exports = function(t, e, n, r) { var i = -1,
                o = null == t ? 0 : t.length; for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t); return n } }, function(t, e) { t.exports = function(t) { var e = -1,
                n = Array(t.size); return t.forEach(function(t, r) { n[++e] = [r, t] }), n } }, function(t, e, n) { var r = n(51),
            i = n(118),
            o = n(119);
        t.exports = function(t, e) { return o(i(t, e, r), t + "") } }, function(t, e, n) { var r = n(265),
            i = n(266),
            o = n(267);
        t.exports = function(t, e, n) { return e == e ? o(t, e, n) : r(t, i, n) } }, function(t, e, n) { "use strict";
        n.d(e, "b", function() { return r }), n.d(e, "a", function() { return i }), n.d(e, "c", function() { return o }); var r = 1e-6,
            i = "undefined" != typeof Float32Array ? Float32Array : Array,
            o = Math.random;
        Math.PI }, function(t, e, n) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(62),
            o = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029",
            a = new RegExp("([a-z])[" + o + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + o + "]*,?[" + o + "]*)+)", "ig"),
            s = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + o + "]*,?[" + o + "]*", "ig"),
            u = function(t) { if (!t) return null; if ((void 0 === t ? "undefined" : r(t)) === r([])) return t; var e = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                    n = []; return String(t).replace(a, function(t, r, i) { var o = [],
                        a = r.toLowerCase(); if (i.replace(s, function(t, e) { e && o.push(+e) }), "m" === a && o.length > 2 && (n.push([r].concat(o.splice(0, 2))), a = "l", r = "m" === r ? "l" : "L"), "o" === a && 1 === o.length && n.push([r, o[0]]), "r" === a) n.push([r].concat(o));
                    else
                        for (; o.length >= e[a] && (n.push([r].concat(o.splice(0, e[a]))), e[a]);); }), n },
            c = function(t, e) { for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) { var o = [{ x: +t[r - 2], y: +t[r - 1] }, { x: +t[r], y: +t[r + 1] }, { x: +t[r + 2], y: +t[r + 3] }, { x: +t[r + 4], y: +t[r + 5] }];
                    e ? r ? i - 4 === r ? o[3] = { x: +t[0], y: +t[1] } : i - 2 === r && (o[2] = { x: +t[0], y: +t[1] }, o[3] = { x: +t[2], y: +t[3] }) : o[0] = { x: +t[i - 2], y: +t[i - 1] } : i - 4 === r ? o[3] = o[2] : r || (o[0] = { x: +t[r], y: +t[r + 1] }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y]) } return n },
            l = function(t, e, n, r, i) { var o = []; if (null === i && null === r && (r = n), t = +t, e = +e, n = +n, r = +r, null !== i) { var a = Math.PI / 180,
                        s = t + n * Math.cos(-r * a),
                        u = t + n * Math.cos(-i * a);
                    o = [
                        ["M", s, e + n * Math.sin(-r * a)],
                        ["A", n, n, 0, +(i - r > 180), 0, u, e + n * Math.sin(-i * a)]
                    ] } else o = [
                    ["M", t, e],
                    ["m", 0, -r],
                    ["a", n, r, 0, 1, 1, 0, 2 * r],
                    ["a", n, r, 0, 1, 1, 0, -2 * r],
                    ["z"]
                ]; return o },
            h = function(t) { if (!(t = u(t)) || !t.length) return [
                    ["M", 0, 0]
                ]; var e = [],
                    n = 0,
                    r = 0,
                    i = 0,
                    o = 0,
                    a = 0,
                    s = void 0,
                    h = void 0; "M" === t[0][0] && (i = n = +t[0][1], o = r = +t[0][2], a++, e[0] = ["M", n, r]); for (var f, p, g = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), d = a, y = t.length; d < y; d++) { if (e.push(f = []), p = t[d], (s = p[0]) !== s.toUpperCase()) switch (f[0] = s.toUpperCase(), f[0]) {
                            case "A":
                                f[1] = p[1], f[2] = p[2], f[3] = p[3], f[4] = p[4], f[5] = p[5], f[6] = +p[6] + n, f[7] = +p[7] + r; break;
                            case "V":
                                f[1] = +p[1] + r; break;
                            case "H":
                                f[1] = +p[1] + n; break;
                            case "R":
                                for (var v = 2, x = (h = [n, r].concat(p.slice(1))).length; v < x; v++) h[v] = +h[v] + n, h[++v] = +h[v] + r;
                                e.pop(), e = e.concat(c(h, g)); break;
                            case "O":
                                e.pop(), (h = l(n, r, p[1], p[2])).push(h[0]), e = e.concat(h); break;
                            case "U":
                                e.pop(), e = e.concat(l(n, r, p[1], p[2], p[3])), f = ["U"].concat(e[e.length - 1].slice(-2)); break;
                            case "M":
                                i = +p[1] + n, o = +p[2] + r; break;
                            default:
                                for (var m = 1, b = p.length; m < b; m++) f[m] = +p[m] + (m % 2 ? n : r) } else if ("R" === s) h = [n, r].concat(p.slice(1)), e.pop(), e = e.concat(c(h, g)), f = ["R"].concat(p.slice(-2));
                        else if ("O" === s) e.pop(), (h = l(n, r, p[1], p[2])).push(h[0]), e = e.concat(h);
                    else if ("U" === s) e.pop(), e = e.concat(l(n, r, p[1], p[2], p[3])), f = ["U"].concat(e[e.length - 1].slice(-2));
                    else
                        for (var _ = 0, w = p.length; _ < w; _++) f[_] = p[_]; if ("O" !== (s = s.toUpperCase())) switch (f[0]) {
                        case "Z":
                            n = +i, r = +o; break;
                        case "H":
                            n = f[1]; break;
                        case "V":
                            r = f[1]; break;
                        case "M":
                            i = f[f.length - 2], o = f[f.length - 1]; break;
                        default:
                            n = f[f.length - 2], r = f[f.length - 1] } } return e },
            f = function(t, e, n, r) { return [t, e, n, r, n, r] },
            p = function(t, e, n, r, i, o) { return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o] },
            g = function(t, e) { for (var n = [], r = [], i = h(t), o = e && h(e), a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, s = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, u = function(t, e, n) { var r = void 0,
                            i = void 0; if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y]; switch (!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2]; break;
                            case "A":
                                t = ["C"].concat(function t(e, n, r, i, o, a, s, u, c, l) { r === i && (r += 1); var h = 120 * Math.PI / 180,
                                        f = Math.PI / 180 * (+o || 0),
                                        p = [],
                                        g = void 0,
                                        d = void 0,
                                        y = void 0,
                                        v = void 0,
                                        x = void 0,
                                        m = function(t, e, n) { return { x: t * Math.cos(n) - e * Math.sin(n), y: t * Math.sin(n) + e * Math.cos(n) } }; if (l) d = l[0], y = l[1], v = l[2], x = l[3];
                                    else { e = (g = m(e, n, -f)).x, n = g.y, u = (g = m(u, c, -f)).x, c = g.y, e === u && n === c && (u += 1, c += 1); var b = (e - u) / 2,
                                            _ = (n - c) / 2,
                                            w = b * b / (r * r) + _ * _ / (i * i);
                                        w > 1 && (r *= w = Math.sqrt(w), i *= w); var S = r * r,
                                            M = i * i,
                                            C = (a === s ? -1 : 1) * Math.sqrt(Math.abs((S * M - S * _ * _ - M * b * b) / (S * _ * _ + M * b * b)));
                                        v = C * r * _ / i + (e + u) / 2, x = C * -i * b / r + (n + c) / 2, d = Math.asin(((n - x) / i).toFixed(9)), y = Math.asin(((c - x) / i).toFixed(9)), d = e < v ? Math.PI - d : d, y = u < v ? Math.PI - y : y, d < 0 && (d = 2 * Math.PI + d), y < 0 && (y = 2 * Math.PI + y), s && d > y && (d -= 2 * Math.PI), !s && y > d && (y -= 2 * Math.PI) } var P = y - d; if (Math.abs(P) > h) { var A = y,
                                            k = u,
                                            O = c;
                                        y = d + h * (s && y > d ? 1 : -1), p = t(u = v + r * Math.cos(y), c = x + i * Math.sin(y), r, i, o, 0, s, k, O, [y, A, v, x]) } P = y - d; var T = Math.cos(d),
                                        j = Math.sin(d),
                                        E = Math.cos(y),
                                        I = Math.sin(y),
                                        D = Math.tan(P / 4),
                                        F = 4 / 3 * r * D,
                                        L = 4 / 3 * i * D,
                                        R = [e, n],
                                        B = [e + F * j, n - L * T],
                                        z = [u + F * I, c - L * E],
                                        N = [u, c]; if (B[0] = 2 * R[0] - B[0], B[1] = 2 * R[1] - B[1], l) return [B, z, N].concat(p); for (var V = [], Y = 0, W = (p = [B, z, N].concat(p).join().split(",")).length; Y < W; Y++) V[Y] = Y % 2 ? m(p[Y - 1], p[Y], f).y : m(p[Y], p[Y + 1], f).x; return V }.apply(0, [e.x, e.y].concat(t.slice(1)))); break;
                            case "S":
                                "C" === n || "S" === n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1)); break;
                            case "T":
                                "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(p(e.x, e.y, e.qx, e.qy, t[1], t[2])); break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"].concat(p(e.x, e.y, t[1], t[2], t[3], t[4])); break;
                            case "L":
                                t = ["C"].concat(f(e.x, e.y, t[1], t[2])); break;
                            case "H":
                                t = ["C"].concat(f(e.x, e.y, t[1], e.y)); break;
                            case "V":
                                t = ["C"].concat(f(e.x, e.y, e.x, t[1])); break;
                            case "Z":
                                t = ["C"].concat(f(e.x, e.y, e.X, e.Y)); break;
                            default:
                                t = [] } return t }, c = function(t, e) { if (t[e].length > 7) { t[e].shift(); for (var i = t[e]; i.length;) n[e] = "A", o && (r[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                            t.splice(e, 1) } }, l = function(t, e, n, r, i) { t && e && "M" === t[i][0] && "M" !== e[i][0] && (e.splice(i, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[i][1], n.y = t[i][2]) }, g = "", d = "", y = 0, v = Math.max(i.length, o && o.length || 0); y < v; y++) { i[y] && (g = i[y][0]), "C" !== g && (n[y] = g, y && (d = n[y - 1])), i[y] = u(i[y], a, d), "A" !== n[y] && "C" === g && (n[y] = "C"), c(i, y), o && (o[y] && (g = o[y][0]), "C" !== g && (r[y] = g, y && (d = r[y - 1])), o[y] = u(o[y], s, d), "A" !== r[y] && "C" === g && (r[y] = "C"), c(o, y)), l(i, o, a, s, y), l(o, i, s, a, y); var x = i[y],
                        m = o && o[y],
                        b = x.length,
                        _ = o && m.length;
                    a.x = x[b - 2], a.y = x[b - 1], a.bx = parseFloat(x[b - 4]) || a.x, a.by = parseFloat(x[b - 3]) || a.y, s.bx = o && (parseFloat(m[_ - 4]) || s.x), s.by = o && (parseFloat(m[_ - 3]) || s.y), s.x = o && m[_ - 2], s.y = o && m[_ - 1] } return o ? [i, o] : i },
            d = /,?([a-z]),?/gi,
            y = function(t) { return t.join(",").replace(d, "$1") },
            v = function(t, e, n, r, i) { return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n },
            x = function(t, e, n, r, i, o, a, s, u) { null === u && (u = 1); for (var c = (u = u > 1 ? 1 : u < 0 ? 0 : u) / 2, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, p = 0; p < 12; p++) { var g = c * l[p] + c,
                        d = v(g, t, n, i, a),
                        y = v(g, e, r, o, s),
                        x = d * d + y * y;
                    f += h[p] * Math.sqrt(x) } return c * f },
            m = function(t, e, n, r, i, o, a, s) { if (!(Math.max(t, n) < Math.min(i, a) || Math.min(t, n) > Math.max(i, a) || Math.max(e, r) < Math.min(o, s) || Math.min(e, r) > Math.max(o, s))) { var u = (t - n) * (o - s) - (e - r) * (i - a); if (u) { var c = ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / u,
                            l = ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / u,
                            h = +c.toFixed(2),
                            f = +l.toFixed(2); if (!(h < +Math.min(t, n).toFixed(2) || h > +Math.max(t, n).toFixed(2) || h < +Math.min(i, a).toFixed(2) || h > +Math.max(i, a).toFixed(2) || f < +Math.min(e, r).toFixed(2) || f > +Math.max(e, r).toFixed(2) || f < +Math.min(o, s).toFixed(2) || f > +Math.max(o, s).toFixed(2))) return { x: c, y: l } } } },
            b = function(t, e, n) { return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height },
            _ = function(t, e, n, r, i) { if (i) return [
                    ["M", +t + +i, e],
                    ["l", n - 2 * i, 0],
                    ["a", i, i, 0, 0, 1, i, i],
                    ["l", 0, r - 2 * i],
                    ["a", i, i, 0, 0, 1, -i, i],
                    ["l", 2 * i - n, 0],
                    ["a", i, i, 0, 0, 1, -i, -i],
                    ["l", 0, 2 * i - r],
                    ["a", i, i, 0, 0, 1, i, -i],
                    ["z"]
                ]; var o = [
                    ["M", t, e],
                    ["l", n, 0],
                    ["l", 0, r],
                    ["l", -n, 0],
                    ["z"]
                ]; return o.parsePathArray = y, o },
            w = function(t, e, n, r) { return null === t && (t = e = n = r = 0), null === e && (e = t.y, n = t.width, r = t.height, t = t.x), { x: t, y: e, width: n, w: n, height: r, h: r, x2: t + n, y2: e + r, cx: t + n / 2, cy: e + r / 2, r1: Math.min(n, r) / 2, r2: Math.max(n, r) / 2, r0: Math.sqrt(n * n + r * r) / 2, path: _(t, e, n, r), vb: [t, e, n, r].join(" ") } },
            S = function(t, e, n, r, o, a, s, u) { i.isArray(t) || (t = [t, e, n, r, o, a, s, u]); var c = function(t, e, n, r, i, o, a, s) { for (var u = [], c = [
                            [],
                            []
                        ], l = void 0, h = void 0, f = void 0, p = void 0, g = 0; g < 2; ++g)
                        if (0 === g ? (h = 6 * t - 12 * n + 6 * i, l = -3 * t + 9 * n - 9 * i + 3 * a, f = 3 * n - 3 * t) : (h = 6 * e - 12 * r + 6 * o, l = -3 * e + 9 * r - 9 * o + 3 * s, f = 3 * r - 3 * e), Math.abs(l) < 1e-12) { if (Math.abs(h) < 1e-12) continue;
                            (p = -f / h) > 0 && p < 1 && u.push(p) } else { var d = h * h - 4 * f * l,
                                y = Math.sqrt(d); if (!(d < 0)) { var v = (-h + y) / (2 * l);
                                v > 0 && v < 1 && u.push(v); var x = (-h - y) / (2 * l);
                                x > 0 && x < 1 && u.push(x) } }
                    for (var m = u.length, b = m, _ = void 0; m--;) _ = 1 - (p = u[m]), c[0][m] = _ * _ * _ * t + 3 * _ * _ * p * n + 3 * _ * p * p * i + p * p * p * a, c[1][m] = _ * _ * _ * e + 3 * _ * _ * p * r + 3 * _ * p * p * o + p * p * p * s; return c[0][b] = t, c[1][b] = e, c[0][b + 1] = a, c[1][b + 1] = s, c[0].length = c[1].length = b + 2, { min: { x: Math.min.apply(0, c[0]), y: Math.min.apply(0, c[1]) }, max: { x: Math.max.apply(0, c[0]), y: Math.max.apply(0, c[1]) } } }.apply(null, t); return w(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y) },
            M = function(t, e, n, r, i, o, a, s, u) { var c = 1 - u,
                    l = Math.pow(c, 3),
                    h = Math.pow(c, 2),
                    f = u * u,
                    p = f * u,
                    g = t + 2 * u * (n - t) + f * (i - 2 * n + t),
                    d = e + 2 * u * (r - e) + f * (o - 2 * r + e),
                    y = n + 2 * u * (i - n) + f * (a - 2 * i + n),
                    v = r + 2 * u * (o - r) + f * (s - 2 * o + r); return { x: l * t + 3 * h * u * n + 3 * c * u * u * i + p * a, y: l * e + 3 * h * u * r + 3 * c * u * u * o + p * s, m: { x: g, y: d }, n: { x: y, y: v }, start: { x: c * t + u * n, y: c * e + u * r }, end: { x: c * i + u * a, y: c * o + u * s }, alpha: 90 - 180 * Math.atan2(g - y, d - v) / Math.PI } },
            C = function(t, e, n) { if (! function(t, e) { return t = w(t), e = w(e), b(e, t.x, t.y) || b(e, t.x2, t.y) || b(e, t.x, t.y2) || b(e, t.x2, t.y2) || b(t, e.x, e.y) || b(t, e.x2, e.y) || b(t, e.x, e.y2) || b(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y) }(S(t), S(e))) return n ? 0 : []; for (var r = ~~(x.apply(0, t) / 8), i = ~~(x.apply(0, e) / 8), o = [], a = [], s = {}, u = n ? 0 : [], c = 0; c < r + 1; c++) { var l = M.apply(0, t.concat(c / r));
                    o.push({ x: l.x, y: l.y, t: c / r }) } for (var h = 0; h < i + 1; h++) { var f = M.apply(0, e.concat(h / i));
                    a.push({ x: f.x, y: f.y, t: h / i }) } for (var p = 0; p < r; p++)
                    for (var g = 0; g < i; g++) { var d = o[p],
                            y = o[p + 1],
                            v = a[g],
                            _ = a[g + 1],
                            C = Math.abs(y.x - d.x) < .001 ? "y" : "x",
                            P = Math.abs(_.x - v.x) < .001 ? "y" : "x",
                            A = m(d.x, d.y, y.x, y.y, v.x, v.y, _.x, _.y); if (A) { if (s[A.x.toFixed(4)] === A.y.toFixed(4)) continue;
                            s[A.x.toFixed(4)] = A.y.toFixed(4); var k = d.t + Math.abs((A[C] - d[C]) / (y[C] - d[C])) * (y.t - d.t),
                                O = v.t + Math.abs((A[P] - v[P]) / (_[P] - v[P])) * (_.t - v.t);
                            k >= 0 && k <= 1 && O >= 0 && O <= 1 && (n ? u++ : u.push({ x: A.x, y: A.y, t1: k, t2: O })) } }
                return u };
        t.exports = { parsePathString: u, parsePathArray: y, pathTocurve: g, pathToAbsolute: h, catmullRomToBezier: c, rectPath: _, intersection: function(t, e) { return function(t, e, n) { t = g(t), e = g(e); for (var r = void 0, i = void 0, o = void 0, a = void 0, s = void 0, u = void 0, c = void 0, l = void 0, h = void 0, f = void 0, p = n ? 0 : [], d = 0, y = t.length; d < y; d++) { var v = t[d]; if ("M" === v[0]) r = s = v[1], i = u = v[2];
                        else { "C" === v[0] ? (r = (h = [r, i].concat(v.slice(1)))[6], i = h[7]) : (h = [r, i, r, i, s, u, s, u], r = s, i = u); for (var x = 0, m = e.length; x < m; x++) { var b = e[x]; if ("M" === b[0]) o = c = b[1], a = l = b[2];
                                else { "C" === b[0] ? (o = (f = [o, a].concat(b.slice(1)))[6], a = f[7]) : (f = [o, a, o, a, c, l, c, l], o = c, a = l); var _ = C(h, f, n); if (n) p += _;
                                    else { for (var w = 0, S = _.length; w < S; w++) _[w].segment1 = d, _[w].segment2 = x, _[w].bez1 = h, _[w].bez2 = f;
                                        p = p.concat(_) } } } } } return p }(t, e) } } }, function(t, e, n) { "use strict";

        function r() { return m || (w(i), m = _.now() + b) }

        function i() { m = 0 }

        function o() { this._call = this._time = this._next = null }

        function a(t, e, n) { var r = new o; return r.restart(t, e, n), r }

        function s() { r(), ++g; for (var t, e = h; e;)(t = m - e._time) >= 0 && e._call.call(null, t), e = e._next;--g }

        function u() { m = (x = _.now()) + b, g = d = 0; try { s() } finally { g = 0,
                    function() { var t, e, n = h,
                            r = 1 / 0; for (; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : h = e);
                        f = t, l(r) }(), m = 0 } }

        function c() { var t = _.now(),
                e = t - x;
            e > v && (b -= e, x = t) }

        function l(t) { if (!g) { d && (d = clearTimeout(d));
                t - m > 24 ? (t < 1 / 0 && (d = setTimeout(u, t - _.now() - b)), y && (y = clearInterval(y))) : (y || (x = _.now(), y = setInterval(c, v)), g = 1, w(u)) } } e.b = r, e.a = o, e.c = a, e.d = s; var h, f, p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            g = 0,
            d = 0,
            y = 0,
            v = 1e3,
            x = 0,
            m = 0,
            b = 0,
            _ = "object" === ("undefined" == typeof performance ? "undefined" : p(performance)) && performance.now ? performance : Date,
            w = "object" === ("undefined" == typeof window ? "undefined" : p(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };
        o.prototype = a.prototype = { constructor: o, restart: function(t, e, n) { if ("function" != typeof t) throw new TypeError("callback is not a function");
                n = (null == n ? r() : +n) + (null == e ? 0 : +e), this._next || f === this || (f ? f._next = this : h = this, f = this), this._call = t, this._time = n, l() }, stop: function() { this._call && (this._call = null, this._time = 1 / 0, l()) } } }, function(t, e, n) { "use strict"; var r = n(21),
            i = n(139),
            o = n(142),
            a = n(143),
            s = n(54),
            u = n(144),
            c = n(145),
            l = n(141),
            h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        e.a = function(t, e) { var n, f = void 0 === e ? "undefined" : h(e); return null == e || "boolean" === f ? Object(l.a)(e) : ("number" === f ? s.a : "string" === f ? (n = Object(r.a)(e)) ? (e = n, i.a) : c.a : e instanceof r.a ? i.a : e instanceof Date ? a.a : Array.isArray(e) ? o.a : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? u.a : s.a)(t, e) } }, function(t, e, n) { "use strict";

        function r() {}

        function i(t) { var e; return t = (t + "").trim().toLowerCase(), (e = b.exec(t)) ? (e = parseInt(e[1], 16), new c(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1)) : (e = _.exec(t)) ? o(parseInt(e[1], 16)) : (e = w.exec(t)) ? new c(e[1], e[2], e[3], 1) : (e = S.exec(t)) ? new c(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = M.exec(t)) ? a(e[1], e[2], e[3], e[4]) : (e = C.exec(t)) ? a(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = P.exec(t)) ? l(e[1], e[2] / 100, e[3] / 100, 1) : (e = A.exec(t)) ? l(e[1], e[2] / 100, e[3] / 100, e[4]) : k.hasOwnProperty(t) ? o(k[t]) : "transparent" === t ? new c(NaN, NaN, NaN, 0) : null }

        function o(t) { return new c(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

        function a(t, e, n, r) { return r <= 0 && (t = e = n = NaN), new c(t, e, n, r) }

        function s(t) { return t instanceof r || (t = i(t)), t ? (t = t.rgb(), new c(t.r, t.g, t.b, t.opacity)) : new c }

        function u(t, e, n, r) { return 1 === arguments.length ? s(t) : new c(t, e, n, null == r ? 1 : r) }

        function c(t, e, n, r) { this.r = +t, this.g = +e, this.b = +n, this.opacity = +r }

        function l(t, e, n, r) { return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new f(t, e, n, r) }

        function h(t, e, n, o) { return 1 === arguments.length ? function(t) { if (t instanceof f) return new f(t.h, t.s, t.l, t.opacity); if (t instanceof r || (t = i(t)), !t) return new f; if (t instanceof f) return t; var e = (t = t.rgb()).r / 255,
                    n = t.g / 255,
                    o = t.b / 255,
                    a = Math.min(e, n, o),
                    s = Math.max(e, n, o),
                    u = NaN,
                    c = s - a,
                    l = (s + a) / 2; return c ? (u = e === s ? (n - o) / c + 6 * (n < o) : n === s ? (o - e) / c + 2 : (e - n) / c + 4, c /= l < .5 ? s + a : 2 - s - a, u *= 60) : c = l > 0 && l < 1 ? 0 : u, new f(u, c, l, t.opacity) }(t) : new f(t, e, n, null == o ? 1 : o) }

        function f(t, e, n, r) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +r }

        function p(t, e, n) { return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) } e.a = r, n.d(e, "d", function() { return d }), n.d(e, "c", function() { return y }), e.e = i, e.h = s, e.g = u, e.b = c, e.f = h; var g = n(83),
            d = .7,
            y = 1 / d,
            v = "\\s*([+-]?\\d+)\\s*",
            x = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            m = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            b = /^#([0-9a-f]{3})$/,
            _ = /^#([0-9a-f]{6})$/,
            w = new RegExp("^rgb\\(" + [v, v, v] + "\\)$"),
            S = new RegExp("^rgb\\(" + [m, m, m] + "\\)$"),
            M = new RegExp("^rgba\\(" + [v, v, v, x] + "\\)$"),
            C = new RegExp("^rgba\\(" + [m, m, m, x] + "\\)$"),
            P = new RegExp("^hsl\\(" + [x, m, m] + "\\)$"),
            A = new RegExp("^hsla\\(" + [x, m, m, x] + "\\)$"),
            k = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
        Object(g.a)(r, i, { displayable: function() { return this.rgb().displayable() }, toString: function() { return this.rgb() + "" } }), Object(g.a)(c, u, Object(g.b)(r, { brighter: function(t) { return t = null == t ? y : Math.pow(y, t), new c(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? d : Math.pow(d, t), new c(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1 }, toString: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") } })), Object(g.a)(f, h, Object(g.b)(r, { brighter: function(t) { return t = null == t ? y : Math.pow(y, t), new f(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? d : Math.pow(d, t), new f(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = this.h % 360 + 360 * (this.h < 0),
                    e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    n = this.l,
                    r = n + (n < .5 ? n : 1 - n) * e,
                    i = 2 * n - r; return new c(p(t >= 240 ? t - 240 : t + 120, i, r), p(t, i, r), p(t < 120 ? t + 240 : t - 120, i, r), this.opacity) }, displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 } })) }, function(t, e, n) { "use strict";
        e.b = function(t, e) { var n = Object.create(t.prototype); for (var r in e) n[r] = e[r]; return n }, e.a = function(t, e, n) { t.prototype = e.prototype = n, n.constructor = t } }, function(t, e, n) { "use strict";

        function r(t, e, n, r, i) { var o = t * t,
                a = o * t; return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6 } e.a = r, e.b = function(t) { var e = t.length - 1; return function(n) { var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                    o = t[i],
                    a = t[i + 1],
                    s = i > 0 ? t[i - 1] : 2 * o - a,
                    u = i < e - 1 ? t[i + 2] : 2 * a - o; return r((n - i / e) * e, s, o, a, u) } } }, function(t, e, n) { var r = n(8).vec2;
        t.exports = { at: function(t, e, n) { return (e - t) * n + t }, pointDistance: function(t, e, n, i, o, a) { var s = [n - t, i - e]; if (r.exactEquals(s, [0, 0])) return NaN; var u = [-s[1], s[0]];
                r.normalize(u, u); var c = [o - t, a - e]; return Math.abs(r.dot(c, u)) }, box: function(t, e, n, r, i) { var o = i / 2,
                    a = Math.min(t, n),
                    s = Math.max(t, n); return { minX: a - o, minY: Math.min(e, r) - o, maxX: s + o, maxY: Math.max(e, r) + o } }, len: function(t, e, n, r) { return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e)) } } }, function(t, e, n) {
        function r(t, e, n, r) { var i = 1 - r; return i * (i * t + 2 * r * e) + r * r * n }

        function i(t, e, n, i, o, s, u, c, l) { var h = void 0,
                f = .005,
                p = 1 / 0,
                g = void 0,
                d = void 0,
                y = void 0,
                v = void 0,
                x = void 0,
                m = void 0,
                b = [u, c]; for (v = 0; v < 1; v += .05) d = [r(t, n, o, v), r(e, i, s, v)], (g = a.squaredDistance(b, d)) < p && (h = v, p = g); for (p = 1 / 0, m = 0; m < 32 && !(f < 1e-4); m++) { var _ = h - f,
                    w = h + f;
                d = [r(t, n, o, _), r(e, i, s, _)], g = a.squaredDistance(b, d), _ >= 0 && g < p ? (h = _, p = g) : (y = [r(t, n, o, w), r(e, i, s, w)], x = a.squaredDistance(b, y), w <= 1 && x < p ? (h = w, p = x) : f *= .5) } return l && (l.x = r(t, n, o, h), l.y = r(e, i, s, h)), Math.sqrt(p) } var o = n(3),
            a = n(8).vec2;
        t.exports = { at: r, projectPoint: function(t, e, n, r, o, a, s, u) { var c = {}; return i(t, e, n, r, o, a, s, u, c), c }, pointDistance: i, extrema: function(t, e, n) { var r = t + n - 2 * e; if (o.isNumberEqual(r, 0)) return [.5]; var i = (t - e) / r; return i <= 1 && i >= 0 ? [i] : [] } } }, function(t, e, n) {
        function r(t, e, n, r) { return { x: Math.cos(r) * n + t, y: Math.sin(r) * n + e } }

        function i(t, e, n, r) { var i = void 0,
                o = void 0; return r ? t < e ? (i = e - t, o = 2 * Math.PI - n + t) : t > n && (i = 2 * Math.PI - t + e, o = t - n) : (i = t - e, o = n - t), i > o ? n : e }

        function o(t, e, n, r) { var o = 0; return n - e >= 2 * Math.PI && (o = 2 * Math.PI), e = s.mod(e, 2 * Math.PI), n = s.mod(n, 2 * Math.PI) + o, t = s.mod(t, 2 * Math.PI), r ? e >= n ? t > n && t < e ? t : i(t, n, e, !0) : t < e || t > n ? t : i(t, e, n) : e <= n ? e < t && t < n ? t : i(t, e, n, !0) : t > e || t < n ? t : i(t, n, e) }

        function a(t, e, n, r, i, a, s, c, l) { var h = [s, c],
                f = [t, e],
                p = u.subtract([], h, f),
                g = u.angleTo([1, 0], p);
            g = o(g, r, i, a); var d = [n * Math.cos(g) + t, n * Math.sin(g) + e];
            l && (l.x = d[0], l.y = d[1]); return u.distance(d, h) } var s = n(3),
            u = n(8).vec2;
        t.exports = { nearAngle: o, projectPoint: function(t, e, n, r, i, o, s, u) { var c = {}; return a(t, e, n, r, i, o, s, u, c), c }, pointDistance: a, box: function(t, e, n, i, a, u) { var c = Math.PI / 2,
                    l = Math.PI,
                    h = 3 * Math.PI / 2,
                    f = [],
                    p = o(0, i, a, u);
                0 === p && f.push(r(t, e, n, 0)), (p = o(c, i, a, u)) === c && f.push(r(t, e, n, c)), (p = o(l, i, a, u)) === l && f.push(r(t, e, n, l)), (p = o(h, i, a, u)) === h && f.push(r(t, e, n, h)), f.push(r(t, e, n, i)), f.push(r(t, e, n, a)); var g = 1 / 0,
                    d = -1 / 0,
                    y = 1 / 0,
                    v = -1 / 0; return s.each(f, function(t) { g > t.x && (g = t.x), d < t.x && (d = t.x), y > t.y && (y = t.y), v < t.y && (v = t.y) }), { minX: g, minY: y, maxX: d, maxY: v } } } }, function(t, e, n) { var r = n(56),
            i = n(34);
        t.exports = function(t, e) { for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])]; return n && n == o ? t : void 0 } }, function(t, e, n) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(4),
            o = n(29),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            s = /^\w*$/;
        t.exports = function(t, e) { if (i(t)) return !1; var n = void 0 === t ? "undefined" : r(t); return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || s.test(t) || !a.test(t) || null != e && t in Object(e) } }, function(t, e, n) { var r = n(147),
            i = n(0),
            o = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this)),
                        o = { visible: !0 },
                        a = r.getDefaultCfg(); return r._attrs = o, i.assign(o, a, n), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return {} }, e.prototype.get = function(t) { return this._attrs[t] }, e.prototype.set = function(t, e) { this._attrs[t] = e }, e.prototype.show = function() { this.get("visible") || (this.set("visible", !0), this.changeVisible(!0)) }, e.prototype.hide = function() { this.get("visible") && (this.set("visible", !1), this.changeVisible(!1)) }, e.prototype.changeVisible = function() {}, e.prototype.destroy = function() { this._attrs = {}, this.removeAllListeners(), this.destroyed = !0 }, e }(r);
        t.exports = o }, function(t, e, n) {
        function r(t, e, n, r) { return t[r] + (e[r] - t[r]) * n }

        function i(t) { return "#" + o(t[0]) + o(t[1]) + o(t[2]) }

        function o(t) { return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t }

        function a(t) { var e = []; return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e } var s = n(0),
            u = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
            c = {},
            l = null,
            h = { toRGB: function(t) { if ("#" === t[0] && 7 === t.length) return t;
                    l || (l = function() { var t = document.createElement("i"); return t.title = "Web Colour Picker", t.style.display = "none", document.body.appendChild(t), t }()); var e = void 0; if (c[t]) e = c[t];
                    else { l.style.color = t, e = document.defaultView.getComputedStyle(l, "").getPropertyValue("color"); var n = u.exec(e);
                        n.shift(), e = i(n), c[t] = e } return e }, rgb2arr: a, gradient: function(t) { var e = []; return s.isString(t) && (t = t.split("-")), s.each(t, function(t) {-1 === t.indexOf("#") && (t = h.toRGB(t)), e.push(a(t)) }),
                        function(t) { return function(t, e) { var n = t.length - 1,
                                    o = Math.floor(n * e),
                                    a = n * e - o,
                                    s = t[o],
                                    u = o === n ? s : t[o + 1]; return i([r(s, u, a, 0), r(s, u, a, 1), r(s, u, a, 2)]) }(e, t) } } };
        t.exports = h }, function(t, e, n) { var r = n(173);
        r.LabelsRenderer = n(394), t.exports = r }, function(t, e, n) { var r = n(14);
        n(397), n(398), n(399), n(400), n(401), n(402), n(403), t.exports = r }, function(t, e, n) { var r = n(0),
            i = { splitPoints: function(t) { var e = [],
                        n = t.x,
                        i = t.y; return i = r.isArray(i) ? i : [i], r.each(i, function(t, i) { var o = { x: r.isArray(n) ? n[i] : n, y: t };
                        e.push(o) }), e } };
        t.exports = i }, function(t, e, n) {
        (function(e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                r = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e;
            t.exports = r }).call(e, n(191)) }, function(t, e, n) { var r = n(11),
            i = n(10),
            o = "[object Boolean]";
        t.exports = function(t) { return !0 === t || !1 === t || i(t) && r(t) == o } }, function(t, e, n) { var r = n(11),
            i = n(10),
            o = "[object Number]";
        t.exports = function(t) { return "number" == typeof t || i(t) && r(t) == o } }, function(t, e, n) { var r = n(99),
            i = n(37),
            o = n(27),
            a = n(4),
            s = n(12),
            u = n(28),
            c = n(26),
            l = n(38),
            h = "[object Map]",
            f = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function(t) { if (null == t) return !0; if (s(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || u(t) || l(t) || o(t))) return !t.length; var e = i(t); if (e == h || e == f) return !t.size; if (c(t)) return !r(t).length; for (var n in t)
                if (p.call(t, n)) return !1; return !0 } }, function(t, e, n) { var r = n(26),
            i = n(194),
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t) { if (!r(t)) return i(t); var e = []; for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n); return e } }, function(t, e) { t.exports = function(t, e) { return function(n) { return t(e(n)) } } }, function(t, e) { var n = Function.prototype.toString;
        t.exports = function(t) { if (null != t) { try { return n.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" } }, function(t, e, n) { var r = n(16)(n(9), "Set");
        t.exports = r }, function(t, e, n) {
        (function(t) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                i = n(95),
                o = "object" == r(e) && e && !e.nodeType && e,
                a = o && "object" == r(t) && t && !t.nodeType && t,
                s = a && a.exports === o && i.process,
                u = function() { try { return s && s.binding && s.binding("util") } catch (t) {} }();
            t.exports = u }).call(e, n(67)(t)) }, function(t, e, n) {
        function r(t, e, n, j, E, I) { var D, F = e & S,
                L = e & M,
                R = e & C; if (n && (D = E ? n(t, j, E, I) : n(t)), void 0 !== D) return D; if (!_(t)) return t; var B = m(t); if (B) { if (D = y(t), !F) return l(t, D) } else { var z = d(t),
                    N = z == A || z == k; if (b(t)) return c(t, F); if (z == O || z == P || N && !E) { if (D = L || N ? {} : x(t), !F) return L ? f(t, u(D, t)) : h(t, s(D, t)) } else { if (!T[z]) return E ? t : {};
                    D = v(t, z, r, F) } } I || (I = new i); var V = I.get(t); if (V) return V;
            I.set(t, D); var Y = R ? L ? g : p : L ? keysIn : w,
                W = B ? void 0 : Y(t); return o(W || t, function(i, o) { W && (i = t[o = i]), a(D, o, r(i, e, n, o, t, I)) }), D } var i = n(40),
            o = n(105),
            a = n(45),
            s = n(230),
            u = n(232),
            c = n(108),
            l = n(49),
            h = n(235),
            f = n(236),
            p = n(112),
            g = n(237),
            d = n(37),
            y = n(238),
            v = n(239),
            x = n(116),
            m = n(4),
            b = n(28),
            _ = n(7),
            w = n(18),
            S = 1,
            M = 2,
            C = 4,
            P = "[object Arguments]",
            A = "[object Function]",
            k = "[object GeneratorFunction]",
            O = "[object Object]",
            T = {};
        T[P] = T["[object Array]"] = T["[object ArrayBuffer]"] = T["[object DataView]"] = T["[object Boolean]"] = T["[object Date]"] = T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Map]"] = T["[object Number]"] = T[O] = T["[object RegExp]"] = T["[object Set]"] = T["[object String]"] = T["[object Symbol]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T["[object Error]"] = T[A] = T["[object WeakMap]"] = !1, t.exports = r }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);); return t } }, function(t, e, n) { var r = n(16),
            i = function() { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
        t.exports = i }, function(t, e, n) { var r = n(231),
            i = n(27),
            o = n(4),
            a = n(28),
            s = n(47),
            u = n(38),
            c = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) { var n = o(t),
                l = !n && i(t),
                h = !n && !l && a(t),
                f = !n && !l && !h && u(t),
                p = n || l || h || f,
                g = p ? r(t.length, String) : [],
                d = g.length; for (var y in t) !e && !c.call(t, y) || p && ("length" == y || h && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, d)) || g.push(y); return g } }, function(t, e, n) {
        (function(t) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                i = n(9),
                o = "object" == r(e) && e && !e.nodeType && e,
                a = o && "object" == r(t) && t && !t.nodeType && t,
                s = a && a.exports === o ? i.Buffer : void 0,
                u = s ? s.allocUnsafe : void 0;
            t.exports = function(t, e) { if (e) return t.slice(); var n = t.length,
                    r = u ? u(n) : new t.constructor(n); return t.copy(r), r } }).call(e, n(67)(t)) }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) { var a = t[n];
                e(a, n, t) && (o[i++] = a) } return o } }, function(t, e) { t.exports = function() { return [] } }, function(t, e, n) { var r = n(71),
            i = n(72),
            o = n(70),
            a = n(110),
            s = Object.getOwnPropertySymbols ? function(t) { for (var e = []; t;) r(e, o(t)), t = i(t); return e } : a;
        t.exports = s }, function(t, e, n) { var r = n(113),
            i = n(70),
            o = n(18);
        t.exports = function(t) { return r(t, o, i) } }, function(t, e, n) { var r = n(71),
            i = n(4);
        t.exports = function(t, e, n) { var o = e(t); return i(t) ? o : r(o, n(t)) } }, function(t, e, n) { var r = n(9).Uint8Array;
        t.exports = r }, function(t, e, n) { var r = n(73);
        t.exports = function(t, e) { var n = e ? r(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) } }, function(t, e, n) { var r = n(247),
            i = n(72),
            o = n(26);
        t.exports = function(t) { return "function" != typeof t.constructor || o(t) ? {} : r(i(t)) } }, function(t, e, n) { var r = n(76),
            i = n(252);
        t.exports = function(t) { return r(function(e, n) { var r = -1,
                    o = n.length,
                    a = o > 1 ? n[o - 1] : void 0,
                    s = o > 2 ? n[2] : void 0; for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, s && i(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) { var u = n[r];
                    u && t(e, u, r, a) } return e }) } }, function(t, e, n) { var r = n(248),
            i = Math.max;
        t.exports = function(t, e, n) { return e = i(void 0 === e ? t.length - 1 : e, 0),
                function() { for (var o = arguments, a = -1, s = i(o.length - e, 0), u = Array(s); ++a < s;) u[a] = o[e + a];
                    a = -1; for (var c = Array(e + 1); ++a < e;) c[a] = o[a]; return c[e] = n(u), r(t, this, c) } } }, function(t, e, n) { var r = n(249),
            i = n(251)(r);
        t.exports = i }, function(t, e, n) { var r = n(46),
            i = n(30);
        t.exports = function(t, e, n) {
            (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n) } }, function(t, e, n) { var r = n(255)();
        t.exports = r }, function(t, e, n) { var r = n(12),
            i = n(10);
        t.exports = function(t) { return i(t) && r(t) } }, function(t, e, n) { var r = n(11),
            i = n(72),
            o = n(10),
            a = "[object Object]",
            s = Function.prototype,
            u = Object.prototype,
            c = s.toString,
            l = u.hasOwnProperty,
            h = c.call(Object);
        t.exports = function(t) { if (!o(t) || r(t) != a) return !1; var e = i(t); if (null === e) return !0; var n = l.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && c.call(n) == h } }, function(t, e, n) { var r = n(125)("toUpperCase");
        t.exports = r }, function(t, e, n) { var r = n(258),
            i = n(126),
            o = n(127),
            a = n(17);
        t.exports = function(t) { return function(e) { e = a(e); var n = i(e) ? o(e) : void 0,
                    s = n ? n[0] : e.charAt(0),
                    u = n ? r(n, 1).join("") : e.slice(1); return s[t]() + u } } }, function(t, e) { var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function(t) { return n.test(t) } }, function(t, e, n) { var r = n(260),
            i = n(126),
            o = n(261);
        t.exports = function(t) { return i(t) ? o(t) : r(t) } }, function(t, e, n) { var r = n(105),
            i = n(52),
            o = n(271),
            a = n(4);
        t.exports = function(t, e) { return (a(t) ? r : i)(t, o(e)) } }, function(t, e, n) { var r = n(53);
        t.exports = function(t, e) { return r(t, e) } }, function(t, e, n) { var r = n(131),
            i = n(275),
            o = n(132),
            a = 1,
            s = 2;
        t.exports = function(t, e, n, u, c, l) { var h = n & a,
                f = t.length,
                p = e.length; if (f != p && !(h && p > f)) return !1; var g = l.get(t); if (g && l.get(e)) return g == e; var d = -1,
                y = !0,
                v = n & s ? new r : void 0; for (l.set(t, e), l.set(e, t); ++d < f;) { var x = t[d],
                    m = e[d]; if (u) var b = h ? u(m, x, d, e, t, l) : u(x, m, d, t, e, l); if (void 0 !== b) { if (b) continue;
                    y = !1; break } if (v) { if (!i(e, function(t, e) { if (!o(v, e) && (x === t || c(x, t, n, u, l))) return v.push(e) })) { y = !1; break } } else if (x !== m && !c(x, m, n, u, l)) { y = !1; break } } return l.delete(t), l.delete(e), y } }, function(t, e, n) {
        function r(t) { var e = -1,
                n = null == t ? 0 : t.length; for (this.__data__ = new i; ++e < n;) this.add(t[e]) } var i = n(69),
            o = n(273),
            a = n(274);
        r.prototype.add = r.prototype.push = o, r.prototype.has = a, t.exports = r }, function(t, e) { t.exports = function(t, e) { return t.has(e) } }, function(t, e, n) { var r = n(15),
            i = n(49),
            o = n(37),
            a = n(12),
            s = n(64),
            u = n(278),
            c = n(75),
            l = n(31),
            h = n(127),
            f = n(279),
            p = "[object Map]",
            g = "[object Set]",
            d = r ? r.iterator : void 0;
        t.exports = function(t) { if (!t) return []; if (a(t)) return s(t) ? h(t) : i(t); if (d && t[d]) return u(t[d]()); var e = o(t); return (e == p ? c : e == g ? l : f)(t) } }, function(t, e) { var n = document.createElement("table"),
            r = document.createElement("tr"),
            i = /^\s*<(\w+|!)[^>]*>/,
            o = { tr: document.createElement("tbody"), tbody: n, thead: n, tfoot: n, td: r, th: r, "*": document.createElement("div") };
        t.exports = { getBoundingClientRect: function(t) { var e = t.getBoundingClientRect(),
                    n = document.documentElement.clientTop,
                    r = document.documentElement.clientLeft; return { top: e.top - n, bottom: e.bottom - n, left: e.left - r, right: e.right - r } }, getStyle: function(t, e) { return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e] }, modifyCSS: function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]); return t }, createDom: function(t) { var e = i.test(t) && RegExp.$1;
                e in o || (e = "*"); var n = o[e]; return t = t.replace(/(^\s*)|(\s*$)/g, ""), n.innerHTML = "" + t, n.childNodes[0] }, getRatio: function() { return window.devicePixelRatio ? window.devicePixelRatio : 2 }, getWidth: function(t) { var e = this.getStyle(t, "width"); return "auto" === e && (e = t.offsetWidth), parseFloat(e) }, getHeight: function(t) { var e = this.getStyle(t, "height"); return "auto" === e && (e = t.offsetHeight), parseFloat(e) }, getOuterHeight: function(t) { var e = this.getHeight(t),
                    n = parseFloat(this.getStyle(t, "borderTopWidth")) || 0,
                    r = parseFloat(this.getStyle(t, "paddingTop")),
                    i = parseFloat(this.getStyle(t, "paddingBottom")); return e + n + (parseFloat(this.getStyle(t, "borderBottomWidth")) || 0) + r + i }, getOuterWidth: function(t) { var e = this.getWidth(t),
                    n = parseFloat(this.getStyle(t, "borderLeftWidth")) || 0,
                    r = parseFloat(this.getStyle(t, "paddingLeft")),
                    i = parseFloat(this.getStyle(t, "paddingRight")); return e + n + (parseFloat(this.getStyle(t, "borderRightWidth")) || 0) + r + i }, addEventListener: function(t, e, n) { return t.addEventListener ? (t.addEventListener(e, n, !1), { remove: function() { t.removeEventListener(e, n, !1) } }) : t.attachEvent ? (t.attachEvent("on" + e, n), { remove: function() { t.detachEvent("on" + e, n) } }) : void 0 }, requestAnimationFrame: function(t) { return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { return setTimeout(t, 16) })(t) } } }, function(t, e, n) { var r = n(3),
            i = function(t, e, n, r) { this.type = t, this.target = null, this.currentTarget = null, this.bubbles = n, this.cancelable = r, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.removed = !1, this.event = e };
        r.augment(i, { preventDefault: function() { this.defaultPrevented = this.cancelable && !0 }, stopPropagation: function() { this.propagationStopped = !0 }, remove: function() { this.remove = !0 }, clone: function() { return r.clone(this) }, toString: function() { return "[Event (type=" + this.type + ")]" } }), t.exports = i }, function(t, e, n) {
        function r(t, e, n) { for (var r = void 0, i = t.length - 1; i >= 0; i--) { var o = t[i]; if (o.__cfg.visible && o.__cfg.capture && (o.isGroup ? r = o.getShape(e, n) : o.isHit(e, n) && (r = o)), r) break } return r }

        function i(t) { if (!t.__cfg && t !== l) { var e = t.superclass.constructor;
                e && !e.__cfg && i(e), t.__cfg = {}, o.merge(t.__cfg, e.__cfg), o.merge(t.__cfg, t.CFG) } } var o = n(3),
            a = n(137),
            s = n(314),
            u = {},
            c = "_INDEX",
            l = function t(e) { t.superclass.constructor.call(this, e), this.set("children", []), this._beforeRenderUI(), this._renderUI(), this._bindUI() };
        o.extend(l, a), o.augment(l, { isGroup: !0, canFill: !0, canStroke: !0, getDefaultCfg: function() { return i(this.constructor), o.merge({}, this.constructor.__cfg) }, _beforeRenderUI: function() {}, _renderUI: function() {}, _bindUI: function() {}, addShape: function(t, e) { var n = this.get("canvas");
                e = e || {}; var r = u[t]; if (r || (r = o.upperFirst(t), u[t] = r), e.attrs) { var i = e.attrs; if ("text" === t) { var a = n.get("fontFamily");
                        a && (i.fontFamily = i.fontFamily ? i.fontFamily : a) } } e.canvas = n, e.type = t; var c = new s[r](e); return this.add(c), c }, addGroup: function(t, e) { var n = this.get("canvas"),
                    r = void 0; if (e = o.merge({}, e), o.isFunction(t)) e ? (e.canvas = n, e.parent = this, r = new t(e)) : r = new t({ canvas: n, parent: this }), this.add(r);
                else if (o.isObject(t)) t.canvas = n, r = new l(t), this.add(r);
                else { if (void 0 !== t) return !1;
                    r = new l, this.add(r) } return r }, renderBack: function(t, e) { var n = this.get("backShape"),
                    r = this.getBBox(); return o.merge(e, { x: r.minX - t[3], y: r.minY - t[0], width: r.width + t[1] + t[3], height: r.height + t[0] + t[2] }), n ? n.attr(e) : n = this.addShape("rect", { zIndex: -1, attrs: e }), this.set("backShape", n), this.sort(), n }, removeChild: function(t, e) { if (arguments.length >= 2) this.contain(t) && t.remove(e);
                else { if (1 === arguments.length) { if (!o.isBoolean(t)) return this.contain(t) && t.remove(!0), this;
                        e = t } 0 === arguments.length && (e = !0), l.superclass.remove.call(this, e) } return this }, add: function(t) { var e = this,
                    n = e.get("children"); if (o.isArray(t)) o.each(t, function(t) { var n = t.get("parent");
                    n && n.removeChild(t, !1), e.__setEvn(t) }), n.push.apply(n, t);
                else { var r = t,
                        i = r.get("parent");
                    i && i.removeChild(r, !1), e.__setEvn(r), n.push(r) } return e }, contain: function(t) { return this.get("children").indexOf(t) > -1 }, getChildByIndex: function(t) { return this.get("children")[t] }, getFirst: function() { return this.getChildByIndex(0) }, getLast: function() { var t = this.get("children").length - 1; return this.getChildByIndex(t) }, __setEvn: function(t) { t.__cfg.parent = this, t.__cfg.context = this.__cfg.context, t.__cfg.canvas = this.__cfg.canvas; var e = t.__attrs.clip;
                e && (e.setSilent("parent", this), e.setSilent("context", this.get("context"))); var n = t.__cfg.children;
                n && o.each(n, function(e) { t.__setEvn(e) }) }, getBBox: function() { var t = 1 / 0,
                    e = -1 / 0,
                    n = 1 / 0,
                    r = -1 / 0,
                    i = this.get("children");
                o.each(i, function(i) { if (i.get("visible")) { var o = i.getBBox(); if (!o) return !0; var a = [o.minX, o.minY, 1],
                            s = [o.minX, o.maxY, 1],
                            u = [o.maxX, o.minY, 1],
                            c = [o.maxX, o.maxY, 1];
                        i.apply(a), i.apply(s), i.apply(u), i.apply(c); var l = Math.min(a[0], s[0], u[0], c[0]),
                            h = Math.max(a[0], s[0], u[0], c[0]),
                            f = Math.min(a[1], s[1], u[1], c[1]),
                            p = Math.max(a[1], s[1], u[1], c[1]);
                        l < t && (t = l), h > e && (e = h), f < n && (n = f), p > r && (r = p) } }); var a = { minX: t, minY: n, maxX: e, maxY: r }; return a.x = a.minX, a.y = a.minY, a.width = a.maxX - a.minX, a.height = a.maxY - a.minY, a }, drawInner: function(t) { for (var e = this.get("children"), n = 0; n < e.length; n++) { e[n].draw(t) } return this }, getCount: function() { return this.get("children").length }, sort: function() { var t = this.get("children"); return o.each(t, function(t, e) { return t[c] = e, t }), t.sort(function(t) { return function(e, n) { var r = t(e, n); return 0 === r ? e[c] - n[c] : r } }(function(t, e) { return t.get("zIndex") - e.get("zIndex") })), this }, find: function(t) { return this.findBy(function(e) { return e.get("id") === t }) }, findBy: function(t) { var e = this.get("children"),
                    n = null; return o.each(e, function(e) { if (t(e) ? n = e : e.findBy && (n = e.findBy(t)), n) return !1 }), n }, findAllBy: function(t) { var e = this.get("children"),
                    n = [],
                    r = []; return o.each(e, function(e) { t(e) && n.push(e), e.findAllBy && (r = e.findAllBy(t), n = n.concat(r)) }), n }, getShape: function(t, e) { var n = this.__attrs.clip,
                    i = this.__cfg.children,
                    o = void 0; return n ? n.inside(t, e) && (o = r(i, t, e)) : o = r(i, t, e), o }, clearTotalMatrix: function() { if (this.get("totalMatrix")) { this.setSilent("totalMatrix", null); for (var t = this.__cfg.children, e = 0; e < t.length; e++) { t[e].clearTotalMatrix() } } }, clear: function() { for (var t = this.get("children"); 0 !== t.length;) t[t.length - 1].remove(); return this }, destroy: function() { this.get("destroyed") || (this.clear(), l.superclass.destroy.call(this)) } }), t.exports = l }, function(t, e, n) { var r = n(3),
            i = n(281),
            o = n(282),
            a = n(286),
            s = n(146),
            u = n(147),
            c = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash"],
            l = function(t) { this.__cfg = { zIndex: 0, capture: !0, visible: !0, destroyed: !1 }, r.assign(this.__cfg, this.getDefaultCfg(), t), this.initAttrs(this.__cfg.attrs), this.initTransform(), this.init() };
        l.CFG = { id: null, zIndex: 0, canvas: null, parent: null, capture: !0, context: null, visible: !0, destroyed: !1 }, r.augment(l, i, o, u, a, { init: function() { this.setSilent("animable", !0), this.setSilent("animating", !1); var t = this.__attrs;
                t && t.rotate && this.rotateAtStart(t.rotate) }, getParent: function() { return this.get("parent") }, getDefaultCfg: function() { return {} }, set: function(t, e) { var n = "__set" + r.upperFirst(t); return this[n] && (e = this[n](e)), this.__cfg[t] = e, this }, setSilent: function(t, e) { this.__cfg[t] = e }, get: function(t) { return this.__cfg[t] }, draw: function(t) { this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this.restoreContext(t)) }, setContext: function(t) { var e = this.__attrs.clip;
                t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this.resetTransform(t) }, restoreContext: function(t) { t.restore() }, resetContext: function(t) { var e = this.__attrs; if (!this.isGroup)
                    for (var n in e)
                        if (c.indexOf(n) > -1) { var i = e[n]; "fillStyle" === n && (i = s.parseStyle(i, this)), "strokeStyle" === n && (i = s.parseStyle(i, this)), "lineDash" === n && t.setLineDash ? r.isArray(i) ? t.setLineDash(i) : r.isString(i) && t.setLineDash(i.split(" ")) : t[n] = i } }, drawInner: function() {}, show: function() { return this.set("visible", !0), this }, hide: function() { return this.set("visible", !1), this }, remove: function(t) { if (void 0 === t && (t = !0), this.get("parent")) { var e = this.get("parent").get("children");
                    r.remove(e, this) } return t && this.destroy(), this }, destroy: function() { this.get("destroyed") || (this.__cfg = {}, this.__attrs = null, this.removeEvent(), this.set("destroyed", !0)) }, __setZIndex: function(t) { return this.__cfg.zIndex = t, r.isNil(this.get("parent")) || this.get("parent").sort(), t }, __setAttrs: function(t) { return this.attr(t), t }, setZIndex: function(t) { return this.__cfg.zIndex = t, t }, clone: function() { return r.clone(this) }, getBBox: function() { return { minX: 0, maxX: 0, minY: 0, maxY: 0 } } }), t.exports = l }, function(t, e, n) { "use strict";
        n.d(e, "a", function() { return r }), n.d(e, "b", function() { return i }); var r = Math.PI / 180,
            i = 180 / Math.PI }, function(t, e, n) { "use strict";

        function r(t) { return function(e) { var n, r, o = e.length,
                    a = new Array(o),
                    s = new Array(o),
                    u = new Array(o); for (n = 0; n < o; ++n) r = Object(i.f)(e[n]), a[n] = r.r || 0, s[n] = r.g || 0, u[n] = r.b || 0; return a = t(a), s = t(s), u = t(u), r.opacity = 1,
                    function(t) { return r.r = a(t), r.g = s(t), r.b = u(t), r + "" } } } n.d(e, "b", function() { return u }), n.d(e, "c", function() { return c }); var i = n(21),
            o = n(84),
            a = n(140),
            s = n(32);
        e.a = function t(e) {
            function n(t, e) { var n = r((t = Object(i.f)(t)).r, (e = Object(i.f)(e)).r),
                    o = r(t.g, e.g),
                    a = r(t.b, e.b),
                    u = Object(s.a)(t.opacity, e.opacity); return function(e) { return t.r = n(e), t.g = o(e), t.b = a(e), t.opacity = u(e), t + "" } } var r = Object(s.b)(e); return n.gamma = t, n }(1); var u = r(o.b),
            c = r(a.a) }, function(t, e, n) { "use strict"; var r = n(84);
        e.a = function(t) { var e = t.length; return function(n) { var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                    o = t[(i + e - 1) % e],
                    a = t[i % e],
                    s = t[(i + 1) % e],
                    u = t[(i + 2) % e]; return Object(r.a)((n - i / e) * e, o, a, s, u) } } }, function(t, e, n) { "use strict";
        e.a = function(t) { return function() { return t } } }, function(t, e, n) { "use strict"; var r = n(81);
        e.a = function(t, e) { var n, i = e ? e.length : 0,
                o = t ? Math.min(i, t.length) : 0,
                a = new Array(i),
                s = new Array(i); for (n = 0; n < o; ++n) a[n] = Object(r.a)(t[n], e[n]); for (; n < i; ++n) s[n] = e[n]; return function(t) { for (n = 0; n < o; ++n) s[n] = a[n](t); return s } } }, function(t, e, n) { "use strict";
        e.a = function(t, e) { var n = new Date; return t = +t, e -= t,
                function(r) { return n.setTime(t + e * r), n } } }, function(t, e, n) { "use strict"; var r = n(81),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        e.a = function(t, e) { var n, o = {},
                a = {};
            null !== t && "object" === (void 0 === t ? "undefined" : i(t)) || (t = {}), null !== e && "object" === (void 0 === e ? "undefined" : i(e)) || (e = {}); for (n in e) n in t ? o[n] = Object(r.a)(t[n], e[n]) : a[n] = e[n]; return function(t) { for (n in o) a[n] = o[n](t); return a } } }, function(t, e, n) { "use strict"; var r = n(54),
            i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            o = new RegExp(i.source, "g");
        e.a = function(t, e) { var n, a, s, u = i.lastIndex = o.lastIndex = 0,
                c = -1,
                l = [],
                h = []; for (t += "", e += "";
                (n = i.exec(t)) && (a = o.exec(e));)(s = a.index) > u && (s = e.slice(u, s), l[c] ? l[c] += s : l[++c] = s), (n = n[0]) === (a = a[0]) ? l[c] ? l[c] += a : l[++c] = a : (l[++c] = null, h.push({ i: c, x: Object(r.a)(n, a) })), u = o.lastIndex; return u < e.length && (s = e.slice(u), l[c] ? l[c] += s : l[++c] = s), l.length < 2 ? h[0] ? function(t) { return function(e) { return t(e) + "" } }(h[0].x) : function(t) { return function() { return t } }(e) : (e = h.length, function(t) { for (var n, r = 0; r < e; ++r) l[(n = h[r]).i] = n.x(t); return l.join("") }) } }, function(t, e, n) {
        function r(t, e) { var n = t.match(l);
            i.each(n, function(t) { t = t.split(":"), e.addColorStop(t[0], t[1]) }) } var i = n(3),
            o = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
            a = /[^\s\,]+/gi,
            s = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
            u = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
            c = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
            l = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
            h = {};
        t.exports = { parsePath: function(t) { return t = t || [], i.isArray(t) ? t : i.isString(t) ? (t = t.match(o), i.each(t, function(e, n) { if ((e = e.match(a))[0].length > 1) { var r = e[0].charAt(0);
                        e.splice(1, 0, e[0].substr(1)), e[0] = r } i.each(e, function(t, n) { isNaN(t) || (e[n] = +t) }), t[n] = e }), t) : void 0 }, parseStyle: function(t, e) { if (i.isString(t)) { if ("(" === t[1] || "(" === t[2]) { if ("l" === t[0]) return function(t, e) { var n = s.exec(t),
                                o = i.mod(i.toRadian(parseFloat(n[1])), 2 * Math.PI),
                                a = n[2],
                                u = e.getBBox(),
                                c = void 0,
                                l = void 0;
                            o >= 0 && o < .5 * Math.PI ? (c = { x: u.minX, y: u.minY }, l = { x: u.maxX, y: u.maxY }) : .5 * Math.PI <= o && o < Math.PI ? (c = { x: u.maxX, y: u.minY }, l = { x: u.minX, y: u.maxY }) : Math.PI <= o && o < 1.5 * Math.PI ? (c = { x: u.maxX, y: u.maxY }, l = { x: u.minX, y: u.minY }) : (c = { x: u.minX, y: u.maxY }, l = { x: u.maxX, y: u.minY }); var h = Math.tan(o),
                                f = h * h,
                                p = (l.x - c.x + h * (l.y - c.y)) / (f + 1) + c.x,
                                g = h * (l.x - c.x + h * (l.y - c.y)) / (f + 1) + c.y,
                                d = e.get("context").createLinearGradient(c.x, c.y, p, g); return r(a, d), d }(t, e); if ("r" === t[0]) return function(t, e) { var n = u.exec(t),
                                i = parseFloat(n[1]),
                                o = parseFloat(n[2]),
                                a = parseFloat(n[3]),
                                s = n[4],
                                c = e.getBBox(),
                                l = e.get("context"),
                                h = c.maxX - c.minX,
                                f = c.maxY - c.minY,
                                p = Math.sqrt(h * h + f * f) / 2,
                                g = l.createRadialGradient(c.minX + h * i, c.minY + f * o, a * p, c.minX + h / 2, c.minY + f / 2, p); return r(s, g), g }(t, e); if ("p" === t[0]) return function(t, e) {
                            function n() { var n = e.get("context");
                                r = n.createPattern(i, a), e.setSilent("pattern", r), e.setSilent("patternSource", t) } if (e.get("patternSource") && e.get("patternSource") === t) return e.get("pattern"); var r = void 0,
                                i = void 0,
                                o = c.exec(t),
                                a = o[1],
                                s = o[2]; switch (a) {
                                case "a":
                                    a = "repeat"; break;
                                case "x":
                                    a = "repeat-x"; break;
                                case "y":
                                    a = "repeat-y"; break;
                                case "n":
                                    a = "no-repeat"; break;
                                default:
                                    a = "no-repeat" } return i = new Image, s.match(/^data:/i) || (i.crossOrigin = "Anonymous"), i.src = s, i.complete ? n() : (i.onload = n, i.src = i.src), r }(t, e) } return t } }, numberToColor: function(t) { var e = h[t]; if (!e) { for (var n = t.toString(16), r = n.length; r < 6; r++) n = "0" + n;
                    e = "#" + n, h[t] = e } return e } } }, function(t, e, n) { var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };! function(e) { "use strict";

            function o() {}

            function a(t, e) { for (var n = t.length; n--;)
                    if (t[n].listener === e) return n; return -1 }

            function s(t) { return function() { return this[t].apply(this, arguments) } }

            function u(t) { return "function" == typeof t || t instanceof RegExp || !(!t || "object" !== (void 0 === t ? "undefined" : i(t))) && u(t.listener) } var c = o.prototype,
                l = e.EventEmitter;
            c.getListeners = function(t) { var e, n, r = this._getEvents(); if (t instanceof RegExp) { e = {}; for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]) } else e = r[t] || (r[t] = []); return e }, c.flattenListeners = function(t) { var e, n = []; for (e = 0; e < t.length; e += 1) n.push(t[e].listener); return n }, c.getListenersAsObject = function(t) { var e, n = this.getListeners(t); return n instanceof Array && ((e = {})[t] = n), e || n }, c.addListener = function(t, e) { if (!u(e)) throw new TypeError("listener must be a function"); var n, r = this.getListenersAsObject(t),
                    o = "object" === (void 0 === e ? "undefined" : i(e)); for (n in r) r.hasOwnProperty(n) && -1 === a(r[n], e) && r[n].push(o ? e : { listener: e, once: !1 }); return this }, c.on = s("addListener"), c.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, c.once = s("addOnceListener"), c.defineEvent = function(t) { return this.getListeners(t), this }, c.defineEvents = function(t) { for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]); return this }, c.removeListener = function(t, e) { var n, r, i = this.getListenersAsObject(t); for (r in i) i.hasOwnProperty(r) && -1 !== (n = a(i[r], e)) && i[r].splice(n, 1); return this }, c.off = s("removeListener"), c.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, c.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, c.manipulateListeners = function(t, e, n) { var r, o, a = t ? this.removeListener : this.addListener,
                    s = t ? this.removeListeners : this.addListeners; if ("object" !== (void 0 === e ? "undefined" : i(e)) || e instanceof RegExp)
                    for (r = n.length; r--;) a.call(this, e, n[r]);
                else
                    for (r in e) e.hasOwnProperty(r) && (o = e[r]) && ("function" == typeof o ? a.call(this, r, o) : s.call(this, r, o)); return this }, c.removeEvent = function(t) { var e, n = void 0 === t ? "undefined" : i(t),
                    r = this._getEvents(); if ("string" === n) delete r[t];
                else if (t instanceof RegExp)
                    for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
                else delete this._events; return this }, c.removeAllListeners = s("removeEvent"), c.emitEvent = function(t, e) { var n, r, i, o, a = this.getListenersAsObject(t); for (o in a)
                    if (a.hasOwnProperty(o))
                        for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener); return this }, c.trigger = s("emitEvent"), c.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, c.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, c._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, c._getEvents = function() { return this._events || (this._events = {}) }, o.noConflict = function() { return e.EventEmitter = l, o }, void 0 !== (r = function() { return o }.call(e, n, e, t)) && (t.exports = r) }(this || {}) }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.ATTRS = { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 1 }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "rect", getDefaultAttrs: function() { return { lineWidth: 1, radius: 0 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = t.width,
                    i = t.height,
                    o = t.lineWidth / 2; return { minX: e - o, minY: n - o, maxX: e + r + o, maxY: n + i + o } }, isPointInPath: function(t, e) { var n = this.hasFill(),
                    r = this.hasStroke(); return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) { var n = this.get("context"); return !!n && (this.createPath(), n.isPointInPath(t, e)) }, __isPointInStroke: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    a = n.width,
                    s = n.height,
                    u = n.radius,
                    c = n.lineWidth; if (0 === u) { var l = c / 2; return o.line(r - l, i, r + a + l, i, c, t, e) || o.line(r + a, i - l, r + a, i + s + l, c, t, e) || o.line(r + a + l, i + s, r - l, i + s, c, t, e) || o.line(r, i + s + l, r, i - l, c, t, e) } return o.line(r + u, i, r + a - u, i, c, t, e) || o.line(r + a, i + u, r + a, i + s - u, c, t, e) || o.line(r + a - u, i + s, r + u, i + s, c, t, e) || o.line(r, i + s - u, r, i + u, c, t, e) || o.arcline(r + a - u, i + u, u, 1.5 * Math.PI, 2 * Math.PI, !1, c, t, e) || o.arcline(r + a - u, i + s - u, u, 0, .5 * Math.PI, !1, c, t, e) || o.arcline(r + u, i + s - u, u, .5 * Math.PI, Math.PI, !1, c, t, e) || o.arcline(r + u, i + u, u, Math.PI, 1.5 * Math.PI, !1, c, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x,
                    r = e.y,
                    i = e.width,
                    o = e.height,
                    a = e.radius;
                (t = t || this.get("context")).beginPath(), 0 === a ? t.rect(n, r, i, o) : (t.moveTo(n + a, r), t.lineTo(n + i - a, r), t.arc(n + i - a, r + a, a, -Math.PI / 2, 0, !1), t.lineTo(n + i, r + o - a), t.arc(n + i - a, r + o - a, a, 0, Math.PI / 2, !1), t.lineTo(n + a, r + o), t.arc(n + a, r + o - a, a, Math.PI / 2, Math.PI, !1), t.lineTo(n, r + a), t.arc(n + a, r + a, a, Math.PI, 3 * Math.PI / 2, !1), t.closePath()) } }), t.exports = a }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.ATTRS = { x: 0, y: 0, r: 0, lineWidth: 1 }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "circle", getDefaultAttrs: function() { return { lineWidth: 1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = t.r,
                    i = t.lineWidth / 2 + r; return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i } }, isPointInPath: function(t, e) { var n = this.hasFill(),
                    r = this.hasStroke(); return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    a = n.r; return o.circle(r, i, a, t, e) }, __isPointInStroke: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    a = n.r,
                    s = n.lineWidth; return o.arcline(r, i, a, 0, 2 * Math.PI, !1, s, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x,
                    r = e.y,
                    i = e.r;
                (t = t || self.get("context")).beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1) } }), t.exports = a }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = n(8).mat3,
            s = n(8).vec3,
            u = function t(e) { t.superclass.constructor.call(this, e) };
        u.ATTRS = { x: 0, y: 0, rx: 1, ry: 1, lineWidth: 1 }, r.extend(u, i), r.augment(u, { canFill: !0, canStroke: !0, type: "ellipse", getDefaultAttrs: function() { return { lineWidth: 1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = t.rx,
                    i = t.ry,
                    o = t.lineWidth,
                    a = r + o / 2,
                    s = i + o / 2; return { minX: e - a, minY: n - s, maxX: e + a, maxY: n + s } }, isPointInPath: function(t, e) { var n = this.hasFill(),
                    r = this.hasStroke(); return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    u = n.rx,
                    c = n.ry,
                    l = u > c ? u : c,
                    h = u > c ? 1 : u / c,
                    f = u > c ? c / u : 1,
                    p = [t, e, 1],
                    g = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                a.scale(g, g, [h, f]), a.translate(g, g, [r, i]); var d = a.invert([], g); return s.transformMat3(p, p, d), o.circle(0, 0, l, p[0], p[1]) }, __isPointInStroke: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    u = n.rx,
                    c = n.ry,
                    l = n.lineWidth,
                    h = u > c ? u : c,
                    f = u > c ? 1 : u / c,
                    p = u > c ? c / u : 1,
                    g = [t, e, 1],
                    d = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                a.scale(d, d, [f, p]), a.translate(d, d, [r, i]); var y = a.invert([], d); return s.transformMat3(g, g, y), o.arcline(0, 0, h, 0, 2 * Math.PI, !1, l, g[0], g[1]) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x,
                    r = e.y,
                    i = e.rx,
                    o = e.ry;
                t = t || self.get("context"); var s = i > o ? i : o,
                    u = i > o ? 1 : i / o,
                    c = i > o ? o / i : 1,
                    l = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                a.scale(l, l, [u, c]), a.translate(l, l, [n, r]), t.beginPath(), t.save(), t.transform(l[0], l[1], l[3], l[4], l[6], l[7]), t.arc(0, 0, s, 0, 2 * Math.PI), t.restore(), t.closePath() } }), t.exports = u }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(315),
            a = n(146),
            s = n(22),
            u = n(79),
            c = n(55),
            l = function t(e) { t.superclass.constructor.call(this, e) };
        l.ATTRS = { path: null, lineWidth: 1, curve: null, tCache: null, startArrow: !1, endArrow: !1 }, r.extend(l, i), r.augment(l, { canFill: !0, canStroke: !0, type: "path", getDefaultAttrs: function() { return { lineWidth: 1, startArrow: !1, endArrow: !1 } }, __afterSetAttrPath: function(t) { if (r.isNil(t)) return this.setSilent("segments", null), void this.setSilent("box", void 0); var e = a.parsePath(t),
                    n = void 0,
                    i = []; if (r.isArray(e) && 0 !== e.length && ("M" === e[0][0] || "m" === e[0][0])) { for (var s = e.length, u = 0; u < e.length; u++) { var c = e[u];
                        n = new o(c, n, u === s - 1), i.push(n) } this.setSilent("segments", i), this.set("tCache", null), this.setSilent("box", null) } }, __afterSetAttrAll: function(t) { t.path && this.__afterSetAttrPath(t.path) }, calculateBox: function() { var t = this.__attrs,
                    e = t.lineWidth,
                    n = t.lineAppendWidth || 0,
                    i = this.get("segments"); if (!i) return null;
                e += n; var o = 1 / 0,
                    a = -1 / 0,
                    s = 1 / 0,
                    u = -1 / 0; return r.each(i, function(t) { t.getBBox(e); var n = t.box;
                    n && (n.minX < o && (o = n.minX), n.maxX > a && (a = n.maxX), n.minY < s && (s = n.minY), n.maxY > u && (u = n.maxY)) }), { minX: o, minY: s, maxX: a, maxY: u } }, isPointInPath: function(t, e) { var n = this.hasFill(),
                    r = this.hasStroke(); return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) { var n = this.get("context"); if (n) return this.createPath(), n.isPointInPath(t, e) }, __isPointInStroke: function(t, e) { var n = this.get("segments"); if (!r.isEmpty(n)) { var i = this.__attrs,
                        o = i.lineWidth;
                    o += i.lineAppendWidth || 0; for (var a = 0, s = n.length; a < s; a++)
                        if (n[a].isInside(t, e, o)) return !0 } return !1 }, __setTcache: function() { var t = 0,
                    e = 0,
                    n = [],
                    i = void 0,
                    o = void 0,
                    a = void 0,
                    s = void 0,
                    u = this.curve;
                u && (r.each(u, function(e, n) { a = u[n + 1], s = e.length, a && (t += c.len(e[s - 2], e[s - 1], a[1], a[2], a[3], a[4], a[5], a[6])) }), r.each(u, function(r, l) { a = u[l + 1], s = r.length, a && ((i = [])[0] = e / t, o = c.len(r[s - 2], r[s - 1], a[1], a[2], a[3], a[4], a[5], a[6]), e += o, i[1] = e / t, n.push(i)) }), this.tCache = n) }, __calculateCurve: function() { var t = this.__attrs.path;
                this.curve = u.pathTocurve(t) }, getPoint: function(t) { var e = this.tCache,
                    n = void 0,
                    i = void 0;
                e || (this.__calculateCurve(), this.__setTcache(), e = this.tCache); var o = this.curve; if (!e) return o ? { x: o[0][1], y: o[0][2] } : null;
                r.each(e, function(e, r) { t >= e[0] && t <= e[1] && (n = (t - e[0]) / (e[1] - e[0]), i = r) }); var a = o[i]; if (r.isNil(a) || r.isNil(i)) return null; var s = a.length,
                    u = o[i + 1]; return { x: c.at(a[s - 2], u[1], u[3], u[5], 1 - n), y: c.at(a[s - 1], u[2], u[4], u[6], 1 - n) } }, createPath: function(t) { var e = this.__attrs,
                    n = this.get("segments"); if (r.isArray(n)) {
                    (t = t || this.get("context")).beginPath(); var i = e.path,
                        o = void 0,
                        a = void 0,
                        u = !1;
                    ("z" === i[i.length - 1] || "Z" === i[i.length - 1] || e.fill) && (u = !0); var c = n.length;
                    c > 1 && !u && (o = n[0].endPoint, a = n[1].endPoint, s.addStartArrow(t, e, a.x, a.y, o.x, o.y)); for (var l = 0, h = c; l < h; l++) n[l].draw(t);
                    c > 1 && !u && (o = n[c - 2].endPoint, a = n[c - 1].endPoint, s.addEndArrow(t, e, o.x, o.y, a.x, a.y)) } } }), t.exports = l }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.ATTRS = { x: 0, y: 0, text: null, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom", lineHeight: null, textArr: null }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "text", getDefaultAttrs: function() { return { lineWidth: 1, lineCount: 1, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom" } }, initTransform: function() { this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]); var t = this.__attrs.fontSize;
                t && +t < 12 && this.transform([
                    ["t", -1 * this.__attrs.x, -1 * this.__attrs.y],
                    ["s", +t / 12, +t / 12],
                    ["t", this.__attrs.x, this.__attrs.y]
                ]) }, __assembleFont: function() { var t = this.__attrs,
                    e = t.fontSize,
                    n = t.fontFamily,
                    r = t.fontWeight,
                    i = t.fontStyle,
                    o = t.fontVariant;
                t.font = [i, o, r, e + "px", n].join(" ") }, __afterSetAttrFontSize: function() { this.__assembleFont() }, __afterSetAttrFontFamily: function() { this.__assembleFont() }, __afterSetAttrFontWeight: function() { this.__assembleFont() }, __afterSetAttrFontStyle: function() { this.__assembleFont() }, __afterSetAttrFontVariant: function() { this.__assembleFont() }, __afterSetAttrFont: function() {}, __afterSetAttrText: function() { var t = this.__attrs,
                    e = t.text,
                    n = void 0; if (r.isString(e) && -1 !== e.indexOf("\n")) { var i = (n = e.split("\n")).length;
                    t.lineCount = i, t.textArr = n } }, __getTextHeight: function() { var t = this.__attrs,
                    e = t.lineCount,
                    n = 1 * t.fontSize; if (e > 1) { return n * e + this.__getSpaceingY() * (e - 1) } return n }, __afterSetAttrAll: function(t) {
                ("fontSize" in t || "fontWeight" in t || "fontStyle" in t || "fontVariant" in t || "fontFamily" in t) && this.__assembleFont(), "text" in t && this.__afterSetAttrText(t.text) }, isHitBox: function() { return !1 }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = this.measureText(); if (!r) return { minX: e, minY: n, maxX: e, maxY: n }; var i = this.__getTextHeight(),
                    o = t.textAlign,
                    a = t.textBaseline,
                    s = t.lineWidth,
                    u = { x: e, y: n - i };
                o && ("end" === o || "right" === o ? u.x -= r : "center" === o && (u.x -= r / 2)), a && ("top" === a ? u.y += i : "middle" === a && (u.y += i / 2)), this.set("startPoint", u); var c = s / 2; return { minX: u.x - c, minY: u.y - c, maxX: u.x + r + c, maxY: u.y + i + c } }, __getSpaceingY: function() { var t = this.__attrs,
                    e = t.lineHeight,
                    n = 1 * t.fontSize; return e ? e - n : .14 * n }, isPointInPath: function(t, e) { var n = this.getBBox(); if (this.hasFill() || this.hasStroke()) return o.box(n.minX, n.maxX, n.minY, n.maxY, t, e) }, drawInner: function(t) { var e = this.__attrs,
                    n = e.text; if (n) { var i = e.textArr,
                        o = 1 * e.fontSize,
                        a = this.__getSpaceingY(),
                        s = e.x,
                        u = e.y,
                        c = e.textBaseline,
                        l = void 0; if (i) { var h = this.getBBox();
                        l = h.maxY - h.minY } var f = void 0; if (t.beginPath(), this.hasFill()) { var p = e.fillOpacity;
                        r.isNil(p) || 1 === p || (t.globalAlpha = p), i ? r.each(i, function(e, n) { f = u + n * (a + o) - l + o, "middle" === c && (f += l - o - (l - o) / 2), "top" === c && (f += l - o), t.fillText(e, s, f) }) : t.fillText(n, s, u) } this.hasStroke() && (i ? r.each(i, function(e, n) { f = u + n * (a + o) - l + o, "middle" === c && (f += l - o - (l - o) / 2), "top" === c && (f += l - o), t.strokeText(e, s, f) }) : t.strokeText(n, s, u)) } }, measureText: function() { var t = this.__attrs,
                    e = t.text,
                    n = t.font,
                    i = t.textArr,
                    o = void 0,
                    a = 0; if (!r.isNil(e)) { var s = document.createElement("canvas").getContext("2d"); return s.save(), s.font = n, i ? r.each(i, function(t) { o = s.measureText(t).width, a < o && (a = o), s.restore() }) : (a = s.measureText(e).width, s.restore()), a } } }), t.exports = a }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = n(22),
            s = n(85),
            u = function t(e) { t.superclass.constructor.call(this, e) };
        u.ATTRS = { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(u, i), r.augment(u, { canStroke: !0, type: "line", getDefaultAttrs: function() { return { lineWidth: 1, startArrow: !1, endArrow: !1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x1,
                    n = t.y1,
                    r = t.x2,
                    i = t.y2,
                    o = t.lineWidth; return s.box(e, n, r, i, o) }, isPointInPath: function(t, e) { var n = this.__attrs,
                    r = n.x1,
                    i = n.y1,
                    a = n.x2,
                    s = n.y2,
                    u = n.lineWidth; return !!this.hasStroke() && o.line(r, i, a, s, u, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x1,
                    r = e.y1,
                    i = e.x2,
                    o = e.y2;
                (t = t || self.get("context")).beginPath(), a.addStartArrow(t, e, n, r, i, o), t.moveTo(n, r), t.lineTo(i, o), a.addEndArrow(t, e, i, o, n, r) }, getPoint: function(t) { var e = this.__attrs; return { x: s.at(e.x1, e.x2, t), y: s.at(e.y1, e.y2, t) } } }), t.exports = u }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.ATTRS = { x: 0, y: 0, img: void 0, width: 0, height: 0, sx: null, sy: null, swidth: null, sheight: null }, r.extend(a, i), r.augment(a, { type: "image", __afterSetAttrImg: function(t) { this.__setAttrImg(t) }, __afterSetAttrAll: function(t) { t.img && this.__setAttrImg(t.img) }, isHitBox: function() { return !1 }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y; return { minX: e, minY: n, maxX: e + t.width, maxY: n + t.height } }, isPointInPath: function(t, e) { var n = this.__attrs; if (this.get("toDraw") || !n.img) return !1; var r = n.x,
                    i = n.y,
                    a = n.width,
                    s = n.height; return o.rect(r, i, a, s, t, e) }, __setLoading: function(t) { var e = this.get("canvas"); return !1 === t && !0 === this.get("toDraw") && (this.__cfg.loading = !1, e.draw()), t }, __setAttrImg: function(t) { var e = this,
                    n = e.__attrs; if (!r.isString(t)) return t instanceof Image ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : t instanceof HTMLElement && r.isString(t.nodeName) && "CANVAS" === t.nodeName.toUpperCase() ? (n.width || e.attr("width", Number(t.getAttribute("width"))), n.height || e.attr("height", Number(t.getAttribute("height"))), t) : t instanceof ImageData ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : null; var i = new Image;
                i.onload = function() { if (e.get("destroyed")) return !1;
                    e.attr("imgSrc", t), e.attr("img", i); var n = e.get("callback");
                    n && n.call(e), e.set("loading", !1) }, i.src = t, e.set("loading", !0) }, drawInner: function(t) { this.get("loading") ? this.set("toDraw", !0) : this.__drawImage(t) }, __drawImage: function(t) { var e = this.__attrs,
                    n = e.x,
                    i = e.y,
                    o = e.img,
                    a = e.width,
                    s = e.height,
                    u = e.sx,
                    c = e.sy,
                    l = e.swidth,
                    h = e.sheight; if (this.set("toDraw", !1), o instanceof Image || o instanceof HTMLElement && r.isString(o.nodeName) && "CANVAS" === o.nodeName.toUpperCase()) { if (r.isNil(u) || r.isNil(c) || r.isNil(l) || r.isNil(h)) return void t.drawImage(o, n, i, a, s); if (!(r.isNil(u) || r.isNil(c) || r.isNil(l) || r.isNil(h))) return void t.drawImage(o, u, c, l, h, n, i, a, s) } else if (o instanceof ImageData) return void t.putImageData(o, n, i, u || 0, c || 0, l || a, h || s) } }), t.exports = a }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.ATTRS = { points: null, lineWidth: 1 }, r.extend(a, i), r.augment(a, { canFill: !0, canStroke: !0, type: "polygon", getDefaultAttrs: function() { return { lineWidth: 1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.points,
                    n = t.lineWidth; if (!e || 0 === e.length) return null; var i = 1 / 0,
                    o = 1 / 0,
                    a = -1 / 0,
                    s = -1 / 0;
                r.each(e, function(t) { var e = t[0],
                        n = t[1];
                    e < i && (i = e), e > a && (a = e), n < o && (o = n), n > s && (s = n) }); var u = n / 2; return { minX: i - u, minY: o - u, maxX: a + u, maxY: s + u } }, isPointInPath: function(t, e) { var n = this.hasFill(),
                    r = this.hasStroke(); return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) { var n = this.get("context"); return this.createPath(), n.isPointInPath(t, e) }, __isPointInStroke: function(t, e) { var n = this.__attrs,
                    r = n.points; if (r.length < 2) return !1; var i = n.lineWidth,
                    a = r.slice(0); return r.length >= 3 && a.push(r[0]), o.polyline(a, i, t, e) }, createPath: function(t) { var e = this.__attrs.points;
                e.length < 2 || ((t = t || this.get("context")).beginPath(), r.each(e, function(e, n) { 0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1]) }), t.closePath()) } }), t.exports = a }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = n(22),
            s = n(85),
            u = function t(e) { t.superclass.constructor.call(this, e) };
        u.ATTRS = { points: null, lineWidth: 1, arrow: !1, tCache: null }, r.extend(u, i), r.augment(u, { canStroke: !0, type: "polyline", tCache: null, getDefaultAttrs: function() { return { lineWidth: 1, arrow: !1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.lineWidth,
                    n = t.points; if (!n || 0 === n.length) return null; var i = 1 / 0,
                    o = 1 / 0,
                    a = -1 / 0,
                    s = -1 / 0;
                r.each(n, function(t) { var e = t[0],
                        n = t[1];
                    e < i && (i = e), e > a && (a = e), n < o && (o = n), n > s && (s = n) }); var u = e / 2; return { minX: i - u, minY: o - u, maxX: a + u, maxY: s + u } }, __setTcache: function() { var t = this.__attrs.points,
                    e = 0,
                    n = 0,
                    i = [],
                    o = void 0,
                    a = void 0;
                t && 0 !== t.length && (r.each(t, function(n, r) { t[r + 1] && (e += s.len(n[0], n[1], t[r + 1][0], t[r + 1][1])) }), e <= 0 || (r.each(t, function(r, u) { t[u + 1] && ((o = [])[0] = n / e, a = s.len(r[0], r[1], t[u + 1][0], t[u + 1][1]), n += a, o[1] = n / e, i.push(o)) }), this.tCache = i)) }, isPointInPath: function(t, e) { var n = this.__attrs; if (this.hasStroke()) { var r = n.points; if (r.length < 2) return !1; var i = n.lineWidth; return o.polyline(r, i, t, e) } return !1 }, createPath: function(t) { var e = this.__attrs,
                    n = e.points,
                    r = e.arrow,
                    i = e.lineWidth,
                    o = void 0,
                    s = void 0; if (!(n.length < 2)) { for ((t = t || this.get("context")).beginPath(), t.moveTo(n[0][0], n[0][1]), s = 1, o = n.length - 1; s < o; s++) t.lineTo(n[s][0], n[s][1]); if (r) { var u = [n[o][0] - n[o - 1][0], n[o][1] - n[o - 1][1]],
                            c = a.getEndPoint(u, [n[o][0], n[o][1]], i);
                        t.lineTo(c[0], c[1]), a.makeArrow(t, u, c, i) } else t.lineTo(n[o][0], n[o][1]) } }, getPoint: function(t) { var e = this.__attrs.points,
                    n = this.tCache,
                    i = void 0,
                    o = void 0; return n || (this.__setTcache(), n = this.tCache), r.each(n, function(e, n) { t >= e[0] && t <= e[1] && (i = (t - e[0]) / (e[1] - e[0]), o = n) }), { x: s.at(e[o][0], e[o + 1][0], i), y: s.at(e[o][1], e[o + 1][1], i) } } }), t.exports = u }, function(t, e, n) {
        function r(t, e, n) { return t + e * Math.cos(n) }

        function i(t, e, n) { return t + e * Math.sin(n) } var o = n(3),
            a = n(5),
            s = n(6),
            u = n(87),
            c = n(22),
            l = function t(e) { t.superclass.constructor.call(this, e) };
        l.ATTRS = { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1, startArrow: !1, endArrow: !1 }, o.extend(l, a), o.augment(l, { canStroke: !0, type: "arc", getDefaultAttrs: function() { return { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1, startArrow: !1, endArrow: !1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = t.r,
                    i = t.startAngle,
                    o = t.endAngle,
                    a = t.clockwise,
                    s = t.lineWidth / 2,
                    c = u.box(e, n, r, i, o, a); return c.minX -= s, c.minY -= s, c.maxX += s, c.maxY += s, c }, isPointInPath: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    o = n.r,
                    a = n.startAngle,
                    u = n.endAngle,
                    c = n.clockwise,
                    l = n.lineWidth; return !!this.hasStroke() && s.arcline(r, i, o, a, u, c, l, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x,
                    o = e.y,
                    a = e.r,
                    s = e.startAngle,
                    u = e.endAngle,
                    l = e.clockwise,
                    h = void 0,
                    f = void 0,
                    p = void 0,
                    g = void 0,
                    d = void 0;
                (t = t || self.get("context")).beginPath(), e.startArrow && (h = Math.PI / 180, l && (h *= -1), f = r(n, a, s + h), p = i(o, a, s + h), g = r(n, a, s), d = i(o, a, s), c.addStartArrow(t, e, f, p, g, d)), t.arc(n, o, a, s, u, l), e.endArrow && (h = Math.PI / 180, l && (h *= -1), f = r(n, a, u + h), p = i(o, a, u + h), g = r(n, a, u), d = i(o, a, u), c.addEndArrow(t, e, g, d, f, p)) } }), t.exports = l }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = n(87),
            s = n(8).vec2,
            u = function t(e) { t.superclass.constructor.call(this, e) };
        u.ATTRS = { x: 0, y: 0, rs: 0, re: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1 }, r.extend(u, i), r.augment(u, { canFill: !0, canStroke: !0, type: "fan", getDefaultAttrs: function() { return { clockwise: !1, lineWidth: 1, rs: 0, re: 0 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = t.rs,
                    i = t.re,
                    o = t.startAngle,
                    s = t.endAngle,
                    u = t.clockwise,
                    c = t.lineWidth,
                    l = a.box(e, n, r, o, s, u),
                    h = a.box(e, n, i, o, s, u),
                    f = c / 2; return { minX: Math.min(l.minX, h.minX) - f, minY: Math.min(l.minY, h.minY) - f, maxX: Math.max(l.maxX, h.maxX) + f, maxY: Math.max(l.maxY, h.maxY) + f } }, isPointInPath: function(t, e) { var n = this.hasFill(),
                    r = this.hasStroke(); return n && r ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!r && this.__isPointInStroke(t, e) }, __isPointInFill: function(t, e) { var n = this.__attrs,
                    i = n.x,
                    o = n.y,
                    u = n.rs,
                    c = n.re,
                    l = n.startAngle,
                    h = n.endAngle,
                    f = n.clockwise,
                    p = [t - i, e - o],
                    g = s.angleTo([1, 0], p),
                    d = a.nearAngle(g, l, h, f); if (r.isNumberEqual(g, d)) { var y = s.squaredLength(p); if (u * u <= y && y <= c * c) return !0 } return !1 }, __isPointInStroke: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    a = n.rs,
                    s = n.re,
                    u = n.startAngle,
                    c = n.endAngle,
                    l = n.clockwise,
                    h = n.lineWidth,
                    f = { x: Math.cos(u) * a + r, y: Math.sin(u) * a + i },
                    p = { x: Math.cos(u) * s + r, y: Math.sin(u) * s + i },
                    g = { x: Math.cos(c) * a + r, y: Math.sin(c) * a + i },
                    d = { x: Math.cos(c) * s + r, y: Math.sin(c) * s + i }; return !!o.line(f.x, f.y, p.x, p.y, h, t, e) || (!!o.line(g.x, g.y, d.x, d.y, h, t, e) || (!!o.arcline(r, i, a, u, c, l, h, t, e) || !!o.arcline(r, i, s, u, c, l, h, t, e))) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x,
                    r = e.y,
                    i = e.rs,
                    o = e.re,
                    a = e.startAngle,
                    s = e.endAngle,
                    u = e.clockwise,
                    c = { x: Math.cos(a) * i + n, y: Math.sin(a) * i + r },
                    l = { x: Math.cos(a) * o + n, y: Math.sin(a) * o + r },
                    h = { x: Math.cos(s) * i + n, y: Math.sin(s) * i + r };
                (t = t || self.get("context")).beginPath(), t.moveTo(c.x, c.y), t.lineTo(l.x, l.y), t.arc(n, r, o, a, s, u), t.lineTo(h.x, h.y), t.arc(n, r, i, s, a, !u), t.closePath() } }), t.exports = u }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = n(22),
            s = n(55),
            u = function t(e) { t.superclass.constructor.call(this, e) };
        u.ATTRS = { p1: null, p2: null, p3: null, p4: null, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(u, i), r.augment(u, { canStroke: !0, type: "cubic", getDefaultAttrs: function() { return { lineWidth: 1, startArrow: !1, endArrow: !1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.p1,
                    n = t.p2,
                    i = t.p3,
                    o = t.p4,
                    a = t.lineWidth,
                    u = void 0,
                    c = void 0; if (r.isNil(e) || r.isNil(n) || r.isNil(i) || r.isNil(o)) return null; var l = a / 2,
                    h = s.extrema(e[0], n[0], i[0], o[0]); for (u = 0, c = h.length; u < c; u++) h[u] = s.at(e[0], n[0], i[0], o[0], h[u]); var f = s.extrema(e[1], n[1], i[1], o[1]); for (u = 0, c = f.length; u < c; u++) f[u] = s.at(e[1], n[1], i[1], o[1], f[u]); return h.push(e[0], o[0]), f.push(e[1], o[1]), { minX: Math.min.apply(Math, h) - l, maxX: Math.max.apply(Math, h) + l, minY: Math.min.apply(Math, f) - l, maxY: Math.max.apply(Math, f) + l } }, isPointInPath: function(t, e) { var n = this.__attrs,
                    r = n.p1,
                    i = n.p2,
                    a = n.p3,
                    s = n.p4,
                    u = n.lineWidth; return o.cubicline(r[0], r[1], i[0], i[1], a[0], a[1], s[0], s[1], u, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.p1,
                    i = e.p2,
                    o = e.p3,
                    s = e.p4;
                t = t || self.get("context"), r.isNil(n) || r.isNil(i) || r.isNil(o) || r.isNil(s) || (t.beginPath(), a.addStartArrow(t, e, i[0], i[1], n[0], n[1]), t.moveTo(n[0], n[1]), t.bezierCurveTo(i[0], i[1], o[0], o[1], s[0], s[1]), a.addEndArrow(t, e, o[0], o[1], s[0], s[1])) }, getPoint: function(t) { var e = this.__attrs; return { x: s.at(e.p4[0], e.p3[0], e.p2[0], e.p1[0], t), y: s.at(e.p4[1], e.p3[1], e.p2[1], e.p1[1], t) } } }), t.exports = u }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = n(22),
            s = n(86),
            u = function t(e) { t.superclass.constructor.call(this, e) };
        u.ATTRS = { p1: null, p2: null, p3: null, lineWidth: 1, startArrow: !1, endArrow: !1 }, r.extend(u, i), r.augment(u, { canStroke: !0, type: "quadratic", getDefaultAttrs: function() { return { lineWidth: 1, startArrow: !1, endArrow: !1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.p1,
                    n = t.p2,
                    i = t.p3,
                    o = t.lineWidth,
                    a = void 0,
                    u = void 0; if (r.isNil(e) || r.isNil(n) || r.isNil(i)) return null; var c = o / 2,
                    l = s.extrema(e[0], n[0], i[0]); for (a = 0, u = l.length; a < u; a++) l[a] = s.at(e[0], n[0], i[0], l[a]);
                l.push(e[0], i[0]); var h = s.extrema(e[1], n[1], i[1]); for (a = 0, u = h.length; a < u; a++) h[a] = s.at(e[1], n[1], i[1], h[a]); return h.push(e[1], i[1]), { minX: Math.min.apply(Math, l) - c, maxX: Math.max.apply(Math, l) + c, minY: Math.min.apply(Math, h) - c, maxY: Math.max.apply(Math, h) + c } }, isPointInPath: function(t, e) { var n = this.__attrs,
                    r = n.p1,
                    i = n.p2,
                    a = n.p3,
                    s = n.lineWidth; return o.quadraticline(r[0], r[1], i[0], i[1], a[0], a[1], s, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.p1,
                    i = e.p2,
                    o = e.p3;
                r.isNil(n) || r.isNil(i) || r.isNil(o) || ((t = t || this.get("context")).beginPath(), a.addStartArrow(t, e, i[0], i[1], n[0], n[1]), t.moveTo(n[0], n[1]), t.quadraticCurveTo(i[0], i[1], o[0], o[1]), a.addEndArrow(t, e, i[0], i[1], o[0], o[1])) }, getPoint: function(t) { var e = this.__attrs; return { x: s.at(e.p1[0], e.p2[0], e.p3[0], t), y: s.at(e.p1[1], e.p2[1], e.p3[1], t) } } }), t.exports = u }, function(t, e, n) { var r = n(3),
            i = n(5),
            o = n(6),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.Symbols = { circle: function(t, e, n, r) { r.arc(t, e, n, 0, 2 * Math.PI, !1) }, square: function(t, e, n, r) { r.moveTo(t - n, e - n), r.lineTo(t + n, e - n), r.lineTo(t + n, e + n), r.lineTo(t - n, e + n), r.closePath() }, diamond: function(t, e, n, r) { r.moveTo(t - n, e), r.lineTo(t, e - n), r.lineTo(t + n, e), r.lineTo(t, e + n), r.closePath() }, triangle: function(t, e, n, r) { var i = n * Math.sin(1 / 3 * Math.PI);
                r.moveTo(t - n, e + i), r.lineTo(t, e - i), r.lineTo(t + n, e + i), r.closePath() }, "triangle-down": function(t, e, n, r) { var i = n * Math.sin(1 / 3 * Math.PI);
                r.moveTo(t - n, e - i), r.lineTo(t + n, e - i), r.lineTo(t, e + i), r.closePath() } }, a.ATTRS = { path: null, lineWidth: 1 }, r.extend(a, i), r.augment(a, { type: "marker", canFill: !0, canStroke: !0, getDefaultAttrs: function() { return { x: 0, y: 0, lineWidth: 1 } }, calculateBox: function() { var t = this.__attrs,
                    e = t.x,
                    n = t.y,
                    r = t.radius,
                    i = t.lineWidth / 2 + r; return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i } }, isPointInPath: function(t, e) { var n = this.__attrs,
                    r = n.x,
                    i = n.y,
                    a = n.radius; return o.circle(r, i, a, t, e) }, createPath: function(t) { var e = this.__attrs,
                    n = e.x,
                    i = e.y,
                    o = e.radius,
                    s = e.symbol || "circle",
                    u = void 0;
                u = r.isFunction(s) ? s : a.Symbols[s], t.beginPath(), u(n, i, o, t, this) } }), t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(376),
            o = { appear: { duration: 450, easing: "easeQuadOut" }, update: { duration: 450, easing: "easeQuadInOut" }, enter: { duration: 400, easing: "easeQuadInOut", delay: 100 }, leave: { duration: 350, easing: "easeQuadIn" } },
            a = { line: { appear: function() { return i.appear.clipIn }, enter: function() { return i.enter.clipIn }, leave: function() { return i.leave.lineWidthOut } }, path: { appear: function() { return i.appear.clipIn }, enter: function() { return i.enter.clipIn }, leave: function() { return i.leave.lineWidthOut } }, area: { appear: function() { return i.appear.clipIn }, enter: function() { return i.enter.fadeIn }, leave: function() { return i.leave.fadeOut }, cfg: { appear: { duration: 500, easing: "easeQuadInOut" }, update: { duration: 450, easing: "easeQuadInOut" }, enter: { duration: 600, delay: 150, easing: "easeQuadInOut" }, leave: { easing: "easeQuadOut", duration: 350 } } }, polygon: { appear: function() { return i.appear.zoomIn }, enter: function() { return i.enter.zoomIn }, leave: function() { return i.leave.zoomOut } }, edge: { appear: function() { return i.appear.pathIn }, enter: function() { return i.enter.pathIn }, leave: function() { return i.leave.pathOut } }, interval: { appear: function(t) { var e = void 0; return t.isPolar ? (e = i.appear.zoomIn, (t.isTransposed || "theta" === t.type) && (e = i.appear.fanIn)) : e = t.isRect ? t.isTransposed ? i.appear.scaleInX : i.appear.scaleInY : i.appear.zoomIn, e }, enter: function(t) { return t.isRect || t.isTransposed || "theta" === t.type ? i.enter.fadeIn : i.enter.zoomIn }, leave: function() { return i.leave.fadeOut }, update: function(t) { if ("theta" === t.type) return i.update.fanIn } }, point: { appear: function() { return i.appear.zoomIn }, enter: function() { return i.enter.zoomIn }, leave: function() { return i.leave.zoomOut } }, schema: { appear: function() { return i.appear.clipIn }, enter: function() { return i.enter.clipIn }, leave: function() { return i.leave.lineWidthOut } }, contour: null, heatmap: null, label: { appear: function() { return i.appear.fadeIn }, enter: function() { return i.enter.fadeIn }, leave: function() { return i.leave.fadeOut }, cfg: { appear: { duration: 900 } } }, "axis-label": { enter: function() { return i.appear.fadeIn }, leave: function() { return i.leave.fadeOut }, update: function(t) { if (t.isPolar) return i.appear.fadeIn } }, "axis-ticks": { enter: function() { return i.appear.fadeIn }, leave: function() { return i.leave.fadeOut }, update: function(t) { if (t.isPolar) return i.appear.fadeIn } }, "axis-grid": { enter: function() { return i.appear.fadeIn }, leave: function() { return i.leave.fadeOut }, update: function(t) { if (t.isPolar) return i.appear.fadeIn } }, "axis-grid-rect": { enter: function() { return i.appear.fadeIn }, leave: function() { return i.leave.fadeOut }, update: function() { return i.leave.fadeIn } }, labelLine: { appear: function() { return i.appear.pathIn }, enter: function() { return i.enter.pathIn }, leave: function() { return i.leave.pathOut } } };
        a.Action = i, a.defaultCfg = o, a.getAnimation = function(t, e, n) { var i = this[t]; if (i) { var o = i[n]; if (r.isFunction(o)) return o(e) } return !1 }, a.getAnimateCfg = function(t, e) { var n = o[e]; return this[t] && this[t].cfg && this[t].cfg[e] ? r.deepMix({}, n, this[t].cfg[e]) : n }, a.registerAnimation = function(t, e, n) { this.Action[t] || (this.Action[t] = {}), this.Action[t][e] = n }, t.exports = a }, function(t, e, n) { var r = n(7);
        t.exports = function(t) { return t == t && !r(t) } }, function(t, e) { t.exports = function(t, e) { return function(n) { return null != n && n[t] === e && (void 0 !== e || t in Object(n)) } } }, function(t, e, n) { var r = n(327),
            i = n(328);
        t.exports = function(t, e) { return null != t && i(t, e, r) } }, function(t, e, n) { var r = n(348);
        t.exports = function(t) { var e = r(t),
                n = e % 1; return e == e ? n ? e - n : e : 0 } }, function(t, e, n) { var r = n(7),
            i = n(29),
            o = NaN,
            a = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            l = parseInt;
        t.exports = function(t) { if ("number" == typeof t) return t; if (i(t)) return o; if (r(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, ""); var n = u.test(t); return n || c.test(t) ? l(t.slice(2), n ? 2 : 8) : s.test(t) ? o : +t } }, function(t, e, n) { var r = n(104),
            i = 1,
            o = 4;
        t.exports = function(t) { return r(t, i | o) } }, function(t, e, n) { var r = n(29);
        t.exports = function(t, e, n) { for (var i = -1, o = t.length; ++i < o;) { var a = t[i],
                    s = e(a); if (null != s && (void 0 === u ? s == s && !r(s) : n(s, u))) var u = s,
                    c = a } return c } }, function(t, e, n) {
        function r(t, e, n, a, s) { var u = -1,
                c = t.length; for (n || (n = o), s || (s = []); ++u < c;) { var l = t[u];
                e > 0 && n(l) ? e > 1 ? r(l, e - 1, n, a, s) : i(s, l) : a || (s[s.length] = l) } return s } var i = n(71),
            o = n(364);
        t.exports = r }, function(t, e) { var n, r, i = '"-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, "sans-serif"',
            o = { defaultColor: "#1890FF", plotCfg: { padding: [20, 20, 95, 80] }, fontFamily: i, defaultLegendPosition: "bottom", colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"], colors_16: ["#1890FF", "#41D9C7", "#2FC25B", "#FACC14", "#E6965C", "#223273", "#7564CC", "#8543E0", "#5C8EE6", "#13C2C2", "#5CA3E6", "#3436C7", "#B381E6", "#F04864", "#D598D9"], colors_24: ["#1890FF", "#66B5FF", "#41D9C7", "#2FC25B", "#6EDB8F", "#9AE65C", "#FACC14", "#E6965C", "#57AD71", "#223273", "#738AE6", "#7564CC", "#8543E0", "#A877ED", "#5C8EE6", "#13C2C2", "#70E0E0", "#5CA3E6", "#3436C7", "#8082FF", "#DD81E6", "#F04864", "#FA7D92", "#D598D9"], colors_pie: ["#1890FF", "#13C2C2", "#2FC25B", "#FACC14", "#F04864", "#8543E0", "#3436C7", "#223273"], colors_pie_16: ["#1890FF", "#73C9E6", "#13C2C2", "#6CD9B3", "#2FC25B", "#9DD96C", "#FACC14", "#E6965C", "#F04864", "#D66BCA", "#8543E0", "#8E77ED", "#3436C7", "#737EE6", "#223273", "#7EA2E6"], shapes: { point: ["hollowCircle", "hollowSquare", "hollowDiamond", "hollowBowtie", "hollowTriangle", "hollowHexagon", "cross", "tick", "plus", "hyphen", "line"], line: ["line", "dash", "dot"], area: ["area"] }, sizes: [1, 10], opacities: [.1, .9], axis: { top: { position: "top", title: null, label: { offset: 14, textStyle: { fill: "#545454", fontSize: 12, lineHeight: 20, textBaseline: "middle", fontFamily: i }, autoRotate: !0 }, line: { lineWidth: 1, stroke: "#BFBFBF" }, tickLine: { lineWidth: 1, stroke: "#BFBFBF", length: 4 } }, bottom: { position: "bottom", title: null, label: { offset: 22, autoRotate: !0, textStyle: { fill: "#545454", fontSize: 12, lineHeight: 20, textBaseline: "middle", fontFamily: i } }, line: { lineWidth: 1, stroke: "#BFBFBF" }, tickLine: { lineWidth: 1, stroke: "#BFBFBF", length: 4 } }, left: { position: "left", title: null, label: { offset: 12, autoRotate: !0, textStyle: { fill: "#545454", fontSize: 12, lineHeight: 20, textBaseline: "middle", fontFamily: i } }, line: null, tickLine: null, grid: { lineStyle: { stroke: "#E9E9E9", lineWidth: 1, lineDash: [3, 3] }, hideFirstLine: !0 } }, right: { position: "right", title: null, label: { offset: 12, autoRotate: !0, textStyle: { fill: "#545454", fontSize: 12, lineHeight: 20, textBaseline: "middle", fontFamily: i } }, line: null, tickLine: null, grid: { lineStyle: { stroke: "#E9E9E9", lineWidth: 1, lineDash: [3, 3] }, hideFirstLine: !0 } }, circle: { zIndex: 1, title: null, label: { offset: 12, textStyle: { fill: "#545454", fontSize: 12, lineHeight: 20, fontFamily: i } }, line: { lineWidth: 1, stroke: "#BFBFBF" }, tickLine: { lineWidth: 1, stroke: "#BFBFBF", length: 4 }, grid: { lineStyle: { stroke: "#E9E9E9", lineWidth: 1, lineDash: [3, 3] }, hideFirstLine: !0 } }, radius: { zIndex: 0, label: { offset: 12, textStyle: { fill: "#545454", fontSize: 12, textBaseline: "middle", lineHeight: 20, fontFamily: i } }, line: { lineWidth: 1, stroke: "#BFBFBF" }, tickLine: { lineWidth: 1, stroke: "#BFBFBF", length: 4 }, grid: { lineStyle: { stroke: "#E9E9E9", lineWidth: 1, lineDash: [3, 3] }, type: "circle" } }, helix: { grid: null, label: null, title: null, line: { lineWidth: 1, stroke: "#BFBFBF" }, tickLine: { lineWidth: 1, length: 4, stroke: "#BFBFBF" } } }, label: { offset: 20, textStyle: { fill: "#545454", fontSize: 12, textBaseline: "middle", fontFamily: i } }, treemapLabels: { offset: 10, textStyle: { fill: "#fff", fontSize: 12, textBaseline: "top", fontStyle: "bold", fontFamily: i } }, innerLabels: { textStyle: { fill: "#fff", fontSize: 12, textBaseline: "middle", fontFamily: i } }, thetaLabels: { labelLine: { lineWidth: 1 }, labelHeight: 14, offset: 30 }, legend: { right: { position: "right", layout: "vertical", itemMarginBottom: 8, width: 16, height: 156, title: null, textStyle: { fill: "#8C8C8C", fontSize: 12, textAlign: "start", textBaseline: "middle", lineHeight: 20, fontFamily: i }, unCheckColor: "#bfbfbf" }, left: { position: "left", layout: "vertical", itemMarginBottom: 8, width: 16, height: 156, title: null, textStyle: { fill: "#8C8C8C", fontSize: 12, textAlign: "start", textBaseline: "middle", lineHeight: 20, fontFamily: i }, unCheckColor: "#bfbfbf" }, top: { position: "top", offset: 6, layout: "horizontal", title: null, itemGap: 10, width: 156, height: 16, textStyle: { fill: "#8C8C8C", fontSize: 12, textAlign: "start", textBaseline: "middle", lineHeight: 20, fontFamily: i }, unCheckColor: "#bfbfbf" }, bottom: { position: "bottom", offset: 58, layout: "horizontal", title: null, itemGap: 24, width: 156, height: 16, textStyle: { fill: "#8C8C8C", fontSize: 12, textAlign: "start", textBaseline: "middle", lineHeight: 20, fontFamily: i }, unCheckColor: "#bfbfbf" }, html: (n = {}, n["g2-legend"] = { height: "auto", width: "auto", position: "absolute", overflow: "scroll", fontSize: "12px", fontFamily: i, lineHeight: "20px", color: "#8C8C8C" }, n["g2-legend-title"] = { marginBottom: "4px" }, n["g2-legend-list"] = { listStyleType: "none", margin: 0, padding: 0 }, n["g2-legend-list-item"] = { cursor: "pointer", marginBottom: "5px", marginRight: "24px" }, n["g2-legend-marker"] = { width: "9px", height: "9px", borderRadius: "50%", display: "inline-block", marginRight: "8px", verticalAlign: "middle" }, n), gradient: { textStyle: { fill: "#8C8C8C", fontSize: 12, textAlign: "center", textBaseline: "middle", lineHeight: 20, fontFamily: i }, lineStyle: { lineWidth: 1, stroke: "#fff" }, unCheckColor: "#bfbfbf" } }, tooltip: (r = { crosshairs: !1, offset: 15 }, r["g2-tooltip"] = { position: "absolute", visibility: "hidden", whiteSpace: "nowrap", zIndex: 999, transition: "visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)", backgroundColor: "rgba(0, 0, 0, 0.65)", borderRadius: "4px", color: "rgb(255, 255, 255)", fontSize: "12px", fontFamily: i, lineHeight: "20px", padding: "10px 10px 6px 10px" }, r["g2-tooltip-title"] = { marginBottom: "4px" }, r["g2-tooltip-list"] = { margin: 0, listStyleType: "none", padding: 0 }, r["g2-tooltip-list-item"] = { marginBottom: "4px" }, r["g2-tooltip-marker"] = { width: "7px", height: "7px", borderRadius: "50%", border: "1px solid #fff", display: "inline-block", marginRight: "8px" }, r), tooltipMarker: { symbol: function(t, e, n, r, i) { var o = i.get("color");
                        r.fillStyle = o, r.lineWidth = 1, r.strokeStyle = "#fff", r.beginPath(), r.arc(t, e, n, 0, 2 * Math.PI, !1), r.fill(), r.stroke(), r.save(), r.beginPath(), r.fillStyle = "#fff", r.strokeStyle = o, r.globalAlpha = .2, r.lineWidth = 3, r.arc(t, e, 6, 0, 2 * Math.PI, !1), r.stroke(), r.restore() }, radius: 4 }, tooltipCrosshairsRect: { type: "rect", style: { fill: "#CCD6EC", opacity: .3 } }, tooltipCrosshairsLine: { style: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 } }, shape: { point: { lineWidth: 1, fill: "#1890FF", radius: 4 }, hollowPoint: { fill: "#fff", lineWidth: 1, stroke: "#1890FF", radius: 3 }, interval: { lineWidth: 0, fill: "#1890FF", fillOpacity: .85 }, hollowInterval: { fill: "#fff", stroke: "#1890FF", fillOpacity: 0, lineWidth: 2 }, area: { lineWidth: 0, fill: "#1890FF", fillOpacity: .3 }, polygon: { lineWidth: 0, fill: "#1890FF", fillOpacity: 1 }, hollowPolygon: { fill: "#fff", stroke: "#1890FF", fillOpacity: 0, lineWidth: 2 }, hollowArea: { fill: "#fff", stroke: "#1890FF", fillOpacity: 0, lineWidth: 2 }, line: { stroke: "#1890FF", lineWidth: 2, fill: null }, edge: { stroke: "#1890FF", lineWidth: 1, fill: null }, schema: { stroke: "#1890FF", lineWidth: 1, fill: null } }, guide: { line: { lineStyle: { stroke: "#1890FF", lineDash: [0, 2, 2], lineWidth: 1 }, text: { position: "end", autoRotate: !0, style: { fill: "#545454", fontSize: 12, textAlign: "center", fontFamily: i } } }, text: { style: { fill: "#545454", fontSize: 12, textBaseline: "middle", textAlign: "start", fontFamily: i } }, region: { style: { lineWidth: 0, fill: "#000", fillOpacity: .04 } }, html: { alignX: "middle", alignY: "middle" } }, pixelRatio: null };
        t.exports = o }, function(t, e, n) { var r = n(2).Group,
            i = n(92),
            o = n(1),
            a = n(0),
            s = ["line", "point", "path"],
            u = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { label: o.label, labelCfg: null, coord: null, geomType: null, zIndex: 6 } }, e.prototype._renderUI = function() { t.prototype._renderUI.call(this), this.initLabelsCfg(), this.renderLabels() }, e.prototype._getLabelValue = function(t) { var e = t._origin,
                        n = this.get("labelCfg"),
                        r = n.scales,
                        i = n.cfg && n.cfg.content,
                        o = void 0; if (i) { var s = [];
                        a.each(r, function(t) { s.push(e[t.field]) }), o = i.apply(null, s) } else { var u = r[0]; if (o = e[u.field], a.isArray(o)) { var c = [];
                            a.each(o, function(t) { c.push(u.getText(t)) }), o = c } else o = u.getText(o) } return o }, e.prototype.initLabelsCfg = function() { var t = this.getDefaultLabelCfg(),
                        e = this.get("labelCfg");
                    a.deepMix(t, e.cfg), this.set("label", t) }, e.prototype.getDefaultLabelCfg = function() { var t = this.get("labelCfg").cfg,
                        e = this.get("geomType"); return "polygon" === e || t && t.offset < 0 && -1 === a.indexOf(s, e) ? a.deepMix({}, this.get("label"), o.innerLabels) : a.deepMix({}, o.label, this.get("label")) }, e.prototype.getLabelsItems = function(t) { var e = this,
                        n = [],
                        r = e.get("label"),
                        i = e.get("geom"),
                        o = void 0; return a.each(t, function(t) { o = t._origin; var s = e._getLabelValue(t);
                        a.isArray(s) || (s = [s]); var u = s.length;
                        a.each(s, function(c, l) { var h = e.getLabelPoint(s, t, l); if (h) { h = a.mix({}, o, h); var f = void 0;
                                f = r && r.label && r.label.textAlign ? r.label.textAlign : e.getLabelAlign(h, l, u), h.textAlign = f, i && (h._id = i._getShapeId(o) + "-glabel-" + l + "-" + h.text), h.coord = e.get("coord"), n.push(h) } }) }), n }, e.prototype.adjustItems = function(t) { return t }, e.prototype.drawLines = function(t, e) { var n = this;
                    n.getDefaultOffset() > 0 && a.each(t, function(t) { n.lineToLabel(t, e) }) }, e.prototype.lineToLabel = function(t, e) { var n = this.get("coord"),
                        r = { x: t.x - t._offset.x, y: t.y - t._offset.y },
                        i = { x: (r.x + t.x) / 2, y: (r.y + t.y) / 2 },
                        o = this.get("lineGroup");
                    o || (o = this.addGroup({ elCls: "x-line-group" }), this.set("lineGroup", o)); var s = o.addShape("path", { attrs: a.mix({ path: ["M" + r.x, r.y + " Q" + i.x, i.y + " " + t.x, t.y].join(","), fill: null, stroke: t.color }, e) });
                    s.name = "labelLine", s._id = t._id && t._id.replace("glabel", "glabelline"), s.set("coord", n) }, e.prototype.getLabelPoint = function(t, e, n) {
                    function r(e, n) { return a.isArray(e) && (e = 1 === t.length ? e.length <= 2 ? e[e.length - 1] : function(t) { var e = 0; return a.each(t, function(t) { e += t }), e / t.length }(e) : e[n]), e } var i = this.get("coord"),
                        o = { x: r(e.x, n), y: r(e.y, n), text: t[n] }; if (e && e.nextPoints && ("funnel" === e.shape || "pyramid" === e.shape)) { var s = -1 / 0;
                        e.nextPoints.forEach(function(t) {
                            (t = i.convert(t)).x > s && (s = t.x) }), o.x = (o.x + s) / 2 } "pyramid" === e.shape && !e.nextPoints && e.points && e.points.forEach(function(t) { t = i.convert(t), -1 === e.x.indexOf(t.x) && (o.x = (o.x + t.x) / 2) }); var u = this.getLabelOffset(o, n, t.length); return this.transLabelPoint(o), o.x += u.x, o.y += u.y, o.color = e.color, o._offset = u, o }, e.prototype.transLabelPoint = function(t) { var e = this.get("coord").applyMatrix(t.x, t.y, 1);
                    t.x = e[0], t.y = e[1] }, e.prototype.getOffsetVector = function() { var t = this.get("label").offset || 0,
                        e = this.get("coord"); return e.isTransposed ? e.applyMatrix(t, 0) : e.applyMatrix(0, t) }, e.prototype.getDefaultOffset = function() { var t = this.get("coord"),
                        e = this.getOffsetVector(); return t.isTransposed ? e[0] : e[1] }, e.prototype.getLabelOffset = function(t, e, n) { var r = this.getDefaultOffset(),
                        i = this.get("coord").isTransposed,
                        o = i ? "x" : "y",
                        a = i ? 1 : -1,
                        s = { x: 0, y: 0 }; return s[o] = e > 0 || 1 === n ? r * a : r * a * -1, s }, e.prototype.getLabelAlign = function(t, e, n) { var r = "center"; if (this.get("coord").isTransposed) { var i = this.getDefaultOffset();
                        r = i < 0 ? "right" : 0 === i ? "center" : "left", n > 1 && 0 === e && ("right" === r ? r = "left" : "left" === r && (r = "right")) } return r }, e.prototype.showLabels = function(t) { var e = this.getLabelsItems(t),
                        n = this.get("label");
                    e = this.adjustItems(e), this.resetLabels(e), n.labelLine && this.drawLines(e, n.labelLine) }, e.prototype.destroy = function() { this.removeLabels(), t.prototype.destroy.call(this) }, e }(r);
        a.assign(u.prototype, i.LabelsRenderer), t.exports = u }, function(t, e, n) { var r = n(0),
            i = n(2),
            o = i.DomUtil,
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { zIndex: 6, items: null, textStyle: null, formatter: null, htmlTemplate: null, _containerTpl: '<div class="g-labels" style="position:absolute;top:0;left:0;"></div>', _itemTpl: '<div class="g-label" style="position:absolute;">{text}</div>' } }, e.prototype._renderUI = function() { this._drawLabels() }, e.prototype._drawLabels = function() { var t = this,
                        e = t.get("items");
                    r.each(e, function(e, n) { t._addLabel(e, n) }) }, e.prototype._addLabel = function(t, e) { var n = this._getLabelCfg(t, e); return this._createText(n) }, e.prototype._getLabelCfg = function(t, e) { var n = this.get("textStyle") || {},
                        i = this.get("formatter"),
                        o = this.get("htmlTemplate"); if (!r.isObject(t)) { var a = t;
                        (t = {}).text = a } r.isFunction(n) && (n = n(t.text, t, e)), i && (t.text = i(t.text, t, e)), r.isFunction(o) && (t.text = o(t.text, t, e)), r.isNil(t.text) && (t.text = ""), t.text = t.text + ""; return r.mix({}, t, n, { x: t.x || 0, y: t.y || 0 }) }, e.prototype._createText = function(t) { var e = this.get("htmlTemplate"),
                        n = this.get("customDiv"),
                        r = void 0; if (!e) { var i = t.point; return delete t.point, (r = this.addShape("text", { attrs: t })).setSilent("origin", i), r.name = "label", r } if (!n) { var a = this.get("_containerTpl"),
                            s = this.get("canvas").get("el").parentNode;
                        n = o.createDom(a), s.style.position = "relative", s.appendChild(n), this.set("customDiv", n) } var u = this._createDom(t);
                    n.appendChild(u), this._setCustomPosition(t, u) }, e.prototype._setCustomPosition = function(t, e) { var n = t.textAlign || "left",
                        r = t.y,
                        i = t.x,
                        a = o.getOuterWidth(e);
                    r -= o.getOuterHeight(e) / 2, "center" === n ? i -= a / 2 : "right" === n && (i -= a), e.style.top = parseInt(r, 10) + "px", e.style.left = parseInt(i, 10) + "px" }, e.prototype._createDom = function(t) { var e = this.get("_itemTpl"),
                        n = this.get("htmlTemplate");
                    r.isString(n) && (t.text = r.substitute(n, { text: t.text })); var i = r.substitute(e, { text: t.text }); return o.createDom(i) }, e.prototype.getLabels = function() { var t = this.get("customDiv"); return t ? r.toArray(t.childNodes) : this.get("children") }, e.prototype.addLabel = function(t) { var e = this.get("items"),
                        n = e.length; return e.push(t), this._addLabel(t, n) }, e.prototype.changeLabel = function(t, e) { if (t) { var n = this.get("htmlTemplate"),
                            i = r.indexOf(this.getLabels(), t),
                            o = this._getLabelCfg(e, i); if (n) { var a = this._createDom(o);
                            t.innerHTML = a.innerHTML, this._setCustomPosition(o, t) } else if (t._id = e._id, t.attr("text", o.text), t.attr("x") !== o.x || t.attr("y") !== o.y) { var s = t.get("attrs").rotate;
                            s ? (t.rotateAtStart(-s), t.attr(o), t.rotateAtStart(s)) : t.attr(o) } } }, e.prototype.clear = function() { var e = this.get("customDiv");
                    e && (e.innerHTML = ""), t.prototype.clear.call(this) }, e.prototype.setItems = function(t) { this.clear(), this.set("items", t), this._drawLabels() }, e.prototype.remove = function() { var e = this.get("customDiv");
                    e && e.parentNode.removeChild(e), t.prototype.remove.call(this) }, e }(i.Group);
        t.exports = a }, function(t, e, n) { var r = n(172),
            i = n(19),
            o = n(0),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getPointRauis = function(t, e) { return i.getPointRadius(t, e) }, e.prototype.getCirclePoint = function(t, e, n) { var r = this.get("coord"),
                        i = r.getCenter(),
                        o = this._isEmitLabels(),
                        a = this.getPointRauis(r, n); if (r.isTransposed && a > e && !o) { t += 2 * Math.asin(e / (2 * a)) } else a += e; return { x: i.x + a * Math.cos(t), y: i.y + a * Math.sin(t), angle: t, r: a } }, e.prototype.getArcPoint = function(t, e) { var n = void 0; return e = e || 0, n = o.isArray(t.x) || o.isArray(t.y) ? { x: o.isArray(t.x) ? t.x[e] : t.x, y: o.isArray(t.y) ? t.y[e] : t.y } : t, this.transLabelPoint(n), n }, e.prototype.getPointAngle = function(t) { var e = this.get("coord"); return i.getPointAngle(e, t) }, e.prototype.getMiddlePoint = function(t) { var e = this.get("coord"),
                        n = t.length,
                        r = { x: 0, y: 0 }; return o.each(t, function(t) { r.x += t.x, r.y += t.y }), r.x /= n, r.y /= n, r = e.convert(r) }, e.prototype._isToMiddle = function(t) { return t.x.length > 2 }, e.prototype.getLabelPoint = function(t, e, n) { var r = t[n],
                        i = 1,
                        o = void 0;
                    this._isToMiddle(e) ? o = this.getMiddlePoint(e.points) : (1 === t.length && 0 === n ? n = 1 : 0 === n && (i = -1), o = this.getArcPoint(e, n)); var a = this.getDefaultOffset();
                    a *= i; var s = this.getPointAngle(o),
                        u = this.getCirclePoint(s, a, o); return u.text = r, u.angle = s, u.color = e.color, u.rotate = this.getLabelRotate(s, a, e), u }, e.prototype._isEmitLabels = function() { return this.get("label").labelEmit }, e.prototype.getLabelRotate = function(t) { var e = void 0; return e = 180 * t / Math.PI, e += 90, this._isEmitLabels() && (e -= 90), e && (e > 90 ? e -= 180 : e < -90 && (e += 180)), e / 180 * Math.PI }, e.prototype.getLabelAlign = function(t) { var e = this.get("coord"),
                        n = void 0; if (this._isEmitLabels()) n = t.angle <= Math.PI / 2 && t.angle > -Math.PI / 2 ? "left" : "right";
                    else if (e.isTransposed) { var r = e.getCenter(),
                            i = this.getDefaultOffset();
                        n = Math.abs(t.x - r.x) < 1 ? "center" : t.angle > Math.PI || t.angle <= 0 ? i > 0 ? "left" : "right" : i > 0 ? "right" : "left" } else n = "center"; return n }, e }(r);
        t.exports = a }, function(t, e, n) { var r = n(13),
            i = n(176),
            o = n(0),
            a = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return o.assign(r, i), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "path", e.shapeType = "line", e }, e.prototype.getDrawCfg = function(e) { var n = t.prototype.getDrawCfg.call(this, e); return n.isStack = this.hasStack(), n }, e.prototype.draw = function(t, e, n, r) { var i = this,
                        a = this.splitData(t),
                        s = this.getDrawCfg(t[0]);
                    s.origin = t, o.each(a, function(t, a) { if (!o.isEmpty(t)) { s.splitedIndex = a, s.points = t; var u = n.drawShape(s.shape, s, e);
                            u.setSilent("index", r + a), u.setSilent("coord", i.get("coord")), i.get("animate") && i.get("animateCfg") && u.setSilent("animateCfg", i.get("animateCfg")) } }) }, e }(r);
        t.exports = a }, function(t, e, n) { var r = n(0);
        t.exports = { splitData: function(t) { if (!t.length) return []; var e = [],
                    n = [],
                    i = this.getYScale().field,
                    o = void 0; return r.each(t, function(t) { o = t._origin ? t._origin[i] : t[i], r.isArray(o) && r.isNil(o[0]) || r.isNil(o) ? n.length && (e.push(n), n = []) : n.push(t) }), n.length && e.push(n), e } } }, function(t, e, n) { var r = n(1),
            i = n(0),
            o = { getDefalutSize: function() { var t = this.get("defaultSize"); if (!t) { var e = this.get("coord"),
                            n = this.getXScale(),
                            o = n.values,
                            a = this.get("dataArray"),
                            s = void 0; if (n.isLinear && o.length > 1) { o.sort(); var u = function(t, e) { var n = t.length;
                                i.isString(t[0]) && (t = t.map(function(t) { return e.translate(t) })); for (var r = t[1] - t[0], o = 2; o < n; o++) { var a = t[o] - t[o - 1];
                                    r > a && (r = a) } return r }(o, n);
                            s = (n.max - n.min) / u, o.length > s && (s = o.length) } else s = o.length; var c = n.range,
                            l = 1 / s,
                            h = 1; if (this.isInCircle() ? h = e.isTransposed && s > 1 ? r.widthRatio.multiplePie : r.widthRatio.rose : (n.isLinear && (l *= c[1] - c[0]), h = r.widthRatio.column), l *= h, this.hasAdjust("dodge")) { l /= this._getDodgeCount(a) } t = l, this.set("defaultSize", t) } return t }, _getDodgeCount: function(t) { var e = this.get("adjusts"),
                        n = void 0,
                        r = t.length; if (i.each(e, function(t) { "dodge" === t.type && (n = t.dodgeBy) }), n) { var o = i.Array.merge(t);
                        r = i.Array.values(o, n).length } return r }, getDimWidth: function(t) { var e = this.get("coord"),
                        n = e.convertPoint({ x: 0, y: 0 }),
                        r = e.convertPoint({ x: "x" === t ? 1 : 0, y: "x" === t ? 0 : 1 }),
                        i = 0; return n && r && (i = Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2))), i }, _getWidth: function() { var t = this.get("coord"); return this.isInCircle() && !t.isTransposed ? (t.endAngle - t.startAngle) * t.radius : this.getDimWidth("x") }, _toNormalizedSize: function(t) { return t / this._getWidth() }, _toCoordSize: function(t) { return this._getWidth() * t }, getNormalizedSize: function(t) { var e = this.getAttrValue("size", t); return e = i.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e) }, getSize: function(t) { var e = this.getAttrValue("size", t); if (i.isNil(e)) { var n = this.getDefalutSize();
                        e = this._toCoordSize(n) } return e } };
        t.exports = o }, function(t, e, n) { t.exports = { Scale: n(415), Coord: n(423), Axis: n(428), Guide: n(449), Legend: n(450), Tooltip: n(451), Event: n(452) } }, function(t, e, n) { var r = n(0),
            i = n(57);
        i.Linear = n(58), i.Identity = n(417), i.Cat = n(181), i.Time = n(418), i.TimeCat = n(420), i.Log = n(421), i.Pow = n(422); var o = function(t) { if (i.hasOwnProperty(t)) { var e = r.lowerFirst(t);
                i[e] = function(e) { return new i[t](e) } } }; for (var a in i) o(a); var s = ["cat", "timeCat"];
        i.isCategory = function(t) { return s.indexOf(t) >= 0 }, t.exports = i }, function(t, e) {
        function n(t, e) { var n = t.length; if (0 === n) return NaN; var r = t[0]; if (e < t[0]) return NaN; if (e >= t[n - 1]) return t[n - 1]; for (var i = 1; i < t.length && !(e < t[i]); i++) r = t[i]; return r }

        function r(t, e) { var n = t.length; if (0 === n) return NaN; var r = void 0; if (e > t[n - 1]) return NaN; if (e < t[0]) return t[0]; for (var i = 1; i < t.length; i++)
                if (e <= t[i]) { r = t[i]; break }
            return r } var i = { snapFactorTo: function(t, e, n) { if (isNaN(t)) return NaN; var r = 1; if (0 !== t) { t < 0 && (r = -1); var o = function(t) { var e = 1; if (t < 1) { for (var n = 0; t < 1;) e /= 10, t *= 10, n++;
                            e.toString().length > 20 && (e = parseFloat(e.toFixed(n))) } else
                            for (; t > 10;) e *= 10, t /= 10; return e }(t *= r);
                    r *= o, t /= o } var a = (t = "floor" === n ? i.snapFloor(e, t) : "ceil" === n ? i.snapCeiling(e, t) : i.snapTo(e, t)) * r; if (Math.abs(r) < 1 && a.toString().length > 20) { a = t / parseInt(1 / r) * (r > 0 ? 1 : -1) } return a }, snapMultiple: function(t, e, n) { return ("ceil" === n ? Math.ceil(t / e) : "floor" === n ? Math.floor(t / e) : Math.round(t / e)) * e }, snapTo: function(t, e) { var i = n(t, e),
                    o = r(t, e); if (isNaN(i) || isNaN(o)) { if (t[0] >= e) return t[0]; var a = t[t.length - 1]; if (a <= e) return a } return Math.abs(e - i) < Math.abs(o - e) ? i : o }, snapFloor: function(t, e) { return n(t, e) }, snapCeiling: function(t, e) { return r(t, e) } };
        t.exports = i }, function(t, e, n) { var r = n(57),
            i = n(0),
            o = n(182),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return i.mix({}, e, { type: "cat", tickCount: null, isCategory: !0 }) }, e.prototype.init = function() { var t = this.values,
                        e = this.tickCount; if (i.each(t, function(e, n) { t[n] = e.toString() }), !this.ticks) { var n = t; if (e) { n = o({ maxCount: e, data: t }).ticks } this.ticks = n } }, e.prototype.getText = function(e) { return -1 === this.values.indexOf(e) && i.isNumber(e) && (e = this.values[Math.round(e)]), t.prototype.getText.call(this, e) }, e.prototype.translate = function(t) { var e = this.values.indexOf(t); return -1 === e && i.isNumber(t) ? e = t : -1 === e && (e = NaN), e }, e.prototype.scale = function(t) { var e = this.rangeMin(),
                        n = this.rangeMax(),
                        r = void 0; return (i.isString(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), r = this.values.length > 1 ? t / (this.values.length - 1) : t, e + r * (n - e) }, e.prototype.invert = function(t) { if (i.isString(t)) return t; var e = this.rangeMin(),
                        n = this.rangeMax();
                    t < e && (t = e), t > n && (t = n); var r = (t - e) / (n - e),
                        o = Math.round(r * (this.values.length - 1)) % this.values.length; return o = o || 0, this.values[o] }, e }(r);
        t.exports = a }, function(t, e, n) { var r = n(0);
        t.exports = function(t) { var e = {},
                n = [],
                i = t.maxCount || 8,
                o = function(t) { var e = []; return r.each(t, function(t) { r.isArray(t) ? e = e.concat(t) : e.push(t) }), e }(t.data); if (o.length <= i + i / 2) n = [].concat(o);
            else { var a = o.length,
                    s = parseInt(a / (i - 1), 10),
                    u = o.map(function(t, e) { return e % s == 0 ? o.slice(e, e + s) : null }).filter(function(t) { return t });
                n.push(o[0]); for (var c = 1; c < u.length && c < i - 1; c++) n.push(u[c][0]);
                n.push(o[a - 1]) } return e.categories = o, e.ticks = n, e } }, function(t, e, n) { var r;! function(i) { "use strict";

            function o(t, e) { for (var n = [], r = 0, i = t.length; r < i; r++) n.push(t[r].substr(0, e)); return n }

            function a(t) { return function(e, n, r) { var i = r[t].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());~i && (e.month = i) } }

            function s(t, e) { for (t = String(t), e = e || 2; t.length < e;) t = "0" + t; return t } var u = {},
                c = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
                l = /\d\d?/,
                h = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                f = /\[([^]*?)\]/gm,
                p = function() {},
                g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                y = o(d, 3),
                v = o(g, 3);
            u.i18n = { dayNamesShort: v, dayNames: g, monthNamesShort: y, monthNames: d, amPm: ["am", "pm"], DoFn: function(t) { return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10] } }; var x = { D: function(t) { return t.getDate() }, DD: function(t) { return s(t.getDate()) }, Do: function(t, e) { return e.DoFn(t.getDate()) }, d: function(t) { return t.getDay() }, dd: function(t) { return s(t.getDay()) }, ddd: function(t, e) { return e.dayNamesShort[t.getDay()] }, dddd: function(t, e) { return e.dayNames[t.getDay()] }, M: function(t) { return t.getMonth() + 1 }, MM: function(t) { return s(t.getMonth() + 1) }, MMM: function(t, e) { return e.monthNamesShort[t.getMonth()] }, MMMM: function(t, e) { return e.monthNames[t.getMonth()] }, YY: function(t) { return String(t.getFullYear()).substr(2) }, YYYY: function(t) { return t.getFullYear() }, h: function(t) { return t.getHours() % 12 || 12 }, hh: function(t) { return s(t.getHours() % 12 || 12) }, H: function(t) { return t.getHours() }, HH: function(t) { return s(t.getHours()) }, m: function(t) { return t.getMinutes() }, mm: function(t) { return s(t.getMinutes()) }, s: function(t) { return t.getSeconds() }, ss: function(t) { return s(t.getSeconds()) }, S: function(t) { return Math.round(t.getMilliseconds() / 100) }, SS: function(t) { return s(Math.round(t.getMilliseconds() / 10), 2) }, SSS: function(t) { return s(t.getMilliseconds(), 3) }, a: function(t, e) { return t.getHours() < 12 ? e.amPm[0] : e.amPm[1] }, A: function(t, e) { return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase() }, ZZ: function(t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4) } },
                m = { D: [l, function(t, e) { t.day = e }], Do: [new RegExp(l.source + h.source), function(t, e) { t.day = parseInt(e, 10) }], M: [l, function(t, e) { t.month = e - 1 }], YY: [l, function(t, e) { var n = +("" + (new Date).getFullYear()).substr(0, 2);
                        t.year = "" + (e > 68 ? n - 1 : n) + e }], h: [l, function(t, e) { t.hour = e }], m: [l, function(t, e) { t.minute = e }], s: [l, function(t, e) { t.second = e }], YYYY: [/\d{4}/, function(t, e) { t.year = e }], S: [/\d/, function(t, e) { t.millisecond = 100 * e }], SS: [/\d{2}/, function(t, e) { t.millisecond = 10 * e }], SSS: [/\d{3}/, function(t, e) { t.millisecond = e }], d: [l, p], ddd: [h, p], MMM: [h, a("monthNamesShort")], MMMM: [h, a("monthNames")], a: [h, function(t, e, n) { var r = e.toLowerCase();
                        r === n.amPm[0] ? t.isPm = !1 : r === n.amPm[1] && (t.isPm = !0) }], ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function(t, e) { "Z" === e && (e = "+00:00"); var n, r = (e + "").match(/([\+\-]|\d\d)/gi);
                        r && (n = 60 * r[1] + parseInt(r[2], 10), t.timezoneOffset = "+" === r[0] ? n : -n) }] };
            m.dd = m.d, m.dddd = m.ddd, m.DD = m.D, m.mm = m.m, m.hh = m.H = m.HH = m.h, m.MM = m.M, m.ss = m.s, m.A = m.a, u.masks = { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" }, u.format = function(t, e, n) { var r = n || u.i18n; if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format"); var i = []; return e = (e = u.masks[e] || e || u.masks.default).replace(f, function(t, e) { return i.push(e), "??" }), (e = e.replace(c, function(e) { return e in x ? x[e](t, r) : e.slice(1, e.length - 1) })).replace(/\?\?/g, function() { return i.shift() }) }, u.parse = function(t, e, n) { var r = n || u.i18n; if ("string" != typeof e) throw new Error("Invalid format in fecha.parse"); if (e = u.masks[e] || e, t.length > 1e3) return !1; var i = !0,
                    o = {}; if (e.replace(c, function(e) { if (m[e]) { var n = m[e],
                                a = t.search(n[0]);~a ? t.replace(n[0], function(e) { return n[1](o, e, r), t = t.substr(a + e.length), e }) : i = !1 } return m[e] ? "" : e.slice(1, e.length - 1) }), !i) return !1; var a = new Date;!0 === o.isPm && null != o.hour && 12 != +o.hour ? o.hour = +o.hour + 12 : !1 === o.isPm && 12 == +o.hour && (o.hour = 0); var s; return null != o.timezoneOffset ? (o.minute = +(o.minute || 0) - +o.timezoneOffset, s = new Date(Date.UTC(o.year || a.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0))) : s = new Date(o.year || a.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0), s }, void 0 !== t && t.exports ? t.exports = u : void 0 !== (r = function() { return u }.call(e, n, e, t)) && (t.exports = r) }() }, function(t, e, n) { var r = n(0);
        t.exports = { toTimeStamp: function(t) { return r.isString(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), r.isDate(t) && (t = t.getTime()), t } } }, function(t, e, n) { var r = n(0),
            i = n(1),
            o = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { title: { fill: "#333", textBaseline: "middle" }, itemFormatter: null, useHtml: !1, inPlot: !1, hoverable: !0 } }, e.prototype._beforeRenderUI = function() { this.set("itemsGroup", this.addGroup()) }, e.prototype._renderUI = function() { this._renderTitle() }, e.prototype._renderTitle = function() { var t = this.get("title"); if (t && t.text) { var e = this.addShape("text", { attrs: r.mix({ x: 0, y: 0, fill: "#333", textBaseline: "middle", fontFamily: i.fontFamily }, t) });
                        e.name = "legend-title", this.set("titleShape", e) } }, e.prototype.getCheckedCount = function() { var t = this.get("itemsGroup").get("children"); return r.filter(t, function(t) { return t.get("checked") }).length }, e.prototype.setItems = function(t) { this.set("items", t), this.clearItems(), this._renderUI() }, e.prototype.addItem = function(t) { this.get("items").push(t), this.clearItems(), this._renderUI() }, e.prototype.clearItems = function() { this.get("itemsGroup").clear() }, e.prototype.getWidth = function() { return this.getBBox().width }, e.prototype.getHeight = function() { return this.getBBox().height }, e }(n(2).Group);
        t.exports = o }, function(t, e, n) { var r = n(0),
            i = n(1),
            o = n(185),
            a = n(2),
            s = a.Event,
            u = a.Group,
            c = n(445),
            l = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "continuous-legend", items: null, layout: "vertical", width: 156, height: 20, titleGap: 22, textStyle: { fill: "#333", textAlign: "center", textBaseline: "middle", fontFamily: i.fontFamily }, slidable: !0, inRange: { fill: "#4E7CCC" }, _range: [0, 100], middleAttr: { fill: "#fff", fillOpacity: 0 }, outRangeStyle: { fill: "#D9D9D9" }, labelOffset: 10 }) }, e.prototype._calStartPoint = function() { var t = { x: 0, y: this.get("titleGap") - 12 },
                        e = this.get("titleShape"); if (e) { var n = e.getBBox();
                        t.y += n.height } return t }, e.prototype._beforeRenderUI = function() { var e = this.get("items");
                    r.isArray(e) && !r.isEmpty(e) && (t.prototype._beforeRenderUI.call(this), this.set("firstItem", e[0]), this.set("lastItem", e[e.length - 1])) }, e.prototype._formatItemValue = function(t) { var e = this.get("itemFormatter"); return e && (t = e.call(this, t)), t }, e.prototype._renderUI = function() { t.prototype._renderUI.call(this), this.get("slidable") ? this._renderSlider() : this._renderBackground() }, e.prototype._renderSlider = function() { var t = new u,
                        e = new u,
                        n = new u,
                        r = this._calStartPoint(),
                        i = this.addGroup(c, { minHandleElement: t, maxHandleElement: e, backgroundElement: n, middleAttr: this.get("middleAttr"), layout: this.get("layout"), range: this.get("_range"), width: this.get("width"), height: this.get("height") });
                    i.translate(r.x, r.y), this.set("slider", i);
                    this._renderSliderShape().attr("clip", i.get("middleHandleElement")), this._renderTrigger() }, e.prototype._addBackground = function(t, e, n) { return t.addShape(e, { attrs: r.mix({}, n, this.get("outRangeStyle")) }), t.addShape(e, { attrs: n }) }, e.prototype._renderTrigger = function() { var t = this.get("firstItem"),
                        e = this.get("lastItem"),
                        n = this.get("layout"),
                        i = this.get("textStyle"),
                        o = this.get("inRange"),
                        a = void 0,
                        s = void 0; "color-legend" === this.get("type") ? (a = { fill: t.attrValue }, s = { fill: e.attrValue }) : (a = r.mix({}, o), s = r.mix({}, o)); var u = r.mix({ text: this._formatItemValue(t.value) + "" }, i),
                        c = r.mix({ text: this._formatItemValue(e.value) + "" }, i); "vertical" === n ? (this._addVerticalTrigger("min", a, u), this._addVerticalTrigger("max", s, c)) : (this._addHorizontalTrigger("min", a, u), this._addHorizontalTrigger("max", s, c)) }, e.prototype._addVerticalTrigger = function(t, e, n) { var i = this.get("slider").get(t + "HandleElement"),
                        o = this.get("width"),
                        a = i.addShape("polygon", { attrs: r.mix({ points: [
                                    [o / 2 + 12, 0],
                                    [o / 2 + 1, 0],
                                    [o / 2 + 12, "min" === t ? 12 : -12]
                                ] }, e) }),
                        s = i.addShape("text", { attrs: r.mix(n, { x: o + 8, y: "max" === t ? -4 : 4, textAlign: "start", lineHeight: 1, textBaseline: "middle" }) }),
                        u = "vertical" === this.get("layout") ? "ns-resize" : "ew-resize";
                    a.attr("cursor", u), s.attr("cursor", u), this.set(t + "ButtonElement", a), this.set(t + "TextElement", s) }, e.prototype._addHorizontalTrigger = function(t, e, n) { var i = this.get("slider").get(t + "HandleElement"),
                        o = i.addShape("polygon", { attrs: r.mix({ points: [
                                    [0, 0],
                                    [0, 12],
                                    ["min" === t ? -12 : 12, 12]
                                ] }, e) }),
                        a = i.addShape("text", { attrs: r.mix(n, { x: "min" === t ? -16 : 16, y: 6, textAlign: "min" === t ? "end" : "start", textBaseline: "middle" }) }),
                        s = "vertical" === this.get("layout") ? "ns-resize" : "ew-resize";
                    o.attr("cursor", s), a.attr("cursor", s), this.set(t + "ButtonElement", o), this.set(t + "TextElement", a) }, e.prototype._bindUI = function() { var t = this; if (t.get("slidable")) { t.get("slider").on("sliderchange", function(e) { var n = e.range,
                                r = 1 * t.get("firstItem").value,
                                i = 1 * t.get("lastItem").value,
                                o = r + n[0] / 100 * (i - r),
                                a = r + n[1] / 100 * (i - r);
                            t._updateElement(o, a); var u = new s("itemfilter", e, !0, !0);
                            u.range = [o, a], t.emit("itemfilter", u) }) } }, e.prototype._updateElement = function(t, e) { var n = this.get("minTextElement"),
                        r = this.get("maxTextElement"); if (e > 1 && (t = parseInt(t, 10), e = parseInt(e, 10)), n.attr("text", this._formatItemValue(t) + ""), r.attr("text", this._formatItemValue(e) + ""), "color-legend" === this.get("type") && this.get("attr")) { var i = this.get("attr"),
                            o = this.get("minButtonElement"),
                            a = this.get("maxButtonElement");
                        o.attr("fill", i.mapping(t).join("")), a.attr("fill", i.mapping(e).join("")) } }, e }(o);
        t.exports = l }, function(t, e, n) { var r = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                    function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "rect", e }, e.prototype.generateFacets = function(t) { var e = this,
                    n = e.fields,
                    r = [],
                    i = 1,
                    o = 1,
                    a = n[0],
                    s = n[1],
                    u = [""],
                    c = [""]; return a && (u = e.getFieldValues(a, t), o = u.length), s && (c = e.getFieldValues(s, t), i = c.length), u.forEach(function(n, l) { c.forEach(function(h, f) { var p = [{ field: a, value: n, values: u }, { field: s, value: h, values: c }],
                            g = e.getFilter(p),
                            d = t.filter(g),
                            y = { type: e.type, colValue: n, rowValue: h, colField: a, rowField: s, colIndex: l, rowIndex: f, cols: o, rows: i, data: d, region: e.getRegion(i, o, l, f) };
                        r.push(y) }) }), r }, e.prototype.setXAxis = function(t, e, n) { n.rowIndex !== n.rows - 1 ? (e[t].title = null, e[t].label = null) : n.colIndex !== parseInt((n.cols - 1) / 2) && (e[t].title = null) }, e.prototype.setYAxis = function(t, e, n) { 0 !== n.colIndex ? (e[t].title = null, e[t].label = null) : n.rowIndex !== parseInt((n.rows - 1) / 2) && (e[t].title = null) }, e.prototype.renderTitle = function(t, e) { 0 === e.rowIndex && this.drawColTitle(t, e), e.colIndex === e.cols - 1 && this.drawRowTitle(t, e) }, e }(n(61));
        t.exports = r }, function(t, e, n) { var r = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                    function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "list", e.cols = null, e }, e.prototype.generateFacets = function(t) { var e = this,
                    n = e.fields[0]; if (!n) throw "Please specify for the field for facet!"; var r = e.getFieldValues(n, t),
                    i = r.length,
                    o = e.cols || i,
                    a = parseInt((i + o - 1) / o),
                    s = []; return r.forEach(function(u, c) { var l = parseInt(c / o),
                        h = c % o,
                        f = [{ field: n, value: u, values: r }],
                        p = e.getFilter(f),
                        g = t.filter(p),
                        d = { type: e.type, count: i, colValue: u, colField: n, rowField: null, rowValue: u, colIndex: h, rowIndex: l, cols: o, rows: a, data: g, region: e.getRegion(a, o, h, l) };
                    s.push(d) }), s }, e.prototype.setXAxis = function(t, e, n) { n.rowIndex !== n.rows - 1 && n.cols * n.rowIndex + n.colIndex + 1 + n.cols <= n.count && (e[t].label = null, e[t].title = null) }, e.prototype.setYAxis = function(t, e, n) { 0 !== n.colIndex && (e[t].title = null, e[t].label = null) }, e }(n(61));
        t.exports = r }, function(t, e, n) { var r = n(2),
            i = n(162),
            o = n(377),
            a = n(1),
            s = n(179),
            u = n(93),
            c = n(0),
            l = { version: a.version, Animate: i, Chart: o, Global: a, Scale: s, Shape: u, Util: c, G: r, DomUtil: r.DomUtil, MatrixUtil: r.MatrixUtil, PathUtil: r.PathUtil };
        l.track = function(t) { a.trackable = t }, n(459), "undefined" != typeof window && (window.G2 ? console.warn("There are multiple versions of G2. Version " + l.version + "'s reference is 'window.G2_3'") : window.G2 = l), t.exports = l }, function(t, e, n) { var r = n(3),
            i = n(135),
            o = n(136),
            a = function t(e) { t.superclass.constructor.call(this, e) };
        a.CFG = { eventEnable: !0, width: null, height: null, widthCanvas: null, heightCanvas: null, widthStyle: null, heightStyle: null, containerDOM: null, canvasDOM: null, pixelRatio: null }, r.extend(a, o), r.augment(a, { init: function() { a.superclass.init.call(this), this._setGlobalParam(), this._setDOM(), this._setInitSize(), this._setCanvas(), this._scale(), this.get("eventEnable") && this._registEvents() }, getEmitter: function(t, e) { if (t) { if (!r.isEmpty(t._getEvents())) return t; var n = t.get("parent"); if (n && !e.propagationStopped) return this.getEmitter(n, e) } }, _getEventObj: function(t, e, n, r) { var o = new i(t, e, !0, !0); return o.x = n.x, o.y = n.y, o.clientX = e.clientX, o.clientY = e.clientY, o.currentTarget = r, o.target = r, o }, _triggerEvent: function(t, e) { var n = this.getPointByClient(e.clientX, e.clientY),
                    r = this.getShape(n.x, n.y),
                    i = void 0; if ("mousemove" === t) { var o = this._getEventObj("mousemove", e, n, this);
                    this.emit("mousemove", o); var a = this.get("preShape"); if (a && a !== r) { var s = this._getEventObj("mouseleave", e, n, a);
                        (i = this.getEmitter(a, e)) && i.emit("mouseleave", s) } if (r) { var u = this._getEventObj("mousemove", e, n, r); if ((i = this.getEmitter(r, e)) && i.emit("mousemove", u), a !== r) { var c = this._getEventObj("mouseenter", e, n, r);
                            i && i.emit("mouseenter", c, e) } } this.set("preShape", r) } else { var l = this._getEventObj(t, e, n, r || this);
                    (i = this.getEmitter(r, e)) && i !== this && i.emit(t, l), this.emit(t, l) } var h = this.get("el");
                r && !r.get("destroyed") && (h.style.cursor = r.attr("cursor") || "default") }, _registEvents: function() { var t = this,
                    e = t.get("el");
                e.addEventListener("mouseout", function(e) { t._triggerEvent("mouseleave", e) }, !1), e.addEventListener("mouseover", function(e) { t._triggerEvent("mouseenter", e) }, !1), e.addEventListener("mousemove", function(e) { t._triggerEvent("mousemove", e) }, !1), e.addEventListener("mousedown", function(e) { t._triggerEvent("mousedown", e) }, !1), e.addEventListener("mouseup", function(e) { t._triggerEvent("mouseup", e) }, !1), e.addEventListener("click", function(e) { t._triggerEvent("click", e) }, !1), e.addEventListener("dblclick", function(e) { t._triggerEvent("dblclick", e) }, !1), e.addEventListener("touchstart", function(e) { r.isEmpty(e.touches) || t._triggerEvent("touchstart", e.touches[0]) }, !1), e.addEventListener("touchmove", function(e) { r.isEmpty(e.touches) || t._triggerEvent("touchmove", e.touches[0]) }, !1), e.addEventListener("touchend", function(e) { r.isEmpty(e.changedTouches) || t._triggerEvent("touchend", e.changedTouches[0]) }, !1) }, _scale: function() { var t = this.get("pixelRatio");
                this.scale(t, t) }, _setCanvas: function() { var t = this.get("canvasDOM");
                this.set("el", t), this.set("context", t.getContext("2d")), this.set("canvas", this) }, _setGlobalParam: function() { this.get("pixelRatio") || this.set("pixelRatio", r.getRatio()) }, _setDOM: function() { this._setContainer(), this._setLayer() }, _setContainer: function() { var t = this.get("containerId"),
                    e = this.get("containerDOM");
                e || (e = document.getElementById(t), this.set("containerDOM", e)), r.modifyCSS(e, { position: "relative" }) }, _setLayer: function() { var t = this.get("containerDOM"),
                    e = r.uniqueId("canvas_"); if (t) { var n = r.createDom('<canvas id="' + e + '"></canvas>');
                    t.appendChild(n), this.set("canvasDOM", n) } }, _setInitSize: function() { this.changeSize(this.get("width"), this.get("height")) }, _reSize: function() { var t = this.get("canvasDOM"),
                    e = this.get("widthCanvas"),
                    n = this.get("heightCanvas"),
                    r = this.get("widthStyle"),
                    i = this.get("heightStyle");
                t.style.width = r, t.style.height = i, t.setAttribute("width", e), t.setAttribute("height", n) }, getWidth: function() { var t = this.get("pixelRatio"); return this.get("width") * t }, getHeight: function() { var t = this.get("pixelRatio"); return this.get("height") * t }, changeSize: function(t, e) { var n = this.get("pixelRatio"),
                    r = t * n,
                    i = e * n;
                this.set("widthCanvas", r), this.set("heightCanvas", i), this.set("widthStyle", t + "px"), this.set("heightStyle", e + "px"), this.set("width", t), this.set("height", e), this._reSize() }, getPointByClient: function(t, e) { var n = this.get("el"),
                    r = n.getBoundingClientRect(),
                    i = r.right - r.left,
                    o = r.bottom - r.top; return { x: (t - r.left) * (n.width / i), y: (e - r.top) * (n.height / o) } }, getClientByPoint: function(t, e) { var n = this.get("el"),
                    r = n.getBoundingClientRect(),
                    i = r.right - r.left,
                    o = r.bottom - r.top; return { clientX: t / (n.width / i) + r.left, clientY: e / (n.height / o) + r.top } }, beforeDraw: function() { var t = this.get("context"),
                    e = this.get("el");
                t && t.clearRect(0, 0, e.width, e.height) }, _beginDraw: function() { this.setSilent("toDraw", !0) }, _endDraw: function() { this.setSilent("toDraw", !1) }, draw: function() {
                function t() { e.setSilent("animateHandler", function(t) { return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { return setTimeout(t, 16) })(t) }(function() { e.setSilent("animateHandler", void 0), e.get("toDraw") && t() })), e.beforeDraw(); try { var n = e.get("context");
                        a.superclass.draw.call(e, n) } catch (t) { console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw() } e._endDraw() } var e = this;
                e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t()) }, destroy: function() { var t = this.get("containerDOM"),
                    e = this.get("canvasDOM");
                e && t && t.removeChild(e), a.superclass.destroy.call(this) } }), t.exports = a }, function(t, e) { var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window) } t.exports = n }, function(t, e, n) { var r = n(15),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            s = r ? r.toStringTag : void 0;
        t.exports = function(t) { var e = o.call(t, s),
                n = t[s]; try { t[s] = void 0; var r = !0 } catch (t) {} var i = a.call(t); return r && (e ? t[s] = n : delete t[s]), i } }, function(t, e) { var n = Object.prototype.toString;
        t.exports = function(t) { return n.call(t) } }, function(t, e, n) { var r = n(100)(Object.keys, Object);
        t.exports = r }, function(t, e, n) { var r = n(16)(n(9), "DataView");
        t.exports = r }, function(t, e, n) { var r = n(25),
            i = n(197),
            o = n(7),
            a = n(101),
            s = /^\[object .+?Constructor\]$/,
            u = Function.prototype,
            c = Object.prototype,
            l = u.toString,
            h = c.hasOwnProperty,
            f = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function(t) { return !(!o(t) || i(t)) && (r(t) ? f : s).test(a(t)) } }, function(t, e, n) { var r = n(198),
            i = function() { var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }();
        t.exports = function(t) { return !!i && i in t } }, function(t, e, n) { var r = n(9)["__core-js_shared__"];
        t.exports = r }, function(t, e) { t.exports = function(t, e) { return null == t ? void 0 : t[e] } }, function(t, e, n) { var r = n(16)(n(9), "Promise");
        t.exports = r }, function(t, e, n) { var r = n(16)(n(9), "WeakMap");
        t.exports = r }, function(t, e, n) { var r = n(11),
            i = n(10),
            o = "[object Arguments]";
        t.exports = function(t) { return i(t) && r(t) == o } }, function(t, e) { t.exports = function() { return !1 } }, function(t, e, n) { var r = n(11),
            i = n(66),
            o = n(10),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) { return o(t) && i(t.length) && !!a[r(t)] } }, function(t, e, n) { var r = n(17),
            i = 0;
        t.exports = function(t) { var e = ++i; return r(t) + e } }, function(t, e, n) {
        function r(t) { if ("string" == typeof t) return t; if (a(t)) return o(t, r) + ""; if (s(t)) return l ? l.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -u ? "-0" : e } var i = n(15),
            o = n(39),
            a = n(4),
            s = n(29),
            u = 1 / 0,
            c = i ? i.prototype : void 0,
            l = c ? c.toString : void 0;
        t.exports = r }, function(t, e, n) { var r = n(104),
            i = 4;
        t.exports = function(t) { return r(t, i) } }, function(t, e) { t.exports = function() { this.__data__ = [], this.size = 0 } }, function(t, e, n) { var r = n(42),
            i = Array.prototype.splice;
        t.exports = function(t) { var e = this.__data__,
                n = r(e, t); return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)) } }, function(t, e, n) { var r = n(42);
        t.exports = function(t) { var e = this.__data__,
                n = r(e, t); return n < 0 ? void 0 : e[n][1] } }, function(t, e, n) { var r = n(42);
        t.exports = function(t) { return r(this.__data__, t) > -1 } }, function(t, e, n) { var r = n(42);
        t.exports = function(t, e) { var n = this.__data__,
                i = r(n, t); return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this } }, function(t, e, n) { var r = n(41);
        t.exports = function() { this.__data__ = new r, this.size = 0 } }, function(t, e) { t.exports = function(t) { var e = this.__data__,
                n = e.delete(t); return this.size = e.size, n } }, function(t, e) { t.exports = function(t) { return this.__data__.get(t) } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e, n) { var r = n(41),
            i = n(65),
            o = n(69),
            a = 200;
        t.exports = function(t, e) { var n = this.__data__; if (n instanceof r) { var s = n.__data__; if (!i || s.length < a - 1) return s.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new o(s) } return n.set(t, e), this.size = n.size, this } }, function(t, e, n) { var r = n(219),
            i = n(41),
            o = n(65);
        t.exports = function() { this.size = 0, this.__data__ = { hash: new r, map: new(o || i), string: new r } } }, function(t, e, n) {
        function r(t) { var e = -1,
                n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
                this.set(r[0], r[1]) } } var i = n(220),
            o = n(221),
            a = n(222),
            s = n(223),
            u = n(224);
        r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r }, function(t, e, n) { var r = n(43);
        t.exports = function() { this.__data__ = r ? r(null) : {}, this.size = 0 } }, function(t, e) { t.exports = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e } }, function(t, e, n) { var r = n(43),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t) { var e = this.__data__; if (r) { var n = e[t]; return n === i ? void 0 : n } return o.call(e, t) ? e[t] : void 0 } }, function(t, e, n) { var r = n(43),
            i = Object.prototype.hasOwnProperty;
        t.exports = function(t) { var e = this.__data__; return r ? void 0 !== e[t] : i.call(e, t) } }, function(t, e, n) { var r = n(43),
            i = "__lodash_hash_undefined__";
        t.exports = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this } }, function(t, e, n) { var r = n(44);
        t.exports = function(t) { var e = r(this, t).delete(t); return this.size -= e ? 1 : 0, e } }, function(t, e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { var e = void 0 === t ? "undefined" : n(t); return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } }, function(t, e, n) { var r = n(44);
        t.exports = function(t) { return r(this, t).get(t) } }, function(t, e, n) { var r = n(44);
        t.exports = function(t) { return r(this, t).has(t) } }, function(t, e, n) { var r = n(44);
        t.exports = function(t, e) { var n = r(this, t),
                i = n.size; return n.set(t, e), this.size += n.size == i ? 0 : 1, this } }, function(t, e, n) { var r = n(20),
            i = n(18);
        t.exports = function(t, e) { return t && r(e, i(e), t) } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r } }, function(t, e, n) { var r = n(20),
            i = n(48);
        t.exports = function(t, e) { return t && r(e, i(e), t) } }, function(t, e, n) { var r = n(7),
            i = n(26),
            o = n(234),
            a = Object.prototype.hasOwnProperty;
        t.exports = function(t) { if (!r(t)) return o(t); var e = i(t),
                n = []; for (var s in t)("constructor" != s || !e && a.call(t, s)) && n.push(s); return n } }, function(t, e) { t.exports = function(t) { var e = []; if (null != t)
                for (var n in Object(t)) e.push(n); return e } }, function(t, e, n) { var r = n(20),
            i = n(70);
        t.exports = function(t, e) { return r(t, i(t), e) } }, function(t, e, n) { var r = n(20),
            i = n(111);
        t.exports = function(t, e) { return r(t, i(t), e) } }, function(t, e, n) { var r = n(113),
            i = n(111),
            o = n(48);
        t.exports = function(t) { return r(t, o, i) } }, function(t, e) { var n = Object.prototype.hasOwnProperty;
        t.exports = function(t) { var e = t.length,
                r = t.constructor(e); return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r } }, function(t, e, n) { var r = n(73),
            i = n(240),
            o = n(241),
            a = n(243),
            s = n(244),
            u = n(246),
            c = n(115),
            l = "[object Boolean]",
            h = "[object Date]",
            f = "[object Map]",
            p = "[object Number]",
            g = "[object RegExp]",
            d = "[object Set]",
            y = "[object String]",
            v = "[object Symbol]",
            x = "[object ArrayBuffer]",
            m = "[object DataView]",
            b = "[object Float32Array]",
            _ = "[object Float64Array]",
            w = "[object Int8Array]",
            S = "[object Int16Array]",
            M = "[object Int32Array]",
            C = "[object Uint8Array]",
            P = "[object Uint8ClampedArray]",
            A = "[object Uint16Array]",
            k = "[object Uint32Array]";
        t.exports = function(t, e, n, O) { var T = t.constructor; switch (e) {
                case x:
                    return r(t);
                case l:
                case h:
                    return new T(+t);
                case m:
                    return i(t, O);
                case b:
                case _:
                case w:
                case S:
                case M:
                case C:
                case P:
                case A:
                case k:
                    return c(t, O);
                case f:
                    return o(t, O, n);
                case p:
                case y:
                    return new T(t);
                case g:
                    return a(t);
                case d:
                    return s(t, O, n);
                case v:
                    return u(t) } } }, function(t, e, n) { var r = n(73);
        t.exports = function(t, e) { var n = e ? r(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.byteLength) } }, function(t, e, n) { var r = n(242),
            i = n(74),
            o = n(75),
            a = 1;
        t.exports = function(t, e, n) { var s = e ? n(o(t), a) : o(t); return i(s, r, new t.constructor) } }, function(t, e) { t.exports = function(t, e) { return t.set(e[0], e[1]), t } }, function(t, e) { var n = /\w*$/;
        t.exports = function(t) { var e = new t.constructor(t.source, n.exec(t)); return e.lastIndex = t.lastIndex, e } }, function(t, e, n) { var r = n(245),
            i = n(74),
            o = n(31),
            a = 1;
        t.exports = function(t, e, n) { var s = e ? n(o(t), a) : o(t); return i(s, r, new t.constructor) } }, function(t, e) { t.exports = function(t, e) { return t.add(e), t } }, function(t, e, n) { var r = n(15),
            i = r ? r.prototype : void 0,
            o = i ? i.valueOf : void 0;
        t.exports = function(t) { return o ? Object(o.call(t)) : {} } }, function(t, e, n) { var r = n(7),
            i = Object.create,
            o = function() {
                function t() {} return function(e) { if (!r(e)) return {}; if (i) return i(e);
                    t.prototype = e; var n = new t; return t.prototype = void 0, n } }();
        t.exports = o }, function(t, e) { t.exports = function(t, e, n) { switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]) } return t.apply(e, n) } }, function(t, e, n) { var r = n(250),
            i = n(106),
            o = n(51),
            a = i ? function(t, e) { return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : o;
        t.exports = a }, function(t, e) { t.exports = function(t) { return function() { return t } } }, function(t, e) { var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function(t) { var e = 0,
                o = 0; return function() { var a = i(),
                    s = r - (a - o); if (o = a, s > 0) { if (++e >= n) return arguments[0] } else e = 0; return t.apply(void 0, arguments) } } }, function(t, e, n) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(30),
            o = n(12),
            a = n(47),
            s = n(7);
        t.exports = function(t, e, n) { if (!s(n)) return !1; var u = void 0 === e ? "undefined" : r(e); return !!("number" == u ? o(n) && a(e, n.length) : "string" == u && e in n) && i(n[e], t) } }, function(t, e, n) { var r = n(254),
            i = n(117)(function(t, e, n) { r(t, e, n) });
        t.exports = i }, function(t, e, n) {
        function r(t, e, n, l, h) { t !== e && a(e, function(a, c) { if (u(a)) h || (h = new i), s(t, e, c, n, r, l, h);
                else { var f = l ? l(t[c], a, c + "", t, e, h) : void 0;
                    void 0 === f && (f = a), o(t, c, f) } }, c) } var i = n(40),
            o = n(120),
            a = n(121),
            s = n(256),
            u = n(7),
            c = n(48);
        t.exports = r }, function(t, e) { t.exports = function(t) { return function(e, n, r) { for (var i = -1, o = Object(e), a = r(e), s = a.length; s--;) { var u = a[t ? s : ++i]; if (!1 === n(o[u], u, o)) break } return e } } }, function(t, e, n) { var r = n(120),
            i = n(108),
            o = n(115),
            a = n(49),
            s = n(116),
            u = n(27),
            c = n(4),
            l = n(122),
            h = n(28),
            f = n(25),
            p = n(7),
            g = n(123),
            d = n(38),
            y = n(257);
        t.exports = function(t, e, n, v, x, m, b) { var _ = t[n],
                w = e[n],
                S = b.get(w); if (S) r(t, n, S);
            else { var M = m ? m(_, w, n + "", t, e, b) : void 0,
                    C = void 0 === M; if (C) { var P = c(w),
                        A = !P && h(w),
                        k = !P && !A && d(w);
                    M = w, P || A || k ? c(_) ? M = _ : l(_) ? M = a(_) : A ? (C = !1, M = i(w, !0)) : k ? (C = !1, M = o(w, !0)) : M = [] : g(w) || u(w) ? (M = _, u(_) ? M = y(_) : (!p(_) || v && f(_)) && (M = s(w))) : C = !1 } C && (b.set(w, M), x(M, w, v, m, b), b.delete(w)), r(t, n, M) } } }, function(t, e, n) { var r = n(20),
            i = n(48);
        t.exports = function(t) { return r(t, i(t)) } }, function(t, e, n) { var r = n(259);
        t.exports = function(t, e, n) { var i = t.length; return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n) } }, function(t, e) { t.exports = function(t, e, n) { var r = -1,
                i = t.length;
            e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0; for (var o = Array(i); ++r < i;) o[r] = t[r + e]; return o } }, function(t, e) { t.exports = function(t) { return t.split("") } }, function(t, e) { var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            u = "(?:" + r + "|" + i + ")" + "?",
            c = "[\\ufe0e\\ufe0f]?" + u + ("(?:\\u200d(?:" + [o, a, s].join("|") + ")[\\ufe0e\\ufe0f]?" + u + ")*"),
            l = "(?:" + [o + r + "?", r, a, s, n].join("|") + ")",
            h = RegExp(i + "(?=" + i + ")|" + l + c, "g");
        t.exports = function(t) { return t.match(h) || [] } }, function(t, e, n) { var r = n(76)(n(263));
        t.exports = r }, function(t, e, n) { var r = n(264);
        t.exports = function(t, e) { return t && t.length && e && e.length ? r(t, e) : t } }, function(t, e, n) { var r = n(39),
            i = n(77),
            o = n(268),
            a = n(68),
            s = n(49),
            u = Array.prototype.splice;
        t.exports = function(t, e, n, c) { var l = c ? o : i,
                h = -1,
                f = e.length,
                p = t; for (t === e && (e = s(e)), n && (p = r(t, a(n))); ++h < f;)
                for (var g = 0, d = e[h], y = n ? n(d) : d;
                    (g = l(p, y, g, c)) > -1;) p !== t && u.call(p, g, 1), u.call(t, g, 1); return t } }, function(t, e) { t.exports = function(t, e, n, r) { for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (e(t[o], o, t)) return o; return -1 } }, function(t, e) { t.exports = function(t) { return t != t } }, function(t, e) { t.exports = function(t, e, n) { for (var r = n - 1, i = t.length; ++r < i;)
                if (t[r] === e) return r; return -1 } }, function(t, e) { t.exports = function(t, e, n, r) { for (var i = n - 1, o = t.length; ++i < o;)
                if (r(t[i], e)) return i; return -1 } }, function(t, e, n) { var r = n(121),
            i = n(18);
        t.exports = function(t, e) { return t && r(t, e, i) } }, function(t, e, n) { var r = n(12);
        t.exports = function(t, e) { return function(n, i) { if (null == n) return n; if (!r(n)) return t(n, i); for (var o = n.length, a = e ? o : -1, s = Object(n);
                    (e ? a-- : ++a < o) && !1 !== i(s[a], a, s);); return n } } }, function(t, e, n) { var r = n(51);
        t.exports = function(t) { return "function" == typeof t ? t : r } }, function(t, e, n) { var r = n(40),
            i = n(130),
            o = n(276),
            a = n(277),
            s = n(37),
            u = n(4),
            c = n(28),
            l = n(38),
            h = 1,
            f = "[object Arguments]",
            p = "[object Array]",
            g = "[object Object]",
            d = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, y, v, x) { var m = u(t),
                b = u(e),
                _ = m ? p : s(t),
                w = b ? p : s(e),
                S = (_ = _ == f ? g : _) == g,
                M = (w = w == f ? g : w) == g,
                C = _ == w; if (C && c(t)) { if (!c(e)) return !1;
                m = !0, S = !1 } if (C && !S) return x || (x = new r), m || l(t) ? i(t, e, n, y, v, x) : o(t, e, _, n, y, v, x); if (!(n & h)) { var P = S && d.call(t, "__wrapped__"),
                    A = M && d.call(e, "__wrapped__"); if (P || A) { var k = P ? t.value() : t,
                        O = A ? e.value() : e; return x || (x = new r), v(k, O, n, y, x) } } return !!C && (x || (x = new r), a(t, e, n, y, v, x)) } }, function(t, e) { var n = "__lodash_hash_undefined__";
        t.exports = function(t) { return this.__data__.set(t, n), this } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                if (e(t[n], n, t)) return !0; return !1 } }, function(t, e, n) { var r = n(15),
            i = n(114),
            o = n(30),
            a = n(130),
            s = n(75),
            u = n(31),
            c = 1,
            l = 2,
            h = "[object Boolean]",
            f = "[object Date]",
            p = "[object Error]",
            g = "[object Map]",
            d = "[object Number]",
            y = "[object RegExp]",
            v = "[object Set]",
            x = "[object String]",
            m = "[object Symbol]",
            b = "[object ArrayBuffer]",
            _ = "[object DataView]",
            w = r ? r.prototype : void 0,
            S = w ? w.valueOf : void 0;
        t.exports = function(t, e, n, r, w, M, C) { switch (n) {
                case _:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case b:
                    return !(t.byteLength != e.byteLength || !M(new i(t), new i(e)));
                case h:
                case f:
                case d:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case y:
                case x:
                    return t == e + "";
                case g:
                    var P = s;
                case v:
                    var A = r & c; if (P || (P = u), t.size != e.size && !A) return !1; var k = C.get(t); if (k) return k == e;
                    r |= l, C.set(t, e); var O = a(P(t), P(e), r, w, M, C); return C.delete(t), O;
                case m:
                    if (S) return S.call(t) == S.call(e) } return !1 } }, function(t, e, n) { var r = n(112),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, a, s, u) { var c = n & i,
                l = r(t),
                h = l.length; if (h != r(e).length && !c) return !1; for (var f = h; f--;) { var p = l[f]; if (!(c ? p in e : o.call(e, p))) return !1 } var g = u.get(t); if (g && u.get(e)) return g == e; var d = !0;
            u.set(t, e), u.set(e, t); for (var y = c; ++f < h;) { var v = t[p = l[f]],
                    x = e[p]; if (a) var m = c ? a(x, v, p, e, t, u) : a(v, x, p, t, e, u); if (!(void 0 === m ? v === x || s(v, x, n, a, u) : m)) { d = !1; break } y || (y = "constructor" == p) } if (d && !y) { var b = t.constructor,
                    _ = e.constructor;
                b != _ && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (d = !1) } return u.delete(t), u.delete(e), d } }, function(t, e) { t.exports = function(t) { for (var e, n = []; !(e = t.next()).done;) n.push(e.value); return n } }, function(t, e, n) { var r = n(280),
            i = n(18);
        t.exports = function(t) { return null == t ? [] : r(t, i(t)) } }, function(t, e, n) { var r = n(39);
        t.exports = function(t, e) { return r(e, function(e) { return t[e] }) } }, function(t, e, n) { var r = n(3),
            i = ["strokeStyle", "fillStyle", "globalAlpha"],
            o = ["circle", "ellipse", "fan", "polygon", "rect", "path"],
            a = { r: "R", opacity: "Opacity", lineWidth: "LineWidth", clip: "Clip", stroke: "Stroke", fill: "Fill", strokeOpacity: "Stroke", fillOpacity: "Fill", x: "X", y: "Y", rx: "Rx", ry: "Ry", re: "Re", rs: "Rs", width: "Width", height: "Height", img: "Img", x1: "X1", x2: "X2", y1: "Y1", y2: "Y2", points: "Points", p1: "P1", p2: "P2", p3: "P3", p4: "P4", text: "Text", radius: "Radius", textAlign: "TextAlign", textBaseline: "TextBaseline", font: "Font", fontSize: "FontSize", fontStyle: "FontStyle", fontVariant: "FontVariant", fontWeight: "FontWeight", fontFamily: "FontFamily", clockwise: "Clockwise", startAngle: "StartAngle", endAngle: "EndAngle", path: "Path" },
            s = { stroke: "strokeStyle", fill: "fillStyle", opacity: "globalAlpha" };
        t.exports = { canFill: !1, canStroke: !1, initAttrs: function(t) { return this.__attrs = { opacity: 1, fillOpacity: 1, strokeOpacity: 1 }, this.attr(r.assign(this.getDefaultAttrs(), t)), this }, getDefaultAttrs: function() { return {} }, attr: function(t, e) { if (0 === arguments.length) return this.__attrs; if (r.isObject(t)) { for (var n in t)
                        if (-1 === i.indexOf(n)) { var o = t[n];
                            this._setAttr(n, o) }
                    return this.__afterSetAttrAll && this.__afterSetAttrAll(t), this.clearBBox(), this } if (2 === arguments.length) { if (!1 !== this._setAttr(t, e)) { var s = "__afterSetAttr" + a[t];
                        this[s] && this[s](e) } return this.clearBBox(), this } return this._getAttr(t) }, clearBBox: function() { this.setSilent("box", null) }, __afterSetAttrAll: function() {}, _getAttr: function(t) { return this.__attrs[t] }, _setAttr: function(t, e) { if ("clip" === t) this.__setAttrClip(e), this.__attrs.clip = e;
                else if ("transform" === t) this.__setAttrTrans(e);
                else { this.__attrs[t] = e; var n = s[t];
                    n && (this.__attrs[n] = e) } return this }, hasFill: function() { return this.canFill && this.__attrs.fillStyle }, hasStroke: function() { return this.canStroke && this.__attrs.strokeStyle }, __setAttrOpacity: function(t) { return this.__attrs.globalAlpha = t, t }, __setAttrClip: function(t) { var e = this; return t && o.indexOf(t.type) > -1 ? (null === t.get("canvas") && (t = r.clone(t)), t.set("parent", e.get("parent")), t.set("context", e.get("context")), t.inside = function(n, r) { var i = [n, r, 1]; return t.invert(i, e.get("canvas")), t.__isPointInFill(i[0], i[1]) }, t) : null }, __setAttrTrans: function(t) { return this.transform(t) } } }, function(t, e, n) {
        function r(t) { return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7] }

        function i(t) { return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7] }

        function o(t, e) { r(e) || (i(e) ? (t[0] *= e[0], t[4] *= e[4]) : s.multiply(t, t, e)) } var a = n(3),
            s = n(8).mat3,
            u = n(8).vec3;
        t.exports = { initTransform: function() { this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]) }, translate: function(t, e) { var n = this.attr("matrix"); return s.translate(n, n, [t, e]), this.clearTotalMatrix(), this.attr("matrix", n), this }, rotate: function(t) { var e = this.attr("matrix"); return s.rotate(e, e, t), this.clearTotalMatrix(), this.attr("matrix", e), this }, scale: function(t, e) { var n = this.attr("matrix"); return s.scale(n, n, [t, e]), this.clearTotalMatrix(), this.attr("matrix", n), this }, rotateAtStart: function(t) { var e = this.attr("x"),
                    n = this.attr("y");
                Math.abs(t) > 2 * Math.PI && (t = t / 180 * Math.PI), this.transform([
                    ["t", -e, -n],
                    ["r", t],
                    ["t", e, n]
                ]) }, move: function(t, e) { var n = this.get("x") || 0,
                    r = this.get("y") || 0;
                this.translate(t - n, e - r), this.set("x", t), this.set("y", e) }, transform: function(t) { var e = this,
                    n = e.attr("matrix"); return a.each(t, function(t) { switch (t[0]) {
                        case "t":
                            e.translate(t[1], t[2]); break;
                        case "s":
                            e.scale(t[1], t[2]); break;
                        case "r":
                            e.rotate(t[1]); break;
                        case "m":
                            e.attr("matrix", s.multiply([], n, t[1])), e.clearTotalMatrix() } }), e }, setTransform: function(t) { return this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]), this.transform(t) }, getMatrix: function() { return this.attr("matrix") }, setMatrix: function(t) { return this.attr("matrix", t), this.clearTotalMatrix(), this }, apply: function(t, e) { var n = void 0; return n = e ? this._getMatrixByRoot(e) : this.attr("matrix"), u.transformMat3(t, t, n), this }, _getMatrixByRoot: function(t) { t = t || this; for (var e = this, n = []; e !== t;) n.unshift(e), e = e.get("parent");
                n.unshift(e); var r = [1, 0, 0, 0, 1, 0, 0, 0, 1]; return a.each(n, function(t) { s.multiply(r, t.attr("matrix"), r) }), r }, getTotalMatrix: function() { var t = this.__cfg.totalMatrix; if (!t) { t = [1, 0, 0, 0, 1, 0, 0, 0, 1]; var e = this.__cfg.parent; if (e) { o(t, e.getTotalMatrix()) } o(t, this.attr("matrix")), this.__cfg.totalMatrix = t } return t }, clearTotalMatrix: function() {}, invert: function(t) { var e = this.getTotalMatrix(); if (i(e)) t[0] /= e[0], t[1] /= e[4];
                else { var n = s.invert([], e);
                    u.transformMat3(t, t, n) } return this }, resetTransform: function(t) { var e = this.attr("matrix");
                r(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7]) } } }, function(t, e, n) { "use strict";

        function r(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2],
                a = e[3],
                s = e[4],
                u = e[5],
                c = e[6],
                l = e[7],
                h = e[8],
                f = n[0],
                p = n[1],
                g = n[2],
                d = n[3],
                y = n[4],
                v = n[5],
                x = n[6],
                m = n[7],
                b = n[8]; return t[0] = f * r + p * a + g * c, t[1] = f * i + p * s + g * l, t[2] = f * o + p * u + g * h, t[3] = d * r + y * a + v * c, t[4] = d * i + y * s + v * l, t[5] = d * o + y * u + v * h, t[6] = x * r + m * a + b * c, t[7] = x * i + m * s + b * l, t[8] = x * o + m * u + b * h, t }

        function i(t, e, n) { return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t } Object.defineProperty(e, "__esModule", { value: !0 }), e.create = function() { var t = new o.a(9); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t }, e.fromMat4 = function(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t }, e.clone = function(t) { var e = new o.a(9); return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e }, e.copy = function(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t }, e.fromValues = function(t, e, n, r, i, a, s, u, c) { var l = new o.a(9); return l[0] = t, l[1] = e, l[2] = n, l[3] = r, l[4] = i, l[5] = a, l[6] = s, l[7] = u, l[8] = c, l }, e.set = function(t, e, n, r, i, o, a, s, u, c) { return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = u, t[8] = c, t }, e.identity = function(t) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t }, e.transpose = function(t, e) { if (t === e) { var n = e[1],
                    r = e[2],
                    i = e[5];
                t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8]; return t }, e.invert = function(t, e) { var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8],
                h = l * a - s * c,
                f = -l * o + s * u,
                p = c * o - a * u,
                g = n * h + r * f + i * p; return g ? (g = 1 / g, t[0] = h * g, t[1] = (-l * r + i * c) * g, t[2] = (s * r - i * a) * g, t[3] = f * g, t[4] = (l * n - i * u) * g, t[5] = (-s * n + i * o) * g, t[6] = p * g, t[7] = (-c * n + r * u) * g, t[8] = (a * n - r * o) * g, t) : null }, e.adjoint = function(t, e) { var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8]; return t[0] = a * l - s * c, t[1] = i * c - r * l, t[2] = r * s - i * a, t[3] = s * u - o * l, t[4] = n * l - i * u, t[5] = i * o - n * s, t[6] = o * c - a * u, t[7] = r * u - n * c, t[8] = n * a - r * o, t }, e.determinant = function(t) { var e = t[0],
                n = t[1],
                r = t[2],
                i = t[3],
                o = t[4],
                a = t[5],
                s = t[6],
                u = t[7],
                c = t[8]; return e * (c * o - a * u) + n * (-c * i + a * s) + r * (u * i - o * s) }, e.multiply = r, e.translate = function(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2],
                a = e[3],
                s = e[4],
                u = e[5],
                c = e[6],
                l = e[7],
                h = e[8],
                f = n[0],
                p = n[1]; return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = u, t[6] = f * r + p * a + c, t[7] = f * i + p * s + l, t[8] = f * o + p * u + h, t }, e.rotate = function(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2],
                a = e[3],
                s = e[4],
                u = e[5],
                c = e[6],
                l = e[7],
                h = e[8],
                f = Math.sin(n),
                p = Math.cos(n); return t[0] = p * r + f * a, t[1] = p * i + f * s, t[2] = p * o + f * u, t[3] = p * a - f * r, t[4] = p * s - f * i, t[5] = p * u - f * o, t[6] = c, t[7] = l, t[8] = h, t }, e.scale = function(t, e, n) { var r = n[0],
                i = n[1]; return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t }, e.fromTranslation = function(t, e) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t }, e.fromRotation = function(t, e) { var n = Math.sin(e),
                r = Math.cos(e); return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t }, e.fromScaling = function(t, e) { return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t }, e.fromMat2d = function(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t }, e.fromQuat = function(t, e) { var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = n + n,
                s = r + r,
                u = i + i,
                c = n * a,
                l = r * a,
                h = r * s,
                f = i * a,
                p = i * s,
                g = i * u,
                d = o * a,
                y = o * s,
                v = o * u; return t[0] = 1 - h - g, t[3] = l - v, t[6] = f + y, t[1] = l + v, t[4] = 1 - c - g, t[7] = p - d, t[2] = f - y, t[5] = p + d, t[8] = 1 - c - h, t }, e.normalFromMat4 = function(t, e) { var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8],
                h = e[9],
                f = e[10],
                p = e[11],
                g = e[12],
                d = e[13],
                y = e[14],
                v = e[15],
                x = n * s - r * a,
                m = n * u - i * a,
                b = n * c - o * a,
                _ = r * u - i * s,
                w = r * c - o * s,
                S = i * c - o * u,
                M = l * d - h * g,
                C = l * y - f * g,
                P = l * v - p * g,
                A = h * y - f * d,
                k = h * v - p * d,
                O = f * v - p * y,
                T = x * O - m * k + b * A + _ * P - w * C + S * M; return T ? (T = 1 / T, t[0] = (s * O - u * k + c * A) * T, t[1] = (u * P - a * O - c * C) * T, t[2] = (a * k - s * P + c * M) * T, t[3] = (i * k - r * O - o * A) * T, t[4] = (n * O - i * P + o * C) * T, t[5] = (r * P - n * k - o * M) * T, t[6] = (d * S - y * w + v * _) * T, t[7] = (y * b - g * S - v * m) * T, t[8] = (g * w - d * b + v * x) * T, t) : null }, e.projection = function(t, e, n) { return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / n, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t }, e.str = function(t) { return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")" }, e.frob = function(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2)) }, e.add = function(t, e, n) { return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t }, e.subtract = i, e.multiplyScalar = function(t, e, n) { return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t }, e.multiplyScalarAndAdd = function(t, e, n, r) { return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t }, e.exactEquals = function(t, e) { return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] }, e.equals = function(t, e) { var n = t[0],
                r = t[1],
                i = t[2],
                a = t[3],
                s = t[4],
                u = t[5],
                c = t[6],
                l = t[7],
                h = t[8],
                f = e[0],
                p = e[1],
                g = e[2],
                d = e[3],
                y = e[4],
                v = e[5],
                x = e[6],
                m = e[7],
                b = e[8]; return Math.abs(n - f) <= o.b * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(r - p) <= o.b * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(i - g) <= o.b * Math.max(1, Math.abs(i), Math.abs(g)) && Math.abs(a - d) <= o.b * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(s - y) <= o.b * Math.max(1, Math.abs(s), Math.abs(y)) && Math.abs(u - v) <= o.b * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(c - x) <= o.b * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(l - m) <= o.b * Math.max(1, Math.abs(l), Math.abs(m)) && Math.abs(h - b) <= o.b * Math.max(1, Math.abs(h), Math.abs(b)) }, n.d(e, "mul", function() { return a }), n.d(e, "sub", function() { return s }); var o = n(78),
            a = r,
            s = i }, function(t, e, n) { "use strict";

        function r() { var t = new g.a(3); return t[0] = 0, t[1] = 0, t[2] = 0, t }

        function i(t) { var e = t[0],
                n = t[1],
                r = t[2]; return Math.sqrt(e * e + n * n + r * r) }

        function o(t, e, n) { var r = new g.a(3); return r[0] = t, r[1] = e, r[2] = n, r }

        function a(t, e, n) { return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t }

        function s(t, e, n) { return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t }

        function u(t, e, n) { return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t }

        function c(t, e) { var n = e[0] - t[0],
                r = e[1] - t[1],
                i = e[2] - t[2]; return Math.sqrt(n * n + r * r + i * i) }

        function l(t, e) { var n = e[0] - t[0],
                r = e[1] - t[1],
                i = e[2] - t[2]; return n * n + r * r + i * i }

        function h(t) { var e = t[0],
                n = t[1],
                r = t[2]; return e * e + n * n + r * r }

        function f(t, e) { var n = e[0],
                r = e[1],
                i = e[2],
                o = n * n + r * r + i * i; return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t }

        function p(t, e) { return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] } Object.defineProperty(e, "__esModule", { value: !0 }), e.create = r, e.clone = function(t) { var e = new g.a(3); return e[0] = t[0], e[1] = t[1], e[2] = t[2], e }, e.length = i, e.fromValues = o, e.copy = function(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t }, e.set = function(t, e, n, r) { return t[0] = e, t[1] = n, t[2] = r, t }, e.add = function(t, e, n) { return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t }, e.subtract = a, e.multiply = s, e.divide = u, e.ceil = function(t, e) { return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t }, e.floor = function(t, e) { return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t }, e.min = function(t, e, n) { return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t }, e.max = function(t, e, n) { return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t }, e.round = function(t, e) { return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t }, e.scale = function(t, e, n) { return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t }, e.scaleAndAdd = function(t, e, n, r) { return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t }, e.distance = c, e.squaredDistance = l, e.squaredLength = h, e.negate = function(t, e) { return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t }, e.inverse = function(t, e) { return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t }, e.normalize = f, e.dot = p, e.cross = function(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2],
                a = n[0],
                s = n[1],
                u = n[2]; return t[0] = i * u - o * s, t[1] = o * a - r * u, t[2] = r * s - i * a, t }, e.lerp = function(t, e, n, r) { var i = e[0],
                o = e[1],
                a = e[2]; return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t }, e.hermite = function(t, e, n, r, i, o) { var a = o * o,
                s = a * (2 * o - 3) + 1,
                u = a * (o - 2) + o,
                c = a * (o - 1),
                l = a * (3 - 2 * o); return t[0] = e[0] * s + n[0] * u + r[0] * c + i[0] * l, t[1] = e[1] * s + n[1] * u + r[1] * c + i[1] * l, t[2] = e[2] * s + n[2] * u + r[2] * c + i[2] * l, t }, e.bezier = function(t, e, n, r, i, o) { var a = 1 - o,
                s = a * a,
                u = o * o,
                c = s * a,
                l = 3 * o * s,
                h = 3 * u * a,
                f = u * o; return t[0] = e[0] * c + n[0] * l + r[0] * h + i[0] * f, t[1] = e[1] * c + n[1] * l + r[1] * h + i[1] * f, t[2] = e[2] * c + n[2] * l + r[2] * h + i[2] * f, t }, e.random = function(t, e) { e = e || 1; var n = 2 * g.c() * Math.PI,
                r = 2 * g.c() - 1,
                i = Math.sqrt(1 - r * r) * e; return t[0] = Math.cos(n) * i, t[1] = Math.sin(n) * i, t[2] = r * e, t }, e.transformMat4 = function(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2],
                a = n[3] * r + n[7] * i + n[11] * o + n[15]; return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t }, e.transformMat3 = function(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2]; return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t }, e.transformQuat = function(t, e, n) { var r = e[0],
                i = e[1],
                o = e[2],
                a = n[0],
                s = n[1],
                u = n[2],
                c = n[3],
                l = c * r + s * o - u * i,
                h = c * i + u * r - a * o,
                f = c * o + a * i - s * r,
                p = -a * r - s * i - u * o; return t[0] = l * c + p * -a + h * -u - f * -s, t[1] = h * c + p * -s + f * -a - l * -u, t[2] = f * c + p * -u + l * -s - h * -a, t }, e.rotateX = function(t, e, n, r) { var i = [],
                o = []; return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t }, e.rotateY = function(t, e, n, r) { var i = [],
                o = []; return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t }, e.rotateZ = function(t, e, n, r) { var i = [],
                o = []; return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t }, e.angle = function(t, e) { var n = o(t[0], t[1], t[2]),
                r = o(e[0], e[1], e[2]);
            f(n, n), f(r, r); var i = p(n, r); return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i) }, e.str = function(t) { return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")" }, e.exactEquals = function(t, e) { return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] }, e.equals = function(t, e) { var n = t[0],
                r = t[1],
                i = t[2],
                o = e[0],
                a = e[1],
                s = e[2]; return Math.abs(n - o) <= g.b * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - a) <= g.b * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i - s) <= g.b * Math.max(1, Math.abs(i), Math.abs(s)) }, n.d(e, "sub", function() { return d }), n.d(e, "mul", function() { return y }), n.d(e, "div", function() { return v }), n.d(e, "dist", function() { return x }), n.d(e, "sqrDist", function() { return m }), n.d(e, "len", function() { return b }), n.d(e, "sqrLen", function() { return _ }), n.d(e, "forEach", function() { return w }); var g = n(78),
            d = a,
            y = s,
            v = u,
            x = c,
            m = l,
            b = i,
            _ = h,
            w = function() { var t = r(); return function(e, n, r, i, o, a) { var s = void 0,
                        u = void 0; for (n || (n = 3), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; s < u; s += n) t[0] = e[s], t[1] = e[s + 1], t[2] = e[s + 2], o(t, t, a), e[s] = t[0], e[s + 1] = t[1], e[s + 2] = t[2]; return e } }() }, function(t, e, n) { "use strict";

        function r() { var t = new h.a(2); return t[0] = 0, t[1] = 0, t }

        function i(t, e, n) { return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t }

        function o(t, e, n) { return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t }

        function a(t, e, n) { return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t }

        function s(t, e) { var n = e[0] - t[0],
                r = e[1] - t[1]; return Math.sqrt(n * n + r * r) }

        function u(t, e) { var n = e[0] - t[0],
                r = e[1] - t[1]; return n * n + r * r }

        function c(t) { var e = t[0],
                n = t[1]; return Math.sqrt(e * e + n * n) }

        function l(t) { var e = t[0],
                n = t[1]; return e * e + n * n } Object.defineProperty(e, "__esModule", { value: !0 }), e.create = r, e.clone = function(t) { var e = new h.a(2); return e[0] = t[0], e[1] = t[1], e }, e.fromValues = function(t, e) { var n = new h.a(2); return n[0] = t, n[1] = e, n }, e.copy = function(t, e) { return t[0] = e[0], t[1] = e[1], t }, e.set = function(t, e, n) { return t[0] = e, t[1] = n, t }, e.add = function(t, e, n) { return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t }, e.subtract = i, e.multiply = o, e.divide = a, e.ceil = function(t, e) { return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t }, e.floor = function(t, e) { return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t }, e.min = function(t, e, n) { return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t }, e.max = function(t, e, n) { return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t }, e.round = function(t, e) { return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t }, e.scale = function(t, e, n) { return t[0] = e[0] * n, t[1] = e[1] * n, t }, e.scaleAndAdd = function(t, e, n, r) { return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t }, e.distance = s, e.squaredDistance = u, e.length = c, e.squaredLength = l, e.negate = function(t, e) { return t[0] = -e[0], t[1] = -e[1], t }, e.inverse = function(t, e) { return t[0] = 1 / e[0], t[1] = 1 / e[1], t }, e.normalize = function(t, e) { var n = e[0],
                r = e[1],
                i = n * n + r * r; return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t }, e.dot = function(t, e) { return t[0] * e[0] + t[1] * e[1] }, e.cross = function(t, e, n) { var r = e[0] * n[1] - e[1] * n[0]; return t[0] = t[1] = 0, t[2] = r, t }, e.lerp = function(t, e, n, r) { var i = e[0],
                o = e[1]; return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t }, e.random = function(t, e) { e = e || 1; var n = 2 * h.c() * Math.PI; return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t }, e.transformMat2 = function(t, e, n) { var r = e[0],
                i = e[1]; return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t }, e.transformMat2d = function(t, e, n) { var r = e[0],
                i = e[1]; return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t }, e.transformMat3 = function(t, e, n) { var r = e[0],
                i = e[1]; return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t }, e.transformMat4 = function(t, e, n) { var r = e[0],
                i = e[1]; return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t }, e.str = function(t) { return "vec2(" + t[0] + ", " + t[1] + ")" }, e.exactEquals = function(t, e) { return t[0] === e[0] && t[1] === e[1] }, e.equals = function(t, e) { var n = t[0],
                r = t[1],
                i = e[0],
                o = e[1]; return Math.abs(n - i) <= h.b * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - o) <= h.b * Math.max(1, Math.abs(r), Math.abs(o)) }, n.d(e, "len", function() { return f }), n.d(e, "sub", function() { return p }), n.d(e, "mul", function() { return g }), n.d(e, "div", function() { return d }), n.d(e, "dist", function() { return y }), n.d(e, "sqrDist", function() { return v }), n.d(e, "sqrLen", function() { return x }), n.d(e, "forEach", function() { return m }); var h = n(78),
            f = c,
            p = i,
            g = o,
            d = a,
            y = s,
            v = u,
            x = l,
            m = function() { var t = r(); return function(e, n, r, i, o, a) { var s = void 0,
                        u = void 0; for (n || (n = 2), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; s < u; s += n) t[0] = e[s], t[1] = e[s + 1], o(t, t, a), e[s] = t[0], e[s + 1] = t[1]; return e } }() }, function(t, e, n) { var r = n(8),
            i = n(79),
            o = n(3),
            a = n(287),
            s = n(298),
            u = n(301),
            c = u.interpolate,
            l = u.interpolateArray;
        t.exports = { animate: function(t, e, n, u) {
                function h(t) { var e = {}; if (!p.get("destroyed")) { var n = void 0; for (var r in y)
                            if (!o.isEqual(x[r], y[r]))
                                if ("path" === r) { var a = i.parsePathString(y[r]),
                                        s = i.parsePathString(x[r]);
                                    e[r] = []; for (var u = 0; u < a.length; u++) { for (var h = a[u], f = s[u], d = [], b = 0; b < h.length; b++) o.isNumber(h[b]) && f ? (n = c(f[b], h[b]), d.push(n(t))) : d.push(h[b]);
                                        e[r].push(d) } } else n = c(x[r], y[r]), e[r] = n(t); if (v) { var _ = l(m, v)(t);
                            p.setMatrix(_) } p.attr(e), g.draw() } } var f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    p = this,
                    g = p.get("canvas"),
                    d = function(t) { var e = { M: null, attrs: {} }; for (var n in t) "transform" === n ? e.M = r.transform(p.getMatrix(), t[n]) : "matrix" === n ? e.M = t[n] : e.attrs[n] = t[n]; return e }(t),
                    y = d.attrs,
                    v = d.M,
                    x = function(t) { var e = {}; for (var n in t) e[n] = p.attr(n); return e }(y),
                    m = o.clone(p.getMatrix());
                n = n || "easeLinear", p.setSilent("animating", !0); var b = s.timer(function(t) { var r = t / e;
                    r < 1 ? h(r = a[n](r)) : (h(1), u && u(), p.setSilent("animating", !1), b.stop()) }, f) } } }, function(t, e, n) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(288);
        n.d(e, "easeLinear", function() { return r.a }); var i = n(289);
        n.d(e, "easeQuad", function() { return i.b }), n.d(e, "easeQuadIn", function() { return i.a }), n.d(e, "easeQuadOut", function() { return i.c }), n.d(e, "easeQuadInOut", function() { return i.b }); var o = n(290);
        n.d(e, "easeCubic", function() { return o.b }), n.d(e, "easeCubicIn", function() { return o.a }), n.d(e, "easeCubicOut", function() { return o.c }), n.d(e, "easeCubicInOut", function() { return o.b }); var a = n(291);
        n.d(e, "easePoly", function() { return a.b }), n.d(e, "easePolyIn", function() { return a.a }), n.d(e, "easePolyOut", function() { return a.c }), n.d(e, "easePolyInOut", function() { return a.b }); var s = n(292);
        n.d(e, "easeSin", function() { return s.b }), n.d(e, "easeSinIn", function() { return s.a }), n.d(e, "easeSinOut", function() { return s.c }), n.d(e, "easeSinInOut", function() { return s.b }); var u = n(293);
        n.d(e, "easeExp", function() { return u.b }), n.d(e, "easeExpIn", function() { return u.a }), n.d(e, "easeExpOut", function() { return u.c }), n.d(e, "easeExpInOut", function() { return u.b }); var c = n(294);
        n.d(e, "easeCircle", function() { return c.b }), n.d(e, "easeCircleIn", function() { return c.a }), n.d(e, "easeCircleOut", function() { return c.c }), n.d(e, "easeCircleInOut", function() { return c.b }); var l = n(295);
        n.d(e, "easeBounce", function() { return l.c }), n.d(e, "easeBounceIn", function() { return l.a }), n.d(e, "easeBounceOut", function() { return l.c }), n.d(e, "easeBounceInOut", function() { return l.b }); var h = n(296);
        n.d(e, "easeBack", function() { return h.b }), n.d(e, "easeBackIn", function() { return h.a }), n.d(e, "easeBackOut", function() { return h.c }), n.d(e, "easeBackInOut", function() { return h.b }); var f = n(297);
        n.d(e, "easeElastic", function() { return f.c }), n.d(e, "easeElasticIn", function() { return f.a }), n.d(e, "easeElasticOut", function() { return f.c }), n.d(e, "easeElasticInOut", function() { return f.b }) }, function(t, e, n) { "use strict";
        e.a = function(t) { return +t } }, function(t, e, n) { "use strict";
        e.a = function(t) { return t * t }, e.c = function(t) { return t * (2 - t) }, e.b = function(t) { return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2 } }, function(t, e, n) { "use strict";
        e.a = function(t) { return t * t * t }, e.c = function(t) { return --t * t * t + 1 }, e.b = function(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 } }, function(t, e, n) { "use strict";
        n.d(e, "a", function() { return r }), n.d(e, "c", function() { return i }), n.d(e, "b", function() { return o }); var r = function t(e) {
                function n(t) { return Math.pow(t, e) } return e = +e, n.exponent = t, n }(3),
            i = function t(e) {
                function n(t) { return 1 - Math.pow(1 - t, e) } return e = +e, n.exponent = t, n }(3),
            o = function t(e) {
                function n(t) { return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2 } return e = +e, n.exponent = t, n }(3) }, function(t, e, n) { "use strict";
        e.a = function(t) { return 1 - Math.cos(t * i) }, e.c = function(t) { return Math.sin(t * i) }, e.b = function(t) { return (1 - Math.cos(r * t)) / 2 }; var r = Math.PI,
            i = r / 2 }, function(t, e, n) { "use strict";
        e.a = function(t) { return Math.pow(2, 10 * t - 10) }, e.c = function(t) { return 1 - Math.pow(2, -10 * t) }, e.b = function(t) { return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2 } }, function(t, e, n) { "use strict";
        e.a = function(t) { return 1 - Math.sqrt(1 - t * t) }, e.c = function(t) { return Math.sqrt(1 - --t * t) }, e.b = function(t) { return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2 } }, function(t, e, n) { "use strict";

        function r(t) { return (t = +t) < i ? p * t * t : t < a ? p * (t -= o) * t + s : t < c ? p * (t -= u) * t + l : p * (t -= h) * t + f } e.a = function(t) { return 1 - r(1 - t) }, e.c = r, e.b = function(t) { return ((t *= 2) <= 1 ? 1 - r(1 - t) : r(t - 1) + 1) / 2 }; var i = 4 / 11,
            o = 6 / 11,
            a = 8 / 11,
            s = .75,
            u = 9 / 11,
            c = 10 / 11,
            l = .9375,
            h = 21 / 22,
            f = 63 / 64,
            p = 1 / i / i }, function(t, e, n) { "use strict";
        n.d(e, "a", function() { return r }), n.d(e, "c", function() { return i }), n.d(e, "b", function() { return o }); var r = function t(e) {
                function n(t) { return t * t * ((e + 1) * t - e) } return e = +e, n.overshoot = t, n }(1.70158),
            i = function t(e) {
                function n(t) { return --t * t * ((e + 1) * t + e) + 1 } return e = +e, n.overshoot = t, n }(1.70158),
            o = function t(e) {
                function n(t) { return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2 } return e = +e, n.overshoot = t, n }(1.70158) }, function(t, e, n) { "use strict";
        n.d(e, "a", function() { return i }), n.d(e, "c", function() { return o }), n.d(e, "b", function() { return a }); var r = 2 * Math.PI,
            i = function t(e, n) {
                function i(t) { return e * Math.pow(2, 10 * --t) * Math.sin((o - t) / n) } var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r); return i.amplitude = function(e) { return t(e, n * r) }, i.period = function(n) { return t(e, n) }, i }(1, .3),
            o = function t(e, n) {
                function i(t) { return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + o) / n) } var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r); return i.amplitude = function(e) { return t(e, n * r) }, i.period = function(n) { return t(e, n) }, i }(1, .3),
            a = function t(e, n) {
                function i(t) { return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((o - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((o + t) / n)) / 2 } var o = Math.asin(1 / (e = Math.max(1, e))) * (n /= r); return i.amplitude = function(e) { return t(e, n * r) }, i.period = function(n) { return t(e, n) }, i }(1, .3) }, function(t, e, n) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(80);
        n.d(e, "now", function() { return r.b }), n.d(e, "timer", function() { return r.c }), n.d(e, "timerFlush", function() { return r.d }); var i = n(299);
        n.d(e, "timeout", function() { return i.a }); var o = n(300);
        n.d(e, "interval", function() { return o.a }) }, function(t, e, n) { "use strict"; var r = n(80);
        e.a = function(t, e, n) { var i = new r.a; return e = null == e ? 0 : +e, i.restart(function(n) { i.stop(), t(n + e) }, e, n), i } }, function(t, e, n) { "use strict"; var r = n(80);
        e.a = function(t, e, n) { var i = new r.a,
                o = e; return null == e ? (i.restart(t, e, n), i) : (e = +e, n = null == n ? Object(r.b)() : +n, i.restart(function r(a) { a += o, i.restart(r, o += e, n), t(a) }, e, n), i) } }, function(t, e, n) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(81);
        n.d(e, "interpolate", function() { return r.a }); var i = n(142);
        n.d(e, "interpolateArray", function() { return i.a }); var o = n(84);
        n.d(e, "interpolateBasis", function() { return o.b }); var a = n(140);
        n.d(e, "interpolateBasisClosed", function() { return a.a }); var s = n(143);
        n.d(e, "interpolateDate", function() { return s.a }); var u = n(54);
        n.d(e, "interpolateNumber", function() { return u.a }); var c = n(144);
        n.d(e, "interpolateObject", function() { return c.a }); var l = n(304);
        n.d(e, "interpolateRound", function() { return l.a }); var h = n(145);
        n.d(e, "interpolateString", function() { return h.a }); var f = n(305);
        n.d(e, "interpolateTransformCss", function() { return f.a }), n.d(e, "interpolateTransformSvg", function() { return f.b }); var p = n(308);
        n.d(e, "interpolateZoom", function() { return p.a }); var g = n(139);
        n.d(e, "interpolateRgb", function() { return g.a }), n.d(e, "interpolateRgbBasis", function() { return g.b }), n.d(e, "interpolateRgbBasisClosed", function() { return g.c }); var d = n(309);
        n.d(e, "interpolateHsl", function() { return d.a }), n.d(e, "interpolateHslLong", function() { return d.b }); var y = n(310);
        n.d(e, "interpolateLab", function() { return y.a }); var v = n(311);
        n.d(e, "interpolateHcl", function() { return v.a }), n.d(e, "interpolateHclLong", function() { return v.b }); var x = n(312);
        n.d(e, "interpolateCubehelix", function() { return x.b }), n.d(e, "interpolateCubehelixLong", function() { return x.a }); var m = n(313);
        n.d(e, "quantize", function() { return m.a }) }, function(t, e, n) { "use strict";

        function r(t) { if (t instanceof o) return new o(t.l, t.a, t.b, t.opacity); if (t instanceof h) { var e = t.h * g.a; return new o(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity) } t instanceof p.b || (t = Object(p.h)(t)); var n = c(t.r),
                r = c(t.g),
                i = c(t.b),
                s = a((.4124564 * n + .3575761 * r + .1804375 * i) / d),
                u = a((.2126729 * n + .7151522 * r + .072175 * i) / y); return new o(116 * u - 16, 500 * (s - u), 200 * (u - a((.0193339 * n + .119192 * r + .9503041 * i) / v)), t.opacity) }

        function i(t, e, n, i) { return 1 === arguments.length ? r(t) : new o(t, e, n, null == i ? 1 : i) }

        function o(t, e, n, r) { this.l = +t, this.a = +e, this.b = +n, this.opacity = +r }

        function a(t) { return t > _ ? Math.pow(t, 1 / 3) : t / b + x }

        function s(t) { return t > m ? t * t * t : b * (t - x) }

        function u(t) { return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055) }

        function c(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }

        function l(t, e, n, i) { return 1 === arguments.length ? function(t) { if (t instanceof h) return new h(t.h, t.c, t.l, t.opacity);
                t instanceof o || (t = r(t)); var e = Math.atan2(t.b, t.a) * g.b; return new h(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity) }(t) : new h(t, e, n, null == i ? 1 : i) }

        function h(t, e, n, r) { this.h = +t, this.c = +e, this.l = +n, this.opacity = +r } e.a = i, e.b = l; var f = n(83),
            p = n(82),
            g = n(138),
            d = .95047,
            y = 1,
            v = 1.08883,
            x = 4 / 29,
            m = 6 / 29,
            b = 3 * m * m,
            _ = m * m * m;
        Object(f.a)(o, i, Object(f.b)(p.a, { brighter: function(t) { return new o(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) }, darker: function(t) { return new o(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) }, rgb: function() { var t = (this.l + 16) / 116,
                    e = isNaN(this.a) ? t : t + this.a / 500,
                    n = isNaN(this.b) ? t : t - this.b / 200; return t = y * s(t), e = d * s(e), n = v * s(n), new p.b(u(3.2404542 * e - 1.5371385 * t - .4985314 * n), u(-.969266 * e + 1.8760108 * t + .041556 * n), u(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity) } })), Object(f.a)(h, l, Object(f.b)(p.a, { brighter: function(t) { return new h(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity) }, darker: function(t) { return new h(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity) }, rgb: function() { return r(this).rgb() } })) }, function(t, e, n) { "use strict";

        function r(t, e, n, r) { return 1 === arguments.length ? function(t) { if (t instanceof i) return new i(t.h, t.s, t.l, t.opacity);
                t instanceof a.b || (t = Object(a.h)(t)); var e = t.r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    o = (d * r + p * e - g * n) / (d + p - g),
                    u = r - o,
                    c = (f * (n - o) - l * u) / h,
                    y = Math.sqrt(c * c + u * u) / (f * o * (1 - o)),
                    v = y ? Math.atan2(c, u) * s.b - 120 : NaN; return new i(v < 0 ? v + 360 : v, y, o, t.opacity) }(t) : new i(t, e, n, null == r ? 1 : r) }

        function i(t, e, n, r) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +r } e.a = r; var o = n(83),
            a = n(82),
            s = n(138),
            u = -.14861,
            c = 1.78277,
            l = -.29227,
            h = -.90649,
            f = 1.97294,
            p = f * h,
            g = f * c,
            d = c * l - h * u;
        Object(o.a)(i, r, Object(o.b)(a.a, { brighter: function(t) { return t = null == t ? a.c : Math.pow(a.c, t), new i(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? a.d : Math.pow(a.d, t), new i(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = isNaN(this.h) ? 0 : (this.h + 120) * s.a,
                    e = +this.l,
                    n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                    r = Math.cos(t),
                    i = Math.sin(t); return new a.b(255 * (e + n * (u * r + c * i)), 255 * (e + n * (l * r + h * i)), 255 * (e + n * (f * r)), this.opacity) } })) }, function(t, e, n) { "use strict";
        e.a = function(t, e) { return t = +t, e -= t,
                function(n) { return Math.round(t + e * n) } } }, function(t, e, n) { "use strict";

        function r(t, e, n, r) {
            function o(t) { return t.length ? t.pop() + " " : "" } return function(a, s) { var u = [],
                    c = []; return a = t(a), s = t(s),
                    function(t, r, o, a, s, u) { if (t !== o || r !== a) { var c = s.push("translate(", null, e, null, n);
                            u.push({ i: c - 4, x: Object(i.a)(t, o) }, { i: c - 2, x: Object(i.a)(r, a) }) } else(o || a) && s.push("translate(" + o + e + a + n) }(a.translateX, a.translateY, s.translateX, s.translateY, u, c),
                    function(t, e, n, a) { t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({ i: n.push(o(n) + "rotate(", null, r) - 2, x: Object(i.a)(t, e) })) : e && n.push(o(n) + "rotate(" + e + r) }(a.rotate, s.rotate, u, c),
                    function(t, e, n, a) { t !== e ? a.push({ i: n.push(o(n) + "skewX(", null, r) - 2, x: Object(i.a)(t, e) }) : e && n.push(o(n) + "skewX(" + e + r) }(a.skewX, s.skewX, u, c),
                    function(t, e, n, r, a, s) { if (t !== n || e !== r) { var u = a.push(o(a) + "scale(", null, ",", null, ")");
                            s.push({ i: u - 4, x: Object(i.a)(t, n) }, { i: u - 2, x: Object(i.a)(e, r) }) } else 1 === n && 1 === r || a.push(o(a) + "scale(" + n + "," + r + ")") }(a.scaleX, a.scaleY, s.scaleX, s.scaleY, u, c), a = s = null,
                    function(t) { for (var e, n = -1, r = c.length; ++n < r;) u[(e = c[n]).i] = e.x(t); return u.join("") } } } n.d(e, "a", function() { return a }), n.d(e, "b", function() { return s }); var i = n(54),
            o = n(306),
            a = r(o.a, "px, ", "px)", "deg)"),
            s = r(o.b, ", ", ")", ")") }, function(t, e, n) { "use strict";
        e.a = function(t) { return "none" === t ? s.b : (r || (r = document.createElement("DIV"), i = document.documentElement, o = document.defaultView), r.style.transform = t, t = o.getComputedStyle(i.appendChild(r), null).getPropertyValue("transform"), i.removeChild(r), t = t.slice(7, -1).split(","), Object(s.a)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5])) }, e.b = function(t) { return null == t ? s.b : (a || (a = document.createElementNS("http://www.w3.org/2000/svg", "g")), a.setAttribute("transform", t), (t = a.transform.baseVal.consolidate()) ? (t = t.matrix, Object(s.a)(t.a, t.b, t.c, t.d, t.e, t.f)) : s.b) }; var r, i, o, a, s = n(307) }, function(t, e, n) { "use strict";
        n.d(e, "b", function() { return i }); var r = 180 / Math.PI,
            i = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
        e.a = function(t, e, n, i, o, a) { var s, u, c; return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (c = t * n + e * i) && (n -= t * c, i -= e * c), (u = Math.sqrt(n * n + i * i)) && (n /= u, i /= u, c /= u), t * i < e * n && (t = -t, e = -e, c = -c, s = -s), { translateX: o, translateY: a, rotate: Math.atan2(e, t) * r, skewX: Math.atan(c) * r, scaleX: s, scaleY: u } } }, function(t, e, n) { "use strict";

        function r(t) { return ((t = Math.exp(t)) + 1 / t) / 2 } var i = Math.SQRT2;
        e.a = function(t, e) { var n, o, a = t[0],
                s = t[1],
                u = t[2],
                c = e[0],
                l = e[1],
                h = e[2],
                f = c - a,
                p = l - s,
                g = f * f + p * p; if (g < 1e-12) o = Math.log(h / u) / i, n = function(t) { return [a + t * f, s + t * p, u * Math.exp(i * t * o)] };
            else { var d = Math.sqrt(g),
                    y = (h * h - u * u + 4 * g) / (2 * u * 2 * d),
                    v = (h * h - u * u - 4 * g) / (2 * h * 2 * d),
                    x = Math.log(Math.sqrt(y * y + 1) - y),
                    m = Math.log(Math.sqrt(v * v + 1) - v);
                o = (m - x) / i, n = function(t) { var e = t * o,
                        n = r(x),
                        c = u / (2 * d) * (n * function(t) { return ((t = Math.exp(2 * t)) - 1) / (t + 1) }(i * e + x) - function(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }(x)); return [a + c * f, s + c * p, u * n / r(i * e + x)] } } return n.duration = 1e3 * o, n } }, function(t, e, n) { "use strict";

        function r(t) { return function(e, n) { var r = t((e = Object(i.d)(e)).h, (n = Object(i.d)(n)).h),
                    a = Object(o.a)(e.s, n.s),
                    s = Object(o.a)(e.l, n.l),
                    u = Object(o.a)(e.opacity, n.opacity); return function(t) { return e.h = r(t), e.s = a(t), e.l = s(t), e.opacity = u(t), e + "" } } } n.d(e, "b", function() { return a }); var i = n(21),
            o = n(32);
        e.a = r(o.c); var a = r(o.a) }, function(t, e, n) { "use strict";
        e.a = function(t, e) { var n = Object(i.a)((t = Object(r.e)(t)).l, (e = Object(r.e)(e)).l),
                o = Object(i.a)(t.a, e.a),
                a = Object(i.a)(t.b, e.b),
                s = Object(i.a)(t.opacity, e.opacity); return function(e) { return t.l = n(e), t.a = o(e), t.b = a(e), t.opacity = s(e), t + "" } }; var r = n(21),
            i = n(32) }, function(t, e, n) { "use strict";

        function r(t) { return function(e, n) { var r = t((e = Object(i.c)(e)).h, (n = Object(i.c)(n)).h),
                    a = Object(o.a)(e.c, n.c),
                    s = Object(o.a)(e.l, n.l),
                    u = Object(o.a)(e.opacity, n.opacity); return function(t) { return e.h = r(t), e.c = a(t), e.l = s(t), e.opacity = u(t), e + "" } } } n.d(e, "b", function() { return a }); var i = n(21),
            o = n(32);
        e.a = r(o.c); var a = r(o.a) }, function(t, e, n) { "use strict";

        function r(t) { return function e(n) {
                function r(e, r) { var a = t((e = Object(i.b)(e)).h, (r = Object(i.b)(r)).h),
                        s = Object(o.a)(e.s, r.s),
                        u = Object(o.a)(e.l, r.l),
                        c = Object(o.a)(e.opacity, r.opacity); return function(t) { return e.h = a(t), e.s = s(t), e.l = u(Math.pow(t, n)), e.opacity = c(t), e + "" } } return n = +n, r.gamma = e, r }(1) } n.d(e, "a", function() { return a }); var i = n(21),
            o = n(32);
        e.b = r(o.c); var a = r(o.a) }, function(t, e, n) { "use strict";
        e.a = function(t, e) { for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t(r / (e - 1)); return n } }, function(t, e, n) { var r = { Rect: n(148), Circle: n(149), Ellipse: n(150), Path: n(151), Text: n(152), Line: n(153), Image: n(154), Polygon: n(155), Polyline: n(156), Arc: n(157), Fan: n(158), Cubic: n(159), Quadratic: n(160), Marker: n(161) };
        t.exports = r }, function(t, e, n) {
        function r(t, e, n) { return { x: n.x + t, y: n.y + e } }

        function i(t, e) { return { x: e.x + (e.x - t.x), y: e.y + (e.y - t.y) } }

        function o(t) { return Math.sqrt(t[0] * t[0] + t[1] * t[1]) }

        function a(t, e) { return (t[0] * e[0] + t[1] * e[1]) / (o(t) * o(e)) }

        function s(t, e) { return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(a(t, e)) } var u = n(3),
            c = n(6),
            l = n(55),
            h = n(86),
            f = n(316),
            p = n(8).vec3,
            g = n(8).mat3,
            d = ["m", "l", "c", "a", "q", "h", "v", "t", "s", "z"],
            y = function(t, e, n) { this.preSegment = e, this.isLast = n, this.init(t, e) };
        u.augment(y, { init: function(t, e) { var n = t[0];
                e = e || { endPoint: { x: 0, y: 0 } }; var o = d.indexOf(n) >= 0,
                    c = o ? n.toUpperCase() : n,
                    l = t,
                    h = void 0,
                    f = void 0,
                    p = void 0,
                    g = void 0,
                    y = e.endPoint,
                    v = l[1],
                    x = l[2]; switch (c) { default: break;
                    case "M":
                            g = o ? r(v, x, y) : { x: v, y: x }, this.command = "M", this.params = [y, g], this.subStart = g, this.endPoint = g; break;
                    case "L":
                            g = o ? r(v, x, y) : { x: v, y: x }, this.command = "L", this.params = [y, g], this.subStart = e.subStart, this.endPoint = g, this.isLast && (this.endTangent = function() { return [g.x - y.x, g.y - y.y] }); break;
                    case "H":
                            g = o ? r(v, 0, y) : { x: v, y: y.y }, this.command = "L", this.params = [y, g], this.subStart = e.subStart, this.endPoint = g, this.endTangent = function() { return [g.x - y.x, g.y - y.y] }; break;
                    case "V":
                            g = o ? r(0, v, y) : { x: y.x, y: v }, this.command = "L", this.params = [y, g], this.subStart = e.subStart, this.endPoint = g, this.endTangent = function() { return [g.x - y.x, g.y - y.y] }; break;
                    case "Q":
                            o ? (h = r(v, x, y), f = r(l[3], l[4], y)) : (h = { x: v, y: x }, f = { x: l[3], y: l[4] }), this.command = "Q", this.params = [y, h, f], this.subStart = e.subStart, this.endPoint = f, this.endTangent = function() { return [f.x - h.x, f.y - h.y] }; break;
                    case "T":
                            f = o ? r(v, x, y) : { x: v, y: x }, "Q" === e.command ? (h = i(e.params[1], y), this.command = "Q", this.params = [y, h, f], this.subStart = e.subStart, this.endPoint = f, this.endTangent = function() { return [f.x - h.x, f.y - h.y] }) : (this.command = "TL", this.params = [y, f], this.subStart = e.subStart, this.endPoint = f, this.endTangent = function() { return [f.x - y.x, f.y - y.y] }); break;
                    case "C":
                            o ? (h = r(v, x, y), f = r(l[3], l[4], y), p = r(l[5], l[6], y)) : (h = { x: v, y: x }, f = { x: l[3], y: l[4] }, p = { x: l[5], y: l[6] }), this.command = "C", this.params = [y, h, f, p], this.subStart = e.subStart, this.endPoint = p, this.endTangent = function() { return [p.x - f.x, p.y - f.y] }; break;
                    case "S":
                            o ? (f = r(v, x, y), p = r(l[3], l[4], y)) : (f = { x: v, y: x }, p = { x: l[3], y: l[4] }), "C" === e.command ? (h = i(e.params[2], y), this.command = "C", this.params = [y, h, f, p], this.subStart = e.subStart, this.endPoint = p, this.endTangent = function() { return [p.x - f.x, p.y - f.y] }) : (this.command = "SQ", this.params = [y, f, p], this.subStart = e.subStart, this.endPoint = p, this.endTangent = function() { return [p.x - f.x, p.y - f.y] }); break;
                    case "A":
                            var m = v,
                            b = x,
                            _ = l[3],
                            w = l[4],
                            S = l[5];g = o ? r(l[6], l[7], y) : { x: l[6], y: l[7] }, this.command = "A", this.params = function(t, e, n, r, i, o, c) { var l = u.mod(u.toRadian(c), 2 * Math.PI),
                                h = t.x,
                                f = t.y,
                                p = e.x,
                                g = e.y,
                                d = Math.cos(l) * (h - p) / 2 + Math.sin(l) * (f - g) / 2,
                                y = -1 * Math.sin(l) * (h - p) / 2 + Math.cos(l) * (f - g) / 2,
                                v = d * d / (i * i) + y * y / (o * o);
                            v > 1 && (i *= Math.sqrt(v), o *= Math.sqrt(v)); var x = Math.sqrt((i * i * (o * o) - i * i * (y * y) - o * o * (d * d)) / (i * i * (y * y) + o * o * (d * d)));
                            n === r && (x *= -1), isNaN(x) && (x = 0); var m = x * i * y / o,
                                b = x * -o * d / i,
                                _ = (h + p) / 2 + Math.cos(l) * m - Math.sin(l) * b,
                                w = (f + g) / 2 + Math.sin(l) * m + Math.cos(l) * b,
                                S = s([1, 0], [(d - m) / i, (y - b) / o]),
                                M = [(d - m) / i, (y - b) / o],
                                C = [(-1 * d - m) / i, (-1 * y - b) / o],
                                P = s(M, C); return a(M, C) <= -1 && (P = Math.PI), a(M, C) >= 1 && (P = 0), 0 === r && P > 0 && (P -= 2 * Math.PI), 1 === r && P < 0 && (P += 2 * Math.PI), [t, _, w, i, o, S, P, l, r] }(y, g, w, S, m, b, _), this.subStart = e.subStart, this.endPoint = g; break;
                    case "Z":
                            this.command = "Z", this.params = [y, e.subStart], this.subStart = e.subStart, this.endPoint = e.subStart } }, isInside: function(t, e, n) { var r = this.command,
                    i = this.params,
                    o = this.box; if (o && !c.box(o.minX, o.maxX, o.minY, o.maxY, t, e)) return !1; switch (r) { default: break;
                    case "M":
                            return !1;
                    case "TL":
                            case "L":
                            case "Z":
                            return c.line(i[0].x, i[0].y, i[1].x, i[1].y, n, t, e);
                    case "SQ":
                            case "Q":
                            return c.quadraticline(i[0].x, i[0].y, i[1].x, i[1].y, i[2].x, i[2].y, n, t, e);
                    case "C":
                            return c.cubicline(i[0].x, i[0].y, i[1].x, i[1].y, i[2].x, i[2].y, i[3].x, i[3].y, n, t, e);
                    case "A":
                            var a = i,
                            s = a[1],
                            u = a[2],
                            l = a[3],
                            h = a[4],
                            f = a[5],
                            d = a[6],
                            y = a[7],
                            v = a[8],
                            x = l > h ? l : h,
                            m = l > h ? 1 : l / h,
                            b = l > h ? h / l : 1;a = [t, e, 1]; var _ = [1, 0, 0, 0, 1, 0, 0, 0, 1]; return g.translate(_, _, [-s, -u]), g.rotate(_, _, -y), g.scale(_, _, [1 / m, 1 / b]), p.transformMat3(a, a, _), c.arcline(0, 0, x, f, f + d, 1 - v, n, a[0], a[1]) } return !1 }, draw: function(t) { var e = this.command,
                    n = this.params,
                    r = void 0,
                    i = void 0,
                    o = void 0; switch (e) { default: break;
                    case "M":
                            t.moveTo(n[1].x, n[1].y); break;
                    case "TL":
                            case "L":
                            t.lineTo(n[1].x, n[1].y); break;
                    case "SQ":
                            case "Q":
                            r = n[1], i = n[2], t.quadraticCurveTo(r.x, r.y, i.x, i.y); break;
                    case "C":
                            r = n[1], i = n[2], o = n[3], t.bezierCurveTo(r.x, r.y, i.x, i.y, o.x, o.y); break;
                    case "A":
                            var a = n,
                            s = a[1],
                            u = a[2],
                            c = a[3],
                            l = a[4],
                            h = a[5],
                            f = a[6],
                            p = a[7],
                            g = a[8],
                            d = c > l ? c : l,
                            y = c > l ? 1 : c / l,
                            v = c > l ? l / c : 1;t.translate(s, u), t.rotate(p), t.scale(y, v), t.arc(0, 0, d, h, h + f, 1 - g), t.scale(1 / y, 1 / v), t.rotate(-p), t.translate(-s, -u); break;
                    case "Z":
                            t.closePath() } }, getBBox: function(t) { var e = t / 2,
                    n = this.params,
                    r = void 0,
                    i = void 0,
                    o = void 0,
                    a = void 0; switch (this.command) { default:
                        case "M":
                        case "Z":
                        break;
                    case "TL":
                            case "L":
                            this.box = { minX: Math.min(n[0].x, n[1].x) - e, maxX: Math.max(n[0].x, n[1].x) + e, minY: Math.min(n[0].y, n[1].y) - e, maxY: Math.max(n[0].y, n[1].y) + e }; break;
                    case "SQ":
                            case "Q":
                            for (o = 0, a = (i = h.extrema(n[0].x, n[1].x, n[2].x)).length; o < a; o++) i[o] = h.at(n[0].x, n[1].x, n[2].x, i[o]); for (i.push(n[0].x, n[2].x), o = 0, a = (r = h.extrema(n[0].y, n[1].y, n[2].y)).length; o < a; o++) r[o] = h.at(n[0].y, n[1].y, n[2].y, r);r.push(n[0].y, n[2].y), this.box = { minX: Math.min.apply(Math, i) - e, maxX: Math.max.apply(Math, i) + e, minY: Math.min.apply(Math, r) - e, maxY: Math.max.apply(Math, r) + e }; break;
                    case "C":
                            for (o = 0, a = (i = l.extrema(n[0].x, n[1].x, n[2].x, n[3].x)).length; o < a; o++) i[o] = l.at(n[0].x, n[1].x, n[2].x, n[3].x, i[o]); for (o = 0, a = (r = l.extrema(n[0].y, n[1].y, n[2].y, n[3].y)).length; o < a; o++) r[o] = l.at(n[0].y, n[1].y, n[2].y, n[3].y, r[o]);i.push(n[0].x, n[3].x), r.push(n[0].y, n[3].y), this.box = { minX: Math.min.apply(Math, i) - e, maxX: Math.max.apply(Math, i) + e, minY: Math.min.apply(Math, r) - e, maxY: Math.max.apply(Math, r) + e }; break;
                    case "A":
                            var s = n,
                            u = s[1],
                            c = s[2],
                            p = s[3],
                            g = s[4],
                            d = s[5],
                            y = s[6],
                            v = s[7],
                            x = s[8],
                            m = d,
                            b = d + y,
                            _ = f.xExtrema(v, p, g),
                            w = 1 / 0,
                            S = -1 / 0,
                            M = [m, b]; for (o = 2 * -Math.PI; o <= 2 * Math.PI; o += Math.PI) { var C = _ + o;
                            1 === x ? m < C && C < b && M.push(C) : b < C && C < m && M.push(C) } for (o = 0, a = M.length; o < a; o++) { var P = f.xAt(v, p, g, u, M[o]);
                            P < w && (w = P), P > S && (S = P) } var A = f.yExtrema(v, p, g),
                            k = 1 / 0,
                            O = -1 / 0,
                            T = [m, b]; for (o = 2 * -Math.PI; o <= 2 * Math.PI; o += Math.PI) { var j = A + o;
                            1 === x ? m < j && j < b && T.push(j) : b < j && j < m && T.push(j) } for (o = 0, a = T.length; o < a; o++) { var E = f.yAt(v, p, g, c, T[o]);
                            E < k && (k = E), E > O && (O = E) } this.box = { minX: w - e, maxX: S + e, minY: k - e, maxY: O + e } } } }), t.exports = y }, function(t, e) { t.exports = { xAt: function(t, e, n, r, i) { return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r }, yAt: function(t, e, n, r, i) { return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r }, xExtrema: function(t, e, n) { return Math.atan(-n / e * Math.tan(t)) }, yExtrema: function(t, e, n) { return Math.atan(n / (e * Math.tan(t))) } } }, function(t, e, n) { t.exports = n(128) }, function(t, e, n) { var r = n(39),
            i = n(33),
            o = n(332),
            a = n(4);
        t.exports = function(t, e) { return (a(t) ? r : o)(t, i(e, 3)) } }, function(t, e, n) { var r = n(320),
            i = n(321),
            o = n(164);
        t.exports = function(t) { var e = i(t); return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) { return n === t || r(n, t, e) } } }, function(t, e, n) { var r = n(40),
            i = n(53),
            o = 1,
            a = 2;
        t.exports = function(t, e, n, s) { var u = n.length,
                c = u,
                l = !s; if (null == t) return !c; for (t = Object(t); u--;) { var h = n[u]; if (l && h[2] ? h[1] !== t[h[0]] : !(h[0] in t)) return !1 } for (; ++u < c;) { var f = (h = n[u])[0],
                    p = t[f],
                    g = h[1]; if (l && h[2]) { if (void 0 === p && !(f in t)) return !1 } else { var d = new r; if (s) var y = s(p, g, f, t, e, d); if (!(void 0 === y ? i(g, p, o | a, s, d) : y)) return !1 } } return !0 } }, function(t, e, n) { var r = n(163),
            i = n(18);
        t.exports = function(t) { for (var e = i(t), n = e.length; n--;) { var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)] } return e } }, function(t, e, n) { var r = n(53),
            i = n(323),
            o = n(165),
            a = n(89),
            s = n(163),
            u = n(164),
            c = n(34),
            l = 1,
            h = 2;
        t.exports = function(t, e) { return a(t) && s(e) ? u(c(t), e) : function(n) { var a = i(n, t); return void 0 === a && a === e ? o(n, t) : r(e, a, l | h) } } }, function(t, e, n) { var r = n(88);
        t.exports = function(t, e, n) { var i = null == t ? void 0 : r(t, e); return void 0 === i ? n : i } }, function(t, e, n) { var r = /^\./,
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = n(325)(function(t) { var e = []; return r.test(t) && e.push(""), t.replace(i, function(t, n, r, i) { e.push(r ? i.replace(o, "$1") : n || t) }), e });
        t.exports = a }, function(t, e, n) { var r = n(326),
            i = 500;
        t.exports = function(t) { var e = r(t, function(t) { return n.size === i && n.clear(), t }),
                n = e.cache; return e } }, function(t, e, n) {
        function r(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o); var n = function n() { var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache; if (o.has(i)) return o.get(i); var a = t.apply(this, r); return n.cache = o.set(i, a) || o, a }; return n.cache = new(r.Cache || i), n } var i = n(69),
            o = "Expected a function";
        r.Cache = i, t.exports = r }, function(t, e) { t.exports = function(t, e) { return null != t && e in Object(t) } }, function(t, e, n) { var r = n(56),
            i = n(27),
            o = n(4),
            a = n(47),
            s = n(66),
            u = n(34);
        t.exports = function(t, e, n) { for (var c = -1, l = (e = r(e, t)).length, h = !1; ++c < l;) { var f = u(e[c]); if (!(h = null != t && n(t, f))) break;
                t = t[f] } return h || ++c != l ? h : !!(l = null == t ? 0 : t.length) && s(l) && a(f, l) && (o(t) || i(t)) } }, function(t, e, n) { var r = n(330),
            i = n(331),
            o = n(89),
            a = n(34);
        t.exports = function(t) { return o(t) ? r(a(t)) : i(t) } }, function(t, e) { t.exports = function(t) { return function(e) { return null == e ? void 0 : e[t] } } }, function(t, e, n) { var r = n(88);
        t.exports = function(t) { return function(e) { return r(e, t) } } }, function(t, e, n) { var r = n(52),
            i = n(12);
        t.exports = function(t, e) { var n = -1,
                o = i(t) ? Array(t.length) : []; return r(t, function(t, r, i) { o[++n] = e(t, r, i) }), o } }, function(t, e, n) { var r = n(9).isFinite;
        t.exports = function(t) { return "number" == typeof t && r(t) } }, function(t, e, n) { var r = n(125)("toLowerCase");
        t.exports = r }, function(t, e, n) { var r = n(336)(function(t, e, n) { return t + (n ? " " : "") + e.toUpperCase() });
        t.exports = r }, function(t, e, n) { var r = n(74),
            i = n(337),
            o = n(340),
            a = RegExp("['â€™]", "g");
        t.exports = function(t) { return function(e) { return r(o(i(e).replace(a, "")), t, "") } } }, function(t, e, n) { var r = n(338),
            i = n(17),
            o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
        t.exports = function(t) { return (t = i(t)) && t.replace(o, r).replace(a, "") } }, function(t, e, n) { var r = n(339)({ "Ã€": "A", "Ã": "A", "Ã‚": "A", "Ãƒ": "A", "Ã„": "A", "Ã…": "A", "Ã ": "a", "Ã¡": "a", "Ã¢": "a", "Ã£": "a", "Ã¤": "a", "Ã¥": "a", "Ã‡": "C", "Ã§": "c", "Ã": "D", "Ã°": "d", "Ãˆ": "E", "Ã‰": "E", "ÃŠ": "E", "Ã‹": "E", "Ã¨": "e", "Ã©": "e", "Ãª": "e", "Ã«": "e", "ÃŒ": "I", "Ã": "I", "ÃŽ": "I", "Ã": "I", "Ã¬": "i", "Ã­": "i", "Ã®": "i", "Ã¯": "i", "Ã‘": "N", "Ã±": "n", "Ã’": "O", "Ã“": "O", "Ã”": "O", "Ã•": "O", "Ã–": "O", "Ã˜": "O", "Ã²": "o", "Ã³": "o", "Ã´": "o", "Ãµ": "o", "Ã¶": "o", "Ã¸": "o", "Ã™": "U", "Ãš": "U", "Ã›": "U", "Ãœ": "U", "Ã¹": "u", "Ãº": "u", "Ã»": "u", "Ã¼": "u", "Ã": "Y", "Ã½": "y", "Ã¿": "y", "Ã†": "Ae", "Ã¦": "ae", "Ãž": "Th", "Ã¾": "th", "ÃŸ": "ss", "Ä€": "A", "Ä‚": "A", "Ä„": "A", "Ä": "a", "Äƒ": "a", "Ä…": "a", "Ä†": "C", "Äˆ": "C", "ÄŠ": "C", "ÄŒ": "C", "Ä‡": "c", "Ä‰": "c", "Ä‹": "c", "Ä": "c", "ÄŽ": "D", "Ä": "D", "Ä": "d", "Ä‘": "d", "Ä’": "E", "Ä”": "E", "Ä–": "E", "Ä˜": "E", "Äš": "E", "Ä“": "e", "Ä•": "e", "Ä—": "e", "Ä™": "e", "Ä›": "e", "Äœ": "G", "Äž": "G", "Ä ": "G", "Ä¢": "G", "Ä": "g", "ÄŸ": "g", "Ä¡": "g", "Ä£": "g", "Ä¤": "H", "Ä¦": "H", "Ä¥": "h", "Ä§": "h", "Ä¨": "I", "Äª": "I", "Ä¬": "I", "Ä®": "I", "Ä°": "I", "Ä©": "i", "Ä«": "i", "Ä­": "i", "Ä¯": "i", "Ä±": "i", "Ä´": "J", "Äµ": "j", "Ä¶": "K", "Ä·": "k", "Ä¸": "k", "Ä¹": "L", "Ä»": "L", "Ä½": "L", "Ä¿": "L", "Å": "L", "Äº": "l", "Ä¼": "l", "Ä¾": "l", "Å€": "l", "Å‚": "l", "Åƒ": "N", "Å…": "N", "Å‡": "N", "ÅŠ": "N", "Å„": "n", "Å†": "n", "Åˆ": "n", "Å‹": "n", "ÅŒ": "O", "ÅŽ": "O", "Å": "O", "Å": "o", "Å": "o", "Å‘": "o", "Å”": "R", "Å–": "R", "Å˜": "R", "Å•": "r", "Å—": "r", "Å™": "r", "Åš": "S", "Åœ": "S", "Åž": "S", "Å ": "S", "Å›": "s", "Å": "s", "ÅŸ": "s", "Å¡": "s", "Å¢": "T", "Å¤": "T", "Å¦": "T", "Å£": "t", "Å¥": "t", "Å§": "t", "Å¨": "U", "Åª": "U", "Å¬": "U", "Å®": "U", "Å°": "U", "Å²": "U", "Å©": "u", "Å«": "u", "Å­": "u", "Å¯": "u", "Å±": "u", "Å³": "u", "Å´": "W", "Åµ": "w", "Å¶": "Y", "Å·": "y", "Å¸": "Y", "Å¹": "Z", "Å»": "Z", "Å½": "Z", "Åº": "z", "Å¼": "z", "Å¾": "z", "Ä²": "IJ", "Ä³": "ij", "Å’": "Oe", "Å“": "oe", "Å‰": "'n", "Å¿": "s" });
        t.exports = r }, function(t, e) { t.exports = function(t) { return function(e) { return null == t ? void 0 : t[e] } } }, function(t, e, n) { var r = n(341),
            i = n(342),
            o = n(17),
            a = n(343);
        t.exports = function(t, e, n) { return t = o(t), void 0 === (e = n ? void 0 : e) ? i(t) ? a(t) : r(t) : t.match(e) || [] } }, function(t, e) { var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        t.exports = function(t) { return t.match(n) || [] } }, function(t, e) { var n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        t.exports = function(t) { return n.test(t) } }, function(t, e) { var n = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            r = "[" + n + "]",
            i = "\\d+",
            o = "[\\u2700-\\u27bf]",
            a = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
            s = "[^\\ud800-\\udfff" + n + i + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
            u = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            l = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
            h = "(?:" + a + "|" + s + ")",
            f = "(?:" + l + "|" + s + ")",
            p = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            g = "[\\ufe0e\\ufe0f]?" + p + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", u, c].join("|") + ")[\\ufe0e\\ufe0f]?" + p + ")*"),
            d = "(?:" + [o, u, c].join("|") + ")" + g,
            y = RegExp([l + "?" + a + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?(?=" + [r, l, "$"].join("|") + ")", f + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?(?=" + [r, l + h, "$"].join("|") + ")", l + "?" + h + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?", l + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", i, d].join("|"), "g");
        t.exports = function(t) { return t.match(y) || [] } }, function(t, e) { t.exports = function(t) { return null === t } }, function(t, e, n) { var r = n(346),
            i = n(68),
            o = n(103),
            a = o && o.isDate,
            s = a ? i(a) : r;
        t.exports = s }, function(t, e, n) { var r = n(11),
            i = n(10),
            o = "[object Date]";
        t.exports = function(t) { return i(t) && r(t) == o } }, function(t, e, n) { var r = n(77),
            i = n(166),
            o = Math.max;
        t.exports = function(t, e, n) { var a = null == t ? 0 : t.length; if (!a) return -1; var s = null == n ? 0 : i(n); return s < 0 && (s = o(a + s, 0)), r(t, e, s) } }, function(t, e, n) { var r = n(167),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function(t) { if (!t) return 0 === t ? t : 0; if ((t = r(t)) === i || t === -i) return (t < 0 ? -1 : 1) * o; return t == t ? t : 0 } }, function(t, e, n) { var r = n(46),
            i = n(350),
            o = Object.prototype.hasOwnProperty,
            a = i(function(t, e, n) { o.call(t, n) ? t[n].push(e) : r(t, n, [e]) });
        t.exports = a }, function(t, e, n) { var r = n(351),
            i = n(352),
            o = n(33),
            a = n(4);
        t.exports = function(t, e) { return function(n, s) { var u = a(n) ? r : i,
                    c = e ? e() : {}; return u(n, t, o(s, 2), c) } } }, function(t, e) { t.exports = function(t, e, n, r) { for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) { var a = t[i];
                e(r, a, n(a), t) } return r } }, function(t, e, n) { var r = n(52);
        t.exports = function(t, e, n, i) { return r(t, function(t, r, o) { e(i, t, n(t), o) }), i } }, function(t, e, n) { var r = n(169),
            i = n(354),
            o = n(33);
        t.exports = function(t, e) { return t && t.length ? r(t, o(e, 2), i) : void 0 } }, function(t, e) { t.exports = function(t, e) { return t > e } }, function(t, e, n) { var r = n(169),
            i = n(33),
            o = n(356);
        t.exports = function(t, e) { return t && t.length ? r(t, i(e, 2), o) : void 0 } }, function(t, e) { t.exports = function(t, e) { return t < e } }, function(t, e, n) { var r = n(358)("round");
        t.exports = r }, function(t, e, n) { var r = n(166),
            i = n(167),
            o = n(17),
            a = Math.min;
        t.exports = function(t) { var e = Math[t]; return function(t, n) { if (t = i(t), n = null == n ? 0 : a(r(n), 292)) { var s = (o(t) + "e").split("e"),
                        u = e(s[0] + "e" + (+s[1] + n)); return +((s = (o(u) + "e").split("e"))[0] + "e" + (+s[1] - n)) } return e(t) } } }, function(t, e, n) { var r = n(109),
            i = n(360),
            o = n(33),
            a = n(4);
        t.exports = function(t, e) { return (a(t) ? r : i)(t, o(e, 3)) } }, function(t, e, n) { var r = n(52);
        t.exports = function(t, e) { var n = []; return r(t, function(t, r, i) { e(t, r, i) && n.push(t) }), n } }, function(t, e, n) { var r = n(53);
        t.exports = function(t, e, n) { var i = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0; return void 0 === i ? r(t, e, void 0, n) : !!i } }, function(t, e, n) { var r = n(17);
        t.exports = function() { var t = arguments,
                e = r(t[0]); return t.length < 3 ? e : e.replace(t[1], t[2]) } }, function(t, e, n) { var r = n(170),
            i = n(76),
            o = n(365),
            a = n(122),
            s = i(function(t) { return o(r(t, 1, a, !0)) });
        t.exports = s }, function(t, e, n) { var r = n(15),
            i = n(27),
            o = n(4),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function(t) { return o(t) || i(t) || !!(a && t && t[a]) } }, function(t, e, n) { var r = n(131),
            i = n(366),
            o = n(367),
            a = n(132),
            s = n(368),
            u = n(31),
            c = 200;
        t.exports = function(t, e, n) { var l = -1,
                h = i,
                f = t.length,
                p = !0,
                g = [],
                d = g; if (n) p = !1, h = o;
            else if (f >= c) { var y = e ? null : s(t); if (y) return u(y);
                p = !1, h = a, d = new r } else d = e ? [] : g;
            t: for (; ++l < f;) { var v = t[l],
                    x = e ? e(v) : v; if (v = n || 0 !== v ? v : 0, p && x == x) { for (var m = d.length; m--;)
                        if (d[m] === x) continue t;
                    e && d.push(x), g.push(v) } else h(d, x, n) || (d !== g && d.push(x), g.push(v)) }
            return g } }, function(t, e, n) { var r = n(77);
        t.exports = function(t, e) { return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1 } }, function(t, e) { t.exports = function(t, e, n) { for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                if (n(e, t[r])) return !0; return !1 } }, function(t, e, n) { var r = n(102),
            i = n(369),
            o = n(31),
            a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(t) { return new r(t) } : i;
        t.exports = a }, function(t, e) { t.exports = function() {} }, function(t, e, n) { var r = n(371),
            i = n(374)(function(t, e) { return null == t ? {} : r(t, e) });
        t.exports = i }, function(t, e, n) { var r = n(372),
            i = n(165);
        t.exports = function(t, e) { return r(t, e, function(e, n) { return i(t, n) }) } }, function(t, e, n) { var r = n(88),
            i = n(373),
            o = n(56);
        t.exports = function(t, e, n) { for (var a = -1, s = e.length, u = {}; ++a < s;) { var c = e[a],
                    l = r(t, c);
                n(l, c) && i(u, o(c, t), l) } return u } }, function(t, e, n) { var r = n(45),
            i = n(56),
            o = n(47),
            a = n(7),
            s = n(34);
        t.exports = function(t, e, n, u) { if (!a(t)) return t; for (var c = -1, l = (e = i(e, t)).length, h = l - 1, f = t; null != f && ++c < l;) { var p = s(e[c]),
                    g = n; if (c != h) { var d = f[p];
                    void 0 === (g = u ? u(d, p, f) : void 0) && (g = a(d) ? d : o(e[c + 1]) ? [] : {}) } r(f, p, g), f = f[p] } return t } }, function(t, e, n) { var r = n(375),
            i = n(118),
            o = n(119);
        t.exports = function(t) { return o(i(t, void 0, r), t + "") } }, function(t, e, n) { var r = n(170);
        t.exports = function(t) { return (null == t ? 0 : t.length) ? r(t, 1) : [] } }, function(t, e, n) {
        function r(t, e) { var n = function(t) { if (f.isEmpty(t)) return null; var e = t[0].x,
                        n = t[0].x,
                        r = t[0].y,
                        i = t[0].y; return f.each(t, function(t) { e = e > t.x ? t.x : e, n = n < t.x ? t.x : n, r = r > t.y ? t.y : r, i = i < t.y ? t.y : i }), { minX: e, maxX: n, minY: r, maxY: i, centerX: (e + n) / 2, centerY: (r + i) / 2 } }(t.points || t.get("origin").points),
                r = void 0,
                i = void 0,
                o = e.startAngle,
                a = e.endAngle - o; return e.isTransposed ? (r = n.maxY * a, i = n.minY * a) : (r = n.maxX * a, i = n.minX * a), r += o, i += o, { startAngle: i, endAngle: r } }

        function i(t, e, n) { var r = {}; return t.delay && (r.delay = f.isFunction(t.delay) ? t.delay(e, n) : t.delay), r.easing = f.isFunction(t.easing) ? t.easing(e, n) : t.easing, r.duration = f.isFunction(t.duration) ? t.duration(e, n) : t.duration, r.callback = t.callback, r }

        function o(t, e) { var n = t._id,
                r = t.get("index"),
                o = t.getBBox(),
                a = t.get("origin").points,
                s = (o.minX + o.maxX) / 2,
                u = void 0,
                c = [s, u = a[0].y - a[1].y <= 0 ? o.maxY : o.minY, 1];
            t.apply(c), t.attr("transform", [
                ["t", -s, -u],
                ["s", 1, .01],
                ["t", s, u]
            ]); var l = { transform: [
                        ["t", -s, -u],
                        ["s", 1, 100],
                        ["t", s, u]
                    ] },
                h = i(e, r, n);
            t.animate(l, h.duration, h.easing, h.callback, h.delay) }

        function a(t, e) { var n = t._id,
                r = t.get("index"),
                o = t.getBBox(),
                a = t.get("origin").points,
                s = void 0,
                u = (o.minY + o.maxY) / 2,
                c = [s = a[0].y - a[1].y > 0 ? o.maxX : o.minX, u, 1];
            t.apply(c), t.attr({ transform: [
                    ["t", -s, -u],
                    ["s", .01, 1],
                    ["t", s, u]
                ] }); var l = { transform: [
                        ["t", -s, -u],
                        ["s", 100, 1],
                        ["t", s, u]
                    ] },
                h = i(e, r, n);
            t.animate(l, h.duration, h.easing, h.callback, h.delay) }

        function s(t, e, n) { var r = t._id,
                o = t.get("index"),
                a = void 0,
                s = void 0; if (n.isPolar && "point" !== t.name) a = n.getCenter().x, s = n.getCenter().y;
            else { var u = t.getBBox();
                a = (u.minX + u.maxX) / 2, s = (u.minY + u.maxY) / 2 } var c = [a, s, 1];
            t.apply(c), t.attr({ transform: [
                    ["t", -a, -s],
                    ["s", .01, .01],
                    ["t", a, s]
                ] }); var l = { transform: [
                        ["t", -a, -s],
                        ["s", 100, 100],
                        ["t", a, s]
                    ] },
                h = i(e, o, r);
            t.animate(l, h.duration, h.easing, h.callback, h.delay) }

        function u(t, e) { if ("path" === t.get("type")) { var n = t._id,
                    r = t.get("index"),
                    o = g.pathToAbsolute(t.attr("path"));
                t.attr("path", [o[0]]); var a = { path: o },
                    s = i(e, r, n);
                t.animate(a, s.duration, s.easing, s.callback, s.delay) } }

        function c(t, e, n, r, o) { var a = function(t) { var e = t.start,
                        n = t.end,
                        r = t.getWidth(),
                        i = t.getHeight(),
                        o = void 0,
                        a = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0; return t.isPolar ? (u = t.getRadius(), s = t.getCenter(), o = t.startAngle, a = t.endAngle, (c = new p.Fan({ attrs: { x: s.x, y: s.y, rs: 0, re: u + 200, startAngle: o, endAngle: o } })).endState = { endAngle: a }) : (c = new p.Rect({ attrs: { x: e.x - 200, y: n.y - 200, width: t.isTransposed ? r + 400 : 0, height: t.isTransposed ? 0 : i + 400 } }), t.isTransposed ? c.endState = { height: i + 400 } : c.endState = { width: r + 400 }), c.isClip = !0, c }(n),
                s = t.get("canvas"),
                u = t._id,
                c = t.get("index"),
                l = void 0;
            r ? (a.attr("startAngle", r), a.attr("endAngle", r), l = { endAngle: o }) : l = a.endState, a.set("canvas", s), t.attr("clip", a), t.setSilent("animating", !0); var h = i(e, c, u);
            a.animate(l, h.duration, h.easing, function() { t && !t.get("destroyed") && (t.attr("clip", null), t.setSilent("cacheShape", null), t.setSilent("animating", !1), a.remove()) }, h.delay) }

        function l(t, e) { var n = t._id,
                r = t.get("index"),
                o = f.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"),
                a = f.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
            t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0); var s = { fillOpacity: o, strokeOpacity: a },
                u = i(e, r, n);
            t.animate(s, u.duration, u.easing, u.callback, u.delay) }

        function h(t, e, n) { var i = r(t, n),
                o = i.endAngle;
            c(t, e, n, i.startAngle, o) } var f = n(0),
            p = n(2),
            g = p.PathUtil;
        t.exports = { enter: { clipIn: c, zoomIn: s, pathIn: u, scaleInY: o, scaleInX: a, fanIn: h, fadeIn: l }, leave: { lineWidthOut: function(t, e) { var n = { lineWidth: 0, opacity: 0 },
                        r = t._id,
                        o = i(e, t.get("index"), r);
                    t.animate(n, o.duration, o.easing, function() { t.remove() }, o.delay) }, zoomOut: function(t, e, n) { var r = t._id,
                        o = t.get("index"),
                        a = void 0,
                        s = void 0; if (n.isPolar && "point" !== t.name) a = n.getCenter().x, s = n.getCenter().y;
                    else { var u = t.getBBox();
                        a = (u.minX + u.maxX) / 2, s = (u.minY + u.maxY) / 2 } var c = [a, s, 1];
                    t.apply(c); var l = { transform: [
                                ["t", -a, -s],
                                ["s", .01, .01],
                                ["t", a, s]
                            ] },
                        h = i(e, o, r);
                    t.animate(l, h.duration, h.easing, function() { t.remove() }, h.delay) }, pathOut: function(t, e) { if ("path" === t.get("type")) { var n = t._id,
                            r = t.get("index"),
                            o = { path: [g.pathToAbsolute(t.attr("path"))[0]] },
                            a = i(e, r, n);
                        t.animate(o, a.duration, a.easing, function() { t.remove() }, a.delay) } }, fadeOut: function(t, e) { var n = t._id,
                        r = { fillOpacity: 0, strokeOpacity: 0 },
                        o = i(e, t.get("index"), n);
                    t.animate(r, o.duration, o.easing, function() { t.remove() }, o.delay) } }, appear: { clipIn: c, zoomIn: s, pathIn: u, scaleInY: o, scaleInX: a, fanIn: h, fadeIn: l }, update: { fadeIn: l, fanIn: h } } }, function(t, e, n) { var r = n(0),
            i = n(378),
            o = n(2),
            a = o.Canvas,
            s = o.DomUtil,
            u = n(36),
            c = n(178),
            l = n(454),
            h = n(1),
            f = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix(e, { id: null, forceFit: !1, container: null, wrapperEl: null, canvas: null, width: 500, height: 500, pixelRatio: null, padding: h.plotCfg.padding, backPlot: null, frontPlot: null, plotBackground: null, background: null, views: [] }) }, e.prototype.init = function() { this._initCanvas(), this._initPlot(), this._initEvents(), t.prototype.init.call(this); var e = new c.Tooltip({ chart: this, options: {} });
                    this.set("tooltipController", e); var n = new c.Legend({ chart: this });
                    this.set("legendController", n), this.set("_id", "chart"), this.emit("afterinit") }, e.prototype._initCanvas = function() { var t = this.get("container"),
                        e = this.get("id");!t && e && (t = e, this.set("container", e)); var n = this.get("width"),
                        i = this.get("height"); if (r.isString(t)) { if (!(t = document.getElementById(t))) throw new Error("Please specify the container for the chart!");
                        this.set("container", t) } var o = s.createDom('<div style="position:relative;"></div>');
                    t.appendChild(o), this.set("wrapperEl", o), this.get("forceFit") && (n = s.getWidth(t), this.set("width", n)); var u = new a({ containerDOM: o, width: n, height: i, pixelRatio: this.get("pixelRatio") });
                    this.set("canvas", u) }, e.prototype._initPlot = function() { this._initPlotBack(); var t = this.get("canvas"),
                        e = t.addGroup({ zIndex: 1 }),
                        n = t.addGroup({ zIndex: 2 }),
                        r = t.addGroup({ zIndex: 3 });
                    this.set("backPlot", e), this.set("middlePlot", n), this.set("frontPlot", r) }, e.prototype._initPlotBack = function() { var t = this.get("canvas").addGroup(u.Plot, { padding: this.get("padding"), plotBackground: r.mix({}, h.plotBackground, this.get("plotBackground")), background: r.mix({}, h.background, this.get("background")) });
                    this.set("plot", t), this.set("plotRange", t.get("plotRange")) }, e.prototype._initEvents = function() { this.get("forceFit") && window.addEventListener("resize", r.wrapBehavior(this, "_initForceFitEvent")) }, e.prototype._initForceFitEvent = function() { var t = setTimeout(r.wrapBehavior(this, "forceFit"), 200);
                    clearTimeout(this.get("resizeTimer")), this.set("resizeTimer", t) }, e.prototype._renderLegends = function() { var t = this.get("options").legends; if (r.isNil(t) || !1 !== t) { var e = this.get("legendController"); if (e.options = t || {}, e.plotRange = this.get("plotRange"), t && t.custom) e.addCustomLegend();
                        else { var n = this.getAllGeoms(),
                                i = [];
                            r.each(n, function(t) { var n = t.get("view"),
                                    o = t.getAttrsForLegend();
                                r.each(o, function(o) { var a = o.type,
                                        s = o.getScale(a); if ("identity" !== s.type && ! function(t, e) { var n = !1; return r.each(t, function(t) { var r = [].concat(t.values),
                                                    i = [].concat(e.values);
                                                t.type !== e.type || t.field !== e.field || r.sort().toString() !== i.sort().toString() || (n = !0) }), n }(i, s)) { i.push(s); var u = n.getFilteredValues(s.field);
                                        e.addLegend(s, o, t, u) } }) }) } e.alignLegends() } }, e.prototype._renderTooltips = function() { var t = this.get("options"); if (r.isNil(t.tooltip) || !1 !== t.tooltip) { var e = this.get("tooltipController");
                        e.options = t.tooltip || {}, e.renderTooltip() } }, e.prototype.getAllGeoms = function() { var t = [];
                    t = t.concat(this.get("geoms")); var e = this.get("views"); return r.each(e, function(e) { t = t.concat(e.get("geoms")) }), t }, e.prototype.forceFit = function() { var t = this.get("container"),
                        e = s.getWidth(t); if (e !== this.get("width")) { var n = this.get("height");
                        this.changeSize(e, n) } return this }, e.prototype.changeSize = function(t, e) { this.get("canvas").changeSize(t, e), this.set("width", t), this.set("height", e); return this.get("plot").repaint(), this.repaint(), this.emit("afterchangesize"), this }, e.prototype.changeWidth = function(t) { return this.changeSize(t, this.get("height")) }, e.prototype.changeHeight = function(t) { return this.changeSize(this.get("width"), t) }, e.prototype.facet = function(t, e) { var n = l[r.upperFirst(t)]; if (!n) throw new Error("Not support such type of facets as: " + t); var i = this.get("facets");
                    i && i.destroy(), e.chart = this; var o = new n(e);
                    this.set("facets", o) }, e.prototype.view = function(t) {
                    (t = t || {}).parent = this, t.backPlot = this.get("backPlot"), t.middlePlot = this.get("middlePlot"), t.frontPlot = this.get("frontPlot"), t.canvas = this.get("canvas"), r.isNil(t.animate) && (t.animate = this.get("animate")), t.options = r.mix({}, this._getSharedOptions(), t.options); var e = new i(t); return e.set("_id", "view" + this.get("views").length), this.get("views").push(e), this.emit("addview", { view: e }), e }, e.prototype.removeView = function(t) { var e = this.get("views");
                    r.Array.remove(e, t), t.destroy() }, e.prototype._getSharedOptions = function() { var t = this.get("options"),
                        e = {}; return r.each(["scales", "coord", "axes"], function(n) { e[n] = r.cloneDeep(t[n]) }), e }, e.prototype.getViewRegion = function() { var t = this.get("plotRange"); return { start: t.bl, end: t.tr } }, e.prototype.legend = function(t, e) { var n = this.get("options");
                    n.legends || (n.legends = {}); var i = {}; return !1 === t ? n.legends = !1 : r.isObject(t) ? i = t : r.isString(t) ? i[t] = e : i = e, r.mix(n.legends, i), this }, e.prototype.tooltip = function(t, e) { var n = this.get("options"); return n.tooltip || (n.tooltip = {}), !1 === t ? n.tooltip = !1 : r.isObject(t) ? r.mix(n.tooltip, t) : r.mix(n.tooltip, e), this }, e.prototype.clear = function() { this.emit("beforeclear"); for (var e = this.get("views"); e.length > 0;) { e.shift().destroy() } t.prototype.clear.call(this); return this.get("canvas").draw(), this.emit("afterclear"), this }, e.prototype.clearInner = function() { var e = this.get("views");
                    r.each(e, function(t) { t.clearInner() }); var n = this.get("tooltipController"); if (n && n.clear(), !this.get("keepLegend")) { var i = this.get("legendController");
                        i && i.clear() } t.prototype.clearInner.call(this) }, e.prototype.paint = function() { t.prototype.paint.call(this), !this.get("keepLegend") && this._renderLegends(), this._renderTooltips(), this.set("keepLegend", !1) }, e.prototype.changeVisible = function(t) { var e = this.get("wrapperEl"),
                        n = t ? "" : "none";
                    e.style.display = n }, e.prototype.toDataURL = function() { return this.get("canvas").get("el").toDataURL("image/png") }, e.prototype.downloadImage = function(t) { var e = this.toDataURL(),
                        n = document.createElement("a"); return n.download = (t || "chart") + ".png", n.href = e.replace("image/png", "image/octet-stream"), n.click(), e }, e.prototype.showTooltip = function(t) { var e = this.getViewsByPoint(t); if (e.length) { this.get("tooltipController").showTooltip(t, e) } return this }, e.prototype.hideTooltip = function() { return this.get("tooltipController").hideTooltip(), this }, e.prototype.getTooltipItems = function(t) { var e = this.getViewsByPoint(t),
                        n = []; return r.each(e, function(e) { var i = e.get("geoms");
                        r.each(i, function(e) { var i = e.get("dataArray"),
                                o = [];
                            r.each(i, function(n) { var r = e.findPoint(t, n); if (r) { var i = e.getTipItems(r);
                                    o = o.concat(i) } }), n = n.concat(o) }) }), n }, e.prototype.destroy = function() { this.emit("beforedestroy"); var e = this.get("canvas"),
                        n = this.get("wrapperEl");
                    n.parentNode.removeChild(n), t.prototype.destroy.call(this), e.destroy(), window.removeEventListener("resize", r.getWrapBehavior(this, "_initForceFitEvent")), this.emit("afterdestroy") }, e }(i);
        t.exports = f }, function(t, e, n) {
        function r(t, e, n) { var r = (t - e) / (n - e); return r >= 0 && r <= 1 }

        function i(t, e) { var n = !1; if (t) { if ("theta" === t.type) { var i = t.start,
                        o = t.end;
                    n = r(e.x, i.x, o.x) && r(e.y, i.y, o.y) } else { var a = t.invert(e);
                    n = a.x >= 0 && a.y >= 0 && a.x <= 1 && a.y <= 1 } } return n } var o = n(90),
            a = n(379),
            s = n(0),
            u = n(178),
            c = n(1),
            l = n(453),
            h = {};
        s.each(a, function(t, e) { var n = s.lowerFirst(e);
            h[n] = function(e) { var n = new t(e); return this.addGeom(n), n } }); var f = function(t) {
            function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return s.mix(r, h), r.init(), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { viewContainer: null, coord: null, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, geoms: [], scales: {}, options: {}, scaleController: null, padding: 0, parent: null, tooltipEnable: !0, animate: !0 } }, e.prototype.init = function() { this._initViewPlot(), this.get("data") && this._initData(this.get("data")), this._initOptions(), this._initControllers(), this._bindEvents() }, e.prototype._initOptions = function() { var t = this,
                    e = s.mix({}, t.get("options"));
                e.scales || (e.scales = {}), e.coord || (e.coord = {}), !1 === e.animate && this.set("animate", !1), (!1 === e.tooltip || s.isNull(e.tooltip)) && this.set("tooltipEnable", !1), e.geoms && e.geoms.length && s.each(e.geoms, function(e) { t._createGeom(e) }); var n = t.get("scaleController");
                n && (n.defs = e.scales); var r = t.get("coordController");
                r && r.reset(e.coord), this.set("options", e) }, e.prototype._createGeom = function(t) { var e = t.type,
                    n = void 0;
                this[e] && (n = this[e](), s.each(t, function(t, e) { if (n[e])
                        if (s.isObject(t) && t.field)
                            if ("label" === t) n[e](t.field, t.callback, t.cfg);
                            else { var r = void 0;
                                s.each(t, function(t, e) { "field" !== e && (r = t) }), n[e](t.field, r) } else n[e](t) })) }, e.prototype._initControllers = function() { var t = this.get("options"),
                    e = new u.Scale({ defs: t.scales }),
                    n = new u.Coord(t.coord);
                this.set("scaleController", e), this.set("coordController", n); var r = new u.Axis;
                this.set("axisController", r); var i = new u.Guide({ options: t.guides || [] });
                this.set("guideController", i) }, e.prototype._initViewPlot = function() { this.get("viewContainer") || this.set("viewContainer", this.get("middlePlot")) }, e.prototype._initGeoms = function() { for (var t = this.get("geoms"), e = this.get("filteredData"), n = this.get("coord"), r = this.get("_id"), i = 0; i < t.length; i++) { var o = t[i];
                    o.set("data", e), o.set("coord", n), o.set("_id", r + "-geom" + i), o.set("keyFields", this.get("keyFields")), o.init() } }, e.prototype._clearGeoms = function() { for (var t = this.get("geoms"), e = 0; e < t.length; e++) { t[e].clear() } }, e.prototype._removeGeoms = function() { for (var t = this.get("geoms"); t.length > 0;) { t.shift().destroy() } }, e.prototype._drawGeoms = function() { for (var t = this.get("geoms"), e = this.get("coord"), n = 0; n < t.length; n++) { var r = t[n];
                    r.setCoord(e), r.paint() } }, e.prototype.getViewRegion = function() { var t = this.get("parent"),
                    e = void 0,
                    n = void 0; if (t) { var r = t.getViewRegion(),
                        i = this._getViewRegion(r.start, r.end);
                    e = i.start, n = i.end } else e = this.get("start"), n = this.get("end"); return { start: e, end: n } }, e.prototype._getViewRegion = function(t, e) { var n = this.get("start"),
                    r = this.get("end"),
                    i = n.x,
                    o = 1 - r.y,
                    a = r.x,
                    u = 1 - n.y,
                    c = this.get("padding"),
                    l = s.toAllPadding(c),
                    h = l[0],
                    f = l[1],
                    p = l[2],
                    g = l[3]; return { start: { x: i * (e.x - t.x) + t.x + g, y: o * (e.y - t.y) + t.y - p }, end: { x: a * (e.x - t.x) + t.x - f, y: u * (e.y - t.y) + t.y + h } } }, e.prototype._createCoord = function() { var t = this.get("coordController"),
                    e = this.getViewRegion(),
                    n = t.createCoord(e.start, e.end);
                this.set("coord", n) }, e.prototype._renderAxes = function() { var t = this.get("options").axes; if (!1 !== t) { var e = this.get("axisController");
                    e.container = this.get("backPlot"), e.coord = this.get("coord"), e.options = t || {}; var n = this.getXScale(),
                        r = this.getYScales(),
                        i = this.get("_id");
                    e.createAxis(n, r, i) } }, e.prototype._renderGuides = function() { var t = this.get("guideController"); if (!s.isEmpty(t.options)) { var e = this.get("coord");
                    t.backContainer = this.get("backPlot"), t.frontContainer = this.get("frontPlot"), t.xScales = this._getScales("x"), t.yScales = this._getScales("y"), t.render(e) } }, e.prototype._bindEvents = function() { var t = new u.Event({ view: this, canvas: this.get("canvas") });
                t.bindEvents(), this.set("eventController", t) }, e.prototype._clearEvents = function() { var t = this.get("eventController");
                t && t.clearEvents() }, e.prototype._getScales = function(t) { for (var e = this.get("geoms"), n = {}, r = 0; r < e.length; r++) { var i = e[r],
                        o = "x" === t ? i.getXScale() : i.getYScale();
                    o && !n[o.field] && (n[o.field] = o) } return n }, e.prototype._adjustScale = function() { this._setCatScalesRange(); for (var t = this.get("geoms"), e = this.get("scaleController").defs, n = 0; n < t.length; n++) { var r = t[n]; if ("interval" === r.get("type")) { var i = r.getYScale(),
                            o = i.field;
                        e[o] && e[o].min || !(i.min > 0) || i.change({ min: 0 }) } } }, e.prototype._setCatScalesRange = function() { var t = this.get("coord"),
                    e = this.getXScale(),
                    n = this.getYScales(),
                    r = [];
                e && r.push(e), r = r.concat(n); var i = t.isPolar && function(t) { var e = t.startAngle,
                            n = t.endAngle; return !(!s.isNil(e) && !s.isNil(n) && n - e < 2 * Math.PI) }(t),
                    o = this.get("scaleController").defs;
                s.each(r, function(e) { if ((e.isCategory || e.isIdentity) && e.values && (!o[e.field] || !o[e.field].range)) { var n = e.values.length,
                            r = void 0; if (1 === n) r = [.5, 1];
                        else { var a = 0;
                            r = i ? t.isTransposed ? [(a = 1 / n * c.widthRatio.multiplePie) / 2, 1 - a / 2] : [0, 1 - 1 / n] : [a = 1 / n * 1 / 2, 1 - a] } e.range = r } }) }, e.prototype.getXScale = function() { var t = this.get("geoms").filter(function(t) { return t.get("visible") }),
                    e = null; return s.isEmpty(t) || (e = t[0].getXScale()), e }, e.prototype.getYScales = function() { for (var t = this.get("geoms").filter(function(t) { return t.get("visible") }), e = [], n = 0; n < t.length; n++) { var r = t[n].getYScale();
                    r && -1 === s.indexOf(e, r) && e.push(r) } return e }, e.prototype.getXY = function(t) { var e = this.get("coord"),
                    n = this._getScales("x"),
                    r = this._getScales("y"),
                    i = void 0,
                    o = void 0; for (var a in t) n[a] && (i = n[a].scale(t[a])), r[a] && (o = r[a].scale(t[a])); return s.isNil(i) || s.isNil(o) ? null : e.convert({ x: i, y: o }) }, e.prototype.getSnapRecords = function(t) { var e = this.get("geoms"),
                    n = []; return s.each(e, function(e) { var r = e.get("dataArray"),
                        i = void 0;
                    s.each(r, function(r) {
                        (i = e.findPoint(t, r)) && n.push(i) }) }), n }, e.prototype.addGeom = function(t) { this.get("geoms").push(t), t.set("view", this); var e = this.get("viewContainer");
                t.set("container", e), t.set("animate", this.get("animate")), t.bindEvents() }, e.prototype.removeGeom = function(t) { var e = this.get("geoms");
                s.Array.remove(e, t), t.destroy() }, e.prototype.createScale = function(t, e) { var n = this.get("scales"),
                    r = this.get("parent"),
                    i = n[t],
                    o = this._getFilters(); if (!e) { var a = this.get("filteredData");
                    e = !a.length || o && o[t] ? this.get("data") : a } var s = this.get("scaleController"); if (i) { if (i.sync) { var u = s.createScale(t, e);
                        this._syncScale(i, u) } } else { if ((i = s.createScale(t, e)).sync && r) { var c = r.createScale(t, e);
                        i = this._getSyncScale(c, i) } n[t] = i } return i }, e.prototype._getSyncScale = function(t, e) { return t.type !== e.type ? e : (this._syncScale(t, e), t) }, e.prototype._syncScale = function(t, e) { var n = s.union(t.values, e.values); if (e.isLinear) { var r = Math.max(t.max, e.max),
                        i = Math.min(t.min, e.min);
                    t.max === r && t.min === i || t.change({ min: i, max: r, values: n }) } n.length !== t.values.length && t.change({ values: n }) }, e.prototype.getFilteredValues = function(t) { var e = this.get("scales")[t].values,
                    n = this._getFilters(); return n && n[t] ? e.filter(n[t]) : e.slice(0) }, e.prototype.filter = function(t, e) { var n = this.get("options");
                n.filters || (n.filters = {}), n.filters[t] = e }, e.prototype._getFilters = function() { return this.get("options").filters }, e.prototype.execFilter = function(t) { var e = this._getFilters(); return e && (t = t.filter(function(t) { var n = !0; return s.each(e, function(e, r) { if (!(n = e(t[r], t))) return !1 }), n })), t }, e.prototype.axis = function(t, e) { var n = this.get("options"); if (!1 === t) n.axes = !1;
                else { n.axes || (n.axes = {});
                    n.axes[t] = e } return this }, e.prototype.guide = function() { return this.get("guideController") }, e.prototype._getKeyFields = function(t) { var e = [];
                s.each(t, function(t, n) { t.key && e.push(n) }), this.set("keyFields", e) }, e.prototype.scale = function(t, e) { var n = this.get("options").scales; return s.isObject(t) ? s.mix(n, t) : n[t] = e, this._getKeyFields(n), this }, e.prototype.tooltip = function(t) { return this.set("tooltipEnable", t), this }, e.prototype.animate = function(t) { return this.get("options").animate = t, this.set("animate", t), this }, e.prototype.changeOptions = function(t) { return this.set("options", t), this._initOptions(t), this }, e.prototype.getViewsByPoint = function(t) { var e = [],
                    n = this.get("views"); return i(this.get("coord"), t) && e.push(this), s.each(n, function(n) { n.get("visible") && i(n.get("coord"), t) && e.push(n) }), e }, e.prototype.eachShape = function(t) { var e = this,
                    n = e.get("views"),
                    r = e.get("canvas");
                s.each(n, function(e) { e.eachShape(t) }); var i = this.get("geoms"); return s.each(i, function(n) { var r = n.getShapes();
                    s.each(r, function(r) { var i = r.get("origin"); if (s.isArray(i)) { var o = i.map(function(t) { return t._origin });
                            t(o, r, n, e) } else { var a = i._origin;
                            t(a, r, n, e) } }) }), r.draw(), this }, e.prototype.filterShape = function(t) { return this.eachShape(function(e, n, r, i) { t(e, n, r, i) ? n.set("visible", !0) : n.set("visible", !1) }), this }, e.prototype.clearInner = function() { this.set("scales", {});
                this.get("options").geoms = null, this._clearGeoms(), this.get("guideController") && this.get("guideController").reset(), this.get("axisController") && this.get("axisController").clear() }, e.prototype.clear = function() { return this.get("options").filters = null, this._removeGeoms(), this.clearInner(), this.get("guideController") && this.get("guideController").clear(), this.set("isUpdate", !1), this.set("keyFields", []), this }, e.prototype.coord = function(t, e) { var n = this.get("coordController"); return n.reset({ type: t, cfg: e }), n }, e.prototype.resetCoord = function() { this._createCoord() }, e.prototype.beforeDraw = function() {}, e.prototype.source = function(t, e) { return this._initData(t), e && this.scale(e), this.emit("setdata"), this }, e.prototype.changeData = function(t) { return this.emit("beforechangedata"), this._initData(t), this.emit("afterchangedata"), this.repaint(), this }, e.prototype._initData = function(t) { var e = this.get("dataView");
                e && (e.off("change", s.getWrapBehavior(this, "_onViewChange")), this.set("dataView", null)), t && t.isDataView && (t.on("change", s.wrapBehavior(this, "_onViewChange")), this.set("dataView", t), t = t.rows), this.set("data", t) }, e.prototype._onViewChange = function() { this.emit("beforechangedata"); var t = this.get("dataView").rows;
                this.set("data", t), this.emit("afterchangedata"), this.repaint() }, e.prototype.render = function(t) { this.emit("beforerender"); var e = this.get("views"),
                    n = this.get("animate"); if (s.each(e, function(t) { t.initView() }), this.initView(), this.emit("beforepaint"), s.each(e, function(t) { t.paint() }), this.paint(), this.emit("afterpaint"), !t) { this.get("backPlot").sort(); var r = this.get("canvas"); if (n) { var i = this.get("isUpdate");
                        s.each(e, function(t) { l.execAnimation(t, i) }), l.execAnimation(this, i) } else r.draw() } return this.emit("afterrender"), this }, e.prototype.initView = function() { var t = this.get("data") || [],
                    e = this.execFilter(t);
                this.set("filteredData", e), this._createCoord(), this._initGeoms(), this._adjustScale() }, e.prototype.paint = function() { var t = this.get("data");
                s.isEmpty(t) || (this.beforeDraw(), this._drawGeoms(), this._renderGuides()), this._renderAxes() }, e.prototype.changeVisible = function(t) { var e = this.get("geoms");
                s.each(e, function(e) { e.get("visible") && e.changeVisible(t, !0) }), this.get("axisController") && this.get("axisController").changeVisible(t), this.get("guideController") && this.get("guideController").changeVisible(t);
                this.get("canvas").draw() }, e.prototype.repaint = function() { this.set("isUpdate", !0), this.clearInner(), this.render() }, e.prototype.destroy = function() { this._clearEvents(); var e = this.get("dataView");
                e && e.off("change", s.getWrapBehavior(this, "_onViewChange")), this.clear(), t.prototype.destroy.call(this) }, e }(o);
        t.exports = f }, function(t, e, n) { var r = n(13);
        r.Point = n(407), r.PointJitter = r.Point.Jitter, r.Path = n(175), r.Line = n(408), r.LineStack = r.Line.Stack, r.Interval = n(409), r.IntervalStack = r.Interval.Stack, r.IntervalDodge = r.Interval.Dodge, r.IntervalSymmetric = r.Interval.Symmetric, r.Area = n(410), r.AreaStack = r.Area.Stack, r.Polygon = n(411), r.Schema = n(412), r.SchemaDodge = r.Schema.Dodge, r.Edge = n(413), r.Heatmap = n(414), t.exports = r }, function(t, e, n) { var r = n(23);
        r.Color = n(381), r.Size = n(382), r.Opacity = n(383), r.Shape = n(384), r.Position = n(385), t.exports = r }, function(t, e, n) { var r = n(91),
            i = n(23),
            o = n(0),
            a = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r.names = ["color"], r.type = "color", r.gradient = null, o.isString(r.values) && (r.linear = !0), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getLinearValue = function(t) { var e = this.gradient; if (!e) { var n = this.values;
                        e = r.gradient(n), this.gradient = e } return e(t) }, e }(i);
        t.exports = a }, function(t, e, n) { var r = function(t) {
            function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r.names = ["size"], r.type = "size", r.gradient = null, r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e }(n(23));
        t.exports = r }, function(t, e, n) { var r = function(t) {
            function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r.names = ["opacity"], r.type = "opacity", r.gradient = null, r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e }(n(23));
        t.exports = r }, function(t, e, n) { var r = function(t) {
            function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r.names = ["shape"], r.type = "shape", r.gradient = null, r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getLinearValue = function(t) { var e = this.values; return e[Math.round((e.length - 1) * t)] }, e }(n(23));
        t.exports = r }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r.names = ["x", "y"], r.type = "position", r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.mapping = function(t, e) { var n = this.scales,
                        i = this.coord,
                        o = n[0],
                        a = n[1],
                        s = void 0,
                        u = void 0,
                        c = void 0; if (r.isNil(t) || r.isNil(e)) return []; if (r.isArray(e) && r.isArray(t)) { s = [], u = []; for (var l = 0, h = 0; l < t.length && h < e.length; l++, h++) c = i.convertPoint({ x: o.scale(t[l]), y: a.scale(e[h]) }), s.push(c.x), u.push(c.y) } else if (r.isArray(e)) t = o.scale(t), u = [], r.each(e, function(e) { e = a.scale(e), c = i.convertPoint({ x: t, y: e }), s && s !== c.x ? (r.isArray(s) || (s = [s]), s.push(c.x)) : s = c.x, u.push(c.y) });
                    else if (r.isArray(t)) e = a.scale(e), s = [], r.each(t, function(t) { t = o.scale(t), c = i.convertPoint({ x: t, y: e }), u && u !== c.y ? (r.isArray(u) || (u = [u]), u.push(c.y)) : u = c.y, s.push(c.x) });
                    else { t = o.scale(t), e = a.scale(e); var f = i.convertPoint({ x: t, y: e });
                        s = f.x, u = f.y } return [s, u] }, e }(n(23));
        t.exports = i }, function(t, e, n) { var r = { default: n(171), dark: n(387) };
        t.exports = r }, function(t, e, n) { var r, i, o = n(0),
            a = n(171),
            s = o.deepMix({}, a, { background: { fill: "#1F1F1F", radius: 2 }, plotBackground: { fill: "#1F1F1F" }, axis: { top: { label: { textStyle: { fill: "#A6A6A6" } }, line: { stroke: "#737373" }, tickLine: { stroke: "#737373" } }, bottom: { label: { textStyle: { fill: "#A6A6A6" } }, line: { stroke: "#737373" }, tickLine: { stroke: "#737373" } }, left: { label: { textStyle: { fill: "#A6A6A6" } }, grid: { lineStyle: { stroke: "#404040" } } }, right: { label: { textStyle: { fill: "#A6A6A6" } }, grid: { lineStyle: { stroke: "#404040" } } }, circle: { label: { textStyle: { fill: "#A6A6A6" } }, line: { stroke: "#737373" }, tickLine: { stroke: "#737373" }, grid: { lineStyle: { stroke: "#404040" } } }, radius: { label: { textStyle: { fill: "#A6A6A6" } }, line: { stroke: "#737373" }, tickLine: { stroke: "#737373" }, grid: { lineStyle: { stroke: "#404040" } } }, helix: { line: { stroke: "#737373" }, tickLine: { stroke: "#737373" } } }, label: { textStyle: { fill: "#A6A6A6" } }, legend: { right: { textStyle: { fill: "#737373" }, unCheckColor: "#bfbfbf" }, left: { textStyle: { fill: "#737373" }, unCheckColor: "#bfbfbf" }, top: { textStyle: { fill: "#737373" }, unCheckColor: "#bfbfbf" }, bottom: { textStyle: { fill: "#737373" }, unCheckColor: "#bfbfbf" }, html: (r = {}, r["g2-legend"] = { color: "#D9D9D9" }, r), gradient: { textStyle: { fill: "#D9D9D9" }, lineStyle: { stroke: "#404040" } } }, tooltip: (i = {}, i["g2-tooltip"] = { color: "#D9D9D9" }, i), tooltipCrosshairsRect: { type: "rect", style: { fill: "#fff", opacity: .1 } }, tooltipCrosshairsLine: { style: { stroke: "rgba(255, 255, 255, 0.45)" } }, guide: { line: { text: { style: { fill: "#A6A6A6" } } }, text: { style: { fill: "#A6A6A6" } }, region: { style: { lineWidth: 0, fill: "#000", fillOpacity: .04 } } } });
        t.exports = s }, function(t, e, n) { var r = n(35);
        r.Stack = n(389), r.Jitter = n(390), r.Symmetric = n(391), r.Dodge = n(392), t.exports = r }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.assign(e, { height: null, size: 10, reverseOrder: !1, adjustNames: ["y"] }) }, e.prototype.processOneDimStack = function(t) { var e = this.xField,
                        n = this.yField || "y",
                        r = this.height,
                        i = {};
                    this.reverseOrder && (t = t.slice(0).reverse()); for (var o = 0; o < t.length; o++)
                        for (var a = t[o], s = 0; s < a.length; s++) { var u = a[s],
                                c = 2 * (u.size || this.size) / r,
                                l = u[e];
                            i[l] || (i[l] = c / 2), u[n] = i[l], i[l] += c } }, e.prototype.processAdjust = function(t) { this.yField ? this.processStack(t) : this.processOneDimStack(t) }, e.prototype.processStack = function(t) { var e = this.xField,
                        n = this.yField,
                        i = t.length,
                        o = { positive: {}, negative: {} };
                    this.reverseOrder && (t = t.slice(0).reverse()); for (var a = 0; a < i; a++)
                        for (var s = t[a], u = 0; u < s.length; u++) { var c = s[u],
                                l = c[e] || 0,
                                h = c[n] || 0,
                                f = l.toString(),
                                p = (h = r.isArray(h) ? h[1] : h) >= 0 ? "positive" : "negative";
                            o[p][f] || (o[p][f] = 0), c[n] = [o[p][f], h + o[p][f]], o[p][f] += h } }, e }(n(35));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getAdjustOffset = function(t, e) { var n = e - t; return t + .05 * n + .9 * n * Math.random() }, e.prototype._adjustGroup = function(t, e, n, i) { var o = this,
                        a = o.getAdjustRange(e, n, i);
                    r.each(t, function(t) { t[e] = o.getAdjustOffset(a.pre, a.next) }) }, e.prototype.adjustDim = function(t, e, n) { var i = this,
                        o = i.groupData(n, t);
                    r.each(o, function(n, r) { r = parseFloat(r), i._adjustGroup(n, t, r, e) }) }, e }(n(35));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.assign(e, { cacheMax: null, adjustNames: ["y"] }) }, e.prototype._getMax = function(t) { var e = this.mergeData,
                        n = r.maxBy(e, function(e) { var n = e[t]; return r.isArray(n) ? Math.max.apply(null, n) : n })[t]; return r.isArray(n) ? Math.max.apply(null, n) : n }, e.prototype._getXValuesMax = function() { var t = this.yField,
                        e = this.xField,
                        n = {},
                        i = this.mergeData; return r.each(i, function(i) { var o = i[e],
                            a = i[t],
                            s = r.isArray(a) ? Math.max.apply(null, a) : a;
                        n[o] = n[o] || 0, n[o] < s && (n[o] = s) }), n }, e.prototype.processAdjust = function(t) { var e = r.Array.merge(t);
                    this.mergeData = e, this._processSymmetric(t), this.mergeData = null }, e.prototype._processSymmetric = function(t) { var e = this.xField,
                        n = this.yField,
                        i = this._getMax(n),
                        o = t[0][0],
                        a = void 0;
                    o && r.isArray(o[n]) && (a = this._getXValuesMax()), r.each(t, function(t) { r.each(t, function(t) { var o = t[n],
                                s = void 0; if (r.isArray(o)) { var u = t[e],
                                    c = a[u];
                                s = (i - c) / 2; var l = [];
                                r.each(o, function(t) { l.push(s + t) }), t[n] = l } else s = (i - o) / 2, t[n] = [s, o + s] }) }) }, e }(n(35));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = n(35),
            o = n(1),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.assign(e, { marginRatio: .5, dodgeRatio: o.widthRatio.column, dodgeBy: null }) }, e.prototype.processAdjust = function(t) { var e = r.Array.merge(t),
                        n = this.dodgeBy,
                        i = t;
                    n && (i = r.Array.group(e, n)), this.cacheMap = {}, this.adjDataArray = i, this.mergeData = e, this.adjustData(i, e), this.adjDataArray = null, this.mergeData = null }, e.prototype.getDistribution = function(t) { var e = this.adjDataArray,
                        n = this.cacheMap,
                        i = n[t]; return i || (i = {}, r.each(e, function(e, n) { var o = r.Array.values(e, t);
                        o.length || o.push(0), r.each(o, function(t) { i[t] || (i[t] = []), i[t].push(n) }) }), n[t] = i), i }, e.prototype.adjustDim = function(t, e, n, i, o) { var a = this,
                        s = a.getDistribution(t),
                        u = a.groupData(n, t);
                    r.each(u, function(n, i) { i = parseFloat(i); var u = void 0;
                        u = 1 === e.length ? { pre: e[0] - 1, next: e[0] + 1 } : a.getAdjustRange(t, i, e), r.each(n, function(e) { var n = e[t],
                                r = s[n],
                                i = r.indexOf(o);
                            e[t] = a.getDodgeOffset(u, i, r.length) }) }) }, e.prototype.getDodgeOffset = function(t, e, n) { var r = t.pre,
                        i = t.next,
                        o = i - r,
                        a = o * this.dodgeRatio / n,
                        s = this.marginRatio * a; return (r + i) / 2 + (.5 * (o - n * a - (n - 1) * s) + ((e + 1) * a + e * s) - .5 * a - .5 * o) }, e }(i);
        t.exports = a }, function(t, e, n) { var r = n(172),
            i = n(174),
            o = n(396),
            a = { getLabelsClass: function(t) { var e = r; return "polar" === t ? e = i : "theta" === t && (e = o), e } };
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(173);
        t.exports = { renderLabels: function() { var t = this.get("label"); if (!r.isNil(t)) { r.isNil(t.items) && (t.items = []); var e = this.addGroup(i, t);
                    this.set("labelsGroup", e) } }, resetLabels: function(t) { var e = this,
                    n = e.get("label"); if (n) { var i = e.get("labelsGroup"),
                        o = i.getLabels(),
                        a = o.length;
                    t = t || n.items, r.each(t, function(t, n) { if (n < a) { var r = o[n];
                            i.changeLabel(r, t) } else { var s = e.addLabel(t.text, t);
                            s && (s._id = t._id, s.set("coord", t.coord)) } }); for (var s = a - 1; s >= t.length; s--) o[s].remove() } }, addLabel: function(t, e) { var n = this.get("labelsGroup"),
                    r = {},
                    i = void 0; return n && (r.text = t, r.x = e.x, r.y = e.y, r.point = e, r.textAlign = e.textAlign, e.rotate && (r.rotate = e.rotate), i = n.addLabel(r)), i }, removeLabels: function() { var t = this.get("labelsGroup");
                t && t.remove(), this.set("labelsGroup", null) } } }, function(t, e, n) { var r = n(2).MatrixUtil.vec2;
        t.exports = { catmullRom2bezier: function(t, e, n) { for (var i = !!e, o = [], a = 0, s = t.length; a < s; a += 2) o.push([t[a], t[a + 1]]); for (var u = function(t, e, n, i) { var o = [],
                            a = void 0,
                            s = void 0,
                            u = !!i,
                            c = void 0,
                            l = void 0; if (u) { c = [1 / 0, 1 / 0], l = [-1 / 0, -1 / 0]; for (var h = 0, f = t.length; h < f; h++) { var p = t[h];
                                c = r.min([], c, p), l = r.max([], l, p) } c = r.min([], c, i[0]), l = r.max([], l, i[1]) } for (var g = 0, d = t.length; g < d; g++) { var y = t[g]; if (n) a = t[g ? g - 1 : d - 1], s = t[(g + 1) % d];
                            else { if (0 === g || g === d - 1) { o.push(y); continue } a = t[g - 1], s = t[g + 1] } var v = [];
                            v = r.sub(v, s, a), v = r.scale(v, v, e); var x = r.distance(y, a),
                                m = r.distance(y, s),
                                b = x + m;
                            0 !== b && (x /= b, m /= b); var _ = r.scale([], v, -x),
                                w = r.scale([], v, m),
                                S = r.add([], y, _),
                                M = r.add([], y, w);
                            u && (S = r.max([], S, c), S = r.min([], S, l), M = r.max([], M, c), M = r.min([], M, l)), o.push(S), o.push(M) } return n && o.push(o.shift()), o }(o, .4, i, n), c = o.length, l = [], h = void 0, f = void 0, p = void 0, g = 0; g < c - 1; g++) h = u[2 * g], f = u[2 * g + 1], p = o[g + 1], l.push(["C", h[0], h[1], f[0], f[1], p[0], p[1]]); return i && (h = u[c], f = u[c + 1], p = o[0], l.push(["C", h[0], h[1], f[0], f[1], p[0], p[1]])), l } } }, function(t, e, n) {
        function r(t, e, n) { return { x: t.x + n * Math.cos(e), y: t.y + n * Math.sin(e) } } var i = n(0),
            o = n(174),
            a = n(19),
            s = n(1),
            u = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { label: s.thetaLabels } }, e.prototype.adjustItems = function(t) { var e = this.getDefaultOffset(); return e > 0 && (t = this._distribute(t, e)), t }, e.prototype._distribute = function(t, e) { var n = this.get("coord"),
                        r = n.getRadius(),
                        i = this.get("label").labelHeight,
                        o = n.getCenter(),
                        a = 2 * (r + e) + 2 * i,
                        s = { start: n.start, end: n.end },
                        u = this.get("geom"); if (u) { var c = u.get("view");
                        s = c.getViewRegion() } var l = [
                        [],
                        []
                    ]; return t.forEach(function(t) { "right" === t.textAlign ? l[0].push(t) : l[1].push(t) }), l.forEach(function(t, e) { var n = parseInt(a / i, 10);
                        t.length > n && (t.sort(function(t, e) { return e["..percent"] - t["..percent"] }), t.splice(n, t.length - n)), t.sort(function(t, e) { return t.y - e.y }),
                            function(t, e, n, r, i) { var o = !0,
                                    a = n.start,
                                    s = n.end,
                                    u = Math.min(a.y, s.y),
                                    c = Math.abs(a.y - s.y),
                                    l = void 0,
                                    h = 0,
                                    f = Number.MIN_VALUE,
                                    p = t.map(function(t) { return t.y > h && (h = t.y), t.y < f && (f = t.y), { size: e, targets: [t.y - u] } }); for (f -= u, h - u > c && (c = h - u); o;)
                                    for (p.forEach(function(t) { var e = (Math.min.apply(f, t.targets) + Math.max.apply(f, t.targets)) / 2;
                                            t.pos = Math.min(Math.max(f, e - t.size / 2), c - t.size) }), o = !1, l = p.length; l--;)
                                        if (l > 0) { var g = p[l - 1],
                                                d = p[l];
                                            g.pos + g.size > d.pos && (g.size += d.size, g.targets = g.targets.concat(d.targets), g.pos + g.size > c && (g.pos = c - g.size), p.splice(l, 1), o = !0) }
                                l = 0, p.forEach(function(n) { var r = u + e / 2;
                                    n.targets.forEach(function() { t[l].y = n.pos + r, r += e, l++ }) }), t.forEach(function(t) { var e = t.r * t.r,
                                        n = Math.pow(Math.abs(t.y - r.y), 2); if (e < n) t.x = r.x;
                                    else { var o = Math.sqrt(e - n);
                                        t.x = i ? r.x + o : r.x - o } }) }(t, i, s, o, e) }), l[0].concat(l[1]) }, e.prototype.lineToLabel = function(t, e) { var n = this.get("coord"),
                        o = n.getRadius(),
                        a = this.getDefaultOffset(),
                        s = t.orignAngle || t.angle,
                        u = n.getCenter(),
                        c = r(u, s, o + 2.5),
                        l = r(u, s, o + a / 2),
                        h = this.get("lineGroup");
                    h || (h = this.addGroup({ elCls: "x-line-group" }), this.set("lineGroup", h)); var f = h.addShape("path", { attrs: i.mix({ path: ["M" + c.x, c.y + " Q" + l.x, l.y + " " + t.x, t.y].join(","), fill: null, stroke: t.color }, e) });
                    f.name = "labelLine", f._id = t._id && t._id.replace("glabel", "glabelline"), f.set("coord", n) }, e.prototype.getLabelRotate = function(t, e) { var n = void 0; return e < 0 && ((n = 180 * t / Math.PI) > 90 && (n -= 180), n < -90 && (n += 180)), n / 180 * Math.PI }, e.prototype.getLabelAlign = function(t) { var e = this.get("coord").getCenter(),
                        n = void 0;
                    n = t.angle <= Math.PI / 2 && t.x >= e.x ? "left" : "right"; return this.getDefaultOffset() <= 0 && (n = "right" === n ? "left" : "right"), n }, e.prototype.getArcPoint = function(t) { return t }, e.prototype.getPointAngle = function(t) { var e = this.get("coord"),
                        n = { x: i.isArray(t.x) ? t.x[0] : t.x, y: t.y[0] },
                        r = { x: i.isArray(t.x) ? t.x[1] : t.x, y: t.y[1] },
                        o = void 0,
                        s = a.getPointAngle(e, n); if (t.points && t.points[0].y === t.points[1].y) o = s;
                    else { var u = a.getPointAngle(e, r);
                        s >= u && (u += 2 * Math.PI), o = s + (u - s) / 2 } return o }, e.prototype.getCirclePoint = function(t, e) { var n = this.get("coord"),
                        i = n.getCenter(),
                        o = n.getRadius() + e,
                        a = r(i, t, o); return a.angle = t, a.r = o, a }, e }(o);
        t.exports = u }, function(t, e, n) {
        function r(t) { var e = l.shape.hollowArea; return s.mix({}, e, { stroke: t.color, lineWidth: t.size, strokeOpacity: t.opacity }, t.style) }

        function i(t) { var e = l.shape.area; return s.mix({}, e, { fill: t.color, stroke: t.color, lineWidth: t.size, fillOpacity: t.opacity }, t.style) }

        function o(t, e) { var n = [],
                r = [],
                i = [],
                o = [],
                a = t.isInCircle; return s.each(t.points, function(t) { i.push(t[0]), o.push(t[1]) }), o = o.reverse(), r.push(i, o), s.each(r, function(t, r) { var i = []; if (i = e ? c.getSplinePath(t, !1) : c.getLinePath(t, !1), a) { var o = t[0];
                    i.push(["L", o.x, o.y]) } else r > 0 && (i[0][0] = "L");
                n = n.concat(i) }), n.push(["Z"]), n }

        function a(t) { return { symbol: function(t, e, n, r) { r.save(), r.lineWidth = 2, r.strokeStyle = r.fillStyle, r.moveTo(t - 5.5, e - 4), r.lineTo(t + 5.5, e - 4), r.stroke(), r.restore(), r.moveTo(t - 5.5, e - 4), r.lineTo(t + 5.5, e - 4), r.lineTo(t + 5.5, e + 4), r.lineTo(t - 5.5, e + 4), r.closePath() }, radius: 5, fill: t.color, fillOpacity: .3 } } var s = n(0),
            u = n(14),
            c = n(19),
            l = n(1),
            h = u.registerFactory("area", { defaultShapeType: "area", getDefaultPoints: function(t) { var e = [],
                        n = t.x,
                        r = t.y,
                        i = t.y0; return r = s.isArray(r) ? r : [i, r], s.each(r, function(t) { e.push({ x: n, y: t }) }), e }, getActiveCfg: function(t, e) { return function(t, e) { if ("line" === t || "smoothLine" === t) return { lineWidth: (e.lineWidth || 0) + 1 }; var n = e.fillOpacity || e.opacity || 1; return { fillOpacity: n - .15, strokeOpacity: n - .15 } }(t, e) }, drawShape: function(t, e, n) { var r = this.getShape(t),
                        i = void 0; return (i = 1 === e.points.length && l.showSinglePoint ? function(t, e, n) { var r = t._coord.convertPoint(e.points[0][1]); return n.addShape("circle", { attrs: s.mix({ x: r.x, y: r.y, r: 2, fill: e.color }, e.style) }) }(this, e, n) : r.draw(e, n)) && (i.set("origin", e.origin), i._id = e.splitedIndex ? e._id + e.splitedIndex : e._id, i.name = this.name), i }, getSelectedCfg: function(t, e) { return e && e.style ? e.style : this.getActiveCfg(t, e) } });
        u.registerShape("area", "area", { draw: function(t, e) { var n = i(t),
                    r = o(t, !1); return r = this.parsePath(r, !1), e.addShape("path", { attrs: s.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { return a(t) } }), u.registerShape("area", "smooth", { draw: function(t, e) { var n = i(t),
                    r = this._coord;
                t.constraint = [
                    [r.start.x, r.end.y],
                    [r.end.x, r.start.y]
                ]; var a = o(t, !0); return a = this.parsePath(a, !1), e.addShape("path", { attrs: s.mix(n, { path: a }) }) }, getMarkerCfg: function(t) { return a(t) } }), u.registerShape("area", "line", { draw: function(t, e) { var n = r(t),
                    i = o(t, !1); return i = this.parsePath(i, !1), e.addShape("path", { attrs: s.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return a(t) } }), u.registerShape("area", "smoothLine", { draw: function(t, e) { var n = r(t),
                    i = o(t, !0); return i = this.parsePath(i, !1), e.addShape("path", { attrs: s.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return a(t) } }), h.spline = h.smooth, t.exports = h }, function(t, e, n) {
        function r(t) { var e = c.shape.edge; return a.mix({}, e, { stroke: t.color, lineWidth: t.size, strokeOpacity: t.opacity, opacity: t.opacity }, t.style) }

        function i(t, e) { var n = [];
            n.push({ x: t.x, y: .5 * t.y + 1 * e.y / 2 }), n.push({ y: .5 * t.y + 1 * e.y / 2, x: e.x }), n.push(e); var r = ["C"]; return a.each(n, function(t) { r.push(t.x, t.y) }), r }

        function o(t, e) { var n = [];
            n.push({ x: e.x, y: e.y }), n.push(t); var r = ["Q"]; return a.each(n, function(t) { r.push(t.x, t.y) }), r } var a = n(0),
            s = n(14),
            u = n(94),
            c = n(1),
            l = n(19),
            h = 1 / 3,
            f = s.registerFactory("edge", { defaultShapeType: "line", getDefaultPoints: function(t) { return u.splitPoints(t) }, getActiveCfg: function(t, e) { return { lineWidth: (e.lineWidth || 0) + 1 } } });
        s.registerShape("edge", "line", { draw: function(t, e) { var n = this.parsePoints(t.points),
                    i = r(t),
                    o = l.getLinePath(n); return e.addShape("path", { attrs: a.mix(i, { path: o }) }) }, getMarkerCfg: function(t) { return a.mix({ symbol: "circle", radius: 4.5 }, r(t)) } }), s.registerShape("edge", "vhv", { draw: function(t, e) { var n = t.points,
                    i = r(t),
                    o = function(t, e) { var n = [];
                        n.push({ y: t.y * (1 - h) + e.y * h, x: t.x }), n.push({ y: t.y * (1 - h) + e.y * h, x: e.x }), n.push(e); var r = [
                            ["M", t.x, t.y]
                        ]; return a.each(n, function(t) { r.push(["L", t.x, t.y]) }), r }(n[0], n[1]);
                o = this.parsePath(o); return e.addShape("path", { attrs: a.mix(i, { path: o }) }) }, getMarkerCfg: function(t) { return a.mix({ symbol: "circle", radius: 4.5 }, r(t)) } }), s.registerShape("edge", "smooth", { draw: function(t, e) { var n = t.points,
                    o = r(t),
                    s = function(t, e) { var n = i(t, e),
                            r = [
                                ["M", t.x, t.y]
                            ]; return r.push(n), r }(n[0], n[1]);
                s = this.parsePath(s); return e.addShape("path", { attrs: a.mix(o, { path: s }) }) }, getMarkerCfg: function(t) { return a.mix({ symbol: "circle", radius: 4.5 }, r(t)) } }), s.registerShape("edge", "arc", { draw: function(t, e) { var n = t.points,
                    s = n.length > 2 ? "weight" : "normal",
                    u = r(t),
                    c = void 0,
                    l = void 0; if (t.isInCircle) { var h = { x: 0, y: 1 }; "normal" === s ? l = function(t, e, n) { var r = o(e, n),
                            i = [
                                ["M", t.x, t.y]
                            ]; return i.push(r), i }(n[0], n[1], h) : (u.fill = u.stroke, l = function(t, e) { var n = o(t[1], e),
                            r = o(t[3], e),
                            i = [
                                ["M", t[0].x, t[0].y]
                            ]; return i.push(r), i.push(["L", t[3].x, t[3].y]), i.push(["L", t[2].x, t[2].y]), i.push(n), i.push(["L", t[1].x, t[1].y]), i.push(["L", t[0].x, t[0].y]), i.push(["Z"]), i }(n, h)), l = this.parsePath(l), c = e.addShape("path", { attrs: a.mix(u, { path: l }) }) } else if ("normal" === s) n = this.parsePoints(n), c = e.addShape("arc", { attrs: a.mix(u, { x: (n[1].x + n[0].x) / 2, y: n[0].y, r: Math.abs(n[1].x - n[0].x) / 2, startAngle: Math.PI, endAngle: 2 * Math.PI }) });
                else { l = [
                        ["M", n[0].x, n[0].y],
                        ["L", n[1].x, n[1].y]
                    ]; var f = i(n[1], n[3]),
                        p = i(n[2], n[0]);
                    l.push(f), l.push(["L", n[3].x, n[3].y]), l.push(["L", n[2].x, n[2].y]), l.push(p), l.push(["Z"]), l = this.parsePath(l), u.fill = u.stroke, c = e.addShape("path", { attrs: a.mix(u, { path: l }) }) } return c }, getMarkerCfg: function(t) { return a.mix({ symbol: "circle", radius: 4.5 }, r(t)) } }), t.exports = f }, function(t, e, n) {
        function r(t, e) { var n = t.x,
                r = t.y,
                i = t.y0,
                o = t.size,
                a = i,
                s = r;
            c.isArray(r) && (s = r[1], a = r[0]); var u = void 0,
                l = void 0;
            c.isArray(n) ? (u = n[0], l = n[1]) : (u = n - o / 2, l = n + o / 2); var h = []; return h.push({ x: u, y: a }, { x: u, y: s }), e ? h.push({ x: l, y: (s + a) / 2 }) : h.push({ x: l, y: s }, { x: l, y: a }), h }

        function i(t) { for (var e = [], n = 0; n < t.length; n++) { var r = t[n]; if (r) { var i = 0 === n ? "M" : "L";
                    e.push([i, r.x, r.y]) } } var o = t[0]; return e.push(["L", o.x, o.y]), e.push(["z"]), e }

        function o(t) { var e = f.shape.interval; return c.mix({}, e, { fill: t.color, stroke: t.color, fillOpacity: t.opacity }, t.style) }

        function a(t) { var e = f.shape.hollowInterval; return c.mix({}, e, { stroke: t.color, strokeOpacity: t.opacity }, t.style) }

        function s(t, e) { var n = [],
                r = t.points,
                i = t.nextPoints; return c.isNil(i) ? e ? n.push(["M", r[0].x, r[0].y], ["L", r[1].x, r[1].y], ["L", r[2].x, r[2].y], ["L", r[3].x, r[3].y], ["Z"]) : n.push(["M", r[0].x, r[0].y], ["L", r[1].x, r[1].y], ["L", r[2].x, r[2].y], ["Z"]) : n.push(["M", r[0].x, r[0].y], ["L", r[1].x, r[1].y], ["L", i[1].x, i[1].y], ["L", i[0].x, i[0].y], ["Z"]), n }

        function u(t, e) { var n = e.geom.get("coord"),
                r = e.point,
                i = void 0; if (n && "theta" === n.type) { var o = function(t, e) { var n = e.getRadius(),
                            r = void 0,
                            i = void 0,
                            o = n * e.innerRadius,
                            a = void 0,
                            s = void 0; return !c.isArray(t.x) && c.isArray(t.y) && (t.x = [t.x, t.x]), c.isArray(t.x) ? (a = { x: t.x[0], y: t.y[0] }, s = { x: t.x[1], y: t.y[1] }, r = h.getPointAngle(e, a), (i = h.getPointAngle(e, s)) <= r && (i += 2 * Math.PI)) : (s = t, r = e.startAngle, i = h.getPointAngle(e, s)), { r: n, ir: o, startAngle: r, endAngle: i } }(r, n),
                    a = (o.endAngle - o.startAngle) / 2 + o.startAngle;
                i = { transform: [
                        ["t", 7.5 * Math.cos(a), 7.5 * Math.sin(a)]
                    ] } } return c.mix({}, i) } var c = n(0),
            l = n(14),
            h = n(19),
            f = n(1),
            p = l.registerFactory("interval", { defaultShapeType: "rect", getActiveCfg: function(t, e) { if (!t || c.inArray(["rect", "funnel", "pyramid"], t)) { return { fillOpacity: (e.fillOpacity || e.opacity || 1) - .15 } } return { lineWidth: (e.lineWidth || 0) + 1 } }, getDefaultPoints: function(t) { return r(t) }, getSelectedCfg: function(t, e) { return u(0, e) } });
        l.registerShape("interval", "rect", { draw: function(t, e) { var n = o(t),
                    r = i(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: c.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { var e = o(t),
                    n = t.isInCircle; return c.mix({ symbol: n ? "circle" : "square", radius: n ? 4.5 : 4 }, e) } }), l.registerShape("interval", "hollowRect", { draw: function(t, e) { var n = a(t),
                    r = i(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: c.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { var e = a(t),
                    n = t.isInCircle; return c.mix({ symbol: n ? "circle" : "square", radius: n ? 4.5 : 4 }, e) } }), l.registerShape("interval", "line", { getPoints: function(t) { return function(t) { var e = t.x,
                        n = t.y,
                        r = t.y0,
                        i = []; return c.isArray(n) ? c.each(n, function(t, n) { i.push({ x: c.isArray(e) ? e[n] : e, y: t }) }) : i.push({ x: e, y: n }, { x: e, y: r }), i }(t) }, draw: function(t, e) { var n = a(t);
                n.lineWidth = t.size || 1; var r = i(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: c.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { var e = a(t); return c.mix({ symbol: "line", radius: 5 }, e) } }), l.registerShape("interval", "tick", { getPoints: function(t) { return function(t) { var e = t.x,
                        n = c.isArray(t.y) ? t.y[1] : t.y,
                        r = c.isArray(t.y) ? t.y[0] : t.y0,
                        i = t.size,
                        o = []; return o.push({ x: e - i / 2, y: n }, { x: e + i / 2, y: n }, { x: e, y: n }, { x: e, y: r }, { x: e - i / 2, y: r }, { x: e + i / 2, y: r }), o }(t) }, draw: function(t, e) { var n = a(t),
                    r = function(t) { var e = []; return e.push(["M", t[0].x, t[0].y], ["L", t[1].x, t[1].y], ["M", t[2].x, t[2].y], ["L", t[3].x, t[3].y], ["M", t[4].x, t[4].y], ["L", t[5].x, t[5].y]), e }(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: c.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { var e = a(t); return c.mix({ symbol: "tick", radius: 5 }, e) } }), l.registerShape("interval", "funnel", { getPoints: function(t) { return t.size = 2 * t.size, r(t) }, draw: function(t, e) { var n = o(t),
                    r = s(t, !0); return r = this.parsePath(r), e.addShape("path", { attrs: c.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { var e = o(t); return c.mix({ symbol: "square", radius: 4 }, e) } }), l.registerShape("interval", "pyramid", { getPoints: function(t) { return t.size = 2 * t.size, r(t, !0) }, draw: function(t, e) { var n = o(t),
                    r = s(t, !1); return r = this.parsePath(r), e.addShape("path", { attrs: c.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { var e = o(t); return c.mix({ symbol: "square", radius: 4 }, e) } }), t.exports = p }, function(t, e, n) {
        function r(t) { var e = g.shape.line; return l.mix({}, e, { stroke: t.color, lineWidth: t.size, strokeOpacity: t.opacity, opacity: t.opacity }, t.style) }

        function i(t) { var e = g.shape.line; return l.mix({}, e, { stroke: t.color, lineWidth: 2, strokeOpacity: t.opacity, opacity: t.opacity, radius: 6 }, t.style) }

        function o(t, e, n, r) { var i = void 0; if (e) { var o = n ? null : r.constraint;
                i = h.getSplinePath(t, !1, o) } else i = h.getLinePath(t, !1); return n && i.push(["Z"]), i }

        function a(t, e) { var n = t.points,
                r = t.isInCircle,
                i = n[0]; return l.isArray(i.y) ? function(t, e, n, r) { for (var i = [], a = r.isStack, s = [], u = 0; u < t.length; u++) { var c = t[u],
                        l = f.splitPoints(c);
                    s.push(l[0]), i.push(l[1]) } var h = o(i, e, n, r),
                    p = o(s, e, n, r); return a ? h : h.concat(p) }(n, e, r, t) : o(n, e, r, t) }

        function s(t, e) { return function(t) { var e = []; return l.each(t, function(t, n) { var r = 0 === n ? ["M", t.x, t.y] : ["L", t.x, t.y];
                    e.push(r) }), e }(function(t, e) { var n = []; return l.each(t, function(r, i) { var o = t[i + 1];
                    n.push(r), o && (n = n.concat(e(r, o))) }), n }(t.points, e)) }

        function u(t, e) { return l.mix({ symbol: e ? function(t, e, n, r) { r.moveTo(t - n, e), r.arcTo(t - n / 2, e - n / 2, t, e, n / 2), r.lineTo(t, e), r.arcTo(t + n / 2, e + n / 2, t + n, e - n / 2, n / 2) } : function(t, e, n, r) { r.moveTo(t - n, e), r.lineTo(t + n, e) } }, i(t)) }

        function c(t, e) { return l.mix({ symbol: e }, i(t)) } var l = n(0),
            h = n(19),
            f = n(94),
            p = n(14),
            g = n(1),
            d = [1, 1],
            y = [5.5, 1],
            v = p.registerFactory("line", { defaultShapeType: "line", getMarkerCfg: function(t, e) { return (v[t] || v.line).getMarkerCfg(e) }, getActiveCfg: function(t, e) { return { lineWidth: (e.lineWidth || 0) + 1 } }, getDefaultPoints: function(t) { return f.splitPoints(t) }, drawShape: function(t, e, n) { var r = this.getShape(t),
                        i = void 0; return (i = 1 === e.points.length && g.showSinglePoint ? function(t, e, n) { var r = e.points[0]; return n.addShape("circle", { attrs: l.mix({ x: r.x, y: r.y, r: 2, fill: e.color }, e.style) }) }(0, e, n) : r.draw(e, n)) && (i.set("origin", e.origin), i._id = e.splitedIndex ? e._id + e.splitedIndex : e._id, i.name = this.name), i } });
        p.registerShape("line", "line", { draw: function(t, e) { var n = r(t),
                    i = a(t, !1); return e.addShape("path", { attrs: l.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return u(t) } }), p.registerShape("line", "dot", { draw: function(t, e) { var n = r(t),
                    i = a(t, !1); return e.addShape("path", { attrs: l.mix(n, { path: i, lineDash: d }) }) }, getMarkerCfg: function(t) { var e = u(t, !1); return e.lineDash = d, e } }), p.registerShape("line", "dash", { draw: function(t, e) { var n = r(t),
                    i = a(t, !1); return e.addShape("path", { attrs: l.mix(n, { path: i, lineDash: y }) }) }, getMarkerCfg: function(t) { var e = u(t, !1); return e.lineDash = y, e } }), p.registerShape("line", "smooth", { draw: function(t, e) { var n = r(t),
                    i = this._coord;
                t.constraint = [
                    [i.start.x, i.end.y],
                    [i.end.x, i.start.y]
                ]; var o = a(t, !0); return e.addShape("path", { attrs: l.mix(n, { path: o }) }) }, getMarkerCfg: function(t) { return u(t, !0) } }), p.registerShape("line", "hv", { draw: function(t, e) { var n = r(t),
                    i = s(t, function(t, e) { var n = []; return n.push({ x: e.x, y: t.y }), n }); return e.addShape("path", { attrs: l.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return c(t, function(t, e, n, r) { r.moveTo(t - n - 1, e - 2.5), r.lineTo(t, e - 2.5), r.lineTo(t, e + 2.5), r.lineTo(t + n + 1, e + 2.5) }) } }), p.registerShape("line", "vh", { draw: function(t, e) { var n = r(t),
                    i = s(t, function(t, e) { var n = []; return n.push({ x: t.x, y: e.y }), n }); return e.addShape("path", { attrs: l.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return c(t, function(t, e, n, r) { r.moveTo(t - n - 1, e + 2.5), r.lineTo(t, e + 2.5), r.lineTo(t, e - 2.5), r.lineTo(t + n + 1, e - 2.5) }) } }), p.registerShape("line", "hvh", { draw: function(t, e) { var n = r(t),
                    i = s(t, function(t, e) { var n = [],
                            r = (e.x - t.x) / 2 + t.x; return n.push({ x: r, y: t.y }), n.push({ x: r, y: e.y }), n }); return e.addShape("path", { attrs: l.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return c(t, function(t, e, n, r) { r.moveTo(t - (n + 1), e + 2.5), r.lineTo(t - n / 2, e + 2.5), r.lineTo(t - n / 2, e - 2.5), r.lineTo(t + n / 2, e - 2.5), r.lineTo(t + n / 2, e + 2.5), r.lineTo(t + n + 1, e + 2.5) }) } }), p.registerShape("line", "vhv", { draw: function(t, e) { var n = r(t),
                    i = s(t, function(t, e) { var n = [],
                            r = (e.y - t.y) / 2 + t.y; return n.push({ x: t.x, y: r }), n.push({ x: e.x, y: r }), n }); return e.addShape("path", { attrs: l.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { return c(t, function(t, e, n, r) { r.moveTo(t - 5, e + 2.5), r.lineTo(t - 5, e), r.lineTo(t, e), r.lineTo(t, e - 3), r.lineTo(t, e + 3), r.lineTo(t + 6.5, e + 3) }) } }), v.spline = v.smooth, t.exports = v }, function(t, e, n) {
        function r(t) { var e = u.shape.point; return o.mix({}, e, { fill: t.color, fillOpacity: t.opacity, radius: t.size }, t.style) }

        function i(t) { var e = u.shape.hollowPoint; return o.mix({}, e, { stroke: t.color, strokeOpacity: t.opacity, radius: t.size }, t.style) } var o = n(0),
            a = n(94),
            s = n(2).Marker,
            u = n(1),
            c = n(14),
            l = ["cross", "tick", "plus", "hyphen", "line", "pointerLine", "pointerArrow"],
            h = Math.sqrt(3);
        o.mix(s.Symbols, { hexagon: function(t, e, n, r) { var i = n / 2 * h;
                r.moveTo(t, e - n), r.lineTo(t + i, e - n / 2), r.lineTo(t + i, e + n / 2), r.lineTo(t, e + n), r.lineTo(t - i, e + n / 2), r.lineTo(t - i, e - n / 2), r.closePath() }, bowtie: function(t, e, n, r) { var i = n - 1.5;
                r.moveTo(t - n, e - i), r.lineTo(t + n, e + i), r.lineTo(t + n, e - i), r.lineTo(t - n, e + i), r.closePath() }, cross: function(t, e, n, r) { r.moveTo(t - n, e - n), r.lineTo(t + n, e + n), r.moveTo(t + n, e - n), r.lineTo(t - n, e + n) }, tick: function(t, e, n, r) { r.moveTo(t - n / 2, e - n), r.lineTo(t + n / 2, e - n), r.moveTo(t, e - n), r.lineTo(t, e + n), r.moveTo(t - n / 2, e + n), r.lineTo(t + n / 2, e + n) }, plus: function(t, e, n, r) { r.moveTo(t - n, e), r.lineTo(t + n, e), r.moveTo(t, e - n), r.lineTo(t, e + n) }, hyphen: function(t, e, n, r) { r.moveTo(t - n, e), r.lineTo(t + n, e) }, line: function(t, e, n, r) { r.moveTo(t, e - n), r.lineTo(t, e + n) } }); var f = c.registerFactory("point", { defaultShapeType: "hollowCircle", getActiveCfg: function(t, e) { var n = e.radius,
                    r = void 0; return r = t && (0 === t.indexOf("hollow") || -1 !== o.indexOf(l, t)) || !t ? e.stroke || e.strokeStyle : e.fill || e.fillStyle, { radius: n + 1, shadowBlur: n, shadowColor: r, stroke: r, strokeStyle: r, strokeOpacity: 1, lineWidth: 1 } }, getDefaultPoints: function(t) { return a.splitPoints(t) } });
        c.registerShape("point", "rect", { draw: function(t, e) { var n = r(t),
                    i = function(t) { var e = t.points[0].x,
                            n = t.points[0].y,
                            r = t.size[0],
                            i = t.size[1]; return [
                            ["M", e - .5 * r, n - .5 * i],
                            ["L", e + .5 * r, n - .5 * i],
                            ["L", e + .5 * r, n + .5 * i],
                            ["L", e - .5 * r, n + .5 * i],
                            ["z"]
                        ] }(t);
                i = this.parsePath(i); return e.addShape("path", { attrs: o.mix(n, { path: i }) }) }, getMarkerCfg: function(t) { var e = r(t); return e.symbol = "rect", e.radius = 4.5, e } }), o.each(["circle", "square", "bowtie", "diamond", "hexagon", "triangle", "triangle-down"], function(t) { c.registerShape("point", t, { draw: function(e, n) { var i = r(e); return n.addShape("Marker", { attrs: o.mix(i, { symbol: t, x: e.x, y: e.y }) }) }, getMarkerCfg: function(e) { var n = r(e); return n.symbol = t, n.radius = 4.5, n } }), c.registerShape("point", "hollow" + o.upperFirst(t), { draw: function(e, n) { var r = i(e); return n.addShape("Marker", { attrs: o.mix(r, { symbol: t, x: e.x, y: e.y }) }) }, getMarkerCfg: function(e) { var n = i(e); return n.symbol = t, n.radius = 4.5, n } }) }), o.each(l, function(t) { c.registerShape("point", t, { draw: function(e, n) { var r = i(e); return n.addShape("Marker", { attrs: o.mix(r, { symbol: t, x: e.x, y: e.y }) }) }, getMarkerCfg: function(e) { var n = i(e); return n.symbol = t, n.radius = 4.5, n } }) }), t.exports = f }, function(t, e, n) {
        function r(t) { var e = s.shape.polygon; return o.mix({}, e, { stroke: t.color, fill: t.color, fillOpacity: t.opacity }, t.style) }

        function i(t) { var e = [],
                n = [t[0].x, t[0].y],
                r = 0,
                i = t[0]; return o.each(t, function(a, s) { var u = 0 === s ? ["M", a.x, a.y] : ["L", a.x, a.y]; if (e.push(u), r !== s && s < t.length - 1 && o.isEqualWith(n, [a.x, a.y])) { var c = t[s + 1];
                    e.push(["Z"]), e.push(["M", c.x, c.y]), i = c, r = s + 1, n = [c.x, c.y] } }), e.push(["L", i.x, i.y]), e.push(["Z"]), e } var o = n(0),
            a = n(14),
            s = n(1),
            u = a.registerFactory("polygon", { defaultShapeType: "polygon", getDefaultPoints: function(t) { var e = []; return o.each(t.x, function(n, r) { var i = t.y[r];
                        e.push({ x: n, y: i }) }), e }, getActiveCfg: function(t, e) { var n = e.lineWidth || 1; if ("hollow" === t) return { lineWidth: n + 1 }; return { fillOpacity: (e.fillOpacity || e.opacity || 1) - .08 } }, getSelectedCfg: function(t, e) { return e && e.style ? e.style : this.getActiveCfg(t, e) } });
        a.registerShape("polygon", "polygon", { draw: function(t, e) { if (!o.isEmpty(t.points)) { var n = r(t),
                        a = i(t.points); return a = this.parsePath(a), e.addShape("path", { attrs: o.mix(n, { path: a }) }) } }, getMarkerCfg: function(t) { return o.mix({ symbol: "square", radius: 4 }, r(t)) } }), a.registerShape("polygon", "hollow", { draw: function(t, e) { if (!o.isEmpty(t.points)) { var n = function(t) { var e = s.shape.hollowPolygon; return o.mix({}, e, { stroke: t.color, strokeOpacity: t.opacity }, t.style) }(t),
                        r = i(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: o.mix(n, { path: r }) }) } }, getMarkerCfg: function(t) { return o.mix({ symbol: "square", radius: 4 }, r(t)) } }), t.exports = u }, function(t, e, n) {
        function r(t) { a.isArray(t) || (t = [t]); var e = t[0],
                n = t[t.length - 1],
                r = t.length > 1 ? t[1] : e; return { min: e, max: n, min1: r, max1: t.length > 3 ? t[3] : n, median: t.length > 2 ? t[2] : r } }

        function i(t, e, n) { var i = [],
                o = void 0,
                s = void 0; return a.isArray(e) ? o = [
                    [t - n / 2, (s = r(e)).max],
                    [t + n / 2, s.max],
                    [t, s.max],
                    [t, s.max1],
                    [t - n / 2, s.min1],
                    [t - n / 2, s.max1],
                    [t + n / 2, s.max1],
                    [t + n / 2, s.min1],
                    [t, s.min1],
                    [t, s.min],
                    [t - n / 2, s.min],
                    [t + n / 2, s.min],
                    [t - n / 2, s.median],
                    [t + n / 2, s.median]
                ] : (e = e || .5, o = [
                    [(s = r(t)).min, e - n / 2],
                    [s.min, e + n / 2],
                    [s.min, e],
                    [s.min1, e],
                    [s.min1, e - n / 2],
                    [s.min1, e + n / 2],
                    [s.max1, e + n / 2],
                    [s.max1, e - n / 2],
                    [s.max1, e],
                    [s.max, e],
                    [s.max, e - n / 2],
                    [s.max, e + n / 2],
                    [s.median, e - n / 2],
                    [s.median, e + n / 2]
                ]),
                function(t, e) { a.each(t, function(t) { e.push({ x: t[0], y: t[1] }) }) }(o, i), i }

        function o(t, e, n) { var r = function(t) { a.isArray(t) || (t = [t]); var e = t.sort(function(t, e) { return t < e ? 1 : -1 }),
                    n = e.length; if (n < 4)
                    for (var r = e[n - 1], i = 0; i < 4 - n; i++) e.push(r); return e }(e); return [{ x: t, y: r[0] }, { x: t, y: r[1] }, { x: t - n / 2, y: r[2] }, { x: t - n / 2, y: r[1] }, { x: t + n / 2, y: r[1] }, { x: t + n / 2, y: r[2] }, { x: t, y: r[2] }, { x: t, y: r[3] }] } var a = n(0),
            s = n(14),
            u = n(1),
            c = s.registerFactory("schema", { defaultShapeType: "", getActiveCfg: function(t, e) { if ("box" === t) { return { lineWidth: (e.lineWidth || 1) + 1 } } var n = e.fillOpacity || e.opacity || 1; return { fillOpacity: n - .15, strokeOpacity: n - .15 } }, getSelectedCfg: function(t, e) { return e && e.style ? e.style : this.getActiveCfg(t, e) } });
        s.registerShape("schema", "box", { getPoints: function(t) { return i(t.x, t.y, t.size) }, draw: function(t, e) { var n = function(t) { var e = u.shape.schema; return a.mix({}, e, { stroke: t.color, strokeOpacity: t.opacity }, t.style) }(t),
                    r = function(t) { return [
                            ["M", t[0].x, t[0].y],
                            ["L", t[1].x, t[1].y],
                            ["M", t[2].x, t[2].y],
                            ["L", t[3].x, t[3].y],
                            ["M", t[4].x, t[4].y],
                            ["L", t[5].x, t[5].y],
                            ["L", t[6].x, t[6].y],
                            ["L", t[7].x, t[7].y],
                            ["L", t[4].x, t[4].y],
                            ["Z"],
                            ["M", t[8].x, t[8].y],
                            ["L", t[9].x, t[9].y],
                            ["M", t[10].x, t[10].y],
                            ["L", t[11].x, t[11].y],
                            ["M", t[12].x, t[12].y],
                            ["L", t[13].x, t[13].y]
                        ] }(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: a.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { return { symbol: function(t, e, n, r) { var o = i(t, [e - 6, e - 3, e, e + 3, e + 6], n);
                        r.moveTo(o[0].x + 1, o[0].y), r.lineTo(o[1].x - 1, o[1].y), r.moveTo(o[2].x, o[2].y), r.lineTo(o[3].x, o[3].y), r.moveTo(o[4].x, o[4].y), r.lineTo(o[5].x, o[5].y), r.lineTo(o[6].x, o[6].y), r.lineTo(o[7].x, o[7].y), r.lineTo(o[4].x, o[4].y), r.closePath(), r.moveTo(o[8].x, o[8].y), r.lineTo(o[9].x, o[9].y), r.moveTo(o[10].x + 1, o[10].y), r.lineTo(o[11].x - 1, o[11].y), r.moveTo(o[12].x, o[12].y), r.lineTo(o[13].x, o[13].y) }, radius: 6, lineWidth: 1, stroke: t.color } } }), s.registerShape("schema", "candle", { getPoints: function(t) { return o(t.x, t.y, t.size) }, draw: function(t, e) { var n = function(t) { var e = u.shape.schema; return a.mix({}, e, { fill: t.color, stroke: t.color, fillOpacity: t.opacity }, t.style) }(t),
                    r = function(t) { return [
                            ["M", t[0].x, t[0].y],
                            ["L", t[1].x, t[1].y],
                            ["M", t[2].x, t[2].y],
                            ["L", t[3].x, t[3].y],
                            ["L", t[4].x, t[4].y],
                            ["L", t[5].x, t[5].y],
                            ["Z"],
                            ["M", t[6].x, t[6].y],
                            ["L", t[7].x, t[7].y]
                        ] }(t.points); return r = this.parsePath(r), e.addShape("path", { attrs: a.mix(n, { path: r }) }) }, getMarkerCfg: function(t) { return { symbol: function(t, e, n, r) { var i = o(t, e = [e + 7.5, e + 3, e - 3, e - 7.5], n);
                        r.moveTo(i[0].x, i[0].y), r.lineTo(i[1].x, i[1].y), r.moveTo(i[2].x, i[2].y), r.lineTo(i[3].x, i[3].y), r.lineTo(i[4].x, i[4].y), r.lineTo(i[5].x, i[5].y), r.closePath(), r.moveTo(i[6].x, i[6].y), r.lineTo(i[7].x, i[7].y) }, lineWidth: 1, stroke: t.color, fill: t.color, radius: 6 } } }), t.exports = c }, function(t, e, n) {
        function r(t) { return t.alias || t.field } var i = n(0),
            o = n(1).defaultColor,
            a = { _snapEqual: function(t, e, n) { return t = n.translate(t), e = n.translate(e), n.isCategory ? t === e : i.snapEqual(t, e) }, _getScaleValueByPoint: function(t) { var e = 0,
                        n = this.get("coord"),
                        r = this.getXScale(),
                        i = n.invert(t).x; return this.isInCircle() && i > (1 + r.rangeMax()) / 2 && (i = r.rangeMin()), e = r.invert(i), r.isCategory && (e = r.translate(e)), e }, _getOriginByPoint: function(t) { var e = this.getXScale(),
                        n = this.getYScale(),
                        r = e.field,
                        i = n.field,
                        o = this.get("coord").invert(t),
                        a = e.invert(o.x),
                        s = n.invert(o.y),
                        u = {}; return u[r] = a, u[i] = s, u }, _getScale: function(t) { var e = this.get("scales"),
                        n = null; return i.each(e, function(e) { if (e.field === t) return n = e, !1 }), n }, _getTipValueScale: function() { var t = this.getAttrsForLegend(),
                        e = void 0;
                    i.each(t, function(t) { var n = t.getScale(t.type); if (n.isLinear) return e = n, !1 }); var n = this.getXScale(),
                        r = this.getYScale(); return !e && r && "..y" === r.field ? n : e || r || n }, _getTipTitleScale: function(t) { if (t) return this._getScale(t); var e = this.getAttr("position").getFields(),
                        n = void 0; return i.each(e, function(t) { if (-1 === t.indexOf("..")) return n = t, !1 }), this._getScale(n) }, _filterValue: function(t, e) { var n = this.get("coord"),
                        r = this.getYScale(),
                        o = r.field,
                        a = n.invert(e).y;
                    a = r.invert(a); var s = t[t.length - 1]; return i.each(t, function(t) { var e = t._origin; if (e[o][0] <= a && e[o][1] >= a) return s = t, !1 }), s }, getXDistance: function() { var t = this.get("xDistance"); if (!t) { var e = this.getXScale(); if (e.isCategory) t = 1;
                        else { var n = e.values,
                                r = e.translate(n[0]),
                                o = r;
                            i.each(n, function(t) {
                                (t = e.translate(t)) < r && (r = t), t > o && (o = t) }); var a = n.length;
                            t = (o - r) / (a - 1) } this.set("xDistance", t) } return t }, findPoint: function(t, e) { var n = this,
                        r = n.get("type"),
                        o = n.getXScale(),
                        a = n.getYScale(),
                        s = o.field,
                        u = a.field,
                        c = null; if (i.indexOf(["heatmap"], r) > -1) { var l = n.get("coord").invert(t),
                            h = o.invert(l.x),
                            f = a.invert(l.y),
                            p = 1 / 0; return i.each(e, function(t) { var e = Math.pow(t._origin[s] - h, 2) + Math.pow(t._origin[u] - f, 2);
                            e < p && (p = e, c = t) }), c } var g = e[0],
                        d = e[e.length - 1]; if (!g) return c; var y = n._getScaleValueByPoint(t),
                        v = g._origin[s],
                        x = g._origin[u],
                        m = d._origin[s],
                        b = a.isLinear && i.isArray(x); if (i.isArray(v)) i.each(e, function(t) { var e = t._origin; if (o.translate(e[s][0]) <= y && o.translate(e[s][1]) >= y) { if (!b) return c = t, !1;
                            i.isArray(c) || (c = []), c.push(t) } }), i.isArray(c) && (c = this._filterValue(c, t));
                    else { var _ = void 0; if (o.isLinear || "timeCat" === o.type) { if ((y > o.translate(m) || y < o.translate(v)) && (y > o.max || y < o.min)) return null; for (var w = 0, S = e.length - 1, M = void 0; w <= S;) { M = Math.floor((w + S) / 2); var C = e[M]._origin[s]; if (n._snapEqual(C, y, o)) return e[M];
                                o.translate(C) <= o.translate(y) ? (w = M + 1, d = e[M], _ = e[M + 1]) : (0 === S && (d = e[0]), S = M - 1) } } else i.each(e, function(t, r) { var a = t._origin; if (n._snapEqual(a[s], y, o)) { if (!b) return c = t, !1;
                                i.isArray(c) || (c = []), c.push(t) } else o.translate(a[s]) <= y && (d = t, _ = e[r + 1]) }), i.isArray(c) && (c = this._filterValue(c, t));
                        d && _ && Math.abs(o.translate(d._origin[s]) - y) > Math.abs(o.translate(_._origin[s]) - y) && (d = _) } var P = n.getXDistance(); return !c && Math.abs(o.translate(d._origin[s]) - y) <= P / 2 && (c = d), c }, getTipTitle: function(t, e) { var n = "",
                        r = this._getTipTitleScale(e); if (r) { var i = t[r.field];
                        n = r.getText(i) } else if ("heatmap" === this.get("type")) { var o = this.getXScale(),
                            a = this.getYScale();
                        n = "( " + o.getText(t[o.field]) + ", " + a.getText(t[a.field]) + " )" } return n }, getTipValue: function(t, e) { var n = void 0; if (n = t[e.field], i.isArray(n)) { var r = [];
                        i.each(n, function(t) { r.push(e.getText(t)) }), n = r.join("-") } else n = e.getText(n); return n }, getTipName: function(t) { var e = void 0,
                        n = void 0,
                        o = this._getGroupScales(); if (o.length && i.each(o, function(t) { return n = t, !1 }), n) { var a = n.field;
                        e = n.getText(t[a]) } else { e = r(this._getTipValueScale()) } return e }, getTipItems: function(t, e) {
                    function n(e, n, r) { if (!i.isNil(n) && "" !== n) { var s = { title: u, point: t, name: e || u, value: n, color: t.color || o, marker: !0 }; "interval" !== a.get("type") && "schema" !== a.get("type") || (s.size = a.getSize()), l.push(i.mix({}, s, r)) } } var a = this,
                        s = t._origin,
                        u = a.getTipTitle(s, e),
                        c = a.get("tooltipCfg"),
                        l = [],
                        h = void 0,
                        f = void 0; if (c) { var p = c.fields,
                            g = c.cfg,
                            d = []; if (i.each(p, function(t) { d.push(s[t]) }), g) { i.isFunction(g) && (g = g.apply(null, d)); var y = i.mix({}, { point: t, title: u, color: t.color || o, marker: !0 }, g); "interval" !== a.get("type") && "schema" !== a.get("type") || (y.size = a.getSize()), l.push(y) } else i.each(p, function(t) { if (!i.isNil(s[t])) { var e = a._getScale(t);
                                h = r(e), f = e.getText(s[t]), n(h, f) } }) } else { var v = a._getTipValueScale();
                        i.isNil(s[v.field]) || (f = a.getTipValue(s, v), n(h = a.getTipName(s), f)) } return l }, isShareTooltip: function() { var t = this.get("shareTooltip"),
                        e = this.get("type"),
                        n = this.get("view"),
                        r = void 0; if (r = n.get("parent") ? n.get("parent").get("options") : n.get("options"), "interval" === e) { var o = this.get("coord"),
                            a = o.type;
                        ("theta" === a || "polar" === a && o.isTransposed) && (t = !1) } else this.getYScale() && !i.inArray(["contour", "point", "polygon", "edge"], e) || (t = !1); return r.tooltip && i.isBoolean(r.tooltip.shared) && (t = r.tooltip.shared), t } };
        t.exports = a }, function(t, e, n) {
        function r(t, e) { if (!t) return !0; if (t.length !== e.length) return !0; var n = !1; return i.each(e, function(e, r) { if (! function(t, e) { if (i.isNil(t) || i.isNil(e)) return !1; var n = t.get("origin"),
                            r = e.get("origin"); return i.isEqual(n, r) }(e, t[r])) return n = !0, !1 }), n } var i = n(0),
            o = { _isAllowActive: function() { var t = this.get("allowActive"); if (!i.isNil(t)) return t; var e = this.get("view"),
                        n = this.isShareTooltip(); return !1 === e.get("options").tooltip || !n }, _onMouseenter: function(t) { var e = t.shape,
                        n = this.get("shapeContainer");
                    e && !e.get("animating") && n.contain(e) && this._isAllowActive() && this.setShapesActived(e) }, _onMouseleave: function() { var t = this.get("view").get("canvas");
                    this.get("activeShapes") && (this.clearActivedShapes(), t.draw()) }, _bindActiveAction: function() { var t = this.get("view"),
                        e = this.get("type");
                    t.on(e + ":mouseenter", i.wrapBehavior(this, "_onMouseenter")), t.on(e + ":mouseleave", i.wrapBehavior(this, "_onMouseleave")) }, _offActiveAction: function() { var t = this.get("view"),
                        e = this.get("type");
                    t.off(e + ":mouseenter", i.getWrapBehavior(this, "_onMouseenter")), t.off(e + ":mouseleave", i.getWrapBehavior(this, "_onMouseleave")) }, _setActiveShape: function(t) { var e = t.get("origin"),
                        n = e.shape || this.getDefaultValue("shape");
                    i.isArray(n) && (n = n[0]); var r = this.get("shapeFactory"),
                        o = i.mix({}, t.__attrs, { origin: e }),
                        a = r.getActiveCfg(n, o);
                    i.mix(t.__attrs, a), t.setZIndex(1) }, setShapesActived: function(t) { var e = this,
                        n = !1;
                    i.isArray(t) || (t = [t]); var o = e.get("preShapes"); if (r(o, t)) { o && e.clearActivedShapes(); var a = e.get("view").get("canvas"),
                            s = e.get("shapeContainer");
                        i.each(t, function(t) { if (t.get("animating")) return n = !0, !1;
                            t.get("_originAttrs") || t.set("_originAttrs", i.cloneDeep(t.__attrs)), t.get("visible") && !t.get("selected") && e._setActiveShape(t) }), n || (e.set("activeShapes", t), e.set("preShapes", t), s.sort(), a.draw()) } }, clearActivedShapes: function() { var t = this.get("shapeContainer"); if (t && !t.get("destroyed")) { var e = this.get("activeShapes");
                        i.each(e, function(t) { if (!t.get("selected")) { var e = t.get("_originAttrs");
                                t.__attrs = i.cloneDeep(e), t.setZIndex(0), t.set("_originAttrs", null) } }); if (this.get("preHighlightShapes")) { var n = t.get("children");
                            i.each(n, function(t) { if (!t.get("selected")) { var e = t.get("_originAttrs");
                                    e && (t.__attrs = i.cloneDeep(e), t.setZIndex(0), t.set("_originAttrs", null)) } }) } t.get("children").sort(function(t, e) { return t._INDEX - e._INDEX }), this.set("activeShapes", null), this.set("preShapes", null), this.set("preHighlightShapes", null) } }, getGroupShapesByPoint: function(t) { var e = []; if (this.get("shapeContainer")) { var n = this.getXScale().field,
                            r = this.getShapes(),
                            o = this._getOriginByPoint(t);
                        i.each(r, function(t) { var r = t.get("origin"); if (t.get("visible") && r) { r._origin[n] === o[n] && e.push(t) } }) } return e }, getSingleShapeByPoint: function(t) { var e = this.get("shapeContainer"),
                        n = e.get("canvas").get("pixelRatio"),
                        r = void 0; if (e && (r = e.getShape(t.x * n, t.y * n)), r && r.get("origin")) return r }, highlightShapes: function(t, e) { i.isArray(t) || (t = [t]); var n = this.get("preHighlightShapes"); if (r(n, t)) { n && this.clearActivedShapes(); var o = this.getShapes();
                        i.each(o, function(n) { n.get("_originAttrs") || n.set("_originAttrs", i.cloneDeep(n.__attrs)), -1 !== i.indexOf(t, n) ? (n.__attrs = i.mix({}, n.get("_originAttrs"), e), n.setZIndex(1)) : (i.mix(n.__attrs, { fill: "#fff", fillOpacity: .3, strokeOpacity: .3, stroke: "#fff" }), n.setZIndex(0)) }), this.set("preHighlightShapes", t), this.set("activeShapes", t) } } };
        t.exports = o }, function(t, e, n) {
        function r(t, e) { if (i.isNil(t) || i.isNil(e)) return !1; var n = t.get("origin"),
                r = e.get("origin"); return i.isEqual(n, r) } var i = n(0),
            o = { _isAllowSelect: function() { var t = this.get("allowSelect"); if (!i.isNil(t)) return t; var e = this.get("type"),
                        n = this.get("coord"),
                        r = n && n.type; return "interval" === e && "theta" === r }, _onClick: function(t) { if (this._isAllowSelect()) { this.clearActivedShapes(); var e = t.shape,
                            n = this.get("shapeContainer");
                        e && !e.get("animating") && n.contain(e) && this.setShapeSelected(e) } }, _bindSelectedAction: function() { var t = this.get("view"),
                        e = this.get("type");
                    t.on(e + ":click", i.wrapBehavior(this, "_onClick")) }, _offSelectedAction: function() { var t = this.get("view"),
                        e = this.get("type");
                    t.off(e + ":click", i.getWrapBehavior(this, "_onClick")) }, _setShapeStatus: function(t, e) { var n = this.get("view"),
                        r = this.get("selectedOptions") || {},
                        o = !1 !== r.animate,
                        a = n.get("canvas");
                    t.set("selected", e); var s = t.get("origin"); if (e) { var u = s.shape || this.getDefaultValue("shape");
                        i.isArray(u) && (u = u[0]); var c = this.get("shapeFactory"),
                            l = i.mix({ geom: this, point: s }, r),
                            h = c.getSelectedCfg(u, l);
                        i.mix(h, l.style), t.get("_originAttrs") || t.set("_originAttrs", i.cloneDeep(t.__attrs)), o ? t.animate(h, 300) : (t.attr(h), a.draw()) } else { var f = t.get("_originAttrs");
                        o ? t.animate(f, 300) : (t.attr(f), a.draw()) } }, setShapeSelected: function(t) { var e = this._getSelectedShapes(),
                        n = this.get("selectedOptions") || {},
                        o = !1 !== n.cancelable; if ("multiple" === n.mode) - 1 === i.indexOf(e, t) ? (e.push(t), this._setShapeStatus(t, !0)) : o && (i.Array.remove(e, t), this._setShapeStatus(t, !1));
                    else { var a = e[0];
                        o && (t = r(a, t) ? null : t), r(a, t) || (a && this._setShapeStatus(a, !1), t && this._setShapeStatus(t, !0)) } }, clearSelected: function() { var t = this,
                        e = t.get("shapeContainer"); if (e && !e.get("destroyed")) { var n = t._getSelectedShapes();
                        i.each(n, function(e) { t._setShapeStatus(e, !1), e.set("_originAttrs", null) }) } }, _getSelectedShapes: function() { var t = this.getShapes(),
                        e = []; return i.each(t, function(t) { t.get("selected") && e.push(t) }), this.set("selectedShapes", e), e } };
        t.exports = o }, function(t, e, n) {
        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var a = n(13),
            s = n(0),
            u = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e }, e.prototype.drawPoint = function(t, e, n, r) { var i = this,
                        o = t.shape,
                        a = i.getDrawCfg(t),
                        u = void 0; if (s.isArray(t.y)) { var c = i.hasStack();
                        s.each(t.y, function(t, s) { a.y = t, a.yIndex = s, c && 0 === s || ((u = n.drawShape(o, a, e)).setSilent("index", r + s), u.setSilent("coord", i.get("coord")), i.get("animate") && i.get("animateCfg") && u.setSilent("animateCfg", i.get("animateCfg"))) }) } else s.isNil(t.y) || ((u = n.drawShape(o, a, e)).setSilent("index", r), u.setSilent("coord", i.get("coord")), i.get("animate") && i.get("animateCfg") && u.setSilent("animateCfg", i.get("animateCfg"))) }, e }(a),
            c = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "jitter" }], e }, e }(u);
        u.Jitter = c, t.exports = u }, function(t, e, n) {
        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var a = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "line", e.sortable = !0, e }, e }(n(175)),
            s = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "stack" }], e }, e }(a);
        a.Stack = s, t.exports = a }, function(t, e, n) {
        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var a = n(13),
            s = n(0),
            u = n(177),
            c = function(t) {
                function e(n) { r(this, e); var o = i(this, t.call(this, n)); return s.assign(o, u), o } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e }, e.prototype.createShapePointsCfg = function(e) { var n = t.prototype.createShapePointsCfg.call(this, e); return n.size = this.getNormalizedSize(e), n }, e.prototype.clearInner = function() { t.prototype.clearInner.call(this), this.set("defaultSize", null) }, e }(a),
            l = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "stack" }], e }, e }(c),
            h = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "dodge" }], e }, e }(c),
            f = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "symmetric" }], e }, e }(c);
        c.Stack = l, c.Dodge = h, c.Symmetric = f, t.exports = c }, function(t, e, n) {
        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var a = n(13),
            s = n(176),
            u = n(0),
            c = function(t) {
                function e(n) { r(this, e); var o = i(this, t.call(this, n)); return u.assign(o, s), o } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, e }, e.prototype.draw = function(t, e, n, r) { var i = this,
                        o = this.getDrawCfg(t[0]),
                        a = this.splitData(t);
                    o.origin = t, u.each(a, function(t, a) { o.splitedIndex = a; var s = t.map(function(t) { return t.points });
                        o.points = s; var u = n.drawShape(o.shape, o, e);
                        u.setSilent("index", r + a), u.setSilent("coord", i.get("coord")), i.get("animate") && i.get("animateCfg") && u.setSilent("animateCfg", i.get("animateCfg")) }) }, e }(a),
            l = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "stack" }], e }, e }(c);
        c.Stack = l, t.exports = c }, function(t, e, n) { var r = n(13),
            i = n(0),
            o = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e }, e.prototype.createShapePointsCfg = function(e) { var n = t.prototype.createShapePointsCfg.call(this, e),
                        r = n.x,
                        o = n.y,
                        a = void 0; if (!i.isArray(r) || !i.isArray(o)) { var s = this.getXScale(),
                            u = this.getYScale(),
                            c = .5 / (s.values ? s.values.length : s.ticks.length),
                            l = .5 / (u.values ? u.values.length : u.ticks.length);
                        s.isCategory && u.isCategory ? (r = [r - c, r - c, r + c, r + c], o = [o - l, o + l, o + l, o - l]) : i.isArray(r) ? (r = [(a = r)[0], a[0], a[1], a[1]], o = [o - l / 2, o + l / 2, o + l / 2, o - l / 2]) : i.isArray(o) && (o = [(a = o)[0], a[1], a[1], a[0]], r = [r - c / 2, r - c / 2, r + c / 2, r + c / 2]), n.x = r, n.y = o } return n }, e }(r);
        t.exports = o }, function(t, e, n) {
        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var a = n(13),
            s = n(0),
            u = n(177),
            c = function(t) {
                function e(n) { r(this, e); var o = i(this, t.call(this, n)); return s.assign(o, u), o } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e }, e.prototype.createShapePointsCfg = function(e) { var n = t.prototype.createShapePointsCfg.call(this, e); return n.size = this.getNormalizedSize(e), n }, e }(a),
            l = function(t) {
                function e() { return r(this, e), i(this, t.apply(this, arguments)) } return o(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.hasDefaultAdjust = !0, e.adjusts = [{ type: "dodge" }], e }, e }(c);
        c.Dodge = l, t.exports = c }, function(t, e, n) { var r = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                    function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "edge", e.shapeType = "edge", e.generatePoints = !0, e }, e }(n(13));
        t.exports = r }, function(t, e, n) { var r = n(13),
            i = n(91),
            o = n(0),
            a = {},
            s = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "heatmap", e }, e.prototype._prepareRange = function() { var t = this.get("mappedData"),
                        e = this.getAttr("color").field,
                        n = 1 / 0,
                        r = -1 / 0;
                    t.forEach(function(t) { var i = t._origin[e];
                        i > r && (r = i), i < n && (n = i) }), n === r && (n = r - 1); var i = [n, r];
                    this.set("valueRange", i) }, e.prototype._prepareSize = function() { var t = this.getDefaultValue("size");
                    o.isNumber(t) || (t = this._getDefaultSize()); var e = this.get("styleOptions"),
                        n = e && o.isObject(e.style) ? e.style.blur : null;
                    o.isFinite(n) || (n = t / 2), this.set("heatmapSize", { blur: n, radius: t }) }, e.prototype._getDefaultSize = function() { var t = this.getAttr("position"),
                        e = this.get("coord"); return Math.min(e.width / (4 * t.scales[0].ticks.length), e.height / (4 * t.scales[1].ticks.length)) }, e.prototype._colorize = function(t) { for (var e = this.getAttr("color"), n = t.data, r = 3; r < n.length; r += 4) { var o = n[r]; if (o) { var s = void 0;
                            a[o] ? s = a[o] : (s = i.rgb2arr(e.gradient(o / 256)), a[o] = s), n[r - 3] = s[0], n[r - 2] = s[1], n[r - 1] = s[2], n[r] = o } } }, e.prototype._prepareGreyScaleBlurredCircle = function(t, e) { var n = this.get("grayScaleBlurredCanvas");
                    n || (n = document.createElement("canvas"), this.set("grayScaleBlurredCanvas", n)); var r = t + e,
                        i = n.getContext("2d");
                    n.width = n.height = 2 * r, i.clearRect(0, 0, n.width, n.height), i.shadowOffsetX = i.shadowOffsetY = 2 * r, i.shadowBlur = e, i.shadowColor = "black", i.beginPath(), i.arc(-r, -r, t, 0, 2 * Math.PI, !0), i.closePath(), i.fill() }, e.prototype._drawGrayScaleBlurredCircle = function(t, e, n, r, i) { var o = this.get("grayScaleBlurredCanvas");
                    i.globalAlpha = r, i.drawImage(o, t - n, e - n) }, e.prototype._getShadowCanvasCtx = function() { var t = this.get("shadowCanvasCtx"); if (t) return t; var e = this.get("coord"),
                        n = e.x.end,
                        r = e.y.start,
                        i = document.createElement("canvas"); return i.width = n, i.height = r, t = i.getContext("2d"), this.set("shadowCanvasCtx", t), t }, e.prototype._clearShadowCanvasCtx = function() { var t = this.get("shadowCanvasCtx");
                    t && t.clearRect(0, 0, t.canvas.width, t.canvas.height) }, e.prototype._getImageShape = function() { var t = this.get("imageShape"); if (t) return t; return t = this.get("container").addShape("Image", {}), this.set("imageShape", t), t }, e.prototype.drawWithRange = function(t) { var e = this.get("coord"),
                        n = e.width,
                        r = e.height,
                        i = this.getAttr("color").field,
                        o = this.get("heatmapSize");
                    this._clearShadowCanvasCtx(); var a = this._getShadowCanvasCtx(),
                        s = this.get("mappedData");
                    t && (s = s.filter(function(e) { return e._origin[i] <= t[1] && e._origin[i] >= t[0] })); for (var u = this._getScale(i), c = 0; c < s.length; c++) { var l = s[c],
                            h = this.getDrawCfg(l),
                            f = u.scale(l._origin[i]);
                        this._drawGrayScaleBlurredCircle(h.x, h.y, o.radius, f, a) } var p = a.getImageData(e.start.x, e.end.y, n + e.start.x, r + e.end.y);
                    this._clearShadowCanvasCtx(), this._colorize(p), a.putImageData(p, 0, 0); var g = this._getImageShape();
                    g.attr("x", e.start.x), g.attr("y", e.end.y), g.attr("width", n + e.start.x), g.attr("height", r + e.end.y), g.attr("img", a.canvas) }, e.prototype.draw = function(t) { this.set("mappedData", t), this._prepareRange(), this._prepareSize(); var e = this.get("heatmapSize");
                    this._prepareGreyScaleBlurredCircle(e.radius, e.blur); var n = this.get("valueRange");
                    this.drawWithRange(n) }, e }(r);
        t.exports = s }, function(t, e, n) { var r = n(0),
            i = n(1),
            o = n(179),
            a = /^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,
            s = { LINEAR: "linear", CAT: "cat", TIME: "time" },
            u = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.defs = {}, r.assign(this, e) } return t.prototype._getDef = function(t) { var e = this.defs,
                        n = null; return (i.scales[t] || e[t]) && (n = r.mix({}, i.scales[t]), r.each(e[t], function(t, e) { r.isNil(t) ? delete n[e] : n[e] = t })), n }, t.prototype._getDefaultType = function(t, e) { var n = s.LINEAR,
                        i = r.Array.firstValue(e, t); return r.isArray(i) && (i = i[0]), a.test(i) ? n = s.TIME : r.isString(i) && (n = s.CAT), n }, t.prototype._getScaleCfg = function(t, e, n) { var i = { field: e },
                        a = r.Array.values(n, e); if (i.values = a, !o.isCategory(t) && "time" !== t) { var s = r.Array.getRange(a);
                        i.min = s.min, i.max = s.max, i.nice = !0 } return "time" === t && (i.nice = !1), i }, t.prototype.createScale = function(t, e) { var n = this._getDef(t),
                        i = void 0; if (!e || !e.length) return i = n && n.type ? o[n.type](n) : o.identity({ value: t, field: t.toString(), values: [t] }); var a = r.Array.firstValue(e, t); if (r.isNumber(t) || r.isNil(a) && !n) i = o.identity({ value: t, field: t.toString(), values: [t] });
                    else { var s = void 0;
                        n && (s = n.type), s = s || this._getDefaultType(t, e); var u = this._getScaleCfg(s, t, e);
                        n && r.mix(u, n), i = o[s](u) } return i }, t }();
        t.exports = u }, function(t, e, n) { var r = n(0),
            i = n(180),
            o = n(1);
        t.exports = function(t) { var e = t.min,
                n = t.max,
                a = t.interval,
                s = [],
                u = t.minCount || 5,
                c = t.maxCount || 7,
                l = u === c,
                h = r.isNil(t.minLimit) ? -1 / 0 : t.minLimit,
                f = r.isNil(t.maxLimit) ? 1 / 0 : t.maxLimit,
                p = (u + c) / 2,
                g = p,
                d = t.snapArray ? t.snapArray : l ? o.snapCountArray : o.snapArray; if (e === h && n === f && l && (a = (n - e) / (g - 1)), r.isNil(e) && (e = 0), r.isNil(n) && (n = 0), n === e && (0 === e ? n = 1 : e > 0 ? e = 0 : n = 0, n - e < 5 && !a && n - e >= 1 && (a = 1)), r.isNil(a)) { var y = (n - e) / (p - 1);
                a = i.snapFactorTo(y, d, "ceil"), c !== u && ((g = parseInt((n - e) / a, 10)) > c && (g = c), g < u && (g = u), a = i.snapFactorTo((n - e) / (g - 1), d, "floor")) } if (t.interval || c !== u) n = Math.min(i.snapMultiple(n, a, "ceil"), f), e = Math.max(i.snapMultiple(e, a, "floor"), h), g = Math.round((n - e) / a), e = r.fixedBase(e, a), n = r.fixedBase(n, a);
            else { p = parseInt(p, 10); var v = (n + e) / 2,
                    x = i.snapMultiple(v, a, "ceil"),
                    m = Math.floor((p - 2) / 2),
                    b = x + m * a,
                    _ = void 0;
                _ = p % 2 == 0 ? x - m * a : x - (m + 1) * a, b < n && (b += a), _ > e && (_ -= a), n = r.fixedBase(b, a), e = r.fixedBase(_, a) } n = Math.min(n, f), e = Math.max(e, h), s.push(e); for (var w = 1; w < g; w++) { var S = r.fixedBase(a * w + e, a);
                S < n && s.push(S) } return s[s.length - 1] < n && s.push(n), { min: e, max: n, interval: a, count: g, ticks: s } } }, function(t, e, n) { var r = n(57),
            i = n(0),
            o = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return i.mix({}, e, { isIdentity: !0, type: "identity", value: null }) }, e.prototype.getText = function() { return this.value.toString() }, e.prototype.scale = function(t) { return this.value !== t && i.isNumber(t) ? t : this.range[0] }, e.prototype.invert = function() { return this.value }, e }(r);
        t.exports = o }, function(t, e, n) { var r = n(58),
            i = n(0),
            o = n(419),
            a = n(183),
            s = n(184),
            u = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return i.mix({}, e, { type: "time", mask: "YYYY-MM-DD" }) }, e.prototype.init = function() { var e = this,
                        n = e.values; if (n) { var r = [],
                            o = 1 / 0,
                            a = o,
                            s = 0;
                        i.each(n, function(t) { var n = e._toTimeStamp(t);
                            o > n ? (a = o, o = n) : a > n && (a = n), s < n && (s = n), r.push(n) }), n.length > 1 && (e.minTickInterval = a - o), (i.isNil(e.min) || e._toTimeStamp(e.min) > o) && (e.min = o), (i.isNil(e.max) || e._toTimeStamp(e.max) < s) && (e.max = s) } t.prototype.init.call(this) }, e.prototype.calculateTicks = function() { var t = this.min,
                        e = this.max,
                        n = this.tickCount,
                        r = this.tickInterval; return o({ min: t, max: e, minCount: n, maxCount: n, interval: r, minInterval: this.minTickInterval }).ticks }, e.prototype.getText = function(t) { var e = this.formatter; return t = this.translate(t), t = e ? e(t) : a.format(t, this.mask) }, e.prototype.scale = function(e) { return i.isString(e) && (e = this.translate(e)), t.prototype.scale.call(this, e) }, e.prototype.translate = function(t) { return this._toTimeStamp(t) }, e.prototype._toTimeStamp = function(t) { return s.toTimeStamp(t) }, e }(r);
        t.exports = u }, function(t, e, n) {
        function r(t) { return new Date(t).getFullYear() }

        function i(t) { return new Date(t, 0, 1).getTime() }

        function o(t) { return new Date(t).getMonth() }

        function a(t, e) { return new Date(t, e, 1).getTime() } var s = n(0),
            u = n(180),
            c = [1, 2, 4, 6, 8, 12],
            l = 36e5,
            h = 864e5;
        t.exports = function(t) { var e = t.minInterval,
                n = [],
                f = t.min,
                p = t.max,
                g = t.interval,
                d = void 0; if (p === f && (p = f + h), s.isNil(g)) { var y = p - f,
                    v = h,
                    x = 365 * v;
                g = parseInt(y / (t.maxCount || 6), 10), e && e > g && (g = e); var m = g / x,
                    b = r(f); if (m > .51) { for (var _ = Math.ceil(m), w = r(p), S = b; S <= w + _; S += _) n.push(i(S));
                    g = null } else if (m > .0834) { for (var M = Math.ceil(m / .0834), C = o(f), P = function(t, e) { var n = r(t),
                                i = r(e),
                                a = o(t); return 12 * (i - n) + (o(e) - a) % 12 }(f, p), A = 0; A <= P + M; A += M) n.push(a(b, A + C));
                    g = null } else if (g > .5 * v) { var k = new Date(f),
                        O = k.getFullYear(),
                        T = k.getMonth(f),
                        j = k.getDate(),
                        E = Math.ceil(g / v),
                        I = function(t, e) { return Math.ceil((e - t) / h) }(f, p);
                    g = E * v; for (var D = 0; D < I + E; D += E) n.push(new Date(O, T, j + D).getTime()) } else if (g > l) { var F = new Date(f),
                        L = F.getFullYear(),
                        R = F.getMonth(f),
                        B = F.getDate(),
                        z = F.getHours(),
                        N = u.snapTo(c, Math.ceil(g / l)),
                        V = function(t, e) { return Math.ceil((e - t) / l) }(f, p);
                    g = N * l; for (var Y = 0; Y <= V + N; Y += N) n.push(new Date(L, R, B, z + Y).getTime()) } else if (g > 6e4) { var W = function(t, e) { return Math.ceil((e - t) / 6e4) }(f, p),
                        X = Math.ceil(g / 6e4);
                    g = 6e4 * X; for (var G = 0; G <= W + X; G += X) n.push(f + 6e4 * G) } else { g < 1e3 && (g = 1e3), f = 1e3 * Math.floor(f / 1e3); var H = Math.ceil((p - f) / 1e3),
                        q = Math.ceil(g / 1e3);
                    g = 1e3 * q; for (var U = 0; U < H + q; U += q) n.push(f + 1e3 * U) } } if (!n.length) { f = 1e3 * Math.floor(f / 1e3), d = ((p = 1e3 * Math.ceil(p / 1e3)) - f) / g; for (var Z = 0; Z <= d; Z++) n.push(s.fixedBase(g * Z + f, g)) } return { max: p, min: f, interval: g, ticks: n, count: n.length } } }, function(t, e, n) { var r = n(181),
            i = n(0),
            o = n(183),
            a = n(182),
            s = n(184),
            u = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return i.mix({}, e, { type: "timeCat", mask: "YYYY-MM-DD", tickCount: 5 }) }, e.prototype.init = function() { var t = this,
                        e = this.values;
                    i.each(e, function(n, r) { e[r] = t._toTimeStamp(n) }), e.sort(function(t, e) { return t - e }), t.ticks || (t.ticks = this.calculateTicks(!1)) }, e.prototype.calculateTicks = function(t) { var e = this,
                        n = e.tickCount,
                        r = a({ maxCount: n, data: e.values }).ticks; return t && i.each(r, function(t, n) { r[n] = o.format(t, e.mask) }), r }, e.prototype.translate = function(t) { t = this._toTimeStamp(t); var e = this.values.indexOf(t); return -1 === e && (e = i.isNumber(t) && t < this.values.length ? t : NaN), e }, e.prototype.scale = function(t) { var e = this.rangeMin(),
                        n = this.rangeMax(),
                        r = this.translate(t),
                        i = void 0; return i = 1 === this.values.length ? r : r > -1 ? r / (this.values.length - 1) : 0, e + i * (n - e) }, e.prototype.getText = function(t) { var e = "",
                        n = this.translate(t);
                    e = n > -1 ? this.values[n] : t; var r = this.formatter; return e = parseInt(e, 10), e = r ? r(e) : o.format(e, this.mask) }, e.prototype.getTicks = function() { var t = this,
                        e = this.ticks,
                        n = []; return i.each(e, function(e) { var r = void 0;
                        r = i.isObject(e) ? e : { text: i.isString(e) ? e : t.getText(e), value: t.scale(e) }, n.push(r) }), n }, e.prototype._toTimeStamp = function(t) { return s.toTimeStamp(t) }, e }(r);
        t.exports = u }, function(t, e, n) {
        function r(t, e) { return 1 === t ? 1 : Math.log(e) / Math.log(t) } var i = n(58),
            o = n(0),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return o.mix({}, e, { type: "log", base: 2, tickCount: 10, _minTick: null }) }, e.prototype.calculateTicks = function() { var t = this.base,
                        e = void 0; if (this.min < 0) throw new Error("The minimum value must be greater than zero!"); var n = r(t, this.max); if (this.min > 0) e = Math.floor(r(t, this.min));
                    else { var i = this.values,
                            a = this.max;
                        o.each(i, function(t) { t > 0 && t < a && (a = t) }), a === this.max && (a = this.max / t), a > 1 && (a = 1), e = Math.floor(r(t, a)), this._minTick = e, this.positiveMin = a } for (var s = n - e, u = this.tickCount, c = Math.ceil(s / u), l = [], h = e; h < n + c; h += c) l.push(Math.pow(t, h)); return 0 === this.min && l.unshift(0), l }, e.prototype._getScalePercent = function(t) { var e = this.max,
                        n = this.min; if (e === n) return 0; if (t <= 0) return 0; var i = this.base,
                        o = this.positiveMin;
                    o && (n = 1 * o / i); return t < o ? t / o / (r(i, e) - r(i, n)) : (r(i, t) - r(i, n)) / (r(i, e) - r(i, n)) }, e.prototype.scale = function(t) { var e = this._getScalePercent(t),
                        n = this.rangeMin(); return n + e * (this.rangeMax() - n) }, e.prototype.invert = function(t) { var e = this.base,
                        n = r(e, this.max),
                        i = this.rangeMin(),
                        o = this.rangeMax() - i,
                        a = void 0,
                        s = this.positiveMin; if (s) { if (0 === t) return 0; var u = 1 / (n - (a = r(e, s / e))) * o; if (t < u) return t / u * s } else a = r(e, this.min); var c = (t - i) / o * (n - a) + a; return Math.pow(e, c) }, e }(i);
        t.exports = a }, function(t, e, n) {
        function r(t, e) { var n = Math.E; return Math.pow(n, Math.log(e) / t) } var i = n(58),
            o = n(0),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return o.mix({}, e, { type: "pow", exponent: 2, tickCount: 10 }) }, e.prototype.calculateTicks = function() { var t = this.exponent,
                        e = void 0,
                        n = Math.ceil(r(t, this.max)); if ((e = this.min >= 0 ? Math.floor(r(t, this.min)) : 0) > n) { var i = n;
                        n = e, e = i } for (var o = n - e, a = this.tickCount, s = Math.ceil(o / a), u = [], c = e; c < n + s; c += s) u.push(Math.pow(c, t)); return u }, e.prototype._getScalePercent = function(t) { var e = this.max,
                        n = this.min; if (e === n) return 0; var i = this.exponent; return (r(i, t) - r(i, n)) / (r(i, e) - r(i, n)) }, e.prototype.scale = function(t) { var e = this._getScalePercent(t),
                        n = this.rangeMin(); return n + e * (this.rangeMax() - n) }, e.prototype.invert = function(t) { var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
                        n = this.exponent,
                        i = r(n, this.max),
                        o = r(n, this.min),
                        a = e * (i - o) + o; return Math.pow(a, n) }, e }(i);
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(424),
            o = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.type = "rect", this.actions = [], this.cfg = {}, r.mix(this, e), this.option = e || {} } return t.prototype.reset = function(t) { return this.actions = t.actions || [], this.type = t.type, this.cfg = t.cfg, this.option.actions = this.actions, this.option.type = this.type, this.option.cfg = this.cfg, this }, t.prototype._execActions = function(t) { var e = this.actions;
                    r.each(e, function(e) { var n = e[0];
                        t[n](e[1], e[2]) }) }, t.prototype.hasAction = function(t) { var e = this.actions,
                        n = !1; return r.each(e, function(e) { if (t === e[0]) return n = !0, !1 }), n }, t.prototype.createCoord = function(t, e) { var n = this.type,
                        o = this.cfg,
                        a = void 0,
                        s = void 0,
                        u = r.mix({ start: t, end: e }, o); return "theta" === n ? (a = i.Polar, this.hasAction("transpose") || this.transpose(), (s = new a(u)).type = n) : s = new(a = i[r.upperFirst(n)] || i.Rect)(u), this._execActions(s), s }, t.prototype.rotate = function(t) { return t = t * Math.PI / 180, this.actions.push(["rotate", t]), this }, t.prototype.reflect = function(t) { return this.actions.push(["reflect", t]), this }, t.prototype.scale = function(t, e) { return this.actions.push(["scale", t, e]), this }, t.prototype.transpose = function() { return this.actions.push(["transpose"]), this }, t }();
        t.exports = o }, function(t, e, n) { var r = n(59);
        r.Cartesian = n(425), r.Rect = r.Cartesian, r.Polar = n(426), r.Helix = n(427), t.exports = r }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r._init(), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, type: "cartesian", isRect: !0 }) }, e.prototype._init = function() { var t = this.start,
                        e = this.end,
                        n = { start: t.x, end: e.x },
                        r = { start: t.y, end: e.y };
                    this.x = n, this.y = r }, e.prototype.convertPoint = function(t) { var e = void 0,
                        n = void 0; return this.isTransposed ? (e = t.y, n = t.x) : (e = t.x, n = t.y), { x: this.convertDim(e, "x"), y: this.convertDim(n, "y") } }, e.prototype.invertPoint = function(t) { var e = this.invertDim(t.x, "x"),
                        n = this.invertDim(t.y, "y"); return this.isTransposed ? { x: n, y: e } : { x: e, y: n } }, e }(n(59));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = n(59),
            o = n(2).MatrixUtil,
            a = o.mat3,
            s = o.vec2,
            u = o.vec3,
            c = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r._init(), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { startAngle: -Math.PI / 2, endAngle: 3 * Math.PI / 2, innerRadius: 0, type: "polar", isPolar: !0 }) }, e.prototype._init = function() { var t = this.radius,
                        e = this.innerRadius,
                        n = this.startAngle,
                        r = this.endAngle,
                        i = this.center,
                        o = this.getOneBox(),
                        a = o.maxX - o.minX,
                        s = o.maxY - o.minY,
                        u = Math.abs(o.minX) / a,
                        c = Math.abs(o.minY) / s,
                        l = this.width,
                        h = this.height,
                        f = void 0,
                        p = void 0;
                    h / s > l / a ? (f = l / a, p = { x: i.x - (.5 - u) * l, y: i.y - (.5 - c) * f * s }) : (f = h / s, p = { x: i.x - (.5 - u) * f * a, y: i.y - (.5 - c) * h }), t ? t > 0 && t <= 1 ? t *= f : (t <= 0 || t > f) && (t = f) : t = f; var g = { start: n, end: r },
                        d = { start: e * t, end: t };
                    this.x = g, this.y = d, this.radius = t, this.circleCentre = p, this.center = p }, e.prototype.getCenter = function() { return this.circleCentre }, e.prototype.getOneBox = function() { var t = this.startAngle,
                        e = this.endAngle; if (e - t >= 2 * Math.PI) return { minX: -1, maxX: 1, minY: -1, maxY: 1 }; for (var n = [0, Math.cos(t), Math.cos(e)], r = [0, Math.sin(t), Math.sin(e)], i = 5 * -Math.PI / 2; i < 3 * Math.PI / 2; i += Math.PI / 2) t <= i && i <= e && (n.push(Math.cos(i)), r.push(Math.sin(i))); return { minX: Math.min.apply(Math, n), maxX: Math.max.apply(Math, n), minY: Math.min.apply(Math, r), maxY: Math.max.apply(Math, r) } }, e.prototype.getRadius = function() { return this.radius }, e.prototype.convertPoint = function(t) { var e = this.getCenter(),
                        n = this.isTransposed ? t.y : t.x,
                        r = this.isTransposed ? t.x : t.y; return n = this.convertDim(n, "x"), r = this.convertDim(r, "y"), { x: e.x + Math.cos(n) * r, y: e.y + Math.sin(n) * r } }, e.prototype.invertPoint = function(t) { var e = this.getCenter(),
                        n = [t.x - e.x, t.y - e.y],
                        i = this.x,
                        o = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    a.rotate(o, o, i.start); var c = [1, 0, 0];
                    u.transformMat3(c, c, o), c = [c[0], c[1]]; var l = s.angleTo(c, n, i.end < i.start);
                    r.snapEqual(l, 2 * Math.PI) && (l = 0); var h = s.length(n),
                        f = l / (i.end - i.start);
                    f = i.end - i.start > 0 ? f : -f; var p = this.invertDim(h, "y"),
                        g = {}; return g.x = this.isTransposed ? p : f, g.y = this.isTransposed ? f : p, g }, e }(i);
        t.exports = c }, function(t, e, n) { var r = n(0),
            i = n(59),
            o = n(2).MatrixUtil.vec2,
            a = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r._init(), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { startAngle: 1.25 * Math.PI, endAngle: 7.25 * Math.PI, innerRadius: 0, type: "helix", isHelix: !0 }) }, e.prototype._init = function() { var t = this.width,
                        e = this.height,
                        n = this.radius,
                        r = this.innerRadius,
                        i = this.startAngle,
                        o = this.endAngle,
                        a = (o - i) / (2 * Math.PI) + 1,
                        s = Math.min(t, e) / 2;
                    n && n >= 0 && n <= 1 && (s *= n); var u = Math.floor(s * (1 - r) / a),
                        c = u / (2 * Math.PI),
                        l = { start: i, end: o },
                        h = { start: r * s, end: r * s + .99 * u };
                    this.a = c, this.d = u, this.x = l, this.y = h }, e.prototype.getCenter = function() { return this.center }, e.prototype.convertPoint = function(t) { var e = this.a,
                        n = this.center,
                        r = void 0,
                        i = void 0;
                    this.isTransposed ? (r = t.y, i = t.x) : (r = t.x, i = t.y); var o = this.convertDim(r, "x"),
                        a = e * o,
                        s = this.convertDim(i, "y"); return { x: n.x + Math.cos(o) * (a + s), y: n.y + Math.sin(o) * (a + s) } }, e.prototype.invertPoint = function(t) { var e = this.center,
                        n = this.a,
                        i = this.d + this.y.start,
                        a = o.subtract([], [t.x, t.y], [e.x, e.y]),
                        s = o.angleTo(a, [1, 0], !0),
                        u = s * n;
                    o.length(a) < u && (u = o.length(a)); var c = n * (s = 2 * Math.floor((o.length(a) - u) / i) * Math.PI + s),
                        l = o.length(a) - c;
                    l = r.snapEqual(l, 0) ? 0 : l; var h = this.invertDim(s, "x"),
                        f = this.invertDim(l, "y");
                    h = r.snapEqual(h, 0) ? 0 : h, f = r.snapEqual(f, 0) ? 0 : f; var p = {}; return p.x = this.isTransposed ? f : h, p.y = this.isTransposed ? h : f, p }, e }(i);
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(36).Axis,
            o = n(2).MatrixUtil.vec2,
            a = n(1),
            s = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.visible = !0, this.container = null, this.coord = null, this.options = null, this.axes = [], r.mix(this, e) } return t.prototype._isHide = function(t) { var e = this.options; return !(!e || !1 !== e[t]) }, t.prototype._getMiddleValue = function(t, e, n) { if (n === e.length - 1) return null; return (t + e[n + 1].value) / 2 }, t.prototype._getLineRange = function(t, e, n, r) { var i = void 0,
                        o = void 0,
                        a = void 0,
                        s = e.field,
                        u = this.options,
                        c = ""; return u[s] && u[s].position && (c = u[s].position), "x" === n ? (i = { x: 0, y: "top" === c ? 1 : 0 }, o = { x: 1, y: "top" === c ? 1 : 0 }, a = !1) : (r ? (i = { x: "left" === c ? 0 : 1, y: 0 }, o = { x: "left" === c ? 0 : 1, y: 1 }) : (i = { x: "right" === c ? 1 : 0, y: 0 }, o = { x: "right" === c ? 1 : 0, y: 1 }), a = !0), i = t.convert(i), o = t.convert(o), { start: i, end: o, isVertical: a } }, t.prototype._getLineCfg = function(t, e, n, r) { var i = void 0,
                        o = this._getLineRange(t, e, n, r),
                        a = o.isVertical,
                        s = o.start,
                        u = o.end,
                        c = t.center; return t.isTransposed && (a = !a), i = a && s.x > c.x || !a && s.y > c.y ? 1 : -1, { isVertical: a, factor: i, start: s, end: u } }, t.prototype._getCircleCfg = function(t) { var e = {},
                        n = t.x,
                        r = t.y,
                        i = r.start > r.end,
                        a = void 0;
                    a = t.isTransposed ? { x: i ? 0 : 1, y: 0 } : { x: 0, y: i ? 0 : 1 }, a = t.convert(a); var s = t.circleCentre,
                        u = [a.x - s.x, a.y - s.y],
                        c = [1, 0],
                        l = void 0,
                        h = (l = a.y > s.y ? o.angle(u, c) : -1 * o.angle(u, c)) + (n.end - n.start); return e.startAngle = l, e.endAngle = h, e.center = s, e.radius = Math.sqrt(Math.pow(a.x - s.x, 2) + Math.pow(a.y - s.y, 2)), e.inner = t.innerRadius || 0, e }, t.prototype._getRadiusCfg = function(t) { var e = t.x.start < 0 ? -1 : 1,
                        n = void 0,
                        r = void 0; return t.isTransposed ? (n = { x: 0, y: 0 }, r = { x: 1, y: 0 }) : (n = { x: 0, y: 0 }, r = { x: 0, y: 1 }), { factor: e, start: t.convert(n), end: t.convert(r) } }, t.prototype._getAxisPosition = function(t, e, n, r) { var i = "",
                        o = this.options; if (o[r] && o[r].position) i = o[r].position;
                    else { var a = t.type;
                        t.isRect ? "x" === e ? i = "bottom" : "y" === e && (i = n ? "right" : "left") : i = "helix" === a ? "helix" : "x" === e ? t.isTransposed ? "radius" : "circle" : t.isTransposed ? "circle" : "radius" } return i }, t.prototype._getAxisDefaultCfg = function(t, e, n, i) { var o = {},
                        s = this.options,
                        u = e.field; return (!(!a.axis[i] || !a.axis[i].title) || s[u] && s[u].title) && (o.title = { text: e.alias || u }), o = r.deepMix({}, a.axis[i], o, s[u]), o.ticks = e.getTicks(), t.isPolar && !e.isCategory && "x" === n && Math.abs(t.endAngle - t.startAngle) === 2 * Math.PI && o.ticks.pop(), o.coord = t, o.label && r.isNil(o.label.autoRotate) && (o.label.autoRotate = !0), o }, t.prototype._getAxisCfg = function(t, e, n, i) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                        a = arguments[5],
                        s = this,
                        u = s._getAxisPosition(t, i, o, e.field),
                        c = s._getAxisDefaultCfg(t, e, i, u); if (!r.isEmpty(c.grid) && n) { var l = [],
                            h = function(t) { var e = []; if (t.length > 0) { var n = (e = t.slice(0))[0],
                                        r = e[e.length - 1];
                                    0 !== n.value && e.unshift({ value: 0 }), 1 !== r.value && e.push({ value: 1 }) } return e }(n.getTicks()); if (h.length) { var f = c.ticks;
                            r.each(f, function(e, n) { var u = [],
                                    p = e.value; if ("center" === c.grid.align && (p = s._getMiddleValue(p, f, n)), !r.isNil(p)) { var g = t.x,
                                        d = t.y;
                                    r.each(h, function(e) { var n = "x" === i ? p : e.value,
                                            r = "x" === i ? e.value : p,
                                            o = t.convert({ x: n, y: r }); if (t.isPolar) { var a = t.circleCentre;
                                            d.start > d.end && (r = 1 - r), o.flag = g.start > g.end ? 0 : 1, o.radius = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)) } u.push(o) }), l.push({ _id: a + "-" + i + o + "-grid-" + e.tickValue, points: u }) } }), f.length % 2 == 0 && "center" === c.grid.align && c.grid.alternateColor && l.push({ points: [{ x: t.end.x, y: t.start.y }, { x: t.end.x, y: t.end.y }] }) } c.grid.items = l } return c }, t.prototype._getHelixCfg = function(t) { for (var e = {}, n = t.a, r = t.startAngle, i = t.endAngle, o = [], a = 0; a <= 100; a++) { var s = t.convert({ x: a / 100, y: 0 });
                        o.push(s.x), o.push(s.y) } var u = t.convert({ x: 0, y: 0 }); return e.a = n, e.startAngle = r, e.endAngle = i, e.crp = o, e.axisStart = u, e.center = t.center, e.inner = t.y.start, e }, t.prototype._drawAxis = function(t, e, n, o, a, s, u) { var c = this.container,
                        l = void 0,
                        h = void 0; "cartesian" === t.type ? (l = i.Line, h = this._getLineCfg(t, e, o, u)) : "helix" === t.type && "x" === o ? (l = i.Helix, h = this._getHelixCfg(t)) : "x" === o ? (l = i.Circle, h = this._getCircleCfg(t)) : (l = i.Line, h = this._getRadiusCfg(t)); var f = this._getAxisCfg(t, e, n, o, u, a);
                    f = r.mix({}, f, h), "y" === o && s && "circle" === s.get("type") && (f.circle = s), f._id = a + "-" + o, r.isNil(u) || (f._id = a + "-" + o + u); var p = c.addGroup(l, f); return this.axes.push(p), p }, t.prototype.createAxis = function(t, e, n) { var i = this,
                        o = this.coord,
                        a = o.type; if ("theta" !== a && ("polar" !== a || !o.isTransposed)) { var s = void 0;
                        t && !i._isHide(t.field) && (s = i._drawAxis(o, t, e[0], "x", n)), r.isEmpty(e) || "helix" === a || r.each(e, function(e, r) { i._isHide(e.field) || i._drawAxis(o, e, t, "y", n, s, r) }) } }, t.prototype.changeVisible = function(t) { var e = this.axes;
                    r.each(e, function(e) { e.set("visible", t) }) }, t.prototype.clear = function() { var t = this.axes;
                    r.each(t, function(t) { t.remove() }), this.axes = [] }, t }();
        t.exports = s }, function(t, e, n) { t.exports = { Line: n(430), Circle: n(432), Helix: n(433), PolyLine: n(434) } }, function(t, e, n) { var r = n(60),
            i = n(0),
            o = n(2).MatrixUtil.vec2,
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return i.mix({}, e, { x: null, y: null, line: { lineWidth: 1, stroke: "#C0D0E0" }, tickLine: { lineWidth: 1, stroke: "#C0D0E0", length: 5 }, isVertical: !1, start: null, end: null }) }, e.prototype._getAvgLabelLength = function(t) { var e = t.get("children"); return e[1].attr("x") - e[0].attr("x") }, e.prototype.getSideVector = function(t) { var e = this.get("factor"),
                        n = this.get("isVertical"),
                        r = this.get("start"),
                        i = this.get("end"),
                        a = this.getAxisVector(),
                        s = o.normalize([], a),
                        u = !1;
                    (n && r.y < i.y || !n && r.x > i.x) && (u = !0); var c = o.vertical([], s, u); return o.scale([], c, t * e) }, e.prototype.getAxisVector = function() { var t = this.get("start"),
                        e = this.get("end"); return [e.x - t.x, e.y - t.y] }, e.prototype.getLinePath = function() { var t = this.get("start"),
                        e = this.get("end"),
                        n = []; return n.push(["M", t.x, t.y]), n.push(["L", e.x, e.y]), n }, e.prototype.getTickEnd = function(t, e) { var n = this.getSideVector(e); return { x: t.x + n[0], y: t.y + n[1] } }, e.prototype.getTickPoint = function(t) { var e = this.get("start"),
                        n = this.get("end"),
                        r = n.x - e.x,
                        i = n.y - e.y; return { x: e.x + r * t, y: e.y + i * t } }, e.prototype.renderTitle = function() { var t = this.get("title"),
                        e = this.getTickPoint(.5),
                        n = t.offset; if (!n) { n = 20; var r = this.get("labelsGroup"); if (r) { n += this.getMaxLabelWidth(r) + (this.get("label").offset || this.get("_labelOffset")) } } var a = t.textStyle,
                        s = i.mix({}, a); if (t.text) { var u = this.getAxisVector(); if (t.autoRotate && !a.rotate) { var c = 0; if (!i.snapEqual(u[1], 0)) { var l = [u[0], u[1]];
                                c = o.angleTo(l, [1, 0], !0) } s.rotate = c * (180 / Math.PI) } else a.rotate && (s.rotate = a.rotate / 180 * Math.PI); var h = this.getSideVector(n),
                            f = void 0,
                            p = t.position;
                        f = "start" === p ? { x: this.get("start").x + h[0], y: this.get("start").y + h[1] } : "end" === p ? { x: this.get("end").x + h[0], y: this.get("end").y + h[1] } : { x: e.x + h[0], y: e.y + h[1] }, s.x = f.x, s.y = f.y, s.text = t.text;
                        this.addShape("Text", { zIndex: 2, attrs: s }).name = "axis-title" } }, e.prototype.autoRotateLabels = function() { var t = this.get("labelsGroup"),
                        e = this.get("title"); if (t) { var n = this.get("label").offset,
                            r = e ? e.offset : 48; if (r < 0) return; var o = this.getAxisVector(),
                            a = void 0,
                            s = void 0; if (i.snapEqual(o[0], 0) && e && e.text)(s = this.getMaxLabelWidth(t)) > r - n - 12 && (a = -1 * Math.acos((r - n - 12) / s));
                        else if (i.snapEqual(o[1], 0) && t.getCount() > 1) { var u = Math.abs(this._getAvgLabelLength(t));
                            (s = this.getMaxLabelWidth(t)) > u && (a = Math.asin(1.25 * (r - n - 12) / s)) } if (a) { var c = this.get("factor");
                            i.each(t.get("children"), function(t) { t.rotateAtStart(a), i.snapEqual(o[1], 0) && (c > 0 ? t.attr("textAlign", "left") : t.attr("textAlign", "right")) }) } } }, e }(r);
        t.exports = a }, function(t, e, n) { var r = n(2).Group,
            i = n(0),
            o = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { zIndex: 1, type: "line", lineStyle: null, items: null, alternateColor: null, matrix: null, hideFirstLine: !1, hideLastLine: !1 } }, e.prototype._renderUI = function() { t.prototype._renderUI.call(this), this._drawLines() }, e.prototype._drawLines = function() { var t = this.get("lineStyle"),
                        e = this.get("items");
                    e && e.length && (this._precessItems(e), this._drawGridLines(e, t)) }, e.prototype._precessItems = function(t) { var e = this,
                        n = void 0;
                    i.each(t, function(t, r) { n && e.get("alternateColor") && e._drawAlternativeBg(t, n, r), n = t }) }, e.prototype._drawGridLines = function(t, e) { var n = this,
                        r = this.get("type"),
                        o = void 0,
                        a = void 0,
                        s = void 0,
                        u = void 0,
                        c = t.length; "line" === r || "polygon" === r ? i.each(t, function(t, l) { n.get("hideFirstLine") && 0 === l || n.get("hideLastLine") && l === c - 1 || (u = t.points, a = [], "line" === r ? (a.push(["M", u[0].x, u[0].y]), a.push(["L", u[u.length - 1].x, u[u.length - 1].y])) : i.each(u, function(t, e) { 0 === e ? a.push(["M", t.x, t.y]) : a.push(["L", t.x, t.y]) }), s = i.mix({}, e, { path: a }), (o = n.addShape("path", { attrs: s })).name = "axis-grid", o._id = t._id, o.set("coord", n.get("coord"))) }) : i.each(t, function(t, r) { n.get("hideFirstLine") && 0 === r || n.get("hideLastLine") && r === c - 1 || (u = t.points, a = [], i.each(u, function(t, e) { var n = t.radius;
                            0 === e ? a.push(["M", t.x, t.y]) : a.push(["A", n, n, 0, 0, t.flag, t.x, t.y]) }), s = i.mix({}, e, { path: a }), (o = n.addShape("path", { attrs: s })).name = "axis-grid", o._id = t._id, o.set("coord", n.get("coord"))) }) }, e.prototype._drawAlternativeBg = function(t, e, n) { var r = this.get("alternateColor"),
                        o = void 0,
                        a = void 0,
                        s = void 0;
                    i.isString(r) ? a = r : i.isArray(r) && (a = r[0], s = r[1]), n % 2 == 0 ? s && (o = this._getBackItem(e.points, t.points, s)) : a && (o = this._getBackItem(e.points, t.points, a)); var u = this.addShape("Path", { attrs: o });
                    u.name = "axis-grid-rect", u._id = t._id && t._id.replace("grid", "grid-rect"), u.set("coord", this.get("coord")) }, e.prototype._getBackItem = function(t, e, n) { var r = [],
                        o = this.get("type"); if ("line" === o) r.push(["M", t[0].x, t[0].y]), r.push(["L", t[t.length - 1].x, t[t.length - 1].y]), r.push(["L", e[e.length - 1].x, e[e.length - 1].y]), r.push(["L", e[0].x, e[0].y]), r.push(["Z"]);
                    else if ("polygon" === o) { i.each(t, function(t, e) { 0 === e ? r.push(["M", t.x, t.y]) : r.push(["L", t.x, t.y]) }); for (var a = e.length - 1; a >= 0; a--) r.push(["L", e[a].x, e[a].y]);
                        r.push(["Z"]) } else { var s = t[0].flag;
                        i.each(t, function(t, e) { var n = t.radius;
                            0 === e ? r.push(["M", t.x, t.y]) : r.push(["A", n, n, 0, 0, t.flag, t.x, t.y]) }); for (var u = e.length - 1; u >= 0; u--) { var c = e[u],
                                l = c.radius;
                            u === e.length - 1 ? r.push(["M", c.x, c.y]) : r.push(["A", l, l, 0, 0, 1 === s ? 0 : 1, c.x, c.y]) } } return { fill: n, path: r } }, e }(r);
        t.exports = o }, function(t, e, n) { var r = n(0),
            i = n(60),
            o = n(2).MatrixUtil.vec2,
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "circle", tickInterval: null, startAngle: -Math.PI / 2, endAngle: 3 * Math.PI / 2, line: { lineWidth: 1, stroke: "#C0D0E0" }, tickLine: { lineWidth: 1, stroke: "#C0D0E0", length: 5 }, _labelOffset: 5 }) }, e.prototype.parseTick = function(t, e, n) { return { text: t, value: e / n } }, e.prototype._getCirclePoint = function(t, e) { var n = this.get("center"); return e = e || this.get("radius"), { x: n.x + Math.cos(t) * e, y: n.y + Math.sin(t) * e } }, e.prototype.getTickPoint = function(t) { var e = this.get("startAngle"),
                        n = e + (this.get("endAngle") - e) * t; return this._getCirclePoint(n) }, e.prototype.getSideVector = function(t, e) { var n = this.get("center"),
                        i = [e.x - n.x, e.y - n.y]; if (!r.isNil(t)) { var a = o.length(i);
                        o.scale(i, i, t / a) } return i }, e.prototype.getSidePoint = function(t, e) { var n = this.getSideVector(e, t); return { x: t.x + n[0], y: t.y + n[1] } }, e.prototype.getTickEnd = function(t, e) { var n = this.get("tickLine"); return e = e || n.length, this.getSidePoint(t, e) }, e.prototype.getTextAnchor = function(t) { var e = void 0; return r.snapEqual(t[0], 0) ? e = "center" : t[0] > 0 ? e = "left" : t[0] < 0 && (e = "right"), e }, e.prototype.getLinePath = function() { var t = this.get("center"),
                        e = t.x,
                        n = t.y,
                        r = this.get("radius"),
                        i = r,
                        o = this.get("startAngle"),
                        a = this.get("endAngle"),
                        s = this.get("inner"),
                        u = []; if (Math.abs(a - o) === 2 * Math.PI) u = [
                        ["M", e, n],
                        ["m", 0, -i],
                        ["a", r, i, 0, 1, 1, 0, 2 * i],
                        ["a", r, i, 0, 1, 1, 0, -2 * i],
                        ["z"]
                    ];
                    else { var c = this._getCirclePoint(o),
                            l = this._getCirclePoint(a),
                            h = Math.abs(a - o) > Math.PI ? 1 : 0,
                            f = o > a ? 0 : 1; if (s) { var p = this.getSideVector(s * r, c),
                                g = this.getSideVector(s * r, l),
                                d = { x: p[0] + e, y: p[1] + n },
                                y = { x: g[0] + e, y: g[1] + n };
                            u = [
                                ["M", d.x, d.y],
                                ["L", c.x, c.y],
                                ["A", r, i, 0, h, f, l.x, l.y],
                                ["L", y.x, y.y],
                                ["A", r * s, i * s, 0, h, Math.abs(f - 1), d.x, d.y]
                            ] } else u = [
                            ["M", e, n],
                            ["L", c.x, c.y],
                            ["A", r, i, 0, h, f, l.x, l.y],
                            ["L", e, n]
                        ] } return u }, e.prototype.addLabel = function(e, n, r) { var i = this.get("label").offset || this.get("_labelOffset") || .001;
                    n = this.getSidePoint(n, i), t.prototype.addLabel.call(this, e, n, r) }, e.prototype.autoRotateLabels = function() { var t = this.get("ticks"),
                        e = this.get("labelsGroup"); if (e && t.length > 12) { var n = this.get("radius"),
                            i = this.get("startAngle"),
                            o = this.get("endAngle") - i,
                            a = o / (t.length - 1),
                            s = Math.sin(a / 2) * n * 2,
                            u = this.getMaxLabelWidth(e);
                        r.each(e.get("children"), function(e, n) { var r = t[n].value * o + i,
                                a = r % (2 * Math.PI);
                            u < s ? (a <= 0 && (r += Math.PI), a > Math.PI && (r -= Math.PI), r -= Math.PI / 2, e.attr("textAlign", "center")) : a > Math.PI / 2 ? r -= Math.PI : a < Math.PI / 2 * -1 && (r += Math.PI), e.rotateAtStart(r) }) } }, e }(i);
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(60),
            o = n(2),
            a = o.MatrixUtil,
            s = o.PathUtil,
            u = a.vec2,
            c = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "helix", line: { lineWidth: 1, stroke: "#C0D0E0" }, tickLine: { lineWidth: 1, stroke: "#C0D0E0", length: 5 }, startAngle: 1.25 * Math.PI, endAngle: 7.25 * Math.PI, a: 0, center: null, axisStart: null, crp: [] }) }, e.prototype.getLinePath = function() { var t = this.get("crp"),
                        e = this.get("axisStart"),
                        n = s.catmullRomToBezier(t); return n.unshift(["M", e.x, e.y]), n }, e.prototype.getTickPoint = function(t) { var e = this.get("startAngle"),
                        n = e + (this.get("endAngle") - e) * t; return this._getHelixPoint(n) }, e.prototype._getHelixPoint = function(t) { var e = this.get("center"),
                        n = this.get("a") * t + this.get("inner"); return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, e.prototype.getSideVector = function(t, e) { var n = this.get("center"),
                        r = [e.x - n.x, e.y - n.y]; if (t) { var i = u.length(r);
                        u.scale(r, r, t / i) } return r }, e.prototype.getSidePoint = function(t, e) { var n = this.getSideVector(e, t); return { x: t.x + n[0], y: t.y + n[1] } }, e.prototype.getTickEnd = function(t, e) { var n = this.get("tickLine"); return e = e || n.length, this.getSidePoint(t, e) }, e }(i);
        t.exports = c }, function(t, e, n) { var r = n(0),
            i = n(60),
            o = n(2),
            a = o.MatrixUtil,
            s = o.PathUtil,
            u = a.vec2,
            c = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "polyline" }) }, e.prototype.getLinePath = function() { var t = this.get("tickPoints"),
                        e = this.get("start"),
                        n = this.get("end"),
                        i = [];
                    i.push(e.x), i.push(e.y), r.each(t, function(t) { i.push(t.x), i.push(t.y) }), i.push(n.x), i.push(n.y); var o = s.catmullRomToBezier(i); return o.unshift(["M", e.x, e.y]), o }, e.prototype.getTickPoint = function(t, e) { return this.get("tickPoints")[e] }, e.prototype.getTickEnd = function(t, e, n) { var r = this.get("tickLine"),
                        i = e || r.length,
                        o = this.getSideVector(i, t, n); return { x: t.x + o[0], y: t.y + o[1] } }, e.prototype.getSideVector = function(t, e, n) { var r = void 0; if (0 === n) r = this.get("start");
                    else { r = this.get("tickPoints")[n - 1] } var i = [e.x - r.x, e.y - r.y],
                        o = u.normalize([], i),
                        a = u.vertical([], o, !1); return u.scale([], a, t) }, e }(i);
        t.exports = c }, function(t, e, n) { t.exports = { Line: n(436), Text: n(437), Image: n(438), Region: n(439), Html: n(440), Arc: n(441) } }, function(t, e, n) { var r = n(0),
            i = n(24),
            o = n(2).MatrixUtil.vec2,
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "line", zIndex: 15, start: null, end: null, lineStyle: { stroke: "#000", lineWidth: 1 }, text: { position: "end", autoRotate: !0, style: { fill: "#999", fontSize: 12, fontWeight: 500, fontFamily: "sans-serif" }, content: null } }) }, e.prototype.render = function(t, e) { var n = this.parsePoint(t, this.start),
                        r = this.parsePoint(t, this.end),
                        i = e.addGroup();
                    this._drawLines(n, r, i), this.text && this.text.content && this._drawText(n, r, i), this.el = i }, e.prototype._drawLines = function(t, e, n) { var i = [
                        ["M", t.x, t.y],
                        ["L", e.x, e.y]
                    ];
                    n.addShape("Path", { attrs: r.mix({ path: i }, this.lineStyle) }).name = "guide-line" }, e.prototype._drawText = function(t, e, n) { var i = this.text,
                        a = i.position,
                        s = i.style,
                        u = void 0;
                    ((u = "start" === a ? 0 : "center" === a ? .5 : r.isString(a) && -1 !== a.indexOf("%") ? parseInt(a, 10) / 100 : r.isNumber(a) ? a : 1) > 1 || u < 0) && (u = 1); var c = { x: t.x + (e.x - t.x) * u, y: t.y + (e.y - t.y) * u }; if (i.offsetX && (c.x += i.offsetX), i.offsetY && (c.y += i.offsetY), c.text = i.content, c = r.mix({}, c, s), i.autoRotate && !s.rotate) { var l = o.angleTo([e.x - t.x, e.y - t.y], [1, 0], 1);
                        c.rotate = l } else s.rotate && (c.rotate = s.rotate * Math.PI / 180);
                    n.addShape("Text", { attrs: c }).name = "guide-line-text" }, e }(i);
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "text", zIndex: 15, position: null, content: null, style: { fill: "#999", fontSize: 12, fontWeight: 500, textAlign: "center" }, offsetX: null, offsetY: null }) }, e.prototype.render = function(t, e) { var n = this.position,
                        i = this.parsePoint(t, n),
                        o = r.mix({}, this.style);
                    this.offsetX && (i.x += this.offsetX), this.offsetY && (i.y += this.offsetY), o.rotate && (o.rotate = o.rotate * Math.PI / 180); var a = e.addShape("Text", { zIndex: this.zIndex, attrs: r.mix({ text: this.content }, o, i) });
                    a.name = "guide-text", this.el = a }, e }(n(24));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "image", zIndex: 1, start: null, end: null, src: null, offsetX: null, offsetY: null }) }, e.prototype.render = function(t, e) { var n = this.parsePoint(t, this.start),
                        r = { x: n.x, y: n.y }; if (r.img = this.src, this.end) { var i = this.parsePoint(t, this.end);
                        r.width = Math.abs(i.x - n.x), r.height = Math.abs(n.y - i.y) } else this.width && (r.width = this.width), this.height && (r.height = this.height);
                    this.offsetX && (r.x += this.offsetX), this.offsetY && (r.y += this.offsetY); var o = e.addShape("Image", { zIndex: 1, attrs: r });
                    o.name = "guide-image", this.el = o }, e }(n(24));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "region", zIndex: 1, start: null, end: null, style: { lineWidth: 0, fill: "#CCD7EB", opacity: .4 } }) }, e.prototype.render = function(t, e) { var n = this.style,
                        i = this._getPath(t),
                        o = e.addShape("path", { zIndex: this.zIndex, attrs: r.mix({ path: i }, n) });
                    o.name = "guide-region", this.el = o }, e.prototype._getPath = function(t) { var e = this.parsePoint(t, this.start),
                        n = this.parsePoint(t, this.end),
                        r = []; return r.push(["M", e.x, e.y]), r.push(["L", n.x, e.y]), r.push(["L", n.x, n.y]), r.push(["L", e.x, n.y]), r.push(["z"]), r }, e }(n(24));
        t.exports = i }, function(t, e, n) { var r = n(0),
            i = n(2).DomUtil,
            o = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "html", zIndex: 15, position: null, alignX: "middle", alignY: "middle", offsetX: null, offsetY: null, html: null }) }, e.prototype.render = function(t, e) { var n = this.parsePoint(t, this.position),
                        o = e.get("canvas").get("el").parentNode,
                        a = i.createDom('<div class="g-guide"></div>');
                    o.appendChild(a); var s = this.html;
                    r.isFunction(s) && (s = s(this.xScales, this.yScales)); var u = i.createDom(s);
                    a.appendChild(u), this._setDomPosition(a, u, n), this.el = a }, e.prototype._setDomPosition = function(t, e, n) { var o = this.alignX,
                        a = this.alignY,
                        s = i.getOuterWidth(e),
                        u = i.getOuterHeight(e),
                        c = { x: n.x, y: n.y }; "middle" === o && "top" === a ? c.x -= r.round(s / 2) : "middle" === o && "bottom" === a ? (c.x -= r.round(s / 2), c.y -= r.round(u)) : "left" === o && "bottom" === a ? c.y -= r.round(u) : "left" === o && "middle" === a ? c.y -= r.round(u / 2) : "left" === o && "top" === a ? (c.x = n.x, c.y = n.y) : "right" === o && "bottom" === a ? (c.x -= r.round(s), c.y -= r.round(u)) : "right" === o && "middle" === a ? (c.x -= r.round(s), c.y -= r.round(u / 2)) : "right" === o && "top" === a ? c.x -= r.round(s) : (c.x -= r.round(s / 2), c.y -= r.round(u / 2)), this.offsetX && (c.x += this.offsetX), this.offsetY && (c.y += this.offsetY), i.modifyCSS(t, { position: "absolute", top: Math.round(c.y) + "px", left: Math.round(c.x) + "px", visibility: "visible", zIndex: this.zIndex }) }, e.prototype.remove = function() { var t = this.el;
                    t && t.parentNode.removeChild(t) }, e }(n(24));
        t.exports = o }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "arc", zIndex: 15, start: null, end: null, style: { stroke: "#999", lineWidth: 1 } }) }, e.prototype.render = function(t, e) { var n = this.parsePoint(t, this.start),
                        i = this.parsePoint(t, this.end),
                        o = t.getCenter(),
                        a = Math.sqrt((n.x - o.x) * (n.x - o.x) + (n.y - o.y) * (n.y - o.y)),
                        s = Math.atan2(n.y - o.y, n.x - o.x),
                        u = Math.atan2(i.y - o.y, i.x - o.x),
                        c = e.addShape("arc", { zIndex: this.zIndex, attrs: r.mix({ x: o.x, y: o.y, r: a, startAngle: s, endAngle: u }, this.style) });
                    c.name = "guide-arc", this.el = c }, e }(n(24));
        t.exports = i }, function(t, e, n) { t.exports = { Category: n(443), Color: n(444), Size: n(446) } }, function(t, e, n) {
        function r(t, e) { return t.getElementsByClassName(e)[0] }

        function i(t, e) { var n = t.className; return (n = n.split(" ")).indexOf(e) > -1 ? t : t.parentNode ? t.parentNode.className === d ? t.parentNode : i(t.parentNode, e) : null }

        function o(t, e) { var n = null,
                r = e instanceof f ? e.get("value") : e; return s.each(t, function(t) { if (t.value === r) return n = t, !1 }), n }

        function a(t, e) { return t.findBy(function(t) { return t.name === e }) } var s = n(0),
            u = n(185),
            c = n(2),
            l = c.DomUtil,
            h = c.Event,
            f = c.Group,
            p = n(1),
            g = p.legend.html,
            d = "g2-legend",
            y = "g2-legend-list",
            v = "g2-legend-list-item",
            x = "g2-legend-marker",
            m = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return s.mix({}, e, { type: "category-legend", items: null, itemGap: 5, titleGap: 15, itemMarginBottom: 8, itemsGroup: null, layout: "horizontal", allowAllCanceled: !1, backPadding: [0, 0, 0, 0], checkable: !0, unCheckColor: "#ccc", background: { fill: "#fff", fillOpacity: 0 }, itemWidth: null, textStyle: { fill: "#333", fontSize: 12, textAlign: "start", textBaseline: "middle", fontFamily: p.fontFamily }, _wordSpaceing: 8, useHtml: !1, autoPosition: !0, container: null, containerTpl: '<div class="' + d + '"><h4 class="g2-legend-title"></h4><ul class="' + y + '"></ul></div>', _defaultItemTpl: '<li class="' + v + ' item-{index} {checked}" data-color="{originColor}" data-value="{originValue}"><i class="' + x + '" style="background-color:{color};"></i><span class="g2-legend-text">{value}</span></li>', itemTpl: null, clickable: !0, selectedMode: "multiple", reversed: !1, autoWrap: !0 }) }, e.prototype._beforeRenderUI = function() { t.prototype._beforeRenderUI.call(this) }, e.prototype._renderUI = function() { this.get("useHtml") ? this._renderHTML() : (t.prototype._renderUI.call(this), this._renderItems(), this.get("autoWrap") && this._adjustItems(), this._renderBack()) }, e.prototype._bindUI = function() { this.get("hoverable") && (this.on("mousemove", s.wrapBehavior(this, "_onMousemove")), this.on("mouseleave", s.wrapBehavior(this, "_onMouseleave"))), this.get("clickable") && this.on("click", s.wrapBehavior(this, "_onClick")) }, e.prototype._getLegendItem = function(t) { var e = t.get("parent"); return e && "legendGroup" === e.name ? e : null }, e.prototype._onMousemove = function(t) { var e = this._getLegendItem(t.currentTarget); if (e && e.get("checked")) { var n = this.get("items"),
                            r = new h("itemhover", t, !0, !0);
                        r.item = o(n, e), r.checked = e.get("checked"), this.emit("itemhover", r) } else e || this.emit("itemunhover", t) }, e.prototype._onMouseleave = function(t) { this.emit("itemunhover", t) }, e.prototype._onClick = function(t) { var e = this._getLegendItem(t.currentTarget),
                        n = this.get("items"); if (e && !e.get("destroyed")) { var r = e.get("checked"); if (!this.get("allowAllCanceled") && r && 1 === this.getCheckedCount()) return; var i = this.get("selectedMode"),
                            u = o(n, e),
                            c = new h("itemclick", t, !0, !0);
                        c.item = u, c.currentTarget = e, c.checked = "single" === i || !r; var l = this.get("unCheckColor"),
                            f = this.get("textStyle").fill,
                            p = void 0,
                            g = void 0,
                            d = void 0; if ("single" === i) { var y = this.get("itemsGroup").get("children");
                            s.each(y, function(t) { p = a(t, "legend-marker"), g = a(t, "legend-text"), d = a(t, "legend-item"), t !== e ? (p.attr("fill") && p.attr("fill", l), p.attr("stroke") && p.attr("stroke", l), g.attr("fill", l), p.setSilent("checked", !1), g.setSilent("checked", !1), d.setSilent("checked", !1), t.setSilent("checked", !1)) : (p.attr("fill") && p.attr("fill", u.marker.fill), p.attr("stroke") && p.attr("stroke", u.marker.stroke), g.attr("fill", f), p.setSilent("checked", !0), g.setSilent("checked", !0), d.setSilent("checked", !0), t.setSilent("checked", !0)) }) } else p = a(e, "legend-marker"), g = a(e, "legend-text"), d = a(e, "legend-item"), p.attr("fill") && p.attr("fill", r ? l : u.marker.fill), p.attr("stroke") && p.attr("stroke", r ? l : u.marker.stroke), g.attr("fill", r ? l : f), e.setSilent("checked", !r), p.setSilent("checked", !r), g.setSilent("checked", !r), d.setSilent("checked", !r);
                        this.emit("itemclick", c) } }, e.prototype._renderHTML = function() { var t = this,
                        e = this,
                        n = e.get("canvas").get("el").parentNode,
                        a = this.get("title"),
                        u = e.get("containerTpl"),
                        c = l.createDom(u),
                        h = r(c, "g2-legend-title"),
                        f = r(c, y),
                        p = e.get("unCheckColor"),
                        m = e.get("selectedMode");
                    l.modifyCSS(f, s.mix({}, g[y], e.get(y))), h && (a && a.text ? (h.innerHTML = a.text, l.modifyCSS(h, s.mix({}, g["g2-legend-title"], e.get("g2-legend-title")))) : c.removeChild(h)); var b = e.get("items"),
                        _ = e.get("_defaultItemTpl"),
                        w = e.get("itemTpl");
                    w && w !== _ && (_ = w), e.get("reversed") && b.reverse(); var S = e.get("position"),
                        M = s.mix({}, g[v], { display: "right" === S || "left" === S ? "block" : "inline-block" }, e.get(v)),
                        C = s.mix({}, g[x], e.get(x)); if (s.each(b, function(t, n) { var i = t.checked,
                                o = e._formatItemValue(t.value),
                                a = t.marker.fill || t.marker.stroke,
                                u = i ? a : p,
                                c = void 0;
                            c = s.isFunction(_) ? _(o, u, i, n) : _; var h = s.substitute(c, { index: n, checked: i ? "checked" : "unChecked", value: o, color: u, originColor: a, originValue: t.value }),
                                g = l.createDom(h),
                                d = r(g, x);
                            l.modifyCSS(g, M), d && l.modifyCSS(d, C), i || (g.style.color = p, d && (d.style.backgroundColor = p)), f.appendChild(g) }), e.get("clickable")) { var P = f.childNodes;
                        c.onclick = function(n) { var a = n.target,
                                u = a.className; if (!((u = u.split(" ")).indexOf(d) > -1 || u.indexOf(y) > -1)) { var c = i(a, v),
                                    l = r(c, "g2-legend-text"),
                                    h = r(c, x),
                                    f = o(b, c.getAttribute("data-value")); if (f) { f.checked = "single" === m || !f.checked; var g = c.className,
                                        _ = c.getAttribute("data-color"); if ("single" === m) s.each(P, function(t) { if (t !== c) { r(t, x).style.backgroundColor = p, t.className = s.replace(t.className, "checked", "unChecked"), t.style.color = p;
                                            o(b, t.getAttribute("data-value")).checked = !1 } else l && (l.style.color = e.get("textStyle").fill), h && (h.style.backgroundColor = _), c.className = s.replace(g, "unChecked", "checked") });
                                    else { var w = g.includes("checked"),
                                            S = 0; if (s.each(P, function(t) { t.className.includes("checked") && S++ }), !t.get("allowAllCanceled") && w && 1 === S) return;
                                        w ? (h && (h.style.backgroundColor = p), c.className = s.replace(g, "checked", "unChecked"), c.style.color = p) : (h && (h.style.backgroundColor = _), c.className = s.replace(g, "unChecked", "checked"), c.style.color = e.get("textStyle").fill) } e.emit("itemclick", { item: f, currentTarget: c, checked: "single" === m || f.checked }) } } } } e.get("hoverable") && (c.onmousemove = function(t) { var n = t.target,
                            r = n.className; if (!((r = r.split(" ")).indexOf(d) > -1 || r.indexOf(y) > -1)) { var a = i(n, v),
                                s = a.className,
                                u = o(b, a.getAttribute("data-value"));
                            u && s.includes("checked") ? e.emit("itemhover", { item: u, currentTarget: a, checked: u.checked }) : u || e.emit("itemunhover", t) } }, c.onmouseout = function(t) { e.emit("itemunhover", t) }); var A = e.get("container"); if (/^\#/.test(A)) { var k = A.replace("#", "");
                        (A = document.getElementById(k)).appendChild(c) } else { var O = e.get("position"),
                            T = e.get("canvas"),
                            j = {};
                        j = "left" === O || "right" === O ? { maxHeight: (e.get("maxLength") || T.get("height")) + "px" } : { maxWidth: (e.get("maxLength") || T.get("width")) + "px" }, l.modifyCSS(c, s.mix({}, g[d], j, e.get(d))), n.appendChild(c) } e.set("legendWrapper", c) }, e.prototype._renderItems = function() { var t = this,
                        e = t.get("items");
                    t.get("reversed") && e.reverse(), s.each(e, function(e, n) { t._addItem(e, n) }) }, e.prototype._renderBack = function() { var t = this.get("backPadding"),
                        e = this.get("background");
                    this.renderBack(t, e) }, e.prototype._formatItemValue = function(t) { var e = this.get("itemFormatter"); return e && (t = e.call(this, t)), t }, e.prototype._getNextX = function() { var t = this.get("layout"),
                        e = this.get("itemGap"),
                        n = this.get("itemsGroup"),
                        r = this.get("itemWidth"),
                        i = n.get("children"),
                        o = 0; return "horizontal" === t && s.each(i, function(t) { o += (r || t.getBBox().width) + e }), o }, e.prototype._getNextY = function() { var t = this.get("itemMarginBottom"),
                        e = this.get("titleShape") ? this.get("titleGap") : 0,
                        n = this.get("layout"),
                        r = this.get("itemsGroup"),
                        i = this.get("titleShape"),
                        o = r.get("children"),
                        a = e; return i && (a += i.getBBox().height), "vertical" === n && s.each(o, function(e) { a += e.getBBox().height + t }), a }, e.prototype._addItem = function(t) { var e = this.get("itemsGroup"),
                        n = this._getNextX(),
                        r = this._getNextY(),
                        i = this.get("unCheckColor"),
                        o = e.addGroup({ x: n, y: r, value: t.value, checked: t.checked }),
                        a = this.get("textStyle"),
                        u = this.get("_wordSpaceing"),
                        c = 0; if (t.marker) { var l = s.mix({}, t.marker, { x: t.marker.radius + n, y: r });
                        t.checked || (l.fill && (l.fill = i), l.stroke && (l.stroke = i)); var h = o.addShape("marker", { type: "marker", attrs: l });
                        h.attr("cursor", "pointer"), h.name = "legend-marker", c += h.getBBox().width + u } var f = s.mix({}, a, { x: c + n, y: r, text: this._formatItemValue(t.value) });
                    t.checked || s.mix(f, { fill: i }); var p = o.addShape("text", { attrs: f });
                    p.attr("cursor", "pointer"), p.name = "legend-text"; var g = o.getBBox(),
                        d = this.get("itemWidth"),
                        y = o.addShape("rect", { attrs: { x: n, y: r - g.height / 2, fill: "#fff", fillOpacity: 0, width: d || g.width, height: g.height } }); return y.attr("cursor", "pointer"), y.setSilent("origin", t), y.name = "legend-item", o.name = "legendGroup", o }, e.prototype._adjustHorizontal = function() { var t = this.get("itemsGroup"),
                        e = t.get("children"),
                        n = this.get("maxLength"),
                        r = this.get("itemGap"),
                        i = this.get("itemMarginBottom"),
                        o = this.get("titleShape") ? this.get("titleGap") : 0,
                        a = 0,
                        u = 0,
                        c = void 0,
                        l = void 0,
                        h = void 0,
                        f = this.get("itemWidth");
                    t.getBBox().width > n && s.each(e, function(t) { h = t.getBBox(), c = f || h.width, l = h.height + i, n - u < c && (a++, u = 0), t.move(u, a * l + o), u += c + r }) }, e.prototype._adjustVertical = function() { var t = this.get("itemsGroup"),
                        e = this.get("titleShape"),
                        n = t.get("children"),
                        r = this.get("maxLength"),
                        i = this.get("itemGap"),
                        o = this.get("itemMarginBottom"),
                        a = this.get("titleGap"),
                        u = e ? e.getBBox().height + a : 0,
                        c = this.get("itemWidth"),
                        l = u,
                        h = void 0,
                        f = void 0,
                        p = void 0,
                        g = 0,
                        d = 0;
                    t.getBBox().height > r && s.each(n, function(t) { p = t.getBBox(), h = p.width, f = p.height, c ? g = c + i : h > g && (g = h + i), r - l < f ? (l = u, d += g, t.move(d, u)) : t.move(d, l), l += f + o }) }, e.prototype._adjustItems = function() { "horizontal" === this.get("layout") ? this._adjustHorizontal() : this._adjustVertical() }, e.prototype.getWidth = function() { return this.get("useHtml") ? l.getOuterWidth(this.get("legendWrapper")) : t.prototype.getWidth.call(this) }, e.prototype.getHeight = function() { return this.get("useHtml") ? l.getOuterHeight(this.get("legendWrapper")) : t.prototype.getHeight.call(this) }, e.prototype.move = function(e, n) { this.get("useHtml") && !/^\#/.test(this.get("container")) ? l.modifyCSS(this.get("legendWrapper"), { left: e + "px", top: n + "px" }) : t.prototype.move.call(this, e, n) }, e.prototype.remove = function() { if (this.get("useHtml")) { var e = this.get("legendWrapper");
                        e && e.parentNode && e.parentNode.removeChild(e) } t.prototype.remove.call(this) }, e }(u);
        t.exports = m }, function(t, e, n) { var r = n(0),
            i = n(186),
            o = n(91),
            a = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "color-legend", layout: "vertical", labelOffset: 15, lineStyle: { lineWidth: 1, stroke: "#fff" } }) }, e.prototype._renderSliderShape = function() { var t = this.get("slider").get("backgroundElement"),
                        e = this.get("width"),
                        n = this.get("height"),
                        i = this.get("layout"),
                        a = this.get("items"),
                        s = "",
                        u = void 0; return "vertical" === i ? (s += "l (90) ", r.each(a, function(t) { u = o.toRGB(t.attrValue), s += 1 - t.scaleValue + ":" + u + " " })) : (s += "l (0) ", r.each(a, function(t) { u = o.toRGB(t.attrValue), s += t.scaleValue + ":" + u + " " })), this._addBackground(t, "Rect", { x: 0, y: 0, width: e, height: n, fill: s, strokeOpacity: 0 }) }, e.prototype._renderBackground = function() { var t = this,
                        e = this.get("titleShape"),
                        n = this.get("titleGap");
                    n = e ? e.getBBox().height + n : n; var i = this.get("width"),
                        a = this.get("height"),
                        s = this.get("layout"),
                        u = this.get("items"),
                        c = "",
                        l = void 0,
                        h = [],
                        f = this.addGroup(); "vertical" === s ? (c += "l (90) ", r.each(u, function(e, n) { 0 !== n && n !== u.length - 1 && (h.push(["M", 0, a - e.scaleValue * a]), h.push(["L", i, a - e.scaleValue * a])), l = o.toRGB(e.attrValue), c += 1 - e.scaleValue + ":" + l + " ", f.addShape("text", { attrs: r.mix({}, { x: i + t.get("labelOffset") / 2, y: a - e.scaleValue * a, text: t._formatItemValue(e.value) + "" }, t.get("textStyle"), { textAlign: "start" }) }) })) : (c += "l (0) ", r.each(u, function(e, n) { 0 !== n && n !== u.length - 1 && (h.push(["M", e.scaleValue * i, 0]), h.push(["L", e.scaleValue * i, a])), l = o.toRGB(e.attrValue), c += e.scaleValue + ":" + l + " ", f.addShape("text", { attrs: r.mix({}, { x: e.scaleValue * i, y: a + t.get("labelOffset"), text: t._formatItemValue(e.value) + "" }, t.get("textStyle")) }) })), f.addShape("rect", { attrs: { x: 0, y: 0, width: i, height: a, fill: c, strokeOpacity: 0 } }), f.addShape("path", { attrs: r.mix({ path: h }, this.get("lineStyle")) }), f.move(0, n) }, e }(i);
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(2),
            o = i.Group,
            a = i.DomUtil,
            s = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { range: null, middleAttr: null, backgroundElement: null, minHandleElement: null, maxHandleElement: null, middleHandleElement: null, currentTarget: null, layout: "vertical", width: null, height: null, pageX: null, pageY: null } }, e.prototype._beforeRenderUI = function() { var t = this.get("layout"),
                        e = this.get("backgroundElement"),
                        n = this.get("minHandleElement"),
                        r = this.get("maxHandleElement"),
                        i = this.addShape("rect", { attrs: this.get("middleAttr") }),
                        o = "vertical" === t ? "ns-resize" : "ew-resize";
                    this.add([e, n, r]), this.set("middleHandleElement", i), e.set("zIndex", 0), i.set("zIndex", 1), n.set("zIndex", 2), r.set("zIndex", 2), i.attr("cursor", "move"), n.attr("cursor", o), r.attr("cursor", o), this.sort() }, e.prototype._renderUI = function() { "horizontal" === this.get("layout") ? this._renderHorizontal() : this._renderVertical() }, e.prototype._transform = function(t) { var e = this.get("range"),
                        n = e[0] / 100,
                        r = e[1] / 100,
                        i = this.get("width"),
                        o = this.get("height"),
                        a = this.get("minHandleElement"),
                        s = this.get("maxHandleElement"),
                        u = this.get("middleHandleElement");
                    a.initTransform(), s.initTransform(), "horizontal" === t ? (u.attr({ x: i * n, y: 0, width: (r - n) * i, height: o }), a.translate(n * i, o), s.translate(r * i, o)) : (u.attr({ x: 0, y: o * (1 - r), width: i, height: (r - n) * o }), a.translate(i / 2, (1 - n) * o), s.translate(i / 2, (1 - r) * o)) }, e.prototype._renderHorizontal = function() { this._transform("horizontal") }, e.prototype._renderVertical = function() { this._transform("vertical") }, e.prototype._bindUI = function() { this.on("mousedown", r.wrapBehavior(this, "_onMouseDown")) }, e.prototype._isElement = function(t, e) { var n = this.get(e); if (t === n) return !0; if (n.isGroup) { return n.get("children").indexOf(t) > -1 } return !1 }, e.prototype._getRange = function(t, e) { var n = t + e; return n = n > 100 ? 100 : n, n = n < 0 ? 0 : n }, e.prototype._updateStatus = function(t, e) { var n = "x" === t ? this.get("width") : this.get("height");
                    t = r.upperFirst(t); var i = this.get("range"),
                        o = this.get("page" + t),
                        a = this.get("currentTarget"),
                        s = this.get("rangeStash"),
                        u = "vertical" === this.get("layout") ? -1 : 1,
                        c = e["page" + t],
                        l = (c - o) / n * 100 * u,
                        h = void 0;
                    i[1] <= i[0] ? (this._isElement(a, "minHandleElement") || this._isElement(a, "maxHandleElement")) && (i[0] = this._getRange(l, i[0]), i[1] = this._getRange(l, i[0])) : (this._isElement(a, "minHandleElement") && (i[0] = this._getRange(l, i[0])), this._isElement(a, "maxHandleElement") && (i[1] = this._getRange(l, i[1]))), this._isElement(a, "middleHandleElement") && (h = s[1] - s[0], i[0] = this._getRange(l, i[0]), i[1] = i[0] + h, i[1] > 100 && (i[1] = 100, i[0] = i[1] - h)), this.emit("sliderchange", { range: i }), this.set("page" + t, c), this._renderUI(), this.get("canvas").draw() }, e.prototype._onMouseDown = function(t) { var e = t.currentTarget,
                        n = t.event,
                        r = this.get("range");
                    n.stopPropagation(), n.preventDefault(), this.set("pageX", n.pageX), this.set("pageY", n.pageY), this.set("currentTarget", e), this.set("rangeStash", [r[0], r[1]]), this._bindCanvasEvents() }, e.prototype._bindCanvasEvents = function() { var t = this.get("canvas").get("containerDOM");
                    this.onMouseMoveListener = a.addEventListener(t, "mousemove", r.wrapBehavior(this, "_onCanvasMouseMove")), this.onMouseUpListener = a.addEventListener(t, "mouseup", r.wrapBehavior(this, "_onCanvasMouseUp")) }, e.prototype._onCanvasMouseMove = function(t) { "horizontal" === this.get("layout") ? this._updateStatus("x", t) : this._updateStatus("y", t) }, e.prototype._onCanvasMouseUp = function() { this._removeDocumentEvents() }, e.prototype._removeDocumentEvents = function() { this.onMouseMoveListener.remove(), this.onMouseUpListener.remove() }, e }(o);
        t.exports = s }, function(t, e, n) { var r = n(0),
            i = n(1),
            o = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return r.mix({}, e, { type: "size-legend", width: 100, height: 200, _circleStyle: { stroke: "#4E7CCC", fill: "#fff", fillOpacity: 0 }, textStyle: { fill: "#333", textAlign: "start", textBaseline: "middle", fontFamily: i.fontFamily } }) }, e.prototype._renderSliderShape = function() { var t = this.get("slider").get("backgroundElement"),
                        e = this.get("width"),
                        n = this.get("height"),
                        i = this.get("inRange"),
                        o = "vertical" === this.get("layout") ? [
                            [0, 0],
                            [e, 0],
                            [e, n]
                        ] : [
                            [0, n],
                            [e, 0],
                            [e, n]
                        ]; return this._addBackground(t, "Polygon", r.mix({ points: o }, i)) }, e.prototype._addCircle = function(t, e, n, i, o) { var a = this.addGroup(),
                        s = this.get("_circleStyle"),
                        u = this.get("textStyle"),
                        c = this.get("titleShape"),
                        l = this.get("titleGap");
                    c && (l += c.getBBox().height), a.addShape("circle", { attrs: r.mix({ x: t, y: e + l, r: 0 === n ? 1 : n }, s) }), a.addShape("text", { attrs: r.mix({ x: o + 5, y: e + l, text: 0 === i ? "0" : i }, u) }) }, e.prototype._renderBackground = function() { var t = 1 * this.get("firstItem").attrValue,
                        e = 1 * this.get("lastItem").attrValue,
                        n = (t + e) / 2;
                    this._addCircle(e, e, e, n, 2 * e), this._addCircle(e, 2 * e + 8 + n, n, (t + n) / 2, 2 * e), this._addCircle(e, 2 * (e + 8 + n) + t, t, t, 2 * e) }, e }(n(186));
        t.exports = o }, function(t, e, n) { var r = n(0),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { type: "plotBack", padding: null, background: null, plotRange: null, plotBackground: null } }, e.prototype._beforeRenderUI = function() { this._calculateRange() }, e.prototype._renderUI = function() { this._renderBackground(), this._renderPlotBackground() }, e.prototype._renderBackground = function() { var t = this.get("background"); if (t) { var e = this.get("canvas"),
                            n = { x: 0, y: 0, width: this.get("width") || e.get("width"), height: this.get("height") || e.get("height") },
                            i = this.get("backgroundShape");
                        i ? i.attr(n) : (i = this.addShape("rect", { attrs: r.mix(n, t) }), this.set("backgroundShape", i)) } }, e.prototype._renderPlotBackground = function() { var t = this.get("plotBackground"); if (t) { var e = this.get("plotRange"),
                            n = e.br.x - e.bl.x,
                            i = e.br.y - e.tr.y,
                            o = e.tl,
                            a = { x: o.x, y: o.y, width: n, height: i },
                            s = this.get("plotBackShape");
                        s ? s.attr(a) : (t.image ? (a.img = t.image, s = this.addShape("image", { attrs: a })) : (r.mix(a, t), s = this.addShape("rect", { attrs: a })), this.set("plotBackShape", s)) } }, e.prototype._convert = function(t, e) { if (r.isString(t) && -1 !== t.indexOf("%")) { var n = this.get("canvas"),
                            i = this.get("width") || n.get("width"),
                            o = this.get("height") || n.get("height");
                        t = parseInt(t, 10) / 100, t = e ? t * i : t * o } return t }, e.prototype._calculateRange = function() { var t = this.get("plotRange");
                    r.isNil(t) && (t = {}); var e = this.get("padding"),
                        n = this.get("canvas"),
                        i = this.get("width") || n.get("width"),
                        o = this.get("height") || n.get("height"),
                        a = r.toAllPadding(e),
                        s = this._convert(a[0], !1),
                        u = this._convert(a[1], !0),
                        c = this._convert(a[2], !1),
                        l = this._convert(a[3], !0),
                        h = Math.min(l, i - u),
                        f = Math.max(l, i - u),
                        p = Math.min(o - c, s),
                        g = Math.max(o - c, s);
                    t.tl = { x: h, y: p }, t.tr = { x: f, y: p }, t.bl = { x: h, y: g }, t.br = { x: f, y: g }, t.cc = { x: (f + h) / 2, y: (g + p) / 2 }, this.set("plotRange", t) }, e.prototype.repaint = function() { return this._calculateRange(), this._renderBackground(), this._renderPlotBackground(), this }, e }(n(2).Group);
        t.exports = i }, function(t, e, n) {
        function r(t, e) { return t.getElementsByClassName(e)[0] } var i = n(0),
            o = n(90),
            a = n(1),
            s = n(2).DomUtil,
            u = function(t) {
                function e(n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.call(this, n)); return r._init(), r.get("items") && r._renderTooltip(), r._renderCrosshairs(), r } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { return { x: 0, y: 0, items: null, showTitle: !0, crosshairs: null, plotRange: null, offset: 10, timeStamp: 0, containerTpl: '<div class="g2-tooltip"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div>', itemTpl: '<li data-index={index}><span style="background-color:{color};" class=g2-tooltip-marker></span>{name}: {value}</li>', inPlot: !0, follow: !0, enterable: !1 } }, e.prototype._initTooltipWrapper = function() { var t = this.get("containerTpl"),
                        e = this.get("canvas").get("el").parentNode,
                        n = void 0; if (/^\#/.test(t)) { var r = t.replace("#", "");
                        n = document.getElementById(r) } else n = s.createDom(t), s.modifyCSS(n, this.get("g2-tooltip")), e.appendChild(n), e.style.position = "relative";
                    this.set("container", n) }, e.prototype._init = function() { var t = this.get("crosshairs"),
                        e = this.get("frontPlot"),
                        n = this.get("backPlot"),
                        r = void 0;
                    t && ("rect" === t.type ? (this.set("crosshairs", i.deepMix({}, a.tooltipCrosshairsRect, t)), r = n.addGroup({ zIndex: 0 })) : (this.set("crosshairs", i.deepMix({}, a.tooltipCrosshairsLine, t)), r = e.addGroup())), this.set("crosshairsGroup", r), this._initTooltipWrapper() }, e.prototype._clearDom = function() { var t = this.get("container"),
                        e = r(t, "g2-tooltip-title"),
                        n = r(t, "g2-tooltip-list");
                    e && (e.innerHTML = ""), n && (n.innerHTML = "") }, e.prototype._addItem = function(t, e) { var n = this.get("itemTpl"),
                        o = i.substitute(n, i.mix({ index: e }, t)),
                        a = s.createDom(o);
                    s.modifyCSS(a, this.get("g2-tooltip-list-item")); var u = r(a, "g2-tooltip-marker"); return u && s.modifyCSS(u, this.get("g2-tooltip-marker")), a }, e.prototype._renderTooltip = function() { var t = this,
                        e = t.get("showTitle"),
                        n = t.get("titleContent"),
                        o = t.get("container"),
                        a = r(o, "g2-tooltip-title"),
                        u = r(o, "g2-tooltip-list"),
                        c = t.get("items");
                    t._clearDom(), a && e && (s.modifyCSS(a, t.get("g2-tooltip-title")), a.innerHTML = n), u && (s.modifyCSS(u, t.get("g2-tooltip-list")), i.each(c, function(e, n) { u.appendChild(t._addItem(e, n)) })) }, e.prototype._clearCrosshairsGroup = function() { var t = this.get("crosshairsGroup");
                    this.set("crossLineShapeX", null), this.set("crossLineShapeY", null), this.set("crosshairsRectShape", null), t.clear() }, e.prototype._renderCrosshairs = function() { var t = this.get("crosshairs"),
                        e = this.get("canvas"),
                        n = this.get("plotRange"),
                        r = this.get("isTransposed"); if (t) switch (this._clearCrosshairsGroup(), t.type) {
                        case "x":
                            this._renderHorizontalLine(e, n); break;
                        case "y":
                            this._renderVerticalLine(e, n); break;
                        case "cross":
                            this._renderHorizontalLine(e, n), this._renderVerticalLine(e, n); break;
                        case "rect":
                            this._renderBackground(e, n); break;
                        default:
                            r ? this._renderHorizontalLine(e, n) : this._renderVerticalLine(e, n) } }, e.prototype._addCrossLineShape = function(t, e) { var n = this.get("crosshairsGroup").addShape("line", { attrs: t }); return n.hide(), this.set("crossLineShape" + e, n), n }, e.prototype._renderVerticalLine = function(t, e) { var n = this.get("crosshairs").style,
                        r = i.mix({ x1: 0, y1: e ? e.bl.y : t.get("height"), x2: 0, y2: e ? e.tl.y : 0 }, n);
                    this._addCrossLineShape(r, "Y") }, e.prototype._renderHorizontalLine = function(t, e) { var n = this.get("crosshairs").style,
                        r = i.mix({ x1: e ? e.bl.x : t.get("width"), y1: 0, x2: e ? e.br.x : 0, y2: 0 }, n);
                    this._addCrossLineShape(r, "X") }, e.prototype._renderBackground = function(t, e) { var n = this.get("crosshairs").style,
                        r = this.get("crosshairsGroup"),
                        o = i.mix({ x: e ? e.tl.x : 0, y: e ? e.tl.y : t.get("height"), width: e ? e.br.x - e.bl.x : t.get("width"), height: e ? Math.abs(e.tl.y - e.bl.y) : t.get("height") }, n),
                        a = r.addShape("rect", { attrs: o }); return a.hide(), this.set("crosshairsRectShape", a), a }, e.prototype._isContentChange = function(t, e) { var n = this.get("titleContent"),
                        r = this.get("items"),
                        o = !(t === n && r.length === e.length); return o || i.each(e, function(t, e) { var n = r[e]; if (o = t.value !== n.value || t.color !== n.color || t.name !== n.name || t.title !== n.title) return !1 }), o }, e.prototype.setContent = function(t, e) { if (this._isContentChange(t, e)) { var n = +new Date;
                        this.set("items", e), this.set("titleContent", t), this.set("timeStamp", n), this._renderTooltip() } return this }, e.prototype.setMarkers = function(t, e) { var n = this.get("markerGroup"),
                        r = this.get("frontPlot");
                    n ? n.clear() : (n = r.addGroup({ zIndex: 1 }), this.set("markerGroup", n)), i.each(t, function(t) { n.addShape("marker", { color: t.color, attrs: i.mix({}, e, { x: t.x, y: t.y }) }) }), this.set("markerItems", t) }, e.prototype.clearMarkers = function() { var t = this.get("markerGroup");
                    t && t.clear() }, e.prototype.setPosition = function(t, e, n) { var r = this.get("container"),
                        o = this.get("crossLineShapeX"),
                        a = this.get("crossLineShapeY"),
                        u = this.get("crosshairsRectShape"),
                        c = t,
                        l = e,
                        h = this.get("canvas").get("el"),
                        f = s.getWidth(h),
                        p = s.getHeight(h),
                        g = this.get("offset"),
                        d = void 0; if (this.get("position") ? (d = function(t, e, n, r, i) { var o = r.clientWidth,
                                a = r.clientHeight,
                                s = 0,
                                u = 0,
                                c = 20; if (i) { var l = i.getBBox();
                                s = l.width, u = l.height, t = l.x, e = l.y, c = 5 } switch (n) {
                                case "inside":
                                    t = t + s / 2 - o / 2, e = e + u / 2 - a / 2; break;
                                case "top":
                                    t = t + s / 2 - o / 2, e = e - a - c; break;
                                case "left":
                                    t = t - o - c, e = e + u / 2 - a / 2; break;
                                case "right":
                                    t = t + s + c, e = e + u / 2 - a / 2; break;
                                case "bottom":
                                default:
                                    t = t + s / 2 - o / 2, e = e + u + c } return [t, e] }(t, e, this.get("position"), r, n), t = d[0], e = d[1]) : this.get("position") || (d = function(t, e, n, r, i) { var o = n.clientWidth,
                                a = n.clientHeight; return t + o + 20 > r ? t = (t -= o + 20) < 0 ? 0 : t : t += 20, e + a + 20 > i ? (e -= a + 20, e = t < 0 ? 0 : e) : e += 20, [t, e] }(t, e, r, f, p), t = d[0], e = d[1]), this.get("inPlot")) { d = function(t, e, n, r) { var i = n.clientWidth,
                                o = n.clientHeight; return t + i > r.tr.x && (t -= i + 40), t < r.tl.x && (t = r.tl.x), e + o > r.bl.y && (e -= o + 40), e < r.tl.y && (e = r.tl.y), [t, e] }(t, e, r, this.get("plotRange")), t = d[0], e = d[1] } if (this.get("x") !== t || this.get("y") !== e) { var y = this.get("markerItems"); if (i.isEmpty(y) || (c = y[0].x, l = y[0].y), a && a.move(c, 0), o && o.move(0, l), u) { var v = this.get("isTransposed"),
                                x = this.get("items"),
                                m = x[0],
                                b = x[x.length - 1],
                                _ = v ? "y" : "x",
                                w = v ? "height" : "width",
                                S = m[_]; if (x.length > 1 && m[_] > b[_] && (S = b[_]), this.get("crosshairs").width) u.attr(_, S - this.get("crosshairs").width / 2), u.attr(w, this.get("crosshairs").width);
                            else if (g = m.size / 2 + m.size / 4 || 10, u.attr(_, S - g), 1 === x.length) u.attr(w, m.size + m.size / 2);
                            else { var M = x[x.length - 1];
                                u.attr(w, Math.abs(M[_] - m[_]) + 2 * g) } } var C = this.get("follow");
                        r.style.left = C ? t + "px" : 0, r.style.top = C ? e + "px" : 0 } }, e.prototype.show = function() { var e = this.get("crossLineShapeX"),
                        n = this.get("crossLineShapeY"),
                        r = this.get("crosshairsRectShape"),
                        i = this.get("markerGroup"),
                        o = this.get("container"),
                        a = this.get("canvas");
                    e && e.show(), n && n.show(), r && r.show(), i && i.show(), t.prototype.show.call(this), o.style.visibility = "visible", a.draw() }, e.prototype.hide = function() { var e = this.get("container"),
                        n = this.get("crossLineShapeX"),
                        r = this.get("crossLineShapeY"),
                        i = this.get("crosshairsRectShape"),
                        o = this.get("markerGroup"),
                        a = this.get("canvas");
                    e.style.visibility = "hidden", n && n.hide(), r && r.hide(), i && i.hide(), o && o.hide(), t.prototype.hide.call(this), a.draw() }, e.prototype.destroy = function() { var e = this.get("crossLineShapeX"),
                        n = this.get("crossLineShapeY"),
                        r = this.get("markerGroup"),
                        i = this.get("crosshairsRectShape"),
                        o = this.get("container"),
                        a = this.get("containerTpl");
                    o && !/^\#/.test(a) && o.parentNode.removeChild(o), e && e.remove(), n && n.remove(), r && r.remove(), i && i.remove(), t.prototype.destroy.call(this) }, e }(o);
        t.exports = u }, function(t, e, n) { var r = n(0),
            i = n(36).Guide,
            o = n(1),
            a = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.guides = [], this.options = [], this.xScales = null, this.yScales = null, this.container = null, r.mix(this, e) } return t.prototype._creatGuides = function() { var t = this,
                        e = this.options,
                        n = this.xScales,
                        a = this.yScales; return e.forEach(function(e) { var s = e.type,
                            u = r.deepMix({ xScales: n, yScales: a }, o.guide[s], e);
                        s = r.upperFirst(s); var c = new i[s](u);
                        t.guides.push(c) }), t.guides }, t.prototype.line = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.options.push(r.mix({ type: "line" }, t)), this }, t.prototype.arc = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.options.push(r.mix({ type: "arc" }, t)), this }, t.prototype.text = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.options.push(r.mix({ type: "text" }, t)), this }, t.prototype.image = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.options.push(r.mix({ type: "image" }, t)), this }, t.prototype.region = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.options.push(r.mix({ type: "region" }, t)), this }, t.prototype.html = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.options.push(r.mix({ type: "html" }, t)), this }, t.prototype.render = function(t) { var e = this,
                        n = e._creatGuides(),
                        i = e.backContainer;
                    r.each(n, function(n) { n.top && (i = e.frontContainer), n.render(t, i) }) }, t.prototype.clear = function() { this.options = [], this.reset() }, t.prototype.changeVisible = function(t) { var e = this.guides;
                    r.each(e, function(e) { e.setVisible(t) }) }, t.prototype.reset = function() { var t = this.guides;
                    r.each(t, function(t) { t.remove() }), this.guides = [] }, t }();
        t.exports = a }, function(t, e, n) { var r = n(0),
            i = n(1),
            o = n(36).Legend,
            a = n(93),
            s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
            u = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.options = {}, r.mix(this, e), this.clear(); var n = this.chart;
                    this.container = n.get("frontPlot"), this.plotRange = n.get("plotRange") } return t.prototype.clear = function() { var t = this.legends;
                    r.each(t, function(t) { r.each(t, function(t) { t.remove() }) }), this.legends = {} }, t.prototype._isFieldInView = function(t, e, n) { var i = !1,
                        o = n.get("scales")[t]; return o && o.values && (i = r.inArray(o.values, e)), i }, t.prototype._bindClickEvent = function(t, e, n) { var i = this,
                        o = i.chart,
                        a = o.get("views"),
                        s = e.field,
                        u = i.options;
                    t.on("itemclick", function(e) { if (u.onClick) u.onClick(e);
                        else { var c = e.item,
                                l = e.checked,
                                h = "single" === t.get("selectedMode"),
                                f = c.dataValue;
                            l ? (n.push(f), i._isFieldInView(s, f, o) && o.filter(s, function(t) { return h ? t === f : r.inArray(n, t) }), r.each(a, function(t) { i._isFieldInView(s, f, t) && t.filter(s, function(t) { return h ? t === f : r.inArray(n, t) }) })) : h || (r.Array.remove(n, f), i._isFieldInView(s, f, o) && o.filter(s, function(t) { return r.inArray(n, t) }), r.each(a, function(t) { i._isFieldInView(s, f, t) && t.filter(s, function(t) { return r.inArray(n, t) }) })), o.set("keepLegend", !0), o.repaint() } }) }, t.prototype._filterLabels = function(t, e, n) { if (t.get("gLabel")) t.get("gLabel").set("visible", n);
                    else { var i = e.get("labelCfg"); if (i && i.fields && i.fields.length > 0) { var o = e.getXScale(),
                                a = e.getYScale(),
                                s = o.field,
                                u = a.field,
                                c = t.get("origin")._origin,
                                l = e.get("labelContainer").get("labelsGroup").get("children");
                            r.each(l, function(e) { var r = e.get("origin") || [];
                                r[s] === c[s] && r[u] === c[u] && (e.set("visible", n), t.set("gLabel", e)) }) } } }, t.prototype._bindFilterEvent = function(t, e) { var n = this,
                        r = this.chart,
                        i = e.field;
                    t.on("itemfilter", function(t) { var e = t.range;
                        r.filterShape(function(t, r, o) { if (t[i]) { var a = t[i] >= e[0] && t[i] <= e[1]; return n._filterLabels(r, o, a), a } return !0 }); for (var o = r.getAllGeoms() || [], a = function(t) { var n = o[t]; "heatmap" === n.get("type") && s(function() { n.drawWithRange(e) }) }, u = 0; u < o.length; u++) a(u) }) }, t.prototype._getShapeData = function(t) { var e = t.get("origin"); return r.isArray(e) && (e = e[0]), e._origin }, t.prototype._bindHoverEvent = function(t, e) { var n = this,
                        i = n.chart,
                        o = i.getAllGeoms(),
                        a = n.options,
                        s = i.get("canvas");
                    t.on("itemhover", function(t) { var i = t.item.value,
                            u = n.pre; if (u) { if (u === i) return } else r.each(o, function(o) { var u = o.get("shapeContainer"),
                                c = o.getShapes(),
                                l = []; if (e) { var h = o.get("scales")[e];
                                r.each(c, function(t) { var o = n._getShapeData(t);
                                    o && function(t, e, n) { return !r.isNil(n) && (t = n.translate(t), e = n.translate(e), n.isCategory ? t === e : Math.abs(t - e) <= 1) }(o[e], i, h) && l.push(t) }) } else o.getYScale().field === i && (l = c);
                            r.isEmpty(l) || (t.shapes = l, t.geom = o, a.onHover ? (a.onHover(t), u.sort(), s.draw()) : o.setShapesActived(l)) }), n.pre = i }), t.on("itemunhover", function() { n.pre = null, r.each(o, function(t) { t.get("activeShapes") && (t.clearActivedShapes(), s.draw()) }) }) }, t.prototype._isFiltered = function(t, e, n) { if (!t.isCategory) return !0; var i = !1; return n = t.invert(n), r.each(e, function(e) { if (i = i || t.getText(e) === t.getText(n)) return !1 }), i }, t.prototype._alignLegend = function(t, e, n, i) { var o = this.container.get("canvas"),
                        a = o.get("width"),
                        s = o.get("height"),
                        u = this.plotRange,
                        c = t.get("offsetX") || 0,
                        l = t.get("offsetY") || 0,
                        h = r.isNil(t.get("offset")) ? 24 : t.get("offset"),
                        f = t.getHeight(),
                        p = 0,
                        g = 0; if ("left" === i || "right" === i) s = u.br.y, p = "left" === i ? h : u.br.x + h, g = s - f, e && (g = e.get("y") - f - 24);
                    else if (p = (a - n.totalWidth) / 2, g = "top" === i ? h : u.bl.y + h, e) { var d = e.getWidth();
                        p = e.get("x") + d + 24 } t.move(p + c, g + l) }, t.prototype._getRegion = function(t) { var e = 0,
                        n = 0; return r.each(t, function(t) { var r = t.getWidth();
                        e < r && (e = r), n += r }), { maxWidth: e, totalWidth: n } }, t.prototype._addCategroyLegend = function(t, e, n, s, u) { var c = this,
                        l = t.field,
                        h = c.options,
                        f = c.legends;
                    f[u] = f[u] || []; var p = c.container,
                        g = [],
                        d = t.getTicks(),
                        y = !0,
                        v = n.get("shapeType") || "point",
                        x = n.getDefaultValue("shape") || "circle";
                    h[l] && h[l].marker ? (x = h[l].marker, v = "point", y = !1) : h.marker && (x = h.marker, v = "point", y = !1); var m = c.chart.get("canvas"),
                        b = c.plotRange,
                        _ = "right" === u || "left" === u ? b.bl.y - b.tr.y : m.get("width");
                    r.each(d, function(e) { var o = e.text,
                            u = e.value,
                            l = t.invert(u),
                            h = { isInCircle: n.isInCircle() },
                            f = !s || c._isFiltered(t, s, u),
                            p = n.getAttr("color"),
                            d = n.getAttr("shape"); if (p)
                            if (p.callback && p.callback.length > 1) { var m = Array(p.callback.length - 1).fill("");
                                h.color = p.mapping.apply(p, [l].concat(m)).join("") || i.defaultColor } else h.color = p.mapping(l).join("") || i.defaultColor; if (y && d)
                            if (d.callback && d.callback.length > 1) { var b = Array(d.callback.length - 1).fill("");
                                x = d.mapping.apply(d, [l].concat(b)).join("") } else x = d.mapping(l).join(""); var _ = a.getShapeFactory(v).getMarkerCfg(x, h);
                        r.isFunction(x) && (_.symbol = x), g.push({ value: o, dataValue: l, checked: f, marker: _ }) }); var w = r.deepMix({ title: { text: t.alias || t.field } }, i.legend[u], h[l] || h, { maxLength: _, items: g }),
                        S = p.addGroup(o.Category, w); return c._bindClickEvent(S, t, s), f[u].push(S), S }, t.prototype._addContinuousLegend = function(t, e, n) { var a = this.legends;
                    a[n] = a[n] || []; var s = this.container,
                        u = t.field,
                        c = t.getTicks(),
                        l = [],
                        h = void 0,
                        f = void 0,
                        p = void 0;
                    r.each(c, function(n) { var r = n.value,
                            i = t.invert(r),
                            o = e.mapping(i).join("");
                        l.push({ value: n.text, attrValue: o, scaleValue: r }), 0 === r && (f = !0), 1 === r && (p = !0) }), f || l.push({ value: t.getText(t.invert(0)), attrValue: e.mapping(0).join(""), scaleValue: 0 }), p || l.push({ value: t.getText(t.invert(1)), attrValue: e.mapping(1).join(""), scaleValue: 1 }); var g = this.options,
                        d = i.legend[n];
                    (g && !1 === g.slidable || g[u] && !1 === g[u].slidable) && (d = r.mix({}, d, i.legend.gradient)); var y = r.deepMix({ title: { text: t.alias || t.field } }, d, g[u] || g, { items: l, attr: e }); return "color" === e.type ? h = s.addGroup(o.Color, y) : "size" === e.type && (h = s.addGroup(o.Size, y)), this._bindFilterEvent(h, t), a[n].push(h), h }, t.prototype.addLegend = function(t, e, n, r) { var o = this.options,
                        a = t.field,
                        s = o[a]; if (!1 === s) return null; if (s && s.custom) this.addCustomLegend(a);
                    else { var u = o.position || i.defaultLegendPosition;
                        s && s.position && (u = s.position); var c = void 0;
                        c = t.isLinear ? this._addContinuousLegend(t, e, u) : this._addCategroyLegend(t, e, n, r, u), this._bindHoverEvent(c, a) } }, t.prototype.addCustomLegend = function(t) { var e = this.chart,
                        n = this.container,
                        a = this.options;
                    t && (a = a[t]); var s = a.position || i.defaultLegendPosition,
                        u = this.legends;
                    u[s] = u[s] || []; var c = a.items; if (c) { var l = e.getAllGeoms();
                        r.each(c, function(t) { var e = function(t, e) { var n = void 0; return r.each(t, function(t) { t.get("visible") && t.getYScale().field === e && (n = t) }), n }(l, t.value);
                            r.isObject(t.marker) || (t.marker = { symbol: t.marker ? t.marker : "circle", fill: t.fill, radius: 4.5 }), t.checked = !!r.isNil(t.checked) || t.checked, t.geom = e }); var h = e.get("canvas"),
                            f = this.plotRange,
                            p = "right" === s || "left" === s ? f.bl.y - f.tr.y : h.get("width"),
                            g = r.deepMix({}, i.legend[s], a, { maxLength: p, items: c }),
                            d = n.addGroup(o.Category, g);
                        u[s].push(d), d.on("itemclick", function(t) { a.onClick && a.onClick(t) }), this._bindHoverEvent(d) } }, t.prototype.alignLegends = function() { var t = this,
                        e = t.legends; return r.each(e, function(e, n) { var i = t._getRegion(e);
                        r.each(e, function(r, o) { var a = e[o - 1];
                            r.get("useHtml") && !r.get("autoPosition") || t._alignLegend(r, a, i, n) }) }), this }, t }();
        t.exports = u }, function(t, e, n) {
        function r(t, e) { if (!t) return !1; return !!t.className && -1 !== (o.isNil(t.className.baseVal) ? t.className : t.className.baseVal).indexOf(e) }

        function i(t) { var e = []; return o.each(t, function(t) { var n = function(t, e) { var n = -1; return o.each(t, function(t, r) { if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return n = r, !1 }), n }(e, t); - 1 === n ? e.push(t) : e[n] = t }), e } var o = n(0),
            a = n(1),
            s = n(36).Tooltip,
            u = n(2).MatrixUtil.vec2,
            c = ["line", "area", "path", "areaStack"],
            l = ["line", "area"],
            h = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), o.assign(this, e), this.timeStamp = 0 } return t.prototype._normalizeEvent = function(t) { var e = this.chart,
                        n = this._getCanvas(),
                        r = n.getPointByClient(t.clientX, t.clientY),
                        i = n.get("pixelRatio");
                    r.x = r.x / i, r.y = r.y / i; var o = e.getViewsByPoint(r); return r.views = o, r }, t.prototype._getCanvas = function() { return this.chart.get("canvas") }, t.prototype._getTriggerEvent = function() { var t = this.options.triggerOn,
                        e = void 0; return t && "mousemove" !== t ? "click" === t ? e = "plotclick" : "none" === t && (e = null) : e = "plotmove", e }, t.prototype._getDefaultTooltipCfg = function() { var t = this.options,
                        e = o.mix({}, a.tooltip),
                        n = this.chart.getAllGeoms().filter(function(t) { return t.get("visible") }),
                        r = [];
                    o.each(n, function(t) { var e = t.get("type"),
                            n = t.get("adjusts"),
                            i = !1;
                        n && o.each(n, function(t) { if ("symmetric" === t.type || "Symmetric" === t.type) return i = !0, !1 }), -1 !== o.indexOf(r, e) || i || r.push(e) }); var i = void 0; return n.length && n[0].get("coord") && "cartesian" === n[0].get("coord").type && 1 === r.length && ("interval" === r[0] && !1 !== t.shared ? i = { zIndex: 0, crosshairs: a.tooltipCrosshairsRect } : o.indexOf(l, r[0]) > -1 && (i = { crosshairs: a.tooltipCrosshairsLine })), o.mix(e, i, { isTransposed: n[0].get("coord").isTransposed }) }, t.prototype._bindEvent = function() { var t = this.chart,
                        e = this._getTriggerEvent();
                    e && (t.on(e, o.wrapBehavior(this, "onMouseMove")), t.on("plotleave", o.wrapBehavior(this, "onMouseOut"))) }, t.prototype._offEvent = function() { var t = this.chart,
                        e = this._getTriggerEvent();
                    e && (t.off(e, o.getWrapBehavior(this, "onMouseMove")), t.off("plotleave", o.getWrapBehavior(this, "onMouseOut"))) }, t.prototype._setTooltip = function(t, e, n, r, s) { var u = this.tooltip,
                        c = this.prePoint; if (!c || c.x !== e.x || c.y !== e.y) { n = i(n), this.prePoint = e; var l = this.chart,
                            h = o.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
                            f = o.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
                        u.get("visible") || l.emit("tooltip:show", { x: h, y: f, tooltip: u }), l.emit("tooltip:change", { tooltip: u, x: h, y: f, items: n }), u.setContent(t, n), o.isEmpty(r) ? u.clearMarkers() : u.setMarkers(r, a.tooltipMarker), u.setPosition(h, f, s), u.show() } }, t.prototype.hideTooltip = function() { var t = this.tooltip,
                        e = this.chart,
                        n = this._getCanvas();
                    this.prePoint = null, t.hide(), e.emit("tooltip:hide", { tooltip: t }), n.draw() }, t.prototype.onMouseMove = function(t) { if (!o.isEmpty(t.views)) { var e = this.timeStamp,
                            n = +new Date,
                            r = { x: t.x, y: t.y }; if (n - e > 16) { var i = void 0;
                            t.shape && o.inArray(["point", "interval", "polygon", "schema"], t.shape.name) && (i = t.shape), this.showTooltip(r, t.views, i), this.timeStamp = n } } }, t.prototype.onMouseOut = function(t) { var e = this.tooltip,
                        n = this._getCanvas();
                    e.get("visible") && (t && t.target !== n || t && t.toElement && (r(t.toElement, "g2-tooltip") || function(t, e) { for (var n = t.parentNode, i = !1; n && n !== document.body;) { if (r(n, e)) { i = !0; break } n = n.parentNode } return i }(t.toElement, "g2-tooltip")) || this.hideTooltip()) }, t.prototype.renderTooltip = function() { var t = this; if (!t.tooltip) { var e = t.chart,
                            n = t._getCanvas(),
                            r = t._getDefaultTooltipCfg(),
                            i = t.options;
                        (i = o.deepMix({ plotRange: e.get("plotRange"), capture: !1, canvas: n, frontPlot: e.get("frontPlot"), backPlot: e.get("backPlot") }, r, i)).crosshairs && "rect" === i.crosshairs.type && (i.zIndex = 0), i.visible = !1, !1 === i.shared && o.isNil(i.position) && (i.position = "top"); var a = new s(i);
                        t.tooltip = a; var u = t._getTriggerEvent(); if (!a.get("enterable") && "plotmove" === u) { var c = a.get("container");
                            c && (c.onmousemove = function(n) { var r = t._normalizeEvent(n);
                                e.emit(u, r) }) } t._bindEvent() } }, t.prototype.showTooltip = function(t, e, n) { if (!o.isEmpty(e) && t) { this.tooltip || this.renderTooltip(); var r = this.options,
                            i = [],
                            a = []; if (o.each(e, function(e) { if (!e.get("tooltipEnable")) return !0; var n = e.get("geoms"),
                                    s = e.get("coord");
                                o.each(n, function(e) { var n = e.get("type"); if (e.get("visible") && !1 !== e.get("tooltipCfg")) { var u = e.get("dataArray"); if (e.isShareTooltip() || !1 === r.shared && o.inArray(["area", "line", "path"], n)) o.each(u, function(u) { var l = e.findPoint(t, u); if (l) { var h = e.getTipItems(l, r.title); - 1 !== o.indexOf(c, n) && (o.each(h, function(t) { var e = t.point,
                                                        n = o.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
                                                        r = o.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
                                                    e = s.applyMatrix(n, r, 1), t.x = e[0], t.y = e[1], t.showMarker = !0 }), i = i.concat(h)), a = a.concat(h) } });
                                        else { var l = e.get("shapeContainer"),
                                                h = l.get("canvas").get("pixelRatio"),
                                                f = l.getShape(t.x * h, t.y * h);
                                            f && f.get("visible") && f.get("origin") && (a = e.getTipItems(f.get("origin"), r.title)) } } }), o.each(a, function(t) { var e = t.point,
                                        n = o.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
                                        r = o.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
                                    e = s.applyMatrix(n, r, 1), t.x = e[0], t.y = e[1] }) }), a.length) { var s = a[0]; if (!a.every(function(t) { return t.title === s.title })) { var l = s,
                                    h = 1 / 0;
                                a.forEach(function(e) { var n = u.distance([t.x, t.y], [e.x, e.y]);
                                    n < h && (h = n, l = e) }), a = a.filter(function(t) { return t.title === l.title }), i = i.filter(function(t) { return t.title === l.title }) } if (!1 === r.shared && a.length > 1) { var f = a[0],
                                    p = Math.abs(t.y - f.y);
                                o.each(a, function(e) { Math.abs(t.y - e.y) <= p && (f = e, p = Math.abs(t.y - e.y)) }), i = [f], a = [f] } var g = s.title || s.name;
                            this._setTooltip(g, t, a, i, n) } else this.hideTooltip() } }, t.prototype.clear = function() { var t = this.tooltip;
                    t && t.destroy(), this.tooltip = null, this.prePoint = null, this._offEvent() }, t }();
        t.exports = h }, function(t, e, n) {
        function r(t, e) { if (o.isNil(t) || o.isNil(e)) return !1; var n = t.get("origin"),
                r = e.get("origin"); return o.isNil(n) && o.isNil(r) ? o.isEqual(t, e) : o.isEqual(n, r) }

        function i(t) { t.shape && t.shape.get("origin") && (t.data = t.shape.get("origin")) } var o = n(0),
            a = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.view = null, this.canvas = null, o.assign(this, e), this._init() } return t.prototype._init = function() { this.pixelRatio = this.canvas.get("pixelRatio") }, t.prototype._getShapeEventObj = function(t) { return { x: t.x / this.pixelRatio, y: t.y / this.pixelRatio, target: t.target, toElement: t.event.toElement || t.event.relatedTarget } }, t.prototype._getShape = function(t, e) { return this.view.get("canvas").getShape(t, e) }, t.prototype._getPointInfo = function(t) { var e = this.view,
                        n = { x: t.x / this.pixelRatio, y: t.y / this.pixelRatio },
                        r = e.getViewsByPoint(n); return n.views = r, n }, t.prototype._getEventObj = function(t, e, n) { return { x: e.x, y: e.y, target: t.target, toElement: t.event.toElement || t.event.relatedTarget, views: n } }, t.prototype.bindEvents = function() { var t = this.canvas;
                    t.on("mousedown", o.wrapBehavior(this, "onDown")), t.on("mousemove", o.wrapBehavior(this, "onMove")), t.on("mouseleave", o.wrapBehavior(this, "onOut")), t.on("mouseup", o.wrapBehavior(this, "onUp")), t.on("click", o.wrapBehavior(this, "onClick")), t.on("dblclick", o.wrapBehavior(this, "onClick")), t.on("touchstart", o.wrapBehavior(this, "onTouchstart")), t.on("touchmove", o.wrapBehavior(this, "onTouchmove")), t.on("touchend", o.wrapBehavior(this, "onTouchend")) }, t.prototype._triggerShapeEvent = function(t, e, n) { if (t && t.name) { var r = this.view,
                            i = t.name + ":" + e;
                        n.view = r, r.emit(i, n) } }, t.prototype.onDown = function(t) { var e = this.view,
                        n = this._getShapeEventObj(t);
                    n.shape = this.currentShape, i(n), e.emit("mousedown", n), this._triggerShapeEvent(this.currentShape, "mousedown", n) }, t.prototype.onMove = function(t) { var e = this.view,
                        n = this.currentShape,
                        o = this._getShape(t.x, t.y),
                        a = this._getShapeEventObj(t); if (a.shape = o, i(a), e.emit("mousemove", a), this._triggerShapeEvent(o, "mousemove", a), n && !r(n, o)) { var s = this._getShapeEventObj(t);
                        s.shape = n, s.toShape = o, i(s), this._triggerShapeEvent(n, "mouseleave", s) } if (o && !r(n, o)) { var u = this._getShapeEventObj(t);
                        u.shape = o, u.fromShape = n, i(u), this._triggerShapeEvent(o, "mouseenter", u) } this.currentShape = o; var c = this._getPointInfo(t),
                        l = this.curViews || [];
                    0 === l.length && c.views.length && e.emit("plotenter", this._getEventObj(t, c, c.views)), l.length && 0 === c.views.length && e.emit("plotleave", this._getEventObj(t, c, l)), c.views.length && ((a = this._getEventObj(t, c, c.views)).shape = o, i(a), e.emit("plotmove", a)), this.curViews = c.views }, t.prototype.onOut = function(t) { var e = this.view,
                        n = this._getPointInfo(t);
                    e.emit("plotleave", this._getEventObj(t, n, this.curViews)) }, t.prototype.onUp = function(t) { var e = this.view,
                        n = this._getShapeEventObj(t);
                    n.shape = this.currentShape, e.emit("mouseup", n), this._triggerShapeEvent(this.currentShape, "mouseup", n) }, t.prototype.onClick = function(t) { var e = this.view,
                        n = this._getShape(t.x, t.y),
                        r = this._getShapeEventObj(t);
                    r.shape = n, i(r), e.emit("click", r), this._triggerShapeEvent(n, t.type, r), this.currentShape = n; var a = this._getPointInfo(t),
                        s = a.views; if (!o.isEmpty(s)) { var u = this._getEventObj(t, a, s); if (this.currentShape) { var c = this.currentShape;
                            u.shape = c, i(u) } e.emit("plotclick", u), "dblclick" === t.type && (e.emit("plotdblclick", u), e.emit("dblclick", r)) } }, t.prototype.onTouchstart = function(t) { var e = this.view,
                        n = this._getShape(t.x, t.y),
                        r = this._getShapeEventObj(t);
                    r.shape = n, i(r), e.emit("touchstart", r), this._triggerShapeEvent(n, "touchstart", r), this.currentShape = n }, t.prototype.onTouchmove = function(t) { var e = this.view,
                        n = this._getShape(t.x, t.y),
                        r = this._getShapeEventObj(t);
                    r.shape = n, i(r), e.emit("touchmove", r), this._triggerShapeEvent(n, "touchmove", r), this.currentShape = n }, t.prototype.onTouchend = function(t) { var e = this.view,
                        n = this._getShapeEventObj(t);
                    n.shape = this.currentShape, i(n), e.emit("touchend", n), this._triggerShapeEvent(this.currentShape, "touchend", n) }, t.prototype.clearEvents = function() { var t = this.canvas;
                    t.off("mousemove", o.getWrapBehavior(this, "onMove")), t.off("mouseleave", o.getWrapBehavior(this, "onOut")), t.off("mousedown", o.getWrapBehavior(this, "onDown")), t.off("mouseup", o.getWrapBehavior(this, "onUp")), t.off("click", o.getWrapBehavior(this, "onClick")), t.off("dblclick", o.getWrapBehavior(this, "onClick")), t.off("touchstart", o.getWrapBehavior(this, "onTouchstart")), t.off("touchmove", o.getWrapBehavior(this, "onTouchmove")), t.off("touchend", o.getWrapBehavior(this, "onTouchend")) }, t }();
        t.exports = a }, function(t, e, n) {
        function r(t, e) { var n = []; if (!1 === t.get("animate")) return []; var i = t.get("children"); return s.each(i, function(t) { if (t.isGroup) n = n.concat(r(t, e));
                else if (t.isShape && t._id) { var i = t._id;
                    (i = i.split("-")[0]) === e && n.push(t) } }), n }

        function i(t, e, n, r) { return r ? u.Action[n][r] : u.getAnimation(t, e, n) }

        function o(t, e, n) { var r = u.getAnimateCfg(t, e); return n && n[e] ? s.deepMix({}, r, n[e]) : r }

        function a(t, e, n, r) { var a = void 0,
                u = void 0,
                l = !1; if (r) { var h = [],
                    f = [];
                s.each(e, function(e) { var n = t[e._id];
                    n ? (e.setSilent("cacheShape", n), h.push(e), delete t[e._id]) : f.push(e) }), s.each(t, function(t) { var e = t.name,
                        r = t.coord,
                        h = t._id,
                        f = t.attrs,
                        p = t.index,
                        g = t.type; if (u = o(e, "leave", t.animateCfg), a = i(e, r, "leave", u.animation), s.isFunction(a)) { var d = n.addShape(g, { attrs: f, index: p }); if (d._id = h, d.name = e, r) { var y = d.getMatrix(),
                                v = c.multiply([], y, r.matrix);
                            d.setMatrix(v) } l = !0, a(d, u, r) } }), s.each(h, function(t) { var e = t.name,
                        n = t.get("coord"),
                        r = t.get("cacheShape").attrs; if (!s.isEqual(r, t.__attrs)) { if (u = o(e, "update", t.get("animateCfg")), a = i(e, n, "update", u.animation), s.isFunction(a)) a(t, u, n);
                        else { var c = s.cloneDeep(t.__attrs);
                            t.attr(r), t.animate(c, u.duration, u.easing, function() { t.setSilent("cacheShape", null) }) } l = !0 } }), s.each(f, function(t) { var e = t.name,
                        n = t.get("coord");
                    u = o(e, "enter", t.get("animateCfg")), a = i(e, n, "enter", u.animation), s.isFunction(a) && (a(t, u, n), l = !0) }) } else s.each(e, function(t) { var e = t.name,
                    n = t.get("coord");
                u = o(e, "appear", t.get("animateCfg")), a = i(e, n, "appear", u.animation), s.isFunction(a) && (a(t, u, n), l = !0) }); return l } var s = n(0),
            u = n(162),
            c = n(2).MatrixUtil.mat3;
        t.exports = { execAnimation: function(t, e) { var n = t.get("middlePlot"),
                    i = t.get("backPlot"),
                    o = t.get("_id"),
                    u = t.get("canvas"),
                    c = u.get(o + "caches") || [],
                    l = r(n, o),
                    h = r(i, o),
                    f = l.concat(h);
                u.setSilent(o + "caches", function(t) { var e = {}; return s.each(t, function(t) { if (t._id && !t.isClip) { var n = t._id;
                            e[n] = { _id: n, type: t.get("type"), attrs: s.cloneDeep(t.__attrs), name: t.name, index: t.get("index"), animateCfg: t.get("animateCfg"), coord: t.get("coord") } } }), e }(f));
                (e ? a(c, f, u, e) : a(c, l, u, e)) || u.draw() } } }, function(t, e, n) { var r = {};
        r.Rect = n(187), r.List = n(188), r.Circle = n(455), r.Tree = n(456), r.Mirror = n(457), r.Matrix = n(458), t.exports = r }, function(t, e, n) {
        function r(t, e, n) { return { x: t.x + e * Math.cos(n), y: t.y + e * Math.sin(n) } } var i = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                    function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "circle", e }, e.prototype.getRegion = function(t, e) { var n = 2 * Math.PI / t,
                    i = -1 * Math.PI / 2 + n * e,
                    o = .5 / (1 + 1 / Math.sin(n / 2)),
                    a = r({ x: .5, y: .5 }, .5 - o, i),
                    s = 5 * Math.PI / 4,
                    u = 1 * Math.PI / 4; return { start: r(a, o, s), end: r(a, o, u) } }, e.prototype.generateFacets = function(t) { var e = this,
                    n = e.fields[0]; if (!n) throw "Please specify for the field for facet!"; var r = e.getFieldValues(n, t),
                    i = r.length,
                    o = []; return r.forEach(function(a, s) { var u = [{ field: n, value: a, values: r }],
                        c = e.getFilter(u),
                        l = t.filter(c),
                        h = { type: e.type, colValue: a, colField: n, colIndex: s, cols: i, rows: 1, rowIndex: 0, data: l, region: e.getRegion(i, s) };
                    o.push(h) }), o }, e }(n(61));
        t.exports = i }, function(t, e, n) { var r = n(50),
            i = function(t) {
                function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                        function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "tree", e.line = { lineWidth: 1, stroke: "#ddd" }, e.lineSmooth = !1, e }, e.prototype.generateFacets = function(t) { if (!this.fields.length) throw "Please specify for the fields for facet!"; var e = [],
                        n = this.getRootFacet(t); return e.push(n), n.children = this.getChildFacets(t, 1, e), this.setRegion(e), e }, e.prototype.getRootFacet = function(t) { return { type: this.type, rows: this.getRows(), rowIndex: 0, colIndex: 0, colValue: this.rootTitle, data: t } }, e.prototype.getRows = function() { return this.fields.length + 1 }, e.prototype.getChildFacets = function(t, e, n) { var r = this,
                        i = r.fields; if (!(i.length < e)) { var o = [],
                            a = i[e - 1],
                            s = r.getFieldValues(a, t); return s.forEach(function(i, u) { var c = [{ field: a, value: i, values: s }],
                                l = r.getFilter(c),
                                h = t.filter(l); if (h.length) { var f = { type: r.type, colValue: i, colField: a, colIndex: u, rows: r.getRows(), rowIndex: e, data: h, children: r.getChildFacets(h, e + 1, n) };
                                o.push(f), n.push(f) } }), o } }, e.prototype.setRegion = function(t) { var e = this;
                    e.forceColIndex(t), t.forEach(function(t) { t.region = e.getRegion(t.rows, t.cols, t.colIndex, t.rowIndex) }) }, e.prototype.forceColIndex = function(t) { var e = this,
                        n = [],
                        r = 0;
                    t.forEach(function(t) { e.isLeaf(t) && (n.push(t), t.colIndex = r, r++) }), n.forEach(function(t) { t.cols = n.length }); for (var i = e.fields.length - 1; i >= 0; i--)
                        for (var o = e.getFacetsByLevel(t, i), a = 0; a < o.length; a++) { var s = o[a];
                            e.isLeaf(s) || (s.originColIndex = s.colIndex, s.colIndex = e.getRegionIndex(s.children), s.cols = n.length) } }, e.prototype.getFacetsByLevel = function(t, e) { var n = []; return t.forEach(function(t) { t.rowIndex === e && n.push(t) }), n }, e.prototype.getRegion = function(t, e, n, r) { var i = 1 / e,
                        o = 1 / t,
                        a = { x: i * n, y: o * r }; return { start: a, end: { x: a.x + i, y: a.y + 2 * o / 3 } } }, e.prototype.getRegionIndex = function(t) { var e = t[0]; return (t[t.length - 1].colIndex - e.colIndex) / 2 + e.colIndex }, e.prototype.isLeaf = function(t) { return !t.children || !t.children.length }, e.prototype.setXAxis = function(t, e, n) { n.rowIndex !== n.rows - 1 && (e[t].label = null, e[t].title = null) }, e.prototype.setYAxis = function(t, e, n) { 0 !== n.originColIndex && 0 !== n.colIndex && (e[t].title = null, e[t].label = null) }, e.prototype.onPaint = function() { t.prototype.onPaint.call(this), this.group.clear(), this.facets && this.line && this.drawLines(this.facets, this.group) }, e.prototype.drawLines = function(t, e) { var n = this,
                        r = e.addGroup();
                    t.forEach(function(t) { if (!n.isLeaf(t)) { var e = t.children;
                            n._addFacetLines(t, e, r) } }) }, e.prototype._addFacetLines = function(t, e, n) { var r = this,
                        i = t.view.getViewRegion(),
                        o = { x: i.start.x + (i.end.x - i.start.x) / 2, y: i.start.y };
                    e.forEach(function(t) { var e = t.view.getViewRegion(),
                            i = { x: e.start.x + (e.end.x - e.start.x) / 2, y: e.end.y },
                            a = { x: o.x, y: o.y + (i.y - o.y) / 2 },
                            s = { x: i.x, y: a.y };
                        r._drawLine([o, a, s, i], n) }) }, e.prototype._getPath = function(t) { var e = []; return this.lineSmooth ? (e.push(["M", t[0].x, t[0].y]), e.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y])) : t.forEach(function(t, n) { 0 === n ? e.push(["M", t.x, t.y]) : e.push(["L", t.x, t.y]) }), e }, e.prototype._drawLine = function(t, e) { var n = this._getPath(t),
                        i = this.line;
                    e.addShape("path", { attrs: r({ path: n }, i) }) }, e }(n(61));
        t.exports = i }, function(t, e, n) { var r = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                    function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "mirror", this.transpose = !1, e }, e.prototype.init = function() { this.transpose ? (this.cols = 2, this.rows = 1) : (this.cols = 1, this.rows = 2), t.prototype.init.call(this) }, e.prototype.beforeProcessView = function(t, e) { this.transpose ? e.colIndex % 2 == 0 ? t.coord().transpose().scale(-1, 1) : t.coord().transpose() : e.rowIndex % 2 != 0 && t.coord().scale(1, -1) }, e.prototype.renderTitle = function(t, e) { this.transpose ? this.drawColTitle(t, e) : this.drawRowTitle(t, e) }, e.prototype.setXAxis = function(t, e, n) { 1 !== n.colIndex && 1 !== n.rowIndex || (e[t].label = null, e[t].title = null) }, e.prototype.setYAxis = function() {}, e }(n(188));
        t.exports = r }, function(t, e, n) { var r = function(t) {
            function e() { return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e),
                    function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, t.apply(this, arguments)) } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "matrix", e.showTitle = !1, e }, e.prototype.generateFacets = function(t) { for (var e = this.fields, n = e.length, r = n, i = [], o = 0; o < r; o++)
                    for (var a = e[o], s = 0; s < n; s++) { var u = e[s],
                            c = { type: this.type, colValue: a, rowValue: u, colField: a, rowField: u, colIndex: o, rowIndex: s, cols: r, rows: n, data: t, region: this.getRegion(n, r, o, s) };
                        i.push(c) }
                return i }, e.prototype.setXAxis = function(t, e, n) { n.rowIndex !== n.rows - 1 && (e[t].title = null, e[t].label = null) }, e.prototype.setYAxis = function(t, e, n) { 0 !== n.colIndex && (e[t].title = null, e[t].label = null) }, e }(n(187));
        t.exports = r }, function(t, e, n) { var r = n(1),
            i = "https://kcart.alipay.com/web/bi.do",
            o = n(0),
            a = function() {
                function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = e || {},
                        r = new Image;
                    o.mix(this, { image: r, server: i }, n) } return t.prototype.log = function(t) { var e = t || {},
                        n = o.mix({ pg: document.URL, r: (new Date).getTime() }, e),
                        r = encodeURIComponent(JSON.stringify([n]));
                    this.image.src = this.server + "?BIProfile=merge&d=" + r }, t }();
        setTimeout(function() { if (r.trackable) {
                (new a).log({ g2: !0, version: r.version, page_type: "syslog" }) } }, 3e3) }]) });