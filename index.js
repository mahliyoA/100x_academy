import TelegramBot from "node-telegram-bot-api";
const TOKEN = "7703677800:AAGsRnYG5DX-hRUwEvcLFNnDAQmHrn_yRrI"

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const user = msg.from;

  // Foydalanuvchi ma'lumotlarini Git Bash-ga chiqaramiz
  console.log("===============");
  console.log("Yangi foydalanuvchi:");
  console.log("Ism:", user.first_name || "Noma'lum");
  console.log("Username:", user.username ? "@" + user.username : "yo‘q");
  console.log("ID:", user.id);
  console.log("===============");

  // Foydalanuvchiga "Boshlash" tugmasi
  bot.sendMessage(chatId, `Salom, ${user.first_name}! 👋\n100x Academy botiga xush kelibsiz!`, {
    reply_markup: {
      keyboard: [[{ text: "🚀 Boshlash" }]],
      resize_keyboard: true,
    },
  });
});

// Tugmalarni boshqarish
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Boshlash bosilganda kurslar ro'yxati
  if (text === "🚀 Boshlash") {
    bot.sendMessage(chatId, "📚 Quyidagi kurslardan birini tanlang:", {
      reply_markup: {
        keyboard: [
          [{ text: "🇬🇧 Ingliz tili kursi" }],
          [{ text: "🇷🇺 Rus tili kursi" }],
          [{ text: "🇹🇷 Turk tili kursi" }],
        ],
        resize_keyboard: true,
      },
    });
  }

  // 🔹 Faqat Ingliz tili kursi
  if (text === "🇬🇧 Ingliz tili kursi") {
    bot.sendMessage(
      chatId,
      "📘 Ingliz tili kursi:\n Haftasiga 3 marta\n 300 000 so‘m\n👩‍🏫 O‘qituvchi: Bonu Teacher",
      {
        reply_markup: {
          keyboard: [[{ text: " Ro‘yxatdan o‘tish" }], [{ text: "⬅️ Orqaga" }]],
          resize_keyboard: true,
        },
      }
    );

   
    bot.sendSticker(chatId, "CAACAgIAAxkBAAEBJxFg0fBpz_lXj1J7x8lOyeIRbtkG4gACRgADVp29CkKXVGkHh-GgHwQ");
  }

  // 🔹 Orqaga tugmasi
  if (text === "⬅️ Orqaga") {
    bot.sendMessage(chatId, "📚 Kurslar ro‘yxati:", {
      reply_markup: {
        keyboard: [
          [{ text: "🇬🇧 Ingliz tili kursi" }],
          [{ text: "🇷🇺 Rus tili kursi" }],
          [{ text: "🇹🇷 Turk tili kursi" }],
        ],
        resize_keyboard: true,
      },
    });
  }

  // 🔹 Ro‘yxatdan o‘tish
  if (text === " Ro‘yxatdan o‘tish") {
    bot.sendMessage(chatId, "✅ Ro‘yxatdan o‘tish hozircha faol emas.\n⬅️ Orqaga qayting.");
  }

  // 🔹 Boshqa kurslar bosilganda hech narsa yubormaydi
  if (text === "🇷🇺 Rus tili kursi" || text === "🇹🇷 Turk tili kursi") {
 
  }
});