"use strict";

var React = window.React;

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

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
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var classnames = { exports: {} };

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }

      return classes.join(" ");
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);

var cn = classnames.exports;

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === "undefined") {
    return;
  }

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$9 =
  ".Button-module_button__AbcpN {\n  width: 90px;\n  margin-right: 15px;\n  padding: 6px 16px;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  margin: 0;\n  border-radius: 4px;\n}\n\n.Button-module_button__AbcpN:hover {\n  cursor: pointer;\n}\n\n.Button-module_install__gf-Xk {\n  background: #387ef2;\n}\n\n.Button-module_uninstall__Hha9c {\n  background: #d32f2f;\n}\n";
var styles$9 = {
  button: "Button-module_button__AbcpN",
  install: "Button-module_install__gf-Xk",
  uninstall: "Button-module_uninstall__Hha9c",
};
styleInject(css_248z$9);

/* eslint-disable jsx-a11y/no-static-element-interactions */
var Button = function (_a) {
  var children = _a.children,
    isInstalled = _a.isInstalled,
    className = _a.className,
    onClick = _a.onClick;
  return React__default["default"].createElement(
    "div",
    {
      onClick: onClick,
      className: cn(
        styles$9.button,
        isInstalled ? styles$9.uninstall : styles$9.install,
        className
      ),
    },
    children
  );
};

var css_248z$8 =
  ".Image-module_single-image__DrLdy {\n  max-height: 52px;\n  object-fit: contain;\n  max-width: 100%;\n  margin-bottom: 24px;\n}\n\n.Image-module_multi-image__oYixB:not(:last-child) {\n  margin-right: 20px;\n}\n";
var styles$8 = {
  "single-image": "Image-module_single-image__DrLdy",
  "multi-image": "Image-module_multi-image__oYixB",
};
styleInject(css_248z$8);

var Image = function (_a) {
  var image = _a.image,
    className = _a.className,
    title = _a.title,
    height = _a.height;
  return React__default["default"].createElement("img", {
    title: title,
    className: cn(styles$8["single-image"], className),
    src: image === null || image === void 0 ? void 0 : image.src,
    alt:
      (image === null || image === void 0 ? void 0 : image.alt) ||
      "integration-img",
    height: height,
  });
};

var css_248z$7 =
  ".Tile-module_wrapper__-qygt {\n  height: 100%;\n  justify-content: space-between;\n}\n\n.Tile-module_top-content__64KNP {\n  padding: 24px;\n  background: rgba(215, 229, 255, 0.4);\n}\n\n.Tile-module_bottom-content__1ZAWo {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 24px;\n  background: white;\n}\n\n.Tile-module_images-wrapper__X254p {\n  flex: 1;\n}\n\n.Tile-module_buttons-wrapper__-nDDs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  line-height: 23px;\n}\n\n@keyframes Tile-module_loading__suyXF {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.Tile-module_spinner__DNmYl {\n  height: 20px;\n  width: 20px;\n  margin-right: 20px;\n  animation: Tile-module_loading__suyXF 1s linear infinite;\n}\n\n.Tile-module_demo-card__JagNQ {\n  background-color: #f2f2f2 !important;\n  box-shadow: none !important;\n}\n\n.Tile-module_demo-top-content__GSt-I {\n  background-color: #e2e2e2;\n}\n\n.Tile-module_demo-img__4in2X {\n  filter: grayscale(100%);\n}\n\n.Tile-module_demo-button__t2u8s {\n  background: #959595;\n}\n\n.Tile-module_demo-button--disabled__2VNz7 {\n  cursor: not-allowed !important;\n}\n\n.Tile-module_demo-link__ojGYy {\n  color: #959595 !important;\n  border-color: #959595 !important;\n}\n";
