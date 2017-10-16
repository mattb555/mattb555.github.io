var RegionEnum = {
	NORTHEAST		: 0,
	SOUTHEAST		: 1,
	NORTH_CENTRAL	: 2,
	SOUTH_CENTRAL	: 3,
	PLAINS			: 4,
	NORTHWEST		: 5,
	SOUTHWEST		: 6
};

var CityEnum = {
	ALBANY			: {value: 0, name: "Albany"},
	BALTIMORE		: {value: 1, name: "Baltimore"},
	BOSTON			: {value: 2, name: "Boston"},
	BUFFALO			: {value: 3, name: "Buffalo"},
	NEW_YORK		: {value: 4, name: "New York"},
	PHILADELPHIA	: {value: 5, name: "Philadelphia"},
	PITTSBURGH		: {value: 6, name: "Pittsburgh"},
	PORTLAND_ME		: {value: 7, name: "Portland, ME"},
	WASHINGTON		: {value: 8, name: "Washington"},
	ATLANTA			: {value: 9, name: "Atlanta"},
	CHARLESTON		: {value: 10, name: "Charleston"},
	CHARLOTTE		: {value: 11, name: "Charlotte"},
	CHATTANOOGA		: {value: 12, name: "Chattanooga"},
	JACKSONVILLE	: {value: 13, name: "Jacksonville"},
	KNOXVILLE		: {value: 14, name: "Knoxville"},
	MIAMI			: {value: 15, name: "Miami"},
	MOBILE			: {value: 16, name: "Mobile"},
	NORFOLK			: {value: 17, name: "Norfolk"},
	RICHMOND		: {value: 18, name: "Richmond"},
	TAMPA			: {value: 19, name: "Tampa"},
	CHICAGO			: {value: 20, name: "Chicago"},
	CINCINANTTI		: {value: 21, name: "Cincinatti"},
	CLEVELAND		: {value: 22, name: "Cleveland"},
	COLUMBUS		: {value: 23, name: "Columbus"},
	DETROIT			: {value: 24, name: "Detroit"},
	INDIANAPOLIS	: {value: 25, name: "Indianapolis"},
	MILWAUKEE		: {value: 26, name: "Milwaukee"},
	ST_LOUIS		: {value: 27, name: "St. Louis"},
	BIRMINGHAM		: {value: 28, name: "Birmingham"},
	DALLAS			: {value: 29, name: "Dallas"},
	FORT_WORTH		: {value: 30, name: "Fort Worth"},
	HOUSTON			: {value: 31, name: "Houston"},
	LITTLE_ROCK		: {value: 32, name: "Little Rock"},
	LOUISVILLE		: {value: 33, name: "Louisville"},
	MEMPHIS			: {value: 34, name: "Memphis"},
	NASHVILLE		: {value: 35, name: "Nashville"},
	NEW_ORLEANS		: {value: 36, name: "New Orleans"},
	SAN_ANTONIO		: {value: 37, name: "San Antonio"},
	SHREVEPORT		: {value: 38, name: "Shreveport"},
	DENVER			: {value: 39, name: "Denver"},
	DES_MOINES		: {value: 40, name: "Des Moines"},
	FARGO			: {value: 41, name: "Fargo"},
	KANSAS_CITY		: {value: 42, name: "Kansas City"},
	MINNEAPOLIS		: {value: 43, name: "Minneapolis"},
	OKLAHOMA_CITY	: {value: 44, name: "Oklahoma City"},
	OMAHA			: {value: 45, name: "Omaha"},
	PUEBLO			: {value: 46, name: "Pueblo"},
	ST_PAUL			: {value: 47, name: "St. Paul"},
	BILLINGS		: {value: 48, name: "Billings"},
	BUTTE			: {value: 49, name: "Butte"},
	CASPER			: {value: 50, name: "Casper"},
	POCATELLO		: {value: 51, name: "Pocatello"},
	PORTLAND_OR		: {value: 52, name: "Portland, OR"},
	RAPID_CITY		: {value: 53, name: "Rapid City"},
	SALT_LAKE_CITY	: {value: 54, name: "Salt Lake City"},
	SEATTLE			: {value: 55, name: "Seattle"},
	SPOKANE			: {value: 56, name: "Spokane"},
	EL_PASO			: {value: 57, name: "El Paso"},
	LAS_VEGAS		: {value: 58, name: "Las Vegas"},
	LOS_ANGELES		: {value: 59, name: "Los Angeles"},
	OAKLAND			: {value: 60, name: "Oakland"},
	PHOENIX			: {value: 61, name: "Phoenix"},
	RENO			: {value: 62, name: "Reno"},
	SACRAMENTO		: {value: 63, name: "Sacramento"},
	SAN_DIEGO		: {value: 64, name: "San Diego"},
	SAN_FRANCISCO	: {value: 65, name: "San Francisco"},
	TUCUMCARI		: {value: 66, name: "Tucumcari"},
};

