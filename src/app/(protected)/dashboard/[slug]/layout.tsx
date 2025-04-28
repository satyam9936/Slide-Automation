import Sidebar from "@/components/global/sidebar"; // Import your actual Sidebar component
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="flex">
      <Sidebar slug={params.slug} />
      <main className="flex-1 p-3">
        {children}
      </main>
    </div>
  );
};

export default Layout;
