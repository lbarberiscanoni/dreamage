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

var Filters = function (_React$Component) {
    _inherits(Filters, _React$Component);

    function Filters() {
        _classCallCheck(this, Filters);

        var _this = _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).call(this));

        _this.state = {
            dropBoxLinks: ["https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/donelli.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/groening.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/lundstroem.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/picasso.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/skrik.jpg"]
        };
        return _this;
    }

    _createClass(Filters, [{
        key: "bro",
        value: function bro() {
            alert("fuck");
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var listOfFilters = [];
            this.state.dropBoxLinks.map(function (x) {
                return listOfFilters.push(_react2.default.createElement("img", { onClick: _this2.bro.bind(_this2), className: "filter clickable", src: x }));
            });
            return _react2.default.createElement(
                "div",
                { className: "filters-container" },
                listOfFilters
            );
        }
    }]);

    return Filters;
}(_react2.default.Component);

exports.default = Filters;