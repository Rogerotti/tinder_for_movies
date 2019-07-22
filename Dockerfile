# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=react-build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]