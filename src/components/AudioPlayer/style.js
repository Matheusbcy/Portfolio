import styled from 'styled-components';

export const StyledAudi = styled.audio`
  display: ${props => props.isPlaying ? 'block' : 'none'};
`;