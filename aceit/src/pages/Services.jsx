import { Brain, Trophy, BarChart3, Lock, CheckCircle } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Smart Quiz Creation",
    desc: "Admins can create, edit, and manage MCQ-based quizzes with ease.",
    icon: Brain,
  },
  {
    title: "Real-Time Leaderboard",
    desc: "Students can view live rankings and score updates instantly.",
    icon: Trophy,
  },
  {
    title: "Performance Analytics",
    desc: "Get insights into student progress and question-level analysis.",
    icon: BarChart3,
  },
  {
    title: "Secure Role-Based Login",
    desc: "Separate dashboards for admins and students ensure privacy and security.",
    icon: Lock,
  },
  {
    title: "Instant Result Evaluation",
    desc: "Automatic scoring gives students immediate feedback after test submission.",
    icon: CheckCircle,
  },
];

export default function Services() {
  return (
    <section className="p-10 text-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-blue-600 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, index) => (
          <ServiceCard
            key={index}
            title={s.title}
            desc={s.desc}
            Icon={s.icon}
          />
        ))}
      </div>
    </section>
  );
}
