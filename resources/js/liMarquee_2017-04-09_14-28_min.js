---
sitemap: false
---

{{ site.copyright.comment.java }}
! function (a) {
  "use strict";
  var b = {
      init: function (b) {
        var c = {
          width: "auto",
          height: "auto",
          direction: "left",
          scrollDelay: 85,
          scrollAmount: 6,
          circular: !1,
          dragAndDrop: !0,
          hoverStop: !0,
          scrollStop: !0,
          startShow: !1,
          xml: !1,
          touchEvent: !0,
          stopOutScreen: !0,
          create: function () {},
          moveStart: function () {},
          moveStop: function () {},
          drag: function () {},
          dragStart: function () {},
          dragStop: function () {},
          wayEnd: function () {},
          removeContentFadeDuration: 300
        };
        return b && a.extend(c, b), this.each(function () {
          var b = a(this).addClass("mWrap"),
            d = a("*").index(a(this));
          b.data().mElIndex = d;
          var e = function (b, c) {
            var d = b.position(),
              e = c || a(document),
              f = e.outerWidth() - (b.position().left + b.outerWidth()),
              g = e.outerHeight() - (b.position().top + b.outerHeight()),
              h = {
                right: f,
                bottom: g
              };
            return a.extend(h, d), h
          };
          b.data().style = b.attr("style"), a.extend(c, b.data()), a.extend(b.data(), c), a(".mMove", b).length || b.wrapInner('<div class="mMove"></div>');
          var f = a(".mMove", b);
          b.css({
            position: "relative",
            overflow: "hidden",
            maxWidth: "100%",
            height: b.data().height,
            width: b.data().width
          }), b.data().scrollDelay <= 0 && (b.data().scrollDelay = 85), b.data().outerSizeFunc = function (a) {
            return "top" === b.data().direction || "bottom" === b.data().direction ? a.outerHeight() : a.outerWidth()
          }, f.data().style = f.attr("style"), b.data().updateCont || f.css({
            position: "absolute",
            left: "auto",
            right: "auto",
            top: "auto",
            bottom: "auto",
            float: "left"
          }), b.data().mMove = f;
          var g = function () {
            if (b.data().clickEventFlag = !0, b.data().outerSizeFunc(f) > 0) {
              var c = a(".mItem", b);
              c.each(function () {
                a(this).data().style = a(this).attr("style"), a(this).css({
                  display: "inline",
                  zoom: 1
                })
              });
              var d = function (a, c) {
                if (c.css({
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                  }), c.length && !b.data().circular) {
                  var d = {},
                    e = {};
                  d["padding-" + a] = b.data().outerSizeFunc(b), e["padding-" + a] = 0, c.css(d), c.eq(0).css(e)
                }
              };
              b.data().splittingString = d;
              var h = a("<div>").addClass("cloneContent").html(f.html());
              "left" === b.data().direction || "right" === b.data().direction ? (f.css({
                whiteSpace: "nowrap"
              }), b.data().splittingString("left", c), b.css({
                minHeight: f.outerHeight()
              }), h.css({
                display: "inline-block"
              }), b.data().axis = "hor") : (f.css({
                whiteSpace: "normal"
              }), c.css({
                display: "block"
              }), b.data().splittingString("top", c), 0 === b.outerHeight() && alert("Set Height Parametr for Plugin liMarquee"), h.css({
                display: "block"
              }), b.data().axis = "vert");
              document.documentMode && b.add(b.find("*")).attr("unselectable", "on");
              var j = "mousemove." + b.data().mElIndex,
                k = "mousedown." + b.data().mElIndex,
                l = "mouseup." + b.data().mElIndex,
                m = "click." + b.data().mElIndex;
              b.data({
                touchScreen: !1,
                teleport: !1,
                dragging: !1,
                pause: !1
              }), "ontouchstart" in window && (j = "touchmove." + b.data().mElIndex, k = "touchstart." + b.data().mElIndex, l = "touchend." + b.data().mElIndex, b.data().touchScreen = !0, a(window).width() < 1e3 && (b.data().hoverStop = !1)), b.data({
                moveEvent: j,
                mousedownEvent: k,
                mouseupEvent: l,
                clickEvent: m
              });
              var n = function (a) {
                0 !== b.data().outerSizeFunc(a) ? b.data().outerSizeFunc(a) < b.data().outerSizeFunc(b) && b.data().circular && (h.clone().appendTo(a), b.data().cloneContent(a)) : console.log("The string is empty or contains invalid style")
              };
              b.data().cloneContent = n, b.data().cloneContent(f);
              var o = function (a, c) {
                if (!b.data().pause && (void 0 === a && (a = b.data().startPos), void 0 === c && (c = b.data().endPos), 0 !== c && -0 !== c)) {
                  var d = c - a;
                  d < 0 && (d *= -1);
                  var e = d * b.data().scrollDelay / b.data().scrollAmount,
                    g = {},
                    h = {};
                  g[b.data().direction] = a, h[b.data().direction] = c, f.css(g), b.addClass("mIni"), b.data().stopped = !1, void 0 !== b.data().moveStart && b.data().moveStart(), f.stop(!0).animate(h, e, "linear", function () {
                    void 0 !== b.data().moveStop && b.data().moveStop(), void 0 !== b.data().wayEnd && b.data().wayEnd(), b.data().teleport = !0, o()
                  })
                }
              };
              b.data().anim = o;
              var p = function () {
                var a = f.clone().addClass("clone").css({
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0
                });
                "top" === b.data().direction || "bottom" === b.data().direction ? a.css({
                  left: 0
                }) : a.css({
                  top: 0
                });
                var c = {},
                  d = {};
                c[b.data().direction] = "-100%", d[b.data().direction] = "100%";
                var e = a.clone().addClass("cloneBefore").css(c).appendTo(f),
                  g = a.clone().addClass("cloneAfter").css(d).appendTo(f);
                b.data().circular && e.add(g).css({
                  opacity: 1
                })
              };
              b.data().circular && p(), void 0 !== b.data().create && b.data().create();
              var q = function () {
                return e(f, b)[b.data().direction]
              };
              b.data().nowPos = q;
              var r = function (c) {
                var d = c;
                b.data().touchScreen && 1 === c.originalEvent.targetTouches.length && (d = c.originalEvent.targetTouches[0]);
                var e = {
                  left: d.pageX,
                  top: d.pageY,
                  right: a(window).width() - d.pageX,
                  bottom: a(window).height() - d.pageY
                };
                return a.extend(d, e), d
              };
              b.data().hoverStop && b.on("mouseenter." + b.data().mElIndex, function () {
                b.off("mouseleave." + b.data().mElIndex), b.data().dragAndDrop && a("html").addClass("grab"), b.data().stopped || (f.stop(!0), b.data().stopped = !0, void 0 !== b.data().moveStop && b.data().moveStop()), b.on("mouseleave." + b.data().mElIndex, function () {
                  a(document).off(j), a("html").removeClass("grab"), a("html").removeClass("grabbing"), o(b.data().nowPos())
                })
              }), (!b.data().touchScreen && b.data().dragAndDrop || b.data().touchScreen && b.data().touchEvent) && b.on(k, function (c) {
                a(document).off(j), a(document).off(l), b.off("mouseleave." + b.data().mElIndex), a("html").addClass("grabbing"), b.data().stopped || (f.stop(!0), b.data().stopped = !0, void 0 !== b.data().moveStop && b.data().moveStop());
                var d = r(c)[b.data().direction],
                  e = r(c).top,
                  g = r(c).left,
                  h = 0,
                  i = 0,
                  k = 1;
                if (a(document).on(j, function (c) {
                    b.data().clickEventFlag = !1, b.off("mouseleave." + b.data().mElIndex), a("html").addClass("grabbing"), b.data().dragging || (void 0 !== b.data().dragStart && b.data().dragStart(), b.data().dragging = !0);
                    var j = b.data().nowPos();
                    b.data().stopped || (f.stop(!0), b.data().stopped = !0);
                    var m = r(c)[b.data().direction],
                      n = function () {
                        m > d && (k = 1), m < d && (k = -1);
                        var a = d - m;
                        d = m;
                        var c = {};
                        if (c[b.data().direction] = "-=" + a, b.data().circular ? (j <= b.data().outerSizeFunc(f) && !b.data().teleport && (b.data().teleport = !0), j <= b.data().outerSizeFunc(b) - b.data().outerSizeFunc(f) && k < 0 && b.data().teleport && (void 0 !== b.data().wayEnd && b.data().wayEnd(), c[b.data().direction] = "+=" + b.data().outerSizeFunc(f)), j >= 0 && k > 0 && b.data().teleport && (void 0 !== b.data().wayEnd && b.data().wayEnd(), c[b.data().direction] = "-=" + b.data().outerSizeFunc(f))) : (j <= -b.data().outerSizeFunc(f) && k < 0 && (void 0 !== b.data().wayEnd && b.data().wayEnd(), c[b.data().direction] = "+=" + (b.data().outerSizeFunc(f) + b.data().outerSizeFunc(b))), j >= b.data().outerSizeFunc(b) && k > 0 && (void 0 !== b.data().wayEnd && b.data().wayEnd(), c[b.data().direction] = "-=" + (b.data().outerSizeFunc(f) + b.data().outerSizeFunc(b)))), void 0 !== b.data().drag && b.data().drag(), f.css(c), b.data().touchEvent) return !1
                      };
                    if ("hor" == b.data().axis) {
                      var o = r(c).top,
                        p = r(c).left,
                        q = Math.abs(o - e),
                        s = Math.abs(p - g);
                      h += q, i += s, h > i ? a(document).trigger(l) : n()
                    } else n()
                  }), a(document).on(l, function (c) {
                    b.data().dragging && (void 0 !== b.data().dragStop && b.data().dragStop(), b.data().dragging = !1), a(c.target).is(b) || a(c.target).closest(b).length ? (a(document).off(j), a("html").removeClass("grabbing"), b.data().hoverStop ? b.trigger("mouseenter." + b.data().mElIndex) : o(b.data().nowPos())) : (a(document).off(j), o(b.data().nowPos()), a("html").removeClass("grab"), a("html").removeClass("grabbing")), a(document).off(l), setTimeout(function () {
                      b.data().clickEventFlag = !0
                    }, 300)
                  }), !b.data().touchScreen) return !1
              });
              var s = function (a) {
                var b = a.data().mMove,
                  c = a.data().outerSizeFunc(a),
                  d = -a.data().outerSizeFunc(b);
                if (a.data().startPos = c, a.data().endPos = d, a.data().circular) {
                  d = -(a.data().outerSizeFunc(b) + (a.data().outerSizeFunc(b) - a.data().outerSizeFunc(a))), a.data().endPos = d;
                  var e = a.data().startShow ? a.data().outerSizeFunc(b) : a.data().outerSizeFunc(a) + a.data().outerSizeFunc(b);
                  o(e)
                } else {
                  var f = a.data().startShow ? 0 : c;
                  o(f)
                }
              };
              b.data().getPosition = s;
              var t = function (a) {
                var b = a.data().mMove,
                  c = a.data().outerSizeFunc(a),
                  d = -a.data().outerSizeFunc(b);
                a.data().startPos = c, a.data().endPos = d, a.data().circular && (d = -(a.data().outerSizeFunc(b) + (a.data().outerSizeFunc(b) - a.data().outerSizeFunc(a))), a.data().endPos = d)
              };
              b.data().setPosition = t, b.data().updateCont || b.data().getPosition(b);
              var u = function () {
                document.hidden ? b.data().stopped || (f.stop(!0), b.data().stopped = !0, void 0 !== b.data().moveStop && b.data().moveStop()) : o(b.data().nowPos())
              };
              a(document).on("visibilitychange", function () {
                u()
              });
              var v = function () {};
              a(window).on("resize." + b.data().mElIndex, function () {
                clearTimeout(v), v = setTimeout(function () {
                  b.liMarquee("resetPosition")
                }, 300)
              });
              var w = function () {},
                x = function () {
                  b.data().stopOutScreen && (b.offset().top + b.outerHeight() < a(window).scrollTop() || b.offset().top > a(window).scrollTop() + a(window).height()) ? b.data().stopped || (f.stop(!0), b.data().stopped = !0, void 0 !== b.data().moveStop && b.data().moveStop()) : o(b.data().nowPos())
                };
              a(window).on("scroll." + b.data().mElIndex, function () {
                b.data().scrollStop && !b.data().stopped && (f.stop(!0), b.data().stopped = !0, void 0 !== b.data().moveStop && b.data().moveStop()), clearTimeout(w), w = setTimeout(function () {
                  x()
                }, 100)
              }), b.find("a").on("click", function () {
                if (!b.data().clickEventFlag) return !1
              }), x()
            } else f.text('marquee "' + b.attr("class") + '" elements is hidden or missing'), g(), b.liMarquee("stop"), b.liMarquee("removeContent")
          };
          b.data().xml ? a.ajax({
            url: b.data().xml,
            dataType: "xml",
            success: function (b) {
              for (var c = a(b).find("item"), d = c.length, e = 0; e < d; e++) {
                var h = c.eq(e),
                  i = h.find("title").text(),
                  j = h.find("link").text();
                h.find("link").length ? a('<div class="mItem"><a href="' + j + '">' + i + "</a></div>").appendTo(f) : a('<div class="mItem">').text(i).appendTo(f)
              }
              g()
            }
          }) : g()
        })
      },
      getContent: function () {
        var c, b = a(this).data().mMove;
        if (b.is(":empty")) c = !1;
        else {
          var d = b.html(),
            e = a("<div>").html(d);
          e.find(".clone").remove(), e.find(".cloneContent").remove(), c = a.trim(e.html())
        }
        return c
      },
      addContent: function (b) {
        return this.each(function () {
          var c = a(this),
            d = c.data().mMove,
            e = function () {
              if (c.data().removing) setTimeout(function () {
                e()
              }, c.data().removeContentFadeDuration);
              else {
                var a = '<div class="mItem">' + b + "</div>",
                  f = c.liMarquee("getContent"),
                  g = f;
                !d.find(".mItem").length && f && (f = '<div class="mItem">' + f + "</div>"), b && ("left" !== c.data().direction && "top" !== c.data().direction || (g = f ? f + a : a), "right" !== c.data().direction && "bottom" !== c.data().direction || (g = f ? a + f : a)), c.liMarquee("removeContent");
                var h = function () {
                  c.data().removing ? setTimeout(function () {
                    h()
                  }, c.data().removeContentFadeDuration) : (d.html(g), f && (c.data().updateCont = !0), c.liMarquee(c.data()), c.data().updateCont && (c.data().setPosition(c), c.data().anim(c.data().nowPos())))
                };
                h()
              }
            };
          e()
        })
      },
      removeContent: function () {
        return this.each(function () {
          a(this).data().removing = !0;
          var b = a(this),
            c = b.data().mMove;
          c.children().animate({
            opacity: 0
          }, b.data().removeContentFadeDuration), setTimeout(function () {
            b.data().updateCont = !0, b.data().stopped || (c.stop(!0), b.data().stopped = !0), b.off("mouseenter." + b.data().mElIndex), b.off("mouseleave." + b.data().mElIndex), b.off(a(this).data().mousedownEvent), a(window).off("resize." + b.data().mElIndex), a(window).off("scroll." + b.data().mElIndex), a(document).off(b.data().moveEvent), a(document).off(b.data().mouseupEvent), b.data().stopped || (c.stop(!0), b.data().stopped = !0), c.empty(), b.data().removing = !1
          }, b.data().removeContentFadeDuration)
        })
      },
      changeOptions: function (b) {
        return this.each(function () {
          var c = a(this);
          a.extend(c.data(), b), c.liMarquee("destroy"), c.data().updateCont = !1, c.liMarquee(c.data())
        })
      },
      destroy: function () {
        var b = a(this),
          c = b.data().mMove;
        b.removeAttr("style").attr("style", b.data().style), b.data().stopped || (c.stop(!0), b.data().stopped = !0), c.removeAttr("style").attr("style", c.data().style).removeData(), a(".mItem", b).each(function () {
          a(this).removeAttr("style").attr("style", a(this).data().style).removeData()
        }), b.off("mouseenter." + b.data().mElIndex), b.off("mouseleave." + b.data().mElIndex), b.off(b.data().mousedownEvent), a(window).off("resize." + b.data().mElIndex), a(window).off("scroll." + b.data().mElIndex), b.data().moveEvent && a(document).off(b.data().moveEvent), b.data().mouseupEvent && a(document).off(b.data().mouseupEvent), a(".clone", b).remove(), a(".cloneContent", b).remove();
        var d = c.html();
        c.remove(), b.html(d).removeClass("mIni").css({
          opacity: 1
        })
      },
      stop: function () {
        return this.each(function () {
          var b = a(this);
          if (b.is(".mIni")) {
            var c = b.data().mMove;
            b.data().pause || (b.data().pause = !0, b.data().stopped || (c.stop(!0), b.data().stopped = !0, void 0 !== b.data().moveStop && b.data().moveStop()))
          }
        })
      },
      start: function (b) {
        return this.each(function () {
          var c = a(this);
          if (c.data().pause) {
            var d = b || 0;
            setTimeout(function () {
              c.data().pause = !1, c.data().setPosition(c), c.data().anim(c.data().nowPos()), a(window).trigger("scroll." + c.data().mElIndex)
            }, d)
          }
        })
      },
      resetPosition: function () {
        return this.each(function () {
          var b = a(this);
          if (b.is(":visible")) {
            var c = b.data().mMove;
            b.data().stopped || (c.stop(!0), b.data().stopped = !0), "left" !== b.data().direction && "right" !== b.data().direction || b.css({
              minHeight: c.outerHeight()
            }), b.data().setPosition(b), b.data().anim(b.data().nowPos()), a(window).trigger("scroll." + b.data().mElIndex)
          }
        })
      }
    },
    c = "http://codecanyon.net/item/limarquee-jquery-responsive-marquee-/12947320",
    d = "www.codecanyon.net",
    e = "liMarquee",
    f = "This is DEMO version of the plug-in " + e + ', it will not work on your device. Purchase full version on site <a style="color:white !important; background-color:red !important; font-size:20px !important;" href="' + c + '">' + d + "</a>",
    g = a(""),
    h = ["div", "span", "i", "b", "strong", "em", "h1", "h2", "h3", "section", "td", "header", "footer", "body", "li", "a"];
  if ("demo.masscode.ru" != window.location.hostname) {
    g = a('<div style="position:fixed !important; width:100% !important; left:0 !important; bottom:0 !important; box-sizing:border-box !important;padding:30px !important; background-color:red !important; color:white !important; z-index:999999 !important; text-align:center !important; font-size:20px !important; ">').html(f), g.appendTo("body"), setInterval(function () {
      g.stop(!0).animate({
        "padding-top": "40px"
      }, 500).animate({
        "padding-top": "30px"
      }, 500)
    }, 1e3);
    var i = 0;
    setInterval(function () {
      var b = a(h[i]).eq(0);
      g.appendTo(b), ++i >= h.length && (i = 0)
    }, 5e3)
  }
  a.fn.liMarquee = function (c) {
    return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Метод " + c + " в jQuery.liMarquee doesn't exist") : b.init.apply(this, arguments)
  }
}(jQuery);
