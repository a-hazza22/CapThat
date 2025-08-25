const memeArray = [
  "./images/evil-kermit.png",
  "./images/eddie-murphy-thinking.png",
  "./images/futurama-fry.png",
  "./images/confused-person.png"
];

const captionArray = [
  "I am a level 60 on inferno mode!",
  "Voted most likely to change the world.",
  "Get this hair off my head!",
  "Oooh that must have hurt."
];
// --- تشغيل الدوال ---
//// هذا يسمح لنا بالتحكم في الزر باستخدام جافا سكريبت.

const generatorButton = document.getElementById("generator-button");
// يربط المتغير randomMeme بعنصر الصورة العشوائية
const randomMeme = document.getElementById("random-meme");
// يربط المتغير randomCaption بعنصر التسمية التوضيحية العشوائية
const randomCaption = document.getElementById("random-caption");

