(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./client/src/components/protected/studentView/TutorRegistration.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/protected/studentView/TutorRegistration.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _Earnings = __webpack_require__(/*! ./../tutorView/Earnings.jsx */ \"./client/src/components/protected/tutorView/Earnings.jsx\");\n\nvar _Earnings2 = _interopRequireDefault(_Earnings);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TutorRegistration = function (_React$Component) {\n  _inherits(TutorRegistration, _React$Component);\n\n  function TutorRegistration() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TutorRegistration);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TutorRegistration.__proto__ || Object.getPrototypeOf(TutorRegistration)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      tests: [],\n      test: '',\n      selectedTests: [],\n      bio: '',\n      rate: '',\n      form: {\n        // what goes in here?\n      }\n    }, _this.getTests = function () {\n      _axios2.default.get('/tests').then(function (_ref2) {\n        var data = _ref2.data;\n\n        _this.setState({\n          tests: data\n        });\n      });\n    }, _this.handleCheck = function (e) {\n      var array = _this.state.selectedTests.slice();\n      if (array.indexOf(e.target.value) === -1) {\n        _this.setState({\n          selectedTests: [].concat(_toConsumableArray(_this.state.selectedTests), [e.target.value])\n        });\n      } else {\n        var idx = array.indexOf(e.target.value);\n        array.splice(idx, 1);\n        _this.setState({\n          selectedTests: array\n        });\n      }\n    }, _this.handleChange = function (event) {\n      _this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }, _this.handleSubmit = function (event) {\n      event.preventDefault();\n      var testsArray = [];\n      _this.state.selectedTests.forEach(function (test_id) {\n        testsArray.push({\n          tutor_id: _this.props.id,\n          test_id: test_id\n        });\n      });\n\n      var form = {\n        tests: testsArray,\n        bio: _this.state.bio,\n        rate: Number(_this.state.rate),\n        id: _this.props.id\n      };\n      _axios2.default.post('/tutors/' + _this.props.id, form).catch(function (err) {\n        return console.error(err);\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(TutorRegistration, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getTests();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var conditional = this.props.isTutor > -1 ? _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Earnings2.default, { id: this.props.id })\n      ) : _react2.default.createElement(\n        'div',\n        { className: 'tutor-render' },\n        ' ',\n        _react2.default.createElement(\n          'h1',\n          { className: 'title' },\n          'Tutor Registration'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'bio',\n            value: this.state.bio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsRate' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Rate: (hourly)'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'number',\n            placeholder: '$$$',\n            name: 'rate',\n            value: this.state.rate,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          null,\n          this.state.tests.map(function (test, i) {\n            return _react2.default.createElement(\n              _reactBootstrap.Checkbox,\n              {\n                onChange: _this2.handleCheck,\n                inline: true,\n                key: i,\n                value: test.id\n              },\n              test.Name\n            );\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'success', type: 'submit', onClick: this.handleSubmit },\n          'Submit'\n        )\n      );\n      return _react2.default.createElement(\n        'div',\n        { className: 'tutor-registration' },\n        conditional\n      );\n    }\n  }]);\n\n  return TutorRegistration;\n}(_react2.default.Component);\n\nexports.default = TutorRegistration;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL3N0dWRlbnRWaWV3L1R1dG9yUmVnaXN0cmF0aW9uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL3N0dWRlbnRWaWV3L1R1dG9yUmVnaXN0cmF0aW9uLmpzeD8xNWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBDaGVja2JveCxcbiAgQnV0dG9uXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRWFybmluZ3MgZnJvbSAnLi8uLi90dXRvclZpZXcvRWFybmluZ3MuanN4JztcblxuY2xhc3MgVHV0b3JSZWdpc3RyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0ZXN0czogW10sXG4gICAgdGVzdDogJycsXG4gICAgc2VsZWN0ZWRUZXN0czogW10sXG4gICAgYmlvOiAnJyxcbiAgICByYXRlOiAnJyxcbiAgICBmb3JtOiB7XG4gICAgICAvLyB3aGF0IGdvZXMgaW4gaGVyZT9cbiAgICB9XG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0VGVzdHMoKTtcbiAgfVxuICBnZXRUZXN0cyA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJy90ZXN0cycpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGVzdHM6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBoYW5kbGVDaGVjayA9IGUgPT4ge1xuICAgIHZhciBhcnJheSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5zbGljZSgpO1xuICAgIGlmIChhcnJheS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZFRlc3RzOiBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzLCBlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZHggPSBhcnJheS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGFycmF5LnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkVGVzdHM6IGFycmF5XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdGVzdHNBcnJheSA9IFtdO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5mb3JFYWNoKHRlc3RfaWQgPT4ge1xuICAgICAgdGVzdHNBcnJheS5wdXNoKHtcbiAgICAgICAgdHV0b3JfaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHRlc3RfaWQ6IHRlc3RfaWRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGZvcm0gPSB7XG4gICAgICB0ZXN0czogdGVzdHNBcnJheSxcbiAgICAgIGJpbzogdGhpcy5zdGF0ZS5iaW8sXG4gICAgICByYXRlOiBOdW1iZXIodGhpcy5zdGF0ZS5yYXRlKSxcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkXG4gICAgfTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYC90dXRvcnMvJHt0aGlzLnByb3BzLmlkfWAsIGZvcm0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29uZGl0aW9uYWwgPVxuICAgICAgdGhpcy5wcm9wcy5pc1R1dG9yID4gLTEgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEVhcm5pbmdzIGlkPXt0aGlzLnByb3BzLmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHV0b3ItcmVuZGVyXCI+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5UdXRvciBSZWdpc3RyYXRpb248L2gxPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dGFyZWFcIj5cbiAgICAgICAgICAgIDxDb250cm9sTGFiZWw+QmlvPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU1XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCAoTWF4OiAyNTUgY2hhcmFjdGVycylcIlxuICAgICAgICAgICAgICBuYW1lPVwiYmlvXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmlvfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzUmF0ZVwiPlxuICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5SYXRlOiAoaG91cmx5KTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQkJFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudGVzdHMubWFwKCh0ZXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rlc3QuaWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Rlc3QuTmFtZX1cbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR1dG9yLXJlZ2lzdHJhdGlvblwiPntjb25kaXRpb25hbH08L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHV0b3JSZWdpc3RyYXRpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFBQTtBQUNBOzs7OztBQWxEQTtBQUNBO0FBQ0E7OztBQWlEQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBU0E7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4Q0E7QUE2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBbkhBO0FBQ0E7QUFxSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/protected/studentView/TutorRegistration.jsx\n");

/***/ }),

