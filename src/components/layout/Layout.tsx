import React from 'react';

import dynamic from 'next/dynamic';

import { SideBar } from './Navbar/DasktopNavbar/SideBar';
import { TopNavbar } from './Navbar/DasktopNavbar/TopNavbar';
import MobileNavbar from './Navbar/MobileNavbar/MobileNavbar';

const ToggleButton = dynamic(
  () => import('@components/shared/buttons/ToggleButton/ToggleButton'),
  {
    ssr: false,
  }
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative sb">
      {/*
          The following props can be passed: light, dark, size, tooltip, darkIcon & lightIcon 
          Note: For customizing darkIcons and lightIcons, you should use react-icons
          */}
      {/* <ToggleButton tooltip /> */}
      <div className="h-screen  flex md:overflow-hidden ">
        <aside className="md:w-[6rem] sb xl:w-[20rem] bg-white  h-full  shadow-sm hidden md:block">
          <SideBar />
        </aside>
        <main className="flex-1 h-full md:flex flex-col shadow-sm sb">
          <div className="hidden md:block">
            <TopNavbar />
          </div>
          <MobileNavbar />
          <div className="flex-1 overflow-scroll">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
