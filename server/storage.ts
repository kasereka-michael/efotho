import { 
  type Course, 
  type InsertCourse,
  type Intervenant,
  type InsertIntervenant,
  type Alumni,
  type InsertAlumni
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  getIntervenants(): Promise<Intervenant[]>;
  getIntervenant(id: string): Promise<Intervenant | undefined>;
  createIntervenant(intervenant: InsertIntervenant): Promise<Intervenant>;
  
  getAlumni(): Promise<Alumni[]>;
  getAlumniById(id: string): Promise<Alumni | undefined>;
  createAlumni(alumni: InsertAlumni): Promise<Alumni>;
}

export class MemStorage implements IStorage {
  private courses: Map<string, Course>;
  private intervenants: Map<string, Intervenant>;
  private alumni: Map<string, Alumni>;

  constructor() {
    this.courses = new Map();
    this.intervenants = new Map();
    this.alumni = new Map();
    this.seedData();
  }

  private seedData() {
    const course1: Course = {
      id: randomUUID(),
      title: "MUSIKA NA KIPAJI",
      instructor: "FORMATEUR INTERVENANT",
      location: "Victoria Library - Goma Congo RD",
      date: "Du 26 / Février 2025",
      imageUrl: "/attached_assets/EDUCATION_1763466326947.png",
      category: "cours",
    };
    
    const course2: Course = {
      id: randomUUID(),
      title: "MENTORAT 2025",
      instructor: "FORMATEUR",
      location: "Victoria Library - Goma Congo RD",
      date: "Du 26 / Janvier 2025",
      imageUrl: "/attached_assets/EDUCATION_1763466326947.png",
      category: "cours",
    };

    this.courses.set(course1.id, course1);
    this.courses.set(course2.id, course2);

    const intervenant1: Intervenant = {
      id: "moses-sawasawa",
      name: "Moses Sawasawa",
      title: "Photojournaliste",
      bio: "Moses Sawasawa est né à Goma, en septembre 1997. Membre de APJD /WORLD PRESS PHOTO, il débute la photographie en 2015...",
      imageUrl: "/attached_assets/PROFIL CLIC - INTERVENANT_1763466326946.png",
    };

    this.intervenants.set(intervenant1.id, intervenant1);

    const alumni1: Alumni = {
      id: "aubin-mukoni",
      name: "Aubin Mukoni",
      title: "Photographe",
      bio: "Aubin Mukoni, un jeune photographe et vidéographe congolais né en 2002 et basé à Goma...",
      imageUrl: "/attached_assets/Alumni CLIP PROFIL_1763466326945.png",
      galleryImages: Array(9).fill("/attached_assets/Alumni CLIP PROFIL_1763466326945.png"),
    };

    this.alumni.set(alumni1.id, alumni1);
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }

  async getIntervenants(): Promise<Intervenant[]> {
    return Array.from(this.intervenants.values());
  }

  async getIntervenant(id: string): Promise<Intervenant | undefined> {
    return this.intervenants.get(id);
  }

  async createIntervenant(insertIntervenant: InsertIntervenant): Promise<Intervenant> {
    const id = randomUUID();
    const intervenant: Intervenant = { ...insertIntervenant, id };
    this.intervenants.set(id, intervenant);
    return intervenant;
  }

  async getAlumni(): Promise<Alumni[]> {
    return Array.from(this.alumni.values());
  }

  async getAlumniById(id: string): Promise<Alumni | undefined> {
    return this.alumni.get(id);
  }

  async createAlumni(insertAlumni: InsertAlumni): Promise<Alumni> {
    const id = randomUUID();
    const alumni: Alumni = { ...insertAlumni, id };
    this.alumni.set(id, alumni);
    return alumni;
  }
}

export const storage = new MemStorage();
