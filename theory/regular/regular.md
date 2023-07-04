


// Работа с регулярными выр-ми:


let str = '_Hello, my name is Pike Mike Nike! Your age 20? I am 27 old. abcdefghijkl';
----------------------------------------------------------------
command   		description						    			example					 result       description
# \n  				--> перенос строки
# .   				--> любой символ короме \n    `/Nike./   			 ('Nike!')`
# \   				--> экраницация  							`/Nike\./        (none)`
# \d  				--> класс(number[0-9])  			`/\d\d/ 				 ('20')` 
# \D  				--> класс(not a number)  			`/\D\D/  				 ('He')` 
# \s  				--> пробел  									`/\d\d\s/ 			 ('27 ')` 
# \S  				--> непробел  								`/\d\d\S/ 			 ('20?')`
# \w  				--> слово  									  `/\s\w\w\s/ 		 (' 27 ')`     w - number, English words, '_'
.																						`/\w\w\w\w/		   ('Hello')`
.                                   				`/\w/   				 ('_')` 			
# \W   				--> неСлово  									`/\W/ 		    	 (',')`    		 W - notAnumber, notEnglishWords, not'_'
# [abc]				--> набор											`/[NM]ike/       ('Mike')` 
# [^abc]			--> исключение набора					`/[^NM]ike/      ('Pike')`
# [a-z]				--> диапазон									`/[x-z]/g/       ('y')`
# [^a-z]			--> диапазон исключений 			`/[x-z]/g/       ('y')`
# {...}	      --> указ-ет нужное кол-во     `/[\s{2,}]/      `


лайфхак команды:

# /([а-я]+)/uig --> ищет все русский слова  любом регистре