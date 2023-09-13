import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => (
  <div className="h-full">
    <div className="hidden md:flex h-full w-[720px] z-30 flex-col fixed inset-y-0">
      <NavigationSidebar />
    </div>
    <main className="md:pl-[720px] h-full">{children}</main>
  </div>
);

export default MainLayout;
