import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto">
        <section className="text-center px-4 mb-12">
          <h1 className="text-5xl font-extrabold mb-6 mt-14 text-yellow-500 dark:text-white">
            Tentang Kami
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kami adalah platform penyedia layanan toko online yang berkomitmen
            untuk memberikan layanan terbaik kepada Anda dengan pengalaman
            belanja online yang memuaskan.
          </p>
        </section>

        <section className="px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">
            Kami menyediakan apa saja?
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://pajakpribadi.com/wp-content/uploads/2017/03/pajak-4.jpg"
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
            />
            <div className="md:w-1/2 md:pl-10">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-start ">
                Kami menyediakan tempat belanja serba ada untuk semua kebutuhan
                Anda! Dari pakaian trendi, gadget canggih, hingga peralatan
                rumah tangga dan produk kecantikan, kami hadir dengan beragam
                pilihan berkualitas. Menyediakan layanan belanja yang cepat,
                aman, dan nyaman, kami memastikan Anda mendapatkan produk impian
                tanpa repot. Dengan harga bersaing, promo menarik, dan
                pengiriman yang andal, kepuasan Anda adalah prioritas utama
                kami. Apa pun yang Anda cari, toko kami adalah solusi belanja
                terbaik untuk memenuhi gaya hidup modern Anda. Yuk, temukan
                semuanya hanya di sini!
              </p>
            </div>
          </div>
        </section>

        <section
          className="w-full mb-20 bg-yellow-200"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),url('https://www.fastpay.co.id/blog/wp-content/uploads/2020/02/194.-Ide-dan-Tips-Desain-Interior-Minimarket-Untuk-Tampilan-yang-Menarik.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <div className="flex flex-col items-center gap-4 py-24 max-lg:py-10 max-lg:h-96 max-lg:justify-center max-lg:text-center">
            <h2 className="text-4xl font-bold text-yellow-300">
              Ingin Checkout barang yang kamu mau?
            </h2>
            <p className="text-white">
              Klik tombol di bawah ini untuk cari dan checkout barang belanja
              kamu
            </p>

            <Link
              to="/products"
              className="btn bg-yellow-400 hover:bg-yellow-500 border-none dark:text-white">
              Belanja Sekarang
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
