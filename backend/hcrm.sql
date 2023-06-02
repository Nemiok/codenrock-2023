-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Май 28 2023 г., 14:52
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `hcrm`
--

-- --------------------------------------------------------

--
-- Структура таблицы `re_apps`
--

CREATE TABLE `re_apps` (
  `apps_id` int(11) NOT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `backend_menu` tinyint(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `href_admin` varchar(255) DEFAULT NULL,
  `admin_path` text DEFAULT NULL,
  `local_admin_path` text DEFAULT NULL,
  `site_path` text DEFAULT NULL,
  `local_site_path` text DEFAULT NULL,
  `preload` tinyint(4) DEFAULT NULL,
  `frontend` tinyint(4) DEFAULT NULL,
  `params` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_city`
--

CREATE TABLE `re_city` (
  `city_id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `translit_name` varchar(255) DEFAULT NULL,
  `name_de` varchar(255) DEFAULT '',
  `name_en` varchar(255) DEFAULT '',
  `name_fa` varchar(255) DEFAULT '',
  `name_tr` varchar(255) DEFAULT '',
  `name_zh` varchar(255) DEFAULT '',
  `toplocation` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `image` longtext DEFAULT NULL,
  `url` varchar(255) DEFAULT '',
  `hint` varchar(255) DEFAULT '',
  `topmenu` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_city`
--

INSERT INTO `re_city` (`city_id`, `name`, `region_id`, `translit_name`, `name_de`, `name_en`, `name_fa`, `name_tr`, `name_zh`, `toplocation`, `image`, `url`, `hint`, `topmenu`) VALUES
(1, 'Москва', 57, NULL, '', '', '', '', '', 0, NULL, '', '', 0),
(2, 'Санкт-Петербург', 58, NULL, '', '', '', '', '', 0, NULL, '', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `re_client`
--

CREATE TABLE `re_client` (
  `client_id` int(10) UNSIGNED NOT NULL,
  `date` int(11) DEFAULT NULL,
  `type_id` varchar(100) DEFAULT NULL,
  `status_id` varchar(255) DEFAULT NULL,
  `fio` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `order_text` text DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) DEFAULT '',
  `url` varchar(255) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_client`
--

INSERT INTO `re_client` (`client_id`, `date`, `type_id`, `status_id`, `fio`, `phone`, `email`, `address`, `order_text`, `user_id`, `name`, `url`) VALUES
(20, 1684962000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Отдел аналитики', ''),
(21, 1684962000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Служба поддержки', ''),
(22, 1684962000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Мобильное приложение', '');

-- --------------------------------------------------------

--
-- Структура таблицы `re_client_request`
--

CREATE TABLE `re_client_request` (
  `dealtype` varchar(255) DEFAULT '',
  `objtype` varchar(255) DEFAULT '',
  `district_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `fio` varchar(255) DEFAULT '',
  `phone` varchar(255) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_columns`
--

CREATE TABLE `re_columns` (
  `columns_id` int(11) NOT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `table_id` int(11) DEFAULT NULL,
  `group_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `primary_key_name` varchar(255) DEFAULT NULL,
  `primary_key_table` varchar(255) DEFAULT NULL,
  `value_string` varchar(255) DEFAULT NULL,
  `query` text DEFAULT NULL,
  `value_name` varchar(255) DEFAULT NULL,
  `title_default` varchar(255) DEFAULT NULL,
  `value_default` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `required` tinyint(1) DEFAULT NULL,
  `unique` tinyint(1) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `value_table` varchar(255) DEFAULT NULL,
  `value_primary_key` varchar(255) DEFAULT NULL,
  `value_field` varchar(255) DEFAULT NULL,
  `assign_to` varchar(255) DEFAULT NULL,
  `dbtype` varchar(255) DEFAULT NULL,
  `table_name` varchar(255) DEFAULT NULL,
  `primary_key` varchar(255) DEFAULT NULL,
  `primary_key_value` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `select_data` text DEFAULT NULL,
  `active_in_topic` text DEFAULT NULL,
  `tab` varchar(255) DEFAULT NULL,
  `hint` varchar(255) DEFAULT NULL,
  `entity` varchar(255) DEFAULT NULL,
  `combo` tinyint(1) DEFAULT NULL,
  `parameters` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_comment`
--

CREATE TABLE `re_comment` (
  `comment_id` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `comment_text` text DEFAULT NULL,
  `comment_date` datetime NOT NULL,
  `parent_comment_id` int(10) UNSIGNED DEFAULT NULL,
  `object_type` varchar(255) DEFAULT NULL,
  `object_id` int(10) UNSIGNED DEFAULT NULL,
  `is_published` tinyint(1) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_comment`
--

INSERT INTO `re_comment` (`comment_id`, `user_id`, `comment_text`, `comment_date`, `parent_comment_id`, `object_type`, `object_id`, `is_published`) VALUES
(1, 3, '123', '2021-02-12 11:04:57', 0, 'client', 4, 1),
(2, 3, 'ddfgdfg', '2021-02-12 11:53:19', 0, 'client', 4, 1),
(3, 3, 'ываыва', '2021-02-12 12:13:49', 0, 'client', 6, 1),
(4, 3, 'Привет\n', '2022-12-10 08:32:03', 0, 'client', 12, 1),
(5, 148, 'Хороший чел', '2022-12-10 09:26:06', 0, 'data', 1, 1),
(6, 148, 'Хороший спец', '2022-12-11 08:36:53', 0, 'data', 4399, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `re_company`
--

CREATE TABLE `re_company` (
  `company_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `phone1` varchar(255) NOT NULL DEFAULT '',
  `phone2` varchar(255) NOT NULL DEFAULT '',
  `icq` varchar(255) NOT NULL DEFAULT '',
  `site` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `limit_data` int(11) NOT NULL DEFAULT 0,
  `limit_special` int(11) NOT NULL DEFAULT 0,
  `limit_best` int(11) NOT NULL DEFAULT 0,
  `period` int(11) NOT NULL DEFAULT 0,
  `start_date` int(11) NOT NULL DEFAULT 0,
  `end_date` int(11) NOT NULL DEFAULT 0,
  `limit_up` int(11) NOT NULL,
  `description` text NOT NULL,
  `company_topic_id` int(10) UNSIGNED NOT NULL,
  `alias` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` text NOT NULL,
  `meta_keywords` varchar(255) NOT NULL,
  `city_id` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_component`
--

CREATE TABLE `re_component` (
  `component_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_component_function`
--

CREATE TABLE `re_component_function` (
  `component_function_id` int(11) NOT NULL,
  `component_id` int(11) DEFAULT NULL,
  `function_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_config`
--

CREATE TABLE `re_config` (
  `id` int(11) NOT NULL,
  `config_key` varchar(255) DEFAULT NULL,
  `value` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `sort_order` int(10) UNSIGNED DEFAULT 1,
  `vtype` int(11) DEFAULT 0,
  `public` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_customentity`
--

CREATE TABLE `re_customentity` (
  `entity_name` varchar(255) NOT NULL,
  `entity_title` varchar(255) DEFAULT NULL,
  `is_public` tinyint(1) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `list_tpl` varchar(255) DEFAULT NULL,
  `view_tpl` varchar(255) DEFAULT NULL,
  `sortby` varchar(255) DEFAULT NULL,
  `sortorder` varchar(255) DEFAULT NULL,
  `per_page` int(11) DEFAULT NULL,
  `list_title` varchar(255) DEFAULT NULL,
  `view_title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_customentity`
--

INSERT INTO `re_customentity` (`entity_name`, `entity_title`, `is_public`, `alias`, `list_tpl`, `view_tpl`, `sortby`, `sortorder`, `per_page`, `list_title`, `view_title`) VALUES
('community', 'Сообщества', 0, '', '', '', '', '', 0, '', ''),
('languages', 'Языки программирования', 0, '', '', '', '', '', 0, '', ''),
('resume', 'Резюме', 0, '', '', '', '', '', 0, '', ''),
('services', 'Услуги компании', 0, '', '', '', '', '', 0, '', ''),
('subscribers', 'Подписчики', 0, '', '', '', '', '', 0, '', ''),
('telegram', 'Телеграм-чаты', 0, '', '', '', '', '', 0, '', ''),
('telegram_groups', 'Телеграм-группы', 0, '', '', '', '', '', 0, '', ''),
('vacancy', 'Вакансии', 0, '', '', '', '', '', 0, '', ''),
('view_order', 'Заявки клиентов', 0, '', '', '', '', '', 0, '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `re_dna`
--

CREATE TABLE `re_dna` (
  `group_id` int(11) NOT NULL DEFAULT 0,
  `component_id` int(11) NOT NULL DEFAULT 0,
  `function_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_dna`
--

INSERT INTO `re_dna` (`group_id`, `component_id`, `function_id`) VALUES
(0, 56, 2),
(0, 58, 2),
(0, 59, 2),
(1, 1, 1),
(2, 1, 1),
(2, 33, 2),
(2, 64, 2),
(2, 65, 2),
(3, 2, 2),
(3, 33, 2),
(6, 1, 1),
(6, 65, 2),
(7, 1, 1),
(7, 2, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `re_function`
--

CREATE TABLE `re_function` (
  `function_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_function`
--

INSERT INTO `re_function` (`function_id`, `name`, `sort_order`, `description`) VALUES
(1, 'login', 0, 'Разрешение на вход'),
(2, 'access', 0, 'Доступ');

-- --------------------------------------------------------

--
-- Структура таблицы `re_group`
--

CREATE TABLE `re_group` (
  `group_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `system_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_group`
--

INSERT INTO `re_group` (`group_id`, `name`, `system_name`) VALUES
(0, 'nobody', 'nobody'),
(1, 'Администраторы', 'admin'),
(2, 'Рекрутер', 'hrmanager'),
(6, 'Соискатель', 'jobseeker');

-- --------------------------------------------------------

--
-- Структура таблицы `re_mailbox`
--

CREATE TABLE `re_mailbox` (
  `mailbox_id` int(11) NOT NULL,
  `sender_id` int(10) UNSIGNED DEFAULT NULL,
  `reciever_id` int(10) UNSIGNED DEFAULT NULL,
  `theme` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `realty_id` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `creation_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_memorylist`
--

CREATE TABLE `re_memorylist` (
  `memorylist_id` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `deal_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_memorylist_item`
--

CREATE TABLE `re_memorylist_item` (
  `memorylist_id` int(10) UNSIGNED NOT NULL,
  `id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_multiple_field`
--

CREATE TABLE `re_multiple_field` (
  `id` int(11) NOT NULL,
  `table_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `field_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `primary_id` int(11) DEFAULT NULL,
  `field_value` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `re_oauth`
--

CREATE TABLE `re_oauth` (
  `oauth_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `session_key` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `date_login` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_password_recovery`
--

CREATE TABLE `re_password_recovery` (
  `pr_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `recovery_code` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_password_recovery`
--

INSERT INTO `re_password_recovery` (`pr_id`, `user_id`, `recovery_code`) VALUES
(2, 4, '41ea34f005bb4e2e7e2a04e1c118fc62'),
(3, 4, 'ed1c7c6d880f1afb3cdac0d96acba506'),
(5, 4, '4f4830d905f2150f4f01c64424b9ca4d'),
(7, 4, 'da9f241975804011eeb93168a8c73c78'),
(8, 4, '489154b65f61f74b51d344189446a06e');

-- --------------------------------------------------------

--
-- Структура таблицы `re_resume`
--

CREATE TABLE `re_resume` (
  `resume_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT '',
  `description` text DEFAULT NULL,
  `education` varchar(255) DEFAULT '',
  `salary` varchar(255) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_resume`
--

INSERT INTO `re_resume` (`resume_id`, `title`, `description`, `education`, `salary`) VALUES
(1, 'JavaDeveloper', '<p>Постоянно занимаюсь саморазвитием и самообразованием. Имею отличные организаторские и коммуникативные умения.Требователен к себе, стремлюсь стать лучше, могу самостоятельно исправить недочеты в своей работе, умею ставить перед собой цели, задачи и решать их. Меня выделяют такие личные качества, как целеустремленность, добросовестность, трудолюбие и ответственность. По отношению к коллегам проявляю большое уважение, умею убеждать и отстаивать свою точку зрения.Уравновешенный, добрый, отзывчивый,безотказный - вот некоторые эпитеты, которыми характеризуют меня коллеги по работе.</p>', 'высшее', '300000');

-- --------------------------------------------------------

--
-- Структура таблицы `re_session`
--

CREATE TABLE `re_session` (
  `user_id` int(11) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `session_key` varchar(32) DEFAULT NULL,
  `start_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_table`
--

CREATE TABLE `re_table` (
  `table_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_table_frontgrid`
--

CREATE TABLE `re_table_frontgrid` (
  `frontgrid_id` int(11) NOT NULL,
  `topic_id` text DEFAULT NULL,
  `columns` text DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_user`
--

CREATE TABLE `re_user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `login` varchar(255) DEFAULT NULL,
  `pass` text DEFAULT NULL,
  `active` int(10) UNSIGNED DEFAULT 0,
  `reg_date` datetime DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fio` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT '0',
  `group_id` int(11) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `site` varchar(200) DEFAULT NULL,
  `imgfile` varchar(200) DEFAULT NULL,
  `mobile` varchar(200) DEFAULT NULL,
  `icq` varchar(200) DEFAULT NULL,
  `notify` int(11) DEFAULT NULL,
  `auth_hash` varchar(32) DEFAULT NULL,
  `auth_salt` varchar(32) DEFAULT NULL,
  `newpass` varchar(255) DEFAULT NULL,
  `newpass_retype` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `ownuser` int(10) UNSIGNED DEFAULT NULL,
  `description` text DEFAULT NULL,
  `rewards` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_user`
--

INSERT INTO `re_user` (`user_id`, `login`, `pass`, `active`, `reg_date`, `password`, `fio`, `email`, `account`, `group_id`, `company_id`, `phone`, `site`, `imgfile`, `mobile`, `icq`, `notify`, `auth_hash`, `auth_salt`, `newpass`, `newpass_retype`, `firstname`, `lastname`, `ownuser`, `description`, `rewards`) VALUES
(3, 'supporte', '', 1, '2016-01-05 04:29:43', '53635cbd4c231cdc1569dc3e386d12cc', 'Kondin Dmitriy', 'dkondin@gmail.com', '0', 1, 0, '', '', 'usr646ecfb177a79_1684983729.png', '1234234345345', '', 0, '52a738d63a2f8ebb80098e1849c00995', '33b777e68a68985614e5dc0078bdc47b', '', '', '', '', 0, NULL, NULL),
(148, 'testadmin', NULL, 1, '2020-04-27 16:42:43', '70d1575303994f62be307fc9e171efe6', 'Хакер', 'testadmin@etown.ru', '0', 1, NULL, '', NULL, 'usr646ecfc6a6805_1684983750.png', '', NULL, 0, NULL, 'd950b85a74223370716a58e62e60d4cf', NULL, NULL, 'Admin', '', NULL, '', NULL),
(149, 'admin', 'd8398a14ca3ea1cc8136bbe8e24c5114', 1, '2023-05-27 11:22:28', '21232f297a57a5a743894a0e4a801fc3', 'admin', 'admin@etown.ru', '0', 1, NULL, '', NULL, 'usr6471bdb324ed0_1685175731.png', '', NULL, 0, NULL, NULL, NULL, NULL, '', '', NULL, '', NULL),
(150, 'hrmanager', '5c7f290d5e7c2b73d69e58e3bcffdc86', 1, '2023-05-28 05:28:37', 'cc501ce6cd4e21d3fa81134e6e2eed81', 'hrmanager', 'hrmanager@mail.ru', '0', 2, NULL, '', NULL, 'usr6472bc48c9580_1685240904.png', '', NULL, 0, NULL, NULL, NULL, NULL, '', '', NULL, '', NULL),
(151, 'jobseeker', 'd07b815efb5ea99391bc78c8eed31b13', 1, '2023-05-28 05:33:43', '5b22aa4e4721fdbfb44afe2235ff4f2d', 'jobseeker', 'jobseeker@etown.ru', '0', 6, NULL, '', NULL, 'usr6472bd8354411_1685241219.png', '', NULL, 0, NULL, NULL, NULL, NULL, '', '', NULL, '', NULL),
(152, 'mister@etown.ru', 'd22e469f9d07a83a2da611dbc7c7a8ab', 0, '2023-05-28 05:43:17', 'e67c10a4c8fbfc0c400e047bb9a056a1', 'Mister Tester', 'mister@etown.ru', '0', 5, NULL, '', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', NULL, '', NULL),
(153, 'mister1@etown.ru', '803a2d88c4b23e11131e90efbbd7ba3d', 0, '2023-05-28 05:46:30', 'e67c10a4c8fbfc0c400e047bb9a056a1', 'Mister Tester', 'mister1@etown.ru', '0', 5, NULL, '', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', NULL, '', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `re_user_blocked_logins`
--

CREATE TABLE `re_user_blocked_logins` (
  `login` varchar(255) NOT NULL,
  `blocked_to` datetime NOT NULL,
  `try_count` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `re_vacancy`
--

CREATE TABLE `re_vacancy` (
  `vacancy_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT '',
  `city_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `client_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status_id` varchar(255) DEFAULT '',
  `employment` text DEFAULT NULL,
  `experience` text DEFAULT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `re_vacancy`
--

INSERT INTO `re_vacancy` (`vacancy_id`, `title`, `city_id`, `client_id`, `status_id`, `employment`, `experience`, `created_at`) VALUES
(1, 'Фронтенд-разработчик', 1, 20, 'open', 'fulltime', '1 год', '2023-05-07 11:35:52'),
(2, 'Бэкенд-разработчик', 2, 20, 'open', 'fulltime', '3-6 лет', '2023-05-11 11:35:37'),
(3, 'Тестировщик', 1, 21, 'open', 'fulltime', '1 год', '2023-05-14 11:35:15'),
(4, 'UI/UX Дизайнер', 1, 21, 'open', 'parttime', 'без опыта', '2023-05-02 11:34:05'),
(5, 'Тех-лид фронтенд', 1, 22, 'open', 'fulltime', '3-6 лет', '2023-05-25 11:32:46'),
(7, 'Менеджер проектов', 2, 21, 'open', 'fulltime', '1 год', '2023-05-03 11:31:55'),
(9, 'Тестировщик', 1, 20, 'inprogress', 'fulltime', '3-6 лет', '2023-04-21 11:30:10'),
(10, 'Фронтент-разработчик', 2, 22, 'open', 'fulltime', '1 год', '2023-03-22 11:29:43'),
(11, 'Бэкенд-разработчик', 1, 22, 'open', 'fulltime', '3 года', '2023-05-27 11:28:00'),
(12, 'Тестировщик', 1, 20, 'open', 'parttime', '1.5 года', '2023-05-13 11:29:53'),
(13, 'Аналитик данных', 2, 20, 'open', 'fulltime', '1 год', '2023-05-27 14:58:50');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `re_apps`
--
ALTER TABLE `re_apps`
  ADD PRIMARY KEY (`apps_id`);

--
-- Индексы таблицы `re_city`
--
ALTER TABLE `re_city`
  ADD PRIMARY KEY (`city_id`);

--
-- Индексы таблицы `re_client`
--
ALTER TABLE `re_client`
  ADD PRIMARY KEY (`client_id`);

--
-- Индексы таблицы `re_columns`
--
ALTER TABLE `re_columns`
  ADD PRIMARY KEY (`columns_id`),
  ADD UNIQUE KEY `column_table` (`table_id`,`name`);

--
-- Индексы таблицы `re_comment`
--
ALTER TABLE `re_comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- Индексы таблицы `re_company`
--
ALTER TABLE `re_company`
  ADD PRIMARY KEY (`company_id`);

--
-- Индексы таблицы `re_component`
--
ALTER TABLE `re_component`
  ADD PRIMARY KEY (`component_id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `component_name_idx` (`name`);

--
-- Индексы таблицы `re_component_function`
--
ALTER TABLE `re_component_function`
  ADD PRIMARY KEY (`component_function_id`),
  ADD UNIQUE KEY `cf_key_idx` (`component_id`,`function_id`),
  ADD UNIQUE KEY `cf_idx` (`component_id`,`function_id`);

--
-- Индексы таблицы `re_config`
--
ALTER TABLE `re_config`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `config_key_idx` (`config_key`);

--
-- Индексы таблицы `re_customentity`
--
ALTER TABLE `re_customentity`
  ADD PRIMARY KEY (`entity_name`);

--
-- Индексы таблицы `re_dna`
--
ALTER TABLE `re_dna`
  ADD UNIQUE KEY `dna_key_idx` (`group_id`,`component_id`,`function_id`);

--
-- Индексы таблицы `re_function`
--
ALTER TABLE `re_function`
  ADD PRIMARY KEY (`function_id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `function_name_idx` (`name`);

--
-- Индексы таблицы `re_group`
--
ALTER TABLE `re_group`
  ADD PRIMARY KEY (`group_id`),
  ADD UNIQUE KEY `system_name` (`system_name`);

--
-- Индексы таблицы `re_mailbox`
--
ALTER TABLE `re_mailbox`
  ADD PRIMARY KEY (`mailbox_id`);

--
-- Индексы таблицы `re_memorylist`
--
ALTER TABLE `re_memorylist`
  ADD PRIMARY KEY (`memorylist_id`);

--
-- Индексы таблицы `re_memorylist_item`
--
ALTER TABLE `re_memorylist_item`
  ADD UNIQUE KEY `memorylist_id` (`memorylist_id`,`id`);

--
-- Индексы таблицы `re_multiple_field`
--
ALTER TABLE `re_multiple_field`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `main_index` (`table_name`,`field_name`,`primary_id`,`field_value`);

--
-- Индексы таблицы `re_oauth`
--
ALTER TABLE `re_oauth`
  ADD PRIMARY KEY (`oauth_id`);

--
-- Индексы таблицы `re_password_recovery`
--
ALTER TABLE `re_password_recovery`
  ADD PRIMARY KEY (`pr_id`);

--
-- Индексы таблицы `re_resume`
--
ALTER TABLE `re_resume`
  ADD PRIMARY KEY (`resume_id`);

--
-- Индексы таблицы `re_table`
--
ALTER TABLE `re_table`
  ADD PRIMARY KEY (`table_id`),
  ADD UNIQUE KEY `table_name` (`name`);

--
-- Индексы таблицы `re_table_frontgrid`
--
ALTER TABLE `re_table_frontgrid`
  ADD PRIMARY KEY (`frontgrid_id`);

--
-- Индексы таблицы `re_user`
--
ALTER TABLE `re_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `re_user_blocked_logins`
--
ALTER TABLE `re_user_blocked_logins`
  ADD UNIQUE KEY `login` (`login`);

--
-- Индексы таблицы `re_vacancy`
--
ALTER TABLE `re_vacancy`
  ADD PRIMARY KEY (`vacancy_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `re_apps`
--
ALTER TABLE `re_apps`
  MODIFY `apps_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_city`
--
ALTER TABLE `re_city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `re_client`
--
ALTER TABLE `re_client`
  MODIFY `client_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `re_columns`
--
ALTER TABLE `re_columns`
  MODIFY `columns_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_comment`
--
ALTER TABLE `re_comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `re_company`
--
ALTER TABLE `re_company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_component`
--
ALTER TABLE `re_component`
  MODIFY `component_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_component_function`
--
ALTER TABLE `re_component_function`
  MODIFY `component_function_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_config`
--
ALTER TABLE `re_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_function`
--
ALTER TABLE `re_function`
  MODIFY `function_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `re_group`
--
ALTER TABLE `re_group`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `re_mailbox`
--
ALTER TABLE `re_mailbox`
  MODIFY `mailbox_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_memorylist`
--
ALTER TABLE `re_memorylist`
  MODIFY `memorylist_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_multiple_field`
--
ALTER TABLE `re_multiple_field`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_oauth`
--
ALTER TABLE `re_oauth`
  MODIFY `oauth_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_password_recovery`
--
ALTER TABLE `re_password_recovery`
  MODIFY `pr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `re_resume`
--
ALTER TABLE `re_resume`
  MODIFY `resume_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `re_table`
--
ALTER TABLE `re_table`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_table_frontgrid`
--
ALTER TABLE `re_table_frontgrid`
  MODIFY `frontgrid_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `re_user`
--
ALTER TABLE `re_user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT для таблицы `re_vacancy`
--
ALTER TABLE `re_vacancy`
  MODIFY `vacancy_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
