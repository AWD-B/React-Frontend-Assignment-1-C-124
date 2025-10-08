export default function Home() {
  return (
    <section className="text-center p-10 bg-gradient-to-b from-blue-100 to-white">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to AceIT
      </h2>
      <p className="text-lg max-w-2xl mx-auto text-gray-600">
        AceIT is your ultimate platform for online MCQ-based test preparation.
        Whether you are a student aiming to improve your performance or an admin
        managing exams, AceIT provides a seamless, real-time testing experience.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}
