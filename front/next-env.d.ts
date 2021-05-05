/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="node" />
/// <reference types="@emotion/core"/>
/// <reference types="@emotion/react/types/css-prop" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly contentfulSpaceId: string;
    readonly contentfulAccessToken: string;
    readonly contentfulCollectionName: string;
  }
}
