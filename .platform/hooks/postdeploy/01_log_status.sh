#!/usr/bin/env bash
echo "" >> /var/log/postdeploy.log
echo "" >> /var/log/postdeploy.log
echo "POST DEPLOY SCRIPT TIME: $(date)" >> /var/log/postdeploy.log
echo "$(systemctl status nginx)" >> /var/log/postdeploy.log
echo "" >> /var/log/postdeploy.log
echo "$(ps aux | grep run)" >> /var/log/postdeploy.log

