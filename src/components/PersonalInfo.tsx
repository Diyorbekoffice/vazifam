import React from 'react';
import GaugeComponent from 'react-gauge-component';

interface PersonalInfoProps {
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
  height: number;
  weight: number;
  index: number;
  position: string;
  candidate: string;
  imageUrl?: string;
}

const PersonalInfo: React.FC<{ data: PersonalInfoProps }> = ({ data }) => {
  return (
    <div className="flex  mt-9 justify-between">
      <div className="flex items-center gap-8">
        <img
          src={data.imageUrl || "fallback-image-url.jpg"}
          alt="Profile"
          className="w-52 h-72 rounded-lg object-cover mr-4"
        />
        <div className='flex flex-col gap-7'>
          <div>
            <p className='text-4xl font-bold'>{data.firstName}</p>
            <p className='text-4xl'>{data.lastName}</p>
          </div>
          <div>
            <p><strong>Тугилган сана:</strong> {data.birthday}</p>
            <p><strong>Тугилган жой:</strong> {data.address}</p>
          </div>
          <div className='flex items-center'>
            <div className='flex gap-4'>
              <p className='flex flex-col gap-3'><strong>Height:</strong> {data.height} cm</p>
              <p className='flex flex-col gap-3'><strong>Weight:</strong> {data.weight} kg</p>
              <p className='flex flex-col gap-3'><strong>Index:</strong> {data.index}</p>
            </div>
            <div className='relative w-28'>
              <GaugeComponent
                value={data.index || 0}
                type="semicircle"
                labels={{
                  tickLabels: { type: 'inner', ticks: [], defaultTickValueConfig: false as any },
                  valueLabel: false as any,
                }}
                arc={{
                  colorArray: ['#00b3ff', '#00ff2f', '#ffcc00', '#ff9900', '#EA4228'],
                  cornerRadius: 0,
                  subArcs: [{ limit: 20 }, { limit: 40 }, { limit: 60 }, { limit: 80 }, { limit: 100 }],
                  padding: 0,
                  width: 0.4,
                }}
                style={{
                    color: 'white',
                    fontSize: '0px',
                  }}
                pointer={{ type: 'needle', elastic: true, animationDelay: 0 }}
              />
              <p className='absolute bottom-0 right-7'>НОРМА</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[400px] flex flex-col gap-5'>
        <p className='flex flex-col text-xl'><span>Лавозими: </span>{data.position}</p>
        <p className='flex flex-col text-xl'><span>Номзод:</span> {data.candidate}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
