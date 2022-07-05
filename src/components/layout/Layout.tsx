import * as Styled from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}
/** @todo 페이지에 따라 header 컨트롤 필요 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.Wrapper>
      <Styled.MainWrapper>{children}</Styled.MainWrapper>
    </Styled.Wrapper>
  );
};

export default Layout;
