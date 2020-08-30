const birdsData = [
    [
        {
            id: 1,
            name: 'Бермудский тайфунник',
            species: 'Pterodroma cahow',
            description: 'Эта ночная гнездящаяся на земле морская птица — национальная птица Бермудских островов, а также символ надежды на защиту природы. Его драматическое «переоткрытие» (Эффект Лазаря), то есть открытие вида после того, как он считался вымершим столетия, вдохновило документалистов.',
            image: 'https://live.staticflickr.com/4005/4653667719_a63414e73d_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HMOLITLUKC/XC555372-PETB.mp3'
        },
        {
            id: 2,
            name: 'Агуйя',
            species: 'Geranoaetus melanoleucus',
            description: 'Агуйя или чилийский сарыч (канюк) населяет равнинные и горные местности Южной Америки, особо многочисленная популяция обитает в Чили, отчего хищная птица и получила свое второе название.',
            image: 'https://live.staticflickr.com/1757/42061798774_8ccacf2c33_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FNIJCVBZDP/XC569827-Aguila%20%28online-audio-converter.com%29.mp3'
        },
        {
            id: 3,
            name: 'Зарянка',
            species: 'Erithacus rubecula',
            description: 'Зарянки окрашены сверху в серо - зеленоватый цвет.У этой птицы белое брюшко, рыжие лоб, горло, грудь и бока головы.Птица относительно длинноногая. ',
            image: 'https://live.staticflickr.com/65535/49146390548_78dd899ae6_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC573287-Erihacus%20rubecula_2020.07.03_09.29_01.MP3'
        },
        {
            id: 4,
            name: 'Обыкновенная чечётка',
            species: 'Acanthis flammea',
            description: 'Общей окраской оперения похожа на коноплянку, но в отличие от последней не имеет участков белого цвета на крыльях и хвосте, обладает тёмным «подбородком».',
            image: 'https://live.staticflickr.com/65535/49664634068_cebd71a8c6_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNHUUXHXZS/XC574295-carmea_202007_07_08_yom_0241.mp3'
        },
        {
            id: 5,
            name: 'Горихвостка',
            species: 'Phoenicurus phoenicurus',
            description: 'Горихвостка получила название за ярко-красную окраску хвоста и надхвостья - задняя часть тела как бы объята пламенем предзакатного солнца.',
            image: 'https://live.staticflickr.com/65535/50051067798_ea95973043_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDXDGURYIO/XC571312-Codirosso%20comune%2024.6.2020.mp3'
        },
        {
            id: 6,
            name: 'Хохлатая база',
            species: 'Aviceda subcristata',
            description: 'На опушках тропических лесов Новой Гвинеи и Австралии можно увидеть пестро окрашенных птиц. Англичане и американцы называют этих птиц «кукушко-соколами».',
            image: 'https://live.staticflickr.com/65535/49433215022_43a01bb4a6_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OHGEFOWNMD/XC570409-Pacific%20Baza%2009_18_25.mp3'
        },

    ],
    [
        {
            id: 1,
            name: 'Белобровник',
            species: 'Turdus iliacus',
            description: 'Белобровник - самый мелкий представитель дроздов. Отличительная черта - широкие белые полоски над глазами, откуда и произошло название.',
            image: 'https://live.staticflickr.com/65535/49488724101_aee4708ba3_b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC488198-2018-07-31%20Myvatn%20180731%20Grive%20mauvis%20coburni%20type%20merle.mp3'
        },
        {
            id: 2,
            name: 'Сорока',
            species: 'Pica pica',
            description: 'Голова, шея, грудь и спина чёрные с фиолетовым или синевато-зелёным металлическим отливом, живот и плечи белые.',
            image: 'https://live.staticflickr.com/7175/27183869626_951f3314be_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/AGCYXCXXSH/XC575906-pica%20pica%2012%201.mp3'
        },
        {
            id: 3,
            name: 'Дрозд-деряба',
            species: 'Turdus viscivorus',
            description: 'Наиболее крупный из европейских видов дроздов, окраской напоминает певчего дрозда, отличается от последнего более длинным хвостом, пятнистым брюшком, белым исподом крыла.',
            image: 'https://live.staticflickr.com/65535/50113085492_4f583962ac_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZGQBFCIWJI/XC563116-Misteldrossel%20Alarmruf.mp3'
        },
        {
            id: 4,
            name: 'Рыжеухий бульбуль',
            species: 'Microscelis amaurotis',
            description: 'Название птицы происходит от звукоподражания ее песне. В арабском и персидском языках словом «бюльбюль» называют соловья и других сладкоголосых птиц.',
            image: 'https://live.staticflickr.com/65535/49716357082_34500cdcf3_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YRDADNREOP/XC472445-Anabacerthia_amaurotis-1586519.mp3'
        },
        {
            id: 5,
            name: 'Певчий дрозд',
            species: 'Turdus philomelos',
            description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
            image: 'https://live.staticflickr.com/65535/49945370673_92780c16e1_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
        },
        {
            id: 6,
            name: 'Горихвостка',
            species: 'Phoenicurus phoenicurus',
            description: 'Горихвостка получила название за ярко-красную окраску хвоста и надхвостья - задняя часть тела как бы объята пламенем предзакатного солнца.',
            image: 'https://live.staticflickr.com/65535/50051067798_ea95973043_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDXDGURYIO/XC571312-Codirosso%20comune%2024.6.2020.mp3'
        },
    ],
    [

        {
            id: 1,
            name: 'Зелёный дятел',
            species: 'Picus viridis',
            description: 'Крупнее седого дятла, оперение жёлто-зелёное, с красной «шапочкой» и красными в чёрной обводке «усами» книзу от глаз. Хвост жёсткий. Лапа типичная для дятлов, зигодактильная (два пальца направлены вперёд, а два назад).',
            image: 'https://live.staticflickr.com/4888/44485509640_359e29e514_n.jpg',
            audio: '//www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC575581-2020.07.13_10.06_01.MP3'
        },

        {
            id: 2,
            name: 'Обыкновенная чечётка',
            species: 'Acanthis flammea',
            description: 'Общей окраской оперения похожа на коноплянку, но в отличие от последней не имеет участков белого цвета на крыльях и хвосте, обладает тёмным «подбородком».',
            image: 'https://live.staticflickr.com/65535/49664634068_cebd71a8c6_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNHUUXHXZS/XC574295-carmea_202007_07_08_yom_0241.mp3'
        },
        {
            id: 3,
            name: 'Удод',
            species: 'Upupa epops',
            description: 'Удод — небольшая ярко окрашенная птица с длинным узким клювом и хохолком, иногда раскрываемым в виде веера. Широко распространён в южных и центральных областях Европы и Азии, а также почти на всей территории Африки.',
            image: 'https://live.staticflickr.com/65535/50073387617_cd1b5a145a_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
        },
        {
            id: 4,
            name: 'Обыкновенный свиристель',
            species: 'Bombycilla garrulus',
            description: 'Легко узнаваемая птица среднего размера, с хохолком на голове. Как правило, встречается группами, порой тысячными стаями. Общий тон оперения розовато-серый, с более оливковым верхом. На крыльях разноцветные пятна и полоски: чёрные, белые, жёлтые, а на концах второстепенных маховых перьев красные бляшки.',
            image: 'https://live.staticflickr.com/65535/50073387617_cd1b5a145a_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SNRCANJSRX/XC548843-Bombycilla%20garrulus%20calls%20flock%20%20t%20o%20Filborna%20200418%20b%20NR.mp3'
        },
        {
            id: 5,
            name: 'Клёст',
            species: 'Loxia curvirostra',
            description: 'Характеризуется мощным клювом с перекрещивающимися кончиками и питанием семенами ели и других хвойных деревьев.',
            image: 'https://live.staticflickr.com/65535/48394009952_3832810897_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
        },
        {
            id: 6,
            name: 'Обыкновенный снегирь',
            species: 'Pyrrhula pyrrhula',
            description: 'Довольно крупный представитель семейства с ярко выраженным половым диморфизмом: у самца низ тела, «щёки» и шея с боков красноватые, у самки же эти части окрашены в серо-винный цвет.',
            image: 'https://live.staticflickr.com/4723/39631776601_50f9802f64_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HVLWWLJFGV/XC574303-Bouvreuil%20pivoine%20cri%20poligny.mp3'
        },
    ],
    [
        {
            id: 1,
            name: 'Зарянка',
            species: 'Erithacus rubecula',
            description: 'Зарянки окрашены сверху в серо - зеленоватый цвет.У этой птицы белое брюшко, рыжие лоб, горло, грудь и бока головы.Птица относительно длинноногая. ',
            image: 'https://live.staticflickr.com/65535/49146390548_78dd899ae6_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC573287-Erihacus%20rubecula_2020.07.03_09.29_01.MP3'
        },
        {
            id: 2,
            name: 'Щегол',
            species: 'Carduelis carduelis',
            description: 'Эту птицу природа одарила ярким оперением. Передняя часть головы ярко-красного цвета, темя и затылок чёрные, щёки белые, крылья желтоватые, с чёрными и белыми крапинками по заднему краю.',
            image: 'https://live.staticflickr.com/65535/49662756038_8d576824e2_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
        },
        {
            id: 3,
            name: 'Иволга',
            species: 'Oriolus oriolus',
            description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
            image: 'https://live.staticflickr.com/65535/50083805337_943814f8fb_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
        },
        {
            id: 4,
            name: 'Чечевица',
            species: 'Carpodacus Erythrinus',
            description: 'Нижняя часть туловища розовато-белые, подмышечные впадины и подхвостье – белые. На нижней части шеи и части спины перья буро-красные со светлыми каемками. ',
            image: 'https://live.staticflickr.com/65535/48028809942_f1f5c302de_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/LHKLVTXBWH/XC575827-Ciuffolotto%20scarlatto%2000%2C55%20Sergio.mp3'
        },
        {
            id: 5,
            name: 'Скворец',
            species: 'Sturnus vulgaris',
            description: 'Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
            image: 'https://live.staticflickr.com/4259/35188431630_435b0f9bab_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
        },
        {
            id: 6,
            name: 'Амадина',
            species: 'Lonchura',
            description: 'Окраска у самцов и самок одинаковая, единственная возможность определить пол птицы – это анализы. Впрочем, если понаблюдать, можно заметить, что песня самца очень отличается от песни самки. Самец исполняет песню, распушив перья и слегка подпрыгивая на одном месте.',
            image: 'https://live.staticflickr.com/3752/9702822017_e4579b64b9_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TSMVYZCIWC/XC453157-gew%20frette.mp3'
        },
    ],
    [
        {
            id: 1,
            name: 'Агуйя',
            species: 'Geranoaetus melanoleucus',
            description: 'Агуйя или чилийский сарыч (канюк) населяет равнинные и горные местности Южной Америки, особо многочисленная популяция обитает в Чили, отчего хищная птица и получила свое второе название.',
            image: 'https://live.staticflickr.com/1757/42061798774_8ccacf2c33_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FNIJCVBZDP/XC569827-Aguila%20%28online-audio-converter.com%29.mp3'
        },
        {
            id: 2,
            name: 'Ястреб-тетеревятник',
            species: 'Accipiter gentilis',
            description: 'Все ястребы, включая и ястреба-тетеревятника, имеют характерные белые полосы перьев над глазами, что создаёт впечатление белых бровей. У ястреба-тетеревятника они более широкие и длинные, чем у других представителей рода, и почти сходятся на затылке. Цвет глаз у взрослых особей красный или красно-коричневый, у молодых особей ярко-жёлтый.',
            image: 'https://live.staticflickr.com/65535/49846705406_5cf4848b9c_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
        },
        {
            id: 3,
            name: 'Алет',
            species: 'Falco eleonorae',
            description: 'Гнездятся алеты на прибрежных скалах многочисленных островов Средиземного моря. Птенцы появляются ранней осенью, именно в это время идет интенсивный перелет из северных краев миллионов певчих птичек, на которых алеты устраивают коллективные охоты.',
            image: 'https://live.staticflickr.com/65535/48378515871_f5d5a8e089_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HEYJSRUDZZ/XC329984-Eleonoras%20Falcon_20160725_195049_prepared.mp3'
        },
        {
            id: 4,
            name: 'Коршун',
            species: 'Milvus migrans',
            description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
            image: 'https://live.staticflickr.com/65535/49212447691_d24a58c34c_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
        },
        {
            id: 5,
            name: 'Лунь',
            species: 'Circus cyaneus',
            description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
            image: 'https://live.staticflickr.com/65535/49483073828_d2c0042745_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
        },
        {
            id: 6,
            name: 'Хохлатая база',
            species: 'Aviceda subcristata',
            description: 'На опушках тропических лесов Новой Гвинеи и Австралии можно увидеть пестро окрашенных птиц. Англичане и американцы называют этих птиц «кукушко-соколами».',
            image: 'https://live.staticflickr.com/65535/49433215022_43a01bb4a6_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OHGEFOWNMD/XC570409-Pacific%20Baza%2009_18_25.mp3'
        },
    ],
    [
        {
            id: 1,
            name: 'Пеликан',
            species: 'Pelecanus',
            description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
            image: 'https://live.staticflickr.com/65535/49606450596_a7ec934ede_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
        },
        {
            id: 2,
            name: 'Полярная крачка',
            species: 'Sterna paradisaea',
            description: 'Белого цвета, с чёрной шапочкой и серой мантильей, хвост вилочковый, сильно вырезанный. Весной и летом клюв становится красным.',
            image: 'https://live.staticflickr.com/7098/7345472640_d8159c4962_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BBJSEFYVPV/XC585180-Terns%20aug%2027%202303.mp3'
        },
        {
            id: 3,
            name: 'Пингвин',
            species: 'Aptenodytes forsteri',
            description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
            image: 'https://live.staticflickr.com/7886/32759882218_84c22ce2a4_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
        },
        {
            id: 4,
            name: 'Чайка',
            species: 'Larus argentatus',
            description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
            image: 'https://live.staticflickr.com/65535/49661150557_bc46dba1e8_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
        },
        {
            id: 5,
            name: 'Альбатрос',
            species: 'Diomedea exulans',
            description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
            image: 'https://live.staticflickr.com/7829/45764146944_1033812673_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
        },
        {
            id: 6,
            name: 'Бермудский тайфунник',
            species: 'Pterodroma cahow',
            description: 'Эта ночная гнездящаяся на земле морская птица — национальная птица Бермудских островов, а также символ надежды на защиту природы. Его драматическое «переоткрытие» (Эффект Лазаря), то есть открытие вида после того, как он считался вымершим столетия, вдохновило документалистов.',
            image: 'https://live.staticflickr.com/4005/4653667719_a63414e73d_n.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HMOLITLUKC/XC555372-PETB.mp3'
        },

    ]
];

export default birdsData;