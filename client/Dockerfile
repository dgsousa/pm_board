FROM node:8.16.0
RUN npm install -g yarn

WORKDIR /
COPY . ./client
CMD [ "/bin/bash", "./client/init.sh" ]