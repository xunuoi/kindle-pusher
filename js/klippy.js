var i = true,
    l = null,
    m = false;

function n() {
    return function() {}
}
function q(a) {
    return function() {
        return a
    }
}
if (u === undefined) var u = {};
u.Ub = new Class({
    v: i,
    pc: Date.now(),
    Ea: function() {
        return "[" + ((Date.now() - this.pc) / 1E3).toFixed(3) + "s]"
    },
    initialize: function(a) {
        this.console = typeof Ti == "object" && typeof Ti.Rb == "object" ? Ti.Rb : window.console;
        (this.v = a) && this.info("Running in DEBUG mode")
    },
    od: function() {
        this.v = i;
        this.info("Running in DEBUG mode")
    },
    md: function() {
        this.v = m;
        this.info("Running in RELEASE mode")
    },
    info: function(a) {
        if (this.v && this.console) {
            a = this.Ea() + " " + a;
            "info" in this.console ? this.console.info(a) : this.console.log(a)
        }
    },
    log: function(a) {
        if (this.v && this.console) {
            a = this.Ea() + " " + a;
            "debug" in this.console ? this.console.debug(a) : this.console.log(a)
        }
    },
    warn: function(a) {
        if (this.v && this.console) {
            a = this.Ea() + " " + a;
            "warn" in this.console ? this.console.warn(a) : this.console.log(a)
        }
    },
    error: function(a) {
        if (this.v && this.console) {
            a = this.Ea() + " " + a;
            "error" in this.console ? this.console.error(a) : this.console.log(a)
        }
    },
    gd: function(a, b) {
        if (this.v && this.console) if ("assert" in this.console) this.console.assert(a, b);
        else a || this.error("Assertion failed: " + b)
    },
    nd: function(a) {
        this.v && this.console && this.info(JSON.stringify(a))
    }
});
window.$debug = new u.Ub(m);
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
    Nc: function() {
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
Array.eb = 1;
Array.Vb = 2;
Array.cc = 4;
Array.$b = 8;
Array.gb = 16;
(function() {
    function a(c, e, d, f) {
        return function g(h, k) {
            var o, p, t, r = k[0];
            (function s(x, D, E) {
                var z = x[0];
                if (x.length > 1) s(x.slice(1), D[z], E[z]);
                else {
                    p = D[z].toString();
                    t = E[z].toString()
                }
            })(h[0].match(/[^.]+/g), c, e);
            if (r & Array.gb) o = p.toFloat() - t.toFloat();
            else {
                if (r & Array.eb) {
                    p = p.toLowerCase();
                    t = t.toLowerCase()
                }
                o = p > t ? 1 : p < t ? -1 : 0
            }
            if (o === 0 && h.length > 1) o = g(h.slice(1), k.slice(1));
            else if (r & Array.Vb) o *= -1;
            return o
        }(d, f)
    }
    function b(c, e) {
        var d = e & Array.gb ? this.map(function(f) {
            return f[c].toFloat()
        }) : e & Array.eb ? this.map(function(f) {
            return f[c].toLowerCase()
        }) : this.map(function(f) {
            return f[c]
        });
        return d.length !== [].combine(d).length
    }
    Array.implement({
        zd: function(c, e) {
            function d(f, g) {
                return a(f, g, c, e)
            }
            c = $splat(c);
            e = $splat(e);
            if (e.length !== c.length) e = [];
            if (e[0] & Array.cc && c.some(function(f, g) {
                return b(f, e[g])
            })) return 0;
            if (e[0] & Array.$b) return this.slice().sort(d);
            else this.sort(d)
        }
    })
})();
String.implement({
    i: function(a) {
        return this.indexOf(a) == 0
    },
    aa: function(a) {
        var b = this.lastIndexOf(a);
        return b != -1 && b + a.length == this.length
    },
    Ad: function(a, b) {
        var c = 0;
        if (b) c = this.lastIndexOf(a);
        else this.indexOf(a);
        if (c >= 0) return this.substring(0, c);
        return ""
    },
    Sa: function(a, b) {
        var c = 0;
        if (b) c = this.lastIndexOf(a);
        else this.indexOf(a);
        if (c >= 0) return this.substring(c + a.length);
        return ""
    },
    Ta: function(a, b) {
        for (var c = [], e = 0, d = 0; d < this.length; d++) if (a.contains(this[d])) {
            c.push(this.substring(e, d));
            e = d + b
        }
        e < this.length && c.push(this.substring(e));
        return c
    },
    kd: function() {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this)
    }
});
u = new Class({
    initialize: function() {
        this.Q = new u.ac;
        this.c = new u.Wb;
        this.Ka = m
    },
    destroy: function() {
        this.Q.destroy();
        this.c.destroy()
    },
    P: function() {
        $(document.html).addEvent("click", this.click);
        $(window).addEvent("resize", this.resize);
        $$(".klip_command").addEvent("click", this.rb);
        this.c.P();
        this.Ka = i
    },
    fa: function() {
        $(document.html).removeEvent("click", this.click);
        $(window).removeEvent("resize", this.resize);
        $$(".klip_command").removeEvent("click", this.rb);
        this.c.fa();
        this.Ka = m
    },
    click: function(a) {
        if (a.target.id === "klip_body" || a.target.id === "klip_container" || a.target.id === "klip_text_bx" || a.target.id === "klip_edit_ok") {
            $klippy.execute("edit-reset");
            a.stop()
        }
    },
    resize: n(),
    rb: function(a) {
        var b = this.getProperty("command_name"),
            c = this.getProperty("command_value");
        $klippy.execute(b, c);
        a.stop()
    },
    execute: function(a, b) {
        if (!$chk(a)) return m;
        if (a === "close") $main.unload();
        else if (a.i("clear")) {
            $klippy.c.execute("reset", b);
            $klippy.Q.execute("clear", b)
        } else if (a.i("select-")) $klippy.Q.execute(a.Sa("select-"), b);
        else a.i("edit-") && $klippy.c.execute(a.Sa("edit-"), b);
        return i
    },
    Va: function(a, b) {
        if (!$chk(a)) return m;
        if (a.i("select-")) return $klippy.Q.Va(a.Sa("select-"), b);
        else if (a.i("edit-")) return $klippy.c.Va(a.Sa("edit-"), b);
        return i
    },
    formatCode: function(elist){
        var len = elist.length
        for(var i=0; i<len; i++){
            var code = elist[i]
            var new_text = code.get('text')
                .replace(/\n/g, '<br />')//解决廖雪峰换行
                .replace(/\s/g, '&nbsp;')//解决缩进
            //增加code区域换行
            code.innerHTML = new_text
        }
    },
    wb: function(a, b) {
        var c = new v,
            e = c.vb(),
            d = c.xb(),
            f = c.getURL();
        c = c.da;
        switch (a) {
        case "command":
            c += "c";
            break;
        case "1-click":
            c += "1";
            break;
        case "editor":
            c += "e";
            break;
        case "shortcut":
            c += "s"
        }
        if (!e) {
            b(-1);
            return l
        }
        if (e.get("text").length < 64) {
            b(-2);
            return l
        }["h1", "h2", "h3"].some(function(g) {
            g = e.getElements(g);
            if (g.length > 0 && g[0].get("text") == d) {
                g[0].destroy();
                return i
            }
        });
        //deal codes area plugnis
        var eCodes = e.getElements('code')
        this.formatCode(eCodes)
        
        var new_html = e.get("html")

        f = {
            name: name,
            url: f,
            title: d,
            html: new_html,
            // text: e.get("text").trim(),
            text: e.get("text").clean(),
            ss: c
        };
        //这里提交的内容有问题，廖雪峰代码格式没有了，没有换行span
        f.summary = f.text.substring(0, 500);
        if (f.text.length > f.summary.length) f.summary += " ...";
 
        return f
    }
});
u.j = {
    K: function(a) {
        if (!$chk(a) || typeof a.className !== "string") return m;
        return a.className.indexOf("klip_") >= 0
    },
    wd: function(a) {
        if (!$chk(a) || typeof a.className !== "string") return m;
        return a.className.indexOf("KlippyUI") >= 0
    },
    Xa: function(a, b) {
        if (a == b) return a;
        var c = a.getParents(),
            e = b.getParents();
        c.unshift(a);
        e.unshift(b);
        for (var d = 0; d < c.length; d++) for (var f = 0; f < e.length; f++) if (c[d] === e[f]) return c[d];
        return l
    },
    contains: function(a, b) {
        return a.left <= b.left && a.right >= b.right && a.top <= b.top && a.bottom >= b.bottom
    },
    Kc: function(a, b) {
        return !(a.left > b.right || a.right < b.left || a.bottom < b.top || a.top > b.bottom)
    }
};
Element.implement({
    Na: /article|body|content|entry|page|post|text/i,
    Jb: /comment|combx|disqus|contact|foot|link|masthead|media|promo|related|scroll|shoutbox|sponsor|tags|widget|share|tools/i,
    Ib: /comment|combx|disqus/i,
    Kb: /youtube|vimeo|dailymotion|livestream\.com|viddler\.com/,
    xa: function() {
        for (var a = this.getSize(), b = this.getPosition(), c = this.getElements("*"), e = Math.max(0, c.length - 10); e < c.length; e++) {
            var d = c[e].getSize(),
                f = c[e].getPosition();
            b.x = Math.min(f.x, b.x);
            a.x = Math.max(a.x, f.x + d.x - b.x, d.x);
            a.y = Math.max(a.y, f.y + d.y - b.y, d.y);
            if (d.x != 0 && d.y != 0 && f.x != 0 && f.y != 0) break
        }
        return a
    },
    ud: function() {
        return this.get("text")
    },
    Ha: function() {
        for (var a = "", b = this.childNodes, c = 0; c < b.length; c++) {
            var e = b[c];
            if (e.nodeName == "#text" && e.nodeValue) a += e.nodeValue;
            else if (["STRONG", "EM", "FONT", "B"].contains(e.nodeName)) a += e.Ha()
        }
        return a
    },
    Ia: function(a) {
        for (var b = "", c = this; c;) if (!(a && c.className === "" && c.id === "")) {
            var e = c.get("tag"),
                d = c.id,
                f = c.className;
            if (d !== "") e += "#" + d;
            if (f !== "") for (var g = f.split(" "), h = 0; h < g.length; h++) if (g[h] !== "") e += "." + g[h];
            if (d === "" && f === "") if (c.get("width")) e += "[width=" + c.get("width") + "]";
            b = b !== "" ? e + " >" + b : e;
            c = c.getParent()
        }
        if (b.i("div#__root__ ")) b = b.substring(13);
        return b
    },
    Bc: function() {
        var a = 0;
        this.Na.test(this.className) && a++;
        this.Na.test(this.id) && a++;
        this.Jb.test(this.className) && a--;
        this.Jb.test(this.id) && a--;
        return a
    },
    Ec: function() {
        var a = this.get("text").length;
        if (a === 0) return 0;
        for (var b = 0, c = this.getElements("a"), e = 0; e < c.length; e++) if ($chk(c[e]) && c[e].isDisplayed()) b += c[e].get("text").length;
        return b / a
    },
    Eb: function() {
        var a = /https?:\/\/(?:\w+\.)*(\w+\.\w+)/,
            b = a.exec($(document).location.href);
        if (!b || b.length < 2) return m;
        var c = this.getElement("embed[src]");
        if (c && c.src) {
            if (this.Kb.test(c.src)) return i;
            if ((c = a.exec(c.src)) && c.length > 1 && b[1] === c[1]) return i
        }
        if (c = this.get("data")) {
            if (this.Kb.test(c)) return i;
            if ((c = a.exec(c)) && c.length > 1 && b[1] === c[1]) return i
        }
        return m
    },
    Bb: function() {
        var a = 0;
        this.Ib.test(this.className) && a--;
        this.Ib.test(this.id) && a--;
        if (a >= 0) return m;
        this.Na.test(this.className) && a++;
        this.Na.test(this.id) && a++;
        return a < 0
    },
    Lc: function() {
        var a = [".adnxs.com", ".doubleclick.net", ".double.net", ".atdmt.com", "adserver.adpredictive.com", "affiliates.jlist.com", "media.fastclick.net"],
            b = this.get("tag");
        if (b == "a") for (b = 0; b < a.length; b++) {
            if (this.href.indexOf(a[b]) > 0) return i
        } else if (b == "img") for (b = 0; b < a.length; b++) if (this.src.indexOf(a[b]) > 0) return i;
        return m
    },
    k: function() {
        for (var a = this.getSize(), b = this.getPosition(), c = this.getElements("*"), e = 0; e < c.length; e++) {
            var d = c[e].getSize(),
                f = c[e].getPosition();
            b.x = Math.min(f.x, b.x);
            a.x = Math.max(a.x, f.x + d.x - b.x, d.x);
            a.y = Math.max(a.y, f.y + d.y - b.y, d.y)
        }
        return a.x > 360 && a.x * a.y > 16E4
    }
});
Element.implement({
    Ma: function(a, b) {
        this.Fb();
        for (var c = this.clone(a, b), e = c.getElements("[klip_invisible]"), d = e.length - 1; d >= 0; d--) Browser.safari && e[d].get("tag") == "iframe" || e[d].destroy();
        this.Yc();
        return c
    },
    Fb: function() {
        for (var a = this.getChildren("*"), b = 0; b < a.length; b++) Browser.safari && a[b].get("tag") == "iframe" || (a[b].isDisplayed() ? a[b].Fb() : a[b].setAttribute("klip_invisible", l))
    },
    Yc: function() {
        for (var a = this.getElements("[klip_invisible]"), b = 0; b < a.length; b++) Browser.safari && a[b].get("tag") == "iframe" || a[b].removeAttribute("klip_invisible")
    },
    D: function(a) {
        this.setAttribute(a, 1)
    },
    ca: function(a) {
        this.removeAttribute(a)
    },
    J: function(a) {
        return this.getAttribute(a)
    },
    Oa: function() {
        var a = document.URL;
        if (a.indexOf("#") >= 0) a = a.substring(0, a.indexOf("#"));
        for (var b = this.getElements("*"), c = 0; c < b.length; c++) {
            var e = b[c];
            if ($chk(e)) {
                if ($chk(e.src)) e.src = e.src;
                if (e.get("tag") != "img" && $chk(e.href)) e.href = e.href.i(a + "#") ? e.href.substring(a.length) : e.href
            }
        }
    },
    yd: n(),
    Zc: function() {
        for (var a = this.getElements("table"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) {
                var e = c.getElements("td");
                if (e.length == 0) c.destroy();
                else if (e.length == 1) {
                    var d = new Element("div");
                    d.set("html", e[0].get("html"));
                    d.replaces(c)
                } else if (!c.getElements("tr").some(function(g) {
                    return g.getElements("td").length > 1
                })) {
                    var f = "";
                    e.each(function(g) {
                        f = f + "<div>" + g.get("html") + "</div>"
                    });
                    d = new Element("div");
                    d.set("html", f);
                    d.replaces(c)
                }
            }
        }
    },
    Ga: function() {
        var a = l;
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
        a.Zc();
        return a
    },
    zc: function() {
        for (var a = this.getSize(), b = this.getElements("img"), c = 0; c < b.length; c++) {
            var e = b[c],
                d = e.getStyle("float");
            d = d === undefined || d === l ? "" : d.toLowerCase();
            var f = e.getSize();
            if (f.x == 0) f = {
                x: e.width,
                y: e.height
            };
            if (f.x > 400 || f.x > a.x / 2) {
                e.setStyle("float", "");
                e.addClass("klip_largeobject")
            } else if (f.x * f.y < 65536) {
                if (d === "" || d === "none") {
                    e.setStyle("float", "");
                    e.addClass("klip_smallobject")
                }
            } else {
                e.setStyle("float", "");
                e.addClass("klip_largeobject")
            }
        }
    },
    Ac: function() {
        for (var a = this.getSize(), b = this.getElements("object"), c = 0; c < b.length; c++) {
            var e = b[c];
            e.getStyle("float");
            var d = e.getSize();
            if (d.x > 400 || d.x > a.x / 2) {
                e.setStyle("float", "");
                e.addClass("klip_largeobject")
            }
        }
    },
    pd: function() {
        for (var a = this.getElements("p"), b = a.length - 1; b >= 0; b--) a[b].grab(new Element("br"), "after")
    }
});
Element.implement({
    ic: function() {
        var a = this.getElements("[klip_block_begin]"),
            b = this.getElements("[klip_block_end]");
        a = a.length ? a[0] : l;
        b = b.length ? b[b.length - 1] : l;
        if (a || b) {
            var c = this.getElements("[klip_block_first]"),
                e = this.getElements("[klip_block_last]");
            c = c.length ? c[0] : l;
            var d = e.length ? e[e.length - 1] : l;
            e = [];
            if (c) e = c.getParents();
            d && d.getParents();
            if (a) {
                c = -1;
                d = this.getElements("*");
                for (var f = 0; f < d.length; f++) if (d[f] == a) {
                    c = f;
                    break
                }
                if (c >= 0) for (f = c; f > 0; f--) {
                    if (d[f] == this || d[f].getParent() == this || e.contains(d[f])) break;
                    d[f].destroy()
                }
            }
            if (b) {
                c = -1;
                d = this.getElements("*");
                for (f = 0; f < d.length; f++) if (d[f] == b) {
                    c = f;
                    break
                }
                if (c >= 0) for (f = d.length - 1; f >= c; f--) {
                    if (d[f] == this || d[f].getParent() == this) break;
                    d[f].destroy()
                }
            }
        }
    },
    mc: function(a) {
        if (a === undefined || a === l || a === "") a = "*";
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) c.isDisplayed() || c.destroy()
        }
    },
    hc: function(a) {
        if (a === undefined || a === l || a === "") a = "*";
        var b = m;
        do {
            b = m;
            for (var c = this.getElements(a), e = c.length - 1; e >= 0; e--) {
                var d = c[e];
                if ($chk(d)) if (!["img", "object", "embed"].contains(d.tagName)) if (d.get("text").trim().length === 0 && d.getElements("img, object, embed").length === 0) {
                    d.destroy();
                    b = i
                }
            }
        } while (b)
    },
    jc: function(a) {
        if (a === undefined || a === l || a === "") a = "*";
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) if (c.Bb()) c.destroy();
            else c.Bc() < 0 && c.get("text").length < 400 && c.destroy()
        }
    },
    kc: function(a, b) {
        if (a === undefined || a === l || a === "") a = "*";
        for (var c = this.getElements(a), e = c.length - 1; e >= 0; e--) {
            var d = c[e];
            $chk(d) && d.Ec() > b && d.destroy()
        }
    },
    cd: function(a) {
        if (a === undefined || a === l || a === "") a = "*";
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) c.get("tag") === "object" && c.Eb() || c.destroy()
        }
    },
    Da: function(a) {
        a = this.getElements(a);
        for (var b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            $chk(c) && c.destroy()
        }
    },
    bd: function(a, b) {
        for (var c = this.getElements(a), e = c.length - 1; e >= 0; e--) {
            var d = c[e];
            if ($chk(d)) d.getSize().x > b || d.destroy()
        }
    },
    gc: function(a, b) {
        if (a === undefined || a === l || a === "") a = "*";
        for (var c = this.getElements(a), e = c.length - 1; e >= 0; e--) {
            var d = c[e];
            if ($chk(d)) for (var f = 0; f < b.length; f++) d.removeAttribute(b[f])
        }
    },
    lc: function() {
        for (var a = this.getElements("a"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) for (var e in c) if (e.i("on") && typeof c[e] === "function") c[e] = l
        }
    },
    fc: function() {
        for (var a = this.getElements("a"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ($chk(c)) {
                var e = c.get("href");
                if ($chk(e)) {
                    e = e.trim();
                    if (e.i("javascript:") || e.i("jscript:")) c.set("href", "#")
                }
            }
        }
    },
    clean: function() {
        for (var a = ["klip_block_h", "klip_block_v", "klip_block_comments", "klip_block_banner", "klip_block_ads", "klip_block_big_buttons", "klip_block_medium_buttons", "klip_block_iframe", "klip_block_form"], b = "", c = 0; c < a.length; c++) {
            if (b) b += ",";
            b += "." + a[c]
        }
        this.mc("*");
        this.Da("iframe, script, noscript, form, style, #comment");

        if (!($(document.body).className.indexOf("mediawiki") >= 0)) if (!document.location.host.aa("baike.baidu.com")) {
            this.ic();
            for (c = 0; c < a.length; c++) this.Da("[" + a[c] + "]");
            this.jc("*");
            this.kc("ul", 0.33);
            this.hc("p,div,span,ins,table,td,tr,ul,ol,li")
        }
        this.gc("*", ["style", "class", "id"]);
        this.lc("*");
        this.fc();
        this.removeAttribute("style");
        this.removeAttribute("class");
        this.removeAttribute("id");
        var e = this;
        ["klip_block_h", "klip_block_v", "klip_block_comments", "klip_block_banner", "klip_block_ads", "klip_block_big_buttons", "klip_block_medium_buttons", "klip_block_iframe", "klip_block_form", "klip_block_text", "klip_block_side", "klip_block_seed", "klip_block_first", "klip_block_last", "klip_block_begin", "klip_block_end"].each(function(d) {
            e.getElements("[" + d + "]").ca(d)
        });
        this.Da("object, applet, embed")
    },
    ld: function(a) {
        this.Da(a)
    }
});

