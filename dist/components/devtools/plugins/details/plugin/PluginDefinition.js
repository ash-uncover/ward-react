"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginDefinition = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
require("./PluginDefinition.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Styles

var PluginDefinition = function PluginDefinition(_ref) {
  var definitionId = _ref.definitionId,
    onSelect = _ref.onSelect;
  // Rendering //

  var definition = (0, _WardProvider.useWardDefinition)(definitionId);
  if (!definition) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "Definition PROBLEM ", definitionId);
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    onClick: onSelect
  }, definition.name);
};
exports.PluginDefinition = PluginDefinition;