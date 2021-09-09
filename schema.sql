create table users(email varchar(255) primary key, created_at timestamp default now());

insert into users(email) VALUES ('Katie34@yahoo.com'),('mass@masial.com');