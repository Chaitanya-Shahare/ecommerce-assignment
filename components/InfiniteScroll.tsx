import React, { useEffect, useState } from "react";

interface InfiniteScrollProps {
  fetchData: (page: number) => void;
  renderData: () => JSX.Element[];
  hasMore: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  fetchData,
  renderData,
  hasMore,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (hasMore) {
          fetchData(page);
          setPage(page + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, hasMore, fetchData]);

  return renderData();
};

export default InfiniteScroll;
