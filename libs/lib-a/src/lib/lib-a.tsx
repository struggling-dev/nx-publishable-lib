import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibAProps {}

const StyledLibA = styled.div`
  color: pink;
`;

export function LibA(props: LibAProps) {
  return (
    <StyledLibA>
      <h1>Welcome to LibA!</h1>
    </StyledLibA>
  );
}

export default LibA;
