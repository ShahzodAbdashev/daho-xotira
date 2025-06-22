import { CourseModule, Testimonial, PricingPlan, FAQ, Instructor } from '../types';

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Dangasaliksiz hayot",
    description: "Miyamizdagi dangasalik, Dangasalikni kelib chiqish sabablari va turlari, Dangasalikni yengishni eng kuchli usullari.",
    duration: "1 hafta",
    icon: "brain"
  },
  {
    id: 2,
    title: "Super Diqqat",
    description: "Miyani keraksiz fikrlardan tozalash. (Atrof-Muhit) Fokusni bir joyga yig’ib ishlash - Deep work texnikasi. Diqqatni kuchaytiruvchi mashqlar.",
    duration: "1 hafta",
    icon: "zap"
  },
  {
    id: 3,
    title: "Super Xotira.",
    description: "Mnemonikaga kirish. Zanjir usuli, Lokatsiya usuli.",
    duration: "1 hafta",
    icon: "target"
  },
  {
    id: 4,
    title: "Super Xotira uchun Tizim",
    description: "Major tizimini tuzish. Major tizimini yodlash. Raqam eslab qolish.",
    duration: "1 hafta",
    icon: "book-open"
  },
  {
    id: 5,
    title: "Xorijiy tillarni o'rganish",
    description: "Chet tillarini tez va samarali o'rganish usullari. Flash kartalardan foydalanish.",
    duration: "1 hafta",
    icon: "languages"
  },
  {
    id: 6,
    title: "Matnlarni eslab qolish",
    description: "Terminlarni eslab qolish. Tarixiy yil va sanalarni eslab qolish. Kitobdagi ma’lumotlarni tez va uzoq muddatga eslab qolish.",
    duration: "1 hafta",
    icon: "calculator"
  },
  {
    id: 7,
    title: "Bonus",
    description: "Maqsad qo’yish va kunni rejalashtirish. Maqsadni to’g’ri qo’yish va kunni rejalashtirishning eng kuchli usuli.Kuchli Intizomni shakillantirish orqali hayotizni tartibga keltirish va istalgan maqsadga erishish.",
    duration: "1 hafta",
    icon: "lightbulb"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nodir Karimov",
    role: "14 yoshli o'quvchi",
    image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
    quote: "Oldin kitob o'qigim kelmasdi, qancha yodlasam ham esimda qolmasdi. Endi esa bir marta o'qib eslab qolayapman!",
    rating: 5
  },
  {
    id: 2,
    name: "Malika Azizova",
    role: "Tibbiyot talabasi",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "Anatomiya va terminlarni yodlash endi juda oson. Imtihonlarga tayyorlanish vaqtim 2 baravarga qisqardi.",
    rating: 5
  },
  {
    id: 3,
    name: "Jasur Toshmatov",
    role: "IT mutaxassisi",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote: "Dasturlash tillarini o'rganish jarayonim sezilarli darajada tezlashdi. Kurs menga yangi dunyoni ochdi.",
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Mustaqil",
    price: "897,000",
    originalPrice: "1,897,000",
    discount: "53%",
    duration: "so'm",
    features: [
      "6 haftalik video darslar",
      "Vazifalarni bajarish uchun tayyor tarqatma materiallar",
      "4 oylik foydalanish muddati",
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: "997,000",
    originalPrice: "1,997,000",
    discount: "50%",
    duration: "so'm",
    features: [
      "6 haftalik video darslar",
      "Vazifalarni bajarish uchun tayyor tarqatma materiallar",
      "1 yil kursdan foydalanish imkoniyati",
      "Savol-Javob guruhlari",
      "Uyga vazifalarni tekshirish",
      "Haftada 1 martta jonli efir dars",
      "Kurs tugatganligi haqida sertifikat",
      "To’lov qaytarish kafolati."
    ],
    popular: true
  },
  {
    id: 3,
    name: "VIP",
    price: "3,997,000",
    originalPrice: "5,997,000",
    discount: "33%",
    duration: "so'm",
    features: [
      "6 haftalik video dars",
      "Vazifalarni bajarish uchun tayyor tarqatma materiallar",
      "1 yil kursdan foydalanish imkoniyati",
      "Savol-Javob guruhlari",
      "Uyga vazifalarni tekshirish",
      "Haftada 1 martta jonli efir dars",
      "Kurs tugatganligi haqida sertifikat",
      "To'lov qaytarish kafolati",
      "Shaxsiy ustoz",
      "Maxsus 5 ta kitob",
      "Daholar uchun kerakli qurollar sovg'a",
      "1 oy qo'shimcha maxsus amaliyot",
      "24/7 shaxsiy qo'llab-quvvatlash"
    ],
    popular: false
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Kurs qancha vaqt davom etadi?",
    answer: "Kurs 6 hafta davom etadi va siz o'z tezligingizda o'rganishingiz mumkin."
  },
  {
    id: 2,
    question: "Kursni kimlar uchun tavsiya qilasiz?",
    answer: "Kurs talabalar, o'qituvchilar, professional va xotira qobiliyatini oshirmoqchi bo'lgan har bir kishi uchun mo'ljallangan."
  },
  {
    id: 3,
    question: "Kurs materiallariga qanday kirish mumkin?",
    answer: "Kurs materiallariga umrbod kirish imkoniyati mavjud. Siz istalgan vaqtda va joyda o'rganishingiz mumkin."
  }
];

export const instructor: Instructor = {
  name: "Sanjarbek",
  role: "Toshkent viloyati Ohangaron tumani.",
  bio: "5 yildan ortiq tajribaga ega xotira mutaxassisi. Minglab o'quvchilarga xotirani kuchaytirish va samarali o'rganish usullarini o'rgatgan.",
  image: "/photo_2025-06-05_17-22-29.jpg",
  credentials: [
    "Tajribali xotira mutaxassisi",
    "1000 dan ortiq muvaffaqiyatli o'quvchilar",
    "Xotira mutaxassislarini tayyorlash bo'yicha o'qituvchi",
  ]
};