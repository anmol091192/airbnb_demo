module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/components/AppBar.js":
/*!**************************************!*\
  !*** ./modules/components/AppBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\AppBar.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.common.white
    }
  };
};

function AppBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    elevation: 0,
    position: "static"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

AppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(AppBar));

/***/ }),

/***/ "./modules/components/Button.js":
/*!**************************************!*\
  !*** ./modules/components/Button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\Button.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var styles = function styles(theme) {
  return {
    root: {
      borderRadius: 0,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamilySecondary,
      padding: "".concat(theme.spacing.unit * 2 - 1, "px ").concat(theme.spacing.unit * 4, "px"),
      fontSize: theme.typography.pxToRem(14),
      boxShadow: 'none',
      '&:active, &:focus': {
        boxShadow: 'none'
      }
    },
    sizeSmall: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 3, "px"),
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: "".concat(theme.spacing.unit * 3 - 3, "px ").concat(theme.spacing.unit * 6, "px"),
      fontSize: theme.typography.pxToRem(16)
    }
  };
};

function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Button));

/***/ }),

/***/ "./modules/components/LayoutBody.js":
/*!******************************************!*\
  !*** ./modules/components/LayoutBody.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils/helpers */ "@material-ui/core/utils/helpers");
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\LayoutBody.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function round(value) {
  return Math.round(value * 1e4) / 1e4;
}

var styles = function styles(theme) {
  var _widthLarge, _widthXlarge;

  return {
    margin: {
      margin: theme.spacing.unit * 7
    },
    marginBottom: {
      marginBottom: theme.spacing.unit * 12
    },
    widthSmall: _defineProperty({
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(660 + theme.spacing.unit * 6), {
      width: 660,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    widthMedium: _defineProperty({
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(850 + theme.spacing.unit * 6), {
      width: 850,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    widthLarge: (_widthLarge = {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _defineProperty(_widthLarge, theme.breakpoints.up('md'), {
      width: 880,
      marginLeft: 'auto',
      marginRight: 'auto'
    }), _defineProperty(_widthLarge, theme.breakpoints.up(round(880 / 0.7777)), {
      width: '77.7777%'
    }), _defineProperty(_widthLarge, theme.breakpoints.up(round(1400 / 0.7777)), {
      width: 1400
    }), _widthLarge),
    widthXlarge: (_widthXlarge = {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _defineProperty(_widthXlarge, theme.breakpoints.up('md'), {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }), _defineProperty(_widthXlarge, theme.breakpoints.up(round(900 / 0.9)), {
      width: '90%'
    }), _defineProperty(_widthXlarge, theme.breakpoints.up(round(1800 / 0.9)), {
      width: 1800
    }), _widthXlarge),
    widthFull: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    }
  };
};

function LayoutBody(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      Component = props.component,
      fullHeight = props.fullHeight,
      fullWidth = props.fullWidth,
      margin = props.margin,
      marginBottom = props.marginBottom,
      style = props.style,
      width = props.width,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "fullHeight", "fullWidth", "margin", "marginBottom", "style", "width"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, (_classNames = {}, _defineProperty(_classNames, classes["width".concat(Object(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(width))], !fullWidth), _defineProperty(_classNames, classes.fullHeight, fullHeight), _defineProperty(_classNames, classes.margin, margin), _defineProperty(_classNames, classes.marginBottom, marginBottom), _classNames), className),
    style: style
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), children);
}

LayoutBody.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['small', 'medium', 'large', 'xlarge', 'full'])
};
LayoutBody.defaultProps = {
  component: 'div',
  fullHeight: false,
  fullWidth: false,
  margin: false,
  marginBottom: false,
  width: 'medium'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(LayoutBody));

/***/ }),

/***/ "./modules/components/Paper.js":
/*!*************************************!*\
  !*** ./modules/components/Paper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils/helpers */ "@material-ui/core/utils/helpers");
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\Paper.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var styles = function styles(theme) {
  return {
    backgroundLight: {
      backgroundColor: theme.palette.primary.light
    },
    backgroundMain: {
      backgroundColor: theme.palette.primary.main
    },
    backgroundDark: {
      backgroundColor: theme.palette.primary.dark
    },
    padding: {
      padding: theme.spacing.unit
    }
  };
};

