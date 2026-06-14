export const ui = {
  es: {
    nav: { home: 'Inicio', books: 'Libros', collab: 'Colaboraciones', contact: 'Contacto' },
    logoSub: 'escritora',
    langLabel: 'FR',
  },
  fr: {
    nav: { home: 'Accueil', books: 'Livres', collab: 'Presse', contact: 'Contact' },
    logoSub: 'écrivaine',
    langLabel: 'ES',
  },
} as const;

export type Lang = keyof typeof ui;

export const routes = {
  es: { home: '/', books: '/libros', collab: '/colaboraciones', contact: '/contacto' },
  fr: { home: '/fr/', books: '/libros', collab: '/fr/presse-collaborations', contact: '/fr/contact' },
};

/** Given the current pathname, return the URL in the other language. */
export function getAlternateUrl(pathname: string): string {
  const map: Record<string, string> = {
    '/': '/fr/',
    '/fr/': '/',
    '/colaboraciones': '/fr/presse-collaborations',
    '/fr/presse-collaborations': '/colaboraciones',
    '/fr/presse': '/colaboraciones',
    '/contacto': '/fr/contact',
    '/fr/contact': '/contacto',
  };
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  const normalizedLookup = map[pathname] ?? map[normalized];
  if (normalizedLookup) return normalizedLookup;
  // For unmapped paths (libros, contacto, etc.), go to home in the other lang
  return pathname.startsWith('/fr') ? '/' : '/fr/';
}

export function getLang(pathname: string): Lang {
  return pathname.startsWith('/fr') ? 'fr' : 'es';
}
