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

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
    apiKey: "AIzaSyDjlIjpH-bZHbTr5Oi1rA2dHJGc6To-h1g",
    authDomain: "ios-db.firebaseapp.com",
    databaseURL: "https://ios-db.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "615131334244"
};

var mainApp = _firebase2.default.initializeApp(config);

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
            var _this2 = this;

            var reader = new FileReader();
            reader.readAsDataURL(new_image);
            reader.onloadend = function (e) {
                var af = e.target.result;
                _this2.setState({ "image": af });
            };
        }
    }, {
        key: "dream_old",
        value: function dream_old(e) {
            e.preventDefault();
            var form_data = new FormData((0, _jquery2.default)("#form")[0]);
            var processedPicURL = "";
            _jquery2.default.ajax({
                method: "POST",
                url: "http://fac18736.ngrok.io/dream",
                data: form_data,
                contentType: false,
                cache: false,
                processData: false,
                dataType: 'json',
                success: function success(data) {
                    console.log(data);
                    processedPicURL = data["url"];
                    //download the image on the user's phone
                    var link = document.createElement("a");
                    link.download = data["id"];
                    link.href = data["url"];
                    link.click();
                    link.remove();
                }
            });

            this.setState({ "image": processedPicURL });
        }
    }, {
        key: "dream",
        value: function dream(e) {
            e.preventDefault();
            var form_data = new FormData((0, _jquery2.default)("#form")[0]);
            var processedPicURL = "";
            _jquery2.default.ajax({
                method: "POST",
                url: "http://fac18736.ngrok.io/dream",
                data: form_data,
                contentType: false,
                cache: false,
                processData: false,
                dataType: 'json',
                success: function success(data) {
                    console.log(data);
                    processedPicURL = data["url"];
                    //download the image on the user's phone
                    cordova.plugins.imgDownloader.downloadWithUrl(processedPicURL, function () {
                        alert("success");
                    }, function () {
                        alert("error");
                    });
                }
            });
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
                        _react2.default.createElement(
                            "form",
                            { method: "POST", id: "form", encType: "multipart/form-data" },
                            _react2.default.createElement(_camera2.default, { changeScreen: this.changeScreen.bind(this), changeImage: this.changeImage.bind(this) })
                        )
                    );
                case "filter":
                    console.log(this.state);
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_navBar2.default, { location: this.state.location, changeScreen: this.changeScreen.bind(this) }),
                        _react2.default.createElement(_canvas2.default, { image: this.state.image }),
                        _react2.default.createElement(
                            "form",
                            { method: "POST", id: "form", encType: "multipart/form-data" },
                            _react2.default.createElement(_camera2.default, { changeImage: this.changeImage.bind(this) })
                        ),
                        _react2.default.createElement(_filters2.default, { dream: this.dream.bind(this), pic: this.state.pic_name })
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