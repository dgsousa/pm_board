#!/bin/bash

yarn webpack
tar czf pm_board.tar.gz build

scp pm_board.tar.gz danielmooncloud.com:~
rm pm_board.tar.gz

ssh danielmooncloud.com << 'ENDSSH'
rm -rf /home/dsousa/pm_board/
mkdir /home/dsousa/pm_board/
tar xf pm_board.tar.gz -C /home/dsousa/pm_board
chcon -Rt httpd_sys_content_t /home/dsousa/pm_board/build
ENDSSH
