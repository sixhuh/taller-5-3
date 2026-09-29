// ==========================================
// 1. SISTEMA DE RESERVAS DE HOTEL
// ==========================================

let reservas = [
    {
        huesped: "Juan Pérez",
        habitacion: "103",
        noches: 4,
        checkIn: "2025-02-10",
        precioNoche: 110,
        estado: "activa"
    },
    {
        huesped: "Camila Rojas",
        habitacion: "208",
        noches: 2,
        checkIn: "2025-02-12",
        precioNoche: 180,
        estado: "pendiente"
    },
    {
        huesped: "Andrés Gómez",
        habitacion: "115",
        noches: 6,
        checkIn: "2025-02-15",
        precioNoche: 95,
        estado: "activa"
    },
    {
        huesped: "Valentina Cruz",
        habitacion: "305",
        noches: 3,
        checkIn: "2025-02-18",
        precioNoche: 220,
        estado: "cancelada"
    }
];

// Ordenar reservas por precio de mayor a menor

let reservasOrdenadas = [...reservas].sort(
    (a, b) => b.precioNoche - a.precioNoche
);

console.log("Reservas ordenadas por precio:", reservasOrdenadas);


// Filtrar reservas activas

let reservasActivas = reservas.filter(
    reserva => reserva.estado === "activa"
);

console.log("Reservas activas:", reservasActivas);


// Calcular total a pagar por cada huésped

let totalPorHuesped = reservas.map(reserva => {

    return {
        huesped: reserva.huesped,
        habitacion: reserva.habitacion,
        total: reserva.noches * reserva.precioNoche
    };

});

console.log("Total a pagar por huésped:", totalPorHuesped);


// Encontrar la reserva más larga

let reservaMasLarga = reservas.reduce((mayor, reserva) => {

    return reserva.noches > mayor.noches ? reserva : mayor;

});

console.log("Reserva más larga:", reservaMasLarga);


// Agrupar reservas por estado

let reservasPorEstado = reservas.reduce((grupos, reserva) => {

    if (!grupos[reserva.estado]) {
        grupos[reserva.estado] = [];
    }

    grupos[reserva.estado].push(reserva);

    return grupos;

}, {});

console.log("Reservas por estado:", reservasPorEstado);



// ==========================================
// 2. INVENTARIO DE SUPERMERCADO
// ==========================================

let productos = [
    {
        nombre: "Queso Mozzarella",
        categoria: "Lácteos",
        precio: 4.50,
        stock: 20,
        proveedor: "Alimentos del Valle"
    },
    {
        nombre: "Pan Blanco",
        categoria: "Panadería",
        precio: 2.10,
        stock: 35,
        proveedor: "Pan Fresco"
    },
    {
        nombre: "Lentejas",
        categoria: "Granos",
        precio: 2.80,
        stock: 18,
        proveedor: "Granos Nacionales"
    },
    {
        nombre: "Jugo de Naranja",
        categoria: "Bebidas",
        precio: 3.50,
        stock: 0,
        proveedor: "Bebidas SA"
    },
    {
        nombre: "Café Molido",
        categoria: "Bebidas",
        precio: 7.25,
        stock: 12,
        proveedor: "Café Colombiano"
    }
];


// Ordenar productos por precio

let productosOrdenados = [...productos].sort(
    (a, b) => a.precio - b.precio
);

console.log("Productos ordenados por precio:", productosOrdenados);


// Filtrar productos sin stock

let productosSinStock = productos.filter(
    producto => producto.stock === 0
);

console.log("Productos sin stock:", productosSinStock);


// Calcular valor total del inventario

let valorInventario = productos.reduce((total, producto) => {

    return total + (producto.precio * producto.stock);

}, 0);

console.log("Valor total del inventario:", valorInventario);


// Agrupar productos por categoría

let productosPorCategoria = productos.reduce((grupos, producto) => {

    if (!grupos[producto.categoria]) {
        grupos[producto.categoria] = [];
    }

    grupos[producto.categoria].push(producto);

    return grupos;

}, {});

