"use strict";
function _instanceof(e, n) {
  return null != n && "undefined" != typeof Symbol && n[Symbol.hasInstance]
    ? !!n[Symbol.hasInstance](e)
    : e instanceof n;
}
function _classCallCheck(e, n) {
  if (!_instanceof(e, n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var o = n[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
var minTimer = (function () {
    function n(e) {
      _classCallCheck(this, n),
        (this.hour = document.querySelectorAll("".concat(e.hour))),
        (this.min = document.querySelectorAll("".concat(e.min))),
        (this.sec = document.querySelectorAll("".concat(e.sec))),
        (this.separation = e.separation);
    }
    return (
      _createClass(n, [
        {
          key: "start",
          value: function () {
            var c = this;
            setInterval(function () {
              var e, n, t, o, r, i, s;
              (e = new Date()),
                (n = e.getTimezoneOffset()),
                (t = Math.floor(e / 1e3 - 60 * n)),
                (o =
                  60 * Math.ceil((e / 1e3 / 60 - n) / 60 / 24) * 60 * 24 - t),
                (r = ("0" + ~~(o / 60 / 60)).slice(-2)),
                (i = ("0" + ~~((o / 60) % 60)).slice(-2)),
                (s = ("0" + ~~(o % 60)).slice(-2)),
                c.separation
                  ? (function () {
                      for (var e = 0; e < c.min.length; e++)
                        (c.hour[e].innerHTML = "<span>"
                          .concat(r[0], "</span><span>")
                          .concat(r[1], "</span>")),
                          (c.min[e].innerHTML = "<span>"
                            .concat(i[0], "</span><span>")
                            .concat(i[1], "</span>")),
                          (c.sec[e].innerHTML = "<span>"
                            .concat(s[0], "</span><span>")
                            .concat(s[1], "</span>"));
                    })()
                  : (function () {
                      for (var e = 0; e < c.min.length; e++)
                        (c.hour[e].innerHTML = r),
                          (c.min[e].innerHTML = i),
                          (c.sec[e].innerHTML = s);
                    })();
            }, 1e3);
          },
        },
      ]),
      n
    );
  })(),
  timer = new minTimer({
    hour: ".t-hour",
    min: ".t-min",
    sec: ".t-sec",
    separation: !0,
  }).start();
$(document).on("click", 'a[href^="#"]', function (e) {
  var n = $(this).attr("href"),
    t = $(n);
  if (0 !== t.length) {
    e.preventDefault();
    var o = t.offset().top;
    $("body, html").animate({ scrollTop: o });
  }
}),
  $(".header__slider").slick({
    dots: !0,
    customPaging: function (e, n) {
      return (
        '<button type="button"><img src="images/dot' +
        (n + 1) +
        '.jpg"></button>'
      );
    },
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
var slidesTotal = $(".slidesTotal"),
  currentSlideEl = $(".slideCurrent");
$(".reviews__slider").on("init", function (e, n) {
  slidesTotal.text(n.slideCount);
}),
  $(document).on("ready", function () {
    currentSlideEl.text(currentSlide);
  }),
  $(".reviews__slider").slick({
    dots: !1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
var currentSlide = $(".reviews__slider").slick("slickCurrentSlide");
$(".reviews__slider").on("beforeChange", function (e, n, t, o) {
  currentSlideEl.text(o + 1);
}),
  $(".feedback").on("click touch", function () {
    $(".popup-window").show();
  }),
  $(".close-popup").on("click touch", function () {
    $(".popup-window").hide();
  });
