create database vue2project;
use vue2project;
drop table if exists `user`;

drop table if exists `user`;
-- 用户表 
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);
select * from user;
insert into `user` values(1,'xieleihan','xieleihan@gmail.com','123456');