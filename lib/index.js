"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var TextArea =
/*#__PURE__*/
function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextArea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focus: false,
      content: "",
      contentLength: 0
    });

    return _this;
  }

  _createClass(TextArea, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = nextProps.value;
      if (value === undefined) return;

      if (this.textArea) {
        var prevValue = this.textArea.innerText;

        if (prevValue !== value) {
          this.textArea.innerText = value;
          this.setState({
            content: value,
            contentLength: (value || "").length
          });
        }
      }
    }
  }, {
    key: "handleCheckLink",
    value: function handleCheckLink(content) {
      var linkUrl = FilterFirstLink(content);
      console.log('LinkURL', linkUrl);
      linkUrl && this.props.onFetchLink && this.props.onFetchLink(linkUrl);
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(evt) {
      if (evt.type === "paste") {
        var plainText = evt.nativeEvent.clipboardData.getData("text/plain");

        if (plainText) {
          this.handleCheckLink(plainText);
        }
      }

      var content = evt.target.innerText;

      if (evt.type === "keyup") {
        switch (evt.keyCode) {
          case 13:
          case 108:
            this.handleCheckLink(content);
            break;

          default:
            break;
        }
      }

      this.setState({
        content: content,
        contentLength: content.length
      });
      this.props.onChange && this.props.onChange(content);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          max = _this$props.max;
      var _this$state = this.state,
          focus = _this$state.focus,
          contentLength = _this$state.contentLength;
      return _react.default.createElement("div", {
        className: "react-autoheight-textarea"
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)("input-control", {
          focus: focus
        }),
        onClick: function onClick() {
          return _this2.textArea && _this2.textArea.focus();
        }
      }, _react.default.createElement("div", {
        className: "textarea",
        ref: function ref(_ref) {
          return _this2.textArea = _ref;
        },
        onInput: function onInput(evt) {
          return _this2.handleTextChange(evt);
        },
        onPaste: function onPaste(evt) {
          return _this2.handleTextChange(evt);
        },
        onFocus: function onFocus() {
          return _this2.setState({
            focus: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            focus: false
          });
        },
        onKeyUp: function onKeyUp(evt) {
          return _this2.handleTextChange(evt);
        },
        contentEditable: "plaintext-only"
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)("placeholder", {
          hidden: focus || this.textArea && this.textArea.innerText.trim()
        })
      }, placeholder)), _react.default.createElement("div", {
        className: (0, _classnames.default)("max-number", {
          hidden: !max || contentLength < max,
          red: contentLength > max
        })
      }, _react.default.createElement("span", {
        className: "can-red"
      }, contentLength), "/", _react.default.createElement("span", null, max)));
    }
  }]);

  return TextArea;
}(_react.Component);

var _default = TextArea;
exports.default = _default;