var region = [
				[null, null, RegionEnum.PLAINS, RegionEnum.SOUTHEAST, RegionEnum.SOUTHEAST, RegionEnum.SOUTHEAST, RegionEnum.NORTH_CENTRAL, RegionEnum.NORTH_CENTRAL, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST],
				[null, null, RegionEnum.SOUTHWEST, RegionEnum.SOUTH_CENTRAL, RegionEnum.SOUTH_CENTRAL, RegionEnum.SOUTH_CENTRAL, RegionEnum.SOUTHWEST, RegionEnum.SOUTHWEST, RegionEnum.PLAINS, RegionEnum.NORTHWEST, RegionEnum.NORTHWEST, RegionEnum.PLAINS, RegionEnum.NORTHWEST]
];
			
var city = [
				[
					[null, null, CityEnum.NEW_YORK, CityEnum.NEW_YORK, CityEnum.NEW_YORK, CityEnum.ALBANY, CityEnum.BOSTON, CityEnum.BUFFALO, CityEnum.BOSTON, CityEnum.PORTLAND_ME, CityEnum.NEW_YORK, CityEnum.NEW_YORK, CityEnum.NEW_YORK],
					[null, null, CityEnum.NEW_YORK, CityEnum.WASHINGTON, CityEnum.PITTSBURGH, CityEnum.PITTSBURGH, CityEnum.PHILADELPHIA, CityEnum.WASHINGTON, CityEnum.PHILADELPHIA, CityEnum.BALTIMORE, CityEnum.BALTIMORE, CityEnum.BALTIMORE, CityEnum.NEW_YORK]
				],
				[
					[null, null, CityEnum.CHARLOTTE, CityEnum.CHARLOTTE, CityEnum.CHATTANOOGA, CityEnum.ATLANTA, CityEnum.ATLANTA, CityEnum.ATLANTA, CityEnum.RICHMOND, CityEnum.KNOXVILLE, CityEnum.MOBILE, CityEnum.KNOXVILLE, CityEnum.MOBILE],
					[null, null, CityEnum.NORFOLK, CityEnum.NORFOLK, CityEnum.NORFOLK, CityEnum.CHARLESTON, CityEnum.MIAMI, CityEnum.JACKSONVILLE, CityEnum.MIAMI, CityEnum.TAMPA, CityEnum.TAMPA, CityEnum.MOBILE, CityEnum.NORFOLK]
				],
				[
					[null, null, CityEnum.CLEVELAND, CityEnum.CLEVELAND, CityEnum.CLEVELAND, CityEnum.CLEVELAND, CityEnum.DETROIT, CityEnum.DETROIT, CityEnum.INDIANAPOLIS, CityEnum.MILWAUKEE, CityEnum.MILWAUKEE, CityEnum.CHICAGO, CityEnum.MILWAUKEE],
					[null, null, CityEnum.CINCINANTTI, CityEnum.CHICAGO, CityEnum.CINCINANTTI, CityEnum.CINCINANTTI, CityEnum.COLUMBUS, CityEnum.CHICAGO, CityEnum.CHICAGO, CityEnum.ST_LOUIS, CityEnum.ST_LOUIS, CityEnum.ST_LOUIS, CityEnum.CHICAGO]
				],
				[
					[null, null, CityEnum.MEMPHIS, CityEnum.MEMPHIS, CityEnum.MEMPHIS, CityEnum.LITTLE_ROCK, CityEnum.NEW_ORLEANS, CityEnum.BIRMINGHAM, CityEnum.LOUISVILLE, CityEnum.NASHVILLE, CityEnum.NASHVILLE, CityEnum.LOUISVILLE, CityEnum.MEMPHIS],
					[null, null, CityEnum.SHREVEPORT, CityEnum.SHREVEPORT, CityEnum.DALLAS, CityEnum.NEW_ORLEANS, CityEnum.DALLAS, CityEnum.SAN_ANTONIO, CityEnum.HOUSTON, CityEnum.HOUSTON, CityEnum.FORT_WORTH, CityEnum.FORT_WORTH, CityEnum.FORT_WORTH]
				],
				[
					[null, null, CityEnum.KANSAS_CITY, CityEnum.KANSAS_CITY, CityEnum.DENVER, CityEnum.DENVER, CityEnum.DENVER, CityEnum.KANSAS_CITY, CityEnum.KANSAS_CITY, CityEnum.KANSAS_CITY, CityEnum.PUEBLO, CityEnum.PUEBLO, CityEnum.OKLAHOMA_CITY],
					[null, null, CityEnum.OKLAHOMA_CITY, CityEnum.ST_PAUL, CityEnum.MINNEAPOLIS, CityEnum.ST_PAUL, CityEnum.MINNEAPOLIS, CityEnum.OKLAHOMA_CITY, CityEnum.DES_MOINES, CityEnum.OMAHA, CityEnum.OMAHA, CityEnum.FARGO, CityEnum.FARGO]
				],
				[
					[null, null, CityEnum.SPOKANE, CityEnum.SPOKANE, CityEnum.SEATTLE, CityEnum.SEATTLE, CityEnum.SEATTLE, CityEnum.SEATTLE, CityEnum.RAPID_CITY, CityEnum.CASPER, CityEnum.BILLINGS, CityEnum.BILLINGS, CityEnum.SPOKANE],
					[null, null, CityEnum.SPOKANE, CityEnum.SALT_LAKE_CITY, CityEnum.SALT_LAKE_CITY, CityEnum.SALT_LAKE_CITY, CityEnum.PORTLAND_OR, CityEnum.PORTLAND_OR, CityEnum.PORTLAND_OR, CityEnum.POCATELLO, CityEnum.BUTTE, CityEnum.BUTTE, CityEnum.PORTLAND_OR]
				],
				[
					[null, null, CityEnum.SAN_DIEGO, CityEnum.SAN_DIEGO, CityEnum.RENO, CityEnum.SAN_DIEGO, CityEnum.SACRAMENTO, CityEnum.LAS_VEGAS, CityEnum.PHOENIX, CityEnum.EL_PASO, CityEnum.TUCUMCARI, CityEnum.PHOENIX, CityEnum.PHOENIX],
					[null, null, CityEnum.LOS_ANGELES, CityEnum.OAKLAND, CityEnum.OAKLAND, CityEnum.OAKLAND, CityEnum.LOS_ANGELES, CityEnum.LOS_ANGELES, CityEnum.LOS_ANGELES, CityEnum.SAN_FRANCISCO, CityEnum.SAN_FRANCISCO, CityEnum.SAN_FRANCISCO, CityEnum.SAN_FRANCISCO]
				]
];
			
