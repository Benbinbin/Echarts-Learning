-- 创建项目数据库
CREATE DATABASE investment;

-- 导入数据
-- 数据源：城市经纬度数据.csv
-- 数据源：投资数据.csv
CREATE TABLE cities(
    城市名称 text,
    经度 numeric,
    纬度 numeric
    );

CREATE TABLE pairs(
    投资方所在城市 text,
    融资方所在城市 text
);

\COPY cities FROM '城市经纬度数据.csv' WITH CSV HEADER ENCODING 'utf8';

\COPY pairs FROM '投资数据.csv' WITH CSV HEADER ENCODING 'utf8';

-- 查看数据表部分数据
SELECT * FROM cities LIMIT 10;
SELECT * FROM pairs LIMIT 10;

-- 查询数据为空的数据项
-- SELECT *  FROM cities WHERE 城市名称 IS NULL OR 经度 IS NULL OR 纬度 IS NULL;
-- SELECT * FROM pairs WHERE 投资方所在城市 IS NULL OR 融资方所在城市 IS NULL;

-- 清洗数据，删除缺失值数据项
DELETE FROM cities WHERE 城市名称 IS NULL OR 经度 IS NULL OR 纬度 IS NULL;
DELETE FROM pairs WHERE 投资方所在城市 IS NULL OR 融资方所在城市 IS NULL;

-- 合并数据
-- 将投资和融资地点关系，并且包含双方经纬度合并为一张表
CREATE TABLE t AS
    SELECT pairs.投资方所在城市, pairs.融资方所在城市, cities.经度 AS 投资方所在城市_lng, cities.纬度 AS 投资方所在城市_lat
        FROM pairs INNER JOIN cities
        ON pairs.投资方所在城市 = cities.城市名称;

CREATE TABLE results AS
    SELECT t.投资方所在城市, t.融资方所在城市, t.投资方所在城市_lng, t.投资方所在城市_lat, cities.经度 AS 融资方所在城市_lng, cities.纬度 AS 融资方所在城市_lat
        FROM t INNER JOIN cities
        ON t.融资方所在城市 = cities.城市名称;

-- 投资方和融资方所涉及的城市及其经纬度列表
CREATE TABLE c AS
    SELECT 投资方所在城市 AS 城市 FROM pairs
    UNION
    SELECT 融资方所在城市 AS 城市 FROM pairs;

CREATE TABLE include_cities AS
    SELECT DISTINCT c.城市, cities.经度 AS 城市_lng, cities.纬度 AS 城市_lat
    FROM c INNER JOIN cities
    ON c.城市 = cities.城市名称;


-- 导出数据
\COPY results TO 'investment.csv' WITH CSV HEADER;
\COPY include_cities TO 'cities_location.CSV' WITH CSV HEADER;