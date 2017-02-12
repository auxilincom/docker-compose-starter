FROM node:6.3.0
EXPOSE 8081
COPY package.json /app/
RUN cd /app && \
    npm install --quiet --production
COPY . /app
WORKDIR /app

CMD npm run start
