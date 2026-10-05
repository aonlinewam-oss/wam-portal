export default function Footer() {
  return (
    <footer className="relative border-t-8 border-[#0b4935] bg-[#062f24] text-white">
      {/* Geometric Pattern Border Strip */}
      <div className="h-2 w-full bg-gradient-to-r from-[#062f24] via-[#a7d9a7] to-[#0b4935]"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="mb-3 text-lg font-bold text-[#a7d9a7]">
            WAM Institute
          </h3>
          <p className="text-sm leading-relaxed text-emerald-100">
            West African Institute of Management. Online learning for future leaders across West Africa.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#a7d9a7]">Quick Navigation</h4>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li><a href="/about" className="hover:underline">About WAM</a></li>
            <li><a href="/programmes" className="hover:underline">Programs</a></li>
            <li><a href="/announcements" className="hover:underline">Announcements</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/login" className="hover:underline">Staff & Student Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-[#a7d9a7]">Contact Information</h4>
          <p className="text-sm text-emerald-100">Email: info@wam.edu.ng</p>
          <p className="text-sm text-emerald-100">Location: West Africa</p>
        </div>
      </div>

      <div className="bg-[#041f18] py-4 text-center text-xs text-emerald-200">
        © {new Date().getFullYear()} WAM Institute (West African Institute of Management). All Rights Reserved.
      </div>
    </footer>
  );
}