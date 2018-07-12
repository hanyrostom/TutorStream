(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./client/src/components/un-protected/Login.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/un-protected/Login.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _AuthService = __webpack_require__(/*! ./../../Auth/AuthService */ \"./client/src/Auth/AuthService.js\");\n\nvar _AuthService2 = _interopRequireDefault(_AuthService);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _SignUp = __webpack_require__(/*! ./SignUp.jsx */ \"./client/src/components/un-protected/SignUp.jsx\");\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Login);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      Email: '',\n      Password: '',\n      redirectToPreviousRoute: false\n    }, _this.inputHandler = function (e) {\n      _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }, _this.handleLoginSubmit = function (e) {\n      e.preventDefault();\n      _axios2.default.post('/users/login', {\n        Email: _this.state.Email,\n        Password: _this.state.Password\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n\n        var id = data.id;\n        _this.props.getid(id);\n        console.log('props for login: ', _this.props);\n        _this.props.checkTutorStatus(id, _this.props.tutors_ids);\n        if (!!data.id) {\n          _AuthService2.default.authenticate();\n          _this.setState({\n            redirectToPreviousRoute: true\n          });\n        }\n      }).catch(function (err) {\n        console.error(err);\n      });\n    }, _this.handleLoginSubmit = function (e) {\n      e.preventDefault();\n      _axios2.default.post('/users/login', {\n        Email: _this.state.Email,\n        Password: _this.state.Password\n      }).then(function (_ref3) {\n        var data = _ref3.data;\n\n        var id = data.id;\n        _this.props.getid(id);\n        console.log('props for login: ', _this.props);\n        _this.props.checkTutorStatus(id, _this.props.tutors_ids);\n        if (!!data.id) {\n          _AuthService2.default.authenticate();\n          _this.setState({\n            redirectToPreviousRoute: true\n          });\n        }\n      }).catch(function (err) {\n        console.error(err);\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Login, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _ref4 = this.props.location.state || { from: { pathname: '/' } },\n          from = _ref4.from;\n\n      var redirectToPreviousRoute = this.state.redirectToPreviousRoute;\n\n      if (redirectToPreviousRoute) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, _extends({ to: from }, this.props));\n      }\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'form',\n          {\n            className: 'login',\n            onSubmit: function onSubmit(e) {\n              _this2.handleLoginSubmit(e);\n            }\n          },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Email'\n          ),\n          _react2.default.createElement('input', {\n            value: this.state.Email,\n            name: 'Email',\n            onChange: function onChange(e) {\n              _this2.inputHandler(e);\n            }\n          }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'label',\n            null,\n            'Password'\n          ),\n          _react2.default.createElement('input', {\n            type: 'password',\n            value: this.state.loginPassword,\n            name: 'Password',\n            onChange: function onChange(e) {\n              _this2.inputHandler(e);\n            }\n          }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'button',\n            { type: 'submit', value: 'Submit' },\n            'Login'\n          )\n        ),\n        _react2.default.createElement(_SignUp2.default, this.props)\n      );\n    }\n  }]);\n\n  return Login;\n}(_react.Component);\n\nexports.default = Login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvdW4tcHJvdGVjdGVkL0xvZ2luLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvdW4tcHJvdGVjdGVkL0xvZ2luLmpzeD9lNGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4vLi4vLi4vQXV0aC9BdXRoU2VydmljZSc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL1NpZ25VcC5qc3gnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIEVtYWlsOiAnJyxcbiAgICBQYXNzd29yZDogJycsXG4gICAgcmVkaXJlY3RUb1ByZXZpb3VzUm91dGU6IGZhbHNlXG4gIH07XG5cbiAgaW5wdXRIYW5kbGVyID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlTG9naW5TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KCcvdXNlcnMvbG9naW4nLCB7XG4gICAgICAgIEVtYWlsOiB0aGlzLnN0YXRlLkVtYWlsLFxuICAgICAgICBQYXNzd29yZDogdGhpcy5zdGF0ZS5QYXNzd29yZFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICB2YXIgaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnByb3BzLmdldGlkKGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb3BzIGZvciBsb2dpbjogJywgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMucHJvcHMuY2hlY2tUdXRvclN0YXR1cyhpZCwgdGhpcy5wcm9wcy50dXRvcnNfaWRzKTtcbiAgICAgICAgaWYgKCEhZGF0YS5pZCkge1xuICAgICAgICAgIEF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZSgpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVkaXJlY3RUb1ByZXZpb3VzUm91dGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVMb2dpblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoJy91c2Vycy9sb2dpbicsIHtcbiAgICAgICAgRW1haWw6IHRoaXMuc3RhdGUuRW1haWwsXG4gICAgICAgIFBhc3N3b3JkOiB0aGlzLnN0YXRlLlBhc3N3b3JkXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHZhciBpZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0aWQoaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygncHJvcHMgZm9yIGxvZ2luOiAnLCB0aGlzLnByb3BzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGVja1R1dG9yU3RhdHVzKGlkLCB0aGlzLnByb3BzLnR1dG9yc19pZHMpO1xuICAgICAgICBpZiAoISFkYXRhLmlkKSB7XG4gICAgICAgICAgQXV0aFNlcnZpY2UuYXV0aGVudGljYXRlKCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWRpcmVjdFRvUHJldmlvdXNSb3V0ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZyb20gfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGUgfHwgeyBmcm9tOiB7IHBhdGhuYW1lOiAnLycgfSB9O1xuICAgIGNvbnN0IHsgcmVkaXJlY3RUb1ByZXZpb3VzUm91dGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHJlZGlyZWN0VG9QcmV2aW91c1JvdXRlKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtmcm9tfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luXCJcbiAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxvZ2luU3VibWl0KGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuRW1haWx9XG4gICAgICAgICAgICBuYW1lPVwiRW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0SGFuZGxlcihlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxvZ2luUGFzc3dvcmR9XG4gICAgICAgICAgICBuYW1lPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0SGFuZGxlcihlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxTaWdudXAgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUE4QkE7QUEvQkE7QUFrQ0E7Ozs7QUF0R0E7QUFDQTtBQXdHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/un-protected/Login.jsx\n");

/***/ }),

