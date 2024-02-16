# Operation Bot

Operation bot for Slack.

## Setup

### MySQL

```console
$ docker run -d --name bot-mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -p 3306:3306 --health-cmd "mysqladmin ping -h 127.0.0.1" mysql:8.3
```

#### Initialize

```console
$ mysql -u root -h 127.0.0.1 < ddl/spec.mysql.sql
$ mysql -u root -h 127.0.0.1 bot < ddl/schema.sql
```

## Testing

Use [ngrok](https://ngrok.com/).

```console
$ ngrok http http://localhost:3000
```

## License

[MIT](LICENSE)

## Author

Masahiro Furudate (a.k.a. [178inaba](https://github.com/178inaba))  
<178inaba.git@gmail.com>
