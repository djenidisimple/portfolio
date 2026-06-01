export interface Project {
  title: string;
  desc: string;
  color: string;
  img: string;
  url: string;
}

export const PROJECTS: Project[] = [
    {
    "title": "Linked-Brain",
    "desc": "Plateforme d'éducation et site web éducatif innovant conçu pour faciliter l'apprentissage, le partage de connaissances et le développement des compétences.",
    "color": "#22d3ee",
    "img": "portfolio",
    "url": "https://linked-brain.com"
  },
  {
    "title": "DevReview AI",
    "desc": "Plateforme d'évaluation automatisée de code basée sur l'intelligence artificielle pour analyser et optimiser la qualité du code source.",
    "color": "#4ade80",
    "img": "api",
    "url": "https://github.com/djenidisimple/IA-mentor"
  },
  {
    "title": "Raycasting Engine",
    "desc": "Mini-moteur graphique 3D en temps réel développé en Python, utilisant la technique du raycasting pour simuler un environnement pseudo-3D à la Wolfenstein 3D.",
    "color": "#f59e0b",
    "img": "raycasting",
    "url": "https://github.com/djenidisimple/raycasting"
  },
];
