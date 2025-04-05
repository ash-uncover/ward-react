"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
var _PluginProvider = require("./PluginProvider");
var _PluginDefinition = require("./PluginDefinition");
var _PluginDependency = require("./PluginDependency");
require("./PluginDetails.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components

// Styles

var PluginDetails = function PluginDetails(_ref) {
  var className = _ref.className,
    pluginId = _ref.pluginId,
    onSelectUrl = _ref.onSelectUrl,
    onSelectDefinition = _ref.onSelectDefinition,
    onSelectProvider = _ref.onSelectProvider;
  // Hooks //

  var pluginData = (0, _WardProvider.useWardPlugin)(pluginId);
  var plugins = (0, _WardProvider.useWardPlugins)();

  // Events //

  // Rendering //

  if (!pluginData) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var renderDependencies = function renderDependencies() {
    return pluginData.dependencies.map(function (dependency) {
      var _Object$values$find;
      var dependencyName = (_Object$values$find = Object.values(plugins).find(function (p) {
        return p.loadUrl === dependency;
      })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.name;
      return /*#__PURE__*/_react["default"].createElement(_PluginDependency.PluginDependency, {
        key: dependencyName,
        pluginId: dependencyName || '',
        onSelect: function onSelect() {
          return onSelectUrl(dependency);
        }
      });
    });
  };
  var renderDefinitions = function renderDefinitions() {
    return pluginData.defines.map(function (define) {
      return /*#__PURE__*/_react["default"].createElement(_PluginDefinition.PluginDefinition, {
        key: define.name,
        definitionId: define.name,
        onSelect: function onSelect() {
          return onSelectDefinition(define.name);
        }
      });
    });
  };
  var renderProviders = function renderProviders() {
    return pluginData.provides.map(function (provide) {
      return /*#__PURE__*/_react["default"].createElement(_PluginProvider.PluginProvider, {
        key: provide.name,
        providerId: "".concat(provide.define, "/").concat(provide.name),
        onSelect: function onSelect() {
          return onSelectProvider("".concat(provide.define, "/").concat(provide.name));
        }
      });
    });
  };
  var classes = ['plugin-details'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Plugin details"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plugin__info"
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Name:"), /*#__PURE__*/_react["default"].createElement("span", null, pluginData.name)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plugin__info"
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Url:"), /*#__PURE__*/_react["default"].createElement("span", null, pluginData.url)), /*#__PURE__*/_react["default"].createElement("h3", null, "Dependencies (".concat(pluginData.dependencies.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderDependencies()), /*#__PURE__*/_react["default"].createElement("h3", null, "Defines (".concat(pluginData.defines.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderDefinitions()), /*#__PURE__*/_react["default"].createElement("h3", null, "Provides (".concat(pluginData.provides.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderProviders()));
};
exports.PluginDetails = PluginDetails;