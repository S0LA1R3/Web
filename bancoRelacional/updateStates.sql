update states
set name = 'Maranhão'
where acronym = 'MA'

select amogus.name from states amogus where acronym = 'MA'

update states
set name = 'Paraná',
    population = 11.32
where acronym = 'PR'

select name, acronym, population from states where acronym = 'PR'
