const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    contentfulSpaceId: process.env.NEXT_PUBLIC_ENV_CONTENTFUL_SPACE_ID,
    contentfulAccessToken:
      process.env.NEXT_PUBLIC_ENV_CONTENTFUL_CDA_ACCESS_TOKEN,
    contentfulCollectionName:
      process.env.NEXT_PUBLIC_ENV_CONTENTFUL_COLLECTION_NAME,
  },
});
