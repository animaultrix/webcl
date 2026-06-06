# Canarias Luxury Web

Nueva página web para **Canarias Luxury**, empresa de alquiler de villas vacacionales de lujo en Gran Canaria.

El objetivo del proyecto es crear una web moderna, rápida, mantenible y editable por nosotros.

---

## Tecnologías utilizadas

### Frontend

* **Next.js**
  Framework de React para crear aplicaciones web modernas.

* **React**
  Librería para crear interfaces de usuario mediante componentes.

* **TypeScript**
  JavaScript con tipado, para escribir código más seguro y fácil de mantener.

* **Tailwind CSS**
  Framework de estilos basado en clases utilitarias.

* **ESLint**
  Herramienta para detectar errores y mejorar la calidad del código.

---

## Requisitos previos

Para trabajar con este proyecto se recomienda usar:

* Windows 10/11
* WSL2
* Ubuntu 24.04 LTS
* Visual Studio Code
* Extensión **WSL** de VS Code
* Node.js instalado mediante **NVM**
* Git

---

## Instalación del entorno en WSL

Entrar en Ubuntu desde PowerShell:

```bash
wsl
```

Actualizar Ubuntu:

```bash
sudo apt update
sudo apt upgrade -y
```

Instalar herramientas básicas:

```bash
sudo apt install -y curl build-essential git
```

---

## Instalación de NVM y Node.js

Instalar NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.5/install.sh | bash
```

Recargar la terminal:

```bash
source ~/.bashrc
```

Comprobar que NVM funciona:

```bash
command -v nvm
```

Instalar Node.js LTS:

```bash
nvm install --lts
nvm alias default lts/*
nvm use --lts
```

Comprobar versiones:

```bash
node --version
npm --version
```

---

## Instalar dependencias del proyecto

Desde la raíz del proyecto:

```bash
cd ~/proyectos/webcl/frontend
```

Instalar dependencias:

```bash
npm install
```

---

## Levantar el proyecto en desarrollo

Desde la carpeta `frontend`:

```bash
npm run dev
```

Después abrir en el navegador:

```txt
http://localhost:3000
```

Para detener el servidor:

```txt
Ctrl + C
```

---

## Abrir el proyecto en VS Code

Desde la raíz del proyecto:

```bash
cd ~/proyectos/webcl
code .
```

En la esquina inferior izquierda de VS Code debería aparecer:

```txt
WSL: Ubuntu-24.04
```

Esto confirma que se está trabajando dentro de WSL.

---

## Comandos útiles

Entrar en la carpeta del frontend:

```bash
cd ~/proyectos/webcl/frontend
```

Arrancar servidor de desarrollo:

```bash
npm run dev
```

Generar versión de producción:

```bash
npm run build
```

Ejecutar versión de producción localmente:

```bash
npm run start
```

Revisar errores de estilo y código:

```bash
npm run lint
```

Ver estado de Git:

```bash
git status
```

Añadir cambios:

```bash
git add .
```

Crear commit:

```bash
git commit -m "Mensaje del cambio"
```

Ver historial de commits:

```bash
git log --oneline
```

---

## Flujo recomendado de trabajo

1. Abrir Ubuntu/WSL.
2. Ir a la carpeta del proyecto:

```bash
cd ~/proyectos/webcl
```

3. Abrir VS Code:

```bash
code .
```

4. Abrir una terminal en VS Code.
5. Entrar en el frontend:

```bash
cd frontend
```

6. Arrancar el proyecto:

```bash
npm run dev
```

7. Ver la web en:

```txt
http://localhost:3000