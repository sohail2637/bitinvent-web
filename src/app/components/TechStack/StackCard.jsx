import Image from 'next/image'
import React from 'react'

export default function StackCard() {
 
    const categories = [
        {
          name: 'Backend',
          techs: [
            '.NET, Core',
            'Java',
            'C/C++',
            'Golang',
            'PhP',
            'Laravel',
            'Symphony',
            'Linux/embedded',
          ],
        },
        {
          name: 'Frontend',
          techs: [
            'React',
            'Angular',
            '.NET Blazer',
            'Vue.js',
            'Polymer JS',
            'HTML',
            'JavaScript',
            'jQuery',
            'Typescript',
          ],
        },
        {
          name: 'Mobile',
          techs: [
            'Swift',
            'C/C++',
            'Java',
            'Kotlin',
            'React Native',
            'Flutter',
            'Cordova',
          ],
        },
        {
          name: 'CMS/CRM/ERP',
          techs: [
            'SalesForce',
            'Dynamics 365',
            'HubSpot',
            'WordPress',
            'MongoDB',
            'Magento',
            'nopCommerce',
            'Umbraco',
            'Sharepoint',
          ],
        },
        {
            name: 'Databases',
            techs: [
              'MS SQL Server',
              'MySQL',
              'PostgreSQL',
              'Azure CosmosDB',
              'MongoDB',
            ],
          },  
          {
            name: 'Clouds',
            techs: [
              'Azure​',
              'AWS​',
              'Google Cloud', 
            ],
          },
          {
            name: 'Testing',
            techs: [
              'Postman​',
              'Azure DevOps​',
              'Kualitee', 
            ],
          },{
            name: 'Project Management',
            techs: [
              'SCRUM/Agile',
              'Azure DevOps',
              'Jira​',
              'Trello',
            ],
          }, 

      ];
    return (
    <>    
    <div className="container mx-auto p-4">
      <p className='py-7 text-[19.2px] '>This is an excerpt of our technical competencies.<br/>
   <strong className='text-[#034e70] '>Feel free to ask us</strong>, if you need special skills.</p>
      <div className="md:flex items-start justify-between flex-wrap  md:gap-4 ">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`bg-[#F9F9F9] rounded-lg lg:p-8 md:p-5 p-8 cursor-pointer xl:w-[300px] lg:w-[235px] md:w-[172px] w-full h-auto mt-9 `}
           
          >
            <h3 className="text-[20.8px] font-light mb-2 xl:pl-9 lg:pl-0 pl-9 ">{category.name}</h3>
            <ul className="list-none ">
              {category.techs.map((tech) => (
                <li
                  key={tech}
                >
                  <div className='flex items-center justify-start leading-9' >
                  <Image src="/assets/icons/check-icon.svg"  
                width={23} 
                height={23}
                />
                <h3 className='p-3  text-[17.6px] '>{tech}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