console.log("Productos por categoría:", productosPorCategoria);


// Encontrar producto más caro

let productoMasCaro = productos.reduce((mayor, producto) => {

    return producto.precio > mayor.precio ? producto : mayor;

});

console.log("Producto más caro:", productoMasCaro);


// Filtrar productos de un proveedor

let productosProveedor = productos.filter(
    producto => producto.proveedor === "Bebidas SA"
);

console.log("Productos de Bebidas SA:", productosProveedor);



// ==========================================
// 3. ESTUDIANTES Y CALIFICACIONES
// ==========================================

let estudiantes = [
    {
        nombre: "Daniela Vargas",
        grado: "10°",
        edad: 15,
        calificaciones: [88, 91, 84, 93],
        asistencia: 94
    },
    {
        nombre: "Mateo Torres",
        grado: "9°",
        edad: 14,
        calificaciones: [76, 72, 81, 79],
        asistencia: 87
    },
    {
        nombre: "Isabella Moreno",
        grado: "11°",
        edad: 17,
        calificaciones: [96, 94, 98, 95],
        asistencia: 99
    },
    {
        nombre: "Sebastián Díaz",
        grado: "9°",
        edad: 14,
        calificaciones: [65, 70, 68, 73],
        asistencia: 84
    }
];


// Ordenar estudiantes por promedio

let estudiantesOrdenados = [...estudiantes].sort((a, b) => {

    let promedioA =
        a.calificaciones.reduce((suma, nota) => suma + nota, 0)
        / a.calificaciones.length;

    let promedioB =
        b.calificaciones.reduce((suma, nota) => suma + nota, 0)
        / b.calificaciones.length;

    return promedioB - promedioA;

});

console.log("Estudiantes ordenados:", estudiantesOrdenados);


// Filtrar estudiantes con asistencia menor al 90%

let estudiantesBajaAsistencia = estudiantes.filter(
    estudiante => estudiante.asistencia < 90
);

console.log(
    "Estudiantes con baja asistencia:",
    estudiantesBajaAsistencia
);


// Calcular promedio de cada estudiante

let promediosEstudiantes = estudiantes.map(estudiante => {

    let suma = estudiante.calificaciones.reduce(
        (total, nota) => total + nota,
        0
    );

    return {
        nombre: estudiante.nombre,
        promedio: suma / estudiante.calificaciones.length
    };

});

console.log("Promedios:", promediosEstudiantes);


// Encontrar estudiante con mejor promedio

let mejorEstudiante = estudiantes.reduce((mejor, estudiante) => {

    let promedioMejor =
        mejor.calificaciones.reduce((suma, nota) => suma + nota, 0)
        / mejor.calificaciones.length;

    let promedioActual =
        estudiante.calificaciones.reduce((suma, nota) => suma + nota, 0)
        / estudiante.calificaciones.length;

    return promedioActual > promedioMejor ? estudiante : mejor;

});

console.log("Mejor estudiante:", mejorEstudiante);


// Agrupar estudiantes por grado

let estudiantesPorGrado = estudiantes.reduce((grupos, estudiante) => {

    if (!grupos[estudiante.grado]) {
        grupos[estudiante.grado] = [];
    }

    grupos[estudiante.grado].push(estudiante);

    return grupos;

}, {});

console.log("Estudiantes por grado:", estudiantesPorGrado);


// Filtrar estudiantes mayores de 15 años

let estudiantesMayores = estudiantes.filter(
    estudiante => estudiante.edad > 15
);

console.log("Estudiantes mayores de 15 años:", estudiantesMayores);



// ==========================================
// 4. RECURSOS HUMANOS
// ==========================================

let empleados = [
    {
        nombre: "Natalia Herrera",
        departamento: "Ventas",
        salario: 38000,
        antiguedad: 4,
        cargo: "Asesora de Ventas"
    },
    {
        nombre: "Felipe Castro",
        departamento: "TI",
        salario: 58000,
        antiguedad: 6,
        cargo: "Desarrollador Senior"
    },
    {
        nombre: "Laura Sánchez",
        departamento: "Marketing",
        salario: 45000,
        antiguedad: 3,
        cargo: "Analista de Marketing"
    },
    {
        nombre: "Cristian Molina",
        departamento: "TI",
        salario: 50000,
        antiguedad: 5,
        cargo: "Desarrollador Junior"
    }
];


