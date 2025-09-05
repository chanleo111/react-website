import Header from '../components/Header';
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="pt-20 container mx-auto px-4 py-16"> {}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
        <p></p>
      </div>
      <div className="about_values">
        <h2 className="text-4xl font-bold text-center ">Our Values</h2>
        <ul className="list-disc list-inside values">
          <li>Innovation</li>
          <li>Quality</li>
          <li>Customer Focus</li>
          <li>Integrity</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}