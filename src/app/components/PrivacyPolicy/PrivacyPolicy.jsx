import React from 'react'

function PrivacyPolicy({privacyPolicyData}) {
  return (
   <>
  <section>
      <div className='max-w-[880px] mr-auto ml-auto lg:p-0 md:p-16 p-0 my-14'>
        {
          privacyPolicyData.map((data, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: data }} />
          ))
        }
      </div>
    </section>
   </>
  )
}

export default PrivacyPolicy
