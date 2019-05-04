// create_data_activity_management = "CREATE TABLE IF NOT EXISTS `data_activity_management` (\
//   `id` bigint(20),\
//   `location_variety_code` varchar(20),\
//   `activity_number` int(2),\
//   `activity` varchar(30),\
//   `inspection` int(3),\
//   `dap_min` int(5),\
//   `dap_max` int(5),\
//   `with` mediumtext,\
//   `pic` mediumtext,\
//   `recommendation` mediumtext,\
//   `status` varchar(1)\
// )";

// db.transaction(function (tx) { 
//   tx.executeSql(create_data_activity_management, [], null, onError);
// });