var styles$7 = {
  wrapper: "Tile-module_wrapper__-qygt",
  "top-content": "Tile-module_top-content__64KNP",
  "bottom-content": "Tile-module_bottom-content__1ZAWo",
  "images-wrapper": "Tile-module_images-wrapper__X254p",
  "buttons-wrapper": "Tile-module_buttons-wrapper__-nDDs",
  spinner: "Tile-module_spinner__DNmYl",
  loading: "Tile-module_loading__suyXF",
  "demo-card": "Tile-module_demo-card__JagNQ",
  "demo-top-content": "Tile-module_demo-top-content__GSt-I",
  "demo-img": "Tile-module_demo-img__4in2X",
  "demo-button": "Tile-module_demo-button__t2u8s",
  "demo-button--disabled": "Tile-module_demo-button--disabled__2VNz7",
  "demo-link": "Tile-module_demo-link__ojGYy",
};
styleInject(css_248z$7);

var css_248z$6 =
  ".Link-module_link__2xcq4 {\n  width: 90px;\n  padding: 6px 16px;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  margin: 0;\n  color: #387ef2;\n  border: 1px solid #387ef2;\n  border-radius: 4px;\n}\n\n.Link-module_link__2xcq4:hover {\n  cursor: pointer;\n}\n";
var styles$6 = { link: "Link-module_link__2xcq4" };
styleInject(css_248z$6);

var Link = function (_a) {
  var className = _a.className,
    children = _a.children,
    props = __rest(_a, ["className", "children"]);
  return React__default["default"].createElement(
    "a",
    __assign({}, props, { className: cn(styles$6.link, className) }),
    children || "LEARN MORE"
  );
};

var css_248z$5 =
  ".Title-module_title__CiLvv {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 500;\n  color: #333333;\n  margin: 0;\n  margin-bottom: 4px;\n}\n";
var styles$5 = { title: "Title-module_title__CiLvv" };
styleInject(css_248z$5);

var Title = function (_a) {
  var className = _a.className,
    children = _a.children;
  return React__default["default"].createElement(
    "h4",
    { className: cn(styles$5.title, className) },
    children
  );
};

var css_248z$4 =
  "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n.Card-module_wrapper__AZXgq {\n  display: flex;\n  min-width: 310px;\n  flex-direction: column;\n  font-family: 'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  background-color: white;\n  box-shadow: 0px 20px 48px rgba(52, 72, 123, 0.1);\n  box-sizing: border-box;\n  border-radius: 8px;\n  overflow: hidden;\n}\n";
var styles$4 = { wrapper: "Card-module_wrapper__AZXgq" };
styleInject(css_248z$4);

var CardWrapper = function (_a) {
  var children = _a.children,
    className = _a.className;
  return React__default["default"].createElement(
    "div",
    { className: cn(styles$4.wrapper, className) },
    children
  );
};

var css_248z$3 =
  "@keyframes Spinner-module_loading__STpEB {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.Spinner-module_spinner__eLI4m {\n  height: 20px;\n  width: 20px;\n  animation: Spinner-module_loading__STpEB 1s linear infinite;\n}\n";
var styles$3 = {
  spinner: "Spinner-module_spinner__eLI4m",
  loading: "Spinner-module_loading__STpEB",
};
styleInject(css_248z$3);