function Paper(props) {
  var background = props.background,
      classes = props.classes,
      className = props.className,
      padding = props.padding,
      other = _objectWithoutProperties(props, ["background", "classes", "className", "padding"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    elevation: 0,
    square: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes["background".concat(Object(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(background))], _defineProperty({}, classes.padding, padding), className)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
}

Paper.propTypes = {
  background: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['light', 'main', 'dark']),
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Paper.defaultProps = {
  background: 'light',
  padding: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Paper));

/***/ }),

/***/ "./modules/components/TextField.js":
/*!*****************************************!*\
  !*** ./modules/components/TextField.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils/helpers */ "@material-ui/core/utils/helpers");
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\TextField.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var styles = function styles(theme) {
  return {
    root: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3
      }
    },
    input: {
      minWidth: theme.spacing.unit * 6,
      backgroundColor: theme.palette.common.white,
      '&$disabled': {
        backgroundColor: theme.palette.divider
      }
    },
    inputBorder: {
      border: '1px solid #e9ddd0',
      '&:focus': {
        borderColor: theme.palette.secondary.main
      }
    },
    disabled: {},
    inputSizeSmall: {
      fontSize: 14,
      padding: theme.spacing.unit,
      width: "calc(100% - ".concat(theme.spacing.unit * 2, "px)")
    },
    inputSizeMedium: {
      fontSize: 16,
      padding: theme.spacing.unit * 2,
      width: "calc(100% - ".concat(theme.spacing.unit * 4, "px)")
    },
    inputSizeLarge: {
      fontSize: 18,
      padding: 22,
      width: "calc(100% - ".concat(22 * 2, "px)")
    },
    inputSizeXlarge: {
      fontSize: 20,
      padding: 25,
      width: "calc(100% - ".concat(25 * 2, "px)")
    },
    formLabel: {
      fontSize: 18
    },
    select: {
      height: 'auto',
      borderRadius: 0
    },
    selectIcon: {
      top: '50%',
      marginTop: -12
    }
  };
};

function TextField(props) {
  var classes = props.classes,
      _props$InputProps = props.InputProps;
  _props$InputProps = _props$InputProps === void 0 ? {} : _props$InputProps;
  var _props$InputProps$cla = _props$InputProps.classes;
  _props$InputProps$cla = _props$InputProps$cla === void 0 ? {} : _props$InputProps$cla;

  var InputPropsClassesInput = _props$InputProps$cla.input,
      InputPropsClassesOther = _objectWithoutProperties(_props$InputProps$cla, ["input"]),
      InputPropsOther = _objectWithoutProperties(_props$InputProps, ["classes"]),
      InputLabelProps = props.InputLabelProps,
      noBorder = props.noBorder,
      size = props.size,
      SelectProps = props.SelectProps,
      other = _objectWithoutProperties(props, ["classes", "InputProps", "InputLabelProps", "noBorder", "size", "SelectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    InputProps: _objectSpread({
      disableUnderline: true,
      classes: _objectSpread({
        root: classes.root,
        input: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.input, classes["inputSize".concat(Object(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(size))], _defineProperty({}, classes.inputBorder, !noBorder), InputPropsClassesInput),
        disabled: classes.disabled
      }, InputPropsClassesOther)
    }, InputPropsOther),
    InputLabelProps: _objectSpread({}, InputLabelProps, {
      shrink: true,
      className: classes.formLabel
    }),
    SelectProps: _objectSpread({}, SelectProps, {
      classes: {
        select: classes.select,
        icon: classes.selectIcon
      }
    })
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }));
}

TextField.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  InputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  InputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  SelectProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['small', 'medium', 'large', 'xlarge'])
};
TextField.defaultProps = {
  noBorder: false,
  size: 'medium'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(TextField));

/***/ }),

