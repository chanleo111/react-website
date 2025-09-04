import Header from '../components/Header';
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-20 container mx-auto px-4 py-16"> {}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
          about page
        </p>
      </main>
      <Footer />
    </>
  );
}