import MainLayout from "@components/Layouts/MainLayout";

import "../styles/globals.css";
import "../styles/prism-theme.css";

import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <MainLayout>
      <AnimatePresence exitBeforeEnter>
        <NextNProgress color="#EC4899" height={8} />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </MainLayout>
  );
}

export default MyApp;
