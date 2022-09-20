module default {
  type User {
    required property first_name -> str;
    optional property last_name -> str;
    required property email -> str;
    required property age -> int32 {
      constraint min_value(18);
      constraint max_value(100);
    };

    optional property is_married -> bool;

    property full_name := .first_name ++ ' ' ++ .last_name
     if exists .last_name
     else .first_name
  }

  type Post {
    required property title -> str {
      constraint exclusive;
    };
    required property body -> str;
    required link author -> User;
  }
}