import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/courses", async (_req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await storage.getCourse(req.params.id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });

  app.get("/api/intervenants", async (_req, res) => {
    try {
      const intervenants = await storage.getIntervenants();
      res.json(intervenants);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch intervenants" });
    }
  });

  app.get("/api/intervenants/:id", async (req, res) => {
    try {
      const intervenant = await storage.getIntervenant(req.params.id);
      if (!intervenant) {
        return res.status(404).json({ error: "Intervenant not found" });
      }
      res.json(intervenant);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch intervenant" });
    }
  });

  app.get("/api/alumni", async (_req, res) => {
    try {
      const alumni = await storage.getAlumni();
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alumni" });
    }
  });

  app.get("/api/alumni/:id", async (req, res) => {
    try {
      const alumni = await storage.getAlumniById(req.params.id);
      if (!alumni) {
        return res.status(404).json({ error: "Alumni not found" });
      }
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alumni" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
