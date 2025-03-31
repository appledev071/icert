import React from "react";

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black relative transition-colors duration-300 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-10"></div>
        
        {/* Animated glow blobs */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-300/10 dark:bg-blue-500/10 blur-[100px] 
                    animate-blob-float opacity-50 top-1/4 -left-[250px]"
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-300/10 dark:bg-purple-500/10 blur-[120px] 
                    animate-blob-float animation-delay-2000 opacity-40 bottom-0 right-0"
        ></div>
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-teal-300/10 dark:bg-teal-500/10 blur-[80px] 
                    animate-blob-float animation-delay-4000 opacity-30 top-0 right-1/4"
        ></div>
        
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
      <div className="relative p-8 max-md:px-6 max-sm:px-4 max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};
