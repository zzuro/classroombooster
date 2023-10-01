FROM node:latest AS node
LABEL AUTHOR="Alessandro Vezzù"

RUN npm install -g @angular/cli

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200:4200

CMD [ "ng", "serve", "--host", "0.0.0.0"]