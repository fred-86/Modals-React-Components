"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("../Styles/Modal.css");
/* eslint-disable prettier/prettier */

/**
 *  Modal
 * @component
 * @prop {Boolean} isShowing - function that uses the Hooks useModal() with State
 * @prop {Function} hide - function that uses the Hooks useModal() function to close or open
 * @prop {...string | ...element} [title] - optional title that will be in the header
 * @prop {Element | Array.<Element>} [children] - optional child element that will be in the body
 * @prop {String} [classNameBody] - optional className to customize the body content
 * @prop {Objetct.<active: Bool, key: String>} [keydown] - optional for configuring close modal by Key
 * @returns {React.ReactElement}
 */
function Modal(_ref) {
  var isShowing = _ref.isShowing,
    hide = _ref.hide,
    title = _ref.title,
    children = _ref.children,
    classNameBody = _ref.classNameBody,
    keydown = _ref.keydown;
  if (typeof keydown !== 'undefined') {
    if (keydown.active) {
      var handleKeyDown = (0, _react.useCallback)(function (e) {
        if (e.key === keydown.key) {
          hide();
        }
      }, [hide]);
      (0, _react.useEffect)(function () {
        document.addEventListener('keydown', handleKeyDown);
        return function () {
          return document.removeEventListener('keydown', handleKeyDown);
        };
      }, [hide]);
    }
  }
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header ".concat(title ? '' : 'modal-header--withoutTitle')
  }, typeof title === 'string' ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-title ".concat(title.length > 60 ? 'modal-title--length' : '')
  }, title && /*#__PURE__*/_react.default.createElement("h4", null, title)) : title, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close ".concat(children ? 'modal-close--children ' : '')
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close-btn",
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close-cross"
  }, "\xD7")))), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body ".concat(classNameBody || Modal.defaultProps.classNameBody)
  }, children))))), document.body) : null;
}
Modal.defaultProps = {
  classNameBody: 'modal-body'
};