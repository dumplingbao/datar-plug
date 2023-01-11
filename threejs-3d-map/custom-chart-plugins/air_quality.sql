
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for air_quality
-- ----------------------------
DROP TABLE IF EXISTS `air_quality`;
CREATE TABLE `air_quality` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of air_quality
-- ----------------------------
BEGIN;
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('海门', '90', '121.31247014367', '31.956038868177');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('鄂尔多斯', '12', '109.99370625145', '39.816489560602');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('招远', '89', '120.40051706225', '37.344145870524');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('舟山', '55', '122.16987209835', '30.036010302554');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('齐齐哈尔', '14', '123.98728894217', '47.347699813366');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('盐城', '44', '120.14887181794', '33.379861877121');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('赤峰', '33', '118.93076119217', '42.297112320317');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('青岛', '78', '120.38442818368', '36.105214901274');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('金昌', '89', '102.20812626259', '38.516071799532');
INSERT INTO `air_quality` (`name`, `value`, `lon`, `lat`) VALUES ('泉州', '21', '118.60036234323', '24.901652383991');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
