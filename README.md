<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="220" alt="Nest Logo" /></a>
</p>

# Base de Datos
1. Descargar la BD ```docker pull postgres:14.4```

# Pre Dev
1. Instalar nest ```npm i -g @nestjs/cli```
2. Crear un proyecto en nest ```nest new [project]```
3. Dependencias necesarias ```yarn add @nestjs/graphql @nestjs/apollo @apollo/server@^4.12.2 graphql apollo-server-express class-validator class-transformer apollo-server-core```

# Dev
1. Clonar el proyecto
2. Copia el ```.env.template``` y renombar a ```.env```
3. Ejecutar: ```yarn install```
4. Ejecutar la imagen de BD: ```docker-compose up -d```
5. Levantar el servidor: ```yarn start:dev```
6. Visitar el sitio: ```localhost:3000/graphql```