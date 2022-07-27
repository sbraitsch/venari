cd /root/projects/venari
git pull
cd venari-ui
npm install
npm run build
rm -r /var/www/html/venari/*
mv -v dist/* /var/www/html/venari