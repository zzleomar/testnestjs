# Usar una imagen base de Node.js con la versión que necesites
FROM node:18

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación NestJS al contenedor
COPY ./package*.json ./
COPY ./tsconfig*.json ./
COPY ./src ./src

# Instalar las dependencias de la aplicación
RUN npm install

# Variables de entorno para la configuración de MongoDB
ENV DATABASE_URI mongodb://mongo:27017/mega
ENV PORT 8000

# Exponer el puerto en el que se ejecutará la aplicación NestJS
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]