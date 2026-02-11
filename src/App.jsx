import { motion } from "framer-motion";
import "./index.css";
import foto from "./assets/foto.png";

const LINKS = [
  {
    label: "📸 Instagram",
    url: "https://www.instagram.com/drayaninarodriguez",
  },
  {
    label: "🏥 Consultorio particular – Ginecología y Fertilidad (Canning)",
    url: "https://saludintegralcanning.cartilla.drapp.com.ar",
  },
  {
    label: "💻 Telemedicina – Ginecología y Fertilidad",
    url: "https://www.gineturnos.com",
  },
  {
    label: "🧬 Turnos virtuales – Fertilidad",
    url: "https://www.procrearte.com",
  },
  {
    label: "✉️ Mail personal",
    url: "mailto:drayaninarodriguez@gmail.com",
  },
];


export default function App() {
  return (
    <div className="container">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={foto} alt="Foto de perfil" />
        <h1>Dra. Yanina Rodriguez</h1>
        <p>Ginecología, Fertilidad y Cirugía minimamente invasiva.</p>
      </motion.div>

      <div className="links">
        {LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
