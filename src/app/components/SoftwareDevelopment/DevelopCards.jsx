'use client'
import { useState } from 'react';

const DevelopCards = ({softwareData}) => {
  const [activeTab, setActiveTab] = useState(softwareData[0].name);


  return (
    <>
<div className="w-3/5 mx-auto mb-10">
  <h1 className="text-[#034E70] text-2xl font-normal py-6">
    Extended Team Services includes
  </h1>
  <div className="flex border-b-2 border-gray-300">
    {softwareData.map((tab) => (
      <div className="table-cell" key={tab.name}>
        <div
          className={`px-4 py-5 cursor-pointer text-[20px] overflow-hidden h-28 
            ${activeTab === tab.name ? 'border-t-2 border-l-2 border-r-2 border-gray-300' : 'border-b-2 border-gray-300'}`}
          onClick={() => setActiveTab(tab.name)}
        >
          <h1 className="text-[#034E70] font-medium py-6 px-9">
            {tab.name}
          </h1>
        </div>
      </div>
    ))}
  </div>
  <div className={`p-4 border-2 border-t-0 bg-white prose ${activeTab ? '-mt-2' : 'border-t-2'}`}>
    <div dangerouslySetInnerHTML={{ __html: softwareData.find((tab) => tab.name === activeTab)?.content }} />
  </div>
</div>

 
    </>

  );
};

export default DevelopCards;
