import { Course } from './components/Courses';

enum h {
  sm = 24,
  md = 36,
  lg = 48,
}

enum s {
  s1 = 2019,
  s2 = 2020,
  s3 = 2020,
  s4 = 2021,
  s5 = 2021,
  s6 = 2022,
  s7 = 2022,
  s8 = 2023,
}

// SEMESTRE 1
// INF1 - Informatique 1 Patrick Derbez CC Ecrit // TP 6 6 S = CC
// DIE - Découverte Informatique
// Electronique François Bodin CC TP, Ecrit // QCM 6 6 S = CC
// FOM - Fondamentaux // Mathématiques Anne Virrion CC Ecrit, oral 3 3 S = CC
// MAT1 - Mathématiques 1 Bertold Wiest CC Ecrit // Oral 6 6 S = CC
// COD - Codage Sophie Allain‐ // Bailhache CC Ecrit, QCM 3 3 S = CC
// SI1 ‐Spécialité Informatique 1 Thomas Genet CC TP // Ecrit, QCM 6 6 S = CC
// SE1 - Spécialité Electronique 1 Matthieu DAVY CC Ecrit, TP, // QCM 6 0 S = CC

const s1: Course[] = [
  {
    acronyme: 'INF1',
    category: 'Development',
    title: 'Informatique 1',
    year: s.s1,
    hours: h.md,
  },
  {
    acronyme: 'DIE',
    category: 'Development',
    title: 'Découverte Informatique Electronique',
    year: s.s1,
    hours: h.md,
  },
  {
    acronyme: 'FOM',
    category: 'Mathematics',
    title: 'Fondamentaux Mathématiques',
    year: s.s1,
    hours: h.md,
  },
  {
    acronyme: 'MAT1',
    category: 'Mathematics',
    title: 'Mathématiques 1',
    year: s.s1,
    hours: h.md,
  },
  {
    acronyme: 'COD',
    category: 'Development',
    title: 'Codage',
    year: s.s1,
    hours: h.md,
  },
  {
    acronyme: 'SI1',
    category: 'Development',
    title: 'Spécialité Informatique 1',
    year: s.s1,
    hours: h.md,
  },
  {
    acronyme: 'SE1',
    category: 'Electronics',
    title: 'Spécialité Electronique 1',
    year: s.s1,
    hours: h.md,
  },
];

// SEMESTRE 2
// MAT2 - Mathématiques 2 Felix Ulmer CC Ecrit 6 6 S = CC
// ANG - Anglais Laurence Morlet CC Ecrit, oral 3 3 S = CC
// PPC - Projet Professionnel et Communication Laurence Pasquereau CC TP, Ecrit 3 3 S = CC
// SEN1 - Spécialité Electronique Numérique 1 Johanne Bezy CC TP Ecrit 6 6 S = CC
// SI2 - Spécialité Informatique 2 Delphine Demange CC TP Ecrit QCM 6 6 S = CC
// PH1 - Physique 1 Sylvie Beaufils CC TP Ecrit 6 6 S = CC
// CMA1 - Compléments ESIR de Mathématiques 1 L. Albera CC Ecrit 6 0 S=CC

const s2: Course[] = [
  {
    acronyme: 'MAT2',
    category: 'Mathematics',
    title: 'Mathématiques 2',
    year: s.s2,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'Anglais',
    year: s.s2,
    hours: h.md,
  },
  {
    acronyme: 'PPC',
    category: 'Professional',
    title: 'Projet Professionnel et Communication',
    year: s.s2,
    hours: h.md,
  },
  {
    acronyme: 'SEN1',
    category: 'Electronics',
    title: 'Spécialité Electronique Numérique 1',
    year: s.s2,
    hours: h.md,
  },
  {
    acronyme: 'SI2',
    category: 'Development',
    title: 'Spécialité Informatique 2',
    year: s.s2,
    hours: h.md,
  },
  {
    acronyme: 'PH1',
    category: 'Physics',
    title: 'Physique 1',
    year: s.s2,
    hours: h.md,
  },
  {
    acronyme: 'CMA1',
    category: 'Mathematics',
    title: 'Compléments ESIR de Mathématiques 1',
    year: s.s2,
    hours: h.md,
  },
];

