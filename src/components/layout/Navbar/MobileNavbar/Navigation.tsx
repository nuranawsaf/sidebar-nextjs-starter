import * as React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { navdata } from '../navdata';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggle }) => {
  return (
    <motion.ul
      className="absolute top-0 right-0  w-screen  px-8  bg-red-200"
      variants={variants}
    >
      <Link href="/">
        <div className="cursor-pointer flex items-center gap-x-2 py-4">
          {/* <img
            src="https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png"
            alt="Black Rectangular Shape"
          /> */}
        </div>
      </Link>

      <div className=" mt-32 sb">
        {navdata.map((item) => (
          <MenuItem toggle={toggle} nav={item} key={item.id} />
        ))}
      </div>
    </motion.ul>
  );
};

export default Navigation;
