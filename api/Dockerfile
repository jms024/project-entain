FROM node:16

# Create app directory
WORKDIR /www

# Bundle app source
COPY . .

# Run npm install
RUN npm install

# Expose port
EXPOSE 8080

CMD npm run dev