import { motion } from 'framer-motion'
import { SectionHeader } from '../ui'

export default function About() {
  return (
    <section id="about" className="bg-surface section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeader title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              I've always been fascinated by how software can transform ideas into solutions
              that impact real people. What drives me is to build software that tackles real problems
              to make the world a better place.
            </p>

            <p>
              During my internship at Jasmine Conseil, I worked on an ML system for the
              Senegalese Customs Administration an organization that handles 40% of the
              country's national budget. Seeing how my work could contribute to something
              meaningful on that scale solidified what I want to do: build technology that
              makes a difference.
            </p>

            <p>
              Beyond the technical side, I'm someone who loves learning and tackling new
              challenges. Whether it's diving into a new framework, understanding a complex
              system, or collaborating with people from different backgrounds, I'm always
              looking to grow.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new ideas, working on side
              projects, or connecting with the tech community. I'm bilingual in French and
              English, which has given me a unique perspective on communication and
              collaboration across cultures.
            </p>

            <p className="text-primary font-medium">
              I'm currently looking for opportunities where I can contribute, learn, and
              build software that genuinely matters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
