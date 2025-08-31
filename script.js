<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Animada</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      scroll-behavior: smooth; /* Scroll suave */
    }

    header {
      background: #1d573e;
      color: white;
      text-align: center;
      padding: 50px 20px;
      animation: bounce 2s infinite; /* rebote */
      position: relative;
    }

    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(29,87,62,0.95);
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 15px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      z-index: 10;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.3s, color 0.3s;
    }

    nav a:hover {
      color: #ffdd57;
      transform: scale(1.2); /* efecto al pasar el mouse */
    }

    section {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
    }

    section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      text-align: center;
      animation: float 3s ease-in-out infinite;
    }

    /* Animación de rebote */
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }

    /* Animación de flotación */
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0); }
    }
  </style>
</head>
<body>

  <!-- Menú de navegación -->
  <nav>
    <a href="#estudios">Estudios</a>
    <a href="#experiencia">Experiencia</a>
    <a href="#contacto">Contacto</a>
  </nav>

  <header>
    <h1>Miguel Alexander Soler Mateus</h1>
    <p>Desarrollador Web Full Stack</p>
  </header>

  <section id="estudios">
    <div class="card">
      <h2>🎓 Estudios</h2>
      <p>Bootcamp de Desarrollo Web Full Stack | Coderhouse (2024)</p>
      <p>Ingeniería de Sistemas | Universidad Nacional (2023)</p>
    </div>
  </section>

  <section id="experiencia">
    <div class="card">
      <h2>💼 Experiencia</h2>
      <p>Asistente de Desarrollo Web en StartUpX (2023)</p>
      <p>Desarrollador Freelance (2022 - Presente)</p>
    </div>
  </section>

  <section id="contacto">
    <div class="card">
      <h2>📩 Contáctame</h2>
      <p>Email: <a href="mailto:miguelalexandersolermateus@gmail.com">miguelalexandersolermateus@gmail.com</a></p>
      <p>Cel: <a href="tel:+573022220040">+57 302 222 0040</a></p>
    </div>
  </section>

  <script>
    // Animación al hacer scroll (aparecer secciones)
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
    });
  </script>
</body>
</html>
