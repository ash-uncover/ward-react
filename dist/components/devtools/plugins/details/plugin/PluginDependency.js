"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginDependency = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
require("./PluginDependency.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Styles

var PluginDependency = function PluginDependency(_ref) {
  var pluginId = _ref.pluginId,
    onSelect = _ref.onSelect;
  // Rendering //

  var plugin = (0, _WardProvider.useWardPlugin)(pluginId);
  if (!plugin) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "Dependency PROBLEM ", pluginId);
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    onClick: onSelect
  }, plugin.name);
};
exports.PluginDependency = PluginDependency;