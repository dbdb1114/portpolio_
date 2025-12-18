import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educations = [
  {
    school: "항해99 취업 리부트 코스",
    degree: "Redis & MSA 활용 교육",
    period: "2024.03 - 2024.05 (5개월)",
    description: "WebFlux, Spring Cloud를 활용한 MSA 프로젝트를 통해 실무 중심의 백엔드 개발 역량을 집중적으로 학습했습니다.",
    achievements: [
      "Redis Lua Script를 활용한 동시성 처리",
      "분산락 활용한 동시성 처리",
      "Spring Cloud 기반 MSA 아키텍처 설계",
      "대용량 트래픽 처리를 위한 성능 최적화"
    ]
  }
];

const certifications = [
  {
    name: "정보처리산업기사",
    issuer: "한국산업인력공단",
    date: "2024.10"
  },
  {
    name: "컴퓨터 활용능력 2급",
    issuer: "대한상공회의소",
    date: "2025.05"
  }
];

export function EducationSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-500 mb-4">05. Education</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">교육 과정 및 자격증</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Education */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6" />
              교육 과정
            </motion.h3>

            <div className="space-y-6">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.school}
                      </h4>
                      <p className="text-gray-600">{edu.degree}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{edu.description}</p>

                  <div className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.2 + achIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
            >
              <Award className="w-6 h-6" />
              자격증
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gradient-to-br from-gray-900 to-gray-700 p-5 rounded-xl text-white shadow-lg"
                >
                  <h4 className="font-bold mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
