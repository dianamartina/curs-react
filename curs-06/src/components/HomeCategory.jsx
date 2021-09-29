import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const {image, title, description, routeParam}= props;

    return (         
        <div className="col-6">
            <Link to={`/category/${routeParam}`}>
                <img src={image} alt="" className="w-100"/>{/* alt e obigatorie, chiar daca e gol */}
                <h2 className="h4 mt-4">{title}</h2>
                <p>{description}</p>
            </Link>
        </div>       
    )
}

export default HomeCategory
