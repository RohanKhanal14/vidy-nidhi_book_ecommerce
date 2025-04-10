"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import BookLoader from "@/lib/BookLoader";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<BookLoader />} persistor={persistor}>
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </PersistGate>
    </Provider>
  );
}