function w(a) {
    return (a.i("https://www.google.") || a.i("http://www.google.")) && a.indexOf("/reader/view/") > 0
}
var y = new Class({
    initialize: function(a) {
        var b = a.indexOf("://");
        if (!(b < 0)) {
            var c = a.indexOf("/", b + 3 + 1);
            if (!(c < 0)) {
                this.scheme = a.substring(0, b);
                this.host = a.substring(b + 3, c);
                this.path = a.substring(c + 1);
                this.ya = this.host.split("*");
                this.Aa = this.path.split("*")
            }
        }
    },
    match: function(a) {
        if (!$chk(this.scheme)) return m;
        if (this.scheme !== "*" && this.scheme + ":" !== a.protocol) return m;
        if (this.host !== "*") if (this.host.indexOf("*") < 0) {
            if (this.host !== a.host) return m
        } else if (this.ya.length !== 2) return m;
        else {
            if (a.host.length < this.host.length) return m;
            if (this.ya[0] !== "" && !a.host.i(this.ya[0])) return m;
            if (this.ya[1] !== "" && !a.host.aa(this.ya[1])) return m
        }
        if (this.path !== "*") {
            a = a.pathname.substring(1);
            if (this.path.indexOf("*") < 0) {
                if (this.path !== a) return m
            } else if (this.Aa.length !== 2) return m;
            else {
                if (a < this.path.length) return m;
                if (this.Aa[0] !== "" && !a.i(this.Aa[0])) return m;
                if (this.Aa[1] !== "" && !a.aa(this.Aa[1])) return m
            }
        }
        return i
    }
});
$checkpoint = n();
var A = new Class({
    match: function(a) {
        for (var b = 0; b < A.u.length; b++) {
            var c = A.u[b];
            if (c.domains && c.paths) {
                for (var e = m, d = 0; d < c.domains.length; d++) if (c.domains[d]) if (a.location.host.aa(c.domains[d])) {
                    e = i;
                    break
                }
                if (e) {
                    e = m;
                    if (c.paths.length == 0) e = i;
                    for (d = 0; d < c.paths.length; d++) if (c.paths[d]) if (a.location.pathname.i(c.paths[d])) {
                        e = i;
                        break
                    }
                    if (e) if (!($$(c.title).length < 1)) return b
                }
            }
        }
        return -1
    },
    build: function(a) {
        var b = this.match(a);
        if (b < 0) return m;
        b = A.u[b];
        this.name = b.name;
        this.subject = b.subject;
        this.url = a.URL;
        if (b.title && $$(b.title).length < 1) return m;
        var c = l;
        if (b.question) {
            if ($$(b.question.path).length < 1) return m;
            c = $$(b.question.path)[0];
            if (!c) return m
        }
        a = $$(b.answers.path);
        if (b.title) this.title = $$(b.title)[0].get("tag") == "input" ? $$(b.title)[0].get("value") : $$(b.title)[0].get("text");
        this.question = {};
        if (b.question) for (var e in b.question) if (typeof e == "string" && e != "path") if (b.question[e] != "") {
            var d = c.getElements(b.question[e]);
            if (d.length > 0) this.question[e] = d[0].get("tag") == "input" ? d[0].get("value") : e == "text" ? d[0].get("html") : d[0].get("text")
        }
        this.answers = [];
        for (c = 0; c < a.length; c++) {
            var f = a[c];
            if (f) {
                var g = {};
                for (e in b.answers) if (typeof e == "string" && e != "path") if (b.answers[e] != "") {
                    d = b.answers[e] == "." ? [f] : f.getElements(b.answers[e]);
                    if (d.length > 0) g[e] = d[0].get("tag") == "input" ? d[0].get("value") : e == "text" ? d[0].get("html") : d[0].get("text")
                }
                if (b.name == "Hacker News") {
                    g.level = 1;
                    if (f.getElements("td>img").length > 0) g.level = f.getElements("td>img")[0].get("width") / 40 + 1
                }
                g.text && this.answers.push(g)
            }
        }
        return i
    },
    format: function() {
        var a = "";
        if (this.question.user || this.question.vote || this.question.time) {
            a += "<div>";
            if (this.question.user) a += "<span> " + this.question.user + ", </span>";
            if (this.question.vote) a += "<span> " + this.question.vote + " votes </span>";
            if (this.question.time) a += "<span> - " + this.question.time + " </span>";
            a += "</div><br/>"
        }
        if (this.question.text || this.question.text2) {
            a += "<div>";
            a += this.question.text || this.question.text2;
            a += "</div>";
            a += "<br/>"
        }
        var b = [0];
        a += "<h3>" + this.answers.length + " " + this.subject + ":</h3>";
        a += "<hr/>";
        for (var c = 0; c < this.answers.length; c++) {
            var e = this.answers[c];
            if (e) {
                if (c > 0) a += "<hr/>";
                if (e.user || e.vote || e.time) {
                    a += "<div>";
                    if (e.level > 0) {
                        for (; b.length > e.level;) b.pop();
                        for (; b.length < e.level;) b.push(0);
                        b[e.level - 1]++;
                        a += "<span> " + b.join(".") + " - </span>"
                    }
                    if (e.user) a += "<span> " + e.user + ", </span>";
                    if (e.vote) a += "<span> " + e.vote + " votes </span>";
                    if (e.time) a += "<span> - " + e.time + " </span>";
                    a += "</div><br/>"
                }
                a += "<div>";
                a += e.text || e.text2;
                a += "</div>";
                a += "<br/>"
            }
        }
        a = a.stripScripts();
        return new Element("div", {
            html: a
        })
    }
});
A.u = [{
    name: "StackExchange",
    domains: ["stackoverflow.com", "stackapps.com", "serverfault.com", "superuser.com", "stackexchange.com", "askubuntu.com", "onstartups.com"],
    paths: ["/questions/"],
    subject: "Answers",
    title: "#question-header .question-hyperlink",
    question: {
        path: "#question",
        text: ".post-text",
        user: ".postcell .owner .user-details>a",
        time: ".postcell .fw .owner .user-info .user-action-time>span",
        vote: ".votecell .vote-count-post",
        star: ".votecell .favoritecount>b",
        comments: {
            path: ".comments",
            comment: {
                path: ".comment",
                text: ".comment-text .comment-copy",
                user: ".comment-text .comment-user",
                time: ".comment-text .comment-date>span",
                score: ".comment-score>span"
            }
        }
    },
    answers: {
        path: "#answers .answer",
        text: ".post-text",
        user: ".fw .user-info .user-details",
        time: ".fw .user-info .user-action-time>span",
        vote: ".votecell .vote-count-post",
        comments: {
            path: ".comments",
            comment: {
                path: ".comment",
                text: ".comment-text .comment-copy",
                user: ".comment-text .comment-user",
                time: ".comment-text .comment-date>span",
                vote: ".comment-score>span"
            }
        }
    }
}, {
    name: "Quora",
    domains: ["quora.com"],
    paths: [],
    subject: "Answers",
    title: ".question span>h1",
    question: {
        path: ".question",
        text: ".question_details .inline"
    },
    answers: {
        path: ".main_col .answer_text",
        text: ".suggested .inline_editor_value",
        user: ".answer_user .user",
        time: ".answer_permalink",
        vote: ".voter_count"
    }
}, {
    name: "Douban",
    domains: ["douban.com"],
    paths: ["/group/topic/"],
    subject: "\u56de\u7b54",
    title: "#content>h1",
    question: {
        path: "#content>div>div.article>div.topic-content>div.topic-doc",
        text: "div.topic-content>p",
        user: "h3>span>a",
        time: "h3>span.color-green"
    },
    answers: {
        path: "#content>div>div.article>ul.topic-reply>li>div.reply-doc",
        user: "div>h4>a",
        text: "p"
    }
}, {
    name: "Hacker News",
    domains: ["news.ycombinator.com"],
    paths: ["/item"],
    subject: "Comments",
    title: "td.title",
    question: {
        path: "table tbody tr:nth-child(3) table tbody",
        text2: "tr:nth-child(4) td:nth-child(2)"
    },
    answers: {
        path: "table table table",
        text: "span.comment",
        user: "span.comhead",
        time: ""
    }
}, {
    name: "MetaFilter",
    domains: ["www.metafilter.com"],
    paths: ["/"],
    subject: "Comments",
    title: "h1.posttitle.threedee",
    question: {
        path: "div#page",
        text: "div.copy"
    },
    answers: {
        path: "div.comments",
        text: ".",
        user: "",
        time: "",
        vote: ""
    }
}, {
    name: "Zhihu",
    domains: ["zhihu.com"],
    paths: ["/question/"],
    subject: "\u56de\u7b54",
    title: "div#xqg h2.xon.xxkw",
    question: {
        path: "div#xqf",
        text: "div.xxkw"
    },
    answers: {
        path: "div#xjf div.xco",
        text: "div.xbn div.xxkw.xof",
        user: "div.xylw h3.xzn a:nth-child(2)",
        time: "",
        vote: ""
    }
}, {
    name: "V2EX",
    domains: ["v2ex.com", "v2ex.appspot.com"],
    paths: ["/t/"],
    subject: "\u56de\u7b54",
    title: "#Main .box .header h1",
    question: {
        path: "#Main .box .inner",
        text: "div.topic_content"
    },
    answers: {
        path: "div.cell>table>tbody",
        text: ".reply_content",
        user: "tr>td>strong>a"
    }
}, {
    name: "Yahoo Answers",
    domains: ["answers.yahoo.com"],
    paths: ["/question/"],
    subject: "Answers",
    title: "#yan-question h1.subject",
    question: {
        path: "#yan-question",
        text: "div.content"
    },
    answers: {
        path: "#yan-answers ul.shown li",
        text: "div.content",
        user: "span.user span.fn",
        time: "ul.meta abbr"
    }
}];
var B = new Class({
    match: function(a) {
        for (var b = 0; b < B.u.length; b++) {
            var c = B.u[b];
            if (c.domains && c.paths) {
                for (var e = m, d = 0; d < c.domains.length; d++) if (c.domains[d]) if (a.location.host.aa(c.domains[d])) {
                    e = i;
                    break
                }
                if (e) {
                    e = m;
                    if (c.paths.length == 0) e = i;
                    for (d = 0; d < c.paths.length; d++) if (c.paths[d]) if (a.location.pathname.i(c.paths[d])) {
                        e = i;
                        break
                    }
                    if (e) if (!($$(c.title).length < 1)) return b
                }
            }
        }
        return -1
    },
    build: function(a) {
        var b = this.match(a);
        if (b < 0) return m;
        b = B.u[b];
        this.name = b.name;
        this.url = a.URL;
        this.type = "book2";
        if (b.title && $$(b.title).length < 1) return m;
        a = $$(b.chapters.path);
        if (a.length <= 0) return m;
        this.title = $$(b.title)[0].get("text");
        this.chapters = [];
        for (var c = 0; c < a.length; c++) {
            var e = a[c].getElements(b.chapters.title),
                d = a[c].getElements(b.chapters.link);
            b.chapters.title || (e = [a[j]]);
            b.chapters.link || (d = [a[j]]);
            if (d[0].href) {
                d[0].href = d[0].href;
                this.chapters.push({
                    title: e[0].get("text"),
                    link: d[0].href,
                    text: b.chapters.text
                })
            }
        }
        return i
    }
}),
    C = new Class({
        match: function(a) {
            for (var b = 0; b < C.u.length; b++) {
                var c = C.u[b];
                if (c.domains && c.paths) {
                    for (var e = m, d = 0; d < c.domains.length; d++) if (c.domains[d]) if (a.location.host.aa(c.domains[d])) {
                        e = i;
                        break
                    }
                    if (e) {
                        e = m;
                        if (c.paths.length == 0) e = i;
                        for (d = 0; d < c.paths.length; d++) if (c.paths[d]) if (a.location.pathname.i(c.paths[d])) {
                            e = i;
                            break
                        }
                        if (e) if (!($$(c.title).length < 1)) return b
                    }
                }
            }
            return -1
        },
        build: function(a) {
            var b = this.match(a);
            if (b < 0) return m;
            b = C.u[b];
            this.name = b.name;
            this.url = a.URL;
            this.type = "book2";
            if (b.title && $$(b.title).length < 1) return m;
            a = $$(b.sections.path);
            if (a.length <= 0) return m;
            this.title = $$(b.title)[0].get("text");
            this.sections = [];
            a = $$(b.sections.path);
            for (var c = 0; c < a.length; c++) {
                var e = {};
                if (b.sections.title.i("/")) {
                    var d = $$(b.sections.title.substr(1));
                    if (d.length <= 0) continue;
                    e.title = d[c].get("text")
                } else {
                    d = a[c].getElements(b.sections.title);
                    if (d.length <= 0) continue;
                    e.title = d[0].get("text")
                }
                e.chapters = [];
                d = a[c].getElements(b.sections.chapters.path);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f].getElements(b.sections.chapters.title),
                        h = d[f].getElements(b.sections.chapters.link);
                    b.sections.chapters.title || (g = [d[f]]);
                    b.sections.chapters.link || (h = [d[f]]);
                    if (h[0].href) {
                        h = h[0].href.trim();
                        if (h.i("javascript:")) {
                            var k = h.split('"');
                            if (k.length < 3) k = h.split("'");
                            if (k.length == 3) h = k[1];
                            else continue
                        }
                        e.chapters.push({
                            title: g[0].get("text"),
                            link: h,
                            text: b.sections.chapters.text
                        })
                    }
                }
                this.sections.push(e)
            }
            return i
        }
    });
