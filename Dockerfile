FROM node:8.9.1

LABEL authors="Edwin Sandoval <sandovaledwin@hotmail.com>"

EXPOSE 3000

RUN npm install -g ts-node@3.3.0
RUN npm install -g typescript@2.6.2
RUN npm install -g typedoc@0.9.0
RUN npm install -g jasmine-ts@0.2.1