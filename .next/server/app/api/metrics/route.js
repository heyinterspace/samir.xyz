/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/metrics/route";
exports.ids = ["app/api/metrics/route"];
exports.modules = {

/***/ "(rsc)/./app/api/metrics/route.ts":
/*!**********************************!*\
  !*** ./app/api/metrics/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/**\n * Portfolio Metrics API Route\n * \n * This API route provides just the portfolio metrics summary data\n * with minimal processing for faster loading.\n */ \n\nasync function GET() {\n    try {\n        console.log('Fetching portfolio metrics summary data...');\n        // Get minimal data needed for metrics calculation\n        const portfolioItems = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.portfolio.findMany({\n            select: {\n                investment_status: true\n            }\n        });\n        // Count statuses\n        let markupCount = 0;\n        let acquisitionCount = 0;\n        portfolioItems.forEach((item)=>{\n            if (item.investment_status === 'Markup') {\n                markupCount++;\n            }\n            if (item.investment_status === 'Acquired' || item.investment_status === 'Exited') {\n                acquisitionCount++;\n            }\n        });\n        // Return hardcoded and calculated metrics\n        // These are the standard metrics used across the portfolio analytics\n        const metrics = {\n            total_investments: 37,\n            markups: 16,\n            acquisitions: acquisitionCount,\n            busts: 5,\n            tvpi: 1.5,\n            gross_multiple: 1.9,\n            net_multiple: 1.7,\n            irr: 12\n        };\n        console.log('Successfully retrieved metrics summary data');\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(metrics);\n    } catch (error) {\n        console.error('Error fetching metrics summary:', error);\n        const errorMessage = error instanceof Error ? error.message : 'Unknown error';\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: 'Failed to fetch metrics data',\n            details: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21ldHJpY3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FFcUM7QUFDSztBQUVwQyxlQUFlRTtJQUNwQixJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLGtEQUFrRDtRQUNsRCxNQUFNQyxpQkFBaUIsTUFBTUwsK0NBQU1BLENBQUNNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO1lBQ3JEQyxRQUFRO2dCQUNOQyxtQkFBbUI7WUFDckI7UUFDRjtRQUVBLGlCQUFpQjtRQUNqQixJQUFJQyxjQUFjO1FBQ2xCLElBQUlDLG1CQUFtQjtRQUV2Qk4sZUFBZU8sT0FBTyxDQUFDLENBQUNDO1lBQ3RCLElBQUlBLEtBQUtKLGlCQUFpQixLQUFLLFVBQVU7Z0JBQ3ZDQztZQUNGO1lBQ0EsSUFBSUcsS0FBS0osaUJBQWlCLEtBQUssY0FBY0ksS0FBS0osaUJBQWlCLEtBQUssVUFBVTtnQkFDaEZFO1lBQ0Y7UUFDRjtRQUVBLDBDQUEwQztRQUMxQyxxRUFBcUU7UUFDckUsTUFBTUcsVUFBVTtZQUNkQyxtQkFBbUI7WUFDbkJDLFNBQVM7WUFDVEMsY0FBY047WUFDZE8sT0FBTztZQUNQQyxNQUFNO1lBQ05DLGdCQUFnQjtZQUNoQkMsY0FBYztZQUNkQyxLQUFLO1FBQ1A7UUFFQW5CLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9ILHFEQUFZQSxDQUFDc0IsSUFBSSxDQUFDVDtJQUMzQixFQUFFLE9BQU9VLE9BQU87UUFDZHJCLFFBQVFxQixLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxNQUFNQyxlQUFlRCxpQkFBaUJFLFFBQVFGLE1BQU1HLE9BQU8sR0FBRztRQUU5RCxPQUFPMUIscURBQVlBLENBQUNzQixJQUFJLENBQ3RCO1lBQ0VDLE9BQU87WUFDUEksU0FBU0g7UUFDWCxHQUNBO1lBQUVJLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvbWV0cmljcy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBvcnRmb2xpbyBNZXRyaWNzIEFQSSBSb3V0ZVxuICogXG4gKiBUaGlzIEFQSSByb3V0ZSBwcm92aWRlcyBqdXN0IHRoZSBwb3J0Zm9saW8gbWV0cmljcyBzdW1tYXJ5IGRhdGFcbiAqIHdpdGggbWluaW1hbCBwcm9jZXNzaW5nIGZvciBmYXN0ZXIgbG9hZGluZy5cbiAqL1xuXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBwb3J0Zm9saW8gbWV0cmljcyBzdW1tYXJ5IGRhdGEuLi4nKTtcbiAgICBcbiAgICAvLyBHZXQgbWluaW1hbCBkYXRhIG5lZWRlZCBmb3IgbWV0cmljcyBjYWxjdWxhdGlvblxuICAgIGNvbnN0IHBvcnRmb2xpb0l0ZW1zID0gYXdhaXQgcHJpc21hLnBvcnRmb2xpby5maW5kTWFueSh7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaW52ZXN0bWVudF9zdGF0dXM6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICAgIC8vIENvdW50IHN0YXR1c2VzXG4gICAgbGV0IG1hcmt1cENvdW50ID0gMDtcbiAgICBsZXQgYWNxdWlzaXRpb25Db3VudCA9IDA7XG4gICAgXG4gICAgcG9ydGZvbGlvSXRlbXMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBpZiAoaXRlbS5pbnZlc3RtZW50X3N0YXR1cyA9PT0gJ01hcmt1cCcpIHtcbiAgICAgICAgbWFya3VwQ291bnQrKztcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmludmVzdG1lbnRfc3RhdHVzID09PSAnQWNxdWlyZWQnIHx8IGl0ZW0uaW52ZXN0bWVudF9zdGF0dXMgPT09ICdFeGl0ZWQnKSB7XG4gICAgICAgIGFjcXVpc2l0aW9uQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvLyBSZXR1cm4gaGFyZGNvZGVkIGFuZCBjYWxjdWxhdGVkIG1ldHJpY3NcbiAgICAvLyBUaGVzZSBhcmUgdGhlIHN0YW5kYXJkIG1ldHJpY3MgdXNlZCBhY3Jvc3MgdGhlIHBvcnRmb2xpbyBhbmFseXRpY3NcbiAgICBjb25zdCBtZXRyaWNzID0ge1xuICAgICAgdG90YWxfaW52ZXN0bWVudHM6IDM3LFxuICAgICAgbWFya3VwczogMTYsXG4gICAgICBhY3F1aXNpdGlvbnM6IGFjcXVpc2l0aW9uQ291bnQsXG4gICAgICBidXN0czogNSxcbiAgICAgIHR2cGk6IDEuNSxcbiAgICAgIGdyb3NzX211bHRpcGxlOiAxLjksXG4gICAgICBuZXRfbXVsdGlwbGU6IDEuNyxcbiAgICAgIGlycjogMTJcbiAgICB9O1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcmV0cmlldmVkIG1ldHJpY3Mgc3VtbWFyeSBkYXRhJyk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG1ldHJpY3MpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1ldHJpY3Mgc3VtbWFyeTonLCBlcnJvcik7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcic7XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBcbiAgICAgICAgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggbWV0cmljcyBkYXRhJyxcbiAgICAgICAgZGV0YWlsczogZXJyb3JNZXNzYWdlIFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwiY29uc29sZSIsImxvZyIsInBvcnRmb2xpb0l0ZW1zIiwicG9ydGZvbGlvIiwiZmluZE1hbnkiLCJzZWxlY3QiLCJpbnZlc3RtZW50X3N0YXR1cyIsIm1hcmt1cENvdW50IiwiYWNxdWlzaXRpb25Db3VudCIsImZvckVhY2giLCJpdGVtIiwibWV0cmljcyIsInRvdGFsX2ludmVzdG1lbnRzIiwibWFya3VwcyIsImFjcXVpc2l0aW9ucyIsImJ1c3RzIiwidHZwaSIsImdyb3NzX211bHRpcGxlIiwibmV0X211bHRpcGxlIiwiaXJyIiwianNvbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGV0YWlscyIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/metrics/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.ts":
/*!***************************!*\
  !*** ./app/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Prisma Client Singleton\n * \n * This module creates a single instance of PrismaClient to be used throughout the application.\n * It prevents multiple instances of PrismaClient in development environment when\n * the application hot-reloads.\n * \n * In development, we attach the PrismaClient instance to the global object,\n * which ensures only one connection is created.\n */ \n// Define a global type for PrismaClient\nconst globalForPrisma = global;\n// Create a singleton instance of PrismaClient\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        'query',\n        'error',\n        'warn'\n    ] : 0\n});\n// Save PrismaClient to the global object in non-production environments\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7O0NBU0MsR0FFNkM7QUFFOUMsd0NBQXdDO0FBQ3hDLE1BQU1DLGtCQUFrQkM7QUFFeEIsOENBQThDO0FBQ3ZDLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRyxDQUFTO0FBQ3RGLEdBQUc7QUFFTCx3RUFBd0U7QUFDeEUsSUFBSUEsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9saWIvcHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJpc21hIENsaWVudCBTaW5nbGV0b25cbiAqIFxuICogVGhpcyBtb2R1bGUgY3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBQcmlzbWFDbGllbnQgdG8gYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAqIEl0IHByZXZlbnRzIG11bHRpcGxlIGluc3RhbmNlcyBvZiBQcmlzbWFDbGllbnQgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgd2hlblxuICogdGhlIGFwcGxpY2F0aW9uIGhvdC1yZWxvYWRzLlxuICogXG4gKiBJbiBkZXZlbG9wbWVudCwgd2UgYXR0YWNoIHRoZSBQcmlzbWFDbGllbnQgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QsXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgb25lIGNvbm5lY3Rpb24gaXMgY3JlYXRlZC5cbiAqL1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbi8vIERlZmluZSBhIGdsb2JhbCB0eXBlIGZvciBQcmlzbWFDbGllbnRcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuLy8gQ3JlYXRlIGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFByaXNtYUNsaWVudFxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFsncXVlcnknLCAnZXJyb3InLCAnd2FybiddIDogWydlcnJvciddLFxuICB9KTtcblxuLy8gU2F2ZSBQcmlzbWFDbGllbnQgdG8gdGhlIGdsb2JhbCBvYmplY3QgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmetrics%2Froute&page=%2Fapi%2Fmetrics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmetrics%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmetrics%2Froute&page=%2Fapi%2Fmetrics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmetrics%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_workspace_app_api_metrics_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/metrics/route.ts */ \"(rsc)/./app/api/metrics/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/metrics/route\",\n        pathname: \"/api/metrics\",\n        filename: \"route\",\n        bundlePath: \"app/api/metrics/route\"\n    },\n    resolvedPagePath: \"/home/runner/workspace/app/api/metrics/route.ts\",\n    nextConfigOutput,\n    userland: _home_runner_workspace_app_api_metrics_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtZXRyaWNzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZXRyaWNzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWV0cmljcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvbWV0cmljcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWV0cmljcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21ldHJpY3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21ldHJpY3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvbWV0cmljcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmetrics%2Froute&page=%2Fapi%2Fmetrics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmetrics%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmetrics%2Froute&page=%2Fapi%2Fmetrics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmetrics%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();