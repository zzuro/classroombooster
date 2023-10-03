FROM node:latest AS node
LABEL AUTHOR="Alessandro Vezzù"

RUN npm install -g @angular/cli

WORKDIR /classroombooster

COPY package*.json ./
RUN npm install

CMD [ "ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]