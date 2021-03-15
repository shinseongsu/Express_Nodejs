FROM mysql

ENV MYSQL_ROOT_PASSWORD example
ENV MYSQL_DATABASE company

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

CMD ["--default-authentication-plugin=mysql_native_password"]