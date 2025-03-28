'use client'

// import Image from "next/image";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {
  const handleOpenArView = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ar_view_opened', {
        event_category: 'User Interaction',
        event_label: 'Click to Open AR View',
        value: 1, // Optional numerical value associated with the event
        content_id: '89AEIAI',
        product_id: '89AEIAI'
        // Add any other relevant event parameters here
      });
      console.log('Button click event sent to GA4');
    } else {
      console.log('gtag not initialized or running on server.');
    }
  };

  const handleClickAction = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ar_view_action_clicked', {
        event_category: 'User Interaction',
        event_label: 'Click Action AR',
        value: 1, // Optional numerical value associated with the event
        content_id: 'KRFAR84',
        product_id: 'KRFAR84'
        // Add any other relevant event parameters here
      });
      console.log('Button click event sent to GA4');
    } else {
      console.log('gtag not initialized or running on server.');
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
            onClick={handleOpenArView}
          >
            Open AR View
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] cursor-pointer"
            onClick={handleClickAction}
          >
            Action Click
          </button>
        </div>
      </main>
    </div>
  );
}
