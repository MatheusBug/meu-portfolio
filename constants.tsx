import { Project, Skill, SocialLink } from './types';
import { Linkedin, Instagram, Phone, Github, Globe, Mail } from 'lucide-react';

export const HERO_DATA = {
  name: "MATHEUS AMORIM",
  role: "ARQUITETO DIGITAL",
  subtitle: "Web Designer | Entusiasta Tech | Empreendedor",
  ctaText: "SOLICITAR ORÇAMENTO",
  ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdQkqYXCtg2HpxY2XStiKUUZ3_tZLXQki7qLgldHG-e8-A81g/viewform?usp=sharing&ouid=102812964039682990173",
  // TODO: Substitua a URL abaixo pela URL da foto que você enviou.
  // Usei um placeholder profissional temporário que combina com a estética.
  avatarUrl: "/avatar.jpg"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "06",
    title: "MONTEIRO & ASSOCIADOS",
    client: "Monteiro & Associados",
    description: "Site institucional para escritório de advocacia focado em excelência e autoridade jurídica. Design sóbrio e elegante.",
    tech: ["React", "TailwindCSS", "Vite"],
    imageUrl: "/monteiro-associados.png",
    link: "https://site-monteiro-associados-2.pages.dev/"
  },
  {
    id: "05",
    title: "RICTOUR VIAGENS",
    client: "Rictour Turismo",
    description: "Plataforma de turismo e locação de vans em Salvador. Sistema de reservas de transfers e passeios turísticos com foco em experiência do usuário.",
    tech: ["WordPress", "PHP", "SEO"],
    imageUrl: "/rictour.png",
    link: "https://rictour.com.br/"
  },
  {
    id: "04",
    title: "LUMINA ODONTOLOGIA",
    client: "Lumina Odontologia Premium",
    description: "Site institucional premium para clínica odontológica. Design moderno, responsivo e focado na experiência do paciente.",
    tech: ["React", "TailwindCSS", "Vite"],
    imageUrl: "/lumina-full.webp",
    link: "https://site-lumanina-odontologia.pages.dev/"
  }
];

export const SERVICES_DATA = [
  {
    id: "web-design",
    title: "Web Design & Landing Pages",
    description: "Seu site é seu vendedor 24 horas. Crio páginas de alta conversão que transformam visitantes em clientes, com design premium e carregamento instantâneo.",
    icon: "Layout"
  },
  {
    id: "seo",
    title: "Otimização SEO",
    description: "Não adianta ter o melhor produto se ninguém te encontra. Coloco sua marca no topo das buscas do Google para quem realmente quer comprar de você.",
    icon: "Search"
  },
  {
    id: "geo-marketing",
    title: "Gestão de Tráfego & Geolocalização",
    description: "Domine sua região. Atraia clientes locais qualificados que estão buscando seus serviços agora mesmo no Google Maps e redes sociais.",
    icon: "MapPin"
  },
  {
    id: "graphic-design",
    title: "Design Gráfico & Identidade",
    description: "Uma marca forte vende mais. Desenvolvo identidades visuais marcantes que transmitem profissionalismo e autoridade no seu nicho.",
    icon: "Palette"
  }
];
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "WhatsApp", url: "https://wa.me/+5571986145025?text=Ola%20gostaria%20de%20fazer%20um%20or%C3%A7amento!", icon: Phone, label: "WhatsApp" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/matheus-amorim-35ba46201/", icon: Linkedin },
  { name: "Instagram", url: "https://www.instagram.com/amorim.io/", icon: Instagram },
  { name: "GitHub", url: "https://github.com/MatheusBug", icon: Github },
];