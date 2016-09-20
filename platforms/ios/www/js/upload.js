"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDropzone = require("react-dropzone");

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upload = function (_React$Component) {
    _inherits(Upload, _React$Component);

    function Upload() {
        _classCallCheck(this, Upload);

        return _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).apply(this, arguments));
    }

    _createClass(Upload, [{
        key: "changeImage",
        value: function changeImage(new_image) {
            this.props.changeImage(new_image);
        }
    }, {
        key: "onDrop",
        value: function onDrop(files) {
            console.log('Received files: ', files);
            this.changeImage(files[0].preview);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactDropzone2.default, { className: "fui-photo dropzone", onDrop: this.onDrop.bind(this) });
        }
    }]);

    return Upload;
}(_react2.default.Component);

exports.default = Upload;