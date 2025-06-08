"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const ExperienceContext = createContext<any>(null)
export const ExperienceProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`/api/experience`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const response = await res.json();
                    // console.log(response)
                    setData(response);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        };
        if (data?.length === 0) {

            fetchData();
        }
    }, []);

    return (
        <ExperienceContext.Provider value={{ loading, data }}>
            {children}
        </ExperienceContext.Provider>
    )
}

export const useExpeience = () => {
    const context = useContext(ExperienceContext)
    if (!context) {
        throw new Error("useExperience must be used within an ExperienceProvider")
    }
    return context
}