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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n// Mock data for the ventures\nconst ventures = [\n    {\n        id: 1,\n        name: '2 Days Early',\n        description: 'concept incubator',\n        logoUrl: '/ventures/2DE Interspace.png',\n        website: 'https://2daysearly.com',\n        featured: true\n    },\n    {\n        id: 2,\n        name: 'interspace',\n        description: 'future explorers community',\n        logoUrl: '/ventures/Interspace Square - 2025.png',\n        website: 'https://posts.interspace.ventures',\n        featured: true\n    },\n    {\n        id: 3,\n        name: 'tbh',\n        description: 'authentic social',\n        logoUrl: '/ventures/tbh purple.png',\n        website: 'https://tbh.living',\n        featured: true\n    },\n    {\n        id: 4,\n        name: 'solo',\n        description: 'solo living startup',\n        logoUrl: '/ventures/Solo Wordmark - Gradient 2025.png',\n        website: 'https://solo.iv.xyz',\n        featured: true\n    },\n    {\n        id: 5,\n        name: 'samir.xyz',\n        description: 'personal site',\n        logoUrl: '/ventures/samir.png',\n        website: 'https://samir.xyz',\n        featured: true\n    },\n    {\n        id: 6,\n        name: 'predictive',\n        description: 'predictive film studio',\n        logoUrl: '/ventures/Predictive.film icon 2025.png',\n        website: 'https://predictive.iv.xyz',\n        featured: true\n    },\n    {\n        id: 7,\n        name: 'moonshot',\n        description: 'research-driven products',\n        logoUrl: '/ventures/moonshot.png',\n        website: 'https://moonshot.iv.xyz',\n        featured: true\n    },\n    {\n        id: 8,\n        name: 'omni',\n        description: 'read anything, anywhere, all at once',\n        logoUrl: '/ventures/omni wordmark 2025.png',\n        website: 'https://omni.iv.xyz',\n        featured: true\n    }\n];\nasync function GET() {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(ventures);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZlbnR1cmVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDLDZCQUE2QjtBQUM3QixNQUFNQyxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7Q0FDRDtBQUVNLGVBQWVDO0lBQ3BCLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNSO0FBQzNCIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvdmVudHVyZXMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG4vLyBNb2NrIGRhdGEgZm9yIHRoZSB2ZW50dXJlc1xuY29uc3QgdmVudHVyZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnMiBEYXlzIEVhcmx5JyxcbiAgICBkZXNjcmlwdGlvbjogJ2NvbmNlcHQgaW5jdWJhdG9yJyxcbiAgICBsb2dvVXJsOiAnL3ZlbnR1cmVzLzJERSBJbnRlcnNwYWNlLnBuZycsXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vMmRheXNlYXJseS5jb20nLFxuICAgIGZlYXR1cmVkOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnaW50ZXJzcGFjZScsXG4gICAgZGVzY3JpcHRpb246ICdmdXR1cmUgZXhwbG9yZXJzIGNvbW11bml0eScsXG4gICAgbG9nb1VybDogJy92ZW50dXJlcy9JbnRlcnNwYWNlIFNxdWFyZSAtIDIwMjUucG5nJyxcbiAgICB3ZWJzaXRlOiAnaHR0cHM6Ly9wb3N0cy5pbnRlcnNwYWNlLnZlbnR1cmVzJyxcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ3RiaCcsXG4gICAgZGVzY3JpcHRpb246ICdhdXRoZW50aWMgc29jaWFsJyxcbiAgICBsb2dvVXJsOiAnL3ZlbnR1cmVzL3RiaCBwdXJwbGUucG5nJyxcbiAgICB3ZWJzaXRlOiAnaHR0cHM6Ly90YmgubGl2aW5nJyxcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ3NvbG8nLFxuICAgIGRlc2NyaXB0aW9uOiAnc29sbyBsaXZpbmcgc3RhcnR1cCcsXG4gICAgbG9nb1VybDogJy92ZW50dXJlcy9Tb2xvIFdvcmRtYXJrIC0gR3JhZGllbnQgMjAyNS5wbmcnLFxuICAgIHdlYnNpdGU6ICdodHRwczovL3NvbG8uaXYueHl6JyxcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogJ3NhbWlyLnh5eicsXG4gICAgZGVzY3JpcHRpb246ICdwZXJzb25hbCBzaXRlJyxcbiAgICBsb2dvVXJsOiAnL3ZlbnR1cmVzL3NhbWlyLnBuZycsXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vc2FtaXIueHl6JyxcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogJ3ByZWRpY3RpdmUnLFxuICAgIGRlc2NyaXB0aW9uOiAncHJlZGljdGl2ZSBmaWxtIHN0dWRpbycsXG4gICAgbG9nb1VybDogJy92ZW50dXJlcy9QcmVkaWN0aXZlLmZpbG0gaWNvbiAyMDI1LnBuZycsXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vcHJlZGljdGl2ZS5pdi54eXonLFxuICAgIGZlYXR1cmVkOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiAnbW9vbnNob3QnLFxuICAgIGRlc2NyaXB0aW9uOiAncmVzZWFyY2gtZHJpdmVuIHByb2R1Y3RzJyxcbiAgICBsb2dvVXJsOiAnL3ZlbnR1cmVzL21vb25zaG90LnBuZycsXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vbW9vbnNob3QuaXYueHl6JyxcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgbmFtZTogJ29tbmknLFxuICAgIGRlc2NyaXB0aW9uOiAncmVhZCBhbnl0aGluZywgYW55d2hlcmUsIGFsbCBhdCBvbmNlJyxcbiAgICBsb2dvVXJsOiAnL3ZlbnR1cmVzL29tbmkgd29yZG1hcmsgMjAyNS5wbmcnLFxuICAgIHdlYnNpdGU6ICdodHRwczovL29tbmkuaXYueHl6JyxcbiAgICBmZWF0dXJlZDogdHJ1ZVxuICB9XG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odmVudHVyZXMpO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ2ZW50dXJlcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibG9nb1VybCIsIndlYnNpdGUiLCJmZWF0dXJlZCIsIkdFVCIsImpzb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ventures/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures%2Froute&page=%2Fapi%2Fventures%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();