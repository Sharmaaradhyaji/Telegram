require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
// Welcome message when user starts the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const message = `👋 Welcome to the *AI Interview & English Coach*!

🚀 Features:
✅ AI-based Mock Interviews  
✅ Real-time English Feedback  
✅ Personalized Feedback Reports  

✅ Safe and Free!!!

-You can practise english communication skills with our AI-powered mock interviews 
-Can prepare for technical and HR interviews with specialized questions
-Get instant feedback on your English speaking skills and projects
-Receive personalized reports to track your progress

🔒 Your data is secure and never shared with third parties.
💬 Join our community of learners and professionals to enhance your interview skills and English proficiency.

🌟 Why Choose Us?
- AI-driven insights for better performance
- Instant feedback to improve your English
- User-friendly interface for seamless experience
- Accessible anytime, anywhere

🌍 Join thousands of users who have improved their interview skills and English fluency with our platform.

🌐 Get Started with visiting our website:

👉 Tap the button below to get started!`;

  bot.sendMessage(chatId, message, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{ text: '🚀 Start Now', url: 'https://ai-interview-next-js-git-master-sharmaaradhyajis-projects.vercel.app/sign-in' }]
      ]
    }
  });
});
