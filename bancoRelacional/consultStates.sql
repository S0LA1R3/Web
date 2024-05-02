select * from states

select Acronym, name as 'State Name' from states
where region = 'Sul'

select name, region from `states`
WHERe population >= 10
order by population desc