/***/ "./modules/components/Toolbar.js":
/*!***************************************!*\
  !*** ./modules/components/Toolbar.js ***!
  \***************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\Toolbar.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var styles = function styles(theme) {
  return {
    root: _defineProperty({
      height: 64
    }, theme.breakpoints.up('sm'), {
      height: 70
    })
  };
};

function Toolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Toolbar));

/***/ }),

/***/ "./modules/components/Typography.js":
/*!******************************************!*\
  !*** ./modules/components/Typography.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/utils/helpers */ "@material-ui/core/utils/helpers");
/* harmony import */ var _material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\components\\Typography.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var styles = function styles(theme) {
  return {
    markedH2Center: {
      height: 4,
      width: 73,
      display: 'block',
      margin: "".concat(theme.spacing.unit, "px auto 0"),
      backgroundColor: theme.palette.secondary.main
    },
    markedH3Center: {
      height: 4,
      width: 55,
      display: 'block',
      margin: "".concat(theme.spacing.unit, "px auto 0"),
      backgroundColor: theme.palette.secondary.main
    },
    markedH4Center: {
      height: 4,
      width: 55,
      display: 'block',
      margin: "".concat(theme.spacing.unit, "px auto 0"),
      backgroundColor: theme.palette.secondary.main
    },
    markedH6Left: {
      height: 2,
      width: 28,
      display: 'block',
      marginTop: theme.spacing.unit / 2,
      background: 'currentColor'
    }
  };
};

var headlineMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3'
};

function Typography(props) {
  var children = props.children,
      classes = props.classes,
      marked = props.marked,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["children", "classes", "marked", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    headlineMapping: headlineMapping,
    variant: variant
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), children, marked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes["marked".concat(Object(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(variant) + Object(_material_ui_core_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(marked))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : null);
}

Typography.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  marked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([false, 'center', 'left']),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Typography.defaultProps = {
  marked: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Typography));

/***/ }),

/***/ "./modules/form/FormButton.js":
/*!************************************!*\
  !*** ./modules/form/FormButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defer */ "./modules/form/defer.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./modules/components/Button.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\form\\FormButton.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormButton(props) {
  var disabled = props.disabled,
      mounted = props.mounted,
      others = _objectWithoutProperties(props, ["disabled", "mounted"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    disabled: !mounted || disabled,
    type: "submit",
    variant: "contained"
  }, others, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

FormButton.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  mounted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_defer__WEBPACK_IMPORTED_MODULE_2__["default"])(FormButton));

/***/ }),

/***/ "./modules/form/FormFeedback.js":
/*!**************************************!*\
  !*** ./modules/form/FormFeedback.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\form\\FormFeedback.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing.unit * 2
    },
    error: {
      backgroundColor: theme.palette.error.xLight,
      color: theme.palette.error.dark
    },
    success: {
      backgroundColor: theme.palette.success.xLight,
      color: theme.palette.success.dark
    }
  };
};

function FormFeedback(props) {
  var _classNames;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.root, (_classNames = {}, _defineProperty(_classNames, props.classes.error, props.error), _defineProperty(_classNames, props.classes.success, props.success), _classNames), props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.children));
}

FormFeedback.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(FormFeedback));

/***/ }),

/***/ "./modules/form/RFTextField.js":
/*!*************************************!*\
  !*** ./modules/form/RFTextField.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TextField */ "./modules/components/TextField.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\form\\RFTextField.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function RFTextField(props) {
  var autoComplete = props.autoComplete,
      input = props.input,
      InputProps = props.InputProps,
      _props$meta = props.meta,
      touched = _props$meta.touched,
      error = _props$meta.error,
      submitError = _props$meta.submitError,
      other = _objectWithoutProperties(props, ["autoComplete", "input", "InputProps", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    error: Boolean(touched && (error || submitError))
  }, input, other, {
    InputProps: _objectSpread({
      inputProps: {
        autoComplete: autoComplete
      }
    }, InputProps),
    helperText: touched ? error || submitError : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

RFTextField.propTypes = {
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  input: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  InputProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    touched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RFTextField);

/***/ }),

