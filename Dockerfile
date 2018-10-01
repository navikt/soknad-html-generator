FROM navikt/node-express:1.0.0
ADD dist /var/server/

CMD ["node", "/var/server/main.js"]