import Card from "@/components/daisyui/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Siderbar";
import { formatRupiah } from "@/utils/format";
import { clientSupabase } from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState<any>([]);
  const [filter, setFilter] = useState<{
    byCategory: string | null;
    bySorting: "highest" | "lowest" | "A-Z" | "Z-A" | null;
  }>({ byCategory: null, bySorting: null });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchProducts = async () => {
    const { data, error } = await clientSupabase.from("barang").select("*");

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const {
    data: queryProducts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setProducts(
        queryProducts.map((item) => ({
          ...item,
          harga: formatRupiah(item.harga),
        }))
      );
    }
  }, [queryProducts, isLoading, isError]);

  const handleFilters = () => {
    let filteredProducts = [...queryProducts];

    if (filter.byCategory) {
      filteredProducts = filteredProducts.filter(
        (item) => item.jenis_barang === filter.byCategory
      );
    }

    if (filter.bySorting === "highest") {
      filteredProducts.sort((a, b) => b.harga - a.harga);
    } else if (filter.bySorting === "lowest") {
      filteredProducts.sort((a, b) => a.harga - b.harga);
    } else if (filter.bySorting === "A-Z") {
      filteredProducts.sort((a, b) =>
        a.nama_barang.localeCompare(b.nama_barang)
      );
    } else if (filter.bySorting === "Z-A") {
      filteredProducts.sort((a, b) =>
        b.nama_barang.localeCompare(a.nama_barang)
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.nama_barang.toLowerCase().includes(query) ||
          item.deskripsi.toLowerCase().includes(query)
      );
    }

    filteredProducts = filteredProducts.map((item) => ({
      ...item,
      harga: formatRupiah(item.harga),
    }));

    setProducts(filteredProducts);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeSorting = (value: "highest" | "lowest" | "A-Z" | "Z-A") => {
    setFilter({ ...filter, bySorting: value });
  };

  const handleFilterByCategory = (category: string) => {
    setFilter({ ...filter, byCategory: category });
  };

  const handleResetFilter = () => {
    setFilter({ byCategory: null, bySorting: null });
    setSearchQuery("");
  };

  useEffect(() => {
    handleFilters();
  }, [filter.byCategory, filter.bySorting, searchQuery]);

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    return products.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(products.length / 8);

  return (
    <>
      <Header />
      <main className="m-4 flex flex-col">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden mb-4 mt-24 flex items-center justify-center w-full max-w-xs py-2 px-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
          Filter Produk
        </button>

        <input
          type="text"
          placeholder="Search Product..."
          className="input input-bordered input-primary w-full max-w-lg mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex w-full">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            onCloseSidebar={() => setIsSidebarOpen(false)}
            onSortByHighest={() => handleChangeSorting("highest")}
            onSortByLowest={() => handleChangeSorting("lowest")}
            onSortByAZ={() => handleChangeSorting("A-Z")}
            onSortByZA={() => handleChangeSorting("Z-A")}
            onResetFilter={handleResetFilter}
            onFilterCategory={handleFilterByCategory}
          />
          <section className="w-full px-4">
            {isError ? (
              <p className="text-red-500">Error: {error.message}</p>
            ) : (
              <div className="dark:text-white w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={index}
                          className="border rounded-lg shadow-md p-4 animate-pulse">
                          <div className="h-40 bg-gray-300 rounded-md"></div>
                          <div className="mt-4 h-6 bg-gray-300 rounded"></div>
                          <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                          <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                      ))
                    : getCurrentPageProducts().map((item: any) => (
                        <Link
                          key={item.id}
                          to={`/product/${item.id}`}
                          className="cursor-pointer">
                          <Card
                            title={item.nama_barang}
                            price={item.harga}
                            description={item.deskripsi}
                            image={item.foto_barang}
                          />
                        </Link>
                      ))}
                </div>
              </div>
            )}
          </section>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`btn mx-1 ${
                index + 1 === currentPage ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
