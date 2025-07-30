import { db } from "./db";
import { cars, services } from "@shared/schema";

async function seedData() {
  try {
    console.log("Starting database seed...");
    
    // Seed cars
    const sampleCars = [
      {
        name: "BMW X5 M Sport",
        brand: "BMW",
        model: "X5",
        year: 2022,
        price: "68500.00",
        currency: "USD",
        mileage: 15000,
        fuel: "Бензин",
        transmission: "Автомат",
        bodyType: "Кроссовер",
        color: "Черный",
        engineVolume: "3.0",
        description: "Премиальный кроссовер в отличном состоянии. Полная комплектация M Sport.",
        status: "available",
        location: "Германия",
        imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: "4.9",
        views: 1250
      },
      {
        name: "Mercedes GLE 350",
        brand: "Mercedes-Benz",
        model: "GLE",
        year: 2023,
        price: "72000.00",
        currency: "USD",
        mileage: 8000,
        fuel: "Бензин",
        transmission: "Автомат",
        bodyType: "Кроссовер",
        color: "Белый",
        engineVolume: "2.0",
        description: "Новейшая модель Mercedes GLE с минимальным пробегом.",
        status: "reserved",
        location: "Германия",
        imageUrl: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: "4.8",
        views: 980
      },
      {
        name: "Audi Q8 Quattro",
        brand: "Audi",
        model: "Q8",
        year: 2022,
        price: "85000.00",
        currency: "USD",
        mileage: 22000,
        fuel: "Дизель",
        transmission: "Автомат",
        bodyType: "Кроссовер",
        color: "Серый",
        engineVolume: "3.0",
        description: "Флагманский кроссовер Audi с полным приводом quattro.",
        status: "available",
        location: "Германия",
        imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: "4.7",
        views: 1100
      },
      {
        name: "Lexus RX 350",
        brand: "Lexus",
        model: "RX",
        year: 2022,
        price: "58000.00",
        currency: "USD",
        mileage: 12000,
        fuel: "Гибрид",
        transmission: "Автомат",
        bodyType: "Кроссовер",
        color: "Синий",
        engineVolume: "3.5",
        description: "Надежный японский кроссовер с гибридной установкой.",
        status: "available",
        location: "США",
        imageUrl: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: "4.9",
        views: 1450
      },
      {
        name: "Toyota Land Cruiser",
        brand: "Toyota",
        model: "Land Cruiser",
        year: 2021,
        price: "95000.00",
        currency: "USD",
        mileage: 35000,
        fuel: "Бензин",
        transmission: "Автомат",
        bodyType: "Внедорожник",
        color: "Белый",
        engineVolume: "4.6",
        description: "Легендарный внедорожник Toyota Land Cruiser 200 в топовой комплектации.",
        status: "available",
        location: "ОАЭ",
        imageUrl: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: "4.8",
        views: 2100
      },
      {
        name: "Porsche Cayenne",
        brand: "Porsche",
        model: "Cayenne",
        year: 2023,
        price: "105000.00",
        currency: "USD",
        mileage: 5000,
        fuel: "Бензин",
        transmission: "Автомат",
        bodyType: "Кроссовер",
        color: "Красный",
        engineVolume: "3.0",
        description: "Спортивный кроссовер Porsche с турбированным двигателем.",
        status: "available",
        location: "Германия",
        imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: "4.9",
        views: 1800
      }
    ];

    await db.insert(cars).values(sampleCars);
    console.log("✓ Cars seeded successfully");

    // Seed services
    const sampleServices = [
      {
        name: "Подбор автомобилей",
        description: "Персональный подбор автомобиля под ваши потребности и бюджет",
        price: "500.00",
        currency: "USD",
        active: true
      },
      {
        name: "Доставка и растаможка",
        description: "Полное сопровождение доставки и таможенного оформления",
        price: "2500.00",
        currency: "USD",
        active: true
      },
      {
        name: "Техническая проверка",
        description: "Профессиональная диагностика автомобиля перед покупкой",
        price: "300.00",
        currency: "USD",
        active: true
      },
      {
        name: "Страхование КАСКО",
        description: "Оформление полиса КАСКО по выгодным тарифам",
        price: null,
        currency: "USD",
        active: true
      },
      {
        name: "Кредитование",
        description: "Помощь в получении автокредита на выгодных условиях",
        price: null,
        currency: "USD",
        active: true
      }
    ];

    await db.insert(services).values(sampleServices);
    console.log("✓ Services seeded successfully");

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// Run the seed function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedData().then(() => process.exit(0));
}

export { seedData };