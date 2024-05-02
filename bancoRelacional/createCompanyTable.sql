create table if not exists companies (
    id int unsigned not null auto_increment,
    name varchar(255) not null,
    cnpj int unsigned,
    primary key(id),
    unique key(cnpj)
);

create table if not exists company_unities (
    company_id int unsigned not null,
    city_id int unsigned not null,
    headquarters tinyint(1) not null,
    primary key(company_id, city_id)
);
