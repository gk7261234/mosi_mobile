FROM node:14.1.0
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port
EXPOSE 8181

RUN npm config set registry http://registry.cnpmjs.org

RUN npm install
# RUN npm run build
CMD ["npm", "start"]