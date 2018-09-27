FROM navikt/node-express:1.0.0
ADD dist /var/server/

EXPOSE 9000:9000
CMD ["node", "/var/server/main.js"]