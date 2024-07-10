'use client'
import { useState } from 'react';

const DevelopCards = ({softwareData}) => {
  const [activeTab, setActiveTab] = useState(softwareData[0].name);


  return (
    <>
<div className="w-[60%] mr-auto ml-auto mb-10">
  <h1 className="text-[#034E70] text-[20px] font-normal py-6">
    Extended Team Services includes
  </h1>
  <div className="flex border-b-2">
    {softwareData.map((tab) => (
      <div className="table-cell" key={tab.name}>
        <div
          className={`px-4 py-5 border-t-2 border-l-2 border-r-2 cursor-pointer text-[20px] overflow-hidden 
            h-28 transition-all duration-300 ${
              activeTab === tab.name ? 'border-b-0 border-gray-300' : 'border-transparent'
            }`}
          onClick={() => setActiveTab(tab.name)}
        >
          <h1 className="text-[#034E70] text-[20px] font-medium py-6 px-9">
            {tab.name}
          </h1>
        </div>
      </div>
    ))}
  </div>
  <div className="p-4 border-x-2 border-b-2 border-gray-300 bg-white prose">
    <div dangerouslySetInnerHTML={{ __html: softwareData.find((tab) => tab.name === activeTab)?.content }} />
  </div>
</div>
 
    </>

  );
};

export default DevelopCards;
