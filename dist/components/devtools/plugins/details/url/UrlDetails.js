"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
require("./UrlDetails.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components
// Styles

var UrlDetails = function UrlDetails(_ref) {
  var className = _ref.className,
    url = _ref.url;
  // Hooks //

  var urlData = (0, _WardProvider.useWardUrl)(url);

  // Events //

  // Rendering //

  if (!urlData) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var classes = ['url-details'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "URL Details"), /*#__PURE__*/_react["default"].createElement("p", null, url), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify(urlData.data, null, 2)));
};
exports.UrlDetails = UrlDetails;