FROM node:6.3
EXPOSE 8080
COPY package.json /app/
RUN cd /app && \
    npm install --quiet
WORKDIR /app

CMD npm run development
