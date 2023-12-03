function BookCard({ title, description, img }) {
  return (
    <div className="book-card">
      <h3>Titre du projet : {title}</h3>
      <p>{description}</p>
      <img src={img} alt="altrrr" />
    </div>
  );
}

export default BookCard;
