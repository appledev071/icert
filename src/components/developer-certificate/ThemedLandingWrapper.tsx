import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// loadSlim is lightweight and includes necessary features
import { loadSlim } from "@tsparticles/slim"; 

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  const [init, setInit] = useState(false);
  console.log("ThemedLandingWrapper: init state is:", init);

  // Initialize the tsparticles engine once
  useEffect(() => {
    console.log("ThemedLandingWrapper: useEffect - Initializing particles engine...");
    initParticlesEngine(async (engine: Engine) => {
      console.log("ThemedLandingWrapper: initParticlesEngine callback started.");
      // Load the slim preset
      await loadSlim(engine);
      console.log("ThemedLandingWrapper: loadSlim finished.");
    }).then(() => {
      console.log("ThemedLandingWrapper: initParticlesEngine finished, setting init to true.");
      setInit(true);
    }).catch((error) => {
        console.error("ThemedLandingWrapper: Error initializing particles engine:", error);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // You can add logging or other actions here if needed when particles are loaded
    // console.log("Particles loaded: ", container); 
  }, []);

  // Configuration for the particles - Restored Original (slightly adjusted)
  const particlesOptions = {
    background: {
      color: {
        value: "transparent", 
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", 
        },
        onClick: {
          enable: true,
          mode: "push", 
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.3,
            color: "#a5b4fc" 
          }
        },
        push: {
          quantity: 3,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#60a5fa", "#93c5fd"], // Theme blue colors
      },
      links: {
        color: { 
            value: "#ffffff" // Default white/light links (might need theme adjustment later)
        },
        distance: 150,
        enable: true,
        opacity: 0.15, 
        width: 1,
      },
      collisions: {
        enable: false, 
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.5, 
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000, 
        },
        value: 60, 
      },
      opacity: {
        value: { min: 0.1, max: 0.5 }, // Increased max opacity slightly
        animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1.5, max: 3.5 }, // Increased min/max size slightly
        animation: {
            enable: true,
            speed: 1,
            minimumValue: 1, // Increased min animation size slightly
            sync: false
        }
      },
    },
    detectRetina: true,
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black relative transition-colors duration-300 overflow-x-hidden">
       {/* Particles Component */}
       {init && (
         <Particles
           id="tsparticles"
           particlesLoaded={particlesLoaded}
           options={particlesOptions as any} 
           // Restore original z-index
           className="fixed inset-0 z-[-2]" // Back to original background z-index
         />
       )}
       
      {/* Existing Animated background elements */}
      {/* Make sure the z-index here is -1 so it's above particles but below content */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-10"></div>
        
        {/* Animated glow blobs */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-300/20 dark:bg-blue-500/20 blur-[100px] 
                    animate-blob-float opacity-50 top-1/4 -left-[250px]"
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-300/20 dark:bg-purple-500/20 blur-[120px] 
                    animate-blob-float animation-delay-2000 opacity-40 bottom-0 right-0"
        ></div>
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-teal-300/20 dark:bg-teal-500/20 blur-[80px] 
                    animate-blob-float animation-delay-4000 opacity-30 top-0 right-1/4"
        ></div>
        
        {/* NEW: Enhanced gradient glows */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-500/30 via-blue-500/5 to-transparent 
                      blur-[120px] animate-glow-pulse-slow opacity-40 top-[-20%] left-[-10%]"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-purple-500/20 via-purple-500/5 to-transparent 
                      blur-[100px] animate-glow-pulse-slow animation-delay-2000 opacity-30 bottom-[-10%] right-[-5%]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-teal-500/25 via-teal-500/5 to-transparent 
                      blur-[80px] animate-glow-pulse-slow animation-delay-4000 opacity-35 top-[30%] right-[20%]"></div>
        
        {/* NEW: Shimmering light beams */}
        <div className="absolute w-[2px] h-[500px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent 
                      rotate-[45deg] animate-light-beam opacity-30 top-0 left-[30%]"></div>
        <div className="absolute w-[2px] h-[300px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent 
                      -rotate-[30deg] animate-light-beam animation-delay-2000 opacity-25 bottom-[20%] right-[40%]"></div>
        
        {/* Floating circles */}
        <div 
          className="floating-circle" 
          style={{
            width: '300px', 
            height: '300px', 
            top: '10%', 
            left: '5%',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="floating-circle" 
          style={{
            width: '200px', 
            height: '200px', 
            top: '60%', 
            right: '10%',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="floating-circle" 
          style={{
            width: '150px', 
            height: '150px', 
            bottom: '15%', 
            left: '20%',
            animationDelay: '4s'
          }}
        ></div>
        <div 
          className="floating-circle" 
          style={{
            width: '400px', 
            height: '400px', 
            top: '30%', 
            right: '-10%',
            animationDelay: '1s',
            opacity: '0.2'
          }}
        ></div>
        
        {/* Light theme pencil sketch elements (visible only in light mode) */}
        {/* Removed the div containing the pencil sketch elements */}
        
        {/* NEW: Random blue light flashes */}
        <div className="blue-flash absolute w-20 h-20 rounded-full bg-blue-500/20 blur-xl animate-flash" 
             style={{ top: '20%', left: '30%', animationDelay: '0s' }}></div>
        <div className="blue-flash absolute w-16 h-16 rounded-full bg-blue-500/30 blur-xl animate-flash" 
             style={{ top: '70%', left: '65%', animationDelay: '3s' }}></div>
        <div className="blue-flash absolute w-24 h-24 rounded-full bg-blue-500/20 blur-xl animate-flash" 
             style={{ top: '40%', left: '80%', animationDelay: '5s' }}></div>
        <div className="blue-flash absolute w-32 h-32 rounded-full bg-blue-500/15 blur-xl animate-flash" 
             style={{ top: '85%', left: '15%', animationDelay: '7s' }}></div>
        <div className="blue-flash absolute w-28 h-28 rounded-full bg-blue-500/25 blur-xl animate-flash" 
             style={{ top: '10%', left: '70%', animationDelay: '9s' }}></div>
        <div className="blue-flash absolute w-20 h-20 rounded-full bg-blue-500/20 blur-xl animate-flash" 
             style={{ top: '50%', left: '40%', animationDelay: '12s' }}></div>
        
        {/* NEW: Light theme paper texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiAvPgogICAgPGZlQmxlbmQgbW9kZT0ic29mdC1saWdodCIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPgo8L3N2Zz4=')]
                      dark:bg-none opacity-30 mix-blend-overlay pointer-events-none"></div>
        
        {/* NEW: Animated pencil lines for light theme */}
        {/* Removed the three divs for animated pencil lines */}
        
        {/* NEW: Notion-style decorative elements */}
        <div className="absolute w-16 h-16 border-[3px] border-dashed border-gray-300/30 dark:border-transparent rounded-full top-[22%] right-[15%] transform rotate-12 hidden light:block"></div>
        <div className="absolute w-8 h-32 border-[3px] border-dotted border-gray-300/20 dark:border-transparent rounded-xl bottom-[30%] left-[8%] transform -rotate-6 hidden light:block"></div>
        
        {/* NEW: Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIiAvPgogIDxwYXRoIGQ9Ik0wIDBoNDBNMCA0MGg0ME00MCAwdjQwTTAgMHY0MCIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiIC8+Cjwvc3ZnPg==')]
                      opacity-10 dark:opacity-0 pointer-events-none"></div>
      </div>

      {/* Content container */}
      {/* Ensure content is above background elements with relative positioning and z-index if needed */}
      <div className="relative p-8 max-md:px-6 max-sm:px-4 max-w-6xl mx-auto z-10"> 
        {children}
      </div>
    </div>
  );
};
