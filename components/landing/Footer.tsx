export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 px-8 border-t border-outline-variant/5">
      <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-4 lg:col-span-1">
          <div className="font-serif italic text-2xl text-on-surface mb-6">
            DuelArt
          </div>
          <p className="font-sans text-xs tracking-widest text-on-surface/50 leading-relaxed">
            © 2024 DuelArt. The Grand Arena of Elegance.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h5 className="text-primary-container text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
            Platform
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="text-on-surface/40 hover:text-on-surface transition-all font-sans text-xs tracking-widest"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-on-surface/40 hover:text-on-surface transition-all font-sans text-xs tracking-widest"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h5 className="text-primary-container text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="text-on-surface/40 hover:text-on-surface transition-all font-sans text-xs tracking-widest"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-on-surface/40 hover:text-on-surface transition-all font-sans text-xs tracking-widest"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h5 className="text-primary-container text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
            Follow
          </h5>
          <div className="flex gap-4">
            <a
              className="text-on-surface/40 hover:text-primary-container transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">brand_family</span>
            </a>
            <a
              className="text-on-surface/40 hover:text-primary-container transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="text-on-surface/40 hover:text-primary-container transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">forum</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
