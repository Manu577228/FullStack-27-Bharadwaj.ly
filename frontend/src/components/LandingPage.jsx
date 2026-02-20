import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Card from "./Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/contextApi";

const Model = () => {
  const { scene } = useGLTF("/images/img2.glb");

  return (
    <primitive
      object={scene}
      scale={6}
      position={[0, 0, 0]}
    />
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const dashBoardNavigateHandler = () => {
    if (token) navigate("/dashboard");
    else navigate("/login");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 font-sans bg-white">

      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-20 pb-16">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold text-black 
            md:text-5xl sm:text-4xl text-3xl 
            leading-tight lg:w-full md:w-[70%]"
          >
            Bharadwaj.<span className="text-yellow-500">ly</span> Makes URL Shortening Simple and Powerful.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 text-base my-6 max-w-lg"
          >
            Bharadwaj.<span className="text-yellow-500 font-semibold">ly</span> redefines link management by enabling seamless sharing
            with clarity and efficiency. Generate concise, memorable URLs instantly
            and track performance through a modern dashboard experience.
          </motion.p>

          <div className="flex items-center gap-4">

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-black hover:bg-gray-900 
              text-white w-44 py-2.5 rounded-xl 
              font-semibold transition-all duration-300 
              shadow-md hover:shadow-lg"
            >
              Manage Links
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border border-gray-300 text-black 
              w-44 py-2.5 rounded-xl 
              font-semibold transition-all duration-300 
              hover:bg-black hover:text-white"
            >
              Create Short Link
            </motion.button>

          </div>
        </div>

        {/* RIGHT 3D MODEL */}
        <div className="flex-1 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[420px] w-[350px] h-[320px] cursor-pointer"
            onClick={playAudio}
          >
            <Canvas
              camera={{ position: [0, 0, 25], fov: 50 }}
              gl={{ alpha: true }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[5, 10, 5]} intensity={1.2} />
              <directionalLight position={[-5, -10, -5]} intensity={0.6} />

              <Suspense fallback={null}>
                <Model />
              </Suspense>

              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </motion.div>
        </div>

      </div>

      <audio ref={audioRef} src="/audio/welcome.mp3" />

      {/* TRUST SECTION */}
      <div className="pt-12">

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-black font-heading font-bold 
          lg:w-[60%] md:w-[70%] sm:w-[80%] 
          mx-auto text-3xl text-center"
        >
          Preferred by professionals and teams worldwide.
        </motion.p>

        <div className="pt-8 pb-16 grid lg:gap-7 gap-5 
        xl:grid-cols-4 lg:grid-cols-3 
        sm:grid-cols-2 grid-cols-1 mt-6">

          <Card
            title="Efficient Link Generation"
            desc="Create clean, concise short links instantly using a streamlined interface designed for speed."
          />

          <Card
            title="Insightful Analytics"
            desc="Track performance trends and engagement insights to make smarter decisions."
          />

          <Card
            title="Advanced Protection"
            desc="Every link is secured with modern standards ensuring privacy and reliability."
          />

          <Card
            title="Optimized Performance"
            desc="Fast redirects and dependable uptime powered by robust infrastructure."
          />

        </div>

      </div>
    </div>
  );
};

export default LandingPage;