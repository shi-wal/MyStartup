import aboutImg from "../assets/sample3.jpg";
const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-gray-800 mb-4">
          About <span className="text-[#B76E79]">Wishloom</span>
        </h1>

        <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">
          Handmade with love
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={aboutImg}
            alt="about"
            className="rounded-lg w-full max-w-[240px] sm:max-w-[350px] object-contain"
          />
        </div>

        <div className="space-y-6 text-gray-600 leading-8">
          <p>
            Welcome to <span className="font-semibold">Wishloom</span> — a cozy
            little space where handmade creations are crafted with love, warmth,
            and creativity.
          </p>

          <p>
            From embroidered gifts and crochet creations to curated hampers,
            every product is thoughtfully designed to make your special moments
            even more memorable.
          </p>

          <p>
            At Wishloom, we believe handmade gifts carry emotions that
            factory-made products never can. Every thread, stitch, and detail is
            created with care to bring smiles to your loved ones.
          </p>

          <p>
            Thank you for supporting small businesses and being part of our
            journey.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">— By Shiwal</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
