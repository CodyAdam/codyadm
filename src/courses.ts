enum h {
  sm = 24,
  md = 36,
  lg = 48,
}

export type Course = {
  acronyme: string;
  title: string;
  englishTitle?: string;
  hours: number;
  sem: Semester;
  category: string;
  keywords?: string[];
};

export type Category = {
  title: string;
  hours: number;
  courses: Course[];
};

export enum Semester {
  s1 = 's1', // 2019
  s2 = 's2', // 2020
  s3 = 's3', // 2020
  s4 = 's4', // 2021
  s5 = 's5', // 2021
  s6 = 's6', // 2022
  s7 = 's7', // 2022
  s8 = 's8', // 2023
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
    title: 'Computer Science',
    sem: Semester.s1,
    hours: h.lg,
  },
  {
    acronyme: 'DIE',
    category: 'Development',
    title: 'Computer Science and Electronics Discovery',
    sem: Semester.s1,
    hours: h.lg,
  },
  {
    acronyme: 'FOM',
    category: 'Mathematics',
    title: 'Mathematics Fundamentals',
    sem: Semester.s1,
    hours: h.md,
  },
  {
    acronyme: 'MAT1',
    category: 'Mathematics',
    title: 'Mathematics',
    sem: Semester.s1,
    hours: h.md,
  },
  {
    acronyme: 'COD',
    category: 'Systems',
    title: 'Cryptology',
    sem: Semester.s1,
    hours: h.lg,
  },
  {
    acronyme: 'SI1',
    category: 'Development',
    title: 'Computer Science Speciality',
    sem: Semester.s1,
    hours: h.md,
  },
  {
    acronyme: 'SE1',
    category: 'Electronics',
    title: 'Electronics Speciality',
    sem: Semester.s1,
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
    title: 'Mathematics',
    sem: Semester.s2,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'English',
    sem: Semester.s2,
    hours: h.md,
  },
  {
    acronyme: 'PPC',
    category: 'Professional',
    title: 'Professional Project and Communication',
    sem: Semester.s2,
    hours: h.sm,
  },
  {
    acronyme: 'SEN1',
    category: 'Electronics',
    title: 'Digital Electronics Speciality',
    sem: Semester.s2,
    hours: h.lg,
  },
  {
    acronyme: 'SI2',
    category: 'Development',
    title: 'Computer Science Speciality',
    sem: Semester.s2,
    hours: h.lg,
  },
  {
    acronyme: 'PH1',
    category: 'Physics',
    title: 'Physics',
    sem: Semester.s2,
    hours: h.lg,
  },
  {
    acronyme: 'CMA1',
    category: 'Mathematics',
    title: 'Mathematics Complements',
    sem: Semester.s2,
    hours: h.lg,
  },
  {
    acronyme: 'BOUL',
    category: 'Sport',
    title: 'Bouldering',
    sem: Semester.s2,
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
// ANG - Anglais Laurence Morlet CC Ecrit, oral 3 3 S = CC

const s3: Course[] = [
  {
    acronyme: 'MAT3',
    category: 'Mathematics',
    title: 'Mathematics',
    sem: Semester.s3,
    hours: h.sm,
  },
  {
    acronyme: 'PO',
    category: 'Development',
    title: 'Object Oriented Programming',
    sem: Semester.s3,
    hours: h.lg,
  },
  {
    acronyme: 'PRB',
    category: 'Mathematics',
    title: 'Probability',
    sem: Semester.s3,
    hours: h.lg,
  },
  {
    acronyme: 'OFI',
    category: 'Development',
    title: 'Formal Tools for Computer Science',
    sem: Semester.s3,
    hours: h.lg,
  },
  {
    acronyme: 'INS',
    category: 'Electronics',
    title: 'Instrumentation',
    sem: Semester.s3,
    hours: h.lg,
  },
  {
    acronyme: 'PH2',
    category: 'Physics',
    title: 'Physics',
    sem: Semester.s3,
    hours: h.lg,
  },
  {
    acronyme: 'EXP',
    category: 'Professional',
    title: 'Expression and Communication',
    sem: Semester.s3,
    hours: h.sm,
  },
  {
    acronyme: 'BOUL',
    category: 'Sport',
    title: 'Bouldering',
    sem: Semester.s3,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'English',
    sem: Semester.s3,
    hours: h.md,
  }
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
    title: 'Statistics',
    sem: Semester.s4,
    hours: h.md,
  },
  {
    acronyme: 'ARI',
    category: 'Mathematics',
    title: 'Arithmetic',
    sem: Semester.s4,
    hours: h.lg,
  },
  {
    acronyme: 'GEN',
    category: 'Development',
    title: 'Software Engineering',
    sem: Semester.s4,
    hours: h.lg,
  },
  {
    acronyme: 'MAT4',
    category: 'Mathematics',
    title: 'Mathematics',
    sem: Semester.s4,
    hours: h.md,
  },
  {
    acronyme: 'CMA2',
    category: 'Mathematics',
    title: 'Mathematics Complements',
    sem: Semester.s4,
    hours: h.lg,
  },
  {
    acronyme: 'SIG',
    category: 'Electronics',
    title: 'Basic Signal Processing',
    sem: Semester.s4,
    hours: h.lg,
  },
  {
    acronyme: 'TEL',
    category: 'Electronics',
    title: 'Telecommunications',
    sem: Semester.s4,
    hours: h.lg,
  },
  {
    acronyme: 'CST',
    category: 'Professional',
    title: 'Scientific and Technical Communication',
    sem: Semester.s4,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'English',
    sem: Semester.s4,
    hours: h.md,
  },
  {
    acronyme: 'TIPE',
    category: 'Professional',
    title: 'Personal ending project',
    sem: Semester.s4,
    hours: h.lg,
  },
  {
    acronyme: 'BOUL',
    category: 'Sport',
    title: 'Bouldering',
    sem: Semester.s4,
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
    title: 'Mathematics',
    sem: Semester.s5,
    hours: h.lg,
  },
  {
    acronyme: 'PROB',
    category: 'Mathematics',
    title: 'Probability',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'STAT',
    category: 'Mathematics',
    title: 'Statistics',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'PROG1',
    category: 'Development',
    title: 'Programming',
    sem: Semester.s5,
    hours: h.lg,
  },
  {
    acronyme: 'ELEC',
    category: 'Electronics',
    title: 'Electronics / Software Interaction',
    sem: Semester.s5,
    hours: h.lg,
  },
  {
    acronyme: 'RES',
    category: 'Systems',
    title: 'Networks',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'SYS',
    category: 'Systems',
    title: 'Operating Systems',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'MGT',
    category: 'Professional',
    title: 'Management',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'INENT',
    category: 'Professional',
    title: 'Innovation and Entrepreneurship',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'English',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'COM',
    category: 'Professional',
    title: 'Communication',
    sem: Semester.s5,
    hours: h.md,
  },
  {
    acronyme: 'BOUL',
    category: 'Sport',
    title: 'Bouldering',
    sem: Semester.s5,
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
    title: 'Mathematics',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'TS',
    category: 'Electronics',
    title: 'Signal Processing',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'PROJ_MATH',
    category: 'Mathematics',
    title: 'Mathematics Project',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'PROG2',
    category: 'Development',
    title: 'Programming',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'BD',
    category: 'Development',
    title: 'Databases',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'AG',
    category: 'Development',
    title: 'Graph Algorithms',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'IIA',
    category: 'Development',
    title: 'Introduction to Artificial Intelligence',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'PROJ_PROG',
    category: 'Development',
    title: 'Programming Project',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'MGT',
    category: 'Professional',
    title: 'Management',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'MARKETING',
    category: 'Professional',
    title: 'Marketing',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'INENT',
    category: 'Professional',
    title: 'Innovation and Entrepreneurship',
    sem: Semester.s6,
    hours: h.lg,
  },
  {
    acronyme: 'ANG',
    category: 'Languages',
    title: 'English',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'COM',
    category: 'Professional',
    title: 'Communication',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'BOUL',
    category: 'Sport',
    title: 'Bouldering',
    sem: Semester.s6,
    hours: h.md,
  },
  {
    acronyme: 'VOLLEY',
    category: 'Sport',
    title: 'Volleyball',
    sem: Semester.s6,
    hours: h.sm,
  },
  {
    acronyme: 'ULTIMATE',
    category: 'Sport',
    title: 'Ultimate Frisbee',
    sem: Semester.s6,
    hours: h.sm,
  },
];

