export const projects = {
  chatbots: [
    {
      id: 1,
      title: 'CrediBot',
      description: 'Credibot is your personal finance WhatsApp chatbot. He\'s your go-to guy for navigating loans and understanding financial policies.',
      image: '/assets/whatsapp-chatbot.webp',
      video: '/assets/CrediBot.mp4',
      technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API'],
      category: 'WhatsApp Chatbots',
    },
    {
      id: 2,
      title: 'AllyBot',
      description: 'Meet AllyBot, your WhatsApp chatbot ally in the IT workspace. She\'s here to empower women in tech.',
      image: '/assets/shutterstock_1180950625.jpg',
      video: '/assets/AllyBot.mp4',
      technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API'],
      category: 'WhatsApp Chatbots',
    },
    {
      id: 3,
      title: 'ReproBot',
      description: 'Meet ReproBot, your WhatsApp ally for Sexual Reproductive Health and Rights education.',
      image: '/assets/chatbot-app.jpg',
      video: '/assets/ReproBot.mp4',
      technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API'],
      category: 'WhatsApp Chatbots',
    }
  ],
  react: [
    {
      id: 4,
      title: 'Weather App',
      description: 'React-based application providing real-time weather information with a clean interface.',
      image: '/assets/Colorful_3d_Weather_Forecast.png',
      link: 'https://nono140503.github.io/WeatherApp/',
      technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS3'],
      category: 'Website'
    }
  ],
  mobile: [
    {
      id: 5,
      title: 'SafeHer',
      description: 'Cutting-edge mobile application designed to enhance women\'s safety through advanced technology.',
      image: '/assets/SafeHer-Logo.jpg',
      video: '/assets/SafeHer.mp4',
      technologies: ['React Native', 'Firebase', 'Geolocation'],
      category: 'Mobile App'
    }
  ],
  ml: [
    {
      id: 6,
      title: 'Maternal Health Risk Machine Learning Model',
      description: 'Built a Random Forest model that predicts maternal health risk levels with 81% accuracy using clinical data.',
      image: './assets/Maternity.png',
      link: 'https://colab.research.google.com/drive/1J6eP8YmSDnQNefUJ-s0rb3i34ARnMBgU?usp=sharing',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Scikit-learn'],
      category: 'Machine Learning'
    },
    {
      id: 7,
      title: 'Life Expectancy and Health Spending',
      description: "This project analyzed a 'Life Expectancy Data' dataset to understand the relationship between life expectancy, GDP, and healthcare expenditure, identifying countries with efficient health spending for better outcomes.",
      image: './assets/life-expectancy-world-map-hi.png',
      link: 'https://colab.research.google.com/drive/1aRQzg4RcptSW_kL4_HDv3MNP7Q5_TQl_?usp=sharing',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Scikit-learn'],
      category: 'Machine Learning'
    }
  ],
}

export const getProjectCount = (category) => {
  if (category in projects) {
    return projects[category].length
  }
  return 0
}