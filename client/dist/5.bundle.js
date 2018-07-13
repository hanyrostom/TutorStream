(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/src/components/protected/Settings.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/protected/Settings.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Settings = function (_Component) {\n  _inherits(Settings, _Component);\n\n  function Settings() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Settings);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Settings.__proto__ || Object.getPrototypeOf(Settings)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      tests: [],\n      test: '',\n      name: '',\n      bio: '',\n      tutorBio: '',\n      submitted: false,\n      selectedTests: [],\n      price: '',\n      isTutor: false,\n      preSelected: [],\n      photo: '',\n      selectedFile: null\n    }, _this.getAllTests = function () {\n      _axios2.default.get('/tests').then(function (_ref2) {\n        var data = _ref2.data;\n\n        _this.setState({\n          tests: data\n        });\n      }).catch(function (err) {\n        console.error('There was an error getting all the tests: ', err);\n      });\n    }, _this.handleCheck = function (e) {\n      var array = _this.state.selectedTests.slice();\n      if (array.indexOf(Number(e.target.value)) === -1) {\n        _this.setState({\n          selectedTests: [].concat(_toConsumableArray(_this.state.selectedTests), [e.target.value])\n        }, function () {\n          return console.log(_this.state.selectedTests);\n        });\n      } else {\n        var idx = array.indexOf(Number(e.target.value));\n        console.log('idx', idx);\n        array.splice(idx, 1);\n        _this.setState({\n          selectedTests: array\n        }, function () {\n          return console.log(_this.state.selectedTests);\n        });\n      }\n    }, _this.handleChange = function (event) {\n      _this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }, _this.isPreselectedTests = function (id) {\n      if (_this.state.selectedTests.indexOf(id) !== -1) {\n        return true;\n      } else {\n        return false;\n      }\n    }, _this.handleSubmit = function (event) {\n      event.preventDefault();\n      var testsArray = [];\n      _this.state.selectedTests.forEach(function (test_id) {\n        testsArray.push({\n          tutor_id: _this.props.id,\n          test_id: test_id\n        });\n      });\n\n      var form = {\n        tests: testsArray,\n        tutorBio: _this.state.tutorBio,\n        rate: Number(_this.state.price),\n        id: _this.props.id,\n        userBio: _this.state.bio,\n        name: _this.state.name,\n        isTutor: _this.state.isTutor\n      };\n\n      _axios2.default.post('/users/' + _this.props.id, form).then(function () {\n        _this.handleFileUpload(_this.props.id);\n      }).then(function () {\n        _this.setState({\n          selectedFile: null,\n          submitted: true\n        });\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    }, _this.handleFileSelect = function (e) {\n      _this.setState({\n        selectedFile: e.target.files\n      });\n    }, _this.handleFileUpload = function (user_id) {\n      var formData = new FormData();\n      formData.append('file', _this.state.selectedFile[0]);\n      _axios2.default.post('http://ec2-34-207-66-224.compute-1.amazonaws.com:5000/photo-upload', formData, {\n        headers: {\n          'Content-Type': 'multipart/form-data',\n          crossDomain: true\n        }\n      }).then(function (_ref3) {\n        var data = _ref3.data;\n\n        var userPhoto = {\n          user_id: user_id,\n          location: data.Location\n        };\n        _axios2.default.post('/users/photo', userPhoto);\n      }).catch(function (error) {\n        return console.error('There was an error with the POST request to the server: ', error);\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Settings, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var id = this.props.id;\n\n      var info = void 0;\n      _axios2.default.get('/users/info/' + id).then(function (_ref4) {\n        var data = _ref4.data;\n\n        info = data[0];\n        _this2.setState({\n          id: info.id,\n          name: info.Name,\n          bio: info.Bio\n        });\n      }).then(function () {\n        _this2.getAllTests();\n        if (info.Tutor === 1) {\n          _this2.setState({\n            isTutor: true\n          });\n          _axios2.default.get('/tutors/' + id).then(function (_ref5) {\n            var data = _ref5.data;\n\n            info = data;\n            var preselected = [];\n            info.tests.forEach(function (test) {\n              preselected.push(test.id);\n            });\n            _this2.setState({\n              tutorBio: info.Bio,\n              price: info.Price,\n              selectedTests: preselected\n            });\n          });\n        }\n      }).then(function () {\n        return _axios2.default.get('/users/photo', {\n          params: {\n            user_id: _this2.props.id\n          }\n        });\n      }).then(function (_ref6) {\n        var data = _ref6.data;\n\n        console.log('what is the data coming through?', data);\n        _this2.setState({\n          photo: data[0].location\n        });\n      }).catch(function (err) {\n        console.error(\"There was an error getting the user's settings: \", err);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var conditionalDisplay = !this.state.isTutor ? _react2.default.createElement('div', null) : _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Tutor settings '\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Tutor Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'tutorBio',\n            value: this.state.tutorBio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Rate: (hourly)'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'number',\n            placeholder: this.state.price,\n            name: 'price',\n            value: this.state.price,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          null,\n          this.state.tests.map(function (test, i) {\n            return _react2.default.createElement(\n              _reactBootstrap.Checkbox,\n              {\n                onChange: _this3.handleCheck,\n                inline: true,\n                key: i,\n                value: Number(test.id),\n                checked: _this3.isPreselectedTests(test.id) ? 'checked' : undefined\n              },\n              test.Name\n            );\n          })\n        )\n      );\n\n      if (this.state.submitted) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/findTutor' });\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'settings' },\n        _react2.default.createElement(\n          'h1',\n          { className: 'settings-header' },\n          'Settings'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'div',\n          { className: 'image-settings' },\n          _react2.default.createElement('img', {\n            className: 'img-circle',\n            src: this.state.photo,\n            alt: this.state.name + '\\'s profile picture'\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Name'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'name',\n            readonly: 'readonly',\n            value: this.state.name,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'bio',\n            value: this.state.bio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsFile', encType: 'multipart/form-data' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Update your profile picture :'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'file',\n            name: 'photo',\n            onChange: this.handleFileSelect\n          })\n        ),\n        _react2.default.createElement(\n          'h1',\n          null,\n          '_________________________________________'\n        ),\n        conditionalDisplay,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'success', type: 'submit', onClick: this.handleSubmit },\n          'Submit'\n        )\n      );\n    }\n  }]);\n\n  return Settings;\n}(_react.Component);\n\nexports.default = Settings;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL1NldHRpbmdzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL1NldHRpbmdzLmpzeD84NjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBDaGVja2JveCxcbiAgQnV0dG9uXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRlc3RzOiBbXSxcbiAgICB0ZXN0OiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBiaW86ICcnLFxuICAgIHR1dG9yQmlvOiAnJyxcbiAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkVGVzdHM6IFtdLFxuICAgIHByaWNlOiAnJyxcbiAgICBpc1R1dG9yOiBmYWxzZSxcbiAgICBwcmVTZWxlY3RlZDogW10sXG4gICAgcGhvdG86ICcnLFxuICAgIHNlbGVjdGVkRmlsZTogbnVsbFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGluZm87XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYC91c2Vycy9pbmZvLyR7aWR9YClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpbmZvID0gZGF0YVswXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaWQ6IGluZm8uaWQsXG4gICAgICAgICAgbmFtZTogaW5mby5OYW1lLFxuICAgICAgICAgIGJpbzogaW5mby5CaW9cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdldEFsbFRlc3RzKCk7XG4gICAgICAgIGlmIChpbmZvLlR1dG9yID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1R1dG9yOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXhpb3MuZ2V0KGAvdHV0b3JzLyR7aWR9YCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGluZm8gPSBkYXRhO1xuICAgICAgICAgICAgdmFyIHByZXNlbGVjdGVkID0gW107XG4gICAgICAgICAgICBpbmZvLnRlc3RzLmZvckVhY2godGVzdCA9PiB7XG4gICAgICAgICAgICAgIHByZXNlbGVjdGVkLnB1c2godGVzdC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0dXRvckJpbzogaW5mby5CaW8sXG4gICAgICAgICAgICAgIHByaWNlOiBpbmZvLlByaWNlLFxuICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzOiBwcmVzZWxlY3RlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoJy91c2Vycy9waG90bycsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMucHJvcHMuaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2hhdCBpcyB0aGUgZGF0YSBjb21pbmcgdGhyb3VnaD8nLCBkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGhvdG86IGRhdGFbMF0ubG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgdXNlcidzIHNldHRpbmdzOiBcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsVGVzdHMgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJy90ZXN0cycpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGVzdHM6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIGFsbCB0aGUgdGVzdHM6ICcsIGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGVjayA9IGUgPT4ge1xuICAgIHZhciBhcnJheSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5zbGljZSgpO1xuICAgIGlmIChhcnJheS5pbmRleE9mKE51bWJlcihlLnRhcmdldC52YWx1ZSkpID09PSAtMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkVGVzdHM6IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMsIGUudGFyZ2V0LnZhbHVlXVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWR4ID0gYXJyYXkuaW5kZXhPZihOdW1iZXIoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpZHgnLCBpZHgpO1xuICAgICAgYXJyYXkuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRUZXN0czogYXJyYXlcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBpc1ByZXNlbGVjdGVkVGVzdHMgPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHRlc3RzQXJyYXkgPSBbXTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMuZm9yRWFjaCh0ZXN0X2lkID0+IHtcbiAgICAgIHRlc3RzQXJyYXkucHVzaCh7XG4gICAgICAgIHR1dG9yX2lkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICB0ZXN0X2lkXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBmb3JtID0ge1xuICAgICAgdGVzdHM6IHRlc3RzQXJyYXksXG4gICAgICB0dXRvckJpbzogdGhpcy5zdGF0ZS50dXRvckJpbyxcbiAgICAgIHJhdGU6IE51bWJlcih0aGlzLnN0YXRlLnByaWNlKSxcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlckJpbzogdGhpcy5zdGF0ZS5iaW8sXG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICBpc1R1dG9yOiB0aGlzLnN0YXRlLmlzVHV0b3JcbiAgICB9O1xuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAvdXNlcnMvJHt0aGlzLnByb3BzLmlkfWAsIGZvcm0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZVVwbG9hZCh0aGlzLnByb3BzLmlkKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkRmlsZTogbnVsbCxcbiAgICAgICAgICBzdWJtaXR0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIGhhbmRsZUZpbGVTZWxlY3QgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRmlsZTogZS50YXJnZXQuZmlsZXNcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVGaWxlVXBsb2FkID0gdXNlcl9pZCA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZVswXSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICAnaHR0cDovL2VjMi0zNC0yMDctNjYtMjI0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjUwMDAvcGhvdG8tdXBsb2FkJyxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBsZXQgdXNlclBob3RvID0ge1xuICAgICAgICAgIHVzZXJfaWQsXG4gICAgICAgICAgbG9jYXRpb246IGRhdGEuTG9jYXRpb25cbiAgICAgICAgfTtcbiAgICAgICAgYXhpb3MucG9zdCgnL3VzZXJzL3Bob3RvJywgdXNlclBob3RvKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT5cbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHdpdGggdGhlIFBPU1QgcmVxdWVzdCB0byB0aGUgc2VydmVyOiAnLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgIClcbiAgICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb25kaXRpb25hbERpc3BsYXkgPSAhdGhpcy5zdGF0ZS5pc1R1dG9yID8gKFxuICAgICAgPGRpdiAvPlxuICAgICkgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+VHV0b3Igc2V0dGluZ3MgPC9oMj5cblxuICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICAgICAgPENvbnRyb2xMYWJlbD5UdXRvciBCaW88L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0IChNYXg6IDI1NSBjaGFyYWN0ZXJzKVwiXG4gICAgICAgICAgICBuYW1lPVwidHV0b3JCaW9cIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudHV0b3JCaW99XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0YXJlYVwiPlxuICAgICAgICAgIDxDb250cm9sTGFiZWw+UmF0ZTogKGhvdXJseSk8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuc3RhdGUucHJpY2V9XG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17TnVtYmVyKHRlc3QuaWQpfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1ByZXNlbGVjdGVkVGVzdHModGVzdC5pZCkgPyAnY2hlY2tlZCcgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVzdC5OYW1lfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0dGVkKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2ZpbmRUdXRvclwiIC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2V0dGluZ3MtaGVhZGVyXCI+U2V0dGluZ3M8L2gxPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiXG4gICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5waG90b31cbiAgICAgICAgICAgICAgYWx0PXtgJHt0aGlzLnN0YXRlLm5hbWV9J3MgcHJvZmlsZSBwaWN0dXJlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPk5hbWU8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0IChNYXg6IDI1NSBjaGFyYWN0ZXJzKVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPkJpbzwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHQgKE1heDogMjU1IGNoYXJhY3RlcnMpXCJcbiAgICAgICAgICAgICAgbmFtZT1cImJpb1wiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJpb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzRmlsZVwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPlVwZGF0ZSB5b3VyIHByb2ZpbGUgcGljdHVyZSA6PC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBuYW1lPVwicGhvdG9cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgIDxoMT5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXzwvaDE+XG5cbiAgICAgICAgICB7Y29uZGl0aW9uYWxEaXNwbGF5fVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAg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\n//# sourceURL=webpack-internal:///./client/src/components/protected/Settings.jsx\n");

/***/ })

}]);