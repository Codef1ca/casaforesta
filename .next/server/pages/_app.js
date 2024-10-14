const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_10adba._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__5856ba._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__4ddf35._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
