-- Active: 1660602082650@@mysql-85646-0.cloudclusters.net@18636
CREATE DATABASE taskdb;

USE taskdb;

CREATE TABLE tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    descriptions TEXT,

    PRIMARY KEY (id)
);

INSERT INTO tasks(title, descriptions) VALUES
    ('task 1', 'some description'),
    ('task 2', 'some description 2');


SELECT * from tasks;