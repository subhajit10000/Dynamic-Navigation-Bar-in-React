const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Your Company</h2>
          <p className="text-sm leading-6 w-[60%] tracking-widest ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            facere dolorem sapiente sint quaerat aperiam quia harum, corporis ea
            qui.
          </p>
        </div>

        {/* contact  section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm tracking-widest">
            <li>Email: support@youcompany.com</li>
            <li>Phone: +91 98765 56789</li>
            <li>Location: Kolkata, India</li>
          </ul>
        </div>

        {/* Career section*/}

        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Careers</h3>
          <p className="text-sm mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            assumenda blanditiis eos. Consequatur impedit, dolores distinctio
            incidunt excepturi saepe. Quisquam.
          </p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded-xl transition-all">
            View open positions
          </button>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10  pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} The DevComapany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
