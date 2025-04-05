"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
require("./PluginProvider.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Styles

var PluginProvider = function PluginProvider(_ref) {
  var providerId = _ref.providerId,
    onSelect = _ref.onSelect;
  // Rendering //

  var provider = (0, _WardProvider.useWardProvider)(providerId);
  if (!provider) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "Provider PROBLEM - ", providerId);
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    onClick: onSelect
  }, provider.name);
};
exports.PluginProvider = PluginProvider;