/***/ "./modules/form/defer.js":
/*!*******************************!*\
  !*** ./modules/form/defer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\form\\defer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function defer(Component) {
  var Defer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Defer, _React$Component);

    function Defer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Defer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Defer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        mounted: false
      });

      return _this;
    }

    _createClass(Defer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          mounted: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
          mounted: this.state.mounted
        }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }));
      }
    }]);

    return Defer;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Defer;
}

/* harmony default export */ __webpack_exports__["default"] = (defer);

/***/ }),

/***/ "./modules/form/validation.js":
/*!************************************!*\
  !*** ./modules/form/validation.js ***!
  \************************************/
/*! exports provided: email, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator/lib/isEmail */ "validator/lib/isEmail");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function email(value) {
  return value && !validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default()(value.trim()) ? 'Invalid email' : null;
}

function isDirty(value) {
  return value || value === 0;
}

function required(requiredFields, values) {
  return requiredFields.reduce(function (fields, field) {
    return _objectSpread({}, fields, isDirty(values[field]) ? undefined : _defineProperty({}, field, 'Required'));
  }, {});
}

/***/ }),

/***/ "./modules/next/Link.js":
/*!******************************!*\
  !*** ./modules/next/Link.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/compose */ "recompose/compose");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\next\\Link.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var styles = function styles(theme) {
  return {
    root: {
      textDecoration: 'inherit',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    default: {
      color: 'inherit'
    },
    underline: {
      color: 'inherit',
      textDecoration: 'underline'
    },
    primary: {
      color: theme.palette.primary.main
    },
    secondary: {
      color: theme.palette.secondary.main
    },
    button: {
      '&:hover': {
        textDecoration: 'inherit'
      }
    },
    active: {}
  };
};

function Link(props) {
  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      ComponentProp = props.component,
      href = props.href,
      params = props.params,
      prefetch = props.prefetch,
      router = props.router,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "href", "params", "prefetch", "router", "variant"]);

  var Component;
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, _defineProperty({}, classes[variant], variant !== 'inherit'), classNameProp);
  var more;
  var children = childrenProp;

  if (ComponentProp) {
    Component = ComponentProp;
    more = _objectSpread({
      className: className
    }, other);
  } else if (href) {
    Component = next_link__WEBPACK_IMPORTED_MODULE_4___default.a;
    more = _objectSpread({
      href: href
    }, params, {
      prefetch: prefetch
    });
    children = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _defineProperty({}, classes.active, href === router.pathname))
    }, other, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), children);
  } else {
    Component = 'a';
    more = _objectSpread({}, other, {
      className: className
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, more, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), children);
}

Link.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'underline', 'primary', 'secondary', 'button', 'inherit'])
};
Link.defaultProps = {
  variant: 'primary'
};
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_3___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles), next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Link));

/***/ }),

