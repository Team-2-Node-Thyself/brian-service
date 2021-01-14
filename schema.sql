-- run: mysql -u root < path/to/schema.sql
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
  `id` INTEGER AUTO_INCREMENT,
  `product_name` CHAR NULL DEFAULT NULL,
  `price` INTEGER NOT NULL DEFAULT 0,
  `colors_option` INTEGER NULL DEFAULT NULL,
  `discount` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'colors_table'
-- 
-- ---

DROP TABLE IF EXISTS `colors_table`;
		
CREATE TABLE `colors_table` (
  `id` INTEGER AUTO_INCREMENT,
  `color` CHAR NULL DEFAULT NULL,
  `stock` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'discount_table'
-- 
-- ---

DROP TABLE IF EXISTS `discount_table`;
		
CREATE TABLE `discount_table` (
  `id` INTEGER AUTO_INCREMENT,
  `discountAmount` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `product` ADD FOREIGN KEY (colors_option) REFERENCES `colors_table` (`id`);
ALTER TABLE `product` ADD FOREIGN KEY (discount) REFERENCES `discount_table` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `colors_table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `discount_table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`,`product_name`,`price`,`colors_option`,`discount`) VALUES
-- ('','','','','');
-- INSERT INTO `colors_table` (`id`,`color`,`stock`) VALUES
-- ('','','');
-- INSERT INTO `discount_table` (`id`,`discountAmount`) VALUES
-- ('','');