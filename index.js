import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";
import axios from "axios";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const port = process.env.PORT || 3001;
const app = express();

// مسار المشروع
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تفعيل CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

// تفعيل JSON parsing
app.use(express.json());

// 📦 الاتصال بقاعدة البيانات
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("❌ MongoDB connection error:", err);
  }
};

// 🪐 إنشاء محادثة جديدة
app.post("/api/chats", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;
  const { text } = req.body;

  try {
    const newChat = new Chat({
      userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    const userChats = await UserChats.find({ userId });

    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId,
        chats: [{ _id: savedChat._id, title: text.substring(0, 40) }],
      });
      await newUserChats.save();
    } else {
      await UserChats.updateOne(
        { userId },
        {
          $push: {
            chats: { _id: savedChat._id, title: text.substring(0, 40) },
          },
        }
      );
    }

    res.status(201).send(savedChat._id);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat!");
  }
});

// 📜 جلب كل المحادثات للمستخدم
app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const userChats = await UserChats.find({ userId });
    if (!userChats.length) return res.status(200).send([]);
    res.status(200).send(userChats[0].chats);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching userchats!");
  }
});

// 📥 جلب محادثة محددة
app.get("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const chat = await Chat.findOne({ _id: req.params.id, userId });
    res.status(200).send(chat);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching chat!");
  }
});

// ✨ تحديث محادثة بإجابة من Kepler AI API الجديد
app.put("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;
  const { question, img } = req.body;

  try {
    // 🔹 إرسال السؤال إلى Kepler API (FastAPI)
    const keplerResponse = await axios.post(
      "http://127.0.0.1:8000/ask", // غيّرها إلى رابطك على Render بعد النشر
      { query: question },
      { headers: { "Content-Type": "application/json" } }
    );

    const answer =
      keplerResponse.data.answer ||
      keplerResponse.data ||
      "لم يتم العثور على إجابة.";

    // 🔹 حفظ السؤال والإجابة
    const newItems = [
      ...(question ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }] : []),
      { role: "model", parts: [{ text: answer }] },
    ];

    const updatedChat = await Chat.updateOne(
      { _id: req.params.id, userId },
      { $push: { history: { $each: newItems } } }
    );

    res.status(200).send(updatedChat);
  } catch (err) {
    console.error("❌ Error contacting Kepler API:", err.message);
    res.status(500).send("Error generating answer from Kepler AI!");
  }
});

// 🧱 معالج الأخطاء العامة
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

// 🌍 إعداد الـ frontend للبيئة الإنتاجية
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// 🚀 بدء السيرفر
app.listen(port, () => {
  connect();
  console.log(`🚀 Server running on port ${port}`);
});
