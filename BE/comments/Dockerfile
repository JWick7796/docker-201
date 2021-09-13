FROM node:10

# Create app directory
WORKDIR /usr/src/app/BE


COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]