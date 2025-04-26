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
exports.id = "app/api/portfolio/route";
exports.ids = ["app/api/portfolio/route"];
exports.modules = {

/***/ "(rsc)/./app/api/portfolio/route.ts":
/*!************************************!*\
  !*** ./app/api/portfolio/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/**\n * Portfolio API Route\n * \n * This API route handles fetching portfolio items (companies).\n * It retrieves all portfolio items from the database\n * and returns them sorted by creation date.\n * \n * It can also include metrics data when the includeMetrics parameter is true.\n */ \n\n/**\n * GET handler for /api/portfolio\n * \n * Fetches all portfolio items from the database\n * \n * @param {NextRequest} request - The request object with query parameters\n * @returns {Promise<NextResponse>} JSON response with portfolio items or error\n */ async function GET(request) {\n    try {\n        // Get the URL to parse query parameters\n        const url = new URL(request.url);\n        const includeMetrics = url.searchParams.get('includeMetrics') === 'true';\n        console.log('Attempting to fetch portfolio items from database');\n        console.log(`Include metrics: ${includeMetrics}`);\n        // Query all portfolio items from the database\n        const portfolioItems = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.portfolio.findMany({\n            orderBy: [\n                {\n                    createdAt: 'desc'\n                }\n            ]\n        });\n        console.log(`Successfully retrieved ${portfolioItems.length} portfolio items`);\n        // If metrics are requested, format the response accordingly\n        if (includeMetrics) {\n            // Calculate summary metrics\n            const itemsWithInvestmentData = portfolioItems.filter((item)=>item.investment_date && item.initial_investment && item.current_valuation);\n            const totalInvested = itemsWithInvestmentData.reduce((sum, item)=>sum + (item.initial_investment || 0), 0);\n            const totalCurrentValue = itemsWithInvestmentData.reduce((sum, item)=>sum + (item.current_valuation || 0), 0);\n            // Return structured response with items and metrics\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                items: portfolioItems,\n                metrics: {\n                    total_items: portfolioItems.length,\n                    items_with_investment_data: itemsWithInvestmentData.length,\n                    total_invested: totalInvested,\n                    total_current_value: totalCurrentValue,\n                    overall_multiple: totalInvested > 0 ? totalCurrentValue / totalInvested : 0\n                }\n            });\n        }\n        // Default response with just the items\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(portfolioItems);\n    } catch (error) {\n        // Log the error details\n        console.error('Error fetching portfolio items:', error);\n        const errorMessage = error instanceof Error ? error.message : 'Unknown error';\n        const errorStack = error instanceof Error ? error.stack : '';\n        console.error('Error message:', errorMessage);\n        console.error('Error stack:', errorStack);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: 'Failed to fetch portfolio items',\n            details: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BvcnRmb2xpby9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Q0FRQyxHQUVxQztBQUNLO0FBRzNDOzs7Ozs7O0NBT0MsR0FDTSxlQUFlRSxJQUFJQyxPQUFvQjtJQUM1QyxJQUFJO1FBQ0Ysd0NBQXdDO1FBQ3hDLE1BQU1DLE1BQU0sSUFBSUMsSUFBSUYsUUFBUUMsR0FBRztRQUMvQixNQUFNRSxpQkFBaUJGLElBQUlHLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQjtRQUVsRUMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFSixnQkFBZ0I7UUFFaEQsOENBQThDO1FBQzlDLE1BQU1LLGlCQUFpQixNQUFNWCwrQ0FBTUEsQ0FBQ1ksU0FBUyxDQUFDQyxRQUFRLENBQUM7WUFDckRDLFNBQVM7Z0JBQ1A7b0JBQUVDLFdBQVc7Z0JBQU87YUFDckI7UUFDSDtRQUVBTixRQUFRQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsRUFBRUMsZUFBZUssTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBRTdFLDREQUE0RDtRQUM1RCxJQUFJVixnQkFBZ0I7WUFDbEIsNEJBQTRCO1lBQzVCLE1BQU1XLDBCQUEwQk4sZUFBZU8sTUFBTSxDQUFDQyxDQUFBQSxPQUNwREEsS0FBS0MsZUFBZSxJQUFJRCxLQUFLRSxrQkFBa0IsSUFBSUYsS0FBS0csaUJBQWlCO1lBRzNFLE1BQU1DLGdCQUFnQk4sd0JBQXdCTyxNQUFNLENBQUMsQ0FBQ0MsS0FBS04sT0FDekRNLE1BQU9OLENBQUFBLEtBQUtFLGtCQUFrQixJQUFJLElBQUk7WUFHeEMsTUFBTUssb0JBQW9CVCx3QkFBd0JPLE1BQU0sQ0FBQyxDQUFDQyxLQUFLTixPQUM3RE0sTUFBT04sQ0FBQUEsS0FBS0csaUJBQWlCLElBQUksSUFBSTtZQUd2QyxvREFBb0Q7WUFDcEQsT0FBT3JCLHFEQUFZQSxDQUFDMEIsSUFBSSxDQUFDO2dCQUN2QkMsT0FBT2pCO2dCQUNQa0IsU0FBUztvQkFDUEMsYUFBYW5CLGVBQWVLLE1BQU07b0JBQ2xDZSw0QkFBNEJkLHdCQUF3QkQsTUFBTTtvQkFDMURnQixnQkFBZ0JUO29CQUNoQlUscUJBQXFCUDtvQkFDckJRLGtCQUFrQlgsZ0JBQWdCLElBQUlHLG9CQUFvQkgsZ0JBQWdCO2dCQUM1RTtZQUNGO1FBQ0Y7UUFFQSx1Q0FBdUM7UUFDdkMsT0FBT3RCLHFEQUFZQSxDQUFDMEIsSUFBSSxDQUFDaEI7SUFDM0IsRUFBRSxPQUFPd0IsT0FBTztRQUNkLHdCQUF3QjtRQUN4QjFCLFFBQVEwQixLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxNQUFNQyxlQUFlRCxpQkFBaUJFLFFBQVFGLE1BQU1HLE9BQU8sR0FBRztRQUM5RCxNQUFNQyxhQUFhSixpQkFBaUJFLFFBQVFGLE1BQU1LLEtBQUssR0FBRztRQUMxRC9CLFFBQVEwQixLQUFLLENBQUMsa0JBQWtCQztRQUNoQzNCLFFBQVEwQixLQUFLLENBQUMsZ0JBQWdCSTtRQUU5QixPQUFPdEMscURBQVlBLENBQUMwQixJQUFJLENBQ3RCO1lBQ0VRLE9BQU87WUFDUE0sU0FBU0w7UUFDWCxHQUNBO1lBQUVNLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvcG9ydGZvbGlvL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUG9ydGZvbGlvIEFQSSBSb3V0ZVxuICogXG4gKiBUaGlzIEFQSSByb3V0ZSBoYW5kbGVzIGZldGNoaW5nIHBvcnRmb2xpbyBpdGVtcyAoY29tcGFuaWVzKS5cbiAqIEl0IHJldHJpZXZlcyBhbGwgcG9ydGZvbGlvIGl0ZW1zIGZyb20gdGhlIGRhdGFiYXNlXG4gKiBhbmQgcmV0dXJucyB0aGVtIHNvcnRlZCBieSBjcmVhdGlvbiBkYXRlLlxuICogXG4gKiBJdCBjYW4gYWxzbyBpbmNsdWRlIG1ldHJpY3MgZGF0YSB3aGVuIHRoZSBpbmNsdWRlTWV0cmljcyBwYXJhbWV0ZXIgaXMgdHJ1ZS5cbiAqL1xuXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbi8qKlxuICogR0VUIGhhbmRsZXIgZm9yIC9hcGkvcG9ydGZvbGlvXG4gKiBcbiAqIEZldGNoZXMgYWxsIHBvcnRmb2xpbyBpdGVtcyBmcm9tIHRoZSBkYXRhYmFzZVxuICogXG4gKiBAcGFyYW0ge05leHRSZXF1ZXN0fSByZXF1ZXN0IC0gVGhlIHJlcXVlc3Qgb2JqZWN0IHdpdGggcXVlcnkgcGFyYW1ldGVyc1xuICogQHJldHVybnMge1Byb21pc2U8TmV4dFJlc3BvbnNlPn0gSlNPTiByZXNwb25zZSB3aXRoIHBvcnRmb2xpbyBpdGVtcyBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSBVUkwgdG8gcGFyc2UgcXVlcnkgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IGluY2x1ZGVNZXRyaWNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2luY2x1ZGVNZXRyaWNzJykgPT09ICd0cnVlJztcbiAgICBcbiAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBmZXRjaCBwb3J0Zm9saW8gaXRlbXMgZnJvbSBkYXRhYmFzZScpO1xuICAgIGNvbnNvbGUubG9nKGBJbmNsdWRlIG1ldHJpY3M6ICR7aW5jbHVkZU1ldHJpY3N9YCk7XG4gICAgXG4gICAgLy8gUXVlcnkgYWxsIHBvcnRmb2xpbyBpdGVtcyBmcm9tIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IHBvcnRmb2xpb0l0ZW1zID0gYXdhaXQgcHJpc21hLnBvcnRmb2xpby5maW5kTWFueSh7XG4gICAgICBvcmRlckJ5OiBbXG4gICAgICAgIHsgY3JlYXRlZEF0OiAnZGVzYycgfSwgLy8gU29ydCBieSBjcmVhdGlvbiBkYXRlIChuZXdlc3QgZmlyc3QpXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSByZXRyaWV2ZWQgJHtwb3J0Zm9saW9JdGVtcy5sZW5ndGh9IHBvcnRmb2xpbyBpdGVtc2ApO1xuICAgIFxuICAgIC8vIElmIG1ldHJpY3MgYXJlIHJlcXVlc3RlZCwgZm9ybWF0IHRoZSByZXNwb25zZSBhY2NvcmRpbmdseVxuICAgIGlmIChpbmNsdWRlTWV0cmljcykge1xuICAgICAgLy8gQ2FsY3VsYXRlIHN1bW1hcnkgbWV0cmljc1xuICAgICAgY29uc3QgaXRlbXNXaXRoSW52ZXN0bWVudERhdGEgPSBwb3J0Zm9saW9JdGVtcy5maWx0ZXIoaXRlbSA9PiBcbiAgICAgICAgaXRlbS5pbnZlc3RtZW50X2RhdGUgJiYgaXRlbS5pbml0aWFsX2ludmVzdG1lbnQgJiYgaXRlbS5jdXJyZW50X3ZhbHVhdGlvblxuICAgICAgKTtcbiAgICAgIFxuICAgICAgY29uc3QgdG90YWxJbnZlc3RlZCA9IGl0ZW1zV2l0aEludmVzdG1lbnREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBcbiAgICAgICAgc3VtICsgKGl0ZW0uaW5pdGlhbF9pbnZlc3RtZW50IHx8IDApLCAwXG4gICAgICApO1xuICAgICAgXG4gICAgICBjb25zdCB0b3RhbEN1cnJlbnRWYWx1ZSA9IGl0ZW1zV2l0aEludmVzdG1lbnREYXRhLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBcbiAgICAgICAgc3VtICsgKGl0ZW0uY3VycmVudF92YWx1YXRpb24gfHwgMCksIDBcbiAgICAgICk7XG4gICAgICBcbiAgICAgIC8vIFJldHVybiBzdHJ1Y3R1cmVkIHJlc3BvbnNlIHdpdGggaXRlbXMgYW5kIG1ldHJpY3NcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIGl0ZW1zOiBwb3J0Zm9saW9JdGVtcyxcbiAgICAgICAgbWV0cmljczoge1xuICAgICAgICAgIHRvdGFsX2l0ZW1zOiBwb3J0Zm9saW9JdGVtcy5sZW5ndGgsXG4gICAgICAgICAgaXRlbXNfd2l0aF9pbnZlc3RtZW50X2RhdGE6IGl0ZW1zV2l0aEludmVzdG1lbnREYXRhLmxlbmd0aCxcbiAgICAgICAgICB0b3RhbF9pbnZlc3RlZDogdG90YWxJbnZlc3RlZCxcbiAgICAgICAgICB0b3RhbF9jdXJyZW50X3ZhbHVlOiB0b3RhbEN1cnJlbnRWYWx1ZSxcbiAgICAgICAgICBvdmVyYWxsX211bHRpcGxlOiB0b3RhbEludmVzdGVkID4gMCA/IHRvdGFsQ3VycmVudFZhbHVlIC8gdG90YWxJbnZlc3RlZCA6IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIERlZmF1bHQgcmVzcG9uc2Ugd2l0aCBqdXN0IHRoZSBpdGVtc1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwb3J0Zm9saW9JdGVtcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gTG9nIHRoZSBlcnJvciBkZXRhaWxzXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcG9ydGZvbGlvIGl0ZW1zOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJztcbiAgICBjb25zdCBlcnJvclN0YWNrID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnN0YWNrIDogJyc7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbWVzc2FnZTonLCBlcnJvck1lc3NhZ2UpO1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0YWNrOicsIGVycm9yU3RhY2spO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHBvcnRmb2xpbyBpdGVtcycsXG4gICAgICAgIGRldGFpbHM6IGVycm9yTWVzc2FnZSBcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJ1cmwiLCJVUkwiLCJpbmNsdWRlTWV0cmljcyIsInNlYXJjaFBhcmFtcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJwb3J0Zm9saW9JdGVtcyIsInBvcnRmb2xpbyIsImZpbmRNYW55Iiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImxlbmd0aCIsIml0ZW1zV2l0aEludmVzdG1lbnREYXRhIiwiZmlsdGVyIiwiaXRlbSIsImludmVzdG1lbnRfZGF0ZSIsImluaXRpYWxfaW52ZXN0bWVudCIsImN1cnJlbnRfdmFsdWF0aW9uIiwidG90YWxJbnZlc3RlZCIsInJlZHVjZSIsInN1bSIsInRvdGFsQ3VycmVudFZhbHVlIiwianNvbiIsIml0ZW1zIiwibWV0cmljcyIsInRvdGFsX2l0ZW1zIiwiaXRlbXNfd2l0aF9pbnZlc3RtZW50X2RhdGEiLCJ0b3RhbF9pbnZlc3RlZCIsInRvdGFsX2N1cnJlbnRfdmFsdWUiLCJvdmVyYWxsX211bHRpcGxlIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsIm1lc3NhZ2UiLCJlcnJvclN0YWNrIiwic3RhY2siLCJkZXRhaWxzIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/portfolio/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.ts":
/*!***************************!*\
  !*** ./app/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Prisma Client Singleton\n * \n * This module creates a single instance of PrismaClient to be used throughout the application.\n * It prevents multiple instances of PrismaClient in development environment when\n * the application hot-reloads.\n * \n * In development, we attach the PrismaClient instance to the global object,\n * which ensures only one connection is created.\n */ \n// Define a global type for PrismaClient\nconst globalForPrisma = global;\n// Create a singleton instance of PrismaClient\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        'query',\n        'error',\n        'warn'\n    ] : 0\n});\n// Save PrismaClient to the global object in non-production environments\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7O0NBU0MsR0FFNkM7QUFFOUMsd0NBQXdDO0FBQ3hDLE1BQU1DLGtCQUFrQkM7QUFFeEIsOENBQThDO0FBQ3ZDLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRyxDQUFTO0FBQ3RGLEdBQUc7QUFFTCx3RUFBd0U7QUFDeEUsSUFBSUEsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9saWIvcHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJpc21hIENsaWVudCBTaW5nbGV0b25cbiAqIFxuICogVGhpcyBtb2R1bGUgY3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBQcmlzbWFDbGllbnQgdG8gYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAqIEl0IHByZXZlbnRzIG11bHRpcGxlIGluc3RhbmNlcyBvZiBQcmlzbWFDbGllbnQgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgd2hlblxuICogdGhlIGFwcGxpY2F0aW9uIGhvdC1yZWxvYWRzLlxuICogXG4gKiBJbiBkZXZlbG9wbWVudCwgd2UgYXR0YWNoIHRoZSBQcmlzbWFDbGllbnQgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QsXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgb25lIGNvbm5lY3Rpb24gaXMgY3JlYXRlZC5cbiAqL1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbi8vIERlZmluZSBhIGdsb2JhbCB0eXBlIGZvciBQcmlzbWFDbGllbnRcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuLy8gQ3JlYXRlIGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFByaXNtYUNsaWVudFxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFsncXVlcnknLCAnZXJyb3InLCAnd2FybiddIDogWydlcnJvciddLFxuICB9KTtcblxuLy8gU2F2ZSBQcmlzbWFDbGllbnQgdG8gdGhlIGdsb2JhbCBvYmplY3QgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_workspace_app_api_portfolio_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/portfolio/route.ts */ \"(rsc)/./app/api/portfolio/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/portfolio/route\",\n        pathname: \"/api/portfolio\",\n        filename: \"route\",\n        bundlePath: \"app/api/portfolio/route\"\n    },\n    resolvedPagePath: \"/home/runner/workspace/app/api/portfolio/route.ts\",\n    nextConfigOutput,\n    userland: _home_runner_workspace_app_api_portfolio_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3J0Zm9saW8lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBvcnRmb2xpbyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBvcnRmb2xpbyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvcG9ydGZvbGlvL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3J0Zm9saW8vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3J0Zm9saW9cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3BvcnRmb2xpby9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXBwL2FwaS9wb3J0Zm9saW8vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fportfolio%2Froute&page=%2Fapi%2Fportfolio%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fportfolio%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();