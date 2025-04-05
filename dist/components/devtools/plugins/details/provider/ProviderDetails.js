"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProviderDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
require("./ProviderDetails.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components
// Styles

var ProviderDetails = function ProviderDetails(_ref) {
  var className = _ref.className,
    providerId = _ref.providerId;
  // Hooks //

  var providerData = (0, _WardProvider.useWardProvider)(providerId);

  // Events //

  // Rendering //

  if (!providerData) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var renderAttributes = function renderAttributes() {
    return providerData.getAttributes().map(function (attribute) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: attribute.name
      }, attribute.name, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "value: ", attribute.value), /*#__PURE__*/_react["default"].createElement("li", null, "type: ", attribute.type), /*#__PURE__*/_react["default"].createElement("li", null, "mandatory: ", String(attribute.mandatory)), /*#__PURE__*/_react["default"].createElement("li", null, "array: ", String(attribute.array))));
    });
  };
  var renderElements = function renderElements() {
    return providerData.getElements().map(function (element) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: element.name
      }, element.name, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "type: ", element.type), /*#__PURE__*/_react["default"].createElement("li", null, "url: ", String(element.url)), /*#__PURE__*/_react["default"].createElement("li", null, "element: ", String(element.element))));
    });
  };
  var classes = ['provider-details'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Provider details"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plugin__info"
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Name:"), /*#__PURE__*/_react["default"].createElement("span", null, providerData.name)), /*#__PURE__*/_react["default"].createElement("h3", null, "Attributes (".concat(providerData.attributes.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderAttributes()), /*#__PURE__*/_react["default"].createElement("h3", null, "Elements (".concat(providerData.elements.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderElements()));
};
exports.ProviderDetails = ProviderDetails;