// SEMESTRE 3
// MAT3 - Mathématiques 3 Laurence Pasquereau CC Ecrit, Oral, QCM Notes reportées 6 6 S = CC
// PO - Programmation objet Alexandre Termier CC écrit oral QCM TP 6 6 S = CC
// PRB - Probabilités Nathalie Krell CC écrit Oral QCM 3 3 S = CC
// OFI - Outils formels pour l'informatique Anne Grazon CC écrit Oral QCM 6 6 S = CC
// INS - Instrumentation Anne-Claude Tarot CC écrit oral QCM TP 6 6 S = CC
// PH2 - Physique 2 Olivier Émile CC écrit oral QCM TP 3 3 S = CC
// EXP - Expression et communication D. Mahieu CC Oral S = CC

const s3: Course[] = [
  {
    acronyme: 'MAT3',
    category: 'Mathematics',
    title: 'Mathématiques 3',
    year: s.s3,
    hours: h.md,
  },
  {
    acronyme: 'PO',
    category: 'Development',
    title: 'Programmation objet',
    year: s.s3,
    hours: h.md,
  },
  {
    acronyme: 'PRB',
    category: 'Mathematics',
    title: 'Probabilités',
    year: s.s3,
    hours: h.md,
  },
  {
    acronyme: 'OFI',
    category: 'Development',
    title: "Outils formels pour l'informatique",
    year: s.s3,
    hours: h.md,
  },
  {
    acronyme: 'INS',
    category: 'Electronics',
    title: 'Instrumentation',
    year: s.s3,
    hours: h.md,
  },
  {
    acronyme: 'PH2',
    category: 'Physics',
    title: 'Physique 2',
    year: s.s3,
    hours: h.md,
  },
  {
    acronyme: 'EXP',
    category: 'Professional',
    title: 'Expression et communication',
    year: s.s3,
    hours: h.md,
  },
];

// SEMESTRE 4
// STA - Statistiques Bernard Delyon CC écrit oral QCM TP Notes reportées 3 3 S = CC
// ARI - Arithmétique San Vu Ngoc CC écrit oral QCM TP 3 3 S = CC
// GEN - Génie logiciel Thomas Genet CC écrit oral QCM TP 6 6 S = CC
// MAT4 - Mathématiques 4 Oscar Acosta CC écrit QCM TP oral 3 3 S = CC
// CMA2 - Compléments de mathématiques 2 Laurent Albera CC écrit oral QCM TP 3 3 S = CC
// SIG - Initiation au signal Johanne Bezy CC écrit oral QCM TP 3 3 S = CC
// TEL - Télécom Éric Pottier CC écrit oral QCM TP 3 3 S = CC
// CST - Communication scientifique et technique Déborah Mahieu CC écrit oral QCM TP 3 3 S = CC
// ANG - Anglais Laurence Morlet CC écrit oral QCM - - 3 3 S = CC
// TIPE O. Lafond S Projet

const s4: Course[] = [
  {
    acronyme: 'STA',
    category: 'Mathematics',
    title: 'Statistiques',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'ARI',
    category: 'Mathematics',
    title: 'Arithmétique',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'GEN',
    category: 'Development',
    title: 'Génie logiciel',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'MAT4',
    category: 'Mathematics',
    title: 'Mathématiques 4',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'CMA2',
    category: 'Mathematics',
    title: 'Compléments de mathématiques 2',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'SIG',
    category: 'Electronics',
    title: 'Initiation au signal',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'TEL',
    category: 'Electronics',
    title: 'Télécom',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'CST',
    category: 'Professional',
    title: 'Communication scientifique et technique',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'Anglais',
    year: s.s4,
    hours: h.md,
  },
  {
    acronyme: 'TIPE',
    category: 'Professional',
    title: 'TIPE',
    year: s.s4,
    hours: h.md,
  },
];

// SEMESTRE 5
// MATHS1‐S5 : Mathématiques L. Albera CC T / écrit (1h) Mars S1 = CC S2 = Max (CC,T)
// PROB‐S5 : Probabilités A. Karfoul CC T / écrit (1h) Mars S1 = CC S2 = Max (CC,T)
// STAT‐S5 : Statistiques B. Uguen CC T / écrit (1h) Mars S1 = CC S2 = Max (CC,T) 6 S = (2PROG1+ELEC)/3
// PROG1‐S5 : Programmation S. Challita CC D T / écrit (1h) Mars - S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D
// ELEC‐S5 : Interaction électronique / logiciel S. Avrillon, J. Bourcier CC T / écrit (1h) Mars S1 = CC S2 = Max (CC,T) 7 S = (RES+SYS)/2
// RES‐S5 : Réseaux Y. Hadjadj‐Aoul CC D T / écrit (1h) Mars - S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D
// SYS‐S5 : Systèmes d\'exploitation F. Taiani CC D T / écrit (1h) Mars S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D 5 S = (MGTINNOV)/2
// MGT‐S5 : Management M. Mandard CC T / écrit (1h) Mars - S1 = CC S2 = Max (CC,T)
// INENT‐S5 : Innovation et entrepreneuriat M. Mandard
// ANG‐S5 : Anglais F. Williams CC Note reportée - S1 = CC
// COM‐S5 : Communication D. Mahieu CC Note reportée - S1 = CC
// SPO‐S5 : sport M. Dureault CC Note reportée - S1 = CC