// Ordenar empleados por salario

let empleadosOrdenados = [...empleados].sort(
    (a, b) => b.salario - a.salario
);

console.log("Empleados ordenados por salario:", empleadosOrdenados);


// Filtrar empleados con más de 4 años

let empleadosAntiguos = empleados.filter(
    empleado => empleado.antiguedad > 4
);

console.log("Empleados con más de 4 años:", empleadosAntiguos);


// Calcular salario promedio por departamento

let departamentos = empleados.reduce((grupos, empleado) => {

    if (!grupos[empleado.departamento]) {
        grupos[empleado.departamento] = {
            total: 0,
            cantidad: 0
        };
    }

    grupos[empleado.departamento].total += empleado.salario;
    grupos[empleado.departamento].cantidad++;

    return grupos;

}, {});


for (let departamento in departamentos) {

    departamentos[departamento].promedio =
        departamentos[departamento].total /
        departamentos[departamento].cantidad;

}

console.log(
    "Salario promedio por departamento:",
    departamentos
);


// Encontrar empleado mejor pagado

let empleadoMejorPagado = empleados.reduce((mejor, empleado) => {

    return empleado.salario > mejor.salario
        ? empleado
        : mejor;

});

console.log("Empleado mejor pagado:", empleadoMejorPagado);


// Agrupar empleados por departamento

let empleadosPorDepartamento = empleados.reduce((grupos, empleado) => {

    if (!grupos[empleado.departamento]) {
        grupos[empleado.departamento] = [];
    }

    grupos[empleado.departamento].push(empleado);

    return grupos;

}, {});

console.log(
    "Empleados por departamento:",
    empleadosPorDepartamento
);


// Filtrar empleados por cargo

let desarrolladores = empleados.filter(
    empleado => empleado.cargo.includes("Desarrollador")
);

console.log("Desarrolladores:", desarrolladores);



// ==========================================
// 5. CATÁLOGO DE VIDEOJUEGOS
// ==========================================

let videojuegos = [
    {
        titulo: "Mario Kart 8 Deluxe",
        plataforma: "Nintendo Switch",
        precio: 52.99,
        genero: "Carreras",
        rating: 92,
        stock: 18
    },
    {
        titulo: "Minecraft",
        plataforma: "PlayStation 5",
        precio: 39.99,
        genero: "Aventura",
        rating: 91,
        stock: 30
    },
    {
        titulo: "NBA 2K25",
        plataforma: "Xbox Series X",
        precio: 59.99,
        genero: "Deportes",
        rating: 84,
        stock: 0
    },
    {
        titulo: "Hogwarts Legacy",
        plataforma: "PlayStation 5",
        precio: 54.99,
        genero: "Aventura",
        rating: 89,
        stock: 12
    }
];


// Ordenar juegos por rating

let juegosOrdenados = [...videojuegos].sort(
    (a, b) => b.rating - a.rating
);

console.log("Juegos ordenados por rating:", juegosOrdenados);


// Filtrar juegos disponibles

let juegosDisponibles = videojuegos.filter(
    juego => juego.stock > 0
);

console.log("Juegos disponibles:", juegosDisponibles);


// Filtrar juegos por plataforma

let juegosPlayStation = videojuegos.filter(
    juego => juego.plataforma === "PlayStation 5"
);

console.log("Juegos de PlayStation 5:", juegosPlayStation);


// Encontrar juego más caro

let juegoMasCaro = videojuegos.reduce((mayor, juego) => {

    return juego.precio > mayor.precio ? juego : mayor;

});

console.log("Juego más caro:", juegoMasCaro);


// Agrupar juegos por género

