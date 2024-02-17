import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

const Detail = () => {
  const { id } = useParams();
  const { data } = useProduct();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (data && data.length > 0 && id) {
      const selectedBook = data.find((book) => book.id === id);
      if (selectedBook) {
        setBook(selectedBook);
      }
    }
  }, [data, id]);

  return (
    <div className="container">
      <div>
        {book ? (
          <div style={{ display: "flex", gap: "30px" }}>
            <img
              style={{ width: "450px", height: "600px" }}
              src={book.img}
              alt=""
            />
            <div
              style={{
                width: "700px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              className="dis"
            >
              <h2>{book.name}</h2>
              <h2>{book.price}</h2>
              <h2>{book.categotia}</h2>
              <p>{book.description}</p>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Detail;
