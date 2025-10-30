import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <figure className="mb-4">
              <img
                src={logo}
                alt="Logo"
                className="w-32 bg-white rounded p-1"
              />
            </figure>
            <p className="text-sm leading-relaxed">
              আপনার পছন্দের বই, গ্রোসারি, এবং সকল প্রয়োজনীয় পণ্য এখন একই ছাদের
              নিচে। সেরা দামে সেরা মানের নিশ্চয়তা।
            </p>
          </div>

          {/* --- কলাম ২: দ্রুত লিঙ্ক --- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-500 pb-2 inline-block">
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  শর্তাবলী
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  গোপনীয়তা নীতি
                </a>
              </li>
            </ul>
          </div>

          {/* --- কলাম ৩: ক্যাটাগরি --- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-500 pb-2 inline-block">
              ক্যাটাগরি
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  মেয়েদের ড্রেস
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  আম
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  মধু
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  খেজুরের গুড়
                </a>
              </li>
            </ul>
          </div>

          {/* --- কলাম ৪: যোগাযোগ ও সোশ্যাল --- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-500 pb-2 inline-block">
              যোগাযোগ
            </h4>
            <address className="not-italic space-y-3 text-sm">
              <p>বাড়ি ১২, রোড ৩, ধানমন্ডি, ঢাকা-১২০৫</p>
              <p>ইমেইল: info@example.com</p>
              <p>ফোন: +৮৮০ ১XXXXXXXXX</p>
            </address>
            {/* --- সোশ্যাল আইকন --- */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- কপিরাইট বার --- */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} আপনার কোম্পানির নাম। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