B.u = [{
    name: "book.sina",
    domains: ["book.sina.com.cn"],
    paths: ["/book/index_"],
    title: "#book_index_info_div>h1",
    chapters: {
        path: "ul>li>a",
        title: "",
        link: "",
        text: "div#contTxt"
    }
}];
C.u = [{
    name: "book.sina",
    domains: ["book.sina.com.cn"],
    paths: ["/book/index_"],
    title: "#book_index_info_div>h1",
    sections: {
        path: "div.blk_03",
        title: "div.tit03>h3",
        chapters: {
            path: "ul>li>a",
            title: "",
            link: "",
            text: "div#contTxt"
        }
    }
}, {
    name: "1.book.sohu",
    domains: ["book.sohu.com"],
    paths: ["/serialize-id-"],
    title: "div#contentB div.r h1",
    sections: {
        path: "div.boxI",
        title: "h2",
        chapters: {
            path: "ul>li>a",
            title: "",
            link: "",
            text: "div#txtBg>p"
        }
    }
}, {
    name: "book.qq",
    domains: ["book.qq.com"],
    paths: ["/s/book/"],
    title: "div#bookBrief h1",
    sections: {
        path: "div#ChapterInfo div",
        title: "div.tit",
        chapters: {
            path: "div.ChapterList tr>td>div>a",
            title: "",
            link: "",
            text: "div#content"
        }
    }
}, {
    name: "book.163",
    domains: ["book.163.com"],
    paths: ["/book/home/"],
    title: "td.f20h",
    sections: {
        path: "div.colLM div.box",
        title: "/div.titleBar>h2",
        chapters: {
            path: "ul>li>a",
            title: "",
            link: "",
            text: "div#bk-article-body"
        }
    }
}, {
    name: "book.qidian",
    domains: ["novel.hongxiu.com"],
    paths: ["/a/"],
    title: "div.wrapper_list>h1>a",
    sections: {
        path: "div#htmlList dl",
        title: "dt strong",
        chapters: {
            path: "dd ul li strong a",
            title: "",
            link: "",
            text: "div#htmlContent"
        }
    }
}, {
    name: "book.rongshuxia",
    domains: ["www.rongshuxia.com"],
    paths: ["/book/"],
    title: "div.title strong",
    sections: {
        path: "div.allBooks",
        title: "h6",
        chapters: {
            path: "div ul li a",
            title: "",
            link: "",
            text: "div.entryBody div.body"
        }
    }
}];
if (typeof F === "undefined") var F = {};
var G = new Class({
    initialize: n(),
    Lb: function(a) {
        a || (a = $(document.body));
        this.pb(a);
        a.store("klip_scanned", i)
    },
    Qb: function(a) {
        a || (a = $(document.body));
        ["klip_block_h", "klip_block_v", "klip_block_comments", "klip_block_banner", "klip_block_ads", "klip_block_big_buttons", "klip_block_medium_buttons", "klip_block_iframe", "klip_block_form", "klip_block_text", "klip_block_side", "klip_block_seed", "klip_block_first", "klip_block_last", "klip_block_begin", "klip_block_end"].each(function(b) {
            a.getElements("[" + b + "]").ca(b)
        });
        a.store("klip_scanned", m)
    },
    yb: function(a) {
        a || (a = $(document.body));
        return a.retrieve("klip_scanned", m)
    },
    q: function(a, b) {
        a.D("klip_block_" + b)
    },
    pb: function(a) {
        a = a.getChildren();
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ($chk(c) && c.isDisplayed()) if (!(c.getStyle("visibility") == "hidden" || c.className.indexOf("klip_") >= 0)) {
                var e = c.get("tag");
                if (e == "iframe") c.D && this.q(c, "iframe");
                else {
                    var d = c.xa(),
                        f = c.getPosition();
                    if (d.x >= 100 && d.x < 400 && d.x + d.y >= 300 && d.y >= d.x && e != "img") if (c.getElements("a").length > 3) {
                        this.q(c, "v");
                        continue
                    }
                    if (e == "img") {
                        if (!(f.y < 600 || d.x < 240 || d.y < 50)) if (d.y > 50 && d.y < 160 && (d.x > d.y * 4 || d.x > 300)) c.getParents().some(function(p) {
                            if (p.get("tag") == "a") return i
                        }) && this.q(c, "banner")
                    } else if (["object", "embed"].contains(e)) {
                        c.getCoordinates();
                        if (!(f.y < 600 || d.x < 240 || d.y < 50)) if (!(e == "object" && c.Eb())) if (d.y > 50 && d.y < 160 && (d.x > d.y * 4 || d.x > 300)) this.q(c, "banner");
                        else d.y > 200 && d.x > 240 && this.q(c, "ads")
                    } else if (["h4", "h5"].contains(e)) c.get("text").trim().toLowerCase() == "sponsored links" && this.q(c.getParent(), "ads");
                    else if (c.Lc()) this.q(c.getParent(), "ads");
                    else {
                        if (e == "form") if (f.y > 600 && d.x >= 400 && d.y >= 400) {
                            this.q(c, "form");
                            continue
                        }
                        if (d.x >= 320 && d.y > 100 && f.y > 600 && c.Bb()) this.q(c, "comments");
                        else {
                            if (d.x >= 200 && d.y < d.x / 6 && ["tr", "thead"].contains(e) == m) {
                                e = c.getElements("a").length;
                                if (e >= 3) {
                                    var g = c.getElements("*").length,
                                        h = c.get("text").length;
                                    if (h < 128 && h / g < 16 || h / e < 32) {
                                        this.q(c, "h");
                                        continue
                                    }
                                }
                            }
                            if (d.y >= 60 && d.y < 160 && (d.x > 350 || d.x > d.y * 3)) {
                                e = 0;
                                g = c.getElements("a, img");
                                h = [];
                                if (g.length >= 3) for (var k = 0; k < g.length; k++) if (h.contains(g[k])) h.push(g[k]);
                                else {
                                    var o = g[k].getCoordinates();
                                    if (!(o.top - f.y > Math.max(d.y, 160) / 2)) if (o.height === 0 || o.height > 40) {
                                        e++;
                                        if (e >= 3) break;
                                        h.push(g[k])
                                    }
                                }
                                if (e >= 3) {
                                    h = c.get("text").length;
                                    if (h < 128) {
                                        this.q(c, "medium_buttons");
                                        continue
                                    }
                                }
                            }
                            if (d.y > 160 && d.y < 320 && (d.x > 350 || d.x > d.y * 3)) {
                                e = 0;
                                g = c.getElements("a, img");
                                h = [];
                                if (g.length >= 3) for (k = 0; k < g.length; k++) if (h.contains(g[k])) h.push(g[k]);
                                else {
                                    o = g[k].getCoordinates();
                                    if (!(o.top - f.y > Math.max(d.y, 320) / 2)) if (o.height === 0 || o.height > 80) {
                                        e++;
                                        if (e >= 3) break;
                                        h.push(g[k])
                                    }
                                }
                                if (e >= 3) {
                                    this.q(c, "big_buttons");
                                    continue
                                }
                            }
                            d.x >= 400 && c.Ha().clean().length >= 64 && this.q(c, "text");
                            this.pb(c)
                        }
                    }
                }
            }
        }
    },
    fd: function(a) {
        var b = 0;
        a = a.getElements("p");
        for (var c = 0; c < a.length; c++) if (a[c].getSize().x >= 400) if (a[c].Ha().clean().length >= 64) {
            this.q(a[c], "text");
            b++
        }
    }
}),
    H = new Class({
        initialize: function() {
            this.R = this.Ba = l;
            this.$a = m;
            this.f = this.Z = this.Fa = l
        },
        mb: function(a, b) {
            var c = {
                left: Math.min(a.left, b.left),
                right: Math.max(a.right, b.right),
                top: Math.min(a.top, b.top),
                bottom: Math.max(a.bottom, b.bottom)
            };
            c.height = c.bottom - c.top;
            c.width = c.right - c.left;
            if (c.width * 0.85 > a.width || c.width * 0.85 > b.width) return m;
            var e = a.width * a.height,
                d = b.width * b.height;
            c = c.width * c.height - (e + d);
            return e > c && d > c
        },
        lb: function(a) {
            a.bound = a.focus.getCoordinates();
            a.bound.top = a.e.getPosition().y;
            a.bound.bottom = a.n.getPosition().y + a.n.xa().y;
            if (a.r) {
                var b = a.r.xa();
                if (a.r.getPosition().y + b.y > a.bound.top) a.bound.top = a.r.getPosition().y + b.y
            }
            if (a.end) if (a.end.getPosition().y < a.bound.bottom) a.bound.bottom = a.end.getPosition().y;
            a.bound.height = a.bound.bottom - a.bound.top
        },
        oa: function() {
            var a = $$("[klip_block_comments]");
            this.Fa = l;
            var b = 0;
            if (a.length > 0) this.Fa = a[0];
            if (this.Fa) this.Z = this.Fa.getCoordinates();
            var c = $$("[klip_block_v]");
            this.Ba = l;
            for (a = b = 0; a < c.length; a++) {
                var e = c[a].getSize(),
                    d = c[a].getPosition();
                if (!(Math.min(600, d.y + e.y) <= Math.max(0, d.y))) {
                    var f = e.x * Math.sqrt(e.y);
                    if (this.Z && (d.x >= this.Z.right || d.x + e.x <= this.Z.left)) f += 1E4;
                    if (f > b) {
                        b = f;
                        this.Ba = c[a]
                    }
                }
            }
            if (this.Ba) {
                this.Ba.D("klip_block_side");
                this.R = this.Ba.getCoordinates()
            }
            c = $$("[klip_block_text]");
            if (this.Z) for (a = c.length - 1; a >= 0; a--) {
                e = c[a].getSize();
                d = c[a].getPosition();
                if (d.y >= this.Z.top) {
                    c[a].ca("klip_block_text");
                    c.splice(a, 1)
                } else if (d.x + e.x <= this.Z.left || d.x >= this.Z.right) {
                    c[a].ca("klip_block_text");
                    c.splice(a, 1)
                }
            }
            e = l;
            for (a = b = 0; a < c.length; a++) {
                c[a].getSize();
                d = c[a].getPosition();
                if (!(d.y > 2E3)) {
                    f = 1 - Math.sqrt(Math.abs(d.y - 400) / 1600);
                    d = c[a].Ha();
                    f *= d.length;
                    if (f > b) {
                        b = f;
                        e = c[a]
                    }
                }
            }
            if (!e) return l;
            e.D("klip_block_seed");
            if (this.R) this.$a = this.R.right <= e.getPosition().x ? i : m;
            f = [];
            for (a = 0; a < c.length; a++) {
                d = c[a];
                e = d.getPosition();
                var g = -1;
                for (b = 0; b < f.length; b++) if (!(e.y > f[b].bound.bottom)) {
                    g = b;
                    break
                }
                if (!(g >= 0)) {
                    b = this.ob(d);
                    b.e.D("klip_block_first");
                    b.e != b.n && b.n.D("klip_block_last");
                    d = l;
                    if (b.e != b.n) {
                        e = b.e.getSize().y;
                        g = b.n.getPosition().y + b.n.getSize().y - b.e.getPosition().y;
                        var h = b.e.getParent().getSize().y;
                        if (e >= 300 && g > e && h > g) if (e / g >= 0.85 && g / h <= 0.6) d = b.e;
                        d || (d = b.e.getParent())
                    } else if (!b.r && !b.end) d = b.e;
                    else {
                        g = b.r || b.e;
                        h = b.end || b.e;
                        e = b.e.getSize().y;
                        g = h.getPosition().y + h.getSize().y - g.getPosition().y;
                        h = b.e.getParent().getSize().y;
                        if (e > 300 && g > e && h > g) if (e / g >= 0.85 && g / h <= 0.6) d = b.e;
                        d || (d = b.e.getParent())
                    }
                    b.focus = d;
                    this.lb(b);
                    b.bound.height < 100 || f.push(b)
                }
            }
            if (f.length == 0) this.f = l;
            else if (f.length == 1) this.f = f[0];
            else if (f.length == 2) if (this.mb(f[0].bound, f[1].bound)) {
                c = u.j.Xa(f[0].focus, f[1].focus);
                this.f = {
                    e: f[0].e,
                    n: f[1].n,
                    r: f[0].r,
                    end: f[1].end,
                    focus: c
                }
            } else {
                c = f[0];
                if (c.bound.width * c.bound.height < f[1].bound.width * f[1].bound.height * 0.8) c = f[1];
                this.f = c
            } else if (f.length > 2) {
                c = m;
                do {
                    c = m;
                    for (a = 0; a < f.length - 1; a++) {
                        for (b = a + 1; b < f.length; b++) if (this.mb(f[a].bound, f[b].bound)) {
                            c = u.j.Xa(f[a].focus, f[b].focus);
                            d = {
                                left: Math.min(f[a].bound.left, f[b].bound.left),
                                right: Math.max(f[a].bound.right, f[b].bound.right),
                                top: Math.min(f[a].bound.top, f[b].bound.top),
                                bottom: Math.max(f[a].bound.bottom, f[b].bound.bottom)
                            };
                            d.height = d.bottom - d.top;
                            d.width = d.right - d.left;
                            f[a] = {
                                e: f[a].e,
                                n: f[a].n,
                                r: f[a].r,
                                end: f[b].end,
                                focus: c,
                                bound: d
                            };
                            for (c = b; c > a; c--) f.splice(c, 1);
                            c = i;
                            break
                        }
                        if (c) break
                    }
                } while (c);
                for (a = d = 0; a < f.length; a++) d = Math.max(d, f[a].bound.bottom);
                c = f[0];
                for (e = Math.sqrt(c.bound.width * c.bound.height) * (1 - c.bound.top / d); a < f.length; a++) {
                    b = Math.sqrt(f[a].bound.width * f[a].bound.height) * (1 - f[a].bound.top / d);
                    if (e < b) {
                        c = f[a];
                        e = b
                    }
                }
                this.f = c
            }
            if (!this.f) return l;
            this.f.r && this.f.r.D("klip_block_begin");
            this.f.end && this.f.end.D("klip_block_end");
            $$("[klip_block_first]").ca("klip_block_first");
            $$("[klip_block_last]").ca("klip_block_last");
            this.f.e && this.f.e.D("klip_block_first");
            this.f.n && this.f.n.D("klip_block_last");
            this.lb(this.f);
            return this.f.focus
        },
        ob: function(a) {
            if (a.get("tag") == "body") return {
                e: a,
                n: a,
                r: l,
                end: l
            };
            if (a.getSize().x + 100 < a.getParent().getSize().x) return {
                e: a,
                n: a,
                r: l,
                end: l
            };
            for (var b = ["klip_block_h", "klip_block_comments", "klip_block_banner", "klip_block_ads", "klip_block_big_buttons", "klip_block_medium_buttons", "klip_block_iframe", "klip_block_form", "klip_block_side"], c = l, e = a, d = a; d.getPrevious();) {
                d = d.getPrevious();
                if ($chk(d) && d.isDisplayed()) {
                    if (d.J("klip_block_side") == 1) {
                        c = d;
                        break
                    }
                    var f = d.getSize();
                    if (!(f.x < 200)) {
                        if (this.R) {
                            var g = d.getPosition();
                            if (this.$a) {
                                if (g.x < this.R.right - 20) {
                                    c = d;
                                    break
                                }
                            } else if (g.x + f.x > this.R.left + 20) {
                                c = d;
                                break
                            }
                        }
                        if (g = b.some(function(t) {
                            return d.J(t) == 1
                        })) {
                            if (f.y >= 500 && d.get("tag") == "iframe") continue;
                            if (f.x >= 400) {
                                c = d;
                                break
                            }
                            if (f.x >= 200 && d.J("klip_block_h") == 1) {
                                c = d;
                                break
                            }
                        }
                        for (g = 0; g < b.length; g++) for (var h = d.getElements("[" + b[g] + "]"), k = h.length - 1; k >= 0; k--) {
                            f = h[k].getSize();
                            if (!(f.y >= 500 && h[k].get("tag") == "iframe")) {
                                if (f.x >= 400) {
                                    c = h[k];
                                    break
                                }
                                if (f.x >= 200 && h[k].J("klip_block_h") == 1) {
                                    c = h[k];
                                    break
                                }
                            }
                        }
                        if (c) break;
                        if (d.get("text").length > 16) e = d
                    }
                }
            }
            var o = a,
                p = l;
            for (d = a; d.getNext();) {
                d = d.getNext();
                if ($chk(d) && d.isDisplayed()) {
                    if (d.J("klip_block_side") == 1) {
                        p = d;
                        break
                    }
                    f = d.getSize();
                    if (!(f.x < 200)) {
                        if (this.R) {
                            g = d.getPosition();
                            if (this.$a) {
                                if (g.x < this.R.right - 20) {
                                    p = d;
                                    break
                                }
                            } else if (g.x + f.x > this.R.left + 20) {
                                p = d;
                                break
                            }
                        }
                        if (g = b.some(function(t) {
                            return d.J(t) == 1
                        })) {
                            if (f.y >= 500 && d.get("tag") == "iframe") continue;
                            if (f.x >= 400) {
                                p = d;
                                break
                            }
                            if (f.x >= 200 && d.J("klip_block_h") == 1) {
                                p = d;
                                break
                            }
                        }
                        for (g = 0; g < b.length; g++) {
                            h = d.getElements("[" + b[g] + "]");
                            for (k = 0; k < h.length; k++) {
                                f = h[k].getSize();
                                if (!(f.y >= 500 && h[k].get("tag") == "iframe")) {
                                    if (f.x >= 400) {
                                        p = h[k];
                                        break
                                    }
                                    if (f.x >= 200 && h[k].J("klip_block_h") == 1) {
                                        p = h[k];
                                        break
                                    }
                                }
                            }
                        }
                        if (p) break;
                        if (d.get("text").length > 16) o = d
                    }
                }
            }
            if (c || p) {
                if (c && c.J("klip_block_side") == 1) {
                    c = c.getNext();
                    if (c == e) c = l
                }
                if (p && p.J("klip_block_side") == 1) {
                    p = p.getPrevious();
                    if (p == o) p = l
                }
                return {
                    e: e,
                    n: o,
                    r: c,
                    end: p
                }
            }
            return this.ob(a.getParent())
        }
    }),
    J = new Class({
        initialize: function() {
            this.f = l;
            this.yc = m;
            if ($main && $main.options && $main.options.debug) this.yc = i
        },
        oa: function(a) {
            if (a === undefined || a === l) a = "";
            var b = this.f = l;
            if (w(document.URL)) if ($$("#current-entry .item-body").length > 0) return $$("#current-entry .item-body")[0];
            if (a === "" && $(document.body).className.indexOf("mediawiki") >= 0) if ($("bodyContent")) return $("bodyContent");
            if (a === "" && document.URL.indexOf("://blog.sina.com.cn/") > 0) {
                if ($("div#articlebody>div.articleContent")) return $("div#articlebody>div.articleContent");
                if ($("div#articlebody>div.articalContent")) return $("div#articlebody>div.articalContent")
            }
            var c = new G;
            if (c.yb()) c = l;
            c && c.Lb();
            if (!b && (this.xd != "disabled" && a === "" || a === "MF")) if ((b = (new I(i)).oa($main.G)) && (!b.k() || b.get("text").length < 256 && b.getElements("img").length < 9999)) b = l;
            if (!b && (a === "" || a === "AF")) {
                a = new H;
                b = a.oa();
                this.f = a.f;
                if (b && (!b.k() || b.get("text").length < 256 && b.getElements("img").length < 9999)) this.f = b = l
            }
            if (b) {
                b.ca("klip_block_v");
                a = b.xa();
                for (var e = b.getElements("[klip_block_v]"), d = e.length - 1; d >= 0; d--) {
                    var f = e[d].xa();
                    f.x > 0 && f.x < a.x / 2 && e[d].ca("klip_block_v")
                }
            }
            c && c.Qb();
            return b
        }
    }),
    v = new Class({
        initialize: function() {
            this.da = "af";
            var a = new A;
            if (a.build(document)) this.ra = a
        },
        getURL: function() {
            if (this.ra) return this.ra.url;
            if (w(document.URL)) if ($$("#current-entry .item-body").length > 0 && $$("#current-entry .entry-title-link").length > 0) return $$("#current-entry .entry-title-link")[0].get("href");
            return document.URL
        },
        xb: function() {
            if ($chk($("klip_title")) && $("klip_title").isDisplayed()) return $("klip_title").get("text");
            if (this.ra) return this.ra.title;
            if (w(document.URL)) if ($$("#current-entry .item-body").length > 0 && $$("#current-entry .entry-title-link").length > 0) return $$("#current-entry .entry-title-link")[0].get("text");
            for (var a = document.title.clean(), b = $$("h1,h2,h3,h4"), c = l, e = 0; e < b.length; e++) {
                var d = b[e];
                if (d && d.isVisible()) if (!(d.getPosition().y > 600)) {
                    var f = d.getStyle("text-indent");
                    if (f != "0px" && (f.aa("px") || f.aa("em"))) if (f.substring(0, f.length - 2) < -20) continue;
                    d = d.get("text").clean();
                    if (!(d.length <= 4)) if (!(c && d.length <= c.length)) if (a.indexOf(d) >= 0) c = d
                }
            }
            c || (c = a);
            return c
        },
        vb: function() {
            if (this.ra) return this.ra.format();
            var a = l;
            this.da = "af";
            var b = l;
            if (document.selection && document.selection.createRange) {
                b = document.selection.createRange();
                if (b.htmlText) {
                    a = new Element("div");
                    a.set("html", b.htmlText)
                } else if (b.length >= 1) {
                    a = new Element("div");
                    a.set("html", b.item(0).outerHTML)
                }
            } else if (window.getSelection) {
                b = window.getSelection();
                if (b.rangeCount > 0) {
                    b = b.getRangeAt(0);
                    a = new Element("div");
                    a.appendChild(b.cloneContents())
                }
            }
            if (a && a.get("text").length > 16) {
                a.Oa();
                a.clean();
                a = a.Ga();
                this.da = "hl";
                return a
            }
            b = l;
            if ($klippy.Q && $klippy.Q.l) {
                b = $klippy.Q.l;
                var c = b.Ma(i, i);
                a = new Element("div");
                a.grab(c);
                if (a && a.get("text").length > 16) {
                    a.Oa();
                    a.clean();
                    a = a.Ga();
                    this.da = "ed";
                    return a
                }
            }
            if (w(document.URL)) if ($$("#current-entry .item-body").length > 0) {
                b = $$("#current-entry .item-body")[0];
                c = b.Ma(i, i);
                a = new Element("div");
                a.grab(c);
                if (a && a.get("text").length > 16) {
                    a.Oa();
                    a.clean();
                    a = a.Ga();
                    this.da = "gr";
                    return a
                }
            }
            var e = new G;
            if (e.yb()) e = l;
            e && e.Lb();
            if (a === l || a.get("text").length < 320 && a.getElements("img").length < 9999) if ($chk(b)) {
                c = b.Ma(i, i);
                a = new Element("div");
                a.grab(c)
            }
            c = m;
            if (a === l || a.get("text").length < 320 && a.getElements("img").length < 9999) {
                a = $("klip_text_body");
                c = i;
                this.da = "pr"
            }
            if (a === l || a.get("text").length < 320 && a.getElements("img").length < 9999) {
                b = (new J).oa();
                if ($chk(b)) {
                    c = b.Ma(i, i);
                    a = new Element("div");
                    a.grab(c);
                    this.da = "af";
                    c = m
                }
            }
            if (a != l && !c) {
                a.Oa();
                a.clean();
                a = a.Ga()
            }
            e && e.Qb();
            if (a && a.get("text").length < 320 && a.getElements("img").length < 9999) a = l;
            return a
        },
        td: function() {
            return this.da
        }
    }),
    I = new Class({
        initialize: function(a) {
            this.k = a
        },
        qc: function(a, b, c) {
            var e = "";
            a = a.Ta(b, 0);
            for (b = 0; b < a.length; b++) {
                str = a[b];
                str.length < 1 || c.contains(str[0]) || (e += str)
            }
            return e
        },
        jb: function(a) {
            if (!a || a.length < 1) return l;
            if (a.length === 1) return a[0];
            for (var b = a[0].split(" "), c = 1; c < a.length; c++) {
                var e = a[c].split(" ");
                if (b.length !== e.length) return "";
                for (var d = 0; d < b.length; d++) {
                    var f = b[d].Ta(["#", ".", ":", "["], 0),
                        g = e[d].Ta(["#", ".", ":", "["], 0);
                    b[d] = "";
                    for (var h = 0; h < f.length; h++) if (g.contains(f[h])) b[d] += f[h]
                }
            }
            a = "";
            for (c = 0; c < b.length; c++) {
                if (a !== "") a += " ";
                a += b[c]
            }
            return a
        },
        ec: function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var e = this.qc(a[c], ["#", ".", ":", "[", " "], ["#", ".", ":", "["]);
                if (typeof b[e] === "undefined") b[e] = [];
                b[e].push(a[c])
            }
            return b
        },
        rc: function(a) {
            var b = [],
                c;
            for (c in a) if (!(a[c].length < 2)) {
                var e = this.jb(a[c]);
                e && b.push(e)
            }
            return b
        },
        oa: function(a, b, c) {
            var e = window.$$;
            if (c) e = function(x) {
                return c.getElements(x)
            };
            if (!b) b = document.URL;
            c || (c = document);
            b = new URI(b);
            var d = b.get("directory") + b.get("file"),
                f = b.get("host");
            for (b = 0; b < a.length; b++) {
                var g = a[b].url;
                if (g.contains("*")) if ((new y(g)).match(href)) {
                    g = e(a[b].selector);
                    for (var h = 0; h < g.length; h++) if (!this.k || g[h].k()) return g[h]
                }
            }
            var k = [];
            for (b = 0; b < a.length; b++) {
                g = a[b].url;
                if (!g.contains("*")) {
                    var o = new URI(g),
                        p = o.get("directory") + o.get("file"),
                        t = d.length;
                    for (h = 0; h < d.length; h++) if (p[h] != d[h]) {
                        t = h;
                        break
                    }
                    if (o.get("host") === f) t += 1E3;
                    t += b;
                    k.push({
                        url: g,
                        Hb: t
                    })
                }
            }
            for (b = 0; b < k.length - 1; b++) for (h = b + 1; h < k.length; h++) if (k[b].Hb < k[h].Hb) {
                g = k[b];
                k[b] = k[h];
                k[h] = g
            }
            d = /[1-9][0-9]{3,}$/;
            o = /-[1-9][0-9]{2,}$/;
            for (b = 0; b < k.length; b++) {
                var r = "";
                for (h = 0; h < a.length; h++) if (a[h].url === k[b].url) {
                    r = a[h].selector;
                    break
                }
                if (r) {
                    g = e(r);
                    if (g.length == 0) {
                        g = r.Ta([" ", "#", ".", ":", "["], 0);
                        r = "";
                        for (h = 0; h < g.length; h++) d.test(g[h]) || o.test(g[h]) || (r += g[h]);
                        g = e(s)
                    }
                    if (g.length == 0) {
                        g = r.split(" ");
                        var s = "";
                        for (h = 0; h < g.length; h++) {
                            if (g[h].contains("#")) s = "";
                            if (s !== "") s += " ";
                            s += g[h]
                        }
                        if (s.i(">")) s = s.substring(1);
                        g = e(s)
                    }
                    if (this.k) for (h = 0; h < g.length; h++) {
                        if (g[h].k()) return g[h]
                    } else if (g.length == 1) return g[0]
                }
            }
            h = [];
            for (b = 0; b < a.length; b++) {
                g = a[b].url;
                if (!g.contains("*")) {
                    o = new URI(g);
                    o.get("host") === f && h.push(a[b].selector)
                }
            }
            a = this.ec(h);
            s = this.rc(a);
            for (h = 0; h < s.length; h++) {
                r = s[h];
                g = e(r);
                if (this.k) for (b = 0; b < g.length; b++) {
                    if (g[b].k()) return g[b]
                } else if (g.length == 1) return g[0]
            }
            s = "";
            f = l;
            for (r in a) {
                g = e(r);
                for (b = 0; b < g.length; b++) {
                    if (this.k) {
                        h = g[b].getSize();
                        k = g[b].getPosition();
                        if (h.x < 360 || h.x * h.y < 16E4 || k.y > 800) continue
                    }
                    k = g[b].Ia();
                    for (h = 0; h < a[r].length; h++) {
                        d = this.jb([k, a[r][h]]);
                        if (d.length > s.length) {
                            s = d;
                            f = g[b]
                        }
                    }
                }
            }
            return f
        }
    });