/***/ "./client/src/components/protected/tutorView/Earnings.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/protected/tutorView/Earnings.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _d = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\nvar d3 = _interopRequireWildcard(_d);\n\nvar _reactD3Components = __webpack_require__(/*! react-d3-components */ \"./node_modules/react-d3-components/lib/index.js\");\n\nvar _reactSpinners = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/index.js\");\n\nvar _moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Earnings = function (_React$Component) {\n    _inherits(Earnings, _React$Component);\n\n    function Earnings(props) {\n        _classCallCheck(this, Earnings);\n\n        var _this = _possibleConstructorReturn(this, (Earnings.__proto__ || Object.getPrototypeOf(Earnings)).call(this, props));\n\n        _this.spreadData = function (data) {\n            var results = [];\n            data.forEach(function (singleDay) {\n                results.push({\n                    x: singleDay.date.slice(5, 10),\n                    y: singleDay.day_earnings\n                });\n            });\n\n            return results.slice(-7);\n        };\n\n        _this.checkForEarnings = function () {\n            var results = [];\n\n            for (var i = 0; i < 7; i++) {\n                var day = _this.state.week[i];\n                for (var j = 0; j < _this.state.earnings.length; j++) {\n                    var workday = _this.state.earnings[j].date.slice(5, 10);\n                    var workdays = _this.state.earnings.map(function (a) {\n                        return a.date.slice(5, 10);\n                    });\n                    var idx = workdays.indexOf(day);\n                    if (idx > -1) {\n                        results.push({ 'x': day, 'y': _this.state.earnings[idx].day_earnings });\n                        break;\n                    } else {\n                        results.push({ 'x': day, 'y': 0 });\n                        break;\n                    }\n                }\n            }\n            _this.setState({\n                ready: true,\n                values: results.reverse(),\n                weekly: results.map(function (a) {\n                    return a.y;\n                }).reduce(function (a, b) {\n                    return a + b;\n                }, 0)\n            });\n        };\n\n        _this.lastWeek = function () {\n            var week = [];\n            for (var i = 0; i < 7; i++) {\n                week.push((0, _moment2.default)().subtract(i, \"days\").format(\"MM-DD\"));\n            }\n            return week;\n        };\n\n        _this.getUserInfo = function (id) {\n            var info;\n            _axios2.default.get('/users/info/' + id).then(function (_ref) {\n                var data = _ref.data;\n\n                info = data[0];\n                _this.setState({\n                    name: info.Name.split(' ')\n                });\n            }).then(function () {\n                return _this.getEarnings(_this.props.id);\n            });\n        };\n\n        _this.state = {\n            earnings: [],\n            loading: true,\n            name: 'Tutor',\n            week: _this.lastWeek(),\n            lastSeven$: []\n        };\n        _this.getEarnings = _this.getEarnings.bind(_this);\n        _this.spreadData = _this.spreadData.bind(_this);\n        return _this;\n    }\n\n    _createClass(Earnings, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.getUserInfo(this.props.id);\n        }\n    }, {\n        key: 'getEarnings',\n        value: function getEarnings(id) {\n            var _this2 = this;\n\n            _axios2.default.get('/earnings/' + id).then(function (data) {\n                _this2.setState({\n                    earnings: data.data,\n                    values: _this2.spreadData(data.data),\n                    weekly: _this2.spreadData(data.data).map(function (a) {\n                        return a.y;\n                    }).reduce(function (a, b) {\n                        return a + b;\n                    }, 0)\n                });\n            }).then(function () {\n                var currentMoment = (0, _moment2.default)();\n                var sessionMoment = (0, _moment2.default)(_this2.state.earnings[_this2.state.earnings.length - 1].date);\n                var weekdays = (0, _moment2.default)().subtract(7, \"days\").format(\"DD-MM\");\n                var daysBetween = currentMoment.diff(sessionMoment, 'days');\n                _this2.checkForEarnings();\n            }).catch(function (err) {\n                console.error(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var x = this.state.values;\n            var data = [{\n                label: 'somethingA',\n                values: this.state.values\n            }];\n            var conditionalDisplay = this.state.ready ? _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('br', null),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'This week\\'s earnings'\n                ),\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    '$',\n                    this.state.weekly\n                ),\n                _react2.default.createElement('hr', null),\n                _react2.default.createElement(_reactD3Components.BarChart, {\n                    data: data,\n                    width: 700,\n                    height: 400,\n                    margin: { top: 10, bottom: 50, left: 50, right: 10 } })\n            ) : _react2.default.createElement(_reactSpinners.ClipLoader, {\n                color: '#FFF',\n                loading: this.state.loading\n            });\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'earnings' },\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Hello ',\n                    this.state.name[0],\n                    ','\n                ),\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Here are your most recent earnings: '\n                ),\n                conditionalDisplay\n            );\n        }\n    }]);\n\n    return Earnings;\n}(_react2.default.Component);\n\nexports.default = Earnings;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL3R1dG9yVmlldy9FYXJuaW5ncy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9jb21wb25lbnRzL3Byb3RlY3RlZC90dXRvclZpZXcvRWFybmluZ3MuanN4P2YyYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBGb3JtR3JvdXAsXG4gIENvbnRyb2xMYWJlbCxcbiAgRm9ybUNvbnRyb2wsXG4gIENoZWNrYm94LFxuICBSYWRpbyxcbiAgRmllbGRHcm91cCxcbiAgQnV0dG9uXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBCYXJDaGFydCB9IGZyb20gJ3JlYWN0LWQzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5jbGFzcyBFYXJuaW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICBlYXJuaW5ncyA6IFtdLFxuICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgIG5hbWU6ICdUdXRvcicgLFxuICAgICAgICAgd2VlazogdGhpcy5sYXN0V2VlaygpLFxuICAgICAgICAgbGFzdFNldmVuJDogW11cbiAgICAgICAgfVxuICAgICB0aGlzLmdldEVhcm5pbmdzID0gdGhpcy5nZXRFYXJuaW5ncy5iaW5kKHRoaXMpXG4gICAgIHRoaXMuc3ByZWFkRGF0YSA9IHRoaXMuc3ByZWFkRGF0YS5iaW5kKHRoaXMpXG4gICAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8odGhpcy5wcm9wcy5pZClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0RWFybmluZ3MoaWQpe1xuICAgICAgICBcbiAgICAgICAgYXhpb3MuZ2V0KGAvZWFybmluZ3MvJHtpZH1gKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVhcm5pbmdzIDogZGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgOiB0aGlzLnNwcmVhZERhdGEoZGF0YS5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgd2Vla2x5IDogdGhpcy5zcHJlYWREYXRhKGRhdGEuZGF0YSkubWFwKGE9PmEueSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRNb21lbnQgPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2Vzc2lvbk1vbWVudCA9IG1vbWVudCh0aGlzLnN0YXRlLmVhcm5pbmdzW3RoaXMuc3RhdGUuZWFybmluZ3MubGVuZ3RoLTFdLmRhdGUpO1xuICAgICAgICAgICAgICAgIHZhciB3ZWVrZGF5cyA9IG1vbWVudCgpLnN1YnRyYWN0KDcsXCJkYXlzXCIpLmZvcm1hdChcIkRELU1NXCIpO1xuICAgICAgICAgICAgICAgIHZhciBkYXlzQmV0d2VlbiA9IGN1cnJlbnRNb21lbnQuZGlmZihzZXNzaW9uTW9tZW50LCAnZGF5cycpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JFYXJuaW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIHNwcmVhZERhdGEgPSBkYXRhID0+IHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaChzaW5nbGVEYXkgPT4ge1xuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgeDogc2luZ2xlRGF5LmRhdGUuc2xpY2UoNSwgMTApLFxuICAgICAgICB5OiBzaW5nbGVEYXkuZGF5X2Vhcm5pbmdzXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cy5zbGljZSgtNyk7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JFYXJuaW5ncyA9ICgpPT4ge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdXG5cbiAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICAgICAgdmFyIGRheSA9IHRoaXMuc3RhdGUud2Vla1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLmVhcm5pbmdzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgd29ya2RheSA9IHRoaXMuc3RhdGUuZWFybmluZ3Nbal0uZGF0ZS5zbGljZSg1LDEwKTtcbiAgICAgICAgICAgICAgICB2YXIgd29ya2RheXMgPSB0aGlzLnN0YXRlLmVhcm5pbmdzLm1hcChhPT5hLmRhdGUuc2xpY2UoNSwxMCkpO1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSB3b3JrZGF5cy5pbmRleE9mKGRheSk7XG4gICAgICAgICAgICAgICAgaWYoaWR4ID4gLTEpe1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyd4JzogZGF5LCd5JzogdGhpcy5zdGF0ZS5lYXJuaW5nc1tpZHhdLmRheV9lYXJuaW5nc30pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7J3gnOiBkYXksJ3knOiAwfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWR5OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWVzIDogcmVzdWx0cy5yZXZlcnNlKCksXG4gICAgICAgICAgICB3ZWVrbHkgOiByZXN1bHRzLm1hcChhPT5hLnkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuXG4gICAgbGFzdFdlZWsgPSAoKSA9PiB7XG4gICAgICAgIHZhciB3ZWVrID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICAgICAgd2Vlay5wdXNoKG1vbWVudCgpLnN1YnRyYWN0KGksXCJkYXlzXCIpLmZvcm1hdChcIk1NLUREXCIpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWVrO1xuICAgIH07XG5cblxuXG5cblxuICAgIGdldFVzZXJJbmZvID0gKGlkKSA9PiB7XG4gICAgICAgIHZhciBpbmZvO1xuICAgICAgICBheGlvcy5nZXQoYC91c2Vycy9pbmZvLyR7aWR9YClcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgaW5mbyA9IGRhdGFbMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluZm8uTmFtZS5zcGxpdCgnICcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCk9PnRoaXMuZ2V0RWFybmluZ3ModGhpcy5wcm9wcy5pZCkpXG4gICAgfTtcblxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMuc3RhdGUudmFsdWVzO1xuICAgICAgICB2YXIgZGF0YSA9IFt7XG4gICAgICAgICAgICBsYWJlbDogJ3NvbWV0aGluZ0EnLFxuICAgICAgICAgICAgdmFsdWVzOiB0aGlzLnN0YXRlLnZhbHVlc1xuICAgICAgICB9XTtcbiAgICAgICAgdmFyIGNvbmRpdGlvbmFsRGlzcGxheSA9IHRoaXMuc3RhdGUucmVhZHkgPyBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGgzPlRoaXMgd2VlaydzIGVhcm5pbmdzPC9oMz5cbiAgICAgICAgPGgyPiR7dGhpcy5zdGF0ZS53ZWVrbHl9PC9oMj5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHdpZHRoPXs3MDB9XG4gICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICBtYXJnaW49e3t0b3A6IDEwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDEwfX0vPjwvZGl2PiA6IDxDbGlwTG9hZGVyXG4gICAgICAgIGNvbG9yPXsnI0ZGRid9IFxuICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IFxuICAgICAgICAvPlxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWFybmluZ3MnPlxuICAgICAgICAgICAgICAgPGgxPkhlbGxvIHt0aGlzLnN0YXRlLm5hbWVbMF19LDwvaDE+XG4gICAgICAgICAgICAgICA8aDI+SGVyZSBhcmUgeW91ciBtb3N0IHJlY2VudCBlYXJuaW5nczogPC9oMj5cbiAgICAgICAgICAgICAgIHtjb25kaXRpb25hbERpc3BsYXl9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWFybmluZ3M7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQTdFQTtBQWdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRGQTtBQTRGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXBHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBbUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFXQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFPQTs7OztBQXhJQTtBQUNBO0FBMElBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/protected/tutorView/Earnings.jsx\n");

/***/ })

}]);