import InfoBar from "@/components/global/Infobar";
import Sidebar from "@/components/global/sidebar"; // Import your actual Sidebar component
import Navbar from "@/components/Section/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {



  return (
    <div className="flex">
      <Sidebar slug={params.slug} />
      <div
          className="
      lg:ml-[250px] 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto
      "
        >
         <InfoBar slug={params.slug}/>
         {children}
        </div>
    </div>
  );
};

export default Layout;
