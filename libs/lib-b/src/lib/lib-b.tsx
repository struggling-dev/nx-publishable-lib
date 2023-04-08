import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibBProps {}

const StyledLibB = styled.div`
  color: pink;
`;

export function LibB(props: LibBProps) {
  return (
    <StyledLibB>
      <h1>Welcome to LibB!</h1>
    </StyledLibB>
  );
}

export default LibB;
