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

var _reactImageUploader = require("react-image-uploader");

var _reactImageUploader2 = _interopRequireDefault(_reactImageUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function uploadImage(file, done, progress) {
    var error = null;
    var uploadedImageURL = "https://www.dropbox.com/s/ercqr79csrkqput/File%20Jul%2002%2C%203%2040%2021%20PM.jpeg?dl=0";
    done(error, uploadedImageURL);
}

var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
    }

    _createClass(Demo, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactImageUploader2.default, {
                onUpload: uploadImage,
                onRender: function onRender(props, state) {

                    // render customized child image state 
                    if (props.image) {
                        return _react2.default.createElement(
                            "div",
                            { style: { backgroundImage: "url(" + props.image + ")" } },
                            _react2.default.createElement(
                                "button",
                                { onClick: props.onRequestRemove },
                                "Remove"
                            ),
                            props.error && _react2.default.createElement(
                                "div",
                                null,
                                "An error occurred"
                            )
                        );
                    }

                    // render default child drag target 
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "button",
                            { onClick: props.onUploadPrompt },
                            "Upload"
                        )
                    );
                } });
        }
    }]);

    return Demo;
}(_react2.default.Component);

var Camera = function (_React$Component2) {
    _inherits(Camera, _React$Component2);

    function Camera() {
        _classCallCheck(this, Camera);

        return _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).apply(this, arguments));
    }

    _createClass(Camera, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "picContainer" },
                    _react2.default.createElement("input", { type: "file", id: "mypic", accept: "image/*" }),
                    _react2.default.createElement("span", { htmlFor: "mypic", className: "icon fui-photo" })
                ),
                _react2.default.createElement(Demo, null)
            );
        }
    }]);

    return Camera;
}(_react2.default.Component);

var Pic = function (_React$Component3) {
    _inherits(Pic, _React$Component3);

    function Pic(props, context) {
        _classCallCheck(this, Pic);

        var _this3 = _possibleConstructorReturn(this, (Pic.__proto__ || Object.getPrototypeOf(Pic)).call(this, props, context));

        _this3.state = {
            image: null
        };
        return _this3;
    }

    _createClass(Pic, [{
        key: "bro",
        value: function bro() {
            alert("bro");
        }
    }, {
        key: "getUrl",
        value: function getUrl() {
            var raw = (0, _jquery2.default)("#mypic").val().toString();
            var fileName = raw.split("fakepath")[1];
            var base_url = "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Input/";
            this.setState({ image: base_url + fileName });
        }
    }, {
        key: "changeImage",
        value: function changeImage(a) {
            console.log(a);
            this.setState({ image: a });
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.state.image);
            if (this.state.image == null) {
                return _react2.default.createElement(
                    "div",
                    { className: "picContainer" },
                    _react2.default.createElement("input", { type: "file", id: "mypic", accept: "image/*", onChange: this.getUrl.bind(this) }),
                    "///",
                    _react2.default.createElement("label", { htmlFor: "mypic", className: "icon fui-photo" })
                );
            } else {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { className: "selectedImage", src: this.state.image }),
                    _react2.default.createElement(
                        "div",
                        { className: "picContainer" },
                        _react2.default.createElement("input", { type: "file", id: "mypic", accept: "image/*" }),
                        _react2.default.createElement("label", { htmlFor: "mypic", className: "icon fui-photo" })
                    )
                );
            }
        }
    }]);

    return Pic;
}(_react2.default.Component);

//export default Pic


exports.default = Demo;