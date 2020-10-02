/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/todo_redux.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/todo_redux.jsx":
/*!*********************************!*\
  !*** ./frontend/todo_redux.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/brandonleong/Desktop/solution_1/frontend/todo_redux.jsx: Unexpected token, expected \";\" (29:36)\n\n\u001b[0m \u001b[90m 27 | \u001b[39m  \u001b[36mconst\u001b[39m applyMiddlewares \u001b[33m=\u001b[39m (store\u001b[33m,\u001b[39m \u001b[33m...\u001b[39mmiddlewares) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m    let dispatch \u001b[33m=\u001b[39m store\u001b[33m.\u001b[39mdispatch\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m    middlewares\u001b[33m.\u001b[39mforEach(middleware) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m    dispatch \u001b[33m=\u001b[39m middleware(store)(dispatch)\u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m  }\u001b[0m\n    at Object._raise (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:753:17)\n    at Object.unexpected (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8966:16)\n    at Object.semicolon (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8948:40)\n    at Object.parseExpressionStatement (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11971:10)\n    at Object.parseStatementContent (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11567:19)\n    at Object.parseStatement (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Object.parseBlockBody (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Object.parseBlock (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11983:10)\n    at Object.parseFunctionBody (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10963:24)\n    at Object.parseArrowExpression (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10932:10)\n    at Object.parseParenAndDistinguishExpression (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10501:12)\n    at Object.parseExprAtom (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10177:21)\n    at Object.parseExprAtom (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:4718:20)\n    at Object.parseExprSubscripts (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9620:21)\n    at allowInAnd (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9586:39)\n    at Object.allowInAnd (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11303:12)\n    at Object.parseMaybeAssignAllowIn (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9586:17)\n    at Object.parseVar (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:12097:70)\n    at Object.parseVarStatement (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11906:10)\n    at Object.parseStatementContent (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11498:21)\n    at Object.parseStatement (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/brandonleong/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:12013:25)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map