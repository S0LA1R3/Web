select
    region as 'Região',
    sum(population) as Total
from states
group by region
order by Total desc

select
    avg(population) as Total -- average
from states
