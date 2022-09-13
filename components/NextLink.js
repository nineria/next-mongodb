import styled from '@emotion/styled';
import Link from 'next/link';

const LinkStyle = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const NextLink = ({ href, children }) => (
  <Link href={href}>
    <LinkStyle>{children}</LinkStyle>
  </Link>
);

export default NextLink;
