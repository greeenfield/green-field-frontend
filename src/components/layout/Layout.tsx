import { Header } from '@components/header';
import { SLayout } from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SLayout>
      <Header />
      {children}
    </SLayout>
  );
};

export default Layout;
