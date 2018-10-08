FROM navikt/node-express:1.0.0
ADD prod /var/server/

CMD ["node", "/var/server/main.js"]