import { motion } from "motion/react";
import { User, Briefcase, Mail, MapPin, Github } from "lucide-react";

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
            SI 백엔드(Spring Boot, MyBatis)에서 시작해, 지금은 스타트업에서{" "}
            <strong className="text-gray-900">사내 안전관리 솔루션 백엔드(Spring Boot, JPA, MS SQL)와 React/Nuxt 프론트엔드를 함께 맡는 풀스택 개발자</strong>입니다.
            <br /><br />
            테스트 없이 인수한 백엔드는 특성화 테스트로 현재 동작을 고정한 뒤 고칩니다.
            프론트엔드에서는 고객사별 분기 구조를 템플릿 단위 설정으로 재설계했습니다.
            영상통화 녹화본 누락 장애를 Linux 서버와 Docker 컨테이너 로그로 특정해 복구했습니다.
            Jenkins 빌드 OOM은 원인부터 잡아 피크 메모리를 약 42% 줄였습니다.
            <br /><br />
            생성형 AI는{" "}
            <strong className="text-gray-900">컴파일, 전체 테스트, 변경 대상별 테스트를 완료 조건으로 거는 검증 절차와 함께</strong>{" "}
            씁니다. 백엔드와 프론트엔드를 모두 맡아 봤기 때문에{" "}
            <strong className="text-gray-900">API 응답이 바뀌면 어느 화면이 깨지는지 알고, 그 감각으로 설계</strong>합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 text-gray-600"
          >
            {[
              { icon: User, text: "풀스택 개발자" },
              { icon: Briefcase, text: "주식회사 와트 재직 중" },
              { icon: MapPin, text: "경기도 성남시" },
              { icon: Mail, text: "dbdb1114@naver.com", href: "mailto:dbdb1114@naver.com" },
              { icon: Github, text: "github.com/dbdb1114", href: "https://github.com/dbdb1114" }
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
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 underline-offset-4 hover:underline transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
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