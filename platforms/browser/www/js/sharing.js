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

var Sharing = function (_React$Component) {
    _inherits(Sharing, _React$Component);

    function Sharing() {
        _classCallCheck(this, Sharing);

        return _possibleConstructorReturn(this, (Sharing.__proto__ || Object.getPrototypeOf(Sharing)).apply(this, arguments));
    }

    _createClass(Sharing, [{
        key: "shareWithFB",
        value: function shareWithFB() {
            window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function () {
                console.log('share ok');
            }, function (errormsg) {
                alert(errormsg);
            });
        }
    }, {
        key: "shareWithInsta",
        value: function shareWithInsta() {
            window.plugins.socialsharing.shareViaInstagram('Message via Facebook', null /* img */, null /* url */, function () {
                console.log('share ok');
            }, function (errormsg) {
                alert(errormsg);
            });
        }
    }, {
        key: "shareWithTwitter",
        value: function shareWithTwitter() {
            window.plugins.socialsharing.shareViaTwitter('Message via Facebook', null /* img */, null /* url */, function () {
                console.log('share ok');
            }, function (errormsg) {
                alert(errormsg);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "icon-container" },
                _react2.default.createElement("span", { onClick: this.shareWithFB, className: "icon fui-facebook" }),
                _react2.default.createElement("span", { onClick: this.shareWithInsta, className: "icon fui-instagram" }),
                _react2.default.createElement("span", { onClick: this.shareWithTwitter, className: "icon fui-twitter" })
            );
        }
    }]);

    return Sharing;
}(_react2.default.Component);

exports.default = Sharing;