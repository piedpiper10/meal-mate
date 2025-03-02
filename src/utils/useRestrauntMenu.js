import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauantMenu = (resID) => {
  const [resInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setRestInfo(json);
  };
  return resInfo;
};

export default useRestrauantMenu;
