CREATE MIGRATION m1p3ibcrntfsfrwewhd3sipufbjtqx7sx3pfnrklcaicnm33s7fo7q
    ONTO m1jvjr77flpierspzx52mqxkolksp7l7l3c5a6xmklhthd743nsxoq
{
  ALTER TYPE default::Post {
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY age {
          CREATE CONSTRAINT std::max_value(100);
          CREATE CONSTRAINT std::min_value(18);
      };
  };
};
