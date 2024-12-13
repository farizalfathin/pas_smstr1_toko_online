import { useState } from "react";

export default function Sidebar({
  onSortByHighest,
  onSortByLowest,
  onSortByAZ,
  onSortByZA,
  onResetFilter,
  onFilterCategory,
  isSidebarOpen,
  onCloseSidebar,
}: {
  onSortByHighest: any;
  onSortByLowest: any;
  onSortByAZ: any;
  onSortByZA: any;
  onResetFilter: any;
  onFilterCategory: any;
  isSidebarOpen: any;
  onCloseSidebar: any;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const handleRisetFilter = () => {
    setSelectedFilter(null);
    setSelectedCategory(null);
    setSelectedSort(null);
    if (onResetFilter) {
      onResetFilter();
    }
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    if (onFilterCategory) {
      onFilterCategory(category);
    }
  };

  const handleSelectFilter = (filterType: string) => {
    setSelectedFilter(filterType);

    if (filterType === "highest" && onSortByHighest) {
      onSortByHighest();
    } else if (filterType === "lowest" && onSortByLowest) {
      onSortByLowest();
    }
  };

  const handleSelectSort = (sortType: string) => {
    setSelectedSort(sortType);

    if (sortType === "A-Z" && onSortByAZ) {
      onSortByAZ();
    } else if (sortType === "Z-A" && onSortByZA) {
      onSortByZA();
    }
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } fixed inset-0 z-20 md:block md:sticky md:w-1/5 dark:text-white bg-white md:bg-transparent overflow-y-auto md:border-r md:border-gray-300 dark:bg-gray-800`}>
      <div className="flex flex-col items-start space-y-6 p-4">
        <button
          onClick={onCloseSidebar}
          className="md:hidden text-gray-700 dark:text-white mb-4 mt-20 btn btn-warning">
          Close
        </button>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-4">Kategori</h3>
          <div className="flex flex-col space-y-2">
            {["Makanan", "Minuman"].map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  className="radio radio-primary"
                  checked={selectedCategory === category}
                  onChange={() => handleSelectCategory(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-4">Filter Harga</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                className="radio radio-primary"
                checked={selectedFilter === "highest"}
                onChange={() => handleSelectFilter("highest")}
              />
              Harga Termahal
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                className="radio radio-primary"
                checked={selectedFilter === "lowest"}
                onChange={() => handleSelectFilter("lowest")}
              />
              Harga Termurah
            </label>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-4">Urutkan Nama</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="nameSort"
                className="radio radio-primary"
                checked={selectedSort === "A-Z"}
                onChange={() => handleSelectSort("A-Z")}
              />
              Nama (A-Z)
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="nameSort"
                className="radio radio-primary"
                checked={selectedSort === "Z-A"}
                onChange={() => handleSelectSort("Z-A")}
              />
              Nama (Z-A)
            </label>
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleRisetFilter}>
          Reset Filter
        </button>
      </div>
    </aside>
  );
}
