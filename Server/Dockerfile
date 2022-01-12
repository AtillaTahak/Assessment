FROM node:14-alpine

LABEL version ="1.0"
LABEL description ="Developemnt image dor the assessment"

WORKDIR /app

COPY . /app/

RUN npm install 
CMD npm start


EXPOSE 5001
