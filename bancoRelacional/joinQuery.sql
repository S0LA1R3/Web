select e.name, c.name, region from states e, cities c
where e.id = c.state_id

select
    c.name as Cidade,
    e.name as Estado,
    region as Região
from states e
inner join cities c on e.id = c.state_id
order by region asc
