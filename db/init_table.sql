create table if not exists cars (
  id serial,
  make varchar(100),
  model varchar(100),
  year int
);
insert into cars (make, model, year) 
values ('Triumph', 'Tr7', 1978),
('Chevrolet', 'Cavalier', 1999),
('Mitsubishi', 'Montero', 2005),
('Plymouth', 'PT Cruiser', 2008),
('Nissan', 'Xterra', 2008);

select * from cars;
