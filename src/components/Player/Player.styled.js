import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  /* width: 500px;
  height: 400px; */
`;

export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;