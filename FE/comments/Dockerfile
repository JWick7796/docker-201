FROM node:10

# Create app directory
WORKDIR /usr/src/app/FE


COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
EXPOSE 4200
CMD [ "npm", "start" ]