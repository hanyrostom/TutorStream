(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./client/src/components/TestList.jsx":
/*!********************************************!*\
  !*** ./client/src/components/TestList.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestList = function (_Component) {\n  _inherits(TestList, _Component);\n\n  function TestList(props) {\n    _classCallCheck(this, TestList);\n\n    var _this = _possibleConstructorReturn(this, (TestList.__proto__ || Object.getPrototypeOf(TestList)).call(this, props));\n\n    _this.state = {\n      Tests: [],\n      dropDownTitle: 'Tests'\n    };\n    _this.handleTestSelect = _this.handleTestSelect.bind(_this);\n    return _this;\n  }\n\n  _createClass(TestList, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      _axios2.default.get('/tests').then(function (response) {\n        _this2.setState({\n          Tests: response.data\n        });\n      }).catch(function (err) {\n        console.error('There was an error getting the list of tests: ', err);\n      });\n    }\n  }, {\n    key: 'handleTestSelect',\n    value: function handleTestSelect(test) {\n      var _this3 = this;\n\n      this.setState({\n        dropDownTitle: test.Name\n      }, function () {\n        _this3.props.setTestID(test.ID);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            _reactBootstrap.DropdownButton,\n            {\n              bsStyle: 'default',\n              title: this.state.dropDownTitle,\n              key: '0',\n              id: 'dropdown-basic-0',\n              onSelect: function onSelect(e) {\n                _this4.handleTestSelect(e);\n              } },\n            this.state.Tests.map(function (test, i) {\n              return _react2.default.createElement(\n                _reactBootstrap.MenuItem,\n                { eventKey: test, key: i },\n                test.Name\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return TestList;\n}(_react.Component);\n\nexports.default = TestList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVGVzdExpc3QuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9UZXN0TGlzdC5qc3g/Yzc0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IERyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgTWVudUl0ZW0sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNsYXNzIFRlc3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBUZXN0cyA6IFtdLFxuICAgICAgZHJvcERvd25UaXRsZSA6ICdUZXN0cydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVUZXN0U2VsZWN0ID0gdGhpcy5oYW5kbGVUZXN0U2VsZWN0LmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zLmdldCgnL3Rlc3RzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBUZXN0cyA6IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgdGhlIGxpc3Qgb2YgdGVzdHM6ICcsIGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVRlc3RTZWxlY3QodGVzdCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJvcERvd25UaXRsZSA6IHRlc3QuTmFtZVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2V0VGVzdElEKHRlc3QuSUQpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiBcbiAgICAgICAgICBic1N0eWxlPSdkZWZhdWx0J1xuICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmRyb3BEb3duVGl0bGV9XG4gICAgICAgICAga2V5PScwJ1xuICAgICAgICAgIGlkPXtgZHJvcGRvd24tYmFzaWMtMGB9XG4gICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7dGhpcy5oYW5kbGVUZXN0U2VsZWN0KGUpfX0+XG4gICAgICAgICAgeyB0aGlzLnN0YXRlLlRlc3RzLm1hcCgodGVzdCwgaSkgPT4gPE1lbnVJdGVtIGV2ZW50S2V5PXt0ZXN0fSBrZXk9e2l9Pnt0ZXN0Lk5hbWV9PC9NZW51SXRlbT4pIH1cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXN0TGlzdDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFPQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBREE7QUFhQTs7OztBQTlDQTtBQUNBO0FBaURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/TestList.jsx\n");

/***/ })

}]);