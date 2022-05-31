FROM ubuntu
ARG DATA_HOST
ARG DATA_USER
ARG DATA_PASS
ARG DATA_DB
RUN mkdir -p /easyvms
COPY ./src /easyvms
WORKDIR /easyvms
RUN sed -i "s|{DATAHOST}|$DATA_HOST|g" easyvms.toml && sed -i "s|{DATAUSER}|$DATA_USER|g" easyvms.toml &&sed -i "s|{DATAPASS}|$DATA_PASS|g" easyvms.toml&&sed -i "s|{DATADB}|$DATA_DB|g" easyvms.toml
ENTRYPOINT ["./easyvms"]

