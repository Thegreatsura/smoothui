import { FloatNav } from "@docs/components/float-nav";
import Footer from "@docs/components/landing/footer";
import { NavSponsorCard } from "@docs/components/nav-sponsor-card";
import { decorateNewPages } from "@docs/lib/decorate-new";
import { baseOptions } from "@docs/lib/layout.shared";
import { getSmoothuiStats } from "@docs/lib/smoothui-stats";
import { source } from "@docs/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const tree = decorateNewPages(source.pageTree, source);
  const stats = getSmoothuiStats();

  return (
    <>
      <DocsLayout
        tree={tree}
        {...baseOptions()}
        sidebar={{
          footer: <NavSponsorCard />,
        }}
      >
        {children}
        <FloatNav />
      </DocsLayout>
      <Footer componentCount={stats.componentCount} version={stats.version} />
    </>
  );
}
