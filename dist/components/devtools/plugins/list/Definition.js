"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Definition = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../provider/WardProvider");
require("./Definition.css");
var _Provider = require("./Provider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components
// Styles

var Definition = function Definition(_ref) {
  var definitionId = _ref.definitionId,
    selectedPluginId = _ref.selectedPluginId,
    onSelectDefinition = _ref.onSelectDefinition,
    onSelectProvider = _ref.onSelectProvider;
  // Events //

  var handleDefinitionClick = function handleDefinitionClick(event) {
    event.stopPropagation();
    onSelectDefinition(definitionId);
  };
  var handleProviderClick = function handleProviderClick(providerId) {
    onSelectProvider(providerId);
  };

  // Rendering //

  var definition = (0, _WardProvider.useWardDefinition)(definitionId);
  var providers = (0, _WardProvider.useWardProviders)(definitionId);
  if (!definition) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var classes = ['definition-side-entry'];
  if (selectedPluginId === definition.plugin) {
    classes.push('selected');
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classes.join(' '),
    title: definition.name,
    onClick: handleDefinitionClick
  }, definition.name, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "definition-side-entry__entries"
  }, providers.map(function (provider) {
    return /*#__PURE__*/_react["default"].createElement(_Provider.Provider, {
      key: provider.name,
      providerId: provider.name,
      selectedPluginId: selectedPluginId || '',
      onSelect: handleProviderClick
    });
  })));
};
exports.Definition = Definition;