import { useEffect, useState } from 'react';
import './JobCategory.css';
import Category from '../Category/Category';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , []);
    return (
        <div className='my-24 container mx-auto'>
            <h2 className="sub-header text-center mb-4">Job Category List</h2>
            <p className='banner-detail text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 gap-4'>
                {
                    categories.map(category => <Category 
                        key={category.id}
                        category = {category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;