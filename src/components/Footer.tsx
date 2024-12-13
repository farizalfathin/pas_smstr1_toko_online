import RenderList from "@/utils/RenderList";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-200 dark:bg-gray-800 dark:text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Tautan</h3>
            <ul className="space-y-2 ">
              <RenderList
                of={[
                  { name: "Beranda", href: "/" },
                  { name: "Produk", href: "/products" },
                  { name: "Tentang Kami", href: "/about" },
                  { name: "Kontak", href: "/contact" },
                ]}
                render={(item: { name: string; href: string }, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-400 dark:text-white hover:text-yellow-400 hover:underline transition duration-200">
                      {item.name}
                    </Link>
                  </li>
                )}
              />
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Produk</h3>
            <ul className="space-y-2 ">
              <RenderList
                of={[
                  { name: "Makanan" },
                  { name: "Minuman" },
                  { name: "Furniture" },
                ]}
                render={(item: { name: string }, index) => (
                  <li key={index}>
                    <p className="text-sm text-gray-400 dark:text-white hover:text-yellow-400 transition duration-200">
                      {item.name}
                    </p>
                  </li>
                )}
              />
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Kontak</h3>
            <ul className="space-y-2 text-sm dark:text-white">
              <li>
                <span className="font-medium text-gray-300">Email:</span>{" "}
                Farizzzzf@gmail.com
              </li>
              <li>
                <span className="font-medium text-gray-300">Telepon:</span> +62
                888888888888
              </li>
              <li>
                <span className="font-medium text-gray-300">Alamat:</span> Jl.
                Kp. Pamahan Setya Mulya, Jatireja, Cikarang Timur, Kab. Bekasi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
