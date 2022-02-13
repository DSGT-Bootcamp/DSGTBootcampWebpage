openapi-generator-cli generate \
  -i ./dsgt.yaml \
  -o src/generated-sources/openapi \
  -g typescript-fetch \
  --additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true