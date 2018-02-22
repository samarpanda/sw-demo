exports.ids = [1];
exports.modules = {

/***/ "/CLT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/q-components/components/pageLayer/index.js
var pageLayer = __webpack_require__("uoES");

// EXTERNAL MODULE: ../node_modules/q-mdc/elements/material-toolbar/index.js
var material_toolbar = __webpack_require__("wlTu");

// EXTERNAL MODULE: ../node_modules/q-mdc/elements/material-toolbar-row/index.js
var material_toolbar_row = __webpack_require__("IpDW");

// EXTERNAL MODULE: ../node_modules/q-mdc/elements/material-toolbar-section/index.js
var material_toolbar_section = __webpack_require__("SaRr");

// EXTERNAL MODULE: ../node_modules/q-mdc/elements/material-toolbar-title/index.js
var material_toolbar_title = __webpack_require__("cZ+C");

// EXTERNAL MODULE: ../node_modules/q-mdc/elements/material-list/index.js
var material_list = __webpack_require__("QO9c");

// EXTERNAL MODULE: ../node_modules/q-mdc/elements/material-list-item/index.js
var material_list_item = __webpack_require__("i30l");

// EXTERNAL MODULE: ../node_modules/q-components/components/icons/headerIcons/index.js + 4 modules
var headerIcons = __webpack_require__("Bkqj");

// EXTERNAL MODULE: ../node_modules/q-components/components/icons/searchIcons/index.js + 4 modules
var searchIcons = __webpack_require__("CkQa");

// EXTERNAL MODULE: ../node_modules/axios/index.js
var axios = __webpack_require__("dZBD");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ../node_modules/q-components/components/search/suggester.scss
var suggester = __webpack_require__("T6tC");
var suggester_default = /*#__PURE__*/__webpack_require__.n(suggester);

// EXTERNAL MODULE: ../node_modules/q-components/helpers/constants.js
var constants = __webpack_require__("LH+s");

// EXTERNAL MODULE: ../node_modules/q-components/helpers/index.js
var helpers = __webpack_require__("xuq0");

// CONCATENATED MODULE: ../node_modules/q-components/components/search/trendingSearches/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var trendingSearches_TrendingSearches = function (_Component) {
	_inherits(TrendingSearches, _Component);

	function TrendingSearches(props) {
		_classCallCheck(this, TrendingSearches);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.fetchTrendingSearches = function () {
			// fetch trending searches from APi
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS for more info on CORS preflight headers
			// Can use URLSearchParams but there is only value to send, and URLSearchParams has some browser dependencies and we can even use encodeURIComponent
			// Or we can configure our server to send Accept: * in CORS preflight request
			if (sessionStorage) {
				var trendingSearches = JSON.parse(sessionStorage.getItem(constants["k" /* TRENDING_SEARCHES_KEY */]));
				if (trendingSearches && trendingSearches.length > 0) {
					_this.setState({
						trendingSearches: trendingSearches
					});
					return;
				}
			}
			var data = 'cityId=' + Object(helpers["b" /* getCurrentCityId */])();
			axios_default.a.post(constants["i" /* HEADER_API_HOST */] + '/' + constants["l" /* TRENDING_SEARCH_API_PATH */], data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(function (response) {
				var trendingSearches = [];
				if (response.data) {
					response.data.forEach(function (searchItem, index) {
						trendingSearches.push(Object.keys(searchItem.attr).reduce(function (str, currentValue) {
							return str + ' ' + searchItem.attr[currentValue];
						}, ''));
					});
				}
				if (sessionStorage) {
					sessionStorage.setItem(constants["k" /* TRENDING_SEARCHES_KEY */], JSON.stringify(trendingSearches));
				}
				_this.setState({
					trendingSearches: trendingSearches
				});
			});
		};

		_this.handleClick = function (event) {
			var value = event.target.innerText;
			if (_this.props.onClick && typeof _this.props.onClick === 'function') {
				_this.props.onClick(value, event);
			} else {
				var searchCallback = _this.props.searchCallback;

				searchCallback(value);
			}
		};

		_this.state = {
			trendingSearches: []
		};
		return _this;
	}

	TrendingSearches.prototype.componentDidMount = function componentDidMount() {
		this.fetchTrendingSearches();
	};

	TrendingSearches.prototype.render = function render() {
		var _this2 = this;

		var trendingSearches = this.state.trendingSearches;

		if (trendingSearches.length === 0) {
			return null;
		}
		return Object(preact_min["h"])(
			'div',
			null,
			Object(preact_min["h"])(
				'h5',
				null,
				'Trending Searches'
			),
			Object(preact_min["h"])(
				material_list["a" /* default */],
				null,
				trendingSearches.map(function (searchItem) {
					return Object(preact_min["h"])(
						material_list_item["a" /* default */],
						null,
						Object(preact_min["h"])(searchIcons["c" /* Trending */], { 'class': 'search__suggester--icon' }),
						Object(preact_min["h"])(
							'p',
							{ onClick: _this2.handleClick },
							searchItem
						)
					);
				})
			)
		);
	};

	return TrendingSearches;
}(preact_min["Component"]);

/* harmony default export */ var search_trendingSearches = (trendingSearches_TrendingSearches);
// CONCATENATED MODULE: ../node_modules/q-components/components/search/recentSearches/index.js
function recentSearches__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function recentSearches__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function recentSearches__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var recentSearches_RecentSearches = function (_Component) {
	recentSearches__inherits(RecentSearches, _Component);

	function RecentSearches(props) {
		recentSearches__classCallCheck(this, RecentSearches);

		var _this = recentSearches__possibleConstructorReturn(this, _Component.call(this, props));

		_this.fetchRecentSearches = function () {
			if (localStorage) {
				var recentSearches = localStorage.getItem(constants["j" /* RECENT_SEARCHES_KEY */]);
				if (recentSearches) {
					_this.setState({
						recentSearches: recentSearches.split(',')
					});
				}
			}
		};

		_this.handleRecentSearchClick = function (event) {
			var value = event.target.innerText;
			if (_this.props.onClick && typeof _this.props.onClick === 'function') {
				_this.props.onClick(value, event);
			} else {
				var searchCallback = _this.props.searchCallback;

				if (searchCallback && typeof searchCallback === 'function') {
					searchCallback(value);
				}
			}
		};

		_this.handleClearClick = function (e) {
			if (_this.props.onClearClick && typeof _this.props.onClearClick === 'function') {
				_this.props.onClearClick(e);
			} else {
				localStorage.setItem(constants["j" /* RECENT_SEARCHES_KEY */], '');
				_this.setState({
					recentSearches: []
				});
			}
		};

		_this.state = {
			recentSearches: []
		};
		return _this;
	}

	RecentSearches.prototype.componentDidMount = function componentDidMount() {
		this.fetchRecentSearches();
	};

	RecentSearches.prototype.render = function render() {
		var _this2 = this;

		var recentSearches = this.state.recentSearches;
		var className = this.props.className;

		if (recentSearches.length === 0) {
			return null;
		}
		return Object(preact_min["h"])(
			'div',
			{ className: className },
			Object(preact_min["h"])(
				'h5',
				null,
				'Recent Searches',
				Object(preact_min["h"])(
					'a',
					{ onClick: this.handleClearClick },
					'clear'
				)
			),
			Object(preact_min["h"])(
				material_list["a" /* default */],
				null,
				recentSearches.map(function (searchItem) {
					return Object(preact_min["h"])(
						material_list_item["a" /* default */],
						null,
						Object(preact_min["h"])(searchIcons["a" /* Recent */], { 'class': 'search__suggester--icon' }),
						Object(preact_min["h"])(
							'p',
							{ onClick: _this2.handleRecentSearchClick },
							searchItem
						)
					);
				})
			)
		);
	};

	return RecentSearches;
}(preact_min["Component"]);

/* harmony default export */ var search_recentSearches = (recentSearches_RecentSearches);
// EXTERNAL MODULE: ../node_modules/universal-cookie/lib/index.js
var lib = __webpack_require__("Dev8");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ../node_modules/q-components/components/search/searchPopup/index.js
function searchPopup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function searchPopup__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function searchPopup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var regex = /(<([^>]+)>)/ig;

var axiosInstance = axios_default.a.create({
	baseURL: 'https://www.quikr.com/',
	timeout: 1000,
	headers: {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
		'cache-control': 'no-cache',
		'postman-token': '05ebf28a-dc1b-1d07-bc81-2b0402e3f3b5'
	}
});

var cookies = new lib_default.a();

var searchPopup_searchPopup = function (_Component) {
	searchPopup__inherits(searchPopup, _Component);

	function searchPopup(props) {
		searchPopup__classCallCheck(this, searchPopup);

		var _this = searchPopup__possibleConstructorReturn(this, _Component.call(this, props));

		_this.processText = function (text) {
			var strippedText = text.replace(regex, '');
			var value = _this.state.value;

			var parts = strippedText.split(new RegExp('(' + value + ')', 'gi'));
			return Object(preact_min["h"])(
				'p',
				null,
				parts.map(function (part, i) {
					return part.toLowerCase() === value.toLowerCase() ? Object(preact_min["h"])(
						'span',
						{ key: i, style: { fontWeight: 'bold' } },
						part
					) : part;
				})
			);
		};

		_this.defaultSearchHandler = function (event) {
			var value = void 0;
			if (event) {
				value = event.target.value;
			} else {
				// unreliable
				value = _this.state.value;
			}

			var hostname = 'www.quikr.com';
			if (window && window.location && window.location.hostname) {
				hostname = window.location.hostname;
			}

			var cityId = cookies.get('prefer_city_id') || null;
			var subdom = cookies.get('new_prefer_city') || 'app';

			var searchUrl = cityId ? '//' + hostname + '/common?aj=1&for=searchautosuggest&data=' + value + '&subdom=' + subdom + '&rand=1515663417214&cityId=' + cityId : '//' + hostname + '/common?aj=1&for=searchautosuggest&data=' + value + '&subdom=' + subdom + '&rand=1515663417214';

			axiosInstance.get(searchUrl).then(function (res) {
				if (res.status === 200) {
					_this.setState({
						results: res.data,
						err: null
					});
				} else {
					_this.setState({
						results: [],
						err: 'Something went wrong'
					});
				}
			}).catch(function (err) {
				_this.setState({
					err: err,
					results: []
				});
			});
		};

		_this.updateSearchSuggestions = function (searchSuggestions) {
			_this.setState({
				searchSuggestions: searchSuggestions
			});
		};

		_this.handleSearch = function (event) {
			var onSearchCallback = _this.props.onSearchCallback;
			var value = event.target.value;

			_this.setState({
				value: value
			});

			// if onSearchCallback is in props and its a method then call that method
			if (onSearchCallback && typeof onSearchCallback === 'function') {
				// If they still want to call the defaultSearch handler, it is passed as second arguement (if we want to fire an event before fetching search results)
				onSearchCallback(event, _this.updateSearchSuggestions, _this.defaultSearchHandler);
			} else {
				// call the default search handler
				_this.defaultSearchHandler(event);
			}
		};

		_this.handleSearchRedirect = function (event) {
			event.preventDefault();

			var value = _this.state.value;

			if (value && value !== '') {
				_this.pushToRecentSearches(value);

				var onSearchSubmit = _this.props.onSearchSubmit;

				if (onSearchSubmit && typeof onSearchSubmit === 'function') {
					onSearchSubmit(value, _this.redirectToSearchResults);
				} else {
					_this.redirectToSearchResults(value);
				}
			}
		};

		_this.handleRecentSearchClick = function (value, event) {
			_this.pushToRecentSearches(value);
			if (_this.props.onRecentSearchClick && typeof _this.props.onRecentSearchClick === 'function') {
				_this.props.onRecentSearchClick(value, event);
			} else {
				_this.redirectToSearchResults(value);
			}
		};

		_this.handleTrendingSearchClick = function (value, event) {
			_this.pushToRecentSearches(value);
			if (_this.props.onTrendingSearchClick && typeof _this.props.onTrendingSearchClick === 'function') {
				_this.props.onTrendingSearchClick(value, event);
			} else {
				_this.redirectToSearchResults(value);
			}
		};

		_this.pushToRecentSearches = function (value) {
			// Add the search to recent searches
			if (localStorage) {
				var recentSearches = localStorage.getItem(constants["j" /* RECENT_SEARCHES_KEY */]);
				if (recentSearches) {
					recentSearches = recentSearches.split(',');
				} else {
					recentSearches = [];
				}
				// find the current value in recent searches if it exists delete it or else if the length >= 3 then delete the last element
				var index = recentSearches.indexOf(value);
				if (index >= 0) {
					recentSearches.splice(index, 1);
				} else if (recentSearches.length >= 3) {
					recentSearches.pop();
				}
				// push the current value at the end
				recentSearches.unshift(value);
				localStorage.setItem(constants["j" /* RECENT_SEARCHES_KEY */], recentSearches);
			}
		};

		_this.redirectToSearchResults = function (value) {

			// redirect to search results page
			var hostname = 'www.quikr.com';
			if (window && window.location && window.location.hostname) {
				hostname = window.location.hostname;
			}

			window.location = 'http://' + hostname + '/' + value + '-all/' + value + '/x23?sx=true';
		};

		_this.getSearchSuggestions = function () {
			var searchSuggestions = _this.props.searchSuggestions;
			var _this$state = _this.state,
			    results = _this$state.results,
			    err = _this$state.err,
			    suggestions = _this$state.searchSuggestions;

			if (suggestions) {
				return suggestions;
			}
			// Should be removed when everyone uses callback to update suggestions
			if (searchSuggestions) {
				return searchSuggestions;
			}
			if (err || results.length === 0) {
				return null;
			}
			return Object(preact_min["h"])(
				'div',
				{ 'class': 'toolbar-search__suggestions' },
				Object(preact_min["h"])(
					'h5',
					null,
					'Suggestions'
				),
				Object(preact_min["h"])(
					material_list["a" /* default */],
					null,
					results.map(function (v) {
						return Object(preact_min["h"])(
							material_list_item["a" /* default */],
							{ key: v.id, link: true, href: v.url },
							Object(preact_min["h"])(searchIcons["b" /* Search */], { 'class': 'search__suggester--icon' }),
							Object(preact_min["h"])(
								'p',
								null,
								_this.processText(v.keyworddata[0]),
								Object(preact_min["h"])(
									'label',
									null,
									'in ' + v.subcatdata
								)
							)
						);
					})
				)
			);
		};

		_this.state = {
			value: null,
			results: [],
			err: null,
			searchSuggestions: null
		};
		return _this;
	}

	// On change is triggered when the input loses focus, so moving it to form onSubmit


	// Subcomponent getters


	searchPopup.prototype.render = function render(_ref, _ref2, context) {
		var show = _ref.show,
		    placeholder = _ref.placeholder,
		    handleSearch = _ref.handleSearch,
		    closePopup = _ref.closePopup,
		    _ref$showTrendingSear = _ref.showTrendingSearches,
		    showTrendingSearches = _ref$showTrendingSear === undefined ? true : _ref$showTrendingSear,
		    _ref$showRecentSearch = _ref.showRecentSearches,
		    showRecentSearches = _ref$showRecentSearch === undefined ? true : _ref$showRecentSearch;
		var value = _ref2.value,
		    results = _ref2.results,
		    err = _ref2.err;

		return Object(preact_min["h"])(
			pageLayer["a" /* default */],
			{ show: show },
			Object(preact_min["h"])(
				material_toolbar["a" /* default */],
				null,
				Object(preact_min["h"])(
					material_toolbar_row["a" /* default */],
					null,
					Object(preact_min["h"])(
						material_toolbar_section["a" /* default */],
						{ start: true },
						Object(preact_min["h"])(
							'a',
							{ 'class': 'mdc-toolbar__icon--menu', onClick: closePopup },
							Object(preact_min["h"])(headerIcons["b" /* Back */], { 'class': 'mdc-toolbar__icons' })
						),
						Object(preact_min["h"])(
							material_toolbar_title["a" /* default */],
							null,
							Object(preact_min["h"])(
								'div',
								{ 'class': 'toolbar-search' },
								Object(preact_min["h"])(
									'form',
									{ onSubmit: this.handleSearchRedirect },
									Object(preact_min["h"])('input', { 'class': 'toolbar-search__field', value: value, autoFocus: true, type: 'search', placeholder: placeholder, onInput: this.handleSearch })
								)
							)
						)
					)
				)
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': 'search__suggester' },
				this.getSearchSuggestions(),
				(!value || value === '') && Object(preact_min["h"])(
					'div',
					null,
					showRecentSearches && Object(preact_min["h"])(search_recentSearches, { onClick: this.handleRecentSearchClick, searchCallback: this.redirectToSearchResults }),
					showTrendingSearches && Object(preact_min["h"])(search_trendingSearches, { onClick: this.handleTrendingSearchClick, searchCallback: this.redirectToSearchResults })
				)
			)
		);
	};

	return searchPopup;
}(preact_min["Component"]);

/* harmony default export */ var search_searchPopup = __webpack_exports__["default"] = (searchPopup_searchPopup);

/***/ })

};;
//# sourceMappingURL=1.chunk.efb2d.js.map