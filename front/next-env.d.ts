/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly contentfulSpaceId: string;
    readonly contentfulAccessToken: string;
    readonly contentfulCollectionName: string;
  }
}
