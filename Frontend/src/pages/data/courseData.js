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
                { id: "b1", question: "What is force?", answer: "Force is a push or pull acting on an object." },
                { id: "b2", question: "What is the SI unit of force?", answer: "The SI unit of force is the newton (N)." },
                { id: "b3", question: "What instrument is used to measure force?", answer: "Force is measured using a spring balance." },
                { id: "b4", question: "Name two types of contact forces.", answer: "Friction and muscular force." },
                { id: "b5", question: "Name two types of non-contact forces.", answer: "Gravitational force and electrostatic force." },
                { id: "b6", question: "What is a balanced force?", answer: "A force in which all forces cancel each other out and do not cause motion." },
                { id: "b7", question: "What is an unbalanced force?", answer: "A force that causes a change in motion or direction of an object." },
                { id: "b8", question: "State Newton’s First Law of Motion.", answer: "A body remains at rest or in uniform motion unless acted upon by an external unbalanced force." },
                { id: "b9", question: "What is inertia?", answer: "The tendency of an object to resist any change in its state of motion." },
                { id: "b10", question: "Give one everyday example of force.", answer: "Kicking a football is an example of applying force." }
              ],
              intermediate: [
                { id: "i1", question: "Define 1 newton of force.", answer: "1 newton is the force that gives a mass of 1 kg an acceleration of 1 m/s²." },
                { id: "i2", question: "State Newton’s Second Law of Motion.", answer: "Force = mass × acceleration (F = ma)." },
                { id: "i3", question: "How is force related to acceleration?", answer: "Force is directly proportional to acceleration for a constant mass." },
                { id: "i4", question: "What is the effect of force on the shape of an object?", answer: "Force can deform or change the shape of an object." },
                { id: "i5", question: "What is the direction of frictional force?", answer: "Friction acts in the opposite direction of motion." },
                { id: "i6", question: "Why does a rolling ball eventually stop?", answer: "Due to friction and air resistance acting opposite to its motion." },
                { id: "i7", question: "Can force change the direction of a moving object?", answer: "Yes, force can change the direction of motion." },
                { id: "i8", question: "State Newton’s Third Law of Motion.", answer: "For every action, there is an equal and opposite reaction." },
                { id: "i9", question: "Explain tension force with an example.", answer: "Tension is the force transmitted through a string or rope when it is pulled tight by forces acting from opposite ends." },
                { id: "i10", question: "What is net force?", answer: "Net force is the vector sum of all the individual forces acting on an object." }
              ],
              hard: [
                { id: "h1", question: "Derive the formula F = ma from Newton’s second law.", answer: "By definition, F ∝ a for constant mass ⇒ F = kma. For k = 1, F = ma." },
                { id: "h2", question: "Explain impulse and its relation to force.", answer: "Impulse = Force × time = change in momentum (Ft = mv - mu)." },
                { id: "h3", question: "Why do athletes bend their knees when they land?", answer: "To increase the time of impact, reducing the force using impulse = Ft." },
                { id: "h4", question: "How do airbags reduce injuries in car accidents?", answer: "They increase the time of impact, reducing force due to impulse relation." },
                { id: "h5", question: "A body of mass 2kg accelerates at 3 m/s². Calculate the force.", answer: "F = ma = 2 × 3 = 6 N." },
                { id: "h6", question: "Differentiate between static and kinetic friction.", answer: "Static friction acts when the object is at rest; kinetic friction acts when the object is moving." },
                { id: "h7", question: "Why is walking on ice difficult?", answer: "Due to very low friction between shoes and ice." },
                { id: "h8", question: "If net force on an object is zero, what can you say about its motion?", answer: "The object is either at rest or moving with constant velocity." },
                { id: "h9", question: "State the law of conservation of momentum.", answer: "Total momentum before interaction = Total momentum after, in absence of external forces." },
                { id: "h10", question: "A car of mass 1000 kg increases its speed from 10 m/s to 20 m/s in 5 s. Find the average force.", answer: "Change in momentum = 1000(20 - 10) = 10000 kg·m/s; Force = Δp/Δt = 10000/5 = 2000 N." }
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
        id: "chemistry-10-icse",
        name: "Chemistry",
        icon: "🧪",
        color: "from-green-400 to-green-600",
        chapters: [
          {
            id: "matter-6-icse",
            title: "Matter and Its States",
            flashcards: {
              beginner: [
                { id: "1", question: "What is matter?", answer: "Matter is anything that occupies space and has mass." }
              ],
              intermediate: [
                { id: "2", question: "Name the three states of matter.", answer: "Solid, liquid, and gas." }
              ],
              hard: []
            }
          }
        ]
      },
      {
        id: "biology-10-icse",
        name: "Biology",
        icon: "🌱",
        color: "from-emerald-400 to-emerald-600",
        chapters: [
          {
            id: "plants-6-icse",
            title: "The World of Plants",
            flashcards: {
              beginner: [
                { id: "1", question: "What is photosynthesis?", answer: "The process by which plants make their own food using sunlight." }
              ],
              intermediate: [
                { id: "2", question: "What are the parts of a flower?", answer: "Petals, sepals, stamens, and pistil." }
              ],
              hard: []
            }
          }
        ]
      },
      {
        id: "mathematics-10-icse",
        name: "Mathematics",
        icon: "📐",
        color: "from-purple-400 to-purple-600",
        chapters: [
          {
            id: "numbers-6-icse",
            title: "Whole Numbers",
            flashcards: {
              beginner: [
                { id: "1", question: "What are natural numbers?", answer: "Numbers 1, 2, 3, 4, ... are natural numbers." }
              ],
              intermediate: [
                { id: "2", question: "What are whole numbers?", answer: "Natural numbers including zero (0, 1, 2, 3, ...)." }
              ],
              hard: []
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
            id: "civilizations-6-icse",
            title: "Early Civilizations",
            flashcards: {
              beginner: [
                { id: "1", question: "What is civilization?", answer: "An advanced stage of human development with organized society and culture." }
              ],
              intermediate: [
                { id: "2", question: "Name an ancient civilization.", answer: "The Indus Valley Civilization." }
              ],
              hard: []
            }
          }
        ]
      },
      {
        id: "geography-10-icse",
        name: "Geography",
        icon: "🌍",
        color: "from-cyan-400 to-cyan-600",
        chapters: [
          {
            id: "earth-6-icse",
            title: "The Earth and Its Features",
            flashcards: {
              beginner: [
                { id: "1", question: "What is the shape of Earth?", answer: "Earth is roughly spherical, slightly flattened at the poles." }
              ],
              intermediate: [
                { id: "2", question: "What are continents?", answer: "Large landmasses on Earth's surface." }
              ],
              hard: []
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