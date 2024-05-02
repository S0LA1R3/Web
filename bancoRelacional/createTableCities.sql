create table if not exists cities (
    id int unsigned not null auto_increment,
    name varchar(255) not null,
    state_id int unsigned not null,
    area decimal (10, 2),
    primary key (id),
    foreign key (state_id) references states (id)
);

create table if not exists test (
    id int unsigned not null auto_increment primary key
);

drop table if exists test;