var payouts = [
				[0],
				[3.5,0],
				[2,4,0],
				[3,4,5,0],
				[1.5,2,2.5,4,0],
				[2.5,1,3,4,1,0],
				[5.5,3.5,6.5,2.5,4.5,3.5,0],
				[3,5.5,1,6,3.5,4.5,8,0],
				[3.5,5,4.5,4.5,2,1.5,3,5.5,0],
				[10,7,11,9.5,8.5,7.5,8,12,6.5,0],
				[9.5,5.5,9.5,9.5,7.5,8,8,11,5,3,0],
				[7.5,4,8.5,8,6,5,6,9.5,4,2.5,2.5,0],
				[10,6.5,11.5,8,8.5,7.5,7,12,6,1.5,4.5,4,0],
				[11,8,12,12,10,9,10.5,13,6,3.5,2.5,4,5,0],
				[8.5,5.5,9.5,7.5,7.5,6.5,6,10.5,5,2,4,2.5,1,5.5,0],
				[15,11.5,16,15.5,13.5,12.5,14,17,11,7,6,7.5,8.5,3,9,0],
				[13.5,10.5,14.5,12,12,11,10.5,14.5,10,3.5,6,6,5,4,5.5,8.5,0],
				[6,2.5,7,6.5,4.5,3.5,5,8,2.5,5.5,4.5,4,6.5,6,5.5,9.5,9.5,0],
				[5,1.5,5.5,5.5,3.5,2.5,4,7,1,6,4,3.5,6,6.5,5,10,9.5,1,0],
				[13.5,10,14,14,12,11,12.5,15,9.5,5.5,4.5,6,2,2,7,2,6.5,8,8.5,0],
				[8,8,10,5,9,8,4.5,11.5,7.5,7.5,10,8.5,6,11,5.5,14.5,8.5,9.5,8.5,12.5,0],
				[7,6,9.5,4.5,7.5,6.5,3,10.5,5.5,5,7,5.5,3.5,8.5,3,12,7.5,7,6,10,3,0],
				[5,4.5,7,2,5.5,5,1.5,8,4.5,7.5,9.5,6.5,6,11,5.5,14.5,10,6.5,5.5,12.5,3.5,2.5,0],
				[6,5,8,3,6.5,5.5,2,9.5,5,6,8.5,6,4.5,9.5,4,13,8,7,5.5,11.5,3.5,1,1.5,0],
				[5.5,6,7.5,2.5,6.5,6.5,3,8.5,6,7.5,10,8,6,11,5,14.5,10,8,7,12.5,2.5,2.5,1.5,2,0],
				[7.5,7,9.5,4.5,8,7,3.5,10.5,6.5,6,8,6.5,4.5,9.5,4,13,8,8,7,11,2,1,3,1.5,3,0],
				[9,8,11,6,10,9,5.5,12,8.5,8,11,9.5,7,11.5,6.5,15.5,9,10.5,9.5,13.5,1,3.5,4,4,3.5,2.5,0],
				[10,9,12,7,10.5,9.5,6,13,9,6,9,8,4.5,9,5.5,13,6.5,10,9,11,3,3.5,5,4,5,2.5,3.5,0],
				[11,8,12,9,10,9,8,13.5,7.5,1.5,5,4,1.5,4.5,2.5,8,3,7,7.5,6,6.5,5,7.5,6,7.5,5,7.5,5,0],
				[17,14.5,18.5,14,16,15.5,13,19.5,14,8,11.5,11,9,11,9,14.5,6,14,14,12.5,9.5,9.5,12.5,11,12,9.5,10.5,7,6.5,0],
				[17,14.5,19.5,14,16.5,15.5,13,20.5,14,8,11.5,11,9,11,9,14.5,6,14,14,12.5,9.5,9.5,12.5,11,12,9.5,10.5,7,6.5,0.5,0],
				[18.5,15,19.5,15.5,17,16,14.5,20.5,15,8.5,11.5,11,8.5,9.5,9.5,13.5,5,14.5,14.5,11.5,12,12.5,13.5,13,13.5,11,11,9,7,2.5,2.5,0],
				[13.5,11,15,10.5,13,12,9.5,18,10.5,5.5,8.5,8.5,5.5,8,5.5,11.5,5,11,10.5,9.5,6.5,6.5,9,6.5,9,5,7.5,3.5,4,3.5,4,4.5,0],
				[8.5,7,10.5,5.5,8.5,8,4.5,11.5,6.5,4.5,7,5.5,3,8,3,12,5.5,8,7,10,3,1,3.5,2.5,3.5,1,4,2.5,4,8.5,8.5,10,5,0],
				[12.5,9.5,14,9.5,11.5,10.5,8,15,9.5,4,7.5,7,4,7,4,10.5,3.5,9.5,9,8.5,5.5,5,7,6,7.5,5,6,3,2.5,9,9,6,1.5,4,0],
				[10.5,7.5,12,7.5,9.5,8.5,6,13,7,3,6,5,1.5,6.5,2,10,5,8,7,8,4.5,3,5.5,4,5.5,3,5.5,3,2,7,7,8.5,3.5,2,2.5,0],
				[15,11.5,15.5,13,13.5,12.5,11.5,16.5,11,5,7.5,7.5,6.5,6,6,10,1.5,10,10.5,8,9,8.5,11,9.5,11,8.5,10,7,3.5,5,5,3.5,4.5,7.5,4,5.5,0],
				[19.5,17,21,16.5,19,18,15.5,22.5,17,10.5,13.5,13.5,10.5,12,11.5,15.5,7,16,16.5,13.5,12,12.5,14.5,13.5,14,11.5,13,9,9.5,2.5,2.5,2,6,11.5,7.5,10,5.5,0],
				[16,12.5,16.5,14,15.5,13.5,12,18,12,6.5,9.5,9,7,9,8,12.5,4.5,12,12,11,8.5,8.5,11,11.5,10.5,9,8.5,8.5,4.5,2,2,2.5,2,8,4,6.5,3,5,0],
				[18.5,18,20.5,15.5,19.5,18.5,15,21.5,18,15.5,18.5,18,14,18,14.5,22,15,19,18.5,20,10.5,12.5,13.5,13,13,11.5,10.5,9,13.5,8.5,8.5,11,11,12,11,12.5,13.5,11,10,0],
				[12,11.5,14,9,12.5,11.5,8.5,15,11,9.5,13,11.5,8,13,9,16.5,10,13,12,14.5,3.5,6.5,7,7,6.5,5.5,3.5,3.5,8,7.5,7.5,10,7,6,6.5,6.5,10.5,10,8,7,0],
				[14.5,14.5,16.5,11.5,15.5,14.5,11,17.5,14,13.5,16.5,15,12.5,17,12,21,14.5,16,15,19,6.5,9,10,9.5,9,8,5.5,8,13,12.5,12.5,15,12,9.5,11,11,15,15,13,11.5,5,0],
				[12.5,12,14.5,9.5,13.5,12,9,16,11.5,9,12,11,7.5,11.5,8,15.5,8.5,13,12,13.5,4.5,6,8,6.5,7,5,5.5,3,7.5,5,5,8,5,5.5,5,6,8.5,8,5.5,6.5,2,7,0],
				[12.5,12,14,9,13,12,8.5,15.5,11.5,11.5,14,12.5,10,15,9.5,18.5,12.5,13.5,12.5,16.5,4,7,7.5,7.5,6.5,6,3.5,5.5,10.5,10,10,12.5,9.5,7,9,8.5,12.5,12.5,8,9,2.5,2.5,5,0],
				[15.5,14.5,17.5,12.5,16,15,11.5,18.5,14,9,12,11.5,9,12,9,15.5,8,15,14,13.5,8,9,10.5,10,10.5,7.5,8.5,5.5,7.5,2.5,2.5,5,3.5,8.5,5,7.5,7.5,5,10.5,7.5,5.5,10.5,3.5,8,0],
				[13,13,15,10,14,13,9.5,16,12.5,10,13.5,12.5,9,13.5,9.5,17,10.5,14,13.5,15,5,7.5,8.5,8,7.5,6.5,5,4,9,7,7,9.5,7,7,6.5,7.5,10.5,10,7.5,5.5,1.5,6,2,3.5,5.5,0],
				[18.5,18,21,15.5,19.5,18.5,15,22,18,15,18.5,18,14,18,14.5,21.5,14,19,18.5,20,10.5,12.5,13.5,13,13,11.5,11.5,9,13.5,7.5,7.5,10,10,12,11,12.5,13.5,9.5,10,1,7,12.5,6,9.5,7,5.5,0],
				[12,12,14,9,13,12,8.5,15.5,11.5,11.5,14,12.5,10,15,9.5,18.5,12.5,13.5,12.5,16.5,4,7,7.5,7.5,6.6,6,3.5,5.5,10.5,10,10,12.5,9.5,7,9,8.5,12.5,12.5,10.5,9,2.5,2.5,5,0,8,3.5,9.5,0],
				[21,21,23,18,22,21,17.5,24,20.5,19,22.5,21,18,22.5,18.5,26,19,22,21.5,24,13,15.5,16,16,15.5,14.5,12,13,18,15,15,17.5,15.5,16,15.5,16.5,19,17.5,16,6.5,10.5,6.5,10.5,9,14,9,7.5,9,0],
				[23.5,23,25.5,20.5,24,23.5,20,26.5,22.5,21.5,26,17.5,14,24.5,21,28.5,21,25,23.5,26.5,15,18,18.5,18.5,18,17,14.5,15.5,20,17.5,17.5,20,18,18,17.5,18.5,21.5,19.5,18.5,9,14,9,13,11,16.5,11.5,10,11,2.5,0],
				[18,18,20,15,19,18,14.5,21.5,17.5,25.5,19,17.5,14,18.5,14.5,22,15.5,19,18.5,15,10,12.5,13.5,13,12.5,11.5,10,10,14,11.5,11.5,14.5,11.5,12,12,12.5,15.5,14,12.5,3.5,6.5,7.5,7,8,10.5,5,4.5,8,3.5,5.5,0],
				[23.5,23.5,25.5,20.5,24.5,23.5,20,27,23,21,24,23,21.5,23.5,20.5,27.5,22.5,24.5,24,25.5,15,18,19,18.5,18,17,15.5,14.5,20.5,15,15,17.5,16,17.5,17,19,18.5,17.5,15.5,6,12,13.5,12.5,13.5,12.5,10.5,7.5,13.5,5,2.5,7.5,0],
				[30,30.5,32,27,31,30,26.5,33.5,30,28,31,30.5,26.5,31.5,27.5,35,28.5,32,31,33,22,24.5,25.5,25.5,25,24.5,21.5,22,26.5,22.5,22.5,25,24.5,24.5,25,25,27.5,25,24,13.5,19,16,19.5,18,21.5,17.5,14.5,18,9.5,7,13,7,0],
				[17,17,20.5,14,18,17,13.5,21.5,18,16,19,18,14.5,19,15,22.5,16,19.5,19,20.5,9,12,12.5,13.5,13,11,9,9.5,14.5,12.5,12.5,15.5,12.5,12.5,12.5,13,15.5,15,13,5.5,7,4.5,7.5,5,9,5.5,6.5,5,5,7.5,3,10,14.5,0],
				[23.5,23,25.5,20.5,24,23.5,20,26.5,23,20.5,23.5,22.5,20.5,23.5,20,27,19.5,24.5,23.5,25,15,18,18.5,18,18,17,15,14.5,19,13.5,13.5,16,16,17,16.5,19,18.5,16,15,5.5,11.5,13,12,13.5,12.5,10.5,6.5,13.5,6.5,4.5,7.5,1.5,9,9.5,0],
				[31.5,29.5,31.5,26.5,30.5,29.5,26,32.5,29,28,31.5,30,27,31.5,27,35,28,31,30,33,21.5,24,25,25,24,23,21,22,27,24,24,26.5,26.5,25,24.5,25.5,29,26.5,26,15.5,19.5,15,19.5,17.5,23,18,16,17.5,9,6.5,12.5,9,2,14,10.5,0],
				[26.5,26.5,28.5,23.5,27.5,26.5,23,29.5,26,28,28,27,18.5,28,24,32,25,28,27,30,18.5,21,21.5,21.5,21,20,18,19,24,21,21,23.5,23,22,21.5,22.5,26,23.5,22.5,12.5,16.5,12,16.5,14.5,20,15,13,14.5,6,3.5,9,6,3.5,11,8,3,0],
				[22,21,24,19,23,22,18.5,25.5,20.5,14.5,19,17.5,15.5,17.5,15.5,21.5,13,21,20.5,19.5,14,15.5,17.5,17,16.5,15,14.5,12,13,6.5,6.5,8.5,10,15,11.5,13.5,11.5,16,8.5,7.5,11.5,16.5,9.5,14,7,11.5,6,14,14,16,9.5,13.5,20,13,12.5,22,20,0],
				[28,27.5,30,25,28,28,24.5,26,27.5,23,26.5,26,24,26,24.5,30,21.5,29,28,28.5,19.5,22.5,23,22.5,22.5,21.5,19.5,19,23.5,16,16,17,19,21.5,21,22,20,14.5,17,10,16,17.5,16.5,18,15.5,15,11,18,11,9,12,6,13.5,14,4.5,15,17,13,0],
				[30.5,29,32.5,27.5,31,30,26.5,33.5,29,24,26,25.5,23.5,26,23.5,29.5,21,29.5,28.5,27.5,22.5,23.5,25.5,24,25,22.5,22.5,20.5,21,14.5,14.5,16.5,18.5,23,19.5,22,19.5,14.5,16.5,13.5,19.5,21,17.5,21.5,15,18,13.5,21.5,14.5,12,15,9,12,17.5,8,13.5,15.5,8,3,0],
				[31,30.5,33,28,31.5,31,27.5,34,30.5,27,30.5,30,27,30,27,33.5,26,32,31,31.5,22.5,25.5,26,26.5,25.5,24.5,22.5,22,25.5,19.5,19.5,21,21.5,24.5,23,25.5,24.5,19,21.5,13.5,19,20.5,19.5,21,18,17.5,14,21,14,12,15,9,7,17.5,8,9,11,13,6.5,4.5,0],
				[27.5,27,29.5,24.5,28,27,23.5,30.5,26.5,19,22.5,24,19,22,21.5,26,17.5,26.5,26.5,24,19.5,21,22.5,21.5,22,20,19.5,18,17.5,11,11,13,16,22.5,17.5,19.5,16,10.5,13,10.5,17,22,15,19.5,12.5,16,9.5,19.5,19,16.5,14,14,16,16,12,18,20,4.5,7.5,4.5,9,0],
				[25.5,28.5,30.5,25.5,29.5,28.5,25,31.5,28,26,29.5,27.5,24.5,27.5,25,33,25,28.5,28,31,20,23,23.5,23.5,23,22,20.5,20.5,23,19,19,22,21.5,22.5,20.5,23,22,20,21,11.5,17,15,17.5,19,16,15.5,12,19,12,9.5,12.5,7,7.5,15.5,5.5,9.5,11,10.5,8,6,2.5,10.5,0],
				[27,30,32,27,31,30,26.5,33.5,29.5,27,31,29,26,29,26.5,33.5,26,31,30.5,31.5,22,24.5,25,25,24.5,23.5,22,21,24,19.5,19.5,21,21.5,24,22,24.5,23.5,19,21.5,13,18,20,19,20.5,17.5,17,13.5,20.5,13.5,11,14,8.5,6.5,17,7,8.5,10,12,6.5,5,1,9,1.5,0],
				[31.5,28.5,32.5,27,30.5,29.5,26,33.5,28.5,22.5,26,25.5,23.5,25.5,23.5,29,21,28,28.5,27,22,23.5,25,24,24.5,22.5,23,20,21,14.5,14.5,16,18,22.5,19,21.5,19.5,17,16.5,14.5,20.5,22,17.5,22.5,14.5,19,13.5,22.5,15.5,13,16.5,11,13,18.5,9,15,17,8,4.5,1.5,6,4,8.5,6.5,0],
				[31,30.5,33,28,31.5,31,27.5,34,30.5,27,30.5,30,27,30,27,33.5,26,32,31,31.5,22.5,25.5,26,26.5,25.5,24.5,22.5,22,25.5,19.5,19.5,21,21.5,24.5,23,25.5,24.5,19,21.5,13.5,19,20.5,19.5,21,18,17.5,14,21,14,12,15,9,7,17.5,8,9,11,13,6.5,4.5,0,9,2.5,1,6,0],
				[18.5,18.5,21,16.5,20,19,15.5,22,18,13,16,15.5,13,16,13,19.5,11.5,18.5,18,17.5,11,12.5,14.5,14,14,11.5,11,9.5,11.5,5,5,8,7.5,12,8.5,11,10,7,6.5,4.5,9,14,6.5,11.5,4,8.5,3.5,11,11,13.5,8,11,18.5,11,9.5,20.5,17.5,3.5,9.5,11.5,14.5,8.5,15.5,14.5,11,14.5,0]
];

