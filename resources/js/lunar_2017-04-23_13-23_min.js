---
sitemap: false
---

{{ site.copyright.comment.java }}
! function () {
  var a = function (b) {
    var c = new a.Builder;
    return c.pipeline.add(a.trimmer, a.stopWordFilter, a.stemmer), c.searchPipeline.add(a.stemmer), b.call(c, c), c.build()
  };
  a.version = "2.0.2", a.utils = {}, a.utils.warn = function (a) {
      return function (b) {
        a.console && console.warn && console.warn(b)
      }
    }(this), a.utils.asString = function (a) {
      return void 0 === a || null === a ? "" : a.toString()
    }, a.idf = function (a, b) {
      var c = 0;
      for (var d in a) "_index" != d && (c += Object.keys(a[d]).length);
      return (b - c + .5) / (c + .5)
    }, a.Token = function (a, b) {
      this.str = a || "", this.metadata = b || {}
    }, a.Token.prototype.toString = function () {
      return this.str
    }, a.Token.prototype.update = function (a) {
      return this.str = a(this.str, this.metadata), this
    }, a.Token.prototype.clone = function (b) {
      return b = b || function (a) {
        return a
      }, new a.Token(b(this.str, this.metadata), this.metadata)
    }, a.tokenizer = function (b) {
      if (null == b || void 0 == b) return [];
      if (Array.isArray(b)) return b.map(function (b) {
        return new a.Token(a.utils.asString(b).toLowerCase())
      });
      for (var c = b.toString().trim().toLowerCase(), d = c.length, e = [], f = 0, g = 0; f <= d; f++) {
        var h = c.charAt(f),
          i = f - g;
        (h.match(a.tokenizer.separator) || f == d) && (i > 0 && e.push(new a.Token(c.slice(g, f), {
          position: [g, i],
          index: e.length
        })), g = f + 1)
      }
      return e
    }, a.tokenizer.separator = /[\s\-]+/, a.Pipeline = function () {
      this._stack = []
    }, a.Pipeline.registeredFunctions = Object.create(null), a.Pipeline.registerFunction = function (b, c) {
      c in this.registeredFunctions && a.utils.warn("Overwriting existing registered function: " + c), b.label = c, a.Pipeline.registeredFunctions[b.label] = b
    }, a.Pipeline.warnIfFunctionNotRegistered = function (b) {
      b.label && b.label in this.registeredFunctions || a.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", b)
    }, a.Pipeline.load = function (b) {
      var c = new a.Pipeline;
      return b.forEach(function (b) {
        var d = a.Pipeline.registeredFunctions[b];
        if (!d) throw new Error("Cannot load unregistered function: " + b);
        c.add(d)
      }), c
    }, a.Pipeline.prototype.add = function () {
      Array.prototype.slice.call(arguments).forEach(function (b) {
        a.Pipeline.warnIfFunctionNotRegistered(b), this._stack.push(b)
      }, this)
    }, a.Pipeline.prototype.after = function (b, c) {
      a.Pipeline.warnIfFunctionNotRegistered(c);
      var d = this._stack.indexOf(b);
      if (-1 == d) throw new Error("Cannot find existingFn");
      d += 1, this._stack.splice(d, 0, c)
    }, a.Pipeline.prototype.before = function (b, c) {
      a.Pipeline.warnIfFunctionNotRegistered(c);
      var d = this._stack.indexOf(b);
      if (-1 == d) throw new Error("Cannot find existingFn");
      this._stack.splice(d, 0, c)
    }, a.Pipeline.prototype.remove = function (a) {
      var b = this._stack.indexOf(a); - 1 != b && this._stack.splice(b, 1)
    }, a.Pipeline.prototype.run = function (a) {
      for (var b = this._stack.length, c = 0; c < b; c++) {
        var d = this._stack[c];
        a = a.reduce(function (b, c, e) {
          var f = d(c, e, a);
          return void 0 === f || "" === f ? b : b.concat(f)
        }, [])
      }
      return a
    }, a.Pipeline.prototype.runString = function (b) {
      var c = new a.Token(b);
      return this.run([c]).map(function (a) {
        return a.toString()
      })
    }, a.Pipeline.prototype.reset = function () {
      this._stack = []
    }, a.Pipeline.prototype.toJSON = function () {
      return this._stack.map(function (b) {
        return a.Pipeline.warnIfFunctionNotRegistered(b), b.label
      })
    }, a.Vector = function (a) {
      this._magnitude = 0, this.elements = a || []
    }, a.Vector.prototype.insert = function (a, b) {
      if (this._magnitude = 0, 0 == this.elements.length) return void this.elements.push(a, b);
      for (var c = 0, d = this.elements.length, e = d - c, f = 2 * Math.floor(e / 2 / 2), g = this.elements[f]; e > 2;) {
        if (g == a) throw "duplicate index";
        a > g && (c = f), a < g && (d = f), e = d - c, f = c + 2 * Math.floor(e / 2 / 2), g = this.elements[f]
      }
      g > a && this.elements.splice(f, 0, a, b), g < a && this.elements.splice(f + 2, 0, a, b)
    }, a.Vector.prototype.magnitude = function () {
      if (this._magnitude) return this._magnitude;
      for (var a = 0, b = this.elements.length, c = 1; c < b; c += 2) {
        var d = this.elements[c];
        a += d * d
      }
      return this._magnitude = Math.sqrt(a)
    }, a.Vector.prototype.dot = function (a) {
      for (var b = 0, c = this.elements, d = a.elements, e = c.length, f = d.length, g = 0, h = 0, i = 0, j = 0; i < e && j < f;) g = c[i], h = d[j], g < h ? i += 2 : g > h ? j += 2 : g == h && (b += c[i + 1] * d[j + 1], i += 2, j += 2);
      return b
    }, a.Vector.prototype.similarity = function (a) {
      return this.dot(a) / (this.magnitude() * a.magnitude())
    }, a.Vector.prototype.toArray = function () {
      for (var a = new Array(this.elements.length / 2), b = 1, c = 0; b < this.elements.length; b += 2, c++) a[c] = this.elements[b];
      return a
    }, a.Vector.prototype.toJSON = function () {
      return this.elements
    }, a.stemmer = function () {
      var a = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log"
        },
        b = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: ""
        },
        c = "[^aeiou]",
        d = "[aeiouy]",
        e = c + "[^aeiouy]*",
        f = d + "[aeiou]*",
        g = "^(" + e + ")?" + f + e,
        h = "^(" + e + ")?" + f + e + "(" + f + ")?$",
        i = "^(" + e + ")?" + f + e + f + e,
        j = "^(" + e + ")?" + d,
        k = new RegExp(g),
        l = new RegExp(i),
        m = new RegExp(h),
        n = new RegExp(j),
        o = /^(.+?)(ss|i)es$/,
        p = /^(.+?)([^s])s$/,
        q = /^(.+?)eed$/,
        r = /^(.+?)(ed|ing)$/,
        s = /.$/,
        t = /(at|bl|iz)$/,
        u = new RegExp("([^aeiouylsz])\\1$"),
        v = new RegExp("^" + e + d + "[^aeiouwxy]$"),
        w = /^(.+?[^aeiou])y$/,
        x = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        y = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        z = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
        A = /^(.+?)(s|t)(ion)$/,
        B = /^(.+?)e$/,
        C = /ll$/,
        D = new RegExp("^" + e + d + "[^aeiouwxy]$"),
        E = function (d) {
          var e, f, g, h, i, j, E;
          if (d.length < 3) return d;
          if (g = d.substr(0, 1), "y" == g && (d = g.toUpperCase() + d.substr(1)), h = o, i = p, h.test(d) ? d = d.replace(h, "$1$2") : i.test(d) && (d = d.replace(i, "$1$2")), h = q, i = r, h.test(d)) {
            var F = h.exec(d);
            h = k, h.test(F[1]) && (h = s, d = d.replace(h, ""))
          } else if (i.test(d)) {
            var F = i.exec(d);
            e = F[1], i = n, i.test(e) && (d = e, i = t, j = u, E = v, i.test(d) ? d += "e" : j.test(d) ? (h = s, d = d.replace(h, "")) : E.test(d) && (d += "e"))
          }
          if (h = w, h.test(d)) {
            var F = h.exec(d);
            e = F[1], d = e + "i"
          }
          if (h = x, h.test(d)) {
            var F = h.exec(d);
            e = F[1], f = F[2], h = k, h.test(e) && (d = e + a[f])
          }
          if (h = y, h.test(d)) {
            var F = h.exec(d);
            e = F[1], f = F[2], h = k, h.test(e) && (d = e + b[f])
          }
          if (h = z, i = A, h.test(d)) {
            var F = h.exec(d);
            e = F[1], h = l, h.test(e) && (d = e)
          } else if (i.test(d)) {
            var F = i.exec(d);
            e = F[1] + F[2], i = l, i.test(e) && (d = e)
          }
          if (h = B, h.test(d)) {
            var F = h.exec(d);
            e = F[1], h = l, i = m, j = D, (h.test(e) || i.test(e) && !j.test(e)) && (d = e)
          }
          return h = C, i = l, h.test(d) && i.test(d) && (h = s, d = d.replace(h, "")), "y" == g && (d = g.toLowerCase() + d.substr(1)), d
        };
      return function (a) {
        return a.update(E)
      }
    }(), a.Pipeline.registerFunction(a.stemmer, "stemmer"), a.generateStopWordFilter = function (a) {
      var b = a.reduce(function (a, b) {
        return a[b] = b, a
      }, {});
      return function (a) {
        if (a && b[a.toString()] !== a.toString()) return a
      }
    }, a.stopWordFilter = a.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), a.Pipeline.registerFunction(a.stopWordFilter, "stopWordFilter"), a.trimmer = function (a) {
      return a.update(function (a) {
        return a.replace(/^\W+/, "").replace(/\W+$/, "")
      })
    }, a.Pipeline.registerFunction(a.trimmer, "trimmer"), a.TokenSet = function () {
      this.final = !1, this.edges = {}, this.id = a.TokenSet._nextId, a.TokenSet._nextId += 1
    }, a.TokenSet._nextId = 1, a.TokenSet.fromArray = function (b) {
      for (var c = new a.TokenSet.Builder, d = 0, e = b.length; d < e; d++) c.insert(b[d]);
      return c.finish(), c.root
    }, a.TokenSet.fromClause = function (b) {
      return "editDistance" in b ? a.TokenSet.fromFuzzyString(b.term, b.editDistance) : a.TokenSet.fromString(b.term)
    }, a.TokenSet.fromFuzzyString = function (b, c) {
      for (var d = new a.TokenSet, e = [{
          node: d,
          editsRemaining: c,
          str: b
        }]; e.length;) {
        var f = e.pop();
        if (f.str.length > 0) {
          var h, g = f.str.charAt(0);
          g in f.node.edges ? h = f.node.edges[g] : (h = new a.TokenSet, f.node.edges[g] = h), 1 == f.str.length ? h.final = !0 : e.push({
            node: h,
            editsRemaining: f.editsRemaining,
            str: f.str.slice(1)
          })
        }
        if (f.editsRemaining > 0 && f.str.length > 1) {
          var i, g = f.str.charAt(1);
          g in f.node.edges ? i = f.node.edges[g] : (i = new a.TokenSet, f.node.edges[g] = i), f.str.length <= 2 ? i.final = !0 : e.push({
            node: i,
            editsRemaining: f.editsRemaining - 1,
            str: f.str.slice(2)
          })
        }
        if (f.editsRemaining > 0 && 1 == f.str.length && (f.node.final = !0), f.editsRemaining > 0 && f.str.length >= 1) {
          if ("*" in f.node.edges) var j = f.node.edges["*"];
          else {
            var j = new a.TokenSet;
            f.node.edges["*"] = j
          }
          1 == f.str.length ? j.final = !0 : e.push({
            node: j,
            editsRemaining: f.editsRemaining - 1,
            str: f.str.slice(1)
          })
        }
        if (f.editsRemaining > 0) {
          if ("*" in f.node.edges) var k = f.node.edges["*"];
          else {
            var k = new a.TokenSet;
            f.node.edges["*"] = k
          }
          0 == f.str.length ? k.final = !0 : e.push({
            node: k,
            editsRemaining: f.editsRemaining - 1,
            str: f.str
          })
        }
        if (f.editsRemaining > 0 && f.str.length > 1) {
          var n, l = f.str.charAt(0),
            m = f.str.charAt(1);
          m in f.node.edges ? n = f.node.edges[m] : (n = new a.TokenSet, f.node.edges[m] = n), 1 == f.str.length ? n.final = !0 : e.push({
            node: n,
            editsRemaining: f.editsRemaining - 1,
            str: l + f.str.slice(2)
          })
        }
      }
      return d
    }, a.TokenSet.fromString = function (b) {
      for (var c = new a.TokenSet, d = c, e = !1, f = 0, g = b.length; f < g; f++) {
        var h = b[f],
          i = f == g - 1;
        if ("*" == h) e = !0, c.edges[h] = c, c.final = i;
        else {
          var j = new a.TokenSet;
          j.final = i, c.edges[h] = j, c = j, e && (c.edges["*"] = d)
        }
      }
      return d
    }, a.TokenSet.prototype.toArray = function () {
      for (var a = [], b = [{
          prefix: "",
          node: this
        }]; b.length;) {
        var c = b.pop(),
          d = Object.keys(c.node.edges),
          e = d.length;
        c.node.final && a.push(c.prefix);
        for (var f = 0; f < e; f++) {
          var g = d[f];
          b.push({
            prefix: c.prefix.concat(g),
            node: c.node.edges[g]
          })
        }
      }
      return a
    }, a.TokenSet.prototype.toString = function () {
      if (this._str) return this._str;
      for (var a = this.final ? "1" : "0", b = Object.keys(this.edges).sort(), c = b.length, d = 0; d < c; d++) {
        var e = b[d];
        a = a + e + this.edges[e].id
      }
      return a
    }, a.TokenSet.prototype.intersect = function (b) {
      for (var c = new a.TokenSet, d = void 0, e = [{
          qNode: b,
          output: c,
          node: this
        }]; e.length;) {
        d = e.pop();
        for (var f = Object.keys(d.qNode.edges), g = f.length, h = Object.keys(d.node.edges), i = h.length, j = 0; j < g; j++)
          for (var k = f[j], l = 0; l < i; l++) {
            var m = h[l];
            if (m == k || "*" == k) {
              var n = d.node.edges[m],
                o = d.qNode.edges[k],
                p = n.final && o.final,
                q = void 0;
              m in d.output.edges ? (q = d.output.edges[m], q.final = q.final || p) : (q = new a.TokenSet, q.final = p, d.output.edges[m] = q), e.push({
                qNode: o,
                output: q,
                node: n
              })
            }
          }
      }
      return c
    }, a.TokenSet.Builder = function () {
      this.previousWord = "", this.root = new a.TokenSet, this.uncheckedNodes = [], this.minimizedNodes = {}
    }, a.TokenSet.Builder.prototype.insert = function (b) {
      var c, d = 0;
      if (b < this.previousWord) throw new Error("Out of order word insertion");
      for (var e = 0; e < b.length && e < this.previousWord.length && b[e] == this.previousWord[e]; e++) d++;
      this.minimize(d), c = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
      for (var e = d; e < b.length; e++) {
        var f = new a.TokenSet,
          g = b[e];
        c.edges[g] = f, this.uncheckedNodes.push({
          parent: c,
          char: g,
          child: f
        }), c = f
      }
      c.final = !0, this.previousWord = b
    }, a.TokenSet.Builder.prototype.finish = function () {
      this.minimize(0)
    }, a.TokenSet.Builder.prototype.minimize = function (a) {
      for (var b = this.uncheckedNodes.length - 1; b >= a; b--) {
        var c = this.uncheckedNodes[b],
          d = c.child.toString();
        d in this.minimizedNodes ? c.parent.edges[c.char] = this.minimizedNodes[d] : (c.child._str = d, this.minimizedNodes[d] = c.child), this.uncheckedNodes.pop()
      }
    }, a.Index = function (a) {
      this.invertedIndex = a.invertedIndex, this.documentVectors = a.documentVectors, this.tokenSet = a.tokenSet, this.documentCount = a.documentCount, this.averageDocumentLength = a.averageDocumentLength, this.b = a.b, this.k1 = a.k1, this.fields = a.fields, this.pipeline = a.pipeline
    }, a.Index.prototype.search = function (b) {
      return this.query(function (c) {
        new a.QueryParser(b, c).parse()
      })
    }, a.Index.prototype.query = function (b) {
      var c = new a.Query(this.fields),
        d = Object.create(null),
        e = new a.Vector;
      b.call(c, c);
      for (var f = 0; f < c.clauses.length; f++) {
        var g = c.clauses[f],
          h = null;
        h = g.usePipeline ? this.pipeline.runString(g.term) : [g.term];
        for (var i = 0; i < h.length; i++) {
          var j = h[i];
          g.term = j;
          for (var k = a.TokenSet.fromClause(g), l = this.tokenSet.intersect(k).toArray(), m = 0; m < l.length; m++) {
            var n = l[m],
              o = this.invertedIndex[n],
              p = o._index,
              q = a.idf(o, this.documentCount),
              r = 1,
              s = q * ((this.k1 + 1) * r) / (this.k1 * (1 - this.b + this.b * (c.clauses.length / this.averageDocumentLength)) + r);
            e.insert(p, s * g.boost);
            for (var t = 0; t < g.fields.length; t++)
              for (var u = g.fields[t], v = o[u], w = Object.keys(v), x = 0; x < w.length; x++) {
                var z, A, y = w[x];
                z = v[y], A = new a.MatchData(n, u, z), y in d ? d[y].combine(A) : d[y] = A
              }
          }
        }
      }
      for (var w = Object.keys(d), B = [], f = 0; f < w.length; f++) {
        var C = w[f],
          D = this.documentVectors[C],
          s = e.similarity(D);
        B.push({
          ref: C,
          score: s,
          matchData: d[C]
        })
      }
      return B.sort(function (a, b) {
        return b.score - a.score
      })
    }, a.Index.prototype.toJSON = function () {
      var b = Object.keys(this.invertedIndex).sort().map(function (a) {
          return [a, this.invertedIndex[a]]
        }, this),
        c = Object.keys(this.documentVectors).map(function (a) {
          return [a, this.documentVectors[a].toJSON()]
        }, this);
      return {
        version: a.version,
        averageDocumentLength: this.averageDocumentLength,
        b: this.b,
        k1: this.k1,
        fields: this.fields,
        documentVectors: c,
        invertedIndex: b,
        pipeline: this.pipeline.toJSON()
      }
    }, a.Index.load = function (b) {
      var c = {},
        d = {},
        e = b.documentVectors,
        f = 0,
        g = {},
        h = b.invertedIndex,
        i = new a.TokenSet.Builder,
        j = a.Pipeline.load(b.pipeline);
      b.version != a.version && a.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + a.version + "' does not match serialized index '" + b.version + "'");
      for (var k = 0; k < e.length; k++, f++) {
        var l = e[k],
          m = l[0],
          n = l[1];
        d[m] = new a.Vector(n)
      }
      for (var k = 0; k < h.length; k++) {
        var l = h[k],
          o = l[0],
          p = l[1];
        i.insert(o), g[o] = p
      }
      return i.finish(), c.b = b.b, c.k1 = b.k1, c.fields = b.fields, c.averageDocumentLength = b.averageDocumentLength, c.documentCount = f, c.documentVectors = d, c.invertedIndex = g, c.tokenSet = i.root, c.pipeline = j, new a.Index(c)
    }, a.Builder = function () {
      this._ref = "id", this._fields = [], this.invertedIndex = Object.create(null), this.documentTermFrequencies = {}, this.documentLengths = {}, this.tokenizer = a.tokenizer, this.pipeline = new a.Pipeline, this.searchPipeline = new a.Pipeline, this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = []
    }, a.Builder.prototype.ref = function (a) {
      this._ref = a
    }, a.Builder.prototype.field = function (a) {
      this._fields.push(a)
    }, a.Builder.prototype.b = function (a) {
      this._b = a < 0 ? 0 : a > 1 ? 1 : a
    }, a.Builder.prototype.k1 = function (a) {
      this._k1 = a
    }, a.Builder.prototype.add = function (a) {
      var b = a[this._ref],
        c = {};
      this.documentCount += 1, this.documentTermFrequencies[b] = c, this.documentLengths[b] = 0;
      for (var d = 0; d < this._fields.length; d++) {
        var e = this._fields[d],
          f = a[e],
          g = this.tokenizer(f),
          h = this.pipeline.run(g);
        this.documentLengths[b] += h.length;
        for (var i = 0; i < h.length; i++) {
          var j = h[i];
          if (void 0 == c[j] && (c[j] = 0), c[j] += 1, void 0 == this.invertedIndex[j]) {
            var k = Object.create(null);
            k._index = this.termIndex, this.termIndex += 1;
            for (var l = 0; l < this._fields.length; l++) k[this._fields[l]] = Object.create(null);
            this.invertedIndex[j] = k
          }
          void 0 == this.invertedIndex[j][e][b] && (this.invertedIndex[j][e][b] = Object.create(null));
          for (var m = 0; m < this.metadataWhitelist.length; m++) {
            var n = this.metadataWhitelist[m],
              o = j.metadata[n];
            void 0 == this.invertedIndex[j][e][b][n] && (this.invertedIndex[j][e][b][n] = []), this.invertedIndex[j][e][b][n].push(o)
          }
        }
      }
    }, a.Builder.prototype.calculateAverageDocumentLengths = function () {
      for (var a = Object.keys(this.documentLengths), b = a.length, c = 0, d = 0; d < b; d++) {
        var e = a[d];
        c += this.documentLengths[e]
      }
      this.averageDocumentLength = c / b
    }, a.Builder.prototype.createDocumentVectors = function () {
      for (var b = {}, c = Object.keys(this.documentTermFrequencies), d = c.length, e = 0; e < d; e++) {
        for (var f = c[e], g = this.documentLengths[f], h = new a.Vector, i = this.documentTermFrequencies[f], j = Object.keys(i), k = j.length, l = 0; l < k; l++) {
          var m = j[l],
            n = i[m],
            o = this.invertedIndex[m]._index,
            p = a.idf(this.invertedIndex[m], this.documentCount),
            q = p * ((this._k1 + 1) * n) / (this._k1 * (1 - this._b + this._b * (g / this.averageDocumentLength)) + n),
            r = Math.round(1e3 * q) / 1e3;
          h.insert(o, r)
        }
        b[f] = h
      }
      this.documentVectors = b
    }, a.Builder.prototype.createTokenSet = function () {
      this.tokenSet = a.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())
    }, a.Builder.prototype.build = function () {
      return this.calculateAverageDocumentLengths(), this.createDocumentVectors(), this.createTokenSet(), new a.Index({
        invertedIndex: this.invertedIndex,
        documentVectors: this.documentVectors,
        tokenSet: this.tokenSet,
        averageDocumentLength: this.averageDocumentLength,
        documentCount: this.documentCount,
        fields: this._fields,
        pipeline: this.searchPipeline,
        b: this._b,
        k1: this._k1
      })
    }, a.Builder.prototype.use = function (a) {
      var b = Array.prototype.slice.call(arguments, 1);
      b.unshift(this), a.apply(this, b)
    }, a.MatchData = function (a, b, c) {
      this.metadata = {}, this.metadata[a] = {}, this.metadata[a][b] = c
    }, a.MatchData.prototype.combine = function (a) {
      for (var b = Object.keys(a.metadata), c = 0; c < b.length; c++) {
        var d = b[c],
          e = Object.keys(a.metadata[d]);
        void 0 == this.metadata[d] && (this.metadata[d] = {});
        for (var f = 0; f < e.length; f++) {
          var g = e[f],
            h = Object.keys(a.metadata[d][g]);
          void 0 == this.metadata[d][g] && (this.metadata[d][g] = {});
          for (var i = 0; i < h.length; i++) {
            var j = h[i];
            void 0 == this.metadata[d][g][j] ? this.metadata[d][g][j] = a.metadata[d][g][j] : this.metadata[d][g][j] = this.metadata[d][g][j].concat(a.metadata[d][g][j])
          }
        }
      }
    }, a.Query = function (a) {
      this.clauses = [], this.allFields = a
    }, a.Query.prototype.clause = function (a) {
      return "fields" in a || (a.fields = this.allFields), "boost" in a || (a.boost = 1), "usePipeline" in a || (a.usePipeline = !0), this.clauses.push(a), this
    }, a.Query.prototype.term = function (a, b) {
      var c = b || {};
      return c.term = a, this.clause(c), this
    }, a.QueryParseError = function (a, b, c) {
      this.name = "QueryParseError", this.message = a, this.start = b, this.end = c
    }, a.QueryParseError.prototype = new Error, a.QueryLexer = function (a) {
      this.lexemes = [], this.str = a, this.length = a.length, this.pos = 0, this.start = 0
    }, a.QueryLexer.prototype.run = function () {
      for (var b = a.QueryLexer.lexText; b;) b = b(this)
    }, a.QueryLexer.prototype.emit = function (a) {
      this.lexemes.push({
        type: a,
        str: this.str.slice(this.start, this.pos),
        start: this.start,
        end: this.pos
      }), this.start = this.pos
    }, a.QueryLexer.prototype.next = function () {
      if (this.pos == this.length) return a.QueryLexer.EOS;
      var b = this.str.charAt(this.pos);
      return this.pos += 1, b
    }, a.QueryLexer.prototype.width = function () {
      return this.pos - this.start
    }, a.QueryLexer.prototype.ignore = function () {
      this.start == this.pos && (this.pos += 1), this.start = this.pos
    }, a.QueryLexer.prototype.backup = function () {
      this.pos -= 1
    }, a.QueryLexer.prototype.acceptDigitRun = function () {
      var b, c;
      do {
        b = this.next(), c = b.charCodeAt(0)
      } while (c > 47 && c < 58);
      b != a.QueryLexer.EOS && this.backup()
    }, a.QueryLexer.prototype.more = function () {
      return this.pos < this.length
    }, a.QueryLexer.EOS = "EOS", a.QueryLexer.FIELD = "FIELD", a.QueryLexer.TERM = "TERM", a.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", a.QueryLexer.BOOST = "BOOST", a.QueryLexer.lexField = function (b) {
      return b.backup(), b.emit(a.QueryLexer.FIELD), b.ignore(), a.QueryLexer.lexText
    }, a.QueryLexer.lexTerm = function (b) {
      if (b.width() > 1 && (b.backup(), b.emit(a.QueryLexer.TERM)), b.ignore(), b.more()) return a.QueryLexer.lexText
    }, a.QueryLexer.lexEditDistance = function (b) {
      return b.ignore(), b.acceptDigitRun(), b.emit(a.QueryLexer.EDIT_DISTANCE), a.QueryLexer.lexText
    }, a.QueryLexer.lexBoost = function (b) {
      return b.ignore(), b.acceptDigitRun(), b.emit(a.QueryLexer.BOOST), a.QueryLexer.lexText
    }, a.QueryLexer.lexEOS = function (b) {
      b.width() > 0 && b.emit(a.QueryLexer.TERM)
    }, a.QueryLexer.termSeparator = a.tokenizer.separator, a.QueryLexer.lexText = function (b) {
      for (;;) {
        var c = b.next();
        if (c == a.QueryLexer.EOS) return a.QueryLexer.lexEOS;
        if (":" == c) return a.QueryLexer.lexField;
        if ("~" == c) return b.backup(), b.width() > 0 && b.emit(a.QueryLexer.TERM), a.QueryLexer.lexEditDistance;
        if ("^" == c) return b.backup(), b.width() > 0 && b.emit(a.QueryLexer.TERM), a.QueryLexer.lexBoost;
        if (c.match(a.QueryLexer.termSeparator)) return a.QueryLexer.lexTerm
      }
    }, a.QueryParser = function (b, c) {
      this.lexer = new a.QueryLexer(b), this.query = c, this.currentClause = {}, this.lexemeIdx = 0
    }, a.QueryParser.prototype.parse = function () {
      this.lexer.run(), this.lexemes = this.lexer.lexemes;
      for (var b = a.QueryParser.parseFieldOrTerm; b;) b = b(this);
      return this.query
    }, a.QueryParser.prototype.peekLexeme = function () {
      return this.lexemes[this.lexemeIdx]
    }, a.QueryParser.prototype.consumeLexeme = function () {
      var a = this.peekLexeme();
      return this.lexemeIdx += 1, a
    }, a.QueryParser.prototype.nextClause = function () {
      var a = this.currentClause;
      this.query.clause(a), this.currentClause = {}
    }, a.QueryParser.parseFieldOrTerm = function (b) {
      var c = b.peekLexeme();
      if (void 0 != c) switch (c.type) {
      case a.QueryLexer.FIELD:
        return a.QueryParser.parseField;
      case a.QueryLexer.TERM:
        return a.QueryParser.parseTerm;
      default:
        var d = "expected either a field or a term, found " + c.type + " with value '" + c.str + "'";
        throw new a.QueryParseError(d, c.start, c.end)
      }
    }, a.QueryParser.parseField = function (b) {
      var c = b.consumeLexeme();
      if (void 0 != c) {
        if (-1 == b.query.allFields.indexOf(c.str)) {
          var d = b.query.allFields.map(function (a) {
              return "'" + a + "'"
            }).join(),
            e = "unrecognised field '" + c.str + "', possible fields: " + d;
          throw new a.QueryParseError(e, c.start, c.end)
        }
        b.currentClause.fields = [c.str];
        var f = b.peekLexeme();
        if (void 0 == f) {
          var e = "expecting term, found nothing";
          throw new a.QueryParseError(e, c.start, c.end)
        }
        switch (f.type) {
        case a.QueryLexer.TERM:
          return a.QueryParser.parseTerm;
        default:
          var e = "expecting a field, found '" + f.type + "'";
          throw new a.QueryParseError(e, f.start, f.end)
        }
      }
    }, a.QueryParser.parseTerm = function (b) {
      var c = b.consumeLexeme();
      if (void 0 != c) {
        b.currentClause.term = c.str.toLowerCase(), -1 != c.str.indexOf("*") && (b.currentClause.usePipeline = !1);
        var d = b.peekLexeme();
        if (void 0 == d) return void b.nextClause();
        switch (d.type) {
        case a.QueryLexer.TERM:
          return b.nextClause(), a.QueryParser.parseTerm;
        case a.QueryLexer.FIELD:
          return b.nextClause(), a.QueryParser.parseField;
        case a.QueryLexer.EDIT_DISTANCE:
          return a.QueryParser.parseEditDistance;
        case a.QueryLexer.BOOST:
          return a.QueryParser.parseBoost;
        default:
          var e = "Unexpected lexeme type '" + d.type + "'";
          throw new a.QueryParseError(e, d.start, d.end)
        }
      }
    }, a.QueryParser.parseEditDistance = function (b) {
      var c = b.consumeLexeme();
      if (void 0 != c) {
        var d = parseInt(c.str, 10);
        if (isNaN(d)) {
          var e = "edit distance must be numeric";
          throw new a.QueryParseError(e, c.start, c.end)
        }
        b.currentClause.editDistance = d;
        var f = b.peekLexeme();
        if (void 0 == f) return void b.nextClause();
        switch (f.type) {
        case a.QueryLexer.TERM:
          return b.nextClause(), a.QueryParser.parseTerm;
        case a.QueryLexer.FIELD:
          return b.nextClause(), a.QueryParser.parseField;
        case a.QueryLexer.EDIT_DISTANCE:
          return a.QueryParser.parseEditDistance;
        case a.QueryLexer.BOOST:
          return a.QueryParser.parseBoost;
        default:
          var e = "Unexpected lexeme type '" + f.type + "'";
          throw new a.QueryParseError(e, f.start, f.end)
        }
      }
    }, a.QueryParser.parseBoost = function (b) {
      var c = b.consumeLexeme();
      if (void 0 != c) {
        var d = parseInt(c.str, 10);
        if (isNaN(d)) {
          var e = "boost must be numeric";
          throw new a.QueryParseError(e, c.start, c.end)
        }
        b.currentClause.boost = d;
        var f = b.peekLexeme();
        if (void 0 == f) return void b.nextClause();
        switch (f.type) {
        case a.QueryLexer.TERM:
          return b.nextClause(), a.QueryParser.parseTerm;
        case a.QueryLexer.FIELD:
          return b.nextClause(), a.QueryParser.parseField;
        case a.QueryLexer.EDIT_DISTANCE:
          return a.QueryParser.parseEditDistance;
        case a.QueryLexer.BOOST:
          return a.QueryParser.parseBoost;
        default:
          var e = "Unexpected lexeme type '" + f.type + "'";
          throw new a.QueryParseError(e, f.start, f.end)
        }
      }
    },
    function (a, b) {
      "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.lunr = b()
    }(this, function () {
      return a
    })
}();
