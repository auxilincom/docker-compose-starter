FROM node:6.3.0
EXPOSE 8080
COPY package.json /app/
RUN cd /app && \
    npm install --quiet
COPY . /app
WORKDIR /app
RUN npm run build && \
    npm prune --production

CMD npm run start
