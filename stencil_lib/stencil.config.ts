import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-issue-repo-reserved-attributes',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true
    }
  ],
};
