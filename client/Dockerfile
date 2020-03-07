FROM node:12.13.1
RUN npm install -g yarn

WORKDIR /
COPY . ./client
CMD [ "/bin/bash", "./client/init.sh" ]