export default function Card({
  title,
  price,
  description,
  image,
}: {
  title: string;
  price: string;
  description: string;
  image: string;
}) {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
      <figure className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body p-6 text-start">
        <h2 className="card-title text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="card-actions">
          <span className="text-lg font-semibold text-yellow-500 dark:text-white">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
