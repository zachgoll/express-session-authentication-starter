FROM node:12
# Commands after this will start inside the /app directory inside the container
WORKDIR /app 

# Copies package json files into working directory of the container (/app)
COPY package*json ./ 

# Creates node modules inside the container
RUN npm install 

# Copies source code from host (Dockerfile and server.js) into container's working directory
COPY . . 

ENV PORT=8080

# Exposes the port that should be published by the user
EXPOSE 8080

CMD ["npm", "start"]