FROM ubuntu:20.10

ENV DEBIAN_FRONTEND=noninteractive

ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime 
RUN echo $TZ > /etc/timezone

# This Dockerfile adds a non-root user with sudo access.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set the default user
USER $USERNAME

RUN sudo apt-get clean
RUN sudo apt-get update
RUN sudo apt-get install gnupg -y \
    && sudo apt-get install git -y \
    && sudo apt-get install python3-pip -y \
    && sudo apt-get install apt-transport-https -y \
    && sudo apt-get install vim -y \
    && sudo apt-get install curl -y \
    && sudo apt-get install unzip -y \
    && sudo apt-get install psmisc -y

# install nodejs 16.13
RUN sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
RUN sudo apt-get install -y nodejs
RUN sudo npm i -g serve

WORKDIR /app_kiriancaumes