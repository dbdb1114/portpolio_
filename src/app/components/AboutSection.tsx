import { motion } from "motion/react";
import { User, Mail, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-500 mb-4"
          >
            01. About
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            안녕하세요,
            <br />
            <span className="text-gray-600 mt-2">저는 유정현입니다.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            문제를 정의하고 코드로 해결해나가는 과정에서 강한 몰입과 성취감을 느끼며 개발을 시작했습니다.
            백엔드 개발 경험을 바탕으로 한 견고한 시스템 설계와 프론트엔드 기술을 활용한 사용자 중심의 웹 애플리케이션 개발을 통해
            전체 서비스의 완성도를 책임지는 웹 개발자로 성장하고 있습니다.
            <br /><br />
            현재도 <a
              href="https://kht-admin-zp4y.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
            >
              한국사 학습 서비스
            </a>와 같은 End-to-End 프로젝트를 통해 기획부터 배포까지
            전 과정에 걸친 실무 역량을 지속적으로 발전시키고 있습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 text-gray-600"
          >
            {[
              { icon: User, text: "웹 개발자" },
              { icon: MapPin, text: "Seoul, Korea" },
              { icon: Mail, text: "dbdb1114@naver.com" }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <item.icon className="w-5 h-5 text-gray-400" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-80 h-80 rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src="https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/my_image.png"
            alt="유정현 프로필 사진"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}