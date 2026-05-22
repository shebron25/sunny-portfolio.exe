export default function VideoEditorPortfolio() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden font-mono relative scroll-smooth">

      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.08)_50%)] bg-[length:100%_4px]" />

      {/* GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full blur-3xl opacity-10 animate-pulse" /> 
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-black rounded-full blur-3xl opacity-10 animate-pulse" /> 

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center p-6 border-b border-black/20 backdrop-blur-sm bg-white/70">
        <h1 className="text-2xl md:text-4xl tracking-widest text-black font-black">
          // SUNNY.EXE
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest"> 
          <a href="#about" className="hover:opacity-60 transition">About</a>
          <a href="#work" className="hover:opacity-60 transition">Projects</a>
          <a href="#contact" className="hover:opacity-60 transition">Contact</a>
        </div>
      </nav>
 
      {/* HERO */}
      <section className="relative z-10 min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-8 gap-14">

        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">
 
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-black">
            YOUR CLIPS
            <br />
            WERE BORING 
            <br />
            UNTIL NOW. 
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed">
            Overedited? Probably.
            Attention span destroyed? Definitely.
            I make visuals so clean your old editor should apologize personally.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">

            <a 
              href="#work"
              className="px-8 py-4 border border-black bg-black text-white hover:opacity-80 transition rounded-2xl uppercase tracking-widest text-sm inline-block"
            >
              View Projects
            </a> 

            <a
              href="#contact"
              className="px-8 py-4 border border-black hover:bg-black hover:text-white transition rounded-2xl uppercase tracking-widest text-sm inline-block"
            >
              Hire Me
            </a>

          </div>
        </div>

        {/* PROFILE CARD */}
        <div className="relative">

          <div className="relative bg-white border border-black/20 rounded-3xl p-5 shadow-2xl backdrop-blur-md">

            <div className="w-[320px] h-[420px] rounded-2xl overflow-hidden border border-black/20 bg-white flex items-center justify-center">
              <img
                src="/pfp.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-3xl text-black font-bold tracking-widest">
                SUNNY HEBRON
              </h3>

              <p className="uppercase text-sm mt-1 tracking-[4px] text-black/60">
                VIDEO EDITOR
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="border border-black/10 rounded-3xl bg-white p-10 shadow-xl">

            <p className="tracking-[5px] uppercase text-sm mb-5 text-black/60"> 
              Player Stats
            </p> 

            <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
              ABOUT_ME.DAT 
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-black/70 leading-relaxed text-lg"> 

              <p>
                I’m a video editor focused on high-energy storytelling, cinematic pacing,
                smooth transitions, sound design, and emotionally charged visuals.
              </p>

              <p>
                My editing style blends retro gaming vibes, futuristic aesthetics,
                glitchcore visuals, and modern social-media pacing. 
              </p>

            </div>
 
            {/* SKILLS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

              {[
                "After Effects", 
                "Premiere Pro",
                "DaVinci Resolve", 
                "Logic Pro",
                "Color Grading",
                "Sound Design",
                "Motion Graphics", 
                "Cinematic Cuts",
              ].map((skill) => (

                <div
                  key={skill}
                  className="border border-black/10 bg-black/5 rounded-2xl p-4 text-center hover:scale-105 transition" 
                >
                  {skill}
                </div>

              ))} 

            </div>

          </div>
 
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="relative z-10 px-8 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-14 flex-wrap gap-4">

            <div> 
              <p className="uppercase tracking-[5px] text-sm text-black/60">
                Mission Archive
              </p>

              <h2 className="text-5xl font-black text-black mt-2">
                FEATURED EDITS
              </h2>
            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="group border border-black/10 rounded-3xl overflow-hidden bg-white hover:-translate-y-2 transition duration-300 shadow-xl"
              >

                <div className="h-64 overflow-hidden relative group">

                  <img
                    src={
                      item === 1 
                        ? "/project1.jpeg"
                        : item === 2
                        ? "/project2.jpeg"
                        : "/project3.jpeg"
                    }
                    alt="Project"
                    className="w-full h-full object-cover opacity-85 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:saturate-150 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-white/10" />

                </div> 

                <div className="p-6">

                  <h3 className="text-2xl text-black font-bold mb-1">

                    {item === 1
                      ? "Editor @Cit"
                      : item === 2
                      ? "Freelancing Editor" 
                      : "Average 3AM Behaviour"}

                  </h3>

                  <p className="text-black/70 leading-relaxed text-sm">

                    {item === 1
                      ? "Contributed as an editor for college events including Chiguru, TEDx, MSA, and more."
                      : item === 2
                      ? "Worked as a freelance editor creating hundreds of edits across the internet."
                      : "Edits featuring myself, unnecessary effects, and questionable 3AM decisions."}

                  </p>

                  <a
                    href={
                      item === 1
                        ? "/editorcit.html"
                        : item === 2
                        ? "/freelance.html"
                        : "/3am.html"
                    }
                    className="mt-6 inline-block border border-black/20 px-5 py-3 rounded-xl hover:bg-black hover:text-white transition uppercase tracking-widest text-xs"
                  >
                    Launch Preview
                  </a>

                </div>
              </div>

            ))} 

          </div>
        </div>
      </section> 

      {/* CONTACT */} 
      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden group"
      >

        <img
          src="/hireme.jpeg"
          alt="Hire Me"
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-300"
        />

        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
as
          <p className="uppercase tracking-[6px] text-sm mb-5 text-black/60">
            Connection Terminal
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-black mb-6"> 
            HIRE ME
          </h2>

          <p className="text-black/70 max-w-2xl mx-auto leading-relaxed text-lg mb-12">
            Need edits that feel cinematic, chaotic, emotional, aggressive,
            or addictive to watch? You know where to find me.
          </p>

          <div className="flex flex-wrap justify-center gap-6"> 

            <a
              href="mailto:shebronr@gmail.com"
              className="px-8 py-4 rounded-2xl border border-black bg-black text-white hover:opacity-80 transition uppercase tracking-widest"
            >
              OPEN GMAIL
            </a>

            <a 
              href="https://www.instagram.com/thdooo_?igsh=bzY5ZGtsNWQwNGpm"
              className="px-8 py-4 rounded-2xl border border-black hover:bg-black hover:text-white transition uppercase tracking-widest"
            >
              OPEN INSTAGRAM
            </a>

          </div> 

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-black/10 py-8 text-center text-black/40 text-sm tracking-widest"> 
        © 2026 SUNNY.EXE — ALL RIGHTS RESERVED
      </footer>

    </div> 
  );
}
