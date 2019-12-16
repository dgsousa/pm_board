#!/bin/bash

echo 'compressing build into tar file...'
tar czf pm_board.tar.gz build

echo 'copying tarball into remote server...'
scp -v pm_board.tar.gz dsousa@danielmooncloud.com:~

echo 'removing tarball'
rm pm_board.tar.gz

echo 'entering remote server...'
ssh dsousa@danielmooncloud.com << 'ENDSSH'
rm -rf /home/dsousa/pm_board/
mkdir /home/dsousa/pm_board/
tar xf pm_board.tar.gz -C /home/dsousa/pm_board
chcon -Rt httpd_sys_content_t /home/dsousa/pm_board/build
ENDSSH
