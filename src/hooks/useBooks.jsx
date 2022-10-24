import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.books);
        setLoading(false);
      });
  }, []);

  return [books, loading];
};

export default useBooks;
