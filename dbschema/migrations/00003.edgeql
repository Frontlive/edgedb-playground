CREATE MIGRATION m1jvjr77flpierspzx52mqxkolksp7l7l3c5a6xmklhthd743nsxoq
    ONTO m1jcnxheohxz2m2pdkegebn2xx35puluiv3wic2jbmsja47nw6kmgq
{
  CREATE TYPE default::Post {
      CREATE REQUIRED LINK author -> default::User;
      CREATE REQUIRED PROPERTY body -> std::str;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
