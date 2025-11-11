import TelegramBot from "node-telegram-bot-api";
const TOKEN = "7703677800:AAGsRnYG5DX-hRUwEvcLFNnDAQmHrn_yRrI"

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const user = msg.from;

  
 
  
  console.log("Ism:", user.first_name || "Noma'lum");
  console.log("Username:", user.username ? "@" + user.username : "yo‘q");
  console.log("ID:", user.id);
 

 
  bot.sendMessage(chatId, `Salom, ${user.first_name}! 👋\n100x Academy botiga xush kelibsiz!`, {
    reply_markup: {
      keyboard: [[{ text: "🚀 Boshlash" }]],
      resize_keyboard: true,
    },
  });
});


bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

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

  if (text === "🇬🇧 Ingliz tili kursi") {
    bot.sendMessage(
      chatId,
      "📘 Ingliz tili kursi haqida:\n Haftasiga 3 marta\n 300 000 so‘m\n👩‍🏫 Bonu Teacher",
      {
        reply_markup: {
          keyboard: [[{ text: " Ro‘yxatdan o‘tish" }], [{ text: "⬅️ Orqaga" }]],
          resize_keyboard: true,
        },
      }
    );
  }

  if (text === "🇷🇺 Rus tili kursi") {
    bot.sendMessage(
      chatId,
      "📗 Rus tili kursi haqida:\n Haftasiga 3 marta\n 250 000 so‘m\n👩‍🏫 Nurjahon",
      {
        reply_markup: {
          keyboard: [[{ text: " Ro‘yxatdan o‘tish" }], [{ text: "⬅️ Orqaga" }]],
          resize_keyboard: true,
        },
      }
    );
  }

  if (text === "🇹🇷 Turk tili kursi") {
    bot.sendMessage(
      chatId,
      "📙 Turk tili kursi haqida:\n Haftasiga 3 marta\n 280 000 so‘m\n👩‍🏫 Sultonposhsha",
      {
        reply_markup: {
          keyboard: [[{ text: " Ro‘yxatdan o‘tish" }], [{ text: "⬅️ Orqaga" }]],
          resize_keyboard: true,
        },
      }
    );
  }

  if (text === "⬅️ Orqaga") {
    bot.sendMessage(chatId, "Kurslar ro‘yxati:", {
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

  if (text === " Ro‘yxatdan o‘tish") {
    bot.sendMessage(chatId, "✅ Ro‘yxatdan o‘tish yaqin orada ishga tushadi.\n⬅️ Orqaga qayting.");
  }
});