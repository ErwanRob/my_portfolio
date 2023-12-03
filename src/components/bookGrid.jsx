import datasProject from "../datas/projectData.json";
import BookCard from "./bookCard";

function BookGrid() {
  return (
    <div className="book-grid">
      {datasProject.map((project) => (
        <BookCard
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.image}
        />
      ))}
    </div>
  );
}

export default BookGrid;
