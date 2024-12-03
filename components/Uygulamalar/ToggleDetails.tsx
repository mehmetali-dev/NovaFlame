'use client'
import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import Barbekü from './Barbeku';
import Elektrik from './Elektrik';
import Odun from './Odun';

const DynamicTabs: React.FC = () => {

  const tabs = [
    {
      id: "photos",
      label: "Elektrikli",
      content: <Elektrik/>
    },
    {
      id: "music",
      label: "Barbekü",
      content: <Barbekü/>
    },
    {
      id: "videos",
      label: "Odunlu",
      content:<Odun/>
    }
  ];

  return (
    <div className="flex w-full flex-col ">
      
      <Tabs key="solid" variant="solid" aria-label="Tabs variant" size="lg"  items={tabs} className='w-full flex items-center justify-center'>
        {(item) => (
          <Tab key={item.id} title={item.label}  className=''>
            <Card className='w-full'>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default DynamicTabs;
