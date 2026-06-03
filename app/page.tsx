"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tv,
  Film,
  PlaySquare,
  Trophy,
  Lock,
  MonitorSmartphone,
  Tv2,
  Smartphone,
  Tablet,
  Laptop,
  Projector,
  Search,
  KeyRound,
  Settings,
  CheckCircle2,
  Check,
  Sparkles,
  ChevronDown,
  Play,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { CosmicBackground } from "@/components/cosmic-background";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappUrl } from "@/lib/utils";

// === Showreel images (Unsplash) ===
const showreel = [
  {
    title: "Champions League",
    tag: "EN VIVO",
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Estrenos 2026",
    tag: "PELÍCULAS",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Series Premium",
    tag: "SERIES",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Liga local",
    tag: "FÚTBOL",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Documentales",
    tag: "DOC",
    img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=900&q=80&auto=format&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export default function Page() {
  const buyUrl = whatsappUrl("Hola! Quiero suscribirme a Mundo Infinito");
  const helpUrl = whatsappUrl("Hola! Necesito ayuda con la instalación de Mundo Infinito");
  const offerUrl = whatsappUrl(
    "Hola! Quiero activar Mundo Infinito al precio promocional del primer mes"
  );

  return (
    <main className="relative min-h-screen">
      <CosmicBackground />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/30 border-b border-violet-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group" aria-label="Mundo Infinito">
            <span className="relative inline-flex">
              <span className="absolute inset-0 rounded-full bg-violet-500 blur-md opacity-60 group-hover:opacity-90 transition" />
              <svg className="relative w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="9" stroke="url(#g1)" strokeWidth="2" />
                <ellipse
                  cx="16"
                  cy="16"
                  rx="14"
                  ry="5"
                  stroke="url(#g1)"
                  strokeWidth="1.5"
                  transform="rotate(25 16 16)"
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0" stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider">
              MUNDO INFINITO
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <a href="#showcase" className="hover:text-white transition">
              Vista previa
            </a>
            <a href="#features" className="hover:text-white transition">
              Contenido
            </a>
            <a href="#devices" className="hover:text-white transition">
              Dispositivos
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Precio
            </a>
            <a href="#steps" className="hover:text-white transition">
              Activar
            </a>
          </nav>
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener"
            className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-glowWa"
            aria-label="Comprar por WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Comprar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-violet-200 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Streaming premium · 1er mes promo
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-gradient">MUNDO</span>
            <br />
            <span className="text-gradient">INFINITO</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-3 font-light"
          >
            Tu universo de entretenimiento, sin límites.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10"
          >
            TV en vivo, películas, series, canales premium y todo el fútbol — en un solo lugar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          >
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-white shadow-glowWa text-base sm:text-lg"
              aria-label="Comprar por WhatsApp"
            >
              <WhatsAppIcon />
              Comprar por WhatsApp
            </a>
            <a
              href="#showcase"
              className="btn-secondary inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white text-base sm:text-lg"
            >
              Ver vista previa
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { v: "3", l: "Pantallas" },
              { v: "+1000", l: "Canales" },
              { v: "24/7", l: "Disponible" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                  {s.v}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <a
          href="#showcase"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white animate-float-med"
          aria-label="Hacé scroll para ver más"
        >
          <ChevronDown className="w-7 h-7" />
        </a>
      </section>

      {/* ============ CONTAINER SCROLL SHOWCASE ============ */}
      <section id="showcase" className="relative">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
                Una experiencia <span className="text-gradient">de cine</span> <br />
                <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-gradient">
                  en cada pantalla
                </span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6">
                La interfaz de Mundo Infinito: rápida, ordenada y con todo el catálogo a un clic.
              </p>
            </>
          }
        >
          {/* Mock streaming interface */}
          <div className="h-full w-full bg-gradient-to-br from-zinc-950 via-violet-950/40 to-zinc-950 text-white flex flex-col">
            {/* Mock topbar */}
            <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                <span className="font-display font-bold tracking-wider text-sm sm:text-base">
                  MUNDO INFINITO
                </span>
              </div>
              <nav className="hidden sm:flex items-center gap-5 text-xs text-slate-300">
                <span className="text-white">Inicio</span>
                <span>En vivo</span>
                <span>Películas</span>
                <span>Series</span>
                <span>Deportes</span>
              </nav>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-violet-500 to-rose-500" />
            </div>

            {/* Mock featured hero */}
            <div className="relative flex-1 grid grid-cols-1 sm:grid-cols-5 gap-3 p-3 sm:p-5">
              <div className="sm:col-span-3 relative rounded-xl overflow-hidden group">
                <Image
                  src={showreel[0].img}
                  alt={showreel[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-[10px] sm:text-xs font-bold tracking-wider rounded-full bg-rose-500 text-white inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    EN VIVO
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[10px] sm:text-xs text-violet-300 font-semibold tracking-widest mb-1">
                    FÚTBOL · CHAMPIONS LEAGUE
                  </p>
                  <h3 className="font-display text-lg sm:text-3xl font-bold mb-2 sm:mb-3">
                    Cuartos de final · Hoy 21:00
                  </h3>
                  <div className="hidden sm:flex gap-2">
                    <button className="btn-primary text-xs px-4 py-2 rounded-full font-semibold inline-flex items-center gap-1.5">
                      <Play className="w-3 h-3 fill-current" />
                      Mirar ahora
                    </button>
                    <button className="px-4 py-2 rounded-full font-semibold border border-white/30 text-xs">
                      + Mi lista
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar thumbs */}
              <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-1 gap-3">
                {showreel.slice(1, 5).map((s) => (
                  <div
                    key={s.title}
                    className="relative rounded-lg overflow-hidden aspect-video sm:aspect-auto sm:flex-1 group"
                  >
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-violet-300">
                        {s.tag}
                      </p>
                      <p className="text-xs sm:text-sm font-bold truncate">{s.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden py-6 border-y border-violet-600/15 bg-black/40 backdrop-blur-sm">
        <div className="marquee whitespace-nowrap text-slate-400 font-display text-sm sm:text-base tracking-widest">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex gap-12 items-center" aria-hidden={dup === 1}>
              <span>★ TV EN VIVO</span>
              <span>·</span>
              <span>★ PELÍCULAS HD</span>
              <span>·</span>
              <span>★ SERIES COMPLETAS</span>
              <span>·</span>
              <span>★ PACK DE FÚTBOL</span>
              <span>·</span>
              <span>★ CANALES PREMIUM</span>
              <span>·</span>
              <span>★ 3 PANTALLAS</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Todo lo que querés ver
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              Un solo plan, <span className="text-gradient">entretenimiento ilimitado</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
            >
              Todo el contenido premium en una suscripción que cuesta menos que un café por día.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: Tv,
                title: "TV en vivo",
                desc: "Cientos de canales nacionales e internacionales, noticias, deportes y entretenimiento 24/7.",
                grad: "from-violet-600 to-rose-600",
              },
              {
                Icon: Film,
                title: "Películas HD",
                desc: "Estrenos, clásicos y todos los géneros, en calidad HD y 4K.",
                grad: "from-rose-500 to-violet-600",
              },
              {
                Icon: PlaySquare,
                title: "Series completas",
                desc: "Temporadas enteras de las mejores series — al día con los estrenos.",
                grad: "from-violet-500 to-blue-500",
              },
              {
                Icon: Trophy,
                title: "Pack de fútbol",
                desc: "Liga local, Champions, Premier, La Liga y más — sin perderte ni un partido.",
                grad: "from-emerald-500 to-violet-600",
              },
              {
                Icon: Lock,
                title: "Canales premium +18",
                desc: "Acceso completo a canales para adultos, con control parental.",
                grad: "from-rose-600 to-pink-500",
              },
              {
                Icon: MonitorSmartphone,
                title: "3 pantallas simultáneas",
                desc: "Compartilo en familia: hasta 3 dispositivos a la vez.",
                grad: "from-amber-400 to-rose-500",
              },
            ].map(({ Icon, title, desc, grad }, i) => (
              <motion.article
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="glass rounded-3xl p-7 group hover:-translate-y-1 transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 group-hover:shadow-glow transition`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICES */}
      <section id="devices" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Mirá donde quieras
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="font-display text-4xl sm:text-5xl font-bold mb-4"
            >
              Funciona en <span className="text-gradient">todos tus dispositivos</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Una sola suscripción para cualquier pantalla. Compatible con Smart TV y Android.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { Icon: Tv2, label: "Smart TV" },
              { Icon: Tv, label: "Convertidor" },
              { Icon: Smartphone, label: "Celular" },
              { Icon: Tablet, label: "Tablet" },
              { Icon: Laptop, label: "PC / Proyector", Alt: Projector },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="glass rounded-2xl p-6 text-center group hover:-translate-y-1 transition"
              >
                <div className="mb-3 flex justify-center">
                  <Icon className="w-12 h-12 text-violet-400 group-hover:text-rose-400 transition" />
                </div>
                <div className="font-semibold text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Una sola tarifa, sin sorpresas
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="font-display text-4xl sm:text-5xl font-bold mb-4"
            >
              <span className="text-gradient">Promoción de bienvenida</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-rose-500 to-violet-600 rounded-3xl blur-2xl opacity-40 animate-pulse-glow"
            />

            <div className="relative glass rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
              <div className="absolute top-6 right-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-glowRose inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                1ER MES
              </div>

              <div className="font-display text-sm tracking-widest text-violet-300 mb-2">
                PLAN ÚNICO
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-8">
                Suscripción Mundo Infinito
              </h3>

              <div className="flex items-end justify-center gap-3 mb-2">
                <span className="text-slate-400 text-2xl">$</span>
                <span className="font-display text-7xl sm:text-8xl font-black text-gradient leading-none">
                  10.000
                </span>
              </div>
              <p className="text-slate-400 mb-8">primer mes</p>

              <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
                {[
                  "TV en vivo, películas, series, canales +18 y pack de fútbol",
                  "Perfil para 3 pantallas simultáneas",
                  "Funciona en TV, celu, tablet, compu y proyector Android",
                  "Activación rápida y soporte por WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-slate-300">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={offerUrl}
                target="_blank"
                rel="noopener"
                className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg w-full sm:w-auto shadow-glowWa"
                aria-label="Activar suscripción por WhatsApp"
              >
                <WhatsAppIcon />
                Quiero suscribirme
              </a>

              <p className="text-xs text-slate-500 mt-5">
                Pago directo coordinado por WhatsApp · Sin tarjetas guardadas
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Activación en minutos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="font-display text-4xl sm:text-5xl font-bold mb-4"
            >
              Cómo <span className="text-gradient">empezar a verlo</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Solo 4 pasos. No necesitás conocimientos técnicos.
            </motion.p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="step-num text-6xl sm:text-7xl flex-shrink-0">01</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Search className="w-5 h-5 text-violet-400" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold">Buscá la aplicación</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Abrí la <strong className="text-white">Google Play Store</strong> en tu televisor o
                  celular. En el buscador escribí{" "}
                  <code className="px-2 py-0.5 rounded bg-violet-600/20 text-violet-200 font-mono text-sm">
                    Downloader
                  </code>{" "}
                  y descargala.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              className="glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="step-num text-6xl sm:text-7xl flex-shrink-0">02</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <KeyRound className="w-5 h-5 text-violet-400" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold">Ingresá el código</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Abrí <strong className="text-white">Downloader</strong>, en la barra de búsqueda
                  ingresá el código que te enviamos por WhatsApp y presioná{" "}
                  <code className="px-2 py-0.5 rounded bg-emerald-600/20 text-emerald-200 font-mono text-sm">
                    Go
                  </code>
                  .
                </p>
                <a
                  href={whatsappUrl("Hola! Quiero recibir el código de instalación de Mundo Infinito")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-600/30 to-rose-500/30 border border-violet-400/40 hover:border-rose-400/70 hover:shadow-glowRose transition group"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm sm:text-base text-white font-semibold">
                    Pedí tu código por WhatsApp
                  </span>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-violet-300 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              className="glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="step-num text-6xl sm:text-7xl flex-shrink-0">03</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="w-5 h-5 text-violet-400" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold">
                    Ajustes de seguridad
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Cuando termine la descarga, tocá{" "}
                  <code className="px-2 py-0.5 rounded bg-violet-600/20 text-violet-200 font-mono text-sm">
                    Install
                  </code>
                  . Si pide permisos:
                </p>
                <ol className="mt-3 ml-6 text-slate-400 list-decimal space-y-1.5 text-[15px]">
                  <li>
                    Entrá a <span className="text-slate-200 font-medium">Configuración</span>
                  </li>
                  <li>
                    Activá el interruptor en{" "}
                    <span className="text-slate-200 font-medium">Downloader</span>
                  </li>
                  <li>Volvé hacia atrás para continuar</li>
                </ol>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              className="glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start border-emerald-500/30"
            >
              <div className="step-num text-6xl sm:text-7xl flex-shrink-0">04</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold">¡Todo listo!</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Seleccioná{" "}
                  <code className="px-2 py-0.5 rounded bg-emerald-600/20 text-emerald-200 font-mono text-sm">
                    Instalar
                  </code>{" "}
                  por última vez. Cuando termine, abrí la aplicación y disfrutá.
                </p>
                <a
                  href={helpUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                >
                  ¿Necesitás ayuda? Escribinos
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Tu próximo
            <br />
            <span className="text-gradient">maratón empieza hoy</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="text-slate-400 text-lg mb-10 max-w-xl mx-auto"
          >
            Activá tu suscripción en menos de 10 minutos. Te acompañamos por WhatsApp.
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            href={buyUrl}
            target="_blank"
            rel="noopener"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg shadow-glowWa"
            aria-label="Comprar por WhatsApp"
          >
            <WhatsAppIcon />
            Comprar por WhatsApp · $10.000
          </motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-violet-600/15 py-10 px-6 text-center text-slate-500 text-sm bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-display text-xs tracking-widest">
            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="9" stroke="#a78bfa" strokeWidth="2" />
              <ellipse
                cx="16"
                cy="16"
                rx="14"
                ry="5"
                stroke="#f43f5e"
                strokeWidth="1.5"
                transform="rotate(25 16 16)"
              />
            </svg>
            MUNDO INFINITO
          </div>
          <p>© {new Date().getFullYear()} Mundo Infinito · Todos los derechos reservados</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={buyUrl}
        target="_blank"
        rel="noopener"
        className="wa-ring fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-wa text-white flex items-center justify-center shadow-glowWa hover:scale-110 transition"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </main>
  );
}
