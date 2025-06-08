"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';



interface AboutContextType {
  userData: {
    profile: string[];
    resume: string[];
    shortDesc: string[];
    desc: string[];
    role: string[];
    experience: string[];
    projects: string[];
  };
  loader: boolean;
}


const AboutContext = createContext<AboutContextType | undefined>(undefined);

interface AboutProviderProps {
  children: ReactNode;
}

export const AboutProvider: React.FC<AboutProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/about');
        const result: any = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  const userData: any = {
    profile: data?.map((item: any) => item?.image)[0],
    resume: data?.map((item: any) => item?.resume)[0],
    shortDesc: data?.map((item: any) => item?.shortDesc)[0],
    desc: data?.map((item: any) => item?.description)[0],
    role: data?.map((item: any) => item?.role)[0],
    experience: data?.map((item: any) => item?.totalExperience)[0],
    projects: data?.map((item: any) => item?.totalProjects)[0],
  }

  return (
    <AboutContext.Provider value={{ userData, loader }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = (): AboutContextType => {
  const context = useContext(AboutContext);
  if (context === undefined) {
    throw new Error('useAbout must be used within an AboutProvider');
  }
  return context;
};
