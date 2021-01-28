-- run: mysql -u root < schema.sql
-- it runs this file with mysql

CREATE DATABASE IF NOT EXISTS `bullseye`;
USE `bullseye`;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
-- 
-- ---

DROP TABLE IF EXISTS `product`;
		
CREATE TABLE `product` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NULL DEFAULT NULL,
  `price` DECIMAL(10, 2) NOT NULL DEFAULT 0,
  `color` VARCHAR(100) NULL DEFAULT NULL,
  `stock` INTEGER NOT NULL DEFAULT 0,
  `discount` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`,`product_name`,`price`,`colors`,`stock`,`discount`) VALUES
-- ('','','','','','');