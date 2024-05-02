alter table companies modify cnpj varchar(14);

insert into companies (name, cnpj)
values
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);

desc COMPANIES;
desc mayors;
select * from companies;
select * from cities;

insert into company_unities(company_id, city_id, headquarters)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
    