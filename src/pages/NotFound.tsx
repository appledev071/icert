import React, { useState, useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";

const NotFound = () => {
  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "О нас", href: "/about" },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Floating elements component
  const FloatingElement = ({ xOffset, yOffset, delay, children }: any) => {
    return (
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: mousePosition.x / (xOffset || 15),
          y: mousePosition.y / (yOffset || 15),
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: delay || 0.5, duration: 0.8 }
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <div className="container mx-auto px-4 md:px-6">
        <LandingHeader
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
          logoAlt="iCert Logo"
          menuItems={menuItems}
        />
      </div>

      {/* 404 Content */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.section 
          className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center min-h-[70vh] overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 bg-theme-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute -z-10 bottom-1/3 right-1/3 w-80 h-80 bg-theme-blue/5 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-theme-blue/8 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="hidden md:block">
            <FloatingElement xOffset={30} yOffset={25} delay={0.8}>
              <div className="rounded-full bg-theme-blue/10 p-8 backdrop-blur-sm">
                <Search className="h-10 w-10 text-theme-blue/70" />
              </div>
            </FloatingElement>
            
            <FloatingElement xOffset={-20} yOffset={-20} delay={1.2}>
              <div className="rounded-full bg-red-500/10 p-6 backdrop-blur-sm">
                <AlertTriangle className="h-8 w-8 text-red-500/70" />
              </div>
            </FloatingElement>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div variants={itemVariants} className="mb-8">
              <div className="relative">
                <motion.div 
                  className="text-9xl md:text-[180px] font-extrabold font-montserrat text-theme-blue/90 mb-6"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { 
                      type: "spring", 
                      damping: 12,
                      duration: 0.7 
                    }
                  }}
                >
                  404
                </motion.div>
                <motion.div 
                  className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[220px] md:text-[280px] font-extrabold opacity-5 text-theme-blue/30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: { 
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut" 
                    }
                  }}
                >
                  404
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-purple-600 mb-6"
            >
              Страница не найдена
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Извините, запрашиваемая страница не существует или была перемещена.
              Вернитесь на главную страницу и продолжите просмотр сайта.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" onClick={scrollToTop}>
                <Button 
                  className="bg-theme-blue hover:bg-theme-blue/90 text-white text-base
                            py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-glow
                            transition-all duration-300 group relative overflow-hidden shine-effect"
                >
                  <Home className="mr-2 h-5 w-5" />
                  <span className="relative z-10">Вернуться на главную</span>
                </Button>
              </Link>
              
              <Link to="#" onClick={() => window.history.back()}>
                <Button 
                  variant="outline"
                  className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 text-base
                            py-3 px-8 rounded-full font-medium 
                            transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  <span>Назад</span>
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Animated dots at the bottom */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-theme-blue"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-6 mt-12">
        <LandingFooter
          contactHandle="icertmanager"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default NotFound;
