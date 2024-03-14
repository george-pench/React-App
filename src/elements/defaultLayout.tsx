import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
