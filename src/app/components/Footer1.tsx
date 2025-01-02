import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
    <div className="container mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-6 mb-6">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#252B42]">Bandage</div>
  
      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="#" className="p-2 bg-[#FAFAFA] rounded-full hover:bg-blue-200">
          <Image src="/images/Fb.png" alt="Facebook" width={20} height={20} className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 bg-[#FAFAFA] rounded-full hover:bg-blue-200">
          <Image src="/images/Insta.png" alt="Instagram" width={20} height={20} className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 bg-[#FAFAFA] rounded-full hover:bg-blue-200">
          <Image src="/images/Twitter.png" alt="Twitter" width={20} height={20} className="w-5 h-5" />
        </a>
      </div>
      </div>
  
      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {/* Column 1: Company Info */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-[#252B42]">Company Info</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:underline text-[#737373]">About Us</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Carrier</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">We are hiring</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Blog</a></li>
        </ul>
      </div>
  
      {/* Column 2: Legal */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-[#252B42]">Legal</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:underline text-[#737373]">About Us</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Carrier</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">We are hiring</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Blog</a></li>
        </ul>
      </div>
  
      {/* Column 3: Features */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-[#252B42]">Features</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:underline text-[#737373]">Business Marketing</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">User Analytics</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Live Chat</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Unlimited Support</a></li>
        </ul>
      </div>
  
      {/* Column 4: Resources */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-[#252B42]">Resources</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:underline text-[#737373]">iOS & Android</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Watch a Demo</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">Customers</a></li>
        <li><a href="#" className="hover:underline text-[#737373]">API</a></li>
        </ul>
      </div>
  
      {/* Column 5: Get in Touch */}
      <div>
        <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
        <form className="space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Subscribe
        </button>
        </form>
        <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor amit.
        </p>
      </div>
      </div>
    </div>
    {/* Bottom Section */}
    <div className="text-center pt-4 pb-6 font-bold text-[#737373]">
      <h6>Made With Love By Finland All Rights Reserved</h6>
    </div>
    </footer>
  );
}
