import Header from "@/components/Header";
import { formatRupiah } from "@/utils/format";
import { clientSupabase } from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id: number) => {
    const { data, error } = await clientSupabase
      .from("barang")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(Number(id)),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <PulseLoader color="#4A90E2" size={50} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-xl mt-14 mb-4 bg-sky-200 dark:bg-gray-700 hover:bg-sky-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md shadow-md">
          <BsArrowLeft />
        </button>
        <div className="w-full max-w-screen-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="">
            <div>
              <img
                src={product.foto_barang}
                alt={product.nama_barang}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-100 p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {product.nama_barang}
              </h1>
              <p className="text-xl text-yellow-500 font-semibold mb-4">
                {formatRupiah(product.harga)}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {product.deskripsi}
              </p>

              <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Jenis Barang</p>
                  <p>{product.jenis_barang}</p>
                </div>
                <div>
                  <p className="font-semibold">Stok</p>
                  <p>{product.stok}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
