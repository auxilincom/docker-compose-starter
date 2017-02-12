FROM node:6.3
EXPOSE 8082
COPY package.json /app/
RUN cd /app && \
    npm install --quiet
WORKDIR /app

CMD npm run development
