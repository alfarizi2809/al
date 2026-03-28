import { motion } from 'framer-motion';
import { Code2, Coffee, Rocket, BookOpen } from 'lucide-react';

export default function AboutSection() {

  const stats = [
    { icon: Code2, value: '10+', label: 'Projects Built' },
    { icon: Rocket, value: '2+', label: 'Years Learning' },
    { icon: Coffee, value: '∞', label: 'Late Night Coding' },
    { icon: BookOpen, value: 'Student', label: 'Status' },
  ];

  const skills = [
    'Python',
    'JavaScript',
    'C++',
    'HTML',
    'CSS',
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-black"
    >

      {/* Soft Glow Background */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-white/5 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gray-400 font-semibold tracking-wide block mb-2">
            About Me
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get to Know Me
          </h2>

          <div className="w-24 h-1 mx-auto rounded-full bg-white/30" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full blur-3xl bg-white/10 opacity-20" />

              <img
                src="/profile.jpg"
                alt="Muhammad Alfarizi"
                className="relative w-72 h-72 rounded-full object-cover border border-white/20 shadow-lg"
              />

            </motion.div>

            {/* Skill badges */}
            <div className="absolute -left-8 top-10 flex flex-col gap-3">
              {skills.slice(0, 2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="absolute -right-8 bottom-10 flex flex-col gap-3">
              {skills.slice(2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Pelajar & Coder dari Banda Aceh
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Saya adalah seorang pelajar di MAN 1 Banda Aceh yang memiliki
              ketertarikan besar di bidang teknologi dan programming.
              Saya mulai belajar coding sejak kelas 1 SMA dan terus
              mengembangkan kemampuan saya hingga saat ini.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Bagi saya, coding bukan hanya sekadar skill, tetapi juga
              cara untuk menciptakan sesuatu yang bermanfaat. Saya
              senang mempelajari hal baru dan terus berkembang untuk
              menjadi developer yang lebih baik di masa depan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg text-center text-white"
                >
                  <stat.icon className="h-7 w-7 text-white mx-auto mb-3" />
                  <p className="text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}