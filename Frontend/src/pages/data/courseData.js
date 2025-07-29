export const classes = ["6", "7", "8", "9", "10"];
export const boards = ["ICSE", "CBSE", "WBCHSE", "NCERT"];

// Sample course data - different for each class and board combination
export const courseData = [
  {
    class: "10",
    board: "ICSE",
    subjects: [
      {
        id: "physics-10-icse",
        name: "Physics",
        icon: "⚛️",
        color: "from-blue-400 to-blue-600",
        chapters: [
          {
            id: "force-10-icse",
            title: "Force and Laws of Motion",
            flashcards: {
              beginner: [
                {
                  id: "b1",
                  question: "What is force?",
                  options: [
                    "A type of energy",
                    "Force is a push or pull acting on an object.",
                    "A measurement of mass",
                    "The ability to do work"
                  ],
                  answer: "Force is a push or pull acting on an object."
                },
                {
                  id: "b2",
                  question: "What is the SI unit of force?",
                  options: ["Kilogram", "Pascal", "Watt", "Newton (N)"],
                  answer: "Newton (N)"
                },
                {
                  id: "b3",
                  question: "What instrument is used to measure force?",
                  options: ["Barometer", "Spring balance", "Thermometer", "Ammeter"],
                  answer: "Spring balance"
                },
                {
                  id: "b4",
                  question: "Name two types of contact forces.",
                  options: [
                    "Gravitational and magnetic force",
                    "Friction and muscular force",
                    "Electrostatic and nuclear force",
                    "Tension and gravitational force"
                  ],
                  answer: "Friction and muscular force"
                },
                {
                  id: "b5",
                  question: "Name two types of non-contact forces.",
                  options: [
                    "Friction and muscular force",
                    "Tension and air resistance",
                    "Gravitational force and electrostatic force",
                    "Normal force and magnetic force"
                  ],
                  answer: "Gravitational force and electrostatic force"
                },
                {
                  id: "b6",
                  question: "What is a balanced force?",
                  options: [
                    "Force that causes motion",
                    "Force that speeds up an object",
                    "A force that changes direction",
                    "A force in which all forces cancel each other out and do not cause motion."
                  ],
                  answer: "A force in which all forces cancel each other out and do not cause motion."
                },
                {
                  id: "b7",
                  question: "What is an unbalanced force?",
                  options: [
                    "A force that keeps an object at rest",
                    "A force that causes a change in motion or direction of an object.",
                    "Force that causes zero net acceleration",
                    "Force that only affects liquids"
                  ],
                  answer: "A force that causes a change in motion or direction of an object."
                },
                {
                  id: "b8",
                  question: "State Newton’s First Law of Motion.",
                  options: [
                    "F = ma",
                    "For every action, there is an equal and opposite reaction.",
                    "A body remains at rest or in uniform motion unless acted upon by an external unbalanced force.",
                    "Force is inversely proportional to mass"
                  ],
                  answer: "A body remains at rest or in uniform motion unless acted upon by an external unbalanced force."
                },
                {
                  id: "b9",
                  question: "What is inertia?",
                  options: [
                    "The ability to accelerate",
                    "The rate of change of motion",
                    "The tendency of an object to resist any change in its state of motion.",
                    "Force acting at a distance"
                  ],
                  answer: "The tendency of an object to resist any change in its state of motion."
                },
                {
                  id: "b10",
                  question: "Give one everyday example of force.",
                  options: [
                    "Reading a book",
                    "Sitting still",
                    "Kicking a football",
                    "Wearing shoes"
                  ],
                  answer: "Kicking a football"
                }
              ],
              intermediate: [
                {
                  id: "i1",
                  question: "Define 1 newton of force.",
                  options: [
                    "The force that gives 1 g mass 1 m/s² acceleration",
                    "The force that gives a mass of 1 kg an acceleration of 1 m/s².",
                    "The force needed to stop motion",
                    "The force exerted by gravity"
                  ],
                  answer: "The force that gives a mass of 1 kg an acceleration of 1 m/s²."
                },
                {
                  id: "i2",
                  question: "State Newton’s Second Law of Motion.",
                  options: [
                    "F = ma",
                    "An object in motion stays in motion",
                    "For every action, there's a reaction",
                    "Energy is conserved"
                  ],
                  answer: "F = ma"
                },
                {
                  id: "i3",
                  question: "How is force related to acceleration?",
                  options: [
                    "Force is inversely proportional to acceleration",
                    "Force is not related to acceleration",
                    "Force is directly proportional to acceleration for a constant mass.",
                    "Force equals acceleration squared"
                  ],
                  answer: "Force is directly proportional to acceleration for a constant mass."
                },
                {
                  id: "i4",
                  question: "What is the effect of force on the shape of an object?",
                  options: [
                    "No effect",
                    "Only increases size",
                    "Force can deform or change the shape of an object.",
                    "Force changes color"
                  ],
                  answer: "Force can deform or change the shape of an object."
                },
                {
                  id: "i5",
                  question: "What is the direction of frictional force?",
                  options: [
                    "Same as motion",
                    "Perpendicular to motion",
                    "In the opposite direction of motion.",
                    "Random direction"
                  ],
                  answer: "In the opposite direction of motion."
                },
                {
                  id: "i6",
                  question: "Why does a rolling ball eventually stop?",
                  options: [
                    "Because of gravity",
                    "Due to friction and air resistance acting opposite to its motion.",
                    "Because of acceleration",
                    "Because of motion"
                  ],
                  answer: "Due to friction and air resistance acting opposite to its motion."
                },
                {
                  id: "i7",
                  question: "Can force change the direction of a moving object?",
                  options: ["Yes", "No", "Only if it's fast", "Only if it's heavy"],
                  answer: "Yes"
                },
                {
                  id: "i8",
                  question: "State Newton’s Third Law of Motion.",
                  options: [
                    "F = ma",
                    "Inertia depends on mass",
                    "For every action, there is an equal and opposite reaction.",
                    "Acceleration is constant"
                  ],
                  answer: "For every action, there is an equal and opposite reaction."
                },
                {
                  id: "i9",
                  question: "Explain tension force with an example.",
                  options: [
                    "Force of gravity on Earth",
                    "Force in a string when pulled from both ends.",
                    "Friction between surfaces",
                    "Electric force in circuits"
                  ],
                  answer: "Force in a string when pulled from both ends."
                },
                {
                  id: "i10",
                  question: "What is net force?",
                  options: [
                    "The force of one object only",
                    "Only upward forces",
                    "The vector sum of all the individual forces acting on an object.",
                    "Frictional force only"
                  ],
                  answer: "The vector sum of all the individual forces acting on an object."
                }
              ],
              hard: [
                {
                  id: "h1",
                  question: "Derive the formula F = ma from Newton’s second law.",
                  options: [
                    "By assuming F is mass",
                    "By dividing distance by time",
                    "By definition, F ∝ a for constant mass ⇒ F = kma. For k = 1, F = ma.",
                    "Using energy formula"
                  ],
                  answer: "By definition, F ∝ a for constant mass ⇒ F = kma. For k = 1, F = ma."
                },
                {
                  id: "h2",
                  question: "Explain impulse and its relation to force.",
                  options: [
                    "Impulse = work × time",
                    "Impulse = change in force",
                    "Impulse = Force × time = change in momentum (Ft = mv - mu).",
                    "Impulse = acceleration × mass"
                  ],
                  answer: "Impulse = Force × time = change in momentum (Ft = mv - mu)."
                },
                {
                  id: "h3",
                  question: "Why do athletes bend their knees when they land?",
                  options: [
                    "To avoid pain",
                    "To increase the time of impact, reducing the force using impulse = Ft.",
                    "To jump again quickly",
                    "To reduce acceleration"
                  ],
                  answer: "To increase the time of impact, reducing the force using impulse = Ft."
                },
                {
                  id: "h4",
                  question: "How do airbags reduce injuries in car accidents?",
                  options: [
                    "By increasing car speed",
                    "By decreasing seatbelt tension",
                    "They increase the time of impact, reducing force due to impulse relation.",
                    "They block the glass from breaking"
                  ],
                  answer: "They increase the time of impact, reducing force due to impulse relation."
                },
                {
                  id: "h5",
                  question: "A body of mass 2kg accelerates at 3 m/s². Calculate the force.",
                  options: ["5 N", "3 N", "6 N", "9 N"],
                  answer: "6 N"
                },
                {
                  id: "h6",
                  question: "Differentiate between static and kinetic friction.",
                  options: [
                    "Static friction acts when object is moving; kinetic when stationary",
                    "Both act the same",
                    "Static friction acts when the object is at rest; kinetic friction acts when the object is moving.",
                    "Only kinetic friction exists"
                  ],
                  answer: "Static friction acts when the object is at rest; kinetic friction acts when the object is moving."
                },
                {
                  id: "h7",
                  question: "Why is walking on ice difficult?",
                  options: [
                    "Because ice is hot",
                    "Due to very low friction between shoes and ice.",
                    "Because it's shiny",
                    "Because air pressure increases"
                  ],
                  answer: "Due to very low friction between shoes and ice."
                },
                {
                  id: "h8",
                  question: "If net force on an object is zero, what can you say about its motion?",
                  options: [
                    "It will accelerate",
                    "It moves faster",
                    "The object is either at rest or moving with constant velocity.",
                    "It slows down"
                  ],
                  answer: "The object is either at rest or moving with constant velocity."
                },
                {
                  id: "h9",
                  question: "State the law of conservation of momentum.",
                  options: [
                    "Momentum is always zero",
                    "Total momentum remains constant in the absence of external forces.",
                    "Only energy is conserved",
                    "Momentum decreases with time"
                  ],
                  answer: "Total momentum remains constant in the absence of external forces."
                },
                {
                  id: "h10",
                  question: "A car of mass 1000 kg increases its speed from 10 m/s to 20 m/s in 5 s. Find the average force.",
                  options: ["1000 N", "5000 N", "2000 N", "100 N"],
                  answer: "2000 N"
                }
              ]
            }

          },
          {
            id: "work-power-energy-10-icse",
            title: "Work, Power and Energy",
            flashcards: {
              beginner: [
                {
                  id: "wpe-b1",
                  difficulty: "beginner",
                  question: "What is work in physics?",
                  answer: "Work is said to be done when a force is applied and there is displacement in the direction of the force."
                },
                {
                  id: "wpe-b2",
                  difficulty: "beginner",
                  question: "What is the SI unit of work?",
                  answer: "The SI unit of work is joule (J)."
                },
                {
                  id: "wpe-b3",
                  difficulty: "beginner",
                  question: "What is positive work?",
                  answer: "Positive work is done when force and displacement are in the same direction."
                },
                {
                  id: "wpe-b4",
                  difficulty: "beginner",
                  question: "What is negative work?",
                  answer: "Negative work is done when force and displacement are in opposite directions."
                },
                {
                  id: "wpe-b5",
                  difficulty: "beginner",
                  question: "What is power?",
                  answer: "Power is the rate of doing work."
                },
                {
                  id: "wpe-b6",
                  difficulty: "beginner",
                  question: "What is the SI unit of power?",
                  answer: "The SI unit of power is watt (W)."
                },
                {
                  id: "wpe-b7",
                  difficulty: "beginner",
                  question: "Define energy.",
                  answer: "Energy is the capacity to do work."
                },
                {
                  id: "wpe-b8",
                  difficulty: "beginner",
                  question: "Name the SI unit of energy.",
                  answer: "The SI unit of energy is joule (J)."
                },
                {
                  id: "wpe-b9",
                  difficulty: "beginner",
                  question: "Give one example of mechanical energy.",
                  answer: "A moving car possesses mechanical energy."
                },
                {
                  id: "wpe-b10",
                  difficulty: "beginner",
                  question: "What is kinetic energy?",
                  answer: "The energy possessed by a body due to its motion."
                }
              ],
              intermediate: [
                {
                  id: "wpe-i1",
                  difficulty: "intermediate",
                  question: "State the formula for work.",
                  answer: "Work = Force × Displacement × cosθ"
                },
                {
                  id: "wpe-i2",
                  difficulty: "intermediate",
                  question: "Define 1 joule of work.",
                  answer: "1 joule is the work done when a force of 1 newton displaces a body by 1 meter in its direction."
                },
                {
                  id: "wpe-i3",
                  difficulty: "intermediate",
                  question: "What is the formula for power?",
                  answer: "Power = Work / Time"
                },
                {
                  id: "wpe-i4",
                  difficulty: "intermediate",
                  question: "What is 1 watt?",
                  answer: "1 watt is the power when 1 joule of work is done in 1 second."
                },
                {
                  id: "wpe-i5",
                  difficulty: "intermediate",
                  question: "State the formula for kinetic energy.",
                  answer: "K.E. = ½ × m × v²"
                },
                {
                  id: "wpe-i6",
                  difficulty: "intermediate",
                  question: "State the formula for potential energy.",
                  answer: "P.E. = m × g × h"
                },
                {
                  id: "wpe-i7",
                  difficulty: "intermediate",
                  question: "What is commercial unit of energy?",
                  answer: "Kilowatt-hour (kWh)"
                },
                {
                  id: "wpe-i8",
                  difficulty: "intermediate",
                  question: "1 kWh is equal to how many joules?",
                  answer: "1 kWh = 3.6 × 10^6 joules"
                },
                {
                  id: "wpe-i9",
                  difficulty: "intermediate",
                  question: "State the work-energy theorem.",
                  answer: "Work done by a force is equal to the change in kinetic energy of the body."
                },
                {
                  id: "wpe-i10",
                  difficulty: "intermediate",
                  question: "Define average power.",
                  answer: "Average power is the total work done divided by the total time taken."
                }
              ],
              hard: [
                {
                  id: "wpe-h1",
                  difficulty: "hard",
                  question: "A force of 10 N moves a body by 2 m at 60° angle. Find the work done.",
                  answer: "Work = 10 × 2 × cos60° = 10 joules"
                },
                {
                  id: "wpe-h2",
                  difficulty: "hard",
                  question: "A 2 kg object falls from a height of 10 m. Find the potential energy lost.",
                  answer: "P.E. = mgh = 2 × 9.8 × 10 = 196 J"
                },
                {
                  id: "wpe-h3",
                  difficulty: "hard",
                  question: "A motor does 3000 J work in 60 s. Find its power.",
                  answer: "Power = 3000 / 60 = 50 W"
                },
                {
                  id: "wpe-h4",
                  difficulty: "hard",
                  question: "Calculate the kinetic energy of a 5 kg object moving at 4 m/s.",
                  answer: "K.E. = 0.5 × 5 × 4² = 40 J"
                },
                {
                  id: "wpe-h5",
                  difficulty: "hard",
                  question: "If a man does 150 J of work in climbing a stair of height 3 m, what is his mass?",
                  answer: "m = W / (g × h) = 150 / (9.8 × 3) ≈ 5.1 kg"
                },
                {
                  id: "wpe-h6",
                  difficulty: "hard",
                  question: "An electric bulb uses 100 W power and runs for 5 hours. Find energy in kWh.",
                  answer: "Energy = (100 × 5)/1000 = 0.5 kWh"
                },
                {
                  id: "wpe-h7",
                  difficulty: "hard",
                  question: "Why is no work done if displacement is zero?",
                  answer: "Because Work = Force × Displacement × cosθ, and displacement = 0 ⇒ Work = 0"
                },
                {
                  id: "wpe-h8",
                  difficulty: "hard",
                  question: "A body of mass 3 kg moves at 10 m/s. Find the work required to stop it.",
                  answer: "Work = Loss of K.E. = ½ × 3 × 10² = 150 J"
                },
                {
                  id: "wpe-h9",
                  difficulty: "hard",
                  question: "A car engine delivers 25 kW. How much energy is produced in 1 minute?",
                  answer: "Energy = Power × Time = 25000 × 60 = 1.5 × 10^6 J"
                },
                {
                  id: "wpe-h10",
                  difficulty: "hard",
                  question: "A machine is 80% efficient and uses 500 J energy. How much useful work is done?",
                  answer: "Useful work = 80% of 500 = 400 J"
                }
              ]
            }
          },
          {
            id: "machines-10-icse",
            title: "Machines",
            flashcards: {
              beginner: [
                {
                  id: "machines-b1",
                  difficulty: "beginner",
                  question: "What is a machine?",
                  answer: "A machine is a device that makes our work easier by applying force in a convenient direction or multiplying the force."
                },
                {
                  id: "machines-b2",
                  difficulty: "beginner",
                  question: "What is the load in a machine?",
                  answer: "The load is the object or weight that is to be lifted or moved using a machine."
                },
                {
                  id: "machines-b3",
                  difficulty: "beginner",
                  question: "What is the effort in a machine?",
                  answer: "Effort is the force applied to operate a machine."
                },
                {
                  id: "machines-b4",
                  difficulty: "beginner",
                  question: "What is mechanical advantage?",
                  answer: "Mechanical advantage is the ratio of load to effort."
                },
                {
                  id: "machines-b5",
                  difficulty: "beginner",
                  question: "What is velocity ratio?",
                  answer: "Velocity ratio is the ratio of distance moved by the effort to the distance moved by the load."
                },
                {
                  id: "machines-b6",
                  difficulty: "beginner",
                  question: "What is efficiency of a machine?",
                  answer: "Efficiency is the ratio of work output to work input, expressed as a percentage."
                },
                {
                  id: "machines-b7",
                  difficulty: "beginner",
                  question: "What is an ideal machine?",
                  answer: "An ideal machine is 100% efficient, i.e., all the input work is converted into output work."
                },
                {
                  id: "machines-b8",
                  difficulty: "beginner",
                  question: "Name one simple machine.",
                  answer: "A lever is an example of a simple machine."
                },
                {
                  id: "machines-b9",
                  difficulty: "beginner",
                  question: "What is the function of a pulley?",
                  answer: "A pulley helps in changing the direction of effort and may also multiply force."
                },
                {
                  id: "machines-b10",
                  difficulty: "beginner",
                  question: "Do all machines have 100% efficiency?",
                  answer: "No, real machines always have efficiency less than 100% due to friction and energy loss."
                }
              ],
              intermediate: [
                {
                  id: "machines-i1",
                  difficulty: "intermediate",
                  question: "State the relation between mechanical advantage, velocity ratio, and efficiency.",
                  answer: "Efficiency = (Mechanical Advantage / Velocity Ratio) × 100"
                },
                {
                  id: "machines-i2",
                  difficulty: "intermediate",
                  question: "What is the SI unit of mechanical advantage?",
                  answer: "Mechanical advantage has no unit; it is a ratio."
                },
                {
                  id: "machines-i3",
                  difficulty: "intermediate",
                  question: "Name a machine that has mechanical advantage less than 1.",
                  answer: "A shovel has mechanical advantage less than 1; it increases speed at the expense of force."
                },
                {
                  id: "machines-i4",
                  difficulty: "intermediate",
                  question: "What is a lever?",
                  answer: "A lever is a rigid bar that rotates around a fixed point called a fulcrum."
                },
                {
                  id: "machines-i5",
                  difficulty: "intermediate",
                  question: "Define velocity ratio for an inclined plane.",
                  answer: "Velocity ratio = Length of the inclined plane / Height of the inclined plane"
                },
                {
                  id: "machines-i6",
                  difficulty: "intermediate",
                  question: "How does friction affect the efficiency of a machine?",
                  answer: "Friction reduces the efficiency by converting part of the input energy into heat."
                },
                {
                  id: "machines-i7",
                  difficulty: "intermediate",
                  question: "What is a compound pulley?",
                  answer: "A compound pulley is a combination of fixed and movable pulleys to increase mechanical advantage."
                },
                {
                  id: "machines-i8",
                  difficulty: "intermediate",
                  question: "What is the use of a screw jack?",
                  answer: "A screw jack is used to lift heavy vehicles like cars during repairs."
                },
                {
                  id: "machines-i9",
                  difficulty: "intermediate",
                  question: "Why is the mechanical advantage of a single movable pulley 2?",
                  answer: "Because the load is supported by two segments of rope, sharing the effort equally."
                },
                {
                  id: "machines-i10",
                  difficulty: "intermediate",
                  question: "Why can efficiency never be greater than 100%?",
                  answer: "Because some energy is always lost to friction and other resistances in real machines."
                }
              ],
              hard: [
                {
                  id: "machines-h1",
                  difficulty: "hard",
                  question: "A machine has M.A. = 4 and V.R. = 5. Calculate its efficiency.",
                  answer: "Efficiency = (4 / 5) × 100 = 80%"
                },
                {
                  id: "machines-h2",
                  difficulty: "hard",
                  question: "A machine requires an effort of 200 N to lift a load of 800 N. What is the mechanical advantage?",
                  answer: "M.A. = Load / Effort = 800 / 200 = 4"
                },
                {
                  id: "machines-h3",
                  difficulty: "hard",
                  question: "A lever has a load arm of 40 cm and effort arm of 80 cm. Find its mechanical advantage.",
                  answer: "M.A. = Effort arm / Load arm = 80 / 40 = 2"
                },
                {
                  id: "machines-h4",
                  difficulty: "hard",
                  question: "If a screw jack has a pitch of 5 mm and a handle of radius 25 cm, find the velocity ratio.",
                  answer: "V.R. = 2πr / pitch = 2×π×25 / 0.5 = 314.16"
                },
                {
                  id: "machines-h5",
                  difficulty: "hard",
                  question: "A pulley system has a velocity ratio of 4 and efficiency of 75%. Calculate mechanical advantage.",
                  answer: "M.A. = (Efficiency × V.R.) / 100 = (75 × 4)/100 = 3"
                },
                {
                  id: "machines-h6",
                  difficulty: "hard",
                  question: "In an inclined plane of length 6 m and height 1.5 m, find its velocity ratio.",
                  answer: "V.R. = 6 / 1.5 = 4"
                },
                {
                  id: "machines-h7",
                  difficulty: "hard",
                  question: "Why is the velocity ratio always greater than mechanical advantage in real machines?",
                  answer: "Because energy losses like friction reduce output force, making M.A. < V.R."
                },
                {
                  id: "machines-h8",
                  difficulty: "hard",
                  question: "A lever of class I has M.A. < 1. Give an example.",
                  answer: "A pair of tweezers or a pair of scissors has mechanical advantage less than 1."
                },
                {
                  id: "machines-h9",
                  difficulty: "hard",
                  question: "In a wheel and axle, radius of wheel is 40 cm, axle is 10 cm. Find V.R.",
                  answer: "V.R. = Radius of wheel / Radius of axle = 40 / 10 = 4"
                },
                {
                  id: "machines-h10",
                  difficulty: "hard",
                  question: "What does it mean if a machine has efficiency of 60%?",
                  answer: "It means that only 60% of input work is converted into useful output; 40% is lost."
                }
              ]
            }
          },
          {
            id: "refraction-plane-surfaces-10-icse",
            title: "Refraction of Light at Plane Surfaces",
            flashcards: {
              beginner: [
                { id: "refraction-b1", difficulty: "beginner", question: "What is refraction?", answer: "Refraction is the bending of light when it passes from one medium to another." },
                { id: "refraction-b2", difficulty: "beginner", question: "Why does refraction occur?", answer: "Refraction occurs due to the change in speed of light in different media." },
                { id: "refraction-b3", difficulty: "beginner", question: "What is a medium in optics?", answer: "A medium is the material through which light travels, like air, water, or glass." },
                { id: "refraction-b4", difficulty: "beginner", question: "What happens to the light ray when it enters a denser medium?", answer: "It bends towards the normal." },
                { id: "refraction-b5", difficulty: "beginner", question: "What happens to the light ray when it enters a rarer medium?", answer: "It bends away from the normal." },
                { id: "refraction-b6", difficulty: "beginner", question: "What is the incident ray?", answer: "The ray of light that strikes the surface before refraction." },
                { id: "refraction-b7", difficulty: "beginner", question: "What is the refracted ray?", answer: "The ray of light that travels in the new medium after bending." },
                { id: "refraction-b8", difficulty: "beginner", question: "What is the normal in refraction?", answer: "A line drawn perpendicular to the surface at the point of incidence." },
                { id: "refraction-b9", difficulty: "beginner", question: "Give one real-life example of refraction.", answer: "A straw appearing bent in a glass of water." },
                { id: "refraction-b10", difficulty: "beginner", question: "Does light change its speed or direction during refraction?", answer: "It changes both speed and direction." }
              ],
              intermediate: [
                { id: "refraction-i1", difficulty: "intermediate", question: "Define refractive index.", answer: "Refractive index is the ratio of the speed of light in vacuum to that in a medium." },
                { id: "refraction-i2", difficulty: "intermediate", question: "What is Snell's Law?", answer: "Snell's Law states that n₁·sin(i) = n₂·sin(r), where n is refractive index." },
                { id: "refraction-i3", difficulty: "intermediate", question: "What is the formula for refractive index using speed?", answer: "n = c / v, where c is the speed of light in vacuum, v in medium." },
                { id: "refraction-i4", difficulty: "intermediate", question: "What is lateral displacement?", answer: "The sideways shift in the path of a refracted ray through a rectangular glass slab." },
                { id: "refraction-i5", difficulty: "intermediate", question: "Name one device that uses refraction.", answer: "A magnifying glass." },
                { id: "refraction-i6", difficulty: "intermediate", question: "What is the angle of incidence?", answer: "It is the angle between the incident ray and the normal." },
                { id: "refraction-i7", difficulty: "intermediate", question: "What is the angle of refraction?", answer: "It is the angle between the refracted ray and the normal." },
                { id: "refraction-i8", difficulty: "intermediate", question: "What happens when light enters perpendicularly into a new medium?", answer: "It does not bend but only changes speed." },
                { id: "refraction-i9", difficulty: "intermediate", question: "What is an optically denser medium?", answer: "A medium in which light travels slower, like glass compared to air." },
                { id: "refraction-i10", difficulty: "intermediate", question: "Does refraction follow the laws of reflection?", answer: "No, it follows the laws of refraction like Snell’s Law." }
              ],
              hard: [
                { id: "refraction-h1", difficulty: "hard", question: "If the angle of incidence is 30° and the angle of refraction is 20°, find the refractive index.", answer: "n = sin(30°)/sin(20°) ≈ 0.5/0.342 = 1.46" },
                { id: "refraction-h2", difficulty: "hard", question: "Light enters from air (n=1) to glass (n=1.5). What is the ratio of speeds?", answer: "v_air/v_glass = n_glass/n_air = 1.5" },
                { id: "refraction-h3", difficulty: "hard", question: "Calculate the speed of light in glass if its refractive index is 1.5.", answer: "v = c/n = 3×10⁸ / 1.5 = 2×10⁸ m/s" },
                { id: "refraction-h4", difficulty: "hard", question: "A ray of light passes through a parallel-sided glass slab. Describe its emergent ray.", answer: "The emergent ray is parallel to the incident ray but laterally displaced." },
                { id: "refraction-h5", difficulty: "hard", question: "Derive the formula for refractive index using Snell's law.", answer: "From Snell’s Law: n = sin(i)/sin(r), where i and r are angles of incidence and refraction." },
                { id: "refraction-h6", difficulty: "hard", question: "Why do objects appear raised in water?", answer: "Due to refraction, light bends away from the normal making objects appear higher." },
                { id: "refraction-h7", difficulty: "hard", question: "A glass slab causes 1 cm lateral displacement. What affects this value?", answer: "Refractive index, thickness of the slab, and angle of incidence." },
                { id: "refraction-h8", difficulty: "hard", question: "Why does a coin placed in water appear closer?", answer: "Due to refraction at the water surface, the light rays bend, making the coin appear raised." },
                { id: "refraction-h9", difficulty: "hard", question: "Which has higher refractive index: diamond or glass?", answer: "Diamond; it has a refractive index of about 2.42, much higher than glass." },
                { id: "refraction-h10", difficulty: "hard", question: "Is the refractive index of a medium constant for all wavelengths?", answer: "No, refractive index varies with wavelength. This is called dispersion." }
              ]
            }
          },

          {
            "id": "refraction-lens-10-icse",
            "title": "Refraction of Light Through a Lens",
            "flashcards": {
              "beginner": [
                {
                  "id": "lens-b1",
                  "difficulty": "beginner",
                  "question": "What is a lens?",
                  "answer": "A lens is a transparent optical device that bends light rays by refraction."
                },
                {
                  "id": "lens-b2",
                  "difficulty": "beginner",
                  "question": "What are the two main types of lenses?",
                  "answer": "Convex (converging) and Concave (diverging) lenses."
                },
                {
                  "id": "lens-b3",
                  "difficulty": "beginner",
                  "question": "What does a convex lens do to light rays?",
                  "answer": "It converges (brings together) light rays."
                },
                {
                  "id": "lens-b4",
                  "difficulty": "beginner",
                  "question": "What does a concave lens do to light rays?",
                  "answer": "It diverges (spreads out) light rays."
                },
                {
                  "id": "lens-b5",
                  "difficulty": "beginner",
                  "question": "What is the principal axis of a lens?",
                  "answer": "It is the imaginary line passing through the center of the lens and its optical center."
                },
                {
                  "id": "lens-b6",
                  "difficulty": "beginner",
                  "question": "What is the optical center of a lens?",
                  "answer": "The point inside the lens through which a ray passes without deviation."
                },
                {
                  "id": "lens-b7",
                  "difficulty": "beginner",
                  "question": "What is the principal focus of a convex lens?",
                  "answer": "It is the point where parallel rays converge after refraction."
                },
                {
                  "id": "lens-b8",
                  "difficulty": "beginner",
                  "question": "What is the focal length of a lens?",
                  "answer": "It is the distance between the optical center and the principal focus."
                },
                {
                  "id": "lens-b9",
                  "difficulty": "beginner",
                  "question": "Does a concave lens form real or virtual images?",
                  "answer": "A concave lens always forms virtual, erect, and diminished images."
                },
                {
                  "id": "lens-b10",
                  "difficulty": "beginner",
                  "question": "What kind of image does a convex lens form when the object is at infinity?",
                  "answer": "A real, inverted, and highly diminished image at the focus."
                }
              ],
              "intermediate": [
                {
                  "id": "lens-i1",
                  "difficulty": "intermediate",
                  "question": "State the lens formula.",
                  "answer": "1/f = 1/v - 1/u, where f is focal length, v is image distance, and u is object distance."
                },
                {
                  "id": "lens-i2",
                  "difficulty": "intermediate",
                  "question": "What is the sign convention for lenses?",
                  "answer": "Distances measured opposite to incident light are negative; others are positive."
                },
                {
                  "id": "lens-i3",
                  "difficulty": "intermediate",
                  "question": "What does a positive focal length indicate?",
                  "answer": "It indicates a convex lens."
                },
                {
                  "id": "lens-i4",
                  "difficulty": "intermediate",
                  "question": "What is the nature of the image formed by a convex lens when the object is between F and 2F?",
                  "answer": "The image is real, inverted, and magnified, formed beyond 2F."
                },
                {
                  "id": "lens-i5",
                  "difficulty": "intermediate",
                  "question": "What kind of image does a convex lens form when the object is at the focus?",
                  "answer": "An image at infinity, highly enlarged, and real."
                },
                {
                  "id": "lens-i6",
                  "difficulty": "intermediate",
                  "question": "What kind of image does a convex lens form when the object is between focus and optical center?",
                  "answer": "A virtual, erect, and magnified image on the same side."
                },
                {
                  "id": "lens-i7",
                  "difficulty": "intermediate",
                  "question": "What is the unit of power of a lens?",
                  "answer": "Dioptre (D)"
                },
                {
                  "id": "lens-i8",
                  "difficulty": "intermediate",
                  "question": "What is the power of a lens with a focal length of 50 cm?",
                  "answer": "P = 100/f = 100/50 = +2D"
                },
                {
                  "id": "lens-i9",
                  "difficulty": "intermediate",
                  "question": "Is the power of a concave lens positive or negative?",
                  "answer": "Negative."
                },
                {
                  "id": "lens-i10",
                  "difficulty": "intermediate",
                  "question": "What is meant by magnification?",
                  "answer": "It is the ratio of height of the image to the height of the object."
                }
              ],
              "hard": [
                {
                  "id": "lens-h1",
                  "difficulty": "hard",
                  "question": "An object is placed 20 cm from a convex lens of focal length 10 cm. Where is the image formed?",
                  "answer": "Using 1/f = 1/v - 1/u → 1/10 = 1/v + 1/20 → v = 20 cm. Image is real and same size at 20 cm."
                },
                {
                  "id": "lens-h2",
                  "difficulty": "hard",
                  "question": "Derive the lens formula using geometry.",
                  "answer": "Using ray diagrams and triangles formed by incident and refracted rays, one derives 1/f = 1/v - 1/u."
                },
                {
                  "id": "lens-h3",
                  "difficulty": "hard",
                  "question": "A lens forms an image 15 cm from it of an object 30 cm away. Find its focal length.",
                  "answer": "1/f = 1/v - 1/u = 1/15 - 1/30 = 1/30 ⇒ f = 30 cm."
                },
                {
                  "id": "lens-h4",
                  "difficulty": "hard",
                  "question": "If the magnification is -2, what does it tell you about the image?",
                  "answer": "It is real, inverted, and magnified 2 times."
                },
                {
                  "id": "lens-h5",
                  "difficulty": "hard",
                  "question": "How does a lens produce a virtual image?",
                  "answer": "When the object is placed between the optical center and the focus."
                },
                {
                  "id": "lens-h6",
                  "difficulty": "hard",
                  "question": "Calculate the power of a lens with focal length -25 cm.",
                  "answer": "P = 100/f = 100/(-25) = -4D"
                },
                {
                  "id": "lens-h7",
                  "difficulty": "hard",
                  "question": "Why is a convex lens used in projectors?",
                  "answer": "Because it forms real, inverted, and magnified images."
                },
                {
                  "id": "lens-h8",
                  "difficulty": "hard",
                  "question": "Name a device where a concave lens is used and explain why.",
                  "answer": "Used in spectacles for myopia to diverge light rays before they enter the eye."
                },
                {
                  "id": "lens-h9",
                  "difficulty": "hard",
                  "question": "What is the formula for magnification in terms of object and image distance?",
                  "answer": "Magnification = v / u"
                },
                {
                  "id": "lens-h10",
                  "difficulty": "hard",
                  "question": "Two lenses of focal lengths 20 cm and 30 cm are placed in contact. What is their combined power?",
                  "answer": "1/F = 1/20 + 1/30 = 1/12 ⇒ P = 100/12 ≈ 8.33 D"
                }
              ]
            }
          },
          {
            "id": "electromagnetic-spectrum-10-icse",
            "title": "The Electromagnetic Spectrum",
            "flashcards": {
              "beginner": [
                {
                  "id": "ems-b1",
                  "difficulty": "beginner",
                  "question": "What is the electromagnetic spectrum?",
                  "answer": "It is the range of all types of electromagnetic radiation arranged by wavelength or frequency."
                },
                {
                  "id": "ems-b2",
                  "difficulty": "beginner",
                  "question": "What is electromagnetic radiation?",
                  "answer": "Waves of electric and magnetic fields that travel through space at the speed of light."
                },
                {
                  "id": "ems-b3",
                  "difficulty": "beginner",
                  "question": "What is the speed of electromagnetic waves in a vacuum?",
                  "answer": "Approximately 3 × 10⁸ m/s."
                },
                {
                  "id": "ems-b4",
                  "difficulty": "beginner",
                  "question": "Name the components of the electromagnetic spectrum in order of increasing frequency.",
                  "answer": "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays."
                },
                {
                  "id": "ems-b5",
                  "difficulty": "beginner",
                  "question": "Which part of the spectrum can humans see?",
                  "answer": "Visible light."
                },
                {
                  "id": "ems-b6",
                  "difficulty": "beginner",
                  "question": "Which electromagnetic wave has the longest wavelength?",
                  "answer": "Radio waves."
                },
                {
                  "id": "ems-b7",
                  "difficulty": "beginner",
                  "question": "Which wave has the shortest wavelength?",
                  "answer": "Gamma rays."
                },
                {
                  "id": "ems-b8",
                  "difficulty": "beginner",
                  "question": "What is the source of electromagnetic waves?",
                  "answer": "Oscillating electric charges."
                },
                {
                  "id": "ems-b9",
                  "difficulty": "beginner",
                  "question": "Do electromagnetic waves require a medium to travel?",
                  "answer": "No, they can travel through a vacuum."
                },
                {
                  "id": "ems-b10",
                  "difficulty": "beginner",
                  "question": "What is the basic difference between different types of EM waves?",
                  "answer": "Their wavelength and frequency."
                }
              ],
              "intermediate": [
                {
                  "id": "ems-i1",
                  "difficulty": "intermediate",
                  "question": "What is the wavelength range of visible light?",
                  "answer": "Approximately 400 nm to 700 nm."
                },
                {
                  "id": "ems-i2",
                  "difficulty": "intermediate",
                  "question": "What is the frequency range of radio waves?",
                  "answer": "About 3 Hz to 300 GHz."
                },
                {
                  "id": "ems-i3",
                  "difficulty": "intermediate",
                  "question": "Which EM wave is used for cooking in microwave ovens?",
                  "answer": "Microwaves."
                },
                {
                  "id": "ems-i4",
                  "difficulty": "intermediate",
                  "question": "Which EM wave is responsible for sunburn?",
                  "answer": "Ultraviolet rays."
                },
                {
                  "id": "ems-i5",
                  "difficulty": "intermediate",
                  "question": "What are X-rays used for?",
                  "answer": "Medical imaging and security scanning."
                },
                {
                  "id": "ems-i6",
                  "difficulty": "intermediate",
                  "question": "Which EM wave is used in TV and radio broadcasting?",
                  "answer": "Radio waves."
                },
                {
                  "id": "ems-i7",
                  "difficulty": "intermediate",
                  "question": "What does UV stand for?",
                  "answer": "Ultraviolet."
                },
                {
                  "id": "ems-i8",
                  "difficulty": "intermediate",
                  "question": "Which EM waves are used in night vision devices?",
                  "answer": "Infrared rays."
                },
                {
                  "id": "ems-i9",
                  "difficulty": "intermediate",
                  "question": "How are EM waves arranged in the spectrum?",
                  "answer": "By increasing frequency and decreasing wavelength."
                },
                {
                  "id": "ems-i10",
                  "difficulty": "intermediate",
                  "question": "Which EM wave has more energy: UV or infrared?",
                  "answer": "Ultraviolet, because it has a higher frequency."
                }
              ],
              "hard": [
                {
                  "id": "ems-h1",
                  "difficulty": "hard",
                  "question": "What is the relationship between wavelength, frequency, and speed of EM waves?",
                  "answer": "Speed = Wavelength × Frequency (c = λ × f)."
                },
                {
                  "id": "ems-h2",
                  "difficulty": "hard",
                  "question": "Explain how EM waves are produced.",
                  "answer": "They are produced by accelerating or oscillating electric charges."
                },
                {
                  "id": "ems-h3",
                  "difficulty": "hard",
                  "question": "What is the typical frequency range of gamma rays?",
                  "answer": "Greater than 10¹⁹ Hz."
                },
                {
                  "id": "ems-h4",
                  "difficulty": "hard",
                  "question": "Why can X-rays penetrate soft tissue but not bones?",
                  "answer": "Because bones absorb X-rays more due to their higher density."
                },
                {
                  "id": "ems-h5",
                  "difficulty": "hard",
                  "question": "How does the energy of EM waves vary across the spectrum?",
                  "answer": "Energy increases with frequency and decreases with wavelength."
                },
                {
                  "id": "ems-h6",
                  "difficulty": "hard",
                  "question": "State one medical application of gamma rays.",
                  "answer": "They are used for cancer treatment (radiotherapy)."
                },
                {
                  "id": "ems-h7",
                  "difficulty": "hard",
                  "question": "Why is infrared radiation used in thermal imaging?",
                  "answer": "Because it detects heat emitted by objects."
                },
                {
                  "id": "ems-h8",
                  "difficulty": "hard",
                  "question": "What part of the EM spectrum is used in satellite communication?",
                  "answer": "Microwaves."
                },
                {
                  "id": "ems-h9",
                  "difficulty": "hard",
                  "question": "Which EM waves can ionize atoms?",
                  "answer": "Ultraviolet, X-rays, and gamma rays."
                },
                {
                  "id": "ems-h10",
                  "difficulty": "hard",
                  "question": "Why are gamma rays dangerous to humans?",
                  "answer": "They are highly penetrating and can damage living cells and DNA."
                }
              ]
            }
          },
          {
            "id": "sound-10-icse",
            "title": "Sound",
            "flashcards": {
              "beginner": [
                {
                  "id": "sound-b1",
                  "difficulty": "beginner",
                  "question": "What is sound?",
                  "answer": "Sound is a form of energy produced by vibrating objects."
                },
                {
                  "id": "sound-b2",
                  "difficulty": "beginner",
                  "question": "What type of wave is sound in air?",
                  "answer": "It is a longitudinal wave."
                },
                {
                  "id": "sound-b3",
                  "difficulty": "beginner",
                  "question": "What is the speed of sound in air at room temperature?",
                  "answer": "Approximately 343 m/s."
                },
                {
                  "id": "sound-b4",
                  "difficulty": "beginner",
                  "question": "Does sound need a medium to travel?",
                  "answer": "Yes, sound cannot travel through a vacuum."
                },
                {
                  "id": "sound-b5",
                  "difficulty": "beginner",
                  "question": "What is the unit of frequency?",
                  "answer": "Hertz (Hz)."
                },
                {
                  "id": "sound-b6",
                  "difficulty": "beginner",
                  "question": "What is the audible range for humans?",
                  "answer": "20 Hz to 20,000 Hz."
                },
                {
                  "id": "sound-b7",
                  "difficulty": "beginner",
                  "question": "What is the amplitude of a wave?",
                  "answer": "The maximum displacement of particles from their mean position."
                },
                {
                  "id": "sound-b8",
                  "difficulty": "beginner",
                  "question": "What is vibration?",
                  "answer": "A back-and-forth motion of particles that produces sound."
                },
                {
                  "id": "sound-b9",
                  "difficulty": "beginner",
                  "question": "What is pitch?",
                  "answer": "Pitch is how high or low a sound seems and is related to frequency."
                },
                {
                  "id": "sound-b10",
                  "difficulty": "beginner",
                  "question": "What is loudness?",
                  "answer": "Loudness is the perception of sound intensity by the ear."
                }
              ],
              "intermediate": [
                {
                  "id": "sound-i1",
                  "difficulty": "intermediate",
                  "question": "What is the formula for wave speed?",
                  "answer": "Wave speed = Frequency × Wavelength (v = f × λ)."
                },
                {
                  "id": "sound-i2",
                  "difficulty": "intermediate",
                  "question": "Why is sound faster in solids than in gases?",
                  "answer": "Because particles are closer together in solids, allowing quicker vibration transfer."
                },
                {
                  "id": "sound-i3",
                  "difficulty": "intermediate",
                  "question": "What are ultrasonic sounds?",
                  "answer": "Sounds with frequency above 20,000 Hz, inaudible to humans."
                },
                {
                  "id": "sound-i4",
                  "difficulty": "intermediate",
                  "question": "What are infrasonic sounds?",
                  "answer": "Sounds with frequency below 20 Hz."
                },
                {
                  "id": "sound-i5",
                  "difficulty": "intermediate",
                  "question": "Define wavelength.",
                  "answer": "It is the distance between two consecutive compressions or rarefactions."
                },
                {
                  "id": "sound-i6",
                  "difficulty": "intermediate",
                  "question": "How is pitch related to frequency?",
                  "answer": "Higher frequency means higher pitch."
                },
                {
                  "id": "sound-i7",
                  "difficulty": "intermediate",
                  "question": "What is resonance?",
                  "answer": "Resonance is the increase in amplitude when the frequency of forced vibrations matches the natural frequency."
                },
                {
                  "id": "sound-i8",
                  "difficulty": "intermediate",
                  "question": "How does amplitude affect sound?",
                  "answer": "Greater amplitude means louder sound."
                },
                {
                  "id": "sound-i9",
                  "difficulty": "intermediate",
                  "question": "What is an echo?",
                  "answer": "An echo is the reflection of sound that reaches the ear after a delay."
                },
                {
                  "id": "sound-i10",
                  "difficulty": "intermediate",
                  "question": "What is the minimum distance needed for an echo to be heard?",
                  "answer": "17.2 meters (when sound speed is 343 m/s and delay is 0.1s)."
                }
              ],
              "hard": [
                {
                  "id": "sound-h1",
                  "difficulty": "hard",
                  "question": "What is the equation for the speed of sound in a medium?",
                  "answer": "v = √(elasticity/density) of the medium."
                },
                {
                  "id": "sound-h2",
                  "difficulty": "hard",
                  "question": "Why do sound waves not travel in vacuum?",
                  "answer": "Because there are no particles to carry the vibration."
                },
                {
                  "id": "sound-h3",
                  "difficulty": "hard",
                  "question": "How does temperature affect the speed of sound in air?",
                  "answer": "Speed increases with temperature because particles move faster."
                },
                {
                  "id": "sound-h4",
                  "difficulty": "hard",
                  "question": "Explain the Doppler Effect.",
                  "answer": "It is the change in frequency or pitch of sound due to relative motion between source and observer."
                },
                {
                  "id": "sound-h5",
                  "difficulty": "hard",
                  "question": "What causes the sound of thunder to rumble?",
                  "answer": "Different parts of the lightning strike reach the ear at different times due to varying distances."
                },
                {
                  "id": "sound-h6",
                  "difficulty": "hard",
                  "question": "How does pressure affect the speed of sound in gases?",
                  "answer": "At constant temperature, pressure has little effect since both pressure and density change proportionally."
                },
                {
                  "id": "sound-h7",
                  "difficulty": "hard",
                  "question": "What are overtones and harmonics?",
                  "answer": "They are higher frequency waves produced along with the fundamental frequency in vibrating bodies."
                },
                {
                  "id": "sound-h8",
                  "difficulty": "hard",
                  "question": "Why do different musical instruments produce different sounds?",
                  "answer": "Because of differences in waveform, overtones, and resonance characteristics."
                },
                {
                  "id": "sound-h9",
                  "difficulty": "hard",
                  "question": "What is the threshold of pain in sound intensity?",
                  "answer": "About 120 decibels (dB)."
                },
                {
                  "id": "sound-h10",
                  "difficulty": "hard",
                  "question": "How is sound used in sonar?",
                  "answer": "By sending ultrasonic waves underwater and detecting their echo to measure distance or locate objects."
                }
              ]
            }
          },
          {
            "id": "current-electricity-10-icse",
            "title": "Current Electricity",
            "flashcards": {
              "beginner": [
                {
                  "id": "electricity-b1",
                  "difficulty": "beginner",
                  "question": "What is electric current?",
                  "answer": "Electric current is the flow of electric charge through a conductor."
                },
                {
                  "id": "electricity-b2",
                  "difficulty": "beginner",
                  "question": "What is the SI unit of electric current?",
                  "answer": "Ampere (A)."
                },
                {
                  "id": "electricity-b3",
                  "difficulty": "beginner",
                  "question": "What instrument is used to measure electric current?",
                  "answer": "An ammeter."
                },
                {
                  "id": "electricity-b4",
                  "difficulty": "beginner",
                  "question": "What is potential difference?",
                  "answer": "It is the work done to move a unit charge from one point to another."
                },
                {
                  "id": "electricity-b5",
                  "difficulty": "beginner",
                  "question": "What is the unit of potential difference?",
                  "answer": "Volt (V)."
                },
                {
                  "id": "electricity-b6",
                  "difficulty": "beginner",
                  "question": "What device is used to measure potential difference?",
                  "answer": "A voltmeter."
                },
                {
                  "id": "electricity-b7",
                  "difficulty": "beginner",
                  "question": "What is a conductor?",
                  "answer": "A material that allows electric current to pass through it."
                },
                {
                  "id": "electricity-b8",
                  "difficulty": "beginner",
                  "question": "What is an insulator?",
                  "answer": "A material that does not allow electric current to pass through it."
                },
                {
                  "id": "electricity-b9",
                  "difficulty": "beginner",
                  "question": "Name one good conductor of electricity.",
                  "answer": "Copper."
                },
                {
                  "id": "electricity-b10",
                  "difficulty": "beginner",
                  "question": "Name one insulator.",
                  "answer": "Plastic."
                }
              ],
              "intermediate": [
                {
                  "id": "electricity-i1",
                  "difficulty": "intermediate",
                  "question": "State Ohm’s Law.",
                  "answer": "The current through a conductor is directly proportional to the potential difference across it, provided the temperature remains constant."
                },
                {
                  "id": "electricity-i2",
                  "difficulty": "intermediate",
                  "question": "What is the formula given by Ohm’s law?",
                  "answer": "V = I × R."
                },
                {
                  "id": "electricity-i3",
                  "difficulty": "intermediate",
                  "question": "What is resistance?",
                  "answer": "Resistance is the opposition offered by a conductor to the flow of current."
                },
                {
                  "id": "electricity-i4",
                  "difficulty": "intermediate",
                  "question": "What is the unit of resistance?",
                  "answer": "Ohm (Ω)."
                },
                {
                  "id": "electricity-i5",
                  "difficulty": "intermediate",
                  "question": "What factors affect the resistance of a wire?",
                  "answer": "Length, area of cross-section, material, and temperature."
                },
                {
                  "id": "electricity-i6",
                  "difficulty": "intermediate",
                  "question": "What is a resistor?",
                  "answer": "A component used to control the current in an electric circuit by providing resistance."
                },
                {
                  "id": "electricity-i7",
                  "difficulty": "intermediate",
                  "question": "What happens to the resistance if the length of the wire is doubled?",
                  "answer": "Resistance doubles."
                },
                {
                  "id": "electricity-i8",
                  "difficulty": "intermediate",
                  "question": "What happens to the resistance if the cross-sectional area is doubled?",
                  "answer": "Resistance is halved."
                },
                {
                  "id": "electricity-i9",
                  "difficulty": "intermediate",
                  "question": "Define one volt.",
                  "answer": "One volt is the potential difference when one joule of work is done to move one coulomb of charge."
                },
                {
                  "id": "electricity-i10",
                  "difficulty": "intermediate",
                  "question": "What is a rheostat?",
                  "answer": "A device used to vary the resistance in a circuit."
                }
              ],
              "hard": [
                {
                  "id": "electricity-h1",
                  "difficulty": "hard",
                  "question": "What is the relationship between resistance and resistivity?",
                  "answer": "R = ρ × (L/A), where ρ is resistivity, L is length, and A is cross-sectional area."
                },
                {
                  "id": "electricity-h2",
                  "difficulty": "hard",
                  "question": "What is the SI unit of resistivity?",
                  "answer": "Ohm-meter (Ω·m)."
                },
                {
                  "id": "electricity-h3",
                  "difficulty": "hard",
                  "question": "What is the effect of temperature on resistance in a metal?",
                  "answer": "Resistance increases with temperature."
                },
                {
                  "id": "electricity-h4",
                  "difficulty": "hard",
                  "question": "How is resistance different from resistivity?",
                  "answer": "Resistance depends on material, length, and area; resistivity depends only on the material."
                },
                {
                  "id": "electricity-h5",
                  "difficulty": "hard",
                  "question": "Why does the filament of a bulb have high resistance?",
                  "answer": "To convert more electrical energy into heat and light."
                },
                {
                  "id": "electricity-h6",
                  "difficulty": "hard",
                  "question": "Why is copper preferred in electrical wiring?",
                  "answer": "Because it has low resistivity and high conductivity."
                },
                {
                  "id": "electricity-h7",
                  "difficulty": "hard",
                  "question": "What is the formula to calculate electric power using resistance?",
                  "answer": "P = V² / R or P = I² × R."
                },
                {
                  "id": "electricity-h8",
                  "difficulty": "hard",
                  "question": "Explain why the resistance of a wire increases with temperature.",
                  "answer": "As temperature increases, atoms vibrate more, causing more collisions with electrons."
                },
                {
                  "id": "electricity-h9",
                  "difficulty": "hard",
                  "question": "What is the principle of a potentiometer?",
                  "answer": "It works on the principle that potential difference is directly proportional to the length of the wire."
                },
                {
                  "id": "electricity-h10",
                  "difficulty": "hard",
                  "question": "Why does resistance not depend on current or voltage?",
                  "answer": "Because it is an intrinsic property of the material, based on dimensions and nature of the conductor."
                }
              ]
            }
          },
          {
            "id": "household-circuits-10-icse",
            "title": "Household Circuits",
            "flashcards": {
              "beginner": [
                {
                  "id": "household-b1",
                  "difficulty": "beginner",
                  "question": "What is a household circuit?",
                  "answer": "It is the circuit used to distribute electricity in homes for daily use."
                },
                {
                  "id": "household-b2",
                  "difficulty": "beginner",
                  "question": "What is the standard voltage supplied to homes in India?",
                  "answer": "230 volts."
                },
                {
                  "id": "household-b3",
                  "difficulty": "beginner",
                  "question": "What is the frequency of AC supply in India?",
                  "answer": "50 Hz."
                },
                {
                  "id": "household-b4",
                  "difficulty": "beginner",
                  "question": "What are the three wires in a household circuit?",
                  "answer": "Live wire, neutral wire, and earth wire."
                },
                {
                  "id": "household-b5",
                  "difficulty": "beginner",
                  "question": "What is the color of the live wire?",
                  "answer": "Red (or brown in new coding)."
                },
                {
                  "id": "household-b6",
                  "difficulty": "beginner",
                  "question": "What is the color of the neutral wire?",
                  "answer": "Black (or blue in new coding)."
                },
                {
                  "id": "household-b7",
                  "difficulty": "beginner",
                  "question": "What is the color of the earth wire?",
                  "answer": "Green or green-yellow."
                },
                {
                  "id": "household-b8",
                  "difficulty": "beginner",
                  "question": "What is the purpose of the earth wire?",
                  "answer": "To prevent electric shocks by directing excess current to the ground."
                },
                {
                  "id": "household-b9",
                  "difficulty": "beginner",
                  "question": "What is a fuse?",
                  "answer": "A safety device that melts and breaks the circuit when too much current flows."
                },
                {
                  "id": "household-b10",
                  "difficulty": "beginner",
                  "question": "What does MCB stand for?",
                  "answer": "Miniature Circuit Breaker."
                }
              ],
              "intermediate": [
                {
                  "id": "household-i1",
                  "difficulty": "intermediate",
                  "question": "What is the function of the MCB in a household circuit?",
                  "answer": "It automatically switches off the circuit when excessive current flows."
                },
                {
                  "id": "household-i2",
                  "difficulty": "intermediate",
                  "question": "Why are appliances in homes connected in parallel?",
                  "answer": "So that each appliance gets the same voltage and can work independently."
                },
                {
                  "id": "household-i3",
                  "difficulty": "intermediate",
                  "question": "What is the danger of connecting appliances in series?",
                  "answer": "If one appliance fails, all others stop working, and voltage is shared unevenly."
                },
                {
                  "id": "household-i4",
                  "difficulty": "intermediate",
                  "question": "What is the function of the main switch?",
                  "answer": "To switch off the entire power supply to the house."
                },
                {
                  "id": "household-i5",
                  "difficulty": "intermediate",
                  "question": "Where is the main fuse connected?",
                  "answer": "It is connected to the live wire before the energy meter."
                },
                {
                  "id": "household-i6",
                  "difficulty": "intermediate",
                  "question": "Why is earthing essential in homes?",
                  "answer": "To prevent electric shocks by providing a path for leakage current."
                },
                {
                  "id": "household-i7",
                  "difficulty": "intermediate",
                  "question": "How does an electric meter help the consumer?",
                  "answer": "It records the amount of electrical energy consumed in kilowatt-hours."
                },
                {
                  "id": "household-i8",
                  "difficulty": "intermediate",
                  "question": "What are the two types of fuses used in homes?",
                  "answer": "Cartridge fuse and rewireable fuse."
                },
                {
                  "id": "household-i9",
                  "difficulty": "intermediate",
                  "question": "What is the unit of electric energy used in household billing?",
                  "answer": "Kilowatt-hour (kWh)."
                },
                {
                  "id": "household-i10",
                  "difficulty": "intermediate",
                  "question": "What is the role of insulation in wiring?",
                  "answer": "To prevent electric shocks and short circuits by isolating wires."
                }
              ],
              "hard": [
                {
                  "id": "household-h1",
                  "difficulty": "hard",
                  "question": "Explain how a short circuit occurs in a household wiring system.",
                  "answer": "It occurs when live and neutral wires touch, allowing current to bypass appliances and causing excessive current flow."
                },
                {
                  "id": "household-h2",
                  "difficulty": "hard",
                  "question": "How does earthing protect users from electric shock?",
                  "answer": "It provides a low resistance path to ground, so any leakage current flows safely to the earth."
                },
                {
                  "id": "household-h3",
                  "difficulty": "hard",
                  "question": "Why is it dangerous to touch a live wire?",
                  "answer": "Because it carries high voltage, which can cause a fatal electric shock."
                },
                {
                  "id": "household-h4",
                  "difficulty": "hard",
                  "question": "Differentiate between fuse and MCB.",
                  "answer": "A fuse melts to break the circuit once, while MCB trips and can be reset."
                },
                {
                  "id": "household-h5",
                  "difficulty": "hard",
                  "question": "What would happen if the earth wire is missing?",
                  "answer": "Appliances with metal casing could become live, increasing shock risk."
                },
                {
                  "id": "household-h6",
                  "difficulty": "hard",
                  "question": "Explain the working of a cartridge fuse.",
                  "answer": "It contains a wire enclosed in a glass or ceramic tube, which melts when current exceeds the limit."
                },
                {
                  "id": "household-h7",
                  "difficulty": "hard",
                  "question": "Why are separate circuits used for power and light circuits in homes?",
                  "answer": "Because power circuits carry higher current for heavy appliances."
                },
                {
                  "id": "household-h8",
                  "difficulty": "hard",
                  "question": "How does resistance in wires cause energy loss in household wiring?",
                  "answer": "Due to heating effect of current (I²R loss), which wastes energy as heat."
                },
                {
                  "id": "household-h9",
                  "difficulty": "hard",
                  "question": "What is the consequence of overloading a circuit?",
                  "answer": "It can cause excessive heating, tripping of MCB, or even fire."
                },
                {
                  "id": "household-h10",
                  "difficulty": "hard",
                  "question": "Why is three-pin plug safer than a two-pin plug?",
                  "answer": "It includes an earth pin which enhances safety by connecting appliance casing to earth."
                }
              ]
            }
          },
          {
            "id": "electromagnetism-10-icse",
            "title": "Electromagnetism",
            "flashcards": {
              "beginner": [
                {
                  "id": "electromagnetism-b1",
                  "difficulty": "beginner",
                  "question": "What is electromagnetism?",
                  "answer": "It is the study of the relationship between electricity and magnetism."
                },
                {
                  "id": "electromagnetism-b2",
                  "difficulty": "beginner",
                  "question": "What is an electromagnet?",
                  "answer": "A temporary magnet formed by passing current through a coil wound around a soft iron core."
                },
                {
                  "id": "electromagnetism-b3",
                  "difficulty": "beginner",
                  "question": "Who discovered the magnetic effect of electric current?",
                  "answer": "Hans Christian Oersted."
                },
                {
                  "id": "electromagnetism-b4",
                  "difficulty": "beginner",
                  "question": "What material is commonly used as the core of an electromagnet?",
                  "answer": "Soft iron."
                },
                {
                  "id": "electromagnetism-b5",
                  "difficulty": "beginner",
                  "question": "What happens when current is passed through a conductor?",
                  "answer": "A magnetic field is produced around it."
                },
                {
                  "id": "electromagnetism-b6",
                  "difficulty": "beginner",
                  "question": "Name the rule used to determine the direction of magnetic field around a current-carrying wire.",
                  "answer": "Right-hand thumb rule."
                },
                {
                  "id": "electromagnetism-b7",
                  "difficulty": "beginner",
                  "question": "What is the shape of magnetic field lines around a straight conductor?",
                  "answer": "Concentric circles."
                },
                {
                  "id": "electromagnetism-b8",
                  "difficulty": "beginner",
                  "question": "What is the role of a solenoid in electromagnetism?",
                  "answer": "It produces a strong uniform magnetic field when current flows through it."
                },
                {
                  "id": "electromagnetism-b9",
                  "difficulty": "beginner",
                  "question": "What is the effect of increasing the number of turns in a solenoid?",
                  "answer": "It increases the strength of the magnetic field."
                },
                {
                  "id": "electromagnetism-b10",
                  "difficulty": "beginner",
                  "question": "What happens to an electromagnet when current is switched off?",
                  "answer": "It loses its magnetic properties."
                }
              ],
              "intermediate": [
                {
                  "id": "electromagnetism-i1",
                  "difficulty": "intermediate",
                  "question": "State Fleming’s left-hand rule.",
                  "answer": "It gives the direction of force on a current-carrying conductor in a magnetic field."
                },
                {
                  "id": "electromagnetism-i2",
                  "difficulty": "intermediate",
                  "question": "What factors affect the strength of an electromagnet?",
                  "answer": "Number of turns, current strength, core material."
                },
                {
                  "id": "electromagnetism-i3",
                  "difficulty": "intermediate",
                  "question": "What is the use of an armature in an electric motor?",
                  "answer": "It rotates when current passes, converting electrical energy to mechanical energy."
                },
                {
                  "id": "electromagnetism-i4",
                  "difficulty": "intermediate",
                  "question": "What happens if the direction of current is reversed in an electromagnet?",
                  "answer": "The poles of the electromagnet are reversed."
                },
                {
                  "id": "electromagnetism-i5",
                  "difficulty": "intermediate",
                  "question": "Why is a soft iron core preferred in electromagnets?",
                  "answer": "Because it magnetizes and demagnetizes easily."
                },
                {
                  "id": "electromagnetism-i6",
                  "difficulty": "intermediate",
                  "question": "What is electromagnetic induction?",
                  "answer": "The production of current in a coil due to changing magnetic field."
                },
                {
                  "id": "electromagnetism-i7",
                  "difficulty": "intermediate",
                  "question": "How is an electric bell an example of electromagnetism?",
                  "answer": "An electromagnet pulls the striker to hit the bell repeatedly."
                },
                {
                  "id": "electromagnetism-i8",
                  "difficulty": "intermediate",
                  "question": "What is a solenoid?",
                  "answer": "A cylindrical coil of wire acting like a bar magnet when current passes through it."
                },
                {
                  "id": "electromagnetism-i9",
                  "difficulty": "intermediate",
                  "question": "What is the function of a split ring in an electric motor?",
                  "answer": "It reverses the direction of current after each half rotation."
                },
                {
                  "id": "electromagnetism-i10",
                  "difficulty": "intermediate",
                  "question": "How can you increase the force on a conductor in a magnetic field?",
                  "answer": "Increase current, magnetic field strength, or length of conductor."
                }
              ],
              "hard": [
                {
                  "id": "electromagnetism-h1",
                  "difficulty": "hard",
                  "question": "Explain the working principle of an electric motor.",
                  "answer": "It works on the principle that a current-carrying conductor in a magnetic field experiences a force."
                },
                {
                  "id": "electromagnetism-h2",
                  "difficulty": "hard",
                  "question": "What is mutual induction?",
                  "answer": "Inducing current in one coil due to changing current in a nearby coil."
                },
                {
                  "id": "electromagnetism-h3",
                  "difficulty": "hard",
                  "question": "State Lenz’s Law.",
                  "answer": "The induced current opposes the change that causes it."
                },
                {
                  "id": "electromagnetism-h4",
                  "difficulty": "hard",
                  "question": "What is back EMF in motors?",
                  "answer": "An EMF generated opposing the applied voltage due to rotation of the coil."
                },
                {
                  "id": "electromagnetism-h5",
                  "difficulty": "hard",
                  "question": "Why is copper used in making solenoids?",
                  "answer": "It has low resistance and allows large current flow with minimal energy loss."
                },
                {
                  "id": "electromagnetism-h6",
                  "difficulty": "hard",
                  "question": "Compare permanent magnets and electromagnets.",
                  "answer": "Electromagnets can be controlled and are stronger; permanent magnets are constant and weaker."
                },
                {
                  "id": "electromagnetism-h7",
                  "difficulty": "hard",
                  "question": "How does an electric relay use electromagnetism?",
                  "answer": "An electromagnet activates a switch in another circuit for automation."
                },
                {
                  "id": "electromagnetism-h8",
                  "difficulty": "hard",
                  "question": "What causes the rotation of the coil in a motor?",
                  "answer": "Forces acting on the arms of the coil in opposite directions create torque."
                },
                {
                  "id": "electromagnetism-h9",
                  "difficulty": "hard",
                  "question": "Why is insulation important in electromagnets?",
                  "answer": "To prevent short circuits between coil turns and ensure proper field generation."
                },
                {
                  "id": "electromagnetism-h10",
                  "difficulty": "hard",
                  "question": "What would happen if a steel core is used in an electromagnet?",
                  "answer": "It would retain magnetism and not demagnetize easily, affecting switch-based operations."
                }
              ]
            }
          },
          {
            "id": "heat-10-icse",
            "title": "Heat",
            "flashcards": {
              "beginner": [
                {
                  "id": "heat-b1",
                  "difficulty": "beginner",
                  "question": "What is heat?",
                  "answer": "Heat is a form of energy that flows from a hotter object to a colder one."
                },
                {
                  "id": "heat-b2",
                  "difficulty": "beginner",
                  "question": "What is the SI unit of heat?",
                  "answer": "The SI unit of heat is joule (J)."
                },
                {
                  "id": "heat-b3",
                  "difficulty": "beginner",
                  "question": "What is temperature?",
                  "answer": "Temperature is the measure of the degree of hotness or coldness of a body."
                },
                {
                  "id": "heat-b4",
                  "difficulty": "beginner",
                  "question": "Name three methods of heat transfer.",
                  "answer": "Conduction, convection, and radiation."
                },
                {
                  "id": "heat-b5",
                  "difficulty": "beginner",
                  "question": "Which material is a good conductor of heat?",
                  "answer": "Metals like copper and aluminum."
                },
                {
                  "id": "heat-b6",
                  "difficulty": "beginner",
                  "question": "What is specific heat capacity?",
                  "answer": "It is the amount of heat required to raise the temperature of 1 kg of a substance by 1°C."
                },
                {
                  "id": "heat-b7",
                  "difficulty": "beginner",
                  "question": "Name a good insulator of heat.",
                  "answer": "Wood, wool, or air."
                },
                {
                  "id": "heat-b8",
                  "difficulty": "beginner",
                  "question": "Which thermometer is used to measure high temperatures?",
                  "answer": "A pyrometer."
                },
                {
                  "id": "heat-b9",
                  "difficulty": "beginner",
                  "question": "What is the freezing point of water in Celsius?",
                  "answer": "0°C."
                },
                {
                  "id": "heat-b10",
                  "difficulty": "beginner",
                  "question": "What is the boiling point of water in Celsius?",
                  "answer": "100°C."
                }
              ],
              "intermediate": [
                {
                  "id": "heat-i1",
                  "difficulty": "intermediate",
                  "question": "State the principle of calorimetry.",
                  "answer": "Heat lost by hot body = Heat gained by cold body (if no heat is lost to surroundings)."
                },
                {
                  "id": "heat-i2",
                  "difficulty": "intermediate",
                  "question": "What is latent heat?",
                  "answer": "Heat required to change the state of a substance without changing its temperature."
                },
                {
                  "id": "heat-i3",
                  "difficulty": "intermediate",
                  "question": "Differentiate between heat and temperature.",
                  "answer": "Heat is energy; temperature is a measure of heat intensity."
                },
                {
                  "id": "heat-i4",
                  "difficulty": "intermediate",
                  "question": "What is the SI unit of specific heat capacity?",
                  "answer": "J/kg·K"
                },
                {
                  "id": "heat-i5",
                  "difficulty": "intermediate",
                  "question": "Define thermal equilibrium.",
                  "answer": "It is the state in which two bodies in contact no longer transfer heat between them."
                },
                {
                  "id": "heat-i6",
                  "difficulty": "intermediate",
                  "question": "What is thermal expansion?",
                  "answer": "The increase in volume or length of a substance due to heat."
                },
                {
                  "id": "heat-i7",
                  "difficulty": "intermediate",
                  "question": "Name the type of heat transfer that can occur in a vacuum.",
                  "answer": "Radiation."
                },
                {
                  "id": "heat-i8",
                  "difficulty": "intermediate",
                  "question": "What is the effect of pressure on boiling point?",
                  "answer": "Boiling point increases with pressure."
                },
                {
                  "id": "heat-i9",
                  "difficulty": "intermediate",
                  "question": "Why are cooking utensils made of metal but have plastic handles?",
                  "answer": "Metal conducts heat; plastic insulates and prevents burns."
                },
                {
                  "id": "heat-i10",
                  "difficulty": "intermediate",
                  "question": "Why does black clothing absorb more heat?",
                  "answer": "Black surfaces absorb more heat due to better radiation absorption."
                }
              ],
              "hard": [
                {
                  "id": "heat-h1",
                  "difficulty": "hard",
                  "question": "What is the formula to calculate heat using specific heat capacity?",
                  "answer": "Q = mcΔT, where m = mass, c = specific heat, ΔT = change in temperature."
                },
                {
                  "id": "heat-h2",
                  "difficulty": "hard",
                  "question": "Define latent heat of fusion.",
                  "answer": "It is the amount of heat required to convert 1 kg of solid into liquid at its melting point without temperature change."
                },
                {
                  "id": "heat-h3",
                  "difficulty": "hard",
                  "question": "Define latent heat of vaporization.",
                  "answer": "It is the amount of heat required to convert 1 kg of liquid into vapor at its boiling point without temperature change."
                },
                {
                  "id": "heat-h4",
                  "difficulty": "hard",
                  "question": "What is Newton’s law of cooling?",
                  "answer": "The rate of heat loss of a body is proportional to the difference in temperature between the body and surroundings."
                },
                {
                  "id": "heat-h5",
                  "difficulty": "hard",
                  "question": "Why is water used as a coolant in car radiators?",
                  "answer": "Because of its high specific heat capacity, it absorbs a lot of heat without a large temperature rise."
                },
                {
                  "id": "heat-h6",
                  "difficulty": "hard",
                  "question": "Why is calorimetry conducted in a thermally insulated container?",
                  "answer": "To prevent heat exchange with the environment and ensure accurate results."
                },
                {
                  "id": "heat-h7",
                  "difficulty": "hard",
                  "question": "What happens to internal energy during phase change?",
                  "answer": "Internal energy increases but temperature remains constant."
                },
                {
                  "id": "heat-h8",
                  "difficulty": "hard",
                  "question": "How does thermal conductivity affect heat transfer?",
                  "answer": "Higher thermal conductivity leads to faster heat transfer."
                },
                {
                  "id": "heat-h9",
                  "difficulty": "hard",
                  "question": "Why does a metal plate feel colder than a wooden table at the same temperature?",
                  "answer": "Because metal conducts heat away from your hand faster than wood."
                },
                {
                  "id": "heat-h10",
                  "difficulty": "hard",
                  "question": "Explain why a black kettle is more efficient in boiling water than a white one.",
                  "answer": "Black surfaces absorb and radiate heat more effectively, speeding up the boiling process."
                }
              ]
            }
          },
          {
            "id": "modern-physics-10-icse",
            "title": "Modern Physics",
            "flashcards": {
              "beginner": [
                {
                  "id": "modern-b1",
                  "difficulty": "beginner",
                  "question": "What is radioactivity?",
                  "answer": "Radioactivity is the spontaneous emission of radiation from the nucleus of an unstable atom."
                },
                {
                  "id": "modern-b2",
                  "difficulty": "beginner",
                  "question": "What are the three types of radioactive radiation?",
                  "answer": "Alpha (α), Beta (β), and Gamma (γ) rays."
                },
                {
                  "id": "modern-b3",
                  "difficulty": "beginner",
                  "question": "What is an alpha particle?",
                  "answer": "An alpha particle is a helium nucleus containing 2 protons and 2 neutrons."
                },
                {
                  "id": "modern-b4",
                  "difficulty": "beginner",
                  "question": "What is a beta particle?",
                  "answer": "A beta particle is a high-speed electron emitted from the nucleus during radioactive decay."
                },
                {
                  "id": "modern-b5",
                  "difficulty": "beginner",
                  "question": "What is a gamma ray?",
                  "answer": "A gamma ray is a high-energy electromagnetic wave emitted from the nucleus."
                },
                {
                  "id": "modern-b6",
                  "difficulty": "beginner",
                  "question": "Name a device used to detect radiation.",
                  "answer": "A Geiger-Müller (GM) counter."
                },
                {
                  "id": "modern-b7",
                  "difficulty": "beginner",
                  "question": "What is nuclear fission?",
                  "answer": "It is the splitting of a heavy nucleus into two lighter nuclei with the release of energy."
                },
                {
                  "id": "modern-b8",
                  "difficulty": "beginner",
                  "question": "What is nuclear fusion?",
                  "answer": "It is the combining of two light nuclei to form a heavier nucleus with the release of energy."
                },
                {
                  "id": "modern-b9",
                  "difficulty": "beginner",
                  "question": "Which radioactive element is commonly used in nuclear power plants?",
                  "answer": "Uranium-235."
                },
                {
                  "id": "modern-b10",
                  "difficulty": "beginner",
                  "question": "What is the unit of radioactivity?",
                  "answer": "Becquerel (Bq)."
                }
              ],
              "intermediate": [
                {
                  "id": "modern-i1",
                  "difficulty": "intermediate",
                  "question": "What is the difference between natural and artificial radioactivity?",
                  "answer": "Natural radioactivity occurs spontaneously in nature, while artificial is induced in laboratories."
                },
                {
                  "id": "modern-i2",
                  "difficulty": "intermediate",
                  "question": "State one use of radioactive isotopes in medicine.",
                  "answer": "Radioactive isotopes are used in cancer treatment and medical imaging."
                },
                {
                  "id": "modern-i3",
                  "difficulty": "intermediate",
                  "question": "Which radiation is most penetrating?",
                  "answer": "Gamma rays are the most penetrating."
                },
                {
                  "id": "modern-i4",
                  "difficulty": "intermediate",
                  "question": "Which radiation is deflected the most in an electric field?",
                  "answer": "Beta particles, as they are lighter and charged."
                },
                {
                  "id": "modern-i5",
                  "difficulty": "intermediate",
                  "question": "Which radiation is not deflected in a magnetic field?",
                  "answer": "Gamma rays, as they are neutral."
                },
                {
                  "id": "modern-i6",
                  "difficulty": "intermediate",
                  "question": "What is half-life?",
                  "answer": "The time taken for half the atoms in a radioactive substance to decay."
                },
                {
                  "id": "modern-i7",
                  "difficulty": "intermediate",
                  "question": "Why is nuclear fusion not used in power plants?",
                  "answer": "It requires extremely high temperatures and is difficult to control."
                },
                {
                  "id": "modern-i8",
                  "difficulty": "intermediate",
                  "question": "Why is shielding necessary in nuclear reactors?",
                  "answer": "To protect workers and the environment from harmful radiation."
                },
                {
                  "id": "modern-i9",
                  "difficulty": "intermediate",
                  "question": "What is the role of a moderator in a nuclear reactor?",
                  "answer": "It slows down neutrons to sustain the chain reaction."
                },
                {
                  "id": "modern-i10",
                  "difficulty": "intermediate",
                  "question": "What is a chain reaction?",
                  "answer": "A self-sustaining series of nuclear fissions releasing energy and more neutrons."
                }
              ],
              "hard": [
                {
                  "id": "modern-h1",
                  "difficulty": "hard",
                  "question": "Write the nuclear reaction for the alpha decay of Uranium-238.",
                  "answer": "²³⁸U → ²³⁴Th + ⁴He"
                },
                {
                  "id": "modern-h2",
                  "difficulty": "hard",
                  "question": "What is mass defect?",
                  "answer": "The difference between the mass of a nucleus and the sum of the masses of its individual nucleons."
                },
                {
                  "id": "modern-h3",
                  "difficulty": "hard",
                  "question": "What is binding energy?",
                  "answer": "The energy required to split a nucleus into its component nucleons."
                },
                {
                  "id": "modern-h4",
                  "difficulty": "hard",
                  "question": "How is binding energy calculated?",
                  "answer": "Binding Energy = Mass defect × c² (Einstein’s equation)."
                },
                {
                  "id": "modern-h5",
                  "difficulty": "hard",
                  "question": "What is critical mass?",
                  "answer": "The minimum mass of fissile material needed to sustain a chain reaction."
                },
                {
                  "id": "modern-h6",
                  "difficulty": "hard",
                  "question": "Describe the use of control rods in a nuclear reactor.",
                  "answer": "Control rods absorb excess neutrons and regulate the chain reaction."
                },
                {
                  "id": "modern-h7",
                  "difficulty": "hard",
                  "question": "State Einstein’s mass-energy equivalence equation.",
                  "answer": "E = mc²"
                },
                {
                  "id": "modern-h8",
                  "difficulty": "hard",
                  "question": "What is nuclear waste?",
                  "answer": "Radioactive materials left after nuclear reactions that need safe disposal."
                },
                {
                  "id": "modern-h9",
                  "difficulty": "hard",
                  "question": "Why is fusion considered cleaner than fission?",
                  "answer": "Fusion produces less radioactive waste and is safer."
                },
                {
                  "id": "modern-h10",
                  "difficulty": "hard",
                  "question": "What is the role of heavy water in nuclear reactors?",
                  "answer": "Heavy water acts as a moderator to slow down neutrons."
                }
              ]
            }
          },
        ]
      },
      {
        "id": "chemistry-10-icse",
        "name": "Chemistry",
        "icon": "🧪",
        "color": "from-green-400 to-green-600",
        "chapters": [
          {
            "id": "periodic-properties-10-icse",
            "title": "Periodic Properties",
            "flashcards": {
              "beginner": [
                { "id": "b1", "question": "What are periodic properties?", "answer": "Periodic properties are the properties of elements that repeat at regular intervals when elements are arranged in increasing order of atomic number." },
                { "id": "b2", "question": "What is the modern periodic law?", "answer": "The properties of elements are a periodic function of their atomic number." },
                { "id": "b3", "question": "What is atomic size?", "answer": "Atomic size refers to the distance from the nucleus to the outermost shell of an atom." },
                { "id": "b4", "question": "What is ionization energy?", "answer": "Ionization energy is the energy required to remove an electron from a neutral gaseous atom." },
                { "id": "b5", "question": "Define electron affinity.", "answer": "Electron affinity is the amount of energy released when an electron is added to a neutral atom." },
                { "id": "b6", "question": "Define electronegativity.", "answer": "Electronegativity is the tendency of an atom to attract a shared pair of electrons in a chemical bond." },
                { "id": "b7", "question": "What is a group in the periodic table?", "answer": "A group is a vertical column in the periodic table." },
                { "id": "b8", "question": "What is a period in the periodic table?", "answer": "A period is a horizontal row in the periodic table." },
                { "id": "b9", "question": "Which element has the smallest atomic size?", "answer": "Helium has the smallest atomic size." },
                { "id": "b10", "question": "Which element has the largest atomic size?", "answer": "Francium has the largest atomic size." }
              ],
              "intermediate": [
                { "id": "i1", "question": "How does atomic size change across a period?", "answer": "Atomic size decreases across a period due to increased nuclear charge." },
                { "id": "i2", "question": "How does atomic size change down a group?", "answer": "Atomic size increases down a group due to the addition of extra shells." },
                { "id": "i3", "question": "Why does ionization energy increase across a period?", "answer": "Due to increased nuclear charge and smaller atomic size, making it harder to remove electrons." },
                { "id": "i4", "question": "Why does electron affinity decrease down a group?", "answer": "Due to increased atomic size, the added electron feels less attraction from the nucleus." },
                { "id": "i5", "question": "What is the trend of electronegativity across a period?", "answer": "Electronegativity increases across a period." },
                { "id": "i6", "question": "What is the trend of electronegativity down a group?", "answer": "Electronegativity decreases down a group." },
                { "id": "i7", "question": "Which element has the highest electronegativity?", "answer": "Fluorine has the highest electronegativity." },
                { "id": "i8", "question": "Why are noble gases placed in Group 18?", "answer": "Because they have a complete outer shell and are chemically inert." },
                { "id": "i9", "question": "What is metallic character?", "answer": "It is the tendency of an element to lose electrons and form positive ions." },
                { "id": "i10", "question": "How does metallic character vary across a period?", "answer": "It decreases across a period from left to right." }
              ],
              "hard": [{ "id": "h1", "question": "Explain why ionization energy decreases down a group.", "answer": "Due to increased atomic size and shielding effect, the outermost electron is less tightly held." },
              { "id": "h2", "question": "Compare the electron affinities of chlorine and fluorine.", "answer": "Although fluorine is more electronegative, chlorine has a higher electron affinity due to less electron repulsion." },
              { "id": "h3", "question": "Explain the term 'shielding effect'.", "answer": "Shielding effect is the reduction in effective nuclear charge on the valence electrons due to inner shell electrons." },
              { "id": "h4", "question": "Why does atomic size decrease across a period despite adding electrons?", "answer": "Because the electrons are added to the same shell and increased nuclear charge pulls them closer." },
              { "id": "h5", "question": "What is the anomaly in the ionization energy trend between Be and B?", "answer": "Boron has lower ionization energy than beryllium due to its p-electron being easier to remove than Be's s-electron." },
              { "id": "h6", "question": "Explain the diagonal relationship between lithium and magnesium.", "answer": "Lithium and magnesium show similar properties due to similar charge density and atomic radii." },
              { "id": "h7", "question": "Why is the second ionization energy of sodium very high?", "answer": "Because after removing one electron, Na⁺ has a stable noble gas configuration." },
              { "id": "h8", "question": "Explain the trend of non-metallic character in the periodic table.", "answer": "Non-metallic character increases across a period and decreases down a group." },
              { "id": "h9", "question": "Why does fluorine have lower electron affinity than chlorine?", "answer": "Due to small size, added electron experiences repulsion in fluorine." },
              { "id": "h10", "question": "How is reactivity of alkali metals affected down the group?", "answer": "It increases down the group due to lower ionization energy and larger atomic size." }]
            }
          },
          {
            "id": "chemical-bonding-10-icse",
            "title": "Chemical Bonding",
            "flashcards": {
              "beginner": [
                { "id": "b1", "question": "What is a chemical bond?", "answer": "A chemical bond is a force that holds two or more atoms together in a molecule or compound." },
                { "id": "b2", "question": "What is an ionic bond?", "answer": "An ionic bond is formed by the transfer of electrons from one atom to another." },
                { "id": "b3", "question": "What is a covalent bond?", "answer": "A covalent bond is formed when two atoms share electrons." },
                { "id": "b4", "question": "Name one example of an ionic compound.", "answer": "Sodium chloride (NaCl)." },
                { "id": "b5", "question": "Name one example of a covalent compound.", "answer": "Water (H₂O)." },
                { "id": "b6", "question": "What type of bond is present in oxygen (O₂)?", "answer": "Covalent bond." },
                { "id": "b7", "question": "Which type of bond involves complete transfer of electrons?", "answer": "Ionic bond." },
                { "id": "b8", "question": "What is the valency of hydrogen?", "answer": "The valency of hydrogen is 1." },
                { "id": "b9", "question": "What is an electrovalent bond?", "answer": "Electrovalent bond is another name for an ionic bond." },
                { "id": "b10", "question": "What are lone pairs?", "answer": "Lone pairs are pairs of electrons not involved in bonding." }
              ],
              "intermediate": [
                { "id": "i1", "question": "Why do atoms form chemical bonds?", "answer": "Atoms form chemical bonds to attain a stable electronic configuration, usually an octet." },
                { "id": "i2", "question": "How many electrons are shared in a double bond?", "answer": "Four electrons are shared (two pairs)." },
                { "id": "i3", "question": "Why is NaCl an ionic compound?", "answer": "Because sodium donates an electron to chlorine, forming oppositely charged ions." },
                { "id": "i4", "question": "Why do covalent compounds generally have low melting points?", "answer": "Because they consist of molecules held by weak intermolecular forces." },
                { "id": "i5", "question": "What is a coordinate bond?", "answer": "A coordinate bond is formed when one atom donates both electrons to a shared pair." },
                { "id": "i6", "question": "Which type of bond is present in NH₃ (ammonia)?", "answer": "Covalent bond." },
                { "id": "i7", "question": "Which element in the periodic table forms both ionic and covalent compounds?", "answer": "Carbon can form covalent; elements like aluminum can form both." },
                { "id": "i8", "question": "What is the octet rule?", "answer": "Atoms tend to bond in such a way that they have 8 electrons in their valence shell." },
                { "id": "i9", "question": "Why is HCl a polar covalent compound?", "answer": "Because electrons are shared unequally between H and Cl." },
                { "id": "i10", "question": "What is meant by a polar molecule?", "answer": "A molecule with unequal sharing of electrons causing partial charges." }
              ],
              "hard": [{ "id": "h1", "question": "Draw the electron dot structure of water (H₂O).", "answer": "H:O:H, with two lone pairs on oxygen. (Visual needed for complete understanding)." },
              { "id": "h2", "question": "Compare the properties of ionic and covalent compounds.", "answer": "Ionic: high melting point, conduct electricity in solution. Covalent: low melting point, poor conductors." },
              { "id": "h3", "question": "Why is CO₂ non-polar despite having polar bonds?", "answer": "Because the dipoles cancel out due to linear shape." },
              { "id": "h4", "question": "Explain the bonding in methane (CH₄).", "answer": "Each hydrogen shares one electron with carbon, forming four single covalent bonds." },
              { "id": "h5", "question": "Why does Na form Na⁺ and not Na²⁺?", "answer": "Because removing a second electron requires very high energy after a stable octet is formed." },
              { "id": "h6", "question": "How does electronegativity affect bond type?", "answer": "A large difference leads to ionic bonds, small difference leads to covalent bonds." },
              { "id": "h7", "question": "Explain the covalent bonding in nitrogen molecule (N₂).", "answer": "N₂ has a triple bond formed by sharing three electron pairs." },
              { "id": "h8", "question": "Why does AlCl₃ show covalent character despite being ionic?", "answer": "Due to polarization of chloride ions by small, highly charged Al³⁺ ion." },
              { "id": "h9", "question": "How are dative bonds different from regular covalent bonds?", "answer": "In dative bonds, both electrons in the bond come from the same atom." },
              { "id": "h10", "question": "Predict the bond type in calcium oxide (CaO).", "answer": "Ionic bond, since calcium donates electrons to oxygen." }]
            }
          },
          {
            "id": "acids-bases-salts-10-icse",
            "title": "Acids, Bases and Salts",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What are acids?", "answer": "Acids are substances that produce hydrogen ions (H⁺) in aqueous solution." },
              { "id": "b2", "question": "What are bases?", "answer": "Bases are substances that produce hydroxide ions (OH⁻) in aqueous solution." },
              { "id": "b3", "question": "What is a salt?", "answer": "A salt is a compound formed when the hydrogen ion of an acid is replaced by a metal ion or ammonium ion." },
              { "id": "b4", "question": "What is the pH of a neutral solution?", "answer": "The pH of a neutral solution is 7." },
              { "id": "b5", "question": "Name one strong acid.", "answer": "Hydrochloric acid (HCl)." },
              { "id": "b6", "question": "Name one strong base.", "answer": "Sodium hydroxide (NaOH)." },
              { "id": "b7", "question": "What is litmus paper used for?", "answer": "Litmus paper is used to test whether a substance is acidic or basic." },
              { "id": "b8", "question": "What colour does blue litmus turn in acid?", "answer": "It turns red." },
              { "id": "b9", "question": "What is the chemical formula of sulfuric acid?", "answer": "H₂SO₄." },
              { "id": "b10", "question": "What is the taste of acids?", "answer": "Acids generally have a sour taste." }],
              "intermediate": [
                { "id": "i1", "question": "What is neutralization?", "answer": "Neutralization is a chemical reaction between an acid and a base to form salt and water." },
                { "id": "i2", "question": "What are indicators?", "answer": "Indicators are substances that change colour in acidic or basic solutions." },
                { "id": "i3", "question": "What is the pH range of acids?", "answer": "Acids have a pH less than 7." },
                { "id": "i4", "question": "Name a natural indicator.", "answer": "Turmeric." },
                { "id": "i5", "question": "What is the difference between a strong and weak acid?", "answer": "Strong acids completely ionize in water, while weak acids only partially ionize." },
                { "id": "i6", "question": "Write the reaction between HCl and NaOH.", "answer": "HCl + NaOH → NaCl + H₂O." },
                { "id": "i7", "question": "Why is phenolphthalein colourless in acid?", "answer": "Because phenolphthalein remains colourless in acidic medium and turns pink in basic medium." },
                { "id": "i8", "question": "What is a basic salt?", "answer": "A basic salt is formed when a weak acid reacts with a strong base." },
                { "id": "i9", "question": "Why is HCl considered a strong acid?", "answer": "Because it dissociates completely in water to produce H⁺ ions." },
                { "id": "i10", "question": "What is the nature of sodium carbonate solution?", "answer": "Basic." }
              ],
              "hard": [{ "id": "h1", "question": "What is the reaction of zinc with dilute hydrochloric acid?", "answer": "Zn + 2HCl → ZnCl₂ + H₂." },
              { "id": "h2", "question": "Explain the preparation of NaOH using electrolysis.", "answer": "Electrolysis of brine produces NaOH, chlorine gas, and hydrogen gas." },
              { "id": "h3", "question": "Why does dry HCl not turn blue litmus red?", "answer": "Because HCl does not ionize without water to produce H⁺ ions." },
              { "id": "h4", "question": "Write the equation for the reaction between sodium carbonate and hydrochloric acid.", "answer": "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂." },
              { "id": "h5", "question": "Explain why antacids are used for indigestion.", "answer": "Antacids neutralize excess stomach acid, relieving discomfort." },
              { "id": "h6", "question": "What happens when ammonium hydroxide reacts with nitric acid?", "answer": "NH₄OH + HNO₃ → NH₄NO₃ + H₂O." },
              { "id": "h7", "question": "Differentiate between normal salt and acidic salt.", "answer": "Normal salt comes from complete replacement of H⁺, acidic salt from partial replacement." },
              { "id": "h8", "question": "Why is the solution of baking soda alkaline?", "answer": "Because it produces hydroxide ions in water." },
              { "id": "h9", "question": "Explain why strong acids have low pH.", "answer": "Because they produce high concentration of H⁺ ions, lowering the pH." },
              { "id": "h10", "question": "Write the ionic equation for the neutralization of HCl and NaOH.", "answer": "H⁺ + OH⁻ → H₂O." }]
            }
          },
          {
            "id": "analytical-chemistry-10-icse",
            "title": "Analytical Chemistry",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is analytical chemistry?", "answer": "Analytical chemistry is the branch of chemistry that deals with the identification and quantification of substances." },
              { "id": "b2", "question": "What is a flame test?", "answer": "A flame test is a method to detect the presence of certain metal ions based on the colour of the flame produced." },
              { "id": "b3", "question": "What colour is produced by sodium in a flame test?", "answer": "Golden yellow." },
              { "id": "b4", "question": "What colour is produced by potassium in a flame test?", "answer": "Violet." },
              { "id": "b5", "question": "Which salt gives a brick-red flame in a flame test?", "answer": "Calcium salts." },
              { "id": "b6", "question": "What is a confirmatory test?", "answer": "It is a chemical test that confirms the presence of a specific ion." },
              { "id": "b7", "question": "What colour does copper give in a flame test?", "answer": "Bluish-green." },
              { "id": "b8", "question": "What reagent is used to test for ammonium ions?", "answer": "Sodium hydroxide (NaOH)." },
              { "id": "b9", "question": "What gas is released when ammonium salt is heated with NaOH?", "answer": "Ammonia gas (NH₃)." },
              { "id": "b10", "question": "What is the smell of ammonia gas?", "answer": "Pungent smell." }],
              "intermediate": [{ "id": "i1", "question": "How do you test for chloride ions?", "answer": "By adding silver nitrate solution; a white precipitate indicates chloride ions." },
              { "id": "i2", "question": "What happens when HCl is added to silver chloride?", "answer": "The white precipitate dissolves, confirming the presence of chloride ions." },
              { "id": "i3", "question": "What is the colour of the precipitate formed with lead nitrate and potassium iodide?", "answer": "Yellow precipitate of lead iodide (PbI₂)." },
              { "id": "i4", "question": "Which ion gives a green precipitate with sodium hydroxide?", "answer": "Iron (II) ions (Fe²⁺)." },
              { "id": "i5", "question": "Which ion gives a reddish-brown precipitate with NaOH?", "answer": "Iron (III) ions (Fe³⁺)." },
              { "id": "i6", "question": "Why is dilute nitric acid added before silver nitrate in chloride tests?", "answer": "To remove carbonate or sulfide ions which may interfere with the test." },
              { "id": "i7", "question": "How can you distinguish between carbonate and bicarbonate ions?", "answer": "By adding MgSO₄: carbonates form a white ppt immediately; bicarbonates do not." },
              { "id": "i8", "question": "Which gas turns lime water milky?", "answer": "Carbon dioxide (CO₂)." },
              { "id": "i9", "question": "How do you test for sulfate ions?", "answer": "Add barium chloride solution; a white precipitate confirms sulfate ions." },
              { "id": "i10", "question": "Which ion produces a deep blue solution with ammonium hydroxide?", "answer": "Copper (II) ions (Cu²⁺)." }],
              "hard": [{ "id": "h1", "question": "Write the equation for the reaction of NaOH with ammonium chloride.", "answer": "NH₄Cl + NaOH → NH₃ + NaCl + H₂O." },
              { "id": "h2", "question": "What is the formula and colour of the precipitate formed when Fe²⁺ reacts with NaOH?", "answer": "Fe(OH)₂, green precipitate." },
              { "id": "h3", "question": "Write the ionic equation for the test of chloride with AgNO₃.", "answer": "Cl⁻ + Ag⁺ → AgCl (white ppt)." },
              { "id": "h4", "question": "Explain how to test for nitrate ions.", "answer": "Add freshly prepared iron(II) sulfate, then concentrated sulfuric acid; a brown ring forms at the junction." },
              { "id": "h5", "question": "Write the equation for the brown ring test.", "answer": "NO₃⁻ + 3Fe²⁺ + 4H⁺ → NO + 3Fe³⁺ + 2H₂O (NO forms brown complex with Fe²⁺)." },
              { "id": "h6", "question": "How do you distinguish between Zn²⁺ and Al³⁺ with NaOH?", "answer": "Both give white ppt, but Zn(OH)₂ dissolves in excess NaOH; Al(OH)₃ does not." },
              { "id": "h7", "question": "What happens when Pb²⁺ reacts with potassium iodide?", "answer": "Yellow ppt of lead iodide (PbI₂) is formed." },
              { "id": "h8", "question": "Write the balanced equation for the reaction of CO₃²⁻ with HCl.", "answer": "CO₃²⁻ + 2H⁺ → CO₂ + H₂O." },
              { "id": "h9", "question": "Why is ammonium hydroxide added dropwise in cation analysis?", "answer": "To avoid masking the actual precipitate by excess ammonia." },
              { "id": "h10", "question": "What is the reaction between barium chloride and sulfuric acid?", "answer": "BaCl₂ + H₂SO₄ → BaSO₄ (white ppt) + 2HCl." }]
            }
          },
          {
            "id": "mole-concept-stoichiometry-10-icse",
            "title": "Mole Concept and Stoichiometry",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is a mole?", "answer": "A mole is the amount of substance containing 6.022 × 10²³ particles." },
              { "id": "b2", "question": "What is Avogadro’s number?", "answer": "6.022 × 10²³ particles/mol." },
              { "id": "b3", "question": "What is the molar mass of water?", "answer": "18 g/mol." },
              { "id": "b4", "question": "How many atoms are there in one mole of oxygen molecules (O₂)?", "answer": "2 × 6.022 × 10²³ = 1.204 × 10²⁴ atoms." },
              { "id": "b5", "question": "What is the formula for calculating moles?", "answer": "Moles = Given mass / Molar mass." },
              { "id": "b6", "question": "What is the unit of molar mass?", "answer": "Grams per mole (g/mol)." },
              { "id": "b7", "question": "What is the volume of one mole of a gas at STP?", "answer": "22.4 liters." },
              { "id": "b8", "question": "What is the molecular mass of CO₂?", "answer": "44 g/mol." },
              { "id": "b9", "question": "What is the number of particles in half a mole of a substance?", "answer": "3.011 × 10²³ particles." },
              { "id": "b10", "question": "What is stoichiometry?", "answer": "Stoichiometry is the calculation of reactants and products in chemical reactions." }
              ],
              "intermediate": [{ "id": "i1", "question": "Calculate the number of moles in 36 g of water.", "answer": "Moles = 36 ÷ 18 = 2 moles." },
              { "id": "i2", "question": "How many molecules are there in 2 moles of CO₂?", "answer": "2 × 6.022 × 10²³ = 1.204 × 10²⁴ molecules." },
              { "id": "i3", "question": "Find the mass of 0.5 moles of oxygen gas (O₂).", "answer": "Mass = 0.5 × 32 = 16 g." },
              { "id": "i4", "question": "How many atoms are there in 3 moles of hydrogen gas (H₂)?", "answer": "3 moles × 2 atoms/molecule × 6.022 × 10²³ = 3.613 × 10²⁴ atoms." },
              { "id": "i5", "question": "State Avogadro’s Law.", "answer": "Equal volumes of gases at the same temperature and pressure contain the same number of molecules." },
              { "id": "i6", "question": "How many litres are occupied by 3 moles of a gas at STP?", "answer": "3 × 22.4 = 67.2 litres." },
              { "id": "i7", "question": "What mass of CO₂ is produced from 1 mole of CaCO₃?", "answer": "44 g of CO₂." },
              { "id": "i8", "question": "Calculate the molecular mass of NH₃.", "answer": "14 + (3×1) = 17 g/mol." },
              { "id": "i9", "question": "What is the empirical formula?", "answer": "The simplest whole number ratio of atoms in a compound." },
              { "id": "i10", "question": "Differentiate between molecular mass and molar mass.", "answer": "Molecular mass is the sum of atomic masses; molar mass is its mass in grams per mole." }],
              "hard": [{ "id": "h1", "question": "Calculate the number of molecules in 5.6 L of oxygen gas at STP.", "answer": "Moles = 5.6 ÷ 22.4 = 0.25; Molecules = 0.25 × 6.022 × 10²³ = 1.506 × 10²³ molecules." },
              { "id": "h2", "question": "What volume of hydrogen gas at STP is required to react with 11.2 L of oxygen to form water?", "answer": "H₂:O₂ ratio is 2:1; Volume = 2 × 11.2 = 22.4 L of H₂." },
              { "id": "h3", "question": "Calculate the number of atoms in 18 g of water.", "answer": "Moles = 1; Molecules = 6.022 × 10²³; Atoms = 3 × 6.022 × 10²³ = 1.807 × 10²⁴ atoms." },
              { "id": "h4", "question": "From the equation 2H₂ + O₂ → 2H₂O, how many grams of water are formed from 4 g of H₂?", "answer": "Moles of H₂ = 2; Forms 2 moles of H₂O = 2 × 18 = 36 g." },
              { "id": "h5", "question": "What is the number of moles in 4.4 g of CO₂?", "answer": "4.4 ÷ 44 = 0.1 moles." },
              { "id": "h6", "question": "How many grams of calcium oxide are formed when 100 g of calcium carbonate is decomposed?", "answer": "CaCO₃ → CaO + CO₂; 100 ÷ 100 = 1 mole; 1 mole CaO = 56 g." },
              { "id": "h7", "question": "What is the percentage composition of H in H₂O?", "answer": "(2 × 1) / 18 × 100 = 11.11%." },
              { "id": "h8", "question": "Calculate the number of moles in 3.01 × 10²³ molecules of HCl.", "answer": "3.01 × 10²³ ÷ 6.022 × 10²³ = 0.5 moles." },
              { "id": "h9", "question": "If 8 g of H₂ reacts with O₂, what mass of water is formed?", "answer": "Moles of H₂ = 4; Forms 4 moles H₂O = 4 × 18 = 72 g." },
              { "id": "h10", "question": "Find the number of oxygen atoms in 4.4 g of CO₂.", "answer": "Moles = 0.1; Molecules = 6.022 × 10²²; O atoms = 2 × 6.022 × 10²² = 1.204 × 10²³ atoms." }]
            }
          },
          {
            "id": "electrolysis-10-icse",
            "title": "Electrolysis",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is electrolysis?", "answer": "Electrolysis is the chemical decomposition of a substance by passing an electric current through it." },
              { "id": "b2", "question": "What is an electrolyte?", "answer": "An electrolyte is a substance that conducts electricity when molten or in solution and undergoes chemical changes." },
              { "id": "b3", "question": "Name the two electrodes used in electrolysis.", "answer": "Cathode (negative) and Anode (positive)." },
              { "id": "b4", "question": "What is the charge on the cathode?", "answer": "Negative." },
              { "id": "b5", "question": "What is the charge on the anode?", "answer": "Positive." },
              { "id": "b6", "question": "Which electrode attracts cations?", "answer": "Cathode." },
              { "id": "b7", "question": "Which electrode attracts anions?", "answer": "Anode." },
              { "id": "b8", "question": "What type of reaction occurs at the cathode?", "answer": "Reduction." },
              { "id": "b9", "question": "What type of reaction occurs at the anode?", "answer": "Oxidation." },
              { "id": "b10", "question": "Give one example of a strong electrolyte.", "answer": "Sodium chloride (NaCl) solution." }],
              "intermediate": [{ "id": "i1", "question": "Define electroplating.", "answer": "Electroplating is the process of depositing a metal layer onto an object using electrolysis." },
              { "id": "i2", "question": "Name a commonly used electrolyte for electroplating copper.", "answer": "Copper sulphate solution." },
              { "id": "i3", "question": "Write the electrode reactions during electrolysis of molten lead bromide.", "answer": "Cathode: Pb²⁺ + 2e⁻ → Pb; Anode: 2Br⁻ → Br₂ + 2e⁻." },
              { "id": "i4", "question": "Why is direct current (DC) used in electrolysis instead of alternating current (AC)?", "answer": "Because DC provides a constant direction for electron flow, allowing ions to move toward respective electrodes." },
              { "id": "i5", "question": "What is the function of the cathode in electroplating?", "answer": "It is the object to be plated." },
              { "id": "i6", "question": "What happens to the electrolyte during electrolysis?", "answer": "It breaks down into ions, which move to electrodes and discharge." },
              { "id": "i7", "question": "What is a non-electrolyte?", "answer": "A substance that does not conduct electricity in molten or aqueous state." },
              { "id": "i8", "question": "Which metal is deposited at the cathode during electrolysis of copper sulphate using copper electrodes?", "answer": "Copper." },
              { "id": "i9", "question": "What is anodizing?", "answer": "Anodizing is the process of forming a protective oxide layer on metals using electrolysis." },
              { "id": "i10", "question": "State one use of electrolysis in industry.", "answer": "Purification of metals like copper." }],
              "hard": [{ "id": "h1", "question": "During electrolysis of acidified water, what are the products at the electrodes?", "answer": "Cathode: Hydrogen gas; Anode: Oxygen gas." },
              { "id": "h2", "question": "Write the reactions at both electrodes during the electrolysis of acidified water.", "answer": "Cathode: 2H⁺ + 2e⁻ → H₂; Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻." },
              { "id": "h3", "question": "Explain why graphite is used as an electrode in electrolysis.", "answer": "Because it is a good conductor and inert (does not react with electrolytes)." },
              { "id": "h4", "question": "Explain the principle of purification of copper by electrolysis.", "answer": "Impure copper is made the anode, pure copper the cathode, and copper ions from the anode are deposited at the cathode." },
              { "id": "h5", "question": "Describe how electrolysis is used in extracting aluminium.", "answer": "Alumina is dissolved in molten cryolite and electrolyzed; aluminium is deposited at cathode and oxygen at anode." },
              { "id": "h6", "question": "What is the Faraday’s First Law of Electrolysis?", "answer": "The mass of a substance deposited is directly proportional to the quantity of electricity passed." },
              { "id": "h7", "question": "Why is cryolite added in the electrolysis of alumina?", "answer": "To lower the melting point and increase conductivity." },
              { "id": "h8", "question": "Name the gas liberated at the anode during electrolysis of brine solution.", "answer": "Chlorine gas." },
              { "id": "h9", "question": "What will be observed at the cathode during electrolysis of copper sulphate with platinum electrodes?", "answer": "Brown copper metal will deposit." },
              { "id": "h10", "question": "Why is the electrolyte kept acidified during the electrolysis of water?", "answer": "To increase ion concentration and improve conductivity." }]
            }
          },
          {
            "id": "metallurgy-10-icse",
            "title": "Metallurgy",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is metallurgy?", "answer": "Metallurgy is the process of extracting metals from their ores and refining them." },
              { "id": "b2", "question": "What is an ore?", "answer": "An ore is a naturally occurring mineral from which a metal can be extracted profitably." },
              { "id": "b3", "question": "Name one ore of iron.", "answer": "Hematite (Fe₂O₃)." },
              { "id": "b4", "question": "Name one ore of aluminium.", "answer": "Bauxite (Al₂O₃·2H₂O)." },
              { "id": "b5", "question": "What is gangue?", "answer": "Gangue is the unwanted earthy or rocky material present in an ore." },
              { "id": "b6", "question": "What is the purpose of concentration of ore?", "answer": "To remove impurities (gangue) from the ore." },
              { "id": "b7", "question": "What is roasting?", "answer": "Roasting is heating the ore in the presence of oxygen to convert sulphide ores into oxides." },
              { "id": "b8", "question": "What is calcination?", "answer": "Calcination is heating the ore in absence of air to remove volatile impurities." },
              { "id": "b9", "question": "Name the reducing agent used in the extraction of iron.", "answer": "Carbon (as coke)." },
              { "id": "b10", "question": "What is smelting?", "answer": "Smelting is the process of extracting metal from its ore by heating and melting." }],
              "intermediate": [{ "id": "i1", "question": "Differentiate between mineral and ore.", "answer": "A mineral is a naturally occurring substance; an ore is a mineral from which metal can be extracted economically." },
              { "id": "i2", "question": "Name the main impurity in bauxite.", "answer": "Iron oxide (Fe₂O₃)." },
              { "id": "i3", "question": "State the function of flux in metallurgy.", "answer": "Flux combines with gangue to form slag, which is easily removable." },
              { "id": "i4", "question": "Give an example of a basic flux.", "answer": "Lime (CaO)." },
              { "id": "i5", "question": "What is slag?", "answer": "Slag is a fusible product formed when flux reacts with gangue during smelting." },
              { "id": "i6", "question": "Write the equation for the reduction of iron(III) oxide by carbon monoxide.", "answer": "Fe₂O₃ + 3CO → 2Fe + 3CO₂." },
              { "id": "i7", "question": "Why is aluminium extracted by electrolysis?", "answer": "Because it is highly reactive and cannot be extracted by reduction with carbon." },
              { "id": "i8", "question": "What is the function of cryolite in the extraction of aluminium?", "answer": "It lowers the melting point of alumina and increases conductivity." },
              { "id": "i9", "question": "What is the purpose of using coke in a blast furnace?", "answer": "Coke acts as both fuel and reducing agent." },
              { "id": "i10", "question": "Name two methods of ore concentration.", "answer": "Gravity separation and froth flotation." }],
              "hard": [{ "id": "h1", "question": "Write the balanced chemical equation for the reaction of bauxite with sodium hydroxide.", "answer": "Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O." },
              { "id": "h2", "question": "Explain the role of limestone in the extraction of iron.", "answer": "Limestone (CaCO₃) decomposes to CaO, which reacts with silica (SiO₂) to form slag (CaSiO₃)." },
              { "id": "h3", "question": "Write a chemical equation to show formation of slag in the blast furnace.", "answer": "CaO + SiO₂ → CaSiO₃." },
              { "id": "h4", "question": "What happens to the slag formed in a blast furnace?", "answer": "Slag floats on molten iron and is removed from the top." },
              { "id": "h5", "question": "Why is the blast furnace called so?", "answer": "Because a hot blast of air is blown into the furnace to aid combustion." },
              { "id": "h6", "question": "What is electrolytic refining?", "answer": "It is the process of purifying metals using electrolysis." },
              { "id": "h7", "question": "Why is carbon not used to reduce aluminium oxide?", "answer": "Aluminium is more reactive than carbon, so carbon cannot reduce its oxide." },
              { "id": "h8", "question": "What is the function of carbon monoxide in the blast furnace?", "answer": "It reduces Fe₂O₃ to Fe." },
              { "id": "h9", "question": "Write one chemical reaction to show the calcination of zinc carbonate.", "answer": "ZnCO₃ → ZnO + CO₂." },
              { "id": "h10", "question": "Why is it important to remove gangue before metal extraction?", "answer": "To improve efficiency and reduce cost of extraction." }]
            }
          },
          {
            "id": "hydrogen-chloride-10-icse",
            "title": "Study of Compounds: Hydrogen Chloride",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is the chemical formula of hydrogen chloride?", "answer": "HCl" },
              { "id": "b2", "question": "What is hydrochloric acid?", "answer": "It is an aqueous solution of hydrogen chloride gas." },
              { "id": "b3", "question": "What is the colour and smell of hydrogen chloride gas?", "answer": "It is a colourless gas with a pungent smell." },
              { "id": "b4", "question": "Is hydrogen chloride gas soluble in water?", "answer": "Yes, it is highly soluble in water." },
              { "id": "b5", "question": "Which acid is formed when HCl dissolves in water?", "answer": "Hydrochloric acid." },
              { "id": "b6", "question": "What is the action of HCl on litmus paper?", "answer": "It turns blue litmus red." },
              { "id": "b7", "question": "Which element combines with chlorine to form hydrogen chloride?", "answer": "Hydrogen." },
              { "id": "b8", "question": "Name a common use of hydrochloric acid.", "answer": "It is used in cleaning metals and removing rust." },
              { "id": "b9", "question": "Is HCl gas heavier or lighter than air?", "answer": "Heavier." },
              { "id": "b10", "question": "What happens when HCl reacts with ammonia gas?", "answer": "It forms dense white fumes of ammonium chloride." }],
              "intermediate": [{ "id": "i1", "question": "Why is HCl gas collected by upward displacement of air?", "answer": "Because it is heavier than air and highly soluble in water." },
              { "id": "i2", "question": "Why is HCl gas dried using concentrated sulfuric acid?", "answer": "Because concentrated sulfuric acid absorbs moisture without reacting with HCl." },
              { "id": "i3", "question": "Write the reaction for the laboratory preparation of HCl gas.", "answer": "NaCl + H₂SO₄ → NaHSO₄ + HCl↑" },
              { "id": "i4", "question": "Why can't HCl gas be dried using quicklime?", "answer": "Quicklime reacts with HCl, forming calcium chloride and water." },
              { "id": "i5", "question": "Which chemical property of HCl shows it is acidic?", "answer": "It turns blue litmus red and reacts with metals to liberate hydrogen." },
              { "id": "i6", "question": "What are the products when HCl reacts with Zn?", "answer": "Zinc chloride and hydrogen gas." },
              { "id": "i7", "question": "Why is the fountain experiment used in the study of HCl?", "answer": "To demonstrate the high solubility of HCl in water." },
              { "id": "i8", "question": "What is the observation when HCl reacts with silver nitrate?", "answer": "A white precipitate of silver chloride is formed." },
              { "id": "i9", "question": "Is HCl a covalent or ionic compound?", "answer": "It is covalent in the gaseous state but ionizes in aqueous solution." },
              { "id": "i10", "question": "Why does HCl conduct electricity in water but not in dry state?", "answer": "Because it ionizes in water to form H⁺ and Cl⁻ ions." }],
              "hard": [{ "id": "h1", "question": "Write the balanced chemical equation for the reaction of HCl with iron.", "answer": "Fe + 2HCl → FeCl₂ + H₂↑" },
              { "id": "h2", "question": "Explain why HCl does not show acidic properties in the absence of water.", "answer": "Because it does not ionize to produce hydrogen ions without water." },
              { "id": "h3", "question": "Write the reaction between HCl and calcium carbonate.", "answer": "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑" },
              { "id": "h4", "question": "State the ionic equation for the reaction between HCl and NaOH.", "answer": "H⁺ + OH⁻ → H₂O" },
              { "id": "h5", "question": "Why is glass apparatus not used in the storage of HCl gas?", "answer": "Because HCl corrodes glass by reacting with silica." },
              { "id": "h6", "question": "Describe the fountain experiment with HCl and explain the observation.", "answer": "When water enters the flask containing dry HCl, a red fountain is formed due to the absorption of HCl in water and pressure drop." },
              { "id": "h7", "question": "What are the conditions for the laboratory preparation of HCl gas?", "answer": "Cold concentrated sulfuric acid and dry sodium chloride." },
              { "id": "h8", "question": "Why is HCl considered a strong acid?", "answer": "Because it ionizes completely in aqueous solution." },
              { "id": "h9", "question": "Write the chemical reaction between HCl and silver nitrate with observation.", "answer": "AgNO₃ + HCl → AgCl↓ + HNO₃; white precipitate is formed." },
              { "id": "h10", "question": "Why is it important to avoid using water during HCl gas collection?", "answer": "Because HCl is highly soluble in water and would dissolve completely." }]
            }
          },
          {
            "id": "ammonia-10-icse",
            "title": "Study of Compounds: Ammonia",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is the chemical formula of ammonia?", "answer": "NH₃" },
              { "id": "b2", "question": "What is the physical state of ammonia at room temperature?", "answer": "It is a colorless gas." },
              { "id": "b3", "question": "What is the smell of ammonia gas?", "answer": "It has a pungent, irritating smell." },
              { "id": "b4", "question": "Is ammonia acidic or basic in nature?", "answer": "Basic." },
              { "id": "b5", "question": "What is the action of ammonia on moist red litmus paper?", "answer": "It turns red litmus blue." },
              { "id": "b6", "question": "What are the elements present in ammonia?", "answer": "Nitrogen and hydrogen." },
              { "id": "b7", "question": "What is the laboratory method of preparing ammonia?", "answer": "By heating ammonium chloride with slaked lime." },
              { "id": "b8", "question": "Which compound is used to dry ammonia gas?", "answer": "Quicklime (CaO)." },
              { "id": "b9", "question": "Why is ammonia collected by the downward displacement of air?", "answer": "Because it is lighter than air." },
              { "id": "b10", "question": "Is ammonia soluble in water?", "answer": "Yes, it is highly soluble in water." }],
              "intermediate": [{ "id": "i1", "question": "Write the balanced chemical equation for the lab preparation of ammonia.", "answer": "2NH₄Cl + Ca(OH)₂ → 2NH₃ + CaCl₂ + 2H₂O" },
              { "id": "i2", "question": "Why is glass wool used in the preparation of ammonia gas?", "answer": "To prevent the ammonium chloride from being carried away with the gas." },
              { "id": "i3", "question": "Why is quicklime used and not concentrated sulfuric acid to dry ammonia?", "answer": "Because ammonia reacts with acids but not with quicklime." },
              { "id": "i4", "question": "What happens when ammonia reacts with hydrogen chloride gas?", "answer": "It forms white dense fumes of ammonium chloride." },
              { "id": "i5", "question": "Why is ammonia considered a covalent compound?", "answer": "Because it consists of shared electron pairs between nitrogen and hydrogen atoms." },
              { "id": "i6", "question": "What is the shape of the ammonia molecule?", "answer": "Trigonal pyramidal." },
              { "id": "i7", "question": "What are the constituents of aqueous ammonia?", "answer": "NH₄OH (ammonium hydroxide)." },
              { "id": "i8", "question": "What happens when ammonia reacts with copper(II) oxide?", "answer": "It gives nitrogen gas and water, and reduces CuO to copper." },
              { "id": "i9", "question": "State one test to identify ammonia gas.", "answer": "It turns red litmus blue and forms dense white fumes with HCl gas." },
              { "id": "i10", "question": "Why is ammonia alkaline in nature?", "answer": "Because it forms hydroxide ions (OH⁻) in water." }],
              "hard": [{ "id": "h1", "question": "Write the reaction of ammonia with copper(II) oxide.", "answer": "3CuO + 2NH₃ → 3Cu + 3H₂O + N₂" },
              { "id": "h2", "question": "Explain why ammonia does not conduct electricity in the gaseous state.", "answer": "Because it does not have free ions in the gaseous state." },
              { "id": "h3", "question": "What is the industrial process used to manufacture ammonia?", "answer": "The Haber process." },
              { "id": "h4", "question": "Write the balanced equation for the Haber process.", "answer": "N₂ + 3H₂ ⇌ 2NH₃ (with Fe catalyst, 450°C, 200 atm)" },
              { "id": "h5", "question": "Why is the yield of ammonia low in the Haber process despite favorable conditions?", "answer": "Because the reaction is reversible and equilibrium limits the amount formed." },
              { "id": "h6", "question": "What role does iron play in the Haber process?", "answer": "It acts as a catalyst to increase the rate of the reaction." },
              { "id": "h7", "question": "Why is liquid ammonia used as a refrigerant?", "answer": "Because it absorbs a large amount of heat during evaporation." },
              { "id": "h8", "question": "Explain the formation of coordinate covalent bond in ammonia.", "answer": "The lone pair on nitrogen is donated to form a coordinate bond, e.g., in ammonium ion (NH₄⁺)." },
              { "id": "h9", "question": "Why is the aqueous solution of ammonia weakly alkaline?", "answer": "Because it only partially ionizes to give OH⁻ ions." },
              { "id": "h10", "question": "Write the reaction of ammonia with chlorine gas.", "answer": "2NH₃ + 3Cl₂ → N₂ + 6HCl (in excess Cl₂)" }]
            }
          },
          {
            "id": "nitric-acid-10-icse",
            "title": "Study of Compounds: Nitric Acid",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is the chemical formula of nitric acid?", "answer": "HNO₃" },
              { "id": "b2", "question": "Is nitric acid a strong or weak acid?", "answer": "Nitric acid is a strong acid." },
              { "id": "b3", "question": "What is the color of pure nitric acid?", "answer": "It is colorless." },
              { "id": "b4", "question": "What is the action of nitric acid on blue litmus paper?", "answer": "It turns blue litmus red." },
              { "id": "b5", "question": "Which non-metallic acid is used in making explosives?", "answer": "Nitric acid." },
              { "id": "b6", "question": "Which two acids form aqua regia?", "answer": "Nitric acid and hydrochloric acid." },
              { "id": "b7", "question": "What is aqua regia?", "answer": "A mixture of 3 parts HCl and 1 part HNO₃ used to dissolve noble metals." },
              { "id": "b8", "question": "Which compound is used to dry nitric acid?", "answer": "Concentrated sulfuric acid." },
              { "id": "b9", "question": "Which metal is used for the transport of nitric acid?", "answer": "Aluminium (due to passive layer formation)." },
              { "id": "b10", "question": "What is the action of nitric acid on litmus paper?", "answer": "It turns blue litmus red." }],
              "intermediate": [{ "id": "i1", "question": "Write the chemical equation for the lab preparation of nitric acid.", "answer": "NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃" },
              { "id": "i2", "question": "Why should nitric acid not be heated in glass apparatus for long?", "answer": "Because it is corrosive and attacks glass." },
              { "id": "i3", "question": "Why is nitric acid stored in dark bottles?", "answer": "Because it decomposes in sunlight." },
              { "id": "i4", "question": "Write the decomposition reaction of nitric acid.", "answer": "4HNO₃ → 4NO₂ + 2H₂O + O₂" },
              { "id": "i5", "question": "What happens when nitric acid reacts with copper?", "answer": "It produces NO₂ gas and a nitrate salt." },
              { "id": "i6", "question": "What is the brown ring test used for?", "answer": "To test for the presence of nitrate ions." },
              { "id": "i7", "question": "What is formed when nitric acid reacts with zinc?", "answer": "Zinc nitrate and hydrogen gas (with dilute acid)." },
              { "id": "i8", "question": "How does nitric acid react with calcium carbonate?", "answer": "It forms calcium nitrate, water, and carbon dioxide." },
              { "id": "i9", "question": "What is the action of nitric acid on proteins?", "answer": "It causes a yellow coloration (xanthoproteic reaction)." },
              { "id": "i10", "question": "What are nitrates?", "answer": "Salts formed when nitric acid reacts with metals or bases." }],
              "hard": [{ "id": "h1", "question": "Write the balanced equation for the oxidation of sulfur with nitric acid.", "answer": "S + 6HNO₃ → H₂SO₄ + 6NO₂ + 2H₂O" },
              { "id": "h2", "question": "Why does nitric acid not liberate hydrogen gas with metals like zinc?", "answer": "Because nitric acid acts as an oxidizing agent and converts hydrogen to water." },
              { "id": "h3", "question": "What is the role of nitric acid in the formation of nitrates?", "answer": "It donates the NO₃⁻ ion during neutralization." },
              { "id": "h4", "question": "Explain why nitric acid is a strong oxidizing agent.", "answer": "It readily releases nascent oxygen [O] during reactions." },
              { "id": "h5", "question": "Write the reaction of nitric acid with concentrated sulfuric acid and potassium nitrate.", "answer": "KNO₃ + H₂SO₄ → KHSO₄ + HNO₃" },
              { "id": "h6", "question": "Why is nitric acid not used for hydrogen gas preparation?", "answer": "Because it oxidizes hydrogen to water instead of releasing it." },
              { "id": "h7", "question": "Write a reaction showing nitric acid acting as an acid and oxidizing agent.", "answer": "Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O" },
              { "id": "h8", "question": "Explain the mechanism of the brown ring test for nitrates.", "answer": "Nitrate reacts with FeSO₄ and H₂SO₄ to form Fe²⁺–NO complex at the junction, appearing brown." },
              { "id": "h9", "question": "What is the industrial method of producing nitric acid?", "answer": "The Ostwald process." },
              { "id": "h10", "question": "Write the steps involved in the Ostwald process.", "answer": "Ammonia is oxidized to NO, then to NO₂, which is dissolved in water to produce HNO₃." }]
            }
          },
          {
            "id": "sulphuric-acid-10-icse",
            "title": "Study of Compounds: Sulphuric Acid",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is the chemical formula of sulphuric acid?", "answer": "H₂SO₄" },
              { "id": "b2", "question": "Is sulphuric acid a strong or weak acid?", "answer": "Sulphuric acid is a strong acid." },
              { "id": "b3", "question": "What is the color of pure sulphuric acid?", "answer": "It is colorless." },
              { "id": "b4", "question": "Is sulphuric acid oily in nature?", "answer": "Yes, it is a dense, oily liquid." },
              { "id": "b5", "question": "Is sulphuric acid soluble in water?", "answer": "Yes, it is highly soluble in water." },
              { "id": "b6", "question": "What precaution is taken while diluting sulphuric acid?", "answer": "Always add acid to water, not water to acid." },
              { "id": "b7", "question": "What is the action of sulphuric acid on blue litmus paper?", "answer": "It turns blue litmus red." },
              { "id": "b8", "question": "Which compound is called the ‘King of Chemicals’?", "answer": "Sulphuric acid." },
              { "id": "b9", "question": "Can sulphuric acid conduct electricity?", "answer": "Yes, when dissolved in water it conducts electricity." },
              { "id": "b10", "question": "What is the nature of sulphuric acid?", "answer": "It is dibasic and highly corrosive." }],
              "intermediate": [{ "id": "i1", "question": "What is the action of sulphuric acid on sugar?", "answer": "It dehydrates sugar to carbon and water." },
              { "id": "i2", "question": "Name a drying agent used in organic chemistry.", "answer": "Concentrated sulphuric acid." },
              { "id": "i3", "question": "What is the action of concentrated sulphuric acid on copper?", "answer": "It forms copper sulfate, sulfur dioxide, and water." },
              { "id": "i4", "question": "How does sulphuric acid act on carbon?", "answer": "It oxidizes carbon to carbon dioxide." },
              { "id": "i5", "question": "Write the equation for the preparation of sulphuric acid from sulfur trioxide.", "answer": "SO₃ + H₂O → H₂SO₄" },
              { "id": "i6", "question": "What is oleum?", "answer": "It is fuming sulphuric acid (H₂S₂O₇), a solution of SO₃ in H₂SO₄." },
              { "id": "i7", "question": "How is SO₃ obtained in the Contact process?", "answer": "By catalytic oxidation of SO₂ using vanadium pentoxide." },
              { "id": "i8", "question": "What catalyst is used in the Contact process?", "answer": "Vanadium(V) oxide (V₂O₅)." },
              { "id": "i9", "question": "What is the role of sulphuric acid in the manufacture of fertilizers?", "answer": "It is used to make superphosphate of lime and ammonium sulfate." },
              { "id": "i10", "question": "What is the action of sulphuric acid on metals like zinc?", "answer": "It forms zinc sulfate and hydrogen gas (with dilute acid)." }],
              "hard": [{ "id": "h1", "question": "Write the chemical reaction of sulphur dioxide with oxygen in the Contact process.", "answer": "2SO₂ + O₂ ⇌ 2SO₃ (in presence of V₂O₅)" },
              { "id": "h2", "question": "Why is sulphuric acid not added directly to water in the Contact process?", "answer": "Because the reaction is highly exothermic and dangerous." },
              { "id": "h3", "question": "What is the dehydrating property of sulphuric acid?", "answer": "It removes water from organic substances like sugar or oxalic acid." },
              { "id": "h4", "question": "Explain why concentrated sulphuric acid chars sugar.", "answer": "Because it removes water (H and OH) from sugar, leaving black carbon." },
              { "id": "h5", "question": "What are the three main steps in the Contact process?", "answer": "Burning sulfur to SO₂, oxidation to SO₃, and absorption into H₂SO₄." },
              { "id": "h6", "question": "Write the overall reaction in the Contact process for sulphuric acid.", "answer": "S + O₂ → SO₂; 2SO₂ + O₂ ⇌ 2SO₃; SO₃ + H₂O → H₂SO₄" },
              { "id": "h7", "question": "Why is the Contact process preferred over the Lead Chamber process?", "answer": "It is more efficient and produces concentrated acid." },
              { "id": "h8", "question": "What happens when sulphuric acid is mixed with hydrated salts?", "answer": "It removes water, forming anhydrous salts." },
              { "id": "h9", "question": "Why is sulphuric acid used in car batteries?", "answer": "It acts as the electrolyte in lead-acid batteries." },
              { "id": "h10", "question": "Explain why sulphuric acid is called a dibasic acid.", "answer": "Because it ionizes to give two H⁺ ions per molecule." }]
            }
          }
        ]
      },

      {
        "id": "biology-10-icse",
        "name": "Biology",
        "icon": "🌱",
        "color": "from-emerald-400 to-emerald-600",
        "chapters": [
          {
            "id": "basic-biology-10-icse",
            "title": "Basic Biology",
            "flashcards": {
              "beginner": [{ "id": "bb-b1", "question": "What is biology?", "answer": "Biology is the study of living organisms." },
              { "id": "bb-b2", "question": "What are cells?", "answer": "Cells are the basic units of life." },
              { "id": "bb-b3", "question": "Name any two unicellular organisms.", "answer": "Amoeba and Paramecium." },
              { "id": "bb-b4", "question": "What is a tissue?", "answer": "A group of similar cells that perform a specific function." },
              { "id": "bb-b5", "question": "What is an organ?", "answer": "An organ is a structure made up of different tissues working together." },
              { "id": "bb-b6", "question": "What is the function of the nucleus?", "answer": "The nucleus controls all cell activities." },
              { "id": "bb-b7", "question": "Name the green pigment in plants.", "answer": "Chlorophyll." },
              { "id": "bb-b8", "question": "What are the building blocks of proteins?", "answer": "Amino acids." },
              { "id": "bb-b9", "question": "What is the powerhouse of the cell?", "answer": "Mitochondria." },
              { "id": "bb-b10", "question": "Which gas do plants release during photosynthesis?", "answer": "Oxygen." }],
              "intermediate": [{ "id": "bb-i1", "question": "Differentiate between prokaryotic and eukaryotic cells.", "answer": "Prokaryotic cells lack a nucleus, eukaryotic cells have a nucleus." },
              { "id": "bb-i2", "question": "What is cytoplasm?", "answer": "Cytoplasm is the jelly-like substance where cell activities occur." },
              { "id": "bb-i3", "question": "What is the function of ribosomes?", "answer": "Ribosomes help in protein synthesis." },
              { "id": "bb-i4", "question": "Explain the term 'organ system'.", "answer": "An organ system is a group of organs working together to perform a major function." },
              { "id": "bb-i5", "question": "Name two plant tissues and their functions.", "answer": "Xylem transports water, phloem transports food." },
              { "id": "bb-i6", "question": "What is osmosis?", "answer": "Osmosis is the movement of water through a semi-permeable membrane." },
              { "id": "bb-i7", "question": "Define respiration in living organisms.", "answer": "Respiration is the process of breaking down glucose to release energy." },
              { "id": "bb-i8", "question": "How does the cell membrane function?", "answer": "It controls what enters and exits the cell." },
              { "id": "bb-i9", "question": "What are stem cells?", "answer": "Stem cells are undifferentiated cells that can develop into various cell types." },
              { "id": "bb-i10", "question": "Why is the cell called the structural and functional unit of life?", "answer": "Because all life processes occur within cells." }],
              "hard": [{ "id": "bb-h1", "question": "Describe the structure and function of mitochondria.", "answer": "Mitochondria have a double membrane and produce ATP, the cell's energy currency." },
              { "id": "bb-h2", "question": "Explain the significance of lysosomes.", "answer": "Lysosomes digest cellular waste and foreign materials." },
              { "id": "bb-h3", "question": "Compare plant and animal cells with three differences.", "answer": "Plant cells have a cell wall, chloroplasts, and large vacuoles; animal cells do not." },
              { "id": "bb-h4", "question": "What is endoplasmic reticulum and its types?", "answer": "ER is a membrane system; rough ER synthesizes proteins, smooth ER synthesizes lipids." },
              { "id": "bb-h5", "question": "Explain the role of golgi apparatus.", "answer": "It modifies, packages, and transports proteins and lipids." },
              { "id": "bb-h6", "question": "Define diffusion and explain its role in cell transport.", "answer": "Diffusion is the movement of particles from high to low concentration; it helps move substances in and out of cells." },
              { "id": "bb-h7", "question": "How do multicellular organisms benefit from having specialized cells?", "answer": "Specialized cells increase efficiency in performing complex tasks." },
              { "id": "bb-h8", "question": "Describe the fluid mosaic model of the cell membrane.", "answer": "It's a model where the membrane is flexible, made of lipids and proteins that move fluidly." },
              { "id": "bb-h9", "question": "What are plastids and their types?", "answer": "Plastids are organelles in plant cells; types include chloroplasts, chromoplasts, and leucoplasts." },
              { "id": "bb-h10", "question": "Explain how cell specialization leads to tissue formation.", "answer": "Specialized cells group together to perform specific functions, forming tissues." }]
            }
          },
          {
            "id": "plant-physiology-10-icse",
            "title": "Plant Physiology",
            "flashcards": {
              "beginner": [{ "id": "pp-b1", "question": "What is photosynthesis?", "answer": "The process by which green plants make food using sunlight, carbon dioxide, and water." },
              { "id": "pp-b2", "question": "Which pigment is essential for photosynthesis?", "answer": "Chlorophyll." },
              { "id": "pp-b3", "question": "What are stomata?", "answer": "Small openings on leaves that allow gas exchange." },
              { "id": "pp-b4", "question": "What is transpiration?", "answer": "Loss of water in the form of vapor from plant leaves." },
              { "id": "pp-b5", "question": "What is the main function of roots?", "answer": "To absorb water and minerals from the soil." },
              { "id": "pp-b6", "question": "Which gas is taken in during photosynthesis?", "answer": "Carbon dioxide." },
              { "id": "pp-b7", "question": "What is the function of xylem?", "answer": "To transport water and minerals from roots to leaves." },
              { "id": "pp-b8", "question": "What is a chloroplast?", "answer": "An organelle in plant cells where photosynthesis takes place." },
              { "id": "pp-b9", "question": "Name the products of photosynthesis.", "answer": "Glucose and oxygen." },
              { "id": "pp-b10", "question": "What part of the plant carries food?", "answer": "Phloem." }
              ],
              "intermediate": [{ "id": "pp-i1", "question": "How do guard cells control the opening of stomata?", "answer": "They swell or shrink to open or close the stomata depending on water content." },
              { "id": "pp-i2", "question": "Why is sunlight necessary for photosynthesis?", "answer": "It provides the energy to convert carbon dioxide and water into glucose." },
              { "id": "pp-i3", "question": "What is the role of phloem?", "answer": "Phloem transports food from leaves to other parts of the plant." },
              { "id": "pp-i4", "question": "Define phototropism.", "answer": "Growth of plants towards light." },
              { "id": "pp-i5", "question": "Explain the importance of transpiration.", "answer": "It cools the plant, helps in nutrient transport, and maintains water movement." },
              { "id": "pp-i6", "question": "Differentiate between autotrophs and heterotrophs.", "answer": "Autotrophs make their own food; heterotrophs depend on others for food." },
              { "id": "pp-i7", "question": "What happens to starch formed in photosynthesis?", "answer": "It is stored in leaves or transported for use or storage." },
              { "id": "pp-i8", "question": "State two factors affecting photosynthesis.", "answer": "Light intensity and carbon dioxide concentration." },
              { "id": "pp-i9", "question": "Why do plants wilt?", "answer": "Due to excessive water loss through transpiration." },
              { "id": "pp-i10", "question": "How are minerals transported in plants?", "answer": "Through xylem along with water." }
              ],
              "hard": [{ "id": "pp-h1", "question": "Describe an experiment to prove oxygen is released during photosynthesis.", "answer": "Place a water plant in sunlight under water. Bubbles collected in an inverted test tube prove oxygen release." },
              { "id": "pp-h2", "question": "Explain the structure of a chloroplast.", "answer": "It has a double membrane, thylakoids stacked into grana, and stroma fluid." },
              { "id": "pp-h3", "question": "Why is transpiration considered a necessary evil?", "answer": "It causes water loss but is vital for cooling and nutrient transport." },
              { "id": "pp-h4", "question": "How does the rate of photosynthesis change with temperature?", "answer": "It increases up to a point and then decreases if too hot." },
              { "id": "pp-h5", "question": "Describe the pathway of water from roots to leaves.", "answer": "Water is absorbed by root hairs, enters xylem, and is pulled up by transpiration pull to leaves." },
              { "id": "pp-h6", "question": "What are the raw materials for photosynthesis and their sources?", "answer": "CO₂ from air, water from soil, and sunlight." },
              { "id": "pp-h7", "question": "Explain how turgor pressure affects plant physiology.", "answer": "It maintains cell rigidity and helps in stomatal opening and movement." },
              { "id": "pp-h8", "question": "Compare photosynthesis and respiration in plants.", "answer": "Photosynthesis stores energy; respiration releases it." },
              { "id": "pp-h9", "question": "How is transpiration measured experimentally?", "answer": "Using a potometer to measure water loss." },
              { "id": "pp-h10", "question": "What adaptations reduce transpiration in desert plants?", "answer": "Thick cuticles, reduced leaf surface area, and sunken stomata." }]
            }
          },
          {
            "id": "human-anatomy-physiology-10-icse",
            "title": "Human Anatomy & Physiology",
            "flashcards": {
              "beginner": [{ "id": "hap-b1", "question": "What is the function of the heart?", "answer": "To pump blood throughout the body." },
              { "id": "hap-b2", "question": "Name the organ responsible for breathing.", "answer": "Lungs." },
              { "id": "hap-b3", "question": "What is the main function of the kidneys?", "answer": "To filter waste from the blood and form urine." },
              { "id": "hap-b4", "question": "Which part of the body controls all activities?", "answer": "Brain." },
              { "id": "hap-b5", "question": "Name the basic unit of the nervous system.", "answer": "Neuron." },
              { "id": "hap-b6", "question": "How many chambers does the human heart have?", "answer": "Four chambers." },
              { "id": "hap-b7", "question": "Which organ helps in digestion of food?", "answer": "Stomach." },
              { "id": "hap-b8", "question": "What is the function of red blood cells?", "answer": "To carry oxygen to different parts of the body." },
              { "id": "hap-b9", "question": "What is a pulse?", "answer": "The rhythmic throbbing of arteries due to the beating of the heart." },
              { "id": "hap-b10", "question": "What is the name of the largest bone in the body?", "answer": "Femur." }],
              "intermediate": [{ "id": "hap-i1", "question": "What is the function of valves in the heart?", "answer": "To prevent the backflow of blood." },
              { "id": "hap-i2", "question": "How is oxygen transported in the blood?", "answer": "By hemoglobin in red blood cells." },
              { "id": "hap-i3", "question": "Name the parts of the human respiratory system.", "answer": "Nose, trachea, bronchi, lungs." },
              { "id": "hap-i4", "question": "What are sensory nerves?", "answer": "Nerves that carry messages from sense organs to the brain." },
              { "id": "hap-i5", "question": "What is the function of the cerebellum?", "answer": "To coordinate muscle movements and maintain posture." },
              { "id": "hap-i6", "question": "Define reflex action.", "answer": "A quick, automatic response to a stimulus." },
              { "id": "hap-i7", "question": "What is the role of bile in digestion?", "answer": "Bile helps in breaking down fats into smaller droplets." },
              { "id": "hap-i8", "question": "Why are alveoli important in respiration?", "answer": "They are the site for exchange of gases in the lungs." },
              { "id": "hap-i9", "question": "What is the function of platelets?", "answer": "To help in clotting of blood." },
              { "id": "hap-i10", "question": "Name the different types of blood cells.", "answer": "Red blood cells, white blood cells, and platelets." }],
              "hard": [{ "id": "hap-h1", "question": "Describe the path of blood circulation through the heart.", "answer": "Blood enters the right atrium → right ventricle → lungs → left atrium → left ventricle → rest of the body." },
              { "id": "hap-h2", "question": "Explain how the nephron filters blood in the kidney.", "answer": "It filters blood in the glomerulus and reabsorbs useful substances in the tubule." },
              { "id": "hap-h3", "question": "What is the difference between pulmonary and systemic circulation?", "answer": "Pulmonary circulation sends blood to lungs; systemic sends it to the rest of the body." },
              { "id": "hap-h4", "question": "How does the diaphragm function during breathing?", "answer": "It contracts and moves down during inhalation, and relaxes during exhalation." },
              { "id": "hap-h5", "question": "Describe the role of hormones in regulating human body functions.", "answer": "Hormones act as chemical messengers regulating processes like growth and metabolism." },
              { "id": "hap-h6", "question": "Explain the cardiac cycle.", "answer": "It includes atrial contraction, ventricular contraction, and relaxation (diastole) in sequence." },
              { "id": "hap-h7", "question": "What is synapse and its function in nerve transmission?", "answer": "A synapse is a junction between two neurons where neurotransmitters help transmit impulses." },
              { "id": "hap-h8", "question": "Differentiate between arteries and veins.", "answer": "Arteries carry blood away from the heart; veins carry blood to the heart." },
              { "id": "hap-h9", "question": "How is carbon dioxide transported in the blood?", "answer": "Mostly as bicarbonate ions, and some bound to hemoglobin." },
              { "id": "hap-h10", "question": "Explain the feedback mechanism in hormone control using an example.", "answer": "E.g., Insulin controls blood sugar; if sugar rises, insulin is released to lower it." }]
            }
          },
          {
            "id": "population-10-icse",
            "title": "Population",
            "flashcards": {
              "beginner": [{ "id": "pop-b1", "question": "What is population?", "answer": "Population is the number of individuals of a species living in a specific area." },
              { "id": "pop-b2", "question": "Name one factor that affects population size.", "answer": "Birth rate." },
              { "id": "pop-b3", "question": "What is the meaning of 'overpopulation'?", "answer": "It means too many people living in a particular area compared to resources available." },
              { "id": "pop-b4", "question": "How does birth rate affect population growth?", "answer": "Higher birth rate increases population." },
              { "id": "pop-b5", "question": "What is death rate?", "answer": "It is the number of deaths per 1,000 individuals in a year." },
              { "id": "pop-b6", "question": "What is emigration?", "answer": "It is the movement of people out of a country or region." },
              { "id": "pop-b7", "question": "What is immigration?", "answer": "It is the movement of people into a country or region." },
              { "id": "pop-b8", "question": "What does census mean?", "answer": "A census is an official count of the population." },
              { "id": "pop-b9", "question": "When is the population said to be stable?", "answer": "When birth rate and death rate are equal." },
              { "id": "pop-b10", "question": "Name one resource that gets affected by overpopulation.", "answer": "Water." }],
              "intermediate": [{ "id": "pop-i1", "question": "Define population density.", "answer": "It is the number of individuals per unit area." },
              { "id": "pop-i2", "question": "How does education help in controlling population?", "answer": "It raises awareness about family planning and health." },
              { "id": "pop-i3", "question": "What is family planning?", "answer": "Family planning involves controlling the number and timing of children in a family." },
              { "id": "pop-i4", "question": "Mention two effects of overpopulation on the environment.", "answer": "Deforestation and pollution." },
              { "id": "pop-i5", "question": "Name one economic impact of high population growth.", "answer": "Increased unemployment." },
              { "id": "pop-i6", "question": "What are natural resources?", "answer": "Resources found in nature like air, water, and minerals." },
              { "id": "pop-i7", "question": "What is the role of government in population control?", "answer": "It can provide education and healthcare services to promote family planning." },
              { "id": "pop-i8", "question": "Why is urbanization linked with population growth?", "answer": "More people move to cities for jobs, increasing urban population." },
              { "id": "pop-i9", "question": "Explain how food supply is affected by population growth.", "answer": "More people mean more food demand, possibly leading to shortages." },
              { "id": "pop-i10", "question": "What are the consequences of a falling death rate on population?", "answer": "It leads to population increase." }],
              "hard": [{ "id": "pop-h1", "question": "Explain the concept of population explosion.", "answer": "A rapid increase in population due to declining death rate and high birth rate." },
              { "id": "pop-h2", "question": "Describe the effects of population growth on healthcare systems.", "answer": "Overpopulation burdens hospitals, doctors, and medical resources, reducing quality of care." },
              { "id": "pop-h3", "question": "How does overpopulation lead to increased pollution?", "answer": "More people create more waste, increasing air, water, and land pollution." },
              { "id": "pop-h4", "question": "Explain the link between poverty and population growth.", "answer": "High population can strain jobs and resources, increasing poverty." },
              { "id": "pop-h5", "question": "What is the demographic transition model?", "answer": "It explains population changes in stages from high birth/death rates to low rates." },
              { "id": "pop-h6", "question": "Why is sustainable development important in population control?", "answer": "To meet present needs without compromising future generations." },
              { "id": "pop-h7", "question": "How do migration patterns influence population distribution?", "answer": "They cause uneven population spread, affecting urban and rural planning." },
              { "id": "pop-h8", "question": "Describe the effect of overpopulation on biodiversity.", "answer": "It leads to habitat destruction, endangering many species." },
              { "id": "pop-h9", "question": "Why do developing countries face more population challenges?", "answer": "Due to lack of education, poverty, and limited healthcare access." },
              { "id": "pop-h10", "question": "How do economic incentives help in population control?", "answer": "Governments may offer benefits for small families or sterilization programs." }]
            }
          },
          {
            "id": "human-evolution-10-icse",
            "title": "Human Evolution",
            "flashcards": {
              "beginner": [{ "id": "he-b1", "question": "What is evolution?", "answer": "Evolution is the gradual change in living organisms over time." },
              { "id": "he-b2", "question": "What does 'human evolution' mean?", "answer": "It refers to the changes that led to the development of modern humans." },
              { "id": "he-b3", "question": "Who proposed the theory of evolution?", "answer": "Charles Darwin." },
              { "id": "he-b4", "question": "What is the scientific name of modern humans?", "answer": "Homo sapiens." },
              { "id": "he-b5", "question": "Name one ancestor of modern humans.", "answer": "Homo erectus." },
              { "id": "he-b6", "question": "What is meant by ‘survival of the fittest’?", "answer": "Organisms best suited to their environment survive and reproduce." },
              { "id": "he-b7", "question": "What type of tools did early humans use?", "answer": "Stone tools." },
              { "id": "he-b8", "question": "What is natural selection?", "answer": "It is the process where organisms better adapted to their environment tend to survive and reproduce." },
              { "id": "he-b9", "question": "Where did early humans first appear?", "answer": "In Africa." },
              { "id": "he-b10", "question": "What is a fossil?", "answer": "The preserved remains of ancient organisms." }],
              "intermediate": [{ "id": "he-i1", "question": "What are hominids?", "answer": "Hominids are a family of primates that includes humans and their ancestors." },
              { "id": "he-i2", "question": "Explain the importance of bipedalism in human evolution.", "answer": "Bipedalism freed the hands for tool use and increased visibility." },
              { "id": "he-i3", "question": "What is the role of fossils in understanding evolution?", "answer": "Fossils provide evidence of how organisms changed over time." },
              { "id": "he-i4", "question": "What is mutation and how does it relate to evolution?", "answer": "A mutation is a change in DNA, which can introduce new traits in a species." },
              { "id": "he-i5", "question": "Name two important fossil sites for human evolution.", "answer": "Olduvai Gorge (Tanzania) and Hadar (Ethiopia)." },
              { "id": "he-i6", "question": "What does the term 'missing link' refer to?", "answer": "It refers to transitional fossils that show traits of both ancestors and modern species." },
              { "id": "he-i7", "question": "How did the development of brain size influence evolution?", "answer": "Larger brains allowed for complex thinking, tool use, and social behavior." },
              { "id": "he-i8", "question": "Name any two species that are considered ancestors of Homo sapiens.", "answer": "Homo habilis and Homo erectus." },
              { "id": "he-i9", "question": "How did climate change affect human evolution?", "answer": "It forced early humans to adapt to new environments, driving evolution." },
              { "id": "he-i10", "question": "What is the significance of tool-making in human evolution?", "answer": "It marks the beginning of intelligence and problem-solving skills." }],
              "hard": [{ "id": "he-h1", "question": "Describe the Out of Africa theory.", "answer": "It proposes that modern humans evolved in Africa and migrated to other parts of the world." },
              { "id": "he-h2", "question": "Differentiate between Homo habilis and Homo erectus.", "answer": "Homo habilis had a smaller brain and used simpler tools; Homo erectus had a larger brain and used fire." },
              { "id": "he-h3", "question": "How did genetic variation lead to human evolution?", "answer": "It introduced new traits, some of which were beneficial for survival and passed on." },
              { "id": "he-h4", "question": "What is adaptive radiation in the context of evolution?", "answer": "It is the process where organisms diversify rapidly into new forms due to environmental changes." },
              { "id": "he-h5", "question": "Explain the significance of Lucy (Australopithecus afarensis) in evolutionary studies.", "answer": "Lucy is a well-preserved early hominid fossil showing evidence of bipedalism." },
              { "id": "he-h6", "question": "How does mitochondrial DNA help trace human ancestry?", "answer": "It is passed from mother to child and can be used to trace maternal lineages." },
              { "id": "he-h7", "question": "Describe the role of fire in human development.", "answer": "Fire allowed cooking, protection, and warmth, aiding survival and socialization." },
              { "id": "he-h8", "question": "What are vestigial organs and how do they relate to evolution?", "answer": "They are body parts that have lost their function, indicating evolutionary history." },
              { "id": "he-h9", "question": "How does the theory of punctuated equilibrium differ from gradualism?", "answer": "It suggests evolution happens in rapid bursts followed by stability, unlike slow continuous change." },
              { "id": "he-h10", "question": "Explain co-evolution with an example in human evolution.", "answer": "Co-evolution is when two species evolve in response to each other; e.g., humans and pathogens." }]
            }
          },
          {
            "id": "pollution-10-icse",
            "title": "Pollution",
            "flashcards": {
              "beginner": [{ "id": "poll-b1", "question": "What is pollution?", "answer": "Pollution is the contamination of the environment by harmful substances." },
              { "id": "poll-b2", "question": "Name two types of pollution.", "answer": "Air pollution and water pollution." },
              { "id": "poll-b3", "question": "What are pollutants?", "answer": "Pollutants are harmful substances that cause pollution." },
              { "id": "poll-b4", "question": "What is air pollution?", "answer": "Air pollution is the presence of harmful substances in the air." },
              { "id": "poll-b5", "question": "What is water pollution?", "answer": "Water pollution is the contamination of water bodies like rivers and lakes." },
              { "id": "poll-b6", "question": "What is noise pollution?", "answer": "Noise pollution is the presence of excessive or harmful sound in the environment." },
              { "id": "poll-b7", "question": "Name one source of water pollution.", "answer": "Sewage discharge into rivers." },
              { "id": "poll-b8", "question": "What is a biodegradable pollutant?", "answer": "A pollutant that can be broken down by natural processes." },
              { "id": "poll-b9", "question": "Give one example of a non-biodegradable pollutant.", "answer": "Plastic." },
              { "id": "poll-b10", "question": "Name one effect of pollution on human health.", "answer": "It can cause respiratory problems." }],
              "intermediate": [{ "id": "poll-i1", "question": "What is the greenhouse effect?", "answer": "It is the trapping of heat in Earth's atmosphere by greenhouse gases." },
              { "id": "poll-i2", "question": "How does air pollution affect the ozone layer?", "answer": "It depletes the ozone layer, increasing UV radiation on Earth." },
              { "id": "poll-i3", "question": "What are the sources of soil pollution?", "answer": "Industrial waste, pesticides, and chemical fertilizers." },
              { "id": "poll-i4", "question": "What is acid rain?", "answer": "Rain that contains acidic compounds formed from air pollutants like sulfur dioxide." },
              { "id": "poll-i5", "question": "Name two effects of water pollution on aquatic life.", "answer": "It reduces oxygen levels and can kill aquatic organisms." },
              { "id": "poll-i6", "question": "What is eutrophication?", "answer": "It is the excessive growth of algae due to nutrient pollution in water." },
              { "id": "poll-i7", "question": "What are the effects of noise pollution?", "answer": "It can cause stress, hearing loss, and sleep disturbances." },
              { "id": "poll-i8", "question": "How do plastics pollute the environment?", "answer": "They persist in the environment and harm wildlife and soil quality." },
              { "id": "poll-i9", "question": "What is thermal pollution?", "answer": "A rise in the temperature of water bodies due to industrial waste heat." },
              { "id": "poll-i10", "question": "What are green fuels?", "answer": "Fuels that are environmentally friendly and produce less pollution." }],
              "hard": [{ "id": "poll-h1", "question": "Explain the process of biomagnification.", "answer": "It is the increase in concentration of pollutants in organisms at higher levels of the food chain." },
              { "id": "poll-h2", "question": "Describe how CFCs damage the ozone layer.", "answer": "CFCs release chlorine atoms that break down ozone molecules in the stratosphere." },
              { "id": "poll-h3", "question": "What are the long-term effects of soil pollution?", "answer": "Reduced fertility, crop yield, and contamination of food." },
              { "id": "poll-h4", "question": "How can urbanization contribute to air pollution?", "answer": "By increasing vehicle emissions and construction dust." },
              { "id": "poll-h5", "question": "What role do wetlands play in pollution control?", "answer": "Wetlands filter pollutants and help purify water." },
              { "id": "poll-h6", "question": "Explain how oil spills affect marine life.", "answer": "Oil coats feathers/fur, poisons marine organisms, and reduces oxygen exchange." },
              { "id": "poll-h7", "question": "What is an environmental impact assessment?", "answer": "A study to predict the environmental effects of a proposed project." },
              { "id": "poll-h8", "question": "How does deforestation lead to increased pollution?", "answer": "It reduces trees that absorb CO₂ and increases soil erosion." },
              { "id": "poll-h9", "question": "What are the key components of waste management to reduce pollution?", "answer": "Reduce, reuse, recycle, composting, and proper disposal." },
              { "id": "poll-h10", "question": "How do heavy metals in water cause pollution?", "answer": "They are toxic, non-biodegradable, and accumulate in organisms." }]
            }
          }
        ]
      },

      {
        "id": "mathematics-10-icse",
        "name": "Mathematics",
        "icon": "📐",
        "color": "from-purple-400 to-purple-600",
        "chapters": [
          {
            "id": "gst-10-icse",
            "title": "Goods and Services Tax (GST)",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What does GST stand for?", "answer": "GST stands for Goods and Services Tax." },
              { "id": "b2", "question": "Is GST a direct or indirect tax?", "answer": "GST is an indirect tax." },
              { "id": "b3", "question": "Name one tax that GST has replaced.", "answer": "GST replaced Value Added Tax (VAT)." },
              { "id": "b4", "question": "What is the full form of CGST?", "answer": "CGST stands for Central Goods and Services Tax." },
              { "id": "b5", "question": "What is the full form of SGST?", "answer": "SGST stands for State Goods and Services Tax." },
              { "id": "b6", "question": "When was GST implemented in India?", "answer": "GST was implemented on 1st July 2017." },
              { "id": "b7", "question": "Name a tax applicable before GST.", "answer": "Excise duty was applicable before GST." },
              { "id": "b8", "question": "Who collects CGST?", "answer": "The Central Government collects CGST." },
              { "id": "b9", "question": "Who collects SGST?", "answer": "The State Government collects SGST." },
              { "id": "b10", "question": "Is GST charged on both goods and services?", "answer": "Yes, GST is charged on both goods and services." }],
              "intermediate": [{ "id": "i1", "question": "If an item costs ₹500 and GST is 18%, what is the GST amount?", "answer": "₹90" },
              { "id": "i2", "question": "An article costs ₹800 before GST. What will be the price after 12% GST?", "answer": "₹896" },
              { "id": "i3", "question": "How is total GST split between CGST and SGST?", "answer": "Equally between the Centre and the State." },
              { "id": "i4", "question": "If CGST = 9% and SGST = 9%, what is the total GST rate?", "answer": "18%" },
              { "id": "i5", "question": "What is the final price of an item costing ₹600 with 5% GST?", "answer": "₹630" },
              { "id": "i6", "question": "What is the GST paid on ₹1200 at 28%?", "answer": "₹336" },
              { "id": "i7", "question": "A customer pays ₹1060 for a product (including 6% GST). What is the original price?", "answer": "₹1000" },
              { "id": "i8", "question": "How do you find the pre-GST price from a GST-inclusive price?", "answer": "Divide by (1 + GST rate/100)" },
              { "id": "i9", "question": "A ₹2000 item is taxed at 18%. How much goes to the State?", "answer": "₹180 (half of ₹360)" },
              { "id": "i10", "question": "How is GST useful for transparency in tax collection?", "answer": "It removes multiple cascading taxes and makes taxation uniform." }],
              "hard": [{ "id": "h1", "question": "Calculate GST: A product costs ₹1000 with 18% GST. What is the final price?", "answer": "Final price = ₹1000 + 18% of ₹1000 = ₹1180." },
              { "id": "h2", "question": "Calculate SGST and CGST on ₹2000 at 12% GST rate.", "answer": "SGST = ₹1200 * 6% = ₹120, CGST = ₹120." },
              { "id": "h3", "question": "A dealer buys goods for ₹800 and sells for ₹1000. GST rate is 18%. Find GST payable.", "answer": "GST on sale = ₹180; GST on purchase = ₹144; GST payable = ₹36." },
              { "id": "h4", "question": "Explain cascading effect and how GST avoids it.", "answer": "Cascading effect is tax on tax. GST avoids it via input tax credit." },
              { "id": "h5", "question": "Find the tax component in MRP ₹590 (inclusive of 18% GST).", "answer": "Tax = ₹90, base price = ₹500." },
              { "id": "h6", "question": "List three challenges in GST implementation.", "answer": "Technical glitches, compliance burden, state revenue concerns." },
              { "id": "h7", "question": "A trader paid ₹5400 GST on output and ₹4800 on input. What is net GST payable?", "answer": "Net GST payable = ₹600." },
              { "id": "h8", "question": "State the impact of GST on small businesses.", "answer": "Increased compliance, but greater transparency and input tax credit." },
              { "id": "h9", "question": "A product is sold from Delhi to Mumbai. What type of GST applies?", "answer": "IGST applies for inter-state sales." },
              { "id": "h10", "question": "How does e-invoicing work in GST?", "answer": "E-invoicing ensures invoices are registered with GSTN in real-time." }]
            }
          },
          {
            "id": "banking-10-icse",
            "title": "Banking",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is a bank?", "answer": "A bank is a financial institution that accepts deposits and lends money." },
              { "id": "b2", "question": "What is an account holder?", "answer": "A person who holds an account in a bank." },
              { "id": "b3", "question": "What is a savings account?", "answer": "An account that allows you to save money and earn interest." },
              { "id": "b4", "question": "What is a fixed deposit?", "answer": "Money deposited for a fixed time at a fixed interest rate." },
              { "id": "b5", "question": "What is the full form of ATM?", "answer": "Automated Teller Machine." },
              { "id": "b6", "question": "What is a cheque?", "answer": "A written order to a bank to pay money." },
              { "id": "b7", "question": "What is interest?", "answer": "Money earned or paid for using money." },
              { "id": "b8", "question": "What is the formula for simple interest?", "answer": "SI = (P × R × T) / 100" },
              { "id": "b9", "question": "What does 'P' stand for in the interest formula?", "answer": "Principal – the original amount of money." },
              { "id": "b10", "question": "Name one function of a bank.", "answer": "Accepting deposits or lending money." }],
              "intermediate": [{ "id": "i1", "question": "Find the simple interest on ₹5000 at 4% per annum for 3 years.", "answer": "₹600" },
              { "id": "i2", "question": "Find the interest earned on ₹8000 at 6% p.a. for 2 years.", "answer": "₹960" },
              { "id": "i3", "question": "What is the amount if the principal is ₹2500, rate is 5%, and time is 4 years?", "answer": "₹3000" },
              { "id": "i4", "question": "A person deposited ₹6000 at 7% interest for 3 years. Find the interest.", "answer": "₹1260" },
              { "id": "i5", "question": "If interest is ₹240 and rate is 8% for 2 years, find the principal.", "answer": "₹1500" },
              { "id": "i6", "question": "How long will ₹4000 take to earn ₹320 interest at 4%?", "answer": "2 years" },
              { "id": "i7", "question": "What is the interest on ₹3000 for 6 months at 10% per annum?", "answer": "₹150" },
              { "id": "i8", "question": "A man deposits ₹5000 at 6% interest for 5 years. Find total amount.", "answer": "₹6500" },
              { "id": "i9", "question": "How is the maturity value of a fixed deposit calculated?", "answer": "By adding the interest to the principal." },
              { "id": "i10", "question": "If a bank pays ₹180 interest on ₹3000 in 3 years, find the rate.", "answer": "2%" }],
              "hard": [{ "id": "h1", "question": "A person deposited ₹20,000 at 7% p.a. for 4 years. What is the maturity amount?", "answer": "₹25,600" },
              { "id": "h2", "question": "Find the rate if ₹480 is earned on ₹4000 in 3 years.", "answer": "4%" },
              { "id": "h3", "question": "In how many years will ₹12,000 become ₹13,800 at 5% p.a.?", "answer": "3 years" },
              { "id": "h4", "question": "Find the principal if the total amount after 5 years at 6% is ₹7,400.", "answer": "₹6,000" },
              { "id": "h5", "question": "A student deposited ₹10,000 at 5.5% p.a. for 2.5 years. Find the total amount.", "answer": "₹11,375" },
              { "id": "h6", "question": "A deposit earns ₹825 interest in 3 years at 5.5%. What was the principal?", "answer": "₹5,000" },
              { "id": "h7", "question": "If interest is ₹1,000 on ₹8,000 in 2.5 years, what is the rate of interest?", "answer": "5%" },
              { "id": "h8", "question": "Find the principal if ₹672 interest is earned at 7% in 4 years.", "answer": "₹2,400" },
              { "id": "h9", "question": "A sum becomes ₹9,600 in 3 years at 4% p.a. Find the principal and interest.", "answer": "Principal = ₹8,400; Interest = ₹1,200" },
              { "id": "h10", "question": "Compare simple interest on ₹5,000 for 3 years at 6% and 8%.", "answer": "₹900 at 6%; ₹1,200 at 8%" }]
            }
          },
          {
            "id": "shares-dividends-10-icse",
            "title": "Shares and Dividends",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is a share?", "answer": "A share is a unit of ownership in a company." },
              { "id": "b2", "question": "What is a shareholder?", "answer": "A person who owns shares in a company." },
              { "id": "b3", "question": "What is dividend?", "answer": "A part of the company's profit distributed to shareholders." },
              { "id": "b4", "question": "What is the face value of a share?", "answer": "The original value of a share mentioned in the company’s records." },
              { "id": "b5", "question": "What is the market value of a share?", "answer": "The price at which a share is bought or sold in the market." },
              { "id": "b6", "question": "What is profit?", "answer": "The financial gain when income exceeds expenses." },
              { "id": "b7", "question": "What is a company?", "answer": "A business organization that sells shares to raise capital." },
              { "id": "b8", "question": "Who receives dividends?", "answer": "Shareholders receive dividends." },
              { "id": "b9", "question": "Is dividend always paid?", "answer": "No, it depends on the company’s profit and policy." },
              { "id": "b10", "question": "What is investment?", "answer": "Money put into shares or other assets to earn returns." }
              ],
              "intermediate": [{ "id": "i1", "question": "How is dividend calculated on a share?", "answer": "Dividend = (Dividend % × Face Value) / 100." },
              { "id": "i2", "question": "If the face value is ₹100 and the dividend is 10%, what is the dividend?", "answer": "₹10." },
              { "id": "i3", "question": "What is the income from 20 shares of face value ₹100 each with 5% dividend?", "answer": "₹100." },
              { "id": "i4", "question": "What is yield?", "answer": "Yield is the return on investment calculated as (Income / Investment) × 100." },
              { "id": "i5", "question": "If the market value of a share is ₹120 and dividend is 10% on ₹100 face value, what is the yield?", "answer": "Yield = (10 / 120) × 100 = 8.33%." },
              { "id": "i6", "question": "How do you calculate the number of shares from total investment?", "answer": "Number of shares = Investment / Market Value per share." },
              { "id": "i7", "question": "What is the market value if 50 shares are bought for ₹4000?", "answer": "₹80 per share." },
              { "id": "i8", "question": "What is the income from 30 shares of ₹10 face value each at 12% dividend?", "answer": "₹36." },
              { "id": "i9", "question": "If income is ₹60 and yield is 6%, what is the investment?", "answer": "₹1000." },
              { "id": "i10", "question": "What is the annual income from 25 shares of ₹100 face value each at 8% dividend?", "answer": "₹200." }],
              "hard": [{ "id": "h1", "question": "A man invests ₹5000 in ₹100 shares at ₹125. Company declares 12% dividend. Find income and yield.", "answer": "Income = ₹480, Yield = (480 / 5000) × 100 = 9.6%." },
              { "id": "h2", "question": "100 shares of ₹10 each give 5% dividend. Market value is ₹8. What is the yield?", "answer": "Yield = (0.5 / 8) × 100 = 6.25%." },
              { "id": "h3", "question": "Find investment to get ₹360 income from 6% ₹100 shares at ₹120.", "answer": "Investment = ₹7200." },
              { "id": "h4", "question": "A person receives ₹200 as income from ₹25 shares at 8% dividend. How many shares?", "answer": "100 shares." },
              { "id": "h5", "question": "If investment is ₹1600 in ₹100 shares at ₹80 and dividend is 10%, find number of shares and income.", "answer": "20 shares, ₹200 income." },
              { "id": "h6", "question": "Find market price of share if yield is 12% and dividend is ₹6.", "answer": "Market price = (6 × 100) / 12 = ₹50." },
              { "id": "h7", "question": "What investment gives an income of ₹450 if share is ₹150 and dividend is 10%?", "answer": "Investment = (450 / 15) × 150 = ₹4500." },
              { "id": "h8", "question": "If 20 shares of ₹100 face value give 15% dividend, find income and yield when market value is ₹120.", "answer": "Income = ₹300, Yield = (300 / 2400) × 100 = 12.5%." },
              { "id": "h9", "question": "A man bought 30 shares of ₹50 at ₹40. Company declared 6% dividend. Find his income and yield.", "answer": "Income = ₹90, Yield = (90 / 1200) × 100 = 7.5%." },
              { "id": "h10", "question": "Investor receives ₹240 from ₹25 shares with 8% dividend. Market value is ₹20. Find investment and yield.", "answer": "Investment = ₹600, Yield = 40%." }]
            }
          },
          {
            "id": "quadratic-equations-10-icse",
            "title": "Quadratic Equations in One Variable",
            "flashcards": {
              "beginner": [{ id: "b1", difficulty: "beginner", question: "What is a quadratic equation?", answer: "An equation of the form ax² + bx + c = 0 where a ≠ 0." },
              { id: "b2", difficulty: "beginner", question: "What is the degree of a quadratic equation?", answer: "The degree is 2." },
              { id: "b3", difficulty: "beginner", question: "What are the standard forms of a quadratic equation?", answer: "ax² + bx + c = 0." },
              { id: "b4", difficulty: "beginner", question: "Give an example of a quadratic equation.", answer: "x² - 5x + 6 = 0." },
              { id: "b5", difficulty: "beginner", question: "What is a root of a quadratic equation?", answer: "A value of x which satisfies the equation." },
              { id: "b6", difficulty: "beginner", question: "What is the discriminant in a quadratic equation?", answer: "D = b² - 4ac." },
              { id: "b7", difficulty: "beginner", question: "What does D = 0 indicate?", answer: "The equation has real and equal roots." },
              { id: "b8", difficulty: "beginner", question: "What does D > 0 indicate?", answer: "The equation has two distinct real roots." },
              { id: "b9", difficulty: "beginner", question: "What does D < 0 indicate?", answer: "The equation has no real roots (imaginary)." },
              { id: "b10", difficulty: "beginner", question: "What are the coefficients in 2x² - 3x + 5 = 0?", answer: "a = 2, b = -3, c = 5." }],
              "intermediate": [{ id: "i1", difficulty: "intermediate", question: "Solve: x² - 7x + 12 = 0", answer: "x = 3, x = 4." },
              { id: "i2", difficulty: "intermediate", question: "Find the discriminant of 2x² + 3x - 2 = 0", answer: "D = 25." },
              { id: "i3", difficulty: "intermediate", question: "Solve using quadratic formula: x² + 2x - 8 = 0", answer: "x = 2, -4." },
              { id: "i4", difficulty: "intermediate", question: "What is the quadratic formula?", answer: "x = [-b ± √(b² - 4ac)] / 2a." },
              { id: "i5", difficulty: "intermediate", question: "Solve: 3x² - 5x = 0", answer: "x = 0, 5/3." },
              { id: "i6", difficulty: "intermediate", question: "Factorize: x² + 5x + 6", answer: "(x + 2)(x + 3)." },
              { id: "i7", difficulty: "intermediate", question: "Form a quadratic with roots 4 and -3", answer: "x² - x - 12 = 0." },
              { id: "i8", difficulty: "intermediate", question: "What is the sum of roots of ax² + bx + c = 0?", answer: "-b/a." },
              { id: "i9", difficulty: "intermediate", question: "What is the product of roots of ax² + bx + c = 0?", answer: "c/a." },
              { id: "i10", difficulty: "intermediate", question: "If one root is 2 and the equation is x² + bx + 4 = 0, find b.", answer: "b = -6." }],
              "hard": [{ id: "h1", difficulty: "hard", question: "Solve: 5x² + 6x - 8 = 0 using formula.", answer: "x = (-6 ± √196)/10 = -1.6, 1." },
              { id: "h2", difficulty: "hard", question: "Solve: √x + 2 = x", answer: "x = 4." },
              { id: "h3", difficulty: "hard", question: "Form a quadratic equation with roots 2 + √3 and 2 - √3.", answer: "x² - 4x + 1 = 0." },
              { id: "h4", difficulty: "hard", question: "Find k such that 3x² - 2x + k = 0 has equal roots.", answer: "k = 1/3." },
              { id: "h5", difficulty: "hard", question: "Solve: x² - 2x + 2 = 0", answer: "No real roots (complex roots)." },
              { id: "h6", difficulty: "hard", question: "Find k such that 2x² + kx + 8 = 0 has equal roots.", answer: "k = ±8." },
              { id: "h7", difficulty: "hard", question: "Show that (x - 1)(x + 2) = x² + x - 2", answer: "By expansion: x² + 2x - x - 2 = x² + x - 2." },
              { id: "h8", difficulty: "hard", question: "What are the nature of roots if D = 49?", answer: "Two real and distinct roots." },
              { id: "h9", difficulty: "hard", question: "If the roots are reciprocal, what condition holds?", answer: "c/a = 1." },
              { id: "h10", difficulty: "hard", question: "If roots are equal and sum of roots is 6, find the equation.", answer: "x² - 6x + 9 = 0." }]
            }
          },
          {
            "id": "matrices-10-icse",
            "title": "Matrices",
            "flashcards": {
              "beginner": [{ "id": "b1", "difficulty": "beginner", "question": "What is a matrix?", "answer": "A matrix is a rectangular array of numbers arranged in rows and columns." },
              { "id": "b2", "difficulty": "beginner", "question": "What is the order of a matrix?", "answer": "It is the number of rows × number of columns in the matrix." },
              { "id": "b3", "difficulty": "beginner", "question": "What is a row matrix?", "answer": "A matrix with only one row." },
              { "id": "b4", "difficulty": "beginner", "question": "What is a column matrix?", "answer": "A matrix with only one column." },
              { "id": "b5", "difficulty": "beginner", "question": "What is a square matrix?", "answer": "A matrix with the same number of rows and columns." },
              { "id": "b6", "difficulty": "beginner", "question": "What is a null matrix?", "answer": "A matrix in which all elements are zero." },
              { "id": "b7", "difficulty": "beginner", "question": "What is a diagonal matrix?", "answer": "A square matrix where all off-diagonal elements are zero." },
              { "id": "b8", "difficulty": "beginner", "question": "What is the identity matrix?", "answer": "A square matrix with 1s on the diagonal and 0s elsewhere." },
              { "id": "b9", "difficulty": "beginner", "question": "How are elements of a matrix denoted?", "answer": "Elements are denoted as aᵢⱼ, where i = row, j = column." },
              { "id": "b10", "difficulty": "beginner", "question": "What is the transpose of a matrix?", "answer": "The matrix obtained by interchanging rows and columns." }],
              "intermediate": [{ "id": "i1", "difficulty": "intermediate", "question": "Add: A = [[1,2],[3,4]], B = [[5,6],[7,8]]", "answer": "A + B = [[6,8],[10,12]]" },
              { "id": "i2", "difficulty": "intermediate", "question": "Subtract: A = [[4,5],[6,7]], B = [[1,2],[3,4]]", "answer": "A - B = [[3,3],[3,3]]" },
              { "id": "i3", "difficulty": "intermediate", "question": "Can we add a 2x2 and a 2x3 matrix?", "answer": "No, matrices must have the same order to be added." },
              { "id": "i4", "difficulty": "intermediate", "question": "Multiply matrix A = [[2,3],[4,5]] by scalar 2.", "answer": "2A = [[4,6],[8,10]]" },
              { "id": "i5", "difficulty": "intermediate", "question": "Find transpose of [[1,2,3],[4,5,6]]", "answer": "Transpose = [[1,4],[2,5],[3,6]]" },
              { "id": "i6", "difficulty": "intermediate", "question": "What is the element at a₂₁ in matrix [[3,5],[7,9]]?", "answer": "Element is 7." },
              { "id": "i7", "difficulty": "intermediate", "question": "What happens when you multiply any matrix by a null matrix?", "answer": "Result is a null matrix of appropriate order." },
              { "id": "i8", "difficulty": "intermediate", "question": "What is the result of A + A for any matrix A?", "answer": "The result is 2A." },
              { "id": "i9", "difficulty": "intermediate", "question": "How many elements are there in a 3x2 matrix?", "answer": "There are 6 elements." },
              { "id": "i10", "difficulty": "intermediate", "question": "Can a matrix be both row and column matrix?", "answer": "Yes, only if it has one row and one column (1x1)." }],
              "hard": [{ "id": "h1", "difficulty": "hard", "question": "Find X: A + X = B, where A=[[1,2],[3,4]], B=[[5,6],[7,8]]", "answer": "X = [[4,4],[4,4]]" },
              { "id": "h2", "difficulty": "hard", "question": "Given A = [[2,3],[1,4]], find A + Aᵗ", "answer": "A + Aᵗ = [[4,4],[4,8]]" },
              { "id": "h3", "difficulty": "hard", "question": "Is matrix multiplication commutative?", "answer": "No, A × B ≠ B × A in general." },
              { "id": "h4", "difficulty": "hard", "question": "If A = [[1,0],[0,1]], what is A²?", "answer": "A² = [[1,0],[0,1]] (identity matrix)" },
              { "id": "h5", "difficulty": "hard", "question": "Find the product of A=[[1,2],[3,4]] and B=[[0,1],[1,0]]", "answer": "AB = [[2,1],[4,3]]" },
              { "id": "h6", "difficulty": "hard", "question": "What is the inverse of the identity matrix?", "answer": "It is the identity matrix itself." },
              { "id": "h7", "difficulty": "hard", "question": "Is A = [[1,2],[3,4]] symmetric?", "answer": "No, A ≠ Aᵗ." },
              { "id": "h8", "difficulty": "hard", "question": "What is the condition for a square matrix to be symmetric?", "answer": "It must satisfy A = Aᵗ." },
              { "id": "h9", "difficulty": "hard", "question": "Solve for x: [[x,1],[2,3]] = [[2,1],[2,3]]", "answer": "x = 2" },
              { "id": "h10", "difficulty": "hard", "question": "If A is a 2x3 and B is 3x2 matrix, what is the order of AB?", "answer": "Order of AB is 2x2." }]
            }
          },
          {
            "id": "ap-gp-10-icse",
            "title": "Arithmetic and Geometric Progression",
            "flashcards": {
              "beginner": [{ "id": "b1", "difficulty": "beginner", "question": "What is an arithmetic progression (A.P.)?", "answer": "A sequence where the difference between consecutive terms is constant." },
              { "id": "b2", "difficulty": "beginner", "question": "What is a geometric progression (G.P.)?", "answer": "A sequence where each term is found by multiplying the previous term by a fixed number called the common ratio." },
              { "id": "b3", "difficulty": "beginner", "question": "What is the common difference in A.P.?", "answer": "The constant difference between two consecutive terms." },
              { "id": "b4", "difficulty": "beginner", "question": "What is the common ratio in G.P.?", "answer": "The ratio between two consecutive terms." },
              { "id": "b5", "difficulty": "beginner", "question": "Write the formula for the nth term of an A.P.", "answer": "a + (n - 1)d" },
              { "id": "b6", "difficulty": "beginner", "question": "Write the formula for the nth term of a G.P.", "answer": "ar^(n-1)" },
              { "id": "b7", "difficulty": "beginner", "question": "What does 'a' represent in A.P.?", "answer": "The first term of the sequence." },
              { "id": "b8", "difficulty": "beginner", "question": "If the first term of an A.P. is 5 and the common difference is 3, what is the 3rd term?", "answer": "11" },
              { "id": "b9", "difficulty": "beginner", "question": "Give an example of a geometric progression.", "answer": "2, 4, 8, 16, 32" },
              { "id": "b10", "difficulty": "beginner", "question": "Is 10, 20, 30, 40 an arithmetic progression?", "answer": "Yes, with common difference 10." }],
              "intermediate": [{ "id": "i1", "difficulty": "intermediate", "question": "Find the 10th term of the A.P.: 3, 7, 11, ...", "answer": "39" },
              { "id": "i2", "difficulty": "intermediate", "question": "Find the 5th term of a G.P. where a = 2 and r = 3.", "answer": "162" },
              { "id": "i3", "difficulty": "intermediate", "question": "Find the sum of the first 5 terms of an A.P.: a = 2, d = 4", "answer": "50" },
              { "id": "i4", "difficulty": "intermediate", "question": "Find the sum of first 4 terms of a G.P.: a = 3, r = 2", "answer": "45" },
              { "id": "i5", "difficulty": "intermediate", "question": "What is the sum of n terms of an A.P.?", "answer": "n/2 × [2a + (n-1)d]" },
              { "id": "i6", "difficulty": "intermediate", "question": "What is the sum of n terms of a G.P. when r ≠ 1?", "answer": "a(r^n - 1)/(r - 1)" },
              { "id": "i7", "difficulty": "intermediate", "question": "If the 5th term of an A.P. is 20 and common difference is 3, what is the first term?", "answer": "8" },
              { "id": "i8", "difficulty": "intermediate", "question": "What is the 6th term of a G.P. where a = 1 and r = 0.5?", "answer": "0.03125" },
              { "id": "i9", "difficulty": "intermediate", "question": "Find three consecutive terms of a G.P. whose product is 27.", "answer": "3, 3, 3" },
              { "id": "i10", "difficulty": "intermediate", "question": "If a = 4, d = 5, find the 12th term of the A.P.", "answer": "59" }
              ],
              "hard": [{ "id": "h1", "difficulty": "hard", "question": "The sum of the first n terms of an A.P. is 3n² + 2n. Find the 7th term.", "answer": "50" },
              { "id": "h2", "difficulty": "hard", "question": "Find n if the nth term of the G.P. 3, 6, 12, ... is 768.", "answer": "9" },
              { "id": "h3", "difficulty": "hard", "question": "Find the sum of the first 6 terms of a G.P. with a = 5 and r = 3.", "answer": "3640" },
              { "id": "h4", "difficulty": "hard", "question": "In an A.P., the 4th term is 15 and the 9th term is 40. Find a and d.", "answer": "a = 5, d = 5" },
              { "id": "h5", "difficulty": "hard", "question": "If the 3rd term of a G.P. is 24 and 6th term is 192, find a and r.", "answer": "a = 6, r = 2" },
              { "id": "h6", "difficulty": "hard", "question": "If Sₙ = n(2n+1), find the nth term of the A.P.", "answer": "tₙ = 4n - 1" },
              { "id": "h7", "difficulty": "hard", "question": "The sum of 3 numbers in G.P. is 21 and their product is 216. Find the numbers.", "answer": "3, 6, 12" },
              { "id": "h8", "difficulty": "hard", "question": "In a G.P., the 2nd term is 4 and 5th term is 32. Find r.", "answer": "r = 2" },
              { "id": "h9", "difficulty": "hard", "question": "Find the sum to n terms of G.P. when a = 10, r = 0.5", "answer": "Sₙ = 10(1 - 0.5^n)/0.5" },
              { "id": "h10", "difficulty": "hard", "question": "Prove that the sum of first n odd numbers is n² using A.P.", "answer": "Odd numbers form an A.P. with a = 1, d = 2; sum = n/2 × [2a + (n-1)d] = n²" }]
            }
          },
          {
            "id": "coordinate-geometry-10-icse",
            "title": "Coordinate Geometry",
            "flashcards": {
              "beginner": [{ "id": "b1", "difficulty": "beginner", "question": "What is coordinate geometry?", "answer": "It is the study of geometry using the coordinate system." },
              { "id": "b2", "difficulty": "beginner", "question": "What are the two axes in the coordinate plane?", "answer": "X-axis and Y-axis." },
              { "id": "b3", "difficulty": "beginner", "question": "What is the point where the X-axis and Y-axis intersect?", "answer": "The origin (0,0)." },
              { "id": "b4", "difficulty": "beginner", "question": "What are the coordinates of the origin?", "answer": "(0,0)" },
              { "id": "b5", "difficulty": "beginner", "question": "In which quadrant is the point (2,3)?", "answer": "Quadrant I." },
              { "id": "b6", "difficulty": "beginner", "question": "In which quadrant is the point (-2,3)?", "answer": "Quadrant II." },
              { "id": "b7", "difficulty": "beginner", "question": "In which quadrant is the point (-2,-3)?", "answer": "Quadrant III." },
              { "id": "b8", "difficulty": "beginner", "question": "In which quadrant is the point (2,-3)?", "answer": "Quadrant IV." },
              { "id": "b9", "difficulty": "beginner", "question": "What is the abscissa of point (4,5)?", "answer": "4." },
              { "id": "b10", "difficulty": "beginner", "question": "What is the ordinate of point (4,5)?", "answer": "5." }],
              "intermediate": [{ "id": "i1", "difficulty": "intermediate", "question": "Find the distance between points (3,4) and (6,8).", "answer": "5 units." },
              { "id": "i2", "difficulty": "intermediate", "question": "What is the formula to find the distance between two points (x1,y1) and (x2,y2)?", "answer": "√[(x2 − x1)² + (y2 − y1)²]" },
              { "id": "i3", "difficulty": "intermediate", "question": "Find the midpoint of the line joining (2,4) and (6,8).", "answer": "(4,6)" },
              { "id": "i4", "difficulty": "intermediate", "question": "What is the formula to find the midpoint of two points?", "answer": "((x1 + x2)/2, (y1 + y2)/2)" },
              { "id": "i5", "difficulty": "intermediate", "question": "What is the slope of the line passing through (2,3) and (4,7)?", "answer": "2." },
              { "id": "i6", "difficulty": "intermediate", "question": "What is the formula to find the slope between two points?", "answer": "(y2 − y1)/(x2 − x1)" },
              { "id": "i7", "difficulty": "intermediate", "question": "If the slope of a line is 0, what kind of line is it?", "answer": "A horizontal line." },
              { "id": "i8", "difficulty": "intermediate", "question": "If the slope of a line is undefined, what kind of line is it?", "answer": "A vertical line." },
              { "id": "i9", "difficulty": "intermediate", "question": "Find the distance between (0,0) and (5,12).", "answer": "13 units." },
              { "id": "i10", "difficulty": "intermediate", "question": "What is the slope of the line through (1,1) and (2,2)?", "answer": "1." }],
              "hard": [{ "id": "h1", "difficulty": "hard", "question": "Find the coordinates of the point that divides the line joining (2,4) and (6,8) in the ratio 1:2.", "answer": "(4.67, 6.67)" },
              { "id": "h2", "difficulty": "hard", "question": "What is the section formula in coordinate geometry?", "answer": "((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)) for internal division." },
              { "id": "h3", "difficulty": "hard", "question": "Find the area of the triangle with vertices at (1,2), (4,5), and (7,8).", "answer": "0 (Points are collinear)." },
              { "id": "h4", "difficulty": "hard", "question": "What is the formula for the area of triangle using coordinates?", "answer": "½ |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)|" },
              { "id": "h5", "difficulty": "hard", "question": "Find the coordinates of the centroid of triangle with vertices (1,2), (3,4), and (5,6).", "answer": "(3, 4)" },
              { "id": "h6", "difficulty": "hard", "question": "Find the slope of a line perpendicular to a line with slope 3.", "answer": "−1/3" },
              { "id": "h7", "difficulty": "hard", "question": "Find the equation of the line passing through (2,3) with slope 4.", "answer": "y − 3 = 4(x − 2)" },
              { "id": "h8", "difficulty": "hard", "question": "Check if points (1,2), (3,4), and (5,6) are collinear.", "answer": "Yes, slope is same." },
              { "id": "h9", "difficulty": "hard", "question": "Find the coordinates of a point on the x-axis equidistant from (3,4) and (−3,4).", "answer": "(0,0)" },
              { "id": "h10", "difficulty": "hard", "question": "Find the equation of a line with slope 2 and y-intercept 5.", "answer": "y = 2x + 5" }]
            }
          },
          {
            "id": "similarity-10-icse",
            "title": "Similarity",
            "flashcards": {
              "beginner": [{ "id": "b1", "question": "What is similarity in geometry?", "answer": "Similarity refers to figures having the same shape but not necessarily the same size." },
              { "id": "b2", "question": "Which property is preserved in similar figures?", "answer": "Angles are preserved and sides are in proportion." },
              { "id": "b3", "question": "What is the symbol used to denote similarity?", "answer": "The symbol '~' is used to denote similarity." },
              { "id": "b4", "question": "Are all congruent figures similar?", "answer": "Yes, all congruent figures are similar but not all similar figures are congruent." },
              { "id": "b5", "question": "What does it mean when triangles are similar?", "answer": "It means their corresponding angles are equal and sides are proportional." },
              { "id": "b6", "question": "Name one condition for triangles to be similar.", "answer": "AAA (Angle-Angle-Angle) condition." },
              { "id": "b7", "question": "What is the SSS condition in similarity?", "answer": "If the sides of one triangle are proportional to the sides of another, the triangles are similar." },
              { "id": "b8", "question": "Do similar triangles always have equal areas?", "answer": "No, they do not have equal areas unless they are congruent." },
              { "id": "b9", "question": "What is the ratio of corresponding sides in similar triangles called?", "answer": "It is called the scale factor or ratio of similarity." },
              { "id": "b10", "question": "If two angles of one triangle are equal to two angles of another, are the triangles similar?", "answer": "Yes, by the AA (Angle-Angle) criterion." }],
              "intermediate": [{ "id": "i1", "question": "State the Basic Proportionality Theorem.", "answer": "If a line is drawn parallel to one side of a triangle and intersects the other two, it divides those sides in the same ratio." },
              { "id": "i2", "question": "What does the AAA similarity condition state?", "answer": "If all three angles of one triangle are equal to those of another triangle, the triangles are similar." },
              { "id": "i3", "question": "If ΔABC ∼ ΔDEF and AB = 4 cm, DE = 8 cm, what is the ratio of similarity?", "answer": "1:2" },
              { "id": "i4", "question": "If two triangles are similar and one has an area of 25 cm² and the other 100 cm², what is the ratio of their sides?", "answer": "1:2 (since area ratio is square of side ratio)" },
              { "id": "i5", "question": "Name a real-life example of similar figures.", "answer": "Photographs of different sizes of the same person." },
              { "id": "i6", "question": "How does similarity help in calculating heights indirectly?", "answer": "By using similar triangles formed with shadows and known heights." },
              { "id": "i7", "question": "If ΔXYZ ∼ ΔPQR, and angle X = 40°, angle Y = 60°, what is angle Z?", "answer": "80°" },
              { "id": "i8", "question": "In similar triangles, how are altitudes related?", "answer": "They are in the same ratio as the corresponding sides." },
              { "id": "i9", "question": "Give an application of similarity in map reading.", "answer": "Scale on maps represents the similarity ratio to actual distances." },
              { "id": "i10", "question": "Can triangles be similar if only one pair of angles is equal?", "answer": "No, at least two angles must be equal." }],

              "hard": [{ "id": "h1", "question": "Prove that the ratio of areas of two similar triangles is equal to the square of the ratio of their corresponding sides.", "answer": "Area1/Area2 = (Side1/Side2)²" },
              { "id": "h2", "question": "Given two similar triangles, find the height of the larger triangle if the height of the smaller is 6 cm and the ratio of similarity is 3:5.", "answer": "10 cm" },
              { "id": "h3", "question": "In ΔABC, DE || BC and intersects AB and AC at D and E. Prove that AD/DB = AE/EC.", "answer": "By Basic Proportionality Theorem." },
              { "id": "h4", "question": "A 6 ft tall man casts a shadow of 4 ft. At the same time, a building casts a shadow of 20 ft. Find the height of the building.", "answer": "30 ft using similar triangles." },
              { "id": "h5", "question": "Prove: In similar triangles, corresponding medians are in the same ratio as the corresponding sides.", "answer": "Use triangle similarity and median properties." },
              { "id": "h6", "question": "A tower 30 m high casts a shadow 10 m long. A lamp post nearby casts a shadow of 2 m. Find the height of the lamp post.", "answer": "6 m using similarity." },
              { "id": "h7", "question": "Two triangles have sides in the ratio 3:4. If the perimeter of the smaller triangle is 60 cm, what is the perimeter of the larger triangle?", "answer": "80 cm" },
              { "id": "h8", "question": "Construct a triangle similar to a given triangle with a scale factor of 3:2.", "answer": "Use proportionality and compass construction method." },
              { "id": "h9", "question": "What is the ratio of perimeters of two similar triangles whose areas are 9 cm² and 16 cm²?", "answer": "3:4" },
              { "id": "h10", "question": "If two right-angled triangles are similar, show that the ratio of their hypotenuses equals the ratio of any corresponding sides.", "answer": "Follows from Pythagoras and similarity rules." }
              ]
            }
          },
          {
            "id": "trigonometry-10-icse",
            "title": "Trigonometry",
            "flashcards": {
              "beginner": [{ "id": "b1", "difficulty": "beginner", "question": "What is trigonometry?", "answer": "Trigonometry is the branch of mathematics that deals with the relationships between the angles and sides of triangles." },
              { "id": "b2", "difficulty": "beginner", "question": "What is the hypotenuse in a right triangle?", "answer": "The hypotenuse is the side opposite the right angle and is the longest side." },
              { "id": "b3", "difficulty": "beginner", "question": "What is sin(θ) in a right triangle?", "answer": "sin(θ) = Opposite / Hypotenuse." },
              { "id": "b4", "difficulty": "beginner", "question": "What is cos(θ) in a right triangle?", "answer": "cos(θ) = Adjacent / Hypotenuse." },
              { "id": "b5", "difficulty": "beginner", "question": "What is tan(θ) in a right triangle?", "answer": "tan(θ) = Opposite / Adjacent." },
              { "id": "b6", "difficulty": "beginner", "question": "What is the value of sin(30°)?", "answer": "sin(30°) = 1/2." },
              { "id": "b7", "difficulty": "beginner", "question": "What is the value of cos(60°)?", "answer": "cos(60°) = 1/2." },
              { "id": "b8", "difficulty": "beginner", "question": "What is the value of tan(45°)?", "answer": "tan(45°) = 1." },
              { "id": "b9", "difficulty": "beginner", "question": "Which triangle is used in basic trigonometry?", "answer": "Right-angled triangle." },
              { "id": "b10", "difficulty": "beginner", "question": "What is the value of sin(90°)?", "answer": "sin(90°) = 1." }],
              "intermediate": [{ "id": "i1", "difficulty": "intermediate", "question": "Find sin(θ) if opposite = 3 cm and hypotenuse = 5 cm.", "answer": "sin(θ) = 3/5 = 0.6." },
              { "id": "i2", "difficulty": "intermediate", "question": "Find cos(θ) if adjacent = 4 cm and hypotenuse = 5 cm.", "answer": "cos(θ) = 4/5 = 0.8." },
              { "id": "i3", "difficulty": "intermediate", "question": "What is the trigonometric identity involving sin²(θ) and cos²(θ)?", "answer": "sin²(θ) + cos²(θ) = 1." },
              { "id": "i4", "difficulty": "intermediate", "question": "Find tan(30°).", "answer": "tan(30°) = 1/√3." },
              { "id": "i5", "difficulty": "intermediate", "question": "Find the value of sin(60°).", "answer": "sin(60°) = √3/2." },
              { "id": "i6", "difficulty": "intermediate", "question": "If sin(θ) = 4/5, find cos(θ).", "answer": "cos(θ) = 3/5 (from Pythagorean identity)." },
              { "id": "i7", "difficulty": "intermediate", "question": "Find the angle θ if sin(θ) = 1/2.", "answer": "θ = 30°." },
              { "id": "i8", "difficulty": "intermediate", "question": "Find the angle θ if tan(θ) = 1.", "answer": "θ = 45°." },
              { "id": "i9", "difficulty": "intermediate", "question": "Evaluate cos²(45°) + sin²(45°).", "answer": "1 (identity)." },
              { "id": "i10", "difficulty": "intermediate", "question": "Find the length of hypotenuse if opposite = 5 and sin(θ) = 0.6.", "answer": "Hypotenuse = 5 / 0.6 = 8.33." }],
              "hard": [{ "id": "h1", "difficulty": "hard", "question": "Prove that tan²(θ) + 1 = sec²(θ).", "answer": "Use the identity: sin²(θ) + cos²(θ) = 1 and divide by cos²(θ)." },
              { "id": "h2", "difficulty": "hard", "question": "Find θ if cos(θ) = 0.5.", "answer": "θ = 60°." },
              { "id": "h3", "difficulty": "hard", "question": "Find the angle if tan(θ) = √3.", "answer": "θ = 60°." },
              { "id": "h4", "difficulty": "hard", "question": "If sin(θ) = 5/13, find tan(θ).", "answer": "cos(θ) = 12/13 → tan(θ) = 5/12." },
              { "id": "h5", "difficulty": "hard", "question": "Simplify (1 + tan²A) / (1 + cot²A).", "answer": "sec²A / cosec²A." },
              { "id": "h6", "difficulty": "hard", "question": "Find the height of a tower if the angle of elevation is 60° and the shadow is 10 m.", "answer": "Height = 10 × tan(60°) = 10√3 ≈ 17.32 m." },
              { "id": "h7", "difficulty": "hard", "question": "Prove that 1 - tan²A = (1 - sinA)(1 + sinA) / cos²A.", "answer": "Use trigonometric identities to simplify." },
              { "id": "h8", "difficulty": "hard", "question": "Evaluate: sin²30° + cos²60°.", "answer": "1/4 + 1/4 = 0.5." },
              { "id": "h9", "difficulty": "hard", "question": "If sin(θ) = x, express cos²(θ) in terms of x.", "answer": "cos²(θ) = 1 - x²." },
              { "id": "h10", "difficulty": "hard", "question": "Find the angle of elevation if height = 15 m and shadow = 15√3 m.", "answer": "tan(θ) = 1/√3 ⇒ θ = 30°." }]
            }
          },
          {
            "id": "probability-10-icse",
            "title": "Probability",
            "flashcards": {
              "beginner": [{ "id": "b1", "difficulty": "beginner", "question": "What is probability?", "answer": "Probability is the measure of the likelihood of an event occurring." },
              { "id": "b2", "difficulty": "beginner", "question": "What is the range of probability?", "answer": "The value of probability ranges from 0 to 1." },
              { "id": "b3", "difficulty": "beginner", "question": "What is the probability of a sure event?", "answer": "1 (or 100%)." },
              { "id": "b4", "difficulty": "beginner", "question": "What is the probability of an impossible event?", "answer": "0." },
              { "id": "b5", "difficulty": "beginner", "question": "What is the probability of getting a head when tossing a fair coin?", "answer": "0.5 or 1/2." },
              { "id": "b6", "difficulty": "beginner", "question": "How many outcomes are there when rolling a dice?", "answer": "6 outcomes." },
              { "id": "b7", "difficulty": "beginner", "question": "What is the probability of getting an even number on a dice?", "answer": "3 out of 6, or 0.5." },
              { "id": "b8", "difficulty": "beginner", "question": "What is the formula for probability?", "answer": "P(E) = Number of favourable outcomes / Total number of outcomes." },
              { "id": "b9", "difficulty": "beginner", "question": "What is the probability of drawing a red ball from a bag of 5 red and 3 blue balls?", "answer": "5/8." },
              { "id": "b10", "difficulty": "beginner", "question": "Can probability be negative?", "answer": "No, it is always between 0 and 1." }],
              "intermediate": [{ "id": "i1", "difficulty": "intermediate", "question": "If a die is thrown once, what is the probability of getting a number greater than 4?", "answer": "2 out of 6 = 1/3." },
              { "id": "i2", "difficulty": "intermediate", "question": "A card is drawn from a standard deck. Find the probability of drawing a king.", "answer": "4/52 = 1/13." },
              { "id": "i3", "difficulty": "intermediate", "question": "If two coins are tossed, what is the probability of getting at least one head?", "answer": "3/4." },
              { "id": "i4", "difficulty": "intermediate", "question": "Find the probability of getting a prime number when a die is rolled.", "answer": "3/6 = 1/2." },
              { "id": "i5", "difficulty": "intermediate", "question": "A bag contains 3 red, 5 blue and 2 green balls. What is the probability of drawing a blue ball?", "answer": "5/10 = 1/2." },
              { "id": "i6", "difficulty": "intermediate", "question": "What is the probability of drawing a face card from a deck?", "answer": "12/52 = 3/13." },
              { "id": "i7", "difficulty": "intermediate", "question": "If a number is selected at random from 1 to 20, what is the probability it is divisible by 5?", "answer": "4/20 = 1/5." },
              { "id": "i8", "difficulty": "intermediate", "question": "What is the probability of getting a tail and a head when tossing two coins?", "answer": "2/4 = 1/2." },
              { "id": "i9", "difficulty": "intermediate", "question": "If a card is drawn, what is the probability it is not a heart?", "answer": "39/52." },
              { "id": "i10", "difficulty": "intermediate", "question": "What is the probability of drawing an ace or a king from a deck?", "answer": "8/52 = 2/13." }],
              "hard": [{ "id": "h1", "difficulty": "hard", "question": "Two dice are thrown. What is the probability that the sum is 7?", "answer": "6/36 = 1/6." },
              { "id": "h2", "difficulty": "hard", "question": "Two cards are drawn from a deck without replacement. What is the probability both are aces?", "answer": "4/52 × 3/51 = 1/221." },
              { "id": "h3", "difficulty": "hard", "question": "Three coins are tossed. What is the probability of getting exactly 2 heads?", "answer": "3/8." },
              { "id": "h4", "difficulty": "hard", "question": "What is the probability that a number from 1 to 100 is divisible by both 2 and 5?", "answer": "10/100 = 1/10." },
              { "id": "h5", "difficulty": "hard", "question": "What is the probability of getting a sum less than 4 when two dice are rolled?", "answer": "3/36 = 1/12." },
              { "id": "h6", "difficulty": "hard", "question": "Find the probability of getting a black king from a deck of cards.", "answer": "2/52 = 1/26." },
              { "id": "h7", "difficulty": "hard", "question": "From a bag of 5 red and 4 green balls, two balls are drawn. Probability both are red?", "answer": "5/9 × 4/8 = 20/72 = 5/18." },
              { "id": "h8", "difficulty": "hard", "question": "What is the probability of selecting a leap year from years 2000 to 2099?", "answer": "25/100 = 1/4." },
              { "id": "h9", "difficulty": "hard", "question": "From a group of 6 boys and 4 girls, what's the probability that a girl is chosen?", "answer": "4/10 = 2/5." },
              { "id": "h10", "difficulty": "hard", "question": "Two numbers are selected from 1 to 10. What is the probability their sum is 10?", "answer": "4/45." }]
            }
          }
        ]
      },
      {
        id: "history-10-icse",
        name: "History",
        icon: "🏛️",
        color: "from-amber-400 to-amber-600",
        chapters: [
          {
            id: "union-legislature-10-icse",
            title: "The Union Legislature",
            flashcards: {
              beginner: [{ "id": "b1", "question": "What is the Union Legislature of India called?", "answer": "The Parliament of India." },
              { "id": "b2", "question": "How many houses are there in the Indian Parliament?", "answer": "Two houses – the Lok Sabha and the Rajya Sabha." },
              { "id": "b3", "question": "Which house is known as the Lower House?", "answer": "The Lok Sabha." },
              { "id": "b4", "question": "Which house is known as the Upper House?", "answer": "The Rajya Sabha." },
              { "id": "b5", "question": "Who summons and prorogues the Parliament?", "answer": "The President of India." },
              { "id": "b6", "question": "What is the term of the Lok Sabha?", "answer": "5 years." },
              { "id": "b7", "question": "Who is the presiding officer of the Lok Sabha?", "answer": "The Speaker." },
              { "id": "b8", "question": "Can the Rajya Sabha be dissolved?", "answer": "No, it is a permanent body." },
              { "id": "b9", "question": "What is the minimum age to become a Lok Sabha member?", "answer": "25 years." },
              { "id": "b10", "question": "What is the minimum age to become a Rajya Sabha member?", "answer": "30 years." }],
              intermediate: [{ "id": "i1", "question": "What is the maximum strength of the Lok Sabha?", "answer": "552 members." },
              { "id": "i2", "question": "What is the maximum strength of the Rajya Sabha?", "answer": "250 members." },
              { "id": "i3", "question": "Who nominates 12 members to the Rajya Sabha?", "answer": "The President of India." },
              { "id": "i4", "question": "How are members of the Rajya Sabha elected?", "answer": "By the elected members of State Legislative Assemblies." },
              { "id": "i5", "question": "What is a Money Bill?", "answer": "A bill that deals with taxation, borrowing of money, or expenditure from the Consolidated Fund." },
              { "id": "i6", "question": "Who decides whether a bill is a Money Bill?", "answer": "The Speaker of the Lok Sabha." },
              { "id": "i7", "question": "What is the quorum to conduct business in either house?", "answer": "One-tenth of the total membership of the house." },
              { "id": "i8", "question": "How long can the Rajya Sabha delay a Money Bill?", "answer": "14 days." },
              { "id": "i9", "question": "What are the main functions of the Union Legislature?", "answer": "Law making, controlling finances, and checking the Executive." },
              { "id": "i10", "question": "Can the Rajya Sabha initiate a Money Bill?", "answer": "No, only the Lok Sabha can." }],
              hard: [{ "id": "h1", "question": "Explain the procedure of impeachment of the President in the Parliament.", "answer": "Both houses must pass the impeachment resolution by a two-thirds majority." },
              { "id": "h2", "question": "Differentiate between an ordinary bill and a money bill.", "answer": "Ordinary bills can originate in either house and need approval from both, while money bills originate only in Lok Sabha and Rajya Sabha has limited powers over them." },
              { "id": "h3", "question": "What is the significance of the 'Question Hour'?", "answer": "It allows members to question ministers on policies and functioning of the government." },
              { "id": "h4", "question": "What is a Joint Sitting of the Parliament and when is it convened?", "answer": "It resolves disagreements between the two houses and is presided over by the Speaker of Lok Sabha." },
              { "id": "h5", "question": "What is meant by ‘adjournment motion’?", "answer": "It is a motion to draw attention to a matter of urgent public importance, leading to suspension of normal business." },
              { "id": "h6", "question": "Why is the Rajya Sabha called a permanent house?", "answer": "It is never dissolved; one-third of its members retire every two years." },
              { "id": "h7", "question": "What role does the President play in the legislative process?", "answer": "He summons, prorogues sessions, and gives assent to bills passed by Parliament." },
              { "id": "h8", "question": "What is a ‘cut motion’?", "answer": "A motion moved to reduce the amount of a demand for grants presented by the government." },
              { "id": "h9", "question": "Describe the powers of the Speaker of the Lok Sabha.", "answer": "Maintains order, decides who may speak, interprets rules, and certifies money bills." },
              { "id": "h10", "question": "What is the role of Parliamentary Committees?", "answer": "They examine bills, budgets, and policies in detail and help in legislative oversight." }]
            }
          },
          {
            id: "union-executive-10-icse",
            title: "The Union Executive",
            flashcards: {
              beginner: [{ "id": "b1", "question": "Who is the head of the Union Executive in India?", "answer": "The President of India." },
              { "id": "b2", "question": "Who is the real head of the Indian government?", "answer": "The Prime Minister." },
              { "id": "b3", "question": "What is the term of the President of India?", "answer": "5 years." },
              { "id": "b4", "question": "Who elects the President of India?", "answer": "An electoral college consisting of elected members of both Houses of Parliament and State Legislative Assemblies." },
              { "id": "b5", "question": "Who is the Vice-President of India also known as?", "answer": "The ex-officio Chairman of the Rajya Sabha." },
              { "id": "b6", "question": "What is the minimum age to become the President of India?", "answer": "35 years." },
              { "id": "b7", "question": "Who appoints the Prime Minister?", "answer": "The President." },
              { "id": "b8", "question": "What is the Council of Ministers?", "answer": "It is a group of ministers headed by the Prime Minister to aid and advise the President." },
              { "id": "b9", "question": "Name the three categories of ministers.", "answer": "Cabinet Ministers, Ministers of State, and Deputy Ministers." },
              { "id": "b10", "question": "To whom is the Council of Ministers collectively responsible?", "answer": "The Lok Sabha." }],
              intermediate: [{ "id": "i1", "question": "What are the legislative powers of the President?", "answer": "Summons and prorogues Parliament, gives assent to bills, addresses Parliament sessions." },
              { "id": "i2", "question": "What are the emergency powers of the President?", "answer": "Declares National, State, and Financial emergencies." },
              { "id": "i3", "question": "What is the process to remove the Vice-President?", "answer": "By a resolution passed by the Rajya Sabha and agreed to by the Lok Sabha." },
              { "id": "i4", "question": "What are the executive powers of the President?", "answer": "Appoints the Prime Minister, other ministers, Governors, Judges of Supreme and High Courts." },
              { "id": "i5", "question": "What does the Prime Minister do in relation to the Council of Ministers?", "answer": "Selects them, allocates portfolios, and presides over meetings." },
              { "id": "i6", "question": "What are 'ordinances'?", "answer": "Laws promulgated by the President when Parliament is not in session." },
              { "id": "i7", "question": "How can the President be removed?", "answer": "By impeachment for violation of the Constitution." },
              { "id": "i8", "question": "What is the role of the Cabinet in decision-making?", "answer": "It is the highest decision-making body in the executive." },
              { "id": "i9", "question": "Who acts as President in the absence of both the President and Vice-President?", "answer": "The Chief Justice of India." },
              { "id": "i10", "question": "What is the difference between the Cabinet and Council of Ministers?", "answer": "The Cabinet is a smaller, more powerful body within the Council of Ministers." }],
              hard: [{ "id": "h1", "question": "Explain the election process of the President in detail.", "answer": "Elected by an electoral college through proportional representation using a single transferable vote system." },
              { "id": "h2", "question": "Discuss the legislative and financial powers of the President.", "answer": "Summons Parliament, gives assent to bills, recommends Money Bills, causes budget to be laid before Parliament." },
              { "id": "h3", "question": "Describe the role and importance of the Prime Minister in a parliamentary system.", "answer": "Leader of the majority, head of the Council of Ministers, chief advisor to the President, steers policies and governance." },
              { "id": "h4", "question": "What are the conditions under which the President can declare a National Emergency?", "answer": "When there is war, external aggression, or armed rebellion." },
              { "id": "h5", "question": "What is the constitutional position of the President in India?", "answer": "Nominal head; exercises powers on the advice of the Council of Ministers." },
              { "id": "h6", "question": "What is meant by collective responsibility of the Council of Ministers?", "answer": "They are collectively accountable to the Lok Sabha for government policies and actions." },
              { "id": "h7", "question": "How is the President’s ordinance-making power checked?", "answer": "Ordinances must be approved by Parliament within six weeks of reassembly." },
              { "id": "h8", "question": "Differentiate between the powers of the President and the Prime Minister.", "answer": "President is the ceremonial head; the Prime Minister holds real executive power." },
              { "id": "h9", "question": "What are the judicial powers of the President?", "answer": "Can grant pardons, reprieves, respites, or remissions of punishment." },
              { "id": "h10", "question": "Explain the significance of the Vice-President’s role as Chairman of the Rajya Sabha.", "answer": "Presides over sessions, ensures order, decides procedural matters, and has a casting vote in a tie." }]
            }
          },
          {
            id: "judiciary-10-icse",
            title: "The Judiciary",
            flashcards: {
              beginner: [{ "id": "b1", "question": "What is the highest court in India?", "answer": "The Supreme Court." },
              { "id": "b2", "question": "Which court is below the Supreme Court?", "answer": "The High Court." },
              { "id": "b3", "question": "Name the three levels of Indian judiciary.", "answer": "Supreme Court, High Courts, Subordinate Courts." },
              { "id": "b4", "question": "Who appoints the Chief Justice of India?", "answer": "The President of India." },
              { "id": "b5", "question": "What is the tenure of a Supreme Court judge?", "answer": "Until the age of 65 years." },
              { "id": "b6", "question": "What are Subordinate Courts?", "answer": "Courts that function under the control of High Courts in districts." },
              { "id": "b7", "question": "Who is the head of the judiciary in a state?", "answer": "The Chief Justice of the High Court." },
              { "id": "b8", "question": "What is meant by 'judiciary'?", "answer": "It is the system of courts that interprets and applies the law." },
              { "id": "b9", "question": "How many judges are there in the Supreme Court?", "answer": "One Chief Justice and up to 33 other judges." },
              { "id": "b10", "question": "What is the retirement age of a High Court judge?", "answer": "62 years." }],
              intermediate: [{ "id": "i1", "question": "What are the qualifications required to become a Supreme Court judge?", "answer": "Citizen of India, judge of a High Court for 5 years or advocate for 10 years, or a distinguished jurist." },
              { "id": "i2", "question": "Name three types of jurisdiction of the Supreme Court.", "answer": "Original, appellate, and advisory jurisdiction." },
              { "id": "i3", "question": "What is Judicial Review?", "answer": "The power of the courts to declare laws unconstitutional." },
              { "id": "i4", "question": "What is meant by independence of judiciary?", "answer": "Judges are free from influence by the executive or legislature." },
              { "id": "i5", "question": "What is the difference between civil and criminal cases?", "answer": "Civil cases deal with disputes between individuals; criminal cases deal with crimes and punishments." },
              { "id": "i6", "question": "What are writs? Name any two.", "answer": "Legal orders issued by the Supreme Court or High Courts. Examples: Habeas Corpus, Mandamus." },
              { "id": "i7", "question": "What is appellate jurisdiction?", "answer": "The power to hear appeals from lower courts." },
              { "id": "i8", "question": "Who controls the Subordinate Courts?", "answer": "The High Court of the respective state." },
              { "id": "i9", "question": "What is the advisory jurisdiction of the Supreme Court?", "answer": "The President can seek the opinion of the Court on legal or constitutional matters." },
              { "id": "i10", "question": "What are Lok Adalats?", "answer": "People's courts set up for speedy resolution of minor disputes." }],
              hard: [{ "id": "h1", "question": "Explain the original jurisdiction of the Supreme Court with examples.", "answer": "Disputes between the Centre and states or between states. E.g., river water disputes." },
              { "id": "h2", "question": "Discuss the concept of Judicial Activism with examples.", "answer": "When the judiciary takes an active role in enforcing rights or correcting injustice, e.g., PILs." },
              { "id": "h3", "question": "Explain how the independence of the judiciary is ensured in India.", "answer": "Fixed tenure, security of salary, no interference in judicial work, independent appointment process." },
              { "id": "h4", "question": "What is the significance of Public Interest Litigation (PIL)?", "answer": "Allows citizens to seek legal remedy for public issues, making justice more accessible." },
              { "id": "h5", "question": "How can a judge of the Supreme Court be removed?", "answer": "Through impeachment by Parliament for proved misbehavior or incapacity." },
              { "id": "h6", "question": "Describe the role of the High Courts in protecting Fundamental Rights.", "answer": "They can issue writs to enforce Fundamental Rights." },
              { "id": "h7", "question": "What is the difference in jurisdiction between the Supreme Court and High Court?", "answer": "Supreme Court has nationwide jurisdiction; High Courts are restricted to their states." },
              { "id": "h8", "question": "Discuss the role of Subordinate Courts in the justice system.", "answer": "Handle day-to-day legal disputes, reduce burden on higher courts, ensure grassroots justice." },
              { "id": "h9", "question": "What is meant by the Rule of Law in the context of judiciary?", "answer": "Law is supreme and applies equally to all citizens." },
              { "id": "h10", "question": "Explain how the judiciary acts as the guardian of the Constitution.", "answer": "Interprets the Constitution, protects Fundamental Rights, can strike down unconstitutional laws." }]
            }
          },
          {
            id: "first-war-1857-10-icse",
            title: "The First War of Independence, 1857",
            flashcards: {
              beginner: [{ "id": "b1", "question": "When did the First War of Independence take place?", "answer": "In 1857." },
              { "id": "b2", "question": "Who led the revolt in Kanpur during 1857?", "answer": "Nana Sahib." },
              { "id": "b3", "question": "What was the main cause of the 1857 revolt?", "answer": "The use of greased cartridges that offended religious sentiments." },
              { "id": "b4", "question": "Name the organization founded in 1885.", "answer": "Indian National Congress." },
              { "id": "b5", "question": "Who was the first president of the Indian National Congress?", "answer": "W.C. Bonnerjee." },
              { "id": "b6", "question": "Who was known as the 'Grand Old Man of India'?", "answer": "Dadabhai Naoroji." },
              { "id": "b7", "question": "What was the slogan of Bal Gangadhar Tilak?", "answer": "\"Swaraj is my birthright and I shall have it.\"" },
              { "id": "b8", "question": "What is nationalism?", "answer": "A feeling of unity and love for one’s country." },
              { "id": "b9", "question": "Name any one early nationalist leader.", "answer": "Gopal Krishna Gokhale." },
              { "id": "b10", "question": "What was the purpose of the Indian National Congress?", "answer": "To present Indian demands to the British government." }],
              intermediate: [{ "id": "i1", "question": "What were the political causes of the 1857 revolt?", "answer": "Doctrine of Lapse, annexation of states, disrespect to Indian rulers." },
              { "id": "i2", "question": "Explain the role of Bahadur Shah Zafar in 1857.", "answer": "He was declared the symbolic leader of the revolt by Indian soldiers." },
              { "id": "i3", "question": "Mention two economic causes of the 1857 revolt.", "answer": "High taxes and destruction of traditional industries." },
              { "id": "i4", "question": "Why did the revolt of 1857 fail?", "answer": "Lack of unity, poor planning, and superior British military strength." },
              { "id": "i5", "question": "What was the impact of the 1857 revolt on British policy?", "answer": "The rule of India was transferred from the East India Company to the British Crown." },
              { "id": "i6", "question": "Distinguish between Moderates and Assertive Nationalists.", "answer": "Moderates believed in petitions; Assertives believed in mass movements." },
              { "id": "i7", "question": "What were the methods of the Early Nationalists?", "answer": "Petitions, speeches, resolutions, and appeals to British conscience." },
              { "id": "i8", "question": "What were the three demands of the Early Nationalists?", "answer": "Indianisation of services, reduction in military expenditure, and civil rights." },
              { "id": "i9", "question": "Who were the main leaders of the Assertive phase?", "answer": "Bal Gangadhar Tilak, Bipin Chandra Pal, and Lala Lajpat Rai." },
              { "id": "i10", "question": "Name any two newspapers started by nationalist leaders.", "answer": "\"Kesari\" by Tilak and \"The Hindu\" by G. Subramania Iyer." }],
              hard: [{ "id": "h1", "question": "Explain the significance of the First War of Independence.", "answer": "It was the first united challenge to British rule, though it failed." },
              { "id": "h2", "question": "How did socio-religious reform movements lead to nationalism?", "answer": "They revived pride in Indian culture and challenged British superiority." },
              { "id": "h3", "question": "Describe the impact of Western education on Indian nationalism.", "answer": "Created awareness of liberty, rights, and political ideas among Indians." },
              { "id": "h4", "question": "What role did the press play in the growth of nationalism?", "answer": "It spread patriotic ideas and exposed British injustices." },
              { "id": "h5", "question": "Critically examine the reasons for the failure of the 1857 revolt.", "answer": "Lack of coordination, limited support, poor leadership, and betrayal." },
              { "id": "h6", "question": "Compare the methods of Moderates and Assertives.", "answer": "Moderates used peaceful means; Assertives promoted boycotts and protests." },
              { "id": "h7", "question": "Evaluate the role of Dadabhai Naoroji in the nationalist movement.", "answer": "Exposed economic drain theory, represented India in British Parliament." },
              { "id": "h8", "question": "What were the main objectives of the Indian National Congress?", "answer": "To develop nationalism, unite people, and place demands before the British." },
              { "id": "h9", "question": "How did the Partition of Bengal influence Indian nationalism?", "answer": "It led to protests and gave rise to the Swadeshi and Boycott movements." },
              { "id": "h10", "question": "Assess the contribution of Gopal Krishna Gokhale to Indian politics.", "answer": "Promoted moderate politics, influenced Gandhiji, founded the Servants of India Society." }]
            }
          },
          {
            id: "indian-national-movement-1885-1907-10-icse",
            title: "First Phase of the Indian National Movement (1885–1907)",
            flashcards: {
              beginner: [{ "id": "b1", "question": "When did Mahatma Gandhi return to India?", "answer": "In 1915." },
              { "id": "b2", "question": "What was the method of Satyagraha?", "answer": "A method of non-violent resistance or civil disobedience." },
              { "id": "b3", "question": "What does 'Swadeshi' mean?", "answer": "Using goods made in one’s own country." },
              { "id": "b4", "question": "Which event led to the Non-Cooperation Movement?", "answer": "The Jallianwala Bagh massacre in 1919." },
              { "id": "b5", "question": "When was the Non-Cooperation Movement launched?", "answer": "In 1920." },
              { "id": "b6", "question": "What is the Civil Disobedience Movement?", "answer": "A movement where people refused to obey unjust laws." },
              { "id": "b7", "question": "Who led the Salt March?", "answer": "Mahatma Gandhi." },
              { "id": "b8", "question": "When was the Quit India Movement launched?", "answer": "In 1942." },
              { "id": "b9", "question": "What was Gandhiji’s role in the freedom struggle?", "answer": "He led non-violent mass movements against British rule." },
              { "id": "b10", "question": "When did India become independent?", "answer": "On 15th August, 1947." }],
              intermediate: [{ "id": "i1", "question": "What were the aims of the Non-Cooperation Movement?", "answer": "To boycott British goods, courts, and institutions and promote Swaraj." },
              { "id": "i2", "question": "Describe the Salt March briefly.", "answer": "Gandhiji marched from Sabarmati to Dandi in 1930 to make salt and protest British monopoly." },
              { "id": "i3", "question": "What was the Khilafat Movement?", "answer": "A movement by Indian Muslims to support the Caliph of Turkey, supported by Gandhiji." },
              { "id": "i4", "question": "Why did Gandhiji withdraw the Non-Cooperation Movement?", "answer": "Due to the violent Chauri Chaura incident in 1922." },
              { "id": "i5", "question": "What were the main features of the Civil Disobedience Movement?", "answer": "Breaking laws like salt tax, picketing foreign cloth, and refusal to pay taxes." },
              { "id": "i6", "question": "How did British respond to the Quit India Movement?", "answer": "They arrested leaders, banned Congress, and used repression." },
              { "id": "i7", "question": "What was the slogan of the Quit India Movement?", "answer": "\"Do or Die\"." },
              { "id": "i8", "question": "What was the significance of the Lahore Session of Congress in 1929?", "answer": "It declared 'Purna Swaraj' (Complete Independence) as the goal." },
              { "id": "i9", "question": "What role did the Indian National Congress play during this period?", "answer": "It organized mass movements under Gandhiji’s leadership." },
              { "id": "i10", "question": "How did World War II impact the Indian freedom movement?", "answer": "Britain involved India without consent, leading to the Quit India Movement." }],
              hard: [{ "id": "h1", "question": "Critically examine the effectiveness of Gandhiji's non-violent methods.", "answer": "They mobilized masses peacefully, but at times failed to achieve immediate political gains." },
              { "id": "h2", "question": "Explain the causes and impact of the Jallianwala Bagh massacre.", "answer": "It led to national outrage and was a turning point in the freedom struggle." },
              { "id": "h3", "question": "Describe the impact of the Civil Disobedience Movement on Indian society.", "answer": "It involved large sections including women and peasants, spreading nationalism widely." },
              { "id": "h4", "question": "Analyze the reasons behind the failure of the Quit India Movement.", "answer": "Brutal British repression and lack of organized leadership due to mass arrests." },
              { "id": "h5", "question": "Evaluate the role of Gandhiji in uniting Indians across religions and classes.", "answer": "He promoted unity through inclusive movements, but faced communal tensions." },
              { "id": "h6", "question": "What were the limitations of the Non-Cooperation Movement?", "answer": "It lacked a strong rural base and was halted due to violence." },
              { "id": "h7", "question": "Discuss the importance of the Dandi March in the Indian freedom movement.", "answer": "It defied British salt laws and inspired civil disobedience across India." },
              { "id": "h8", "question": "How did the British try to suppress the national movement between 1915 and 1947?", "answer": "Through arrests, bans, censorship, and police violence." },
              { "id": "h9", "question": "Explain the contribution of women to the freedom struggle under Gandhiji.", "answer": "Women like Sarojini Naidu actively participated in protests and civil disobedience." },
              { "id": "h10", "question": "How did the Indian National Movement evolve between 1915 and 1947?", "answer": "It transformed from petitions to mass movements, gaining independence in 1947." }]
            }
          },
          {
            id: "mahatma-gandhi-mass-phase-10-icse",
            title: "Mahatma Gandhi and the Mass Phase (1915–1947)",
            flashcards: {
              beginner: [],
              intermediate: [],
              hard: []
            }
          },
          {
            id: "second-world-war-10-icse",
            title: "The Second World War",
            flashcards: {
              beginner: [{ "id": "b1", "question": "When did the Second World War begin?", "answer": "In 1939." },
              { "id": "b2", "question": "Which countries formed the Axis Powers?", "answer": "Germany, Italy, and Japan." },
              { "id": "b3", "question": "Which countries formed the Allied Powers?", "answer": "Britain, France, USSR, and USA." },
              { "id": "b4", "question": "How did Britain involve India in WWII?", "answer": "Without consulting Indian leaders." },
              { "id": "b5", "question": "What was the Cripps Mission?", "answer": "A British mission in 1942 to get Indian support during WWII." },
              { "id": "b6", "question": "What was INA?", "answer": "The Indian National Army formed to fight British rule." },
              { "id": "b7", "question": "Who led the INA?", "answer": "Subhas Chandra Bose." },
              { "id": "b8", "question": "What was the Quit India Movement?", "answer": "A mass movement demanding British withdrawal in 1942." },
              { "id": "b9", "question": "What was the Atlantic Charter?", "answer": "A 1941 agreement supporting self-determination." },
              { "id": "b10", "question": "When did WWII end?", "answer": "In 1945." }],
              intermediate: [{ "id": "i1", "question": "What were the causes of the Second World War?", "answer": "Treaty of Versailles, rise of dictators, failure of League of Nations, etc." },
              { "id": "i2", "question": "Why did Indians oppose participation in WWII?", "answer": "Because they were not consulted and wanted freedom first." },
              { "id": "i3", "question": "Why was the Cripps Mission rejected by Indian leaders?", "answer": "Because it didn’t offer immediate independence." },
              { "id": "i4", "question": "What role did Subhas Chandra Bose play in WWII?", "answer": "He led INA and sought help from Axis powers to free India." },
              { "id": "i5", "question": "How did WWII impact British control over India?", "answer": "It weakened Britain economically and politically, pushing them toward granting independence." },
              { "id": "i6", "question": "What was the impact of INA trials on Indians?", "answer": "They created widespread sympathy and unrest against British rule." },
              { "id": "i7", "question": "How did the Quit India Movement relate to WWII?", "answer": "It was launched due to British refusal to free India during the war." },
              { "id": "i8", "question": "What did the failure of the Cripps Mission lead to?", "answer": "The launch of the Quit India Movement." },
              { "id": "i9", "question": "How did WWII influence the Indian economy?", "answer": "Inflation, shortages, and war expenditure worsened the economy." },
              { "id": "i10", "question": "How did Indian soldiers contribute in WWII?", "answer": "Over 2 million Indians fought for the Allies in various countries." }],
              hard: [{ "id": "h1", "question": "Analyze the reasons behind Indian opposition to British war efforts.", "answer": "Lack of consultation, suppression of national movement, and demand for freedom." },
              { "id": "h2", "question": "Evaluate the significance of the Cripps Mission.", "answer": "Though it failed, it acknowledged Indian aspirations for independence." },
              { "id": "h3", "question": "Discuss the aims and actions of the INA.", "answer": "INA aimed to liberate India by military means with Axis support." },
              { "id": "h4", "question": "How did WWII help hasten Indian independence?", "answer": "It exhausted British resources and increased Indian resistance." },
              { "id": "h5", "question": "Assess the impact of the Quit India Movement during WWII.", "answer": "Though suppressed, it showed total Indian rejection of colonial rule." },
              { "id": "h6", "question": "Explain how global post-war changes influenced India’s freedom.", "answer": "Global push for decolonization, rise of USA & USSR, and UN Charter supported freedom." },
              { "id": "h7", "question": "How did Indian society respond to INA trials?", "answer": "With mass protests, strikes, and support for INA soldiers." },
              { "id": "h8", "question": "What role did Netaji play differently than Gandhiji?", "answer": "He advocated militant struggle versus Gandhiji’s non-violence." },
              { "id": "h9", "question": "Evaluate the effectiveness of Indian participation in Allied war efforts.", "answer": "Valuable militarily, but failed to gain political concessions." },
              { "id": "h10", "question": "What were the political consequences in India after WWII?", "answer": "Mounting pressure led to Cabinet Mission, interim government, and independence." }]
            }
          },
          {
            id: "united-nations-10-icse",
            title: "United Nations",
            flashcards: {
              beginner: [{ "id": "b1", "question": "When was the United Nations founded?", "answer": "On 24th October 1945." },
              { "id": "b2", "question": "What is the main aim of the United Nations?", "answer": "To maintain international peace and security." },
              { "id": "b3", "question": "Where is the headquarters of the United Nations?", "answer": "In New York, USA." },
              { "id": "b4", "question": "How many principal organs does the UN have?", "answer": "Six." },
              { "id": "b5", "question": "Name the most powerful organ of the UN.", "answer": "The Security Council." },
              { "id": "b6", "question": "Which organ includes all member states?", "answer": "The General Assembly." },
              { "id": "b7", "question": "Which UN organ settles international disputes?", "answer": "The International Court of Justice (ICJ)." },
              { "id": "b8", "question": "Name the head of the UN Secretariat.", "answer": "The Secretary-General." },
              { "id": "b9", "question": "How many countries were original members of the UN?", "answer": "51 countries." },
              { "id": "b10", "question": "What is the UN Charter?", "answer": "The foundational treaty of the United Nations." }],
              intermediate: [{ "id": "i1", "question": "State any two objectives of the UN.", "answer": "To develop friendly relations among nations and promote human rights." },
              { "id": "i2", "question": "What is the composition of the Security Council?", "answer": "15 members – 5 permanent and 10 non-permanent." },
              { "id": "i3", "question": "Name any two permanent members of the Security Council.", "answer": "USA and Russia." },
              { "id": "i4", "question": "What is the role of the General Assembly?", "answer": "It discusses issues, makes recommendations, and approves the budget." },
              { "id": "i5", "question": "What is the tenure of non-permanent members in the Security Council?", "answer": "Two years." },
              { "id": "i6", "question": "Where is the International Court of Justice located?", "answer": "The Hague, Netherlands." },
              { "id": "i7", "question": "Name any two major agencies of the UN.", "answer": "UNESCO and WHO." },
              { "id": "i8", "question": "How does the UN promote social progress?", "answer": "Through specialized agencies and development programs." },
              { "id": "i9", "question": "What is the role of the Economic and Social Council?", "answer": "To coordinate economic, social, and humanitarian activities." },
              { "id": "i10", "question": "How has India contributed to UN peacekeeping?", "answer": "By sending large contingents to various UN missions." }],
              hard: [{ "id": "h1", "question": "Discuss the importance of the UN in maintaining world peace.", "answer": "Through peacekeeping, conflict mediation, sanctions, and diplomatic efforts." },
              { "id": "h2", "question": "Evaluate the powers of the Security Council.", "answer": "It can impose sanctions, authorize force, and determine threats to peace." },
              { "id": "h3", "question": "What are the criticisms of the UN structure?", "answer": "Lack of representation, veto power misuse, and inefficiency." },
              { "id": "h4", "question": "Explain the role of the ICJ in global affairs.", "answer": "It resolves legal disputes between states and advises UN bodies." },
              { "id": "h5", "question": "How does the UN Charter guide the organization?", "answer": "It lays down purposes, principles, and functioning mechanisms." },
              { "id": "h6", "question": "How has the UN supported developing nations?", "answer": "Through technical aid, education, health programs, and economic support." },
              { "id": "h7", "question": "Assess the role of India in the functioning of the UN.", "answer": "As a founding member and major contributor to peacekeeping operations." },
              { "id": "h8", "question": "Should the UN Security Council be reformed? Give reasons.", "answer": "Yes, to reflect current global realities and increase fairness." },
              { "id": "h9", "question": "Describe the importance of UN specialized agencies.", "answer": "They address global issues like health, education, labor, and food." },
              { "id": "h10", "question": "Explain the role of the Secretary-General in the UN system.", "answer": "He acts as spokesperson, diplomat, and administrator of UN activities." }]
            }
          }
        ]
      },
      {
        "id": "geography-10-icse",
        "name": "Geography",
        "icon": "🌍",
        "color": "from-cyan-400 to-cyan-600",
        "chapters": [
          {
            "id": "location-extent-10-icse",
            "title": "Location, Extent and Physical Features",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is the latitudinal extent of India?", "answer": "8°4'N to 37°6'N." },
                { "id": "b2", "difficulty": "beginner", "question": "What is the longitudinal extent of India?", "answer": "68°7'E to 97°25'E." },
                { "id": "b3", "difficulty": "beginner", "question": "What is the total area of India?", "answer": "Approximately 3.28 million square kilometers." },
                { "id": "b4", "difficulty": "beginner", "question": "Which is the southernmost point of India?", "answer": "Indira Point." },
                { "id": "b5", "difficulty": "beginner", "question": "Which water body lies to the south of India?", "answer": "The Indian Ocean." },
                { "id": "b6", "difficulty": "beginner", "question": "What is the significance of the Tropic of Cancer in India?", "answer": "It divides India into two almost equal parts." },
                { "id": "b7", "difficulty": "beginner", "question": "Which mountain range lies in the north of India?", "answer": "The Himalayas." },
                { "id": "b8", "difficulty": "beginner", "question": "Name the eastern coastal plain of India.", "answer": "The Coromandel Coast." },
                { "id": "b9", "difficulty": "beginner", "question": "Which island group lies to the southeast of India?", "answer": "The Andaman and Nicobar Islands." },
                { "id": "b10", "difficulty": "beginner", "question": "What is the westernmost point of India?", "answer": "Guhar Moti, Gujarat." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "Why is the Standard Meridian of India taken as 82°30'E?", "answer": "It provides a uniform time across the country." },
                { "id": "i2", "difficulty": "intermediate", "question": "Name the three main physical divisions of India.", "answer": "The Himalayas, the Northern Plains, and the Peninsular Plateau." },
                { "id": "i3", "difficulty": "intermediate", "question": "What is the average height of the Western Ghats?", "answer": "About 900 to 1600 meters." },
                { "id": "i4", "difficulty": "intermediate", "question": "What is the importance of the Northern Plains?", "answer": "They are fertile and suitable for agriculture." },
                { "id": "i5", "difficulty": "intermediate", "question": "What separates the Western Ghats from the Eastern Ghats?", "answer": "The Nilgiri Hills." },
                { "id": "i6", "difficulty": "intermediate", "question": "Which landform is the Thar Desert a part of?", "answer": "The Indian Peninsular Plateau." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is the Indo-Gangetic Plain composed of?", "answer": "Alluvial soil deposited by rivers." },
                { "id": "i8", "difficulty": "intermediate", "question": "Why is the Deccan Plateau called a tableland?", "answer": "Because it is a large, flat, elevated landmass." },
                { "id": "i9", "difficulty": "intermediate", "question": "What causes the great diversity in India’s physical features?", "answer": "The varied geological structure and climate." },
                { "id": "i10", "difficulty": "intermediate", "question": "Which physical division forms the boundary between India and Tibet?", "answer": "The Greater Himalayas (Himadri)." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain the formation of the Himalayas.", "answer": "The Himalayas formed due to the collision between the Indian Plate and the Eurasian Plate." },
                { "id": "h2", "difficulty": "hard", "question": "What is the significance of the Indian Peninsula’s triangular shape?", "answer": "It influences monsoon winds and climatic patterns." },
                { "id": "h3", "difficulty": "hard", "question": "Compare the Eastern and Western Ghats in terms of continuity and height.", "answer": "Western Ghats are continuous and higher; Eastern Ghats are discontinuous and lower." },
                { "id": "h4", "difficulty": "hard", "question": "Describe the role of tectonic activity in shaping the Indian subcontinent.", "answer": "Tectonic movements uplifted mountains and formed rift valleys." },
                { "id": "h5", "difficulty": "hard", "question": "How does India’s location in the Northern Hemisphere affect its climate?", "answer": "It results in distinct seasons due to the tilt of the Earth's axis." },
                { "id": "h6", "difficulty": "hard", "question": "What is the significance of India’s central location in the Indian Ocean?", "answer": "It facilitates maritime trade with Africa, West Asia, and Southeast Asia." },
                { "id": "h7", "difficulty": "hard", "question": "How do the Himalayas act as a climatic barrier?", "answer": "They prevent cold Central Asian winds from entering India and block monsoon winds." },
                { "id": "h8", "difficulty": "hard", "question": "Explain the geological differences between the Himalayan region and the Peninsular Plateau.", "answer": "Himalayas are young fold mountains; the plateau is old and stable." },
                { "id": "h9", "difficulty": "hard", "question": "Why are the coastal plains significant for India’s economy?", "answer": "They support agriculture, trade, fishing, and tourism." },
                { "id": "h10", "difficulty": "hard", "question": "What is the role of rivers in shaping India’s physical features?", "answer": "Rivers deposit alluvium, erode land, and form deltas and plains." }
              ]
            }
          },

          {
            "id": "climate-10-icse",
            "title": "Climate",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What type of climate does India have?", "answer": "India has a monsoon-type climate." },
                { "id": "b2", "difficulty": "beginner", "question": "Name the four main seasons in India.", "answer": "Winter, Summer, Monsoon, and Retreating Monsoon." },
                { "id": "b3", "difficulty": "beginner", "question": "Which months are considered the summer season in India?", "answer": "March to May." },
                { "id": "b4", "difficulty": "beginner", "question": "When does the southwest monsoon reach India?", "answer": "Around early June." },
                { "id": "b5", "difficulty": "beginner", "question": "Which winds bring rain to most parts of India?", "answer": "Southwest monsoon winds." },
                { "id": "b6", "difficulty": "beginner", "question": "What is the average annual rainfall in India?", "answer": "Approximately 118 cm." },
                { "id": "b7", "difficulty": "beginner", "question": "Which region in India receives the highest rainfall?", "answer": "Mawsynram in Meghalaya." },
                { "id": "b8", "difficulty": "beginner", "question": "Which season is known for thunderstorms and 'Kalbaisakhi' in Bengal?", "answer": "Pre-monsoon or summer season." },
                { "id": "b9", "difficulty": "beginner", "question": "What is the direction of retreating monsoon winds?", "answer": "From northeast to southwest." },
                { "id": "b10", "difficulty": "beginner", "question": "Which part of India remains dry due to the rain shadow effect?", "answer": "The leeward side of the Western Ghats." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "Why does Tamil Nadu receive rainfall during the retreating monsoon?", "answer": "Because of northeast monsoon winds picking moisture from the Bay of Bengal." },
                { "id": "i2", "difficulty": "intermediate", "question": "Explain the term 'burst of monsoon'.", "answer": "Sudden onset of heavy rainfall with thunderstorms at the beginning of the monsoon." },
                { "id": "i3", "difficulty": "intermediate", "question": "How does altitude affect the climate of India?", "answer": "Higher altitudes have cooler temperatures." },
                { "id": "i4", "difficulty": "intermediate", "question": "Why is the Thar Desert hot and dry?", "answer": "Due to its inland location and lack of vegetation." },
                { "id": "i5", "difficulty": "intermediate", "question": "Name two local winds affecting India during summer.", "answer": "Loo and Kalbaisakhi." },
                { "id": "i6", "difficulty": "intermediate", "question": "What is the role of the Himalayas in Indian climate?", "answer": "They block cold winds and help retain monsoon winds." },
                { "id": "i7", "difficulty": "intermediate", "question": "Why does Kerala receive rainfall earlier than other parts of India?", "answer": "It lies in the path of the southwest monsoon's first branch." },
                { "id": "i8", "difficulty": "intermediate", "question": "How do Western Disturbances affect the Indian climate?", "answer": "They bring winter rain to northwestern India." },
                { "id": "i9", "difficulty": "intermediate", "question": "What causes the variability of rainfall in India?", "answer": "Differences in monsoon patterns and geographical features." },
                { "id": "i10", "difficulty": "intermediate", "question": "Why is the monsoon considered a unifying bond in India?", "answer": "It impacts agriculture, economy, and cultural festivals across the country." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain the mechanism of the Indian monsoon.", "answer": "The monsoon is caused by differential heating of land and sea, resulting in pressure changes that direct moist winds from the ocean to land." },
                { "id": "h2", "difficulty": "hard", "question": "How does El Niño affect Indian monsoons?", "answer": "It weakens the monsoon winds, causing droughts in India." },
                { "id": "h3", "difficulty": "hard", "question": "Describe the regional distribution of rainfall in India.", "answer": "Western coast and northeast get heavy rain, interior and northwest receive less." },
                { "id": "h4", "difficulty": "hard", "question": "What are jet streams and how do they affect Indian weather?", "answer": "Jet streams are high-speed winds in the upper atmosphere; they influence the movement of monsoon systems." },
                { "id": "h5", "difficulty": "hard", "question": "Why do some parts of India experience floods while others face droughts during the same season?", "answer": "Due to uneven distribution and intensity of monsoon rainfall." },
                { "id": "h6", "difficulty": "hard", "question": "How does latitude influence the Indian climate?", "answer": "It causes temperature variations from north to south." },
                { "id": "h7", "difficulty": "hard", "question": "Discuss the impact of climate on Indian agriculture.", "answer": "Agriculture heavily depends on monsoon rains; irregularities lead to crop failure." },
                { "id": "h8", "difficulty": "hard", "question": "What is the significance of monsoon forecasting?", "answer": "It helps in planning agriculture, water resources, and disaster preparedness." },
                { "id": "h9", "difficulty": "hard", "question": "Explain the term 'orographic rainfall' with reference to India.", "answer": "Rainfall caused by moist winds rising over mountains, e.g., Western Ghats." },
                { "id": "h10", "difficulty": "hard", "question": "Why is the Indian climate described as tropical monsoon?", "answer": "Due to the dominance of monsoon winds and seasonal reversal of wind patterns." }
              ]
            }
          },

          {
            "id": "soil-resources-10-icse",
            "title": "Soil Resources",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is soil?", "answer": "Soil is the uppermost layer of the earth’s crust that supports plant growth." },
                { "id": "b2", "difficulty": "beginner", "question": "Name one factor responsible for soil formation.", "answer": "Weathering of rocks." },
                { "id": "b3", "difficulty": "beginner", "question": "Which soil is most suitable for cotton cultivation?", "answer": "Black soil." },
                { "id": "b4", "difficulty": "beginner", "question": "Which type of soil is found in the Indo-Gangetic plains?", "answer": "Alluvial soil." },
                { "id": "b5", "difficulty": "beginner", "question": "What is the main component of red soil?", "answer": "Iron oxide." },
                { "id": "b6", "difficulty": "beginner", "question": "Name one soil type found in Rajasthan.", "answer": "Desert soil." },
                { "id": "b7", "difficulty": "beginner", "question": "Which soil is rich in lime and iron?", "answer": "Black soil." },
                { "id": "b8", "difficulty": "beginner", "question": "Which type of soil is best for paddy cultivation?", "answer": "Alluvial soil." },
                { "id": "b9", "difficulty": "beginner", "question": "Name one measure to prevent soil erosion.", "answer": "Afforestation." },
                { "id": "b10", "difficulty": "beginner", "question": "What is soil erosion?", "answer": "The removal of topsoil by wind, water, or human activity." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "What are the two main types of alluvial soil?", "answer": "Khadar and Bhangar." },
                { "id": "i2", "difficulty": "intermediate", "question": "Why is laterite soil not fertile?", "answer": "It lacks nitrogen, phosphorus, and organic matter." },
                { "id": "i3", "difficulty": "intermediate", "question": "What causes soil degradation?", "answer": "Over-irrigation, deforestation, excessive chemical use, and overgrazing." },
                { "id": "i4", "difficulty": "intermediate", "question": "Name a crop grown in red soil regions.", "answer": "Millets." },
                { "id": "i5", "difficulty": "intermediate", "question": "How does climate affect soil formation?", "answer": "Temperature and rainfall influence the rate of weathering and organic activity." },
                { "id": "i6", "difficulty": "intermediate", "question": "Name one method of soil conservation in hilly areas.", "answer": "Terrace farming." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is the color of laterite soil and why?", "answer": "Reddish due to iron oxide content." },
                { "id": "i8", "difficulty": "intermediate", "question": "Which soil is acidic and found in heavy rainfall areas?", "answer": "Laterite soil." },
                { "id": "i9", "difficulty": "intermediate", "question": "Why is desert soil not suitable for agriculture?", "answer": "It lacks moisture and organic matter." },
                { "id": "i10", "difficulty": "intermediate", "question": "What is leaching in soil?", "answer": "Washing away of nutrients due to heavy rainfall." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain the characteristics and formation of black soil.", "answer": "Formed from lava rocks, black soil is clayey, retains moisture, and is rich in calcium and magnesium." },
                { "id": "h2", "difficulty": "hard", "question": "Discuss the distribution of alluvial soil in India.", "answer": "Mainly in the northern plains, coastal plains, and river valleys." },
                { "id": "h3", "difficulty": "hard", "question": "Compare and contrast red soil and laterite soil.", "answer": "Red soil is formed by weathering of crystalline rocks, low in nitrogen; laterite is from intense leaching, acidic, and infertile." },
                { "id": "h4", "difficulty": "hard", "question": "How does human activity contribute to soil erosion?", "answer": "Deforestation, overgrazing, and unsustainable farming expose soil to erosion agents." },
                { "id": "h5", "difficulty": "hard", "question": "What are the consequences of soil erosion?", "answer": "Loss of fertility, decreased agricultural productivity, and ecological imbalance." },
                { "id": "h6", "difficulty": "hard", "question": "Explain how contour ploughing helps in soil conservation.", "answer": "It reduces water runoff and minimizes erosion by following natural land contours." },
                { "id": "h7", "difficulty": "hard", "question": "Why is humus important in soil?", "answer": "It improves soil fertility, structure, and moisture retention." },
                { "id": "h8", "difficulty": "hard", "question": "Explain the impact of chemical fertilizers on soil health.", "answer": "Overuse can degrade soil structure, reduce fertility, and pollute groundwater." },
                { "id": "h9", "difficulty": "hard", "question": "What are saline and alkaline soils and where are they found?", "answer": "Saline soils contain excess salts (found in arid areas), while alkaline soils have high pH (found in poorly drained areas)." },
                { "id": "h10", "difficulty": "hard", "question": "Describe the measures used in arid regions to conserve soil.", "answer": "Windbreaks, afforestation, controlled grazing, and mulching are commonly used." }
              ]
            }
          },

          {
            "id": "natural-vegetation-10-icse",
            "title": "Natural Vegetation",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is natural vegetation?", "answer": "Plant life that grows naturally without human interference." },
                { "id": "b2", "difficulty": "beginner", "question": "Name any two types of natural vegetation in India.", "answer": "Tropical evergreen forests and deciduous forests." },
                { "id": "b3", "difficulty": "beginner", "question": "What type of vegetation is found in the Thar Desert?", "answer": "Scrub and thorny bushes." },
                { "id": "b4", "difficulty": "beginner", "question": "Which forest type is known as 'monsoon forests'?", "answer": "Tropical deciduous forests." },
                { "id": "b5", "difficulty": "beginner", "question": "Where are mangrove forests found in India?", "answer": "In the Sundarbans delta region." },
                { "id": "b6", "difficulty": "beginner", "question": "What is the main characteristic of evergreen forests?", "answer": "They remain green throughout the year." },
                { "id": "b7", "difficulty": "beginner", "question": "Name one tree found in the Himalayan forests.", "answer": "Deodar." },
                { "id": "b8", "difficulty": "beginner", "question": "Which forest type sheds leaves in dry season?", "answer": "Deciduous forests." },
                { "id": "b9", "difficulty": "beginner", "question": "What is the main tree found in mangrove forests?", "answer": "Sundari tree." },
                { "id": "b10", "difficulty": "beginner", "question": "Which natural vegetation type grows above 3600 m in the Himalayas?", "answer": "Alpine vegetation." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "Explain the term 'xerophytic vegetation'.", "answer": "Plants adapted to survive in dry areas, like cactus and thorny shrubs." },
                { "id": "i2", "difficulty": "intermediate", "question": "Why do evergreen forests appear dark green?", "answer": "Due to dense growth and broad leaves." },
                { "id": "i3", "difficulty": "intermediate", "question": "Mention two characteristics of deciduous forests.", "answer": "They shed leaves seasonally and are found in areas with moderate rainfall." },
                { "id": "i4", "difficulty": "intermediate", "question": "Name two important trees found in moist deciduous forests.", "answer": "Teak and sal." },
                { "id": "i5", "difficulty": "intermediate", "question": "How does altitude affect natural vegetation?", "answer": "Different types of vegetation grow at different altitudes due to temperature and moisture changes." },
                { "id": "i6", "difficulty": "intermediate", "question": "What are the main uses of forest resources?", "answer": "Timber, fuel, medicinal plants, and habitat for wildlife." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is a biosphere reserve?", "answer": "A protected area for conserving biodiversity and natural vegetation." },
                { "id": "i8", "difficulty": "intermediate", "question": "Why are mangrove roots called 'breathing roots'?", "answer": "They grow above soil to absorb oxygen from the air." },
                { "id": "i9", "difficulty": "intermediate", "question": "Name any two trees found in dry deciduous forests.", "answer": "Neem and acacia." },
                { "id": "i10", "difficulty": "intermediate", "question": "What role do forests play in maintaining ecological balance?", "answer": "They regulate climate, control soil erosion, and support biodiversity." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Differentiate between tropical evergreen and tropical deciduous forests with examples.", "answer": "Evergreen forests (e.g., ebony, mahogany) are dense and don't shed leaves; deciduous forests (e.g., sal, teak) shed leaves seasonally." },
                { "id": "h2", "difficulty": "hard", "question": "Explain the zonation of vegetation in the Himalayan region.", "answer": "Vegetation changes with altitude: tropical → temperate → alpine → tundra." },
                { "id": "h3", "difficulty": "hard", "question": "Discuss the role of monsoons in shaping India's vegetation pattern.", "answer": "Seasonal rainfall determines forest types—more rainfall supports evergreen forests, less supports deciduous or thorn forests." },
                { "id": "h4", "difficulty": "hard", "question": "What are the threats to natural vegetation in India?", "answer": "Deforestation, overgrazing, urbanization, and climate change." },
                { "id": "h5", "difficulty": "hard", "question": "Describe the adaptations of plants in desert vegetation.", "answer": "Thick stems, deep roots, and reduced leaves help conserve water." },
                { "id": "h6", "difficulty": "hard", "question": "Why is conservation of forests necessary for sustainable development?", "answer": "Forests provide renewable resources, maintain biodiversity, and support livelihoods." },
                { "id": "h7", "difficulty": "hard", "question": "Explain why alpine vegetation is sparse.", "answer": "Due to low temperatures, poor soil, and short growing seasons." },
                { "id": "h8", "difficulty": "hard", "question": "How do evergreen forests impact the environment?", "answer": "They maintain humidity, protect watersheds, and support diverse fauna." },
                { "id": "h9", "difficulty": "hard", "question": "What is the ecological significance of mangroves?", "answer": "They protect coastal regions from erosion, storms, and support marine life." },
                { "id": "h10", "difficulty": "hard", "question": "Discuss the interdependence of vegetation and wildlife.", "answer": "Vegetation provides food and shelter; animals help in seed dispersal and pollination." }
              ]
            }
          },

          {
            "id": "water-resources-10-icse",
            "title": "Water Resources",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is the main source of freshwater?", "answer": "Rivers, lakes, and groundwater are main sources of freshwater." },
                { "id": "b2", "difficulty": "beginner", "question": "What is irrigation?", "answer": "Supplying water to crops artificially through canals, wells, etc." },
                { "id": "b3", "difficulty": "beginner", "question": "Name two types of irrigation.", "answer": "Canal irrigation and well irrigation." },
                { "id": "b4", "difficulty": "beginner", "question": "Which river valley project is also called 'multipurpose project'?", "answer": "Damodar Valley Project." },
                { "id": "b5", "difficulty": "beginner", "question": "What is a dam?", "answer": "A barrier built across a river to control water flow and store water." },
                { "id": "b6", "difficulty": "beginner", "question": "Name two uses of dams.", "answer": "Irrigation and hydroelectricity generation." },
                { "id": "b7", "difficulty": "beginner", "question": "Which is the largest dam in India?", "answer": "Tehri Dam." },
                { "id": "b8", "difficulty": "beginner", "question": "What is rainwater harvesting?", "answer": "Collecting and storing rainwater for future use." },
                { "id": "b9", "difficulty": "beginner", "question": "Name a major river of peninsular India.", "answer": "Godavari River." },
                { "id": "b10", "difficulty": "beginner", "question": "Why is water called a renewable resource?", "answer": "Because it is replenished through the water cycle." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "What are the advantages of canal irrigation?", "answer": "Covers large areas, provides regular supply of water." },
                { "id": "i2", "difficulty": "intermediate", "question": "State one disadvantage of tank irrigation.", "answer": "It depends on rainfall and may dry up in droughts." },
                { "id": "i3", "difficulty": "intermediate", "question": "What are the components of a multipurpose river valley project?", "answer": "Dam, reservoir, irrigation canals, power station, flood control structures." },
                { "id": "i4", "difficulty": "intermediate", "question": "Explain two benefits of rainwater harvesting.", "answer": "Reduces groundwater depletion and prevents water runoff." },
                { "id": "i5", "difficulty": "intermediate", "question": "Mention one reason for water scarcity in India.", "answer": "Overuse of groundwater for agriculture." },
                { "id": "i6", "difficulty": "intermediate", "question": "What is a drip irrigation system?", "answer": "A system that delivers water directly to plant roots drop by drop." },
                { "id": "i7", "difficulty": "intermediate", "question": "Name two states that rely heavily on well irrigation.", "answer": "Punjab and Uttar Pradesh." },
                { "id": "i8", "difficulty": "intermediate", "question": "What is the main aim of the Bhakra Nangal project?", "answer": "Irrigation, flood control, and hydroelectric power." },
                { "id": "i9", "difficulty": "intermediate", "question": "How do water resources affect agriculture?", "answer": "They provide water needed for irrigation and crop growth." },
                { "id": "i10", "difficulty": "intermediate", "question": "Mention one environmental concern of big dams.", "answer": "Displacement of people and loss of biodiversity." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain how river valley projects help in flood control.", "answer": "They store excess water in reservoirs, reducing flood impact downstream." },
                { "id": "h2", "difficulty": "hard", "question": "Compare well and canal irrigation in terms of cost and area coverage.", "answer": "Wells are cheaper but cover small areas; canals are expensive but cover large regions." },
                { "id": "h3", "difficulty": "hard", "question": "How does over-irrigation affect soil?", "answer": "It causes waterlogging and soil salinization, reducing fertility." },
                { "id": "h4", "difficulty": "hard", "question": "Explain the importance of interlinking of rivers in India.", "answer": "It helps transfer water from surplus to deficit areas, balancing distribution." },
                { "id": "h5", "difficulty": "hard", "question": "How can sustainable water management be achieved?", "answer": "Through rainwater harvesting, efficient irrigation, and public awareness." },
                { "id": "h6", "difficulty": "hard", "question": "Discuss the socio-economic impact of large dam projects.", "answer": "They displace communities, but also create jobs and provide water and electricity." },
                { "id": "h7", "difficulty": "hard", "question": "Why is groundwater overexploited in India?", "answer": "Due to lack of rainfall, over-irrigation, and dependence in rural areas." },
                { "id": "h8", "difficulty": "hard", "question": "Evaluate the drawbacks of using dams for hydroelectric power.", "answer": "Expensive, causes ecological changes, and affects river flow." },
                { "id": "h9", "difficulty": "hard", "question": "What are the challenges in maintaining canal irrigation systems?", "answer": "Siltation, seepage, maintenance costs, and unequal distribution." },
                { "id": "h10", "difficulty": "hard", "question": "Explain how climate change is impacting India's water resources.", "answer": "Irregular rainfall and droughts reduce water availability and increase stress on resources." }
              ]
            }
          },

          {
            "id": "mineral-energy-resources-10-icse",
            "title": "Mineral and Energy Resources",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What are minerals?", "answer": "Naturally occurring substances found in the Earth's crust." },
                { "id": "b2", "difficulty": "beginner", "question": "Name two types of minerals.", "answer": "Metallic and non-metallic minerals." },
                { "id": "b3", "difficulty": "beginner", "question": "What is coal?", "answer": "A fossil fuel used mainly for power generation and industry." },
                { "id": "b4", "difficulty": "beginner", "question": "Which is the largest coal-producing state in India?", "answer": "Jharkhand." },
                { "id": "b5", "difficulty": "beginner", "question": "What is petroleum?", "answer": "A liquid fossil fuel used as fuel and for making chemicals." },
                { "id": "b6", "difficulty": "beginner", "question": "Name one major petroleum producing area in India.", "answer": "Mumbai High." },
                { "id": "b7", "difficulty": "beginner", "question": "What is an ore?", "answer": "A rock that contains enough mineral to make extraction profitable." },
                { "id": "b8", "difficulty": "beginner", "question": "What are renewable sources of energy?", "answer": "Sources that can be replenished, like solar and wind energy." },
                { "id": "b9", "difficulty": "beginner", "question": "Give two examples of metallic minerals.", "answer": "Iron ore and bauxite." },
                { "id": "b10", "difficulty": "beginner", "question": "Which metal is extracted from bauxite?", "answer": "Aluminium." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "Name two non-metallic minerals found in India.", "answer": "Limestone and mica." },
                { "id": "i2", "difficulty": "intermediate", "question": "What is the main use of manganese?", "answer": "Used in making steel and alloys." },
                { "id": "i3", "difficulty": "intermediate", "question": "Where is iron ore mainly found in India?", "answer": "Odisha, Chhattisgarh, and Jharkhand." },
                { "id": "i4", "difficulty": "intermediate", "question": "State one advantage of using hydropower.", "answer": "It is renewable and does not cause pollution." },
                { "id": "i5", "difficulty": "intermediate", "question": "Mention one disadvantage of thermal power.", "answer": "It causes air pollution due to burning of coal." },
                { "id": "i6", "difficulty": "intermediate", "question": "Name one nuclear power plant in India.", "answer": "Tarapur Nuclear Power Plant." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is the significance of minerals in industries?", "answer": "They are raw materials for many manufacturing processes." },
                { "id": "i8", "difficulty": "intermediate", "question": "What are fossil fuels?", "answer": "Fuels formed from remains of ancient plants and animals." },
                { "id": "i9", "difficulty": "intermediate", "question": "What is the main use of natural gas?", "answer": "Used for cooking, electricity generation, and industry." },
                { "id": "i10", "difficulty": "intermediate", "question": "Why is there a need to conserve mineral resources?", "answer": "Because they are non-renewable and take millions of years to form." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain two methods of conservation of minerals.", "answer": "Use substitutes and recycle metals to reduce mineral use." },
                { "id": "h2", "difficulty": "hard", "question": "What are the environmental effects of mining?", "answer": "Deforestation, soil erosion, and water pollution." },
                { "id": "h3", "difficulty": "hard", "question": "Discuss the advantages of renewable over non-renewable energy.", "answer": "Renewables are sustainable, non-polluting, and infinite in supply." },
                { "id": "h4", "difficulty": "hard", "question": "How does mining affect biodiversity?", "answer": "It destroys habitats and endangers plant and animal species." },
                { "id": "h5", "difficulty": "hard", "question": "Why is solar energy not used widely despite being abundant?", "answer": "High initial costs, dependency on sunlight, and storage issues." },
                { "id": "h6", "difficulty": "hard", "question": "Explain how energy resources affect economic development.", "answer": "They fuel industries, transport, and improve productivity." },
                { "id": "h7", "difficulty": "hard", "question": "Differentiate between ferrous and non-ferrous minerals.", "answer": "Ferrous minerals contain iron; non-ferrous do not (e.g., copper, bauxite)." },
                { "id": "h8", "difficulty": "hard", "question": "What steps can be taken for sustainable mining?", "answer": "Afforestation, controlled blasting, and land rehabilitation." },
                { "id": "h9", "difficulty": "hard", "question": "Why is India rich in some minerals but imports others?", "answer": "Uneven distribution and low-grade or insufficient reserves." },
                { "id": "h10", "difficulty": "hard", "question": "Evaluate India's potential for wind energy.", "answer": "India has high wind potential in coastal and hilly areas, but infrastructure is still developing." }
              ]
            }
          },

          {
            "id": "agriculture-10-icse",
            "title": "Agriculture",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is agriculture?", "answer": "The practice of growing crops and raising animals for food and other products." },
                { "id": "b2", "difficulty": "beginner", "question": "Name the two main types of farming.", "answer": "Subsistence farming and commercial farming." },
                { "id": "b3", "difficulty": "beginner", "question": "What is subsistence farming?", "answer": "Farming where crops are grown mainly for the farmer’s own use." },
                { "id": "b4", "difficulty": "beginner", "question": "What is commercial farming?", "answer": "Farming where crops are grown for sale in the market." },
                { "id": "b5", "difficulty": "beginner", "question": "Name two food crops grown in India.", "answer": "Rice and wheat." },
                { "id": "b6", "difficulty": "beginner", "question": "Name two cash crops.", "answer": "Cotton and sugarcane." },
                { "id": "b7", "difficulty": "beginner", "question": "What is irrigation?", "answer": "Artificial supply of water to crops." },
                { "id": "b8", "difficulty": "beginner", "question": "Which crop is called the 'staple food' of India?", "answer": "Rice." },
                { "id": "b9", "difficulty": "beginner", "question": "What is horticulture?", "answer": "Cultivation of fruits, vegetables, and flowers." },
                { "id": "b10", "difficulty": "beginner", "question": "Name one plantation crop.", "answer": "Tea." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "What are the ideal conditions for growing rice?", "answer": "High temperature, heavy rainfall, and clayey soil." },
                { "id": "i2", "difficulty": "intermediate", "question": "In which season is wheat mainly grown in India?", "answer": "Rabi season (winter)." },
                { "id": "i3", "difficulty": "intermediate", "question": "Why is Punjab ideal for wheat cultivation?", "answer": "It has alluvial soil, irrigation facilities, and cool climate." },
                { "id": "i4", "difficulty": "intermediate", "question": "What is the importance of agriculture in the Indian economy?", "answer": "It provides employment and food, and supports industries." },
                { "id": "i5", "difficulty": "intermediate", "question": "Name two problems faced by Indian farmers.", "answer": "Small landholdings and dependence on monsoons." },
                { "id": "i6", "difficulty": "intermediate", "question": "What is mixed farming?", "answer": "Growing crops and rearing animals on the same farm." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is the Green Revolution?", "answer": "A movement that increased food production using modern techniques." },
                { "id": "i8", "difficulty": "intermediate", "question": "What are millets?", "answer": "Small-seeded food grains like jowar, bajra, and ragi." },
                { "id": "i9", "difficulty": "intermediate", "question": "Name a region in India known for tea production.", "answer": "Assam." },
                { "id": "i10", "difficulty": "intermediate", "question": "What is crop rotation?", "answer": "Growing different crops in succession to maintain soil fertility." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain the causes and impact of shifting cultivation.", "answer": "It is caused by poor soil and traditional practices; it leads to deforestation and soil degradation." },
                { "id": "h2", "difficulty": "hard", "question": "How has mechanisation changed Indian agriculture?", "answer": "It has increased productivity but led to rural unemployment." },
                { "id": "h3", "difficulty": "hard", "question": "What are the challenges of sustainable agriculture?", "answer": "Overuse of chemicals, water scarcity, and land degradation." },
                { "id": "h4", "difficulty": "hard", "question": "Why is organic farming gaining popularity?", "answer": "It uses natural inputs and is environmentally friendly." },
                { "id": "h5", "difficulty": "hard", "question": "Analyze the regional distribution of cotton cultivation in India.", "answer": "Mainly in Maharashtra, Gujarat, and parts of Madhya Pradesh due to black soil and dry climate." },
                { "id": "h6", "difficulty": "hard", "question": "What are the effects of climate change on agriculture?", "answer": "Unpredictable rainfall, droughts, and lower crop yields." },
                { "id": "h7", "difficulty": "hard", "question": "Discuss the role of government in improving Indian agriculture.", "answer": "Through subsidies, irrigation projects, minimum support prices, and training programs." },
                { "id": "h8", "difficulty": "hard", "question": "Compare traditional and modern farming methods.", "answer": "Traditional uses manual tools and local seeds; modern uses machinery and HYV seeds." },
                { "id": "h9", "difficulty": "hard", "question": "What are agro-based industries? Give examples.", "answer": "Industries that use agricultural raw materials, e.g., textile and sugar industries." },
                { "id": "h10", "difficulty": "hard", "question": "Suggest three ways to increase agricultural productivity in India.", "answer": "Use of modern technology, better irrigation, and farmer education." }
              ]
            }
          },
          {
            "id": "manufacturing-10-icse",
            "title": "Manufacturing Industries",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is manufacturing?", "answer": "The process of converting raw materials into finished goods." },
                { "id": "b2", "difficulty": "beginner", "question": "What are raw materials?", "answer": "Basic substances used to make finished products." },
                { "id": "b3", "difficulty": "beginner", "question": "Give one example of a manufacturing industry.", "answer": "Textile industry." },
                { "id": "b4", "difficulty": "beginner", "question": "Name a state where the iron and steel industry is located.", "answer": "Jharkhand." },
                { "id": "b5", "difficulty": "beginner", "question": "What is the importance of manufacturing industries?", "answer": "They provide employment and boost the economy." },
                { "id": "b6", "difficulty": "beginner", "question": "Name one agro-based industry.", "answer": "Sugar industry." },
                { "id": "b7", "difficulty": "beginner", "question": "What is the location of the Tata Iron and Steel Plant?", "answer": "Jamshedpur." },
                { "id": "b8", "difficulty": "beginner", "question": "Which industry is known as the 'backbone of modern industry'?", "answer": "Iron and steel industry." },
                { "id": "b9", "difficulty": "beginner", "question": "Name a city famous for cotton textiles.", "answer": "Mumbai." },
                { "id": "b10", "difficulty": "beginner", "question": "What does the cement industry produce?", "answer": "Cement used in construction." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "What factors influence the location of industries?", "answer": "Availability of raw materials, power, labor, transport, and market." },
                { "id": "i2", "difficulty": "intermediate", "question": "Explain the term 'public sector industry' with an example.", "answer": "Owned by the government, e.g., SAIL." },
                { "id": "i3", "difficulty": "intermediate", "question": "What is meant by 'agro-based industries'?", "answer": "Industries that use agricultural products as raw materials." },
                { "id": "i4", "difficulty": "intermediate", "question": "Why is the iron and steel industry called a basic industry?", "answer": "Because it provides raw materials to other industries." },
                { "id": "i5", "difficulty": "intermediate", "question": "Name two problems faced by cotton textile industries.", "answer": "Obsolete machinery and power shortage." },
                { "id": "i6", "difficulty": "intermediate", "question": "Which Indian city is known for its IT industry?", "answer": "Bengaluru." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is an industrial region?", "answer": "A region where several industries are concentrated." },
                { "id": "i8", "difficulty": "intermediate", "question": "Name a mineral-based industry.", "answer": "Aluminium industry." },
                { "id": "i9", "difficulty": "intermediate", "question": "Mention two causes of industrial pollution.", "answer": "Emission of smoke and release of industrial waste into water bodies." },
                { "id": "i10", "difficulty": "intermediate", "question": "What is the role of transport in industrial development?", "answer": "It helps in the movement of raw materials and finished goods." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Compare agro-based and mineral-based industries with examples.", "answer": "Agro-based use agricultural raw materials (e.g., sugar), mineral-based use minerals (e.g., steel)." },
                { "id": "h2", "difficulty": "hard", "question": "Analyze the locational advantages of the Jamshedpur steel plant.", "answer": "Near raw materials, water from Subarnarekha, good transport, and labor supply." },
                { "id": "h3", "difficulty": "hard", "question": "What are the steps taken by the government to support small-scale industries?", "answer": "Subsidies, training programs, easier loans, and infrastructure support." },
                { "id": "h4", "difficulty": "hard", "question": "Explain how the IT industry contributes to India's economy.", "answer": "It generates employment, increases exports, and attracts foreign investment." },
                { "id": "h5", "difficulty": "hard", "question": "Discuss the environmental impact of thermal power plants.", "answer": "Air and water pollution, thermal pollution, and carbon emissions." },
                { "id": "h6", "difficulty": "hard", "question": "Why is the petrochemical industry strategically important?", "answer": "It provides essential materials for plastic, fertilizers, and synthetic fibers." },
                { "id": "h7", "difficulty": "hard", "question": "Evaluate the reasons behind the decline of jute industry in India.", "answer": "Competition from synthetic substitutes, labor issues, and outdated machinery." },
                { "id": "h8", "difficulty": "hard", "question": "How does globalization affect Indian manufacturing industries?", "answer": "Increased competition, access to global markets, and need for quality improvement." },
                { "id": "h9", "difficulty": "hard", "question": "Suggest measures to reduce industrial pollution.", "answer": "Treatment plants, use of cleaner fuels, waste recycling, and strict laws." },
                { "id": "h10", "difficulty": "hard", "question": "What is the significance of industrial corridors in India?", "answer": "They promote planned industrial growth and improve infrastructure and logistics." }
              ]
            }
          },

          {
            "id": "transport-10-icse",
            "title": "Transport",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is transport?", "answer": "The movement of people and goods from one place to another." },
                { "id": "b2", "difficulty": "beginner", "question": "Name the three main modes of transport.", "answer": "Land, water, and air transport." },
                { "id": "b3", "difficulty": "beginner", "question": "Which is the cheapest mode of transport for bulky goods?", "answer": "Water transport." },
                { "id": "b4", "difficulty": "beginner", "question": "Which mode of transport is the fastest?", "answer": "Air transport." },
                { "id": "b5", "difficulty": "beginner", "question": "What is the name of India’s national airline?", "answer": "Air India." },
                { "id": "b6", "difficulty": "beginner", "question": "What is the full form of NH?", "answer": "National Highway." },
                { "id": "b7", "difficulty": "beginner", "question": "Name one major port on the west coast of India.", "answer": "Mumbai Port." },
                { "id": "b8", "difficulty": "beginner", "question": "Which organization manages railways in India?", "answer": "Indian Railways." },
                { "id": "b9", "difficulty": "beginner", "question": "Name one major international airport in India.", "answer": "Indira Gandhi International Airport, Delhi." },
                { "id": "b10", "difficulty": "beginner", "question": "Which transport is commonly used in mountainous regions?", "answer": "Road transport." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "How does transport affect the economy of a country?", "answer": "It facilitates trade, mobility, and overall development." },
                { "id": "i2", "difficulty": "intermediate", "question": "What is the Golden Quadrilateral?", "answer": "A network of highways connecting Delhi, Mumbai, Chennai, and Kolkata." },
                { "id": "i3", "difficulty": "intermediate", "question": "Why is rail transport preferred for long distances?", "answer": "It is cost-effective, energy-efficient, and suitable for heavy goods." },
                { "id": "i4", "difficulty": "intermediate", "question": "Mention two disadvantages of road transport.", "answer": "Traffic congestion and pollution." },
                { "id": "i5", "difficulty": "intermediate", "question": "What are pipelines used for?", "answer": "To transport oil, gas, and water." },
                { "id": "i6", "difficulty": "intermediate", "question": "Name two inland waterways in India.", "answer": "Ganga and Brahmaputra rivers." },
                { "id": "i7", "difficulty": "intermediate", "question": "What is the role of civil aviation in India?", "answer": "Connects remote areas and facilitates business and tourism." },
                { "id": "i8", "difficulty": "intermediate", "question": "Why are ports important for a country?", "answer": "They enable import and export of goods." },
                { "id": "i9", "difficulty": "intermediate", "question": "What is a metro rail system?", "answer": "An urban rail transit system used in cities for mass transportation." },
                { "id": "i10", "difficulty": "intermediate", "question": "What does NHDP stand for?", "answer": "National Highway Development Project." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain the need for an integrated transport system in India.", "answer": "To connect remote areas, reduce travel time, and support economic growth by coordinating all modes of transport." },
                { "id": "h2", "difficulty": "hard", "question": "Discuss the challenges faced by Indian railways.", "answer": "Overcrowding, outdated infrastructure, delays, and high maintenance costs." },
                { "id": "h3", "difficulty": "hard", "question": "Evaluate the impact of transportation on the environment.", "answer": "Leads to air and noise pollution, greenhouse gas emissions, and habitat destruction." },
                { "id": "h4", "difficulty": "hard", "question": "How do national highways contribute to industrial development?", "answer": "They connect industrial hubs and reduce travel time for goods movement." },
                { "id": "h5", "difficulty": "hard", "question": "What is the significance of inland waterways in India?", "answer": "They are cost-effective, environment-friendly, and useful for bulk cargo." },
                { "id": "h6", "difficulty": "hard", "question": "Compare and contrast road and rail transport in terms of flexibility, cost, and speed.", "answer": "Roads are flexible but costly; railways are economical but less flexible." },
                { "id": "h7", "difficulty": "hard", "question": "Explain the importance of the Delhi-Mumbai Industrial Corridor (DMIC).", "answer": "It promotes industrial development, improves logistics, and creates employment." },
                { "id": "h8", "difficulty": "hard", "question": "Why is air transport important for a large country like India?", "answer": "It ensures quick connectivity across vast distances and inaccessible areas." },
                { "id": "h9", "difficulty": "hard", "question": "What are the causes for underutilization of Indian inland waterways?", "answer": "Siltation, lack of infrastructure, seasonal variations, and slow speed." },
                { "id": "h10", "difficulty": "hard", "question": "Suggest sustainable solutions to reduce transport-related pollution.", "answer": "Promote public transport, electric vehicles, and eco-friendly fuels." }
              ]
            }
          },

          {
            "id": "waste-management-10-icse",
            "title": "Waste Management",
            "flashcards": {
              "beginner": [
                { "id": "b1", "difficulty": "beginner", "question": "What is waste?", "answer": "Unwanted or unusable materials that are discarded." },
                { "id": "b2", "difficulty": "beginner", "question": "Name two types of waste.", "answer": "Biodegradable and non-biodegradable." },
                { "id": "b3", "difficulty": "beginner", "question": "What is biodegradable waste?", "answer": "Waste that can be broken down by natural processes." },
                { "id": "b4", "difficulty": "beginner", "question": "Give an example of non-biodegradable waste.", "answer": "Plastic bottles." },
                { "id": "b5", "difficulty": "beginner", "question": "What does the 3Rs stand for?", "answer": "Reduce, Reuse, Recycle." },
                { "id": "b6", "difficulty": "beginner", "question": "What is landfill?", "answer": "A site for the disposal of waste materials by burial." },
                { "id": "b7", "difficulty": "beginner", "question": "Name one source of domestic waste.", "answer": "Kitchen waste." },
                { "id": "b8", "difficulty": "beginner", "question": "What is e-waste?", "answer": "Electronic waste like old computers and phones." },
                { "id": "b9", "difficulty": "beginner", "question": "How can we reduce waste?", "answer": "By using less and reusing materials." },
                { "id": "b10", "difficulty": "beginner", "question": "What is composting?", "answer": "The process of converting organic waste into manure." }
              ],
              "intermediate": [
                { "id": "i1", "difficulty": "intermediate", "question": "Why is waste segregation important?", "answer": "It helps in recycling and reduces environmental pollution." },
                { "id": "i2", "difficulty": "intermediate", "question": "What is hazardous waste?", "answer": "Waste that poses danger to health or the environment." },
                { "id": "i3", "difficulty": "intermediate", "question": "Mention two problems caused by improper waste disposal.", "answer": "Water pollution and health hazards." },
                { "id": "i4", "difficulty": "intermediate", "question": "What is incineration?", "answer": "The process of burning waste materials at high temperatures." },
                { "id": "i5", "difficulty": "intermediate", "question": "How does recycling help the environment?", "answer": "It conserves resources and reduces pollution." },
                { "id": "i6", "difficulty": "intermediate", "question": "Name two items that can be recycled.", "answer": "Paper and glass." },
                { "id": "i7", "difficulty": "intermediate", "question": "How does composting benefit agriculture?", "answer": "It produces nutrient-rich manure for soil." },
                { "id": "i8", "difficulty": "intermediate", "question": "What role do municipalities play in waste management?", "answer": "They collect, transport, and dispose of waste." },
                { "id": "i9", "difficulty": "intermediate", "question": "Why is plastic waste a serious concern?", "answer": "Because it is non-biodegradable and pollutes land and water." },
                { "id": "i10", "difficulty": "intermediate", "question": "What is vermicomposting?", "answer": "Using worms to convert organic waste into compost." }
              ],
              "hard": [
                { "id": "h1", "difficulty": "hard", "question": "Explain the impact of open dumping on the environment.", "answer": "It causes soil and water pollution, and attracts pests and diseases." },
                { "id": "h2", "difficulty": "hard", "question": "Discuss the health hazards associated with e-waste.", "answer": "Toxic elements like lead and mercury can harm human organs." },
                { "id": "h3", "difficulty": "hard", "question": "How can technology help in efficient waste management?", "answer": "Through waste-to-energy plants, recycling systems, and smart segregation tools." },
                { "id": "h4", "difficulty": "hard", "question": "Compare sanitary landfills and open dumping.", "answer": "Sanitary landfills are engineered for safety; open dumping is unregulated and polluting." },
                { "id": "h5", "difficulty": "hard", "question": "What are the key principles of sustainable waste management?", "answer": "Minimization, segregation, recycling, and proper disposal." },
                { "id": "h6", "difficulty": "hard", "question": "How can citizens contribute to better waste management?", "answer": "By segregating waste, reducing plastic use, and recycling." },
                { "id": "h7", "difficulty": "hard", "question": "Evaluate the effectiveness of India’s Swachh Bharat Mission in waste management.", "answer": "It has improved awareness and cleanliness, but infrastructure gaps remain." },
                { "id": "h8", "difficulty": "hard", "question": "Why is biomedical waste a major concern?", "answer": "It can spread infections and must be handled with special care." },
                { "id": "h9", "difficulty": "hard", "question": "What is the role of NGOs in managing community waste?", "answer": "They create awareness, run collection drives, and promote recycling." },
                { "id": "h10", "difficulty": "hard", "question": "Suggest policies for improving waste collection in urban areas.", "answer": "Mandatory segregation, door-to-door collection, and digital monitoring." }
              ]
            }
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
            flashcards: {
              beginner: [
                { id: "1", question: "State the laws of reflection.", answer: "1. Angle of incidence equals angle of reflection. 2. Incident ray, reflected ray, and normal lie in the same plane." }
              ],
              intermediate: [
                { id: "2", question: "What is refraction?", answer: "The bending of light when it passes from one medium to another." }
              ],
              hard: [
                { id: "3", question: "What is Snell's law?", answer: "n₁sin θ₁ = n₂sin θ₂, where n is refractive index and θ is angle with normal." }
              ]
            }
          },
          {
            id: "electricity-10-cbse",
            title: "Electricity",
            flashcards: {
              beginner: [
                { id: "1", question: "What is Ohm's law?", answer: "V = IR, where V is voltage, I is current, and R is resistance." }
              ],
              intermediate: [
                { id: "2", question: "What is electric power?", answer: "P = VI = I²R = V²/R, measured in watts." }
              ],
              hard: []
            }
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
            flashcards: {
              beginner: [

              ],
              intermediate: [],
              hard: []
            }
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
            flashcards: {
              beginner: [
                { id: "1", question: "What is respiration?", answer: "The process of breaking down glucose to release energy in living organisms." }
              ],
              intermediate: [
                { id: "2", question: "What is photosynthesis equation?", answer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in presence of sunlight and chlorophyll)" }
              ],
              hard: []
            }
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
            flashcards: {
              beginner: [
                { id: "1", question: "What is a quadratic equation?", answer: "An equation of the form ax² + bx + c = 0, where a ≠ 0." }
              ],
              intermediate: [
                { id: "2", question: "What is the quadratic formula?", answer: "x = (-b ± √(b² - 4ac)) / 2a" }
              ],
              hard: []
            }
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
            flashcards: {
              beginner: [
                { id: "1", question: "What is nationalism?", answer: "A feeling of pride and devotion to one's country and its culture." }
              ],
              intermediate: [
                { id: "2", question: "When was German unification completed?", answer: "German unification was completed in 1871." }
              ],
              hard: []
            }
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
            flashcards: {
              beginner: [
                { id: "1", question: "What are natural resources?", answer: "Materials or substances that exist in nature and are useful to humans." }
              ],
              intermediate: [
                { id: "2", question: "What is sustainable development?", answer: "Development that meets present needs without compromising future generations' ability to meet their needs." }
              ],
              hard: []
            }
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