let juegosPorGenero = videojuegos.reduce((grupos, juego) => {

    if (!grupos[juego.genero]) {
        grupos[juego.genero] = [];
    }

    grupos[juego.genero].push(juego);

    return grupos;

}, {});

console.log("Juegos por género:", juegosPorGenero);


// Calcular valor total del inventario

let valorVideojuegos = videojuegos.reduce((total, juego) => {

    return total + (juego.precio * juego.stock);

}, 0);

console.log("Valor total de videojuegos:", valorVideojuegos);



// ==========================================
// 6. DATOS DE UN BANCO
// ==========================================

let banco = [
    {
        nombre: "Banco Popular",
        direccion: "Carrera 10 #20-30",
        telefono: "5551234",
        correo: "contacto@popular.com",
        saldo: 1500000,
        dia_mora: 8
    },
    {
        nombre: "Banco de Bogotá",
        direccion: "Carrera 15 #30-40",
        telefono: "5555678",
        correo: "contacto@bogota.com",
        saldo: 2800000,
        dia_mora: 14
    },
    {
        nombre: "Banco Caja Social",
        direccion: "Calle 50 #10-20",
        telefono: "5559012",
        correo: "info@cajasocial.com",
        saldo: 3500000,
        dia_mora: 18
    },
    {
        nombre: "Banco Agrario",
        direccion: "Calle 70 #25-15",
        telefono: "5553456",
        correo: "info@agrario.com",
        saldo: 2200000,
        dia_mora: 12
    }
];


// Ordenar bancos por saldo

let bancosOrdenados = [...banco].sort(
    (a, b) => b.saldo - a.saldo
);

console.log("Bancos ordenados por saldo:", bancosOrdenados);


// Filtrar bancos con saldo mayor a 2.000.000

let bancosSaldoAlto = banco.filter(
    item => item.saldo > 2000000
);

console.log(
    "Bancos con saldo mayor a 2.000.000:",
    bancosSaldoAlto
);


// Calcular saldo promedio

let saldoPromedio = banco.reduce(
    (total, item) => total + item.saldo,
    0
) / banco.length;

console.log("Saldo promedio:", saldoPromedio);


// Encontrar banco con mayor día de mora

let bancoMayorMora = banco.reduce((mayor, item) => {

    return item.dia_mora > mayor.dia_mora
        ? item
        : mayor;

});

console.log(
    "Banco con mayor día de mora:",
    bancoMayorMora
);


// Agrupar bancos por nombre

let bancosPorNombre = banco.reduce((grupos, item) => {

    if (!grupos[item.nombre]) {
        grupos[item.nombre] = [];
    }

    grupos[item.nombre].push(item);

    return grupos;

}, {});

console.log("Bancos agrupados por nombre:", bancosPorNombre);


// Filtrar bancos por correo

let bancosPorCorreo = banco.filter(
    item => item.correo === "contacto@popular.com"
);

console.log(
    "Bancos con correo contacto@popular.com:",
    bancosPorCorreo
);

let resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <h2>Resultados del taller</h2>

    <h3>1. Reservas de hotel</h3>
    <p>Reserva más larga: ${reservaMasLarga.huesped} - ${reservaMasLarga.noches} noches</p>

    <h3>2. Inventario de supermercado</h3>
    <p>Producto más caro: ${productoMasCaro.nombre} - $${productoMasCaro.precio}</p>
    <p>Valor total del inventario: $${valorInventario}</p>

    <h3>3. Estudiantes</h3>
    <p>Mejor estudiante: ${mejorEstudiante.nombre}</p>

    <h3>4. Recursos humanos</h3>
    <p>Empleado mejor pagado: ${empleadoMejorPagado.nombre}</p>

    <h3>5. Videojuegos</h3>
    <p>Juego más caro: ${juegoMasCaro.titulo} - $${juegoMasCaro.precio}</p>
    <p>Valor total del inventario: $${valorVideojuegos}</p>

    <h3>6. Bancos</h3>
    <p>Banco con mayor día de mora: ${bancoMayorMora.nombre}</p>
    <p>Saldo promedio: $${saldoPromedio}</p>
`;