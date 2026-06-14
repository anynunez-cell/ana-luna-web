export interface Libro {
  titulo: string;
  anio: number | null;
  editorial: string | null;
  descripcion: string;
  description: string;
  noteFr?: string;
  cita?: string;
  citaFuente?: string;
  portada: string;
  portadaFr?: string;
  compra: string | null;
  compraFr?: string;
  compraLabel: string | null;
  compraLabelFr: string | null;
}

export const libros: Libro[] = [
  {
    titulo: 'Mujeres rotas',
    anio: 2025,
    editorial: 'Cristálida Ediciones',
    descripcion: 'En estos relatos breves, Ana Luna explora con sensibilidad y precisión las complejidades de la condición humana, especialmente la experiencia femenina en momentos de crisis y transformación. Con una escritura sobria y poderosa, retrata vidas marcadas por la violencia, la pérdida y la resistencia. Un libro intenso y revelador que invita a reflexionar sobre las heridas de la existencia y la posibilidad de una verdadera emancipación.',
    description: '',
    noteFr: 'Bientôt disponible en français.',
    portada: '/images/libros/mujeres-rotas.jpg',
    compra: 'https://www.amazon.ca/-/fr/Mujeres-rotas-Ana-Luna/dp/292544640X/',
    compraLabel: 'Comprar en Amazon ↗',
    compraLabelFr: 'Acheter sur Amazon ↗',
  },
  {
    titulo: 'Adela y el poder / Adela et le pouvoir',
    anio: 2022,
    editorial: 'Cristálida Ediciones',
    descripcion: 'Una fiscal cubana relata los momentos decisivos que marcaron su vida. A través de la mirada lúcida y profundamente humana de Adèla Santana, esta novela sumerge al lector en la cotidianidad cubana, los entresijos del poder y las realidades de la emigración. Un relato cautivador, de escritura ágil e íntima, que combina emoción, tensión y autenticidad.',
    description: 'Une procureure cubaine raconte les moments décisifs qui ont marqué sa vie. À travers le regard lucide et profondément humain d\'Adèla Santana, ce roman plonge le lecteur au cœur du quotidien cubain, des rouages du pouvoir et des réalités de l\'émigration. Un récit captivant, porté par une écriture vive et intimiste, qui mêle émotion, tension et authenticité.',
    portada: '/images/libros/adela-y-el-poder.jpg',
    portadaFr: '/images/libros/adela-et-le-pouvoir.jpg',
    compra: 'https://lasamericas.ca/fr/produits/36847/adela-y-el-poder-cristalida',
    compraFr: 'https://www.amazon.ca/-/fr/Ad%C3%A8la-pouvoir-M%C3%A9moires-procureure-Havane/dp/2925321836/',
    compraLabel: 'Comprar (ES) ↗',
    compraLabelFr: 'Acheter sur Amazon ↗',
  },
  {
    titulo: 'Crónicas domésticas / Chroniques du quotidien',
    anio: 2023,
    editorial: 'Cristálida Ediciones',
    descripcion: 'Las protagonistas de estas historias han decidido vivir según sus propias reglas, sin importar los prejuicios ni las expectativas de los demás. Entre amores fallidos, deseos reprimidos, frustraciones y rebeldías silenciosas, Ana Núñez González construye un retrato intenso y conmovedor de mujeres que, aunque parezcan domesticadas, conservan intacta su libertad interior. Un libro lúcido, provocador y profundamente humano.',
    description: 'Les protagonistes de ces récits ont choisi de vivre selon leurs propres règles, sans se soucier des préjugés ni des attentes des autres. Entre amours déçues, désirs inassouvis, frustrations et révoltes silencieuses, Ana Núñez González dresse un portrait intense et touchant de femmes qui, malgré les apparences, ont préservé leur liberté intérieure. Un livre lucide, audacieux et profondément humain.',
    cita: '«Una joya de la narrativa breve que convierte lo cotidiano en una fuente inagotable de revelaciones.»',
    citaFuente: 'Hablemos Escritoras, noviembre 2025',
    portada: '/images/libros/cronicas-domesticas.jpg',
    portadaFr: '/images/libros/chroniques-du-quotidien.jpg',
    compra: 'https://www.amazon.ca/-/fr/Cr%C3%B3nicas-dom%C3%A9sticas-Ana-Nunez-Gonzalez/dp/B09S5ZNBM8/',
    compraLabel: 'Comprar en Amazon ↗',
    compraLabelFr: 'Acheter sur Amazon ↗',
  },
];
