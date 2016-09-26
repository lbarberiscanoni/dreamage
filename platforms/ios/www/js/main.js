"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _sharing = require("./sharing");

var _sharing2 = _interopRequireDefault(_sharing);

var _filters = require("./filters");

var _filters2 = _interopRequireDefault(_filters);

var _upload = require("./upload");

var _upload2 = _interopRequireDefault(_upload);

var _navBar = require("./navBar");

var _navBar2 = _interopRequireDefault(_navBar);

var _canvas = require("./canvas");

var _canvas2 = _interopRequireDefault(_canvas);

var _camera = require("./camera");

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            location: "home",
            image: "https://media.giphy.com/media/y1VEmPmG3t1VC/giphy.gif"
        };
        return _this;
    }

    _createClass(App, [{
        key: "changeScreen",
        value: function changeScreen(direction) {
            var locations = ["home", "filter", "share"];
            var current = this.state.location;
            var currentIndex = locations.indexOf(current);
            var new_screen = locations[currentIndex + direction];
            this.setState({ location: new_screen });
        }
    }, {
        key: "changeImage",
        value: function changeImage(new_image) {
            this.setState({ image: new_image });
        }
    }, {
        key: "render",
        value: function render() {
            switch (this.state.location) {
                case "home":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_navBar2.default, { location: this.state.location, changeScreen: this.changeScreen.bind(this) }),
                        _react2.default.createElement(_canvas2.default, { image: this.state.image }),
                        _react2.default.createElement(_camera2.default, { changeScreen: this.changeScreen.bind(this), changeImage: this.changeImage.bind(this) })
                    );
                case "filter":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_navBar2.default, { location: this.state.location, changeScreen: this.changeScreen.bind(this) }),
                        _react2.default.createElement(_canvas2.default, { image: this.state.image }),
                        _react2.default.createElement(_filters2.default, null)
                    );
                case "share":
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_navBar2.default, { location: this.state.location, changeScreen: this.changeScreen.bind(this) }),
                        _react2.default.createElement(_canvas2.default, { image: this.state.image }),
                        _react2.default.createElement(_sharing2.default, null)
                    );
            }
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("main"));