/***/ "./modules/theme.js":
/*!**************************!*\
  !*** ./modules/theme.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var rawTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "rgba(212, 204, 204, 1)",
      default: "rgba(242, 242, 238, 1)"
    },
    primary: {
      light: "rgba(210, 212, 208, 1)",
      main: "rgba(104, 115, 115, 1)",
      dark: "rgba(57, 59, 55, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(158, 164, 150, 1)",
      main: "rgba(32, 59, 2, 1)",
      dark: "rgba(127, 57, 46, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "rgba(228, 88, 88, 1)",
      main: "rgba(178, 36, 52, 1)",
      dark: "rgba(102, 12, 12, 1)",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    success: {
      xLight: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_1___default.a[50],
      dark: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_1___default.a[700]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    // Work Sans
    fontWeightRegular: 400,
    // Work Sans
    fontWeightMedium: 700,
    // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
    useNextVariants: true
  }
});
var fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase'
};

var theme = _objectSpread({}, rawTheme, {
  palette: _objectSpread({}, rawTheme.palette, {
    background: _objectSpread({}, rawTheme.palette.background, {
      default: rawTheme.palette.common.white,
      placeholder: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2___default.a[200]
    })
  }),
  typography: _objectSpread({}, rawTheme.typography, {
    fontHeader: fontHeader,
    h1: _objectSpread({}, rawTheme.typography.h1, fontHeader, {
      letterSpacing: 0,
      fontSize: 60
    }),
    h2: _objectSpread({}, rawTheme.typography.h2, fontHeader, {
      fontSize: 48
    }),
    h3: _objectSpread({}, rawTheme.typography.h3, fontHeader, {
      fontSize: 42
    }),
    h4: _objectSpread({}, rawTheme.typography.h4, fontHeader, {
      fontSize: 36
    }),
    h5: _objectSpread({}, rawTheme.typography.h5, {
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    }),
    h6: _objectSpread({}, rawTheme.typography.h6, fontHeader, {
      fontSize: 18
    }),
    subtitle1: _objectSpread({}, rawTheme.typography.subtitle1, {
      fontSize: 18
    }),
    body1: _objectSpread({}, rawTheme.typography.body2, {
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    }),
    body2: _objectSpread({}, rawTheme.typography.body1, {
      fontSize: 14
    })
  })
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./modules/views/AppAppBar.js":
/*!************************************!*\
  !*** ./modules/views/AppAppBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppBar */ "./modules/components/AppBar.js");
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Toolbar */ "./modules/components/Toolbar.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _next_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../next/Link */ "./modules/next/Link.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\views\\AppAppBar.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var styles = function styles(theme) {
  return {
    title: {
      fontSize: 28
    },
    placeholder: Object(_components_Toolbar__WEBPACK_IMPORTED_MODULE_5__["styles"])(theme).root,
    toolbar: {
      justifyContent: 'space-between'
    },
    left: {
      flex: 1
    },
    leftLinkActive: {
      color: theme.palette.common.white
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing.unit * 3
    },
    linkSecondary: {
      color: theme.palette.secondary.main
    }
  };
};

function AppAppBar(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    color: "inherit",
    className: classes.title,
    component: function component(linkProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_next_Link__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, linkProps, {
        href: "/index",
        variant: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, 'Airbnb'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    variant: "h6",
    className: classes.rightLink,
    component: function component(linkProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_next_Link__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, linkProps, {
        href: "",
        variant: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, 'Become a host'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    variant: "h6",
    className: classes.rightLink,
    component: function component(linkProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_next_Link__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, linkProps, {
        href: "",
        variant: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, 'help'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.rightLink),
    component: function component(linkProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_next_Link__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, linkProps, {
        href: "/SignUp",
        variant: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, 'Sign Up'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    variant: "h6",
    className: classes.rightLink,
    component: function component(linkProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_next_Link__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, linkProps, {
        href: "/LogIn",
        variant: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, 'Log In')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }));
}

AppAppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(AppAppBar));

/***/ }),

/***/ "./modules/views/AppForm.js":
/*!**********************************!*\
  !*** ./modules/views/AppForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LayoutBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LayoutBody */ "./modules/components/LayoutBody.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Paper */ "./modules/components/Paper.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\views\\AppForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
      backgroundRepeat: 'no-repeat'
    },
    paper: _defineProperty({
      padding: "".concat(theme.spacing.unit * 4, "px ").concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('md'), {
      padding: "".concat(theme.spacing.unit * 10, "px ").concat(theme.spacing.unit * 8, "px")
    })
  };
};

function AppForm(props) {
  var children = props.children,
      classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LayoutBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    margin: true,
    marginBottom: true,
    width: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children)));
}

AppForm.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(AppForm));

/***/ }),

/***/ "./modules/views/SearchWindow.js":
/*!***************************************!*\
  !*** ./modules/views/SearchWindow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _views_AppForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/AppForm */ "./modules/views/AppForm.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/validation */ "./modules/form/validation.js");
