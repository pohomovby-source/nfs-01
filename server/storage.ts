import { users, cars, inquiries, services, type User, type InsertUser, type Car, type InsertCar, type Inquiry, type InsertInquiry, type Service, type InsertService } from "@shared/schema";
import { db } from "./db";
import { eq, desc, like, and, sql } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Car methods
  getCar(id: number): Promise<Car | undefined>;
  getAllCars(): Promise<Car[]>;
  getCarsByBrand(brand: string): Promise<Car[]>;
  searchCars(query: string): Promise<Car[]>;
  createCar(car: InsertCar): Promise<Car>;
  updateCarViews(id: number): Promise<void>;
  
  // Inquiry methods
  getInquiry(id: number): Promise<Inquiry | undefined>;
  getAllInquiries(): Promise<Inquiry[]>;
  getInquiriesByUser(userId: number): Promise<Inquiry[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Service methods
  getAllServices(): Promise<Service[]>;
  getActiveServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Car methods
  async getCar(id: number): Promise<Car | undefined> {
    const [car] = await db.select().from(cars).where(eq(cars.id, id));
    return car || undefined;
  }

  async getAllCars(): Promise<Car[]> {
    return await db.select().from(cars).orderBy(desc(cars.createdAt));
  }

  async getCarsByBrand(brand: string): Promise<Car[]> {
    return await db.select().from(cars).where(eq(cars.brand, brand));
  }

  async searchCars(query: string): Promise<Car[]> {
    return await db.select().from(cars).where(
      like(cars.name, `%${query}%`)
    );
  }

  async createCar(insertCar: InsertCar): Promise<Car> {
    const [car] = await db
      .insert(cars)
      .values(insertCar)
      .returning();
    return car;
  }

  async updateCarViews(id: number): Promise<void> {
    await db
      .update(cars)
      .set({ views: sql`${cars.views} + 1` })
      .where(eq(cars.id, id));
  }

  // Inquiry methods
  async getInquiry(id: number): Promise<Inquiry | undefined> {
    const [inquiry] = await db.select().from(inquiries).where(eq(inquiries.id, id));
    return inquiry || undefined;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  }

  async getInquiriesByUser(userId: number): Promise<Inquiry[]> {
    return await db.select().from(inquiries).where(eq(inquiries.userId, userId));
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  // Service methods
  async getAllServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getActiveServices(): Promise<Service[]> {
    return await db.select().from(services).where(eq(services.active, true));
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db
      .insert(services)
      .values(insertService)
      .returning();
    return service;
  }
}

export const storage = new DatabaseStorage();
