create database first_health;

use first_health;
create table customers (
id int NOT NULL AUTO_INCREMENT,
nama varchar(100),
umur int,
jenis_kelamin varchar(20),
alamat varchar(100),
no_hp varchar(15),
suhu decimal,
primary key(id)
);
create table test_result (
id int NOT NULL AUTO_INCREMENT,
hasil enum('Positif', 'Negatif'),
tanggal date,
id_customer int,
PRIMARY KEY (id),
FOREIGN KEY (id_customer) REFERENCES customers(id)
);

select * from customers;
select * from test_result;