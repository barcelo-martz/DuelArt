export default function FeaturedArtists() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <span className="font-label text-primary tracking-[0.3em] uppercase text-xs">
          The Vanguard
        </span>
        <h2 className="text-5xl font-headline italic mt-2">Featured Artists</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Artist 1 */}
        <div className="group text-center">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-outline-variant/10 p-2 group-hover:border-primary-container transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="professional portrait of a male digital artist with a creative aesthetic and warm studio lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlNS97aQF6VTI_2SJ6R6caJ99bFJKk0TcVU3LUtMzhB2pxF12SBcV99rrslgGQiNjP_UIyXhZM1uSpj9oeULmeVL4a3phiarlxlNUcf6RslUfUrcMB10iv2dlHzj1wkXgTIxePvlydhiMO8GHOI0VFbUnsPxos9Po0KiaouXUGHN8KA8Brg277o2j36h-6J45ntOdGTNyreET3o7byOR8mwyC9UDoVHNNtyJCbRpreDBi6UTnB5KtY6K79TlcjjlZ7PadVJNK13mYD"
              />
            </div>
            <div className="absolute -bottom-2 right-2 bg-primary-container text-on-primary-container rounded-full p-2 shadow-lg">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
            </div>
          </div>
          <h3 className="text-xl font-headline font-bold">Kaelen Thorne</h3>
          <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase mt-1">
            14 Tournament Wins
          </p>
          <button className="mt-4 text-primary text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            View Portfolio
          </button>
        </div>
        {/* Artist 2 */}
        <div className="group text-center">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-outline-variant/10 p-2 group-hover:border-primary-container transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="stylish portrait of a female illustrator with short hair and modern glasses against a minimal neutral background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB5-ZcMvm8tD26mS-CSqzRJlSzg34oRxu0qp9JJB2WcwfBaS0MVZH_LC3Tgdr3UXfJ2RzCF-yrSMBQiuLAgHhSg0g7-BarLFxPAYcT3XroAjQ2SQt_ZyI3Ff8ASJ8G1YG0-p9qnNiE3BvJAcwvmZkRmBK6GZN3OrWq1jn6QDfIeDr5qVOIqDPpUIbv1NbbDoI5GbWp4MksUDCV9dRlTL7FaIwvB9OSy9RIsoVJSElka9I8d91FYx4QAh13Q0nGlAabOaNyAWPjXK3n"
              />
            </div>
            <div className="absolute -bottom-2 right-2 bg-primary-container text-on-primary-container rounded-full p-2 shadow-lg">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
            </div>
          </div>
          <h3 className="text-xl font-headline font-bold">Sora Niwa</h3>
          <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase mt-1">
            9 Tournament Wins
          </p>
          <button className="mt-4 text-primary text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            View Portfolio
          </button>
        </div>
        {/* Artist 3 */}
        <div className="group text-center">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-outline-variant/10 p-2 group-hover:border-primary-container transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="cinematic portrait of a male photographer holding a vintage camera with dramatic shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANl-fDDfPFKFGBoKV0jKC_wNk0aWNIyYAX6JgRoiSl68VA_Mu-DT3ZcbKe_78ijVcg5SPKBFDRIPQZRUB04Wy3SsVysK1xWjteKIUgxIdOZA2t68roEk5GvKRMljD5n1NhtUc1KYJKDPFtWYRYZsehH9QkYn2-OR_b0PUy-N2Vq7OZuQavT2ZKPpxWTlohCuGlej9Id4ocyeT0c5_heKyIA-ETX2UVYwr8UC3pz3xQGzSmVtHIulp-Jf_Z6q9f12TBf73r8tysTP2w"
              />
            </div>
            <div className="absolute -bottom-2 right-2 bg-primary-container text-on-primary-container rounded-full p-2 shadow-lg">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
            </div>
          </div>
          <h3 className="text-xl font-headline font-bold">Marcus Elara</h3>
          <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase mt-1">
            22 Tournament Wins
          </p>
          <button className="mt-4 text-primary text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            View Portfolio
          </button>
        </div>
        {/* Artist 4 */}
        <div className="group text-center">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-outline-variant/10 p-2 group-hover:border-primary-container transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="elegant portrait of a female digital designer with creative lighting reflecting off her artistic makeup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Q4URBfharX70x6zpXNckCbyKjDNuG_lqXBgK5v-RVTB4ShbAzYPOwIIqbAoHDSg-TxnPoQWqna7nbP_HkZndFyIci_arReIfR464d4xtMN_hEVUhUp7KCOpEseG7_hMSu79TNLEitO8e4G0gWgX-0BVEW0dH9Jr4japNX5mP7HRyKswPI_Dq3vPaLkcniHaGVWmkK6bu-e6XZEiWw8RL7chHrum3sLntQs3hp4J5bM6QR2ncOM9-_1ZH2n6_mL-OJs0wPDWBkg9D"
              />
            </div>
            <div className="absolute -bottom-2 right-2 bg-primary-container text-on-primary-container rounded-full p-2 shadow-lg">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
            </div>
          </div>
          <h3 className="text-xl font-headline font-bold">Liora Vance</h3>
          <p className="font-label text-[10px] tracking-widest text-on-surface/40 uppercase mt-1">
            5 Tournament Wins
          </p>
          <button className="mt-4 text-primary text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
