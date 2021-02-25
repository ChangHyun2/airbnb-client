export * from './components';
export * from './stylesheet';

import * as alignChild from './stylesheet/alignChild';
import * as mediaQuery from './stylesheet/mediaQuery';
import * as styling from './stylesheet/styling';
import * as typo from './stylesheet/typo';
import * as effect from './stylesheet/effect';
import * as size from './stylesheet/size';
import * as alignSelf from './stylesheet/alignSelf';
import * as baseComponent from './stylesheet/baseComponent';
import * as values from './stylesheet/values';
import { default as pallete } from './stylesheet/pallete';
import { default as zIndex } from './stylesheet/zIndex';

import * as AlignChildComponents from './components/alignChild';
import * as TextComponents from './components/text';
import * as AlignSelfComponents from './components/alignSelf';

const S = {
  pallete,
  ...mediaQuery,
  ...styling,
  zIndex,
  ...typo,
  ...alignSelf,
  ...alignChild,
  ...effect,
  ...size,
  ...baseComponent,
  ...values,

  ...AlignChildComponents,
  ...AlignSelfComponents,
  ...TextComponents,
};

export default S;
