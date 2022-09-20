import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export type $PostλShape = $.typeutil.flatten<_std.$Object_988c9d98355811ed91ab93b70794e9cfλShape & {
  "author": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "body": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
}>;
type $Post = $.ObjectType<"default::Post", $PostλShape, null>;
const $Post = $.makeType<$Post>(_.spec, "429c3256-3911-11ed-9c42-7d21c366e2e5", _.syntax.literal);

const Post: $.$expr_PathNode<$.TypeSet<$Post, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Post, $.Cardinality.Many), null, true);

export type $UserλShape = $.typeutil.flatten<_std.$Object_988c9d98355811ed91ab93b70794e9cfλShape & {
  "age": $.PropertyDesc<_std.$int32, $.Cardinality.One, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "first_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "is_married": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, false>;
  "last_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "full_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true, false, false>;
  "<author[is Post]": $.LinkDesc<$Post, $.Cardinality.Many, {}, false, false,  false, false>;
  "<author": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null>;
const $User = $.makeType<$User>(_.spec, "25607164-3909-11ed-b76c-113782bdb64a", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null, true);



export { $Post, Post, $User, User };

type __defaultExports = {
  "Post": typeof Post;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "Post": Post,
  "User": User
};
export default __defaultExports;
