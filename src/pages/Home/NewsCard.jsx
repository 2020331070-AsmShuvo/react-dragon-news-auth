import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl m-2 mb-8 w-full">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}
                <Link
                  to={`/news/${_id}`}
                  className="font-semibold text-blue-600 mx-1"
                >
                  Read More...
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
