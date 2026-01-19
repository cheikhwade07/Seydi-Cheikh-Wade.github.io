import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { contactInfo } from '../../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary-dark text-text-light">
      <div className="container-wide mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Location */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              Location
            </h3>
            <p className="text-text-light/70">{contactInfo.location}</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaPhone className="text-primary" />
              Phone
            </h3>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="text-text-light/70 hover:text-primary transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              Email
            </h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-text-light/70 hover:text-primary transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <div className="flex items-center gap-4">
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light/70 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light/70 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-text-light/10 text-center text-text-light/50 text-sm"
        >
          <p>&copy; {currentYear} Seydi Cheikh Wade. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
