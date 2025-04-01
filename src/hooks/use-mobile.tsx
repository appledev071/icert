import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Дополнительно проверяем UserAgent для определения мобильных устройств
    const checkIsMobileDevice = () => {
      // Проверяем только по ширине экрана, если в предпочтениях системы
      if (typeof window === 'undefined') return false;
      
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /android|iphone|ipod|blackberry|iemobile|opera mini/i;
      
      // Проверяем только мобильные устройства по User Agent, 
      // iPad исключаем из мобильных устройств, так как он может иметь большой экран
      const isMobileUserAgent = mobileRegex.test(userAgent.toLowerCase());
      
      // Определяем по размеру экрана только если это не распознано как мобильное устройство по UA
      const isMobileWidth = window.innerWidth < MOBILE_BREAKPOINT;
      
      return isMobileUserAgent || isMobileWidth;
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(checkIsMobileDevice());
    }
    mql.addEventListener("change", onChange)
    setIsMobile(checkIsMobileDevice());
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
