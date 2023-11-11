FROM node:18.17.1

WORKDIR /opt

COPY ./ ./

RUN npm i --ignore-scripts=false --foreground-scripts --verbose sharp
RUN npm run build

CMD [ "npm", "run", "start" ]

ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production
EXPOSE 3000