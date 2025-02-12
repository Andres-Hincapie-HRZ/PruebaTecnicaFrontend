export const ciudades = [
  { 
    id: 1, 
    nombre: "Cartagena", 
    departamento: "Bolívar",
    imagen: "https://www.viajes.cl/hubfs/Torre%20del%20Reloj%20en%20Cartagena%20de%20Indias,%20Colombia.jpg"
  },
  { 
    id: 2, 
    nombre: "Santa Marta", 
    departamento: "Magdalena",
    imagen: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  { 
    id: 3, 
    nombre: "Medellín", 
    departamento: "Antioquia",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgtKUj6bqf1BmHai0oOpgjW7iMANXyryMkQ&s"
  }
];

// Datos simulados de hoteles
export const hotelesData = [
  {
    id: 1,
    nombre: "Grand Hotel Luxury",
    direccion: "Calle del Arsenal #8B-169",
    ciudad: "Cartagena",
    descripcion: "Hotel de lujo frente al mar con vistas espectaculares",
    imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.8,
    precioNoche: 850000,
    activo: true,
    capacidadTotal: 150,
    ocupacionActual: 89,
    servicios: ["Piscina infinita", "Spa de lujo", "Restaurante gourmet", "WiFi de alta velocidad", "Servicio a la habitación 24/7"],
    habitacionesDisponibles: {
      individual: 5,
      doble: 8,
      suite: 3,
      familiar: 2
    }
  },
  {
    id: 2,
    nombre: "Boutique Hotel & Spa",
    direccion: "Avenida San Martín #45-78",
    ciudad: "Santa Marta",
    descripcion: "Una experiencia única de hospitalidad boutique",
    imagen: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.7,
    precioNoche: 650000,
    activo: true,
    capacidadTotal: 80,
    ocupacionActual: 45,
    servicios: ["Spa holístico", "Yoga al amanecer", "Restaurante orgánico", "Bar en la terraza", "Concierge personal"],
    habitacionesDisponibles: {
      individual: 3,
      doble: 5,
      suite: 2,
      familiar: 1
    }
  },
  {
    id: 3,
    nombre: "Urban Luxury Hotel",
    direccion: "Calle 10 #36-120",
    ciudad: "Medellín",
    descripcion: "Elegancia urbana en el corazón de la ciudad",
    imagen: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.9,
    precioNoche: 750000,
    activo: false,
    capacidadTotal: 120,
    ocupacionActual: 0,
    servicios: ["Gimnasio premium", "Piscina climatizada", "Bar lounge", "Business center", "Transporte ejecutivo"],
    habitacionesDisponibles: {
      individual: 0,
      doble: 0,
      suite: 0,
      familiar: 0
    }
  },
  {
    id: 4,
    nombre: "Mountain Resort & Spa",
    direccion: "Kilómetro 5 vía Santa Elena",
    ciudad: "Medellín",
    descripcion: "Refugio de lujo en las montañas",
    imagen: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.6,
    precioNoche: 920000,
    activo: true,
    capacidadTotal: 90,
    ocupacionActual: 67,
    servicios: ["Spa de montaña", "Senderismo guiado", "Restaurante panorámico", "Chimeneas en habitaciones", "Actividades al aire libre"],
    habitacionesDisponibles: {
      individual: 2,
      doble: 4,
      suite: 1,
      familiar: 3
    }
  },
  {
    id: 5,
    nombre: "Playa Serena Resort",
    direccion: "Km 2 Vía Barú",
    ciudad: "Cartagena",
    descripcion: "Paraíso tropical exclusivo",
    imagen: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.9,
    precioNoche: 1150000,
    activo: true,
    capacidadTotal: 200,
    ocupacionActual: 178,
    servicios: ["Playa privada", "Deportes acuáticos", "Spa de lujo", "5 restaurantes", "Club infantil"],
    habitacionesDisponibles: {
      individual: 1,
      doble: 6,
      suite: 2,
      familiar: 0
    }
  },
  {
    id: 6,
    nombre: "Colonial Heritage Hotel",
    direccion: "Calle de la Iglesia #4-52",
    ciudad: "Cartagena",
    descripcion: "Historia y lujo en el centro histórico",
    imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.7,
    precioNoche: 780000,
    activo: false,
    capacidadTotal: 60,
    ocupacionActual: 0,
    servicios: ["Restaurante gourmet", "Bar en la azotea", "Tours históricos", "Biblioteca", "Sala de arte"],
    habitacionesDisponibles: {
      individual: 0,
      doble: 0,
      suite: 0,
      familiar: 0
    }
  },
  {
    id: 7,
    nombre: "Marina Bay Hotel",
    direccion: "Avenida del Mar #23-100",
    ciudad: "Santa Marta",
    descripcion: "Lujo moderno frente al mar",
    imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    calificacion: 4.8,
    precioNoche: 890000,
    activo: true,
    capacidadTotal: 180,
    ocupacionActual: 156,
    servicios: ["Marina privada", "Casino", "Spa", "Piscina infinita", "Helipuerto"],
    habitacionesDisponibles: {
      individual: 4,
      doble: 7,
      suite: 2,
      familiar: 1
    }
  }
];

// Datos simulados de reservas
export const reservasData = [
  {
    id: 1,
    hotelId: 1,
    nombreHuesped: "Carlos Pérez",
    correoHuesped: "carlos@ejemplo.com",
    fechaEntrada: "2024-03-20",
    fechaSalida: "2024-03-25",
    numeroHuespedes: 2,
    tipoHabitacion: "Suite",
    estado: "CONFIRMADA",
    total: 850000,
    estadoPago: "PAGADO"
  },
  {
    id: 2,
    hotelId: 1,
    nombreHuesped: "Ana Martínez",
    correoHuesped: "ana@ejemplo.com",
    fechaEntrada: "2024-03-22",
    fechaSalida: "2024-03-24",
    numeroHuespedes: 1,
    tipoHabitacion: "Individual",
    estado: "PENDIENTE",
    total: 450000,
    estadoPago: "PENDIENTE"
  },
  {
    id: 3,
    hotelId: 2,
    nombreHuesped: "Luis García",
    correoHuesped: "luis@ejemplo.com",
    fechaEntrada: "2024-03-25",
    fechaSalida: "2024-03-28",
    numeroHuespedes: 4,
    tipoHabitacion: "Familiar",
    estado: "CONFIRMADA",
    total: 1250000,
    estadoPago: "PAGADO"
  }
];

// Servicios disponibles
export const serviciosDisponibles = [
  {
    id: "wifi",
    nombre: "WiFi de alta velocidad",
    icono: "fas fa-wifi"
  },
  {
    id: "spa",
    nombre: "Spa de lujo",
    icono: "fas fa-spa"
  },
  {
    id: "piscina",
    nombre: "Piscina infinita",
    icono: "fas fa-swimming-pool"
  },
  {
    id: "restaurante",
    nombre: "Restaurante gourmet",
    icono: "fas fa-utensils"
  },
  {
    id: "gimnasio",
    nombre: "Gimnasio premium",
    icono: "fas fa-dumbbell"
  }
];

// Usuarios simulados
export const usuarios = [
  {
    id: 1,
    correo: "admin@hotel.com",
    contrasena: "123",
    rol: "admin",
    nombre: "Admin"
  },
  {
    id: 2,
    correo: "viajero@hotel.com",
    contrasena: "123456",
    rol: "viajero",
    nombre: "Pedro Viajero"
  }
];

export const habitacionesTipo = [
  { id: 1, nombre: "Individual", capacidad: 1 },
  { id: 2, nombre: "Doble", capacidad: 2 },
  { id: 3, nombre: "Suite", capacidad: 4 },
  { id: 4, nombre: "Familiar", capacidad: 6 }
];

export const serviciosHotel = [
  { id: 1, nombre: "WiFi", icono: "wifi" },
  { id: 2, nombre: "Piscina", icono: "pool" },
  { id: 3, nombre: "Gimnasio", icono: "fitness" },
  { id: 4, nombre: "Restaurante", icono: "restaurant" },
  { id: 5, nombre: "Estacionamiento", icono: "parking" }
];