/***/ "./client/src/components/un-protected/SignUp.jsx":
/*!*******************************************************!*\
  !*** ./client/src/components/un-protected/SignUp.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _AuthService = __webpack_require__(/*! ./../../Auth/AuthService */ \"./client/src/Auth/AuthService.js\");\n\nvar _AuthService2 = _interopRequireDefault(_AuthService);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignUp = function (_React$Component) {\n  _inherits(SignUp, _React$Component);\n\n  function SignUp() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, SignUp);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      name: '',\n      email: '',\n      password: '',\n      userTests: [],\n      bio: '',\n      tutor: 0,\n      selectedFile: [],\n      redirectToPreviousRoute: false\n    }, _this.inputHandler = function (e) {\n      _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }, _this.handleTestSelect = function (e) {\n      var newTests = _this.state.userTests.slice();\n      if (e.target.checked) {\n        newTests.push(e.target.value);\n      } else {\n        newTests.splice(newTests.indexOf(e.target.value), 1);\n      }\n      _this.setState({\n        userTests: newTests\n      });\n    }, _this.handleFileSelect = function (e) {\n      _this.setState({\n        selectedFile: e.target.files\n      });\n    }, _this.handleFileUpload = function (user_id) {\n      var formData = new FormData();\n      formData.append('file', _this.state.selectedFile[0]);\n      _axios2.default.post('http://ec2-34-207-66-224.compute-1.amazonaws.com:5000/photo-upload', formData, {\n        headers: {\n          'Content-Type': 'multipart/form-data',\n          crossDomain: true\n        }\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n\n        var userPhoto = {\n          user_id: user_id,\n          location: data.Location\n        };\n        _axios2.default.post('/users/photo', userPhoto);\n      }).catch(function (error) {\n        return console.error('There was an error with the POST request to the server: ', error);\n      });\n    }, _this.handleSignup = function (e) {\n      e.preventDefault();\n      _axios2.default.post('/users/signup', {\n        name: _this.state.name,\n        password: _this.state.password,\n        email: _this.state.email,\n        tests: _this.state.userTests,\n        tutor: _this.state.tutor,\n        bio: _this.state.bio\n      }).then(function (_ref3) {\n        var data = _ref3.data;\n\n        _this.handleFileUpload(data);\n      }).then(function () {\n        _AuthService2.default.authenticate();\n        _this.setState({\n          redirectToPreviousRoute: true\n        });\n      }).catch(function (err) {\n        console.error(err);\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(SignUp, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _ref4 = this.props.location.state || { from: { pathname: '/' } },\n          from = _ref4.from;\n\n      var redirectToPreviousRoute = this.state.redirectToPreviousRoute;\n\n\n      if (redirectToPreviousRoute) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n      }\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            'Create a Profile :'\n          )\n        ),\n        _react2.default.createElement(\n          'form',\n          { onSubmit: function onSubmit(e) {\n              return _this2.handleSignup(e);\n            } },\n          _react2.default.createElement(\n            _reactBootstrap.FormGroup,\n            { controlId: 'formControlsText' },\n            _react2.default.createElement(\n              _reactBootstrap.ControlLabel,\n              null,\n              'Name :'\n            ),\n            _react2.default.createElement(_reactBootstrap.FormControl, {\n              type: 'text',\n              placeholder: 'Enter your name here',\n              name: 'name',\n              onChange: function onChange(e) {\n                return _this2.inputHandler(e);\n              }\n            })\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.FormGroup,\n            { controlId: 'formControlsEmail' },\n            _react2.default.createElement(\n              _reactBootstrap.ControlLabel,\n              null,\n              'Email :'\n            ),\n            _react2.default.createElement(_reactBootstrap.FormControl, {\n              type: 'email',\n              placeholder: 'Enter your email address here',\n              name: 'email',\n              onChange: function onChange(e) {\n                return _this2.inputHandler(e);\n              }\n            })\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.FormGroup,\n            { controlId: 'formControlsPassword' },\n            _react2.default.createElement(\n              _reactBootstrap.ControlLabel,\n              null,\n              'Password :'\n            ),\n            _react2.default.createElement(_reactBootstrap.FormControl, {\n              type: 'password',\n              placeholder: 'Enter your password here',\n              name: 'password',\n              onChange: function onChange(e) {\n                return _this2.inputHandler(e);\n              }\n            })\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.FormGroup,\n            null,\n            _react2.default.createElement(\n              _reactBootstrap.ControlLabel,\n              null,\n              'Exams you\\'re interested in :'\n            ),\n            _react2.default.createElement('div', null),\n            this.props.tests.map(function (test, index) {\n              return _react2.default.createElement(\n                _reactBootstrap.Checkbox,\n                {\n                  inline: true,\n                  key: test.id,\n                  value: test.id,\n                  name: test.Name,\n                  onClick: function onClick(e) {\n                    return _this2.handleTestSelect(e);\n                  }\n                },\n                test.Name\n              );\n            })\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.FormGroup,\n            { controlId: 'formControlsTextarea' },\n            _react2.default.createElement(\n              _reactBootstrap.ControlLabel,\n              null,\n              'Bio :'\n            ),\n            _react2.default.createElement(_reactBootstrap.FormControl, {\n              componentClass: 'textarea',\n              maxLength: '255',\n              placeholder: 'Tell us about yourself',\n              name: 'bio',\n              onChange: function onChange(e) {\n                return _this2.inputHandler(e);\n              }\n            })\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.FormGroup,\n            { controlId: 'formControlsFile', encType: 'multipart/form-data' },\n            _react2.default.createElement(\n              _reactBootstrap.ControlLabel,\n              null,\n              'Upload your profile picture :'\n            ),\n            _react2.default.createElement(_reactBootstrap.FormControl, {\n              type: 'file',\n              name: 'photo',\n              onChange: this.handleFileSelect\n            })\n          ),\n          _react2.default.createElement(\n            'button',\n            { type: 'submit' },\n            'Sign Up'\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignUp;\n}(_react2.default.Component);\n\nexports.default = SignUp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvdW4tcHJvdGVjdGVkL1NpZ25VcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9jb21wb25lbnRzL3VuLXByb3RlY3RlZC9TaWduVXAuanN4PzQ2Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBGb3JtR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBDb250cm9sTGFiZWwsXG4gIENoZWNrYm94XG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi8uLi8uLi9BdXRoL0F1dGhTZXJ2aWNlJztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIFNpZ25VcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgdXNlclRlc3RzOiBbXSxcbiAgICBiaW86ICcnLFxuICAgIHR1dG9yOiAwLFxuICAgIHNlbGVjdGVkRmlsZTogW10sXG4gICAgcmVkaXJlY3RUb1ByZXZpb3VzUm91dGU6IGZhbHNlXG4gIH07XG5cbiAgaW5wdXRIYW5kbGVyID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlVGVzdFNlbGVjdCA9IGUgPT4ge1xuICAgIGxldCBuZXdUZXN0cyA9IHRoaXMuc3RhdGUudXNlclRlc3RzLnNsaWNlKCk7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIG5ld1Rlc3RzLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdUZXN0cy5zcGxpY2UobmV3VGVzdHMuaW5kZXhPZihlLnRhcmdldC52YWx1ZSksIDEpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJUZXN0czogbmV3VGVzdHNcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVGaWxlU2VsZWN0ID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEZpbGU6IGUudGFyZ2V0LmZpbGVzXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlRmlsZVVwbG9hZCA9IHVzZXJfaWQgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVbMF0pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9lYzItMzQtMjA3LTY2LTIyNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL3Bob3RvLXVwbG9hZCcsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgbGV0IHVzZXJQaG90byA9IHtcbiAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLkxvY2F0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGF4aW9zLnBvc3QoJy91c2Vycy9waG90bycsIHVzZXJQaG90byk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSBQT1NUIHJlcXVlc3QgdG8gdGhlIHNlcnZlcjogJyxcbiAgICAgICAgICBlcnJvclxuICAgICAgICApXG4gICAgICApO1xuICB9O1xuXG4gIGhhbmRsZVNpZ251cCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoJy91c2Vycy9zaWdudXAnLCB7XG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICB0ZXN0czogdGhpcy5zdGF0ZS51c2VyVGVzdHMsXG4gICAgICAgIHR1dG9yOiB0aGlzLnN0YXRlLnR1dG9yLFxuICAgICAgICBiaW86IHRoaXMuc3RhdGUuYmlvXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZVVwbG9hZChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIEF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByZWRpcmVjdFRvUHJldmlvdXNSb3V0ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZnJvbSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZSB8fCB7IGZyb206IHsgcGF0aG5hbWU6ICcvJyB9IH07XG4gICAgY29uc3QgeyByZWRpcmVjdFRvUHJldmlvdXNSb3V0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChyZWRpcmVjdFRvUHJldmlvdXNSb3V0ZSkge1xuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17ZnJvbX0gLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND5DcmVhdGUgYSBQcm9maWxlIDo8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gdGhpcy5oYW5kbGVTaWdudXAoZSl9PlxuICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5OYW1lIDo8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaW5wdXRIYW5kbGVyKGUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc0VtYWlsXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPkVtYWlsIDo8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyBoZXJlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5pbnB1dEhhbmRsZXIoZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzUGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDxDb250cm9sTGFiZWw+UGFzc3dvcmQgOjwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZCBoZXJlXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5pbnB1dEhhbmRsZXIoZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPkV4YW1zIHlvdSdyZSBpbnRlcmVzdGVkIGluIDo8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlc3RzLm1hcCgodGVzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICAgICAga2V5PXt0ZXN0LmlkfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXN0LmlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e3Rlc3QuTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlVGVzdFNlbGVjdChlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXN0Lk5hbWV9XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPkJpbyA6PC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyBhYm91dCB5b3Vyc2VsZlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJiaW9cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmlucHV0SGFuZGxlcihlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNGaWxlXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgIDxDb250cm9sTGFiZWw+VXBsb2FkIHlvdXIgcHJvZmlsZSBwaWN0dXJlIDo8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG90b1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFGQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBRkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQVBBO0FBREE7QUFIQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0RBO0FBSkE7QUFxRUE7Ozs7QUF2S0E7QUFDQTtBQXlLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/un-protected/SignUp.jsx\n");

/***/ })

}]);