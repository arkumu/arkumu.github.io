FROM ruby:3.2.3
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs
WORKDIR /app
COPY Gemfile ./
RUN bundle install
COPY . .
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force-polling", "--livereload" ]
EXPOSE 4000