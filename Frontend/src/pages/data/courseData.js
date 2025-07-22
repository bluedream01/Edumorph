export const classes = ["6", "7", "8", "9", "10"];
export const boards = ["ICSE", "CBSE", "WBCHSE", "NCERT"];

// Sample course data - different for each class and board combination
export const courseData = [
  {
    class: "6",
    board: "ICSE",
    subjects: [
      {
        id: "physics-6-icse",
        name: "Physics",
        icon: "⚛️",
        color: "from-blue-400 to-blue-600",
        chapters: [
          {
            id: "light-6-icse",
            title: "Light and Shadows",
            flashcards: [
              { id: "1", question: "What is light?", answer: "Light is a form of energy that helps us see objects around us." },
              { id: "2", question: "How do shadows form?", answer: "Shadows form when light is blocked by an opaque object." },
              { id: "3", question: "What are luminous objects?", answer: "Objects that produce their own light, like the sun and candles." }
            ]
          },
          {
            id: "motion-6-icse",
            title: "Motion and Measurement",
            flashcards: [
              { id: "1", question: "What is motion?", answer: "Motion is the change in position of an object with time." },
              { id: "2", question: "What is a metre?", answer: "A metre is the standard unit of length measurement." }
            ]
          }
        ]
      },
      {
        id: "chemistry-6-icse",
        name: "Chemistry",
        icon: "🧪",
        color: "from-green-400 to-green-600",
        chapters: [
          {
            id: "matter-6-icse",
            title: "Matter and Its States",
            flashcards: [
              { id: "1", question: "What is matter?", answer: "Matter is anything that occupies space and has mass." },
              { id: "2", question: "Name the three states of matter.", answer: "Solid, liquid, and gas." }
            ]
          }
        ]
      },
      {
        id: "biology-6-icse",
        name: "Biology",
        icon: "🌱",
        color: "from-emerald-400 to-emerald-600",
        chapters: [
          {
            id: "plants-6-icse",
            title: "The World of Plants",
            flashcards: [
              { id: "1", question: "What is photosynthesis?", answer: "The process by which plants make their own food using sunlight." },
              { id: "2", question: "What are the parts of a flower?", answer: "Petals, sepals, stamens, and pistil." }
            ]
          }
        ]
      },
      {
        id: "mathematics-6-icse",
        name: "Mathematics",
        icon: "📐",
        color: "from-purple-400 to-purple-600",
        chapters: [
          {
            id: "numbers-6-icse",
            title: "Whole Numbers",
            flashcards: [
              { id: "1", question: "What are natural numbers?", answer: "Numbers 1, 2, 3, 4, ... are natural numbers." },
              { id: "2", question: "What are whole numbers?", answer: "Natural numbers including zero (0, 1, 2, 3, ...)." }
            ]
          }
        ]
      },
      {
        id: "history-6-icse",
        name: "History",
        icon: "🏛️",
        color: "from-amber-400 to-amber-600",
        chapters: [
          {
            id: "civilizations-6-icse",
            title: "Early Civilizations",
            flashcards: [
              { id: "1", question: "What is civilization?", answer: "An advanced stage of human development with organized society and culture." },
              { id: "2", question: "Name an ancient civilization.", answer: "The Indus Valley Civilization." }
            ]
          }
        ]
      },
      {
        id: "geography-6-icse",
        name: "Geography",
        icon: "🌍",
        color: "from-cyan-400 to-cyan-600",
        chapters: [
          {
            id: "earth-6-icse",
            title: "The Earth and Its Features",
            flashcards: [
              { id: "1", question: "What is the shape of Earth?", answer: "Earth is roughly spherical, slightly flattened at the poles." },
              { id: "2", question: "What are continents?", answer: "Large landmasses on Earth's surface." }
            ]
          }
        ]
      }
    ]
  },
  {
    class: "10",
    board: "CBSE",
    subjects: [
      {
        id: "physics-10-cbse",
        name: "Physics",
        icon: "⚛️",
        color: "from-blue-400 to-blue-600",
        chapters: [
          {
            id: "light-10-cbse",
            title: "Light - Reflection and Refraction",
            flashcards: [
              { id: "1", question: "State the laws of reflection.", answer: "1. Angle of incidence equals angle of reflection. 2. Incident ray, reflected ray, and normal lie in the same plane." },
              { id: "2", question: "What is refraction?", answer: "The bending of light when it passes from one medium to another." },
              { id: "3", question: "What is Snell's law?", answer: "n₁sin θ₁ = n₂sin θ₂, where n is refractive index and θ is angle with normal." }
            ]
          },
          {
            id: "electricity-10-cbse",
            title: "Electricity",
            flashcards: [
              { id: "1", question: "What is Ohm's law?", answer: "V = IR, where V is voltage, I is current, and R is resistance." },
              { id: "2", question: "What is electric power?", answer: "P = VI = I²R = V²/R, measured in watts." }
            ]
          }
        ]
      },
      {
        id: "chemistry-10-cbse",
        name: "Chemistry",
        icon: "🧪",
        color: "from-green-400 to-green-600",
        chapters: [
          {
            id: "acids-10-cbse",
            title: "Acids, Bases and Salts",
            flashcards: [
              { id: "1", question: "What are acids?", answer: "Substances that produce H⁺ ions in aqueous solution." },
              { id: "2", question: "What is pH scale?", answer: "A scale from 0-14 that measures acidity/basicity. pH < 7 is acidic, pH > 7 is basic." }
            ]
          }
        ]
      },
      {
        id: "biology-10-cbse",
        name: "Biology",
        icon: "🌱",
        color: "from-emerald-400 to-emerald-600",
        chapters: [
          {
            id: "life-processes-10-cbse",
            title: "Life Processes",
            flashcards: [
              { id: "1", question: "What is respiration?", answer: "The process of breaking down glucose to release energy in living organisms." },
              { id: "2", question: "What is photosynthesis equation?", answer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in presence of sunlight and chlorophyll)" }
            ]
          }
        ]
      },
      {
        id: "mathematics-10-cbse",
        name: "Mathematics",
        icon: "📐",
        color: "from-purple-400 to-purple-600",
        chapters: [
          {
            id: "quadratic-10-cbse",
            title: "Quadratic Equations",
            flashcards: [
              { id: "1", question: "What is a quadratic equation?", answer: "An equation of the form ax² + bx + c = 0, where a ≠ 0." },
              { id: "2", question: "What is the quadratic formula?", answer: "x = (-b ± √(b² - 4ac)) / 2a" }
            ]
          }
        ]
      },
      {
        id: "history-10-cbse",
        name: "History",
        icon: "🏛️",
        color: "from-amber-400 to-amber-600",
        chapters: [
          {
            id: "nationalism-10-cbse",
            title: "Nationalism in Europe",
            flashcards: [
              { id: "1", question: "What is nationalism?", answer: "A feeling of pride and devotion to one's country and its culture." },
              { id: "2", question: "When was German unification completed?", answer: "German unification was completed in 1871." }
            ]
          }
        ]
      },
      {
        id: "geography-10-cbse",
        name: "Geography",
        icon: "🌍",
        color: "from-cyan-400 to-cyan-600",
        chapters: [
          {
            id: "resources-10-cbse",
            title: "Resources and Development",
            flashcards: [
              { id: "1", question: "What are natural resources?", answer: "Materials or substances that exist in nature and are useful to humans." },
              { id: "2", question: "What is sustainable development?", answer: "Development that meets present needs without compromising future generations' ability to meet their needs." }
            ]
          }
        ]
      }
    ]
  }
];

// Fetch course data based on class and board
export const getCourseData = (selectedClass, selectedBoard) => {
  return courseData.find(course => course.class === selectedClass && course.board === selectedBoard);
};
