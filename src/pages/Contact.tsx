import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Apakah Layanan Customer Service tersedia 24jam?",
    answer:
      "Ya, kami menerima layanan Customer Service 24jam tetapi khusus jam 10 malam sampai jam 7 pagi layanan akan sedikit lambat",
  },
  {
    question: "Untuk metode pembayaran support lewat apa saja?",
    answer: "Kami hampir support seluruh pembayaran lewat metode apapun",
  },
  {
    question: "Di mana lokasi kantor kami yang dapat ditemui?",
    answer:
      "Lokasi kantor kami yang dapat Anda temui tepat di informasi kontak di atas.",
  },
];

export default function Contact() {
  const [expanded, setExpanded] = useState<number | null>();

  const toggleFAQ = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow container mx-auto py-12">
        <section className="text-center px-4 mb-12">
          <h1 className="text-5xl font-extrabold mb-6 mt-12">Contact Kami</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Jika ada hal yang berkenaan, Hubungi kami melalui informasi di bawah
            ini.
          </p>
        </section>

        <section className="px-4 mt-16 mb-12">
          <div className="flex flex-col justify-center gap-4 lg:flex-row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.4911517688026!2d107.18028177809437!3d-6.287360324369286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b445d8375b1%3A0x2be0e0c5314813b1!2sPesantren%20SMP%20dan%20SMA%20Rabbaanii%20Islamic%20School!5e0!3m2!1sen!2sid!4v1733802989670!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg shadow-md lg:w-1/2"></iframe>
            <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <ul className="grid grid-cols-1 items-center space-y-6">
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="mr-4 text-3xl text-blue-500" />
                  <span>Farizzzzzz@gmail.com</span>
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                  <FaPhoneAlt className="mr-4 text-3xl text-green-500" />
                  <span>+62888888888888</span>
                </li>
                <li className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="mr-4 text-3xl text-red-500" />
                  <span>
                    Jl. Kp. Pamahan Setya Mulya, Jatireja, Cikarang Timur, Kab.
                    Bekasi
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-screen-md mx-auto bg-gray-100 dark:bg-gray-800 my-16 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            FAQ
          </h2>
          <ul className="space-y-6">
            {faqData.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-300 dark:border-gray-700 pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex justify-between">
                  {item.question}
                  <span>{expanded === index ? "−" : "+"}</span>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded === index ? "max-h-40" : "max-h-0"
                  }`}>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="w-full mb-8 bg-yellow-200"
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
