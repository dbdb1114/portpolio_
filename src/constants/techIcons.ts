// 기술 스택 아이콘 매핑
// devicon CDN을 사용하여 아이콘을 제공합니다.

export interface TechIcon {
  name: string;
  icon: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'etc';
}

export const techIcons: Record<string, TechIcon> = {
  // Languages
  javascript: {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'language'
  },
  typescript: {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'language'
  },
  java: {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    category: 'language'
  },
  python: {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'language'
  },
  go: {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    category: 'language'
  },
  kotlin: {
    name: 'Kotlin',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    category: 'language'
  },

  // Frontend
  react: {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'frontend'
  },
  nextjs: {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'frontend'
  },
  vue: {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'frontend'
  },
  svelte: {
    name: 'Svelte',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    category: 'frontend'
  },
  html: {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'frontend'
  },
  css: {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'frontend'
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    category: 'frontend'
  },
  sass: {
    name: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    category: 'frontend'
  },
  reactquery: {
    name: 'React Query',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactquery/reactquery-original.svg',
    category: 'frontend'
  },
  recoil: {
    name: 'Recoil',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/recoil/recoil-original.svg',
    category: 'frontend'
  },
  redux: {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    category: 'frontend'
  },

  // Backend
  nodejs: {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'backend'
  },
  express: {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    category: 'backend'
  },
  nestjs: {
    name: 'NestJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    category: 'backend'
  },
  spring: {
    name: 'Spring',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    category: 'backend'
  },
  django: {
    name: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    category: 'backend'
  },
  fastapi: {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    category: 'backend'
  },
  graphql: {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    category: 'backend'
  },

  // Database
  mysql: {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'database'
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'database'
  },
  mongodb: {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'database'
  },
  redis: {
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    category: 'database'
  },
  sqlite: {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    category: 'database'
  },
  oracle: {
    name: 'Oracle',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    category: 'database'
  },

  // DevOps & Tools
  docker: {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'devops'
  },
  kubernetes: {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
    category: 'devops'
  },
  aws: {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    category: 'devops'
  },
  gcp: {
    name: 'Google Cloud',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    category: 'devops'
  },
  azure: {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    category: 'devops'
  },
  jenkins: {
    name: 'Jenkins',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    category: 'devops'
  },
  nginx: {
    name: 'Nginx',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    category: 'devops'
  },
  git: {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'tools'
  },
  github: {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    category: 'tools'
  },
  gitlab: {
    name: 'GitLab',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    category: 'tools'
  },
  figma: {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    category: 'tools'
  },
  vscode: {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    category: 'tools'
  },
  intellij: {
    name: 'IntelliJ IDEA',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    category: 'tools'
  },
  jira: {
    name: 'Jira',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    category: 'tools'
  },
  slack: {
    name: 'Slack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
    category: 'tools'
  },
  notion: {
    name: 'Notion',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg',
    category: 'tools'
  },

  // Testing & Performance
  jest: {
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    category: 'etc'
  },
  cypress: {
    name: 'Cypress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypress/cypress-original.svg',
    category: 'etc'
  },
  webpack: {
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    category: 'etc'
  },
  vite: {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    category: 'etc'
  },
  elasticsearch: {
    name: 'Elasticsearch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg',
    category: 'etc'
  },
  rabbitmq: {
    name: 'RabbitMQ',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
    category: 'etc'
  },
  kafka: {
    name: 'Apache Kafka',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
    category: 'etc'
  }
};

// 카테고리별로 아이콘 가져오기
export const getTechIconsByCategory = (category: TechIcon['category']) => {
  return Object.values(techIcons).filter(icon => icon.category === category);
};

// 아이콘 이름으로 가져오기
export const getTechIcon = (key: string) => {
  return techIcons[key.toLowerCase()];
};

// 모든 아이콘 가져오기
export const getAllTechIcons = () => {
  return Object.values(techIcons);
};

// 아이콘 키 배열
export const techIconKeys = Object.keys(techIcons);
