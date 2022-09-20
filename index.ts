import * as edgedb from "edgedb";
import e from "./dbschema/edgeql-js";

const client = edgedb.createClient();

(async () => {
  // const result = await client.query("SELECT User { id, first_name };");

  // console.log(result);

  // const queryTyped = e.select(e.User, () => ({
  //   id: true,
  //   full_name: true,
  // }));

  // const resultTyped = await queryTyped.run(client);

  // console.log(resultTyped);

  // const insertPost = e.insert(e.Post, {
  //   title: "Hello World",
  //   body: "This is my first post",
  //   author: e
  //     .select(e.User, (person) => ({
  //       filter: e.op(person.first_name, "=", "Mateusz"),
  //     }))
  //     .assert_single(),
  // });

  // await insertPost.run(client);

  const selectPost = e.select(e.Post, () => ({
    title: true,
    body: true,
    author: {
      id: true,
      full_name: true,
    },
  }));

  const resultPost = await selectPost.run(client);

  console.log(resultPost);
})();
