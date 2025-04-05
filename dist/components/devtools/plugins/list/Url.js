"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Url = void 0;
var _react = _interopRequireDefault(require("react"));
var _WardProvider = require("../../../provider/WardProvider");
require("./Url.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Hooks

// Components
// Styles

var Url = function Url(_ref) {
  var _urlData$data;
  var url = _ref.url,
    selectedPluginId = _ref.selectedPluginId,
    onSelect = _ref.onSelect;
  // Hooks //

  var urlData = (0, _WardProvider.useWardUrl)(url);

  // Events //

  var handleClick = function handleClick(event) {
    event.stopPropagation();
    onSelect(url);
  };

  // Rendering //

  if (!urlData) {
    return /*#__PURE__*/_react["default"].createElement("li", null, "PROBLEM");
  }
  var classes = ['url-side-entry'];
  if (selectedPluginId === ((_urlData$data = urlData.data) === null || _urlData$data === void 0 ? void 0 : _urlData$data.name)) {
    classes.push('selected');
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classes.join(' '),
    title: url,
    onClick: handleClick
  }, url);
};
exports.Url = Url;