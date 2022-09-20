CREATE MIGRATION m15n22v7t33eh53hilteidyb6t53tlz7dtbcviwzdzxp43efkd24xa
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY age -> std::int32;
      CREATE REQUIRED PROPERTY email -> std::str;
      CREATE REQUIRED PROPERTY first_name -> std::str;
      CREATE OPTIONAL PROPERTY is_married -> std::bool;
      CREATE OPTIONAL PROPERTY last_name -> std::str;
  };
};
