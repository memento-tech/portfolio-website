import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <LoadingDots />
    </LoadingContainer>
  );
};

export default LoadingSpinner;

const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0000005c;
`;

const LoadingDots = styled.div`
  z-index: 102;
  width: 80px;
  height: 26px;
  background-color: white;
  border-radius: 50px;
  --c: no-repeat radial-gradient(farthest-side, #000 92%, #0000);
  --s: 18px 18px;
  mask: var(--c) left 4px top 50%, var(--c) center, var(--c) right 4px top 50%,
    linear-gradient(#000 0 0);
  -webkit-mask: var(--c) left 4px top 50%, var(--c) center,
    var(--c) right 4px top 50%, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: loading 2s infinite;

  @keyframes loading {
    0% {
      -webkit-mask-size: 0 0, 0 0, 0 0, auto;
    }
    16.67% {
      -webkit-mask-size: var(--s), 0 0, 0 0, auto;
    }
    33.33% {
      -webkit-mask-size: var(--s), var(--s), 0 0, auto;
    }
    50% {
      -webkit-mask-size: var(--s), var(--s), var(--s), auto;
    }
    66.67% {
      -webkit-mask-size: 0 0, var(--s), var(--s), auto;
    }
    83.33% {
      -webkit-mask-size: 0 0, 0 0, var(--s), auto;
    }
    100% {
      -webkit-mask-size: 0 0, 0 0, 0 0, auto;
    }
  }
`;