var Spinner = function (_a) {
  var className = _a.className,
    color = _a.color;
  return React__default["default"].createElement(
    "svg",
    {
      className: cn(styles$3.spinner, className),
      width: "62",
      height: "62",
      viewBox: "0 0 62 62",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    React__default["default"].createElement("path", {
      d: "M58.9999 31C58.9999 24.3836 56.6569 17.981 52.3863 12.9274C48.1157 7.87376 42.1935 4.49572 35.6698 3.39223C29.1461 2.28874 22.4424 3.53109 16.7473 6.89899C11.0522 10.2669 6.73378 15.5428 4.5577 21.7911C2.38163 28.0394 2.48851 34.8564 4.85942 41.0334C7.23032 47.2104 11.712 52.3483 17.5099 55.536C23.3078 58.7237 30.0472 59.7553 36.5331 58.4478",
      stroke: color ? color : "#ffffff",
      strokeWidth: "6",
      strokeLinecap: "round",
    })
  );
};

var useTile = function (_a) {
  var _b;
  var integrationId = _a.integrationId,
    feedId = _a.feedId,
    feed = _a.feed,
    isInstalled = _a.isInstalled,
    onInstallClick = _a.onInstallClick,
    getInstallUrl = _a.getInstallUrl,
    onUninstallClick = _a.onUninstallClick,
    onUninstalled = _a.onUninstalled,
    isDisabled = _a.isDisabled;
  var _c = React.useState(""),
    url = _c[0],
    setUrl = _c[1];
  var _d = React.useState(false),
    isUninstalling = _d[0],
    setIsUninstalling = _d[1];
  var entity = React.useMemo(
    function () {
      return feed.find(function (e) {
        return e.id === feedId;
      });
    },
    [feed, feedId]
  );
  var _e = React.useMemo(
      function () {
        var _a;
        var tags =
          entity === null || entity === void 0 ? void 0 : entity.tags.catalog;
        var desc =
          entity === null || entity === void 0 ? void 0 : entity.description;
        var parsedTags =
          tags === null || tags === void 0
            ? void 0
            : tags.replaceAll(",", ", ");
        var descriptionParagraph =
          (_a = desc === null || desc === void 0 ? void 0 : desc.split("[")) ===
            null || _a === void 0
            ? void 0
            : _a[0];
        return { subtitle: parsedTags, description: descriptionParagraph };
      },
      [entity]
    ),
    subtitle = _e.subtitle,
    description = _e.description;
  React.useEffect(
    function () {
      var setInstallUrl = function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var installUrl, err_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getInstallUrl(integrationId)];
              case 1:
                installUrl = _a.sent();
                setUrl(installUrl);
                return [3 /*break*/, 3];
              case 2:
                err_1 = _a.sent();
                console.warn(
                  "There was a problem fetching the install url: ".concat(err_1)
                );
                return [3 /*break*/, 3];
              case 3:
                return [2 /*return*/];
            }
          });
        });
      };
      if (!isDisabled) {
        setInstallUrl();
      }
    },
    [getInstallUrl, integrationId, isDisabled]
  );
  var handleClick = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!isDisabled) return [3 /*break*/, 7];
            if (!isInstalled) return [3 /*break*/, 6];
            setIsUninstalling(true);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [
              4 /*yield*/,
              onUninstallClick === null || onUninstallClick === void 0
                ? void 0
                : onUninstallClick(integrationId),
            ];
          case 2:
            _a.sent();
            onUninstalled === null || onUninstalled === void 0
              ? void 0
              : onUninstalled({
                  status: "success",
                });
            return [3 /*break*/, 5];
          case 3:
            err_2 = _a.sent();
            onUninstalled === null || onUninstalled === void 0
              ? void 0
              : onUninstalled({
                  status: "error",
                  err: err_2,
                });
            console.warn(
              "There was a problem uninstalling the integration: ".concat(err_2)
            );
            return [3 /*break*/, 5];
          case 4:
            setIsUninstalling(false);
            return [7 /*endfinally*/];
          case 5:
            return [3 /*break*/, 7];
          case 6:
            if (onInstallClick) {
              onInstallClick === null || onInstallClick === void 0
                ? void 0
                : onInstallClick(url);
            } else {
              window.open(url, "_parent");
            }
            _a.label = 7;
          case 7:
            return [2 /*return*/];
        }
      });
    });
  };
  var image = {
    src: "data:image/svg+xml;utf8,".concat(
      encodeURIComponent(
        (entity === null || entity === void 0 ? void 0 : entity.largeIcon) || ""
      )
    ),
    alt: (entity === null || entity === void 0 ? void 0 : entity.name) || "",
  };
  return {
    handleClick: handleClick,
    loading: isUninstalling,
    image: image,
    linkUrl:
      ((_b =
        entity === null || entity === void 0 ? void 0 : entity.resources) ===
        null || _b === void 0
        ? void 0
        : _b.configureAppDocUrl) || "",
    subtitle: subtitle,
    description: description,
  };
};

