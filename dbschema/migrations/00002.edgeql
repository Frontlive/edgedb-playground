CREATE MIGRATION m1jcnxheohxz2m2pdkegebn2xx35puluiv3wic2jbmsja47nw6kmgq
    ONTO m15n22v7t33eh53hilteidyb6t53tlz7dtbcviwzdzxp43efkd24xa
{
  ALTER TYPE default::User {
      CREATE PROPERTY full_name := ((((.first_name ++ ' ') ++ .last_name) IF EXISTS (.last_name) ELSE .first_name));
  };
};
