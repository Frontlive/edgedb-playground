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
exports.Trust = exports.$Trust = exports.SCRAM = exports.$SCRAM = exports.JWT = exports.$JWT = exports.InstanceConfig = exports.$InstanceConfig = exports.DatabaseConfig = exports.$DatabaseConfig = exports.Config = exports.$Config = exports.AuthMethod = exports.$AuthMethod = exports.Auth = exports.$Auth = exports.AbstractConfig = exports.$AbstractConfig = exports.ConfigObject = exports.$ConfigObject = exports.memory = exports.ConnectionTransport = exports.AllowBareDDL = void 0;
const edgedb_1 = require("edgedb");
const _ = __importStar(require("../imports"));
const AllowBareDDL = edgedb_1.$.makeType(_.spec, "9c6778f2-3558-11ed-8b62-4de428defc95", _.syntax.literal);
exports.AllowBareDDL = AllowBareDDL;
const ConnectionTransport = edgedb_1.$.makeType(_.spec, "9c67d2ca-3558-11ed-9f56-e33d1c861e85", _.syntax.literal);
exports.ConnectionTransport = ConnectionTransport;
const memory = edgedb_1.$.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);
exports.memory = memory;
const $ConfigObject = edgedb_1.$.makeType(_.spec, "9c682ff4-3558-11ed-ba4a-df77b4f3bd76", _.syntax.literal);
exports.$ConfigObject = $ConfigObject;
const ConfigObject = _.syntax.$PathNode(edgedb_1.$.$toSet($ConfigObject, edgedb_1.$.Cardinality.Many), null, true);
exports.ConfigObject = ConfigObject;
const $AbstractConfig = edgedb_1.$.makeType(_.spec, "9c95a0ce-3558-11ed-88a3-e746975459c9", _.syntax.literal);
exports.$AbstractConfig = $AbstractConfig;
const AbstractConfig = _.syntax.$PathNode(edgedb_1.$.$toSet($AbstractConfig, edgedb_1.$.Cardinality.Many), null, true);
exports.AbstractConfig = AbstractConfig;
const $Auth = edgedb_1.$.makeType(_.spec, "9c8936cc-3558-11ed-bd32-198f72d9eaa1", _.syntax.literal);
exports.$Auth = $Auth;
const Auth = _.syntax.$PathNode(edgedb_1.$.$toSet($Auth, edgedb_1.$.Cardinality.Many), null, true);
exports.Auth = Auth;
const $AuthMethod = edgedb_1.$.makeType(_.spec, "9c6e12de-3558-11ed-b0a3-f5ab99373e7d", _.syntax.literal);
exports.$AuthMethod = $AuthMethod;
const AuthMethod = _.syntax.$PathNode(edgedb_1.$.$toSet($AuthMethod, edgedb_1.$.Cardinality.Many), null, true);
exports.AuthMethod = AuthMethod;
const $Config = edgedb_1.$.makeType(_.spec, "9cad6bf0-3558-11ed-8ff6-05bc35c16799", _.syntax.literal);
exports.$Config = $Config;
const Config = _.syntax.$PathNode(edgedb_1.$.$toSet($Config, edgedb_1.$.Cardinality.Many), null, true);
exports.Config = Config;
const $DatabaseConfig = edgedb_1.$.makeType(_.spec, "9ce02a04-3558-11ed-b6ac-c1651ab976e2", _.syntax.literal);
exports.$DatabaseConfig = $DatabaseConfig;
const DatabaseConfig = _.syntax.$PathNode(edgedb_1.$.$toSet($DatabaseConfig, edgedb_1.$.Cardinality.Many), null, true);
exports.DatabaseConfig = DatabaseConfig;
const $InstanceConfig = edgedb_1.$.makeType(_.spec, "9cc6bc5e-3558-11ed-8bc8-b9813a9899ce", _.syntax.literal);
exports.$InstanceConfig = $InstanceConfig;
const InstanceConfig = _.syntax.$PathNode(edgedb_1.$.$toSet($InstanceConfig, edgedb_1.$.Cardinality.Many), null, true);
exports.InstanceConfig = InstanceConfig;
const $JWT = edgedb_1.$.makeType(_.spec, "9c81eb6a-3558-11ed-886f-0528c097e21c", _.syntax.literal);
exports.$JWT = $JWT;
const JWT = _.syntax.$PathNode(edgedb_1.$.$toSet($JWT, edgedb_1.$.Cardinality.Many), null, true);
exports.JWT = JWT;
const $SCRAM = edgedb_1.$.makeType(_.spec, "9c7acbaa-3558-11ed-950d-f18bbf6ef88b", _.syntax.literal);
exports.$SCRAM = $SCRAM;
const SCRAM = _.syntax.$PathNode(edgedb_1.$.$toSet($SCRAM, edgedb_1.$.Cardinality.Many), null, true);
exports.SCRAM = SCRAM;
const $Trust = edgedb_1.$.makeType(_.spec, "9c747016-3558-11ed-a408-ff4ed216ee04", _.syntax.literal);
exports.$Trust = $Trust;
const Trust = _.syntax.$PathNode(edgedb_1.$.$toSet($Trust, edgedb_1.$.Cardinality.Many), null, true);
exports.Trust = Trust;
function get_config_json(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
        { args: [], namedArgs: { "sources": { typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: true, setoftype: false, variadic: false }, "max_source": { typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false } }, returnTypeId: "00000000-0000-0000-0000-00000000010f" },
    ]);
    return _.syntax.$expressionify({
        __kind__: edgedb_1.$.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "cfg::get_config_json",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
const __defaultExports = {
    "AllowBareDDL": AllowBareDDL,
    "ConnectionTransport": ConnectionTransport,
    "memory": memory,
    "ConfigObject": ConfigObject,
    "AbstractConfig": AbstractConfig,
    "Auth": Auth,
    "AuthMethod": AuthMethod,
    "Config": Config,
    "DatabaseConfig": DatabaseConfig,
    "InstanceConfig": InstanceConfig,
    "JWT": JWT,
    "SCRAM": SCRAM,
    "Trust": Trust,
    "get_config_json": get_config_json
};
exports.default = __defaultExports;