var css_248z$2 =
  ".Subtitle-module_subtitle__V-Bas {\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #959595;\n  margin: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n";
var styles$2 = { subtitle: "Subtitle-module_subtitle__V-Bas" };
styleInject(css_248z$2);

var Subtitle = function (_a) {
  var className = _a.className,
    children = _a.children;
  return React__default["default"].createElement(
    "h6",
    { className: cn(styles$2.subtitle, className) },
    children
  );
};

var css_248z$1 =
  ".Description-module_description__mf-Hu {\n  font-size: 12px;\n  line-height: 16px;\n  color: #050610;\n  margin: 0;\n  margin-bottom: 24px;\n}\n";
var styles$1 = { description: "Description-module_description__mf-Hu" };
styleInject(css_248z$1);

var Description = function (_a) {
  var className = _a.className,
    children = _a.children;
  return React__default["default"].createElement(
    "p",
    { className: cn(styles$1.description, className) },
    children
  );
};

var DEFAULT_INSTALL_TEXT = "INSTALL APP";
var DEFAULT_UNINSTALL_TEXT = "UNINSTALL APP";
var Tile = function (_a) {
  var _b, _c, _d, _e, _f, _g;
  var integrationId = _a.integrationId,
    feedId = _a.feedId,
    feed = _a.feed,
    isInstalled = _a.isInstalled,
    title = _a.title,
    customDescription = _a.customDescription,
    customSubtitle = _a.customSubtitle,
    hideTitle = _a.hideTitle,
    hideSubtitle = _a.hideSubtitle,
    hideDescription = _a.hideDescription,
    classes = _a.classes,
    getTileImages = _a.getTileImages,
    installText = _a.installText,
    uninstallText = _a.uninstallText,
    hideLearnMore = _a.hideLearnMore,
    learnMoreText = _a.learnMoreText,
    hideImages = _a.hideImages,
    onInstallClick = _a.onInstallClick,
    getCustomBody = _a.getCustomBody,
    getInstallUrl = _a.getInstallUrl,
    onUninstallClick = _a.onUninstallClick,
    onUninstalled = _a.onUninstalled,
    isDisabled = _a.isDisabled;
  var _h = useTile({
      integrationId: integrationId,
      feed: feed,
      feedId: feedId,
      getInstallUrl: getInstallUrl,
      isInstalled: isInstalled,
      onInstallClick: onInstallClick,
      onUninstallClick: onUninstallClick,
      onUninstalled: onUninstalled,
      isDisabled: isDisabled,
    }),
    handleClick = _h.handleClick,
    loading = _h.loading,
    image = _h.image,
    linkUrl = _h.linkUrl,
    feedSubtitle = _h.subtitle,
    feedDescription = _h.description;
  var buttonText = isInstalled
    ? uninstallText || DEFAULT_UNINSTALL_TEXT
    : installText || DEFAULT_INSTALL_TEXT;
  return React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    getCustomBody
      ? getCustomBody({
          handleClick: handleClick,
          isLoading: loading,
        })
      : React__default["default"].createElement(
          CardWrapper,
          {
            className: cn(
              classes === null || classes === void 0 ? void 0 : classes.card,
              styles$7["wrapper"],
              ((_b = {}), (_b[styles$7["demo-card"]] = isDisabled), _b)
            ),
          },
          React__default["default"].createElement(
            "div",
            {
              className: cn(
                styles$7["top-content"],
                classes === null || classes === void 0
                  ? void 0
                  : classes.topContent,
                ((_c = {}), (_c[styles$7["demo-top-content"]] = isDisabled), _c)
              ),
            },
            !hideImages &&
              React__default["default"].createElement(
                "div",
                {
                  className: cn(
                    styles$7["images-wrapper"],
                    classes === null || classes === void 0
                      ? void 0
                      : classes.imagesWrapper
                  ),
                },
                (getTileImages === null || getTileImages === void 0
                  ? void 0
                  : getTileImages(integrationId, feedId)) ||
                  React__default["default"].createElement(Image, {
                    title: feedId || "",
                    key: image.alt,
                    image: image,
                    className: cn(
                      classes === null || classes === void 0
                        ? void 0
                        : classes.image,
                      ((_d = {}), (_d[styles$7["demo-img"]] = isDisabled), _d)
                    ),
                    height: 52,
                  })
              ),
            !hideTitle &&
              React__default["default"].createElement(
                Title,
                {
                  className:
                    classes === null || classes === void 0
                      ? void 0
                      : classes.title,
                },
                title || integrationId
              ),
            !hideSubtitle &&
              React__default["default"].createElement(
                Subtitle,
                {
                  className:
                    classes === null || classes === void 0
                      ? void 0
                      : classes.subtitle,
                },
                customSubtitle || feedSubtitle
              )
          ),
          React__default["default"].createElement(
            "div",
            {
              className: cn(
                styles$7["bottom-content"],
                classes === null || classes === void 0
                  ? void 0
                  : classes.bottomContent,
                ((_e = {}), (_e[styles$7["demo-card"]] = isDisabled), _e)
              ),
            },
            !hideDescription &&
              React__default["default"].createElement(
                Description,
                {
                  className:
                    classes === null || classes === void 0
                      ? void 0
                      : classes.description,
                },
                customDescription || feedDescription
              ),
            React__default["default"].createElement(
              "div",
              {
                className: cn(
                  styles$7["buttons-wrapper"],
                  classes === null || classes === void 0
                    ? void 0
                    : classes.buttonsWrapper
                ),
              },
              React__default["default"].createElement(
                Button,
                {
                  onClick: handleClick,
                  isInstalled: isInstalled,
                  className: cn(
                    classes === null || classes === void 0
                      ? void 0
                      : classes.button,
                    ((_f = {}),
                    (_f[styles$7["demo-button"]] = isDisabled),
                    (_f[styles$7["demo-button--disabled"]] = isDisabled),
                    _f)
                  ),
                },
                loading
                  ? React__default["default"].createElement(Spinner, {
                      className:
                        classes === null || classes === void 0
                          ? void 0
                          : classes.spinner,
                    })
                  : buttonText
              ),
              !hideLearnMore &&
                React__default["default"].createElement(
                  Link,
                  {
                    href: linkUrl,
                    className: cn(
                      classes === null || classes === void 0
                        ? void 0
                        : classes.link,
                      ((_g = {}), (_g[styles$7["demo-link"]] = isDisabled), _g)
                    ),
                    rel: "noreferrer",
                    target: "_blank",
                  },
                  learnMoreText
                )
            )
          )
        )
  );
};

