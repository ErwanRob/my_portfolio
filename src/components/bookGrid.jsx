import datasProject from "../datas/projectData.json";
import BookCard from "./bookCard";

function BookGrid() {
  return (
    <div className="book__grid">
      {datasProject.map((project) => (
        <BookCard
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.image}
          carouselImg={project.carouselImg}
          gitHubLink={project.gitHubLink}
        />
      ))}
    </div>
  );
}

export default BookGrid;
