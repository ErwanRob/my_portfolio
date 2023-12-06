function BookCard({ title, description, img }) {
  return (
    <div className="book-card">
      <div className="book-card-cube">
        <div className="work-card__face-one">
          <img src={img} className="book-card-img" alt="altrrr" />
        </div>
        <div className="work-card__face-two">
          <h3>Titre du projet : {title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
