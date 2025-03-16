import React, { createContext, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfileData } from '../api/api';
import { UserData as DefaultUserData, ProjectList, stackList, educationList, experienceList } from '../data/ProjectData';

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
          // Process skills with categories 
          const enhancedSkills = stackList.map((skill, index) => ({
            ...skill,
            // Default categorization logic with support for "Other"
            category: skill.category || (
              index % 4 === 0 ? 'Technical' : 
              index % 4 === 1 ? 'Soft Skills' : 
              index % 4 === 2 ? 'Domain Knowledge' : 'Other'
            )
          }));
          
          const defaultData = {
            ...DefaultUserData,
            projects: ProjectList.map(project => ({
              ...project,
              tech_stack: project.tech_stack || ''
            })),
            skills: enhancedSkills,
            educations: educationList || [],
            experiences: experienceList || [] // Add experiences to default data
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
            
        // Process skills to ensure they have appropriate categories
        const processedSkills = data?.skills 
          ? data.skills.map((skill, index) => ({
              ...skill,
              // If no category is provided, assign to "Other"
              category: skill.category || "Other"
            }))
          : stackList.map((skill, index) => ({
              ...skill,
              category: skill.category || (
                index % 4 === 0 ? 'Technical' : 
                index % 4 === 1 ? 'Soft Skills' : 
                index % 4 === 2 ? 'Domain Knowledge' : 'Other'
              )
            }));
        
        // Normalize data to ensure consistency with expected structure
        const normalizedData = {
          ...DefaultUserData,
          ...data,
          projects: processedProjects,
          skills: processedSkills,
          educations: data?.educations || educationList || [],
          experiences: data?.experiences || experienceList || [], // Add experiences
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
          educations: educationList || [],
          experiences: experienceList || [] // Add experiences to fallback data
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
