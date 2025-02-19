import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const DialogContainerCss = css([{
  willChange: 'scroll-position',
  position: 'fixed',
  borderRadius: theme.borderRadius.sm,
  overflow: 'hidden',
}])