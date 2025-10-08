export default function Contact() {
  return (
    <section className="p-10 bg-white text-center min-h-screen">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-lg p-2 h-24"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
