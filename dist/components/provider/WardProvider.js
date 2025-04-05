"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWardUrls = exports.useWardUrl = exports.useWardServices = exports.useWardService = exports.useWardProviders = exports.useWardProvider = exports.useWardPluginsRoot = exports.useWardPlugins = exports.useWardPlugin = exports.useWardLoaded = exports.useWardDispatchers = exports.useWardDefinitions = exports.useWardDefinition = exports.WardProvider = exports.WardContext = void 0;
var _ward = require("@uncover/ward");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WardContext = exports.WardContext = /*#__PURE__*/(0, _react.createContext)({
  plugin: '',
  loaded: false,
  urls: {},
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
  services: {},
  dispatchers: []
});
var WardProvider = exports.WardProvider = function WardProvider(_ref) {
  var plugin = _ref.plugin,
    children = _ref.children;
  // Hooks //

  var _useState = (0, _react.useState)({
      plugin: plugin,
      loaded: false,
      urls: {},
      roots: {},
      plugins: {},
      definitions: {},
      providers: {},
      services: {},
      dispatchers: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0, _react.useEffect)(function () {
    var eventService = _ward.Ward.addService(plugin);
    _ward.Ward.loadPlugin(plugin);
    var cb = function cb() {
      return setData(_objectSpread({
        plugin: plugin,
        loaded: true
      }, _ward.Ward.data));
    };
    _ward.Ward.register(cb);
    return function () {
      _ward.Ward.unregister(cb);
      eventService.terminate();
    };
  }, [plugin]);

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement(WardContext.Provider, {
    value: data
  }, children);
};
var useWardLoaded = exports.useWardLoaded = function useWardLoaded() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.loaded;
};
var useWardUrls = exports.useWardUrls = function useWardUrls() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.urls;
};
var useWardUrl = exports.useWardUrl = function useWardUrl(url) {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.urls[url];
};
var useWardPlugins = exports.useWardPlugins = function useWardPlugins() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.plugins;
};
var useWardPlugin = exports.useWardPlugin = function useWardPlugin(pluginId) {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.plugins[pluginId];
};
var useWardPluginsRoot = exports.useWardPluginsRoot = function useWardPluginsRoot() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.roots;
};
var useWardDefinitions = exports.useWardDefinitions = function useWardDefinitions() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.definitions;
};
var useWardDefinition = exports.useWardDefinition = function useWardDefinition(definitionId) {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.definitions[definitionId];
};
var useWardProviders = exports.useWardProviders = function useWardProviders(definitionId) {
  var wardContext = (0, _react.useContext)(WardContext);
  return Object.values(wardContext.providers).filter(function (provider) {
    return provider.definition === definitionId;
  });
};
var useWardProvider = exports.useWardProvider = function useWardProvider(providerId) {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.providers[providerId];
};
var useWardServices = exports.useWardServices = function useWardServices() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.services;
};
var useWardService = exports.useWardService = function useWardService(id, handleMessage) {
  var realId = id;
  var realHandler = handleMessage;
  var wardContext = (0, _react.useContext)(WardContext);
  if (typeof id !== 'string') {
    realId = wardContext.plugin;
    realHandler = handleMessage;
  }
  var service = wardContext.services[realId];
  if (!service) {
    service = _ward.Ward.addService(realId);
    wardContext.services[realId] = service;
  }
  (0, _react.useEffect)(function () {
    if (service && realHandler) {
      service.addHandler(realHandler);
    }
    return function () {
      if (service && realHandler) {
        service.removeHandler(realHandler);
      }
    };
  }, []);
  return {
    dispatchEvent: function dispatchEvent(message) {
      return service.sendMessage(message);
    }
  };
};
var useWardDispatchers = exports.useWardDispatchers = function useWardDispatchers() {
  var wardContext = (0, _react.useContext)(WardContext);
  return wardContext.dispatchers;
};