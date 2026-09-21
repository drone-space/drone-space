import LayoutPage from '@repo/ui/layout/page';
import LayoutMain from '@repo/ui/layout/main';
import PartialPageHome from '@/components/partial/page/home';

export default function Home() {
  return (
    <HomeLayout>
      <PartialPageHome />
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutMain>
      <LayoutPage>
        <main>{children}</main>
      </LayoutPage>
    </LayoutMain>
  );
}
