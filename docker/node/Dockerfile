FROM node:latest

WORKDIR /home/app
USER node
ENV PORT 3000

EXPOSE 3000

# COPY package.json .
# COPY yarn.lock .
# RUN yarn install 

# RUN echo 'YOLO'


# ENTRYPOINT /bin/bash
ENTRYPOINT [ "yarn", "dev" ]