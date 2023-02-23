FROM mcr.microsoft.com/devcontainers/javascript-node:0-16

# Install Google Chrome, to allow for running Selenium tests
RUN apt-get update -y
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN sudo apt install -y ./google-chrome-stable_current_amd64.deb
RUN rm ./google-chrome-stable_current_amd64.deb
