import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const rootApi = "https://api.github.com/repos/facebook/react/issues";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios(url);
      setIsLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(rootApi);
  }, []);
  return (
    <GithubContext.Provider value={{ data, isLoading }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGlobelContext = () => {
  return useContext(GithubContext);
};

export { GithubProvider };
