"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefinitionDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../../provider/WardProvider");
require("./DefinitionDetails.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components
// Styles

var DefinitionDetails = function DefinitionDetails(_ref) {
  var className = _ref.className,
    definitionId = _ref.definitionId;
  // Hooks //

  var definitionData = (0, _WardProvider.useWardDefinition)(definitionId);

  // Events //

  // Rendering //

  if (!definitionData) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "def PROBLEM - ", definitionId);
  }
  var renderProperties = function renderProperties() {
    return definitionData.properties.map(function (property) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: property.name
      }, property.name, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "type: ", property.type), /*#__PURE__*/_react["default"].createElement("li", null, "mandatory: ", String(property.mandatory)), /*#__PURE__*/_react["default"].createElement("li", null, "array: ", String(property.array))));
    });
  };
  var renderAttributes = function renderAttributes() {
    return definitionData.attributes.map(function (attribute) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: attribute.name
      }, attribute.name, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "type: ", attribute.type), /*#__PURE__*/_react["default"].createElement("li", null, "mandatory: ", String(attribute.mandatory)), /*#__PURE__*/_react["default"].createElement("li", null, "array: ", String(attribute.array))));
    });
  };
  var renderElements = function renderElements() {
    return definitionData.elements.map(function (element) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: element.name
      }, element.name);
    });
  };
  var classes = ['definition-details'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Definition Details"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plugin__info"
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Name:"), /*#__PURE__*/_react["default"].createElement("span", null, definitionData.name)), /*#__PURE__*/_react["default"].createElement("h3", null, "Properties (".concat(definitionData.properties.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderProperties()), /*#__PURE__*/_react["default"].createElement("h3", null, "Attributes (".concat(definitionData.attributes.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderAttributes()), /*#__PURE__*/_react["default"].createElement("h3", null, "Elements (".concat(definitionData.elements.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", null, renderElements()));
};
exports.DefinitionDetails = DefinitionDetails;