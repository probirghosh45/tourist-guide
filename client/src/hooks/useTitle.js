import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Travel Guide `;
  }, [title]);
};

export default useTitle;
