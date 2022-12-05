import React from 'react';

import { useRouter } from 'next/router';

import clsx from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';

import { navdata } from '../navdata';

export const SideBar = () => {
  const router = useRouter();

  return (
    <div className="sb py-5">
      SideBar
      {/* <div className="px-8 py-4 flex items-center justify-between ">
        <h1 className="uppercase text-primary text-4xl font-bold tracking-widest">
          food
          <span className="text-tertiary">y</span>
        </h1>
        <GiHamburgerMenu className="text-secondary" />
      </div>

      <div className="relative max-w-xs  w-full mt-4">
        {navdata.map((item) => {
          const isActive = router.pathname == item.href;
          return (
            <div
              key={item.id}
              className={clsx(
                'flex items-center gap-4 py-4  px-8',
                isActive
                  ? 'bg-lightGreen text-primary mx-4 px-4 font-medium'
                  : 'text-secondary'
              )}
            >
              <item.icon />
              <a href={item.href}>{item.title}</a>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
