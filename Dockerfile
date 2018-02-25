FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install dependencies
RUN npm install

# Install forever globally (only way I've gotten it to work)
RUN npm install forever -g

CMD ["forever", "bot.js"]