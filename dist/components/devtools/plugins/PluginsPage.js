"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WardDevToolsPlugins = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WardProvider = require("../../provider/WardProvider");
var _Definition = require("./list/Definition");
var _Plugin = require("./list/Plugin");
var _Url = require("./list/Url");
require("./PluginsPage.css");
var _PluginDetails = require("./details/plugin/PluginDetails");
var _UrlDetails = require("./details/url/UrlDetails");
var _DefinitionDetails = require("./details/definition/DefinitionDetails");
var _ProviderDetails = require("./details/provider/ProviderDetails");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Hooks
// Components
// Styles
var DetailTypes = {
  NONE: 'NONE',
  URL: 'URL',
  PLUGIN: 'PLUGIN',
  DEFINITION: 'DEFINITION',
  PROVIDER: 'PROVIDER'
};
var WardDevToolsPlugins = function WardDevToolsPlugins(_ref) {
  var style = _ref.style;
  // Hooks //

  var _useState = (0, _react.useState)(DetailTypes.NONE),
    _useState2 = _slicedToArray(_useState, 2),
    detailType = _useState2[0],
    setDetailType = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedUrl = _useState4[0],
    setSelectedUrl = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPlugin = _useState6[0],
    setSelectedPlugin = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDefinition = _useState8[0],
    setSelectedDefinition = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedProvider = _useState10[0],
    setSelectedProvider = _useState10[1];
  var urls = (0, _WardProvider.useWardUrls)();
  var urlsArr = Object.keys(urls);
  var plugins = (0, _WardProvider.useWardPlugins)();
  var pluginsArr = Object.values(plugins);
  var pluginsRoot = (0, _WardProvider.useWardPluginsRoot)();
  var pluginsRootArr = Object.values(pluginsRoot);
  var definitions = (0, _WardProvider.useWardDefinitions)();
  var definitionsArr = Object.values(definitions);

  // Events //

  var handleUrlSelected = function handleUrlSelected(url) {
    var _urls$url;
    var pluginId = (_urls$url = urls[url]) === null || _urls$url === void 0 || (_urls$url = _urls$url.data) === null || _urls$url === void 0 ? void 0 : _urls$url.name;
    setSelectedUrl(url);
    setSelectedPlugin(pluginId || '');
    setSelectedDefinition('');
    setSelectedProvider('');
    setDetailType(DetailTypes.URL);
  };
  var handlePluginSelected = function handlePluginSelected(pluginId) {
    setSelectedUrl('');
    setSelectedPlugin(pluginId);
    setSelectedDefinition('');
    setSelectedProvider('');
    setDetailType(DetailTypes.PLUGIN);
  };
  var handleDefinitionSelected = function handleDefinitionSelected(definitionId) {
    var definition = definitionsArr.find(function (d) {
      return d.name === definitionId;
    });
    setSelectedUrl('');
    setSelectedPlugin((definition === null || definition === void 0 ? void 0 : definition.plugin) || '');
    setSelectedDefinition('');
    setSelectedDefinition(definitionId);
    setDetailType(DetailTypes.DEFINITION);
  };
  var handleProviderSelected = function handleProviderSelected(providerId) {
    var plugin = pluginsArr.find(function (p) {
      return Object.values(p.provides).some(function (prov) {
        return "".concat(prov.define, "/").concat(prov.name) === providerId;
      });
    });
    setSelectedUrl('');
    setSelectedPlugin((plugin === null || plugin === void 0 ? void 0 : plugin.name) || '');
    setSelectedDefinition('');
    setSelectedProvider(providerId);
    setDetailType(DetailTypes.PROVIDER);
  };

  // Rendering //

  var renderDetails = function renderDetails() {
    switch (detailType) {
      case DetailTypes.URL:
        {
          return /*#__PURE__*/_react["default"].createElement(_UrlDetails.UrlDetails, {
            className: "plugins-page__details",
            url: selectedUrl
          });
        }
      case DetailTypes.PLUGIN:
        {
          return /*#__PURE__*/_react["default"].createElement(_PluginDetails.PluginDetails, {
            className: "plugins-page__details",
            pluginId: selectedPlugin,
            onSelectUrl: handleUrlSelected,
            onSelectDefinition: handleDefinitionSelected,
            onSelectProvider: handleProviderSelected
          });
        }
      case DetailTypes.DEFINITION:
        {
          return /*#__PURE__*/_react["default"].createElement(_DefinitionDetails.DefinitionDetails, {
            className: "plugins-page__details",
            definitionId: selectedDefinition
          });
        }
      case DetailTypes.PROVIDER:
        {
          return /*#__PURE__*/_react["default"].createElement(_ProviderDetails.ProviderDetails, {
            className: "plugins-page__details",
            providerId: selectedProvider
          });
        }
      case DetailTypes.NONE:
      default:
        {
          return null;
        }
    }
  };
  var classes = ['plugins-page'];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' '),
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "plugins-page__list"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "URLs (".concat(urlsArr.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      padding: 0
    }
  }, urlsArr.map(function (url) {
    return /*#__PURE__*/_react["default"].createElement(_Url.Url, {
      key: url,
      url: url,
      selectedPluginId: selectedPlugin,
      onSelect: handleUrlSelected
    });
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Plugins (".concat(pluginsRootArr.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      padding: 0
    }
  }, pluginsRootArr.map(function (plugin) {
    return /*#__PURE__*/_react["default"].createElement(_Plugin.Plugin, {
      key: plugin.name,
      pluginId: plugin.name,
      selectedPluginId: selectedPlugin,
      onSelect: handlePluginSelected
    });
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Definitions (".concat(definitionsArr.length, ")")), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      padding: 0
    }
  }, definitionsArr.map(function (definition) {
    return /*#__PURE__*/_react["default"].createElement(_Definition.Definition, {
      key: definition.name,
      selectedPluginId: selectedPlugin,
      definitionId: definition.name,
      onSelectDefinition: handleDefinitionSelected,
      onSelectProvider: handleProviderSelected
    });
  }))), detailType !== DetailTypes.NONE ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "plugins-page__resizer"
  }) : null, renderDetails());
};
exports.WardDevToolsPlugins = WardDevToolsPlugins;