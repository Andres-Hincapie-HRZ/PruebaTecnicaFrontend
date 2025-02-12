export const imagenesMock = {
  heroBackground: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  logos: {
    principal: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
};

export const hotelesMock = [
  {
    id: 1,
    nombre: "Gran Hotel Luxury",
    descripcion: "Experimenta el lujo en su máxima expresión",
    imagen: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    precio: 350,
    estrellas: 5,
    ubicacion: "Ciudad de México",
    servicios: ["spa", "piscina", "restaurante", "gimnasio", "wifi"]
  },
  {
    id: 2,
    nombre: "Hotel Boutique Elegance",
    descripcion: "Diseño contemporáneo en el corazón de la ciudad",
    imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    precio: 280,
    estrellas: 4,
    ubicacion: "Guadalajara",
    servicios: ["restaurante", "bar", "wifi", "estacionamiento"]
  },
  {
    id: 3,
    nombre: "Resort & Spa Paradise",
    descripcion: "Tu escape perfecto junto al mar",
    imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    precio: 420,
    estrellas: 5,
    ubicacion: "Cancún",
    servicios: ["playa privada", "spa", "piscina infinita", "deportes acuáticos"]
  }
];

export const serviciosDisponibles = [
  {
    id: "wifi",
    nombre: "WiFi Gratuito",
    icono: "fas fa-wifi"
  },
  {
    id: "spa",
    nombre: "Spa",
    icono: "fas fa-spa"
  },
  {
    id: "piscina",
    nombre: "Piscina",
    icono: "fas fa-swimming-pool"
  },
  {
    id: "gimnasio",
    nombre: "Gimnasio",
    icono: "fas fa-dumbbell"
  },
  {
    id: "restaurante",
    nombre: "Restaurante",
    icono: "fas fa-utensils"
  }
]; 