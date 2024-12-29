import styled from '@emotion/styled';

export const DialogContainer = styled.div([(props) => ({
  willChange: 'scroll-position',
  position: 'fixed',
  borderRadius: props.theme.borderRadius.global,
  overflow: 'hidden',
})])