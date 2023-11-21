import './Category.css';

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div>
      <div className="mt-8 bg-gray-100">  
        <div className="card-body rounded-none">
        <img 
            className="w-16"
            src= {logo}
            alt="category-logo"
          />
          <h2 className="card-title category-title">{category_name}</h2>
          <p className="banner-detail">{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