u.bc = new Class({
    rd: function(a) {
        var b = l;
        a.each(function(c) {
            if ($chk(c)) {
                c = c.getCoordinates();
                if ($chk(c) != m) if (b == l) b = c;
                else {
                    b.left = Math.min(b.left, c.left);
                    b.right = Math.max(b.right, c.right);
                    b.top = Math.min(b.top, c.top);
                    b.bottom = Math.max(b.bottom, c.bottom)
                }
            }
        });
        b.width = b.right - b.left;
        b.height = b.bottom - b.top;
        return b
    },
    Cc: function(a, b) {
        $chk(b) || (b = $(document.body));
        for (var c = l, e = b.getChildren(), d = 0, f = e.length; d < f; d++) {
            var g = e[d];
            if ($chk(g)) if (g.isDisplayed()) if (!u.j.K(g)) {
                var h = g.getCoordinates();
                if (h.top > a.bottom) return;
                if (u.j.contains(a, h)) if (c === l) c = g;
                else return b;
                else if (u.j.Kc(a, h)) {
                    g = this.Cc(a, g);
                    if (g !== l) if (c === l) c = g;
                    else return b
                }
            }
        }
        return c
    },
    Za: function(a, b) {
        $chk(b) || (b = $(document.body));
        var c = [],
            e = [];
        b.getElements("*").each(function(d) {
            
            if ($chk(d)) if (d.isDisplayed()) if (u.j.K(d)) e.push(d);
            else {
                for (; e.length > 0;) {
                    if (e.getLast() === d.getParent()) {
                        e.push(d);
                        return
                    }
                    e.pop()
                }
                var f = d.getCoordinates();
                if ($chk(f)) if (!(f.height < 10 || f.width < 10)) if (f.top > a.bottom || f.left > a.right) e.push(d);
                else if (u.j.contains(a, f)) {
                    c.push(d);
                    e.push(d)
                }
            } else e.push(d)
        }, this);
        return c
    },
    Ya: function(a) {
        if (a == l) return l;
        var b = l;
        a = a.each(function(c) {
            if ($chk(c)) b = b === l ? c : u.j.Xa(b, c)
        });
        return b
    }
});
u.ac = new Class({
    Extends: u.bc,
    initialize: function() {
        this.ka = this.ha = this.na = this.ta = this.ea = this.O = this.U = this.X = this.W = this.V = this.g = this.l = this.bound = l
    },
    destroy: function() {
        this.fa()
    },
    P: function() {
        if (!this.g) if ($(document.body)) {
            this.g = new Element("div", {
                id: "klip_select_container",
                "class": "klip_select_container",
                style: "display:none"
            });
            $(document.body).grab(this.g);
            this.ta = new Element("div", {
                id: "klip_tl_draggable",
                "class": "klip_corner klip_corner_tl",
                style: "display:none;"
            });
            this.g.grab(this.ta);
            this.na = new Element("div", {
                id: "klip_br_draggable",
                "class": "klip_corner klip_corner_br",
                style: "display:none;"
            });
            this.g.grab(this.na);
            this.ha = new Element("div", {
                id: "klip_select_cancel",
                "class": "klip_button2 klip_button_cancel",
                style: "display:none;",
                title: "Cancel"
            });
            this.g.grab(this.ha);
            this.ha.setStyle("background-image", "url(" + $main.getURL("/images/delete32.png") + ")");
            this.ka = new Element("div", {
                id: "klip_select_ok",
                "class": "klip_button2 klip_button_check",
                style: "display:none;",
                title: "OK"
            });
            this.g.grab(this.ka);
            this.ka.setStyle("background-image", "url(" + $main.getURL("/images/check32.png") + ")");
            this.V = new Element("div", {
                "class": "klip_bounder_border"
            });
            this.W = new Element("div", {
                "class": "klip_bounder_border"
            });
            this.X = new Element("div", {
                "class": "klip_bounder_border"
            });
            this.U = new Element("div", {
                "class": "klip_bounder_border"
            });
            this.O = new Element("div", {
                "class": "klip_bounder"
            });
            this.g.grab(this.V);
            this.g.grab(this.W);
            this.g.grab(this.X);
            this.g.grab(this.U);
            this.g.grab(this.O);
            this.ea = new Element("div", {
                "class": "klip_tracker"
            });
            this.g.grab(this.ea);
            var a = this;
            if(!window.Drag){
                return
            }
            this.Bd = new Drag("klip_tl_draggable", {
                snap: 5,
                onSnap: n(),
                onComplete: n(),
                onDrag: function(b) {
                    b = b.getPosition();
                    var c = window.scrollX,
                        e = window.scrollY,
                        d = parseInt($(document.html).getStyle("margin-top")),
                        f = b.x - c,
                        g = b.y - e,
                        h = window.innerWidth,
                        k = window.innerHeight;
                    if (f - 25 < 0) c += f - 100;
                    if (g - 25 < d) e += g - 100 - d;
                    if (f + 25 > h) c += f + 100 - h;
                    if (g + 25 > k) e += g + 100 - k;
                    c = Math.min(c, Math.max(document.width - h, 0));
                    e = Math.min(e, Math.max(document.height - k, 0));
                    if (c !== window.scrollX || e !== window.scrollY) window.scrollTo(c, e);
                    a.bound.left = b.x + 2;
                    a.bound.top = b.y + 2;
                    a.show()
                }
            });
            this.hd = new Drag("klip_br_draggable", {
                snap: 5,
                onSnap: n(),
                onComplete: n(),
                onDrag: function(b) {
                    b = b.getPosition();
                    var c = window.scrollX,
                        e = window.scrollY,
                        d = parseInt($(document.html).getStyle("margin-top")),
                        f = b.x - c,
                        g = b.y - e,
                        h = window.innerWidth,
                        k = window.innerHeight;
                    if (f - 25 < 0) c += f - 100;
                    if (g - 25 < d) e += g - 100 - d;
                    if (f + 25 > h) c += f + 100 - h;
                    if (g + 25 > k) e += g + 100 - k;
                    c = Math.min(c, Math.max(document.width - h, 0));
                    e = Math.min(e, Math.max(document.height - k, 0));
                    if (c !== window.scrollX || e !== window.scrollY) window.scrollTo(c, e);
                    a.bound.right = b.x + 2;
                    a.bound.bottom = b.y + 2;
                    a.show()
                }
            });
            $("klip_select_pin") && $("klip_select_pin").addEvent("click", function(b) {
                a.Rc.call(a, b)
            });
            $("klip_select_cancel") && $("klip_select_cancel").addEvent("click", function(b) {
                a.cancel.call(a, b)
            });
            $("klip_select_ok") && $("klip_select_ok").addEvent("click", function(b) {
                a.Pc.call(a, b)
            });
            $("klip_select_skip") && $("klip_select_skip").addEvent("click", function(b) {
                a.Wc.call(a, b)
            })
        }
    },
    fa: function() {
        if (this.g) {
            this.hide();
            this.g && this.g.destroy();
            this.ka = this.ha = this.na = this.ta = this.ea = this.O = this.U = this.X = this.W = this.V = this.g = this.l = this.bound = l
        }
    },
    show: function() {
        if (this.g) {
            this.hide();
            if (this.bound) {
                var a = $main.getStyles("Select");
                a.indexOf("://") > 0 && a.indexOf("://") <= 20 ? document.head.grab(new Element("link", {
                    rel: "stylesheet",
                    media: "screen",
                    type: "text/css",
                    charset: "utf-8",
                    id: "klipme_selector_css",
                    href: a
                })) : document.head.grab(new Element("style", {
                    type: "text/css",
                    id: "klipme_selector_css",
                    text: a
                }));
                this.g.setStyle("display", "");
                this.ea.setPosition({
                    x: Math.min(this.bound.left, this.bound.right),
                    y: Math.min(this.bound.top, this.bound.bottom)
                });
                this.ea.setStyle("width", Math.abs(this.bound.right - this.bound.left));
                this.ea.setStyle("height", Math.abs(this.bound.bottom - this.bound.top));
                this.ea.setStyle("display", "");
                this.ha.setPosition({
                    x: this.bound.left + 30,
                    y: this.bound.top - 16
                });
                this.ha.setStyle("display", "");
                this.na.setPosition({
                    x: this.bound.right - 2,
                    y: this.bound.bottom - 2
                });
                this.na.setStyle("display", "");
                this.ta.setPosition({
                    x: this.bound.left - 2,
                    y: this.bound.top - 2
                });
                this.ta.setStyle("display", "");
                if ((a = this.Ya(this.Za(this.bound))) && a.k()) {
                    a = a.getCoordinates();
                    this.ka.setPosition({
                        x: this.bound.right - 60,
                        y: this.bound.top - 16
                    });
                    this.ka.setStyle("display", "");
                    var b = this.O.getCoordinates();
                    if (b.left != a.left || b.right != a.right || b.top != a.top || b.bottom != a.bottom) {
                        this.O.setPosition({
                            x: a.left,
                            y: a.top
                        });
                        this.O.setStyle("width", a.width);
                        this.O.setStyle("height", a.height);
                        this.O.setStyle("display", "");
                        this.oc(a)
                    }
                }
            }
        }
    },
    hide: function() {
        if (this.g) {
            this.V.setStyle("display", "none");
            this.W.setStyle("display", "none");
            this.X.setStyle("display", "none");
            this.U.setStyle("display", "none");
            this.O.setStyle("display", "none");
            this.ea.setStyle("display", "none");
            this.ta.setStyle("display", "none");
            this.na.setStyle("display", "none");
            this.ha.setStyle("display", "none");
            this.ka.setStyle("display", "none");
            this.g.setStyle("display", "none");
            $("klipme_selector_css") && $("klipme_selector_css").destroy()
        }
    },
    oc: function(a) {
        if (this.g) {
            this.V.setStyle("display", "");
            this.W.setStyle("display", "");
            this.X.setStyle("display", "");
            this.U.setStyle("display", "");
            this.V.setStyle("width", 2);
            this.W.setStyle("width", 2);
            this.X.setStyle("width", a.right - a.left);
            this.U.setStyle("width", a.right - a.left + 2);
            this.V.setPosition({
                x: a.left,
                y: a.top
            });
            this.V.setStyle("height", a.bottom - a.top);
            this.W.setPosition({
                x: a.right,
                y: a.top
            });
            this.W.setStyle("height", a.bottom - a.top);
            this.X.setPosition({
                x: a.left,
                y: a.top
            });
            this.X.setStyle("height", 2);
            this.U.setPosition({
                x: a.left,
                y: a.bottom
            });
            this.U.setStyle("height", 2)
        }
    },
    position: function(a) {
        if (a !== undefined) this.bound = a;
        return this.bound
    },
    Rc: function() {
        var a = this.Ya(this.Za(this.bound));
        if (a && a.k()) {
            this.l = a;
            a = a.Ia();
            for (var b = document.URL, c = "", e = 0; e < $main.G.length; e++) c += $main.G[e].url + ":\n" + $main.G[e].Q + "\n";
            var d = 0;
            $$(a).each(function(o) {
                if (o.k()) if (d === 0) d++;
                else o.getPosition().y < 800 && d++
            });
            for (var f = e = l, g = $$("link[rel=alternate]"), h = 0; h < g.length; h++) {
                var k = g[h].get("type").toLowerCase();
                if (k === "application/rss+xml") if (!f || f.length > g[h].href.length) f = g[h].href;
                if (k === "application/atom+xml") if (!e || e.length > g[h].href.length) e = g[h].href
            }
            if (f) c += "RSS: " + f + "\n";
            if (e) c += "ATOM: " + e + "\n";
            g = "Detected focus is not the only, Please adjust the highlight area\n\n* Some pages may not support this feature";
            h = "Set the current highlight as focus of this page?\n\n* Set page focus will improve the autofocus function of this site";
            if ($main.options.debug) {
                g += "\n\n" + a + "\n====================\n" + c;
                h += "\n\n" + a + "\n====================\n" + c
            }
            d !== 1 ? alert(g) : chrome.extension.sendMessage({
                action: "finder-add",
                url: b,
                selector: a,
                rss: f,
                atom: e
            }, function(o) {
                $main.G = o
            })
        }
        a = this.l.getCoordinates();
        this.bound = {
            left: a.left,
            top: a.top,
            right: a.right,
            bottom: a.bottom
        };
        $klippy.execute("edit-format");
        this.clear()
    },
    cancel: function() {
        $klippy.execute("edit-reset");
        this.clear()
    },
    Pc: function() {
        var a = this.Ya(this.Za(this.bound));
        if (a && a.k()) {
            this.l = a;
            a = a.Ia();
            for (var b = document.URL, c = "", e = 0; e < $main.G.length; e++) c += $main.G[e].url + ":\n" + $main.G[e].Q + "\n";
            var d = 0;
            $$(a).each(function(f) {
                if (f.k()) if (d === 0) d++;
                else f.getPosition().y < 800 && d++
            });
            e = $main.i18n.message_27;
            if ($main.options.debug) {
                alertMessage += "\n\n" + a + "\n====================\n" + c;
                e += "\n\n" + a + "\n====================\n" + c
            }
            d == 1 && confirm(e) && chrome.extension.sendMessage({
                action: "finder-add",
                url: b,
                selector: a
            }, function(f) {
                $main.G = f
            })
        }
        this.bound = this.l.getCoordinates();
        $klippy.execute("edit-format");
        this.clear()
    },
    Wc: function(a) {
        a.stop();
        return i
    },
    click: q(m),
    mousemove: q(m),
    mousedown: q(m),
    mouseup: q(m),
    keydown: q(m),
    keyup: q(m),
    tc: function(a) {
        var b = new J;
        this.l = this.Fc();
        if (!this.l) this.l = b.oa(a);
        if (!this.l && a == "MF") this.l = $(document.body);
        if ($chk(this.l)) {
            this.bound = b.f ? b.f.bound : this.l.getCoordinates();
            this.show();
            window.scroll(0, 0)
        }
        return focus
    },
    clear: function() {
        this.fa();
        this.bound = this.l = l
    },
    execute: function(a, b) {
        this.P();
        switch (a) {
        case "auto":
            this.tc(b);
            break;
        case "clear":
            this.clear()
        }
    },
    Va: function(a) {
        switch (a) {
        case "auto":
            return i;
        case "clear":
            return this.Jc()
        }
    },
    Jc: function() {
        return $chk(this.l)
    },
    Fc: function() {
        var a = l;
        if (window.getSelection) {
            var b = window.getSelection();
            if (b.rangeCount) {
                a = b.getRangeAt(0).commonAncestorContainer;
                if (a.nodeType != 1) a = a.parentNode
            }
        } else if (document.selection && document.selection.type != "Control") a = document.selection.createRange().parentElement();
        return a
    }
});
u.pa = {
    "#Ivory": "font_family_wide_sans_serif font_size_18 text_line_height_1_625 text_align_normal layout_width_600_px layout_align_center layout_outer_margin_0 color_off_yellow_off_black",
    "#Light": "font_family_wide_sans_serif font_size_18 text_line_height_1_625 text_align_normal layout_width_600_px layout_align_center layout_outer_margin_0 color_white_black",
    "#Dark": "font_family_wide_sans_serif font_size_18 text_line_height_1_625 text_align_normal layout_width_600_px layout_align_center layout_outer_margin_0 color_black_white"
};
u.Wb = new Class({
    initialize: function() {
        this.history = new u.Zb
    },
    destroy: function() {
        for (; this.history.Wa();) this.history.ua();
        this.fa()
    },
    P: function() {
        $(document.body)
    },
    fa: function() {
        $main.zb()
    },
    show: function() {
        $main.Vc()
    },
    hide: function() {
        $main.zb()
    },
    execute: function(a, b) {
        this.P();
        if (a === "undo" || a === "redo") {
            if (a === "undo") {
                if (!this.history.Wa()) return m;
                this.history.ua()
            } else {
                if (!this.history.uc()) return m;
                this.history.Sc()
            }
            return i
        }
        if (a === "reset") {
            for (; this.history.Wa();) this.history.ua();
            return i
        }
        var c = l;
        if (a === "format" && !$("klip_text_box")) c = new u.va.Yb(l, b);
        if (c !== l) {
            this.history.execute(c);
            return i
        }
        return m
    },
    N: 1,
    fb: 2,
    Sb: 16,
    Tb: 32,
    Ab: function(a) {
        return a & this.N
    },
    Mc: function(a) {
        return a & this.fb
    },
    Cb: function(a) {
        return a & this.Sb
    },
    Db: function(a) {
        return a & this.Tb
    }
});
u.va = new Class({
    initialize: function(a) {
        this.wa = [];
        this.dd = a
    },
    getProperty: function(a, b, c) {
        b = b.toLowerCase();
        var e = l;
        if ($klippy.c.Ab(c)) e = a.getProperty(b);
        else if ($klippy.c.Mc(c)) {
            if (a.style !== undefined) e = a.style[b]
        } else e = a.getStyle(b);
        return e
    },
    setProperty: function(a, b, c, e) {
        b = b.toLowerCase();
        if ($klippy.c.Ab(e)) c === undefined || c === l ? a.removeProperty(b) : a.setProperty(b, c);
        else if (c === undefined || c === l) {
            if (a.style !== undefined) a.style[b] = l
        } else a.setStyle(b, c)
    },
    F: function(a, b, c, e) {
        this.wa.push(this.getProperty(a, b, e | $klippy.c.fb));
        this.setProperty(a, b, c, e)
    },
    L: function(a, b, c) {
        this.wa.length >= 1 && this.setProperty(a, b, this.wa.shift(), c)
    },
    qb: function(a, b, c, e) {
        if (a === undefined || a === l) a = $$("*");
        if ($type(a) === "array") for (var d = 0; d < a.length; d++) this.qb(a[d], b, c, e);
        else if ($type(a) == "string") this.qb($$(a), b, c, e);
        else if (!u.j.K(a)) {
            if ($klippy.c.Cb(e)) {
                var f = a.getElements("*");
                $klippy.c.Db(e) || f.reverse();
                for (d = 0; d < f.length; d++) u.j.K(f[d]) || this.F(f[d], b, c, e)
            }
            this.F(a, b, c, e)
        }
    },
    Ob: function(a, b, c) {
        if (a === undefined || a === l) a = $$("*");
        if ($type(a) === "array") for (var e = 0; e < a.length; e++) this.Ob(a[e], b, c);
        else if ($type(a) == "string") this.Ob($$(a), b, c);
        else if (!u.j.K(a)) {
            if ($klippy.c.Cb(c)) {
                var d = a.getElements("*");
                $klippy.c.Db(c) || d.reverse();
                for (e = 0; e < d.length; e++) u.j.K(d[e]) || this.L(d[e], b, c)
            }
            this.L(a, b, c)
        }
    }
});
u.va.Xb = new Class({
    Extends: u.va,
    initialize: function(a, b, c) {
        this.parent(a);
        this.name = "format";
        this.type = "normal";
        this.vc = i;
        if (b != "#Ivory" && b != "#Light" && b != "#Dark") b = "#Ivory";
        if ($chk(b) && b !== "undefined" && b !== "") this.format = b.i("#") ? u.pa[b] : b;
        else if ($chk($main.options) && $chk($main.options.format) && $main.options.format !== "undefined" && $main.options.format !== "") this.format = u.pa[$main.options.format];
        if (!$chk(this.format)) this.format = u.pa["#Ivory"];
        this.styles = c;
        if (!$chk(c)) this.styles = $main.getStyles("Format");
        this.qa = []
    },
    ub: function() {
        for (var a = $(document.body).getElements("*"), b = 0; b < a.length; b++) {
            var c = a[b];
            if (!u.j.K(c)) {
                var e = c.getComputedStyle("display"),
                    d = c.getComputedStyle("float");
                this.F(c, "style", "", $klippy.c.N);
                c.setStyle("display", e);
                c.setStyle("float", d)
            }
        }
        this.tb();
        this.styles.each(function(f) {
            f = f.indexOf("://") > 0 && f.indexOf("://") <= 20 ? new Element("link", {
                rel: "stylesheet",
                media: "screen",
                type: "text/css",
                charset: "utf-8",
                href: f
            }) : new Element("style", {
                type: "text/css",
                text: f
            });
            document.head.grab(f);
            this.qa.push(f)
        }, this);
        this.F($("klip_body"), "class", this.format, $klippy.c.N);
        a = $("klip_text_box").getComputedStyle("padding-top").toInt();
        b = $("klip_text_box").getComputedStyle("padding-bottom").toInt();
        c = $("klip_text_box").getComputedStyle("margin-top").toInt() || 0;
        e = $("klip_text_box").getComputedStyle("margin-bottom").toInt() || 0;
        $main.options.app_id != "ShareToWeibo" && $("klip_text_box").setStyle("min-height", document.documentElement.clientHeight - a - b - c - e)
    },
    ua: function() {
        for (var a = $(document.body).getElements("*"), b = 0; b < a.length; b++) {
            var c = a[b];
            u.j.K(c) || this.L(c, "style", $klippy.c.N)
        }
        this.qa.each(function(e) {
            e.destroy()
        });
        this.qa = [];
        this.Pb();
        this.L($("klip_body"), "class", $klippy.c.N)
    },
    tb: function() {
        $each(document.styleSheets, function(a) {
            this.wa.push(a.media);
            a.media = "null"
        }, this)
    },
    Pb: function() {
        $each(document.styleSheets, function(a) {
            a.media = this.wa.shift()
        }, this)
    }
});
u.va.Yb = new Class({
    Extends: u.va.Xb,
    initialize: function(a, b, c) {
        this.parent(a, b, c);
        this.name = "grab";
        this.type = "normal";
        this.vc = i;
        this.ja = l
    },
    ub: function() {
        var a = this,
            b = 64,
            c = 9999;
        if ($main && $main.options && $main.options.app_id == "ShareToWeibo") {
            b = 0;
            c = 1
        }
        if (w(document.URL) && $("viewer-entries-container")) {
            this.sa = $("viewer-entries-container").getScroll();
            $(document.html).setStyle("overflow", "visible")
        } else this.sa = $(document.body).getScroll();
        var e = new v,
            d = e.xb();
        if (this.ja === l) {
            var f = e.vb();
            if (!f) {
                K($main.i18n.message_9, 5E3);
                return
            }
            if (f.get("text").length < b && f.getElements("img").length < c) {
                K($main.i18n.message_10, 5E3);
                return
            }
            b = new Element("div", {
                id: "klip_text_body",
                contenteditable: "true"
            });
            b.appendChild(f);
            f = new Element("div", {
                id: "klip_text_box"
            });
            f.appendChild(b);
            this.ja = new Element("div", {
                id: "klip_container"
            });
            this.ja.appendChild(f)
        }
        b = $(document.body);
        c = b.getChildren();
        for (f = 0; f < c.length; f++) u.j.K(c[f]) || this.F(c[f], "display", "none");
        this.tb();
        this.styles.each(function(g) {
            g = g.indexOf("://") > 0 && g.indexOf("://") <= 20 ? new Element("link", {
                rel: "stylesheet",
                media: "screen",
                type: "text/css",
                charset: "utf-8",
                href: g
            }) : new Element("style", {
                type: "text/css",
                text: g
            });
            document.head.grab(g);
            this.qa.push(g)
        }, this);
        this.F(b, "id", "klip_body", $klippy.c.N);
        this.F(b, "width", "100%");
        this.F(b, "margin", "0px");
        this.F(b, "left", "0px");
        this.F($(document.body), "class", this.format, $klippy.c.N);
        document.body.appendChild(this.ja);
        ["h1", "h2", "h3", "h4"].some(function(g) {
            g = $("klip_container").getElements(g);
            if (g.length > 0 && g[0].get("text") == d) {
                g[0].destroy();
                return i
            }
        });
        if ($main.i18n.message_28 && !$main.options["klip-tips-close"]) {
            $("klip_text_box").grab(new Element("h6", {
                id: "klip_tips",
                html: $main.i18n.message_28
            }), "top");
            $("klip_tips_close").addEvent("click", function() {
                $("klip_tips").addClass("off");
                $main.options["klip-tips-close"] = i;
                chrome.extension.sendMessage({
                    action: "klip-tips-close",
                    value: i
                }, n())
            })
        }
        $("klip_text_box").grab(new Element("h3", {
            id: "klip_title",
            html: d,
            contenteditable: "true"
        }), "top");
        $("klip_text_box").grab(new Element("h3", {
            id: "klip_text_ellipsis",
            html: "......"
        }), "bottom");
        if ($main.i18n.message_30) {
            $("klip_text_box").grab(new Element("hr"), "bottom");
            $("klip_text_box").grab(new Element("h6", {
                id: "klip_text_tools",
                html: $main.i18n.message_30
            }), "bottom");
            $main.options["klip-export"] = "fulltext";
            if ($main.options["klip-export"] == "summary") {
                $("klip_text_body").addClass("summary");
                $("klip_export_summary").addClass("current");
                $("klip_export_fulltext").removeClass("current");
                $("klip_export_pictures").removeClass("current");
                $("klip_export_pictures+").removeClass("current")
            } else if ($main.options["klip-export"] == "pictures") {
                $("klip_text_body").removeClass("summary");
                $("klip_export_summary").removeClass("current");
                $("klip_export_fulltext").removeClass("current");
                $("klip_export_pictures").addClass("current");
                $("klip_export_pictures+").removeClass("current");
                if ((f = a.ga("simple")) && f.getElements("img").length > 0) {
                    $("klip_text_body").grab(f, "after");
                    $("klip_text_body").setStyle("display", "none")
                }
            } else if ($main.options["klip-export"] == "pictures+") {
                $("klip_text_body").removeClass("summary");
                $("klip_export_summary").removeClass("current");
                $("klip_export_fulltext").removeClass("current");
                $("klip_export_pictures").removeClass("current");
                $("klip_export_pictures+").addClass("current");
                if ((f = a.ga("tile")) && f.getElements("img").length > 0) {
                    $("klip_text_body").grab(f, "after");
                    $("klip_text_body").setStyle("display", "none")
                }
            } else {
                $("klip_text_body").removeClass("summary");
                $("klip_export_summary").removeClass("current");
                $("klip_export_fulltext").addClass("current");
                $("klip_export_pictures").removeClass("current");
                $("klip_export_pictures+").removeClass("current")
            }
            if ($main.options.format == "#Light") {
                $("klip_format_light").addClass("current");
                $("klip_format_dark").removeClass("current");
                $("klip_format_ivory").removeClass("current")
            } else if ($main.options.format == "#Dark") {
                $("klip_format_light").removeClass("current");
                $("klip_format_dark").addClass("current");
                $("klip_format_ivory").removeClass("current")
            } else {
                $("klip_format_light").removeClass("current");
                $("klip_format_dark").removeClass("current");
                $("klip_format_ivory").addClass("current")
            }
            $("klip_export_summary").addEvent("click", function() {
                $("klip_text_body").addClass("summary");
                $("klip_export_summary").addClass("current");
                $("klip_export_fulltext").removeClass("current");
                $("klip_export_pictures").removeClass("current");
                $("klip_export_pictures+").removeClass("current");
                if ($("klip_picture_body")) {
                    $("klip_text_body").setStyle("display", "block");
                    $("klip_picture_body").destroy()
                }
                window.scrollTo(window.scrollX, 1E5);
                $main.options["klip-export"] = "summary";
                $("klip_text_body").scrollHeight > $("klip_text_body").offsetHeight ? $("klip_text_ellipsis").setStyle("display", "block") : $("klip_text_ellipsis").setStyle("display", "none");
                chrome.extension.sendMessage({
                    action: "klip-export-changed",
                    value: "summary"
                }, n())
            });
            $("klip_export_fulltext").addEvent("click", function() {
                $("klip_text_body").removeClass("summary");
                $("klip_export_summary").removeClass("current");
                $("klip_export_fulltext").addClass("current");
                $("klip_export_pictures").removeClass("current");
                $("klip_export_pictures+").removeClass("current");
                if ($("klip_picture_body")) {
                    $("klip_text_body").setStyle("display", "block");
                    $("klip_picture_body").destroy()
                }
                window.scrollTo(window.scrollX, 1E5);
                $main.options["klip-export"] = "fulltext";
                $("klip_text_ellipsis").setStyle("display", "none");
                chrome.extension.sendMessage({
                    action: "klip-export-changed",
                    value: "fulltext"
                }, n())
            });
            $("klip_export_pictures").addEvent("click", function() {
                var g = a.ga("simple");
                if (!g || g.getElements("img").length == 0) K($main.i18n.message_35, 2E3);
                else {
                    $("klip_text_body").grab(g, "after");
                    $("klip_text_body").setStyle("display", "none");
                    $("klip_text_body").removeClass("summary");
                    $("klip_export_summary").removeClass("current");
                    $("klip_export_fulltext").removeClass("current");
                    $("klip_export_pictures").addClass("current");
                    $("klip_export_pictures+").removeClass("current");
                    window.scrollTo(window.scrollX, 1E5);
                    $main.options["klip-export"] = "pictures";
                    $("klip_text_ellipsis").setStyle("display", "none");
                    chrome.extension.sendMessage({
                        action: "klip-export-changed",
                        value: "pictures"
                    }, n())
                }
            });
            $("klip_export_pictures+").addEvent("click", function() {
                var g = a.ga("tile");
                if (!g || g.getElements("img").length == 0) K($main.i18n.message_35, 2E3);
                else {
                    $("klip_text_body").grab(g, "after");
                    $("klip_text_body").setStyle("display", "none");
                    $("klip_text_body").removeClass("summary");
                    $("klip_export_summary").removeClass("current");
                    $("klip_export_fulltext").removeClass("current");
                    $("klip_export_pictures").removeClass("current");
                    $("klip_export_pictures+").addClass("current");
                    window.scrollTo(window.scrollX, 1E5);
                    $main.options["klip-export"] = "pictures+";
                    $("klip_text_ellipsis").setStyle("display", "none");
                    chrome.extension.sendMessage({
                        action: "klip-export-changed",
                        value: "pictures+"
                    }, n())
                }
            });
            $("klip_text_box").addEvent("click:relay(div#klip_pictures_change_layout)", function() {
                var g = a.ga("tile");
                if (!g || g.getElements("img").length == 0) K($main.i18n.message_35, 2E3);
                else {
                    $("klip_text_body").grab(g, "after");
                    $("klip_text_body").setStyle("display", "none");
                    $("klip_text_body").removeClass("summary");
                    $("klip_export_summary").removeClass("current");
                    $("klip_export_fulltext").removeClass("current");
                    $("klip_export_pictures").removeClass("current");
                    $("klip_export_pictures+").addClass("current");
                    $main.options["klip-export"] = "pictures+";
                    $("klip_text_ellipsis").setStyle("display", "none");
                    chrome.extension.sendMessage({
                        action: "klip-export-changed",
                        value: "pictures+"
                    }, n())
                }
            });
            $("klip_format_light").addEvent("click", function() {
                $(document.body).set("class", u.pa["#Light"]);
                $("klip_format_light").addClass("current");
                $("klip_format_dark").removeClass("current");
                $("klip_format_ivory").removeClass("current");
                window.scrollTo(window.scrollX, 1E5);
                $main.options.format = "#Light";
                chrome.extension.sendMessage({
                    action: "klip-format-changed",
                    value: "#Light"
                }, n())
            });
            $("klip_format_dark").addEvent("click", function() {
                $(document.body).set("class", u.pa["#Dark"]);
                $("klip_format_light").removeClass("current");
                $("klip_format_dark").addClass("current");
                $("klip_format_ivory").removeClass("current");
                window.scrollTo(window.scrollX, 1E5);
                $main.options.format = "#Dark";
                chrome.extension.sendMessage({
                    action: "klip-format-changed",
                    value: "#Dark"
                }, n())
            });
            $("klip_format_ivory").addEvent("click", function() {
                $(document.body).set("class", u.pa["#Ivory"]);
                $("klip_format_light").removeClass("current");
                $("klip_format_dark").removeClass("current");
                $("klip_format_ivory").addClass("current");
                window.scrollTo(window.scrollX, 1E5);
                $main.options.format = "#Ivory";
                chrome.extension.sendMessage({
                    action: "klip-format-changed",
                    value: "#Ivory"
                }, n())
            });
            $("klip_text_box").addEvent("click:relay(img.klip_picture_delete)", function(g, h) {
                var k = h.getParent().get("img-url");
                if ($("klip_picture_body").get("img-urls")) {
                    var o = JSON.parse($("klip_picture_body").get("img-urls"));
                    if (o.length != 0) {
                        for (var p = 0; p < o.length; p++) if (o[p] == k) {
                            o.splice(p, 1);
                            p--
                        }
                        $("klip_picture_body").set("img-urls", JSON.stringify(o));
                        if ($("klip_export_pictures").hasClass("current")) {
                            k = a.ga("simple");
                            if (!k || k.getElements("img").length == 0) K($main.i18n.message_35, 2E3);
                            else {
                                $("klip_text_body").grab(k, "after");
                                $("klip_text_body").setStyle("display", "none")
                            }
                        } else if ($("klip_export_pictures+").hasClass("current")) {
                            k = a.ga("tile");
                            if (!k || k.getElements("img").length == 0) K($main.i18n.message_35, 2E3);
                            else {
                                $("klip_text_body").grab(k, "after");
                                $("klip_text_body").setStyle("display", "none")
                            }
                        }
                    }
                }
            });
            $("klip_text_box").grab(new Element("h5", {
                id: "klip_copyright",
                html: $main.i18n.message_29 || ""
            }), "bottom");
            $("klip_text_box").grab(new Element("h6", {
                id: "klip_source",
                html: '<a href="' + e.getURL() + '">' + decodeURIComponent(e.getURL()) + "</a>"
            }), "bottom");
            $("klip_text_box").grab(new Element("br"), "bottom")
        }
        e = $("klip_text_box").getElements("img");
        for (f = 0; f < e.length; f++) {
            b = e[f];
            if (b.get("height")) {
                b.set("klip-height", b.get("height"));
                b.erase("height")
            }
            if (b.getStyle("height")) {
                b.setStyle("klip-height", b.getStyle("height"));
                b.setStyle("height", "auto")
            }
        }(function() {
            $("klip_container").zc();
            $("klip_container").Ac()
        }).delay(500);
        e = $("klip_text_box").getComputedStyle("padding-top").toInt();
        f = $("klip_text_box").getComputedStyle("padding-bottom").toInt();
        b = $("klip_text_box").getComputedStyle("margin-top").toInt() || 0;
        c = $("klip_text_box").getComputedStyle("margin-bottom").toInt() || 0;
        $main.options.app_id != "ShareToWeibo" && $("klip_text_box").setStyle("min-height", document.documentElement.clientHeight - e - f - b - c);
        e = $("klip_text_box").getComputedStyle("padding-top");
        $("klip_text_box").tween("padding-top", ["400em", e]);
        if ($("klip_text_body")) $("klip_text_body").scrollHeight > $("klip_text_body").offsetHeight ? $("klip_text_ellipsis").setStyle("display", "block") : $("klip_text_ellipsis").setStyle("display", "none");
        window.scroll(0, 0);
        $klippy.c.show()
    },
    ua: function() {
        if (this.ja) {
            $klippy.c.hide();
            $("klip_text_box").tween("opacity", 0);
            var a = this;
            (function() {
                this.ja.destroy();
                this.ja = l;
                for (var b = $(document.body), c = b.getChildren(), e = 0; e < c.length; e++) u.j.K(c[e]) || this.L(c[e], "display");
                this.qa.each(function(d) {
                    d.destroy()
                });
                this.qa = [];
                this.Pb();
                this.L(b, "id", $klippy.c.N);
                this.L(b, "width");
                this.L(b, "margin");
                this.L(b, "left");
                this.L($(document.body), "class", $klippy.c.N);
                if (this.sa) if (w(document.URL) && $("viewer-entries-container")) {
                    $("viewer-entries-container").scrollTo(this.sa.x, this.sa.y);
                    $(document.html).setStyle("overflow", "hidden")
                } else $(document.body).scrollTo(a.sa.x, a.sa.y)
            }).delay(500, this)
        }
    },
    ga: function(a) {
        var b = [];
        if ($("klip_picture_body") && $("klip_picture_body").get("img-urls")) {
            b = JSON.parse($("klip_picture_body").get("img-urls"));
            $("klip_picture_body").destroy()
        } else for (var c = $("klip_text_body").getElements("img"), e = 0; e < c.length; e++) {
            var d = c[e];
            if (d) {
                var f = d.getScrollSize();
                f.x < 300 && f.x * f.y < 6E4 || b.push(d.get("src"))
            }
        }
        if (b.length == 0) {
            c = $$("img");
            for (e = 0; e < c.length; e++) if (d = c[e]) {
                f = d.getScrollSize();
                f.x < 300 && f.x * f.y < 6E4 || b.push(d.get("src"))
            }
        }
        if (b.length == 0) return l;
        d = new Element("div", {
            id: "klip_picture_body",
            style: "margin: 0;"
        });
        d.set("img-urls", JSON.stringify(b));
        if (a == "simple" || b.length <= 2) for (e = 0; e < b.length; e++) {
            c = new Element("div", {
                "class": "klip_picture",
                style: "position:relative;",
                "img-url": b[e]
            });
            c.appendChild(new Element("img", {
                src: b[e],
                "class": "klip_largeobject",
                style: "margin:3px 0;max-width:100%;width:100%;"
            }));
            c.appendChild(new Element("img", {
                src: $main.getURL("/images/gtk-close.png"),
                "class": "klip_picture_delete"
            }));
            d.appendChild(c)
        } else {
            a = 0;
            f = new u.$c(b.length);
            var g = f.qd(b.length) + 1;
            for (e = 0; e < 100; e++) {
                var h = f.build(e);
                if (!h) break;
                var k = 440 + parseInt(Math.random() * 220 * (g - e - 1) / g),
                    o = new Element("div", {
                        "class": "klip_picture_page",
                        style: "height:" + k + "px;"
                    });
                d.appendChild(o);
                c = [];
                for (var p = 0; p < h.count; p++) c.push(b[a + p]);
                (new u.ad(h.layoutDefine)).fill(o, c, {
                    x: 440,
                    y: k
                });
                a += h.count
            }
            d.appendChild(new Element("div", {
                id: "klip_pictures_change_layout",
                "class": "large green klip_button",
                html: "\u6362\u4e2a\u62fc\u56fe"
            }))
        }
        return d
    }
});
u.Zb = new Class({
    initialize: function() {
        this.z = [];
        this.C = [];
        this.ed = {}
    },
    nb: function(a) {
        a.ub();
        switch (a.type) {
        case "normal":
            this.z.push(a);
            break;
        case "no_undo":
            this.clear()
        }
    },
    sc: function(a) {
        a.ua();
        switch (a.type) {
        case "normal":
            this.C.push(a);
            break;
        case "no_undo":
            this.clear()
        }
    },
    Wa: function() {
        return this.z.length != 0
    },
    uc: function() {
        return this.C.length != 0
    },
    jd: function() {
        return this.z.some(function(a) {
            return a.name.i("grab")
        })
    },
    clear: function() {
        this.z = [];
        this.C = []
    },
    execute: function(a) {
        this.nb(a);
        this.C = []
    },
    ua: function() {
        this.z.length != 0 && this.sc(this.z.pop())
    },
    Sc: function() {
        this.C.length != 0 && this.nb(this.C.pop())
    },
    vd: function() {
        if (this.z === l || this.z.length === 0) return l;
        return this.z[this.z.length - 1]
    },
    sd: function() {
        if (this.C === l || this.C.length === 0) return l;
        return this.C[this.C.length - 1]
    }
});
if (typeof u === "undefined") u = {};
if (typeof u.ma === "undefined") u.ma = {};
u.ma.Ca = new Class({
    elements: [],
    Implements: [Options, Events],
    Qa: l,
    options: {
        parent: "",
        height: 50,
        width: 300,
        la: 5E3,
        ia: "top",
        ab: "right",
        ba: 10,
        za: 10,
        Gb: 5,
        Qc: 750,
        wc: 750,
        Tc: 500,
        Oc: 1
    },
    initialize: function(a) {
        this.options.parent = $(document.body);
        if (a) {
            if (a.parent) a.parent = $(a.parent);
            this.setOptions(a)
        }
        var b = this;
        this.options.parent.addEvent("scroll", function() {
            $clear(this.Qa);
            this.Qa = function() {
                b.Ua(b.ib)
            }.delay(200)
        }, this);
        window.addEvent("scroll", function() {
            $clear(b.Qa);
            b.Qa = function() {
                b.Ua(b.ib)
            }.delay(200)
        });
        this.elements.push(this.sb(this.options))
    },
    sb: function() {
        var a = new Element("div", {
            "class": "klip_notify KlippyUI"
        });
        a.setStyle(this.options.ia, this.options.ba);
        a.setStyle(this.options.ab, this.options.za);
        a.adopt(new Element("span", {
            "class": "klip_notify_title"
        }));
        a.adopt(new Element("div", {
            "class": "klip_notify_message"
        }));
        a.setStyle("width", this.options.width);
        a.setStyle("height", this.options.height);
        a.store("working", m);
        a.set("tween", {
            link: "chain",
            duration: this.options.Qc
        });
        a.set("opacity", 0);
        var b = new Fx.Tween(a, {
            property: this.options.ia,
            link: "chain",
            duration: this.options.wc
        });
        a.store("baseTween", b);
        b = new Fx.Tween(a, {
            property: this.options.ia,
            link: "chain",
            duration: this.options.Tc
        });
        a.store("scrollTween", b);
        a.addEvent("click", function(c) {
            c && c.stop();
            this.close(a)
        }.bind(this));
        a.getElements("*").addClass("KlippyUI");
        return a
    },
    show: function(a) {
        var b = this,
            c = this.kb(this.options.ba),
            e = this.elements.filter(function(d) {
                var f = d.retrieve("working");
                if (f) c = d.getStyle(this.options.ia).toInt() + d.getSize().y + this.options.Gb;
                return !f
            }, this).getLast();
        if (!e) {
            e = this.sb();
            this.elements.push(e)
        }
        e.setStyle(this.options.ia, c);
        e.store("working", i);
        a.width && e.setStyle("width", a.width);
        a.title && e.getElement("span.klip_notify_title").set("html", a.title);
        e.getElement("div.klip_notify_message").set("html", a.message);
        a.xc && e.addClass(a.xc);
        e.getElements("a").addEvent("click", function(d) {
            d.stopPropagation()
        });
        this.options.parent.adopt(e);
        this.dc(e);
        e.get("tween").start("opacity", this.options.Oc).chain(function() {
            if (a.Xc ? !a.Xc : i)(function() {
                b.close(e)
            }).delay(a.la ? a.la : b.options.la, b);
            b.fireEvent("show", e)
        })
    },
    close: function(a) {
        var b = this,
            c = b.elements;
        a = a || this.elements.getLast();
        a.get("tween").start("opacity", 0).chain(function() {
            if (c.length > 1) {
                c.elements = c.erase(a);
                a.destroy()
            }
            b.nc(a);
            b.Ua(b.hb);
            b.fireEvent("close", a)
        })
    },
    Ua: function(a) {
        for (var b = this.kb(this.options.ba), c = 0; c < this.elements.length; c++) {
            var e = this.elements[c];
            if (e.retrieve("working")) {
                this.hb == a ? e.retrieve("baseTween").start(b) : e.retrieve("scrollTween").start(b);
                b += e.getSize().y + this.options.Gb
            }
        }
    },
    dc: function(a) {
        var b = a.getStyle("height").toInt(),
            c = a.getElement("span.klip_notify_title").getSize().y,
            e = a.getElement("div.klip_notify_message").getSize().y;
        e > b - c && a.setStyle("height", b + (e - (b - c)))
    },
    nc: function(a) {
        a.store("working", m);
        a.setStyle(this.options.ia, this.options.ba);
        a.setStyle("height", this.options.height);
        a.setStyle("width", this.options.width)
    },
    kb: function(a) {
        if (this.options.ia == "top") a += this.options.parent.getScroll().y;
        else a -= this.options.parent.getScroll().y;
        return a
    },
    hb: 1,
    ib: 2
});