/* harmony import */ var _form_RFTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/RFTextField */ "./modules/form/RFTextField.js");
/* harmony import */ var _form_FormButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/FormButton */ "./modules/form/FormButton.js");
/* harmony import */ var _form_FormFeedback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form/FormFeedback */ "./modules/form/FormFeedback.js");
/* harmony import */ var _next_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../next/Link */ "./modules/next/Link.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\views\\SearchWindow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var styles = function styles(theme) {
  return {
    box: {
      position: 'absolute',
      left: 550,
      top: 150,
      borderRadius: 50
    }
  };
};

var SearchWindow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchWindow, _React$Component);

  function SearchWindow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchWindow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchWindow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      sent: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validate", function (values) {
      var errors = Object(_form_validation__WEBPACK_IMPORTED_MODULE_8__["required"])(['firstName', 'lastName', 'email', 'password'], values, _this.props);

      if (!errors.email) {
        var emailError = Object(_form_validation__WEBPACK_IMPORTED_MODULE_8__["email"])(values.email, values, _this.props);

        if (emailError) {
          errors.email = Object(_form_validation__WEBPACK_IMPORTED_MODULE_8__["email"])(values.email, values, _this.props);
        }
      }

      return errors;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {});

    return _this;
  }

  _createClass(SearchWindow, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var sent = this.state.sent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.box,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_AppForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "h4",
        gutterBottom: true,
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Book unique homes and experiences.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        onSubmit: this.handleSubmit,
        subscription: {
          submitting: true
        },
        validate: this.validate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, function (_ref) {
        var handleSubmit = _ref.handleSubmit,
            submitting = _ref.submitting;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: handleSubmit,
          noValidate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          container: true,
          spacing: 16,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 12,
          sm: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          component: _form_RFTextField__WEBPACK_IMPORTED_MODULE_9__["default"],
          fullWidth: true,
          label: "Where",
          name: "where",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 12,
          sm: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          component: _form_RFTextField__WEBPACK_IMPORTED_MODULE_9__["default"],
          disabled: submitting || sent,
          fullWidth: true,
          label: "Check In",
          margin: "normal",
          name: "checkin",
          type: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          component: _form_RFTextField__WEBPACK_IMPORTED_MODULE_9__["default"],
          disabled: submitting || sent,
          fullWidth: true,
          label: "Check In",
          margin: "normal",
          name: "checkin",
          type: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          fullWidth: true,
          component: _form_RFTextField__WEBPACK_IMPORTED_MODULE_9__["default"],
          disabled: submitting || sent,
          name: "guests",
          label: "Guests",
          type: "select",
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_5__["FormSpy"], {
          subscription: {
            submitError: true
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, function (_ref2) {
          var submitError = _ref2.submitError;
          return submitError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormFeedback__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: classes.feedback,
            error: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, submitError) : null;
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_FormButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classes.button,
          disabled: submitting || sent,
          color: "secondary",
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, submitting || sent ? 'In progress…' : 'Search'));
      })));
    }
  }]);

  return SearchWindow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SearchWindow.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(SearchWindow));

/***/ }),

/***/ "./modules/withRoot.js":
/*!*****************************!*\
  !*** ./modules/withRoot.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./modules/theme.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\modules\\withRoot.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree thanks to React context.
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })));
  }

  return WithRoot;
}

/* harmony default export */ __webpack_exports__["default"] = (withRoot);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_withRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/withRoot */ "./modules/withRoot.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_views_SearchWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/views/SearchWindow */ "./modules/views/SearchWindow.js");
var _jsxFileName = "F:\\Projects\\airbnb_demo\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 //import Background from '../img/background_image.jpg';

var styles = {
  paperContainer: {
    width: "100%",
    height: "1400px",
    //backgroundImage: "url(" + Background  + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.paperContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_views_SearchWindow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_modules_withRoot__WEBPACK_IMPORTED_MODULE_1__["default"])(App));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/utils/helpers":
/*!**************************************************!*\
  !*** external "@material-ui/core/utils/helpers" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/utils/helpers");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "recompose/compose":
/*!************************************!*\
  !*** external "recompose/compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map