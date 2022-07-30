cd /home/admin/projects/venari &&
git pull &&
cd venari-ui &&
npm install &&
npm run build &&
sudo rm -r /var/www/html/venari/*
sudo mv -v dist/* /var/www/html/venari
