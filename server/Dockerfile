FROM node:20.5.1

WORKDIR /SERVER

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
