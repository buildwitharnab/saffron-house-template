import heroImage from "@/assets/saffron-hero.jpg";
import savoryGrid from "@/assets/menu-savory-grid.jpg";
import sweetsGrid from "@/assets/menu-sweets-grid.jpg";

export type Language = "en" | "ar";

export type LocalizedText = { en: string; ar: string };

export type MenuItem = {
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  image: string;
  crop: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  popular?: boolean;
};

const savory = savoryGrid;
const sweets = sweetsGrid;

// Edit this single object to reuse the template for another restaurant.
export const restaurant = {
  name: "Saffron House",
  location: { en: "Kuwait", ar: "الكويت" },
  logo: null as string | null,
  heroImage,
  tagline: {
    en: "A modern taste of the Gulf, served with warmth.",
    ar: "مذاق خليجي معاصر، نقدّمه بكل حفاوة.",
  },
  whatsappNumber: "96550000000", // Country code + number, without + or spaces.
  whatsappMessage: "Hello Saffron House, I would like to place an order.",
  googleReviewUrl: "https://g.page/r/REPLACE_WITH_YOUR_REVIEW_LINK/review",
  openingHours: {
    en: "Daily, 12:00 PM – 12:00 AM",
    ar: "يومياً، ١٢ ظهراً – ١٢ منتصف الليل",
  },
  categories: [
    {
      id: "popular",
      label: { en: "Popular", ar: "الأكثر طلباً" },
      items: [
        {
          name: { en: "Saffron Lamb Machboos", ar: "مجبوس لحم بالزعفران" },
          description: { en: "Slow-roasted lamb, spiced basmati rice, toasted almonds and daqoos.", ar: "لحم مطهو ببطء، أرز بسمتي متبّل، لوز محمّص ودقوس." },
          price: "8.750",
          image: heroImage,
          crop: "bottom-right",
          popular: true,
        },
        {
          name: { en: "Wagyu Date Burger", ar: "برجر واجيو بالتمر" },
          description: { en: "Wagyu patty, date relish, smoked cheese and house sauce.", ar: "لحم واجيو، صلصة تمر، جبن مدخن وصوص خاص." },
          price: "5.950",
          image: sweets,
          crop: "top-left",
          popular: true,
        },
      ],
    },
    {
      id: "starters",
      label: { en: "Starters", ar: "المقبلات" },
      items: [
        { name: { en: "Lamb Hummus", ar: "حمص باللحم" }, description: { en: "Silky hummus, spiced lamb, pine nuts and sumac.", ar: "حمص ناعم، لحم متبّل، صنوبر وسماق." }, price: "3.250", image: savory, crop: "top-left" },
        { name: { en: "Halloumi Sambousek", ar: "سمبوسك حلوم" }, description: { en: "Crisp pastry, halloumi, parsley and green za'atar.", ar: "رقائق مقرمشة، حلوم، بقدونس وزعتر أخضر." }, price: "2.750", image: savory, crop: "top-right" },
      ],
    },
    {
      id: "main-course",
      label: { en: "Main Course", ar: "الأطباق الرئيسية" },
      items: [
        { name: { en: "Chicken Musakhan", ar: "مسخن الدجاج" }, description: { en: "Chargrilled chicken, sumac onions, taboon bread and pine nuts.", ar: "دجاج مشوي، بصل بالسماق، خبز طابون وصنوبر." }, price: "6.250", image: savory, crop: "bottom-left" },
        { name: { en: "Saffron Sea Bass", ar: "قاروص بالزعفران" }, description: { en: "Whole grilled sea bass, saffron butter and herb salad.", ar: "قاروص كامل مشوي، زبدة الزعفران وسلطة أعشاب." }, price: "7.950", image: savory, crop: "bottom-right" },
      ],
    },
    {
      id: "burgers",
      label: { en: "Burgers", ar: "البرجر" },
      items: [
        { name: { en: "Wagyu Date Burger", ar: "برجر واجيو بالتمر" }, description: { en: "Wagyu patty, date relish, smoked cheese and house fries.", ar: "لحم واجيو، صلصة تمر، جبن مدخن وبطاطا منزلية." }, price: "5.950", image: sweets, crop: "top-left" },
        { name: { en: "Spiced Chicken Burger", ar: "برجر دجاج متبّل" }, description: { en: "Crispy chicken, pickled cabbage and toum in a brioche bun.", ar: "دجاج مقرمش، ملفوف مخلل وثوم في خبز بريوش." }, price: "4.250", image: savory, crop: "bottom-left" },
      ],
    },
    {
      id: "drinks",
      label: { en: "Drinks", ar: "المشروبات" },
      items: [
        { name: { en: "Rose Lemon Mint", ar: "ليمون نعناع بالورد" }, description: { en: "Fresh lemon, mint, rose water and crushed ice.", ar: "ليمون طازج، نعناع، ماء ورد وثلج مجروش." }, price: "1.950", image: sweets, crop: "bottom-left" },
        { name: { en: "Saffron Karak", ar: "كرك بالزعفران" }, description: { en: "Slow-brewed tea, cardamom, saffron and steamed milk.", ar: "شاي مغلي، هيل، زعفران وحليب مبخر." }, price: "1.250", image: heroImage, crop: "top-right" },
      ],
    },
    {
      id: "desserts",
      label: { en: "Desserts", ar: "الحلويات" },
      items: [
        { name: { en: "Saffron Milk Cake", ar: "كيكة الحليب بالزعفران" }, description: { en: "Soft milk cake, saffron cream, pistachio and rose.", ar: "كيكة حليب طرية، كريمة زعفران، فستق وورد." }, price: "2.950", image: sweets, crop: "top-right" },
        { name: { en: "Sticky Date Pudding", ar: "بودينغ التمر" }, description: { en: "Warm date sponge, toffee sauce and vanilla ice cream.", ar: "كيك تمر دافئ، صوص توفي وآيس كريم فانيلا." }, price: "3.250", image: sweets, crop: "bottom-right" },
      ],
    },
  ],
} as const;