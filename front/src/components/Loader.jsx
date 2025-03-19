import React from 'react'

const Loader = () => (
    <div className="flex justify-center gap-10 items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-[#ab9b82]"></div>
      <p>Vaša forma se obradjuje</p>
    </div>
  );
  

export default Loader