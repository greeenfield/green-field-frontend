import * as S from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}
/** @todo 페이지에 따라 header 컨트롤 필요 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.Wrapper>
  );
};

export default Layout;