// Sourced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getValue(name) {
	for (var i in CityEnum) {
		if (CityEnum[i].name === name) {
			return CityEnum[i].value;
		}
	}
}

function getLocations() {
	var cities = [];
	for (var i in CityEnum) {
		cities.push(CityEnum[i].name);
	}
	cities = cities.sort();
	var clist = document.getElementById('StartList');
	var clist2 = document.getElementById('EndList');
	var optioned;
	optioned = document.createElement('option');
	optioned.innerHTML = "Random";
	clist2.appendChild(optioned);
	for (var i = 0; i < cities.length; i++) {
		optioned = document.createElement('option');
		optioned.innerHTML = cities[i];
		optioned.value = getValue(cities[i]);
		clist.appendChild(optioned);
		optioned = document.createElement('option');
		optioned.innerHTML = cities[i];
		optioned.value = getValue(cities[i]);
		clist2.appendChild(optioned);
	}
}

function rollRandomCity() {
	var redDie = getRandomInt(0, 2);
	var whiteDie1 = getRandomInt(1, 7);
	var whiteDie2 = getRandomInt(1, 7);
	var regionSelected = region[redDie][whiteDie1 + whiteDie2];
	redDie = getRandomInt(0, 2);
	whiteDie1 = getRandomInt(1, 7);
	whiteDie2 = getRandomInt(1, 7);
	return city[regionSelected][redDie][whiteDie1 + whiteDie2];
}

