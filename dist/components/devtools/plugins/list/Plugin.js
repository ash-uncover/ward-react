"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../provider/WardProvider");
require("./Plugin.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Styles

var Plugin = function Plugin(_ref) {
  var pluginId = _ref.pluginId,
    selectedPluginId = _ref.selectedPluginId,
    onSelect = _ref.onSelect;
  // Events //

  var handleClick = function handleClick(event) {
    event.stopPropagation();
    onSelect(pluginId);
  };

  // Rendering //

  var plugin = (0, _WardProvider.useWardPlugin)(pluginId);
  var plugins = (0, _WardProvider.useWardPlugins)();
  if (!plugin) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var classes = ['plugin-side-entry'];
  if (selectedPluginId === pluginId) {
    classes.push('selected');
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classes.join(' '),
    title: plugin.url,
    onClick: handleClick
  }, plugin.name, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "plugin-side-entry__entries"
  }, plugin.dependencies.map(function (dependency) {
    var _Object$values$find;
    var dependencyName = (_Object$values$find = Object.values(plugins).find(function (p) {
      return p.loadUrl === dependency;
    })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.name;
    return /*#__PURE__*/_react["default"].createElement(Plugin, {
      key: dependency,
      selectedPluginId: selectedPluginId,
      pluginId: dependencyName || '',
      onSelect: onSelect
    });
  })));
};
exports.Plugin = Plugin;