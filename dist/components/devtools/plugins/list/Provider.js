"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../provider/WardProvider");
require("./Provider.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components
// Styles

var Provider = function Provider(_ref) {
  var providerId = _ref.providerId,
    selectedPluginId = _ref.selectedPluginId,
    onSelect = _ref.onSelect;
  // Hooks //

  var provider = (0, _WardProvider.useWardProvider)(providerId);

  // Events //

  var handleClick = function handleClick(event) {
    event.stopPropagation();
    onSelect(providerId);
  };

  // Rendering //

  if (!provider) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var classes = ['provider-side-entry'];
  if (selectedPluginId === provider.plugin) {
    classes.push('selected');
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classes.join(' '),
    title: provider.name,
    onClick: handleClick
  }, provider.name);
};
exports.Provider = Provider;