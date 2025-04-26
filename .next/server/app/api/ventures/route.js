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
exports.id = "app/api/ventures/route";
exports.ids = ["app/api/ventures/route"];
exports.modules = {

/***/ "(rsc)/./app/api/ventures/route.ts":
/*!***********************************!*\
  !*** ./app/api/ventures/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * Ventures API Route\n * \n * This API route handles fetching ventures for the interspace section.\n * It retrieves all ventures from the database and returns them\n * sorted by creation date (newest first).\n */ \n\n\n// Use the pre-generated ventures data\nconst VENTURES_FILE = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'scripts', 'ventures-response.json');\n/**\n * GET handler for /api/ventures\n * \n * Fetches all ventures\n * \n * @returns {Promise<NextResponse>} JSON response with ventures or error\n */ async function GET() {\n    try {\n        // Read ventures from the file\n        const venturesData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(VENTURES_FILE, 'utf8');\n        const ventures = JSON.parse(venturesData);\n        // Log the successful response for debugging\n        console.log(`Successfully fetched ${ventures.length} ventures from file`);\n        // Return the ventures as JSON\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(ventures);\n    } catch (error) {\n        // Log the error and return a 500 response\n        console.error('Error fetching ventures:', error);\n        // Provide more detailed error message when possible\n        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch ventures';\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch ventures',\n            details: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZlbnR1cmVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Q0FNQyxHQUUwQztBQUN2QjtBQUNJO0FBRXhCLHNDQUFzQztBQUN0QyxNQUFNRyxnQkFBZ0JELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSSxXQUFXO0FBRTFEOzs7Ozs7Q0FNQyxHQUNNLGVBQWVDO0lBQ3BCLElBQUk7UUFDRiw4QkFBOEI7UUFDOUIsTUFBTUMsZUFBZVAsc0RBQWUsQ0FBQ0UsZUFBZTtRQUNwRCxNQUFNTyxXQUFXQyxLQUFLQyxLQUFLLENBQUNKO1FBRTVCLDRDQUE0QztRQUM1Q0ssUUFBUUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUVKLFNBQVNLLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUV4RSw4QkFBOEI7UUFDOUIsT0FBT2YscURBQVlBLENBQUNnQixJQUFJLENBQUNOO0lBQzNCLEVBQUUsT0FBT08sT0FBTztRQUNkLDBDQUEwQztRQUMxQ0osUUFBUUksS0FBSyxDQUFDLDRCQUE0QkE7UUFFMUMsb0RBQW9EO1FBQ3BELE1BQU1DLGVBQWVELGlCQUFpQkUsUUFDbENGLE1BQU1HLE9BQU8sR0FDYjtRQUVKLE9BQU9wQixxREFBWUEsQ0FBQ2dCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztZQUE0QkksU0FBU0g7UUFBYSxHQUMzRDtZQUFFSSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcHAvYXBpL3ZlbnR1cmVzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVmVudHVyZXMgQVBJIFJvdXRlXG4gKiBcbiAqIFRoaXMgQVBJIHJvdXRlIGhhbmRsZXMgZmV0Y2hpbmcgdmVudHVyZXMgZm9yIHRoZSBpbnRlcnNwYWNlIHNlY3Rpb24uXG4gKiBJdCByZXRyaWV2ZXMgYWxsIHZlbnR1cmVzIGZyb20gdGhlIGRhdGFiYXNlIGFuZCByZXR1cm5zIHRoZW1cbiAqIHNvcnRlZCBieSBjcmVhdGlvbiBkYXRlIChuZXdlc3QgZmlyc3QpLlxuICovXG5cbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gVXNlIHRoZSBwcmUtZ2VuZXJhdGVkIHZlbnR1cmVzIGRhdGFcbmNvbnN0IFZFTlRVUkVTX0ZJTEUgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NjcmlwdHMnLCAndmVudHVyZXMtcmVzcG9uc2UuanNvbicpO1xuXG4vKipcbiAqIEdFVCBoYW5kbGVyIGZvciAvYXBpL3ZlbnR1cmVzXG4gKiBcbiAqIEZldGNoZXMgYWxsIHZlbnR1cmVzXG4gKiBcbiAqIEByZXR1cm5zIHtQcm9taXNlPE5leHRSZXNwb25zZT59IEpTT04gcmVzcG9uc2Ugd2l0aCB2ZW50dXJlcyBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIC8vIFJlYWQgdmVudHVyZXMgZnJvbSB0aGUgZmlsZVxuICAgIGNvbnN0IHZlbnR1cmVzRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhWRU5UVVJFU19GSUxFLCAndXRmOCcpO1xuICAgIGNvbnN0IHZlbnR1cmVzID0gSlNPTi5wYXJzZSh2ZW50dXJlc0RhdGEpO1xuICAgIFxuICAgIC8vIExvZyB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZSBmb3IgZGVidWdnaW5nXG4gICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBmZXRjaGVkICR7dmVudHVyZXMubGVuZ3RofSB2ZW50dXJlcyBmcm9tIGZpbGVgKTtcbiAgICBcbiAgICAvLyBSZXR1cm4gdGhlIHZlbnR1cmVzIGFzIEpTT05cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odmVudHVyZXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIExvZyB0aGUgZXJyb3IgYW5kIHJldHVybiBhIDUwMCByZXNwb25zZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZlbnR1cmVzOicsIGVycm9yKTtcbiAgICBcbiAgICAvLyBQcm92aWRlIG1vcmUgZGV0YWlsZWQgZXJyb3IgbWVzc2FnZSB3aGVuIHBvc3NpYmxlXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciBcbiAgICAgID8gZXJyb3IubWVzc2FnZSBcbiAgICAgIDogJ0ZhaWxlZCB0byBmZXRjaCB2ZW50dXJlcyc7XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCB2ZW50dXJlcycsIGRldGFpbHM6IGVycm9yTWVzc2FnZSB9LCBcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZnMiLCJwYXRoIiwiVkVOVFVSRVNfRklMRSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiR0VUIiwidmVudHVyZXNEYXRhIiwicmVhZEZpbGVTeW5jIiwidmVudHVyZXMiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwianNvbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGV0YWlscyIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ventures/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures%2Froute&page=%2Fapi%2Fventures%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures%2Froute&page=%2Fapi%2Fventures%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_workspace_app_api_ventures_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/ventures/route.ts */ \"(rsc)/./app/api/ventures/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ventures/route\",\n        pathname: \"/api/ventures\",\n        filename: \"route\",\n        bundlePath: \"app/api/ventures/route\"\n    },\n    resolvedPagePath: \"/home/runner/workspace/app/api/ventures/route.ts\",\n    nextConfigOutput,\n    userland: _home_runner_workspace_app_api_ventures_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ2ZW50dXJlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdmVudHVyZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2ZW50dXJlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNBO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvdmVudHVyZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZlbnR1cmVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdmVudHVyZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZlbnR1cmVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcHAvYXBpL3ZlbnR1cmVzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures%2Froute&page=%2Fapi%2Fventures%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures%2Froute&page=%2Fapi%2Fventures%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();