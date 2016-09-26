"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: "changeScreen",
        value: function changeScreen(a) {
            console.log(a);
            this.props.changeScreen(a);
            console.log("done with internal changeScreen");
        }
    }, {
        key: "render",
        value: function render() {
            console.log("this is the nav");
            console.log(this.props.location);
            if (this.props.location == "home") {
                return _react2.default.createElement(
                    "header",
                    { className: "bar bar-nav" },
                    _react2.default.createElement(
                        "h2",
                        { className: "title" },
                        "Dreamage"
                    )
                );
            } else {
                return _react2.default.createElement(
                    "header",
                    { className: "bar bar-nav" },
                    _react2.default.createElement(
                        "span",
                        { className: "clickable btn pull-left", onClick: this.changeScreen.bind(this, -1) },
                        "BACK"
                    ),
                    _react2.default.createElement(
                        "h2",
                        { className: "title" },
                        "Dreamage"
                    ),
                    _react2.default.createElement(
                        "span",
                        { className: "clickable btn pull-right", onClick: this.changeScreen.bind(this, 1) },
                        "NEXT"
                    )
                );
            }
        }
    }]);

    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;