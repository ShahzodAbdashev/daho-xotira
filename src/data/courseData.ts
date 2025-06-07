import { CourseModule, Testimonial, PricingPlan, FAQ, Instructor } from '../types';

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Xotira asoslari",
    description: "Miyaning ishlash printsiplari va xotirani kuchaytirish usullari haqida fundamental bilimlar.",
    duration: "2 hafta",
    icon: "brain"
  },
  {
    id: 2,
    title: "Dangasalikni yengish",
    description: "Dangasalikni bartaraf etish va kundalik intizomni shakllantirish.",
    duration: "2 hafta",
    icon: "zap"
  },
  {
    id: 3,
    title: "Super diqqat",
    description: "Diqqatni jamlash va chalg'imasdan ishlash qobiliyatini rivojlantirish.",
    duration: "2 hafta",
    icon: "target"
  },
  {
    id: 4,
    title: "Mnemonika texnikalari",
    description: "Ma'lumotlarni samarali eslab qolish uchun maxsus usullar.",
    duration: "2 hafta",
    icon: "book-open"
  },
  {
    id: 5,
    title: "Xorijiy tillarni o'rganish",
    description: "Chet tillarini tez va samarali o'rganish usullari.",
    duration: "2 hafta",
    icon: "languages"
  },
  {
    id: 6,
    title: "Amaliy qo'llash",
    description: "O'rganilgan texnikalarni kundalik hayotda qo'llash.",
    duration: "2 hafta",
    icon: "calculator"
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
    duration: "so'm",
    features: [
      "6 haftalik video darslar",
      "Amaliy mashg'ulot materiallari",
      "4 oylik foydalanish muddati",
      "O'z sur'atingizda o'rganish imkoniyati"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: "997,000",
    duration: "so'm",
    features: [
      "6 haftalik video darslar",
      "Amaliy mashg'ulot materiallari",
      "1 yillik foydalanish muddati",
      "Haftalik jonli efir darslar",
      "Uy vazifalarini tekshirish",
      "Sertifikat",
      "Savol-javob guruhi"
    ],
    popular: true
  },
  {
    id: 3,
    name: "VIP",
    price: "3,997,000",
    duration: "so'm",
    features: [
      "Premium paket to'liq",
      "Shaxsiy ustoz",
      "5 ta maxsus kitob",
      "Maxsus qurollar to'plami",
      "1 oylik qo'shimcha amaliyot",
      "24/7 qo'llab-quvvatlash"
    ],
    popular: false
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Kurs qancha vaqt davom etadi?",
    answer: "Kurs 8 hafta davom etadi va siz o'z tezligingizda o'rganishingiz mumkin."
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
  name: "Sanjarbek Saidov",
  role: "Xotira va kognitiv rivojlanish bo'yicha mutaxassis",
  bio: "10 yildan ortiq tajribaga ega xotira mutaxassisi. Minglab o'quvchilarga xotirani kuchaytirish va samarali o'rganish usullarini o'rgatgan. O'zbekistonda xotira texnikalari bo'yicha yetakchi mutaxassis.",
  image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
  credentials: [
    "Xalqaro Mnemonika Akademiyasi a'zosi",
    "\"Super Xotira\" kitobining muallifi",
    "1000 dan ortiq muvaffaqiyatli o'quvchilar",
    "O'zbekistonda yilning eng yaxshi treneri (2024)"
  ]
};