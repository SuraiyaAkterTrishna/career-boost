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
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