function L(a, b, c) {
    c = c || {
        width: 250,
        height: 60
    };
    var e = "";
    if ($main && $main.options && $main.options.app_title) e = $main.options.app_title;
    var d = l;
    d = $main && $main.options && $main.options["buttons-position"] == "left" ? new u.ma.Ca({
        width: c.width,
        height: c.height,
        za: 200,
        ba: 50,
        ab: "left",
        la: b
    }) : new u.ma.Ca({
        width: c.width,
        height: c.height,
        za: 200,
        ba: 50,
        la: b
    });
    if ($("klipme_ui_css")) d.show({
        title: e,
        message: a
    });
    else {
        b = $main.getStyles("Notify");
        b.indexOf("://") > 0 && b.indexOf("://") <= 20 ? document.head.grab(new Element("link", {
            rel: "stylesheet",
            media: "screen",
            type: "text/css",
            charset: "utf-8",
            id: "klipme_ui_css",
            href: b
        })) : document.head.grab(new Element("style", {
            type: "text/css",
            id: "klipme_ui_css",
            text: b
        }));
        (function() {
            d.show({
                title: e,
                message: a
            })
        }).delay(100)
    }
    d.addEvent("close", function(f) {
        f.destroy();
        $("klipme_ui_css") && $("klipme_ui_css").destroy()
    });
    return d
}

