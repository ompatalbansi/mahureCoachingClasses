import { motion } from 'framer-motion';

const MathBackground = () => {
  // Class 8th to 10th formulas: Simple, common, and highly recognizable
  // Distributed randomly across X and Y axes to create a natural, cloud-like floating effect
  const formulas = [
    { text: '(a + b)² = a² + 2ab + b²', top: '8%', left: '12%', scale: 1.0, colorClass: 'text-amber-500/25' },
    { text: 'x = (-b ± √(b²-4ac)) / 2a', top: '22%', left: '78%', scale: 1.1, colorClass: 'text-secondary/30' },
    { text: 'a² - b² = (a-b)(a+b)', top: '35%', left: '15%', scale: 0.95, colorClass: 'text-emerald-500/25' },
    { text: 'sin²θ + cos²θ = 1', top: '15%', left: '48%', scale: 1.0, colorClass: 'text-rose-500/25' },
    { text: 'a² + b² = c²', top: '52%', left: '8%', scale: 1.1, colorClass: 'text-orange-500/25' },
    { text: 'Area = πr²', top: '48%', left: '72%', scale: 1.05, colorClass: 'text-yellow-500/25' },
    { text: 'd = √((x₂-x₁)² + (y₂-y₁)²)', top: '65%', left: '30%', scale: 0.95, colorClass: 'text-cyan-500/25' },
    { text: 'y = mx + c', top: '78%', left: '82%', scale: 1.05, colorClass: 'text-emerald-500/25' },
    { text: 'sin θ = Opp / Hyp', top: '85%', left: '12%', scale: 1.0, colorClass: 'text-violet-500/25' },
    { text: 'Vol = πr²h', top: '92%', left: '55%', scale: 0.95, colorClass: 'text-amber-500/25' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-size:4rem_4rem opacity-25 dark:opacity-15" 
      />

      {/* Floating Mathematical Formulas */}
      {formulas.map((formula, idx) => (
        <motion.div
          key={idx}
          className={`absolute font-serif font-bold select-none text-[10px] sm:text-xs md:text-sm lg:text-base ${formula.colorClass}`}
          style={{
            top: formula.top,
            left: formula.left,
            transform: `scale(${formula.scale})`
          }}
          initial={{ y: 0, opacity: 0.25 }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.55, 1.00, 0.75],
            rotate: [0, idx % 2 === 0 ? 3 : -3, 0]
          }}
          transition={{
            duration: 6 + (idx % 4),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {formula.text}
        </motion.div>
      ))}
    </div>
  );
};

export default MathBackground;
