select e.name Empresa, c.name Cidade
from companies e, company_unities eu, cities c
where e.id = eu.company_id
and c.id = eu.city_id
and headquarters
