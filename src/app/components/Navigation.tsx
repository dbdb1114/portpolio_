import { motion } from "motion/react";

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

const sections = ["About", "Project"];

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-900"
        >
          Portfolio
        </motion.div>

        <div className="flex gap-8">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => onNavigate(index)}
              className={`text-sm transition-colors ${
                currentSection === index
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-gray-400 mr-1">0{index + 1}.</span>
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}