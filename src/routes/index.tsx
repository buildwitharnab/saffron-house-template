import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Clock3, MapPin, MessageCircle, Star } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { restaurant, type Language, type MenuItem } from "@/data/restaurant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saffron House | Premium Kuwaiti Dining" },
      { name: "description", content: "Explore Saffron House's modern Gulf menu and order directly on WhatsApp in Kuwait." },
      { property: "og:title", content: "Saffron House | Premium Kuwaiti Dining" },
      { property: "og:description", content: "Modern Gulf flavours, prepared with warmth in Kuwait." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const text = {
  en: { menu: "Our menu", view: "View Menu", order: "Order on WhatsApp", orderNote: "Tap to order directly from your phone", kwd: "KWD", reviewTitle: "Enjoyed your meal?", reviewCopy: "Your review means a lot to our team and helps others discover Saffron House.", review: "Leave us a Google Review", hours: "Opening hours", curated: "Made for sharing", crafted: "Gulf favourites, thoughtfully reimagined." },
  ar: { menu: "قائمتنا", view: "عرض القائمة", order: "اطلب عبر واتساب", orderNote: "اضغط للطلب مباشرة من هاتفك", kwd: "د.ك", reviewTitle: "استمتعت بوجبتك؟", reviewCopy: "رأيك يعني الكثير لفريقنا ويساعد الآخرين على اكتشاف بيت الزعفران.", review: "شاركنا تقييمك على جوجل", hours: "ساعات العمل", curated: "أطباق صُنعت للمشاركة", crafted: "نكهات خليجية محبوبة بلمسة معاصرة." },
} as const;

const cropClass: Record<MenuItem["crop"], string> = {
  "top-left": "food-crop-top-left",
  "top-right": "food-crop-top-right",
  "bottom-left": "food-crop-bottom-left",
  "bottom-right": "food-crop-bottom-right",
};

function Index() {
  const [language, setLanguage] = useState<Language>("en");
  const t = text[language];
  const whatsappUrl = `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(restaurant.whatsappMessage)}`;

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex min-w-0 items-center gap-3 text-hero-foreground">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-hero-foreground/40 bg-hero-surface font-display text-xl">S</span>
            <span className="min-w-0"><strong className="block truncate font-display text-lg font-medium">{restaurant.name}</strong><span className="flex items-center gap-1 text-xs text-hero-foreground/70"><MapPin className="size-3" />{restaurant.location[language]}</span></span>
          </a>
          <button onClick={() => setLanguage(language === "en" ? "ar" : "en")} aria-label="Change language" className="shrink-0 rounded-full border border-hero-foreground/35 bg-hero-surface px-4 py-2 text-sm font-semibold text-hero-foreground backdrop-blur-md transition hover:bg-hero-surface/80">{language === "en" ? "العربية" : "English"}</button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[88svh] items-end overflow-hidden">
        <img src={restaurant.heroImage} alt="Saffron lamb machboos at Saffron House" width={1600} height={1000} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--hero-surface)_0%,transparent_76%),linear-gradient(to_right,var(--hero-surface)_0%,transparent_62%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Modern Gulf Kitchen · Kuwait</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.03] text-hero-foreground sm:text-7xl lg:text-8xl">{restaurant.name}</h1>
          <p className="mt-5 max-w-md text-base leading-7 text-hero-foreground/80 sm:text-lg">{restaurant.tagline[language]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" asChild><a href="#menu">{t.view}<ArrowDown /></a></Button>
            <Button variant="glass" size="lg" asChild><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle />{t.order}</a></Button>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mb-8 sm:flex sm:items-end sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.curated}</p><h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{t.menu}</h2></div>
          <p className="mt-3 text-sm text-muted-foreground sm:mt-0">{t.crafted}</p>
        </div>
        <nav aria-label="Menu categories" className="sticky top-0 z-30 -mx-5 mb-12 overflow-x-auto border-y border-border bg-background/95 px-5 py-3 backdrop-blur-md sm:mx-0 sm:rounded-lg sm:border sm:px-3">
          <div className="flex min-w-max gap-2">{restaurant.categories.map((category, index) => <a key={category.id} href={`#${category.id}`} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${index === 0 ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{category.label[language]}</a>)}</div>
        </nav>

        <div className="space-y-16">{restaurant.categories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <div className="mb-5 flex items-center gap-4"><h3 className="shrink-0 font-display text-2xl font-medium sm:text-3xl">{category.label[language]}</h3><span className="h-px flex-1 bg-border" /></div>
            <div className="grid gap-4 md:grid-cols-2">{category.items.map((item, itemIndex) => (
              <article key={`${item.name.en}-${itemIndex}`} className="group grid min-h-36 grid-cols-[7.5rem_minmax(0,1fr)] overflow-hidden rounded-lg border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:min-h-44 sm:grid-cols-[11rem_minmax(0,1fr)]">
                <div className="relative overflow-hidden bg-muted"><img src={item.image} alt={item.name[language]} width={1600} height={1600} loading="lazy" className={`absolute inset-0 h-full w-full max-w-none object-cover transition duration-500 group-hover:scale-[2.06] ${cropClass[item.crop]}`} /></div>
                <div className="flex min-w-0 flex-col p-4 sm:p-5">
                  {item.popular && <span className="mb-2 flex w-fit items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary"><Star className="size-3 fill-current" /> Popular</span>}
                  <h4 className="font-display text-lg font-semibold leading-tight sm:text-xl">{item.name[language]}</h4>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm">{item.description[language]}</p>
                  <p className="mt-auto pt-3 text-sm font-bold text-foreground"><span className="text-primary">{item.price}</span> {t.kwd}</p>
                </div>
              </article>
            ))}</div>
          </section>
        ))}</div>
      </section>

      <section className="bg-foreground px-5 py-14 text-background sm:px-8">
        <div className="mx-auto max-w-3xl text-center"><MessageCircle className="mx-auto size-8 text-primary" /><h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">{t.order}</h2><p className="mx-auto mt-3 max-w-md text-sm text-background/65">{t.orderNote}</p><Button variant="gold" size="lg" asChild><a className="mt-7 w-full sm:w-auto" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle />{t.order}<ArrowUpRight /></a></Button></div>
      </section>

      <section className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-2xl text-center"><div className="flex justify-center gap-1 text-primary">{[0,1,2,3,4].map((star) => <Star key={star} className="size-5 fill-current" />)}</div><h2 className="mt-5 font-display text-3xl font-medium sm:text-4xl">{t.reviewTitle}</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{t.reviewCopy}</p><Button variant="outline" size="lg" asChild><a className="mt-7" href={restaurant.googleReviewUrl} target="_blank" rel="noreferrer">{t.review}<ArrowUpRight /></a></Button></div></section>

      <footer className="border-t border-border bg-card px-5 py-10 sm:px-8"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 sm:items-end"><div><p className="font-display text-2xl">{restaurant.name}</p><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" />{restaurant.location[language]}</p><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="size-4" />{restaurant.openingHours[language]}</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold sm:justify-end"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp</a><a href={restaurant.googleReviewUrl} target="_blank" rel="noreferrer" className="hover:text-primary">Google Review</a></div></div></footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={t.order} className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-hero-foreground shadow-xl transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:bottom-7 sm:right-7"><MessageCircle className="size-6" /></a>
    </main>
  );
}