const s5: Course[] = [
  {
    acronyme: 'MATHS1',
    category: 'Mathematics',
    title: 'Mathématiques',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'PROB',
    category: 'Mathematics',
    title: 'Probabilités',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'STAT',
    category: 'Mathematics',
    title: 'Statistiques',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'PROG1',
    category: 'Development',
    title: 'Programmation',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'ELEC',
    category: 'Electronics',
    title: 'Interaction électronique / logiciel',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'RES',
    category: 'Systems',
    title: 'Réseaux',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'SYS',
    category: 'Systems',
    title: "Systèmes d'exploitation",
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'MGT',
    category: 'Professional',
    title: 'Management',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'INENT',
    category: 'Professional',
    title: 'Innovation et entrepreneuriat',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'Anglais',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'COM',
    category: 'Professional',
    title: 'Communication',
    year: s.s5,
    hours: h.md,
  },
  {
    acronyme: 'SPO',
    category: 'Sport',
    title: 'Bouldering',
    year: s.s5,
    hours: h.md,
  },
];

// SEMESTRE 6
// MATHS2 : Mathématiques L. Albera CC T / écrit (1h) Juin S1 = CC S2 = Max (CC,T)
// TS : Traitement du signal R. Le Bouquin CC T / écrit (1h) Juin S1 = CC S2 = Max (CC,T)
// PROJ_MATH : Projet Mathématiques Z. Miklos D Note reportée S1 = D 6 S = (PROG2+BD)/2
// PROG2 : Programmation F. Lamarche CC D T / écrit (1h) Juin - S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D
// BD : Bases de données Z. Miklos CC D T / écrit (1h) Juin S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D 4 S = (AG+IIA)/2
// AG : Algorithme des Graphes G. Rubino CC D T / écrit (1h) Juin - S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D
// IIA : Introduction Intelligence Artificielle Z. Miklos CC D T / écrit (1h) Juin S1 = 0,7CC+0,3D S2 = 0,7max(CC,T)+0,3D 3 S = PROJ_PROG
// PROJ_PROG : Projet Programmation J. Bourcier D Note reportée - S1 = D 5 S = (MGT+INNOV)/2
// MGT : Management M. Mandard CC T / écrit (1h) Mars - S1 = CC S2 = Max (CC,T)
// INENT‐S6 : Innovation et entrepreneuriat M. Mandard
// ANG‐S6 : Anglais F. Williams CC Note reportée ‐ S1 = CC
// COM‐S6 : Communication D. Mahieu CC Note reportée ‐ S1 = CC
// SPO‐S6 : sport M. Dureault CC Note reportée ‐ S1 = CC
// TAGE‐S6 : Stage J. Bourcier Validation par Jury

const s6: Course[] = [
  {
    acronyme: 'MATHS2',
    category: 'Mathematics',
    title: 'Mathématiques',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'TS',
    category: 'Mathematics',
    title: 'Traitement du signal',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'PROJ_MATH',
    category: 'Mathematics',
    title: 'Projet Mathématiques',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'PROG2',
    category: 'Development',
    title: 'Programmation',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'BD',
    category: 'Development',
    title: 'Bases de données',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'AG',
    category: 'Development',
    title: 'Algorithme des Graphes',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'IIA',
    category: 'Development',
    title: 'Introduction Intelligence Artificielle',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'PROJ_PROG',
    category: 'Development',
    title: 'Projet Programmation',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'MGT',
    category: 'Professional',
    title: 'Management',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'INENT',
    category: 'Professional',
    title: 'Innovation et entrepreneuriat',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'Anglais',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'COM',
    category: 'Professional',
    title: 'Communication',
    year: s.s6,
    hours: h.md,
  },
  {
    acronyme: 'SPO',
    category: 'Sport',
    title: 'Bouldering',
    year: s.s6,
    hours: h.md,
  },
];

export const courses = [...s1, ...s2, ...s3, ...s4, ...s5, ...s6];
