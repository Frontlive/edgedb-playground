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
exports.$Index = exports.Global = exports.$Global = exports.Function = exports.$Function = exports.Extension = exports.$Extension = exports.Delta = exports.$Delta = exports.Constraint = exports.$Constraint = exports.ConsistencySubject = exports.$ConsistencySubject = exports.Cast = exports.$Cast = exports.VolatilitySubject = exports.$VolatilitySubject = exports.CallableObject = exports.$CallableObject = exports.Array = exports.$Array = exports.CollectionType = exports.$CollectionType = exports.PrimitiveType = exports.$PrimitiveType = exports.Type = exports.$Type = exports.Annotation = exports.$Annotation = exports.Alias = exports.$Alias = exports.AccessPolicy = exports.$AccessPolicy = exports.AnnotationSubject = exports.$AnnotationSubject = exports.InheritingObject = exports.$InheritingObject = exports.SubclassableObject = exports.$SubclassableObject = exports.Object_98cad86a355811ed98af75c05296aa5a = exports.$Object_98cad86a355811ed98af75c05296aa5a = exports.Volatility = exports.TypeModifier = exports.TargetDeleteAction = exports.SourceDeleteAction = exports.ParameterKind = exports.OperatorKind = exports.Cardinality = exports.AccessPolicyAction = exports.AccessKind = void 0;
exports.TupleElement = exports.$TupleElement = exports.Tuple = exports.$Tuple = exports.ScalarType = exports.$ScalarType = exports.Range = exports.$Range = exports.PseudoType = exports.$PseudoType = exports.Property = exports.$Property = exports.Parameter = exports.$Parameter = exports.Operator = exports.$Operator = exports.ObjectType = exports.$ObjectType = exports.Module = exports.$Module = exports.Migration = exports.$Migration = exports.Link = exports.$Link = exports.Source = exports.$Source = exports.Pointer = exports.$Pointer = exports.Index = void 0;
const edgedb_1 = require("edgedb");
const _ = __importStar(require("../imports"));
const AccessKind = edgedb_1.$.makeType(_.spec, "98ca6a4c-3558-11ed-955c-b310e792ffd7", _.syntax.literal);
exports.AccessKind = AccessKind;
const AccessPolicyAction = edgedb_1.$.makeType(_.spec, "98ca0f5c-3558-11ed-994c-23f274d3efbf", _.syntax.literal);
exports.AccessPolicyAction = AccessPolicyAction;
const Cardinality = edgedb_1.$.makeType(_.spec, "98c79c22-3558-11ed-a097-f12ad8545f74", _.syntax.literal);
exports.Cardinality = Cardinality;
const OperatorKind = edgedb_1.$.makeType(_.spec, "98c8a96e-3558-11ed-a37c-8b983229c678", _.syntax.literal);
exports.OperatorKind = OperatorKind;
const ParameterKind = edgedb_1.$.makeType(_.spec, "98c95e9a-3558-11ed-8d2d-afc2caf24e9c", _.syntax.literal);
exports.ParameterKind = ParameterKind;
const SourceDeleteAction = edgedb_1.$.makeType(_.spec, "98c850e0-3558-11ed-bf34-49ed5dd4640a", _.syntax.literal);
exports.SourceDeleteAction = SourceDeleteAction;
const TargetDeleteAction = edgedb_1.$.makeType(_.spec, "98c7f73a-3558-11ed-8772-a33a41281188", _.syntax.literal);
exports.TargetDeleteAction = TargetDeleteAction;
const TypeModifier = edgedb_1.$.makeType(_.spec, "98c9b6ec-3558-11ed-b054-3d301400d3c1", _.syntax.literal);
exports.TypeModifier = TypeModifier;
const Volatility = edgedb_1.$.makeType(_.spec, "98c905d0-3558-11ed-a524-eb8b40eb6016", _.syntax.literal);
exports.Volatility = Volatility;
const $Object_98cad86a355811ed98af75c05296aa5a = edgedb_1.$.makeType(_.spec, "98cad86a-3558-11ed-98af-75c05296aa5a", _.syntax.literal);
exports.$Object_98cad86a355811ed98af75c05296aa5a = $Object_98cad86a355811ed98af75c05296aa5a;
const Object_98cad86a355811ed98af75c05296aa5a = _.syntax.$PathNode(edgedb_1.$.$toSet($Object_98cad86a355811ed98af75c05296aa5a, edgedb_1.$.Cardinality.Many), null, true);
exports.Object_98cad86a355811ed98af75c05296aa5a = Object_98cad86a355811ed98af75c05296aa5a;
const $SubclassableObject = edgedb_1.$.makeType(_.spec, "98d081de-3558-11ed-ac8a-41c9bedafed5", _.syntax.literal);
exports.$SubclassableObject = $SubclassableObject;
const SubclassableObject = _.syntax.$PathNode(edgedb_1.$.$toSet($SubclassableObject, edgedb_1.$.Cardinality.Many), null, true);
exports.SubclassableObject = SubclassableObject;
const $InheritingObject = edgedb_1.$.makeType(_.spec, "99794b7a-3558-11ed-8c6c-e906a950d8f8", _.syntax.literal);
exports.$InheritingObject = $InheritingObject;
const InheritingObject = _.syntax.$PathNode(edgedb_1.$.$toSet($InheritingObject, edgedb_1.$.Cardinality.Many), null, true);
exports.InheritingObject = InheritingObject;
const $AnnotationSubject = edgedb_1.$.makeType(_.spec, "9964c7d6-3558-11ed-94fb-2b8459f73e9f", _.syntax.literal);
exports.$AnnotationSubject = $AnnotationSubject;
const AnnotationSubject = _.syntax.$PathNode(edgedb_1.$.$toSet($AnnotationSubject, edgedb_1.$.Cardinality.Many), null, true);
exports.AnnotationSubject = AnnotationSubject;
const $AccessPolicy = edgedb_1.$.makeType(_.spec, "9a0c9664-3558-11ed-a616-e90d7adf9945", _.syntax.literal);
exports.$AccessPolicy = $AccessPolicy;
const AccessPolicy = _.syntax.$PathNode(edgedb_1.$.$toSet($AccessPolicy, edgedb_1.$.Cardinality.Many), null, true);
exports.AccessPolicy = AccessPolicy;
const $Alias = edgedb_1.$.makeType(_.spec, "9a262052-3558-11ed-905f-e151f687a81b", _.syntax.literal);
exports.$Alias = $Alias;
const Alias = _.syntax.$PathNode(edgedb_1.$.$toSet($Alias, edgedb_1.$.Cardinality.Many), null, true);
exports.Alias = Alias;
const $Annotation = edgedb_1.$.makeType(_.spec, "996b1d66-3558-11ed-973b-67673e05247d", _.syntax.literal);
exports.$Annotation = $Annotation;
const Annotation = _.syntax.$PathNode(edgedb_1.$.$toSet($Annotation, edgedb_1.$.Cardinality.Many), null, true);
exports.Annotation = Annotation;
const $Type = edgedb_1.$.makeType(_.spec, "98d901b0-3558-11ed-bebc-690ca0e3da05", _.syntax.literal);
exports.$Type = $Type;
const Type = _.syntax.$PathNode(edgedb_1.$.$toSet($Type, edgedb_1.$.Cardinality.Many), null, true);
exports.Type = Type;
const $PrimitiveType = edgedb_1.$.makeType(_.spec, "98f750a2-3558-11ed-b36a-a9e6feb21def", _.syntax.literal);
exports.$PrimitiveType = $PrimitiveType;
const PrimitiveType = _.syntax.$PathNode(edgedb_1.$.$toSet($PrimitiveType, edgedb_1.$.Cardinality.Many), null, true);
exports.PrimitiveType = PrimitiveType;
const $CollectionType = edgedb_1.$.makeType(_.spec, "99213f2a-3558-11ed-989f-6f463475fd63", _.syntax.literal);
exports.$CollectionType = $CollectionType;
const CollectionType = _.syntax.$PathNode(edgedb_1.$.$toSet($CollectionType, edgedb_1.$.Cardinality.Many), null, true);
exports.CollectionType = CollectionType;
const $Array = edgedb_1.$.makeType(_.spec, "992c81be-3558-11ed-9914-6de3d02fe756", _.syntax.literal);
exports.$Array = $Array;
const Array = _.syntax.$PathNode(edgedb_1.$.$toSet($Array, edgedb_1.$.Cardinality.Many), null, true);
exports.Array = Array;
const $CallableObject = edgedb_1.$.makeType(_.spec, "9991f8dc-3558-11ed-a70b-cfbf21db1e24", _.syntax.literal);
exports.$CallableObject = $CallableObject;
const CallableObject = _.syntax.$PathNode(edgedb_1.$.$toSet($CallableObject, edgedb_1.$.Cardinality.Many), null, true);
exports.CallableObject = CallableObject;
const $VolatilitySubject = edgedb_1.$.makeType(_.spec, "99a0dbd6-3558-11ed-a462-b1cf4029b8b8", _.syntax.literal);
exports.$VolatilitySubject = $VolatilitySubject;
const VolatilitySubject = _.syntax.$PathNode(edgedb_1.$.$toSet($VolatilitySubject, edgedb_1.$.Cardinality.Many), null, true);
exports.VolatilitySubject = VolatilitySubject;
const $Cast = edgedb_1.$.makeType(_.spec, "9ba3bb56-3558-11ed-8147-f760af6029e5", _.syntax.literal);
exports.$Cast = $Cast;
const Cast = _.syntax.$PathNode(edgedb_1.$.$toSet($Cast, edgedb_1.$.Cardinality.Many), null, true);
exports.Cast = Cast;
const $ConsistencySubject = edgedb_1.$.makeType(_.spec, "99c3a666-3558-11ed-b6ad-f903079cf98f", _.syntax.literal);
exports.$ConsistencySubject = $ConsistencySubject;
const ConsistencySubject = _.syntax.$PathNode(edgedb_1.$.$toSet($ConsistencySubject, edgedb_1.$.Cardinality.Many), null, true);
exports.ConsistencySubject = ConsistencySubject;
const $Constraint = edgedb_1.$.makeType(_.spec, "99a85e88-3558-11ed-ac1d-1dda7a758d15", _.syntax.literal);
exports.$Constraint = $Constraint;
const Constraint = _.syntax.$PathNode(edgedb_1.$.$toSet($Constraint, edgedb_1.$.Cardinality.Many), null, true);
exports.Constraint = Constraint;
const $Delta = edgedb_1.$.makeType(_.spec, "995cce0a-3558-11ed-b7cc-4deed1cc9236", _.syntax.literal);
exports.$Delta = $Delta;
const Delta = _.syntax.$PathNode(edgedb_1.$.$toSet($Delta, edgedb_1.$.Cardinality.Many), null, true);
exports.Delta = Delta;
const $Extension = edgedb_1.$.makeType(_.spec, "9bcba03a-3558-11ed-ab2c-4915a29e3dfa", _.syntax.literal);
exports.$Extension = $Extension;
const Extension = _.syntax.$PathNode(edgedb_1.$.$toSet($Extension, edgedb_1.$.Cardinality.Many), null, true);
exports.Extension = Extension;
const $Function = edgedb_1.$.makeType(_.spec, "9b735e34-3558-11ed-8eee-6555715a3d31", _.syntax.literal);
exports.$Function = $Function;
const Function = _.syntax.$PathNode(edgedb_1.$.$toSet($Function, edgedb_1.$.Cardinality.Many), null, true);
exports.Function = Function;
const $Global = edgedb_1.$.makeType(_.spec, "9b5fea70-3558-11ed-9e5c-8bb33745c04b", _.syntax.literal);
exports.$Global = $Global;
const Global = _.syntax.$PathNode(edgedb_1.$.$toSet($Global, edgedb_1.$.Cardinality.Many), null, true);
exports.Global = Global;
const $Index = edgedb_1.$.makeType(_.spec, "99d0b2ac-3558-11ed-9a1c-37af04f54532", _.syntax.literal);
exports.$Index = $Index;
const Index = _.syntax.$PathNode(edgedb_1.$.$toSet($Index, edgedb_1.$.Cardinality.Many), null, true);
exports.Index = Index;
const $Pointer = edgedb_1.$.makeType(_.spec, "99f0b174-3558-11ed-a5d8-198f2b4ff1c1", _.syntax.literal);
exports.$Pointer = $Pointer;
const Pointer = _.syntax.$PathNode(edgedb_1.$.$toSet($Pointer, edgedb_1.$.Cardinality.Many), null, true);
exports.Pointer = Pointer;
const $Source = edgedb_1.$.makeType(_.spec, "99e52e26-3558-11ed-9dc4-b1a1c401b90a", _.syntax.literal);
exports.$Source = $Source;
const Source = _.syntax.$PathNode(edgedb_1.$.$toSet($Source, edgedb_1.$.Cardinality.Many), null, true);
exports.Source = Source;
const $Link = edgedb_1.$.makeType(_.spec, "9ad21e48-3558-11ed-9d0c-5be0661b1f8f", _.syntax.literal);
exports.$Link = $Link;
const Link = _.syntax.$PathNode(edgedb_1.$.$toSet($Link, edgedb_1.$.Cardinality.Many), null, true);
exports.Link = Link;
const $Migration = edgedb_1.$.makeType(_.spec, "9bb975c2-3558-11ed-987c-6fa9cbb14929", _.syntax.literal);
exports.$Migration = $Migration;
const Migration = _.syntax.$PathNode(edgedb_1.$.$toSet($Migration, edgedb_1.$.Cardinality.Many), null, true);
exports.Migration = Migration;
const $Module = edgedb_1.$.makeType(_.spec, "98f18974-3558-11ed-99a8-01f169c6abf9", _.syntax.literal);
exports.$Module = $Module;
const Module = _.syntax.$PathNode(edgedb_1.$.$toSet($Module, edgedb_1.$.Cardinality.Many), null, true);
exports.Module = Module;
const $ObjectType = edgedb_1.$.makeType(_.spec, "9a54d564-3558-11ed-86de-a153a39f6995", _.syntax.literal);
exports.$ObjectType = $ObjectType;
const ObjectType = _.syntax.$PathNode(edgedb_1.$.$toSet($ObjectType, edgedb_1.$.Cardinality.Many), null, true);
exports.ObjectType = ObjectType;
const $Operator = edgedb_1.$.makeType(_.spec, "9b8c5650-3558-11ed-a16a-4575a1e1ae0d", _.syntax.literal);
exports.$Operator = $Operator;
const Operator = _.syntax.$PathNode(edgedb_1.$.$toSet($Operator, edgedb_1.$.Cardinality.Many), null, true);
exports.Operator = Operator;
const $Parameter = edgedb_1.$.makeType(_.spec, "9987bb10-3558-11ed-8667-a3986cb91020", _.syntax.literal);
exports.$Parameter = $Parameter;
const Parameter = _.syntax.$PathNode(edgedb_1.$.$toSet($Parameter, edgedb_1.$.Cardinality.Many), null, true);
exports.Parameter = Parameter;
const $Property = edgedb_1.$.makeType(_.spec, "9afd540a-3558-11ed-b3d1-a57e2178d6df", _.syntax.literal);
exports.$Property = $Property;
const Property = _.syntax.$PathNode(edgedb_1.$.$toSet($Property, edgedb_1.$.Cardinality.Many), null, true);
exports.Property = Property;
const $PseudoType = edgedb_1.$.makeType(_.spec, "98e1a798-3558-11ed-912b-63053b181a9c", _.syntax.literal);
exports.$PseudoType = $PseudoType;
const PseudoType = _.syntax.$PathNode(edgedb_1.$.$toSet($PseudoType, edgedb_1.$.Cardinality.Many), null, true);
exports.PseudoType = PseudoType;
const $Range = edgedb_1.$.makeType(_.spec, "994f2dcc-3558-11ed-a93b-a3c1ec1eea7b", _.syntax.literal);
exports.$Range = $Range;
const Range = _.syntax.$PathNode(edgedb_1.$.$toSet($Range, edgedb_1.$.Cardinality.Many), null, true);
exports.Range = Range;
const $ScalarType = edgedb_1.$.makeType(_.spec, "9a341fc2-3558-11ed-8a65-9d626b789158", _.syntax.literal);
exports.$ScalarType = $ScalarType;
const ScalarType = _.syntax.$PathNode(edgedb_1.$.$toSet($ScalarType, edgedb_1.$.Cardinality.Many), null, true);
exports.ScalarType = ScalarType;
const $Tuple = edgedb_1.$.makeType(_.spec, "993f97e0-3558-11ed-96f2-0bac8f9912d5", _.syntax.literal);
exports.$Tuple = $Tuple;
const Tuple = _.syntax.$PathNode(edgedb_1.$.$toSet($Tuple, edgedb_1.$.Cardinality.Many), null, true);
exports.Tuple = Tuple;
const $TupleElement = edgedb_1.$.makeType(_.spec, "993a6d6a-3558-11ed-a3c3-83788a2d8bef", _.syntax.literal);
exports.$TupleElement = $TupleElement;
const TupleElement = _.syntax.$PathNode(edgedb_1.$.$toSet($TupleElement, edgedb_1.$.Cardinality.Many), null, true);
exports.TupleElement = TupleElement;
const __defaultExports = {
    "AccessKind": AccessKind,
    "AccessPolicyAction": AccessPolicyAction,
    "Cardinality": Cardinality,
    "OperatorKind": OperatorKind,
    "ParameterKind": ParameterKind,
    "SourceDeleteAction": SourceDeleteAction,
    "TargetDeleteAction": TargetDeleteAction,
    "TypeModifier": TypeModifier,
    "Volatility": Volatility,
    "Object": Object_98cad86a355811ed98af75c05296aa5a,
    "SubclassableObject": SubclassableObject,
    "InheritingObject": InheritingObject,
    "AnnotationSubject": AnnotationSubject,
    "AccessPolicy": AccessPolicy,
    "Alias": Alias,
    "Annotation": Annotation,
    "Type": Type,
    "PrimitiveType": PrimitiveType,
    "CollectionType": CollectionType,
    "Array": Array,
    "CallableObject": CallableObject,
    "VolatilitySubject": VolatilitySubject,
    "Cast": Cast,
    "ConsistencySubject": ConsistencySubject,
    "Constraint": Constraint,
    "Delta": Delta,
    "Extension": Extension,
    "Function": Function,
    "Global": Global,
    "Index": Index,
    "Pointer": Pointer,
    "Source": Source,
    "Link": Link,
    "Migration": Migration,
    "Module": Module,
    "ObjectType": ObjectType,
    "Operator": Operator,
    "Parameter": Parameter,
    "Property": Property,
    "PseudoType": PseudoType,
    "Range": Range,
    "ScalarType": ScalarType,
    "Tuple": Tuple,
    "TupleElement": TupleElement
};
exports.default = __defaultExports;
