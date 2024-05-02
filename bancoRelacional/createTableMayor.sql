create table if not exists mayors (
    id int unsigned not null auto_increment,
    name varchar(255) not null,
    city_id int unsigned,
    primary key(id),
    unique key(city_id),
    foreign key(city_id) references cities(id)
)
