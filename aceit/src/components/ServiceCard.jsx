export default function ServiceCard({ title, desc, img }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition">
      <img src={img} alt={title} className="rounded-lg mb-4 h-40 w-full object-cover" />
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
