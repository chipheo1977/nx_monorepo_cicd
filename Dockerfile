FROM node:20 as builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

COPY apps/ /usr/src/app/apps/
COPY libs/ /usr/src/app/libs/
COPY vitest.workspace.ts nx.json eslint.config.mjs tsconfig.base.json tsconfig.json .prettierignore .prettierrc ./

RUN npm install --legacy-peer-deps

RUN npx nx run-many --targets=build

FROM nginx:stable-alpine

COPY --from=builder /usr/src/app/dist/apps /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