function randomDestination() {
	var citySelected = rollRandomCity();
	$( "#Dest" ).html("You are traveling from " + $( "#StartList option:selected" ).text() + " to " + citySelected.name);
	$( "#Pay" ).html("Your payout is $" + getPayout(getValue($( "#StartList option:selected" ).text()), citySelected.value));
}

function getPayout(city1, city2) {
	if (city1 < city2) {
		var temp = city1;
		city1 = city2;
		city2 = temp;
	}
	return payouts[city1][city2] * 1000;
}

function fixedStart() {
	var end = $( "#EndList option:selected" ).text();
	if (end === "Random") {
		randomDestination();
	} else {
		$( "#Dest" ).html("You are traveling from " + $( "#StartList option:selected" ).text() + " to " + end);
		$( "#Pay" ).html("Your payout is $" + getPayout(getValue($( "#StartList option:selected" ).text()), getValue(end)));
	}
}

function setUpCalc() {
	getLocations();
    document.getElementById('NewDest').onclick = randomDestination;
	document.getElementById('SetFeatures').onclick = fixedStart;
}

function updateNext(cities, travelid, payoutid) {
	cities[0] = cities[1];
	cities[1] = rollRandomCity();
	$( travelid ).text("You are traveling from " + cities[0].name + " to " + cities[1].name);
	$( payoutid ).text("Your payout is $" + getPayout(cities[0].value, cities[1].value));
	
}

