FROM node:14.1.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port
# EXPOSE 8181

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install
# RUN npm run build
CMD ["npm", "start"]