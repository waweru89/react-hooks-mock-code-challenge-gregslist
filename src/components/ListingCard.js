import { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, description, image, location } = listing;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
          onClick={() => setIsFavorite((prev) => !prev)}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDeleteListing(id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
