import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import KnowledgeTest from './components/KnowledgeTest';
import Feature from './components/Featuret';
import Footer from './components/Footer';

interface PersonalInfoType {
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

interface KnowledgeDataType {
  percentage: number;
  label: string;
  color: string;
}

interface LineChartType {
  labels: string[];
  data: number[];
}

const App: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType | null>(null);
  const [knowledgeData, setKnowledgeData] = useState<KnowledgeDataType[]>([]);
  const [lineChart, setLineChart] = useState<LineChartType | null>(null);
  const [overallData, setOverallData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [personalResponse, knowledgeResponse] = await Promise.all([
          axios.get('https://trello.vimlc.uz/get-personal-info'),
          axios.get('https://trello.vimlc.uz/knowlodge'),
        ]);

        setPersonalInfo(personalResponse.data as PersonalInfoType);
        setKnowledgeData(knowledgeResponse.data.semicharts as KnowledgeDataType[]);
        setOverallData(knowledgeResponse.data.overall as string);

        // lineChart ma'lumotlarini olish
        setLineChart({
          labels: knowledgeResponse.data.lineChart.labels,
          data: knowledgeResponse.data.lineChart.data,
        });
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div  className="px-16 py-10">
      <Header />
      {personalInfo && <PersonalInfo data={personalInfo} />}
      <div className="flex items-center gap-[10px] mb-8 justify-between mt-11">
          <div className="w-[13px] h-[43px] bg-[#0956AF] "></div>
          <p className="text-4xl font-semibold w-50 ">Билим </p>
          <p className="text-4xl font-semibold calc ">тести</p>
          <div className="w-full h-[4px] bg-[#DEE2E6]"></div>
        </div>
      {lineChart && (
        <KnowledgeTest
          knowledgeData={knowledgeData}
          overallData={overallData}
          lineChart={lineChart} // lineChartni yuborish
        />
      )}
      
      <Feature/>
      
    </div>
    <div className=" px-16 py-10 bg-[#F5F5F5]">
      <div>
        <div className="flex items-center gap-[10px] mb-8">
          <div className="w-[13px] h-[43px] bg-[#0956AF] "></div>
          <h1 className="text-4xl font-semibold "> Психологик</h1>
          <h1 className="text-4xl font-semibold "> диагностика</h1>
          <div className="w-full h-[4px] bg-[#DEE2E6]"></div>
        </div>
      </div>

        <div className="flex gap-6">
          <p className="text-xl w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p className="text-xl w-1/2">
            
            a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