function K(a, b, c) {
    c = c || {
        width: 250,
        height: 60
    };
    var e = "";
    if ($main && $main.options && $main.options.app_title) e = $main.options.app_title;
    var d = l;
    d = $main && $main.options && $main.options["buttons-position"] == "left" ? new u.ma.Ca({
        width: c.width,
        height: c.height,
        za: 200,
        ba: 50,
        ab: "left",
        la: b
    }) : new u.ma.Ca({
        width: c.width,
        height: c.height,
        za: 200,
        ba: 50,
        la: b
    });
    d.elements && d.elements.each(function(f) {
        f.addClass("klip_alert")
    });
    if ($("klipme_ui_css")) d.show({
        title: e,
        message: a
    });
    else {
        b = $main.getStyles("Notify");
        b.indexOf("://") > 0 && b.indexOf("://") <= 20 ? document.head.grab(new Element("link", {
            rel: "stylesheet",
            media: "screen",
            type: "text/css",
            charset: "utf-8",
            id: "klipme_ui_css",
            href: b
        })) : document.head.grab(new Element("style", {
            type: "text/css",
            id: "klipme_ui_css",
            text: b
        }));
        (function() {
            d.show({
                title: e,
                message: a
            })
        }).delay(100)
    }
    d.addEvent("close", function(f) {
        f.destroy();
        $("klipme_ui_css") && $("klipme_ui_css").destroy()
    });
    return d
};
var M = new Class({
    initialize: function() {
        var a = this;
        chrome.extension.sendMessage({
            action: "get-options"
        }, function(b) {
            a.options = b
        });
        chrome.extension.sendMessage({
            action: "get-i18n"
        }, function(b) {
            a.i18n = b
        });
        chrome.extension.sendMessage({
            action: "finder-query",
            host: document.location.host,
            mode: ""
        }, function(b) {
            a.G = b
        });
        chrome.extension.sendMessage({
            action: "highlights-query",
            host: document.location.host
        }, function(b) {
            a.Ja = b
        });
        window.$klippy = new u;
        this.t = l
    },
    P: function() {
        $klippy.P();
        $(document).addEvent("keyup", this.keyup);
        var a = this;
        chrome.extension.onMessage.addListener(function(b, c, e) {
            if (b.action === "execute") {
                if (c = $(document.body).get("id") === "klip_body") {
                    $klippy.execute("clear", "");
                    return
                }
                if (a.Ic()) {
                    c = a.Dc().Ia();
                    if (a.Ja && a.Ja.length > 0) {
                        var d = 0;
                        $$(c).each(function(g) {
                            if (g.k()) if (d === 0) d++;
                            else g.getPosition().y < 800 && d++
                        });
                        if (d == 1) confirm($main.i18n.message_27) ? chrome.extension.sendMessage({
                            action: "finder-add",
                            url: document.URL,
                            selector: c
                        }, function(g) {
                            $main.G = g
                        }) : chrome.extension.sendMessage({
                            action: "highlights-add",
                            url: document.URL,
                            selector: c
                        }, function(g) {
                            $main.Ja = g
                        })
                    } else chrome.extension.sendMessage({
                        action: "highlights-add",
                        url: document.URL,
                        selector: c
                    }, function(g) {
                        $main.Ja = g
                    })
                }
                if (b["default-action"] == "save") a.load("save", "1-click");
                else b["default-action"] == "send" ? a.load("send", "1-click") : a.load("format", b.format)
            } else if (b.action === "format") a.load("format", b.format);
            else if (b.action === "save") a.load("save", "1-click");
            else if (b.action === "send") a.load("send", "1-click");
            else if (b.action === "share-sina-weibo" || b.action === "share-tencent-weibo") a.execute(b.action);
            else if (b.action === "query-status") {
                c = $(document.body).get("id") === "klip_body";
                e({
                    stamp: a.options.app_stamp,
                    format: c,
                    status: $klippy.status
                })
            } else if (b.action === "scroll-to-page") {
                (c = $(document.body).get("id") === "klip_body") || e();
                var f = $main.Uc(b["page-number"] || 0);
                setTimeout(function() {
                    e(f)
                }, 50)
            } else if (b.action === "begin-export") $(document.body).addClass("exporting");
            else b.action === "end-export" && $(document.body).removeClass("exporting");
            return i
        })
    },
    fa: function() {
        $(document).removeEvent("keyup", this.keyup);
        $klippy.fa()
    },
    load: function(a, b) {
        Browser.ie ? document.execCommand("Stop") : window.stop();
        $klippy.Ka || $klippy.P();
        switch (a) {
        case "format":
            $klippy.enabled = m;
            $klippy.execute("edit-format", b);
            if ($("klip_text_box")) {
                var c = $("klip_text_box").getPosition();
                $(window).scrollTo(0, c.y)
            }
            break;
        case "select":
            $klippy.enabled = i;
            $klippy.execute("select-auto", b);
            break;
        case "save":
            $klippy.enabled = m;
            this.execute("save", b);
            break;
        case "send":
            $klippy.enabled = m;
            this.execute("send", b)
        }
    },
    unload: function() {
        $klippy.Ka && $klippy.destroy()
    },
    getURL: function(a) {
        return chrome.extension.getURL(a)
    },
    getStyles: function(a) {
        return a == "Notify" ? this.getURL("css/ui.css") : a == "Format" ? [this.getURL("css/base.css"), this.getURL("css/klip.css")] : a == "Select" ? this.getURL("css/select.css") : l
    },
    Gc: function(a, b) {
        var c = "#" + a + "# " + b;
        if (c.length > 1024) c = c.substring(0, 1024);
        c = c.replace(/\r/g, " ").replace(/\n/g, " ").replace(/\t/g, " ").replace(/\s{2,}/g, " ");
        c = c.trim();
        if (c.replace(/[^\x00-\x7f]/g, "**").length > 259) for (var e = 128; e < 259; e++) if (c.substring(0, e).replace(/[^\x00-\x7f]/g, "**").length > 256) {
            c = c.substring(0, e - 1) + "...";
            break
        }
        return c
    },
    Hc: function(a, b) {
        var c = "#" + a + "# " + b;
        if (c.length > 1024) c = c.substring(0, 1024);
        c = c.replace(/\r/g, " ").replace(/\n/g, " ").replace(/\t/g, " ").replace(/\s{2,}/g, " ");
        c = c.trim();
        if (c.replace(/[^\x00-\x7f]/g, "**").length > 256) for (var e = 128; e < 256; e++) if (c.substring(0, e).replace(/[^\x00-\x7f]/g, "**").length > 253) {
            c = c.substring(0, e - 1) + "...";
            break
        }
        return c
    },
    execute: function(a, b) {
        var self = this;
        if (a == "save") {
            if ($("klip_edit_save") && $("klip_edit_save").get("command") && $("klip_edit_save").get("command") == "klips") {
                this.execute("klips", b);
                return i
            }
            var c = $klippy.wb(b, function(d) {
                switch (d) {
                case -1:
                    K($main.i18n.message_9, 5E3);
                    break;
                case -2:
                    K($main.i18n.message_10, 5E3)
                }
            });
            c && chrome.extension.sendMessage({
                action: "save",
                item: c
            }, function(d) {
                if (d.status == 200) {
                    if ($("klip_edit_send")) {
                        $("klip_edit_send").set("html", $main.i18n.button_ok);
                        $("klip_edit_send").set("command", "ok")
                    }
                    if ($("klip_edit_save")) {
                        $("klip_edit_save").set("html", $main.i18n.button_home);
                        $("klip_edit_save").set("command", "klips")
                    }
                    L(d.message, 3E3);
                    if (d.usage >= 60) {
                        var f = $main.i18n.message_15;
                        f = f.replace("#%1#", d.usage);
                        f = f.replace("#%2#", 100);
                        alert(f)
                    }
                } else if (d.status == 401 && d.url) {
                    if ($("klip_edit_save")) {
                        $("klip_edit_save").set("html", $main.i18n.button_save);
                        $("klip_edit_save").set("command", "save")
                    }
                    window.open(d.url, "", "status=0,toolbar=0,location=1,menubar=0,width=" + d.width + ",height=" + d.height + ",left=" + d.left + ",top=" + d.top)
                } else {
                    K(d.message, 5E3);
                    if (d.usage >= 100) {
                        f = $main.i18n.message_11;
                        f = f.replace("#%1#", 100);
                        alert(f)
                    }
                }
            })
        } else if (a == "send" || a == "send-mail") {
            if ($("klip_edit_send") && $("klip_edit_send").get("command") && $("klip_edit_send").get("command") == "ok") {
                $klippy.execute("clear", b);
                return i
            }(c = $klippy.wb(b, function(d) {
                switch (d) {
                case -1:
                    K($main.i18n.message_9, 5E3);
                    break;
                case -2:
                    K($main.i18n.message_10, 5E3)
                }
            })) && chrome.extension.sendMessage({
                action: a,
                item: c
            }, function(d) {
                if (d.status == 200) {
                    if ($("klip_edit_send")) {
                        $("klip_edit_send").set("html", $main.i18n.button_ok);
                        $("klip_edit_send").set("command", "ok")
                    }
                    if ($("klip_edit_save")) {
                        $("klip_edit_save").set("html", $main.i18n.button_home);
                        $("klip_edit_save").set("command", "klips")
                    }
                    L(d.message, 3E3);
                    if (d.usage >= 60) {
                        var f = $main.i18n.message_15;
                        f = f.replace("#%1#", d.usage);
                        f = f.replace("#%2#", 100);
                        alert(f)
                    }
                } else {
                    K(d.message, 5E3);
                    if (d.usage >= 100) {
                        f = $main.i18n.message_11;
                        f = f.replace("#%1#", 100);
                        alert(f)
                    }
                }
            })
        } else if (a == "share-sina-weibo") {
            if ($("klip_edit_share_sina_weibo") && $("klip_edit_share_sina_weibo").get("command") && $("klip_edit_share_sina_weibo").get("command") == "ok") {
                $klippy.execute("clear", b);
                return i
            }
            c = this.Gc($("klip_title").get("text"), $("klip_text_body").get("text"));
            var e = $("klip_source") && $("klip_source").get("text");
            if (e == decodeURI(document.URL)) e = document.URL;
            e = e || document.URL;
            e = encodeURI(encodeURI(decodeURI(e)));
            c += " " + e;
            if ($("klip_edit_share_sina_weibo")) {
                $("klip_edit_share_sina_weibo").set("html", "\u6b63\u5728\u63d0\u4ea4");
                $("klip_edit_share_sina_weibo").set("command", "")
            }
            chrome.extension.sendMessage({
                action: "share-sina-weibo",
                status: c
            }, function(d) {
                if (d.status == 200) {
                    if ($("klip_edit_share_sina_weibo")) {
                        $("klip_edit_share_sina_weibo").set("html", $main.i18n.button_ok);
                        $("klip_edit_share_sina_weibo").set("command", "ok")
                    }
                    L(d.message, 3E3)
                } else if (d.status == 401 && d.url) {
                    if ($("klip_edit_share_sina_weibo")) {
                        $("klip_edit_share_sina_weibo").set("html", $main.i18n.button_share_sina_weibo);
                        $("klip_edit_share_sina_weibo").set("command", "share-sina-weibo")
                    }
                    window.open(d.url, "", "status=0,toolbar=0,location=1,menubar=0,width=" + d.width + ",height=" + d.height + ",left=" + d.left + ",top=" + d.top)
                } else {
                    if ($("klip_edit_share_sina_weibo")) {
                        $("klip_edit_share_sina_weibo").set("html", $main.i18n.button_share_sina_weibo);
                        $("klip_edit_share_sina_weibo").set("command", "share-sina-weibo")
                    }
                    K(d.message, 5E3)
                }
            })
        } else if (a == "share-tencent-weibo") {
            if ($("klip_edit_share_tencent_weibo") && $("klip_edit_share_tencent_weibo").get("command") && $("klip_edit_share_tencent_weibo").get("command") == "ok") {
                $klippy.execute("clear", b);
                return i
            }
            c = this.Hc($("klip_title").get("text"), $("klip_text_body").get("text"));
            e = (e = $("klip_source") && $("klip_source").get("text")) || document.URL;
            e = encodeURI(decodeURI(e));
            c += " " + e;
            if ($("klip_edit_share_tencent_weibo")) {
                $("klip_edit_share_tencent_weibo").set("html", "\u6b63\u5728\u63d0\u4ea4");
                $("klip_edit_share_tencent_weibo").set("command", "")
            }
            chrome.extension.sendMessage({
                action: "share-tencent-weibo",
                status: c
            }, function(d) {
                if (d.status == 200) {
                    if ($("klip_edit_share_tencent_weibo")) {
                        $("klip_edit_share_tencent_weibo").set("html", $main.i18n.button_ok);
                        $("klip_edit_share_tencent_weibo").set("command", "ok")
                    }
                    L(d.message, 3E3)
                } else if (d.status == 401 && d.url) {
                    if ($("klip_edit_share_tencent_weibo")) {
                        $("klip_edit_share_tencent_weibo").set("html", $main.i18n.button_share_tencent_weibo);
                        $("klip_edit_share_tencent_weibo").set("command", "share-tencent-weibo")
                    }
                    window.open(d.url, "", "status=0,toolbar=0,location=1,menubar=0,width=" + d.width + ",height=" + d.height + ",left=" + d.left + ",top=" + d.top)
                } else {
                    if ($("klip_edit_share_tencent_weibo")) {
                        $("klip_edit_share_tencent_weibo").set("html", $main.i18n.button_share_tencent_weibo);
                        $("klip_edit_share_tencent_weibo").set("command", "share-tencent-weibo")
                    }
                    K(d.message, 5E3)
                }
            })
        } else if (a == "klips") chrome.extension.sendMessage({
            action: "klips"
        }, n());
        else if (a == "settings") chrome.extension.sendMessage({
            action: "setting"
        }, function() {
            // window.close()
            //隐藏发送面板            
            $klippy.execute("edit-reset");
        });
        else a == "whatsnew" && chrome.extension.sendMessage({
            action: "whatsnew"
        }, n())
    },
    keyup: function(a) {
        var b = a.Nc();
        if ($chk(b)) {
            if (a.target) if (a.target.tagName == "INPUT" || a.target.tagName == "TEXTAREA") return;
            var c = $main;
            if (b === c.options["key-preview"]) {
                $klippy.execute("clear", "");
                c.load("format", "");
                a.stop()
            } else if (b === c.options["key-save"]) {
                c.execute("save");
                a.stop()
            } else if (b === c.options["key-send"]) {
                c.execute("send");
                a.stop()
            } else if (b === c.options["key-send-mail"]) {
                if (c.options.myEmail && c.options.myEmail.address && c.options.myEmail.key) {
                    c.execute("send-mail");
                    a.stop()
                }
            } else if (b === c.options["key-klips"]) {
                c.execute("klips");
                a.stop()
            } else if (b === "esc") {
                $klippy.execute("clear", "");
                a.preventDefault()
            }
        }
    },
    Ic: function() {
        var a = l,
            b = l;
        if (document.selection && document.selection.createRange) {
            b = document.selection.createRange();
            if (b.htmlText) {
                a = new Element("div");
                a.set("html", b.htmlText)
            } else if (b.length >= 1) {
                a = new Element("div");
                a.set("html", b.item(0).outerHTML)
            }
        } else if (window.getSelection) {
            b = window.getSelection();
            if (b.rangeCount > 0) {
                b = b.getRangeAt(0);
                a = new Element("div");
                a.appendChild(b.cloneContents())
            }
        }
        return a && a.get("text").length > 16
    },
    Dc: function() {
        var a = l;
        if (window.getSelection) {
            var b = window.getSelection();
            if (b.rangeCount) {
                a = b.getRangeAt(0).commonAncestorContainer;
                if (a.nodeType != 1) a = a.parentNode
            }
        } else if (document.selection && document.selection.type != "Control") a = document.selection.createRange().parentElement();
        return a
    },
    Uc: function(a) {
        var b = $("klip_text_box").getCoordinates();
        if ($("klip_export_pictures") && $("klip_export_pictures").hasClass("current")) b = $("klip_picture_body").getCoordinates();
        if ($("klip_export_pictures+") && $("klip_export_pictures+").hasClass("current")) b = $("klip_picture_body").getCoordinates();
        var c = $(window).getHeight();
        if (c * a >= b.height) return {
            x: -1,
            y: -1,
            w: -1,
            h: -1,
            hasNext: m,
            "box-width": b.width,
            "box-height": b.height,
            "box-offset": 0
        };
        a = c * a;
        var e = 0;
        if (a + c > b.height && c < b.height) e = a + c - b.height;
        var d = b.top + a - e;
        $(window).scrollTo(0, d);
        if ($(window).scrollY != d) e = b.top + a - $(window).scrollY;
        return {
            x: b.left + ($(window).getScrollHeight() > c && !w(document.URL) ? 1 : 0),
            y: e,
            w: b.width,
            h: c - e,
            hasNext: a + c < b.height,
            "box-width": b.width,
            "box-height": b.height,
            "box-offset": a,
            "box-delta": e
        }
    },
    Vc: function() {
        if (!this.t) {
            this.t = this.options["buttons-position"] == "left" ? new Element("div", {
                id: "klip_edit_container",
                "class": "klip_edit_container",
                style: "position:fixed;left:20px;top:20px;z-index:9999;"
            }) : new Element("div", {
                id: "klip_edit_container",
                "class": "klip_edit_container",
                style: "position:fixed;right:20px;top:20px;z-index:9999;"
            });
            $(document.body).grab(this.t);
            var a = this,
                b = "",
                c = "",
                e = "";
            if (this.options["key-send"]) e = this.options["key-send"].capitalize();
            if (this.options["key-save"]) b = this.options["key-save"].capitalize();
            if (this.options["key-klips"]) c = this.options["key-klips"].capitalize();
            if (this.options.buttons.contains("send")) {
                this.Ra = new Element("div", {
                    id: "klip_edit_send",
                    "class": "medium orange klip_button",
                    style: "margin-top: 40px;",
                    title: this.options.app_title + " (" + e + ")",
                    html: this.i18n.button_send
                });
                this.t.grab(this.Ra);
                this.Ra.setStyle("background-image", "url(" + $main.getURL("/images/overlay-button.png") + ")");
                $("klip_edit_send").addEvent("click", function(d) {
                    d.target.id == "klip_edit_send" && a.execute("send")
                })
            }
            if (this.options.buttons.contains("share-sina-weibo")) {
                this.Mb = new Element("div", {
                    id: "klip_edit_share_sina_weibo",
                    "class": "medium orange klip_button",
                    style: "margin-top: 40px;",
                    title: this.options.app_title,
                    html: this.i18n.button_share_sina_weibo
                });
                this.t.grab(this.Mb);
                this.Mb.setStyle("background-image", "url(" + $main.getURL("/images/overlay-button.png") + ")");
                $("klip_edit_share_sina_weibo").addEvent("click", function(d) {
                    d.target.id == "klip_edit_share_sina_weibo" && a.execute("share-sina-weibo")
                })
            }
            if (this.options.buttons.contains("share-tencent-weibo")) {
                this.Nb = new Element("div", {
                    id: "klip_edit_share_tencent_weibo",
                    "class": "large blue klip_button",
                    style: "margin-top: 40px;",
                    title: this.options.app_title,
                    html: this.i18n.button_share_tencent_weibo
                });
                this.t.grab(this.Nb);
                this.Nb.setStyle("background-image", "url(" + $main.getURL("/images/overlay-button.png") + ")");
                $("klip_edit_share_tencent_weibo").addEvent("click", function(d) {
                    d.target.id == "klip_edit_share_tencent_weibo" && a.execute("share-tencent-weibo")
                })
            }
            if (this.options.buttons.contains("save")) {
                this.Pa = new Element("div", {
                    id: "klip_edit_save",
                    "class": "medium green klip_button pulse",
                    style: "margin-top: 40px;",
                    title: b,
                    html: this.i18n.button_save
                });
                this.t.grab(this.Pa);
                this.Pa.setStyle("background-image", "url(" + $main.getURL("/images/overlay-button.png") + ")");
                $("klip_edit_save").addEvent("click", function(d) {
                    d.target.id == "klip_edit_save" && a.execute("save")
                })
            }
            if (this.options.buttons.contains("klips")) {
                b = this.i18n.message_16;
                b = b.replace("#%1#", this.options.app_title);
                b = b.replace("#%2#", c);
                this.La = new Element("div", {
                    id: "klip_edit_klips",
                    "class": "large orange klip_button",
                    style: "margin-top: 40px;",
                    title: b,
                    html: this.i18n.button_home
                });
                this.t.grab(this.La);
                this.La.setStyle("background-image", "url(" + $main.getURL("/images/overlay-button.png") + ")");
                $("klip_edit_klips").addEvent("click", function(d) {
                    d.target.id == "klip_edit_klips" && a.execute("klips")
                })
            }
            if (this.options.buttons.contains("setting")) {
                this.bb = new Element("div", {
                    id: "klip_edit_setting",
                    "class": "medium gray klip_button",
                    style: "margin-top: 80px;",
                    html: this.i18n.button_setting
                });
                this.t.grab(this.bb);
                $("klip_edit_setting").addEvent("click", function() {
                    a.execute("settings")
                })
            }
            if (this.options.buttons.contains("whatsnew") && this.i18n.button_whatsnew) {
                this.cb = new Element("div", {
                    id: "klip_edit_whatsnew",
                    "class": "medium blue klip_button",
                    style: "margin-top: 80px;",
                    html: this.i18n.button_whatsnew
                });
                this.t.grab(this.cb);
                $("klip_edit_whatsnew").addEvent("click", function() {
                    a.execute("whatsnew")
                })
            }
        }
        this.t.setStyle("display", "");
        this.Pa && this.Pa.setStyle("display", "");
        this.Ra && this.Ra.setStyle("display", "");
        this.La && this.La.setStyle("display", "");
        this.bb && this.bb.setStyle("display", "");
        this.cb && this.cb.setStyle("display", "")
    },
    zb: function() {
        if (this.t) {
            this.t.destroy();
            this.t = l
        }
    }
});
window.$main = new M()
window.addEvent("domready", function() {
    $main.P();
    chrome.extension.sendMessage({
        action: "domready"
    }, n())
});