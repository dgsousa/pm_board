#!/bin/bash

echo 'compressing build into tar file...'
tar czf pm_board_server.tar.gz src yarn.lock package.json

echo 'copying tarball into remote server...'
scp pm_board_server.tar.gz dsousa@danielmooncloud.com:~

echo 'removing local tarball'
rm pm_board_server.tar.gz

echo 'entering remote server...'
ssh dsousa@danielmooncloud.com << 'ENDSSH'
pm2 stop ecosystem.config.js
rm -rf pm_board_server
mkdir pm_board_server
tar xf pm_board_server.tar.gz -C pm_board_server
cd pm_board_server
yarn install
cd ../
pm2 start ecosystem.config.js
ENDSSH
