import * as React from 'react';
import {ImageProps} from 'react-native';

export interface Placeholder<Props> {
  component?: React.ComponentType<Props>,
  props?: Props;
}

export interface Options<Props> {
  validProtocols?: string[];
  fileHostWhitelist?: string[];
  cachePruneTriggerLimit?: number;
  fileDirName?: string;
  defaultPlaceholder?: Placeholder<Props>;
}

export function imageCacheHoc<Props extends ImageProps, Comp extends React.ComponentClass<Props>>(component: Comp): Comp;
export function imageCacheHoc<Props extends ImageProps, Comp extends React.ComponentClass<Props>>(component: Comp, options: Options<Props>): Comp;

export default imageCacheHoc;
