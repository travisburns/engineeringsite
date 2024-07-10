'use client';
//for the time being, this is all mock data. Working on implementing the backend data per client to load from. 
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import UserProfile from '../components/UserProfile';
import servicesData from '../../app/services/servicesData/ServicesData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Project {
  name: string;
  service: string;
  image: StaticImageData;
  cost: number;
  amountOwed: number;
  startDate: string;
  endDate: string;
  progress: number;
  milestones: { name: string; date: string; completed: boolean }[];
}

interface EngineeredComponent {
  name: string;
  efficiency: number;
  lastInspected: string;
  status: 'Optimal' | 'Needs Maintenance' | 'Critical';
}

const mockProjectData: Project = {
  name: "City Water Treatment Facility Upgrade",
  service: "Mechanical",
  image: servicesData.find(s => s.title === "Mechanical")?.img || servicesData[0].img,
  cost: 1500000,
  amountOwed: 500000,
  startDate: "2023-01-15",
  endDate: "2024-06-30",
  progress: 65,
  milestones: [
    { name: "Initial Assessment", date: "2023-01-30", completed: true },
    { name: "Design Phase", date: "2023-04-15", completed: true },
    { name: "Equipment Procurement", date: "2023-08-01", completed: true },
    { name: "Installation Phase", date: "2023-12-01", completed: false },
    { name: "Testing and Commissioning", date: "2024-05-01", completed: false },
  ]
};

const mockComponents: EngineeredComponent[] = [
  { name: "Filtration System", efficiency: 92, lastInspected: "2023-09-15", status: "Optimal" },
  { name: "Pump Station", efficiency: 87, lastInspected: "2023-10-02", status: "Needs Maintenance" },
  { name: "Control System", efficiency: 95, lastInspected: "2023-09-30", status: "Optimal" },
  { name: "Chemical Dosing Unit", efficiency: 78, lastInspected: "2023-08-20", status: "Critical" },
];

const mockEnergyData = [
  { month: 'Jan', consumption: 4000 },
  { month: 'Feb', consumption: 3000 },
  { month: 'Mar', consumption: 2000 },
  { month: 'Apr', consumption: 2780 },
  { month: 'May', consumption: 1890 },
  { month: 'Jun', consumption: 2390 },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [engineeredComponents, setEngineeredComponents] = useState<EngineeredComponent[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetchUserData(token);
      setCurrentProject(mockProjectData);
      setEngineeredComponents(mockComponents);
      setIsLoading(false);
    }
  }, [router]);

  const fetchUserData = async (token: string) => {
    // ... (same as before)
  };

  if (isLoading) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">
           Dashboard
        </h1>
        
        {currentProject && (
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Current Project: {currentProject.name}</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <Image 
                  src={currentProject.image} 
                  alt={currentProject.service}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-300 mb-2"><span className="font-semibold">Service Type:</span> {currentProject.service}</p>
                <p className="text-gray-300 mb-2"><span className="font-semibold">Total Cost:</span> ${currentProject.cost.toLocaleString()}</p>
                <p className="text-gray-300 mb-2"><span className="font-semibold">Amount Owed:</span> ${currentProject.amountOwed.toLocaleString()}</p>
                <p className="text-gray-300 mb-2"><span className="font-semibold">Project Timeline:</span> {currentProject.startDate} to {currentProject.endDate}</p>
                <p className="text-gray-300 mb-2"><span className="font-semibold">Progress:</span> {currentProject.progress}%</p>
                <div className="mt-4 bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-yellow-500 h-4 rounded-full" 
                    style={{width: `${currentProject.progress}%`}}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">Project Milestones</h3>
              <ul className="list-disc pl-5">
                {currentProject.milestones.map((milestone, index) => (
                  <li key={index} className={`text-gray-300 ${milestone.completed ? 'line-through' : ''}`}>
                    {milestone.name} - {milestone.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Engineered Components Status</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-yellow-500">Component</th>
                  <th className="px-4 py-2 text-left text-yellow-500">Efficiency</th>
                  <th className="px-4 py-2 text-left text-yellow-500">Last Inspected</th>
                  <th className="px-4 py-2 text-left text-yellow-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {engineeredComponents.map((component, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}>
                    <td className="px-4 py-2 text-gray-300">{component.name}</td>
                    <td className="px-4 py-2 text-gray-300">{component.efficiency}%</td>
                    <td className="px-4 py-2 text-gray-300">{component.lastInspected}</td>
                    <td className={`px-4 py-2 ${
                      component.status === 'Optimal' ? 'text-green-500' :
                      component.status === 'Needs Maintenance' ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {component.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Energy Consumption Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockEnergyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#D1D5DB" />
              <YAxis stroke="#D1D5DB" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumption" stroke="#FBBF24" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;