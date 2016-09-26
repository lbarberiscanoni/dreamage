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

var _dropbox = require("dropbox");

var _dropbox2 = _interopRequireDefault(_dropbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Camera = function (_React$Component) {
    _inherits(Camera, _React$Component);

    function Camera() {
        _classCallCheck(this, Camera);

        return _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).apply(this, arguments));
    }

    _createClass(Camera, [{
        key: "changeImage",
        value: function changeImage(new_image) {
            this.props.changeImage(new_image);
        }
    }, {
        key: "moveForward",
        value: function moveForward(a) {
            console.log("move foward fired");
            this.props.changeScreen(a);
        }
    }, {
        key: "upload",
        value: function upload(file) {
            var dbx = new _dropbox2.default({ accessToken: "oaE89qwjJSUAAAAAAAAkjwLkjmx5qMS-zfoMULRGyxoR2gjuN1rA5Z8LHcgsgp2O" });
            console.log(file);
            dbx.filesUpload({ path: "/input/" + file.name, contents: file }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: "onDrop",
        value: function onDrop(files) {
            console.log('Received files: ', files);
            this.changeImage(files[0].preview);
            this.upload(files[0]);
            this.moveForward(1);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactDropzone2.default, { className: "fui-photo dropzone", onDrop: this.onDrop.bind(this) });
        }
    }]);

    return Camera;
}(_react2.default.Component);

exports.default = Camera;