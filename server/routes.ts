import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCarSchema, insertInquirySchema, insertUserSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Car routes
  app.get("/api/cars", async (req, res) => {
    try {
      const cars = await storage.getAllCars();
      res.json({ cars });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cars" });
    }
  });

  // Popular cars route - must come before the generic :id route
  app.get("/api/cars/popular", async (req, res) => {
    try {
      const cars = await storage.getPopularCars();
      res.json({ cars });
    } catch (error) {
      console.error("Popular cars error:", error);
      res.status(500).json({ error: "Failed to fetch popular cars" });
    }
  });

  app.get("/api/cars/search/:query", async (req, res) => {
    try {
      const query = req.params.query;
      const cars = await storage.searchCars(query);
      res.json({ cars });
    } catch (error) {
      res.status(500).json({ error: "Failed to search cars" });
    }
  });

  app.get("/api/cars/brand/:brand", async (req, res) => {
    try {
      const brand = req.params.brand;
      const cars = await storage.getCarsByBrand(brand);
      res.json({ cars });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cars by brand" });
    }
  });

  app.get("/api/cars/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const car = await storage.getCar(id);
      
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }

      // Increment views
      await storage.updateCarViews(id);
      
      res.json({ car });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch car" });
    }
  });

  app.post("/api/cars", async (req, res) => {
    try {
      const result = insertCarSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ error: validationError.message });
      }

      const car = await storage.createCar(result.data);
      res.status(201).json({ car });
    } catch (error) {
      res.status(500).json({ error: "Failed to create car" });
    }
  });

  // Inquiry routes
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.json({ inquiries });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const result = insertInquirySchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ error: validationError.message });
      }

      const inquiry = await storage.createInquiry(result.data);
      res.status(201).json({ inquiry });
    } catch (error) {
      res.status(500).json({ error: "Failed to create inquiry" });
    }
  });

  // Service routes
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getActiveServices();
      res.json({ services });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const result = insertUserSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ error: validationError.message });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByEmail(result.data.email);
      if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists" });
      }

      const user = await storage.createUser(result.data);
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
