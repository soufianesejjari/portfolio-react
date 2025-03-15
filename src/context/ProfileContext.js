import React, { createContext, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfileData } from '../api/api';
import { UserData as DefaultUserData, ProjectList, stackList, educationList } from '../data/ProjectData';

// Create context
const ProfileContext = createContext();

// Provider component
export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        if (!profileId) {
          // Use default data if no profile ID is provided
          const defaultData = {
            ...DefaultUserData,
            projects: ProjectList.map(project => ({
              ...project,
              tech_stack: project.tech_stack || ''
            })),
            stackList: stackList || [],
            educations: educationList || []
          };
          setProfileData(defaultData);
          setLoading(false);
          return;
        }
        
        // Fetch data from external API
        const data = await fetchProfileData(profileId);
        
        // Process projects to ensure tech_stack is properly formatted
        const processedProjects = data?.projects 
          ? data.projects.map(project => ({
              ...project,
              tech_stack: project.tech_stack || ''
            }))
          : ProjectList.map(project => ({
              ...project,
              tech_stack: project.tech_stack || ''
            }));
        
        // Normalize data to ensure consistency with expected structure
        const normalizedData = {
          ...DefaultUserData,
          ...data,
          projects: processedProjects,
          stackList: data?.stackList ? data.stackList.slice(0, 8) : stackList.slice(0, 8),
          educations: data?.educations || educationList || [],
          social: data?.social || DefaultUserData.social || {}
        };
        
        setProfileData(normalizedData);
      } catch (err) {
        console.error('Error in profile context:', err);
        setError(err.message || 'Failed to load profile data');
        
        // Fall back to default data on error
        const defaultData = {
          ...DefaultUserData,
          projects: ProjectList,
          stackList: stackList.slice(0, 8),
          educations: educationList || []
        };
        setProfileData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, [profileId]);

  return (
    <ProfileContext.Provider value={{ profileData, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the profile context
export const useProfile = () => useContext(ProfileContext);
