import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">AceIT</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/services" className="hover:text-gray-200">Services</Link>
        <Link to="/about" className="hover:text-gray-200">About Us</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
}
