var h = true,
    j = null,
    k = false;

function m() {
    return function() {}
}
if (t === undefined) var t = {};
t.X = new Class({
    h: h,
    ma: Date.now(),
    u: function() {
        return "[" + ((Date.now() - this.ma) / 1E3).toFixed(3) + "s]"
    },
    initialize: function(a) {
        this.console = typeof Ti == "object" && typeof Ti.W == "object" ? Ti.W : window.console;
        (this.h = a) && this.info("Running in DEBUG mode")
    },
    Ka: function() {
        this.h = h;
        this.info("Running in DEBUG mode")
    },
    Ja: function() {
        this.h = k;
        this.info("Running in RELEASE mode")
    },
    info: function(a) {
        if (this.h && this.console) {
            a = this.u() + " " + a;
            "info" in this.console ? this.console.info(a) : this.console.log(a)
        }
    },
    log: function(a) {
        if (this.h && this.console) {
            a = this.u() + " " + a;
            "debug" in this.console ? this.console.debug(a) : this.console.log(a)
        }
    },
    warn: function(a) {
        if (this.h && this.console) {
            a = this.u() + " " + a;
            "warn" in this.console ? this.console.warn(a) : this.console.log(a)
        }
    },
    error: function(a) {
        if (this.h && this.console) {
            a = this.u() + " " + a;
            "error" in this.console ? this.console.error(a) : this.console.log(a)
        }
    },
    Fa: function(a, b) {
        if (this.h && this.console) if ("assert" in this.console) this.console.assert(a, b);
        else a || this.error("Assertion failed: " + b)
    },
    qa: function(a) {
        this.h && this.console && this.info(JSON.stringify(a))
    }
});
window.$debug = new t.X(k);
Object.append(DOMEvent.defineKeys, {
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    shift: 16,
    control: 17,
    alt: 18,
    capslock: 20,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": Browser.firefox ? 109 : 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222,
    "+": 107
});
DOMEvent.implement({
    Ta: function() {
        if (!this.key || this.key == "") return "";
        if (["shift", "control", "alt", "capslock", "pageup", "pagedown", "end", "home", "numlock", "scrolllock", "backspace"].contains(this.key)) return "";
        var a = "";
        if (this.event.altKey) a += Browser.safari ? "option-" : "alt-";
        if (this.event.metaKey) a += "command-";
        if (this.event.ctrlKey) a += Browser.safari ? "control-" : "ctrl-";
        if (this.event.shiftKey) a += "shift-";
        a += this.key;
        return a
    }
});
Array.F = 1;
Array.Z = 2;
Array.ea = 4;
Array.aa = 8;
Array.J = 16;
(function() {
    function a(c, d, e, f) {
        return function g(i, l) {
            var n, o, q, s = l[0];
            (function r(p, z, A) {
                var u = p[0];
                if (p.length > 1) r(p.slice(1), z[u], A[u]);
                else {
                    o = z[u].toString();
                    q = A[u].toString()
                }
            })(i[0].match(/[^.]+/g), c, d);
            if (s & Array.J) n = o.toFloat() - q.toFloat();
            else {
                if (s & Array.F) {
                    o = o.toLowerCase();
                    q = q.toLowerCase()
                }
                n = o > q ? 1 : o < q ? -1 : 0
            }
            if (n === 0 && i.length > 1) n = g(i.slice(1), l.slice(1));
            else if (s & Array.Z) n *= -1;
            return n
        }(e, f)
    }
    function b(c, d) {
        var e = d & Array.J ? this.map(function(f) {
            return f[c].toFloat()
        }) : d & Array.F ? this.map(function(f) {
            return f[c].toLowerCase()
        }) : this.map(function(f) {
            return f[c]
        });
        return e.length !== [].combine(e).length
    }
    Array.implement({
        Ya: function(c, d) {
            function e(f, g) {
                return a(f, g, c, d)
            }
            c = $splat(c);
            d = $splat(d);
            if (d.length !== c.length) d = [];
            if (d[0] & Array.ea && c.some(function(f, g) {
                return b(f, d[g])
            })) return 0;
            if (d[0] & Array.aa) return this.slice().sort(e);
            else this.sort(e)
        }
    })
})();
String.implement({
    k: function(a) {
        return this.indexOf(a) == 0
    },
    D: function(a) {
        var b = this.lastIndexOf(a);
        return b != -1 && b + a.length == this.length
    },
    $a: function(a, b) {
        var c = 0;
        if (b) c = this.lastIndexOf(a);
        else this.indexOf(a);
        if (c >= 0) return this.substring(0, c);
        return ""
    },
    Za: function(a, b) {
        var c = 0;
        if (b) c = this.lastIndexOf(a);
        else this.indexOf(a);
        if (c >= 0) return this.substring(c + a.length);
        return ""
    },
    ab: function(a, b) {
        for (var c = [], d = 0, e = 0; e < this.length; e++) if (a.contains(this[e])) {
            c.push(this.substring(d, e));
            d = e + b
        }
        d < this.length && c.push(this.substring(d));
        return c
    },
    Ga: function() {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this)
    }
});
new Class({
    initialize: function(a) {
        var b = a.indexOf("://");
        if (!(b < 0)) {
            var c = a.indexOf("/", b + 3 + 1);
            if (!(c < 0)) {
                this.scheme = a.substring(0, b);
                this.host = a.substring(b + 3, c);
                this.path = a.substring(c + 1);
                this.q = this.host.split("*");
                this.r = this.path.split("*")
            }
        }
    },
    match: function(a) {
        if (!$chk(this.scheme)) return k;
        if (this.scheme !== "*" && this.scheme + ":" !== a.protocol) return k;
        if (this.host !== "*") if (this.host.indexOf("*") < 0) {
            if (this.host !== a.host) return k
        } else if (this.q.length !== 2) return k;
        else {
            if (a.host.length < this.host.length) return k;
            if (this.q[0] !== "" && !a.host.k(this.q[0])) return k;
            if (this.q[1] !== "" && !a.host.D(this.q[1])) return k
        }
        if (this.path !== "*") {
            a = a.pathname.substring(1);
            if (this.path.indexOf("*") < 0) {
                if (this.path !== a) return k
            } else if (this.r.length !== 2) return k;
            else {
                if (a < this.path.length) return k;
                if (this.r[0] !== "" && !a.k(this.r[0])) return k;
                if (this.r[1] !== "" && !a.D(this.r[1])) return k
            }
        }
        return h
    }
});
$checkpoint = m();
Element.implement({
    v: /article|body|content|entry|page|post|text/i,
    R: /comment|combx|disqus|contact|foot|link|masthead|media|promo|related|scroll|shoutbox|sponsor|tags|widget|share|tools/i,
    Q: /comment|combx|disqus/i,
    U: /youtube|vimeo|dailymotion|livestream\.com|viddler\.com/,
    Oa: function() {
        for (var a = this.getSize(), b = this.getPosition(), c = this.getElements("*"), d = Math.max(0, c.length - 10); d < c.length; d++) {
            var e = c[d].getSize(),
                f = c[d].getPosition();
            b.x = Math.min(f.x, b.x);
            a.x = Math.max(a.x, f.x + e.x - b.x, e.x);
            a.y = Math.max(a.y, f.y + e.y - b.y, e.y);
            if (e.x != 0 && e.y != 0 && f.x != 0 && f.y != 0) break
        }
        return a
    },
    Ra: function() {
        return this.get("text")
    },
    sa: function() {
        for (var a = "", b = this.childNodes, c = 0; c < b.length; c++) {
            var d = b[c];
            if (d.nodeName == "#text" && d.nodeValue) a += d.nodeValue;
            else if (["STRONG", "EM", "FONT", "B"].contains(d.nodeName)) a += d.sa()
        }
        return a
    },
    Pa: function(a) {
        for (var b = "", c = this; c;) if (!(a && c.className === "" && c.id === "")) {
            var d = c.get("tag"),
                e = c.id,
                f = c.className;
            if (e !== "") d += "#" + e;
            if (f !== "") for (var g = f.split(" "), i = 0; i < g.length; i++) if (g[i] !== "") d += "." + g[i];
            if (e === "" && f === "") if (c.get("width")) d += "[width=" + c.get("width") + "]";
            b = b !== "" ? d + " >" + b : d;
            c = c.getParent()
        }
        if (b.k("div#__root__ ")) b = b.substring(13);
        return b
    },
    ra: function() {
        var a = 0;
        this.v.test(this.className) && a++;
        this.v.test(this.id) && a++;
        this.R.test(this.className) && a--;
        this.R.test(this.id) && a--;
        return a
    },
    ta: function() {
        var a = this.get("text").length;
        if (a === 0) return 0;
        for (var b = 0, c = this.getElements("a"), d = 0; d < c.length; d++) if ($chk(c[d]) && c[d].isDisplayed()) b += c[d].get("text").length;
        return b / a
    },
    va: function() {
        var a = /https?:\/\/(?:\w+\.)*(\w+\.\w+)/,
            b = a.exec($(document).location.href);
        if (!b || b.length < 2) return k;
        var c = this.getElement("embed[src]");
        if (c && c.src) {
            if (this.U.test(c.src)) return h;
            if ((c = a.exec(c.src)) && c.length > 1 && b[1] === c[1]) return h
        }
        if (c = this.get("data")) {
            if (this.U.test(c)) return h;
            if ((c = a.exec(c)) && c.length > 1 && b[1] === c[1]) return h
        }
        return k
    },
    ua: function() {
        var a = 0;
        this.Q.test(this.className) && a--;
        this.Q.test(this.id) && a--;
        if (a >= 0) return k;
        this.v.test(this.className) && a++;
        this.v.test(this.id) && a++;
        return a < 0
    },
    Sa: function() {
        var a = [".adnxs.com", ".doubleclick.net", ".double.net", ".atdmt.com", "adserver.adpredictive.com", "affiliates.jlist.com", "media.fastclick.net"],
            b = this.get("tag");
        if (b == "a") for (b = 0; b < a.length; b++) {
            if (this.href.indexOf(a[b]) > 0) return h
        } else if (b == "img") for (b = 0; b < a.length; b++) if (this.src.indexOf(a[b]) > 0) return h;
        return k
    },
    Ha: function() {
        for (var a = this.getSize(), b = this.getPosition(), c = this.getElements("*"), d = 0; d < c.length; d++) {
            var e = c[d].getSize(),
                f = c[d].getPosition();
            b.x = Math.min(f.x, b.x);
            a.x = Math.max(a.x, f.x + e.x - b.x, e.x);
            a.y = Math.max(a.y, f.y + e.y - b.y, e.y)
        }
        return a.x > 360 && a.x * a.y > 16E4
    }
});
Element.implement({
    Ua: function(a, b) {
        this.P();
        for (var c = this.clone(a, b), d = c.getElements("[klip_invisible]"), e = d.length - 1; e >= 0; e--) Browser.safari && d[e].get("tag") == "iframe" || d[e].destroy();
        this.za();
        return c
    },
    P: function() {
        for (var a = this.getChildren("*"), b = 0; b < a.length; b++) Browser.safari && a[b].get("tag") == "iframe" || (a[b].isDisplayed() ? a[b].P() : a[b].setAttribute("klip_invisible", j))
    },
    za: function() {
        for (var a = this.getElements("[klip_invisible]"), b = 0; b < a.length; b++) Browser.safari && a[b].get("tag") == "iframe" || a[b].removeAttribute("klip_invisible")
    },
    Ea: function(a) {
        this.setAttribute(a, 1)
    },
    wa: function(a) {
        this.removeAttribute(a)
    },
    Qa: function(a) {
        return this.getAttribute(a)
    },
    Wa: function() {
        var a = document.URL;
        if (a.indexOf("#") >= 0) a = a.substring(0, a.indexOf("#"));
        for (var b = this.getElements("*"), c = 0; c < b.length; c++) {
            var d = b[c];
            if ($chk(d)) {
                if ($chk(d.src)) d.src = d.src;
                if (d.get("tag") != "img" && $chk(d.href)) d.href = d.href.k(a + "#") ? d.href.substring(a.length) : d.href
            }
        }
    },
    Xa: m(),
    Aa: function() {
        for (var a = this.getElements("table"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) {
                var d = c.getElements("td");
                if (d.length == 0) c.destroy();
                else if (d.length == 1) {
                    var e = new Element("div");
                    e.set("html", d[0].get("html"));
                    e.replaces(c)
                } else if (!c.getElements("tr").some(function(g) {
                    return g.getElements("td").length > 1
                })) {
                    var f = "";
                    d.each(function(g) {
                        f = f + "<div>" + g.get("html") + "</div>"
                    });
                    e = new Element("div");
                    e.set("html", f);
                    e.replaces(c)
                }
            }
        }
    },
    Na: function() {
        var a = j;
        switch (this.get("tag")) {
        case "td":
        case "th":
            a = new Element("table");
            a.set("html", "<tbody><tr>" + this.outerHTML + "</tr></tbody>");
            break;
        case "tr":
        case "tfoot":
        case "thead":
            a = new Element("table");
            a.set("html", "<tbody>" + this.outerHTML + "</tbody>");
            break;
        case "tbody":
            a = new Element("table");
            a.set("html", this.outerHTML)
        }
        a = a || this;
        a.Aa();
        return a
    },
    La: function() {
        for (var a = this.getSize(), b = this.getElements("img"), c = 0; c < b.length; c++) {
            var d = b[c],
                e = d.getStyle("float");
            e = e === undefined || e === j ? "" : e.toLowerCase();
            var f = d.getSize();
            if (f.x == 0) f = {
                x: d.width,
                y: d.height
            };
            if (f.x > 400 || f.x > a.x / 2) {
                d.setStyle("float", "");
                d.addClass("klip_largeobject")
            } else if (f.x * f.y < 65536) {
                if (e === "" || e === "none") {
                    d.setStyle("float", "");
                    d.addClass("klip_smallobject")
                }
            } else {
                d.setStyle("float", "");
                d.addClass("klip_largeobject")
            }
        }
    },
    Ma: function() {
        for (var a = this.getSize(), b = this.getElements("object"), c = 0; c < b.length; c++) {
            var d = b[c];
            d.getStyle("float");
            var e = d.getSize();
            if (e.x > 400 || e.x > a.x / 2) {
                d.setStyle("float", "");
                d.addClass("klip_largeobject")
            }
        }
    },
    O: function() {
        for (var a = this.getElements("p"), b = a.length - 1; b >= 0; b--) a[b].grab(new Element("br"), "after")
    }
});
Element.implement({
    ha: function() {
        var a = this.getElements("[klip_block_begin]"),
            b = this.getElements("[klip_block_end]");
        a = a.length ? a[0] : j;
        b = b.length ? b[b.length - 1] : j;
        if (a || b) {
            var c = this.getElements("[klip_block_first]"),
                d = this.getElements("[klip_block_last]");
            c = c.length ? c[0] : j;
            var e = d.length ? d[d.length - 1] : j;
            d = [];
            if (c) d = c.getParents();
            e && e.getParents();
            if (a) {
                c = -1;
                e = this.getElements("*");
                for (var f = 0; f < e.length; f++) if (e[f] == a) {
                    c = f;
                    break
                }
                if (c >= 0) for (f = c; f > 0; f--) {
                    if (e[f] == this || e[f].getParent() == this || d.contains(e[f])) break;
                    e[f].destroy()
                }
            }
            if (b) {
                c = -1;
                e = this.getElements("*");
                for (f = 0; f < e.length; f++) if (e[f] == b) {
                    c = f;
                    break
                }
                if (c >= 0) for (f = e.length - 1; f >= c; f--) {
                    if (e[f] == this || e[f].getParent() == this) break;
                    e[f].destroy()
                }
            }
        }
    },
    la: function(a) {
        if (a === undefined || a === j || a === "") a = "*";
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) c.isDisplayed() || c.destroy()
        }
    },
    ga: function(a) {
        if (a === undefined || a === j || a === "") a = "*";
        var b = k;
        do {
            b = k;
            for (var c = this.getElements(a), d = c.length - 1; d >= 0; d--) {
                var e = c[d];
                if ($chk(e)) if (!["img", "object", "embed"].contains(e.tagName)) if (e.get("text").trim().length === 0 && e.getElements("img, object, embed").length === 0) {
                    e.destroy();
                    b = h
                }
            }
        } while (b)
    },
    ia: function(a) {
        if (a === undefined || a === j || a === "") a = "*";
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) if (c.ua()) c.destroy();
            else c.ra() < 0 && c.get("text").length < 400 && c.destroy()
        }
    },
    ja: function(a, b) {
        if (a === undefined || a === j || a === "") a = "*";
        for (var c = this.getElements(a), d = c.length - 1; d >= 0; d--) {
            var e = c[d];
            $chk(e) && e.ta() > b && e.destroy()
        }
    },
    Da: function(a) {
        if (a === undefined || a === j || a === "") a = "*";
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) c.get("tag") === "object" && c.va() || c.destroy()
        }
    },
    t: function(a) {
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            $chk(c) && c.destroy()
        }
    },
    Ca: function(a, b) {
        for (var c = this.getElements(a), d = c.length - 1; d >= 0; d--) {
            var e = c[d];
            if ($chk(e)) e.getSize().x > b || e.destroy()
        }
    },
    z: function(a, b) {
        if (a === undefined || a === j || a === "") a = "*";
        for (var c = this.getElements(a), d = c.length - 1; d >= 0; d--) {
            var e = c[d];
            if ($chk(e)) for (var f = 0; f < b.length; f++) e.removeAttribute(b[f])
        }
    },
    ka: function() {
        for (var a = this.getElements("a"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) for (var d in c) if (d.k("on") && typeof c[d] === "function") c[d] = j
        }
    },
    fa: function() {
        for (var a = this.getElements("a"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) {
                var d = c.get("href");
                if ($chk(d)) {
                    d = d.trim();
                    if (d.k("javascript:") || d.k("jscript:")) c.set("href", "#")
                }
            }
        }
    },
    clean: function() {
        for (var a = ["klip_block_h", "klip_block_v", "klip_block_comments", "klip_block_banner", "klip_block_ads", "klip_block_big_buttons", "klip_block_medium_buttons", "klip_block_iframe", "klip_block_form"], b = "", c = 0; c < a.length; c++) {
            if (b) b += ",";
            b += "." + a[c]
        }
        this.la("*");
        this.t("iframe, script, noscript, form, style, #comment");
        if (!($(document.body).className.indexOf("mediawiki") >= 0)) if (!document.location.host.D("baike.baidu.com")) {
            this.ha();
            for (c = 0; c < a.length; c++) this.t("[" + a[c] + "]");
            this.ia("*");
            this.ja("ul", 0.33);
            this.ga("p,div,span,ins,table,td,tr,ul,ol,li")
        }
        this.z("*", ["style", "class", "id"]);
        this.ka("*");
        this.fa();
        this.removeAttribute("style");
        this.removeAttribute("class");
        this.removeAttribute("id");
        var d = this;
        ["klip_block_h", "klip_block_v", "klip_block_comments", "klip_block_banner", "klip_block_ads", "klip_block_big_buttons", "klip_block_medium_buttons", "klip_block_iframe", "klip_block_form", "klip_block_text", "klip_block_side", "klip_block_seed", "klip_block_first", "klip_block_last", "klip_block_begin", "klip_block_end"].each(function(e) {
            d.getElements("[" + e + "]").wa(e)
        });
        this.t("object, applet, embed")
    },
    na: function(a) {
        this.t(a)
    }
});
if (v === undefined) var v = {};
v.G = new Class({
    g: function(a) {
        a = (new URI(a)).get("host");
        if (!$chk(a)) return "";
        return a
    },
    initialize: function() {
        this.e = [];
        this.load()
    },
    j: function() {
        var a = this;
        chrome.extension.onMessage.addListener(function(b, c, d) {
            if (b.action === "highlights-query") d(a.query(b.host));
            else if (b.action === "highlights-add") {
                a.add(b.url, b.selector);
                a.save();
                b = (new URI(b.url)).get("host");
                $chk(b) && d(a.query(b))
            } else if (b.action === "highlights-remove") {
                a.remove(b.url);
                a.save()
            } else if (b.action === "highlights-clear") {
                a.clear(b.url);
                a.save()
            } else if (b.action === "highlights-clearall") {
                a.C();
                a.save()
            }
            return h
        })
    },
    load: function() {
        if (window.localStorage.myHighlights) for (var a = JSON.parse(window.localStorage.myHighlights), b = 0; b < a.length; b++) {
            var c = this.g(a[b].url);
            if (c !== "") {
                if (this.e[c] === undefined) this.e[c] = [];
                this.e[c].push(a[b])
            }
        }
    },
    save: function() {
        var a = [],
            b;
        for (b in this.e) for (var c = 0; c < this.e[b].length; c++) this.e[b][c] && this.e[b][c].url && a.push(this.e[b][c]);
        window.localStorage.myHighlights = JSON.stringify(a)
    },
    add: function(a, b) {
        var c = this.g(a);
        if (c === "") return k;
        if (this.e[c] === undefined) this.e[c] = [];
        else for (var d = this.e[c].length - 1; d >= 0; d--) this.e[c][d].url === a && this.e[c].erase(this.e[c][d]);
        this.e[c].push({
            url: a,
            selector: b,
            date: Date.now()
        });
        return h
    },
    remove: function(a) {
        var b = this.g(a);
        if (b === "") return k;
        if (this.e[b] === undefined) return h;
        for (var c = 0; c < this.e[b].length; c++) if (this.e[b][c].url === a) {
            this.e[b].erase(this.e[b][c]);
            break
        }
        return h
    },
    clear: function(a) {
        a = this.g(a);
        if (a === "") return k;
        delete this.e[a];
        return h
    },
    C: function() {
        this.e = {};
        return h
    },
    query: function(a) {
        if (a === "") return j;
        var b = [];
        if (a = this.e[a]) for (var c = 0; c < a.length; c++) {
            for (var d = b.length - 1; d >= 0; d--) a[c].url === b[d].url && b.erase(b[d]);
            b.push(a[c])
        }
        return b
    }
});
var w = [],
    x = [{
        url: "http://gizmodo.com/5671996/the-anti+smartphone",
        selector: "html.webkit.safari.win.js >body >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://www.huffingtonpost.com/morgan-goodwin/risking-arrest-to-plant-t_b_773036.html",
        selector: "html >body#news.bpage_body.loadimages.green >div#wrapper >div#wrapper_inner >div#blog_content.entry_design_v2.grid.two_thirds.flush_top.col.full_border >div#entry_body.blog_content.blog_design_b >div.entry_body_text"
    }, {
        url: "http://techcrunch.com/2010/10/24/groupon-google/",
        selector: "html >body#techcrunch >div#container >div#columns >div#col1 >div#post-235713.post.single_post >div.entry"
    }, {
        url: "http://gawker.com/5672192/larry-flynt-is-bill-clintons-hero-according-to-larry-flynt",
        selector: "html.webkit.safari.win.js >body.serif >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://www.engadget.com/2010/10/24/asus-eee-pc-1015pw-peeks-out-of-hiding-with-dual-core-atom-roya/",
        selector: "html >body.home.article >div.content_holder >div.inner-padding >div.col1 >div.blogroll >div.post_content.permalink >div.post_body"
    }, {
        url: "http://www.thedailybeast.com/blogs-and-stories/2010-10-24/juan-williams-on-being-fired-and-more-sunday-talk/",
        selector: "html >body#blogsstories_article >div#master >div.outer-content-holder >div#content >div#maincontent.default >div#blogsstories_holder.col2 >div#content_wrap"
    }, {
        url: "http://hotair.com/archives/2010/10/24/last-week-to-support-the-marriage-encounter-pepsi-refresh-challenge/",
        selector: "html >body#inside >div#wrapper >div#page-wrapper >div#single-wrapper >div#main-vent.inner >div#vent-post >div#page-post"
    }, {
        url: "http://thinkprogress.org/2010/10/24/rove-2004-react/",
        selector: "html >body >div#bodywrap >div#containertp >div#contentleft >div#post-126182.post.pc_contain >div.pc_body >div.entryContent"
    }, {
        url: "http://yglesias.thinkprogress.org/2010/10/44727/",
        selector: "html >body >div#bodywrap >div#containertp >div#contentleft >div#post-44727.post.uncat_contain >div.uncat_body >div.entryContent"
    }, {
        url: "http://wonkroom.thinkprogress.org/2010/10/24/science-v-buck/",
        selector: "html >body >div#bodywrap >div#containertp >div#contentleft >div#post-35306.post.env_contain >div.env_body >div.entryContent"
    }, {
        url: "http://www.tmz.com/2010/08/05/ufc-fighter-chael-sonnen-street-fight-video/",
        selector: "html >body >div >div#page-wrap >div#page-content >div#outer-main >div#main >div.post >p.body"
    }, {
        url: "http://www.mediaite.com/online/snl-spoofs-jimmy-mcmillan-you-probably-think-im-just-another-washington-insider/",
        selector: "html >body >div#main >div.slice >div.posts >div.post0.story"
    }, {
        url: "http://politicalticker.blogs.cnn.com/2010/10/23/possible-compromise-on-tax-cuts/",
        selector: "html >body.single.single-post.postid-130504 >div#cnnContainer.cnn-blog-main.cnnEatMain >div.cnn_maincntnr >div.cnn_contentarea >div#cnnContentContainer >div.cnn-shdwbx-right >div.cnn-shdwbx-left >table[width=980] >tbody >tr >td[width=640] >div#cnnBlogContentArea.cnn_pt_tpad12.cnn_pt_pstcontentarea >div.cnnPostWrap >div.cnnRightPost.cnn_pt_pst_col_pad"
    }, {
        url: "http://jezebel.com/5672066/what-made-randy-and-evi-quaid-lose-their-shit",
        selector: "html.webkit.safari.win.js >body.serif >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://www.boingboing.net/2010/10/24/sweet-new-tees-from.html",
        selector: "html >body#mt-blog >div#container >div#content >div#bloggering >div#entry-83370.post >div#thepost >p"
    }, {
        url: "http://lifehacker.com/",
        selector: "html >body >div#main-container.container >div.inner >div#container >div.mainContent >div.permalink.postContainer.portrait >div.gmgrid >div.grid-full.alpha.omega"
    }, {
        url: "http://www.deadline.com/2010/10/forget-eisner-now-its-chernin-to-tribune/",
        selector: "html >body#hollywood.single.postid-78281.forget-eisner-now-its-chernin-to-tribune >div#core >div#content >div#copy >div#post-78281.post-78281.post.hentry.category-best-of.category-hollywood.category-london.category-new-york.category-tv.tag-big-media.tag-michael-eisner.tag-news-corp.tag-peter-chernin.tag-peter-chernin-news-corp.tag-sam-zell.tag-tribune-co.tag-tribune-co-bankruptcy.tag-tribune-co-ceo.tag-tribune-co-chapetr-11.tag-tribune-co-finance.tag-tribune-co-peter-chernin.tag-tribune-co-sam-zell"
    }, {
        url: "http://www.readwriteweb.com/archives/cartoon_please_retweet_me_let_me_know.php",
        selector: "html >body >div#wrapper >div#content-column-left >div#left_column_style >div#entry-22621.entry-asset.asset >div.asset-content"
    }, {
        url: "http://thecaucus.blogs.nytimes.com/2010/10/24/brown-and-boxer-have-significant-leads-new-poll-shows/",
        selector: "html >body.blogPost >div#shell >div#page >div#thecaucus.blog.wrap >div#aCol >div#content.hfeed >div#entry-112335.entry.hentry"
    }, {
        url: "http://artsbeat.blogs.nytimes.com/2010/10/24/gary-numan-kanye-west-and-more-scenes-from-cmj/",
        selector: "html >body.blogPost >div#shell >div#page >div#artsbeat.blog.wrap >div#aCol >div#content.hfeed >div#entry-137913.entry.hentry"
    }, {
        url: "http://mediadecoder.blogs.nytimes.com/2010/10/22/nprs-schiller-says-juan-williams-was-fired-because-of-ethics-guidelines/",
        selector: "html >body.blogPost >div#shell >div#page >div#mediadecoder.blog.wrap >div#aCol >div#content.hfeed >div#entry-47463.entry.hentry"
    }, {
        url: "http://dealbook.blogs.nytimes.com/2010/10/22/genzyme-makes-case-that-sanofi-bid-is-too-low/",
        selector: "html >body.blogPost >div#shell >div#page >div#main >div#abColumns >div#entry-306231.entry.hentry"
    }, {
        url: "http://andrewsullivan.theatlantic.com/the_daily_dish/2010/10/mental-health-break-16.html",
        selector: "html >body#sullivan >div#container >div.middle.noFold >div.contentColumn.singleContent"
    }, {
        url: "http://kotaku.com/5672068/diablo-iii-arena-battles-will-devour-your-soul",
        selector: "html.webkit.safari.win.js >body >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://www.politicsdaily.com/2010/10/24/florida-senate-debate-whats-an-independent-whats-compromise/",
        selector: "html >body >div#areaAllContent.container >div#areaRundown.container2 >div#areaLR.leftrail >div#articleStr.smallText >div.artCotents"
    }, {
        url: "http://www.popeater.com/2010/10/24/mel-gibson-furious-hangover-2/",
        selector: "html >body >div#mainContainer >div#innerContainer >div#left >div#p19687063 >div.article"
    }, {
        url: "http://deadspin.com/5671200/your-nfl-late-games-open-thread",
        selector: "html.webkit.safari.win.js >body.serif >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://www.aolnews.com/elections/article/bill-clinton-stumps-for-democrats-in-michigan-minnesota/19687243",
        selector: "html >body >div#cntnr >div#main.clrFx.articleBdy >div#lftCntnr >div#article-19687243.article.hnews.hentry.item"
    }, {
        url: "http://nymag.com/daily/entertainment/2010/10/saturday_night_live_recap_1.html",
        selector: "html.can-has-js >body#nymag.daily.entertainment.vulture.ad-column-300.individual-entry-archive >div#wrap-wrap >div#wrap >div#content >div#content-layout >div#blog.entertainment.individual-entry-archive >div#content-primary-wrap >div#content-primary >div#entry-105311.entry.wide-image.feature-overnights >div.entry-content"
    }, {
        url: "http://nymag.com/daily/entertainment/2010/10/rocky_horrorglee.html",
        selector: "html.can-has-js >body#nymag.daily.entertainment.vulture.ad-column-300.individual-entry-archive >div#wrap-wrap >div#wrap >div#content >div#content-layout >div#blog.entertainment.individual-entry-archive >div#content-primary-wrap >div#content-primary >div#entry_content >div#entry-105590.entry.right-aligned-image.feature-oh-em-glee >div.entry-content >div.entry-body"
    }, {
        url: "http://nymag.com/daily/intel/2010/10/american_hikers_in_iran.html",
        selector: "html.can-has-js >body#nymag.daily.intel.news.daily.ad-column-300.individual-entry-archive >div#wrap-wrap >div#wrap >div#content >div#content-layout >div#blog.intel.individual-entry-archive >div#content-primary-wrap >div#content-primary >div#entry-105321.entry.left-aligned-thumbnail.feature-iran >div.entry-content"
    }, {
        url: "http://gigaom.com/2010/10/23/latest-smartphones-reviewed-t-mobile-g2-nokia-n8/",
        selector: "html >body#go-channel-tech.techwordpress.y2010.m10.d25.h00.chrome.wpdotcom.single.postid-184753.s-y2010.s-m10.s-d23.s-h05.s-category-mobile-phones-6.s-tag-nokia.s-tag-symbian.s-tag-windows-phone-7.s-tag-blackberry-torch.s-tag-research-in-motion.s-tag-android.s-author-kevintofel.go-channel-tech.clearfix.tk-active.loaded >div#inner-body-tech.inner-body.clearfix >div#inner-body-1-tech.inner-body-1.clearfix >div#inner-body-2-tech.inner-body-2.clearfix >div#grid-wrap-tech.grid-wrap.clearfix >div#init-grid-tech.init-grid.container_12.clearfix >div#content.grid_12.content.p.post.publish.author-kevin-c-tofel.category-mobile-phones-6.tag-nokia.tag-symbian.tag-windows-phone-7.tag-blackberry-torch.tag-research-in-motion.tag-android.y2010.m10.d23.h05.alt.clearfix >div#single-page.grid_8.alpha.single >div#post-content-184753.post.content-default.p1.post.publish.author-kevin-c-tofel.category-mobile-phones-6.tag-nokia.tag-symbian.tag-windows-phone-7.tag-blackberry-torch.tag-research-in-motion.tag-android.y2010.m10.d23.h05.clearfix >div.post-content.clearfix"
    }, {
        url: "http://www.redstate.com/dryun/2010/10/24/time-for-action-am-action-gotv-buses-out-of-washington-dc/",
        selector: "html >body >div#container >div#main >div#content >div.storybox >div.roundedfg >div.roundedBoxContent >div#post-12.post.homepost >div.entry"
    }, {
        url: "http://www.joystiq.com/2010/10/24/starcraft-2-mods-preview/",
        selector: "html >body.perm >div#container.group >div#content.group >div#main-content.group >div#p19686288 >div.post.permalink >div.post-inner"
    }, {
        url: "http://www.crunchgear.com/2010/10/23/weekend-giveaway-nixon-51-30-pu-watch-from-watchismo/",
        selector: "html >body#crunchgear >div#container >div#columns >div#col1 >div#post-183186.post.single_post >div.entry"
    }, {
        url: "http://www.buzzfeed.com/wecanchangetheworld/reincarnold-meg-whitman-the-plagiarist-1q36",
        selector: "html >body.BuzzPage.PermalinkPage.BuzzSection >div.Page >div.PageBkgd >div.Container >div.Content >div.buzz.no-border.bf_dom"
    }, {
        url: "http://tpmmuckraker.talkingpointsmemo.com/2010/10/foxs_muslim_expert_for_juan_williams_story_is_a_be.php",
        selector: "html >body >div.container_12.mainblog >div.grid_8.post_body.dc_postbody >div.entry_text"
    }, {
        url: "http://michellemalkin.com/2010/10/24/krauthammer-so-nina-why-didnt-npr-fire-you-too/",
        selector: "html >body >div.body2 >div#container >div#content >div#leftCol >div.article >div.blog"
    }, {
        url: "http://pajamasmedia.com/blog/dr-hwang-jang-yop-highest-ranking-north-korean-defector-dead-at-87/",
        selector: "html >body >div#container >div#wrapper >div#content >div#innerpage-content"
    }, {
        url: "http://www.tuaw.com/2010/10/24/adobe-launches-project-rome-preview-all-in-one-content-creation/",
        selector: "html >body >div#container >div#main.clearfix >div#col-1 >div#content >div.post >div.postbody"
    }, {
        url: "http://www.boygeniusreport.com/2010/10/24/motorola-droid-pro-launching-on-verizon-wireless-for-299/",
        selector: "html >body >div#content-area >div#content.single >div.entry-wrap >div.entry"
    }, {
        url: "http://justjared.buzznet.com/2010/10/24/angelina-jolie-brad-pitt-day-out-with-pax-zahara/",
        selector: "html >body >div#page >div#content >div#post-589343.post >div.entry"
    }, {
        url: "http://blogs.abcnews.com/politicalpunch/2010/10/obama-vouches-for-former-colleague-dayton-at-minnesota-rally.html",
        selector: "html >body >div.bodycontainerwide >div.story >div.container >div.main >div#blogArea >div#blogMain >p"
    }, {
        url: "http://blogs.abcnews.com/thenote/2010/10/palin-tells-gop-its-time-to-dig-deep.html",
        selector: "html >body >div.bodycontainerwide >div.story >div.container >div.main >div#blogArea >div#blogMain >div#mainContent"
    }, {
        url: "http://biggovernment.com/sright/2010/10/24/60-minutes-shock-report-national-unemployed-and-underemployed-17-5-california-22/",
        selector: "html >body >div#container >div#wrapper >div#content >div.post >div.postcontent"
    }, {
        url: "http://www.slashgear.com/slashgear-week-in-review-week-42-2010-24109977/",
        selector: "html >body.single.single-post.postid-109977 >div#page-wrap >div#content-wrap >div#left-content.rounded >div.news >div#post-109977.post-109977.post.type-post.hentry.category-archive.category-week-in-reviews.tag-android.tag-apple.tag-htc.tag-lion.tag-macbook-air.tag-netflix.tag-notebook.tag-smartphone.tag-streaming.tag-tablet.tag-ultraportable.tag-week-in-review >div.entry_single"
    }, {
        url: "http://voices.washingtonpost.com/ezra-klein/2010/10/what_life_will_look_like_if_re.html",
        selector: "html >body >div#wrapperMain >div >div#wrapperMainCenter >div#wrapperInternalCenter >div#pagebody >div#pagebody-inner >div#article >div.blog_entry >div.content >div.entrytext"
    }, {
        url: "http://blogs.wsj.com/washwire/2010/10/24/angelides-very-very-little-consequence-for-wall-street/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.washwire.subType-unsubscribed >div.reallywide >div.mastertextCenter >div.padding-left-big >div.col6wide.colOverflowTruncated >div.article.story >div.articlePage"
    }, {
        url: "http://www.slashfilm.com/2010/10/24/south-park-copies-inception-web-video-matt-stone-pleads-ignorance/",
        selector: "html >body >div#adskin >div#wrapper >div#main >div#main-top >div#main-bot >div.content >div.post"
    }, {
        url: "http://www.appleinsider.com/articles/10/10/23/verizon_hiring_hundreds_ahead_of_iphone_launch_rumor.html",
        selector: "html.webkit.safari.win.js >body >div >table[width=97%] >tbody >tr >td >table[width=100%] >tbody >tr >td >table[width=100%] >tbody >tr >td >table[width=100%] >tbody >tr >td.bod >div"
    }, {
        url: "http://thenextweb.com/entrepreneur/2010/10/24/startups-dealing-with-competition/",
        selector: "html.wf-pupcat1pupcat2-n7-active.wf-cornerstore1cornerstore2-n4-active.wf-pupcat1pupcat2-n4-active.wf-active.mti-repaint >body >div.container >div.in >div#mid >div.on >div#main-content"
    }, {
        url: "http://www.americanthinker.com/2010/10/clarices_pieces_fox_and_hens_a.html",
        selector: "html#sixapart-standard >body >table[width=990] >tbody >tr >td[width=610]"
    }, {
        url: "http://latimesblogs.latimes.com/lanow/2010/10/cyclist-killed-in-agoura-hills-hit-and-run-driver-arrested-on-suspicion-of-dui-after.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0133f54fcdb9970b.entry >div.entry-content"
    }, {
        url: "http://latimesblogs.latimes.com/washington/2010/10/sunday-shows-steele-biden-kaine-shelton.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef01348860264e970c.entry >div.entry-content"
    }, {
        url: "http://townhall.com/columnists/AustinHill/2010/10/24/obama_undermines_hard_work_and_people_who_play_by_the_rules",
        selector: "html >body >form#aspnetForm >div#OuterWrapper >div#Wrapper >div#Content >div#Main >div.article-body"
    }, {
        url: "http://www.electronista.com/articles/10/10/24/google.and.apple.file.to.dismiss.interval.lawsuit/",
        selector: "html.webkit.safari.win.js >body >div#content >div.container >div#main >div#article.CollapsiblePanel.CollapsiblePanelOpen >div#articlecontainer.CollapsiblePanelContent >div.main-mod-cnt >div.post >div.art-col"
    }, {
        url: "http://www.zerohedge.com/",
        selector: "html.js >body.sidebars >div#page >div#middlecontainer >div#main >div#squeeze >div#squeeze-content >div#inner-content >div.node.sticky"
    }, {
        url: "http://www.theonion.com/articles/american-public-actually-kind-of-endearing-in-some,18277/",
        selector: "html >body#politics.site_onion.article.news.politics.politics >div#wrapper >div#main >div#content_wrapper >div#content >div.story >div.article_body"
    }, {
        url: "http://gothamist.com/2010/10/24/queens_principal_wages_cold_war_aga.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.gothamist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436499.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://hotlineoncall.nationaljournal.com/archives/2010/10/what_we_learned_31.php",
        selector: "html >body >div#well >div#centercontent >table >tbody >tr >td.bg >div#main >div#entry-142254.entry"
    }, {
        url: "http://laughingsquid.com/sprint-4g-in-san-francisco/",
        selector: "html >body.single.single-post.postid-62432.header-full-width.content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-62432.post.type-post.hentry.category-san-francisco >div.entry-content"
    }, {
        url: "http://www.nakedcapitalism.com/2010/10/links-102410.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div#post-13285.post-13285.post.hentry.category-links >div.entry"
    }, {
        url: "http://popwatch.ew.com/2010/10/24/idris-elba-luther-thor-alex-cross-ghost-rider-2/",
        selector: "html >body#popwatch >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-105856.post-105856.post.type-post.hentry.category-movies-channels.category-tv.category-british-things.category-movies.category-television.category-the-office >div.postRight"
    }, {
        url: "http://www.politico.com/blogs/bensmith/1010/GOP_donor_class_eyes_2012.html",
        selector: "html >body#blogPage >div#mainWrapper >div#content.clearfix >div#mainContent >div#bensmithBlog.blogs.clearfix >div#blogMain >div.post"
    }, {
        url: "http://www.grist.org/article/2010-10-23-jonathan-franzen-tackles-population-gears-up-for-oprah-freedom",
        selector: "html >body#article-page >div#content >div#primary >div.article-body"
    }, {
        url: "http://volokh.com/2010/10/24/justice-stevens-still-dissenting-on-flag-burning/",
        selector: "html >body >div#page >div#wrapper >div#content >div#post-38480.post"
    }, {
        url: "http://www.theawl.com/2010/10/hipsters-1964-terrorism-rock-stars-financial-disaster",
        selector: "html >body.single.single-post.postid-57849 >div#wrapper >div#main.clearfix >div#container >div#content >div#post-57849.post-57849.post.type-post.hentry.category-uncategorized.tag-some-links.tag-week-in-review.tag-what-you-missed.clearfix"
    }, {
        url: "http://venturebeat.com/2010/10/24/blizzard-announces-its-newest-online-role-playing-games-video/",
        selector: "html >body >div#wrap >div#container >div#content >div#posts.single >div#post-222375.post-222375.post.hentry.category-venturebeat.category-games.tag-blizzard-mmo.tag-blizzard-mmorpg.tag-blizzcon.tag-blizzcon-2010.tag-new-blizzard-mmo.tag-new-blizzard-mmorpg.tag-world-of-warcraft-killer.tag-wow-killer"
    }, {
        url: "http://jalopnik.com/5671724/the-evolution-of-automaker-logos",
        selector: "html.webkit.safari.win.js >body >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://bigjournalism.com/chorner/2010/10/24/on-climate-change-tea-partiers-get-it-new-york-times-doesnt/",
        selector: "html >body >div#container >div#wrapper >div#content >div.post.single >div.postcontent"
    }, {
        url: "http://www.wired.com/gadgetlab/2010/10/60-hard-drives-70-terabytes/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-53043.post >div.entry"
    }, {
        url: "http://kara.allthingsd.com/20101022/a-nerd-by-any-other-name-would-be-as-geek-bing-gordon-waxes-poetic-and-more-at-the-sfund-launch/",
        selector: "html >body.green01.blog-post.a-nerd-by-any-other-name-would-be-as-geek-bing-gordon-waxes-poetic-and-more-at-the-sfund-launch.kara >div#container >div#content >div#content-main >div#content-left.posts >div#post-36077.post"
    }, {
        url: "http://mediamemo.allthingsd.com/20101024/the-meanest-thing-youll-hear-about-aol-and-yahoo-today/",
        selector: "html >body.purple01.blog-post.the-meanest-thing-youll-hear-about-aol-and-yahoo-today.mediamemo >div#container >div#content >div#content-main >div#content-left.posts >div#post-25016.post"
    }, {
        url: "http://www.funnyordie.com/stories/eee22b60aa/dogs-dressed-as-lobsters",
        selector: "html >body >div#skin_wrapper >div#wrapper >div#page.media_show.story_show.document_show.medium_show >div#content >div.content_column >div.document"
    }, {
        url: "http://www.boston.com/bigpicture/2010/10/france_on_strike.html",
        selector: "html >body#blog >div#container >div#containerBorder >div#content.blog >div >div.headDiv2"
    }, {
        url: "http://www.powerlineblog.com/archives/2010/10/027534.php",
        selector: "html >body >div#body >div#content >div.e >div.eh"
    }, {
        url: "http://crooksandliars.com/susie-madrak/tea-party-extremist-food-inspections-",
        selector: "html.js >body.body-wide >div#page-wrap >div#main-body >div#content >div#node-40972.post >div.node-content"
    }, {
        url: "http://www.9to5mac.com/32023/imovie-11-exports-1080p-video-to-youtube",
        selector: "html >body >div#container >div#content >div#main-column >div#post-32023.post"
    }, {
        url: "http://reason.com/blog/2010/10/22/new-study-highlights-dramatic",
        selector: "html.wf-ffmetawebpro1ffmetawebpro2-n4-active.wf-ffmetawebpro1ffmetawebpro2-i4-active.wf-ffmetawebpro1ffmetawebpro2-n7-active.wf-ffmetawebpro1ffmetawebpro2-i7-active.wf-active >body.inner.hitandrun >div.headershadow >div.logooverlay >div.container >div.container-inner >div.col2-subcolumn >div.col2 >div.post.inner >div.entry"
    }, {
        url: "http://consumerist.com/2010/10/reader-sues-delta-over-bungled-baggage----and-wins.html",
        selector: "html#sixapart-standard >body.mt-entry-archive.layout-wtt >div#wrapper >div.container >div#content-container >div#content >div#entry-10012326.entry-container >div.e-body"
    }, {
        url: "http://xkcd.com/809/",
        selector: "html >body >div#container >div#contentContainer >div#middleContent.dialog >div.bd >div.c >div.s"
    }, {
        url: "http://politicalwire.com/archives/2010/10/24/corruption_scandal_rocks_albany.html",
        selector: "html >body >div#page >div#columns >div.col1"
    }, {
        url: "http://www.dailykos.com/storyonly/2010/10/24/911981/-Midday-open-thread",
        selector: "html >body.ads >div#container >div#main >div#story"
    }, {
        url: "http://www.whitehouse.gov/blog/2010/10/23/weekly-address-letting-wall-street-run-wild-again",
        selector: "html.js >body#www-whitehouse-gov.not-front.not-logged-in.page-node.node-type-blog-post.no-sidebars.full >div#page.clearfix >div#page-inner.center-on-page.clearfix >div.center-on-page >div#blog.extend-page.body-text.clearfix.clear.node-content >div#content"
    }, {
        url: "http://www.marginalrevolution.com/marginalrevolution/2010/10/the-industrial-organization-of-the-miami-heat.html",
        selector: "html >body >div#container >div#pagebody >div#pagebody-inner >div#center >div.content"
    }, {
        url: "http://www.neatorama.com/2010/10/24/nikon-small-world-awards/",
        selector: "html >body >div#Main >div#MainContent >div#post-37580.post"
    }, {
        url: "http://www.newsbusters.org/blogs/brent-baker/2010/10/24/hume-excoriates-npr%E2%80%99s-%E2%80%98howling-double-standard%E2%80%99-and-intolerance-%E2%80%98bill-c",
        selector: "html.js >body#genesis-2c.section-blogs.lightbox-processed >div#container.not-front.not-logged-in.node-type-blog.two-sidebars.page-node-42588 >div#columns >div.columns-inner.clear-block >div#content-column >div.content-inner >div#main-content.section.region >div#node-42588.node.node-promoted.node-sticky.node-blog >div#content-inner"
    }, {
        url: "http://www.ubergizmo.com/15/archives/2010/10/macbook-air-unboxing.html",
        selector: "html >body >div#wrap >div#content >div#main-content.content >div >div.post-body"
    }, {
        url: "http://www.macrumors.com/2010/10/22/apples-new-lincoln-park-retail-store-in-chicago-opens-tomorrow/",
        selector: "html >body >div#content >div.story >div.storybody"
    }, {
        url: "http://www.cato-at-liberty.org/liberal-dogma-on-social-security-redux/",
        selector: "html >body >div#wrapper >div#content >div#post-22709.post-22709.post.type-post.hentry.category-government-politics.category-health-care.tag-ronald-brownstein.tag-ronald-reagan.tag-social-security"
    }, {
        url: "http://windowsteamblog.com/windows/b/springboard/archive/2010/10/23/manually-performing-p2v-migration-for-software-assurance.aspx",
        selector: "html >body >form#aspnetForm >div#ctl00_content_ctl00_page.content-fragment-page.post >div.layout >div#ctl00_content_ctl00_layout.layout-content.header-top-content-left-sidebar-right >div#ctl00_content_ctl00_content.layout-region.content >div.layout-region-inner.content >div#fragment-3449.content-fragment.blog-post.no-wrapper-with-spacing"
    }, {
        url: "http://www.businessinsider.com/san-francisco-giants-to-meet-texas-rangers-in-2010-world-series-2010-10",
        selector: "html >body >div#doc4.yui-t6.vertical-sportspage >div#bd >div#yui-main >div.yui-b >div.content.post >div.sl-layout-post >div.content.post-content.margin-none"
    }, {
        url: "http://www.tvsquad.com/2010/10/24/tom-selleck-owns-an-avocado-farm-plus-8-other-celebs-whose-si/",
        selector: "html >body >div#tvsquad >div#tvsquad_content >div#tvsquad_left >div#p19683468 >div.article.article-detail >div.content"
    }, {
        url: "http://www.commentarymagazine.com/blogs/index.php/rubin/376996",
        selector: "html >body >center >div#page >div#header >div#globalcontainer >div#content_wp.narrowcolumn >div#post-376996.post"
    }, {
        url: "http://mediamatters.org/blog/201010230002",
        selector: "html >body >div#doc >div#bd >div#main-column >div#main-content >div.post-entry >div.post-full"
    }, {
        url: "http://arstechnica.com/media/news/2010/10/france-to-fight-piracy-prop-up-music-industry-with-new-subsidy.ars",
        selector: "html >body.individual >div#page >div#main >div#content.normal >div#content-inner >div#story"
    }, {
        url: "http://arstechnica.com/gaming/news/2010/10/girls-games-and-guinness-a-quest-for-a-million-achievement-points.ars",
        selector: "html >body.individual >div#page >div#main >div#content.normal >div#content-inner >div#story"
    }, {
        url: "http://www.dailyfinance.com/story/retirement/convert-now-to-roth-ira/19684334/",
        selector: "html >body#PAGE >div#mainContent >div#col1 >div#Article.artdf >div#articleBody.postBody"
    }, {
        url: "http://dvice.com/archives/2010/10/finally-a-real.php",
        selector: "html >body >div#rails >div#site_container >div#main_content >div#left_column >div#left_content >div.blog_long_post"
    }, {
        url: "http://www.walletpop.com/blog/2010/10/23/young-couples-dream-house-turns-into-a-meth-nightmare/",
        selector: "html >body.sandwich >div#container >div#container-inner >div#main.clearfix >div#col-1.clearfix >div#content >div#p19683665 >div.post.homepage >div#postbody.postbody"
    }, {
        url: "http://blog.us.playstation.com/2010/10/24/playstation-around-the-web-what-we-read-121/",
        selector: "html >body >div.page >div.content >div.left >div#post-38684.post.onepost >div.entry"
    }, {
        url: "http://ausiellofiles.ew.com/2010/10/24/big-bang-theory-keith-carradine/",
        selector: "html >body#ausiello >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-12030.post-12030.post.type-post.hentry.category-tv.category-news.category-scoop.category-the-big-bang-theory >div.postRight >div.storycontent"
    }, {
        url: "http://hollywoodinsider.ew.com/2010/10/22/the-whole-truth-one-more-week-to-prove-itself/",
        selector: "html >body#hollywoodinsider >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-13155.post-13155.post.type-post.hentry.category-ad-fall-tv.category-tv.category-television >div.postRight >div.storycontent"
    }, {
        url: "http://www.techdirt.com/articles/20101022/04042611537/fallacy-debunking-successful-new-business-model-examples-are-the-exception.shtml",
        selector: "html >body >div#blog >div#maincolumn_wrap >div#maincolumn >div.storyblock >div.story"
    }, {
        url: "http://www.rap-up.com/2010/10/23/justin-bieber-enters-the-sales-race/",
        selector: "html >body#2010 >table#box >tbody >tr >td >div#left >div#post-62250.roundrect >div.entrytext"
    }, {
        url: "http://blogs.reuters.com/barbarakiviat/2010/10/22/the-real-revolution-in-microfinance/",
        selector: "html >body >div#content.post.postsingle >div.section.gridlined8 >div.sectionContent >div.sectionColumns >div.column1.gridPanel.grid8 >div#post-119.module >div.moduleBody >div >div#single.columnRight.grid8 >div#postcontent"
    }, {
        url: "http://phandroid.com/2010/10/24/gizmodo-snags-mystery-lg-device/",
        selector: "html >body >div#temp_Background >div#temp_Wrapper >div#temp_Content >div#temp_Content_Left >div.inner >div#post-30753.post >div.content"
    }, {
        url: "http://www.towleroad.com/2010/10/republican-sean-bielat-defends-dadt-men-under-the-height-of-5-feet-2-inches-cant-serve-i-dont-see-an.html",
        selector: "html >body >div#container >div#pagebody >div#pagebody-inner >div#center >div.content"
    }, {
        url: "http://www.eurogamer.net/articles/2010-10-24-retrospective-deer-hunter-article",
        selector: "html >body#theTop >div#browserMaster >div#pageMaster >div#main >div#content >div.content >div.copy >div"
    }, {
        url: "http://www.talkingpointsmemo.com/archives/2010/10/could_be_interesting.php",
        selector: "html >body >div.container_12.mainblog >div.grid_8.post_body.dc_postbody"
    }, {
        url: "http://www.riehlworldview.com/carnivorous_conservative/2010/10/bill-hudak-gets-it-on-terrorism-he-gets-it-on-the-peace-process-he-gets-it-on-iran.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451c1db69e20133f54fa9db970b.entry-category-politics.entry-category-tea_party.entry-author-sissy_willis.entry-type-post.entry"
    }, {
        url: "http://www.autoblog.com/2010/10/24/video-james-may-pits-american-rv-vs-british-camper-van/",
        selector: "html >body.make >div#container >div#content >div#col-1 >div#main >div#p19684457 >div.post >div.postbody"
    }, {
        url: "http://latimesblogs.latimes.com/entertainmentnewsbuzz/2010/10/box-office-paranormal-activity-2-is-no1-hereafter-trails.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0134886ee329970c.entry >div.entry-content"
    }, {
        url: "http://latimesblogs.latimes.com/music_blog/2010/10/merle-haggard-bridge-school-illness.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0134886ee22d970c.entry >div.entry-content"
    }, {
        url: "http://latimesblogs.latimes.com/showtracker/2010/10/saturdays-tv-highlights-growing-the-big-one-on-hallmark.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0133f5462aed970b.entry >div.entry-content"
    }, {
        url: "http://www.yankodesign.com/2010/10/22/convex-soap-into-concave-soap-makes-everlasting-soap/",
        selector: "html >body >div#page >div#wrapper >div#contentcol >div#contentbody >div#post-36517.post >div.postcontent >div.postexcerpt"
    }, {
        url: "http://www.wired.com/threatlevel/2010/10/xbox-modder-tria/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-19992.post >div.entry"
    }, {
        url: "http://www.wired.com/dangerroom/2010/10/wikileaks-show-wmd-hunt-continued-in-iraq-with-surprising-results/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-33820.post >div.entry"
    }, {
        url: "http://www.wired.com/wiredscience/2010/10/nasa-mars-rover-webcam/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-39884.post >div.entry"
    }, {
        url: "http://economix.blogs.nytimes.com/2010/10/22/what-were-reading-rainfall-and-democracy/",
        selector: "html >body.blogPost >div#shell >div#page >div#economix.blog.wrap >div#aCol >div#content.hfeed >div#entry-86231.entry.hentry"
    }, {
        url: "http://mediamatters.org/research/201010240008",
        selector: "html >body >div#doc >div#bd >div#main-column >div#main-content >div.post-entry >div.post-full"
    }, {
        url: "http://nymag.com/daily/fashion/2010/10/yet_another_reason_why_more_pl.html",
        selector: "html.can-has-js >body#nymag.daily.fashion.daily.ad-column-300.individual-entry-archive >div#wrap-wrap >div#wrap >div#content >div#content-layout >div#blog.fashion.individual-entry-archive >div#content-primary-wrap >div#content-primary >div#entry-105277.entry.right-aligned-image.feature-the-curvy-campaign >div.entry-content >div.entry-body"
    }, {
        url: "http://www.neowin.net/news/google-pays-only-24-in-taxes-through-loopholes",
        selector: "html >body >div#container >div#wrapper >div#page-body.sidebar >div#content-container >div#content >div#article.box >article >div.KonaBody"
    }, {
        url: "http://blogs.wsj.com/economics/2010/10/23/number-of-the-week-big-boost-from-dollar-decline/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.economics.subType-unsubscribed >div.reallywide >div.mastertextCenter >div.padding-left-big >div.col6wide.colOverflowTruncated >div.article.story >div.articlePage"
    }, {
        url: "http://blogs.wsj.com/law/2010/10/22/king-of-torts-hires-king-of-pain-to-play-holiday-party/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.law.subType-unsubscribed >div.reallywide >div.mastertextCenter >div.padding-left-big >div.col6wide.colOverflowTruncated >div.article.story >div.articlePage"
    }, {
        url: "http://www.ritholtz.com/blog/2010/10/the-subprime-debacle-act-2-part-2/",
        selector: "html >body >div.container >div.content_container >div#main_content >div.content >div#post-59917.post >div.entry"
    }, {
        url: "http://www.urlesque.com/2010/10/23/target-commercial-hates-on-homemade-halloween-costumes-internet/",
        selector: "html >body >div#mainContainer >div#content >div#center >div#p19685963 >div.article >div.articleBody >div#cl_header >div#clheader_text"
    }, {
        url: "http://www.physorg.com/news/2010-10-vancomycin-drug-choice-cellulitis.html",
        selector: "html >body >div#mainwrapper.categ-health >div#content >div.column-1.news >div.box-1 >div.post >div.KonaBody"
    }, {
        url: "http://www.queerty.com/why-keeping-your-sexuality-private-on-facebook-is-a-farce-or-how-to-find-out-if-anybody-is-gay-20101023/",
        selector: "html >body >div#pageframe >div#pageframe2 >div#singlePageContentWrap >div#singlePageContentWrap_Blog >div#post-117908.item >div.copy >div#content_div-117908"
    }, {
        url: "http://www.jihadwatch.org/2010/10/israeli-fm-catholic-bishops-synod-has-become-a-forum-for-political-attacks-on-israel-in-the-best-his.html",
        selector: "html#sixapart-standard >body#mt-blog.mt-entry-archive.layout-twt >div#container >div#container1-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-31789.entry-asset.asset.hentry"
    }, {
        url: "http://www.geeky-gadgets.com/new-power-gig-guitar-controller-rocks-you-like-a-hurricane-24-10-2010/",
        selector: "html.chrome.win >body >div.art-Sheet >div.art-Sheet-body >div.art-contentLayout >div.art-content >div.art-Post >div.art-Post-body >div.art-Post-inner.art-article >div.art-PostContent"
    }, {
        url: "http://factcheck.org/2010/10/tall-tax-tales/",
        selector: "html >body >div#main >div#wrap >div#content >div#contentleft >div.postarea"
    }, {
        url: "http://inhabitat.com/2010/10/24/only-2-days-left-to-enter-the-recycled-denim-challenge/",
        selector: "html >body.single.postid-177294 >div#wrapper >div#content >div#column1-column2-wrapper >div#column1 >div.post-listing >div.post-content"
    }, {
        url: "http://scienceblogs.com/pharyngula/2010/10/sunday_sacrilege_cant_cant.php",
        selector: "html >body#blog >div#sbMainContainer >div.blogContainer >div.mainCol >div.blogMain >div#entry-163863.entry"
    }, {
        url: "http://blog.heritage.org/2010/10/22/side-effects-obamacare-strengthens-compliance-based-medicine/",
        selector: "html >body.enhanced >div#wrapper-page >div#page.page-post >div#wrapper-content >div#content >div.section.post >div.content"
    }, {
        url: "http://searchengineland.com/go-for-bigger-mobile-budgets-for-the-holidays-now-53665",
        selector: "html >body >div#pageWrapper >div#pageContent >div#mainContentWrapper >div#leftCol >div#storyBox >div.article"
    }, {
        url: "http://www.dlisted.com/node/39365",
        selector: "html.js >body.story.full-story.full-node >div#body-wrapper >div#body-left >div#body-right >div#content-wrapper.clear-block >div#primary-content >div.node >div.content"
    }, {
        url: "http://www.allfacebook.com/likify-turns-qr-codes-into-likes-2010-10",
        selector: "html >body >div#container >div#main_content >div#leftbar >div.post"
    }, {
        url: "http://www.tmonews.com/2010/10/t-mobile-tv-coming-to-mytouch-slide-and-samsung-vibrant/",
        selector: "html >body >div#page >div#columns >div.col1 >div#post-15869.post-alt.blog >div.entry"
    }, {
        url: "http://www.comicsalliance.com/2010/10/24/thunderbolts-149-preview/",
        selector: "html >body >div#mainContainer >div#innerContainer >div#content >div#center >div#p19686837 >div#permalink.article >div.articleBody"
    }, {
        url: "http://www.outsidethebeltway.com/google_goggles_photo_recognition/",
        selector: "html >body.page.page-template.header-full-width.content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post >div.entry-content"
    }, {
        url: "http://torrentfreak.com/piracy-and-the-music-industry-the-voices-of-artists-matter-101024/",
        selector: "html >body >div#body_wrap >div#main >div#content >div#content_wrapper >div#post-28183.post >div.entry"
    }, {
        url: "http://swampland.blogs.time.com/2010/10/24/torture-chamber/",
        selector: "html >body >div.wrap >div#content >div.ltCol >div#post-34240.post-34240.post.type-post.hentry.category-uncategorized >div.artTxt"
    }, {
        url: "http://www.designspongeonline.com/2010/10/weekly-wrap-up-50.html",
        selector: "html >body >center >table[width=1145] >tbody >tr >td[width=535] >table[width=535] >tbody >tr >td[width=535] >div.content.single"
    }, {
        url: "http://sethgodin.typepad.com/seths_blog/2010/10/efficiency-is-free.html",
        selector: "html#sixapart-standard >body.layout-two-column-left >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d83451b31569e20133f543efd7970b.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://delong.typepad.com/sdj/2010/10/foreclosure-nation.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00e551f0800388340134887039a0970c.entry-category-economics.entry-category-economics_finance.entry-category-economics_macro.entry-category-obama_administration.entry-author-brad_delong.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://www.infowars.com/fabian-societys-london-school-of-economics-predicts-savage-austerity-in-america/",
        selector: "html >body >div#container >div.wContent >div#subMainContent >div.subarticle"
    }, {
        url: "http://whatever.scalzi.com/2010/10/24/turns-out-sunday-is-for-not-being-on-the-blog-too/",
        selector: "html >body >div#main >div#content >div#post-12973.post >div.entry"
    }, {
        url: "http://www.balloon-juice.com/2010/10/24/finally-3/",
        selector: "html >body >div#page >div#container >div#content.narrowcolumn >div#post-50860.post >div.entry"
    }, {
        url: "http://www.downloadsquad.com/2010/10/24/opera-11-portable-install/",
        selector: "html >body.sandwich >div#body-wrap >div#container >div#main.clearfix >div#col-1 >div#content >div#p19686911 >div.post >div.postbody"
    }, {
        url: "http://www.androidcentral.com/week-android-news-21",
        selector: "html.js >body#home.lightbox-processed >div#container2 >div.maincontent >div.entry >div.text"
    }, {
        url: "http://blog.craftzine.com/archive/2010/10/craft_flickr_pool_weekly_round_105.html",
        selector: "html#sixapart-standard.chrome.webkit.safari.win.js >body#blog.mt-archive-listing.mt-entry-archive.layout-wtt >div#wrapper >div#main >div#entry-81601.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://bighollywood.breitbart.com/mmandaville/2010/10/24/tips-for-writing-a-low-budget-screenplay/",
        selector: "html >body >div#container >div#wrapper >div#content >div.post >div.postcontent >div#lazyload_post_0"
    }, {
        url: "http://www.thelocal.se/29798/20101024/",
        selector: "html >body >div#col4wrapper >div#wrapper >div#col1col2wrapper >div#col1 >div.tyda >div#articletext"
    }, {
        url: "http://www.spinner.com/2010/10/23/russian-circles-malko-free-mp3-download/",
        selector: "html >body.spinner >div#container >div#wrapper >div#contentWrapper >div.navMainWrapper >div#mainContent >div#p19686179 >div.post >div.postBody"
    }, {
        url: "http://www.core77.com/blog/featured_items/video_interview_with_chris_bangle_former_bmw_chief_of_design_17699.asp",
        selector: "html.sIFR-active >body.withHeader >div#cover-container >div.content-container >div#permalink >div.post"
    }, {
        url: "http://bleacherreport.com/articles/500404-buffalo-bills-is-ryan-fitzpatrick-the-quarterback-of-the-future",
        selector: "html#bleacherreport-com.js.canvas.canvastext.geolocation.crosswindowmessaging.websqldatabase.no-indexeddb.hashchange.historymanagement.draganddrop.websockets.rgba.hsla.multiplebgs.backgroundsize.borderimage.borderradius.boxshadow.opacity.cssanimations.csscolumns.cssgradients.cssreflections.csstransforms.no-csstransforms3d.csstransitions.video.audio.localstorage.sessionstorage.webworkers.applicationcache.svg.smil.svgclippaths.fontface >body.webkit.windows >div#container >div#main.png-fix >div#content.article-page >div#article-gradient >div#article-body"
    }, {
        url: "http://stereogum.com/553892/kanye-west-runaway-video-2/mp3s/",
        selector: "html >body.single.postid-553892 >div#wrapper >div#page >div#content >div#content-container >div#post-553892.post-553892.post.hentry.category-featured-video.category-gum-mix.category-lead-story.category-mp3s.category-top-stories.category-video.tag-aphex-twin.tag-big-sean.tag-bon-iver.tag-hype-williams.tag-kanye-west.tag-lupe-fiasco.tag-mos-def.tag-nicki-minaj.tag-pusha-t >div.entry.line_top"
    }, {
        url: "http://www.gizmag.com/cochlear-implant-alleviates-vertigo/16710/",
        selector: "html >body >div.center >div#content.narrow_content >div.article_body"
    }, {
        url: "http://blogs.dailymail.com/donsurber/archives/23418",
        selector: "html >body.single.postid-23418 >div#wrapper >div.block111 >div#content.widecolumn >div#post-23418.post-23418.post.hentry.category-uncategorized >div.entry"
    }, {
        url: "http://www.geekosystem.com/geekolinks-1024/",
        selector: "html >body >div#contentwrapper >div#content >div#posts >div#meebo-shareable.post"
    }, {
        url: "http://www.intomobile.com/2010/10/24/symbian-foundation-doomed-to-shutting-down/",
        selector: "html >body.inner >div.container >div#wrapper >div#main >div#twocolumns >div#content >div.area >div.news >div.content"
    }, {
        url: "http://www.cinemablend.com/games/Redbana-Announces-100-New-Songs-And-Outfits-For-Audition-27740.html",
        selector: "html >body >div#site >center >table[width=1055] >tbody >tr >td#mainpanel >table[width=1055] >tbody >tr >td#mainpanel >table[width=1050] >tbody >tr >td[width=608] >div.Block >div.BlockContentGrad"
    }, {
        url: "http://www.fool.com/investing/value/2010/10/24/what-is-microsoft-anyway.aspx",
        selector: "html#jsenabled >body#ctl01_ctl00_ctl00_ctl00_ctl00_ctl00_cphContent_Body.hlp.Default.collectionInvesting >div#mid >div.grid >form#aspnetForm >div#layout.bigBox.round.clearfix >div#primary.column.collection557 >div#content.hentry.cms >div.entry-content"
    }, {
        url: "http://laist.com/2010/10/24/boutique_week_begins_today_in_la.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.laist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436428.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://www.memeorandum.com/",
        selector: "html >body >div.pagecont >div.bcp >div.mainpad >div.padl >div.nornbody"
    }, {
        url: "http://www.precentral.net/vote-mock-next-palm-device-contest-needs-you-pick-winner",
        selector: "html.js >body.lightbox-processed >div.main_content >div.maincolumn >div.entry >div.entrytext"
    }, {
        url: "http://www.thesuperficial.com/that-russian-spy-chick-is-in-maxim-10-2010",
        selector: "html >body.single.postid-528732 >div#wrapper >div#page >div#content.widecolumn >div#post-528732.post-528732.post.hentry.category-dirt.category-photos.category-so-freaking-hot.tag-anna-chapman.tag-lingerie >div.entry"
    }, {
        url: "http://www.refinery29.com/lust-list-star-print-fashion.php",
        selector: "html >body#mt-community-blog.mt-entry-archive.everywhere.layout-wm >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-12218.entry-asset.detail-post.slideshow-album >div.asset-content.entry-content.entry-detail-content"
    }, {
        url: "http://www.highsnobiety.com/news/2010/10/25/huf-holiday-2010-sneakers/",
        selector: "html >body >div#container >div#content >div#page >table[width=984] >tbody >tr >td[width=655] >div.blog_entries >div.box_blog_entry >table[width=655] >tbody >tr >td >div#post-146161.post"
    }, {
        url: "http://www.tor.com/blogs/2010/10/hugo-nominees-introduction",
        selector: "html >body >div.tor_center_col >div.tor_blogtext"
    }, {
        url: "http://marquee.blogs.cnn.com/2010/10/23/cbs-goes-five-for-five-with-rookie-show-renewals/",
        selector: "html >body#cnn-blog-main >div#cnn-bodywrap >div#cnnContainer >div.cnn_maincntnr >div.cnn_contentarea >div#cnnContentContainer >table.cnn_master_table >tbody >tr >td[width=643] >div#cnnBlogContentArea.cnn_blog_content_area >div.cnnPostWrap >div.cnnRightPost >div.cnnBlogContentPost"
    }, {
        url: "http://tvbythenumbers.com/2010/10/23/will-netflix-win-the-streaming-wars/69376",
        selector: "html >body.single.single-post.postid-69376.layout-2c-r-fixed.js.style-blue >div#wrapper >div#main.clearfix >div#container.clearfix >div#content.section >div#post-69376.post-69376.post.type-post.hentry.category-1.category-new-technology.clearfix.single-post >div.entry-content.clearfix"
    }, {
        url: "http://www.mobilecrunch.com/2010/10/22/sprint-updates-the-samsung-moment-fixing-the-bug-that-prevents-it-from-calling-911/",
        selector: "html >body#mobilecrunch >div#container >div#columns >div#col1 >div#post-39603.post.single_post >div.entry"
    }, {
        url: "http://ftalphaville.ft.com/blog/2010/10/24/380961/ftfm-on-av-23/",
        selector: "html >body.wide >div#body-content >div#body-wrapper >div#content.narrowcolumn >div#post-380961.fullpost.post-380961.post.hentry.category-uncategorised >div.entry"
    }, {
        url: "http://digitaldaily.allthingsd.com/20101023/apple-reaching-for-the-cloud-with-macbook-air-and-n-c-data-center/",
        selector: "html >body.red01.blog-post.apple-reaching-for-the-cloud-with-macbook-air-and-n-c-data-center.digitaldaily >div#container >div#content >div#content-main >div#content-left.posts >div#post-51143.post >div.entry"
    }, {
        url: "http://failblog.org/2010/10/24/epic-fail-photos-biebians-fail/",
        selector: "html >body >div#mainbody >div#pane2 >div#post-75306.post >div.entry >div#md >p.mine_asset.assetid_4080426752.sourceid_4080424960 >img"
    }, {
        url: "http://www.mlbtraderumors.com/2010/10/odds-ends-jeter-mets-werth-as.html",
        selector: "html#sixapart-standard >body >center >div#ctr >table >tbody >tr >td >div.content-body >div#left >ul"
    }, {
        url: "http://www.moonbattery.com/archives/2010/10/is-there-someth.html",
        selector: "html >body >table >tbody >tr >td[width=60%]"
    }, {
        url: "http://abovethelaw.com/2010/10/this-week-in-biglaw-10-24-10/",
        selector: "html >body.single.postid-41976 >div#wrap.widecolumn >div#content.clearfix.site-width >div#main.clearfix >div#mainContent >div#entry-41976.post-41976.post.hentry.category-biglaw.category-law-shucks.tag-biglaw.tag-law-shucks >div.entry"
    }, {
        url: "http://www.showbizspy.com/article/216287/matt-damons-wife-gives-birth-to-daughter.html",
        selector: "html.cufon-active.cufon-ready >body >div#page >div.content >div.leftcont >div#post-216287.post-216287.post.hentry.category-celebrity-news.tag-matt-damon >div.entry.issingle"
    }, {
        url: "http://www.nydailynews.com/blogs/dailypolitics/2010/10/andrew-cuomo-hits-carl-paladin.html",
        selector: "html >body >div#wrapper >div#content_shell.clearfix >div#alpha >div#gamma >div#entry-71910.blog_entry >div.blog_entry_inner >div.asset-content.entry-content"
    }, {
        url: "http://screenrant.com/weekend-movie-news-box-office-paranormal-activity-hereafter-niall-84287/",
        selector: "html >body >div#wrap >div#container >div#content >div#post >div#post-84287.post-meta >div.post-content"
    }, {
        url: "http://www.metafilter.com/96960/Sexless-Striving-and-Ten-Billion-Strong",
        selector: "html >body#body >div#page"
    }, {
        url: "http://conversations.nokia.com/2010/10/22/fridays-pick-and-mix-21/",
        selector: "html >body >div#w_main >div#w_body >div#w_left >div.article_entry >div.article_body"
    }, {
        url: "http://www.swiss-miss.com/2010/10/designmatters-podcast.html",
        selector: "html >body.single.single-post.postid-25231 >div#page >div#content.single >div#post-25231.post-25231.post.type-post.hentry.category-conferences.category-listen.category-personal.clrfix >div.entry-content"
    }, {
        url: "http://blog.zap2it.com/frominsidethebox/2010/10/torchwood-five-casting-options-from-the-cw-wb-ranks.html",
        selector: "html >body#blogpage.inside >div#mainbox >div#contentbox >div#leftrail >div#blogcontent.rail >div.rail-inner >div#blogbody.itemCopy >div#postlevel.storyCopy"
    }, {
        url: "http://icanhascheezburger.com/2010/10/24/funny-pictures-find-our-attack/",
        selector: "html >body >div#mainbody >div#pane2 >div#post-291478.post >div.entry >div#md"
    }, {
        url: "http://www.lemondrop.com/2010/10/22/the-10-types-of-pasta-you-should-know-how-to-pronounce/",
        selector: "html >body >div#lemondrop >div#lemondrop_inner >div#content >div#center >div#p19683003 >div#permalink.article.lastArticle >div#permalinkBody.articleBody"
    }, {
        url: "http://hypebeast.com/2010/10/factotum-x-citizen-watch/",
        selector: "html.webkit.chrome.win.js >body.single >div#wrapper >div#content >div#post-232256.post >div.entry-content"
    }, {
        url: "http://www.apartmenttherapy.com/la/hot-posts/apartment-therapy-house-tours-week-of-october-18-october-22-2010-130513",
        selector: "html >body.at.la.postpage >div.Page >div.ContentContainer >div.PrimaryContainer >div.Primary >div.entry.first >div.content"
    }, {
        url: "http://eater.com/archives/2010/10/24/snls-stefon-recommends-more-hot-nyc-nightclubs.php",
        selector: "html >body >div#wrapper >div#columns-wrapper >div#columns.container >div#column-main.column >div.column-content >div.context-individual >div#post-269847.post.post-boxed.post-plain >div.post-body"
    }, {
        url: "http://flavorwire.com/125670/7-novel-writing-tools-for-nanowrimo",
        selector: "html >body >div#content-container >div#body-container >div.detail-post.inner-page >dl.post >dd.body"
    }, {
        url: "http://www.droid-life.com/2010/10/23/video-sony-internet-blu-ray-player-google-tv-unboxing-and-hands-on/",
        selector: "html >body >div#page >div#columns >div#centercol >div#post-17957.box.post >div.content >div.post-content"
    }, {
        url: "http://music-mix.ew.com/2010/10/22/grammy-kanye-west-lanois/",
        selector: "html >body#musicmix >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-22807.post-22807.post.type-post.hentry.category-music-channels.category-grammys.category-kanye-west.category-lets-argue.category-news >div.postRight >div.storycontent"
    }, {
        url: "http://androidcommunity.com/t-mobile-tv-headed-for-mytouch-slide-and-samsung-vibrant-20101024/",
        selector: "html >body >div#page-outer >div#page >div#columns >div.col1 >div.post-outer >div#post-17189.post-alt >div.entry"
    }, {
        url: "http://www.styleite.com/media/charles-manson-jean-jacket/",
        selector: "html >body >div#content >div#maincolumn"
    }, {
        url: "http://www.celebitchy.com/123082/russell_brand_katy_perry_got_married_in_india_today/",
        selector: "html >body >div >div#bottom >div#bottomwidthposts >div#postcontainer >div#post-123082.post >div#postcontent"
    }, {
        url: "http://www.xconomy.com/seattle/2010/10/22/dendreon-ceo-at-wbba-meeting-state-should-reject-income-tax-inspire-young-scientists/",
        selector: "html >body >center >div.xconomy >div.page >div.stories.seattle >div#single.entry"
    }, {
        url: "http://www.psfk.com/2010/10/upcoming-psfk-speaking-enagagement.html",
        selector: "html >body#single >div#wrapper >div#primary.clearfix >div#primary-content >div.article >div.article-content"
    }, {
        url: "http://www.toplessrobot.com/2010/10/tr_contest_product_placement_for_nerds.php",
        selector: "html >body >div#wrapper >div#wrapper4 >div#wrapper5 >div#content >div.entry >div.Entry_Body"
    }, {
        url: "http://www.celebdirtylaundry.com/2010/10/23/celine-dion-gives-birth-to-two-twin-boys/",
        selector: "html >body >div#layout >div#grid >div#main >div.posts >div.entry"
    }, {
        url: "http://green.autoblog.com/2010/10/24/report-epa-poised-to-outline-medium-and-heavy-duty-truck-emiss/",
        selector: "html >body >div#container >div#content >div#col-1 >div#main >div#p19686044 >div.post >div.postbody"
    }, {
        url: "http://twitchfilm.net/reviews/2010/10/crucible-of-terror-review.php",
        selector: "html >body.entry >div.container >div >div.span-17 >div#entry-27630.entry-asset.asset.hentry"
    }, {
        url: "http://prospect.org/cs/articles",
        selector: "html >body >div >table.printwidth >tbody >tr >td.printwidth >div.pad_10 >table.printwidth >tbody >tr >td.printwidth >div.bcms-searchable"
    }, {
        url: "http://www.wired.com/geekdad/2010/10/5-indispensable-halloween-specials-geekdad-re-animator/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-45557.post >div.entry"
    }, {
        url: "http://blogs.suntimes.com/sweet/2010/10/president_obama_official_sched_450.html",
        selector: "html#sixapart-standard >body.mt-archive-listing.mt-entry-archive.layout-wtt >center >table[width=962] >tbody >tr >td[width=960] >table.STNG_container_border >tbody >tr >td.STNG_container >table[width=100%] >tbody >tr >td#box.contentarea >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-40055.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://perezhilton.com/2010-10-24-jersey-shore-vinny-guadagnino-wants-to-be-an-actor",
        selector: "html >body#the_body >div#forbg >div#page >div#content >table[width=880] >tbody >tr >td[width=470] >div#post-126249.post >div.entry"
    }, {
        url: "http://latimesblogs.latimes.com/greenspace/2010/10/last-of-missing-mt-whitney-hikers-found-.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef013488662b76970c.entry >div.entry-content"
    }, {
        url: "http://latimesblogs.latimes.com/technology/2010/10/google-privacy-street-view.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0133f545774d970b.entry >div.entry-content"
    }, {
        url: "http://latimesblogs.latimes.com/culturemonster/2010/10/a-widening-gap-on-density-transit.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef01348865d2fc970c.entry >div.entry-content"
    }, {
        url: "http://www.unwiredview.com/2010/10/23/android-gingerbreads-launch-date-gets-really-close-as-giant-gingerbread-man-arrives-at-googleplex/",
        selector: "html >body >div#wrapper >div#content"
    }, {
        url: "http://www.seriouseats.com/recipes/2010/10/grilling-mustard-and-herb-crusted-rack-of-lamb-recipe.html",
        selector: "html >body#recipes >div#container >div#content >div#threeColumn1 >div.individualPost"
    }, {
        url: "http://nahright.com/news/2010/10/24/video-mtvs-2010-hottest-mcs-list-top-5/",
        selector: "html >body >center >div#page >div#content.narrowcolumn >div.post >div.entrytext"
    }, {
        url: "http://blog.makezine.com/archive/2010/10/full-suspension_bicycle.html",
        selector: "html#sixapart-standard.chrome.webkit.safari.win.js >body#blog.mt-archive-listing.mt-entry-archive.layout-tw >div#page >div#main >div#entry-81517.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://atlasshrugs2000.typepad.com/atlas_shrugs/2010/10/saturday-night-cinema-pride-and-prejudice-1940.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d8341c60bf53ef0133f54b6ee6970b.entry-category-saturday_night_cinema.entry-author-pamela_geller.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://blog.al.com/live/2010/10/james_anderson_luther_strange.html",
        selector: "html.win.chrome.chrome7.webkit.webkit5 >body >div#MasterContainer >div#PageContent >div#MainColumn >div#ContentWellFull >div.full_entry.entry_text >div#article"
    }, {
        url: "http://www.complex.com/blogs/2010/10/22/weekly-recap-we-visited-the-50-scariest-haunted-houses-in-america/",
        selector: "html >body >div#pageWidth >div#columns.channels >div#post-height >div.middle.ch_news >div.entry"
    }, {
        url: "http://wmpoweruser.com/windows-phone-7-usershow-to-access-marketplace-from-countries-without-support/",
        selector: "html.chrome.win >body >div#art-main >div.art-Sheet >div.art-Sheet-body >div.art-contentLayout >div.art-content >div.art-Post >div.art-Post-body >div.art-Post-inner.art-article >div.art-PostContent"
    }, {
        url: "http://www.ohgizmo.com/2010/10/23/deal-of-the-day-100-off-on-the-nokia-n8/",
        selector: "html >body >table[width=927] >tbody >tr >td[width=900] >table[width=900] >tbody >tr >td[width=540] >table[width=540] >tbody >tr >td[width=540] >div#post-43161.post >div.entry"
    }, {
        url: "http://www.project-syndicate.org/commentary/hopper1/English",
        selector: "html.js.canvas.canvastext.geolocation.crosswindowmessaging.websqldatabase.no-indexeddb.hashchange.historymanagement.draganddrop.websockets.rgba.hsla.multiplebgs.backgroundsize.borderimage.borderradius.boxshadow.opacity.cssanimations.csscolumns.cssgradients.cssreflections.csstransforms.no-csstransforms3d.csstransitions.video.audio.localstorage.sessionstorage.webworkers.applicationcache.svg.smil.svgclippaths.fontface >body#commentary_text >div#page >div#maincol >div#page_content >div.articleDva >div#column.text_content"
    }, {
        url: "http://www.latinoreview.com/news/marvel-s-runaways-is-postponed-indefinitely-11500",
        selector: "html >body >div#wrapper >div#lower-container >div#column-center >table[width=98%] >tbody >tr >td >table[width=100%] >tbody >tr >td >table[width=100%] >tbody >tr"
    }, {
        url: "http://www.truthdig.com/eartotheground/item/google_under_privacy_again_20101024/",
        selector: "html >body.font_family_wide_sans_serif.font_size_20.text_line_height_1_75.text_align_normal.layout_width_60_percent.layout_align_center.layout_inner_margin_2_5.layout_outer_margin_0.color_light_grey_off_black >div >table[width=974] >tbody >tr >td[width=614] >div.general_body_flat >div.eartotheground >div.section1"
    }, {
        url: "http://crackberry.com/bezombied-get-free-version-your-blackberry",
        selector: "html.js >body >div#wrapper2 >div#wrapper >div#container >div#content-side >table.blog-wrapper >tbody >tr >td >div"
    }, {
        url: "http://www.webpronews.com/topnews/2010/10/23/study-finds-people-more-likely-to-lie-on-twitter",
        selector: "html.js >body.sidebar-right >div.container >div#slice1.hslice >div.entry-content >div.mainbodytop >div.articlecontent >div.clear-block >div#node-56275.node >p"
    }, {
        url: "http://www.celebrity-gossip.net/jennifer-love-hewitt/jennifer-love-hewitt-and-alex-beh-half-marathon-mates-428609",
        selector: "html >body.not-front.not-logged-in.node-type-story.two-sidebars.page-jennifer-love-hewitt-jennifer-love-hewitt-and-alex-beh-half-marathon-mates-428609.section-jennifer-love-hewitt >div#page >div#page-inner >div#main >div#main-inner.clear-block.with-navbar >div#main-bottom >div#content >div#content-inner >div#content-area >div#node-428609.node.node-type-story >div.node-inner >div.content"
    }, {
        url: "http://www.makeuseof.com/dir/online-dice-roller-roll-virtual-dice/",
        selector: "html >body#fix_aweber >div.wrapper >div#header.clearfix >div.wrapper.clearfix >div#ext_content.clearfix >div#left-col >div#content >div#24600.single >div.KonaBody"
    }, {
        url: "http://www.makeuseof.com/tag/touchgraph-visual-search-similar-results/",
        selector: "html >body#fix_aweber >div.wrapper >div#header.clearfix >div.wrapper.clearfix >div#ext_content.clearfix >div#left-col >div#content >div#56313.single"
    }, {
        url: "http://www.coolhunting.com/tech/link-about-it-t-36.php",
        selector: "html >body.entry >div.container >div#content.container >div#main-column.span-16 >div.article >div#12440.body"
    }, {
        url: "http://www.theagitator.com/2010/10/23/saturday-links-30/",
        selector: "html >body >div#page >div#content.widecolumn >div#post-17942.post >div.entry >ul"
    }, {
        url: "http://www.samsunghub.com/2010/10/22/galaxy-beam-were-sent-to-trapped-chilean-miners/",
        selector: "html >body >div#body-container >div#extra-container >div#container >div#content.single.left >div.post >div.entry"
    }, {
        url: "http://freakonomics.blogs.nytimes.com/2010/10/22/game-strategy-in-biblical-times/",
        selector: "html.wf-nytcheltenhamhinted1nytcheltenhamhinted2-n7-active.wf-nytcheltenhamhinted1nytcheltenhamhinted2-n5-active.wf-active >body.blogPost >div#shell >div#page >div#freakonomics.blog.wrap >div#aCol >div#content.hfeed >div#entry-45495.entry.hentry.auth-img >div.entry-content"
    }, {
        url: "http://thelede.blogs.nytimes.com/2010/10/23/palestinians-sentenced-for-civil-disobedience/",
        selector: "html >body.blogPost >div#shell >div#page >div#thelede.blog.wrap >div#aCol >div#content.hfeed >div#entry-84367.entry.hentry >div.entry-content"
    }, {
        url: "http://dotearth.blogs.nytimes.com/2010/10/22/envisioning-a-sustainable-america/",
        selector: "html.wf-nytcheltenhamhinted1nytcheltenhamhinted2-n7-active.wf-nytcheltenhamhinted1nytcheltenhamhinted2-n5-active.wf-active >body.blogPost >div#shell >div#page >div#dotearth.blog.wrap >div#aCol >div#content.hfeed >div#entry-26089.entry.hentry >div.entry-content"
    }, {
        url: "http://newsone.com/entertainment/newsonestaff4/kanye-west-fans-call-runaway-film-hands-down-amazing/",
        selector: "html >body#header-default.wordpress.y2010.m10.d25.h05.unknown.single.postid-822995.s-category-entertainment.s-tag-kanye-west.s-author-newsonestaff4.loggedout >div#inner-body >div#inner-wrap >div#page-wrap >div#content-wrap >div#content >div#single-default.container.clearfix.default >div#left-col >div.single-post.clearfix >div.post-content"
    }, {
        url: "http://www.slamonline.com/online/nba/2010/10/magic-10-11-preview/",
        selector: "html >body#article >div#wrapper >span.site >div#content >div#leftColumn >div.article"
    }, {
        url: "http://www.escapistmagazine.com/news/view/104665-Gearbox-Industry-Bullies-Should-Move-the-F-ck-Aside",
        selector: "html#html_element >body.standard >div#container >div#site_body >div#main_column >div#content.text >div.news_post.article_display >div.news_post_content >div.article"
    }, {
        url: "http://economistsview.typepad.com/economistsview/2010/10/one-more-time-with-gusto-tax-cuts-do-not-pay-for-themselves.html",
        selector: "html#sixapart-standard >body >div#container >div#container-inner >div#pagebody >div#pagebody-inner >div#center >div.content >div#entry-6a00d83451b33869e20133f54fbaa7970b.entry >div.entry-content"
    }, {
        url: "http://www.dezeen.com/2010/10/24/barker-residence-by-davidclovers/",
        selector: "html >body.single.postid-100678 >div#page >div#content.widecolumn >div#post-100678.post >div.entry"
    }, {
        url: "http://www.ourfuture.org/blog-entry/2010104224/another-reason-right-hate-science",
        selector: "html.js >body.not-front.not-logged-in.ntype-blog.node-single.sidebar-right.no-secondary.no-secondary-adjtop >div#page >div#container.clear-block >div#main.column >div#squeeze >div#squeeze_inner >div#squeeze_inner_content >div#node-50002.node.ntype-blog >div"
    }, {
        url: "http://my.firedoglake.com/jimwhite/2010/10/23/it-gets-better-in-gainesville-pride-parade-2010-smashing-success-for-lgbt-support/",
        selector: "html >body.single.single-post.postid-77913 >div#container >div#left_column >div.content >div.padder >div.olderPosts >div.postContent"
    }, {
        url: "http://emptywheel.firedoglake.com/2010/10/24/america-is-a-beautiful-place-unaccountable-elite-edition/",
        selector: "html >body >div.bodyWrapper >div.mainContent >div.leftColWrapper >div.olderPosts >div.postContent"
    }, {
        url: "http://www.rightwingwatch.org/content/jackson-christians-deserve-tax-cuts-and-applause",
        selector: "html.js >body.not-front.not-logged-in.page-node.node-type-blog.two-sidebars.page-content-jackson-christians-deserve-tax-cuts-and-applause.section-content >div#page-inner >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#content-area >div#node-6164.node.node-type-blog >div.node-inner >div.content"
    }, {
        url: "http://hollywood-elsewhere.com/2010/10/that_hathaway_r.php",
        selector: "html >body >div#Container >div#Center >div#Main >div#Content >div.whitebox >div.padding"
    }, {
        url: "http://themoderatevoice.com/89697/tea-party-candidate-picks-a-fight-over-pledge-of-allegiance/",
        selector: "html >body >div#wrapper2 >div#container >div#left-div >div.post-wrapper >div"
    }, {
        url: "http://www.ilounge.com/index.php/reviews/entry/ihome-ia100-bluetooth-audio-system-for-ipod-iphone-ipad/",
        selector: "html >body#reviews >div#container >div#main.clearfix >div#content >div.copy >div.story.clearfix"
    }, {
        url: "http://www.geeksaresexy.net/2010/10/25/monday-morning-links-serving-the-october-25th-edition/",
        selector: "html >body >div.wrap >div#main >div#content >div.apost"
    }, {
        url: "http://pragcap.com/subprime-debacle-2-part-2",
        selector: "html >body >div#page.clearfloat >div#content >div#post-27520.post >div.entry.clearfloat"
    }, {
        url: "http://www.unplggd.com/unplggd/hot-posts/secrets-of-facebook-and-why-bluray-doesnt-matter-unplggd-hot-posts-for-10242010-130521",
        selector: "html >body.unplggd.unplggd.postpage >div.Page >div.ContentContainer >div.PrimaryContainer >div.Primary >div.entry.first"
    }, {
        url: "http://newteevee.com/2010/10/24/5-questions-with-ciscos-daniel-scheinman/",
        selector: "html.wf-active >body.wordpress.y2010.m10.d25.h03.unknown.wpdotcom.single.postid-58538.s-y2010.s-m10.s-d23.s-h17.s-category-nyt.s-category-syn.s-category-biz.s-category-cnn-media.s-tag-cisco.s-tag-fivequestions.s-tag-dan-scheinman.s-author-lizlet.go-channel-video.clearfix.loaded >div#inner-body-new-tv.inner-body.clearfix >div#inner-body-1-new-tv.inner-body-1.clearfix >div#inner-body-2-new-tv.inner-body-2.clearfix >div#grid-wrap-new-tv.grid-wrap.clearfix >div#init-grid-new-tv.init-grid.container_12.clearfix >div#content.grid_12.content.p.post.publish.author-liz-shannon-miller.category-nyt.category-syn.category-biz.category-cnn-media.tag-cisco.tag-fivequestions.tag-dan-scheinman.y2010.m10.d23.h17.alt.clearfix >div#single-page.grid_8.alpha.single >div#post-content-58538.post.content-default.p1.post.publish.author-liz-shannon-miller.category-nyt.category-syn.category-biz.category-cnn-media.tag-cisco.tag-fivequestions.tag-dan-scheinman.y2010.m10.d23.h17.clearfix >div.post-content.clearfix >div.the-content.clearfix"
    }, {
        url: "http://www.redmondpie.com/greenpois0n-and-redsn0w-jailbreak-tools-to-go-open-source/",
        selector: "html >body >div#body2 >div.wrap >div.singlepost >div.postcontent"
    }, {
        url: "http://blogs.wsj.com/developments/2010/10/22/homeowners-win-fights-over-mistaken-foreclosures/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.developments.subType-unsubscribed >div.reallywide >div.mastertextCenter >div.padding-left-big >div.col6wide.colOverflowTruncated >div.article.story >div.articlePage"
    }, {
        url: "http://justjaredjr.buzznet.com/2010/10/24/robbie-amell-italia-ricci-kinect-ed-couple/",
        selector: "html >body >div#page >div#frame >div#content-frame >div#content.narrowcolumn >div#post-341756.post >div.entry"
    }, {
        url: "http://pocketnow.com/android/motorola-flipout-software-tour",
        selector: "html >body >div.wrapper >div#content >div.main_content >div.product_holder >div.product_list >div.single_product >div.single_product_inside >div.product_detail"
    }, {
        url: "http://splashpage.mtv.com/2010/10/22/marvel-slows-development-on-runaways-movie/",
        selector: "html >body >div#noFlash >div#container-outer >div#container >div#container-inner >div#wrap >div#wrap-inner >div#inner.group.abc-alt >div.group-ab >div.group-b >div#mid-col.group >div#permalink.mdl >div#posts >div#post-42559.mdl-clean.post >div.entry"
    }, {
        url: "http://pagingdrgupta.blogs.cnn.com/2010/10/22/whooping-sound-is-heart-wrenching/",
        selector: "html >body.single.single-post.postid-12352.chart >div#cnnContainer.cnn-blog-main >div.cnn_maincntnr >div.cnn_contentarea >div#cnnContentContainer >table.cnn_master_table >tbody >tr >td.cnnWireLtgBox-leftside >div#cnnBlogContentArea.cnn_blog_content_area >div.cnnPostWrap >div.cnnRightPost >div.cnnBlogContentPost"
    }, {
        url: "http://allieiswired.com/archives/2010/10/aurora-in-view-the-hot-links/",
        selector: "html >body >div#wrapper >div#content >div#post-62672.post >div.postBody"
    }, {
        url: "http://robot6.comicbookresources.com/2010/10/what-are-you-reading-94/",
        selector: "html >body >div#wrapper >div#mid >div#mid-inner >div#content.content >div#article >div.inner.block"
    }, {
        url: "http://blogs.discovermagazine.com/badastronomy/2010/10/24/grammar-nazis-get-fryed/",
        selector: "html >body >div#container >div#allContentNoBorder >div#mainContentNoBorder >div#mainContentInnerNoBorder >div.content >div#post-22806.weblog-entry >div.entry"
    }, {
        url: "http://popbytes.com/archive/2010/10/kanye_west_runaway_music_video_film_watch.shtml",
        selector: "html >body >table[width=1040] >tbody >tr >td >table[width=780] >tbody >tr >td[width=530] >table[width=530] >tbody >tr >td[width=530] >table[width=530] >tbody >tr >td.text >div"
    }, {
        url: "http://www.likecool.com/Turn_a_Trashcan_Into_a_Stormtrooper_Helmet--DIY--Gear.html",
        selector: "html >body >div >div#main >div#center >div#c_news >div#news >table[width=100%] >tbody >tr >td >table[width=100%] >tbody >tr >td >table[width=100%] >tbody"
    }, {
        url: "http://techland.com/2010/10/23/blizzards-new-diablo-iii-trailer-the-feisty-demon-hunter/",
        selector: "html >body.single.single-post.postid-51705 >div#wrapper >div#container >div#content >div#post-51705.post-51705.post.type-post.hentry.category-gaming.category-pc-gaming-2.tag-pc.tag-blizzard.tag-diablo-iii.tag-awesome.tag-pc-gaming.tag-demon-hunter.tag-there-is-no-cow-level >div.entry"
    }, {
        url: "http://liliputing.com/2010/10/notion-ink-adam-tablet-15-hours-of-battery-life.html",
        selector: "html >body >div#wrap >div#contentwrapper >div#content >div.entry.entry-1 >div.entrybody"
    }, {
        url: "http://www.firstshowing.net/2010/10/23/make-your-own-undesirable-no1-posters-from-harry-potter-7/",
        selector: "html >body >div#wrapper >div#wrapper2 >div#main >div#content >div.review"
    }, {
        url: "http://blogs.barrons.com/techtraderdaily/2010/10/22/sandisks-harari-stays-bullish-on-outlook-for-flash-memory/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.bBlogPost.bBlog >div.col10wide.margin-left-big >div.mastertextCenter >div.col6wide >div.article.story >div.articlePage"
    }, {
        url: "http://www.schneier.com/blog/archives/2010/10/steganography_i.html",
        selector: "html >body >table.main >tbody >tr >td.contentcell >div.indivbody"
    }, {
        url: "http://blogs.abcnews.com/george/2010/10/juan-williams-i-dont-have-a-psychiatrist-npr-ceo-low.html",
        selector: "html >body >div.bodycontainerwide >div.story >div.container >div.main >div#blogArea >div#blogMain"
    }, {
        url: "http://latimesblogs.latimes.com/jacketcopy/2010/10/the-new-la-times-bestseller-database.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0133f5131b41970b.entry >div.entry-content"
    }, {
        url: "http://englishrussia.com/index.php/2010/10/24/the-construction-of-volgograd-city/",
        selector: "html >body >div >div.main >div#articles >div#content"
    }, {
        url: "http://www.celebritysmackblog.com/2010/10/22/celebrity-pumpkin-ideas-photos/",
        selector: "html >body >div#page >div#content >div#post-50573.post >div.post-content"
    }, {
        url: "http://news-briefs.ew.com/2010/10/23/matt-damon-baby-daughter-stella/",
        selector: "html >body#newsbriefs >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-23554.post-23554.post.type-post.hentry.category-celebrity-babies.category-news >div.postRight"
    }, {
        url: "http://popwatch.ew.com/2010/10/22/tv-insiders-podcast-project-runway-dwts/",
        selector: "html >body#popwatch >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-105526.post-105526.post.type-post.hentry.category-tv.category-chuck.category-dancing-with-the-stars.category-ew-exclusive-video.category-ew-com-video.category-mad-men.category-parenthood.category-project-runway.category-reality-tv.category-survivor.category-tv-insiders-podcast.category-television.category-the-good-wife >div.postRight >div.storycontent"
    }, {
        url: "http://patterico.com/2010/10/23/the-secret-feminist-purpose-of-section-two-of-the-fourteenth-amendment/",
        selector: "html >body >div#rap >div#rap2 >div#content >div#post-51758.post"
    }, {
        url: "http://thebiglead.com/index.php/2010/10/24/sunday-night-football-does-vikings-domination-from-2009-carry-over/",
        selector: "html >body >table >tbody >tr >td >div#wrap >div#content >div#post-66463.post >div.post-content"
    }, {
        url: "http://wheels.blogs.nytimes.com/2010/10/22/reviewing-the-porsche-cayenne/",
        selector: "html >body.blogPost >div#shell >div#page >div#wheels.blog.wrap >div#aCol >div#content.hfeed >div#entry-74285.entry.hentry"
    }, {
        url: "http://www.insidefacebook.com/2010/10/24/social-voting/",
        selector: "html >body >div#wrap >div#content >div.entry.entry-0 >div.entrybody"
    }, {
        url: "http://www.pinknews.co.uk/2010/10/22/australian-poll-calls-for-conscience-vote-on-gay-marriage/",
        selector: "html >body >div#body-container >div#extra-container >div#container >div#content.single >div.post >div.entry"
    }, {
        url: "http://hackaday.com/2010/10/24/hackaday-links-october-24-2010/",
        selector: "html >body >div#container >div#content >div#post-.post >div.entry"
    }, {
        url: "http://technabob.com/blog/2010/10/24/johns-phone-anti-smartphone/",
        selector: "html >body >div#container >div#content_wrap >div#content >div.entry.single"
    }, {
        url: "http://www.mentalfloss.com/blogs/archives/71726",
        selector: "html >body >div#site_wrap >div.front_maincolumn >div.blog_frontentry_box >div.blog_frontentry"
    }, {
        url: "http://blogs.wsj.com/deals/2010/10/22/jobs-report-prop-traders-are-wall-streets-most-wanted/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.deals.subType-unsubscribed >div.reallywide >div.mastertextCenter >div.padding-left-big >div.col6wide.colOverflowTruncated >div.article.story >div.articlePage"
    }, {
        url: "http://www.coolest-gadgets.com/20101023/gadget-thumbnails-for-22-oct-2010/",
        selector: "html >body.js >div.container >div.innerwrap >div#contentwrap >div.right >div.maincontent >div.postdiv >div.postdivinner"
    }, {
        url: "http://blogs.miaminewtimes.com/riptide/2010/10/surfside_cop_maximo_moreno_and.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://dcist.com/2010/10/georgetown_undergrads_charged_with.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.dcist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436487.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://jacksonville.com/sports/baseball/major-league-baseball/2010-10-24/story/giants-heading-world-series-after-games-6-win",
        selector: "html.js >body.content-type-editorial.lightbox-processed >div#wl-wrapper-container >div#wl-wrapper-tier-1 >div.wl-container >div#wl-col-1 >div.wl-content >div#wl-story >div.wl-body"
    }, {
        url: "http://www.albertmohler.com/2010/10/22/banruptcy-in-the-cathedral/",
        selector: "html >body.single.single-blog.single-books-topics.single-church-ministry.single-jesus-the-gospel.single-preaching-topics.single-theology-topics.post-18846 >div.beta >div.register >div.main >div.post.post-18846"
    }, {
        url: "http://www.missinfo.tv/index.php/mtvs-hottest-mc-list-top-5-eminem-jay-z-kanye-west-drake-rick-ross/",
        selector: "html >body >div#rap >div#main >div#content >div.post >div.post-content"
    }, {
        url: "http://www.thekitchn.com/thekitchn/weekend-meditation-from-my-childhood--130492",
        selector: "html >body.thekitchn.thekitchn.postpage >div.Page >div.ContentContainer >div.PrimaryContainer >div.Primary >div.entry.first"
    }, {
        url: "http://amygrindhouse.com/kanye-west-runaway-video.html",
        selector: "html >body.custom >div#page.hfeed.content-480px >div#container >div#primary.single >div#post-88541.post-88541.post.type-post.hentry.category-kanye-west.category-music.tag-music.entry >div.entry-content"
    }, {
        url: "http://www.uncrate.com/men/gear/outdoor/natural-light-candle-co-firestarters/",
        selector: "html >body >div#room >div#rug >div#left >div.lefttext"
    }, {
        url: "http://www.searchenginejournal.com/google-voice-search/25189/",
        selector: "html >body >div#container >div#content >div#posts >div.post.first"
    }, {
        url: "http://fashiongonerogue.com/dree-hemingway-alasdair-mclellan-vogue-uk-november-2010/",
        selector: "html >body >div#wrap-line >div#content >div#singlecontent >div#singleblog-entry >div.singlepost-meta >div.singlecenter-loop >div.singlepost-content"
    }, {
        url: "http://dimemag.com/2010/10/new-orleans-hornets-2010-11-nba-season-preview/",
        selector: "html >body >div#cmn_wrap >div#page >div#content >div#blog.col >div#post-58679.post >div.entry"
    }, {
        url: "http://collegecandy.com/2010/10/24/candy-dish-the-campus-scoop/",
        selector: "html >body >div#wrap >div#container >div#content.hfeed >div#post-76405.post_block >div.entry-content"
    }, {
        url: "http://www.wired.com/epicenter/2010/10/25-years-of-mits-media-lab/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-24525.post >div.entry"
    }, {
        url: "http://www.medalofhonor.com/blog/2010/10/2-vs-2-tournament",
        selector: "html.js.cufon-active.cufon-ready >body.en_US >div.template-container >div.main-container.clearfix >div.main >div.news-article.news-article-single >div.box-middle >div#node-2128.news-content.node.clearfix"
    }, {
        url: "http://www.sportsgrid.com/nfl/snl-brett-favre-commercial/",
        selector: "html >body >div#content >div#main >div.box >div.box-middle-650 >div.blogpost >div.right-column"
    }, {
        url: "http://ricks.foreignpolicy.com/posts/2010/10/22/the_best_defense_bookshelf_is_our_culture_at_odds_with_our_current_wars",
        selector: "html.js >body >div#wrapper >div#theatre >div#content-lz >div#blog-well >div#blog-post-1.blog_entry.full_post >div.blog_body"
    }, {
        url: "http://thecable.foreignpolicy.com/posts/2010/10/22/what_no_closing_reception_for_the_pakistani_delegation",
        selector: "html.js >body >div#wrapper >div#theatre >div#content-lz >div#blog-well >div#blog-post-1.blog_entry.full_post >div.blog_body"
    }, {
        url: "http://www.miller-mccune.com/culture-society/halloween-horrors-and-common-sense-24666/",
        selector: "html >body >div.container >div#content.span-24.last >div#center_column.span-12.m2_serif >div.main_post"
    }, {
        url: "http://www.marketingpilgrim.com/2010/10/google-maps-and-history.html",
        selector: "html >body >div#wrap >div#content-wrap.float-clear >div#column >div#post-22363.post-wrap >div.entrywrap"
    }, {
        url: "http://earsucker.com/2010/10/23/taylor-momsen-flashes-her-boobs-pasties-photo-video/",
        selector: "html >body >div#wrapper >div#content >div#post_body"
    }, {
        url: "http://www.dreadcentral.com/news/40531/writer-fleshing-out-twilight-saga-breaking-dawn-two-flicks",
        selector: "html.js >body >center >table >tbody >tr#content >td >div >div#main >div.node >div#post.content"
    }, {
        url: "http://www.labnol.org/india/amitabh-bachchan-likes-chrome/17971/",
        selector: "html >body >div.container >div.main.noads >div.mainwrap >div.contentcolumn >div#article.post"
    }, {
        url: "http://www.goldenstateofmind.com/2010/10/23/1770535/giants-win-giants-win-giants-win-what-a-beautiful-incredible",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.fanshot"
    }, {
        url: "http://blog.mozilla.com/blog/2010/10/19/prototype-of-an-open-web-app-ecosystem/",
        selector: "html#blog-mozilla-com >body >div#doc >div#main-content.hfeed.single >div#post-2491.hentry >div.entry-content"
    }, {
        url: "http://www.ghacks.net/2010/10/24/linux-dictionary-tools/",
        selector: "html >body >div.wrapper >div.main >div.article >div.content"
    }, {
        url: "http://www.inc.com/articles/2010/10/book-review-what-technology-wants.html",
        selector: "html >body.Articles >div#container >div#container2 >div#innercontainer >div#content >div#content_inner >div#maincolumn.withsidebar >div#maincolumn_inner >div#articlecontent"
    }, {
        url: "http://curbed.com/archives/2010/10/22/the-nine-photoshopd-lives-of-an-elle-decor-cover.php",
        selector: "html >body >div#wrapper >div#columns-wrapper >div#columns.container >div#column-main.column >div.column-content >div.context-individual >div#post-260847.post.post-boxed.post-plain >div.post-body"
    }, {
        url: "http://www.thetruthaboutcars.com/2010/10/toyota-goes-all-out-in-india/",
        selector: "html.webkit.safari.win.js >body >div.container >div#body_content.text_wrapper.content >div#content.text.content >div.postcontainer >div.post >div.postbody"
    }, {
        url: "http://www.talkandroid.com/19033-see-the-t-mobile-comet-fly-on-november-3rd/",
        selector: "html >body >div#wrap >div#post >div.content >div.entry >div#post-19033.post"
    }, {
        url: "http://blogcritics.org/video/article/dvd-review-my-son-my-son1/",
        selector: "html >body.article.video >div#lower-content >div.content >div.left-column >div.page-module.article-page >div.inner >div#article-body"
    }, {
        url: "http://www.socialtimes.com/2010/10/insurance-company-offers-cheap-protection-plans-for-your-farmville-crops/",
        selector: "html >body >div#container >div#main_content >div#leftbar >div.post"
    }, {
        url: "http://www.boston.com/news/politics/politicalintelligence/2010/10/by_michael_j_ba.html",
        selector: "html >body#blog >div#container >div#containerBorder >div#content.blog >div#Col1 >div#blogEntry"
    }, {
        url: "http://www.scotusblog.com/2010/10/troy-davis-and-the-appeal-puzzle/",
        selector: "html >body >div#wrapper >div#content >div#contentleft >div.post >div#post-content"
    }, {
        url: "http://www.blazersedge.com/2010/10/23/1770206/jerryd-bayless-the-difference-between-good-and-right",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.archdaily.com/83620/bouldin-residence-alter-studio/",
        selector: "html >body >div#centrador >div#holder >div#main_content >div.post >div.post_content"
    }, {
        url: "http://collegesportsblog.dallasnews.com/archives/2010/10/no-poll-darling-tcu-keeps-winning-but-dr.html",
        selector: "html#sixapart-standard >body.blog >center >div#sdmContainerPage >div#sdmContentContainer >div#sdmContainer >div#blogContainerTop >div#blog-body >div.hot-entry"
    }, {
        url: "http://moneysavingmom.com/2010/10/rite-aid-deals-for-the-week-of-october-24-30-2010.html",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#content.hfeed >div#post-26203.post-26203.post.type-post.hentry.category-deals-steals.category-deals-around-town.tag-rite-aid-deals.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.chipchick.com/2010/10/neato-xv-11-review.html",
        selector: "html >body.single.single-post.postid-30480 >div#wrapper >div#content >div.leftcolumn.withpadding >div.post"
    }, {
        url: "http://www.universetoday.com/76443/astronomy-without-a-telescope-blazar-jets/",
        selector: "html >body >div.bgRasize >div.CON >div.SC >div#post-76443.Post"
    }, {
        url: "http://www.shacknews.com/onearticle.x/66155",
        selector: "html >body >div#everything.threecolumns >div#wrapper >div#body.onearticle >div.line >div#sections >div.lineend >div#section1.section"
    }, {
        url: "http://www.baseballamerica.com/blog/draft/",
        selector: "html >body >div.box-wrap >div.column-one >div.column-one-content >div#post-3006"
    }, {
        url: "http://iowntheworld.com/blog/",
        selector: "html >body >div#wrap >div#container >div#main >div#content >div.latest >div.contentblock"
    }, {
        url: "http://www.chicagobusiness.com/article/20101023/NEWS06/101029943/tribune-files-reorg-plan-that-would-give-control-to-creditors",
        selector: "html >body >div#doc >div#bd.clearfix >div#left_rail >div#article.reset"
    }, {
        url: "http://247wallst.com/2010/10/24/what-is-%E2%80%9Cquantitative-easing%E2%80%9D-and-why-should-we-care/",
        selector: "html >body.wordpress.y2010.m10.d25.h06.single.postid-83830.s-category-general.s-author- >div#wrapper.hfeed >div#colmask >div#colmid >div#colright >div#col1wrap >div#col1pad >div#col1 >div#post-83830.hentry.p1.post.publish.author-247wallst.category-economy.untagged.y2010.m10.d24.h14 >div.entry-content"
    }, {
        url: "http://www.howtogeek.com/howto/32969/week-in-geek-kaspersky-gets-hacked-edition/",
        selector: "html >body >div#doc4.yui-t7 >div#bd >div.yui-ge >div.yui-u.first >div.content >div#post-32969.thepost >div.thecontent"
    }, {
        url: "http://www.brooklynvegan.com/archives/2010/10/prince_playing.html",
        selector: "html.type-post >body >div#container >div#content >div#wrapper >div.main.content >div.module.post >div.body"
    }, {
        url: "http://www.inquisitr.com/88305/finally-amazon-to-add-kindle-e-book-lending/",
        selector: "html >body >div#container >div#mainbg >div#box >div#bgbox >div#content >div.entry >div#post-88305.post >div#single"
    }, {
        url: "http://www.opensecrets.org/news/2010/10/top-executives-favor-conservative-5.html",
        selector: "html#sixapart-standard >body.mt-archive-listing.mt-entry-archive.layout-wt >div#contentWrapper >div#mainColumn >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-1858.entry-asset.asset >div.asset-content"
    }, {
        url: "http://www.heyuguys.co.uk/2010/10/24/runaways-adaptation-pushed-back-to-2012/",
        selector: "html >body.single.single-post.postid-51303 >div#wrap >div#content >div#contentleft >div.postarea"
    }, {
        url: "http://cleantechnica.com/2010/10/24/san-antonio-gets-the-scoop-on-first-commercial-biogas-from-municipal-sewage/",
        selector: "html >body >div#container >div#page >div#content-wrapper >div#content-box.sidebars-both >div.entry >div.format_text.entry_content"
    }, {
        url: "http://adweek.blogs.com/adfreak/2010/10/rgas-crew-is-talented-as-well-as-tattooed.html",
        selector: "html >body >div#container >div#pagebody >div#center >div.content >table[width=100%] >tbody >tr"
    }, {
        url: "http://blogs.villagevoice.com/music/2010/10/cmj_portrait_ma.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://latimesblogs.latimes.com/sports_blog/2010/10/formula-one-f1-mark-webber-fernando-alonso-sebastian-vettel-south-korea.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c630a53ef0133f54f4b6f970b.entry >div.entry-content"
    }, {
        url: "http://www.laobserved.com/archive/2010/10/usc_annenberg_announces_n.php",
        selector: "html#sixapart-standard >body >div#lao >div#Holder >div#Contentleftinside >div.blog >div.blogbody"
    }, {
        url: "http://www.problogger.net/archives/2010/10/25/5-ways-to-monetize-your-blog-without-selling-out/",
        selector: "html >body >div#frame >div#container >div#content >div.left_side >div.entry"
    }, {
        url: "http://multiplayerblog.mtv.com/2010/10/22/diablo-3-pvp-arenas/",
        selector: "html >body >div#noFlash >div#container-outer >div#container >div#container-inner >div#wrap >div#wrap-inner >div#inner.group.abc-alt >div.group-ab >div.group-b >div#mid-col.group >div#permalink.mdl >div#posts >div#post-50187.mdl-clean.post >div.entry"
    }, {
        url: "http://www.medpagetoday.com/MeetingCoverage/IDSA/22936",
        selector: "html >body >div#containerDivReg >table.maintbl >tbody >tr >td#tbPromoReg.tbindextb1 >div#tb1Div >table[width=500] >tbody >tr >td"
    }, {
        url: "http://www.informationisbeautiful.net/2010/the-varieties-of-intimate-relationship/",
        selector: "html >body.wordpress.blogid-1.y2010.m10.d25.h11.singular.slug-the-varieties-of-intimate-relationship.single.postid-2493.s-y2010.s-m10.s-d20.s-h15.s-category-fun.s-category-information-design.s-category-concept-map.s-tag-ascetic.s-tag-celibacy.s-tag-chastity.s-tag-cheating.s-tag-clerical-celibacy.s-tag-co-dependency.s-tag-common-marriage.s-tag-data-visualisation.s-tag-david-mccandless.s-tag-divorce.s-tag-dont-ask-dont-tell.s-tag-empty-marriage.s-tag-foursome.s-tag-friends-with-benefits.s-tag-group-marriage.s-tag-infobeautiful.s-tag-information-design.s-tag-information-is-beautiful.s-tag-infovisualisation.s-tag-marriage.s-tag-marriage-to-god.s-tag-mccandless.s-tag-monogamy.s-tag-non-monogamy.s-tag-open-marriage.s-tag-polyamory.s-tag-polyfedility.s-tag-polygamy.s-tag-promiscuity.s-tag-serial-monogamy.s-tag-soft-swinging.s-tag-sublimation.s-tag-swinging.s-tag-the-visual-miscellaneum.s-tag-threesome.s-tag-types-of-relationship.s-tag-unicorn-polyamory.s-tag-varities-of-intimate-relationship.s-tag-visual-miscellaneum.s-tag-visualization.s-author-admin.s-comments-open.s-pings-open.mac.safari.sf5-0 >div#wrapper.hfeed >div#main >div#container >div#content >div#post-2493.hentry.p1.post.publish.author-david.category-fun.category-information-design.category-concept-map.tag-ascetic.tag-celibacy.tag-chastity.tag-cheating.tag-clerical-celibacy.tag-co-dependency.tag-common-marriage.tag-data-visualisation.tag-david-mccandless.tag-divorce.tag-dont-ask-dont-tell.tag-empty-marriage.tag-foursome.tag-friends-with-benefits.tag-group-marriage.tag-infobeautiful.tag-information-design.tag-information-is-beautiful.tag-infovisualisation.tag-marriage.tag-marriage-to-god.tag-mccandless.tag-monogamy.tag-non-monogamy.tag-open-marriage.tag-polyamory.tag-polyfedility.tag-polygamy.tag-promiscuity.tag-serial-monogamy.tag-soft-swinging.tag-sublimation.tag-swinging.tag-the-visual-miscellaneum.tag-threesome.tag-types-of-relationship.tag-unicorn-polyamory.tag-varities-of-intimate-relationship.tag-visual-miscellaneum.tag-visualization.is-full.comments-open.pings-open.y2010.m10.d20.h15.slug-the-varieties-of-intimate-relationship >div.entry-content"
    }, {
        url: "http://friendlyatheist.com/2010/10/23/want-to-help-a-hell-house/",
        selector: "html >body >div#wrapper2 >div#wrapper >div#content-wrapper >div#content >div.post-wrapper >div.post"
    }, {
        url: "http://order-order.com/2010/10/25/rich-marks-monday-morning-view-86/",
        selector: "html >body >div#gf-page >div#gf-container >div#gf-entries >div#gf-entryBox.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post"
    }, {
        url: "http://www.rhrealitycheck.org/blog/2010/10/24/maybe-cases-rape-incest-says-candidate-dino-rossi",
        selector: "html.js >body.not-front.not-logged-in.page-node.node-type-blog.one-sidebar.sidebar-right >div.container.clearfix >div#content.clearfix >div#content-right.main-content.whitebg >div.node >div.content"
    }, {
        url: "http://www.thehollywoodgossip.com/2010/10/katy-perry-and-russell-brand-married/",
        selector: "html >body >div#wrapper >div#page.clearfix >div#content >div.post.clearfix >div.entry"
    }, {
        url: "http://www.gearlog.com/2010/10/this_weeks_best_youtube_videos.php",
        selector: "html#sixapart-standard >body >center >table >tbody >tr >td >table[width=100%] >tbody >tr >td >table.maincolumn >tbody >tr >td >div#entries >table.main >tbody >tr >td.defaults >div.userdefaults"
    }, {
        url: "http://www.product-reviews.net/2010/10/25/motorola-droid-pro-price-on-verizon-revealed/",
        selector: "html >body >div#wrap >div#content >div#contentleft >div.postarea >div#areashare >div.maincontent"
    }, {
        url: "http://www.telegraph.co.uk/comment/columnists/matthewd_ancona/8083112/Spending-review-George-Osbornes-review-is-a-bible-for-the-new-generation-of-Tories.html",
        selector: "html >body >div#tmglSite >div#tmglBody >div.twoThirds.gutter >div.oneHalf.gutter >div.story"
    }, {
        url: "http://wdtprs.com/blog/2010/10/apnews-catholic-bloggers-aim-to-purge-dissenters/",
        selector: "html >body.single.single-post.postid-12555 >div#wrapper.hfeed >div#main >div#container >div#content >div#post-12555.post-12555.post.type-post.hentry.category-throwing-a-nutty >div.entry-content"
    }, {
        url: "http://www.themudflats.net/2010/10/24/debate-night/",
        selector: "html >body >div#page >div#sub-page >div#content-wrap >div#content >div.gap >div#post-17905.post >div.entry"
    }, {
        url: "http://scienceblogs.com/dispatches/2010/10/the_thin_blue_line.php",
        selector: "html >body#blog >div#sbMainContainer >div.blogContainer >div.mainCol >div.blogMain >div#entry-163686.entry"
    }, {
        url: "http://dealseekingmom.com/reminder-picabook-free-large-custom-photo-book/",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#content.hfeed >div#post-58304.post-58304.post.type-post.hentry.category-deals.tag-free-photo-book-offers.tag-photo-deals.tag-picaboo-offers.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://iowahawk.typepad.com/iowahawk/2010/10/beltway-adventure.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d83451eb3469e20133f513797e970b.entry-category-tales_of_the_ocult.entry-author-iowahawk.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://perfunction.typepad.com/perfunction/2010/10/historic-illiteracy-idiot-sarah-palin-party-like-its-1773-after-the-election.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d8341d896453ef0133f530fcd3970b.entry-author-cuffy_meigs.entry-type-post.entry"
    }, {
        url: "http://www.wisebread.com/how-to-save-1500-on-coffee",
        selector: "html.js >body.sidebar-right.node-page >div.container >div.body-container.clearfix >div#main >div#node-240933.node.node-blog >div.body"
    }, {
        url: "http://gadgetwise.blogs.nytimes.com/2010/10/24/qa-making-entourage-forget-a-bad-address/",
        selector: "html >body.blogPost >div#shell >div#page >div#gadgetwise.blog.wrap >div#aCol >div#content.hfeed >div#entry-38643.entry.hentry"
    }, {
        url: "http://thegospelcoalition.org/blogs/tgc/2010/10/24/the-gospel-the-gap-and-the-gaze-through-the-glass/",
        selector: "html >body.wordpress.y2010.m10.d25.h06.single.postid-4768.s-y2010.s-m10.s-d24.s-h15.s-category-articles-of-interest.s-category-commentary.s-category-featured.s-category-noteworthy.s-author-willb >div#wrapper.hfeed >div#page >div#main-area >div#content >div.post >div.content >div.entry"
    }, {
        url: "http://yeeeah.com/2010/10/22/lara-stones-calvin-klein-ad-banned-in-australia/",
        selector: "html >body >div#wrapper >div#mid.fix >div#singlemain.fix >div#content >div#post-82038.post >div.entry"
    }, {
        url: "http://mmajunkie.com/news/21142/the-sunday-junkie-oct-24-edition.mma",
        selector: "html >body >form#aspnetForm >div#J4_pnlCvr.master >div#J4_pnlCr.masterCon >div#J4_pnlCrLeft.masterM >div#J4_CPCtr_pnlFS >div#J4_CPCtr_piC21142_pnlMain.fs"
    }, {
        url: "http://www.metroweekly.com/news/",
        selector: "html >body >div#foldAll >div#foldMiddle >div#foldArticle >div.sectionWide"
    }, {
        url: "http://theblemish.com/2010/10/paris-hilton-went-costume-shopping/",
        selector: "html >body >div#skin >div#page >div#main >div#content >div#post-78228.post >div.entry"
    }, {
        url: "http://www.rockpapershotgun.com/2010/10/24/the-sunday-papers-142/",
        selector: "html >body.single.single-post.postid-42467 >div#main >div#container >div#left-column >div#post-42467.block >div.entry"
    }, {
        url: "http://www.ohdeedoh.com/ohdeedoh/costumes-favorite-characters-2homecrafted-halloween-130523",
        selector: "html >body.ohdeedoh.ohdeedoh.postpage >div.Page >div.ContentContainer >div.PrimaryContainer >div.Primary >div.entry.first"
    }, {
        url: "http://freefrombroke.com/2010/10/savings-certificate-of-deposit-rates-and-links.html",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-5549.post-5549.post.type-post.hentry.category-blog.category-carnival.category-personal-finance.category-bank.tag-best-bank-rates.tag-best-cd-rates.tag-blog-carnival.tag-personal-finance-articles.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.copyblogger.com/wrap-up-12/",
        selector: "html >body.single.single-post.postid-11208.header-image.sidebar-content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-11208.post.type-post.hentry.category-1 >div.entry-content"
    }, {
        url: "http://blog.foreignpolicy.com/posts/2010/10/22/wikileaked",
        selector: "html.js >body >div#wrapper >div#theatre >div#content-lz >div#blog-well >div#blog-post-1.blog_entry.full_post >div.blog_body"
    }, {
        url: "http://www.chrisbrogan.com/",
        selector: "html >body.home.blog.header-full-width.header-image.content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-6433.post.type-post.hentry.category-business.category-howto.category-humanbusiness >div.entry-content"
    }, {
        url: "http://www.asylum.com/2010/10/22/angela-amber-cope-nascar-pics/",
        selector: "html >body >div#mainContainer >div#content >div#center >div#p19686067 >div#permalink.article"
    }, {
        url: "http://yankees.lhblogs.com/2010/10/24/boone-logan-i-was-hoping-i-would-have-a-career-year/",
        selector: "html >body >div#page >div >div#content-wrap >div#content.front >div.gap >div#post-34571.post >div.entry"
    }, {
        url: "http://bossip.com/299368/yeezy-and-his-ginormous-piece-crash-the-party-do-a-couple-songs-video12006/",
        selector: "html >body.single.single-post.postid-299368.category-video-bossip-categories >div#wrapper >div#main >div#content >div.contentWrap.rounded >div#post-299368.post-299368.post.type-post.hentry.category-are-you-feelin-this-get-up.category-attention-whores.category-kanye-west.category-live-performance-categories.category-making-it-rain-on-them-hoes.category-news.category-seen-on-the-scene.category-surprise.category-video-bossip-categories.tag-kanye-west.tag-brooklyn-bowl.tag-cyhi-da-prynce.tag-so-appalled.tag-runaway.tag-cmj.tag-pitchfork.tag-offline.tag-my-beautiful-dark-twisted-fantasy >div.entry-content"
    }, {
        url: "http://sfist.com/2010/10/24/photos_giants_head_to_world_series.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.sfist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436510.entry-asset.asset.hentry >div.asset-content.entry-content >div.asset-body"
    }, {
        url: "http://www.socialmediaexaminer.com/6-ways-to-optimize-your-blog-for-search-engines/",
        selector: "html >body >div#container >div#main >div.wrapper >div#content >div#frame >div#single"
    }, {
        url: "http://scobleizer.com/2010/10/22/starbucks-cio-shows-why-next-version-of-windows-is-risky/",
        selector: "html >body.single.single-post.postid-6955.header-image.content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-6955.post.type-post.hentry.category-web"
    }, {
        url: "http://www.woostercollective.com/2010/10/one_not_to_miss_trespass_book_launch_in.html",
        selector: "html >body >div#center >div.content"
    }, {
        url: "http://www.gaypatriot.net/2010/10/24/carly-fiorina-understands-californias-entrepreneurial-spirit/",
        selector: "html >body >div#outer_wrapper >div#wrapper >div#main >div#post-31046.post"
    }, {
        url: "http://www.indycornrows.com/2010/10/22/1768922/bulls-102-pacers-74-indiana-mails-in-preseason-finale",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.phonescoop.com/news/item.php",
        selector: "html >body >div#outer >div#notnav >div#content480 >div.inner >div.innerb"
    }, {
        url: "http://www.saysuncle.com/2010/10/24/gun-rights-and-the-2010-house-races/",
        selector: "html >body >div.mainContainer >div.col1"
    }, {
        url: "http://majornelson.com/archive/2010/10/24/show-375-call-of-duty-black-ops-mp-star-wars-the-force-unleashed-ii-fable-iii.aspx",
        selector: "html >body >form#aspnetForm >div#main >div#middle.clearfix >div#content >div.post >div.postcontent"
    }, {
        url: "http://weblogs.baltimoresun.com/entertainment/zontv/2010/10/msnbc_crosses_line_on_fund_rai.html",
        selector: "html >body >div#container >div#branding.thirdParty >div#content >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-268428.entry >div.entry-content"
    }, {
        url: "http://weblogs.baltimoresun.com/news/crime/blog/2010/10/on_representation_at_bail_revi.html",
        selector: "html >body >div#container >div#branding.thirdParty >div#content >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-268479.entry >div.entry-content"
    }, {
        url: "http://www.betanews.com/article/Microsoft-to-open-webbased-gaming-store-November-15/1287775212",
        selector: "html >body >div#page >div#contentwrapper >div.articleleft >div#article >div.article_text"
    }, {
        url: "http://www.booooooom.com/2010/10/22/photographer-geordie-wood/",
        selector: "html >body#topPart >div#wrapper >div#frame >div#content >div#left >div.entry >div#post-22135.post.inernalPost >div.contentPost.content-333"
    }, {
        url: "http://moconews.net/article/419-a-week-of-reacting-to-steve-jobs-rant/",
        selector: "html >body.mn.article >div#main_content_box >div#left_column >div#entry_189490.entry >div.content.smaller"
    }, {
        url: "http://michiganmessenger.com/42814/watchdog-group-files-fec-complaint-over-american-future-fund",
        selector: "html >body >div.contentWrap >div.content >div.innerContent >div.singleNews.rightBorder.leftBorder >div#singleStory.extraPadded >div.post-content"
    }, {
        url: "http://www.ineedmyfix.com/2010/10/24/rihanna-was-a-no-show-at-katy-perrys-wedding-russell-brand/",
        selector: "html >body >div#bigcontainer >div#container >div#content >div#post-82346.post >div.text"
    }, {
        url: "http://www.anandtech.com/show/3988/the-use-of-evgas-geforce-gtx-460-ftw-in-last-nights-review",
        selector: "html >body >div#hold_me >div#container_site >div#container_width >div#subpage.containerbody >div.body_left >div.subbox >div.subcontent >div.sidepadding.review"
    }, {
        url: "http://blogs.wsj.com/juggle/2010/10/20/when-its-hard-to-hide-your-personal-life-at-work/",
        selector: "html >body >div.fullwide.wsjblog.wsjblog_post.juggle.subType-unsubscribed >div.reallywide >div.mastertextCenter >div.padding-left-big >div.col6wide.colOverflowTruncated >div.article.story >div.articlePage"
    }, {
        url: "http://necolebitchie.com/2010/10/24/kanye-explains-michael-jackson-scene-what-the-phoenix-represents-in-runaway/",
        selector: "html >body >div#wrapper >div#site >div#content >div#leftside >div#post-98739.post >div.entry"
    }, {
        url: "http://necolebitchie.com/2010/10/25/rent-is-too-damn-high/",
        selector: "html >body >div#wrapper >div#site >div#content >div#leftside >div#post-98798.post >div.entry"
    }, {
        url: "http://www.superherohype.com/news/articles/109177-photos-from-smallville-episode-qambushq",
        selector: "html >body.sect_news.com_content.com_content_article.news_com_content_article.type_article.id_109177.articles >div#wrapper >div#page_body >div#column_content.column >div#column_main.full >div#main_content >div.com_content.com_content_article >div.article >table[width=100%] >tbody >tr >td >div.article_content"
    }, {
        url: "http://www.egotastic.com/entertainment/celebrities/taylor-momsen/taylor-momsen-flashes-chest-on-stage-during-concert-video-egotastic-exclusive-from-hollywood-life-006351",
        selector: "html >body >div#container >div#content >div#post006351 >div.post"
    }, {
        url: "http://www.bloodyelbow.com/2010/10/24/1771949/ufc-121-post-fight-interviews-part-2-dana-white",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.slcdunk.com/2010/10/24/1770818/sunday-syncopation-4",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://theincidentaleconomist.com/wordpress/health-care-is-confusing/",
        selector: "html >body >div#wrapper >div#content >div.container >ul.posts >li >div.post_content"
    }, {
        url: "http://www.thepiratescove.us/2010/10/24/sorta-blogless-sunday-pinup-261/",
        selector: "html >body.wordpress.y2010.m10.d25.h07.single.postid-15698.s-y2010.s-m10.s-d24.s-h07.s-category-patriotic-pinup.s-author-william.teach >div#universe.hfeed >div#container-a >div#container-b >div#container-c >div#container-d >div#container-e >div#container-f >div#main >div#content >div#post-15698.hentry.p1.post.publish.author-william.teach.category-patriotic-pinup.y2010.m10.d24.h07 >div.entry-content"
    }, {
        url: "http://www.fonearena.com/blog/25213/vodafone-now-offering-the-nokia-n8-and-htc-desire-hd-both-free-on-selected-plans.html",
        selector: "html >body >div#page.clearfloat >div#inner.clearfloat >div#content >div#post-25213.post >div.entry.clearfloat"
    }, {
        url: "http://nexus404.com/Blog/2010/10/24/ipad-ios-4-2-forces-orientation-lock-to-become-mute-switch-you-don%E2%80%99t-get-to-vote-steve-jobs-confirms-that-ios-4-2-will-transform-the-orientation-lock-into-a-mute-switch-naturally-owners-don/",
        selector: "html >body >div.content >div.left >div.left_articles >div.contentpost"
    }, {
        url: "http://crookedtimber.org/2010/10/24/cosmopolitan-social-democracy/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div.post_box.hentry.top"
    }, {
        url: "http://www.mint.com/blog/investing/dividends-10222010/",
        selector: "html >body.single.single-post.postid-17964.post-template.post-template-article-wide-php >div#wrapper >div#content.outer.wide >div#left-col >div.post.hide_pics.clearfix"
    }, {
        url: "http://www.greenbiz.com/news/2010/10/25/greenbiz-group-announces-2011-state-green-business-forum-cities-dates",
        selector: "html.js >body.greenbiz >div#page >div#main >div#columns.columns-two >div.column-content >div.col-1 >div.clear-block >div.news-article.article"
    }, {
        url: "http://icydk.com/2010/10/22/linday-lohan-gets-rehab-not-jail-boo/",
        selector: "html >body >div#page >div >div >div#post-125822.post >div.entry"
    }, {
        url: "http://electricpig.co.uk/2010/10/24/samsung-galaxy-tab-review/",
        selector: "html >body >div#wrapper >div#contentMain >div#left >div#post-96746.post-96746.post.hentry.category-computers-and-accessories-reviews.tag-android.tag-galaxy-tab.tag-samsung.tag-tablet >div.entry"
    }, {
        url: "http://www.thesimpledollar.com/2010/10/24/review-the-little-book-of-economics/",
        selector: "html >body >div#container >div#main >div#post-6150.post >div.post-content"
    }, {
        url: "http://www.contemporist.com/2010/10/25/equilibrium-bookcase-by-malagana-design/",
        selector: "html >body >div#main >div#body >div#content >div.post >div.post-content"
    }, {
        url: "http://www.japanprobe.com/2010/10/25/mob-of-chinese-nationalists-forced-kimono-girl-to-strip/",
        selector: "html >body >div#main >div#page-body-wrapper >div#content >div.post-content"
    }, {
        url: "http://www.boxturtlebulletin.com/2010/10/22/27534",
        selector: "html >body >div#wrapper >div#content >div#MiddleCol >div.story"
    }, {
        url: "http://hothardware.com/News/Apples-NC-Data-Center-To-Double-In-Size/",
        selector: "html >body >div#Page >div#Body >div#BodyMain >div.inner >div#Content.Content_News >div#ContentBody >div#intelliTxt.NewsItemContent"
    }, {
        url: "http://www.prefixmag.com/features/prefix/the-prefix-guide-to-mark-kozelek/44307/",
        selector: "html >body >div#main-container.container >div.span-24.last.clear >div.span-16 >div.span-16.last >div.post-body"
    }, {
        url: "http://www.fearthesword.com/2010/10/5/1733375/life-after-lebron-cavaliers-win-preseason-opener-87-72-over-bobcats",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://blog.sunlightfoundation.com/2010/10/21/tools-for-transparency-easy-ways-organize-events/",
        selector: "html >body >div.container >div.column.span-16 >div#wp_blog >ul#postblock >div.blog_box >li#post-17705 >div#wp_blog_post"
    }, {
        url: "http://www.fabsugar.com/Pictures-JCrew-Collection-Holiday-10-11554170",
        selector: "html.anonymous.webkit.safari.win.js >body.fabsugar-site.p-node.p-node_11554170_.page-gallery.no_side.editorial-page >div#custom_bg >div#sugar-content-container >div.container.last.clear >div.span-23.last.river-no-side.prepend-1 >div#content-container >div#sugar-gallery.intro.preview >div#gallery-left >div#gallery-photo-carousel"
    }, {
        url: "http://www.bilerico.com/2010/10/some_hispanic_people_actually_do_look_asian.php",
        selector: "html#sixapart-standard >body >div#container >div#left-column >div.main-content.round >div.post"
    }, {
        url: "http://www.avc.com/a_vc/2010/10/does-price-matter.html",
        selector: "html >body.single-post >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451b2c969e20134886de247970c.entry"
    }, {
        url: "http://animalnewyork.com/2010/10/live-green-bike-sharing-grids/",
        selector: "html >body >div.fullwrap >div#page >div#wrap.wrap_dev >div#content.narrowcolumn >div#post-107615.post >div.entry"
    }, {
        url: "http://blog.facebook.com/blog.php",
        selector: "html#facebook >body.fbx.UIPage_LoggedOut.win.Locale_en_US >div#globalContainer >div#content.fb_content.clearfix >div#mainContainer >div#contentCol >div#contentArea >div.clearfix >div#blog_main_column.lfloat >ul.uiList.mbl >li.uiListItem.uiListMedium.uiListVerticalItemBorder >div.UIImageBlock.clearfix >div.UIImageBlock_Content.UIImageBlock_MED_Content >ul.uiList >li.pbm.uiListItem.uiListMedium.uiListVerticalItemBorder"
    }, {
        url: "http://directorblue.blogspot.com/2010/10/open-thread-what-are-your-top-five.html",
        selector: "html >body >div#main >div#main2 >div#main3 >div.post >div.post-body"
    }, {
        url: "http://publicpolicypolling.blogspot.com/2010/10/illinois-gov-1-point-race.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry.uncustomized-post-template >div.post-body.entry-content"
    }, {
        url: "http://wattsupwiththat.com/2010/10/24/the-stupefying-pace-of-glacier-melt-in-the-1940s/",
        selector: "html >body.single.single-post.postid-26921 >div#wrapper.hfeed >div#main >div#container >div#content >div#post-26921.post-26921.post.type-post.hentry.category-glaciers >div.entry-content"
    }, {
        url: "http://www.americablog.com/2010/10/is-there-abortion-provider-murder.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post.hentry >div#post-2552701221080421278.post-body.entry-content"
    }, {
        url: "http://theplaylist.blogspot.com/2010/10/playlist-joins-indiewire-starting-today.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.uncustomized-post-template >div#post-6536482222305106748.post-body >p >span"
    }, {
        url: "http://yidwithlid.blogspot.com/2010/10/illinois-league-of-women-voters-big.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post >div.post-body"
    }, {
        url: "http://theblogprof.blogspot.com/2010/10/detroit-free-press-rochelle-riley-still.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry.uncustomized-post-template >div.post-body.entry-content"
    }, {
        url: "http://joemygod.blogspot.com/2010/10/podcast-same-sex-sunday.html",
        selector: "html >body >div#content >div#main >div#main2 >div.post >div.post-body"
    }, {
        url: "http://legalinsurrection.blogspot.com/2010/10/im-doubling-down-on-my-top-10.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.calculatedriskblog.com/2010/10/schedule-for-week-of-oct-24th.html",
        selector: "html >body >div#outer-wrapper >div#main-wrap1 >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post.hentry.uncustomized-post-template >div.post-body.entry-content"
    }, {
        url: "http://americanpowerblog.blogspot.com/2010/10/enthusiasm-gap-favors-gop-in-early.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry.uncustomized-post-template >div.post-body.entry-content"
    }, {
        url: "http://digbysblog.blogspot.com/2010/10/what-defines-terrorist-anyway.html",
        selector: "html >body >table >tbody >tr >td >div.contentcell >blockquote"
    }, {
        url: "http://gay.americablog.com/2010/10/ap-on-gay-enthusiasm-gap-this-election.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post.hentry >div#post-2104458796014619032.post-body.entry-content"
    }, {
        url: "http://moviesblog.mtv.com/2010/10/23/kane-west-runaway-debut-mtv-mtv-2-mtvcom/",
        selector: "html >body >div#noFlash >div#container-outer >div#container >div#container-inner >div#wrap >div#wrap-inner >div#inner.group.abc-alt >div.group-ab >div.group-b >div#mid-col.group >div#permalink.mdl >div#posts >div#post-44766.mdl-clean.post >div.entry"
    }, {
        url: "http://www.bestweekever.tv/2010-10-23/shut-it-down-antoine-dogson-is-best-halloween-costume-of-2010/",
        selector: "html >body >div#bwe_site_content >div#bwe_page_content >div#main >div#post-75586.post-75586.post.type-post.hentry.category-photos.category-entertainment.tag-animals.tag-antoine-dodson.tag-antoine-dogson.tag-dog.tag-dogs.tag-halloween.tag-internet-sensation.tag-meme.bwe_post >div.entry"
    }, {
        url: "http://althouse.blogspot.com/2010/10/wind-knocks-my-window-room-it-is-wet.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://jammiewearingfool.blogspot.com/2010/10/biden-gop-doesnt-want-to-fund-police-or.html#links",
        selector: "html >body >div#content >div#main >div#main2 >div#main3 >div.post >div.post-body"
    }, {
        url: "http://hip2save.com/2010/10/rue-la-la-hot-free-laura-geller-cosmetic-set.html",
        selector: "html >body >div#contentwrapper >div#content.random1 >div#leftcol >div.entrywrapper >div.post-38897.post.type-post.hentry.category-expired.category-freebies.category-online-bargains.entry >div.entrycontent >div.thiscontent"
    }, {
        url: "http://www.hrw.org/en/news/2010/10/24/iraq-wikileaks-documents-describe-torture-detainees",
        selector: "html.js >body.hrw.subnav.node-page.news.sidebar-right >div#page >div.limiter.clear-block >div#main.clear-block >div#content.clear-block >div.node.clear-block.node-page.ltr.ntype-news >div.content.clear-block.filter-text >div.node-body"
    }, {
        url: "http://android-developers.blogspot.com/2010/10/improving-app-quality.html",
        selector: "html >body.gc-documentation >div#doc-content.g-unit >div#outer-wrapper >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://googlemobile.blogspot.com/2010/10/voice-search-in-russian-polish-czech.html",
        selector: "html >body >div#template_fixed.template_white >div#main-wrapper >div#content-wrapper >div#main-content >div#main.main.section >div#Blog1.widget.Blog >div#post-wrapper >div.blog-posts.hfeed >div.post >div.post-body"
    }, {
        url: "http://google-latlong.blogspot.com/2010/10/history-in-unmaking.html",
        selector: "html >body >center >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post.uncustomized-post-template >div.post-body"
    }, {
        url: "http://stickyfingers1.blogspot.com/2010/10/patience-is.html",
        selector: "html >body >div#outer-wrapper >div#blog-wrapper >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post >div#post-183915820610162068.post-body >p"
    }, {
        url: "http://gigaom.com/apple/yojimbo-3-and-yojimbo-for-ipad-released/",
        selector: "html >body#go-channel-apple.applewordpress.y2010.m10.d31.h01.chrome.wpdotcom.single.postid-174724.s-y2010.s-m10.s-d22.s-h11.s-category-cnn.s-category-thestreet.s-category-apps.s-category-nyt-company-news.s-category-syn-straight-news.s-category-software-2.s-tag-iphone.s-tag-mac.s-tag-content.s-tag-yojimbo.s-author-weldon.go-channel-apple.clearfix.tk-active >div#inner-body-apple.inner-body.clearfix >div#inner-body-1-apple.inner-body-1.clearfix >div#inner-body-2-apple.inner-body-2.clearfix >div#grid-wrap-apple.grid-wrap.clearfix >div#init-grid-apple.init-grid.container_12.clearfix >div#content.grid_12.content.p.post.publish.author-weldon-dodd.category-cnn.category-thestreet.category-apps.category-nyt-company-news.category-syn-straight-news.category-software-2.tag-iphone.tag-mac.tag-content.tag-yojimbo.y2010.m10.d22.h11.alt.clearfix >div#single-page.grid_8.alpha.single >div#post-content-174724.post.content-default.p1.post.publish.author-weldon-dodd.category-cnn.category-thestreet.category-apps.category-nyt-company-news.category-syn-straight-news.category-software-2.tag-iphone.tag-mac.tag-content.tag-yojimbo.y2010.m10.d22.h11.clearfix >div.post-content.clearfix >div.the-content.clearfix"
    }, {
        url: "http://www.shoppingandinfo.com/2010/10/alice-olivia-fur-cashmere-cardigan-look.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry.uncustomized-post-template >div#post-5398775788461624544.post-body"
    }, {
        url: "http://analytics.blogspot.com/2010/10/web-analytics-tv-13-for-ninjas.html",
        selector: "html >body >div.ga-container >div#template_fixed.template_orange >div#main-wrapper >div#content-wrapper.ga-container-body >div#main-content >div#main.main.section >div#Blog1.widget.Blog >div#post-wrapper >div.blog-posts.hfeed >div.post >div.post-body"
    }, {
        url: "http://eureferendum.blogspot.com/2010/10/no-puzzle.html",
        selector: "html >body >div#wrapper >div#casing >div#content >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.single >div.cover >div.entry >p"
    }, {
        url: "http://carscoop.blogspot.com/2010/10/proton-rebadges-mitsubishi-lancer-and.html",
        selector: "html >body >div#outer-wrapper >div.contentwrapper >div#content >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post.uncustomized-post-template >div.post-body"
    }, {
        url: "http://gatesofvienna.blogspot.com/2010/10/gates-of-vienna-news-feed-10242010.html",
        selector: "html.v2 >body >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.economicpolicyjournal.com/2010/10/buffett-picks-total-insider-to-handle.html",
        selector: "html.v2 >body >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry"
    }, {
        url: "http://iaindale.blogspot.com/2010/10/handling-my-first-breaking-news-story.html",
        selector: "html >body >div#wrapper >div#main >div.post >div.post-body"
    }, {
        url: "http://chronicle.com/blogs/wiredcampus/new-study-explores-how-facebook-helped-students-grieve-after-campus-shootings/27821",
        selector: "html >body >div.wrap >div.wrap-bg >div.main-wrap >div.main-content >div#container >div.content.one-col-content >div.blog-mod >div#post-27821.post-27821.post.type-post.hentry.category-uncategorized >div.abstract"
    }, {
        url: "http://voxday.blogspot.com/2010/10/shutting-them-down.html",
        selector: "html >body >div#content >div#main >div#main2 >div.post >div.post-body >div"
    }, {
        url: "http://inothernews.tumblr.com/post/1391396936/and-sooner-or-later-newspapers-are-going-to",
        selector: "html >body >div#wrap >div#container >div.post >div.photo"
    }, {
        url: "http://globaleconomicanalysis.blogspot.com/2010/10/california-cut-37000-government-jobs-in.html",
        selector: "html >body >div#container >div#content >table[width=100%] >tbody >tr >td.tdcontentmiddle >div#middle >div#middle.middle.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post >div.post-body"
    }, {
        url: "http://gregmankiw.blogspot.com/2010/10/pricing-in-venezuela.html",
        selector: "html >body >div#content >div#main >div#main2 >div.post >div.post-body >div"
    }, {
        url: "http://balkin.blogspot.com/",
        selector: "html >body >table[width=950] >tbody >tr >td >div.posts"
    }, {
        url: "http://gmailblog.blogspot.com/2010/10/follow-gmail-on-twitter.html",
        selector: "html >body >div#template_fixed.template_white >div#main-wrapper >div#content-wrapper >div#main-content >div#main.main.section >div#Blog1.widget.Blog >div#post-wrapper >div.blog-posts.hfeed >div.post >div.post-body >p"
    }, {
        url: "http://www.geekologie.com/2010/10/sears_for_all_your_zombie_need.php",
        selector: "html >body >div#container >div#mainbody >div#entrycontainer >div.entrybody"
    }, {
        url: "http://www.bleedingcool.com/2010/10/24/azrael-and-the-anti-catholic-propoganda/",
        selector: "html >body >div#page.clearfloat >div#inner.clearfloat >div#content >div#post-45203.post >div.entry.clearfloat"
    }, {
        url: "http://kottke.org/10/10/how-facebook-decides-what-to-show-you",
        selector: "html >body#kottke-org >div#easel >div#canvas >div#main"
    }, {
        url: "http://videogum.com/237951/monsters-ball-the-weeks-best-comments-33/franchises/monsters-ball/",
        selector: "html >body.single.postid-237951 >div#wrapper >div#page >div#content >div#content-container >div#post-237951.post-237951.post.hentry.category-monsters-ball.tag-internet-commenters.tag-monsters >div.entry.line_top"
    }, {
        url: "http://need4sheed.com/2010/10/more-need4sheed-fantasy-basketball-leagues.html",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#column_wrap >div#content.hfeed >div#post-7649.post-7649.post.type-post.hentry.category-fantasy-basketball.tag-detroit-pistons-links.tag-fantasy-basketball.tag-giveaway.tag-nba.tag-need4sheedcom.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.contemporist.com/2010/10/23/the-ruiz-maasburg-penthouse-by-hector-ruiz-velazquez/",
        selector: "html >body >div#main >div#body >div#content >div.post >div.post-content"
    }, {
        url: "http://blogs.discovermagazine.com/80beats/2010/10/22/spaceport-america-dedicates-its-runway-flights-could-begin-in-2011/",
        selector: "html >body >div#container >div#allContentNoBorder >div#mainContentNoBorder >div#mainContentInnerNoBorder >div.content"
    }, {
        url: "http://blogs.discovermagazine.com/notrocketscience/2010/10/22/new-languages-evolve-in-rapid-bursts/",
        selector: "html >body >div#container >div#allContentNoBorder >div#mainContentNoBorder >div#mainContentInnerNoBorder >div.content >div#post-2733.weblog-entry >div.entry"
    }, {
        url: "http://www.fabsugar.com/Lanvin-HM-11554099",
        selector: "html.anonymous.webkit.safari.win.js >body.fabsugar-site.p-node.p-node_11554099_.page-gallery.no_side.editorial-page >div#custom_bg >div#sugar-content-container >div.container.last.clear >div.span-23.last.river-no-side.prepend-1 >div#content-container >div#sugar-gallery.intro.preview >div#gallery-left >div#gallery-photo-carousel"
    }, {
        url: "http://blogs.dallasobserver.com/unfairpark/2010/10/the_art_of_art_conspiracy.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://justoneminute.typepad.com/main/2010/10/tom-friedman-failed-metaphors-and-self-refuting-analysis.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d83451b2aa69e20133f554c0d4970b.entry-author-tom_maguire.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://www.etsy.com/storque/spotlight/get-the-look-decor-no-bare-cupboards-here-10989/",
        selector: "html.js >body >div#content-wrapper >div#content >div.article"
    }, {
        url: "http://www.fearthesword.com/2010/10/25/1773976/time-for-your-best-guesstimates",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.autoweek.com/article/20101023/CARREVIEWS/101029960",
        selector: "html >body >div#content-wrap >div#content >div.row.first.no-border >div.col.twothirds >div.padding"
    }, {
        url: "http://hurryupharry.org/2010/10/24/mpacs-strange-claim-about-baroness-warsi/",
        selector: "html >body >div#wrap >div#content >div.post >div.contenttext"
    }, {
        url: "http://unrealitymag.com/index.php/2010/10/23/how-the-marines-fix-the-red-ring-of-death/",
        selector: "html >body >div#main >div#content >div#post-25909.post >div.entry"
    }, {
        url: "http://www.ihatethemedia.com/fox-news-anchor-babes-short-skirts-video-photo",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#column_wrap >div#content.hfeed >div#post-8057.post-8057.post.type-post.hentry.category-television.tag-alisyn-camerota.tag-anchor-babes.tag-courtney-friel.tag-e-d-hill.tag-kiran-chetry.tag-laurie-dhue.tag-page-hopkins.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.metsblog.com/2010/10/24/cafardo-rays-expected-to-shop-james-shields/",
        selector: "html >body.single.single-post.postid-71903.gecko >div#contain >div#wrapper >div#main.col-left >div#post-1.post.article >div.middle >div.entry"
    }, {
        url: "http://www.tax.com/taxcom/taxblog.nsf/Permalink/JTHE-8AGPRE",
        selector: "html >body >div#container >div#midcol >div.blogbody"
    }, {
        url: "http://www.overcomingbias.com/2010/10/pink-politics.html",
        selector: "html >body.wordpress.y2010.m10.d26.h04.single.postid-24657.s-y2010.s-m10.s-d24.s-h12.s-category-uncategorized.s-tag-charity.s-tag-hypocrisy.s-tag-mating.s-tag-medicine.s-tag-politics.s-author-robin-hanson >div#wrapper >div#main >div#container.clear >div#content.clear >div#post-24657.hentry.p1.post.publish.author-robin-hanson.category-uncategorized.tag-charity.tag-hypocrisy.tag-mating.tag-medicine.tag-politics.y2010.m10.d24.h12 >div.entry-content"
    }, {
        url: "http://www.freedom-to-tinker.com/blog/sjs/join-citp-dc-friday-emerging-threats-online-trust",
        selector: "html.js >body >div#container >div#mainContent >div.node >div.content"
    }, {
        url: "http://www.thedigeratilife.com/blog/free-dave-ramsey-starter-kit-ynab-software/",
        selector: "html.webkit.chrome.win >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-39597.post-39597.post.hentry.category-announcements.category-money-management.category-frugality.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.peninsulaismightier.com/2010/10/24/1771767/roster-poll-who-do-you-think-should-get-the-heats-final-roster-spot",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.denverstiffs.com/2010/10/23/1769694/the-denver-stiffs-nba-preview",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.peachtreehoops.com/2010/10/24/1770753/hawks-wrap-up-preseason-with-lackluster-99-66-loss-in-charlotte",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.loopinsight.com/2010/10/22/apple-passes-rim-in-global-smartphone-shipments/",
        selector: "html >body >div.container_16 >div.grid_11"
    }, {
        url: "http://androidandme.com/2010/10/news/first-pics-of-lgs-tegra-2-android-phone-for-verizons-4g-lte/",
        selector: "html >body >div.container >div.content >div.centercol >div.block.entry >div#post-32715"
    }, {
        url: "http://www.thereformedbroker.com/2010/10/24/ipod-turns-9-the-product-that-started-it-all/",
        selector: "html >body >div#wrapper >div#main.clearfix >div#mainContent >div#mainLeft >div.boxLeft"
    }, {
        url: "http://www.commonsensewithmoney.com/2010/10/amazon-5-dinner-mom-cookbook-for-5/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-28107.post-28107.post.type-post.hentry.category-amazon-deals.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://e360.yale.edu/digest/the_arctic_region_continues_to_warm_noaa_report_confirms/2654/",
        selector: "html >body >div#container >div#searchcontent.column"
    }, {
        url: "http://blogs.seattleweekly.com/dailyweekly/2010/10/dino_rossi_leads_the_nation_in_secret_donations_with_45m.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://www.brewhoop.com/2010/10/24/1771787/john-salmons-hoping-to-play-in-opener-cut-day-looms-for-skinner-and",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://ac360.blogs.cnn.com/2010/10/24/letters-to-the-president-643-moderates-in-moderation/",
        selector: "html >body >div >div#cnnAC360_contentHolder >div#cnnAC360_contentBody >div.cnn_post_left.cnn_blog_post_left >div.cnn_post_body.snap_preview >div"
    }, {
        url: "http://blogs.reuters.com/frontrow/2010/10/22/washington-extra-special-day/",
        selector: "html >body >div#content.post.postsingle >div.section.gridlined8 >div.sectionContent >div.sectionColumns >div.column1.gridPanel.grid8 >div#post-30937.module >div.moduleBody"
    }, {
        url: "http://blog.al.com/spotnews/2010/10/sparks_bentley_engage_in_heate.html#incart_mce",
        selector: "html.win.chrome.chrome8.webkit.webkit5 >body >div#MasterContainer >div#PageContent >div#MainColumn >div#ContentWellFull >div.full_entry.entry_text >div#article"
    }, {
        url: "http://newsroom.mtv.com/2010/10/24/kanye-west-runaway-film/",
        selector: "html >body >div#noFlash >div#container-outer >div#container >div#container-inner >div#wrap >div#wrap-inner >div#inner.group.abc-alt >div.group-ab >div.group-b >div#mid-col.group >div#permalink.mdl >div#posts >div#post-39038.mdl-clean.post >div.entry"
    }, {
        url: "http://conservativehome.blogs.com/thetorydiary/2010/10/ids-plans-a-citizens-pension-of-140-for-all.html",
        selector: "html#sixapart-standard >body.layout-three-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451b31c69e20134887278ff970c.entry-category-pensions_and_retirement.entry-category-welfare_reform.entry-author-conservativehome.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://newsblogs.chicagotribune.com/clout_st/2010/10/national-democrats-doubling-down-on-two-suburban-congressional-contests.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#navigation.clearfix >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d8341c60fd53ef0134887179ea970c.entry >div.entry-content"
    }, {
        url: "http://blogs.citypages.com/blotter/2010/10/favre_left_sterger.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://www.sonyinsider.com/2010/10/20/sony-remote-control-rm-kz1-just-for-kids/",
        selector: "html >body#interior.page-sony-remote-control-rm-kz1-just-for-kids >div#page >div.clearfloat.stripes >div#content >div#post-14791.post >div.clearfloat >div.entry.narrow.clearfloat.bigger"
    }, {
        url: "http://smallbiztrends.com/2010/10/%E2%80%9Cpull-marketing-secrets-the-fortune-100-use%E2%80%9D-will-help-you-pull-customers-in.html",
        selector: "html >body >div#main >div#content >div.content >div.info.single >div#post-54631.post >div.entry"
    }, {
        url: "http://www.popsugar.com/Pictures-Brad-PItt-Angelina-Jolie-Pax-Zahara-Vivienne-Knox-Budapest-11600062",
        selector: "html.anonymous.webkit.safari.win.js >body.popsugar-site.p-node.p-node_11600062_.page-text.has_side.editorial-page.has_carousel >div#custom_bg >div#sugar-content-container >div.container.last.clear >div.span-14.prepend-1.append-1 >div#content-container >div.post_and_ad_container >div#post_1.post.post_page.text.popsugar.popsugar >div.post-content"
    }, {
        url: "http://www.sundriesshack.com/2010/10/24/clearing-the-browser-tabs-sunday-sunday/",
        selector: "html >body >div#wrap >div#content >div.post-13844.post.type-post.hentry.category-links.tag-linky-love >div.entry.entry- >div.entrybody"
    }, {
        url: "http://legaltimes.typepad.com/blt/2010/10/dc-judges-clears-pom-wonderful-attorney-in-sanctions-inquiry.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d83451d94869e20134886593ee970c.entry-category-current_affairs.entry-category-dc_courts_and_government.entry-category-food_and_drink.entry-category-legal_business.entry-category-politics_and_government_.entry-author-mike_scarcella.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://socialitelife.com/helena-bonham-carter-plays-witches-and-queens-this-fall-10-2010",
        selector: "html >body.wordpress.y2010.m10.d25.h22.singular.slug-helena-bonham-carter-plays-witches-and-queens-this-fall.single.postid-5094971.s-y2010.s-m10.s-d23.s-h00.s-category-family.s-category-photos.s-category-red-carpet.s-category-tv-film.s-tag-family.s-tag-film.s-tag-harry-potter.s-tag-helena-bonham-carter.s-tag-red-carpet.s-tag-the-kings-speech.s-author-lola_robertson.s-comments-open.s-pings-closed.windows.chrome.ch8-0 >div#container.hfeed >div#main >div#container-content >div#content >div#related-posts"
    }, {
        url: "http://evilbeetgossip.film.com/2010/10/24/im-upset-about-mtvs-skins-and-you-should-be-too/",
        selector: "html >body >div#wrap >div#banner >div#content >div#post >div#postcontent >div#single-content"
    }, {
        url: "http://blogs.denverpost.com/fetch/2010/10/24/home-alone-why-some-dogs-go-on-a-rampage/1929/",
        selector: "html >body >div#wrapper >div#content >div.post >div.storycontent"
    }, {
        url: "http://theybf.com/2010/10/24/sunday-candids-christina-milian-eva-longoria-garcelle-beauvais-and-others",
        selector: "html.js >body.sidebar-right >div.container >div#main.story >div#node-11742.node.full.story >div.content"
    }, {
        url: "http://www.techeye.net/software/counterstrike-blamed-for-swedish-gunman-attacks",
        selector: "html >body >div#wrapper >div#page.clearfix >div#main-content >div.article >div#article-body.article-body"
    }, {
        url: "http://www.fastcompany.com/1697263/wikileaks-releases-iraq-war-archive",
        selector: "html.js >body.sidebar-right.no-border >div#sitewrapper >div#content >div#center >div#node-1697263.node.article >div.content"
    }, {
        url: "http://www.movieweb.com/news/NEij26NjH28okp",
        selector: "html >body >div#siteWrap >div#shL >div#shR >div#site >div#mainContent >div#colLB >div.container >div#newsStory.module"
    }, {
        url: "http://www.sportsagentblog.com/2010/10/22/shabbat-shalom-friday-wrap-up-10222010/",
        selector: "html >body >div#main >div.container >div#block_content >div#content_area.block >div.block_inside >div#single_block"
    }, {
        url: "http://www.challies.com/quotes/men-dont-follow-programs",
        selector: "html.js >body.not-front.not-logged-in.node-type-blog.one-sidebar.sidebar-right.page-quotes-men-dont-follow-programs.section-quotes >div#page >div#page-inner >div#main-outer >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#content-area >div#node-4779.node.node-type-blog >div.node-inner >div.content.clear-block"
    }, {
        url: "http://www.bornrich.org/entry/fabien-cacheux-unveils-limited-edition-elephant-automatic-timepiece/",
        selector: "html >body >div#container >div#content >div#content-box >div#perma-content-main >div.post-content"
    }, {
        url: "http://blog.aflcio.org/2010/10/24/mshas-tough-new-inspections-making-an-impact/",
        selector: "html >body >div#container >div#contentContainer >table >tbody >tr >td#left >div#content >div.blogEntry"
    }, {
        url: "http://ny.racked.com/archives/2010/10/23/weekend_shopping_report_56.php",
        selector: "html >body >div#wrapper >div#columns-wrapper >div#columns.container >div#column-main.column >div.column-content >div.context-individual"
    }, {
        url: "http://www.buzzmachine.com/2010/10/23/big-brothers-big-brother/",
        selector: "html >body >table[width=100%] >tbody >tr >td[width=100%] >table[width=930] >tbody >tr >td >div#page >div#content.widecolumn >div#post-6651.post-6651.post.hentry.category-default.tag-government.tag-publicness.tag-transparency >div.entry"
    }, {
        url: "http://www.econbrowser.com/archives/2010/10/richard_clarida.html",
        selector: "html >body >div#container >div.content >div#a001633more"
    }, {
        url: "http://www.welcometoloudcity.com/2010/10/22/1768437/pre-season-game-6-recap-oklahoma-city-101-new-orleans-86",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.newdeal20.org/2010/10/22/the-white-house-looks-beyond-mancession-24256/",
        selector: "html >body >div#page >div#main >div#content >div.entry"
    }, {
        url: "http://www.nwfdailynews.com/news/riding-34225-scooter-stolen.html",
        selector: "html >body >div#fi_wrapper >div#fi_innerWrapper >div#fi_content >div.fi_contentBlock.marginMidTop >div.fi_contentBlockInner >div#article.lingo_region >div.newstext.marginMidSide"
    }, {
        url: "http://www.canishoopus.com/2010/10/5/1732481/martell-webster-point-production-when-given-starter-minutes-in-09",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.detroitbadboys.com/2010/10/24/1771346/detroit-pistons-2010-11-preseason-review",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.infrastructurist.com/2010/10/22/new-report-shows-states-want-to-cut-infrastructure-spending/",
        selector: "html >body >div#wrapper.container >div#inLay.column.span-24 >div#left.column.span-13.first >div#post-13121.post >div.entry"
    }, {
        url: "http://www.thedesignblog.org/entry/moto-tessuto-electric-scooter-offers-ample-of-storage-space/",
        selector: "html >body >div#container >div#content >div#content-box >div#perma-content-main >div.post-content"
    }, {
        url: "http://www.everydayshouldbesaturday.com/2010/10/24/1771047/edsbs-the-magazine-vol-3-issue-8",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body >p"
    }, {
        url: "http://www.lifenews.com/2010/10/23/int-1668/",
        selector: "html >body >div#main >div#content >div.content-holder >div.blog >div.article"
    }, {
        url: "http://nicedeb.wordpress.com/2010/10/22/radical-in-chief-brands-republicans-as-radical-extremists-in-latest-stump-speech/",
        selector: "html >body.sidebars >div#wrapper >div#container.clear-block >div#center >div#squeeze >div.right-corner >div.left-corner >div.node >div.post-28509.post.type-post.hentry.category-commies.category-obamessiah >div.content"
    }, {
        url: "http://www.gearfuse.com/japanese-professor-builds-elaborate-humanoid-robot-for-killing-wasps/",
        selector: "html >body >div#container >div#main >div.post.single >div.content"
    }, {
        url: "http://sixrevisions.com/content-strategy/seo-for-bing-versus-google/",
        selector: "html >body >div#wrapper >div#inner >div#content"
    }, {
        url: "http://www.rufusonfire.com/2010/10/24/1771003/a-new-voice",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.doughroller.net/promo-codes/priceline-review-w-promo-codes-and-coupons/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#column_wrap >div#content.hfeed >div#post-20836.post-20836.post.type-post.hentry.category-promo-codes.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://fashionpulsedaily.com/2010/10/23/paris-fashion-week-spring-2011-valentino-yves-saint-laurent-balenciaga/",
        selector: "html >body#section-index >div#container >div#content >div#content-main >div#post-14172.post >div.entry"
    }, {
        url: "http://www.bagsnob.com/2010/10/last_day_for_20_off_at_saks.html",
        selector: "html#sixapart-standard >body#mt-blog.mt-entry-archive.layout-twt >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-6261.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://www.baseball-reference.com/blog/archives/8823",
        selector: "html >body#front >div#page_container >div#page_content >div#wrap >div#content >div#post-8823.postfull >div.entrytext"
    }, {
        url: "http://www.sramanamitra.com/2010/10/24/seed-capital-from-angel-investors-dave-whorton-founder-tugboat-ventures-part-4/",
        selector: "html >body >div#wrap >div#content >div.entry"
    }, {
        url: "http://www.kiwiblog.co.nz/2010/10/the_hobbit_rallies.html",
        selector: "html >body >div#page >div#content.widecolumn >div#post-47332.post >div.entry"
    }, {
        url: "http://riveraveblues.com/2010/10/open-thread-locker-clean-out-day-37383/",
        selector: "html >body >div#container.c960.center.wrap >div#content.w600- >div.post-37383.post.type-post.hentry.category-open-thread >div.posticle"
    }, {
        url: "http://www.hollyscoop.com/katy-perry/rihanna-a-no-show-to-katy-perrys-wedding_25514.aspx",
        selector: "html >body.body-default >div.body-main-div >div#BodyBG >div#BodyBGInner >form#Form1 >div.default-body-box >div.twothreesetup-left-box >div >div.post-body >div.post-bodytext-innerbox >div.post-bodytext-textbox >div"
    }, {
        url: "http://www.massively.com/2010/10/24/rumor-apb-buyout-apparently-nearing-the-light-at-the-end-of-th/",
        selector: "html >body.deuce >div#container >div#main.clearfix >div#col-1 >div#content >div#p19687334 >div.post >div.postbody"
    }, {
        url: "http://www.mobileburn.com/news.jsp",
        selector: "html.webkit.safari.win.js >body#page-rightnarrow >div#wrap-page.clearfix >div#page.clearfix.styled-text >div#wrap-main-columns.columns-3.clearfix >div#main-columns.clearfix >div#wrap-content-area.clearfix >div#content-area.inner-box.clearfix >div#wrap-fluid-content-holder.clearfix >div#fluid-content-holder.clearfix >div#wrap-content-center.outer-box.clearfix >div#content-center.inner-box.clearfix >div#story-content.inner-box.clearfix >div#KonaBody"
    }, {
        url: "http://well.blogs.nytimes.com/2010/10/22/serving-up-vegetables-with-eggs/",
        selector: "html >body.blogPost >div#shell >div#page >div#well.blog.wrap >div#aCol >div#content.hfeed >div#entry-37983.entry.hentry >div.entry-content"
    }, {
        url: "http://bats.blogs.nytimes.com/2010/10/24/a-girardi-footnote-why-was-the-infield-in/",
        selector: "html >body.blogPost >div#shell >div#page >div#bats.blog.wrap >div#aCol >div#content.hfeed >div#entry-37211.entry.hentry >div.entry-content"
    }, {
        url: "http://www.politicsdaily.com/2010/10/17/obamas-town-halls-target-young-voters-but-are-the-kids-tuned/",
        selector: "html >body >div#areaAllContent.container >div#areaRundown.container2 >div#areaLR.leftrail >div#articleStr.smallText >div.artCotents"
    }, {
        url: "http://voices.washingtonpost.com/thefix/afternoon-fix/afternoon-fix-biden-says-outsi.html",
        selector: "html >body >div#wrapperMain >div >div#wrapperMainCenter >div#wrapperInternalCenter >div#pagebody >div#pagebody-inner >div#article >div.blog_entry >div.content >div#entrytext"
    }, {
        url: "http://www.newsbusters.org/blogs/jeff-poor/2010/10/23/gutfeld%E2%80%99s-case-not-defund-npr-we-need-them-remind-us-what-subsidized-fail",
        selector: "html.js >body#genesis-2c.section-blogs.lightbox-processed >div#container.not-front.not-logged-in.node-type-blog.two-sidebars.page-node-42567 >div#columns >div.columns-inner.clear-block >div#content-column >div.content-inner >div#main-content.section.region >div#node-42567.node.node-promoted.node-blog >div#content-inner"
    }, {
        url: "http://blogs.reuters.com/mediafile/2010/10/22/hps-slate-tablet-the-early-reviews/",
        selector: "html >body >div#content.post.postsingle >div.section.gridlined8 >div.sectionContent >div.sectionColumns >div.column1.gridPanel.grid8 >div#post-22713.module >div.moduleBody >div >div#single.columnRight.grid8 >div#postcontent"
    }, {
        url: "http://ask.metafilter.com/168632/Has-anybody-had-their-dog-put-on-phenobarbital-for-seizures-on-an-as-needed-basis",
        selector: "html >body#body >div#page >div.copy"
    }, {
        url: "http://blogs.suntimes.com/ebert/2010/10/your_new_age_and_mine.html",
        selector: "html#sixapart-standard >body.mt-archive-listing.mt-entry-archive.layout-wtt >center >table[width=962] >tbody >tr >td[width=960] >table.STNG_container_border >tbody >tr >td.STNG_container >table[width=100%] >tbody >tr >td#box.contentarea >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-40003.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://blogs.discovermagazine.com/discoblog/2010/10/22/ncbi-rofl-accidental-condom-inhalation/",
        selector: "html >body >div#container >div#allContentNoBorder >div#mainContentNoBorder >div#mainContentInnerNoBorder >div.content >div#post-13089.weblog-entry >div.entry"
    }, {
        url: "http://cowboysblog.dallasnews.com/archives/2010/10/yet-another-example-of-how-cow.html",
        selector: "html#sixapart-standard >body.blog >center >div#sdmContainerPage >div#sdmContentContainer >div#sdmContainer >div#blogContainerTop >div#blog-body >div.hot-entry"
    }, {
        url: "http://weblogs.baltimoresun.com/sports/ravens/blog/2010/10/mcgahee_challenged_ereed.html",
        selector: "html >body >div#container >div#branding.thirdParty >div#content >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-268486.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.longwarjournal.org/archives/2010/10/suicide_assault_team_4.php",
        selector: "html >body >div >table[width=980] >tbody >tr >td[width=573] >div#content >div#entry-31081.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.ropeofsilicon.com/article/refugee-quaid",
        selector: "html >body >div.page_wrap >div#wrap-outer >div#wrap-inner >div.page_body >div#entry >div.entrybody >div.post"
    }, {
        url: "http://www.giantbomb.com/qotw-102410/17-3411/",
        selector: "html >body#bomb >div#over_skin >div#content-wrap.fixed-video >div#grid-wrap.video >div#twocol >div#section >div.section-bd >div#tabcontent-vid_featured >div.content-pod.video-player.js-init-complete >div.bd >div.player-wrapper >div#8497.player"
    }, {
        url: "http://espn.go.com/blog/nfcwest/post/_/id/26079/nothing-ugly-about-first-place-for-seahawks",
        selector: "html.js >body.nfl.tier3.blog >div.bg-elements >div#subheader >div#content-wrapper >div#content.container >div.span-4 >div.mod-container.mod-blog-post >div.post-wrapper >div.mod-content"
    }, {
        url: "http://espn.go.com/blog/nflnation/post/_/id/30276/nothing-ugly-about-first-place-for-seahawks",
        selector: "html.js >body.nfl.tier3.blog >div.bg-elements >div#subheader >div#content-wrapper >div#content.container >div.span-4 >div.mod-container.mod-blog-post >div.post-wrapper >div.mod-content"
    }, {
        url: "http://espn.go.com/blog/nfcnorth/post/_/id/18431/rapid-reaction-packers-28-vikings-24",
        selector: "html.js >body.nfl.tier3.blog >div.bg-elements >div#subheader >div#content-wrapper >div#content.container >div.span-4 >div.mod-container.mod-blog-post >div.post-wrapper >div.mod-content"
    }, {
        url: "http://espn.go.com/blog/afcsouth/post/_/id/16953/breaking-out-britt-should-alter-titans",
        selector: "html.js >body.nfl.tier3.blog >div.bg-elements >div#subheader >div#content-wrapper >div#content.container >div.span-4 >div.mod-container.mod-blog-post >div.post-wrapper >div.mod-content"
    }, {
        url: "http://creditwritedowns.com/2010/10/graph-of-the-day-annual-rmb-export-growth-vs-rmb-usd-appreciation.html",
        selector: "html >body >div#menu >div#content-wrap >div#content >div#middle >div.post >div.snap_shot >div.KonaBody"
    }, {
        url: "http://dashes.com/anil/2010/10/your-twitter-ranking-article-is-wrong.html",
        selector: "html#sixapart-standard >body#pico.mt-entry-archive.layout-w-b >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-7328.entry-asset.asset >div.asset-content"
    }, {
        url: "http://greatergreaterwashington.org/post.cgi",
        selector: "html >body >div#main_container >div#left_container >div#main_content >div#post-7793.blogpost"
    }, {
        url: "http://paidcontent.co.uk/article/419-mobile-entertainment-trade-mag-shuts-print-edition/",
        selector: "html >body.uk.article >div#main_content_box >div#left_column >div#entry_189480.entry"
    }, {
        url: "http://paidcontent.co.uk/article/419-murdoch-wakes-up-from-dream-of-leading-news-industrys-digital-aggregati/",
        selector: "html >body.uk.article >div#main_content_box >div#left_column >div#entry_189478.entry"
    }, {
        url: "http://bitsandpieces.us/2010/10/24/sunday-caption-contest-5/",
        selector: "html >body.single.single-post.postid-10567 >div#wrapper >div#container >table#layout >tbody >tr#bodyrow >td#middle >div >div#post-10567.post-10567.post.type-post.hentry.category-animals.category-funny >div.post-bodycopy.clearfix >p"
    }, {
        url: "http://news.bigdownload.com/2010/10/24/blizzcon-2010-round-ups-at-wow-insider-and-joystiq/",
        selector: "html >body >div.grid-full.blog >div#content >div#p19686973 >div.full-post >div.post"
    }, {
        url: "http://www.nbamate.com/2010/10/24/jims-decision-the-bucks-make-their-case/",
        selector: "html >body >div#wrap >div#content >div.leftcolumn >div#3808.article >div.postcontent"
    }, {
        url: "http://spectrum.ieee.org/energywise/energy/the-smarter-grid/significant-broadband-over-powerline-standard-is-approved",
        selector: "html >body.pageBody >div#boxcontain >div#container >div#artclContent >div#artclLft >div#artBody >div.articleBody"
    }, {
        url: "http://www.ihatethemedia.com/levi-johnston-for-mayor-of-wasilla-newspaper-ad",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#column_wrap >div#content.hfeed >div#post-43377.post-43377.post.type-post.hentry.category-favorites.category-misc.tag-ad.tag-levi-johnston.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.allamericanblogger.com/12638/dem-says-you-can-choose-education-or-end-of-life-care-but-not-both/",
        selector: "html >body.single.single-post.postid-12638 >div#main_wrapper >div#main >table#columns >tbody >tr >td#cont_cell >div#container >div#content >div#post-12638.post-12638.post.type-post.hentry.category-the-blog.tag-2010-elections.tag-death-panel.tag-democrats.tag-obamacare >div.entry-content"
    }, {
        url: "http://www.care2.com/greenliving/the-best-time-to-buy-almost-everything.html",
        selector: "html >body.sIFR-active >div#care2_wrapper.care2_header_type_full.bucketpage-greenliving >div#care2_main_container.contain_floats >div#solutionsPage.greenliving_wrapper >div#index_middle_column >div.daily_stories >div#post-1041234.main_story >div#GlStoryContainer.story_wrapper"
    }, {
        url: "http://www.gizmodo.com.au/2010/10/kanye-west-turns-on-all-caps-because-hes-lazy/",
        selector: "html >body >div#wrapper >div#body >div#content >div#post-424063.post >div.copy"
    }, {
        url: "http://www.iphonedownloadblog.com/2010/10/24/how-to-change-your-iphone-app-icons-without-jailbreaking/",
        selector: "html >body >div#page >div#wrapper.container_24 >div#single_wrap.grid_16 >div#content.single_white_round >div#post-87028.post-87028.post.type-post.hentry.category-iphone-news.tag-app-store.tag-apple.tag-ios.tag-jailbreak.tag-mac-osx.tag-retina-display.tag-tutorial.tag-twitter.tag-usb >div.entry"
    }, {
        url: "http://www.tampabay.com/blogs/the-buzz-florida-politics/content/stark-policy-differences-separate-pam-bondi-and-dan-gelber",
        selector: "html.js >body.not-front.not-logged-in.node-type-blog.no-sidebars.page-content-stark-policy-differences-separate-pam-bondi-and-dan-gelber.section-content >div#page >div#page-inner >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#content-area >div#blog.panel-flexible.panel-flexible-75.clear-block >div.panel-flexible-inside.panel-flexible-75-inside >div.panel-flexible-75-middle >div.panels-flexible-column.panels-flexible-column-75-main.panels-flexible-column-first >div.inside.panels-flexible-column-inside.panels-flexible-column-75-main-inside.panels-flexible-column-inside-first >div.panels-flexible-column-75-main-middle >div.panels-flexible-row.panels-flexible-row-75-main-row.clear-block >div.inside.panels-flexible-row-inside.panels-flexible-row-75-main-row-inside.clear-block >div.panels-flexible-row-75-main-row-middle >div.panels-flexible-region.panels-flexible-region-75-center.panels-flexible-region-first.panels-flexible-region-last >div.inside.panels-flexible-region-inside.panels-flexible-region-75-center-inside.panels-flexible-region-inside-first.panels-flexible-region-inside-last >div.panel-pane.pane-views.pane-blog-post >div.pane-content >div.view.view-blog-post.view-id-blog_post.view-display-id-default.view-dom-id-1 >div.view-content >div.views-row.views-row-1.views-row-odd.views-row-first.views-row-last >div#node-102776.node >div.content.clear-block"
    }, {
        url: "http://www.autosport.com/news/report.php/id/87737",
        selector: "html >body >div#page >div#contentWrap >table[width=939] >tbody >tr >td >table[width=100%] >tbody >tr >td.content >table.news_minor >tbody >tr >td.content"
    }, {
        url: "http://www.foodpolitics.com/2010/10/lunch-line-redesign/",
        selector: "html >body >div#container >div#content >div#main >div.post.single >div.postright >div.content"
    }, {
        url: "http://www.hardballtimes.com/main/fantasy/article/announcing-the-tht-compete-against-the-experts-league/",
        selector: "html >body >table >tbody >tr >td#centfillcoltab"
    }, {
        url: "http://www.baseballprospectus.com/article.php",
        selector: "html >body >table#content >tbody >tr >td.outline.contentPad >div.article"
    }, {
        url: "http://chicagobreakingbusiness.com/2010/10/regulators-seize-maywood-bank.html",
        selector: "html >body >div#page >div#wrapper.container_12 >div#post-page >div#content.grid_8 >div#post-17879.post-17879.post.hentry.category-bank-failures.category-banking.tag-bank-seizure.tag-first-suburban-nation.tag-illinois-banks.tag-seaway-bank-and-trust"
    }, {
        url: "http://www.michaelgeist.ca/content/view/5381/159/",
        selector: "html >body >div#wrapper >div#centrecontent >div#innercenter >table.contentpaneopen >tbody >tr >td"
    }, {
        url: "http://slamxhype.com/fashion/wings-horns-fallwinter-2010-collection-3/",
        selector: "html >body >div#maincontainer >div#leftcontainer >div#articlebox >div.content"
    }, {
        url: "http://www.minyanville.com/businessmarkets/articles/trading-radar-trading-radar-economic-reports/10/22/2010/id/30731",
        selector: "html >body >div#outer-container >div.shadow >div#content-container >div#article-left >div#article-content >div#article-body.article_text_body"
    }, {
        url: "http://flowingdata.com/2010/09/22/europe-geographically-stereotyped/",
        selector: "html >body >div#main-wrapper >div#content-wrapper >div#post-.post >div#content >div.entry >div.entry-content"
    }, {
        url: "http://confederateyankee.mu.nu/archives/307239.php",
        selector: "html >body >div#content >div.blog >div.blogbody"
    }, {
        url: "http://design-milk.com/a-modern-hen-house-in-portland/",
        selector: "html >body >div#page >div#wrapper >div#content >div#post-48028.post >div.entry"
    }, {
        url: "http://thefreebieblogger.com/giveaways-91/",
        selector: "html >body >div#frame >div#middle >div#content >div#post-49552.post >div.entry"
    }, {
        url: "http://www.twolvesblog.com/201010233127/minnesota-timberwolves/daily-news/frodo-is-clutch.html",
        selector: "html >body#ff-helvetica.f-default.overlay-gradient1.latch >div#page-bg >div#mainbody.wrapper >div#main-shadow >div#main-shadow2 >div.side-shadow1 >div.side-shadow2 >div#main-content >div#main-content2 >table.mainbody >tbody >tr >td.maincol >div#maincol1 >div#maincol2 >div.padding >div#content-padding >table.contentpaneopen >tbody >tr >td"
    }, {
        url: "http://planetsave.com/2010/10/24/avatar-and-30-rock-among-2010-environmental-media-award-winners/",
        selector: "html >body >div#container >div#page >div#content-wrapper >div#content-box.sidebars-both >div.entry >div.format_text.entry_content"
    }, {
        url: "http://www.washingtoncitypaper.com/blogs/citydesk/2010/10/22/the-districts-homophobic-bullies/",
        selector: "html >body.page_home >div#content_container >div#content.single >div#post-63592.post >div.entry"
    }, {
        url: "http://fashionablygeek.com/approved-products/the-best-of-fashionably-geek-october-18th-24th-2010/",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#content.hfeed >div#post-19175.post-19175.post.type-post.hentry.category-approved-products.tag-fashionably-geek-products.tag-roundups.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.shockya.com/news/2010/10/24/the-latest-tron-legacy-tv-spot/",
        selector: "html >body >div#page >div#post-35937.post >div.entrytext"
    }, {
        url: "http://www.re-nest.com/re-nest/from-renest/renest-is-looking-for-new-contributors-130473",
        selector: "html >body.re-nest.re-nest.postpage >div.Page >div.ContentContainer >div.PrimaryContainer >div.Primary >div.entry.first"
    }, {
        url: "http://www.blogstorm.co.uk/stars-on-adwords-seller-ratings-hits-the-uk/",
        selector: "html.cufon-active.cufon-ready >body.custom >div#page.clearfix >div.container >div#maincontent >div.post_box.hentry.top >div.format_text.entry-content"
    }, {
        url: "http://weburbanist.com/2010/10/23/spicy-fleshy-wonderland-installation-by-ernesto-neto/",
        selector: "html >body >div#wrapperRounded >div#wrapperRoundedMiddle >div#wrapperContent >div#wrapperMain >div.post"
    }, {
        url: "http://smartblogs.com/socialmedia/2010/10/22/best-doctors-president-social-media-offers-many-benefits-to-health-care-firms/",
        selector: "html >body >div#container >div#wrap.clearfix >div#content.clearfix.wide >div#post-12945.post.clearfix >div.entry.clearfix"
    }, {
        url: "http://blog.iso50.com/surf/point-concept/",
        selector: "html.cufon-active.cufon-ready >body.single.single-post.postid-21126 >div#container >div#content.clearfix >div#content_one >article#post-21126.post-21126.post.type-post.hentry.category-surf"
    }, {
        url: "http://www.blogherald.com/2010/10/24/facebook-now-protects-you-from-photos-of-your-ex/",
        selector: "html >body >div#site >div#wrap >div#actual >div#content.widecolumn.left >div#post-18630.post.single >div.entry"
    }, {
        url: "http://gothamschools.org/2010/10/22/remainders-what-bill-gates-learned-from-home-schooling/",
        selector: "html >body >div#container.selfclear >div.content >div#page.single >div.news-entry >div.entry-main"
    }, {
        url: "http://sweetness-light.com/archive/insiders-wikileaks-too-obsessed-with-us",
        selector: "html >body >font >div#main >div#post-22045.post >div.entry"
    }, {
        url: "http://www.image-acquire.com/zenfolio-forges-an-alliance-with-shootdotedit/",
        selector: "html >body >div#page >div#wrapper >div#content >div#post-24901.post >div.entrytext"
    }, {
        url: "http://www.nerdcore.de/wp/2010/10/23/the-walking-dead-s01e01-%E2%80%93-frame-by-frame/",
        selector: "html >body >div#wrap >div#maincontent >div.post-41787.post.type-post.hentry.category-hollywood-hills.tag-comics.tag-movies.tag-series.tag-walkingdead.tag-zombies.single >div.entry-content"
    }, {
        url: "http://bumpshack.com/2010/10/24/zach-galifianakis-is-swimsuit-sexy-for-vanity-fair-photos/",
        selector: "html >body#home.log >div#topad >div#wrap >div#contentwrap >div.entry >div.entrybody"
    }, {
        url: "http://www.lostateminor.com/2010/10/25/marcus-westbury-is-renewing-australia/",
        selector: "html >body >div#contain >div#content.dynabg >div.content-main >div.col.half.column-1 >div.postpanel"
    }, {
        url: "http://orgjunkie.com/2010/10/pleated-poppy-giveaway.html",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#content.hfeed >div#post-9837.post-9837.post.type-post.hentry.category-giveaways.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.seomoz.org/blog/2-actionable-seo-metrics-youre-probably-missing",
        selector: "html >body#p-blog-2-actionable-seo-metrics-youre-probably-missing >div#page_container >div#content.span-24.last >div#blogC >div#blog_contentC.clearfix.view >div#left_blog_col.prepend-1.span-16 >div#blog_entryC.clearfix >div#post_body"
    }, {
        url: "http://www.quickanded.com/2010/10/charles-murrays-weird-anti-elitism.html",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-15305.post-15305.post.hentry.category-uncategorized.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.datacenterknowledge.com/archives/2010/10/23/what-to-read-at-dck-week-of-october-23/",
        selector: "html >body >div#main >div#container >div.content >div.main-column >ul.post-list >li"
    }, {
        url: "http://www.kevinmd.com/blog/2010/10/physicians-digital-resume.html",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-48408.post-48408.post.type-post.hentry.category-physician-practice.tag-social-media.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.goodasyou.org/good_as_you/2010/10/elsewhere-on-this-sat-night-a-grown-man-is-doing-this-to-a-gay-persons-wedding-photo.html",
        selector: "html >body >div#container >div#pagebody >div#pagebody-inner >div#center >div.content"
    }, {
        url: "http://androinica.com/2010/10/24/android-apps-alert-38-more-media-and-move-miles-edition/",
        selector: "html >body#bp-default.single.postid-18863 >div#wrapper >div#container >div#content >div.padder >div#blog-single.page >div#post-18863.post >div.post-content >div.entry"
    }, {
        url: "http://secondcitystyle.typepad.com/second_city_style/2010/10/blog-therapy-fridays-weekly-round-up-from-around-the-web-3.html",
        selector: "html#sixapart-standard >body.layout-three-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451595d69e20133f545cb43970b.entry-category-blog_therapy_fridays.entry-author-lauren_dimet_waters.entry-type-post.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.geardiary.com/2010/10/24/eenie-meenie-miny-moe-macbook-airs-but-which-way-to-go/",
        selector: "html >body >div#page >div#columns >div.col1 >div#post-114776.post-alt.blog >div.entry"
    }, {
        url: "http://www.bookofjoe.com/2010/10/the-best-anchovy-pizza-delivered-in-charlottesville-is.html",
        selector: "html >body >div#container >div#center >div.content"
    }, {
        url: "http://www.tedstake.com/2010/10/24/a-global-game/",
        selector: "html >body >div#container >div#main >div#content >div#post-10342.post.hentry.category-basketball.tag-kevin-seraphin.tag-nba.tag-ted-leonsis.tag-teds-take.tag-washington-wizards >div.entry"
    }, {
        url: "http://londonist.com/2010/10/weekend_round-up_86.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.londonist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436443.entry-asset.asset.hentry >div.asset-content.entry-content >div.asset-body"
    }, {
        url: "http://blogs.bettor.com/Emmanuel-Adebayor-wants-to-stays-at-Manchester-City-a36252",
        selector: "html >body >form#form1 >div#main-wrapper >div#contents >div#contents-left >div.box.brb-gray.pb10 >div.blog-content"
    }, {
        url: "http://www.mondaynote.com/2010/10/24/expanding-into-new-territories/",
        selector: "html >body.wordpress.y2010.m10.d26.h10.single.postid-3205.s-y2010.s-m10.s-d24.s-h23.s-category-advertising.s-category-newspapers.s-category-online-publishing.s-author-ffilloux >div#wrapper.hfeed >div#container >div#content >div#post-3205.hentry.p1.post.publish.author-frederic-filloux.category-advertising.category-newspapers.category-online-publishing.untagged.y2010.m10.d24.h23 >div.entry-content"
    }, {
        url: "http://blog.ted.com/2010/10/22/fellows-friday-with-peace-anyiam-osigwe/",
        selector: "html >body#pagetype >div#container >div#body.viewTemplate.viewTalks >div.wrap >div#maincontent.clearfix >div.mediacontainer >div.blog-post >div.blog-entry"
    }, {
        url: "http://wizbangblog.com/content/2010/10/25/weekend-caption-contest-winners-144.php",
        selector: "html#sixapart-standard >body.mt-archive-listing.mt-entry-archive.layout-wtt >div#container >div#container-inner >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-40456.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.thedieline.com/blog/2010/10/22/vintage-packaging-transistor-radios-part-i.html",
        selector: "html >body#modulePage7391668.objectId9195331 >div#canvasWrapper >div#canvas >div#pageBodyWrapper >div#pageBody >div#contentWrapper >div#content >div.single-journal-entry-wrapper >div.journal-entry-wrapper.post-text.authored-by-megancummins.category-features-vintage-packaging.category-industry-technology.category-substrate-paper-paperboard-cardboard >div#item9195331.journal-entry >div.journal-entry-text >div.body"
    }, {
        url: "http://www.publiusforum.com/2010/10/24/after-saying-hes-crazy-anthony-weiner-now-supports-alan-grayson/",
        selector: "html >body >div#wrap >div#content >div#contentleft >div#contentbody"
    }, {
        url: "http://www.celebritybabyscoop.com/2010/10/24/the-jolie-pitt-budapest-babes",
        selector: "html.js >body#public.not-front.not-logged-in.page-node.node-type-story.one-sidebar.sidebar-right >div#container >div#center >div#content >div#squeeze >div.node >div.content"
    }, {
        url: "http://searchenginewatch.com/3641482",
        selector: "html >body >div#wrapper >div#wrapper-2 >div#inner >div#lower2 >div#main >div#centre_right_NEW >div#centre_content >div#article"
    }, {
        url: "http://celebslam.celebuzz.com/2010/10/christina-aguilera-messy-divor.php",
        selector: "html#sixapart-standard >body.mt-archive-listing.mt-entry-archive.layout-wt >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-115732.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://news.lalate.com/2010/10/24/steve-phelps-nascar-undercover-boss-almost-exposed-by-roger-penske/",
        selector: "html >body >div#container >div#content >div.entry_firstpost >div.latest_firstpost >div.main"
    }, {
        url: "http://www.hypebot.com/hypebot/2010/10/making-music-cheaper-than-coffee-wont-devalue-it.html",
        selector: "html#sixapart-standard >body.layout-three-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451b36c69e201348859a66c970c.entry-category-music.entry-author-kyle_bylin.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://www.musicthinktank.com/blog/the-real-and-only-reasons-why-fans-file-share-music.html",
        selector: "html >body#modulePage2035857.objectId9245380 >div#canvasWrapper >div#canvas >div#pageBodyWrapper >div#pageBody >div#contentWrapper >div#content >div.single-journal-entry-wrapper >div.journal-entry-wrapper.post-text.authored-by-kbylin29 >div#item9245380.journal-entry >div.journal-entry-text >div.body >div"
    }, {
        url: "http://siu.blogs.cnn.com/2010/10/01/inside-right-on-the-edge/",
        selector: "html >body >div#cnnContainer >div#cnnMainContent.cnnOldContentCenter >div.cnnWCBox >div.cnnWCBoxContent >div.cnnOldContentContainer >table[width=984] >tbody >tr >td[width=621] >div#cnnBlogContentArea >div.cnnBlogContentPost"
    }, {
        url: "http://parenting.blogs.nytimes.com/2010/10/22/when-a-child-moves-to-nepal/",
        selector: "html >body.blogPost >div#shell >div#page >div#parenting.blog.wrap >div#aCol >div#content.hfeed >div#entry-16191.entry.hentry >div.entry-content"
    }, {
        url: "http://goldderby.latimes.com/awards_goldderby/2010/10/oscar-nominated-writer-director-paul-mazursky-is-this-years-recipient-of-the-los-angeles-film-critics-assns-career-achieveme.html",
        selector: "html >body >div#container >div#section >div#topLeftWide >div#content >div#entry-6a00d8341c2c4f53ef0134887131f3970c.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://shelf-life.ew.com/2010/10/22/connelly-the-reversal-shelf-life/",
        selector: "html >body#shelflife.single.single-post.postid-5800.booksChannel >div#container.sub >div#content.clear >div#maincol >div#maincolInner >div#post-5800.post-5800.post.type-post.hentry.category-books-channels.category-hieronymous-bosch.category-michael-connelly.category-shelf-life-book-club.category-the-reversal >div.postRight >div.storycontent"
    }, {
        url: "http://www.wired.com/gamelife/2010/10/game-for-windows-live/",
        selector: "html >body >div#adSkinLayer1 >div#shell >div#page >div#content.permalink >div#post-30263.post >div.entry"
    }, {
        url: "http://blogs.discovermagazine.com/gnxp/2010/10/a-relationship-in-attitudes-toward-global-warming-evolution/",
        selector: "html >body >div#container >div#allContentNoBorder >div#mainContentNoBorder >div#mainContentInnerNoBorder >div.content >div#post-7403.weblog-entry >div.entry"
    }, {
        url: "http://afpak.foreignpolicy.com/posts/2010/10/22/pakistan_after_the_floods",
        selector: "html.js >body >div#wrapper >div#theatre >div#content-lz >div#blog-well >div#blog-post-1.blog_entry.full_post >div.blog_body"
    }, {
        url: "http://conservativehome.blogs.com/centreright/2010/10/new-eu-treaty-what-should-we-seek-to-renegotiate.html",
        selector: "html#sixapart-standard >body.layout-three-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451b31c69e201348870a38f970c.entry-category-melanchthon.entry-author-melanchthon.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://blogs.villagevoice.com/forkintheroad/2010/10/10_wild_and_cra.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://espn.go.com/blog/afceast/post/_/id/20570/a-statistical-look-at-buffalos-big-outburst",
        selector: "html.js >body.nfl.tier3.blog >div.bg-elements >div#subheader >div#content-wrapper >div#content.container >div.span-4 >div.mod-container.mod-blog-post >div.post-wrapper >div.mod-content"
    }, {
        url: "http://www.freesnatcher.com/save-up-to-50-at-macys/",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#content.hfeed >div#post-35946.post-35946.post.hentry.category-deals.tag-free.tag-free-product-samples.tag-free-sample.tag-free-samples.tag-free-stuff.tag-freebies.tag-macys.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://ma.tt/2010/09/wordpress-trademark/",
        selector: "html.wf-sovba1sovba2-n7-active.wf-sovba1sovba2-i7-active.wf-ffmetawebpro1ffmetawebpro2-n4-active.wf-ffmetawebpro1ffmetawebpro2-i4-active.wf-ffmetawebpro1ffmetawebpro2-n7-active.wf-ffmetawebpro1ffmetawebpro2-i7-active.wf-salsbury1salsbury2-n4-active.wf-active >body.single.single-post.postid-35726 >div#container >section >article.main >div.post-35726.post.type-post.hentry.category-automattic.category-essays.category-open-source.category-wordpress.tag-trademark.tag-wordpress-foundation.entry-content"
    }, {
        url: "http://www.thehiphopchronicle.com/2010/10/25/swizz-beatz-dj-play-the-beat-ft-estelle/",
        selector: "html >body.inner >div#page.with-sidebar >div#header-wrap >div#main-wrap1 >div#main-wrap2 >div#main.block-content >div.mask-main.rightdiv >div.mask-left >div.col1 >div#main-content >div#post-19701.post-19701.post.type-post.hentry.category-music >div.post-content.clearfix >p"
    }, {
        url: "http://www.themonkeycage.org/2010/10/the_gender_gap.html",
        selector: "html#sixapart-standard >body.layout-one-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-7957.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://agentbedhead.com/index.php/archive/tasty-waves-and-hard-to-believe-bud/",
        selector: "html >body >div#container >div#wrapper >div#wrapper-inner >div#alpha >div#alpha-inner >div#post-9428.blog >div.text"
    }, {
        url: "http://www.catholicnewsagency.com/news/focus-missionaries-reaching-out-to-texas-state-students/",
        selector: "html >body >div#wrapper >div#main >table[width=100%] >tbody >tr >td >div#columnContent >div#seccion_principal"
    }, {
        url: "http://toucharcade.com/2010/10/24/we-bowl-from-freeverse-lands-in-canada-elsewhere-soon/",
        selector: "html >body >div#container >div#page >div#content.narrowcolumn >div#post-52199.post >div.entry"
    }, {
        url: "http://www.stoptheaclu.com/2010/10/24/former-acorn-worker-justifies-preventing-pledge-of-allegiance-at-illinois-candidate-debate/",
        selector: "html >body >div#container >div#wrapper >div#main"
    }, {
        url: "http://www.holytaco.com/25-terrible-costumes-dudes",
        selector: "html.js.win.chrome.chrome8.webkit.webkit5 >body >div#main-container >div#header-container >div#header-bg >div.wrapper >div#columns-container >div#column-left >div.teaser.blog-teaser.category-another >div.blog_content"
    }, {
        url: "http://www.environmentalleader.com/2010/10/22/schneider-consolidates-u-s-data-centers/",
        selector: "html >body >div#frame >div#content >div#copy >div#copy-content >div#story-copy"
    }, {
        url: "http://www.goal.com/en/news/462/netherlands/2010/10/25/2182142/ajax-playmaker-nicolas-lodeiro-sidelined-for-around-two",
        selector: "html >body.dir-ltr.lang-en >div#main >div#leftModules >div#article_page_wrapper >div#article_content.KonaBody"
    }, {
        url: "http://www.briansolis.com/2010/10/revolution-episode-6-philip-kaplan-on-social-commerce-and-influence/",
        selector: "html >body >div#page >div#content >div.content-m >div.content-t >div.content-b >div.primary-content >div.post"
    }, {
        url: "http://37signals.com/svn/posts/2623-how-do-you-keep-up-interest-in-a-programming-project",
        selector: "html >body.perma >div#Container >div#Content >div#article_2623.post"
    }, {
        url: "http://www.bittenandbound.com/2010/10/24/dishing-with-danni-starr-hot-celebrity-gossip-video-october-24-2010/",
        selector: "html >body >div#container >div#page >div.wide_column_bottom >div.wide_column_top >table >tbody >tr >td >div.narrow_column >div#post-97806.post >div.entry"
    }, {
        url: "http://catholicexchange.com/2010/10/24/139589/",
        selector: "html >body >div#ce_wrapper >div#ce_main >div#ce_maincontent >div#left >div#post-139589.post-alt.blog >div.entry"
    }, {
        url: "http://www.worldcarfans.com/210102429173/2010-korean-grand-prix-grid-girls",
        selector: "html >body >div#maincontainer >div >div#content >div >div#slideshowcontainer >div"
    }, {
        url: "http://www.shoppingblog.com/blog/10251033",
        selector: "html >body >center >table[width=960] >tbody >tr >td[width=610] >table[width=99%] >tbody >tr >td >table[width=100%] >tbody >tr >td"
    }, {
        url: "http://neonlimelight.com/2010/10/24/video-kings-of-leon-perform-radioactive-and-pyro-on-saturday-night-live/",
        selector: "html >body.single.single-post.postid-24053.header-image.content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-24053.post.type-post.hentry.category-live.category-tvradio-goodness.tag-kings-of-leon >div.entry-content"
    }, {
        url: "http://www.gtspirit.com/2010/10/24/car-crash-orange-underground-racing-gallardo-superleggera/",
        selector: "html >body >div.full-wrap.clearFix >div#page-wrap >div#main-wrap >div#content-wrap >div.post >div#post-28062.post"
    }, {
        url: "http://sandrarose.com/2010/10/kim-kardashian-gets-angry-phone-call-from-reggie-bush/",
        selector: "html >body >div#wrap >div#content >div#contentleft >div.hpmain >div.hpblock"
    }, {
        url: "http://www.stylebakery.com/online_sample_sales/2010/10/the-ultimate-guide-to-the.html",
        selector: "html#sixapart-standard >body#mt-blog.mt-entry-archive.layout-wm >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-22932.entry-asset.asset.hentry >div.asset-content.entry-content >div.asset-body"
    }, {
        url: "http://www.sfsignal.com/archives/2010/10/sf-tidbits-for-102610/",
        selector: "html >body >div.pageMetaContainer >div#pageContainer >div#contentcenter-archive >div.postBody"
    }, {
        url: "http://www.thefinancialblogger.com/financial-ramblings-101/",
        selector: "html >body >div.wrapper >div.min-width >div.maincontent_wrap >div.maincontent_wrap2 >div.main_content >div.submain_content >div.left_col_wrap >div.left_col_subwrap >div.con_top2 >div.con_bot >div.con_left >div.con_right >div.con_ltop2 >div.con_rtop2 >div.con_lbot >div.con_rbot"
    }, {
        url: "http://wealthpilgrim.com/friday-pilgrim-posts-on-parade/",
        selector: "html >body >div#wrap >div#page.clearfix >div#contentleft >div#content >div#post-16427.post >div.entry"
    }, {
        url: "http://www.clusterflock.org/2010/10/american-heartland.html",
        selector: "html >body >div#wrapper >div#container >div#main-content"
    }, {
        url: "http://knsfinancial.com/help-find-a-cure-for-juvenile-diabetes/",
        selector: "html.ext-strict >body.custom.ext-webkit.ext-chrome >div#container >div#page >div#content_box >div#column_wrap >div#content.hfeed >div#post-2575.post-2575.post.hentry.category-non-profit.tag-charity.tag-donations.tag-taxes.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.getrichslowly.org/blog/2010/10/24/reader-story-how-i-persevered-and-killed-my-credit-card-debt/",
        selector: "html >body >div#rap >div#main >div#content >div.post >div.post-content"
    }, {
        url: "http://www.dailystab.com/celine-dion-welcomes-twin-boys/",
        selector: "html >body >div#page >div#wrap >div#content >div#contentleft >div.postarea"
    }, {
        url: "http://www.zacktaylor.ca/blog/2010/10/justin-bieber-is-not-designing-his-own-nail-polish-line.html",
        selector: "html#sixapart-standard >body.layout-three-column >div >div#body.float >div.float >div#container >div.float >div#middlecontant >div#middlemain.float >div#middlemid.mrgtop8 >div.float.middle >div.float.mrgtop7 >div >div.float.mrgtop8 >div#entry-6a00e54edfa92d88330133f54eb623970b.entry-category-misc.entry-author-zack_taylor.entry-type-post.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.afterellen.com/tv/news/2010/10/skins-usa-releases-another-trailer",
        selector: "html.js >body.node.node-type-content_article >div#container >div#content >div#maincontent.wRight >div.postings >div.node >div.content"
    }, {
        url: "http://www.billshrink.com/blog/10236/trendy-halloween-costumes/",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#content.hfeed >div#post-10236.post-10236.post.hentry.category-savings.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.chris-floyd.com/articles/1-latest-news/2037-atrocity-now-wikileaks-release-puts-spotlight-back-on-continuing-war-crime-in-iraq.html",
        selector: "html >body#ff-georgia.f-default.bc-blue.iehandle >div#page-bg >div.wrapper >div.shadow-left >div.shadow-right >div.main-page >div.main-page2 >div.main-page3 >div.main-page4 >div#main-section >div.padding >div.main-content.block >div#center-column >div.padding >table.contentpaneopen >tbody >tr >td"
    }, {
        url: "http://electronicintifada.net/v2/article11587.shtml",
        selector: "html >body >div >table[width=700] >tbody >tr >td >table[width=700] >tbody >tr >td[width=489]"
    }, {
        url: "http://www.popoholic.com/2010/10/22/daily-addictions-weekend-edition-65/",
        selector: "html >body >div.page-container >table[width=990] >tbody >tr >td >table[width=990] >tbody >tr >td.col-2 >div >div#post-18878.post >div.entry"
    }, {
        url: "http://www.rollbamaroll.com/2010/10/24/1771345/initial-impressions-from-the-tennessee-game",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://geeksofdoom.com/2010/10/24/all-fall-down-a-look-at-the-masterful-dominos-of-v-for-vendetta/",
        selector: "html >body >div#frame >table[width=1090] >tbody >tr >td >table[width=600] >tbody >tr >td[width=530] >div.storytext"
    }, {
        url: "http://www.gamesetwatch.com/2010/10/interview_roblox_the_littlekno.php",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-24651.entry >div#entry-24651.entry >div.entry-content"
    }, {
        url: "http://cuteoverload.com/2010/10/24/fun-facts-about-kittens/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#column_wrap >div#content.hfeed >div#post-49673.post-49673.post.type-post.hentry.category-uncategorized.tag-kittens.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.hughhewitt.com/blog/g/699abc4e-da92-433c-9a6a-e6253c99735e",
        selector: "html >body >form#aspnetForm >div#Wrapper >div#Content >div.contentWrapper >div#Main.leftCol >div.page >div.contentBody >div#Blog.post >div.body"
    }, {
        url: "http://gretawire.blogs.foxnews.com/update-on-shove-it-remark-to-president-obama/",
        selector: "html >body >div#document >div#content.clear >div#content-main >div.entry-2.format-3 >ul >li.first >div.introduction >div.deck.section-description"
    }, {
        url: "http://www.ripten.com/2010/10/24/fallout-new-vegas-mauler/",
        selector: "html >body >div#page-wrap >div#content-wrap >div#content.single >div#single.post >div.entry"
    }, {
        url: "http://polhudson.lohudblogs.com/2010/10/24/endorsements-roundup/",
        selector: "html >body#inside >div#main-container >div#content-container >div#wrapper2 >div#content >div#post-19300.post >div.body"
    }, {
        url: "http://www.tcmagazine.com/tcm/downloads/31260/geforce-26099-whql",
        selector: "html.js >body.sidebar-right.not-logged-in.popups-processed >div#bg >div#bg-ad >div#pagewrapper >div#contentwrapper >div#contentwrapper-pad >div#middle-content >div.page-content.node-content.comments-open.no-comments.arg-1-node.arg-2-31260 >div.page-content-pad >div#node-31260.node >div.node-content-content >div.tcm-news.article >div.article-content.download-content"
    }, {
        url: "http://www.symmetrymagazine.org/breaking/2010/10/22/fermilab-theorist-sees-dark-matter-evidence-in-public-data/",
        selector: "html >body >div#wrap >div#left >div.entry >div#post-9041.post"
    }, {
        url: "http://www.american.com/archive/2010/october/the-enduring-character-of-democrats-and-republicans-in-times-of-political-change",
        selector: "html >body.section-archive >div#visual-portal-wrapper >div#portal-columns.visualColumnHideOne >div#visual-column-wrapper >div#portal-column-content >div#content >div#region-content.documentContent >div >div >div.obj >div >div >div >table >tbody >tr >td >div >div >div"
    }, {
        url: "http://www.correntewire.com/how_we_lost_america_brief_history_ten_points_linked_version",
        selector: "html.js >body.sidebars.lightbox-processed >div#wrapper >div#container >div#content >div#main >div.node >div.content"
    }, {
        url: "http://sistertoldjah.com/archives/2010/10/24/reid-my-manhood-has-never-been-in-question/",
        selector: "html >body >div#page >div#frame >div#center >div#post-28707.post-28707.post.type-post.hentry.category-congress.category-election-10.category-elections"
    }, {
        url: "http://languagelog.ldc.upenn.edu/nll/",
        selector: "html >body >div#wrapper >div#content >div.post >div.postentry"
    }, {
        url: "http://www.ordinary-gentlemen.com/2010/10/a-poem-for-sunday-9/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#left_box >div#content >div#content_inner >div.format_text"
    }, {
        url: "http://forbiddenplanet.co.uk/blog/2010/the-simon-cowell-of-comics-strikes-again/",
        selector: "html >body >div#page.container_16 >div#centercol.grid_10 >div#post-36254.post.box >div.entry"
    }, {
        url: "http://www.gadgetvenue.com/asus-eee-pc-1015pn-1080p-announced-10222030/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-27109.post-27109.post.type-post.hentry.category-laptops.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.freshnessmag.com/2010/10/24/freshness-interview-with-larry-johnson-from-packer-x-fila-event/",
        selector: "html >body >div#wrap >div#page.clearfloat >div#content >div#lead.postList.clearfloat >div#singlepostCont >div#postInner >div#eachsinglePost"
    }, {
        url: "http://www.hollywire.com/2010/10/celine-dion-gives-birth",
        selector: "html.js >body.not-front.not-logged-in.node-type-article.no-sidebars.page-2010-10-celine-dion-gives-birth.section-2010.cron-check-processed >div#page >div#page-inner >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#leftside.inner >div#content-area >div#node-9525.node.node-type-article >div.node-inner >div.post"
    }, {
        url: "http://www.bobcesca.com/blog-archives/2010/10/through_the_win.html",
        selector: "html >body >div#container >div#center >div.content"
    }, {
        url: "http://hellobeautiful.com/style-beauty/hellobeautifulstaff2/5-waist-whittling-obi-belts-for-under-50/",
        selector: "html >body#header-default.wordpress.y2010.m10.d26.h08.chrome.single.postid-1415125.s-category-style-beauty.s-author-hellobeautifulstaff2.loggedout >div#inner-body >div#inner-wrap >div#page-wrap >div#content-wrap >div#content >div#single-default.container.clearfix.default >div#left-col >div.single-post.clearfix >div.post-content"
    }, {
        url: "http://boston.barstoolsports.com/random-thoughts/how-about-this-fucking-guy-huh/",
        selector: "html >body >div.wrapper.container >div.mainContent >div.content >div.left.co_c >div.posts >div.post >div#post-19681.post >div.post-content"
    }, {
        url: "http://www.notcot.com/archives/2010/10/logitech-revue-googletv.php",
        selector: "html#sixapart-standard >body >div#body1 >div#container >div.content >div#main >div#entry-4816.entry >div.inner"
    }, {
        url: "http://thehockeywriters.com/a-testament-to-youth-hockey-and-emotion-at-miami/",
        selector: "html.cufon-active.cufon-ready >body >div#wrapper >div#innerContent >div#innerLeft >div.post"
    }, {
        url: "http://anythinghollywood.com/2010/10/cheryl-cole-sobbing-talking-derek-hough/",
        selector: "html >body >div#wrap >div#content >div#contentleft >div.postarea >div#post-133884.item.entry >div.itemtext"
    }, {
        url: "http://radar.oreilly.com/2010/10/the-upside-of-open.html",
        selector: "html#sixapart-standard >body#radar.mt-comment-confirmation.layout-wt >div#page >div#content-09 >div#alpha >div.post_block >div.entry-body"
    }, {
        url: "http://www.vdare.com/peters/101022_population.htm",
        selector: "html >body >div >center >table[width=70%] >tbody >tr >td"
    }, {
        url: "http://www.artinfo.com/news/story/36126/warhol-foundation-kills-antitrust-lawsuit-over-authentication/",
        selector: "html.sIFR-active >body >div#container >div#document >div#body >div#column_bg >table >tbody >tr >td.white-bg >div#column-mid >div.copy"
    }, {
        url: "http://www.ecorazzi.com/2010/10/24/sea-shepherds-new-interceptor-vessel-revealed/",
        selector: "html >body.single.single-post.postid-41810 >div#outerContainer >div.container >div#content.clear.span-24 >div#post-41810.post.homepageTopPostBackgroundAdjust >div.entryContent"
    }, {
        url: "http://www.gottabemobile.com/2010/10/23/weekend-soundoff-what-should-microsoft-do-next-for-windows-that-lives-up-to-ballmers-risky-comment/",
        selector: "html >body >div#wrap >div#page.clearfix >div#contentleft >div#content >div.maincontent >div.singlepost >div#post-main-32308.post.clearfix >div.entry"
    }, {
        url: "http://izismile.com/2010/10/22/the_daily_stare_friday_edition_8_pics.html",
        selector: "html >body >div.all >div.content_all >table >tbody >tr >td.left_block >div#dle-content >div.big_foto_block >div.news_div >div#news-id-25691"
    }, {
        url: "http://www.budgetsaresexy.com/2010/10/the-perfect-credit-card/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-4231.post-4231.post.hentry.category-credit-cards.category-your-take.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://starcasm.net/archives/70053",
        selector: "html >body >div#layout >div#grid2 >div#overmainpost >div.alignright >div#main >div.posts >div.entry"
    }, {
        url: "http://shanghaiist.com/2010/10/24/this_week_in_shanghaiist_26.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.shanghaiist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436440.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://www.phonedog.com/2010/10/24/lg-lte-android-device-for-verizon-leaks-reveals-little-about-itself/",
        selector: "html >body >div.page-wrapper >div.basic.clearfix >div#_ctl0_divBody.basic-main >div.post-body"
    }, {
        url: "http://www.mrsec.com/2010/10/sec-headlines-10242010-part-two/",
        selector: "html >body.single.single-post.postid-206828 >div#main >div#content_area >div#content_area2 >div#content_area3 >div#contentwrapper >div#contentcolumn >div.innertube >div#main_content >div.post >div.text"
    }, {
        url: "http://www.treehugger.com/files/2010/10/gps-devices-installed-in-african-rhinos-horns.php",
        selector: "html >body >div#container >div.chunk >div.content >div.chunk-center-indiv >div#entry-64119.entry >div#entry-64119.entry >div.entry-content >div.entry-body >div#scryve-center-column"
    }, {
        url: "http://globalgrind.com/channel/gossip/content/1862600/global-grinds-most-amazing-twitpics-of-the-day-photos/",
        selector: "html >body#ctl00_Body.chanPink.detail-page >div#content-outer >div#promo-overlay >div#content >form#aspnetForm >div#main-content >div.section.content-detail >div.detail-content >div#ctl00_CO_Content_ctl00_dpBody.detail-body"
    }, {
        url: "http://blog.linkedin.com/2010/10/21/linkedin-blackberry-torch/",
        selector: "html >body >div#wrap.clearfix >div#content >div#post-5344.post >div.entry"
    }, {
        url: "http://krebsonsecurity.com/2010/10/spyeye-v-zeus-rivalry-ends-in-quiet-merger/",
        selector: "html >body >div.container_16 >div.grid_11 >div#content >div#post-5983.post-5983.post.type-post.hentry.category-comingstorm.category-web-fraud-2-0.tag-gribodemon.tag-harderman.tag-slavik.tag-spyeye.tag-steve-santorelli.tag-team-cyrmu.tag-zeus >div.post-smallerfont >div.entry"
    }, {
        url: "http://bloggingheads.tv/",
        selector: "html >body >div >table[width=960] >tbody >tr >td[width=444] >div#theCarousel.theCarousel >div#largeBox.highlight"
    }, {
        url: "http://www.muellermoebel.de/stapelliege-von-rolf-heide-und-bett-plane-von-felix-stark/bett-plane-von-felix-stark/",
        selector: "html >body >div.page_margins >div.page >div#teaser >div#main"
    }, {
        url: "http://valleywag.gawker.com/5672370/the-creepy-company-compiling-a-file-on-your-online-activityusing-your-real-name",
        selector: "html.webkit.safari.win.js >body.serif >div#container.centered >div#wrapper >div.content.permalink"
    }, {
        url: "http://scienceblogs.com/thepumphandle/2010/10/blog_action_day_water_and_sani.php",
        selector: "html >body#blog >div#sbMainContainer >div.blogContainer >div.mainCol >div.blogMain >div#entry-163471.entry"
    }, {
        url: "http://buzzworthy.mtv.com/2010/10/22/posted-the-ready-set-jordan-performance-videos/",
        selector: "html >body >div#noFlash >div#container-outer >div#container >div#container-inner >div#wrap >div#wrap-inner >div#inner.group.abc-alt >div.group-ab >div.group-b >div#mid-col.group >div#permalink.mdl >div#posts >div#post-57495.mdl-clean.post >div.entry"
    }, {
        url: "http://www.worldchanging.com/archives/011684.html",
        selector: "html >body >div#container >div#grayArea >div#midCol.child-mid >div.mid-textarea.bodytextblack"
    }, {
        url: "http://createdigitalmusic.com/2010/10/20/garageband-11-more-lessons-time-features-from-logic-friendly-to-newcomers/",
        selector: "html >body >div#pagecontainer >div#page >div#content >div.post >div.storycontent"
    }, {
        url: "http://www.beautysnob.com/2010/10/kiehls_x_jeff_koons_limited_ed.html",
        selector: "html#sixapart-standard >body#mt-blog.mt-entry-archive.layout-twt >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-2786.entry-asset.asset.hentry >div.asset-content.entry-content >div.asset-body"
    }, {
        url: "http://finance.yahoo.com/news/Apple-4Q-net-income-soars-70-apf-3512871616.html",
        selector: "html.js.yui3-js-enabled >body.a44 >div#y-page.y-fin-wrapper >div#y-main.clear >div#y-content >div.col3 >div.mod.content-wrapper >div#y-article-bd"
    }, {
        url: "http://withleather.uproxx.com/2010/10/weekend-picks-the-nfl-doesnt-care-about-me",
        selector: "html >body >div#page >div#wrapper >div#header >div#colcontainer >div#col1 >div.wrapper >div#post-41765.post >div.post-top >div.post-body"
    }, {
        url: "http://realtalkny.uproxx.com/2010/09/topic/topic/interviews/soulja-boy-speaks-on-kat-stacks-is-working-with-kanye-west-50-cent/",
        selector: "html >body >div#page >div#wrapper >div#header >div#colcontainer >div#col1 >div.wrapper >div#post-53015.post >div.post-top >div.post-body"
    }, {
        url: "http://www.ecofriend.org/entry/solar-fiber-arts-building-marries-solar-with-craft/",
        selector: "html >body >div#container >div#content >div#content-box >div#perma-content-main >div.post-content"
    }, {
        url: "http://techie-buzz.com/softwares/open-edit-ppt-pptx-pps-files.html",
        selector: "html >body >div.maincontainer >div.container >div#contentarea >div#content >div#post-36195.post >div#postentry.entry.KonaBody"
    }, {
        url: "http://smallwarsjournal.com/blog/2010/10/a-comprehensive-approach-to-lo/",
        selector: "html#sixapart-standard >body.layout-three-column.individual-entry-archive >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-4848.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.theworldsbestever.com/2010/10/25/adriana-lima-is-your-corpse-bride/",
        selector: "html >body >div#wrapper >div#mid.fix >div#mainCol.fix >div#post-51793.post >div.entry"
    }, {
        url: "http://www.lrb.co.uk/v32/n20/letters",
        selector: "html >body >div#wrapper >div#bodycontent.t-w-t >div#main >div.letters"
    }, {
        url: "http://www.mydollarplan.com/discover-sign-up-bonus/",
        selector: "html >body >div#container >div#col_container >div#content >div#post-1275.post >div.entry >div#getsocialmain"
    }, {
        url: "http://cashmoneylife.com/2010/10/22/job-search-what-is-your-interview-accomplishing/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-3053.post-3053.post.type-post.hentry.category-career.tag-career-and-education.tag-income.tag-job.tag-job-hunt.tag-job-interview.tag-job-search.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.photographyblog.com/reviews/nikon_coolpix_s80_review/",
        selector: "html >body.review.introduction >div#wrapper >div#content-wrap.clearfix >div#content-wrap-inish.clearfix >div#content-wrap-inner.clearfix >div#content >div.hreview"
    }, {
        url: "http://www.kuklaskorner.com/index.php/hockey/comments/a_mess_in_new_jersey/",
        selector: "html >body >div#wrapper >div#content >div#subLeft >blockquote"
    }, {
        url: "http://www.epltalk.com/arsene-wenger-teaches-his-boys-to-fight-back-25935",
        selector: "html >body.w_single.w_post_25935 >div#container >div#page >div#content_box >div#content.hfeed >div#post-25935.post-25935.post.type-post.hentry.category-general.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://blogs.orlandosentinel.com/news_politics/2010/10/photos-palin-rallies-florida-republicans-in-orlando.html",
        selector: "html >body.single.postid-19806 >div#container >div#section.thirdPartyContent >table[width=970] >tbody >tr >td#blogmaincontent >table[width=650] >tbody >tr >td.text >div#entry-19806.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://blogs.westword.com/latestword/2010/10/marijuana_mad_men_meet_grow_room_the_countrys_first_mmj_marketing_company.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://www.savingwithshellie.com/2010/10/24/reminder-free-picaboo-photo-book-expires-1025/",
        selector: "html >body.custom >div#container >div#page >div#header >div#content_box >div#content.hfeed >div#post-20181.post-20181.post.type-post.hentry.category-deals-around-town.post_box.top >div.format_text.entry-content >div.KonaBody"
    }, {
        url: "http://sayanythingblog.com/entry/wow-fargo-forumbismarck-tribune-endorse-berg-over-pomeroy/",
        selector: "html >body >div#wrapper >div#content-wrap >div#singlepost >div.post"
    }, {
        url: "http://simplystacie.net/brenda%E2%80%99s-handmade-creations-review/",
        selector: "html.cufon-active.cufon-ready >body >div#wrap.clearfix >div#page.clearfix >div#contentleft.maincontent >div#content >div.singlepost >div#post-main-12681.post.clearfix >div.entry"
    }, {
        url: "http://royal.pingdom.com/2010/10/22/incredible-growth-of-the-internet-since-2000/",
        selector: "html >body >div#contentwrapper >div#homecontent >div#content >div#post-7652.post >div.entry"
    }, {
        url: "http://www.bargaineering.com/articles/tuition.html",
        selector: "html >body >div#content >div.page >div.ncol >div.post >div.entry"
    }, {
        url: "http://www.fromtherink.com/2010/10/23/1768585/weekend-preview-nashville",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.cornnation.com/2010/10/24/1771892/report-card-huskers-51-oklahoma-state-41",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://weblogs.sun-sentinel.com/news/politics/broward/blog/2010/10/find_the_fat_why_two_broward_m.html",
        selector: "html >body.layout-two-column-right >div#container >div#content >div#columnleft >div#entry-267974.post >div.post_content"
    }, {
        url: "http://backseatcuddler.com/2010/10/24/rick-springfield-debuts-his-autobiography/",
        selector: "html >body >div#main-wrapper >div.wrapper >div.rowcontainer >div.sixcolumn >div.entry >div.entrybody"
    }, {
        url: "http://www.hockeywilderness.com/2010/9/15/1691197/things-that-are-on-my-mind",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://truthonthemarket.com/2010/10/22/more-on-lawyers-and-foreclosure-gate/",
        selector: "html >body >div#container >div#wrap >div#content >div#post-9784.post-9784.post.type-post.hentry.category-legal-profession >div.entrytext"
    }, {
        url: "http://www.minorleagueball.com/2010/10/24/1772207/kansas-city-royals-top-20-prospects-for-2011",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.crunktastical.net/2010/10/23/freeze-frame-nicki-minaj-powerhouse-2010/",
        selector: "html >body >div#wrap >div#main >div#content >div.post >div.post-content"
    }, {
        url: "http://blog.thefind.com/2010/10/make-a-statement-with-a-recycled-juice-box-purse/",
        selector: "html >body.wordpress.y2010.m10.d26.h20.single.postid-22776.s-y2010.s-m10.s-d23.s-h09.s-category-green.s-tag-eco-friendly.s-tag-handbag.s-tag-juice-box-purse.s-tag-purse.s-tag-recycled.s-author-holly >div#content.hfeed >div.wrap >div#primary >div#entries >div.entry >div#post-22776.post-22776.post.hentry.category-green.tag-eco-friendly.tag-handbag.tag-juice-box-purse.tag-purse.tag-recycled >div.entry-content"
    }, {
        url: "http://www.realityblurred.com/realitytv/archives/ae/2010_Oct_22_teach_early_finale",
        selector: "html >body >div#middle >div.inner >div#content >div.story"
    }, {
        url: "http://arrestedmotion.com/2010/10/openings-audrey-kawasaki-tangled-outre-gallery-melbourne/",
        selector: "html >body >div#page >div#content.widecolumn >div#post-80787.post >div.entry"
    }, {
        url: "http://www.the700level.com/2010/10/vick-will-start-after-eagles-bye.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d83451af4b69e20133f5524392970b.entry >div.entry-content"
    }, {
        url: "http://nerdapproved.com/bizarre-gadgets/10-terrifying-halloween-gadgets/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-28507.post-28507.post.type-post.hentry.category-bizarre-gadgets.category-features.category-misc-weirdness.tag-halloween.tag-nerd-approved.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.filmschoolrejects.com/features/old-ass-horror-horror-of-dracula.php",
        selector: "html >body >div#main >div.bg-color-white >div#block-content.left.bg-color-white.padding-bottom.bg-color-white >div.space-min-left.space-min-right.space-min-top.space-min-bottom.border-black >div.space-min-left.space-min-right.space-min-bottom >div"
    }, {
        url: "http://www.arrowheadpride.com/2010/10/24/1772347/grade-the-kansas-city-chiefs-victory-over-the-jacksonville-jaguars",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.synthtopia.com/content/2010/10/26/free-software-from-plastikman-liine-for-ableton-live-8/",
        selector: "html >body >div#page >div#content >div#maincontent >div.post >div#post-28485.item.entry >div.itemtext"
    }, {
        url: "http://weblogs.asp.net/scottgu/archive/2010/10/22/asp-net-mvc-3-layouts.aspx",
        selector: "html >body >form#aspnetForm >div#wrapper >div#container >div#contentwrapper >div#content >div#content2 >div.post >div.postsub"
    }, {
        url: "http://www.goodfinancialcents.com/how-starting-a-business-can-lower-next-year%E2%80%99s-tax-bill/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-14587.post-14587.post.type-post.hentry.category-entrepreneurship.category-small-business.tag-business-tax-deductions.tag-s-corporation.tag-schedule-c.tag-starting-a-business.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://whipup.net/2010/10/23/how-to-lunch-money-purse/",
        selector: "html >body >div#page >div#content >div.post >div.entry"
    }, {
        url: "http://theresurgence.com/2010/10/24/why-death-matters",
        selector: "html >body >div#bottom >div#content.center >div#col_left >div#copy >div#text"
    }, {
        url: "http://www.bagbliss.com/designer/coach-purse/holiday-gift-guide-bags-for-the-fashionista-in-training/",
        selector: "html.js.canvas.canvastext.geolocation.crosswindowmessaging.websqldatabase.no-indexeddb.hashchange.historymanagement.draganddrop.websockets.rgba.hsla.multiplebgs.backgroundsize.borderimage.borderradius.boxshadow.opacity.cssanimations.csscolumns.cssgradients.cssreflections.csstransforms.csstransforms3d.csstransitions.video.audio.localstorage.sessionstorage.webworkers.applicationcache.svg.smil.svgclippaths.fontface >body >div#body >div.column-1 >div.box >div.box-inner >div#post-14770.post >div.entry"
    }, {
        url: "http://abduzeedo.com/daily-inspiration-648",
        selector: "html.js >body.not-front.not-logged-in.page-node.node-type-blog.no-sidebars.i18n-en >div#content >div.wrapper >div#main >div.column.col1b >div.node.page >div.content.main-content"
    }, {
        url: "http://www.appscout.com/2010/10/uh_turn_right_or_whatever_dari.php",
        selector: "html#sixapart-standard >body >center >table >tbody >tr >td >table[width=100%] >tbody >tr >td >table.maincolumn >tbody >tr >td >div#entries >table.main >tbody >tr >td.defaults >div.userdefaults"
    }, {
        url: "http://graphjam.memebase.com/2010/10/24/funny-graphs-they-just-dole-them-out/",
        selector: "html >body >div#mainbody >div#pane2 >div#post-59767.post >div.entry >div#md"
    }, {
        url: "http://www.first-draft.com/2010/10/pennsylvania-6500.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d8341c5ced53ef0133f551905b970b.entry-category-adrastos.entry-category-music.entry-category-political_crack.entry-author-adrastos.entry-type-post.entry >div.entry-content"
    }, {
        url: "http://mocoloco.com/archives/019525.php",
        selector: "html >body#design-moco.js >div.row >div.selector >div.article.design"
    }, {
        url: "http://www.smalldeadanimals.com/archives/015184.html",
        selector: "html >body >div#container >div.blog >div.blogbody"
    }, {
        url: "http://coverawards.com/2010/10/24/julianne-moore-i-like-to-call-myself-the-hundred-year-old-model/",
        selector: "html >body >div.container >div#content >div.post-64534.post.type-post.hentry.category-1"
    }, {
        url: "http://www.labourlist.org/ideas-for-electability--a-national-care-service",
        selector: "html >body >div#container.clearfix >div#page >div#content_body >div#divContentBlockContent163bc1b4-7050-cdb4-c5b6-80033243af7d.ai_cb_na >div.html.blog >div.content"
    }, {
        url: "http://planetgreen.discovery.com/home-garden/5-green-furniture-upholstery-fabric-alternatives.html",
        selector: "html >body >div#container-primary >div#container-content.clear.clearfix >div#container-left-column >div#article >div.buffer >div#body-copy"
    }, {
        url: "http://www.wordyard.com/2010/10/24/when-campaign-spending-is-anonymous-reality-gets-slippery/",
        selector: "html >body.single.single-post.postid-3005.header-image.sidebar-content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-3005.post.type-post.hentry.category-media.category-politics >div.entry-content"
    }, {
        url: "http://onlinejournalismblog.com/2010/10/22/help-me-investigate-anatomy-of-an-investigation/",
        selector: "html >body#home.log >div#container >div#maincol >div.col >div.entry >div.entrybody"
    }, {
        url: "http://blogs.consumerreports.org/health/2010/10/excessive-yawning-whats-causing-my-constant-yawning-antidepressant-side-effects.html",
        selector: "html >body.layout-two-column-right.mt-individual-archive.health-blog >div#outer >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d83451e0d569e20133f5459b77970b.entry >div.entry-content"
    }, {
        url: "http://trekmovie.com/2010/10/22/watch-star-trek-on-this-weeks-and-next-weeks-community/",
        selector: "html >body.blue >div#wrapper >div#content"
    }, {
        url: "http://www.internetretailing.net/2010/10/event-the-second-annual-internet-retailingberinger-tame-ecommerce-charity-pub-quiz-24-november-2010/",
        selector: "html >body >div#page.clearfloat >div#inner.clearfloat >div#content >div#post-8553.post"
    }, {
        url: "http://www.teamspeedkills.com/2010/10/24/1772134/bcs-standings-no-1-auburn-boise-and-tcus-finest-hour-and-billingsley",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.bookwormroom.com/2010/10/24/theyve-always-gotten-it-bass-ackward/",
        selector: "html >body >div#container2 >div#content >div.post >div.post-content"
    }, {
        url: "http://recombu.com/news/iphone-3gs-gets-video-calling-with-iseeu-accessory_M12593.html",
        selector: "html >body >div#wrapper >div#left-col-wide >div.news-article-body"
    }, {
        url: "http://www.slaw.ca/2010/10/24/wigmore-criteria-upheld-for-journalistic-sources/",
        selector: "html >body.single.single-post.postid-27045 >table#frame >tbody >tr#content >td#single_entry >div#singlemain >div#post-27045.post-27045.post.type-post.hentry.category-judicial-decisions-substantive-law >div.entry"
    }, {
        url: "http://www.padgadget.com/2010/10/25/reckless-racing-hd-for-ipad-app-review/",
        selector: "html >body >div#wrap.clearfix >div#page.clearfix >div#contentleft.maincontent >div#content >div.singlepost >div#post-main-32884.post.clearfix >div.entry"
    }, {
        url: "http://www.ismashphone.com/2010/10/report-32-of-ipad-owners-have-never-downloaded-an-app.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00e55225079e8834013488666af4970c.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.uncoached.com/2010/10/24/awesome-gorilla-picture/",
        selector: "html >body >div#main >div#content >div#post-47049.post >div.entry"
    }, {
        url: "http://www.thaindian.com/newsportal/enviornment/multinationals-seeking-to-control-global-farming_100449162.html",
        selector: "html >body >div#page_wrapper >div#content >div#first-time >div#post-449162.post >div.entry"
    }, {
        url: "http://www.socaltech.com/oversee_resolves_snapnames_lawsuits/s-0031912.html",
        selector: "html.cufon-active.cufon-ready >body >div#content >div.shell >div.column-4.fl >div.post.post-single >div.entry"
    }, {
        url: "http://www.obliviousinvestor.com/investing-blog-roundup-pe10-and-lazy-portfolios/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-5917.post-5917.post.type-post.hentry.category-roundup.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.ducttapemarketing.com/blog/2010/10/23/weekend-favs-october-twenty-three/",
        selector: "html >body#builder-layout-4c8e1780a54d1.builder-template-single.builder-view-singular.builder-view-post.builder-view-post-6921.single.single-post.postid-6921 >div.builder-container-outer-wrapper >div#builder-container-4c8e1780a54d1.builder-container.builder-view-single >div.builder-module-outer-wrapper.builder-module-content-outer-wrapper.widget-bar-blue-outer-wrapper >div#builder-module-4c8e183dbc74d.builder-module.builder-module-content.builder-module-4.builder-module-content-1.builder-module-middle.builder-module-content-last.builder-module-before-widget-bar.builder-module-after-navigation.clearfix.widget-bar-blue >div.multi-bg-main.clearfix >div.builder-module-block-outer-wrapper.builder-module-element-outer-wrapper.middle.clearfix >div.builder-module-block.builder-module-element.clearfix >div.post-6921.post.type-post.hentry.category-dtm-favs >div.post-content"
    }, {
        url: "http://www.thebudgetfashionista.com/archive/guide_to_great_budget_halloween_costumes2/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-742.post-742.post.type-post.hentry.category-guide-to-budget-halloween-costumes.tag-budget-shopping.tag-costume.tag-halloween-costumes.tag-salvation-army.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.tvtonight.com.au/2010/10/abc-appoints-new-head-of-science-and-natural-history-docos.html",
        selector: "html >body.single.single-post.postid-74942 >div#wrap >div#content >div#contentleft >div#post.postarea"
    }, {
        url: "http://powip.com/2010/10/aqua-buddhism-and-the-kentucky-head-stomp/",
        selector: "html >body.ltr.y2010.m10.d26.h21.tuesday.not-logged-in.singular.single.single-11815.single-category-uncategorized.single-post_tag-.single-author-admin.windows.chrome.chrome-8-0.primary-active.secondary-inactive.subsidiary-inactive >div#body-container >div#container >div#content >div.hfeed.content >div#post-11815.hentry.post.post-1.odd.author-admin.category-uncategorized >div.entry-content.entry"
    }, {
        url: "http://www.newsherald.com/news/meek-88023-rubio-senate.html",
        selector: "html >body >div#fi_wrapper >div#fi_innerWrapper >div#fi_content >div.fi_contentBlock.marginMidTop >div.fi_contentBlockInner >div#article.lingo_region >div.newstext.marginMidSide"
    }, {
        url: "http://www.adafruit.com/blog/2010/10/26/dirty-jobs/",
        selector: "html >body#blogBody >div#mainWrapper >table#contentMainWrapper >tbody >tr >td >div#blogwrap.centerColumn >table#mainblogtable >tbody >tr >td >div#post-8385.post-8385.post.hentry.category-random >div.storycontent"
    }, {
        url: "http://www.toprankblog.com/2010/10/duplicate-content-seschi10/",
        selector: "html >body >div#page >div#main >div#one >div#post >div.entry"
    }, {
        url: "http://blog.flickr.net/en/2010/10/24/welcome-great-pumpkin/",
        selector: "html >body.wordpress.single.s-category-en.s-author-zyrcster >div#wrapper >div#container >div#content.hfeed >div#post-21983.entry >div.entry-content"
    }, {
        url: "http://www.basketball-reference.com/blog/",
        selector: "html >body#front >div#page_container_front >div#page_content >div#wrap >div#content >div#post-7840.postfull >div.entrytext"
    }, {
        url: "http://pogue.blogs.nytimes.com/2010/10/21/office-for-mac-isnt-an-improvement/",
        selector: "html >body.blogPost >div#shell >div#page >div#pogue.blog.wrap >div#aCol >div#content.hfeed >div#entry-3019.entry.hentry >div.entry-content"
    }, {
        url: "http://goodcomics.comicbookresources.com/2010/10/25/halloween-cool-comic-countdown-calendar-8/",
        selector: "html >body >div#mid >div#mid-inner >div#content.content >div#article >div.inner.block"
    }, {
        url: "http://techland.com/2010/10/26/barnes-and-noble-intros-color-nook-e-book-reader-for-249/",
        selector: "html >body.single.single-post.postid-52112 >div#wrapper >div#container >div#content >div#post-52112.post-52112.post.type-post.hentry.category-gadgets.tag-nook.tag-readers.tag-e-book-readers.tag-barnes-noble >div.entry"
    }, {
        url: "http://drezner.foreignpolicy.com/posts/2010/10/22/all_political_understanding_is_local",
        selector: "html.js >body >div#wrapper >div#theatre >div#content-lz >div#blog-well >div#blog-post-1.blog_entry.full_post >div.blog_body >div.translateBody"
    }, {
        url: "http://blog.searchenginewatch.com/101023-145059",
        selector: "html#sixapart-standard >body >div#wrapper >div#wrapper-2 >div#inner >div#lower2 >div#main >div#centre_right_NEW >div#centre_content >div#article"
    }, {
        url: "http://blogs.ajc.com/uga-sports-blog/2010/10/24/richt-ealey-king-will-compete-for-playing-time-this-week/",
        selector: "html.chrome.webkit.safari.win.js >body#sports_section.y2010.m10.d27.h01.uga-sports-blog.ajc.single.postid-6288.s-y2010.s-m10.s-d24.s-h21.s-category-football.s-category-notes.s-author-ttucker >div.ajc-container >div.ajc-span-14 >div#post-6288.ajc-blog-post >div.entry.clearfix"
    }, {
        url: "http://www.desiringgod.org/blog/posts/the-command-for-obedience-is-really-a-call-to-faith",
        selector: "html >body >div.container >section.main.col_9.\n\t\t.listing\n\t\t\n\t\t\n\t\t\n\t\t >article >section.col_7.in >div.manuscript"
    }, {
        url: "http://technologizer.com/2010/10/22/technologizer-now-in-convenient-wood-pulp-form/",
        selector: "html >body >div#wrap >div#page.container_16 >div#contentwrap >div#centercol.grid_10 >div#post-34475.post.box >div.entry"
    }, {
        url: "http://www.7gadgets.com/2010/10/24/teego-golf-training-system/26075",
        selector: "html >body >div#page >div#container >div#content >div#post-26075.post >div.storycontent"
    }, {
        url: "http://www.sneakerfreaker.com/sneaker-releases/Adidas-Fluid-Trainer/",
        selector: "html >body >div#sf_adwrap >div#cmn_wrap >div.pageWrap >div.contentWrap >div.rightCol >div.newReleasesExpanded >div.content >div#ptagfallback >div#article"
    }, {
        url: "http://www.financialsense.com/contributors/cris-sheridan/tips-for-successful-investing",
        selector: "html.js >body.sidebar-right >div#container1.clear-block2 >div#container2.clear-block >div#container3.clear-block >div#colmask-wrapper.clear-block >div.colmask.rightmenu >div.colmid >div.colright >div.col1wrap >div.col1pad >div.col1 >div#col1-shell.clear-block >div#node-2787.node.story >div.content"
    }, {
        url: "http://bargainbriana.com/rite-aid-deals-1024/",
        selector: "html >body.custom >div#content_area.full_width >div.page >div#content_box >div#column_wrap >div#content.hfeed >div#post-33847.post-33847.post.type-post.hentry.category-general.tag-drug-store-deals.tag-rite-aid.tag-rite-aid-deals.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://www.djmick.co.uk/laughs/guy-goes-all-sorts-of-crazy-watching-stock-car-crash-video/",
        selector: "html >body >div.layout >div.leftblock >div.m_right >div.content"
    }, {
        url: "http://torontoist.com/2010/10/meet_your_candidates_ward_27_toronto_centre-rosedale.php",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry-archive.layout-tw.torontoist >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-436279.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://www.southernstudies.org/2010/10/art-pope-still-dancing-at-the-tea-party.html",
        selector: "html >body#facing_south >div#wrapper >div#container >div#content >div#left-content >div#entry-12467.entry-asset.asset.hentry >div.asset-content.entry-content >div.asset-body"
    }, {
        url: "http://mije.org/richardprince/embraced-fox-juan-williams-blasts-npr",
        selector: "html.js >body.not-front.not-logged-in.node-type-journalisms.one-sidebar.sidebar-right.page-richardprince-embraced-fox-juan-williams-blasts-npr.section-richardprince.lightbox-processed.cron-check-processed >div#page >div#page-inner >div#main >div#main-inner.clear-block.with-navbar >div#content >div#content-inner >div#content-area >div#node-1274.node.node-type-journalisms >div.node-inner >div.content"
    }, {
        url: "http://www.dailygalaxy.com/my_weblog/2010/10/-colossal-asteroid-may-have-been-catalyst-for-evolution-of-earths-most-complex-organisms.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d8341bf7f753ef0134886f1e6d970c.entry"
    }, {
        url: "http://wallstcheatsheet.com/trading-markets/earnings-cheat-sheet-does-double-bottom-golden-cross-big-returns-for-amazon-amzn/",
        selector: "html >body >div#page >div#columns >div.col1 >div#post-19941.post-alt.blog >div.entry"
    }, {
        url: "http://www.rockytoptalk.com/2010/10/24/1771681/pearlofgreatprice-wins-a-tennessee-t-shirt-for-the-week-8-rtt-pick-em",
        selector: "html >body#blog-interior.blog-layout.blog-interior.samsung-apps >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.arlnow.com/2010/10/22/road-closures-near-pentagon-on-sunday-for-army-ten-miler/",
        selector: "html.chrome.win >body >div#art-main >div.art-Sheet >div.art-Sheet-body >div.art-contentLayout >div.art-content >div.art-Post >div.art-Post-body >div.art-Post-inner.art-article >div.art-PostContent"
    }, {
        url: "http://www.bellasugar.com/Colors-Creating-Bare-Faced-Makeup-Look-11636095",
        selector: "html.anonymous.webkit.safari.win.js >body.bellasugar-site.p-node.p-node_11636095_.page-spread.has_side.editorial-page.has_carousel >div#custom_bg >div#sugar-content-container >div.container.last.clear >div.span-14.prepend-1.append-1 >div#content-container >div.post_and_ad_container >div#post_1.post.post_page.spread.bellasugar.bellasugar >div.post-content"
    }, {
        url: "http://blogs.news.com.au/heraldsun/andrewbolt/index.php/heraldsun/comments/reid_not_rudd_saved_the_world",
        selector: "html >body >div#master-border >div#master-wrap.clearfloat >div#content-wrap.clearfloat >div.content-division.top.full-page.bodybkg.clearfloat >div#blogcontent >div.post-full"
    }, {
        url: "http://www.dbtechno.com/space/2010/10/24/what-you-can-do-with-a-logitech-revue-google-tv-day-5/",
        selector: "html >body >div#wrap >div#content >div#contentleft >div.postarea2"
    }, {
        url: "http://www.theboombox.com/2010/10/23/nelly-shocked-at-not-making-bets-top-10-say-what/",
        selector: "html >body.boombox >div#container >div#content >div.middle >div#p19686770 >div#19686770.post"
    }, {
        url: "http://www.ammoland.com/2010/10/24/steyr-arms-chooses-hunter-outdoor-communications-for-firearms-pr/",
        selector: "html >body#your-body >div#container >div.post >div.entry"
    }, {
        url: "http://www.ethanzuckerman.com/blog/2010/10/22/links-for-2010-10-22/",
        selector: "html >body >div#rap >div#main >div#content >div.post >div.storycontent >ul.delicious"
    }, {
        url: "http://lonelyconservative.com/2010/10/bill-clinton-gop-wants-to-break-the-power-of-the-federal-government/",
        selector: "html >body >div#container.c960.center.wrap >div#content.w600- >div.post-25999.post.type-post.hentry.category-2010-election.category-new-york.category-politics.tag-break.tag-buerkle.tag-clinton.tag-federal-government.tag-hinchey.tag-maffei.tag-power.tag-stumps"
    }, {
        url: "http://www.cellphonesignal.com/htc-wildfire-and-desire-coming-to-alltel-with-android-flavor/",
        selector: "html >body >div#wrapper >div#main >div#content >div#post-5513.post"
    }, {
        url: "http://ostatic.com/blog/openstack-backed-by-heavy-hitters-delivers-its-first-major-release",
        selector: "html >body.loaded >div#wraper >div#content-wrap >div.middlepan-a >div#blog.blog-section"
    }, {
        url: "http://www.pensionplanpuppets.com/2010/10/24/1771341/maple-leafs-2-at-flyer-5-listless",
        selector: "html >body#blog-interior.blog-layout.blog-interior.samsung-apps >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.350.org/en/about/blogs/time-last-year",
        selector: "html.js.wf-bellopro1bellopro2-n4-active.wf-museoslab1museoslab2-i8-active.wf-liquorstore1liquorstore2-n4-active.wf-museoslab1museoslab2-n8-active.wf-active >body.not-front.not-logged-in.node-type-blog.one-sidebar.sidebar-right.i18n-en.page-about-blogs-time-last-year.section-about >div#page >div#page-inner >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#content-area >div#node-26800.node.node-type-blog >div.node-inner >div.content"
    }, {
        url: "http://www.thelineofbestfit.com/2010/10/swn-diaries-day-2/",
        selector: "html >body.single.single-post.postid-38924.unknown.three-col-middle.width-980.three-col-middle-980 >div#wrapper >div#content.col-full >div#main-sidebar-container >div#main.col-left >div.post-38924.post.type-post.hentry.category-gigs.tag-bastions.tag-brandyman.tag-drains.tag-fiction.tag-gwilym-gold.tag-peggy-sue.tag-raffertie.tag-the-victorian-english-gentlemens-club.tag-trwbador.tag-young-legionnaire >div.entry"
    }, {
        url: "http://dailymobile.se/2010/10/25/android-game-duck-hunter/",
        selector: "html >body >div#page >div#main.png >table >tbody >tr >td#content.narrowcolumn >div#post-62842.post >div.entry"
    }, {
        url: "http://www.welovedc.com/2010/10/23/we-love-arts-cabaret/",
        selector: "html >body >div#container >div#main >div#content >div.features >div#post-53058.post >div.post-body"
    }, {
        url: "http://progressillinois.com/posts/content/2010/10/22/pi-week-review",
        selector: "html.js >body.not-front.not-logged-in.page-node.node-type-post.one-sidebar.sidebar-right.col-2 >div.page-wrap >div.container-outer-wrap >div.container-wrap >div.container >div.col-center.span-10 >div#node-11823.node.node-type-post.has-image >div.node-full"
    }, {
        url: "http://www.geekculture.com/joyoftech/joyarchives/1458.html",
        selector: "html >body >div >table[width=964] >tbody >tr >td[width=653] >div >p >img[width=634]"
    }, {
        url: "http://www.ibelieveinadv.com/2010/10/center-for-autism-two-faces/",
        selector: "html >body >div#wrapper >div#content >div#pagina >div.postentry"
    }, {
        url: "http://iheart2stamp.com/2010/10/23/lil-inker-sponsored-sketch-for-you-to-try/",
        selector: "html >body >div#rap >div#content >div.post >div.storycontent"
    }, {
        url: "http://dontmesswithtaxes.typepad.com/dont_mess_with_taxes/2010/10/biden-indicates-willingness-to-discuss-extending-tax-cuts-for-the-wealthy.html",
        selector: "html#sixapart-standard >body.layout-three-column >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#beta >div#beta-inner.pkg >div#entry-6a00d8345157c669e20134886f3ef2970c.entry-category-bush_tax_cuts.entry-category-elections.entry-category-politics.entry-author-skbell1.entry-type-post.entry >div.entry-content >div.entry-body"
    }, {
        url: "http://www.showbiz411.com/2010/10/24/keith-richards-on-how-he-snorted-his-dads-ashes-it-was-gritty",
        selector: "html >body >div#wrapper >div#page >div#content >div#post-7628.post >div.post-content"
    }, {
        url: "http://www.christian.org.uk/news/christian-ba-worker-plans-to-take-her-case-to-europe/",
        selector: "html >body >div#pageborders >div#page2 >div#main >div#post-3771.post >div#primarycontent >div.entry"
    }, {
        url: "http://sentencing.typepad.com/sentencing_law_and_policy/2010/10/noting-the-impact-of-probation-officers-in-the-federal-sentencing-process.html",
        selector: "html >body >div#container >div#center >div.content >blockquote"
    }, {
        url: "http://trevinwax.com/2009/01/13/interview-with-nt-wright-responding-to-piper-on-justification/",
        selector: "html >body >div#wrap >div#page >div#contentleft >div#post-2641.post >div.entry"
    }, {
        url: "http://www.libdemvoice.org/opinion-power-to-the-people-freedom-for-the-city-21717.html",
        selector: "html >body >div#wrapper.hfeed >div#main >div#container >div#content >div#post-21717.post-21717.post.type-post.hentry.category-london-mayor.category-op-eds.tag-london-mayoral-selection.author-lembit-opik-mp >div.entry-content"
    }, {
        url: "http://www.coated.com/angry-birds-halloween-edition-for-ios-devices-1022201005/",
        selector: "html >body.singular.single.y2010.m10.d26.h23.s-y2010.s-m10.s-d22.s-h08.s-category-uncategorized.s-tag-apple.s-author-millsangela5.windows.chrome.ch8-0 >div.cWrapper >div.container >div#content >div#primary.hfeed >div.entryWrapper >div#post-9678.post-9678.post.type-post.hentry.category-uncategorized.tag-apple.p.publish.first-post.author-angela.cat.tag.y2010.m10.d22.h08 >div.entry-content.article"
    }, {
        url: "http://www.blackheartgoldpants.com/2010/10/25/1772533/honestly-i-couldnt-not-share-this-with-you-guys-and-im-on-my-way-to",
        selector: "html >body#blog-interior.blog-layout.blog-interior.samsung-apps >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.fanshot >div.entry-body.fanshot-body"
    }, {
        url: "http://www.defendingbigd.com/2010/10/24/1771291/dallas-stars-must-learn-to-be-physical",
        selector: "html >body#blog-interior.blog-layout.blog-interior.samsung-apps >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://fashionbombdaily.com/2010/10/22/fashion-bombshell-of-the-day-abigail-from-california/",
        selector: "html >body.single.postid-44463 >div#rap >div#container >ul#main >li#content >div#post-44463.post-44463.post.hentry.category-fashion-bombshell-of-the-day.category-real-style.tag-fashion-bombshell-of-the-day.tag-real-style >div.storycontent >p"
    }, {
        url: "http://www.southernsavers.com/2010/10/green-mountain-coffee-facebook-freebie/",
        selector: "html.cufon-active.cufon-ready >body.single.single-post.postid-27649 >div#wrapper >div#content >div#main >div.article >div.content >div.post-27649.post.type-post.hentry.category-free.tag-free-coffee.tag-free-green-mountain-cofee.tag-green-mountain-facebook-freebie"
    }, {
        url: "http://girlstalkinsmack.com/the-x-factor-week-3-performances/",
        selector: "html >body >div#content >div#colOne >div.entry.entry-1"
    }, {
        url: "http://kykernel.com/2010/10/24/turnovers-put-cats-in-the-doghouse-uk-drops-44-31-to-georgia/",
        selector: "html >body >div#wrap >div#content >div#contentleft >div.post"
    }, {
        url: "http://www.popfi.com/2010/10/22/all-caps-road-signs-will-soon-disappear/",
        selector: "html >body.unusual >div#body_design >div#container >div#content >div#posts >div#post-9427.post.unusual.alt >div.post_design >div.post_inner >div.entry"
    }, {
        url: "http://www.clarksvilleonline.com/2010/10/24/collins-throws-three-touchdown-passes-in-win/",
        selector: "html >body.single.single-post.postid-52150 >table#container >tbody >tr >td#content"
    }, {
        url: "http://seekingalpha.com/article/231900-zalicus-ridiculously-cheap",
        selector: "html >body >div#main_container >div#content_wrapper.article_pages >div#main_content.no_big_gaps_main_content >div#article_body_container.no_big_gaps_article_body_container >div#article_body"
    }, {
        url: "http://www.theworld.org/2010/10/26/us-working-with-afghan-police/",
        selector: "html >body >div.container >div#post_content.column.span-14 >div.column.span-11.first >div.post_text"
    }, {
        url: "http://www.celebjihad.com/celeb-jihad/rachel-bilson-wears-ill-fitting-dress",
        selector: "html >body >div#main >div#wrap >div#content >div#contentleft >div.postarea"
    }, {
        url: "http://www.brothers-brick.com/2010/10/24/oort/",
        selector: "html >body >div#page >div#content.narrowcolumn >div#post-17447.post"
    }, {
        url: "http://www.bloggernews.net/125427",
        selector: "html >body >div#wrap_talia >div#container_talia >div#content_talia >div.right-content-talia >div#left-post >div#post-entry >div#post-25427.post-meta >div.post-content"
    }, {
        url: "http://www.joannejacobs.com/2010/10/what-would-disney-learn-in-school-today/",
        selector: "html >body.single.single-post.postid-18550.header-full-width.header-image.sidebar-content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-18550.post.type-post.hentry.category-education.tag-disney.tag-edison.tag-einstein.tag-genius.tag-test-prep >div.entry-content"
    }, {
        url: "http://www.medgadget.com/archives/2010/10/transenterix_spider_surgical_system_gets_ce_mark.html",
        selector: "html >body >div#nonFooter >div#wrapper-content >div#wrapper-content-2 >div#content >p"
    }, {
        url: "http://www.bizreport.com/2010/10/european-business-execs-supplementing-traditional-news-chann.html#",
        selector: "html >body >div.content >div#bodysection >div.news >div.article_content >div.article"
    }, {
        url: "http://barenakedislam.wordpress.com/2010/10/24/tony-blairs-sister-in-law-has-lost-her-mind/",
        selector: "html.wf-lourdes1lourdes2-n4-inactive.wf-adelle1adelle2-n9-active.wf-adelle1adelle2-i8-active.wf-adelle1adelle2-n8-active.wf-adelle1adelle2-i7-active.wf-adelle1adelle2-n4-active.wf-adelle1adelle2-i3-active.wf-adelle1adelle2-i4-active.wf-lourdes1lourdes2-n7-active.wf-adelle1adelle2-n7-active.wf-adelle1adelle2-n3-active.wf-adelle1adelle2-n6-active.wf-adelle1adelle2-i6-active.wf-adelle1adelle2-i9-active.wf-active >body >div.narrowcolumn >div#post-78584.post-78584.post.type-post.hentry.category-islamic-britain >div.entry"
    }, {
        url: "http://yubanet.com/regional/Placer-County-is-Opening-A-Local-Assistance-Center-for-Employees-Affected-by-Westfield-Galleria-Fire.php",
        selector: "html >body >table[width=100%] >tbody >tr >td >table >tbody >tr >td >table >tbody >tr >td >p >span.articletext"
    }, {
        url: "http://wearethatfamily.com/2010/10/ill-meet-you-there/",
        selector: "html.sIFR-active >body.single.single-post.postid-3781.header-full-width.header-image.content-sidebar >div#wrap >div#inner >div#content-sidebar-wrap >div#content.hfeed >div.post-3781.post.type-post.hentry.category-faith.category-my-life >div.entry-content"
    }, {
        url: "http://shark-tank.net/2010/10/24/heckler-disrupts-florida-u-s-senate-debate/",
        selector: "html >body >div.container_16.main_wrap >div#content_left_wrapper >div.content_left >div.box >div.block >div.article.first_main_article"
    }, {
        url: "http://blog.streamingmedia.com/the_business_of_online_vi/2010/10/targeting-video-advertisements-metrics-and-methodologies.html",
        selector: "html#sixapart-standard >body.layout-two-column-right >div#container >div#container-inner.pkg >div#pagebody >div#pagebody-inner.pkg >div#alpha >div#alpha-inner.pkg >div#entry-6a00d834518e1c69e201348845f18d970c.entry >div.entry-content"
    }, {
        url: "http://www.moejackson.com/2010-afternoon-pick-me-up-emanuela-de-paula-vs-holiday-2010-1022",
        selector: "html.js >body >div#mainPageWrapper >table#contentWrapper >tbody >tr >td#content >div#primaryContent >div.node >div.content"
    }, {
        url: "http://www.richardsilverstein.com/tikun_olam/2010/10/24/uri-blau-returns-to-israel-for-questioning-kamm-close-to-plea-deal/",
        selector: "html >body >div#container >div#wrapper >div#content >div#post-16271.post-16271.post.type-post.hentry.category-mideast-peace.tag-anat-kamm-uri-blau-affair.tag-espionage.tag-israel-defense-forces.tag-shabak.tag-shin-bet.tag-spying.tag-west-bank >div.entry"
    }, {
        url: "http://www.lighthousehockey.com/2010/10/24/1770684/bridgeport-and-islanders-prospect-roundup-10-24",
        selector: "html >body#blog-interior.blog-layout.blog-interior.samsung-apps >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://gayrights.change.org/blog/view/dancing_with_the_lesbian_israels_celebrity_dance_show_goes_gay",
        selector: "html.can-has-js >body#gayrights.cause-post-page.cause-page >div#container >div#main >div#main-col >div.post.full-post >div.post-body.wordpressEntry"
    }, {
        url: "http://bikeportland.org/2010/10/24/kidical-mass-returns-thriller-zombies-slideshow-41489",
        selector: "html >body >div#page >div#wrapper >div#content >div.post >div.entrytext"
    }, {
        url: "http://www.insidesocialgames.com/2010/10/24/this-week%E2%80%99s-headlines-on-inside-facebook-20/",
        selector: "html >body >div#wrap >div#content >div.entry.entry-0 >div.entrybody"
    }, {
        url: "http://www.disinfo.com/2010/10/insane-video-mapping-show-celebrates-the-prague-astronomical-clocks-600th-anniversary/",
        selector: "html >body >div.wrapper >div.main >div.container >div.columnsholder.single-page >div#content >div.topicbox.no-bg"
    }, {
        url: "http://www.afterelton.com/meme-10-23-2010",
        selector: "html.js >body.node.node-type-content_article >div#container >div#content >div#maincontent.wRight >div.postings >div.node >div.content"
    }, {
        url: "http://www.jackandjillpolitics.com/2010/10/jasiri-xs-hot-new-rap-video-republican-woman-stay-away-from-me/",
        selector: "html >body >div#bgcontainer >div.CON >div.SC >div#post-27951.Post >div.PostContent"
    }, {
        url: "http://www.defencetalk.com/peoples-liberation-airforce-29628/",
        selector: "html >body >div#page-wrap >div#main-wrap >div#content-wrap >div.post >div#post-29628.post"
    }, {
        url: "http://www.gizmodiva.com/home_gadgets/samsung_and_lily_allen_team_up_for_a_super_stylish_notebook.php",
        selector: "html#sixapart-standard >body >div#text >div#main"
    }, {
        url: "http://www.huliq.com/10304/%E2%80%9Cparanormal-activity-2%E2%80%9D-wins-weekend-box-office-415-million",
        selector: "html.js >body#genesis-2c.section-10304 >div#container.not-front.not-logged-in.node-type-content-news-article.one-sidebar.sidebar-right.page-node-97481 >div#columns >div.columns-inner.clear-block >div#content-column >div.content-inner >div#main-content >div#content.section.region >div#node-97481.node.node-promoted.node-content_news_article >div.node-inner >div.node-content"
    }, {
        url: "http://playstationlifestyle.net/2010/10/24/gabriel-belmont-wants-to-save-you-20/",
        selector: "html >body >div#wrapper >div#leftContents >div#singleArticle"
    }, {
        url: "http://baselinescenario.com/2010/10/24/food-and-finance/",
        selector: "html >body >div#container.group >div#content.group >div.main"
    }, {
        url: "http://blogs.edweek.org/edweek/curriculum/2010/10/court_to_teachers_no_free_spee.html",
        selector: "html#sixapart-standard >body#epe-ew-templates.mt-entry-archive.layout-wtt >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-15413.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://bermudaonion.wordpress.com/2010/10/24/weekend-cooking-5-ingredient-fix/",
        selector: "html >body >div#container >div#page.blog >div#content_box >div#content >div#post-12196.post-12196.post.type-post.hentry.category-books.category-food.tag-books.tag-food.tag-weekend-cooking.tag-claire-robinson >div.entry"
    }, {
        url: "http://www.mmamania.com/2010/10/26/1776286/ufc-121-medical-suspensions-and-injuries-for-lesnar-vs-velasquez-on",
        selector: "html >body#blog-interior.blog-layout.blog-interior >div.container.clearfix >div#main.main.clearfix >div#col-content.col.col-content >div#entries.entries >div.entry >div.entry-body"
    }, {
        url: "http://www.digital-photography-school.com/travel-photography-subjects-art",
        selector: "html >body >div#wrapper >div#mid >div#content.content >div.post >div.post-content"
    }, {
        url: "http://www.kidglue.com/2010/10/23/could-grade-school-councilors-significantly-improve-educational-success/",
        selector: "html >body >div#container >div#just-for-sidebar-background >div#tsavo-content >div.article.page >div#article-body"
    }, {
        url: "http://www.talkleft.com/story/2010/10/22/234025/99",
        selector: "html >body >div#page_2col.page >div#wrapper >div#story_template.content >div#story"
    }, {
        url: "http://www.concurringopinions.com/archives/2010/10/texting-while-driving-and-invading-my-privacy-while-texting.html",
        selector: "html >body >div#wrapper >div#min-width >div#header >center >table[width=95%] >tbody >tr >td >table[width=100%] >tbody >tr >td#centercol >div#content-wrapper >div#content"
    }, {
        url: "http://blog.reidreport.com/2010/10/flashback-rick-scott-lobbied-george-w-bush-to-halt-expansion-of-tx-kids-health-coverage/",
        selector: "html >body >div#wrap >div#content >div#contentleft"
    }, {
        url: "http://edition.cnn.com/2010/WORLD/asiapcf/10/27/indonesia.quake/index.html",
        selector: "html >body >div#cnnContainer >div.cnn_maincntnr >div.cnn_contentarea >div#cnnContentContainer.cnn_storyarea >div.cnn_strycntntlft"
    }, {
        url: "http://sportsillustrated.cnn.com/basketball/nba/gameflash/2010/10/29/28185_recap.html",
        selector: "html >body >div.cnnPage >div.cnngContent >div.cnngRecap >div.cnngRecap"
    }, {
        url: "http://money.cnn.com/2010/10/20/pf/investing_sentiment.moneymag/index.htm",
        selector: "html >body#investing_sentimentmoneymag102010.cnnStoryPage >div#cnnBody >div.cnnBody_Left >div.storytext"
    }, {
        url: "http://www.nytimes.com/2010/10/28/business/global/28euro.html",
        selector: "html >body >div#shell >div#page.tabContent.active >div#main >div.spanAB.wrap.closing >div#abColumn.abColumn >div#article >div.columnGroup.first"
    }, {
        url: "http://www.washingtonpost.com/wp-dyn/content/article/2010/10/27/AR2010102705228.html",
        selector: "html >body#PageArticle >div#PageArticleCommon.wrapperFull >div#wrapperMain >div#wrapperMainCenter >div#wrapperInternalCenter >div#article >div#article_body"
    }, {
        url: "http://online.wsj.com/article/SB10001424052702303284604575582273576079534.html",
        selector: "html >body >div.fullwide.subType-unsubscribed >div.reallywide >div#articleTabs_panel_article.mastertextCenter >div.padding-left-big >div#article_story.col6wide.colOverflowTruncated >div#article_story_body.article.story >div.articlePage"
    }, {
        url: "http://www.latimes.com/news/local/la-me-brown-gov-20101030,0,1818774.story",
        selector: "html >body >div#container >div#content-rail-wrapper >div#content.article >div.story >div#story-body.articlebody"
    }, {
        url: "http://townhall.com/news/business/2010/10/29/saudis_gave_tip_on_cargo_explosives",
        selector: "html >body >form#aspnetForm >div#OuterWrapper >div#Wrapper >div#Content >div#Main >div.article-body"
    }, {
        url: "http://reason.com/blog/2010/10/30/what-we-saw-at-the-rally-to-re",
        selector: "html.wf-ffmetawebpro1ffmetawebpro2-i7-active.wf-ffmetawebpro1ffmetawebpro2-n7-active.wf-ffmetawebpro1ffmetawebpro2-n4-active.wf-ffmetawebpro1ffmetawebpro2-i4-active.wf-active >body.inner.hitandrun >div.headershadow >div.logooverlay >div.container >div.container-inner >div.col2-subcolumn >div.col2 >div.post.inner >div.entry"
    }, {
        url: "http://www.dailykos.com/storyonly/2010/10/29/915033/-My-response-to-a-teabagger-on-Facebook",
        selector: "html >body.ads >div#container >div#main >div#story"
    }, {
        url: "http://www.reuters.com/article/idUSTRE69S3NJ20101029",
        selector: "html >body >div#content >div#articleContent.section.gridlined4 >div.sectionContent >div.sectionColumns >div.column2.gridPanel.grid8"
    }, {
        url: "http://factcheck.org/2010/10/stimulus-jobs-in-china/",
        selector: "html >body >div#main >div#wrap >div#content >div#contentleft >div.postarea"
    }, {
        url: "http://www.time.com/time/world/article/0,8599,2027857,00.html",
        selector: "html >body >div#articleMain.wrap >div#content >div.mainWrapper >div.container >div.articleContentWrapper >div.articleContent"
    }, {
        url: "http://blogs.ft.com/beyond-brics/2010/10/27/premier-wen-pushing-chinas-political-boundaries/",
        selector: "html >body.wide.no-ad-placeholder-refresh >div#body-content >div#body-wrapper >div#body-content-col >div#primary-content-wrap >div#primary-content >div.assankablogs >div#content.widecolumn >div#post-134136.post.firstpost.single_posts >div.entry"
    }, {
        url: "http://blogs.villagevoice.com/runninscared/2010/10/sal_vitale_the.php",
        selector: "html >body >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u >div.contentview >div.entry >div.body"
    }, {
        url: "http://www.chicagotribune.com/news/ct-met-brazier-funeral-20101029,0,6745590.story",
        selector: "html >body >div#container >div#content-rail-wrapper >div#content.article >div.story >div#story-body.articlebody"
    }, {
        url: "http://abcnews.go.com/US/rape-high-school-cheerleader-vows-fight-school-district/story",
        selector: "html >body >div.window >div.bodycontainer >div.story_body >div.story_main >div#storyText.storyTextMd >div.story_text"
    }, {
        url: "http://www.foxnews.com/entertainment/2010/10/27/audrina-patridge-sent-hills-dancing-stars/",
        selector: "html >body >div.content-container >div#content.container.dont-showgrid >div.content-divider >div.panel.main-col.span-9 >div.component >div#article-section.hnews.hentry.item >div#introduction >div.entry-content"
    }, {
        url: "http://vdare.com/baldwin/101028_liberty.htm",
        selector: "html >body >div >center >table[width=70%] >tbody >tr >td"
    }, {
        url: "http://news.yahoo.com/s/ap/us_republicans_agenda;_ylt=As8E6CTeF5zMEXLlPTAZI3Ws0NUE;_ylu=X3oDMTNsbHNpNjdtBGFzc2V0A2FwLzIwMTAxMDI4L3VzX3JlcHVibGljYW5zX2FnZW5kYQRjY29kZQNtb3N0cG9wdWxhcgRjcG9zAzEEcG9zAzIEcHQDaG9tZV9jb2tlBHNlYwN5bl90b3Bfc3RvcnkEc2xrA3JlcHVibGljYW5zaA--",
        selector: "html.yui3-js-enabled >body.js >div#doc4.yui-t6 >div#bd >div#yui-main >div.yui-b >div#yn-story.ult-section.mod.normal-entry >div.bd >div.yn-story-content"
    }, {
        url: "http://news.discovery.com/tech/wind-power-without-the-blades.html",
        selector: "html >body >div#container-primary >div#container-wide-content.clear.clearfix >div#container-wide-left-column >div#open-body"
    }, {
        url: "http://www.un.org/apps/news/story.asp",
        selector: "html >body >div#Container >div#SecondLevelColOne"
    }, {
        url: "http://www.alarabiya.net/articles/2010/10/28/123947.html",
        selector: "html >body.contents_default.ar >div.site-container >div.body-container >div.right-body-container >div.news-container >div.news-container-left-side"
    }, {
        url: "http://www.chinadaily.com.cn/china/2010-10/28/content_11467547.htm",
        selector: "html >body >div.div_style1 >dl >span >div#Content"
    }, {
        url: "http://news.cnet.com/8301-13577_3-20020965-36.html",
        selector: "html >body.siteId3.pageType8301 >div#rb_bodyWrap >div#rb_shell >div#rb_content.blogId36 >div#contentMain >div#contentBody >div.post >div.txtWrap >div.postBody"
    }, {
        url: "http://www.bbc.co.uk/news/world-asia-pacific-11640961",
        selector: "html.blq-js >body.news.bbcdotcomAdvertsResetTop.bbccom_slot_mpu >div#blq-container-outer >div#blq-container.blq-lang-en-GB.blq-dotcom.blq-gvl-3 >div#blq-container-inner >div#blq-main.blq-clearfix >div.asia-pacific.has-no-ticker >div#content-wrapper.international >div#main-content.story.blq-clearfix >div.layout-block-a >div.story-body"
    }, {
        url: "http://news.nationalgeographic.com/news/2010/10/photogalleries/101023-ancient-landmarks-vanishing-global-heritage-report-pictures/#/world-heritage-fun-sites-threatened-mahasthangarh-bangladesh_27813_600x450.jpg",
        selector: "html.js >body.news.boxgrid.news.level_3.gallery >div#body_wrap >div#container >div#content >div#content_page_specific >div#content_mainA >div.subsection"
    }, {
        url: "http://www.msnbc.msn.com/id/39878655/ns/world_news-south_and_central_asia/",
        selector: "html >body.world_news.south_and_central_asia.afghanistan.msnbc.RunOfSite.adX1.Long.rich >div#article.hnews.hatom.hentry.hfeed >div.content >div#slice-1.i1.slice.t-TextSlice.text.media-image.entry-content >div#intelliTXT >div.page.i1.txt"
    }, {
        url: "http://detnews.com/article/20101027/POLITICS02/10270432/News-poll--Snyder--GOP-candidates-hold-big-leads",
        selector: "html >body#articlepage1 >div.page >div#contentWrap >div#mainContent >div#topContent >div#articleBody.normalText"
    }, {
        url: "http://www.abc.net.au/news/stories/2010/10/28/3050716.htm",
        selector: "html.js >body#storypage >div.page_margins >div#main.page.section >div#story.subcolumns >div#article.c75l >div.section"
    }, {
        url: "http://www.cbc.ca/canada/manitoba/story/2010/10/27/mb-graham-james-arrested-winnipeg.html",
        selector: "html.yui3-js-enabled >body#cbc.pred >div#body >div#storywrapper.clearfix >div#story >div#storybody"
    }, {
        url: "http://www.fin24.com/Budget/Mini-Budget-2010/Rand-cowers-as-Gordhan-cracks-whip-20101027",
        selector: "html >body >form#aspnetForm >div#mainwrapper >div.contentwrapper >div.leftcolumn.left >div.widecolumn.clr >div.main_article"
    }, {
        url: "http://www.npr.org/templates/story/story.php",
        selector: "html >body#news.tmplNewsStory.type1.id130863410.theme1122 >div#sectionWrap >div#wrapper >div#wrapper_main >div#main_content >div#content >div#storybody >div#storytext.storylocation"
    }, {
        url: "http://www.independent.co.uk/life-style/fashion/news/shop-till-youre-dropped-moss-reaches-sellby-date-2118449.html",
        selector: "html >body#london.subs.sunday.twoCol.none >center >div#InSkinContainer_myPageSkin.InSkinContainer >div#InSkinContentContainer_myPageSkin >div#InSkinPageContainer_myPageSkin.InSkinPageContainer >div#root >div#content.wrapper >div#mainColumn >div#article.article-new >div.body"
    }, {
        url: "http://www.rnw.nl/english/article/zero-waste-fashion",
        selector: "html.js >body.normal.node.og_english.lightbox-processed >div.center_floater >div.container_16 >div.grid_11.content_container >div.inner_content_container >div.content >div.article >div.article-content >div.article-content-body"
    }, {
        url: "http://www.pbs.org/newshour/rundown/2010/10/nightmarish-stories-of-mortgage-modification-woe.html",
        selector: "html >body >div#container >div#content-border >div#column-left >div#blog_content >div.story >div.body"
    }, {
        url: "http://www.pbs.org/wgbh/nova/insidenova/2010/10/the-great-breakthrough.html",
        selector: "html#sixapart-standard >body#mt-community-blog.mt-entry.layout-wt >div#container >div#container-inner >div#content >div#content-inner >div#alpha >div#alpha-inner >div#entry-3095.entry-asset.asset.hentry >div.asset-content.entry-content"
    }, {
        url: "http://www.topix.com/world/china/2010/10/myanmar-elections-china-bullying-in-south-china-sea-likely-to-dominate-asia-summit-in-vietnam",
        selector: "html >body#stream >div#full_page_wrap >div#wrapper.threecol >div#onetwocombo >div#col2 >div"
    }, {
        url: "http://www.rte.ie/news/2010/1028/eu_lisbon.html",
        selector: "html >body >div.container_main >div.rte_gr_8 >div#news-article-container >div#panel-article.story-content.tabbed.open >div.storyBody"
    }, {
        url: "http://www.economist.com/node/17358190",
        selector: "html.js >body.not-front.not-logged-in.page-node.node-type-article.one-sidebar.sidebar-right.world-menu.business-menu.economics-menu.lightbox-processed.site-index-processed >div#page.container >div#columns.clearfix >div#column-content.grid-10.grid-first.clearfix >div#ec-article.clearfix >div#ec-article-body"
    }, {
        url: "http://www.euronews.net/2010/10/27/protests-as-romanian-pm-survives-confidence-vote/",
        selector: "html >body.js-active.active_C >div#main-content.container >div.column.span-16 >div#player-sub.col-16-bg.col-p-t.col-m-b >div#article-wrap.col-16-bt.col-p-b.col-p-lr.clear"
    }, {
        url: "http://www.spiegel.de/international/zeitgeist/0,1518,725399,00.html",
        selector: "html >body#international.spBereich4709.spArticleContent >div#spWrapper >div#spContentWrapper >div#spContainer.spClearfix.spArticle.spSmallScreen >div#spArticleColumn"
    }, {
        url: "http://www.globalfutureevents.com/event.php",
        selector: "html >body >table.bg1 >tbody >tr >td >table[width=922] >tbody >tr >td[width=702] >table[width=100%] >tbody >tr >td.bg3 >table[width=95%] >tbody >tr >td >p"
    }, {
        url: "http://news.sky.com/skynews/Home/World-News/15-Killed-In-Mexico-Car-Wash-Shooting-Drug-Hitmen-Suspected/Article/201010415780805",
        selector: "html >body >div#mainShell >div#leftMainContainer >div#contentContainer >div#article_body.articleBody >div.module_body"
    }, {
        url: "http://www.cbsnews.com/stories/2010/10/27/national/main6997779.shtml",
        selector: "html >body.siteId162.pageType2100.nodeId201.channelId201 >div#cbsBodyWrap >div#cbsContentWrap >div#cbsContent >div.cbsInnerWrap >div#contentMain >div#contentBody"
    }, {
        url: "http://www.mcclatchydc.com/2010/10/28/102735/alaska-reversal-high-courts-write.html",
        selector: "html >body >div#wrapper >div#content_story_detail.layout_normal >div#left_wrap.float_container >div#col_1.story >div#story_body"
    }, {
        url: "http://english.aljazeera.net/news/americas/2010/10/2010102713264244362.html",
        selector: "html >body.MainBG >form#2010102713264244362 >div#dvPostingExt >div#dvPostingMain >div#dvContentMain >div#ctl00_dvContent_Left.dvContent_Left_Class >table[width=100%] >tbody >tr"
    }, {
        url: "http://www.ctv.ca/CTVNews/TopStories/20101027/proctor-plea-101027/",
        selector: "html >body >div.newsMain >div#content >div.headlineBorder >div >div.videoContent >div#storyBox2.storyContent >div.mainBody"
    }, {
        url: "http://toronto.ctv.ca/servlet/an/local/CTVNews/20101030/fire-dead-101030/20101030",
        selector: "html >body >div.centre >table >tbody >tr >td#mainTableLeftContainer >table >tbody >tr >td.middleBodyRoundAM >div#mainTableLeft >div#storyBox >div.storyBody"
    }, {
        url: "http://www.ctv.ca/CTVNews/TopStories/20101029/suspicious-items-101029/",
        selector: "html >body >div.newsMain >div#content >div.headlineBorder >div >div.videoContent >div#storyBox2.storyContent >div.mainBody"
    }, {
        url: "http://hosted.ap.org/dynamic/stories/U/US_CLINTON_ASIA",
        selector: "html >body >table[width=740] >tbody >tr >td[width=470] >div >table.ap-story-table.hnews.hentry.item >tbody >tr >td >div.body"
    }, {
        url: "http://www.guardian.co.uk/world/2010/oct/28/norman-tebbit-eu-budget-vichy",
        selector: "html >body.article >div#wrapper >div#box >div#content >div#article-wrapper"
    }, {
        url: "http://www.france24.com/en/20101027-new-strikes-protests-follow-adoption-pension-reform-bill-france",
        selector: "html.js >body.not-front.not-logged-in.node-type-article.one-sidebar.sidebar-right.page-20101027-new-strikes-protests-follow-adoption-pension-reform-bill-france.section-20101027-new-strikes-protests-follow-adoption-pension-reform-bill-france.lightbox-processed >div#page >div#page-inner >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#content-area >div.node.article.article-photo"
    }, {
        url: "http://www.voanews.com/english/news/asia/US-Japan-Call-for-New-Sources-of-Rare-Earth-Minerals-105998003.html",
        selector: "html >body#english >div#contentWrapper >div#mainContentContainer.clearDiv >div#mainContentCell >div#mainContent.article >p"
    }, {
        url: "http://www.cctv.com/english/news/TVNews/MorningNews/20030806/100154.html",
        selector: "html >body >center >table[width=770] >tbody"
    }, {
        url: "http://www.spiked-online.com/index.php/site/article/9837/",
        selector: "html >body >table[width=739] >tbody >tr >td[width=567] >table[width=567] >tbody >tr >td[width=395] >table >tbody >tr >td"
    }, {
        url: "http://www.heute.de/ZDFheute/inhalt/14/0,3672,8125486,00.html",
        selector: "html >body >div#master-back >div#master-center >div#wrapper >div.innerwrapper >div.content-column"
    }, {
        url: "http://www.komu.com/KOMU/d7e2017e-80ce-18b5-00fa-0004d8d229cb/f8ceb917-80ce-18b5-017f-929a40d07da9.html",
        selector: "html >body >table[width=959] >tbody >tr >td >table[width=1000] >tbody >tr >td[width=489]"
    }, {
        url: "http://www.atvn.org/index.php/news/story/102810_anna_nicole_smith/",
        selector: "html >body >center >table[width=1000] >tbody >tr >td >center >table[width=980] >tbody >tr >td >center >table.storybox >tbody >tr >td >div#story-container >div#storyColumn >div#textbody"
    }, {
        url: "http://itn.co.uk/2abef1f6022a86f0a26149e33795846c.html",
        selector: "html >body >div#maincontainer >div.wholecontainer >div.bgcontainer >div.layoutpad >div.bodycont.flotlt >div.bodycont.flotlt >div.ful-cont.flotlt.padtop14 >div.news-lt.flotlt >div.ful-cont.flotlt >p.ful-cont.fnt-11.grey.flotlt.resizable"
    }, {
        url: "http://www.dr.dk/Nyheder/Udland/2010/10/29/213248.htm",
        selector: "html >body#page >form#NewsArticleForm >div.Top >div#gridMode.grid1024 >div#pageContentWrapper >div#pageContent >div#innerWrapper >div#content.resizeDiv >div#columnWrapper >div#columnWrap >div#columnLeft.resizeDiv >div.articleContainer >div.article"
    }, {
        url: "http://nyhederne.tv2.dk/article.php/id-34630140:vidne-dansk-milit%C3%A6rtolk-s%C3%A5-fangetortur.html",
        selector: "html >body.page-politik >div#wrapper-page >div.grid.grid-width-12 >div.grid-canvas >div#content.con-12 >div.con-12 >div.col-8.space-10 >div.con-8.space-10 >div.col-8.space-10 >div.content-article.news-article.hentry.con-8 >div.entry-content.con-8"
    }, {
        url: "http://www.br-online.de/bayerisches-fernsehen/rundschau/csu-parteitag-seehofer-ID1288289861892.xml",
        selector: "html >body#content.bayerisches-fernsehen >div.wrapper >div#individualBereich.container >div#Inhalt.contentBox >div#copy.contentBR"
    }, {
        url: "http://www.arte.tv/de/3494086.html",
        selector: "html >body >div#main_container >div#corpus_container >div#left_content >div.text"
    }, {
        url: "http://www.tagesschau.de/ausland/artenschutz118.html",
        selector: "html >body >div#colsStructure >div#allCols >div#centerCol.singleCol >div.centerColPadding >div.contModule.conttext.article"
    }, {
        url: "http://www.altweeklies.com/aan/johnny-got-his-pills/Story",
        selector: "html >body#story >div#wrapper.clearfix >div#mainColumn.clearfix >div#storyColumn.clearfix >div#featuredStory"
    }, {
        url: "http://www.wnd.com/index.php",
        selector: "html >body >table[width=100%] >tbody >tr >td >div.bod >div.KonaBody"
    }, {
        url: "http://thehill.com/homenews/house/126465-dem-leader-unfortunate-that-pelosi-is-being-vilified-",
        selector: "html >body >table#main >tbody >tr >td#body >table.content_n >tbody >tr >td >div.content"
    }, {
        url: "http://www.newsmax.com/InsideCover/US-Florida-Senate-Clinton/2010/10/29/id/375364",
        selector: "html >body.LTR.Safari.ENUS >form#form1 >div.mainWrapper >div.TopZone >div >div.mainDiv >div >div.zoneMainContent >div >div >div#nounderline_blue >div#article_center_wrapper.copy >div#textbody.article_copy >div#plc_lt_zoneContent_pageplaceholder_pageplaceholder_lt_zoneCenter_NewsmaxArticleLandingPage_pnl"
    }, {
        url: "http://www.bloomberg.com/news/2010-10-29/u-s-michigan-consumer-sentiment-index-falls-more-than-estimated-to-67-7.html",
        selector: "html >body.news.story >div#container.module >div#content.clearfix >div#primary_content >div#story.component.with_related_categories >div#story_content.clearfix"
    }, {
        url: "http://universe.byu.edu/node/11829",
        selector: "html.js >body#mainbody.onlyright.lightbox-processed >div#page >div#container >div#wrap >div#leftpart >div#mainarea >div#contentarea >div.typepage >div#node-11829.node >div.node-inner >div#content_1.content"
    }, {
        url: "http://www.lemonde.fr/economie/article/2010/10/30/carburant-retour-a-la-normale-et-baisse-de-prix-en-vue_1433393_3234.html#ens_id=1305816",
        selector: "html >body >div.outerContainer >div.innerContainer >div >div#mainContent >div#mainBlock >div.mainText"
    }, {
        url: "http://www.jewishworldreview.com/1010/cardozo_aging.php3",
        selector: "html >body >p >table[width=760] >tbody >tr >td"
    }, {
        url: "http://www.fff.org/comment/com1010g.asp",
        selector: "html >body >table[width=706] >tbody >tr >td[width=506] >table >tbody >tr >td[width=506]"
    }, {
        url: "http://www.commondreams.org/headline/2010/10/29-6",
        selector: "html.js >body.not-front.not-logged-in.ntype-headline.one-sidebar.sidebar-left.js >div#cd-page.container >div#main-content.span-40.last.clear-block >div#main-new.span-29.last.column.clear-block >div.clear-block.content-body >div#node-61877.node.node.ntype-headline.node-page >div.node-inner >div.inside.clear-block >div#node-body"
    }, {
        url: "http://frontpagemag.com/2010/10/29/voter-fraud-in-america/",
        selector: "html >body >div#wrapper >div#innerContent >div#innerLeft >div.post"
    }, {
        url: "http://www.indymedia.org/en/2010/09/941843.shtml",
        selector: "html >body >table[width=100%] >tbody >tr >td#a-centertd >div.contentbox"
    }, {
        url: "http://www.csmonitor.com/USA/Military/2010/1028/Pentagon-had-red-flags-about-command-climate-in-kill-team-Stryker-brigade",
        selector: "html >body#USA.story >div#pageBounds >div#contentBounds.cfx >div#mainColumn >div.sBody"
    }, {
        url: "http://www.miamiherald.com/2010/10/29/1897884/kendrick-meek-reaffirms-hes-in.html",
        selector: "html >body.story >div#pagewrapper >div#pageContainer.cf >div#content.cf >div.main.cf >div#storyBody.cf >div#storyBodyContent"
    }, {
        url: "http://www.nationalreview.com/corner/251520/how-big-wave-ask-cook-and-rothenberg-henry-olsen",
        selector: "html.js >body >div#blog_content_container >table.article >tbody >tr >td.blog_content_td >div#blog_text_holder >table[width=100%] >tbody >tr >td >div#blog_text.blog_text"
    }, {
        url: "http://money.usnews.com/money/blogs/the-smarter-mutual-fund-investor/2010/10/27/3-reasons-to-pay-attention-to-taxes-before-january-1",
        selector: "html >body.section-money.section-money-no-subsection.type-blog-entry.id-35111 >div#main >div#content.KonaBody"
    }, {
        url: "http://www.weeklystandard.com/articles/worst-friends_511732.html",
        selector: "html.js >body.not-front.not-logged-in.node-type-article.no-sidebars.page-articles-worst-friends-511732-html.section-articles >div#container >table.main-content >tbody >tr >td#center"
    }, {
        url: "http://www.alternet.org/story/148640/what_it%27s_like_to_work_in_walmart_hell/",
        selector: "html >body >div#body_main >div.main_left_column >div.story-body-container >div#the_body.body_"
    }, {
        url: "http://www.thenation.com/article/155641/nativists-get-tea-party-makeover",
        selector: "html.js >body.not-front.not-logged-in.page-node.node-type-article.two-sidebars >div#wrapper >div#center >div.container.clearfix >div#center-sidebar-right.clearfix >div#article-body >div#wysiwyg"
    }, {
        url: "http://counterpunch.org/",
        selector: "html >body >table[width=896] >tbody >tr >td[width=525]"
    }, {
        url: "http://www.freerepublic.com/focus/f-chat/2617500/posts",
        selector: "html"
    }, {
        url: "http://www.rushlimbaugh.com/content/home/daily/site_102710/content/01125109.guest.html",
        selector: "html >body >table >tbody >tr >td >table[width=984] >tbody >tr >td#backcontentbox >table[width=100%] >tbody >tr >td"
    }, {
        url: "http://www.etherzone.com/2010/kirk10290.shtml",
        selector: "html >body >div >center >table[width=100%] >tbody >tr >td[width=100%] >em >div >center >table[width=100%] >tbody >tr >td[width=100%] >table[width=100%] >tbody >tr >td[width=100%]"
    }, {
        url: "http://www.washingtontimes.com/news/2010/oct/29/obama-offers-details-package-explosive-threat/",
        selector: "html >body >div.shell >div.page >div.content.full.left >div.column.c640.hnews.hentry.item >div.story.left.mb"
    }, {
        url: "http://www.cnnexpansion.com/tecnologia/2010/10/29/smartphones-el-objetivo-de-microsoft",
        selector: "html >body >section#first.master-row >article#mainContent >div#contenido >div#cambiarFuente"
    }, {
        url: "http://tech.slashdot.org/story/10/10/29/216242/Users-Sue-Google-Facebook-Zynga-Over-Privacy",
        selector: "html >body.-view.webkit >div#doc3.yui-t6.index2.technology.ac >div#bd >div#yui-main.a2 >div.yui-b.hideleftmenu >div.yui-u.a2.maincol.first >div#firehose.nothumbs >div#firehoselist.fhroot >div#firehose-17264860.fhitem.fhitem-story.article.usermode.thumbs >div#fhbody-17264860.body"
    }, {
        url: "http://www.people.com/people/article/0,,20438013,00.html",
        selector: "html >body#tvwatch.article.tvprojectrunway >div#container >div#wrapper >div#main.js >div#topRow >div#leftColumns >div#middleColumn >div#articlebody"
    }, {
        url: "http://www.nationmaster.com/article/Bad-Girls",
        selector: "html >body.body >table >tbody >tr >td >table >tbody >tr >td.body >table.body >tbody >tr"
    }, {
        url: "http://motherjones.com/mojo/2010/10/jim-demint-pac-senate-conservatives-fund",
        selector: "html.js.cufon-active.cufon-ready >body.not-front.not-logged-in.node-type-blogpost.one-sidebar.sidebar-right.page-mojo-2010-10-jim-demint-pac-senate-conservatives-fund.section-mojo >div#page >div#page-inner >div#main >div#main-inner.clear-block >div#content >div#content-inner >div#content-area.clear-block >div#node-84031.node.node-type-blogpost.node-type-blogpost-full >div.node-inner.clear-block >div.content.clear-block >div#node-body-top.clear-block"
    }, {
        url: "http://www.newyorker.com/online/blogs/books/2010/10/books-for-us-books-for-them-and-one-for-none.html",
        selector: "html >body.s_online.ss_blogs.c_books >div#wrapper >div#page.p >div#content.pc >div.cp >div#blogs.cpi >div#pagebody.hfeed >div#entry-2000000001060340.hentry.entry >div.entry-content"
    }, {
        url: "http://www.wsws.org/articles/2010/oct2010/terr-o30.shtml",
        selector: "html >body >div#page.clearfix >div#content"
    }, {
        url: "http://blog.buzzflash.com/node/11875",
        selector: "html.js >body >table#content >tbody >tr >td >div#main >div.node >div.content >p"
    }, {
        url: "http://www.webmd.com/breast-cancer/news/20101027/green-tea-doesnt-prevent-breast-cancer-study-finds",
        selector: "html.pc >body >div#centering_area >div#page_area >div#mainContentContainer_area >div.bottomBackground_fmt >div#contentBackground_fmt >div#mainContent_area >div#mainContent_ctr >div#middleContent_fmt >div#ContentPane5 >div.article_rdr >div#textArea.copyNormal"
    }, {
        url: "http://www.rollcall.com/news/51108-1.html",
        selector: "html >body >div#page >div#content >div#columnMain"
    }, {
        url: "http://rivals.yahoo.com/ncaa/basketball/blog/the_dagger/post/Pittsburgh-s-Jamie-Dixon-helps-rescue-car-accide",
        selector: "html.yui3-js-enabled >body#ysports.blog.post.ysp-woah-enabled >div#doc.yui-t4 >div#bd >div#yui-main >div.yui-b >div >div#blog-post >div.bd >div.ysp-blog-post >div.ncaab >div.bd"
    }, {
        url: "http://www.weeklystandard.com/articles/they-hate-our-guts_511739.html",
        selector: "html.js >body.not-front.not-logged-in.node-type-article.no-sidebars.page-articles-they-hate-our-guts-511739-html.section-articles >div#container >table.main-content >tbody >tr >td#center"
    }, {
        url: "http://www.mediaite.com/online/this-exists-video-of-deaf-baby-boy-hearing-for-the-first-time-goes-viral/",
        selector: "html >body >div#main >div.slice >div.posts >div.post0.story"
    }, {
        url: "http://www.dallasnews.com/sharedcontent/dws/spt/baseball/rangers/stories/103110dnsporangers1a.291f27c.html",
        selector: "html >body.storyPage >center >div#container >div#contentContainer >div#contentContainerLeft >div#contentContainerStories"
    }, {
        url: "http://rangersblog.dallasnews.com/archives/2010/10/with-connections-to-rangers-an.html",
        selector: "html#sixapart-standard >body.blog >center >div#sdmContainerPage >div#sdmContentContainer >div#sdmContainer >div#blogContainerTop >div#blog-body >div.hot-entry"
    }, {
        url: "http://gatesofvienna.blogspot.com/2010/10/lawfare-case-against-pamela-geller.html",
        selector: "html.v2 >body >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.economicpolicyjournal.com/2010/09/administrayion-keynesian-speaks-of.html",
        selector: "html.v2 >body.loading >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry"
    }, {
        url: "http://iaindale.blogspot.com/2010/10/interviewing-peter-mandelson.html",
        selector: "html >body >div#wrapper >div#main >div.post"
    }, {
        url: "http://soupsoup.tumblr.com/post/1394797660/bunch-the-ipads-competition-thanks-to-conrad",
        selector: "html.cufon-active.cufon-ready >body >div#container >div#page >div#cols >div#content >div.post.full.photo >div.panel_content.base_format >div.photo_full"
    }, {
        url: "http://mudwerks.tumblr.com/post/1391394618",
        selector: "html >body >div#content >div.post >div.photo"
    }, {
        url: "http://gregmankiw.blogspot.com/2010/10/barney-frank-then-and-now.html",
        selector: "html >body >div#content >div#main >div#main2 >div.post >div.post-body"
    }, {
        url: "http://balkin.blogspot.com/2010/10/open-letter-to-president-on-acta.html",
        selector: "html >body >table[width=950] >tbody >tr >td >div.posts"
    }, {
        url: "http://mpettis.com/2010/10/pboc-rate-hike-announced/",
        selector: "html >body#viala >div#body >div.wrap >div#post-1367.post.septet.interest-rates >div.entry"
    }, {
        url: "http://marathonpundit.blogspot.com/2010/10/four-corners-furtherance-conclusion.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://googleblog.blogspot.com/2010/10/this-week-in-search-102210.html",
        selector: "html >body >center >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post.uncustomized-post-template >div.post-body"
    }, {
        url: "http://whatdoino-steve.blogspot.com/2010/10/miller-and-murkowski-trade-halloween.html",
        selector: "html.v2 >body >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.theospark.net/2010/10/bonus-babe.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.gop12.com/2010/10/rove-palin-would-be-formidable.html",
        selector: "html >body >div#outer-wrapper >div#main-wrap1 >div#main-wrap2 >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post.hentry.uncustomized-post-template >div#post-5775495274882170692.post-body"
    }, {
        url: "http://presurfer.blogspot.com/2010/10/ecuadorean-crowned-spanish-siesta.html",
        selector: "html.v2 >body >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://googlewebmastercentral.blogspot.com/2010/10/optimizing-sites-for-tv.html",
        selector: "html >body >center >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post.uncustomized-post-template >div.post-body"
    }, {
        url: "http://googledocs.blogspot.com/2010/10/drag-and-drop-images-in-documents.html",
        selector: "html >body >div#template_fixed.template_white >div#main-wrapper >div#content-wrapper >div#main-content >div#main.main.section >div#Blog1.widget.Blog >div#post-wrapper >div.blog-posts.hfeed >div.post >div.post-body"
    }, {
        url: "http://www.punditandpundette.com/2010/10/obama-with-tie-responds-quickly-to.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry.uncustomized-post-template >div.post-body.entry-content"
    }, {
        url: "http://maroonedinmarin.blogspot.com/2010/10/npr-fires-juan-williams-why-denial.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.creativeminorityreport.com/2010/10/10-things-you-cant-do-anymore.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post >div.post-body"
    }, {
        url: "http://fashionista.com/2010/10/tommy-hilfiger-honored-at-pratt-legends-gala-tells-aspiring-designers-to-never-give-up/",
        selector: "html >body.single.single-post.postid-72662 >div#wrap >div#contentWrap.content >div#content.clearfix.site-width.content >div#main.clearfix >div#mainContent.clearfix >div#entry-72662.post-72662.post.type-post.hentry.category-news.category-people-and-parties.tag-george-lois.tag-pratt-institute.fullPost >div.entry"
    }, {
        url: "http://archbishop-cranmer.blogspot.com/2010/10/what-hath-bradford-to-do-with-ripon-and.html",
        selector: "html >body >div#content >div#main >div#main2 >div.post >div.post-body"
    }, {
        url: "http://frugaldad.com/2010/10/22/dave-ramsey-built-a-4-9-million-house-good-for-him-or-over-the-top/",
        selector: "html >body.custom >div#container >div#page >div#content_box >div#content.hfeed >div#post-6217.post-6217.post.type-post.hentry.category-roundups.post_box.top >div.format_text.entry-content"
    }, {
        url: "http://newzeal.blogspot.com/2010/10/indiana-republicans-seeking-to-defund.html",
        selector: "html >body >div >table >tbody >tr >td.body >div#content >div#main >div.post >div.post-body"
    }, {
        url: "http://israelmatzav.blogspot.com/2010/10/mistrial-in-wilders-case.html",
        selector: "html >body >div#content >div#main >div.post"
    }, {
        url: "http://booksbikesboomsticks.blogspot.com/2010/10/because-nycs-gun-regs-werent-tight.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.eurasiareview.com/201010209183/the-obama-administrations-palestinian-civil-war.html",
        selector: "html >body >div#gk_wrapper >div#gk_mainbody.both_columns >div#gk_mainbody_wrap >div#gk_mainbody_wrap2.clearfix >div#gk_content >div#content_wrap.clear >div#gk_current >div#gk_current_wrap >div#component_wrap.clear >div#component >div.joomla >div.article"
    }, {
        url: "http://nomoremister.blogspot.com/",
        selector: "html >body >table[width=100%] >tbody >tr >td.body"
    }, {
        url: "http://www.wpcentral.com/",
        selector: "html >body >div.wapper >div.conti >div.leftpart.l >div.post1"
    }, {
        url: "http://www.wpcentral.com/ATTs-response-adding-more-memory-wp7-go-right-ahead",
        selector: "html >body >div.wapper >div.conti >div.leftpart.l >div.post"
    }, {
        url: "http://googleenterprise.blogspot.com/2010/10/plugging-into-google-apps-for-education.html",
        selector: "html >body >center >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post.uncustomized-post-template >div.post-body"
    }, {
        url: "http://www.botjunkie.com/2010/10/22/epic-pr2-and-rosie-make-pancakes/",
        selector: "html >body >div#post >div#post-6153.post >h4"
    }, {
        url: "http://downwithtyranny.blogspot.com/2009/10/reckoning-price-well-pay-for-economic.html",
        selector: "html >body >div#content >div#main >div#main2 >div#main3 >div.post >div.post-body"
    }, {
        url: "http://filmexperience.blogspot.com/2010/10/take-three-anna-faris.html",
        selector: "html >body >div#outer-wrapper >div#main-wrap1 >div#main-wrap2 >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://joannagoddard.blogspot.com/2010/10/have-good-weekend.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post >div.post-body >p"
    }, {
        url: "http://www.celebrityhotsauce.com/2010/10/jessica-alba-few-more-sexy-gq-shots.html",
        selector: "html.v2 >body >div.content >div.content-outer >div.fauxborder-left.content-fauxborder-left >div.content-inner >div.main-outer >div.fauxborder-left.main-fauxborder-left >div.region-inner.main-inner >div.columns.fauxcolumns >div.columns-inner >div.column-center-outer >div.column-center-inner >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.freetech4teachers.com/2010/10/5-good-resources-for-learning-periodic.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry.uncustomized-post-template >div.post-body.entry-content"
    }, {
        url: "http://nextbigfuture.com/2010/10/order-of-magnitude-enhancement-of-wind.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://poppytalk.blogspot.com/2010/10/weekend-project-make-caramel-apples.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://www.holycool.net/2010/10/holiday-matinees-t-shirts-for-creative.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://nosheepleshere.blogspot.com/2010/10/pledge-of-allegiance-contentious-point.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts >div.post >div#post-5766469293206785794.post-body"
    }, {
        url: "http://inspire.2ia.pl/post/1391017516/every-image-has-a-sound-saxsofunny-adv",
        selector: "html >body >div#content >div.post"
    }, {
        url: "http://citified.blogspot.com/2010/10/have-glamorous-weekend-links.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://jakandjil.com/blog/",
        selector: "html >body >div#page >div#content >div.post >div.mycontent >p"
    }, {
        url: "http://jordanferney.blogspot.com/2010/10/commission-project-extended.html",
        selector: "html >body >div#outer-wrapper >div#wrap2 >div#content-wrapper >div#main-wrapper >div#main.main.section >div#Blog1.widget.Blog >div.blog-posts.hfeed >div.date-outer >div.date-posts >div.post-outer >div.post.hentry >div.post-body.entry-content"
    }, {
        url: "http://smallestminority.blogspot.com/2003/10/it-is-not-business-of-government-it-is.html",
        selector: "html >body >div >table[width=95%] >tbody >tr >td >div.posts"
    }, {
        url: "http://www.sfweekly.com/slideshow/abandoned-san-francisco-30771609/",
        selector: "html >body >table[width=100%] >tbody >tr >td >div.pagecontainer >div.Content >div.backbox >div.content_area.chisel_u.slideshow >div.ssbody >div.slideshow_img"
    }, {
        url: "http://www.peterwknox.com/post/1441274181/rally-to-restore-sanity-and-or-fear-ended-with-a",
        selector: "html >body >div#container >div#container >div#posts >div#postContent.postProp"
    }, {
        url: "http://www.dirjournal.com/info/monsoon-floods-in-pakistan-the-worst-disaster-in-history/",
        selector: "html >body.single.single-post.postid-7072.chrome >div.container >div#post_content.column.span-14 >div.column.span-11.first >div.post_text"
    }, {
        url: "http://www.slate.com/id/2293535/pagenum/all/",
        selector: "div#article_body"
    }],
    y = [{
        url: "http://contentsutra.com/article/419-meet-our-new-entertainment-writer/",
        selector: "html >body.cs.article >div#main_content_box >div#left_column >div#entry_189273.entry >div.content.smaller"
    }, {
        url: "http://moconews.net/article/419-glu-mobiles-revenues-fall-as-it-gears-up-to-launch-new-game-titles/",
        selector: "html >body.mn.article >div#main_content_box >div#left_column >div#entry_189723.entry >div.content.smaller"
    }, {
        url: "http://paidcontent.co.uk/article/419-uk-times-paywall-numbers-105000-customers-since-summer/",
        selector: "html >body.uk.article >div#main_content_box >div#left_column >div#entry_189698.entry >div.content.smaller"
    }, {
        url: "http://kara.allthingsd.com/20101022/a-nerd-by-any-other-name-would-be-as-geek-bing-gordon-waxes-poetic-and-more-at-the-sfund-launch/",
        selector: "html >body.green01.blog-post.a-nerd-by-any-other-name-would-be-as-geek-bing-gordon-waxes-poetic-and-more-at-the-sfund-launch.kara >div#container >div#content >div#content-main >div#content-left.posts >div#post-36077.post >div.entry"
    }, {
        url: "http://mediamemo.allthingsd.com/20101102/casual-games-startup-omgpop-raising-a-serious-funding-round/",
        selector: "html >body.purple01.blog-post.casual-games-startup-omgpop-raising-a-serious-funding-round.mediamemo >div#container >div#content >div#content-main >div#content-left.posts >div#post-25420.post >div.entry"
    }, {
        url: "http://paidcontent.org/article/419-new-yorkers-auletta-much-of-what-aol-publishes-is-piffle/",
        selector: "html >body.pc.article >div#main_content_box >div#left_column >div#entry_191575.entry >div.content.smaller"
    }, {
        url: "http://articles.latimes.com/2011/jan/11/local/la-me-0111-budget-effects-20110111",
        selector: "html >body >div#layout >div#area-center-w-left"
    }, {
        url: "http://www.dr.dk/Nyheder/Service/2010/07/07150006.htm",
        selector: "html >body#page >form#NewsArticleForm >div.Top >div#gridMode.grid1024 >div#pageContentWrapper >div#pageContent >div#innerWrapper >div#content.resizeDiv >div#columnWrapper >div#columnWrap >div#columnLeft.resizeDiv >div.articleContainer >div.article"
    }, {
        url: "http://www.zdnet.com/blog/microsoft/forrester-windows-7-powers-1-out-of-every-10-business-pcs/7873?tag=mantle_skin;content",
        selector: "html >body >div#trunk >div#mantle_skin >div#content.contain.contain-24.clear >div.area-16 >div.clear >div.area-12.area-last >div.content-1.entry.space-1.clear"
    }, {
        url: "http://www.newser.com/story/103662/why-physicists-clean-up-at-poker.html",
        selector: "html >body#section6 >form#aspnetForm >div#bordersDiv >div#bodywrapper >div#pageBounds.whiteBack >div#contentBounds >div#ctl00_DivBounds >div#storyPageContainer >div#storyBackground.clearfix >div.bounds >div.MainCol >div#bothCol >div.MainCol.storyMainCol >div#MainCol1 >div.storyTopMain.boxFrame.buggyElement >div.summary.more >div.threeCol >div#storyP1P2"
    }, {
        url: "http://www.dailymail.co.uk/sciencetech/article-1347515/Is-bird-No-definitely-plane-Nasa-unveils-extraordinary-ideas-aircraft-2025.html",
        selector: "html.ext-strict >body#sciencetech.sciencetechsciencetech.ext-webkit.ext-chrome >div#top.page.page-banner.articlePage >div#page-container >div#content >div.articleWide.cleared >div.alpha >div#js-article-text.article-text.wide"
    }, {
        url: "http://cfn.scout.com/2/1040316.html",
        selector: "html >body >form#theform >div#wrapper >table#Table1.bgStory >tbody >tr >td >table#Table2 >tbody >tr >td[width=500] >table >tbody >tr >td >span.storybody >p"
    }, {
        url: "http://www.36kr.com/",
        selector: "html >body >div#wrapper >div#content >div.post >div.entry"
    }, {
        url: "http://tech2ipo.com/",
        selector: "html >body >div#wrapper >div#content >div#articlePost >div.articleDetail"
    }, {
        url: "http://www.cnbeta.com/articles/131297.htm",
        selector: "html >body >div#wrapper >div#main >div#content >div#contentWrapper >div#newsBox >div#news >div#news_content"
    }, {
        url: "http://code.google.com/appengine/docs/java/oauth/overview.html",
        selector: "html >body.gc-documentation >div#gc-container >div#codesiteContent >div.g-section.g-tpl-170 >div#gc-pagecontent.g-unit"
    }, {
        url: "http://article.yeeyan.org/view/199402/163378",
        selector: "html >body >div.article >div.layout_left >div#conBox.article_content"
    }, {
        url: "http://www.forbeschina.com/review/201012/0006444.shtml",
        selector: "html >body >div#ibody >div#l >div#news_text"
    }, {
        url: "http://www.ftchinese.com/story/001036287",
        selector: "html >body >div#fullbody >div#bodywrapper.pagediv >div#body-content-col >div.topic >div#bodytext.content"
    }, {
        url: "http://blog.163.com/liang_wendao/blog/static/1138023092010102112154943/",
        selector: "html >body#blog-163-com.nb-body.nb-inr.nb-prv >div#blog-163-com-main.nb-wrap.wsy >div.nb-are.nb-cnt >div.wkg >div#blog-163-com-container.c.wc.h.clearfix >div#-3.nb-mdl.lcr.m-3 >div.nb-mc.lcr >div.c.cc.lcr.nb-jsc >div.nbw-ryt.ztag.clearfix >div.left >div.lcnt.bdwr.bds0.bdc0 >div.mcnt.ztag >div.nbw-bitm.bdwb.bds2.bdc0 >div.bct.fc05.fc11.nbw-blog.ztag.js-fs2"
    }, {
        url: "http://learn.iis.net/page.aspx/101/introduction-to-iis-7-architecture/",
        selector: "html >body >form#aspnetForm >div#container >div#content.full-center >div#main-content.two-col-layout >div.reference >div#article-description"
    }, {
        url: "http://dongxi.net/b03Yk",
        selector: "html >body.tundra >div.page >div.main.clearfix >div.i_left >div.i_contents >div.content >div#full_text.content_main.clearfix"
    }, {
        url: "http://www.ifanr.com/30140",
        selector: "html div.entry-content >div.entry-body"
    }, {
        url: "http://www.washingtontimes.com/news/2010/oct/29/obama-offers-details-package-explosive-threat/",
        selector: "html >body#false >div.shell >div.page >div.content.full.left >div.column.c640.hnews.hentry.item >div.story.left.mb"
    }, {
        url: "http://baike.baidu.com/view/27304.htm?hh=255",
        selector: "html >body#view >div#wrap >div#page >div#content-wrap.layout.grid-m0s245.w1000 >div#content.col-main.article >div.main-wrap.main-shadow >div.content-bd.main-body >div.text"
    }, {
        url: "http://www.forbeschina.com/review/201011/0005577.shtml",
        selector: "html >body >div#ibody >div#l >div#news_text"
    }, {
        url: "http://www.showeb20.com/?p=3048",
        selector: "html >body >div#container >div#posts >div#post-3048.post"
    }, {
        url: "http://www.dapenti.com/blog/more.asp?name=xilei",
        selector: "html >body >table.oblog_t_1 >tbody >tr >td.oblog_t_2 >p >table[width=90%] >tbody >tr >td >span.oblog_text"
    }, {
        url: "http://www.dapenti.com/blog/more.asp?name=agile",
        selector: "html >body >center >table[width=1000] >tbody >tr >td[width=750] >p >table[width=90%] >tbody >tr >td >span"
    }, {
        url: "http://www.infzm.com/content/61722",
        selector: "div#content-context"
    }, {
        url: "http://wikileaks.org/",
        selector: "html >body >div.main >div.pane.big"
    }, {
        url: "http://blog.sina.com.cn/s/blog_1234567890dxmp.html",
        selector: "div#articlebody>div.articleContent"
    }, {
        url: "http://blog.sina.com.cn/s/blog_1234567890dxmp.html",
        selector: "div#articlebody>div.articalContent"
    }, {
        url: "http://www.geekpark.net/read/view/159819",
        selector: "div#main article"
    }];
if (v === undefined) v = {};
v.L = new Class({
    N: function(a) {
        a = a.split(".");
        if (a.length < 2) return "";
        var b = a[a.length - 2] + "." + a[a.length - 1],
            c = a.getLast().length == 2 && ["com", "net", "org", "edu", "co"].contains(a[a.length - 2]);
        if (["blogspot.com", "blog.com", "blogbus.com", "wordpress.com", "typepad.com", "americablog.com"].contains(b) || c) {
            if (a.length < 3) return "";
            b = a[a.length - 3] + "." + a[a.length - 2] + "." + a[a.length - 1]
        }
        return b
    },
    g: function(a) {
        a = (new URI(a)).get("host");
        if (!$chk(a)) return "";
        return this.N(a)
    },
    initialize: function() {
        this.w = {};
        this.f = {};
        this.c = {};
        this.Ba = [];
        this.load()
    },
    j: function() {
        var a = this;
        chrome.extension.onMessage.addListener(function(b, c, d) {
            if (b.action === "finder-query") d(a.query(b.host, b.mode));
            else if (b.action === "finder-query-by-feed") {
                c = a.Va(b.feed, b.mode);
                a.Ba[b.url] = b.feed;
                d(c)
            } else if (b.action === "finder-add") {
                a.add(b.url, b.selector);
                a.save();
                b = (new URI(b.url)).get("host");
                $chk(b) && d(a.query(b, ""))
            } else if (b.action === "finder-remove") {
                a.remove(b.url);
                a.save()
            } else if (b.action === "finder-clear") {
                a.clear(b.url);
                a.save()
            } else if (b.action === "finder-clearall") {
                a.C();
                a.save()
            }
            return h
        })
    },
    load: function() {
        if (window.localStorage.myFinders) for (var a = JSON.parse(window.localStorage.myFinders), b = 0; b < a.length; b++) {
            var c = a[b].url;
            c = this.g(c);
            if (c !== "") {
                if (this.c[c] === undefined) this.c[c] = [];
                this.c[c].push(a[b])
            }
        }
        if (x) for (b = 0; b < x.length; b++) {
            c = x[b].url;
            c = this.g(c);
            if (c !== "") {
                if (this.f[c] === undefined) this.f[c] = [];
                this.f[c].push(x[b])
            }
        }
        if (y) for (b = 0; b < y.length; b++) {
            c = y[b].url;
            c = this.g(c);
            if (c !== "") {
                if (this.f[c] === undefined) this.f[c] = [];
                this.f[c].push(y[b])
            }
        }
        for (b = 0; b < w.length; b++) {
            c = w[b].url;
            c = this.g(c);
            if (c !== "") {
                if (this.w[c] === undefined) this.w[c] = [];
                this.w[c].push(w[b])
            }
        }
    },
    save: function() {
        var a = [],
            b;
        for (b in this.c) for (var c = 0; c < this.c[b].length; c++) if (this.c[b][c]) {
            var d = this.c[b][c].url;
            if (d) if (!d.contains("*")) {
                var e = h;
                if (this.f[b] != undefined) for (var f = 0; f < this.f[b].length; f++) if (this.f[b][f].url === d && this.f[b][f].selector === this.c[b][c].selector) {
                    e = k;
                    break
                }
                e && a.push(this.c[b][c])
            }
        }
        window.localStorage.myFinders = JSON.stringify(a)
    },
    qa: function() {
        var a = "",
            b;
        for (b in this.f) a += 'cache.put ("' + b + '", "' + JSON.stringify(this.f[b]).replace(/"/g, '\\"') + '");\n';
        $debug.info(a)
    },
    add: function(a, b) {
        var c = this.g(a);
        if (c === "") return k;
        if (this.c[c] === undefined) this.c[c] = [];
        else for (var d = this.c[c].length - 1; d >= 0; d--) this.c[c][d].url === a && this.c[c].erase(this.c[c][d]);
        this.c[c].push({
            url: a,
            selector: b,
            date: $time()
        });
        return h
    },
    remove: function(a) {
        var b = this.g(a);
        if (b === "") return k;
        if (this.c[b] === undefined) return h;
        for (var c = 0; c < this.c[b].length; c++) if (this.c[b][c].url === a) {
            this.c[b].erase(this.c[b][c]);
            break
        }
        return h
    },
    clear: function(a) {
        a = this.g(a);
        if (a === "") return k;
        delete this.c[a];
        return h
    },
    C: function() {
        this.c = {};
        return h
    },
    query: function(a, b) {
        var c = this.N(a);
        if (c === "") return j;
        var d = [];
        if (b === undefined || b === j) b = "";
        if (b === "" || b === "default") {
            var e = this.f[c];
            if (e) for (var f = 0; f < e.length; f++) {
                for (var g = d.length - 1; g >= 0; g--) e[f].url === d[g].url && d.erase(d[g]);
                d.push(e[f])
            }
        }
        if (b === "" || b === "my") if (e = this.c[c]) for (f = 0; f < e.length; f++) {
            for (g = d.length - 1; g >= 0; g--) e[f].url === d[g].url && d.erase(d[g]);
            d.push(e[f])
        }
        if (b === "" || b === "system") if (e = this.w[c]) for (f = 0; f < e.length; f++) {
            for (g = d.length - 1; g >= 0; g--) e[f].url === d[g].url && d.erase(d[g]);
            d.push(e[f])
        }
        return d
    }
});
if (v === undefined) v = {};
v.K = new Class({
    initialize: function() {
        this.i = [];
        $klippySender = this
    },
    j: m(),
    bb: m(),
    l: function() {
        return $settings.l()
    },
    n: function() {
        var a = (new Date).format("%Y%m%d"),
            b = {
                date: a,
                usage: 0
            };
        if (window.localStorage.todayStatus) b = JSON.parse(window.localStorage.todayStatus) || {
            date: a,
            usage: 0
        };
        if (b.date != a) {
            b.date = a;
            b.usage = 0
        }
        return b
    },
    oa: function(a, b, c) {
        var d = new Image;
        d.onload = function() {
            var e = document.createElement("canvas");
            if (d.width * 680 > d.height * 540) {
                e.width = Math.min(d.width, 540);
                e.height = Number(e.width * d.height / d.width)
            } else {
                e.height = Math.min(d.height, 680);
                e.width = Number(e.height * d.width / d.height)
            }
            var f = e.getContext("2d");
            f.fillStyle = "#ffffff";
            f.fillRect(0, 0, e.width, e.height);
            f.drawImage(d, 0, 0, d.width, d.height, 0, 0, e.width, e.height);
            f = e.toDataURL("image/jpeg").replace(/^data:image\/(png|jpeg);base64,/, "");
            c(b, {
                data: f,
                width: e.width,
                height: e.height,
                src: d.src,
                srcWidth: d.width,
                srcHeight: d.height
            })
        };
        d.onerror = function() {
            c(b, {
                data: j,
                width: 0,
                height: 0,
                src: a,
                srcWidth: 0,
                srcHeight: 0
            })
        };
        d.src = a
    },
    pa: function(a, b) {
        var c = a.getElements("img");
        if (c.length == 0) b(j);
        else for (var d = [], e = 0, f = 0; f < c.length; f++) this.oa(c[f].src, f, function(g, i) {
            d[g] = i;
            e++;
            var l = c[g].get("class"),
                n = c[g].getAttribute("height") || 0,
                o = c[g].getAttribute("width") || 0;
            if (l.indexOf("klip_largeobject") >= 0 || n >= 50 || o >= 200)(new Element("br")).inject(c[g], "after");
            c[g].removeAttribute("src");
            c[g].removeAttribute("class");
            c[g].setAttribute("recindex", "#####");
            c[g].setAttribute("width", i.width);
            c[g].setAttribute("height", i.height);
            e == c.length && b(d)
        })
    },
    V: function(a, b, c) {
        var d = $settings.get();
        if (a["send-later"]) if (!d.favAccount || !d.favAccount.token) {
            if (c) {
                d = chrome.i18n.getMessage("message_26");
                d = d.replace("#%1#", chrome.extension.getURL("options.html"));
                c({
                    message: d,
                    code: 400
                })
            }
            return
        }
        if (d.keep_images == h) return this.xa(a, b, c);
        if (!d.address_domain || !d.address_name || d.address_name == "yourname" || d.address_domain != "kindle.com" && d.address_domain != "free.kindle.com" && d.address_domain != "kindle.cn" && d.address_domain != "iduokan.com") {
            if (c) {
                d = chrome.i18n.getMessage("message_13");
                d = d.replace("#%1#", chrome.extension.getURL("options.html"));
                c({
                    message: d,
                    code: 400
                })
            }
        } else {
            var e = d.address_name + "@" + d.address_domain;
            if (this.check(a.url)) {
                this.log(a.url);
                e = new Element("div", {
                    html: a.html
                });
                e.na("img");
                e.z("*", ["contenteditable"]);
                d.keep_paragraph_spacing && e.O();
                a.html2 = e.get("html");
                a.text = a.text.clean();
                a.summary = a.text.substring(0, 500);
                var f = {
                    client: window.app_id,
                    version: window.app_version,
                    to: d.address_name + "@" + d.address_domain,
                    title: a.title,
                    html: a.html.stripScripts(),
                    html2: a.html2.stripScripts(),
                    summary: a.summary,
                    text: a.text,
                    source: a.url,
                    count: a.count,
                    ss: a.ss
                };
                if (a["send-later"]) f["send-later"] = a["send-later"];
                if (a.name && a.name == "send-to-kindle-mail") if (d.myEmail && d.myEmail.address && d.myEmail.key) f.myEmail = d.myEmail;
                window.tabStatus[b.tab.id] = "sending";
                c || (c = m());
                a = this.l();
                var g = this.n();
                e = a + "v1/sendtokindle/send";
                if (d.favAccount && d.favAccount.token) {
                    f.favToken = d.favAccount.token;
                    delete f.text;
                    e = a + "v1/fav/upload"
                }
                d = new Request({
                    url: e,
                    method: "POST",
                    onSuccess: function() {
                        window.tabStatus[b.tab.id] = "success";
                        var i = "";
                        if (f["send-later"]) i = chrome.i18n.getMessage("message_24");
                        else {
                            i = chrome.i18n.getMessage("message_19");
                            i = i.replace("#%1#", f.to)
                        }
                        c({
                            message: i,
                            status: 200,
                            usage: g.usage
                        })
                    },
                    onFailure: function(i) {
                        window.tabStatus[b.tab.id] = "failure";
                        var l = "";
                        if (f["send-later"]) {
                            l = chrome.i18n.getMessage("message_25");
                            l = l.replace("#%1#", i.status)
                        } else {
                            l = chrome.i18n.getMessage("message_20");
                            l = l.replace("#%1#", f.to);
                            l = l.replace("#%2#", i.status)
                        }
                        c({
                            message: l,
                            status: i.status,
                            usage: g.usage
                        })
                    }
                });
                a = JSON.stringify(f);
                d.send(a)
            } else if (c) {
                d = chrome.i18n.getMessage("message_18");
                d = d.replace("#%1#", e);
                c({
                    message: d,
                    code: 400
                })
            }
        }
    },
    xa: function(a, b, c) {
        var d = $settings.get();
        if (!d.address_domain || !d.address_name || d.address_name == "yourname" || d.address_domain != "kindle.com" && d.address_domain != "free.kindle.com" && d.address_domain != "kindle.cn" && d.address_domain != "iduokan.com") {
            if (c) {
                var e = chrome.i18n.getMessage("message_13");
                e = e.replace("#%1#", chrome.extension.getURL("options.html"));
                c({
                    message: e,
                    code: 400
                })
            }
        } else {
            var f = d.address_name + "@" + d.address_domain;
            if (this.check(a.url)) {
                this.log(a.url);
                var g = this.l();
                window.tabStatus[b.tab.id] = "sending";
                var i = this.n(),
                    l = new Element("div", {
                        html: a.html
                    });
                l.z("*", ["contenteditable"]);
                d.keep_paragraph_spacing && l.O();
                this.pa(l, function(n) {
                    a.html2 = l.get("html");
                    a.text = a.text.clean();
                    a.summary = a.text.substring(0, 500);
                    var o = {
                        client: window.app_id,
                        version: window.app_version,
                        to: d.address_name + "@" + d.address_domain,
                        title: a.title,
                        html: a.html.stripScripts(),
                        html2: a.html2.stripScripts(),
                        summary: a.summary,
                        text: a.text,
                        source: a.url,
                        count: a.count,
                        ss: a.ss,
                        images: n
                    };
                    if (a["send-later"]) o["send-later"] = a["send-later"];
                    if (a.name && a.name == "send-to-kindle-mail") if (d.myEmail && d.myEmail.address && d.myEmail.key) o.myEmail = d.myEmail;
                    c || (c = m());
                    var q = a.html2.length;
                    if (n != j) for (var s = 0; s < n.length; s++) if (n[s] && n[s].data) q += n[s].data.length * 3 / 4;
                    q += 4096;
                    if (q > 2097152) {
                        o.images = j;
                        if (o.html2.length > 2097152) {
                            window.tabStatus[b.tab.id] = "failure";
                            n = chrome.i18n.getMessage("message_21");
                            c({
                                message: n,
                                status: 413,
                                usage: i.usage
                            });
                            return
                        }
                    }
                    if (n == j || n.length == 0) o.images = j;
                    n = g + "v1/sendtokindle/send2";
                    if (d.favAccount && d.favAccount.token) {
                        o.favToken = d.favAccount.token;
                        delete o.text;
                        n = g + "v1/fav/upload"
                    }
                    n = new Request({
                        url: n,
                        method: "POST",
                        onSuccess: function() {
                            window.tabStatus[b.tab.id] = "success";
                            var r = "";
                            if (o["send-later"]) r = chrome.i18n.getMessage("message_24");
                            else {
                                r = chrome.i18n.getMessage("message_19");
                                r = r.replace("#%1#", o.to)
                            }
                            c({
                                message: r,
                                status: 200,
                                usage: i.usage
                            })
                        },
                        onFailure: function(r) {
                            window.tabStatus[b.tab.id] = "failure";
                            var p = "";
                            if (o["send-later"]) {
                                p = chrome.i18n.getMessage("message_25");
                                p = p.replace("#%1#", r.status)
                            } else {
                                p = chrome.i18n.getMessage("message_20");
                                p = p.replace("#%1#", o.to);
                                p = p.replace("#%2#", r.status)
                            }
                            c({
                                message: p,
                                status: r.status,
                                usage: i.usage
                            })
                        }
                    });
                    q = JSON.stringify(o);
                    n.send(q)
                })
            } else if (c) {
                e = chrome.i18n.getMessage("message_18");
                e = e.replace("#%1#", f);
                c({
                    message: e,
                    code: 400
                })
            }
        }
    },
    ya: function(a, b, c) {
        var d = $settings.get();
        if (a["send-later"]) if (!d.favAccount || !d.favAccount.token) {
            if (c) {
                d = chrome.i18n.getMessage("message_26");
                d = d.replace("#%1#", chrome.extension.getURL("options.html"));
                c({
                    message: d,
                    code: 400
                })
            }
            return
        }
        if (!d.myEmail || !d.myEmail.address || !d.myEmail.key) {
            if (c) {
                d = chrome.i18n.getMessage("message_14");
                d = d.replace("#%1#", chrome.extension.getURL("options.html"));
                c({
                    message: d,
                    code: 400
                })
            }
        } else {
            var e = d.myEmail.address;
            if (this.check(a.url)) {
                this.log(a.url);
                a.text = a.text.clean();
                a.summary = a.text.substring(0, 500);
                var f = {
                    client: window.app_id,
                    version: window.app_version,
                    to: d.myEmail.address,
                    key: d.myEmail.key,
                    title: a.title,
                    html: a.html.stripScripts(),
                    summary: a.summary,
                    text: a.text,
                    source: a.url,
                    count: a.count,
                    ss: a.ss
                };
                if (a["send-later"]) f["send-later"] = a["send-later"];
                window.tabStatus[b.tab.id] = "sending";
                c || (c = m());
                e = this.l();
                var g = this.n();
                a = e + "v1/pushtophone/send";
                if (d.favAccount && d.favAccount.token) {
                    f.favToken = d.favAccount.token;
                    delete f.text;
                    a = e + "v1/fav/upload"
                }
                d = new Request({
                    url: a,
                    method: "POST",
                    onSuccess: function() {
                        window.tabStatus[b.tab.id] = "success";
                        var i = "";
                        if (f["send-later"]) i = chrome.i18n.getMessage("message_24");
                        else {
                            i = chrome.i18n.getMessage("message_19");
                            i = i.replace("#%1#", f.to)
                        }
                        c({
                            message: i,
                            status: 200,
                            usage: g.usage
                        })
                    },
                    onFailure: function(i) {
                        window.tabStatus[b.tab.id] = "failure";
                        var l = "";
                        if (f["send-later"]) {
                            l = chrome.i18n.getMessage("message_25");
                            l = l.replace("#%1#", i.status)
                        } else {
                            l = chrome.i18n.getMessage("message_20");
                            l = l.replace("#%1#", f.to);
                            l = l.replace("#%2#", i.status)
                        }
                        c({
                            message: l,
                            status: i.status,
                            usage: g.usage
                        })
                    }
                });
                e = JSON.stringify(f);
                if (e.length > 2097152) {
                    f.text = j;
                    e = JSON.stringify(f)
                }
                d.send(e)
            } else if (c) {
                d = chrome.i18n.getMessage("message_18");
                d = d.replace("#%1#", e);
                c({
                    message: d,
                    code: 400
                })
            }
        }
    },
    log: function(a) {
        this.i.push({
            url: a,
            time: $time()
        });
        a = this.n();
        a.usage++;
        window.localStorage.todayStatus = JSON.stringify(a)
    },
    check: function(a) {
        if (this.n().usage >= 100) return k;
        if (this.i.length >= 1) {
            var b = this.i[this.i.length - 1];
            if ($time() - b.time < 3E3) return k;
            if ($time() - b.time < 1E4 && b.url == a && a.indexOf("google.com/reader") < 0) return k
        }
        if (this.i.length >= 5) {
            b = this.i[this.i.length - 5];
            if ($time() - b.time < 6E4) return k
        }
        if (this.i.length >= 10) {
            b = this.i[this.i.length - 10];
            if ($time() - b.time < 3E5) return k
        }
        return h
    }
});
if (v === undefined) v = {};
v.ba = new Class({
    Implements: Options,
    options: {},
    initialize: function() {
        this.load();
        window.$settings = this;
        Browser.safari && safari.extension.settings && safari.extension.settings.addEventListener("change", function(a) {
            $settings.options[a.key] = a.newValue
        }, k)
    },
    load: function() {
        this.setOptions(window.app_default_config);
        if (window.localStorage.options) {
            var a = JSON.parse(window.localStorage.options) || {},
                b;
            for (b in a) if (b.indexOf("app_") != 0) if (a[b] !== undefined && a[b] !== j) this.options[b] = a[b]
        }
        if (Browser.chrome) if (window.localStorage.options) {
            a = JSON.parse(window.localStorage.options) || {};
            for (b in a) if (b.indexOf("app_") != 0) if (a[b] !== undefined && a[b] !== j) this.options[b] = a[b]
        }
        if (Browser.safari) if (safari.extension.settings) for (b in window.app_default_config) if (b.indexOf("app_") != 0) if (safari.extension.settings[b] !== undefined && safari.extension.settings[b] !== j) this.options[b] = safari.extension.settings[b];
        this.options.app_id = window.app_id;
        this.options.app_name = window.app_name;
        this.options.app_stamp = window.app_stamp;
        this.options.app_title = window.app_title;
        this.options.app_version = window.app_version;
        if (this.options.key_format) {
            this.options["key-preview"] = this.options.key_format;
            delete this.options.key_format
        }
        if (this.options.key_send) {
            this.options["key-send"] = this.options.key_send;
            delete this.options.key_send
        }
        if (this.options.key_save) {
            this.options["key-save"] = this.options.key_save;
            delete this.options.key_save
        }
        if (this.options.key_send_save) {
            this.options["key-send-save"] = this.options.key_send_save;
            delete this.options.key_send_save
        }
        if (this.options["key-preview"] == "f12") this.options["key-preview"] = "ctrl-f12";
        if (this.options["1-click"]) {
            this.options["default-action"] = "send";
            delete this.options["1-click"]
        }
        this.options.buttons = window.app_default_config.buttons;
        if (window.app_default_config["whatsnew-date"] && (!window.localStorage["whatsnew-date"] || window.localStorage["whatsnew-date"] < window.app_default_config["whatsnew-date"])) this.options.buttons += ", whatsnew"
    },
    save: function() {
        var a = {},
            b;
        for (b in this.options) if (b.indexOf("app_") != 0) if (this.options[b] !== undefined && this.options[b] !== j) a[b] = this.options[b];
        window.localStorage.options = JSON.stringify(a);
        if (Browser.chrome) {
            a = {};
            for (b in this.options) if (b.indexOf("app_") != 0) if (this.options[b] !== undefined && this.options[b] !== j) a[b] = this.options[b];
            window.localStorage.options = JSON.stringify(a)
        }
        if (Browser.safari) if (safari.extension.settings) for (b in window.app_default_config) if (b.indexOf("app_") != 0) if (this.options[b] !== undefined && this.options[b] !== j) safari.extension.settings[b] = this.options[b];
        this.load()
    },
    get: function(a) {
        return a ? this.options[a] : this.options
    },
    set: function(a, b, c) {
        if (a) this.options[a] = b;
        else this.options = b;
        c || this.save()
    },
    l: function() {
        var a = this.options.server;
        if (a) return a;
        return this.options.throughwall ? "http://api2.klip.me/" : "http://api.klip.me/"
    }
});
if (v === undefined) v = {};
v.i18n = new Class({
    options: {},
    initialize: function() {
        this.options.extId = chrome.i18n.getMessage("extId");
        this.options.extName = chrome.i18n.getMessage("extName");
        this.options.extTitle = chrome.i18n.getMessage("extTitle");
        this.options.extDesc = chrome.i18n.getMessage("extDesc");
        this.options.button_send = chrome.i18n.getMessage("button_send");
        this.options.button_save = chrome.i18n.getMessage("button_save");
        this.options.button_share = chrome.i18n.getMessage("button_share");
        this.options.button_share_sina_weibo = chrome.i18n.getMessage("button_share_sina_weibo");
        this.options.button_share_tencent_weibo = chrome.i18n.getMessage("button_share_tencent_weibo");
        this.options.button_setting = chrome.i18n.getMessage("button_setting");
        this.options.button_ok = chrome.i18n.getMessage("button_ok");
        this.options.button_home = chrome.i18n.getMessage("button_home");
        this.options.button_whatsnew = chrome.i18n.getMessage("button_whatsnew");
        for (var a = 1; chrome.i18n.getMessage("error_" + a);) {
            this.options["error_" + a] = chrome.i18n.getMessage("error_" + a);
            a++
        }
        for (a = 1; chrome.i18n.getMessage("message_" + a);) {
            this.options["message_" + a] = chrome.i18n.getMessage("message_" + a);
            a++
        }
        window.$i18n = this
    },
    translate: function(a) {
        a = a.getElements("[i18n-content]");
        for (var b = 0; b < a.length; b++) {
            var c = chrome.i18n.getMessage(a[b].getAttribute("i18n-content"));
            c && a[b].set("html", c)
        }
        $("credits") && !chrome.i18n.getMessage("options_label_credit_detail") && $("credits").setStyle("display", "none")
    }
});
window.app_id = chrome.i18n.getMessage("extId");
window.app_name = chrome.i18n.getMessage("extName");
window.app_title = chrome.i18n.getMessage("extTitle");
window.app_description = chrome.i18n.getMessage("extDesc");
window.app_version = "3.2.5";
window.app_default_config = {
    server: "",
    address_name: "",
    address_domain: "free.kindle.com",
    address: "",
    keep_images: h,
    keep_paragraph_spacing: k,
    myEmail: {
        address: "",
        key: "",
        status: "",
        type: "evernote"
    },
    favAccount: {
        id: "",
        nickname: "",
        token: "",
        mode: 0,
        status: 0,
        type: 0
    },
    throughwall: navigator.language == "zh-CN",
    buttons: "send, save, setting",
    "buttons-position": Browser.safari ? "left" : "right",
    "key-preview": Browser.safari ? "control-f12" : "ctrl-f12",
    "key-send": Browser.safari ? "command-control-k" : "alt-ctrl-k",
    "key-save": Browser.safari ? "command-control-s" : "alt-ctrl-s",
    "key-send-mail": Browser.safari ? "command-control-e" : "alt-ctrl-e",
    "default-action": "preview",
    "first-page": "options.html",
    "whatsnew-date": "2011/10/01",
    "whatsnew-page": "whatsnew#gr",
    "default-page": "options.html"
};
window.app_stamp = $time();
window.tabStatus = {};
window.tabUrls = {};
window.tabIcon = j;
new v.ba;
new v.i18n;
if (!window.localStorage.installed) {
    window.localStorage.installed = (new Date).format("%Y%m%d");
    var B = $settings.get("first-page");
    B && chrome.tabs.create({
        url: chrome.extension.getURL(B)
    })
}
v.G !== undefined && (new v.G).j();
v.L !== undefined && (new v.L).j();
v.da !== undefined && (new v.da).j();
v.K !== undefined && (new v.K).j();
v.ca !== undefined && (new v.ca).j();
(function() {
    if (Browser.chrome) {
        if (!window.curTabId) return;
        var a = window.tabStatus[window.curTabId],
            b = "images/icon-disable.png";
        if (!a || a == "disable") b = "images/icon-disable.png";
        else if (a == "ready") b = "images/icon24.png";
        else if (a == "sending") b = "images/send" + (parseInt($time() % 1E3 / 250) + 1) + ".png";
        else if (a == "success") b = "images/icon-success.png";
        else if (a == "failure") b = "images/icon-failure.png"
    } else {
        window.curTabId = chrome.__getTabId(safari.application.activeBrowserWindow.activeTab);
        if (!window.curTabId) return;
        a = window.tabStatus[window.curTabId];
        b = safari.extension.toolbarItems;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d.Ia == window.app_id) d.disabled = a == undefined || a == "disable"
        }
        b = "images/icon-disable.png";
        if (!a || a == "disable") b = "images/icon-disable.png";
        else if (a == "ready") b = "images/icon24.png";
        else if (a == "sending") b = "images/send" + (parseInt($time() % 900 / 300) + 1) + ".png";
        else if (a == "success") b = "images/icon-success.png";
        else if (a == "failure") b = "images/icon-failure.png"
    }
    if (window.tabIcon != b) {
        chrome.browserAction.setIcon({
            tabId: window.curTabId,
            path: b
        });
        window.tabIcon = b
    }
}).periodical(250);
if (Browser.chrome) {
    chrome.tabs.onSelectionChanged.addListener(function(a) {
        window.curTabId = a;
        window.tabIcon = j
    });
    chrome.tabs.onUpdated.addListener(function(a, b, c) {
        var d = window.tabUrls[a] || "",
            e = b.url || "";
        window.tabUrls[a] = c.url;
        if (d != e) {
            if (d.indexOf("#") > 0) d = d.substring(0, d.indexOf("#"));
            if (e.indexOf("#") > 0) e = e.substring(0, e.indexOf("#"));
            if (!(d == e || e == "")) {
                if (e.indexOf("chrome://newtab") === 0 || e.indexOf("about:blank") === 0) window.tabStatus[a] = "ready";
                else if (b.status == "loading") window.tabStatus[a] = "disable";
                window.tabIcon = j
            }
        }
    })
}
chrome.extension.onMessage.addListener(function(a) {
    if (a.action === "klip-tips-close") $settings.set("klip-tips-close", a.value);
    else if (a.action === "klip-export-changed") $settings.set("klip-export", a.value);
    else a.action === "klip-format-changed" && $settings.set("format", a.value);
    return h
});
chrome.browserAction.onClicked.addListener(function(a) {
    if (a.url.indexOf("chrome://newtab") === 0 || a.url.indexOf("about:blank") === 0) {
        var b = $settings.get("default-page");
        b && chrome.tabs.update(a.id, {
            url: chrome.extension.getURL(b)
        })
    } else if (a.url.indexOf("chrome") === 0 || a.url.indexOf("safari") === 0)(b = $settings.get("default-page")) && chrome.tabs.update(a.id, {
        url: chrome.extension.getURL(b)
    });
    else if (!(a.url.indexOf("://chrome.google.com/") > 0)) switch (window.tabStatus[a.id]) {
    case "disable":
    case "session-error":
    case undefined:
        chrome.tabs.executeScript(a.id, {
            code: "window.stop ()"
        }, function() {
            setTimeout(function() {
                chrome.tabs.sendMessage(a.id, {
                    action: "execute",
                    format: $settings.get("format"),
                    "default-action": $settings.get("default-action"),
                    "highlight-logs": j
                })
            }, 100)
        });
        break;
    default:
        chrome.tabs.sendMessage(a.id, {
            action: "execute",
            format: $settings.get("format"),
            "default-action": $settings.get("default-action"),
            "highlight-logs": j
        })
    }
});
chrome.extension.onMessage.addListener(function(a, b, c) {
    var d = $settings.l();
    d = d && d.indexOf("api2.klip.me") ? "http://cn.klip.me/" : "http://www.klip.me/";
    c || (c = m());
    if (a.action === "domready") {
        window.curTabId = window.curTabId || b.tab.id;
        a = window.tabStatus[b.tab.id];
        if (!a || a == "disable") window.tabStatus[b.tab.id] = "ready";
        c()
    } else if (a.action === "get-options") c($settings.get());
    else if (a.action === "set-options") {
        $settings.set(j, a.options);
        c($settings.get())
    } else if (a.action === "get-i18n") c($i18n.options);
    else if (a.action === "save") {
        a.item["send-later"] = h;
        $klippySender.V(a.item, b, c)
    } else if (a.action === "send") $klippySender.V(a.item, b, c);
    else if (a.action === "send-mail") $klippySender.ya(a.item, b, c);
    else if (a.action === "klips") {
        chrome.tabs.create({
            url: d + "fav/my"
        });
        c()
    } else if (a.action === "setting") {
        chrome.tabs.create({
            url: chrome.extension.getURL("options.html")
        });
        c()
    } else if (a.action === "whatsnew") {
        window.localStorage["whatsnew-date"] = (new Date).format("%Y%m%d");
        $settings.options.buttons = window.app_default_config.buttons;
        if (!window.app_default_config["whatsnew-page"]) return;
        chrome.tabs.create({
            url: d + window.app_default_config["whatsnew-page"]
        });
        c()
    }
    return h
});