var css_248z =
  ".Marketplace-module_wrapper__n6vjC {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n\n.Marketplace-module_wrapper-disabled__lME4S {\n  margin-top: 48px;\n}\n\n.Marketplace-module_loading-wrapper__wRwHw {\n  display: flex;\n  justify-content: center;\n}\n";
var styles = {
  wrapper: "Marketplace-module_wrapper__n6vjC",
  "wrapper-disabled": "Marketplace-module_wrapper-disabled__lME4S",
  "loading-wrapper": "Marketplace-module_loading-wrapper__wRwHw",
};
styleInject(css_248z);

var PRODUCTION_FEED_URL =
  "https://manage.fusebit.io/feed/integrationsFeed.json";
var Marketplace = function (_a) {
  var getIntegrations = _a.getIntegrations,
    className = _a.className,
    classes = _a.classes,
    getCustomBody = _a.getCustomBody,
    hideImages = _a.hideImages,
    hideLearnMore = _a.hideLearnMore,
    hideDescription = _a.hideDescription,
    hideSubtitle = _a.hideSubtitle,
    hideTitle = _a.hideTitle,
    getTileImages = _a.getTileImages,
    installText = _a.installText,
    learnMoreText = _a.learnMoreText,
    getInstallUrl = _a.getInstallUrl,
    onUninstallClick = _a.onUninstallClick,
    onInstallClick = _a.onInstallClick,
    onUninstalled = _a.onUninstalled,
    uninstallText = _a.uninstallText,
    isDemo = _a.isDemo,
    feedUrl = _a.feedUrl;
  var _b = React.useState([]),
    feed = _b[0],
    setFeed = _b[1];
  var _c = React.useState([]),
    integrations = _c[0],
    setIntegrations = _c[1];
  var _d = React.useState(false),
    isLoadingFeed = _d[0],
    setIsLoadingFeed = _d[1];
  var _e = React.useState(false),
    isLoadingIntegrations = _e[0],
    setIsLoadingIntegrations = _e[1];
  var isLoading = isLoadingFeed || isLoadingIntegrations;
  React.useEffect(function () {
    setIsLoadingFeed(true);
    var get = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var res, _a;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 3, 4, 5]);
              return [4 /*yield*/, fetch(feedUrl || PRODUCTION_FEED_URL)];
            case 1:
              res = _b.sent();
              _a = setFeed;
              return [4 /*yield*/, res.json()];
            case 2:
              _a.apply(void 0, [_b.sent()]);
              return [3 /*break*/, 5];
            case 3:
              _b.sent();
              console.warn("There was an error fetching the feed.");
              return [3 /*break*/, 5];
            case 4:
              setIsLoadingFeed(false);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/];
          }
        });
      });
    };
    get();
  }, []);
  React.useEffect(function () {
    setIsLoadingIntegrations(true);
    var get = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, 3, 4]);
              return [4 /*yield*/, getIntegrations()];
            case 1:
              res = _a.sent();
              setIntegrations(res);
              return [3 /*break*/, 4];
            case 2:
              _a.sent();
              console.warn("There was an error fetching the integrations.");
              return [3 /*break*/, 4];
            case 3:
              setIsLoadingIntegrations(false);
              return [7 /*endfinally*/];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    get();
  }, []);
  var uninstalledIntegrations = React.useMemo(
    function () {
      return feed.filter(function (entity) {
        return !integrations.find(function (i) {
          return i.feedId === entity.id;
        });
      });
    },
    [integrations, feed]
  );
  if (isLoading) {
    return React__default["default"].createElement(
      "div",
      { className: cn(styles["loading-wrapper"]) },
      React__default["default"].createElement(Spinner, {
        color: "#F83420",
        className:
          classes === null || classes === void 0 ? void 0 : classes.spinner,
      })
    );
  }
  return React__default["default"].createElement(
    "div",
    { className: cn(styles.marketplace, className) },
    React__default["default"].createElement(
      "div",
      { className: cn(styles.wrapper) },
      integrations.map(function (integration) {
        return React__default["default"].createElement(
          Tile,
          __assign(
            {
              key: integration.integrationId,
              feed: feed,
              classes: classes,
              hideImages: hideImages,
              hideLearnMore: hideLearnMore,
              hideDescription: hideDescription,
              hideSubtitle: hideSubtitle,
              hideTitle: hideTitle,
              getTileImages: getTileImages,
              installText: installText,
              learnMoreText: learnMoreText,
              onInstallClick: onInstallClick,
              onUninstalled: onUninstalled,
              uninstallText: uninstallText,
              getCustomBody: getCustomBody,
              getInstallUrl: getInstallUrl,
              onUninstallClick: onUninstallClick,
            },
            integration
          )
        );
      })
    ),
    isDemo &&
      React__default["default"].createElement(
        "div",
        { className: cn(styles.wrapper, styles["wrapper-disabled"]) },
        uninstalledIntegrations.map(function (entity) {
          return React__default["default"].createElement(Tile, {
            key: entity.id,
            feed: feed,
            getInstallUrl: getInstallUrl,
            onUninstallClick: onUninstallClick,
            getTileImages: getTileImages,
            isInstalled: false,
            integrationId: entity.id,
            feedId: entity.id,
            hideDescription: hideDescription,
            hideSubtitle: hideSubtitle,
            hideTitle: true,
            isDisabled: true,
          });
        })
      )
  );
};
