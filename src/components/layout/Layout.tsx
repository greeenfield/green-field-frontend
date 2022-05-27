import { Header } from '@components/header';
import { SLayout } from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}
/** @todo 페이지에 따라 header 컨트롤 필요 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <SLayout>
      <Header />
      {children}
    </SLayout>
  );
};

export default Layout;
