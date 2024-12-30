import styled from '@emotion/styled';
import { theme } from '@/components/ui/theme';

export const DialogContainer = styled.div([{
  willChange: 'scroll-position',
  position: 'fixed',
  borderRadius: theme.borderRadius.sm,
  overflow: 'hidden',
}])