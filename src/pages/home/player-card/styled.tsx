import styled from 'styled-components';

export const PlayerCardStyled = styled.div`
  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  .player-card:hover {
    animation: zoomIn 0.3s ease-in-out;
  }
`;
