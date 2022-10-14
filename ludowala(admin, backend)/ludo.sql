-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2020 at 05:38 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ludo`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_info`
--

CREATE TABLE `admin_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `freeCoins` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_info`
--

INSERT INTO `admin_info` (`id`, `name`, `password`, `freeCoins`) VALUES
(1, 'admin', '123', 10);

-- --------------------------------------------------------

--
-- Table structure for table `admin_wallet`
--

CREATE TABLE `admin_wallet` (
  `id` int(11) NOT NULL,
  `add_amount` int(255) NOT NULL,
  `total_amount` int(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_wallet`
--

INSERT INTO `admin_wallet` (`id`, `add_amount`, `total_amount`, `date`) VALUES
(393, 2, 2, 'Sat Feb 01 2020 11:12:34 GMT+0530 (India Standard Time)'),
(394, 50, 52, 'Sat Feb 01 2020 12:22:42 GMT+0530 (India Standard Time)'),
(395, 5, 57, 'Sat Feb 01 2020 12:55:32 GMT+0530 (India Standard Time)'),
(396, 5, 62, 'Sat Feb 01 2020 22:42:06 GMT+0530 (India Standard Time)'),
(397, 5, 67, 'Sun Feb 02 2020 18:56:00 GMT+0530 (India Standard Time)'),
(398, 5, 72, 'Sun Feb 02 2020 19:01:22 GMT+0530 (India Standard Time)'),
(399, 5, 77, 'Mon Feb 03 2020 08:50:57 GMT+0530 (India Standard Time)'),
(400, 5, 82, 'Mon Feb 03 2020 09:06:37 GMT+0530 (India Standard Time)'),
(401, 5, 87, 'Mon Feb 03 2020 09:28:01 GMT+0530 (India Standard Time)'),
(402, 50, 137, 'Mon Feb 03 2020 13:25:50 GMT+0530 (India Standard Time)'),
(403, 20, 157, 'Mon Feb 03 2020 15:30:20 GMT+0530 (India Standard Time)'),
(404, 5, 162, 'Mon Feb 03 2020 15:41:35 GMT+0530 (India Standard Time)'),
(405, 5, 167, 'Mon Feb 03 2020 15:48:11 GMT+0530 (India Standard Time)'),
(406, 50, 217, 'Mon Feb 03 2020 18:05:35 GMT+0530 (India Standard Time)'),
(407, 50, 267, 'Mon Feb 03 2020 18:05:41 GMT+0530 (India Standard Time)'),
(408, 50, 317, 'Mon Feb 03 2020 18:07:27 GMT+0530 (India Standard Time)'),
(409, 50, 367, 'Mon Feb 03 2020 18:10:55 GMT+0530 (India Standard Time)'),
(410, 5, 372, 'Mon Feb 03 2020 20:37:36 GMT+0530 (India Standard Time)'),
(411, 35, 407, 'Mon Feb 03 2020 23:13:21 GMT+0530 (India Standard Time)'),
(412, 5, 412, 'Mon Feb 03 2020 23:31:19 GMT+0530 (India Standard Time)'),
(413, 5, 417, 'Tue Feb 04 2020 06:19:30 GMT+0530 (India Standard Time)'),
(414, 5, 422, 'Tue Feb 04 2020 06:20:36 GMT+0530 (India Standard Time)'),
(415, 5, 427, 'Tue Feb 04 2020 06:29:19 GMT+0530 (India Standard Time)'),
(416, 5, 432, 'Tue Feb 04 2020 06:37:02 GMT+0530 (India Standard Time)'),
(417, 5, 437, 'Tue Feb 04 2020 06:40:27 GMT+0530 (India Standard Time)'),
(418, 5, 442, 'Tue Feb 04 2020 08:14:04 GMT+0530 (India Standard Time)'),
(419, 35, 477, 'Tue Feb 04 2020 08:21:29 GMT+0530 (India Standard Time)'),
(420, 35, 512, 'Tue Feb 04 2020 08:25:38 GMT+0530 (India Standard Time)'),
(421, 5, 517, 'Tue Feb 04 2020 08:27:49 GMT+0530 (India Standard Time)'),
(422, 35, 552, 'Tue Feb 04 2020 08:28:19 GMT+0530 (India Standard Time)'),
(423, 5, 557, 'Tue Feb 04 2020 08:28:24 GMT+0530 (India Standard Time)'),
(424, 5, 562, 'Tue Feb 04 2020 08:32:41 GMT+0530 (India Standard Time)'),
(425, 5, 567, 'Tue Feb 04 2020 08:32:42 GMT+0530 (India Standard Time)'),
(426, 35, 602, 'Tue Feb 04 2020 08:41:24 GMT+0530 (India Standard Time)'),
(427, 35, 637, 'Tue Feb 04 2020 09:13:29 GMT+0530 (India Standard Time)'),
(428, 5, 642, 'Tue Feb 04 2020 09:18:56 GMT+0530 (India Standard Time)'),
(429, 5, 647, 'Tue Feb 04 2020 09:19:30 GMT+0530 (India Standard Time)'),
(430, 35, 682, 'Tue Feb 04 2020 09:30:05 GMT+0530 (India Standard Time)'),
(431, 35, 717, 'Tue Feb 04 2020 09:36:55 GMT+0530 (India Standard Time)'),
(432, 35, 752, 'Tue Feb 04 2020 09:38:27 GMT+0530 (India Standard Time)'),
(433, 35, 787, 'Tue Feb 04 2020 09:50:02 GMT+0530 (India Standard Time)'),
(434, 35, 822, 'Tue Feb 04 2020 09:51:18 GMT+0530 (India Standard Time)'),
(435, 35, 857, 'Tue Feb 04 2020 09:52:22 GMT+0530 (India Standard Time)'),
(436, 35, 892, 'Tue Feb 04 2020 10:35:08 GMT+0530 (India Standard Time)'),
(437, 35, 927, 'Tue Feb 04 2020 10:40:47 GMT+0530 (India Standard Time)'),
(438, 35, 962, 'Tue Feb 04 2020 11:05:00 GMT+0530 (India Standard Time)'),
(439, 35, 997, 'Tue Feb 04 2020 12:43:09 GMT+0530 (India Standard Time)'),
(440, 35, 1032, 'Tue Feb 04 2020 13:03:11 GMT+0530 (India Standard Time)'),
(441, 35, 1067, 'Tue Feb 04 2020 13:11:17 GMT+0530 (India Standard Time)'),
(442, 35, 1102, 'Tue Feb 04 2020 13:16:31 GMT+0530 (India Standard Time)'),
(443, 35, 1137, 'Tue Feb 04 2020 13:21:01 GMT+0530 (India Standard Time)'),
(444, 35, 1172, 'Tue Feb 04 2020 13:21:05 GMT+0530 (India Standard Time)'),
(445, 35, 1207, 'Tue Feb 04 2020 13:26:37 GMT+0530 (India Standard Time)'),
(446, 35, 1242, 'Tue Feb 04 2020 13:28:21 GMT+0530 (India Standard Time)'),
(447, 35, 1277, 'Tue Feb 04 2020 13:41:20 GMT+0530 (India Standard Time)'),
(448, 35, 1312, 'Tue Feb 04 2020 14:08:55 GMT+0530 (India Standard Time)'),
(449, 35, 1347, 'Tue Feb 04 2020 14:12:58 GMT+0530 (India Standard Time)'),
(450, 35, 1382, 'Tue Feb 04 2020 15:39:54 GMT+0530 (India Standard Time)'),
(451, 35, 1417, 'Tue Feb 04 2020 16:11:11 GMT+0530 (India Standard Time)'),
(452, 35, 1452, 'Tue Feb 04 2020 16:37:30 GMT+0530 (India Standard Time)'),
(453, 35, 1487, 'Tue Feb 04 2020 16:41:35 GMT+0530 (India Standard Time)'),
(454, 35, 1522, 'Tue Feb 04 2020 16:45:14 GMT+0530 (India Standard Time)'),
(455, 35, 1557, 'Tue Feb 04 2020 16:47:47 GMT+0530 (India Standard Time)'),
(456, 35, 1592, 'Tue Feb 04 2020 16:52:17 GMT+0530 (India Standard Time)'),
(457, 35, 1627, 'Tue Feb 04 2020 17:05:51 GMT+0530 (India Standard Time)'),
(458, 35, 1662, 'Tue Feb 04 2020 17:12:39 GMT+0530 (India Standard Time)'),
(459, 35, 1697, 'Tue Feb 04 2020 17:18:13 GMT+0530 (India Standard Time)'),
(460, 35, 1732, 'Tue Feb 04 2020 17:41:31 GMT+0530 (India Standard Time)'),
(461, 50, 1782, 'Tue Feb 04 2020 18:39:59 GMT+0530 (India Standard Time)'),
(462, 5, 1787, 'Tue Feb 04 2020 19:01:16 GMT+0530 (India Standard Time)'),
(463, 5, 1792, 'Tue Feb 04 2020 19:02:26 GMT+0530 (India Standard Time)'),
(464, 5, 1797, 'Tue Feb 04 2020 19:02:58 GMT+0530 (India Standard Time)'),
(465, 20, 1817, 'Tue Feb 04 2020 19:03:31 GMT+0530 (India Standard Time)'),
(466, 50, 1867, 'Tue Feb 04 2020 19:12:03 GMT+0530 (India Standard Time)'),
(467, 35, 1902, 'Tue Feb 04 2020 19:14:32 GMT+0530 (India Standard Time)'),
(468, 50, 1952, 'Sat Feb 29 2020 18:53:21 GMT+0800 (China Standard Time)'),
(469, 100, 2052, 'Sat Feb 29 2020 19:53:43 GMT+0800 (China Standard Time)'),
(470, 50, 2102, 'Sat Feb 29 2020 20:33:06 GMT+0800 (China Standard Time)'),
(471, 50, 2152, 'Wed Mar 04 2020 01:40:06 GMT+0800 (China Standard Time)'),
(472, 5, 2157, 'Sun Mar 15 2020 00:12:54 GMT+0800 (China Standard Time)'),
(473, 5, 2162, 'Sun Mar 15 2020 01:25:16 GMT+0800 (China Standard Time)'),
(474, 5, 2167, 'Sun Mar 15 2020 01:26:16 GMT+0800 (China Standard Time)'),
(475, 5, 2172, 'Sun Mar 15 2020 01:27:09 GMT+0800 (China Standard Time)'),
(476, 5, 2177, 'Sun Mar 15 2020 01:28:01 GMT+0800 (China Standard Time)'),
(477, 5, 2182, 'Sun Mar 15 2020 02:04:21 GMT+0800 (China Standard Time)'),
(478, 5, 2187, 'Wed Mar 18 2020 14:50:08 GMT+0800 (China Standard Time)'),
(479, 5, 2192, 'Wed Mar 18 2020 14:50:40 GMT+0800 (China Standard Time)'),
(480, 5, 2197, 'Wed Mar 18 2020 14:52:32 GMT+0800 (China Standard Time)'),
(481, 5, 2202, 'Thu Mar 19 2020 06:14:44 GMT+0800 (China Standard Time)'),
(482, 5, 2207, 'Thu Mar 19 2020 07:29:24 GMT+0800 (China Standard Time)'),
(483, 5, 2212, 'Thu Mar 19 2020 14:01:16 GMT+0800 (China Standard Time)'),
(484, 5, 2217, 'Thu Mar 19 2020 15:33:24 GMT+0800 (China Standard Time)'),
(485, 5, 2222, 'Thu Mar 19 2020 15:45:34 GMT+0800 (China Standard Time)'),
(486, 5, 2227, 'Thu Mar 19 2020 16:27:08 GMT+0800 (China Standard Time)'),
(487, 5, 2232, 'Thu Mar 19 2020 16:29:17 GMT+0800 (China Standard Time)'),
(488, 5, 2237, 'Thu Mar 19 2020 16:30:08 GMT+0800 (China Standard Time)'),
(489, 5, 2242, 'Thu Mar 19 2020 20:59:36 GMT+0800 (China Standard Time)'),
(490, 5, 2247, 'Tue Apr 21 2020 16:47:32 GMT+0800 (China Standard Time)'),
(491, 5, 2252, 'Tue Apr 21 2020 16:54:12 GMT+0800 (China Standard Time)'),
(492, 35, 2287, 'Tue Apr 21 2020 16:59:49 GMT+0800 (China Standard Time)'),
(493, 35, 2322, 'Tue Apr 21 2020 23:33:02 GMT+0800 (China Standard Time)'),
(494, 5, 2327, 'Wed Apr 22 2020 17:33:40 GMT+0800 (China Standard Time)'),
(495, 5, 2332, 'Wed Apr 22 2020 17:45:47 GMT+0800 (China Standard Time)'),
(496, 5, 2337, 'Fri May 01 2020 02:13:59 GMT+0800 (China Standard Time)'),
(497, 5, 2342, 'Fri May 01 2020 02:19:29 GMT+0800 (China Standard Time)'),
(498, 5, 2347, 'Sat May 02 2020 04:34:53 GMT+0800 (China Standard Time)'),
(499, 5, 2352, 'Sat May 02 2020 04:53:42 GMT+0800 (China Standard Time)'),
(500, 5, 2357, 'Sat May 02 2020 05:01:13 GMT+0800 (China Standard Time)'),
(501, 5, 2362, 'Fri May 08 2020 04:23:43 GMT+0800 (China Standard Time)'),
(502, 5, 2367, 'Fri May 08 2020 21:06:52 GMT+0800 (China Standard Time)'),
(503, 5, 2372, 'Fri May 08 2020 22:07:28 GMT+0800 (China Standard Time)'),
(504, 5, 2377, 'Sat May 09 2020 03:20:49 GMT+0800 (China Standard Time)'),
(505, 5, 2382, 'Sat May 09 2020 21:28:21 GMT+0800 (China Standard Time)'),
(506, 5, 2387, 'Tue May 12 2020 01:34:37 GMT+0800 (China Standard Time)'),
(507, 64, 2451, 'Tue May 12 2020 09:56:10 GMT+0800 (China Standard Time)'),
(508, 4, 2455, 'Tue May 12 2020 09:57:57 GMT+0800 (China Standard Time)'),
(509, 4, 2459, 'Tue May 12 2020 18:52:33 GMT+0800 (China Standard Time)'),
(510, 4, 2463, 'Sat May 16 2020 15:58:07 GMT+0800 (China Standard Time)'),
(511, 4, 2467, 'Sat May 16 2020 15:59:13 GMT+0800 (China Standard Time)'),
(512, 4, 2471, 'Sat May 16 2020 16:06:49 GMT+0800 (China Standard Time)'),
(513, 4, 2475, 'Sat May 16 2020 16:16:33 GMT+0800 (China Standard Time)'),
(514, 4, 2479, 'Sat May 16 2020 16:27:08 GMT+0800 (China Standard Time)'),
(515, 4, 2483, 'Sat May 16 2020 20:23:23 GMT+0800 (China Standard Time)'),
(516, 4, 2487, 'Sat May 16 2020 20:24:14 GMT+0800 (China Standard Time)'),
(517, 4, 2491, 'Sat May 16 2020 22:11:40 GMT+0800 (China Standard Time)'),
(518, 4, 2495, 'Sat May 16 2020 22:22:44 GMT+0800 (China Standard Time)'),
(519, 4, 2499, 'Sat May 16 2020 22:28:52 GMT+0800 (China Standard Time)'),
(520, 4, 2503, 'Sat May 16 2020 22:29:40 GMT+0800 (China Standard Time)'),
(521, 4, 2507, 'Sat May 16 2020 22:30:57 GMT+0800 (China Standard Time)'),
(522, 4, 2511, 'Sat May 16 2020 22:33:33 GMT+0800 (China Standard Time)'),
(523, 4, 2515, 'Sat May 16 2020 22:34:05 GMT+0800 (China Standard Time)'),
(524, 4, 2519, 'Sat May 16 2020 22:35:32 GMT+0800 (China Standard Time)'),
(525, 4, 2523, 'Sat May 16 2020 22:47:38 GMT+0800 (China Standard Time)'),
(526, 4, 2527, 'Sat May 16 2020 23:17:07 GMT+0800 (China Standard Time)'),
(527, 4, 2531, 'Sat May 16 2020 23:20:31 GMT+0800 (China Standard Time)'),
(528, 4, 2535, 'Sun May 17 2020 00:52:03 GMT+0800 (China Standard Time)'),
(529, 4, 2539, 'Mon May 18 2020 12:03:54 GMT+0800 (China Standard Time)'),
(530, 4, 2543, 'Mon May 18 2020 22:44:44 GMT+0800 (China Standard Time)'),
(531, 5, 2548, 'Tue May 19 2020 10:09:34 GMT+0800 (China Standard Time)'),
(532, 4, 2552, 'Thu May 21 2020 14:45:52 GMT+0800 (China Standard Time)'),
(533, 10, 2562, 'Thu May 21 2020 23:40:24 GMT+0800 (China Standard Time)'),
(534, 4, 2566, 'Sun May 24 2020 05:14:52 GMT+0800 (China Standard Time)'),
(535, 4, 2570, 'Sun May 24 2020 05:17:10 GMT+0800 (China Standard Time)'),
(536, 4, 2574, 'Mon May 25 2020 01:23:44 GMT+0800 (China Standard Time)'),
(537, 4, 2578, 'Wed May 27 2020 17:29:45 GMT+0800 (China Standard Time)'),
(538, 4, 2582, 'Wed May 27 2020 17:34:45 GMT+0800 (China Standard Time)'),
(539, 4, 2586, 'Wed May 27 2020 17:44:50 GMT+0800 (China Standard Time)'),
(540, 4, 2590, 'Wed May 27 2020 17:47:00 GMT+0800 (China Standard Time)'),
(541, 4, 2594, 'Wed May 27 2020 17:49:14 GMT+0800 (China Standard Time)'),
(542, 4, 2598, 'Wed May 27 2020 17:51:08 GMT+0800 (China Standard Time)'),
(543, 4, 2602, 'Fri May 29 2020 10:05:11 GMT+0800 (China Standard Time)'),
(544, 16, 2618, 'Fri May 29 2020 10:10:21 GMT+0800 (China Standard Time)'),
(545, 4, 2622, 'Fri May 29 2020 10:30:25 GMT+0800 (China Standard Time)'),
(546, 4, 2626, 'Sat May 30 2020 01:07:23 GMT+0800 (China Standard Time)'),
(547, 4, 2630, 'Sat May 30 2020 01:08:20 GMT+0800 (China Standard Time)'),
(548, 4, 2634, 'Sat May 30 2020 01:09:09 GMT+0800 (China Standard Time)'),
(549, 4, 2638, 'Sat May 30 2020 01:14:23 GMT+0800 (China Standard Time)'),
(550, 4, 2642, 'Sat May 30 2020 01:19:09 GMT+0800 (China Standard Time)'),
(551, 4, 2646, 'Sat May 30 2020 10:58:39 GMT+0800 (China Standard Time)'),
(552, 4, 2650, 'Sat May 30 2020 10:59:40 GMT+0800 (China Standard Time)'),
(553, 4, 2654, 'Sat May 30 2020 12:07:25 GMT+0800 (China Standard Time)'),
(554, 4, 2658, 'Sat May 30 2020 12:51:30 GMT+0800 (China Standard Time)'),
(555, 4, 2662, 'Mon Jun 01 2020 11:26:05 GMT+0800 (China Standard Time)'),
(556, 4, 2666, 'Mon Jun 01 2020 11:38:46 GMT+0800 (China Standard Time)'),
(557, 4, 2670, 'Mon Jun 01 2020 11:48:54 GMT+0800 (China Standard Time)'),
(558, 4, 2674, 'Mon Jun 01 2020 12:35:02 GMT+0800 (China Standard Time)'),
(559, 4, 2678, 'Mon Jun 01 2020 15:29:55 GMT+0800 (China Standard Time)'),
(560, 4, 2682, 'Mon Jun 01 2020 15:37:00 GMT+0800 (China Standard Time)'),
(561, 4, 2686, 'Mon Jun 01 2020 15:43:25 GMT+0800 (China Standard Time)'),
(562, 4, 2690, 'Mon Jun 01 2020 15:45:21 GMT+0800 (China Standard Time)'),
(563, 4, 2694, 'Mon Jun 01 2020 15:47:48 GMT+0800 (China Standard Time)'),
(564, 4, 2698, 'Mon Jun 01 2020 15:48:52 GMT+0800 (China Standard Time)'),
(565, 10, 2708, 'Mon Jun 01 2020 16:15:17 GMT+0800 (China Standard Time)'),
(566, 4, 2712, 'Mon Jun 01 2020 16:45:12 GMT+0800 (China Standard Time)'),
(567, 4, 2716, 'Mon Jun 01 2020 16:47:00 GMT+0800 (China Standard Time)'),
(568, 4, 2720, 'Mon Jun 01 2020 17:09:14 GMT+0800 (China Standard Time)'),
(569, 4, 2724, 'Mon Jun 01 2020 17:12:05 GMT+0800 (China Standard Time)'),
(570, 4, 2728, 'Mon Jun 01 2020 17:13:55 GMT+0800 (China Standard Time)'),
(571, 4, 2732, 'Mon Jun 01 2020 17:19:28 GMT+0800 (China Standard Time)'),
(572, 4, 2736, 'Mon Jun 01 2020 17:32:58 GMT+0800 (China Standard Time)'),
(573, 4, 2740, 'Mon Jun 01 2020 17:35:00 GMT+0800 (China Standard Time)'),
(574, 4, 2744, 'Mon Jun 01 2020 17:46:15 GMT+0800 (China Standard Time)'),
(575, 4, 2748, 'Mon Jun 01 2020 17:47:26 GMT+0800 (China Standard Time)'),
(576, 4, 2752, 'Mon Jun 01 2020 17:55:21 GMT+0800 (China Standard Time)'),
(577, 4, 2756, 'Mon Jun 01 2020 17:59:09 GMT+0800 (China Standard Time)'),
(578, 4, 2760, 'Mon Jun 01 2020 18:02:15 GMT+0800 (China Standard Time)'),
(579, 4, 2764, 'Mon Jun 01 2020 18:04:27 GMT+0800 (China Standard Time)'),
(580, 4, 2768, 'Mon Jun 01 2020 18:09:04 GMT+0800 (China Standard Time)'),
(581, 4, 2772, 'Mon Jun 01 2020 18:10:46 GMT+0800 (China Standard Time)'),
(582, 4, 2776, 'Mon Jun 01 2020 18:24:30 GMT+0800 (China Standard Time)'),
(583, 4, 2780, 'Mon Jun 01 2020 18:28:52 GMT+0800 (China Standard Time)'),
(584, 4, 2784, 'Mon Jun 01 2020 18:28:54 GMT+0800 (China Standard Time)'),
(585, 4, 2788, 'Mon Jun 01 2020 18:29:27 GMT+0800 (China Standard Time)'),
(586, 4, 2792, 'Mon Jun 01 2020 18:43:58 GMT+0800 (China Standard Time)'),
(587, 4, 2796, 'Mon Jun 01 2020 18:47:13 GMT+0800 (China Standard Time)'),
(588, 4, 2800, 'Mon Jun 01 2020 19:32:20 GMT+0800 (China Standard Time)'),
(589, 4, 2804, 'Mon Jun 01 2020 19:39:22 GMT+0800 (China Standard Time)'),
(590, 4, 2808, 'Mon Jun 01 2020 19:47:14 GMT+0800 (China Standard Time)'),
(591, 4, 2812, 'Mon Jun 01 2020 19:49:57 GMT+0800 (China Standard Time)'),
(592, 4, 2816, 'Mon Jun 01 2020 20:34:01 GMT+0800 (China Standard Time)'),
(593, 4, 2820, 'Mon Jun 01 2020 21:26:43 GMT+0800 (China Standard Time)'),
(594, 4, 2824, 'Tue Jun 02 2020 03:02:49 GMT+0800 (China Standard Time)'),
(595, 4, 2828, 'Tue Jun 02 2020 03:18:52 GMT+0800 (China Standard Time)'),
(596, 4, 2832, 'Tue Jun 02 2020 12:12:24 GMT+0800 (China Standard Time)'),
(597, 4, 2836, 'Tue Jun 02 2020 13:25:48 GMT+0800 (China Standard Time)'),
(598, 4, 2840, 'Thu Jun 04 2020 17:06:40 GMT+0800 (China Standard Time)'),
(599, 4, 2844, 'Thu Jun 04 2020 17:08:38 GMT+0800 (China Standard Time)'),
(600, 4, 2848, 'Wed Jun 10 2020 17:52:00 GMT+0800 (China Standard Time)'),
(601, 4, 2852, 'Wed Jun 10 2020 17:52:29 GMT+0800 (China Standard Time)'),
(602, 4, 2856, 'Fri Jun 12 2020 12:15:47 GMT+0800 (China Standard Time)'),
(603, 4, 2860, 'Tue Jun 16 2020 01:09:59 GMT+0800 (China Standard Time)'),
(604, 4, 2864, 'Tue Jun 16 2020 01:17:17 GMT+0800 (China Standard Time)'),
(605, 4, 2868, 'Tue Jun 16 2020 02:42:58 GMT+0800 (China Standard Time)'),
(606, 4, 2872, 'Thu Jul 16 2020 21:28:15 GMT+0800 (China Standard Time)'),
(607, 4, 2876, 'Wed Jul 29 2020 19:00:44 GMT+0800 (China Standard Time)'),
(608, 4, 2880, 'Sun Aug 02 2020 19:59:27 GMT+0800 (China Standard Time)'),
(609, 4, 2884, 'Sun Aug 02 2020 20:00:23 GMT+0800 (China Standard Time)'),
(610, 10, 2894, 'Sun Aug 02 2020 20:01:13 GMT+0800 (China Standard Time)'),
(611, 10, 2904, 'Sun Aug 02 2020 20:01:52 GMT+0800 (China Standard Time)'),
(612, 20, 2924, 'Sun Aug 02 2020 20:02:28 GMT+0800 (China Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `notify_table`
--

CREATE TABLE `notify_table` (
  `id` int(10) NOT NULL,
  `number` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `money` int(100) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `verify` varchar(50) DEFAULT NULL,
  `paytmPhone` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notify_table`
--

INSERT INTO `notify_table` (`id`, `number`, `name`, `date`, `money`, `user_id`, `status`, `verify`, `paytmPhone`) VALUES
(37, '919500150109', 'Sri', 'Thu Jan 30 2020 13:07:10 GMT+0530 (India Standard Time)', 100, 150, 1, NULL, '919500140108'),
(38, '919500150109', 'Sri', 'Thu Jan 30 2020 14:47:30 GMT+0530 (India Standard Time)', 150, 150, 1, NULL, '919400140109'),
(39, '919500150109', 'Sri', 'Thu Jan 30 2020 15:13:10 GMT+0530 (India Standard Time)', 200, 150, 1, NULL, '919500184234'),
(40, '919500150109', 'Sri', 'Thu Jan 30 2020 18:10:27 GMT+0530 (India Standard Time)', 200, 150, 1, NULL, '919440140109'),
(41, '919500140108', 'Vam', 'Thu Jan 30 2020 18:32:38 GMT+0530 (India Standard Time)', 150, 81, 1, NULL, '919500148506'),
(42, '911112222233', 'Ishdo', 'Thu Jan 30 2020 18:34:22 GMT+0530 (India Standard Time)', 100, 149, 1, NULL, '911112222233'),
(43, '919500140108', 'Vam', 'Thu Jan 30 2020 18:35:32 GMT+0530 (India Standard Time)', 120, 81, 1, NULL, '919512345676'),
(44, '919500140108', 'Vam', 'Thu Jan 30 2020 20:48:16 GMT+0530 (India Standard Time)', 100, 81, 1, NULL, '919440140108'),
(45, '919500140108', 'Vam', 'Fri Jan 31 2020 09:56:43 GMT+0530 (India Standard Time)', 100, 81, 1, NULL, '919400150108'),
(46, '919500140108', 'Vam', 'Mon Feb 03 2020 21:09:35 GMT+0530 (India Standard Time)', 3000, 81, 1, NULL, '919500140108'),
(47, '919500140108', 'Vam', 'Sat Feb 29 2020 18:55:56 GMT+0800 (China Standard Time)', 100, 81, 1, NULL, '919934099340'),
(48, '911112222233', 'isop', 'Fri May 15 2020 13:28:11 GMT+0800 (China Standard Time)', 100, 211, 1, NULL, '919990361238');

-- --------------------------------------------------------

--
-- Table structure for table `room_info`
--

CREATE TABLE `room_info` (
  `id` int(11) NOT NULL,
  `payoutcoin` int(11) NOT NULL,
  `user_amount` int(11) NOT NULL,
  `room_name` varchar(255) DEFAULT NULL,
  `winning_coin` int(11) DEFAULT NULL,
  `matchtype` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_info`
--

INSERT INTO `room_info` (`id`, `payoutcoin`, `user_amount`, `room_name`, `winning_coin`, `matchtype`) VALUES
(0, 20, 0, 'Default', 36, NULL),
(280, 50, 0, '2 PlayerRoom 1', 90, 2),
(281, 100, 0, '2 PlayerRoom 2', 180, 2),
(282, 200, 0, '2 PlayerRoom 3', 360, 2),
(283, 500, 0, '2 PlayerRoom 4', 900, 2),
(284, 1000, 0, '2 PlayerRoom 5', 1800, 2),
(285, 50, 0, '4 PlayerRoom 1', 90, 4),
(286, 100, 0, '4 PlayerRoom 2', 180, 4),
(287, 200, 0, '4 PlayerRoom 3', 360, 4),
(288, 500, 0, '4 PlayerRoom 4', 900, 4),
(289, 1000, 0, '4 PlayerRoom 5', 1800, 4),
(290, 50, 0, 'Private Room 1', 90, 1),
(291, 100, 0, 'Private Room 2', 180, 1),
(292, 200, 0, 'Private Room 3', 360, 1),
(293, 500, 0, 'Private Room 4', 900, 1),
(294, 1000, 0, 'Private Room 5', 1800, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `nickname` varchar(40) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `money` int(11) NOT NULL,
  `password` varchar(40) NOT NULL,
  `blockinfo` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `room_id` varchar(30) DEFAULT NULL,
  `order_id` varchar(50) DEFAULT NULL,
  `fb_id` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`id`, `nickname`, `avatar`, `phone`, `money`, `password`, `blockinfo`, `email`, `room_id`, `order_id`, `fb_id`) VALUES
(242, 'Yong Lee', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=175578630315105&height=200&width=200&ext=1596935537&hash=AeQ1o8Ryk-YNy2gr', '915555555555', 9982, '123123', 1, 'kainmr410@gmail.com', '', 'ORDS35595120', '175578630315105'),
(243, 'Liang', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=614536582496438&height=200&width=200&ext=1594892082&hash=AeQO7V8AqfBRbHMA', '916666666666', 10022, '123123', 1, 'cgc20161116@126.com', '', NULL, '614536582496438'),
(244, 'Isopida', 'assets/img/4.png', '913333333333', 9996, '123123', 1, 'isop@1.com', '', NULL, ''),
(245, 'Fdsf', 'assets/img/0.png', '919318487402', 10000, '123123', 1, 'kain@1.com', '', NULL, ''),
(248, 'Dsfsd', 'assets/img/21.png', '912233123123', 0, '123123', 1, 'sdf@1.com', '', NULL, ''),
(253, 'Sumit', 'assets/img/0.png', '917988152488', 20, 'mikku@12', 1, 'sumitjaglan06@gmail.com', '', NULL, ''),
(254, 'Vicky', 'assets/img/0.png', '919728342526', 9760, 'asdfg12345', 1, 'sangwanvikas5190@gmail.com', '', 'ORDS16746409', ''),
(255, 'Jhon', 'assets/img/0.png', '919716062985', 10016, '1234', 1, 'jayman.infotech01@gmail.com', '', 'ORDS58870327', ''),
(256, 'Vijay', 'assets/img/1.png', '918383063955', 0, 'vijay36445137', 1, 'chahalvijay382@gmail.com', '', NULL, ''),
(257, 'Abhi', 'assets/img/0.png', '918950016514', 212, 'Abhi@123', 1, 'agrewal808@gmail.com', '', NULL, ''),
(258, 'Mani', 'assets/img/15.png', '917015383809', 0, 'Manish@123', 1, 'manishchhariya@gmail.com', '', NULL, ''),
(263, 'Anil', 'assets/img/0.png', '919068220083', 0, 'anil123', 1, 'anildalal828@gmail.com', '', NULL, ''),
(264, 'Ravi', 'assets/img/0.png', '918930624430', 6, '8930624430', 1, 'ravisarhawat8930624430@gmail.com', '', 'ORDS98081191', ''),
(265, 'Moxx', 'assets/img/0.png', '918053307039', 0, 'Moksha', 1, 'deswalsanjay45@gmail.com', '', NULL, ''),
(266, 'Sonu', 'assets/img/0.png', '919050471639', 10, '123456', 1, 'jagsisonu@gmail.com', '', NULL, ''),
(267, 'Mistu', 'assets/img/0.png', '919992703697', 0, 'merasher2226', 1, 'chitachita2226@gmail.com', '', NULL, ''),
(268, 'Pardeep', 'assets/img/0.png', '919729692534', 0, 'jandli12', 1, 'bongriapardeep2@gmail.com', '', 'ORDS80776817', ''),
(269, 'Pawan Kumar', 'assets/img/0.png', '919467518357', 10, '805300', 1, 'pk782330@gmail.com', '', NULL, ''),
(270, 'Kumar', 'assets/img/0.png', '919812660777', 10, 'vin123', 1, 'vinod4477@gmail.com', '', NULL, ''),
(271, 'Rakshi', 'assets/img/0.png', '918431743429', 0, '99002r', 1, 'rakshithrakshi7@gmail.com', '', 'ORDS96062879', ''),
(272, 'The Sachinn', 'assets/img/13.png', '916355821028', 0, 'SACHIN11', 1, 'ms.makwana.h@gmail.com', '', NULL, ''),
(273, 'Abhi', 'assets/img/20.png', '917015456458', 10, 'Abhi@123', 1, 'agrewal808@gmail.com', NULL, NULL, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_info`
--
ALTER TABLE `admin_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_wallet`
--
ALTER TABLE `admin_wallet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notify_table`
--
ALTER TABLE `notify_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_info`
--
ALTER TABLE `room_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_info`
--
ALTER TABLE `admin_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin_wallet`
--
ALTER TABLE `admin_wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=613;

--
-- AUTO_INCREMENT for table `notify_table`
--
ALTER TABLE `notify_table`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `room_info`
--
ALTER TABLE `room_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=295;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=274;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
