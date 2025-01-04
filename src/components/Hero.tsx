import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Rajender</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I craft beautiful and functional web experiences with modern
              technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative flex justify-center align-center">
            <img
              src="../src/assets/pp1.png"
              alt="Coding workspace"
              className="rounded-2xl shadow-2xl"
              width={300}
            />
            <div className="absolute -bottom-8 right-16 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-gray-900">Fresher</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
