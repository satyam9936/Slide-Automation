import { usePath } from '@/hooks/user-nav';
import LogoSmall from '@/svgs/logo-small';
import React from 'react';

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();

  return (
    <div
      className='
      w-[250px]
      border-2
      fixed
      left-0
      lg:inline-block
      hidden
      bottom-0
      top-0
      m-3
      rounded-3xl
      overflow-hidden
      border-[#545454]
      bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD]
      '
    >
      <div
        className='
        flex flex-col
        gap-y-5
        w-full
        h-full
        p-3
        bg-[#0e0e0e]
        bg-opacity-90
        bg-clip-padding
        backdrop-filter
        backdrop-blur-3xl'
      >

<div className='flex-gap-x2 items-center
p-5 justify-center'>
    <LogoSmall/>
</div>

<div  className='flex flex-col py-3 '>
  
</div>
</div>
</div>
  );
};

export default Sidebar;
