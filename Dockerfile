FROM ruby:3.2
WORKDIR /app
COPY Gemfile ./
RUN bundle lock --add-platform=x86_64-linux --add-platform=aarch64-linux
RUN bundle install
COPY . .
EXPOSE 4000 35729
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force-polling", "--livereload"]
