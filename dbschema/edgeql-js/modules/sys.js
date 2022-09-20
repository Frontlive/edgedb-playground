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
exports.Role = exports.$Role = exports.ExtensionPackage = exports.$ExtensionPackage = exports.Database = exports.$Database = exports.SystemObject = exports.$SystemObject = exports.VersionStage = exports.TransactionIsolation = void 0;
const edgedb_1 = require("edgedb");
const _ = __importStar(require("../imports"));
const TransactionIsolation = edgedb_1.$.makeType(_.spec, "9c024996-3558-11ed-90a9-8d54c171f4c9", _.syntax.literal);
exports.TransactionIsolation = TransactionIsolation;
const VersionStage = edgedb_1.$.makeType(_.spec, "9c02a5d0-3558-11ed-b57f-29ecfccbd7a3", _.syntax.literal);
exports.VersionStage = VersionStage;
const $SystemObject = edgedb_1.$.makeType(_.spec, "9c030214-3558-11ed-bd28-b1cedefa17f3", _.syntax.literal);
exports.$SystemObject = $SystemObject;
const SystemObject = _.syntax.$PathNode(edgedb_1.$.$toSet($SystemObject, edgedb_1.$.Cardinality.Many), null, true);
exports.SystemObject = SystemObject;
const $Database = edgedb_1.$.makeType(_.spec, "9c1313ac-3558-11ed-a168-1fe5c61f28a2", _.syntax.literal);
exports.$Database = $Database;
const Database = _.syntax.$PathNode(edgedb_1.$.$toSet($Database, edgedb_1.$.Cardinality.Many), null, true);
exports.Database = Database;
const $ExtensionPackage = edgedb_1.$.makeType(_.spec, "9c25545e-3558-11ed-87b2-1717ad22009c", _.syntax.literal);
exports.$ExtensionPackage = $ExtensionPackage;
const ExtensionPackage = _.syntax.$PathNode(edgedb_1.$.$toSet($ExtensionPackage, edgedb_1.$.Cardinality.Many), null, true);
exports.ExtensionPackage = ExtensionPackage;
const $Role = edgedb_1.$.makeType(_.spec, "9c3a413e-3558-11ed-9a0d-754349b845b6", _.syntax.literal);
exports.$Role = $Role;
const Role = _.syntax.$PathNode(edgedb_1.$.$toSet($Role, edgedb_1.$.Cardinality.Many), null, true);
exports.Role = Role;
function get_version(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('sys::get_version', args, _.spec, [
        { args: [], returnTypeId: "1b491ad4-2f08-c6d5-063b-1a807df77c65" },
    ]);
    return _.syntax.$expressionify({
        __kind__: edgedb_1.$.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "sys::get_version",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
function get_version_as_str(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('sys::get_version_as_str', args, _.spec, [
        { args: [], returnTypeId: "00000000-0000-0000-0000-000000000101" },
    ]);
    return _.syntax.$expressionify({
        __kind__: edgedb_1.$.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "sys::get_version_as_str",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
function get_instance_name(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('sys::get_instance_name', args, _.spec, [
        { args: [], returnTypeId: "00000000-0000-0000-0000-000000000101" },
    ]);
    return _.syntax.$expressionify({
        __kind__: edgedb_1.$.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "sys::get_instance_name",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
function get_transaction_isolation(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('sys::get_transaction_isolation', args, _.spec, [
        { args: [], returnTypeId: "9c024996-3558-11ed-90a9-8d54c171f4c9" },
    ]);
    return _.syntax.$expressionify({
        __kind__: edgedb_1.$.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "sys::get_transaction_isolation",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
function get_current_database(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('sys::get_current_database', args, _.spec, [
        { args: [], returnTypeId: "00000000-0000-0000-0000-000000000101" },
    ]);
    return _.syntax.$expressionify({
        __kind__: edgedb_1.$.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "sys::get_current_database",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
const __defaultExports = {
    "TransactionIsolation": TransactionIsolation,
    "VersionStage": VersionStage,
    "SystemObject": SystemObject,
    "Database": Database,
    "ExtensionPackage": ExtensionPackage,
    "Role": Role,
    "get_version": get_version,
    "get_version_as_str": get_version_as_str,
    "get_instance_name": get_instance_name,
    "get_transaction_isolation": get_transaction_isolation,
    "get_current_database": get_current_database
};
exports.default = __defaultExports;
