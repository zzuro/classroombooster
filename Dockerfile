FROM node:latest as node
LABEL AUTHOR="Alessandro Vezzù"
WORKDIR /app
RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm install

EXPOSE 4200

CMD ["npm", "start" ]