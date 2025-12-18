import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-500 mb-4">06. Contact</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">연락하기</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            프로젝트 제안이나 협업 문의는 언제든지 환영합니다.
            <br />
            아래 연락처로 편하게 연락 주세요!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "dbdb1114@naver.com",
              href: "mailto:dbdb1114@naver.com"
            },
            {
              icon: Phone,
              label: "Phone",
              value: "010-5421-5350",
              href: "tel:+82105421-5350"
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/dbdb1114",
              href: "https://github.com/dbdb1114"
            },
            {
              icon: Linkedin,
              label: "Blog",
              value: "velog.io/@dbdb1114",
              href: "https://velog.io/@dbdb1114/posts"
            }
          ].map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={
                contact.label === "GitHub" || contact.label === "Blog"
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.label === "GitHub" || contact.label === "Blog"
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <contact.icon className="w-6 h-6 text-gray-700" />
              </motion.div>
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                <div className="font-semibold text-gray-900">{contact.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm text-gray-500"
        >
          © 2024 Portfolio. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
}