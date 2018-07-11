(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/src/components/protected/Sessions.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/protected/Sessions.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Sessions = function (_Component) {\n  _inherits(Sessions, _Component);\n\n  function Sessions(props) {\n    _classCallCheck(this, Sessions);\n\n    var _this = _possibleConstructorReturn(this, (Sessions.__proto__ || Object.getPrototypeOf(Sessions)).call(this, props));\n\n    _this.getUpcomingSessions = function (id) {\n\n      _axios2.default.get('/sessions/' + id, {\n        params: {\n          isTutor: _this.state.isTutor\n        }\n      }).then(function (_ref) {\n        var data = _ref.data;\n\n        _this.setState({\n          sessions: data\n        });\n      });\n    };\n\n    _this.deleteSession = function (id) {\n      _axios2.default.delete('/sessions/' + id).then(function () {\n        _this.getUpcomingSessions(id);\n      }).catch(function (err) {\n        console.error(err);\n      });\n    };\n\n    _this.updateSessionDisplay = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'past-session' },\n        'PAST SESSION'\n      );\n    };\n\n    _this.state = {\n      sessions: [],\n      isTutor: false\n    };\n    return _this;\n  }\n\n  _createClass(Sessions, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var id = this.props.id;\n      var info;\n      _axios2.default.get('/users/info/' + id).then(function (_ref2) {\n        var data = _ref2.data;\n\n        info = data[0];\n        console.log('data recieved in settings: ', info);\n        _this2.setState({\n          name: info.Name\n        });\n      }).then(function () {\n        console.log('state now is => ', _this2.state);\n        console.log('info???', info);\n        if (info.Tutor === 1) {\n          _this2.setState({\n            isTutor: true\n          }, function () {\n            _this2.getUpcomingSessions(id);\n          });\n        } else {\n          _this2.getUpcomingSessions(id);\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactBootstrap.Jumbotron,\n          { className: 'container' },\n          _react2.default.createElement(\n            'div',\n            { className: 'main-info' },\n            _react2.default.createElement(\n              _reactBootstrap.PageHeader,\n              null,\n              ' Booked Sessions'\n            ),\n            _react2.default.createElement(\n              'p',\n              { className: 'tag-line' },\n              'currently booked sessions'\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('hr', null),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              'div',\n              { className: 'main-info' },\n              _react2.default.createElement(\n                _reactstrap.Row,\n                null,\n                _react2.default.createElement('br', null),\n                this.state.sessions.map(function (session, i) {\n                  return _react2.default.createElement(\n                    _reactstrap.Col,\n                    { sm: '3', key: i },\n                    _react2.default.createElement(\n                      'div',\n                      { className: 'indv-session', key: i },\n                      (0, _moment2.default)(session.date).isBefore() ? _this3.updateSessionDisplay() : null,\n                      _react2.default.createElement(\n                        'span',\n                        { className: 'session-name' },\n                        _react2.default.createElement(\n                          'strong',\n                          null,\n                          _react2.default.createElement(\n                            'u',\n                            null,\n                            'Tutor'\n                          ),\n                          ':'\n                        ),\n                        '  ',\n                        session.Name\n                      ),\n                      _react2.default.createElement('br', null),\n                      _react2.default.createElement(\n                        'span',\n                        null,\n                        _react2.default.createElement(\n                          'strong',\n                          null,\n                          _react2.default.createElement(\n                            'u',\n                            null,\n                            'Date'\n                          ),\n                          ':'\n                        ),\n                        ' ',\n                        session.date.slice(0, 10)\n                      ),\n                      _react2.default.createElement('br', null),\n                      _react2.default.createElement(\n                        'span',\n                        null,\n                        _react2.default.createElement(\n                          'strong',\n                          null,\n                          _react2.default.createElement(\n                            'u',\n                            null,\n                            'Start Time'\n                          ),\n                          ':'\n                        ),\n                        ' ',\n                        Number(session.time.slice(0, 2)) < 12 ? session.time.slice(0, 5) + ' a.m.' : String(24 - Number(session.time.slice(0, 2))) + session.time.slice(2, 5) + ' p.m.'\n                      ),\n                      _react2.default.createElement('br', null),\n                      _react2.default.createElement(\n                        'button',\n                        { className: 'delete-btn', size: 'sm', onClick: function onClick() {\n                            _this3.deleteSession(session.id);\n                          } },\n                        'Delete Session'\n                      )\n                    )\n                  );\n                })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Sessions;\n}(_react.Component);\n\nexports.default = Sessions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL1Nlc3Npb25zLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL1Nlc3Npb25zLmpzeD8wZDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZEltZyxcbiAgQ2FyZEJvZHksXG4gIENhcmRUaXRsZSxcbiAgQ2FyZFN1YnRpdGxlLFxuICBCdXR0b24sXG4gIFJvdyxcbiAgQ29sXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgUGFnZUhlYWRlciwgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY2xhc3MgU2Vzc2lvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZXNzaW9uczogW10sXG4gICAgICBpc1R1dG9yOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLnByb3BzLmlkXG4gICAgdmFyIGluZm87XG4gICAgYXhpb3MuZ2V0KGAvdXNlcnMvaW5mby8ke2lkfWApXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgaW5mbyA9IGRhdGFbMF1cbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSByZWNpZXZlZCBpbiBzZXR0aW5nczogJywgaW5mbylcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbmFtZTogaW5mby5OYW1lLFxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdGUgbm93IGlzID0+ICcsIHRoaXMuc3RhdGUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2luZm8/Pz8nLCBpbmZvKVxuICAgICAgICAgIGlmKGluZm8uVHV0b3IgPT09IDEpe1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGlzVHV0b3I6IHRydWVcbiAgICAgICAgICAgICAgfSwoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVcGNvbWluZ1Nlc3Npb25zKGlkKVxuICAgICAgICAgICAgICB9KTsgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRVcGNvbWluZ1Nlc3Npb25zKGlkKVxuICAgICAgICAgIH1cbiAgICAgIH0pIFxuICB9XG5cbiAgZ2V0VXBjb21pbmdTZXNzaW9ucyA9IChpZCkgPT4ge1xuICBcbiAgICBheGlvcy5nZXQoYC9zZXNzaW9ucy8ke2lkfWAsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlzVHV0b3I6IHRoaXMuc3RhdGUuaXNUdXRvclxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2Vzc2lvbnM6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBkZWxldGVTZXNzaW9uID0gKGlkKSA9PiB7XG4gICAgYXhpb3MuZGVsZXRlKGAvc2Vzc2lvbnMvJHtpZH1gKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRVcGNvbWluZ1Nlc3Npb25zKGlkKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU2Vzc2lvbkRpc3BsYXkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzdC1zZXNzaW9uXCI+XG4gICAgICAgIFBBU1QgU0VTU0lPTlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SnVtYm90cm9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgICA8UGFnZUhlYWRlcj4gQm9va2VkIFNlc3Npb25zPC9QYWdlSGVhZGVyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFnLWxpbmVcIj5jdXJyZW50bHkgYm9va2VkIHNlc3Npb25zPC9wPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZXNzaW9ucy5tYXAoKHNlc3Npb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIzXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmR2LXNlc3Npb25cIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoc2Vzc2lvbi5kYXRlKS5pc0JlZm9yZSgpID8gdGhpcy51cGRhdGVTZXNzaW9uRGlzcGxheSgpIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uLW5hbWVcIj48c3Ryb25nPjx1PlR1dG9yPC91Pjo8L3N0cm9uZz4gIHtzZXNzaW9uLk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2JyPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+PHU+RGF0ZTwvdT46PC9zdHJvbmc+IHtzZXNzaW9uLmRhdGUuc2xpY2UoMCwxMCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2JyPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+PHU+U3RhcnQgVGltZTwvdT46PC9zdHJvbmc+IHtOdW1iZXIoc2Vzc2lvbi50aW1lLnNsaWNlKDAsMikpIDwgMTIgPyBzZXNzaW9uLnRpbWUuc2xpY2UoMCw1KSArICcgYS5tLicgOiBTdHJpbmcoMjQgLSBOdW1iZXIoc2Vzc2lvbi50aW1lLnNsaWNlKDAsMikpKSArIHNlc3Npb24udGltZS5zbGljZSgyLDUpICsgJyBwLm0uJyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWJ0blwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmRlbGV0ZVNlc3Npb24oc2Vzc2lvbi5pZCl9fT5EZWxldGUgU2Vzc2lvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9ucyBcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFTQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUEvQ0E7QUFpREE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF6REE7QUEyREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUEvREE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBa0NBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQURBO0FBREE7QUFGQTtBQURBO0FBTkE7QUFEQTtBQURBO0FBaUNBOzs7O0FBdEdBO0FBQ0E7QUF3R0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/protected/Sessions.jsx\n");

/***/ })

}]);