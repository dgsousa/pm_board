FROM node:8.16.0
RUN npm install -g yarn

WORKDIR /
COPY . ./server

CMD [ "/bin/bash", "./server/init.sh" ]