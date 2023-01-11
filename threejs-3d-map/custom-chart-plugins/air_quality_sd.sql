
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for air_quality_sd
-- ----------------------------
DROP TABLE IF EXISTS `air_quality_sd`;
CREATE TABLE `air_quality_sd` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of air_quality_sd
-- ----------------------------
BEGIN;
INSERT INTO `air_quality_sd` (`name`, `value`, `lon`, `lat`) VALUES ('日照', '90', '119.5072', '35.4202');
INSERT INTO `air_quality_sd` (`name`, `value`, `lon`, `lat`) VALUES ('临沂', '44', '118.33', '35.33');
INSERT INTO `air_quality_sd` (`name`, `value`, `lon`, `lat`) VALUES ('济南', '89', '117.00', '36.40');
INSERT INTO `air_quality_sd` (`name`, `value`, `lon`, `lat`) VALUES ('青岛', '78', '120.38442818368', '36.105214901274');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
