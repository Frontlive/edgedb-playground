"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.$User = exports.Post = exports.$Post = void 0;
const edgedb_1 = require("edgedb");
const _ = __importStar(require("../imports"));
const $Post = edgedb_1.$.makeType(_.spec, "429c3256-3911-11ed-9c42-7d21c366e2e5", _.syntax.literal);
exports.$Post = $Post;
const Post = _.syntax.$PathNode(edgedb_1.$.$toSet($Post, edgedb_1.$.Cardinality.Many), null, true);
exports.Post = Post;
const $User = edgedb_1.$.makeType(_.spec, "25607164-3909-11ed-b76c-113782bdb64a", _.syntax.literal);
exports.$User = $User;
const User = _.syntax.$PathNode(edgedb_1.$.$toSet($User, edgedb_1.$.Cardinality.Many), null, true);
exports.User = User;
const __defaultExports = {
    "Post": Post,
    "User": User
};
exports.default = __defaultExports;
