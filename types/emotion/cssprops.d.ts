import type { Interpolation } from '@emotion/react';
import type { Theme } from '@emotion/react';

declare global {
  interface CssProps {
    css?: Interpolation<Theme>
    className?: string
  }
}
export { }