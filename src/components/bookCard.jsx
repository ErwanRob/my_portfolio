function BookCard({ title, description, img }) {
  return (
    <div className="book__card">
      <div className="cube">
        <div className="cube__faceOne">
          <img src={img} className="cube__faceOne-img" alt="altrrr" />
        </div>
        <div className="cube__faceTwo">
          <h3 className="cube__faceTwo-title">Titre du projet : {title}</h3>
          <p className="cube__faceTwo-byline">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
