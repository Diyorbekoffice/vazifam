import { useEffect, useState } from 'react';
import axios from 'axios';
import GaugeComponent from 'react-gauge-component';
import ApexCharts from 'react-apexcharts';
import logo from "../src/assets/Rectangle.svg";
import image from './assets/im78.svg'


interface PersonalInfo {
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

interface KnowledgeData {
  percentage: number;
  label: string;
  color: string;
}

interface OverallData {
  percentage: string;
}

const App = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [knowledgeData, setKnowledgeData] = useState<KnowledgeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [overallData, setOverallData] = useState<OverallData | null>(null);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://trello.vimlc.uz/get-personal-info');
        setPersonalInfo(response.data);
      } catch (err) {
        setError('Error fetching personal information');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchKnowledgeData = async () => {
      try {
        const response = await axios.get('https://trello.vimlc.uz/knowlodge');
        setKnowledgeData(response.data.semicharts);

        
        setOverallData(response.data.overall);



      } catch (err) {
        setError('Error fetching knowledge data');
        console.error(err);
      }
    };

    fetchPersonalInfo();
    fetchKnowledgeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const SemiCircleChart = ({ value, color, label }: { value: number; color: string; label: string }) => {
    return (
      <div className="flex flex-col items-center">
        <ApexCharts
          type="radialBar"
          series={[value]}
          options={{
            chart: {
              height: 200,
              type: "radialBar",
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                  size: "60%",
                },
                track: {
                  background: "#f2f2f2",
                  strokeWidth: "97%",
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    fontSize: "35px",
                    fontWeight: "bold",

                    offsetY: -5,
                    formatter: (val) => `${val}%`,
                  },
                },
              },
            },
            fill: {
              colors: [color],
            },
          }}
          height={500}
        />
        <p className="mt-2 text-lg font-medium text-center">{label}</p>
      </div>
    );
  };

  const ProgressBar = ({ value, label }: { value: number; label: string }) => {
    const validValue = Math.min(Math.max(value, 0), 100);

    return (
      <div className="w-96 max-w-md p-4 rounded-lg overflow-hidden relative ">
        <div className="flex items-center justify-between mb-2 gap-5">
          <span className="text-2xl text-blue-700 text-5xl">{validValue}%</span>
          <span className="text-lg font-medium text-white absolute bottom-6 left-10">{label}</span>
        </div>
        <div className="w-full h-10 bg-gray-300 rounded-lg">
          <div
            className="h-full bg-green-600 rounded-lg"
            style={{ width: `${validValue}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-16 py-10 ">
      <header className='flex justify-between items-center'>
        <div className='flex flex-col items-center gap-2'>
          <img src={logo} alt="logo" />
          <h3 className='font-semibold text-base text-center'>Давлат хизматининг <br /> ягона электрон ахборот-<br />таҳлил тизими</h3>
        </div>
        <h1 className='font-bold text-3xl text-center'>Республика Ассессмент маркази <br /> онлайн платформаси</h1>
        <img src={image} alt="image" />
      </header>

      <div className='flex '>
        {personalInfo ? (
          <div className="space-y-4 flex gap-64 mt-9">
            <div className="flex items-center gap-8">
              <img
                src={personalInfo.imageUrl || "fallback-image-url.jpg"}
                alt="Profile"
                className="w-52 h-72 rounded-lg object-cover mr-4"
              />

              <div className='flex flex-col gap-7'>
                <div>
                  <p className='text-4xl font-bold'>{personalInfo.firstName}</p>
                  <p className='text-4xl'>{personalInfo.lastName}</p>
                </div>

                <div>
                  <p><strong>Тугилган сана:</strong> {personalInfo.birthday}</p>
                  <p><strong>Тугилган жой:</strong> {personalInfo.address}</p>
                </div>
                <div className='flex items-center'>
                  <div className='flex gap-4'>
                    <p className='flex flex-col gap-2'><strong>Height:</strong> {personalInfo.height} cm</p>
                    <p className='flex flex-col gap-2'><strong>Weight:</strong> {personalInfo.weight} kg</p>
                    <p className='flex flex-col gap-2'><strong>Index:</strong> {personalInfo.index}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='relative' >
                      <GaugeComponent
                        className="w-28 "
                        value={personalInfo?.index || 0}
                        type="semicircle"
                        labels={{
                          tickLabels: {
                            type: 'inner',
                            ticks: [],
                            defaultTickValueConfig: false as any,
                          },
                          valueLabel: false as any,
                        }}
                        arc={{
                          colorArray: ['#00b3ff', '#00ff2f', '#ffcc00', '#ff9900', '#EA4228'],
                          cornerRadius: 0,
                          subArcs: [
                            { limit: 20 },
                            { limit: 40 },
                            { limit: 60 },
                            { limit: 80 },
                            { limit: 100 },
                          ],
                          padding: 0,
                          width: 0.4,
                        }}
                        pointer={{
                          type: 'needle',
                          elastic: true,
                          animationDelay: 0,
                        }}
                        style={{
                          color: 'white',
                          fontSize: '0px',
                        }}
                      />
                      <p className='absolute bottom-0 right-7'>НОРМА</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='w-[400px]'>
              <p><strong>Position:</strong> {personalInfo.position}</p>
              <p><strong>Candidate:</strong> {personalInfo.candidate}</p>
            </div>
          </div>
        ) : (
          <p>No personal information available</p>
        )}
      </div>

      <div className='flex justify-between items-center mt-11'>
        <div className='w-4 h-11 bg-indigo-900 text-indigo-900 '><p>.</p></div>
        <div><h3 className='font-bold text-3xl w-28'>Билим тести</h3></div>
        <div className='calc'></div>
      </div>


      <div className="flex items-end">
        <div className="grid grid-cols-3 gap-6 p-6">
          {knowledgeData.map((chart, index) => (
            <SemiCircleChart
              key={index}
              value={chart.percentage}
              color={chart.color}
              label={chart.label}
            />
          ))}
        </div>
        <div >
          {overallData && (
            <ProgressBar value={parseInt(overallData)} label="Умумий натижа" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