function goButton() {
	if ($( "#Initial option:selected ").text() === "Calculator") {
		setUpCalc();
		$( "#Calc" ).removeAttr("hidden");
		$( "#SetFeatures" ).removeAttr("hidden");
		$( "#NewDest" ).removeAttr("hidden");
	} else {
		var cities = [null];
		for (var i = 1; i <= parseInt($( "#Initial option:selected ").text()); i++) {
			var home = rollRandomCity();
			cities.push([home, rollRandomCity()]);
			var newPar = $( "<p>", {
				class: "player"
			});
			newPar.append($('<br/>'));
			newPar.append(colorSelect());
			newPar.append($('<input>', {
				type: "text"
			}));
			newPar.append($('<p>', {
				text: "Your home city is " + cities[i][0].name
			}));
			newPar.append($('<p>', {
				id: "City" + i,
				text: "You are traveling from " + cities[i][0].name + " to " + cities[i][1].name
			}));
			newPar.append($('<p>', {
				id: "Payout" + i,
				text: "Your payout is $" + getPayout(cities[i][0].value, cities[i][1].value)
			}));
			newPar.append($('<button>', {
				text: "Next",
				id: "Next" + i,
				value: i
			}));
			newPar.append($('<br/>'));
			newPar.append($('<br/>'));
			$( "#Body" ).append(newPar);
			$( "#Next" + i ).click(function() {	var clicked = $(this).val();
												updateNext(cities[clicked], "#City" + clicked, "#Payout" + clicked);});
		}
	}
	$( "#Start" ).attr("hidden", true);
	$( "#Initial" ).attr("hidden", true);
	$( "#Go" ).attr("hidden", true);
	
}

function railSetUp() {
	for (var i = 3; i <= 6; i++) {
		$( "#Initial" ).append($('<option>', {
			text: i}));
	}
	$( "#Initial").append($('<option>', {
		text: "Calculator"}));
	$( "#Go" ).click(goButton);
}

function colorSelect() {
	var $colorMe = $( "<select>", {
		class: "colors"
	});
	$colorMe.append($("<option>", {
		class: "white"
	}));
	$colorMe.append($("<option>", {
		class: "black"
	}));
	$colorMe.append($("<option>", {
		class: "red"
	}));
	$colorMe.append($("<option>", {
		class: "green"
	}));
	$colorMe.append($("<option>", {
		class: "yellow"
	}));
	$colorMe.append($("<option>", {
		class: "blue"
	}));
	$colorMe.change(function() {
		$colorMe.css("background-color", $colorMe.find(":selected").css("background-color"));
	});
	return $colorMe;
}
window.onload = function() {
	railSetUp();
	setUp();
}