function getCategorizedCourses(courses: Course[]) {
  const categorizedCourses: Category[] = [];
  courses.forEach((course) => {
    // find the category index
    const categoryIndex = categorizedCourses.findIndex((category) => category.title === course.category);

    // if the category does not exist, create it
    if (categoryIndex === -1) {
      categorizedCourses.push({
        title: course.category,
        hours: course.hours,
        courses: [{...course}],
      });
    } else {
      // if the category exists
      // check if the course is already in the category
      const courseIndex = categorizedCourses[categoryIndex].courses.findIndex((c) => c.title === course.title);
      if (courseIndex === -1) {
        // add the course to it
        categorizedCourses[categoryIndex].courses.push({...course});
      } else {
        // add the hours count to the course
        categorizedCourses[categoryIndex].courses[courseIndex].hours += course.hours;
      }
      categorizedCourses[categoryIndex].hours += course.hours;
    }
  });
  categorizedCourses.sort((a, b) => b.hours - a.hours);
  return categorizedCourses;
}

function getCategorizedCoursesPerYear(whitelist: Semester[], allCourses: Course[]) {
  const courses = allCourses.filter((course) => whitelist.includes(course.sem));
  return getCategorizedCourses(courses);
}

const all = [...s1, ...s2, ...s3, ...s4, ...s5, ...s6];

const year2019 = getCategorizedCoursesPerYear([Semester.s1, Semester.s2], all);
const year2020 = getCategorizedCoursesPerYear([Semester.s3, Semester.s4], all);
const year2021 = getCategorizedCoursesPerYear([Semester.s5, Semester.s6], all);

const allCourses = getCategorizedCourses(all);

export { allCourses, year2019, year2020, year2021 };
