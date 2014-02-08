var idx = 0;
var category = new Array();
var databaseList = new Array();
category[idx++] = [
["All Resources", "0", "0", "0", "0"],
	[	"wf_ift:gale18cco",
	"wf_ninecent",
	"wf_pqabicomplete",
	"wf_ebscoxml_sbh",
	"wf_gale_academic",
	"wf_ebscoxml_aph",
	"wf_aaarchivesall",
	"~LINK_ONLY_15120",
	"wf_acmportal",
	"wf_fofaahc",
	"wf_aiaa_papers",
	"wf_biblioline_aid",
	"~LINK_ONLY_15121",
	"wf_ebscoxml_awh",
	"wf_altpress",
	"wf_abccliohistoryandlife",
	"wf_aspcivil",
	"wf_americanmemory",
	"wf_americannationalbio",
	"wf_pq_apsonline",
	"wf_annals",
	"wf_annee_philo",
	"wf_rlg_anthlit",
	"~LINK_ONLY_15122",
	"wf_anthrosource",
	"wf_appliedscitech",
	"wf_archivesusa",
	"wf_aribib",
	"wf_artfulltext",
	"wf_artindexretro",
	"wf_artfl",
	"wf_articlefirst",
	"~LINK_ONLY_15123",
	"wf_asceonline",
	"wf_galeau",
	"wf_ebscoxml_rfh",
	"~LINK_ONLY_9173",
	"wf_bdslonline",
	"wf_bas",
	"wf_webspirs_biblioha",
	"wf_galebgmi",
	"wf_biorefbank",
	"wf_ovidbioab",
	"wf_ovid_barrm",
	"wf_biolagriindex",
	"wf_bioone",
	"wf_aspblack",
	"wf_bscenter",
	"~LINK_ONLY_15124",
	"~LINK_ONLY_15125",
	"wf_wilsonbrd",
	"wf_wilsonbrdretro",
	"wf_ift:galebookreview",
	"wf_globalbooksinprint",
	"wf_ebsco_booksource",
	"wf_imb",
	"wf_ebonline",
	"wf_galebcrc_articles",
	"wf_galebcrc",
	"wf_ebscoxml_buh",
	"~LINK_ONLY_15126",
	"~LINK_ONLY_15127",
	"wf_chemnetbase",
	"wf_biblioline_cacwa",
	"wf_odyssi_clcd",
	"wf_ebscoxml_rzh",
	"wf_oclc_claseperiodica",
	"wf_classical",
	"wf_ebscoxml_czh",
	"wf_ebsco_cochrane",
	"~LINK_ONLY_15128",
	"wf_ebscoxml_ufh",
	"wf_csa_electronics",
	"wf_eicompendexweb",
	"~LINK_ONLY_15129",
	"~LINK_ONLY_15130",
	"wf_ift:contauthors",
	"wf_csa_crimja",
	"wf_crlcat",
	"wf_asacis_sqlint",
	"wf_pq_currresalabama",
	"~LINK_ONLY_15131",
	"wf_dcbioonline",
	"wf_galegld_dlb",
	"wf_oxdnb",
	"wf_pqdissertationft",
	"wf_newsbank_americahistnews",
	"wf_proeeb",
	"wf_ebscoxml_ani",
	"~LINK_ONLY_10522",
	"wf_ovideconlit",
	"wf_educationft",
	"wf_ehrafa",
	"wf_ehraf",
	"(wf_eiu_business)",
	"wf_oclceco",
	"wf_wiley_encystatsci",
	"wf_engshorttitleidx",
	"wf_engnetbase",
	"wf_ebscoxml_eric",
	"wf_pq_ethnicnewswatch",
	"wf_newsbankevans",
	"wf_ift:aim_new",
	"~LINK_ONLY_15132",
	"~LINK_ONLY_15133",
	"wf_galevisualreflibrary",
	"wf_pq_genderwatch",
	"wf_ift:grgm_new",
	"wf_generalsciidx",
	"wf_webspirs_geogrpahy",
	"wf_webspirs_georef",
	"wf_ebscoxml_qth",
	"wf_glomy",
	"wf_globalmid",
	"wf_googlescholar",
	"wf_gpo",
	"wf_grovemusic",
	"wf_ebscoxml_hxh",
	"wf_ebscoxml_hch",
	"wf_abccliohistoryabstracts",
	"wf_historyebook",
	"wf_ebscoxml_khh",
	"~LINK_ONLY_14737",
	"wf_chadwyck_hcppapers",
	"wf_humsoci",
	"wf_ebscoxml_hgh",
	"wf_ibdgusz",
	"wf_ieee",
	"~LINK_ONLY_15134",
	"~LINK_ONLY_15135",
	"wf_ift:itof_new",
	"wf_gale_informe",
	"wf_ei_inspec",
	"wf_webspirs_ibss",
	"wf_iimp",
	"~LINK_ONLY_15136",
	"wf_iopej",
	"wf_ig_intldirscholars",
	"~LINK_ONLY_15137",
	"wf_jstorage",
	"wf_ift:jredt",
	"wf_kidsinfobits",
	"wf_knovel",
	"wf_ift:lt_new",
	"~LINK_ONLY_15138",
	"wf_lnau_quick",
	"wf_lncu_cissbjt",
	"wf_lncu_cispub",
	"wf_lnstat",
	"wf_lnsu_pwrtbls",
	"wf_wfx_voyager",
	"wf_wilsonliblit",
	"wf_ebscoxml_lxh",
	"wf_ebscoxml_vlh",
	"wf_linguisticslanguagebehaviorabs",
	"wf_eblrc",
	"wf_chadwyck_lion",
	"wf_galelitrc",
	"~LINK_ONLY_15139",
	"wf_marcive",
	"wf_marketres_ac",
	"wf_ebscoxml_ulh",
	"wf_ebscoxml_f5h",
	"wf_amsmathscinet",
	"wf_ebscoxml_loh",
	"~LINK_ONLY_15140",
	"wf_ebscoxml_mih",
	"wf_ebscoxml_mth",
	"wf_ebscoxml_mzh",
	"~LINK_ONLY_15141",
	"wf_musicindex",
	"wf_webspirs_nasw",
	"~LINK_ONLY_15142",
	"wf_ebscoxml_nfh",
	"wf_aswomenletters",
	"wf_ovidntis",
	"wf_geolib",
	"wf_ift:ovrc_new",
	"wf_oxfordengdict",
	"wf_ofr_all",
	"wf_csa_pais",
	"wf_papersfirst",
	"wf_chadwyck_poi",
	"wf_webspirs_phil",
	"wf_wilsonplayidx",
	"wf_poemfinder",
	"wf_ebscoxml_prh",
	"wf_lnafricanamerstudies",
	"wf_oclcproceedings",
	"wf_ift:profcol_new",
	"wf_ebscoxml_tfh",
	"wf_lo_projecteuclid",
	"wf_gutenbergorg",
	"wf_muse",
	"wf_pqhannualrpt",
	"wf_pqhistnp",
	"wf_pqnewspapers",
	"wf_pq_nursingallied",
	"wf_ebscoxml_pdh",
	"wf_psyccritiques",
	"wf_psychonline",
	"wf_ebscoxml_psyh",
	"wf_saepublstand",
	"~LINK_ONLY_15143",
	"wf_pubmed",
	"~LINK_ONLY_15144",
	"~LINK_ONLY_15145",
	"wf_referenceusa_bd",
	"wf_referenceusa_rd",
	"wf_ebscoxml_bwh",
	"wf_pqresearchlib",
	"~LINK_ONLY_19082",
	"~LINK_ONLY_15146",
	"~LINK_ONLY_15147",
	"~LINK_ONLY_15148",
	"wf_sbrnet",
	"~LINK_ONLY_15149",
	"wf_scidirect_xml",
	"~LINK_ONLY_15150",
	"wf_scirus",
	"wf_galescribner",
	"wf_ift:shakespeare",
	"~LINK_ONLY_15151",
	"wf_sirsdiscover",
	"wf_sirsgov",
	"wf_sirsren",
	"wf_sirsres",
	"~LINK_ONLY_13192",
	"wf_socialservicesabs",
	"wf_socialworkabs",
	"wf_sociologicalabstracts",
	"wf_oecdbooks",
	"~LINK_ONLY_15152",
	"wf_ebsco_sportdiscus",
	"wf_statusa_stofnation",
	"wf_storyfinder",
	"wf_ift:studentedt",
	"wf_tvnewsarch",
	"wf_ebscoxml_tdh",
	"~LINK_ONLY_19083",
	"wf_galetwayne",
	"wf_newscong",
	"wf_ovid_ulrich",
	"wf_unionlists",
	"~LINK_ONLY_15153",
	"wf_ebscoxml_voh",
	"~LINK_ONLY_19084",
	"~LINK_ONLY_15154",
	"wf_marquisww",
	"wf_wileyinterscience",
	"wf_alexander_womensoc",
	"~LINK_ONLY_15294",
	"wf_jhu_shakespeare",
	"~LINK_ONLY_11750"
	]
];


var cat1 = new Array;
category[idx++] = [
["African-American Studies", "", "", "", "", ""],
	[
		"~LINK_ONLY_15143",
		"wf_lnafricanamerstudies",
		"wf_newsbankevans",
		"wf_fofaahc",
		"wf_ebscoxml_hgh",
		"wf_bscenter",
		"wf_pq_ethnicnewswatch",
		"wf_aspblack",
		"~LINK_ONLY_15131",
		"wf_aspcivil",
		"wf_americanmemory",
		"wf_abccliohistoryandlife"
	]
];


var cat2 = new Array;
category[idx++] = [
["American Studies", "", "", "", "", ""],
	[
		"wf_americanmemory",
		"wf_bscenter",
		"wf_pq_apsonline",
		"wf_ebscoxml_hgh",
		"wf_aspcivil",
		"wf_newsbankevans",
		"wf_abccliohistoryandlife",
		"wf_aswomenletters",
		"wf_aaarchivesall",
		"~LINK_ONLY_15143",
		"wf_abccliohistoryabstracts",
		"~LINK_ONLY_15144",
		"wf_aspblack",
		"wf_fofaahc",
		"wf_lnafricanamerstudies",
		"wf_pq_ethnicnewswatch"
	]
];


var cat3 = new Array;
category[idx++] = [
["Anthropology", "", "", "", "", ""],
	[
		"wf_rlg_anthlit",
		"wf_ift:aim_new",
		"wf_pqdissertationft",
		"wf_fofaahc",
		"wf_anthrosource",
		"wf_sociologicalabstracts",
		"wf_annee_philo",
		"wf_ebscoxml_aph",
		"wf_linguisticslanguagebehaviorabs",
		"wf_jstorage",
		"wf_abccliohistoryandlife",
		"wf_bas",
		"wf_ebscoxml_rfh",
		"~LINK_ONLY_19084",
		"wf_pq_ethnicnewswatch",
		"wf_webspirs_ibss",
		"wf_pubmed",
		"wf_biblioline_aid",
		"wf_pqnewspapers",
		"wf_ehraf",
		"~LINK_ONLY_15122",
		"wf_ebscoxml_hch",
		"wf_pq_genderwatch",
		"wf_ehrafa",
		"wf_abccliohistoryabstracts",
		"wf_ebscoxml_sbh",
		"wf_muse",
		"wf_gale_academic"
	]
];


var cat4 = new Array;
category[idx++] = [
["Area Studies", "", "", "", "", ""],
	[
		"wf_pqresearchlib",
		"wf_pq_ethnicnewswatch",
		"wf_gale_academic",
		"wf_ebscoxml_aph",
		"wf_articlefirst"
	]
];


var cat5 = new Array;
category[idx++] = [
["Art (History and Studio)", "", "", "", "", ""],
	[
		"wf_ift:aim_new",
		"wf_pqresearchlib",
		"wf_annee_philo",
		"~LINK_ONLY_15143",
		"wf_jstorage",
		"wf_muse",
		"wf_webspirs_biblioha",
		"wf_ebscoxml_hgh",
		"wf_sirsren",
		"wf_ebscoxml_aph",
		"wf_artindexretro",
		"wf_chadwyck_poi",
		"wf_gale_academic",
		"wf_americanmemory",
		"wf_artfulltext",
		"wf_pqdissertationft"
	]
];


var cat6 = new Array;
category[idx++] = [
["Biology", "", "", "", "", ""],
	[
		"~LINK_ONLY_15150",
		"wf_scidirect_xml",
		"wf_bioone",
		"wf_wileyinterscience",
		"wf_ovidbioab",
		"wf_biolagriindex",
		"wf_pqdissertationft",
		"wf_jstorage",
		"wf_wiley_encystatsci",
		"wf_ovid_barrm",
		"wf_pubmed",
		"~LINK_ONLY_15154"
	]
];


var cat7 = new Array;
category[idx++] = [
["Business", "", "", "", "", ""],
	[
		"wf_glomy",
		"wf_oecdbooks",
		"~LINK_ONLY_14737",
		"~LINK_ONLY_15145",
		"~LINK_ONLY_15140",
		"~LINK_ONLY_15124",
		"~LINK_ONLY_15132",
		"~LINK_ONLY_15133",
		"~LINK_ONLY_15151",
		"wf_ovideconlit",
		"wf_referenceusa_rd",
		"~LINK_ONLY_15126",
		"~LINK_ONLY_15136",
		"~LINK_ONLY_19082",
		"~LINK_ONLY_15139",
		"~LINK_ONLY_15141",
		"wf_sbrnet",
		"wf_statusa_stofnation",
		"wf_ebscoxml_buh",
		"~LINK_ONLY_15138",
		"~LINK_ONLY_15153",
		"~LINK_ONLY_15120",
		"wf_galebcrc_articles",
		"wf_referenceusa_bd",
		"wf_galebcrc",
		"wf_globalmid",
		"~LINK_ONLY_15125",
		"wf_marketres_ac",
		"wf_pqabicomplete"
	]
];


var cat8 = new Array;
category[idx++] = [
["Chemistry", "", "", "", "", ""],
	[
		"wf_pq_currresalabama",
		"~LINK_ONLY_15154",
		"wf_marcive",
		"wf_appliedscitech",
		"wf_wiley_encystatsci",
		"wf_chemnetbase",
		"wf_pqdissertationft",
		"wf_generalsciidx",
		"wf_wileyinterscience",
		"~LINK_ONLY_15150",
		"wf_scidirect_xml",
		"wf_pqresearchlib"
	]
];


var cat9 = new Array;
category[idx++] = [
["Classics", "", "", "", "", ""],
	[
		"wf_artindexretro",
		"wf_pqresearchlib",
		"wf_rlg_anthlit",
		"wf_ebscoxml_rfh",
		"wf_annee_philo",
		"wf_artfulltext",
		"wf_ebscoxml_aph",
		"wf_imb",
		"wf_jstorage",
		"wf_gale_academic",
		"wf_webspirs_phil",
		"~LINK_ONLY_19083",
		"wf_linguisticslanguagebehaviorabs",
		"wf_muse"
	]
];


var cat10 = new Array;
category[idx++] = [
["Clothing, Textiles, & Interior Design", "", "", "", "", ""],
	[
		"wf_articlefirst",
		"wf_gale_academic",
		"wf_appliedscitech",
		"wf_pqresearchlib",
		"~LINK_ONLY_15154",
		"wf_artindexretro",
		"wf_pq_apsonline",
		"wf_marcive",
		"wf_pqdissertationft",
		"wf_pqabicomplete",
		"wf_ebscoxml_aph",
		"wf_jstorage",
		"wf_ebscoxml_tdh",
		"wf_artfulltext",
		"wf_aaarchivesall",
		"wf_ift:aim_new"
	]
];


var cat11 = new Array;
category[idx++] = [
["Communications", "", "", "", "", ""],
	[
		"wf_articlefirst",
		"wf_aaarchivesall",
		"wf_ebscoxml_hxh",
		"~LINK_ONLY_15145",
		"wf_newsbankevans",
		"wf_sirsres",
		"wf_galebcrc",
		"wf_newsbank_americahistnews",
		"wf_pq_apsonline",
		"wf_altpress",
		"wf_csa_electronics",
		"wf_pqnewspapers",
		"wf_referenceusa_bd",
		"wf_ift:aim_new",
		"wf_pq_ethnicnewswatch",
		"wf_ift:ovrc_new",
		"wf_ebscoxml_buh",
		"wf_tvnewsarch",
		"wf_referenceusa_rd",
		"wf_linguisticslanguagebehaviorabs",
		"wf_ebscoxml_nfh",
		"wf_pqabicomplete",
		"~LINK_ONLY_15144",
		"wf_galebcrc_articles",
		"~LINK_ONLY_15143",
		"wf_pqresearchlib",
		"wf_pqdissertationft",
		"wf_ebscoxml_bwh",
		"wf_gale_academic",
		"wf_pqhistnp",
		"wf_ebscoxml_ufh",
		"wf_ebscoxml_aph"
	]
];


var cat12 = new Array;
category[idx++] = [
["Communicative Disorders", "", "", "", "", ""],
	[
		"wf_ovidbioab",
		"wf_wileyinterscience",
		"wf_educationft",
		"wf_linguisticslanguagebehaviorabs",
		"wf_ebscoxml_ufh",
		"wf_ebscoxml_eric",
		"wf_csa_electronics",
		"wf_pqdissertationft",
		"wf_pubmed",
		"wf_ift:aim_new",
		"wf_ebscoxml_mzh",
		"wf_ebscoxml_hch",
		"wf_ebscoxml_psyh",
		"wf_gale_academic",
		"wf_ebscoxml_aph",
		"~LINK_ONLY_15154",
		"~LINK_ONLY_15149",
		"wf_scidirect_xml"
	]
];


var cat13 = new Array;
category[idx++] = [
["Computer Science", "", "", "", "", ""],
	[
		"wf_eicompendexweb",
		"wf_jstorage",
		"wf_wiley_encystatsci",
		"wf_ei_inspec",
		"wf_appliedscitech",
		"wf_scidirect_xml",
		"wf_ieee",
		"~LINK_ONLY_15154",
		"wf_wileyinterscience"
	]
];


var cat14 = new Array;
category[idx++] = [
["Criminal Justice", "", "", "", "", ""],
	[
		"wf_ebscoxml_aph",
		"wf_gale_academic",
		"wf_csa_crimja",
		"wf_ift:aim_new",
		"wf_pqresearchlib",
		"wf_lnau_quick"
	]
];


var cat15 = new Array;
category[idx++] = [
["Education", "", "", "", "", ""],
	[
		"wf_pqresearchlib",
		"wf_pq_currresalabama",
		"wf_pqdissertationft",
		"~LINK_ONLY_15143",
		"wf_ift:studentedt",
		"wf_ebscoxml_loh",
		"wf_ebscoxml_eric",
		"wf_odyssi_clcd",
		"wf_ebscoxml_tfh",
		"wf_ift:profcol_new",
		"wf_educationft"
	]
];


var cat16 = new Array;
category[idx++] = [
["Engineering", "", "", "", "", ""],
	[
		"~LINK_ONLY_15148",
		"~LINK_ONLY_15154",
		"wf_asceonline",
		"wf_knovel",
		"wf_acmportal",
		"wf_appliedscitech",
		"wf_ei_inspec",
		"wf_pqdissertationft",
		"wf_wileyinterscience",
		"wf_ieee",
		"wf_chemnetbase",
		"wf_ovidntis",
		"~LINK_ONLY_15134",
		"wf_wiley_encystatsci",
		"wf_aiaa_papers",
		"wf_scirus",
		"wf_scidirect_xml",
		"wf_eicompendexweb",
		"~LINK_ONLY_9173",
		"wf_engnetbase"
	]
];


var cat17 = new Array;
category[idx++] = [
["English", "", "", "", "", ""],
	[
		"wf_engshorttitleidx",
		"wf_galegld_dlb",
		"wf_jstorage",
		"wf_proeeb",
		"wf_ebscoxml_aph",
		"wf_newsbankevans",
		"wf_storyfinder",
		"wf_pqresearchlib",
		"wf_gale_academic",
		"wf_linguisticslanguagebehaviorabs",
		"wf_galetwayne",
		"wf_eblrc",
		"wf_humsoci",
		"wf_galescribner",
		"wf_poemfinder",
		"wf_galelitrc",
		"wf_aspblack",
		"wf_wilsonplayidx",
		"wf_muse",
		"wf_jhu_shakespeare",
		"wf_chadwyck_lion",
		"wf_ift:shakespeare",
		"wf_oxfordengdict",
		"wf_ebscoxml_mzh",
		"wf_ebscoxml_hgh"
	]
];


var cat18 = new Array;
category[idx++] = [
["French Language & Literature", "", "", "", "", ""],
	[
		"wf_humsoci",
		"wf_gale_academic",
		"wf_muse",
		"wf_linguisticslanguagebehaviorabs",
		"wf_pq_ethnicnewswatch",
		"wf_pqresearchlib",
		"wf_jstorage",
		"wf_artfl",
		"wf_chadwyck_poi",
		"wf_galelitrc",
		"wf_ebscoxml_hgh",
		"wf_ebscoxml_mzh",
		"wf_ebscoxml_aph",
		"wf_ift:contauthors",
		"wf_eblrc"
	]
];


var cat19 = new Array;
category[idx++] = [
["Genealogy", "", "", "", "", ""],
	[
		"wf_newsbankevans",
		"wf_aaarchivesall",
		"wf_pqhistnp",
		"wf_dcbioonline",
		"wf_pq_apsonline",
		"wf_americanmemory",
		"wf_aswomenletters",
		"wf_ninecent",
		"~LINK_ONLY_15152",
		"wf_galebgmi"
	]
];


var cat20 = new Array;
category[idx++] = [
["General-purpose Databases", "", "", "", "", ""],
	[
		"wf_ofr_all",
		"wf_oclceco",
		"wf_ift:itof_new",
		"wf_articlefirst",
		"wf_pqabicomplete",
		"wf_ovid_ulrich",
		"wf_gale_academic",
		"wf_humsoci",
		"wf_ift:galebookreview",
		"wf_oclcproceedings",
		"wf_ebscoxml_aph",
		"wf_ift:grgm_new",
		"wf_wilsonbrdretro",
		"wf_pqresearchlib",
		"wf_ift:aim_new",
		"wf_ift:ovrc_new",
		"wf_sirsres",
		"wf_archivesusa",
		"wf_lnstat",
		"wf_jstorage",
		"~LINK_ONLY_15137",
		"wf_ebscoxml_pdh",
		"wf_ebscoxml_f5h",
		"wf_ebscoxml_nfh",
		"wf_ebscoxml_voh",
		"wf_wilsonbrd",
		"wf_csa_electronics",
		"~LINK_ONLY_10522",
		"wf_ebscoxml_awh",
		"wf_marquisww",
		"wf_globalbooksinprint",
		"wf_ebsco_booksource",
		"wf_altpress",
		"~LINK_ONLY_15144",
		"wf_newsbank_americahistnews",
		"wf_googlescholar",
		"wf_ebonline",
		"~LINK_ONLY_15294",
		"~LINK_ONLY_15154",
		"~LINK_ONLY_15123",
		"wf_ebscoxml_khh",
		"wf_lnsu_pwrtbls",
		"wf_galevisualreflibrary",
		"wf_muse",
		"wf_ibdgusz",
		"wf_biorefbank",
		"wf_gutenbergorg",
		"wf_chadwyck_poi",
		"wf_papersfirst",
		"wf_pqnewspapers",
		"wf_ebscoxml_ulh"
	]
];


var cat21 = new Array;
category[idx++] = [
["Geography", "", "", "", "", ""],
	[
		"~LINK_ONLY_15154",
		"wf_gale_academic",
		"wf_ift:aim_new",
		"wf_webspirs_geogrpahy",
		"wf_pqdissertationft",
		"wf_ebscoxml_aph",
		"wf_marcive",
		"~LINK_ONLY_13192",
		"wf_scidirect_xml",
		"~LINK_ONLY_15121",
		"wf_geolib",
		"wf_wiley_encystatsci"
	]
];


var cat22 = new Array;
category[idx++] = [
["Geology", "", "", "", "", ""],
	[
		"wf_generalsciidx",
		"wf_marcive",
		"wf_ift:gale18cco",
		"wf_webspirs_georef",
		"wf_appliedscitech",
		"~LINK_ONLY_15154",
		"wf_wiley_encystatsci",
		"wf_pqdissertationft",
		"wf_scidirect_xml"
	]
];


var cat23 = new Array;
category[idx++] = [
["German Language & Literature", "", "", "", "", ""],
	[
		"wf_jstorage",
		"wf_ift:itof_new",
		"wf_gale_academic",
		"wf_linguisticslanguagebehaviorabs",
		"wf_ift:aim_new",
		"wf_ebscoxml_aph",
		"wf_pqresearchlib",
		"wf_ebscoxml_mzh",
		"wf_bdslonline",
		"wf_galelitrc"
	]
];


var cat24 = new Array;
category[idx++] = [
["History", "", "", "", "", ""],
	[
		"wf_aaarchivesall",
		"wf_pqhistnp",
		"~LINK_ONLY_15135",
		"wf_imb",
		"wf_oxdnb",
		"wf_historyebook",
		"wf_abccliohistoryandlife",
		"wf_engshorttitleidx",
		"wf_bscenter",
		"wf_gale_academic",
		"wf_ig_intldirscholars",
		"wf_pqhannualrpt",
		"wf_americanmemory",
		"wf_pq_apsonline",
		"wf_chadwyck_hcppapers",
		"wf_muse",
		"wf_newsbankevans",
		"wf_americannationalbio",
		"wf_ift:shakespeare",
		"wf_aspcivil",
		"wf_abccliohistoryabstracts",
		"(wf_eiu_business)",
		"~LINK_ONLY_15143",
		"wf_annals",
		"wf_ebscoxml_aph",
		"wf_newscong",
		"wf_jstorage",
		"wf_annee_philo",
		"wf_aswomenletters",
		"wf_ift:aim_new",
		"wf_ebscoxml_mth",
		"wf_ninecent"
	]
];


var cat25 = new Array;
category[idx++] = [
["Human Environmental Studies", "", "", "", "", ""],
	[
		"wf_pqabicomplete",
		"wf_ebscoxml_aph",
		"wf_ebscoxml_hxh",
		"wf_pq_apsonline",
		"wf_pqresearchlib",
		"wf_articlefirst",
		"wf_pubmed",
		"wf_ebsco_sportdiscus",
		"wf_gale_academic",
		"wf_artindexretro",
		"wf_artfulltext",
		"wf_ebscoxml_eric",
		"wf_ebscoxml_hch",
		"wf_ebscoxml_psyh",
		"wf_ift:aim_new"
	]
];


var cat26 = new Array;
category[idx++] = [
["Humanities/Social SciencesQS", "", "", "", "", ""],
	[
		"wf_gale_academic",
		"wf_jstorage",
		"wf_ebscoxml_aph",
		"wf_pqresearchlib"
	]
];


var cat27 = new Array;
category[idx++] = [
["InterdisciplinaryQS", "", "", "", "", ""],
	[
		"wf_wfx_voyager",
		"wf_jstorage",
		"wf_ebscoxml_aph",
		"wf_gale_academic",
		"wf_pqresearchlib"
	]
];


var cat28 = new Array;
category[idx++] = [
["International Studies", "", "", "", "", ""],
	[
		"wf_ebscoxml_aph",
		"wf_articlefirst",
		"wf_gale_academic",
		"wf_pqresearchlib",
		"wf_pqnewspapers",
		"wf_jstorage"
	]
];


var cat29 = new Array;
category[idx++] = [
["Italian Language & Literature", "", "", "", "", ""],
	[
		"wf_jstorage",
		"wf_ift:contauthors",
		"wf_pqresearchlib",
		"wf_muse",
		"wf_chadwyck_poi",
		"wf_pq_ethnicnewswatch",
		"wf_gale_academic",
		"wf_linguisticslanguagebehaviorabs",
		"wf_ebscoxml_mzh",
		"wf_humsoci",
		"wf_artfl",
		"wf_ebscoxml_hgh",
		"wf_galelitrc",
		"wf_eblrc",
		"wf_ebscoxml_aph"
	]
];


var cat30 = new Array;
category[idx++] = [
["K-12 Resources", "", "", "", "", ""],
	[
		"wf_sirsdiscover",
		"wf_kidsinfobits",
		"wf_ift:jredt",
		"wf_ift:studentedt",
		"wf_ebscoxml_ulh",
		"wf_ebscoxml_prh",
		"wf_ebscoxml_ani",
		"wf_odyssi_clcd",
		"wf_ebscoxml_mih"
	]
];


var cat31 = new Array;
category[idx++] = [
["Latin American Studies", "", "", "", "", ""],
	[
		"wf_ift:aim_new",
		"wf_gale_academic",
		"wf_pqresearchlib",
		"wf_pq_ethnicnewswatch",
		"wf_ebscoxml_aph",
		"wf_gale_informe",
		"wf_jstorage",
		"wf_ebscoxml_vlh",
		"wf_abccliohistoryabstracts",
		"wf_csa_pais",
		"wf_oclc_claseperiodica",
		"wf_anthrosource"
	]
];


var cat32 = new Array;
category[idx++] = [
["Law", "", "", "", "", ""],
	[
		"wf_lncu_cispub",
		"wf_ift:lt_new",
		"~LINK_ONLY_15139",
		"wf_marcive",
		"wf_lncu_cissbjt"
	]
];


var cat33 = new Array;
category[idx++] = [
["Library Science", "", "", "", "", ""],
	[
		"wf_unionlists",
		"wf_ebscoxml_lxh",
		"wf_wilsonliblit",
		"wf_gale_academic",
		"wf_ovid_ulrich",
		"wf_globalbooksinprint",
		"wf_pqresearchlib",
		"wf_crlcat",
		"wf_ebscoxml_aph",
		"wf_articlefirst"
	]
];


var cat34 = new Array;
category[idx++] = [
["Mathematics", "", "", "", "", ""],
	[
		"~LINK_ONLY_15154",
		"wf_scidirect_xml",
		"wf_amsmathscinet",
		"wf_appliedscitech",
		"wf_pq_currresalabama",
		"wf_asacis_sqlint",
		"wf_lo_projecteuclid",
		"wf_pqdissertationft",
		"wf_jstorage"
	]
];


var cat35 = new Array;
category[idx++] = [
["Music", "", "", "", "", ""],
	[
		"wf_classical",
		"~LINK_ONLY_15147",
		"wf_grovemusic",
		"wf_muse",
		"wf_iimp",
		"wf_musicindex",
		"~LINK_ONLY_15142",
		"~LINK_ONLY_15146",
		"wf_jstorage"
	]
];


var cat36 = new Array;
category[idx++] = [
["Nursing & Medicine", "", "", "", "", ""],
	[
		"wf_scidirect_xml",
		"wf_ebscoxml_hch",
		"wf_ebscoxml_rzh",
		"~LINK_ONLY_15154",
		"wf_pubmed",
		"wf_ebsco_cochrane",
		"wf_pq_nursingallied",
		"wf_ebscoxml_czh",
		"wf_wileyinterscience"
	]
];


var cat37 = new Array;
category[idx++] = [
["Nutrition & Health", "", "", "", "", ""],
	[
		"wf_wileyinterscience",
		"wf_ebscoxml_hch",
		"wf_pubmed",
		"~LINK_ONLY_15154",
		"wf_marcive",
		"wf_scidirect_xml"
	]
];


var cat38 = new Array;
category[idx++] = [
["Philosophy & Religious Studies", "", "", "", "", ""],
	[
		"wf_webspirs_phil",
		"wf_muse",
		"~LINK_ONLY_15128",
		"wf_ebscoxml_aph",
		"wf_ebscoxml_rfh",
		"wf_jstorage",
		"wf_ift:aim_new",
		"wf_bas",
		"wf_pqresearchlib",
		"wf_annee_philo",
		"wf_gale_academic",
		"~LINK_ONLY_15154",
		"wf_articlefirst"
	]
];


var cat39 = new Array;
category[idx++] = [
["Physics", "", "", "", "", ""],
	[
		"~LINK_ONLY_15154",
		"wf_chemnetbase",
		"wf_aribib",
		"wf_pqdissertationft",
		"wf_ei_inspec",
		"wf_iopej",
		"wf_appliedscitech",
		"wf_scidirect_xml",
		"wf_wiley_encystatsci",
		"wf_generalsciidx",
		"wf_jstorage"
	]
];


var cat40 = new Array;
category[idx++] = [
["Political Science", "", "", "", "", ""],
	[
		"wf_articlefirst",
		"wf_ebscoxml_aph",
		"wf_newscong",
		"wf_chadwyck_hcppapers",
		"wf_gale_academic",
		"~LINK_ONLY_15135",
		"wf_ebscoxml_mth",
		"wf_jstorage",
		"wf_pqresearchlib",
		"wf_pqnewspapers"
	]
];


var cat41 = new Array;
category[idx++] = [
["Psychology", "", "", "", "", ""],
	[
		"wf_pqresearchlib",
		"wf_psyccritiques",
		"wf_muse",
		"wf_articlefirst",
		"wf_ebscoxml_loh",
		"~LINK_ONLY_13192",
		"wf_ebscoxml_aph",
		"wf_wileyinterscience",
		"wf_psychonline",
		"wf_ebscoxml_pdh",
		"wf_ebscoxml_psyh",
		"wf_chadwyck_poi",
		"wf_ift:aim_new",
		"wf_jstorage",
		"wf_webspirs_ibss",
		"wf_sociologicalabstracts",
		"wf_gale_academic",
		"~LINK_ONLY_15154"
	]
];


var cat42 = new Array;
category[idx++] = [
["QSBus", "", "", "", "", ""],
	[
		"wf_galebcrc_articles",
		"wf_galebcrc",
		"wf_pqabicomplete",
		"wf_ebscoxml_buh"
	]
];


var cat43 = new Array;
category[idx++] = [
["QSEdu", "", "", "", "", ""],
	[
		"wf_ebscoxml_tfh",
		"wf_pqresearchlib",
		"wf_ebscoxml_psyh",
		"wf_educationft",
		"wf_ebscoxml_eric",
		"wf_pqdissertationft"
	]
];


var cat44 = new Array;
category[idx++] = [
["Russian Language & Literature", "", "", "", "", ""],
	[
		"wf_ift:aim_new",
		"wf_jstorage",
		"wf_ebscoxml_sbh",
		"wf_pqresearchlib",
		"wf_ebscoxml_aph",
		"wf_ebscoxml_mzh",
		"wf_linguisticslanguagebehaviorabs",
		"wf_ift:itof_new",
		"wf_galelitrc"
	]
];


var cat45 = new Array;
category[idx++] = [
["Science", "", "", "", "", ""],
	[
		"wf_biolagriindex",
		"wf_generalsciidx",
		"~LINK_ONLY_15154",
		"wf_scirus",
		"wf_ovid_barrm",
		"~LINK_ONLY_15150",
		"~LINK_ONLY_15149",
		"wf_wileyinterscience",
		"wf_appliedscitech",
		"wf_jstorage",
		"wf_pubmed",
		"wf_ovidbioab",
		"wf_webspirs_georef",
		"wf_ei_inspec",
		"wf_wiley_encystatsci",
		"wf_scidirect_xml"
	]
];


var cat46 = new Array;
category[idx++] = [
["ScienceQS", "", "", "", "", ""],
	[
		"wf_gale_academic",
		"wf_jstorage",
		"wf_ebscoxml_rzh",
		"wf_ebscoxml_aph",
		"wf_pqresearchlib",
		"wf_ei_inspec",
		"wf_eicompendexweb"
	]
];


var cat47 = new Array;
category[idx++] = [
["Social Work", "", "", "", "", ""],
	[
		"wf_socialservicesabs",
		"wf_ift:ovrc_new",
		"wf_pqresearchlib",
		"~LINK_ONLY_15129",
		"wf_sociologicalabstracts",
		"wf_ift:lt_new",
		"wf_socialworkabs",
		"wf_ebsco_cochrane",
		"wf_ebscoxml_czh",
		"wf_gpo",
		"wf_csa_crimja",
		"wf_pubmed",
		"wf_csa_pais",
		"wf_sirsres",
		"wf_ebscoxml_loh",
		"wf_ebscoxml_pdh",
		"~LINK_ONLY_15154",
		"wf_lnau_quick",
		"wf_webspirs_nasw",
		"wf_ebscoxml_psyh",
		"wf_lncu_cissbjt",
		"~LINK_ONLY_15130",
		"wf_abccliohistoryandlife",
		"wf_psychonline",
		"wf_galeau",
		"wf_ebscoxml_aph",
		"wf_ebscoxml_nfh",
		"wf_pqabicomplete",
		"wf_marcive",
		"wf_pqnewspapers",
		"wf_gale_academic",
		"wf_ebscoxml_eric",
		"wf_biblioline_cacwa",
		"~LINK_ONLY_15127",
		"wf_lncu_cispub",
		"wf_sirsgov"
	]
];


var cat48 = new Array;
category[idx++] = [
["Sociology", "", "", "", "", ""],
	[
		"wf_ebscoxml_aph",
		"wf_jstorage",
		"wf_socialworkabs",
		"wf_webspirs_ibss",
		"wf_ift:aim_new",
		"wf_sociologicalabstracts",
		"wf_articlefirst",
		"wf_muse",
		"wf_pq_genderwatch",
		"wf_wileyinterscience",
		"wf_socialservicesabs"
	]
];


var cat49 = new Array;
category[idx++] = [
["Spanish/Portuguese Language & Literature", "", "", "", "", ""],
	[
		"wf_chadwyck_poi",
		"wf_gale_academic",
		"wf_ebscoxml_aph",
		"wf_ebscoxml_hgh",
		"wf_ift:contauthors",
		"wf_jstorage",
		"wf_ebscoxml_vlh",
		"wf_oclc_claseperiodica",
		"wf_pq_ethnicnewswatch",
		"wf_humsoci",
		"wf_eblrc",
		"wf_ebscoxml_mzh",
		"wf_galelitrc",
		"wf_linguisticslanguagebehaviorabs",
		"wf_pqresearchlib",
		"wf_gale_informe",
		"wf_muse"
	]
];


var cat50 = new Array;
category[idx++] = [
["Theatre & Dance", "", "", "", "", ""],
	[
		"wf_ift:aim_new",
		"wf_ebscoxml_hgh",
		"wf_ebscoxml_mzh",
		"wf_ift:shakespeare",
		"wf_muse",
		"wf_aspblack",
		"wf_artfulltext",
		"wf_iimp",
		"wf_pqdissertationft",
		"wf_pqresearchlib",
		"wf_eblrc",
		"wf_artindexretro",
		"wf_galelitrc",
		"wf_wilsonplayidx",
		"wf_ebscoxml_aph",
		"wf_chadwyck_lion",
		"wf_jhu_shakespeare",
		"wf_ebsco_sportdiscus",
		"wf_musicindex"
	]
];


var cat51 = new Array;
category[idx++] = [
["Women's Studies", "", "", "", "", ""],
	[
		"wf_americanmemory",
		"wf_abccliohistoryandlife",
		"wf_jstorage",
		"wf_lnau_quick",
		"wf_webspirs_phil",
		"wf_pq_ethnicnewswatch",
		"wf_galebgmi",
		"wf_pq_genderwatch",
		"wf_gale_academic",
		"wf_altpress",
		"wf_aswomenletters",
		"wf_ebscoxml_aph",
		"wf_pqresearchlib",
		"wf_muse",
		"wf_alexander_womensoc"
	]
];

databaseList = [
["wf_ift:gale18cco", "18th Century Collections Online", "2", "0", "", "Eighteenth Century Collections Online is a digitized library of approximately 138,000 titles, representing most of the significant English- and foreign-language texts published in Great Britain in the eighteenth century. Based on the English Short Title Catalogue, the collection includes many North American titles and is fully searchable by keyword.", "http://infotrac.galegroup.com/itweb/tusc49521?db=ECCO", "Eighteenth Century Collections Online", "true", "	", "",2 ],
["wf_ninecent", "19th Century Masterfile", "2", "0", "", "An index to nineteenth century literature. Contains the noted indexes: Poole's Index to periodical Literature, New York Times Index, Palmers Index to The Times, Harper's Magazine Index, Descriptive Catalogue of the Government Publications, and others.", "http://poolesplus.odyssi.com", "Largest resource for historical research prior to 1925.", "true", "	", "",2 ],
["wf_pqabicomplete", "ABI/INFORM Complete", "2", "0", "", "Abstracts and articles from over 1200 journals and magazines in all business fields. Can be searched by word, topic, author, etc. Search by publication to retrieve all the articles from a particular issue.", "http://www.umi.com/pqdauto?COPT=REJTPTE5M0M@", "ABI/INFORM Complete™", "true", "	", "",2 ],
["wf_ebscoxml_sbh", "ABSEES Online", "2", "0", "", "ABSEES Online includes over 36,000 records covering articles, books, book chapters, book reviews, dissertations, and selected government publications on East-Central Europe and the former Soviet Union published in the United States and Canada.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=sbh", "American Bibliography of Slavic & Eastern European Studies (ABSEES)", "true", "	", "",2 ],
["wf_gale_academic", "Academic OneFile", "2", "0", "", "Academic OneFile is the premier source for peer-reviewed, full text articles from the world's leading journals and reference sources. With extensive coverage of the physical sciences, technology, medicine, social sciences, the arts, theology, literature and other subjects, Academic OneFile is both authoritative and comprehensive. With millions of articles available in both PDF and HTML full-text with no restrictions, researchers are able to find accurate information quickly.", "http://infotrac.galegroup.com/itweb?db=AONE", "Academic OneFile", "true", "	", "",2 ],
["wf_ebscoxml_aph", "Academic Search Premier", "2", "0", "", "Academic Search Premier contains the full text for nearly 4,700 publications, including more than 3,600 peer-reviewed publications.  It also contains indexing and abstracts for over 8,000 magazines, news sources and refereed journals in nearly every area of academic study including: social sciences, humanities, education, computer sciences, engineering, physics, chemistry, language and linguistics, arts & literature, medical sciences, ethnic studies and more.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=aph", "Academic Search Premier", "true", "	", "",2 ],
["wf_aaarchivesall", "Accessible Archives", "2", "0", "", "Primary source material from 18th and 19th century periodicals. Databases include: Godey's Lady's Book; The Pennsylvania Gazette 1728-1800; The Civil War: A Newspaper Perspective; African American Newspapers: the 19th century; The Pennsylvania Newspaper Record: Delaware County (1819-1870); The Pennsylvania Genealogical Catalogue: Chester County; and American Counties to 1900.", "http://www.accessible.com", "Searches all resources available.", "true", "	", "",2 ],
["~LINK_ONLY_15120", "<!-- link only -->Accounting Research Manager", "2", "0", "", "Searchable full-text database of the authoritative accounting pronouncements. The Accounting, SEC, and Auditing sections are limited to 3 simultaneous users. The Government section is limited to 1 simultaneous user.  The FASB Section is limited to 2 simultaneous users.", "http://www.accountingresearchmanager.com/wk/rm.nsf/?opendatabase", "", "true", "	", "",2 ],
["wf_acmportal", "ACM Digital Library", "2", "0", "", "This site provides access to ACM journals and magazines, as well as conference proceedings.", "http://www.acm.org/dl", "Full text collection  of every article published by ACM, including over 50 years of archives.", "true", "	", "",2 ],
["wf_fofaahc", "African-American History and Culture", "2", "0", "", "African-American History and Culture, a Facts On File database, is a multimedia collection covering all aspects of the African-American experience. The biographies, historical documents, photographs, timelines, maps, quotations, and bibliographies included in this collection range from the colonization of the Americas and the Atlantic Slave Trade of the fifteenth century to the racial issues of comtemporary America. Also included are numerous web-links and a reconstruction of W.E.B. Dubois's display at the 1900 World's Fair in Paris.", "http://www.fofweb.com/ip", "African-American History & Culture", "true", "	", "",2 ],
["wf_aiaa_papers", "AIAA Meeting Papers Online", "2", "0", "", "Technical reports from AIAA meetings. Approximately 4000 papers are presented at 20 American Institute for Aeronautics and Astronautics conferences each year. The online version of each paper appears two to six weeks after the conference.", "http://www.aiaa.org/research/index.hfm?res=2&reset=1", "AIAA Meeting Papers Online", "true", "	", "",2 ],
["wf_biblioline_aid", "AIDSearch", "2", "0", "", "A combination of three database files (AIDSDRUGS, MEDLINE AIDS/HIV Subset, and AIDSTRIALS) providing information about Acquired immunodeficiency syndrome (AIDS) and related topics.", "http://biblioline.nisc.com/scripts/login.dll?BiblioLine&dbname=QAID", "AIDSearch", "true", "	", "",2 ],
["~LINK_ONLY_15121", "<!-- link only -->Alabama Maps", "2", "0", "", "Alabama Maps is an ongoing project of the Cartographic Research Laboratory, which operates under the auspices of the College of Arts and Sciences at the University of Alabama.", "http://alabamamaps.ua.edu/", "Alabama Maps is an ongoing project of the Cartographic Research Laboratory, which operates under the auspices of the College of Arts and Sciences at the University of Alabama.", "true", "	", "",2 ],
["wf_ebscoxml_awh", "Alt HealthWatch", "2", "0", "", "Alt HealthWatch contains publications covering alternative, holistic and complementary approaches to health; includes popular publications and peer-reviewed journals.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=awh", "Alt HealthWatch", "true", "	", "",2 ],
["wf_altpress", "Alt-Press Watch", "2", "0", "", "Provides news source coverage, viewpoints and perspectives to complement and challenge the mainstream media.", "http://proquest.umi.com/pqdweb?RQT=306&TS=1091455554&clientId=31537&DBId=14396", "Alt-Press Watch", "true", "	", "",2 ],
["wf_abccliohistoryandlife", "America, History and Life", "2", "0", "", "Provides historical coverage of the United States and Canada from prehistory to the present. Includes information abstracted from over 2,000 journals published worldwide.", "http://serials.abc-clio.com/active/start?_appname=serials&initialdb=AHL", "America, History and Life", "true", "	", "",2 ],
["wf_aspcivil", "American Civil War: Letters and Diaries", "2", "0", "", "The American Civil War: Letters and Diaries knits together more than 400 sources of diaries, letters, and memoirs, to provide fast access to thousands of views on almost every aspect of the war.  The extraordinary electronic collection includes 100,000 pages of re-keyed and indexed text, including 4,000 facsimile pages of previously unpublished manuscript material.  Scholars can read close to 200 intimate letters written by Amos Wood, his wife Clara, and their three-year-old son, Freddie, illustrating what life was like for a Massachusetts family separated by the war.  Users can see and compare, for the first time, the writings of politicians, generals, slaves, landowners, seamen, and spies.  The letters and diaries are by the famous and the unknown, giving both the Northern and the Southern perspectives, along with that of foreign observers.", "http://www.alexanderstreet2.com/cwldlive/", "American Civil War: Letters and Diaries", "true", "	", "",2 ],
["wf_americanmemory", "American Memory", "2", "0", "", "Gateway to primary source materials relating to the history and culture of the United States. Offers more than 7 million digital items from more than 100 historical collections.", "http://lcweb2.loc.gov", "Provides free and open access through the Internet to written and spoken words, sound recordings, still and moving images, prints, maps, and sheet music that document the American experience.", "false", "	", "",2 ],
["wf_americannationalbio", "American National Biography Online", "2", "0", "", "The American National Biography Online is the premier source of information about over 18,000 people from all eras who have influenced and shaped American history and culture.  With sophisticated search capabilities, lively and detailed articles, internal cross-references, up-to-date bibliographies, thousands of photographs and illustrations, and links to external web resources, ANB Online is ‘likely to induce compulsive browsing’. (Wall Street Journal)  Limited to 50 simultaneous users.", "http://www.anb.org", "American National Biography Online", "true", "	", "",2 ],
["wf_pq_apsonline", "American Periodicals Series Online, 1740-1900", "2", "0", "", "This unique and valuable collection of over 1000 titles includes digitized images of the pages of American magazines and journals published from colonial days to the dawn of the 20th century. Titles range from Benjamin Franklin's General Magazine and America's first scientific journal, Medical Repository; popular magazines such as Vanity Fair and Ladies Home Journal; regional and niche publications; and groundbreaking journals like The Dial, Puck, and McClure's.", "http://proquest.umi.com/login?COPT=SU5UPTAmVkVSPTImREJTPTE0NEQ@&clientid=31537", "American Periodicals Series Online, 1740-1900", "true", "	", "",2 ],
["wf_annals", "Annals of American History Online", "2", "0", "", "The Annals of American History includes the full text of speeches, essays, historical accounts, memoirs, poems, editorials, biographies, images, and multi-media.", "http://america.eb.com", "Annals of American History Online", "true", "	", "",2 ],
["wf_annee_philo", "Année Philologique", "2", "0", "", "L'Année Philologique is an index to scholarly material in the field of Greco-Roman language, literature, archaeology, history, law, science, and philosophy from prehistory to 800 A.D.  The database of more than 480,000 records includes indexing and abstracts for books, journal articles, dissertations, and conference proceedings, and is searchable by modern author, ancient author or text, subject, or keyword.", "http://www.annee-philologique.com/aph/", "Année Philologique", "true", "	", "",2 ],
["wf_rlg_anthlit", "Anthropological Literature", "2", "0", "", "Anthropological Literature indexes articles of two or more pages in most of the journals and many of the edited collections in Harvard University's Tozzer Library (formerly the Library of the Peabody Museum of Archaeology and Ethnology). Extending from the late nineteenth century to the present, the index incorporates the printed volumes of Anthropological Literature.", "http://eureka.rlg.org/Eureka/zgate2.prod?ACTION=INIT&LIMFIL=ANL", "Anthropological Literature", "true", "	", "",2 ],
["~LINK_ONLY_15122", "<!-- link only -->Anthropology Bibliography", "2", "0", "", "<b>Restricted to Gorgas Library.</b> Anthropology Bibliography provides a cumulative version of the annual print publication Bibliographic guide to Anthropology and Archaeology. Also included are the catalog records of Harvard University's Tozzer Library. Founded in 1866 as the Library of the Peabody Museum of Archaeology and Ethnology, Tozzer holds more than 210,000 books, monographic series, scholarly periodicals, maps, and audiovisual materials. The collection, though representative of all aspects of anthropology and archaeology, is historically and currently strong in Mesoamerica in general and Mayan studies in particular.", "http://lucy.ukc.ac.uk/cgi-bin/uncgi/search_bib2/Makhzan", "<b>Restricted to Gorgas Library.</b> Anthropology Bibliography provides a cumulative version of the annual print publication Bibliographic guide to Anthropology and Archaeology. Also included are the catalog records of Harvard University's Tozzer Library. Founded in 1866 as the Library of the Peabody Museum of Archaeology and Ethnology, Tozzer holds more than 210,000 books, monographic series, scholarly periodicals, maps, and audiovisual materials. The collection, though representative of all aspects of anthropology and archaeology, is historically and currently strong in Mesoamerica in general and Mayan studies in particular.", "true", "	", "",2 ],
["wf_anthrosource", "AnthroSource", "2", "0", "", "E Journal package of current issues of publications from the American Anthropological Association, searchable, fulltext access.  Some citation only access to archival pubs.", "http://www.anthrosource.net/", "AnthroSource", "true", "	", "",2 ],
["wf_appliedscitech", "Applied Science and Technology Index", "2", "0", "", "Indexes journal articles, product evaluations, and book reviews from over 390 English language periodicals in the fields of engineering, aeronautics, chemistry, computer technology and applications, earth sciences, energy and environment, mathematics, metallurgy, and physics. The database also covers industries such as construction, materials, robotics, telecommunications, and transportation.", "http://hwwilsonweb.com/?sp.dbid.p=S(WS)&sp.nextform=advsrch.htm", "Applied Science & Technology  Abstracts", "true", "	", "",2 ],
["wf_archivesusa", "Archives USA", "2", "0", "", "Access to holdings and contact information of more than 5,480 repositories.  Indexes to 132,396 special collections.  Powerfully integrated.  This resource will be useful for anyone doing primary research in any field – especially history, American Studies, English, Philosophy, African American Studies, Political Science, Musicology, etc…It will also be a great resource for SLIS students, especially those working in archives-related coursework.", "http://archives.chadwyck.com", "ArchivesUSA", "true", "	", "",2 ],
["wf_aribib", "ARIBIB ARI Bibliographical Database for Astronomical References", "2", "0", "", "Contains references in astronomy and astrophysics.", "http://www.ari.uni-heidelberg.de/cgi-bin/aribib/aribib", "Contains references in astronomy and astrophysics.", "true", "	", "",2 ],
["wf_artfulltext", "Art Full Text", "2", "0", "", "Indexes, abstracts, and full-text from international periodicals, yearbooks, and museum bulletins. Areas covered include archaeology, architecture, art, film, humanities, marketing, motion pictures and photography.", "http://hwwilsonweb.com/?sp.dbid.p=S(Y7,XW)&sp.nextform=advsrch.htm", "Art Full Text", "true", "	", "",2 ],
["wf_artindexretro", "Art Index Retrospective", "2", "0", "", "Provides searchable indexing spanning 55 years of art journalism from 420 noted publications around the globe, reflecting coverage provided from 1929 through 1984. Art Index Retrospective cites sources published in French, Italian, German, Spanish, and Dutch, as well as in English. In addition to periodicals, users will find data from important yearbooks and select museum bulletins.", "http://hwwilsonweb.com/?sp.dbid.p=S(Y7,XW)&sp.nextform=advsrch.htm", "Art Index Retrospective: 1929-1984", "false", "	", "",2 ],
["wf_artfl", "ARTFL Project", "2", "0", "", "ARTFL is a searchable corpus of primarily French texts in the areas of literature, criticism, biology, history, economics, and philosophy. Genres include novels, verse, theater, journalism, essays, and treatises. The eighteenth, nineteenth, and twentieth centuries are about equally represented, with smaller sections devoted to seventeenth-century and medieval/Renaissance texts. Also included are several discrete subject databases: Provençal poetry (12th-13th centuries); French Women Writers (16th-19th centuries); Diderot’s Encyclopédie; Textes de Français Ancien (12th-15th centuries); Opera del Vocabulario Italiano (vernacular texts prior to 1375); and Dictionnaires d’Autrefois (1552-1935). Because, in most cases, standard scholarly editions were used in converting the texts to machine-readable form, some copyright restrictions apply.", "http://humanities.uchicago.edu/orgs/ARTFL/", "ARTFL Project", "true", "	", "",2 ],
["wf_articlefirst", "Article First", "2", "0", "", "Contains bibliographic citations that describe items listed on the table of contents pages of more than 13,000 journals in science, technology, medicine, social science, business, the humanities, and popular culture.", "http://newfirstsearch.oclc.org/dbname=ArticleFirst", "OCLC ArticleFirst®", "true", "	", "",2 ],
["~LINK_ONLY_15123", "<!-- link only -->Arts and Humanities Citation Index", "2", "0", "", "Arts & Humanities Citation Index is a multidisciplinary database covering the journal literature of the arts and humanities. It indexes 1,144 of the world's leading arts and humanities journals, as well as covering individually selected, relevant items from over 6,800 major science and social science journals. -- ISI Web of Science", "http://isiknowledge.com/wos", "Arts & Humanities Citation Index is a multidisciplinary database covering the journal literature of the arts and humanities. It indexes 1,144 of the world's leading arts and humanities journals, as well as covering individually selected, relevant items from over 6,800 major science and social science journals. -- ISI Web of Science", "true", "	", "",2 ],
["wf_asceonline", "ASCE Online Research Library", "2", "0", "", "The research library includes ASCE Conference Proceedings and 31 ASCE journals.", "http://ascelibrary.aip.org/", "ASCE Online Research Library", "false", "	", "",2 ],
["wf_galeau", "Associations Unlimited", "2", "0", "", "Contains information for approximately 455,000 international and U.S. national, regional, state, and local nonprofit membership organizations in all fields. For some 2,600 major U.S. national associations, it provides full-text association materials such as brochures, pamphlets, and membership application forms.", "http://infotrac.galegroup.com/itweb/tusc49521?db=AU", "Associations Unlimited", "true", "	", "",2 ],
["wf_ebscoxml_rfh", "ATLA Religion Database with ATLASerials", "2", "0", "", "ATLA Religion Database with ATLASerials is the full text version of the ATLA Religion Database. This database provides a collection of major religious and theology journals selected by religion scholars in the United States. ATLA Religion Database with ATLASerials contains full text journals representing all major religious faiths, denominations and language groups are included.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=rfh", "ATLA Religion Database with ATLASerials", "true", "	", "",2 ],
["~LINK_ONLY_9173", "<!-- link only -->Auto Repair Reference Center", "2", "0", "", "The Auto Repair Reference Center is an online database of information on the repair and maintenance of automobiles, imported and domestic, made from 1954- to the present. . Includes care and repair tips, recalls, maintenance schedules, diagrams, photographs.", "http://search.ebscohost.com/login.aspx?profile=autorefctr", "The Auto Repair Reference Center is an online database of information on the repair and maintenance of automobiles, imported and domestic, made from 1954- to the present. . Includes care and repair tips, recalls, maintenance schedules, diagrams, photographs.", "true", "	", "",2 ],
["wf_bdslonline", "Bibliographie der deutschen Sprach- und Literaturwissenschaft", "2", "0", "", "German language index of (primarily) German language periodicals. Covers all aspects of German language and literature. Indexes significantly more German language publications than other English language literature indexes (MLA, Humanities Index, etc.)", "http://www.bdsl-online.de", "Bibliographie der deutschen Sprach- und Literaturwissenschaft", "true", "	", "",2 ],
["wf_bas", "Bibliography of Asian Studies", "2", "0", "", "Provides citations to western-language periodical articles, chapters in edited volumes, conference proceedings, anthologies, Festschriften, etc. pertaining to east, southeast, and south Asia.", "http://ets.umdl.umich.edu/b/bas", "Bibliography of Asian Studies  conference proceedings, anthologies, and Festschriften, etc., published from 1971 until the present day. It encompasses the full content of the annual printed volumes of the BAS from the 1971 to the 1991 editions (the 1991 edition was the last volume available in print form).", "true", "	", "",2 ],
["wf_webspirs_biblioha", "Bibliography of the History of Art", "2", "0", "", "Indexes and abstracts art-related books, conference proceedings, dissertations, exhibition catalogs, and articles from 4,000 periodicals on European and American art from late antiquity to the present.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=BHAA", "Bibliography of the History of Art", "true", "	", "",2 ],
["wf_galebgmi", "Biography and Genealogy Master Index", "2", "0", "", "Biography and Genealogy Master Index indexes various editions of over 700 biographical reference sources, both current and retrospective, that cover historical as well as contemporary figures from all fields of endeavor.", "http://galenet.gale.com/a/acp/db/bgmi/", "Biography and Genealogy Master Index", "true", "	", "",2 ],
["wf_biorefbank", "Biography Reference Bank", "2", "0", "", "Biography Reference Bank contains biographical information on more than 500,000 people, from antiquity to the present from all walks of life. It contains the well known titles of Current Biography, the World Author Series, Nobel Prize winners and many others. Also, included are thousands of images. .", "http://vnweb.hwwilsonweb.com/hww/jumpstart.jhtml", "Biography Reference Bank", "true", "	", "",2 ],
["wf_ovidbioab", "Biological Abstracts", "2", "0", "", "Contains bibliographical references with abstracts in English from life sciences research journals published worldwide.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=BXCD", "With almost 6 million records from 1969 to present, Biological Abstracts® is an essential resource for research on life science topics from botany to microbiology to pharmacology, serving to connect researchers with critical journal coverage.", "false", "	", "",2 ],
["wf_ovid_barrm", "Biological Abstracts/RRM", "2", "0", "", "Provides the most comprehensive coverage of worldwide meeting literature, reviews, and books in the life sciences from 1992 to the present. Plus, over 12,000 references to U.S. patent information were added in 1994 . Serving as the essential non-journal literature resource, Biological Abstracts/RRM includes citations to biological and biomedical meeting papers presented at over 2,000 worldwide conferences and symposia. Biological Abstracts/RRM also provides references to review articles. References to books, with synopses, help researchers determine a book's relevance to their research before purchasing it. Updated quarterly.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=BMCD", "With well over 2.5 million records, Biological Abstracts/RRM® provides the most comprehensive coverage of world-wide meeting literature, reviews and books in the life sciences.", "false", "	", "",2 ],
["wf_biolagriindex", "Biological and Agricultural Index Plus", "2", "0", "", "Indexes a wide range of scientific journals, from popular to professional. Areas covered include biology and agriculture. About 45 percent of the focus is on agriculture.", "http://hwwilsonweb.com/?sp.dbid.p=S(WC)&sp.nextform=advsrch.htm", "", "false", "	", "",2 ],
["wf_bioone", "BioOne", "2", "0", "", "Full-text of over 50 bioscience research journals, most of which are published by small societies and non-commercial publishers. Browseable by date. Searchable by author and keyword in the title, abstract, full-text, or reference fields.", "http://www.bioone.org/", "BioOne", "false", "	", "",2 ],
["wf_aspblack", "Black Drama", "2", "0", "", "Black Drama contains the full text of 1,200 plays written by more that 150 playwrights from North America, English-speaking Africa, the Caribbean, and other African diaspora countries. Many of the workks are rare, hard to find, or out of print.", "http://www.alexanderstreet2.com/bldrlive/", "Black Drama", "true", "	", "",2 ],
["wf_bscenter", "Black Studies Center", "2", "0", "", "Black Studies Center is a leading tool that supports research, teaching, and learning in Black Studies and other disciplines that benefit from a more detailed coverage of the black experience such as history, literature, political science, sociology, philosophy, and religion.  The Black Studies Center is the resource you’ve been waiting for—a digital core collection of primary and secondary sources that record and illuminate the Black experience, from ancient Africa through modern times.  The Black Studies Center provides everything you need to enrich your existing Black Studies collection or start a new one from the ground up. You benefit from:  At its core is Schomburg Studies on the Black Experience™, a series of topical studies help define the development of Black Studies as an academic field. The Black Studies Center gateway makes it cross-searchable with the historical backfiles of The Chicago Defender, as well as current scholarly journals from International Index to Black Periodicals—Full Text™.   Historical and current; primary and secondary; popular and scholarly; objective fact and subjective context…studies, newspapers, and periodicals…the ever-growing Black Studies Center is ideal for everyone from academic researchers to young people just beginning to explore the field.", "http://bsc.chadwyck.com", "Black Studies Center", "true", "	", "",2 ],
["~LINK_ONLY_15124", "<!-- link only -->Bloomberg Information Service", "2", "0", "", "<b>Restricted to Bruno Library.</b> Comprehensive source of investment information. Covers all types of securities and worldwide exchanges. Flexible interface allows user to construct graphs, create tables, etc. Professional tool used in investment companies like Merrill Lynch.", "http://www.bloomberg.com/", "<b>Restricted to Bruno Library.</b> Comprehensive source of investment information. Covers all types of securities and worldwide exchanges. Flexible interface allows user to construct graphs, create tables, etc. Professional tool used in investment companies like Merrill Lynch.", "true", "	", "",2 ],
["~LINK_ONLY_15125", "<!-- link only -->BNA Tax Management Library", "2", "0", "", "<b>Restricted to C & BA Complex.</b> Full-text access to BNA's U.S. Income and Estates, Gifts, and Trusts porfolios. Supporting primary sources such as the Internal Revenue Code, Federal Tax Cases, etc. are also included.", "http://library.bnatax.com/", "<b>Restricted to C & BA Complex.</b> Full-text access to BNA's U.S. Income and Estates, Gifts, and Trusts porfolios. Supporting primary sources such as the Internal Revenue Code, Federal Tax Cases, etc. are also included.", "true", "	", "",2 ],
["wf_wilsonbrd", "Book Review Digest Plus", "2", "0", "", "Reviews of English language fiction and nonfiction books from 1983-current.  Limited to 4 simultaneous users.  Use is restricted to students, faculty, and staff of the University of Alabama.", "http://vnweb.hwwilsonweb.com/hww/jumpstart.jhtml?prod=BRD", "Book Review Digest Plus", "true", "	", "",2 ],
["wf_wilsonbrdretro", "Book Review Digest Retrospective", "2", "0", "", "Reviews of English language fiction and nonfiction books from 1905-1982.", "http://vnweb.hwwilsonweb.com/hww/jumpstart.jhtml?prod=BRDR", "", "false", "	", "",2 ],
["wf_ift:galebookreview", "Book Review Index", "2", "0", "", "Book Review Index provides quick access to reviews of books, periodicals, books on tape and electronic media representing a wide range of popular, academic and professional interests.  It has up-to-date coverage, broad subject coverage and includes citations for both newly published and older materials.", "http://find.galegroup.com/menu/start?userGroupName=tusc49521&prod=BRI", "Book Review Index", "true", "	", "",2 ],
["wf_globalbooksinprint", "Books in Print (Global)", "2", "0", "", "Global Books In Print contains references and abstracts for books and other published material, including in-print, out-of-print, out-of-stock and forthcoming titles. Global Books In Print with Book Reviews includes full-text reviews from sources such as Library Journal. You can search by author, subject, title, International Standard Book Number (ISBN) and many other ways.", "http://www.globalbooksinprint.com/", "Books in Print (Global)", "true", "	", "",2 ],
["wf_ebsco_booksource", "BookSource: Nonfiction", "2", "0", "", "BookSource: Nonfiction contains informative abstracts and full text for more than 2,000 popular nonfiction books. The database includes full text entries on social studies and science, as well as information on careers, health, sports, adventure, and technology.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=ndh", "BookSource: Nonfiction", "true", "	", "",2 ],
["wf_imb", "Brepolis Medieval Bibliographies", "2", "0", "", "Brepolis Medieval Bibliographies is a cluster of databases.  International Medieval Bibliography Online - a leading bibliography of the Middle Ages.  Interdisciplinary coverage of the European Middle Ages (c. 400-1500 A.D.)  Some coverage of the Middle East and North Africa (c. 400-1500 A.D.).  Comprises 300,000 articles derived from regular coverage of 4500 periodicals and 5000 miscellany volumes.  All articles are classified with full bibliographical details and subject classifications and indexing familiar to medievalists.  Bibliographie de Civilisation Medievale Online: International Bibliography of Monographs – a bibliography of monographs that will completement the IMB.  The initial information will be drawn from the Cahiers doe Civilisation Medievale and gradually expanded period-by-period to cover the complete European Middle Ages.  Also available from this link is the cluster of Brepolis Medieval Encyclopaedias which include Lexikon des Mittelalters Online, International Encyclopaedia for the Middle Ages, and Europa Sacra.", "http://www.brepolis.net/", "Brepolis Medieval Bibliographies", "true", "	", "",2 ],
["wf_ebonline", "Britannica Online", "2", "0", "", "Encyclopaedia Britannica Online includes the complete encyclopedia, as well as Merriam-Webster's Collegiate Dictionary and Thesaurus, Britannica Student Encyclopedia and the Britannica Book of the Year.  You can find more than 118,000 articles, updated and revised by Encyclopaedia Britannica editors and contributors; over 14,000 illustrations, including photographs, drawings, maps, and flags; and more than 215,000 entries--including definitions, pronunciation guides, and word histories.", "http://search.eb.com", "Britannica Online", "true", "	", "",2 ],
["wf_galebcrc_articles", "Business & Company Resource Center - Article Search", "2", "0", "", "Provides up-to-date competitive intelligence on 300,000+ companies and information concerning career and investment opportunities. Searchable by company name, ticker symbol, SIC or NAICS code, article subject, or geographic location. Contains company histories, chronologies, and rankings, as well as brand and product information. Contains Investext, CDA Investment Insider buying and selling activity, HR Law Case Digest, and contact information on associations within the company's industry.", "http://infotrac.galegroup.com/itweb/tusc49521?db=BCRC", "Business and Company Resource Center", "true", "	", "",2 ],
["wf_galebcrc", "Business & Company Resource Center - Company Profiles", "2", "0", "", "Provides up-to-date competitive intelligence on 300,000+ companies and information concerning career and investment opportunities. Searchable by company name, ticker symbol, SIC or NAICS code, article subject, or geographic location. Contains company histories, chronologies, and rankings, as well as brand and product information. Contains Investext, CDA Investment Insider buying and selling activity, HR Law Case Digest, and contact information on associations within the company's industry.", "http://infotrac.galegroup.com/itweb/tusc49521?db=BCRC", "Business & Company Resource Center - Company Profiles", "true", "	", "",2 ],
["wf_ebscoxml_buh", "Business Source Premier", "2", "0", "", "Full text of about 3,000 journals in all aspects of business, plus indexing and abstracts for an additional 3,800 journals.  Depth of full-text coverage varies, extending back to 1965 in some cases and further for selected scholarly titles; indexing and abstracts are provided back to 1965.", "http://search.ebscohost.com/login.asp?profile=bsi", "Business Source Premier", "true", "	", "",2 ],
["~LINK_ONLY_15126", "<!-- link only -->CCH Internet Tax Research Network", "2", "0", "", "Web access to the complete text of important state and federal tax materials; codes, regulations, cases, rulings, editorial explanations, and so on. Searchable by code section, keyword, or citation.", "http://tax.cchgroup.com/ipnetwork", "Web access to the complete text of important state and federal tax materials; codes, regulations, cases, rulings, editorial explanations, and so on. Searchable by code section, keyword, or citation.", "true", "	", "",2 ],
["~LINK_ONLY_15127", "<!-- link only -->CenStats", "2", "0", "", "Collection of statistical resources from the Census Bureau databases. Databases include: census tract street locator, international trade data, building permits, zip code business patterns, financial data for state and local schools and governments, USA counties, occupation data by race, Hispanic origin, and sex, annual survey of manufactures, etc.", "http://censtats.census.gov/", "Collection of statistical resources from the Census Bureau databases. Databases include: census tract street locator, international trade data, building permits, zip code business patterns, financial data for state and local schools and governments, USA counties, occupation data by race, Hispanic origin, and sex, annual survey of manufactures, etc.", "true", "	", "",2 ],
["wf_chemnetbase", "CHEMnetBASE", "2", "0", "", "Chemistry handbooks online.", "http://www.chemnetbase.com/", "CHEMnetBASE", "true", "	", "",2 ],
["wf_biblioline_cacwa", "Child Abuse, Child Welfare and Adoption", "2", "0", "", "Provides citations and abstracts to the literature on the maltreatment, safety, permanency and well-being of children. Covers books, journal articles, audiovisual materials, state statutes, final reports from federally-funded grants, conference papers, unpublished papers, reports on completed or continuing research, as well as descriptions of service programs and prevention and treatment strategies.", "http://biblioline.nisc.com/scripts/login.dll?BiblioLine&dbname=QCAN", "Child Abuse, Child Welfare and Adoption", "true", "	", "",2 ],
["wf_odyssi_clcd", "Childrens Literature Comprehensive Database", "2", "0", "", "Comprehensive coverage of children's books, reviews, awards and teaching materials. Reviews 3,000 books annually covering 24 sources since 1993.", "http://clcd.odyssi.com/member/csearch.htm", "Childrens Literature Comprehensive Database", "true", "	", "",2 ],
["wf_ebscoxml_rzh", "CINAHL Plus with Full Text", "2", "0", "", "CINAHL Plus with Full Text provides authoritative coverage for over 3000 journals from the fields of nursing and allied health.  CINAHL Plus with Full Text covers nursing, biomedicine, health sciences librarianship, alternative/complementary medicine, consumer health and 17 allied health disciplines. In addition, this database offers access to health care books, nursing dissertations, selected conference proceedings, standards of practice, educational software, audiovisuals and book chapters, as well as Evidence-Based Care Sheet.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=rzh", "CINAHL Plus with Full Text", "true", "	", "",2 ],
["wf_oclc_claseperiodica", "Clase Periodica", "2", "0", "", "Index of Latin American journals in the sciences and humanities. Combines CLASE (Citas Latinoamericanas en Ciencias Sociales y Humanidades), which indexes indexes documents published in Latin American journals specializing in the social sciences and humanities (over 1,200 sources) and PERIODICA, which covers journals specializing in science and technology (over 1,400 sources). Offers access to more than 300,000 bibliographic citations from documents published in 2,600 scholarly journals published in the Spanish, Portuguese, French and English languages. Contains information from articles, essays, book reviews, monographs, conference proceedings, technical reports, interviews and brief notes published in journals edited in 24 different countries of Latin America and the Caribbean, as well as from publications that focus on Pan-American issues.", "http://newfirstsearch.oclc.org/dbname=ClasePeriodica", "Clase Periodica", "true", "	", "",2 ],
["wf_classical", "Classical Music Library", "2", "0", "", "Classical Music Library is the world's first classical music collection for listening on computers in the library and at home. Includes 12,000-plus recordings plus 1000's of program notes, composer biographies, and images cross-referenced to the recordings. Note: System Requirements for the optimum experience - an audio-enabled computer, Microsoft Internet Explorer 5 or later, Windows Media Player v8 or later.", "http://ua.classical.com/", "Classical Music Library", "true", "	", "",2 ],
["wf_ebscoxml_czh", "Clinical Pharmacology", "2", "0", "", "Clinical Pharmacology provides access up-to-date, concise and clinically-relevant drug monographs for all U.S. prescription drugs, hard-to-find herbal and nutritional supplements, over-the-counter products and new and investigational drugs.", "http://search.ebscohost.com/login.asp?profile=czh", "Clinical Pharmacology", "true", "	", "",2 ],
["wf_ebsco_cochrane", "Cochrane Library", "2", "0", "", "The Cochrane Library is designed to supply evidence-based information to people providing and receiving care, and those responsible for research, teaching, funding and administration at all levels.  The Cochrane Library contains: Cochrane Database of Systematic Reviews, The Database of Abstracts of Reviews of Effectiveness (DARE) and Cochrane Controlled Trials Register.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=coch", "", "false", "	", "",2 ],
["~LINK_ONLY_15128", "<!-- link only -->Collected Works of John Dewey, 1882-1953", "2", "0", "", "<b>Restricted to McLure Library.</b> Contains the complete text of Dewey's work as it appears in the thirty-seven volume printed edition published by Southern Illinois University Press between 1967 and 1990.", "http://www.nlx.com/titles/titldewe.htm", "<b>Restricted to McLure Library.</b> Contains the complete text of Dewey's work as it appears in the thirty-seven volume printed edition published by Southern Illinois University Press between 1967 and 1990.", "true", "	", "",2 ],
["wf_ebscoxml_ufh", "Communication & Mass Media Complete", "2", "0", "", "CMMC offers cover-to-cover indexing and abstracts for over 300 journals, selected coverage of over 100 more, and fulltext for nearly 200 journals. Many major journals have indexing, abstracts, PDFs and searchable citations from their first issues to the present.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=ufh", "Communication & Mass Media Complete", "true", "	", "",2 ],
["wf_csa_electronics", "Communication Abstracts", "2", "0", "", "Electronic version of Communication Abstracts.  Comprehensive coverage/abstracting of articles, reports, papers, books and articles from a variety of publishers, research institutions and professional groups in a field of communications.", "http://www.csa.com/htbin/dbrng.cgi?username=jonb76&access=jonb7676&db=commabs-set-c", "Communication Abstracts", "true", "	", "",2 ],
["wf_eicompendexweb", "Compendex", "2", "0", "", "Provides abstracts and citations for engineering and technical literature published worldwide from over 2,600 journals, conference proceedings, technical reports and monographs.", "http://www.engineeringvillage2.org", "Compendex", "true", "	", "",2 ],
["~LINK_ONLY_15129", "<!-- link only -->Congressional Research Service Index (1916-1995)", "2", "0", "", "<b>Restricted to Gorgas Library.</b> The Congressional Research Service (CRS), a division of the Library of Congress, provides non-partisan, analytical research and reference service to the U.S. Congress. The CRS indexes (1916-1995, 1996-) to the microfiche collection of CRS studies and reports are searchable by author, title, report number, or any word in the abstract provided for each title.", "http://www.lib.ua.edu/cgi-bin/databases.cgi?titlestart=C", "<b>Restricted to Gorgas Library.</b> The Congressional Research Service (CRS), a division of the Library of Congress, provides non-partisan, analytical research and reference service to the U.S. Congress. The CRS indexes (1916-1995, 1996-) to the microfiche collection of CRS studies and reports are searchable by author, title, report number, or any word in the abstract provided for each title.", "true", "	", "",2 ],
["~LINK_ONLY_15130", "<!-- link only -->Congressional Research Service Index (1996-)", "2", "0", "", "<b>Restricted to Gorgas Library.</b> The Congressional Research Service (CRS), a division of the Library of Congress, provides non-partisan, analytical research and reference service to the U.S. Congress. The CRS indexes (1995-1995, 1996-) to the microfiche collection of CRS studies and reports are searchable by author, title, report number, or any word in the abstract provided for each title.", "http://www.lib.ua.edu/cgi-bin/databases.cgi?titlestart=C", "<b>Restricted to Gorgas Library.</b> The Congressional Research Service (CRS), a division of the Library of Congress, provides non-partisan, analytical research and reference service to the U.S. Congress. The CRS indexes (1995-1995, 1996-) to the microfiche collection of CRS studies and reports are searchable by author, title, report number, or any word in the abstract provided for each title.", "true", "	", "",2 ],
["wf_ift:contauthors", "Contemporary Authors", "2", "0", "", "A bio-bibliographical guide to current writers in fiction, general nonfiction, poetry, journalism, drama, motion pictures, television, and other fields. Provides complete biographical and bibliographical references for more than 90,000 authors in the U.S. and around the world.", "http://infotrac.galegroup.com/itweb/tusc49521?db=CA", "Contemporary Authors", "true", "	", "",2 ],
["wf_csa_crimja", "Criminal Justice Abstracts", "2", "0", "", "Comprehensive coverage of international journals, books, reports, dissertations and unpublished papers on criminology and related disciplines.", "http://www.csa.com/htbin/dbrng.cgi?username=jonb76&access=jonb7676&db=cja-set-c", "Criminal Justice Abstracts", "true", "	", "",2 ],
["wf_crlcat", "CRL Databases", "2", "0", "", "The Center for Research Libraries is a consortium of colleges, universities, and libraries committed to making rare scholarly resources available to scholars. The vast CRL holdings, which are available by interlibrary loan, include foreign governments; foreign doctoral dissertations; textbooks; pre-1975 college catalogs; serials from the Russian Federation and former Soviet republics; and scientific research materials. In addition, the Center maintains numerous subject collections pertaining to the history and literature of countries throughout the world. Six area studies microfilming projects cover Africa, Latin America, the Middle East, South Asia, Southeast Asia, and the Slavic and Eastern European countries.", "http://www.crl.edu/catalog/index.htm", "CRL Databases", "false", "	", "",2 ],
["wf_asacis_sqlint", "Current Index to Statistics", "2", "0", "", "Indexes articles on statistics from over 1300 journals, most since 1975. Also includes about 11,000 books.", "http://www.statindex.org/CIS/psqlQuery", "Current Index to Statistics", "false", "	", "",2 ],
["wf_pq_currresalabama", "Current Research at the University of Alabama", "2", "0", "", "Current Research @ the University of Alabama, a companion database to ProQuest Digital Dissertations, includes citations (and many abstracts) for dissertations and theses from the University of Alabama. For the majority of titles published after 1996 (and in some cases prior to 1996), a preview of the first 24 pages is provided as well as the full text, which can be downloaded for free by authorized University of Alabama users.", "http://wwwlib.umi.com/cr/ua/main", "", "true", "	", "",2 ],
["~LINK_ONLY_15131", "<!-- link only -->Database of African American Poetry, 1760-1900", "2", "0", "", "<b>Restricted to Gorgas Library.</b> The Database of African-American Poetry contains the full text of almost 3,000 poems written between 1760 and 1900.", "http://www.lib.uchicago.edu/efts/AAP/", "<b>Restricted to Gorgas Library.</b> The Database of African-American Poetry contains the full text of almost 3,000 poems written between 1760 and 1900.", "true", "	", "",2 ],
["wf_dcbioonline", "Dictionary of Canadian Biography Online", "2", "0", "", "Explore the history of Canada's inhabitants and their culture, thanks to the Dictionary of Canadian Biography Online . There, you will meet people who played an important role in the formation of what is now Canada.", "http://www.biographi.ca/EN/index.html", "Dictionary of Canadian Biography Online", "false", "	", "",2 ],
["wf_galegld_dlb", "Dictionary of Literary Biography", "2", "0", "", "The Dictionary of Literary Biography is the online version of the series with the same name. The  DLB provides nearly 10,000 biographical and critical essays on the lives, works, and careers of authors from all eras and genres.", "http://infotrac.galegroup.com/itweb?db=GLD-4", "Dictionary of Literary Biography", "true", "	", "",2 ],
["wf_oxdnb", "Dictionary of National Biography", "2", "0", "", "Database of 500,000 biographies of men and women who have shaped British history.  Restrictions: 3 simultaneous users.", "http://www.oxforddnb.com/search/", "Dictionary of National Biography", "true", "	", "",2 ],
["wf_pqdissertationft", "Dissertations & Theses", "2", "0", "", "ProQuest dissertations & These (Formerly Digital Dissertations) includes citations, some abstracts, and some full text for dissertations and theses ranging from the first U.S. dissertation, accepted in 1861, to those accepted as recently as last semester.  The full text of dissertations and masters thesis from 1997 forward is provided as is the full-text of Award winning Dissertations (CGS/UMI Distinguished Dissertation Awards).  The full text of many University of Alabama dissertations and theses published after 1996 are provided through the Dissertations & Theses companion database, Current Research @ the University of Alabama.", "http://proquest.umi.com/login?COPT=REJTPUcyODcrM2IxMCszYjBmJklOVD0wJlZFUj0y&clientId=31537", "The ProQuest Dissertations & Theses database (PQDT) offers access to more than 90 percent of the doctoral dissertations accepted each year in North America. The database also covers thousands of dissertations and theses from around the globe.", "true", "	", "",2 ],
["wf_newsbank_americahistnews", "Early American Newspapers, 1690-1876", "2", "0", "", "Digitized versions of early American Newspapers from The American Antiquarian Society, private collections and The Library of Congress, Brown, Harvard, et al.  Based on the microfilm collection of the same name.", "http://infoweb.newsbank.com/?db=EANX", "", "true", "	", "",2 ],
["wf_proeeb", "Early English Books Online™, 1475-1700", "2", "0", "", "Contains over 125,000 titles listed in Pollard & Redgrave's Short-Title Catalogue, Wing's Short-Title Catalogue, and the Thomason Tracts.", "http://eebo.chadwyck.com", "Early English Books Online™, 1475-1700 (EEBO) provides digital access to more than 100,000 literary and historical classics. Through the Web, researchers can view images that accurately reflect the way the works appeared in their original printed editions.", "true", "	", "",2 ],
["wf_ebscoxml_ani", "EBSCO Animals", "2", "0", "", "Provides in-depth information, with images, on a variety of topics relating to animals. This encyclopedia database consists of indexing, abstracts, and full-text records describing the nature and habitat of familiar animals.", "http://search.ebscohost.com/login.asp?profile=anmls", "Encyclopedia of Animals™", "true", "	", "",2 ],
["~LINK_ONLY_10522", "<!-- link only -->EBSCOhost", "2", "0", "", "EBSCOhost is a collection of databases covering various subject areas and directed at various age groups. EBSCOhosts provides full-text coverage of more than 2,500 journals, and abstracting and indexing of many more. Also included are full text of newspapers and encyclopedias, and various images, pamphlets, and brochures.", "http://search.ebscohost.com/login.asp?profile=web", "EBSCOhost is a collection of databases covering various subject areas and directed at various age groups. EBSCOhosts provides full-text coverage of more than 2,500 journals, and abstracting and indexing of many more. Also included are full text of newspapers and encyclopedias, and various images, pamphlets, and brochures.", "true", "	", "",2 ],
["wf_ovideconlit", "EconLit", "2", "0", "", "Citations and abstracts of economic literature. Covers 400 journals, as well as working papers, dissertations, books, proceedings, and more. Abstracts are provided for about half of the recent entries.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=ECON", "EconLit covers a broad range of document types published world-wide, including journal articles, books, and dissertations, as well as articles in collective works, such as conference proceedings and collected essay volumes.", "false", "	", "",2 ],
["wf_educationft", "Education Full Text", "2", "0", "", "Education Full Text is a bibliographic database that indexes and abstracts articles of at least one column in length from English-language periodicals and yearbooks published in the United States and elsewhere.  Limited to 5-8 simultaneous users.  Use is restricted to students, faculty, and staff of the University of Alabama.", "http://hwwilsonweb.com/?sp.dbid.p=S(H9)&sp.nextform=advsrch.htm", "Education Full Text", "true", "	", "",2 ],
["wf_ehrafa", "eHRAF Collection of Archaeology", "2", "0", "", "The eHRAF (Human Relations Area Files) Collection of Archaeology is a collection of archaeological texts indexed by cultures and subjects.", "http://ets.umdl.umich.edu/e/ehrafa/", "", "true", "	", "",2 ],
["wf_ehraf", "eHRAF Collection of Ethnography", "2", "0", "", "The eHRAF (Human Relations Area Files) Collection of Ethnography is a collection of ethnographic texts indexed by cultures and subjects.", "http://ets.umdl.umich.edu/e/ehrafe/", "", "true", "	", "",2 ],
["(wf_eiu_business)", "EIU.com", "2", "0", "", "Also known as EIU Country Intelligence, this database includes current information on business conditions in countries throughout the world. Regional newsletters provide articles on business activity, economic conditions, and political risk. Country Commerce describes requirements for doing business abroad, including local regulations and information on the commercial environment.", "http://db.eiu.com/publications.asp", "", "true", "	", "",2 ],
["wf_oclceco", "Electronic Collections Online (FirstSearch)", "2", "0", "", "A searchable database of a growing collection of journals in a variety of subject areas. Searching across multiple journals and browsing within journals is possible. Bibliographic information is available for all journal issues. Full-text articles, including original text and image content, are available for issues included in the institution subscription.", "http://newfirstsearch.oclc.org/dbname=ECO", "An OCLC collection of scholarly journals", "true", "	", "",2 ],
["wf_wiley_encystatsci", "Encyclopedia of Statistical Sciences", "2", "0", "", "Online encyclopedia of statistical methodologies and applications covers statistics, probability theory, biostatistics, quality control, and economics with emphasis in applications of statistical methods in many disciplines.", "http://www3.interscience.wiley.com/cgi-bin/mrwhome/109561249/HOME", "", "true", "	", "",2 ],
["wf_engshorttitleidx", "English Short Title Catalogue (ESTC)", "2", "0", "", "The English Short Title Catalogue (ESTC) provides bibliographic records for all surviving letter press material published in the British Isles and North America before 1801.  The project includes materials from the British Library and more than 2,000 participating institutions, with holdings information noted in the bibliographic records.  The full text of many works listed here are included in the databases Early English Books Online (EEBO) and Eighteenth-Century Collections Online (ECCO).  References to these databases are included in the ESTC records.", "http://estc.bl.uk/F/?func=file&file_name=login-bl-list", "Provides extensive descriptions and holdings information for letterpress materials printed in Great Britain or any of its dependencies in any language.", "false", "	", "",2 ],
["wf_engnetbase", "ENGnetBase", "2", "0", "", "Consists of a compilation of essential engineering information, including data, facts, figures, graphs, equations, illustrations, and charts. It covers the disciplines of general engineering, structural engineering, mobile communications, remediation engineering, optomechanical engineering, measurement, instrumentation and sensors, communications, electrical engineering, mechanical engineering, technology management, digital signal processing, environmental engineering, and civil engineering.", "http://www.engnetbase.com", "", "true", "	", "",2 ],
["wf_ebscoxml_eric", "ERIC (EBSCO : Online)", "2", "0", "", "Uses the EBSCO search screen interface. ERIC is the world's largest source of information on education and provides indexing and abstracting for over 950,000 articles and documents from 1966 onward.", "http://search.ebscohost.com/login.asp?profile=ec", "ERIC®", "true", "	", "",2 ],
["wf_pq_ethnicnewswatch", "Ethnic Newswatch", "2", "0", "", "Ethnic NewsWatch is a full-text database of newspapers, magazines, and journals of the ethnic, minority, and native press. Included is coverage of issues in Ireland, Israel and the Middle East, Mexico, Bosnia, Armenia, China, Nigeria, and the Ukraine, among other countries. This collection or articles, editorials, columns, reviews, etc. attempts to provide alternative viewpoints on current issues. Updated monthly, Ethnic NewsWatch consists of full-text articles from nearly 200 publications, with over 125,000 articles in Spanish.", "http://proquest.umi.com/pqdweb?RQT=306&TS=1081183443&clientId=31537&lang=en&DBId=14398", "Ethnic NewsWatch™ (ENW) features newspapers, magazines, and journals of the ethnic and minority press, providing researchers access to essential, often overlooked perspectives. With titles dating from 1990, ENW presents a comprehensive, full-text collection of more than 250 publications offering both national and regional coverage.", "true", "	", "",2 ],
["wf_newsbankevans", "Evans Digital Edition", "2", "0", "", "Based on the renowned American bibliography by Charles Evans and enhanced by Roger Bristol's Supplement to Evans' American bibliography. Serves as the foundation for research on every aspect of 17th and 18th century American life. Upon completion, Evans Digital will consist of over 36,000 works and 2,400,000 images.", "http://infoweb.newsbank.com/?db=EVAN&s_start=evans", "", "true", "	", "",2 ],
["wf_ift:aim_new", "Expanded Academic ASAP", "2", "0", "", "Indexes over 1500 journal titles in a variety of subject areas including astronomy, religion, law, history, psychology, humanities, current events, sociology, communications and the general sciences. Articles in over 500 journals are full text.", "http://infotrac.galegroup.com/itweb/tusc49521?db=EAIM", "", "true", "	", "",2 ],
["~LINK_ONLY_15132", "<!-- link only -->Factiva.com", "2", "0", "", "<b>Restricted to Bruno Library.</b> Extensive resource for business information. Full text of 6,000 business and news publications; in-depth company profiles.", "http://www.factiva.com/", "<b>Restricted to Bruno Library.</b> Extensive resource for business information. Full text of 6,000 business and news publications; in-depth company profiles.", "true", "	", "",2 ],
["~LINK_ONLY_15133", "<!-- link only -->Financial Accounting Research System (FARS)", "2", "0", "", "<b>Restricted to Bruno Library.</b> Full text of official pronouncements of the Financial Accounting Standards Board. Retrieve documents by moving through the hierarchical structure of the database or by performing a keyword search.", "http://www.fasb.org/fars/", "<b>Restricted to Bruno Library.</b> Full text of official pronouncements of the Financial Accounting Standards Board. Retrieve documents by moving through the hierarchical structure of the database or by performing a keyword search.", "true", "	", "",2 ],
["wf_galevisualreflibrary", "Gale Virtual Reference Library", "2", "0", "", "Gale Virtual Reference Library is a database of encyclopedias, almanacs, and specialized reference sources for multidisciplinary research.", "http://find.galegroup.com/gvrl/start.do?prodId=GVRL&userGroupName=tusc49521", "Gale Virtual Reference Library", "true", "	", "",2 ],
["wf_pq_genderwatch", "GenderWatch", "2", "0", "", "GenderWatch is a full text database of publications that focus on the impact of gender across a broad spectrum of subject areas. The database provides in-depth coverage of the subjects that are uniquely central to women's lives, including family, childbirth, birth control, daycare, domestic abuse, work and the workplace, sexual harassment, aging, aging parents, body image, eating disorders and social and societal roles.", "http://proquest.umi.com/pqdweb?RQT=306&TS=1081183443&clientId=31537&DBId=14397", "GenderWatch™", "false", "	", "",2 ],
["wf_ift:grgm_new", "General Reference Center Gold", "2", "0", "", "A general interest database that integrates a variety of sources in one easy-to-use interface. Use General Reference Center Gold to find articles from newspapers, reference books, and periodicals, many with full-text and images. Find the latest current events, popular culture, business and industry coverage, the arts and sciences, sports, hobbies, and more.", "http://infotrac.galegroup.com/itweb/tusc49521?db=GRGM", "General Reference Center Gold™", "true", "	", "",2 ],
["wf_generalsciidx", "General Science Index", "2", "0", "", "Provided access to citations to periodicals in the areas of astronomy, atmospheric science, biology, botany, chemistry, conservation, earth science, environment, food, genetics, health, mathematics, medicine, microbiology, nutrition, oceanography, physics, physiology, and zoology.", "http://hwwilsonweb.com/?sp.dbid.p=S(WE)&sp.nextform=advsrch.htm", "The first place to look for answers to science-related questions.", "false", "	", "",2 ],
["wf_webspirs_geogrpahy", "Geography", "2", "0", "", "Indexes over 2000 primary geographical research journals; also indexes books, monographs, reports and theses. Areas covered include all areas of human and physical geography including demography, conservation, environment and international development issues.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=GG", "", "false", "	", "",2 ],
["wf_webspirs_georef", "GeoRef", "2", "0", "", "The database of the American Geological Institute (AGI). Covers worldwide technical literature on geology and geophysics. Corresponds to the print publications: Bibliography and Index of North American Geology, Bibliography of Theses in Geology, Geophysical Abstracts, Bibliography and Index of Geology Exclusive of North America, and Bibliography and Index of Geology. Organizes and indexes papers from over 4,500 serials and other publications representative of the interests of the 20 professional geological and earth science societies that are members of the AGI.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=GE,N", "GeoRef", "false", "	", "",2 ],
["wf_ebscoxml_qth", "GLBT Life with Full Text", "2", "0", "", "Provides abstracts and citations to Gay, Lesbian, Bisexual and Transgender literature published worldwide.  Citations represent periodical articles, books, newspapers, newsletters, case studies, speeches, and other formats.  The National Information Services Corporation’s Sexual Diversity Studies and One National Gay & Lesbian Archives contributed information held in GLBT Life.  Lesbian Herstory Archives of the Lesbian Herstory Educational Foundation will assist with further development of the database.  Depth of coverage varies by source.  Also, includes full text for 50 GLBT journals, magazines and regional newspapers, as well as dozens of full text books.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=qth", "", "true", "	", "",2 ],
["wf_glomy", "Global Insight", "2", "0", "", "Formerly known as World Markets Country Analysis and Forecast.  Up-to-date news and risk analysis of approximately 200 countries and spanning some 170 industries.  Provides analysis of economic, financial and political situation.", "http://myinsight.globalinsight.com/servlet/cats?pageContent=home&imask=1", "", "true", "	", "",2 ],
["wf_globalmid", "Global Market Information Database", "2", "0", "", "GMID is a comprehensive system providing key business intelligence on countries, companies, markets and consumers, with statistics covering 200 countries and historical and forecasted data.   Includes lifestyle indicators and analysis, market analysis, company profiles and market shares.", "http://www.euromonitor.com/gmid", "", "false", "	", "",2 ],
["wf_googlescholar", "Google Scholar", "2", "0", "", "Google Scholar is a freely available scholarly search engine that allows you to search across many disciplines and sources: peer-reviewed papers, theses, books, abstracts and articles – from academic publishers, professional societies, preprint repositories, universities and other scholarly organizations.", "http://scholar.google.com/", "Google Scholar", "true", "	", "",2 ],
["wf_gpo", "GPO Monthly Catalog", "2", "0", "", "Consists of over 380,000 records published by the GPO since July 1976. Includes references to congressional committee reports and hearings, debates, documents from executive departments, and more. Updated monthly.", "http://newfirstsearch.oclc.org/dbname=GPO", "GPO Monthly Catalog", "true", "	", "",2 ],
["wf_grovemusic", "Grove Music Online", "2", "0", "", "Electronic version of the twenty-eight-volume, second edition of the New Grove Dictionary of Music and Musicians (copyright 2001); with updates.  Contains over 29,000 articles; includes full text searching, browsing by subject, and links to images, digital sound, and related sites.", "http://www.grovemusic.com/grovemusic/home/index.html", "Grove Music Online", "true", "	", "",2 ],
["wf_ebscoxml_hxh", "Health Source - Consumer Edition", "2", "0", "", "With Health Source - Consumer Edition you can search for information on many health topics including the medical sciences, food sciences and nutrition, childcare, sports medicine and general health. Health Source -Consumer Edition features searchable full text for over 190 journals including Consumer Reports on Health and Men’s Health, as well as abstracts and indexing for over 205 general health, nutrition and professional health care publications.", "http://search.ebscohost.com/login.asp?profile=hsp", "Health Source®: Consumer Edition", "true", "	", "",2 ],
["wf_ebscoxml_hch", "Health Source: Nursing/Academic", "2", "0", "", "Provides over 520 scholarly full text journals focusing on many medical disciplines. Also featured are abstracts and indexing for over 560 journals. This product offering also includes USP Pharmacopoeia DI: Volume II Advice for the Lay Patient and Stedman's Medical Dictionary - providing users with access to terminology of genetics, oncology, pediatrics, pulmonology, emergency medicine, bacteriology, and laboratory medicine. Coverage of nursing and allied health is particularly strong, including full text from a number of journals related to the field of nursing.", "http://search.ebscohost.com/login.asp?profile=hsa", "Health Source®: Nursing/Academic Edition", "true", "	", "",2 ],
["wf_abccliohistoryabstracts", "Historical Abstracts", "2", "0", "", "A bibliographic reference to the history of the world from 1450 to the present (excluding the United States and Canada). Currently over 2,000 journals published throughout the world are covered. Historical Abstracts includes citations from a targeted selection of hundreds of journals in the social sciences and humanities that are of special interest to researchers and students of history. Also, citations to useful historical books as reviewed by the most prestigious journals in the field and citations to abstracts of dissertations completed worldwide of particular interest for historical research.", "http://serials.abc-clio.com/active/start?_appname=serials&initialdb=HA", "", "true", "	", "",2 ],
["wf_historyebook", "History E-Book Project", "2", "0", "", "The ACLS History E-Book Project (HEB) uses a fully integrated, cross-searchable format to provide access to more than 775 history books chosen by professionals in the field.", "http://www.historyebook.org", "", "true", "	", "",2 ],
["wf_ebscoxml_khh", "History Reference Center", "2", "0", "", "History Reference Center features cover-to-cover full text for more than 650 historical encyclopedias and other non-fiction books. The database also includes full text for nearly 60 leading history periodicals; 58,000 historical documents; 43,000 biographies of historical figures; more than 12,000 historical photos and maps; and 87 hours of historical film and video.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=khh", "History Reference Center®", "true", "	", "",2 ],
["~LINK_ONLY_14737", "<!-- link only -->Hoover's Online", "2", "0", "", "In-depth profiles of approximately 15,000 public and private companies in the U.S. and the world, plus information on initial public offerings, industry snapshots, and business news.", "http://premium.hoovers.com", "", "true", "	", "",2 ],
["wf_chadwyck_hcppapers", "House of Commons Parliamentary Papers", "2", "0", "", "“The House of Commons Parliamentary Papers (HCPP) are the most detailed primary source for the past two centuries, for Britain, its colonies and the wider world.  They are a major part of the historical record.  The Parliamentary papers influenced public opinion and social and political philosophy, and provided a forum for ideas for hundreds of thinkers, among them Marconi, Keynes, and Beveridge.  They are the working documents of government for all areas of social, political, economic and foreign policy, showing how issues were explored and legislation was formed.”", "http://parlipapers.chadwyck.com", "", "true", "	", "",2 ],
["wf_humsoci", "Humanities & Social Sciences Index Retrospective", "2", "0", "", "Indexes scholarly journals as well as non-scholarly specialized periodicals in the Humanities & Social Sciences from 1907-1984.", "http://vnweb.hwwilsonweb.com/hww/jumpstart.jhtml?prod=HSR", "Humanities & Social Sci Retro", "false", "	", "",2 ],
["wf_ebscoxml_hgh", "Humanities International Index", "2", "0", "", "Humanities International Index provides indexing and abstracting for more than 1,700 journals.  Cover-to-cover indexing includes not only scholarly materials, but also essays and reviews, as well as original creative works including poems, fiction, photographs, paintings and illustrations.  Humanities International Index includes everything indexed in the American Humanities Index.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=hgh", "Humanities International Index™", "true", "	", "",2 ],
["wf_ibdgusz", "IBZ: International Bibliography of Periodical", "2", "0", "", "IBZ is an international and interdisciplinary bibliography of academic periodical literature, mainly from the Humanities, Social Sciences and related fields.", "http://gso.gbv.de/DB=2.4/LNG=EN/", "Internationale Bibliographie der geistes- und sozialwissenschaftlichen Zeit", "false", "	", "",2 ],
["wf_ieee", "IEEE Xplore", "2", "0", "", "Index and full text of IEEE and IEE publications: journals, conference proceedings, and standards in electrical engineering.", "http://www.ieeexplore.ieee.org/Xplore/dynhome.jsp", "", "true", "	", "",2 ],
["~LINK_ONLY_15134", "<!-- link only -->ILI Standards Infobase", "2", "0", "", "<b>Restricted to Rodgers Library.</b> Worldwide standards and specifications. Standards from ASME, ISO, NFPA and other organizations.", "http://www.ili-info.com", "<b>Restricted to Rodgers Library.</b> Worldwide standards and specifications. Standards from ASME, ISO, NFPA and other organizations.", "true", "	", "",2 ],
["~LINK_ONLY_15135", "<!-- link only -->Index to US Senate Executive Documents & Reports, 1817-1969", "2", "0", "", "<b>Restricted to Gorgas Library.</b> The executive documents and reports pertain to the treaties, nominations, and other matters of national concern submitted to the Senate by the President of the United States. The collection is searchable by subject, name, place, title, and document or report number.", "http://www.archives.gov/research/alic/reference/admin-history/congressional-serial-set.html", "<b>Restricted to Gorgas Library.</b> The executive documents and reports pertain to the treaties, nominations, and other matters of national concern submitted to the Senate by the President of the United States. The collection is searchable by subject, name, place, title, and document or report number.", "true", "	", "",2 ],
["wf_ift:itof_new", "Info Trac Onefile", "2", "0", "", "A one-stop source for news and periodical articles on a wide range of topics: business, computers, current events, economics, education, environmental issues, health care, hobbies, humanities, law, literature and art, politics, science, social science, sports, technology, and many general interest topics. Includes millions of full-text articles many with images. Updated daily.", "http://infotrac.galegroup.com/itweb/tusc49521?db=ITOF", "InfoTrac® OneFile", "true", "	", "",2 ],
["wf_gale_informe", "Informe", "2", "0", "", "Informe is a full-text collection of mostly Spanish-language (some English) magazines relating to Hispanic culture. Included is information on business, health, technology, arts, and current issues.", "http://infotrac.galegroup.com/itweb/tusc49521?db=IFME", "", "true", "	", "",2 ],
["wf_ei_inspec", "INSPEC", "2", "0", "", "Inspec created by the IEE (Institution of Electrical Engineers), is the leading bibliographic database providing abstracts and indexing to the world's scientific and technical papers in physics, electrical engineering, electronics, communications, control engineering, computing and information technology. Containing over 7 million records, Inspec provides coverage from over 3,500 journals, 1,500 conference proceedings as well as numerous books, dissertations and reports. Examples of titles covered in Inspec include: Accounting Technology, Banking Technology, CA Magazine, Journal of Algorithms, Journal of Applied Econometrics, Machine Design International, and many more. In addition to the core subject areas, Inspec also provides significant coverage of related disciplines such as materials science, oceanography, nuclear engineering, geophysics, biomedical engineering and many more.", "http://www.engineeringvillage2.org/controller/servlet/Controller?CID=quickSearch&database=2", "Inspec provides comprehensive global coverage of scientific and technical literature in the fields of physics, electrical engineering, electronics and computer science.", "true", "	", "",2 ],
["wf_webspirs_ibss", "International Bibliography of the Social Sciences", "2", "0", "", "International Bibliography of the Social Sciences, from the British Library of Political and Economic Science of the London School of Economics and Political Science, indexes the information contained in over 2,600 social sciences journals and 6,000 books each year. Coverage includes the core disciplines of anthropology, economics, political science and sociology, and reflects the increasingly interdisciplinary nature of the social sciences.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=IBSS", "", "false", "	", "",2 ],
["wf_iimp", "International Index to Music Periodicals", "2", "0", "", "IMP draws its current content from more than 300 international music periodicals from over 20 countries. IIMP also includes retrospective coverage from over 165 periodicals dating back as far as 1874. Included in the current and retrospective content are 29 complete-run titles, from inception to the present (or final) issue, and many partial-run titles. IIMP covers nearly all aspects of the world of music, from the most scholarly studies to the latest crazes.", "http://music.chadwyck.com/iimp/search/", "International Index to Music Periodicals", "true", "	", "",2 ],
["~LINK_ONLY_15136", "<!-- link only -->Investext Plus", "2", "0", "", "Images of research reports from major investment banks (e.g., Merrill Lynch, Salomon Brothers, Duff & Phelps) and industry trade associations. Requires the use of Adobe Acrobat reader.  The most recent reports are about six weeks old.", "http://infotrac.galegroup.com/itweb/uoarbw", "Images of research reports from major investment banks (e.g., Merrill Lynch, Salomon Brothers, Duff & Phelps) and industry trade associations. Requires the use of Adobe Acrobat reader.  The most recent reports are about six weeks old.", "true", "	", "",2 ],
["wf_iopej", "IoP Electronic Journals", "2", "0", "", "Searchable full text available for entire archive of the Institute of Physics' journals. Full text access dependent on the University of Alabama Libraries subscriptions.", "http://www.iop.org/EJ/S/1/NAL001888/wVO,S74RB2PtXr2ylravsQ/search", "", "true", "	", "",2 ],
["wf_ig_intldirscholars", "Iter", "2", "0", "", "Iter’s bibliography includes literature pertaining to the Middle Ages and Renaissance (400-1700).  Citations for books, journal material (articles, reviews, review articles, bibliographies, catalogues, abstracts and discographies) are included, as are citations for essays in books (including entries in conference proceedings, festschriften, encyclopedias and exhibition catalogues).”  Also includes a directory of scholars, Iter Italicum, and online journals.”", "http://www.itergateway.org/databases.cfm", "", "false", "	", "",2 ],
["~LINK_ONLY_15137", "<!-- link only -->Journal Citation Reports", "2", "0", "", "Journal Citation Reports often referred to as \"impact factor data\" is an objective way to evaluate the world's leading 1800 social sciences journals and their impact and influence in the research community.", "http://isiknowledge.com/jcr", "Journal Citation Reports often referred to as \"impact factor data\" is an objective way to evaluate the world's leading 1800 social sciences journals and their impact and influence in the research community.", "true", "	", "",2 ],
["wf_jstorage", "JSTOR", "2", "0", "", "Images of the full text of over 100 scholarly titles in a range of subject areas, including economics, finance, and statistics. Search the archive or pull up a specific article.", "http://www.jstor.org", "", "true", "	", "",2 ],
["wf_ift:jredt", "Junior Edition", "2", "0", "", "This periodical database is designed for students in junior high and middle school, with magazines, newspapers and reference books (most are full-text) for information on current events, the arts, science, popular culture, health, people, government, history, sports, and more.", "http://infotrac.galegroup.com/itweb/tusc49521?db=STOJ", "Designed for students in junior high and middle school with access to a variety of indexed and full-text magazines.", "false", "	", "",2 ],
["wf_kidsinfobits", "Kids InfoBits", "2", "0", "", "Kids InfoBits is for grade schoolers, K-5. It features a visually graphic interface, a subject-based search and full-text, magazines, newspaper and reference content for information on current events, the arts, science, health, people, government, history, sports and more.", "http://galenet.galegroup.com/servlet/KidsInfoBits?locID=tusc49521", "Kids InfoBits", "false", "	", "",2 ],
["wf_knovel", "Knovel", "2", "0", "", "Knovel has a database of some of the leading science and engineering reference handbooks, databases, and conference proceedings.", "http://www.knovel.com/", "", "true", "	", "",2 ],
["wf_ift:lt_new", "LegalTrac", "2", "0", "", "Use this database to find articles in all major law reviews, law journals, specialty law and bar association journals, and legal newspapers. Included are articles on Federal and State Cases, Laws and Regulations, Legal Practice, and Taxation. Also included are: British Commonwealth, European Union and International Law.", "http://infotrac.galegroup.com/itweb/tusc49521?db=LT", "", "true", "	", "",2 ],
["~LINK_ONLY_15138", "<!-- link only -->LexisNexis", "2", "0", "", "<b>Restricted to Bruno Library.</b> Broad coverage of news, business, company, financial, accounting, and legal information. Covers hundreds of newspapers, journals, magazines, and broadcast transcripts, as well as official documents of legal, accounting, and regulatory organizations.  Depth of coverage varies by source.", "http://www.lexisnexis.com", "<b>Restricted to Bruno Library.</b> Broad coverage of news, business, company, financial, accounting, and legal information. Covers hundreds of newspapers, journals, magazines, and broadcast transcripts, as well as official documents of legal, accounting, and regulatory organizations.  Depth of coverage varies by source.", "true", "	", "",2 ],
["wf_lnau_quick", "LexisNexis Academic", "2", "0", "", "LexisNexis Academic provides access to full text resources on topics including current and general news; business and financial information; newspapers; company directories; government and politics; medical and health topics; accounting, auditing, and tax; federal and state laws; legal cases; and regulations. Resources include TV and radio news transcripts.", "http://www.lexisnexis.com/universe", "Academic Universe", "true", "	", "",2 ],
["wf_lncu_cissbjt", "LexisNexis Congressional - Documents", "2", "0", "", "Brings together a vast amount of information published by and about the United States Congress. It provides a seamless link to the full range of legislative and public policy resources, including: Congressional documents and related resources as well as a number of publications such as the Congressional Record, United States Code, Code of Federal Regulations, and the National Journal.", "http://web.lexis-nexis.com/congcomp/", "Searches the House & Senate Documents from Lexis Nexis Congressional Publications.", "true", "	", "",2 ],
["wf_lncu_cispub", "LexisNexis Congressional - Reports", "2", "0", "", "Brings together a vast amount of information published by and about the United States Congress. It provides a seamless link to the full range of legislative and public policy resources, including: Congressional documents and related resources as well as a number of publications such as the Congressional Record, United States Code, Code of Federal Regulations, and the National Journal.", "http://web.lexis-nexis.com/congcomp/", "Searches the House & Senate Reports from Lexis Nexis Congressional Publications.", "true", "	", "",2 ],
["wf_lnstat", "LexisNexis Statistical - Abstracts", "2", "0", "", "Statistics produced by federal agencies, states, and intergovernmental organizations with advanced PowerTables which allow direct searching for a table based on subject terms, coverage date, and other criteria. Also includes updated links to the fulltext of many statistical reports on government websites.  Additional Research Tables module adds more PowerTables with special focus on business-related statistics.", "http://web.lexis-nexis.com/statuniv", "", "true", "	", "",2 ],
["wf_lnsu_pwrtbls", "LexisNexis Statistical - Tables", "2", "0", "", "Statistics produced by federal agencies, states, and intergovernmental organizations with advanced PowerTables which allow direct searching for a table based on subject terms, coverage date, and other criteria. Also includes updated links to the fulltext of many statistical reports on government websites.  Additional Research Tables module adds more PowerTables with special focus on business-related statistics.", "http://web.lexis-nexis.com/statuniv", "LexisNexis® Statistical - Tables", "true", "	", "",2 ],
["wf_wfx_voyager", "Libraries' Catalog", "2", "0", "", "", "http://library.ua.edu/cgi-bin/Pwebrecon.cgi", "Libraries' Catalog", "false", "	", "",2 ],
["wf_wilsonliblit", "Library Literature and Information Science Full Text", "2", "0", "", "A bibliographic database that indexes more than 229 key library and information science periodicals published in the United States and elsewhere from 1984 to the present. Books, chapters within books, conference proceedings, library school theses, and pamphlets are also indexed.", "http://hwwilsonweb.com/?sp.dbid.p=S(Y6)&sp.nextform=advsrch.htm", "Library  Literature & Information Science Full Text", "true", "	", "",2 ],
["wf_ebscoxml_lxh", "Library, Information Science & Technology Abstracts", "2", "0", "", "Bibliographic database providing free coverage on subjects such as librarianship, classification, cataloging, bibliometrics, online info retrieval, information management and more.", "http://libdata.lib.ua.edu:2048/login?url=http://search.ebscohost.com/login.asp?profile=web&defaultdb=lxh", "", "true", "	", "",2 ],
["wf_ebscoxml_vlh", "Libros en Venta en América Latina y España", "2", "0", "", "Libros en Venta (Spanish Books in Print) includes in-print titles from more than 26,000 Spanish and Latin American publishers.  In addition to basic bibliographic and pricing information, some records include reviews, descriptions, tables of contents, and cover images.  LEV’s publisher information section includes publisher street addresses, phone and fax numbers, e-mail addresses, Website URLs, and the names of distributors and sales outlets.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=vlh", "LIBROS EN VENTA en América Latina y España™ (LEV)", "true", "	", "",2 ],
["wf_linguisticslanguagebehaviorabs", "Linguistics and Language Behavior Abstracts", "2", "0", "", "\"Linguistics and Language Behavior Abstracts provides non-evaluative abstracts of articles from approximately 2,000 serials published worldwide, coverage of recent books, enhanced dissertation listings, from Dissertation Abstracts International, and bibliographic citations for book reviews, that appear in journals abstracted for Sociological Abstracts, LLC.\" --WebSpirs Database Guides", "http://www.csa.com/htbin/dbrng.cgi?username=jonb76&access=jonb7676&db=llba-set-c&adv=1", "Linguistics and Language Behavior Abstracts", "true", "	", "",2 ],
["wf_eblrc", "Literary Reference Center", "2", "0", "", "Literary Reference Center is a full text database that combines information from major reference works, books, and literary journals.  This resource plot summaries, synopses, work overviews, literary criticism, author biographies, book reviews, classic and contemporary poems; classic and contemporary short stories; classic novels, author interviews, and images of literary figures.  The database contains the full text of many notable reference works including:  the Bloom Series, all of MagillOnLiterature Plus, and  the Masterplots series.", "http://search.ebscohost.com/login.aspx?profile=lrc", "Literary Reference Center™ is a comprehensive database that provides users with a broad spectrum of information on thousands of authors and their works across literary disciplines and timeframes", "true", "	", "",2 ],
["wf_chadwyck_lion", "Literature Online (LION)", "2", "0", "", "A fully searchable Library of more than 330,000 works of English and American poetry, drama and prose, plus biographies, bibliographies, and key criticism and reference resources.", "http://lion.chadwyck.com", "Literature Online contains a full library of up-to-date, fully searchable criticism and reference resources in addition to the full text of poetry, drama, and prose fiction from the seventh century to the present day", "true", "	", "",2 ],
["wf_galelitrc", "Literature Resource Center", "2", "0", "", "The Literature Resource Center provides access to biographies, bibliographies, and critical analysis (criticisms) of authors from every age and literary discipline. The LRC covers more than 90,000 novelists, poets, essayists, journalists, and other writers, with in-depth coverage of 2,000 of the most-studied authors. Search by author name, title, genre, literary movement, or literary themes or combine criteria to create a highly-targeted custom search path. Also includes work overviews and and plot summaries.", "http://infotrac.galegroup.com/itweb/tusc49521?db=LitRC", "Literature Resource Center", "true", "	", "",2 ],
["~LINK_ONLY_15139", "<!-- link only -->LIVEDGAR", "2", "0", "", "Search engine that provides for expanded coverage and advanced search capabilities of corporation reports in the Securities and Exchange Commission (SEC) database. Enables real-time searches on up-to-the-minute filings in the SEC EDGAR system.", "http://login.gsionline.com/REDIRECT", "Search engine that provides for expanded coverage and advanced search capabilities of corporation reports in the Securities and Exchange Commission (SEC) database. Enables real-time searches on up-to-the-minute filings in the SEC EDGAR system.", "true", "	", "",2 ],
["wf_marcive", "MarciveWeb DOCS", "2", "0", "", "Catalog of U.S. Government Publications July 1976 - Current.", "http://www.marcive.com/webdocs/webdocs.dll", "Catalog of Government Printing Office documents", "true", "	", "",2 ],
["wf_marketres_ac", "MarketResearch.com Academic", "2", "0", "", "Collection of market research reports covering a wide range of industries and products. Contains information on product sales and distribution channels, market share, consumer demographics, and more.", "http://www.academic.marketresearch.com/", "", "true", "	", "",2 ],
["wf_ebscoxml_ulh", "MAS Ultra - school edition", "2", "0", "", "Provides full text from 440+ periodicals covering general reference, health, science, and other areas. Contains indexing and abstracts for 530+ magazines and 3,000+ charts, tables and graphs. Also includes 5,000 full-text Magill Book Reviews; full text of 144 Macmillan books; 540+ full-text health and science-related pamphlets; coverage of the CIA World Factbook; and Essential Documents in American History.", "http://search.ebscohost.com/login.asp?profile=mfu", "MAS Ultra™ -- School Edition", "true", "	", "",2 ],
["wf_ebscoxml_f5h", "MasterFILE Premier", "2", "0", "", "Provides full text from over 1,810 general reference, business, consumer health, general science, and multi-cultural periodicals. In addition to the full text, offers indexing and abstracts for over 2,780 periodicals. Full text backfiles go as far back as January of 1990, while indexing and abstract backfiles go as far back as January of 1984.", "http://search.ebscohost.com/login.asp?profile=mfp", "MasterFILE™ Premier", "true", "	", "",2 ],
["wf_amsmathscinet", "MathSciNet", "2", "0", "", "MathSciNet is a database produced by the American Mathematical Society, and it indexes new published contributions to mathematical research. MathSciNet provides Web access to Current Mathematical Publications (CMP), which is a subject index of bibliographic data for recent and forthcoming publications, and Mathematical Reviews (MR), which provides reviews or summaries from 1600 journals, serials and books. Records can be searched by standard methods of author, title, keyword, etc., or through the database's subject classification system. Covers 1940-present: CMP data is updated daily, MR monthly. (Source=UIUC)", "http://www.ams.org/mathscinet/", "Comprehensive database covering the world's mathematical literature since 1940", "true", "	", "",2 ],
["wf_ebscoxml_loh", "Mental Measurements Yearbook", "2", "0", "", "Descriptions and reviews of tests and assessments in 18 major categories, mostly related to education and psychology.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=loh", "Mental Measurements Yearbook™", "true", "	", "",2 ],
["~LINK_ONLY_15140", "<!-- link only -->Mergent Online", "2", "0", "", "<b>Restricted to Bruno Library.</b> Financial information on public companies, including digital images of annual reports. Contains same information as found in the print Moody's Manuals, expanded and enhanced.  May provide ten years of financial statement summaries and three years of annual reports.", "http://www.mergentonline.com/", "<b>Restricted to Bruno Library.</b> Financial information on public companies, including digital images of annual reports. Contains same information as found in the print Moody's Manuals, expanded and enhanced.  May provide ten years of financial statement summaries and three years of annual reports.", "true", "	", "",2 ],
["wf_ebscoxml_mih", "Middle Search Plus", "2", "0", "", "Provides full-text from nearly 120 general reference, health, and science magazines appropriate for middle and Jr. high students. In additions it also offers indexing and abstracts for nearly 150 magazines. Includes 2,000 charts, tables and graphs; full-text of 36 reference books; full-text of hundreds of pamphlets; over 5,000 full-text magill Book Reviews; Funk & Wagnall's New Encyclopedia; coverage of the CIA World Factbook; Essential Documents in American History; and The Encyclopedia of Animals.", "http://search.ebscohost.com/login.asp?profile=msp", "Middle Search® Plus", "true", "	", "",2 ],
["wf_ebscoxml_mth", "Military & Government Collection", "2", "0", "", "Designed to offer current news pertaining to all branches of the military and government, this database offers a thorough collection of periodicals, academic journals, and other content pertinent to the increasing needs of those sites. The Military & Government Collection provides cover-to-cover full text for nearly 300 journals and periodicals and indexing and abstracts for nearly 400 titles.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=mth", "Military & Government Collection™", "true", "	", "",2 ],
["wf_ebscoxml_mzh", "MLA International Bibliography", "2", "0", "", "Produced by the Modern Language Association of America, consists of bibliographic records pertaining to literature, language, linguistics, and folklore, and includes coverage from 1963 to the present. Provides access to scholarly research in over 3,000 journals and series, and covers relevant monographs, working papers, proceedings, bibliographies, and other formats.", "http://search.ebscohost.com/login.asp?profile=mzh", "MLA International Bibliography", "true", "	", "",2 ],
["~LINK_ONLY_15141", "<!-- link only -->Morningstar.com Library Edition", "2", "0", "", "Morningstar.com Library Edition is an Internet-based research service covering 6,000 stocks, 16,000 mutual funds, and 150 exchange-traded funds.  Includes 3,700 Fund and Analyst reports.  Limited to 4 simultaneous users.  Use is restricted to students, faculty, and staff of the University of Alabama.", "http://library.morningstar.com", "Morningstar.com Library Edition is an Internet-based research service covering 6,000 stocks, 16,000 mutual funds, and 150 exchange-traded funds.  Includes 3,700 Fund and Analyst reports.  Limited to 4 simultaneous users.  Use is restricted to students, faculty, and staff of the University of Alabama.", "true", "	", "",2 ],
["wf_musicindex", "Music Index Online", "1", "0", "", "Published since 1949, The Music Index: A Subject-Author Guide to Music Periodical Literature indexes over 600 international periodicals about music. A broad range of subjects is covered including: composers and performers, the history of music, forms and types of music, and music instruments. Book reviews, music reviews, and reviews of performances are indexed, and first performances and obituaries are noted. The online version of Music Index provides coverage from 1979.", "http://www.hppmusicindex.com", "Single most comprehensive annual  subject-author guide to music periodical literature.", "true", "	", "",2 ],
["wf_webspirs_nasw", "NASW Register of Clinical Social Workers", "2", "0", "", "NASW Clinical Register database contains listing of registered social workers, including their address and phone numbers, education and specialization, type of practice and license information.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=CS,SW", "", "true", "	", "",2 ],
["~LINK_ONLY_15142", "<!-- link only -->Naxos Music Library", "2", "0", "", "Comprehensive collection of classical music available for streaming online; also includes selections from historical recordings, jazz, world, folk, and Chinese music.  Contains the entire Naxos, Marco Polo, and Da Capo catalogs as well as recordings from the Canadian Broadcasting Corporation, BIS (Sweden), and Analekta.  Updated monthly.  Limited to 5 simultaneous users.", "http://ua.naxosmusiclibrary.com", "Comprehensive collection of classical music available for streaming online; also includes selections from historical recordings, jazz, world, folk, and Chinese music.  Contains the entire Naxos, Marco Polo, and Da Capo catalogs as well as recordings from the Canadian Broadcasting Corporation, BIS (Sweden), and Analekta.  Updated monthly.  Limited to 5 simultaneous users.", "true", "	", "",2 ],
["wf_ebscoxml_nfh", "Newspaper Source", "2", "0", "", "Provides cover-to-cover indexing for The New York Times, Wall Street Journal, and USA Today from 1995 to the present. Also included is complete full-text coverage of the Christian Science Monitor and selective full-text coverage of the Los Angeles Times, 159 regional U.S. newspapers, 18 international newspapers, and 6 newswires.", "http://search.ebscohost.com/login.asp?profile=nps", "Newspaper Source™", "true", "	", "",2 ],
["wf_aswomenletters", "North American Women's Letters and Diaries", "2", "0", "", "When complete, North American Women's Letters and Diaries will be the largest collection of women's diaries and correspondence ever assembled. Spanning more than 300 years, it will bring the personal experiences of 1,500 women to researchers, students, and general readers.", "http://www.alexanderstreet2.com/NWLDLive", "Spanning more than 300 years, presents the personal experiences of hundreds of women", "true", "	", "",2 ],
["wf_ovidntis", "NTIS", "2", "0", "", "\"The National Technical Information Service (NTIS), an agency of the U.S. Department of Commerce, is the central source for the public sale of U.S. Government-sponsored research, development, and engineering reports. The NTIS Bibliographic Database contains bibliographic citations and summaries of information products, including technical reports, software packages, and data files.\" -- WebSpirs Database Guides", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=NT", "", "false", "	", "",2 ],
["wf_geolib", "Online Geographical Bibliography", "2", "0", "", "Bibliography of geographical publications.", "http://geobib.lib.uwm.edu/", "Citation database covering scholarly literature on physical and human geography.", "false", "	", "",2 ],
["wf_ift:ovrc_new", "Opposing Viewpoints Resource Center", "2", "0", "", "Access to viewpoint articles, topic overviews, statistics, primary documents and websites on social issues.", "http://infotrac.galegroup.com/itweb?db=OVRC", "Opposing Viewpoints Resource Center", "true", "	", "",2 ],
["wf_oxfordengdict", "Oxford English Dictionary", "2", "0", "", "The OED Online contains the complete text of the 20-volume Second Edition, first published in 1989, together with its 3-volume Additions Series, published in 1993 (volumes 1 and 2) and 1997 volume 3)", "http://dictionary.oed.com/entrance.dtl", "Oxford English Dictionary", "true", "	", "",2 ],
["wf_ofr_all", "Oxford Reference Online Premium", "2", "0", "", "The Oxford Reference Online Premium collection contains reference books covering a wide variety of topics; dictionaries of architecture, plants, geography, literature, mathematics, mythology, and many others. Includes the popular “Oxford Companion” series.", "http://www.oxfordreference.com/", "Oxford Reference Online", "true", "	", "",2 ],
["wf_csa_pais", "PAIS International", "2", "0", "", "Indexes journal articles; books; government documents; statistical compilations; committee reports; directories; serials; reports of public, intergovernmental, and private organizations; and most other forms of printed literature from all over the world. Areas covered include the literature of public policy, social policy, and the social sciences in general.", "http://www.csa.com/htbin/dbrng.cgi?username=jonb76&access=jonb7676&db=pais-set-c&adv=1", "PAIS International", "true", "	", "",2 ],
["wf_papersfirst", "PapersFirst", "2", "0", "", "Over 580,000 papers included in every congress, conference, exposition, workshop, symposium, and meeting received at The British Library from October 1993 to the present.", "http://newfirstsearch.oclc.org/dbname=PapersFirst", "OCLC PapersFirst", "true", "	", "",2 ],
["wf_chadwyck_poi", "Periodicals Index Online", "2", "0", "", "Index to millions of articles published in humanities and social sciences periodicals. Limited to 25 simultaneous users.  Use is restricted to students, faculty, and staff of the University of Alabama.", "http://pio.chadwyck.com", "Periodicals Index Online (PIO) (formerly, Periodicals Contents Index (PCI)), is the leading multidisciplinary index to the arts, humanities, and the social sciences.  Over 4,720 journals are included, with an additional one million records from new journals added yearly.    Complete runs of these titles are indexed, from first issue to 1995 or ceased date.  The scope is international, including journals in English, French, German, Italian, Spanish, and most other Western languages.   Over 30% of the content indexes non-English scholarly titles.", "true", "	", "",2 ],
["wf_webspirs_phil", "Philosopher's Index", "2", "0", "", "Web-based version of printed Philosophers' Index with abstracts covering scholarly research in the fifteen fields of philosophy, published in journals and books since 1940. The database cites works in English, Spanish, German, French, Italian, Russian, Chinese and Japanese. It also includes complete coverage of international articles from anthologies and books written in English and other languages. Includes all major fields of philosophy, including aesthetics, epistemology, ethics, logic (including mathematics), metaphysics (including philosophy of mind, existentialism, and phenomenology), political philosophy (including philosophy of law), social philosophy, and the philosophy of education, history, language, science and religion.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=PHIL", "Philosopher's Index", "true", "	", "",2 ],
["wf_wilsonplayidx", "Play Index", "2", "0", "", "Play Index Online provides the publishing information needed to locate a play in the variety of ways it is available: published as a separate title or in an anthology or collection.  Included are links to Web sites that can contain full text, criticism, and other useful information.  Search over 30.000 plays written from Antiquity to the present and published from 1949 to the present.  Play Index Online is searchable by title, author, subject, style, genre, and cast type.", "http://vnweb.hwwilsonweb.com/hww/jumpstart.jhtml?prod=PLAY", "", "false", "	", "",2 ],
["wf_poemfinder", "Poem Finder", "2", "0", "", "Contains 550,000 indexed poems, 85,000 full-text poems, 600+ poem explanations, and features such as the Year's Best Poetry. Kids' Korner covers poems for children. Also includes Short Story Finder, which contains thousands of full-text short stories.", "http://www.litfinder.com/module.asp?id=105", "", "true", "	", "",2 ],
["wf_ebscoxml_prh", "Primary Search", "2", "0", "", "Provides full text from 50+ children's magazines appropriate for elementary schools and children's reading rooms, which can be searched by Lexile reading level. Contains indexing and abstracts for nearly 80 magazines. Also includes the following full-text sources: The World Almanac of the U.S.A. and The World Almanac for Kids; The Encyclopedia of Animals; Funk & Wagnall's New Encyclopedia; and full-text for over 100 pamphlets. This database is updated weekly.", "http://search.ebscohost.com/login.asp?profile=psh", "Primary Search®", "false", "	", "",2 ],
["wf_lnafricanamerstudies", "Primary Sources in African American History", "2", "0", "", "American history resource for African American studies.  Sources include scholarly and reference articles, contemporary accounts, manuscripts, laws, court cases, speeches, photographs, and political cartoons", "http://www.lexisnexis.com/histuniv", "LexisNexis® Primary Sources in History", "true", "	", "",2 ],
["wf_oclcproceedings", "ProceedingsFirst", "2", "0", "", "Over 19,000 citations of every congress, symposium, conference, exposition, workshop and meeting received at The British Library from October 1993 to the present.", "http://newfirstsearch.oclc.org/dbname=Proceedings", "ProceedingsFirst", "true", "	", "",2 ],
["wf_ift:profcol_new", "Professional Collection", "2", "0", "", "The Professional collection contains index/abstracting/full-text of education journals", "http://infotrac.galegroup.com/itweb/tusc49521?db=SP00", "", "true", "	", "",2 ],
["wf_ebscoxml_tfh", "Professional Development Collection", "2", "0", "", "Specialized collection of citations, abstracts, and full-text articles and images for education professionals. Covers topics from Children's health and development to pedagogical theory and practice from 500+ professional development titles.", "http://search.ebscohost.com/login.asp?profile=pdc", "Professional Development Collection™", "true", "	", "",2 ],
["wf_lo_projecteuclid", "Project Euclid", "2", "0", "", "Project Euclid's mission is to advance scholarly communication in the field of theoretical and applied mathematics and statistics. Full-text searching, reference linking, interoperability through the Open Archives Initiative, and long-term retention of data are all important components of the project.", "http://projecteuclid.org", "", "false", "	", "",2 ],
["wf_gutenbergorg", "Project Gutenberg", "2", "0", "", "The Project Gutenberg Philosophy is to make information, books and other materials available to the general public in forms a vast majority of the computers, programs and people can easily read, use, quote, and search. It includes classic literature such as Aesop's Fables, Alice in Wonderland, Moby Dick, Paradise Lost. Historical documents such as inaugral addresses and treaties are included, as well as, the Magna Carta, Declaration of Independence, and the U.S. Constitution. Included in the collection are reference works such as, Roget's Thesaurus and the CIA Factbook, as well as, almanacs, census data, and works continaing mathematical constants. Religious documents such as the Bible and the Book of Mormon are also included.", "http://promo.net/pg/", "Search the Project Gutenberg collection", "false", "	", "",2 ],
["wf_muse", "Project Muse", "2", "0", "", "Provides access to journals published by the Johns Hopkins University Press. Disciplines covered are humanities, social sciences, and mathematics.", "http://muse.jhu.edu", "Access to over 300 high quality humanities, arts, and social sciences journals from 60 scholarly publishers.", "true", "	", "",2 ],
["wf_pqhannualrpt", "ProQuest Historical Annual Reports", "2", "0", "", "Historical U.S. Corporate Annual Reports comprising some 800 Fortune 500 and selected other companies from 1800s to 1985.  (1985 – forward coming in Fall 2006)", "http://proquest.umi.com/login?COPT=REJTPTQwMzkmSU5UPTAmVkVSPTI=&clientId=31537", "", "true", "	", "",2 ],
["wf_pqhistnp", "ProQuest Historical Newspapers", "2", "0", "", "This database offers full-text and full-image articles for newspapers dating back to the 19th century. For most titles, the collection includes digital reproductions of every page from every issue--cover to cover--in downloadable PDF files. Current access includes: 1851-2001 for The New York Times; 1889-1987 for The Wall Street Journal; 1877-1988 for The Washington Post; 1908-1991 for The Christian Science Monitor.", "http://proquest.umi.com/login?COPT=REJTPTI2OGIrM2M1YSsxYWNkKzFhY2MrMjY4YSZJTlQ9MCZWRVI9Mg==&clientId=31537", "ProQuest Historical Newspapers™ offers full-text and full-image articles for newspapers dating back to the 18th century. As part of the ProQuest Historical Newspapers program, every issue of each title includes the complete paper–cover-to-cover–with full-page and article images in downloadable PDF.", "true", "	", "",2 ],
["wf_pqnewspapers", "ProQuest Newspapers", "2", "0", "", "Provides full text of many U.S. and international news sources.  Includes the New York Times, Wall Street Journal, Washington Post, Atlanta Journal-Constitution, Times of London, plus other newspapers and news wires.", "http://www.umi.com/pqdauto?COPT=REJTPUc1", "", "true", "	", "",2 ],
["wf_pq_nursingallied", "ProQuest Nursing and Allied Health Source", "2", "0", "", "Provides abstracting and indexing for more than 525 titles, with over 470 titles in full-text in nursing and allied health. ProQuest Nursing & Allied Health Source covers over 70 wide-ranging topics.", "http://proquest.umi.com/pqdlink?RQT=306&DBId=5441", "", "false", "	", "",2 ],
["wf_ebscoxml_pdh", "PsycARTICLES", "2", "0", "", "PsycARTICLES provides over 39,000 full text articles from journals published by the American Psychological Association, the APA Educational Publishing Foundation, the Canadian Psychological Association, and Hogrefe & Huber, including all material from the print journals except for ads and editorial board lists.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=pdh", "PsycARTICLES®", "true", "	", "",2 ],
["wf_psyccritiques", "PsycCRITIQUES", "2", "0", "", "PsycCRITIQUES, a searchable database that replaced the American Psychological Association’s print journal Contemporary Psychology:  APA Review of Books in December 2004, provides full text reviews of current books and some popular films, comparative reviews of books, reviewer bio and photo, and book cover image, as well as a backfile of approximately 4,000 reviews from 1995-2003.", "http://search.ebscohost.com/login.aspx?authtype=ip,uid&site=conpsy&return=y", "PsycCRITIQUES™", "true", "	", "",2 ],
["wf_psychonline", "PsychiatryOnline.com", "2", "0", "", "Included in PsychiatryOnline.com are the following journals: The American Journal of Psychiatry, Psychiatric Services, American Psychiatry, The Journal of Neuropsychiatry and Clinical Neuroscience, and Psychosomatics.  Also included are the following books: DSM-IV TR®, DSM-IV TR® Handbook of Differential Diagnosis, DSM-IV-TR® Casebook and its Treatment Companion, American Psychiatric Association Practice Guidelines in both comprehensive and quick-reference formats, and The American Psychiatric Publishing Textbook of Clinical Psychiatry.", "http://www.psychiatryonline.com/index.aspx", "", "true", "	", "",2 ],
["wf_ebscoxml_psyh", "PsycINFO", "2", "0", "", "Contains citations and summaries of journal articles, book chapters, books, and technical reports in the field of psychology and psychological aspects of related disciplines including medicine, psychiatry, nursing, sociology, education, pharmacology, physiology, linguistics, anthropology, business, and law.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=psyh", "PsycINFO®", "true", "	", "",2 ],
["wf_saepublstand", "Publications and Standards", "2", "0", "", "A database of SAE’s technical publications dating back to 1906. Coverage includes SAE papers, magazine articles, books, standards, and reports. The database includes bibliographic information for all SAE documents.", "http://www.elecpubs.sae.org/", "Database includes bibliographic information for all SAE documents", "true", "	", "",2 ],
["~LINK_ONLY_15143", "<!-- link only -->Publisher's Bindings Online, 1815-1930: The Art of Books", "2", "0", "", "Publishers' Bindings Online, 1815-1930: The Art of Books provides virtual access to a collection of decorative book bindings from the 19th and early 20th century, along with new and creative scholarship, research and teaching materials for the study and appreciation of the book.", "http://bindings.lib.ua.edu", "Publishers' Bindings Online, 1815-1930: The Art of Books provides virtual access to a collection of decorative book bindings from the 19th and early 20th century, along with new and creative scholarship, research and teaching materials for the study and appreciation of the book.", "true", "	", "",2 ],
["wf_pubmed", "PubMed", "2", "0", "", "PubMed, a service of the National Library of Medicine, provides access to over 11 million MEDLINE citations back to the mid-1960's and additional life science journals. PubMed includes links to many sites providing full text articles and other related resources.", "http://www.ncbi.nlm.nih.gov/PubMed", "PubMed", "false", "	", "",2 ],
["~LINK_ONLY_15144", "<!-- link only -->Reader's Guide Retrospective", "2", "0", "", "Readers' Guide Retrospective is a database containing comprehensive indexing of the most popular general-interest periodicals published in the United States and reflects the history of 20th century America.", "http://vnweb.hwwilsonweb.com/hww/jumpstart.jhtml?prod=RGR", "Readers' Guide Retrospective is a database containing comprehensive indexing of the most popular general-interest periodicals published in the United States and reflects the history of 20th century America.", "true", "	", "",2 ],
["~LINK_ONLY_15145", "<!-- link only -->ReferenceUSA", "2", "0", "", "Directory of over twelve million businesses in the United States. Searchable by name, industry, location, or a combination. Also includes over 120 U.S. households.", "http://www.referenceusa.com", "Directory of over twelve million businesses in the United States. Searchable by name, industry, location, or a combination. Also includes over 120 U.S. households.", "true", "	", "",2 ],
["wf_referenceusa_bd", "ReferenceUSA - Business", "2", "0", "", "Directory of over twelve million businesses in the United States. Searchable by name, industry, location, or a combination.", "http://www.referenceusa.com/", "", "true", "	", "",2 ],
["wf_referenceusa_rd", "ReferenceUSA - Residential", "2", "0", "", "Search 120 million US households.", "http://www.referenceusa.com/", "", "true", "	", "",2 ],
["wf_ebscoxml_bwh", "Regional Business News", "2", "0", "", "This database provides comprehensive full text coverage for regional business publications. Regional Business News incorporates coverage of 75 business journals, newspapers and newswires from many metropolitan and rural areas within the United States. This database is updated on a daily basis.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=bwh", "Regional Business News™", "true", "	", "",2 ],
["wf_pqresearchlib", "Research Library Complete", "2", "0", "", "Indexing and full text for a basic collection of general-interest, humanities, social science and science periodicals and newspapers; 1986 to present. Divided into Newspapers and periodicals sections.", "http://www.umi.com/pqdauto?COPT=REJTPUcxQw@@", "The database includes more than 3,700 titles—over 2,500 in full text—from 1972 forward. It features a highly-respected, diversified mix of scholarly journals, trade publications, magazines, and newspapers.", "true", "	", "",2 ],
["~LINK_ONLY_19082", "<!-- link only -->RIA Checkpoint", "2", "0", "", "RIA's integrated Internet tax research service, including U.S. Tax Reporter; Federal Tax Coordinator 2nd; RIA Citator 2nd; WG&L tax journals, and State and Local tax libraries for all 50 states.", "http://checkpoint.riag.com/login?iploc=uniofala", "", "true", "	", "",2 ],
["~LINK_ONLY_15146", "<!-- link only -->RILM Abstracts of Music Literature (1969-Present)", "2", "0", "", "Provides citations and abstracts of articles in music periodicals, conference proceedings, books, bibliographies, catalogs, dissertations, Festschriften, and iconographies; indexes 3,700 journals in over 100 languages.", "http://biblioline.nisc.com/scripts/login.dll?BiblioLine&dbname=QRLM", "Provides citations and abstracts of articles in music periodicals, conference proceedings, books, bibliographies, catalogs, dissertations, Festschriften, and iconographies; indexes 3,700 journals in over 100 languages.", "true", "	", "",2 ],
["~LINK_ONLY_15147", "<!-- link only -->RIPM: Retrospective Index to Music Periodicals", "2", "0", "", "Annotated citations to music articles, book reviews, and biographical information published in 19th century periodicals.  Contains over 5000,000 citations to articles in periodicals published in 15 countries during the 19th century; updated every six month.", "http://biblioline.nisc.com/scripts/login.dll?BiblioLine&dbname=QRIPM", "Annotated citations to music articles, book reviews, and biographical information published in 19th century periodicals.  Contains over 5000,000 citations to articles in periodicals published in 15 countries during the 19th century; updated every six month.", "true", "	", "",2 ],
["~LINK_ONLY_15148", "<!-- link only -->SAE Digital Library", "2", "0", "", "The SAE Digital Library contains over 130,000 documents on mobility topics, including: more than 2,000 SAE Ground Vehichle Standards (J-Reports); more than 2,800 SAE Aerospace Materials Specifications; more than 3,900 SAE Aerospace Standards; and more than 14,000 SAE Technical Papers.", "http://www.elecpubs.sae.org/NXT/gateway.dll?f=templates&fn=default.htm&vid=SAE:SAE2", "The SAE Digital Library contains over 130,000 documents on mobility topics, including: more than 2,000 SAE Ground Vehichle Standards (J-Reports); more than 2,800 SAE Aerospace Materials Specifications; more than 3,900 SAE Aerospace Standards; and more than 14,000 SAE Technical Papers.", "true", "	", "",2 ],
["wf_sbrnet", "SBRnet", "2", "0", "", "Market research and industry news for the sporting goods and sports marketing industries.", "http://www.sbrnet.com", "", "true", "	", "",2 ],
["~LINK_ONLY_15149", "<!-- link only -->Science Citation Index Expanded", "2", "0", "", "", "http://isiknowledge.com/wos", "", "true", "	", "",2 ],
["wf_scidirect_xml", "ScienceDirect", "2", "0", "", "Information source for world's scientific, medical, and technical research, but also includes social science and humanities topics. Contains 1,500,000+ articles on topics such as chemistry, mathematics, computer and materials science, medicine, etc. Includes links to 10,000 journal titles, articles that have been accepted for publication but not yet in print, access to Medline, a web search engine, and information on available jobs for scientists.", "http://www.sciencedirect.com", "", "true", "	", "",2 ],
["~LINK_ONLY_15150", "<!-- link only -->SciFinder", "2", "0", "", "SciFinder Scholar provides access to: Chemical Abstracts (articles, book chapters, conference proceedings, patents, and more; 1907-present); the Registry Database (registry numbers and names of chemical substances; 1957-present); and the CASREACT database (reaction searching; 1985-present). Enhancements made in February 2000 include: CHEMCATS (commercial sources for purchasing chemicals) and CHEMLIST (regulated chemical information).", "http://www.cas.org/SCIFINDER/", "SciFinder Scholar provides access to: Chemical Abstracts (articles, book chapters, conference proceedings, patents, and more; 1907-present); the Registry Database (registry numbers and names of chemical substances; 1957-present); and the CASREACT database (reaction searching; 1985-present). Enhancements made in February 2000 include: CHEMCATS (commercial sources for purchasing chemicals) and CHEMLIST (regulated chemical information).", "true", "	", "",2 ],
["wf_scirus", "Scirus", "2", "0", "", "Scirus searches more than 200 million science-specific web pages, allowing users to pinpoint scientific, scholarly, technical and medical data on the Web and allowing users to find reports, peer-reviewed articles, patents, preprints and journals.", "http://www.scirus.com/", "Scirus is a free web search engine developed especially for scientists, researchers and students.", "true", "	", "",2 ],
["wf_galescribner", "Scribner Writers Series", "2", "0", "", "The Scribner Writers Series includes some 1,600 full-text articles on writers and literary genres drawn from thirteen acclaimed print sets. Each signed article was written by a noted scholar and concludes with a bibliography of primary and secondary sources for further study.", "http://infotrac.galegroup.com/itweb/tusc49521?db=Scribner", "Scribner Writers Series", "true", "	", "",2 ],
["wf_ift:shakespeare", "Shakespeare Collection", "2", "0", "", "The Shakespeare Collection is an interdisciplinary, multimedia collection of resources supporting literary, textual, historical, and performance studies.  Resources include the most recent Arden Shakespeare editions of the complete works, as well as editions and adaptations of Shakespeare’s works published during Shakespeare’s time, prompt books, the Gordon Crosses Theatrical Diaries, criticism, reviews, images, and reference  works", "http://shakespeare.galegroup.com/shax/start.do?prodId=SHAX&userGroupName=tusc49521", "Shakespeare Collection", "true", "	", "",2 ],
["~LINK_ONLY_15151", "<!-- link only -->Simmons Choices 3", "2", "0", "", "<b>Restricted to Bruno Library.</b> Contains data profiling consumers of a wide range of products, including both demographic data and media preferences.", "http://www.smrb.com/", "<b>Restricted to Bruno Library.</b> Contains data profiling consumers of a wide range of products, including both demographic data and media preferences.", "true", "	", "",2 ],
["wf_sirsdiscover", "SIRS Discoverer on the Web", "2", "0", "", "An interactive tool that strengthens research, reading, writing and computer skills. Discoverer includes middle and elementary school curriculum topics and three reading levels--easy, moderate, and challenging--which can be integrated into classroom activities. Also contains Funk and Wagnall's New Encyclopedia, Merriam Webster's Dictionary and Thesaurus, and a world almanac for kids.", "http://discoverer.sirs.com", "SIRS Discoverer®", "true", "	", "",2 ],
["wf_sirsgov", "SIRS Government Reporter", "2", "0", "", "Delivers thousands of full-text documents and graphics concerning a wide variety of topics: health, science, economics, environment, politics, foreign affairs, workplace issues, business, and industry. The almanac databases are valuable tools for researching current and historic government documents; landmark and recent U.S. Supreme court decisions; information about federal departments, agencies, elected leaders and more.", "http://sks.sirs.com", "SIRS Government Reporter®", "true", "	", "",2 ],
["wf_sirsren", "SIRS Renaissance", "2", "0", "", "Current perspectives on the Arts and Humanities from domestic and international sources. Contains information on film, music, literature, performing arts, architecture, religion, and philosophy. Many articles contain color graphics, art reproductions, and photographs. Also includes a glossary of the Arts, award recipients, and lifetime readings.", "http://sks.sirs.com", "SIRS Renaissance®", "true", "	", "",2 ],
["wf_sirsres", "SIRS Researcher", "2", "0", "", "General reference database which contains thousands of full-text articles exploring social, scientific, health, historic, economic, business, political, and global issues, as well as current events. Articles are selected from more than 1,500 domestic and international newspapers, magazines, journals, and U.S. government publications. Many articles are accompanied by graphics, including charts, maps, diagrams, and illustrations.", "http://sks.sirs.com", "SIRS Researcher®", "true", "	", "",2 ],
["~LINK_ONLY_13192", "<!-- link only -->Social Sciences Citation Index", "2", "0", "", "The Social Sciences Citation Index is a multidisciplinary database, with searchable author abstracts,covering the journal literature of the social sciences. It indexes more than 1,725 journals spanning 50 disciplines, as well as covering individually selected, relevant items from over 3,300 of the world's leading scientific and technical journals.\" -- ISI Web of Science", "http://isiknowledge.com/wos", "Multidisciplinary database, with searchable author abstracts,covering the journal literature of the social sciences.", "true", "	", "",2 ],
["wf_socialservicesabs", "Social Services Abstracts", "2", "0", "", "CSA Social Services Abstracts provides bibliographic coverage of current research focused on social work, human services, and related areas, including social welfare, social policy, and community development.  The database abstracts and indexes over 1,406 serials publications and includes abstracts of journal articles and dissertations, and citations to book reviews.  It is possible to search both Sociological Abstracts and Social Services Abstracts at the same time.  It is possible to search both Sociological Abstracts and Social Services Abstracts at the same time.", "http://www.csa.com/htbin/dbrng.cgi?username=jonb76&access=jonb7676&db=ssa-set-c&adv=1", "Social Services Abstracts", "true", "	", "",2 ],
["wf_socialworkabs", "Social Work Abstracts", "2", "0", "", "Social Work Abstracts database contains more than 26,000 records, spanning 1977 to the present, from social work and other related journals on topics such as homelessness, AIDS, child and family welfare, aging, substance abuse, legislation, community organization, and more.  Access limited to 4 simultaneous users.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=CS,SW", "", "true", "	", "",2 ],
["wf_sociologicalabstracts", "Sociological Abstracts", "2", "0", "", "CSA Sociological Abstracts abstracts and indexes the international literature in sociology and related disciplines in the social and behavioral sciences. The database provides abstracts of journal articles and citations to book reviews drawn from over 1,700 serials publications, and also provides abstracts of books, book chapters, dissertations,and conference papers. Records added after 1974 contain in-depth and nonevaluative abstracts of journal articles.", "http://www.csa.com/htbin/dbrng.cgi?username=jonb76&access=jonb7676&db=socioabs-set-c&adv=1", "Sociological Abstracts", "true", "	", "",2 ],
["wf_oecdbooks", "SourceOECD Databases", "2", "0", "", "International statistical data.", "http://www.sourceoecd.org/rpsv/oecd_database.htm", "", "true", "	", "",2 ],
["~LINK_ONLY_15152", "<!-- link only -->Southern Genealogies", "2", "0", "", "<b>Restricted to Hoole Library.</b> Contains images of the pages of all twenty-three volumes of Historical Southern Families and all six volumes of Notable Southern Families. Originally published by the Genealogical Publishing Company, these volumes contain information about approximately 132,000 individuals. Both series of books contain genealogies that cover a broad spectrum of Southern families... From each carefully compiled genealogy, you can generally learn the following information about your Southern ancestor : Birthdate and location - marriage date and location - death date and location - a description of property - will information - occupation.", "http://www.genealogical.com/products/Southern%20Genealogies/7191.html", "<b>Restricted to Hoole Library.</b> Contains images of the pages of all twenty-three volumes of Historical Southern Families and all six volumes of Notable Southern Families. Originally published by the Genealogical Publishing Company, these volumes contain information about approximately 132,000 individuals. Both series of books contain genealogies that cover a broad spectrum of Southern families... From each carefully compiled genealogy, you can generally learn the following information about your Southern ancestor : Birthdate and location - marriage date and location - death date and location - a description of property - will information - occupation.", "true", "	", "",2 ],
["wf_ebsco_sportdiscus", "SPORT Discus", "2", "0", "", "An international database which contains information on sports medicine, exercise physiology, biomechanics, psychology, training techniques, coaching, physical education, physical fitness, recreation, facilities and equipment. Includes citations to books, conference proceedings, dissertations, reports, and articles from more than 2,000 current journals, magazines, and newsletters.", "http://search.ebscohost.com/login.asp?profile=spd", "SPORTDiscus", "true", "	", "",2 ],
["wf_statusa_stofnation", "STAT-USA", "2", "0", "", "Database of economic, business, and international trade publications and statistics produced by the United States government. Includes the National Trade Data Bank (NTDB).", "http://www.stat-usa.gov/", "", "false", "	", "",2 ],
["wf_storyfinder", "Story Finder", "2", "0", "", "Story Finder provides thousands of full-text short stories plus explanations, biographies, pictures and more. The database will be updated constantly with classic and contemporary stories.", "http://www.litfinder.com/module.asp?id=107", "", "true", "	", "",2 ],
["wf_ift:studentedt", "Student Edition", "2", "0", "", "General reference database for high school students. Contains citations and full-text articles from hundreds of magazines and newspapers covering a broad range of topics, including current events, arts, science, health, government, history, sports, and more. Also provides access to the Information Please Almanac and the Information Please Sports Almanac.", "http://infotrac.galegroup.com/itweb/tusc49521?db=STOM", "Designed for high-school students with access to a variety of indexed and full-text magazines, newspapers and reference books", "true", "	", "",2 ],
["wf_tvnewsarch", "Television News Archive", "2", "0", "", "TVNA is the world's most extensive and complete archive of television news. The collection holds more than 30,000 individual network evening news broadcasts from the major U.S. national broadcast networks - ABC, CBS, NBC, and CNN - and more than 9,000 hours of special news-related programming, including ABC's Nightline since 1989. Equipment Requirements: Users will need RealOne media play installed to view the video clips.", "http://tvnews.vanderbilt.edu", "", "true", "	", "",2 ],
["wf_ebscoxml_tdh", "Textile Technology Index", "2", "0", "", "The Textile Technology Index is designed to serve academic institutions and libraries by providing extensive coverage of the scientific and technological aspects of textile production and processing. The Textile Technology Index contains indexing and abstracting for over 400 periodical titles, and for thousands of titles drawn from sources such as books, conferences, theses, technical reports, and trade literature.", "http://search.ebscohost.com/login.asp?profile=web&defaultdb=tdh", "Textile Technology Index™", "true", "	", "",2 ],
["~LINK_ONLY_19083", "<!-- link only -->Thesaurus Linguae Graecae (TLG)", "2", "0", "", "The Thesaurus Linguae Graecae (TLG) is a digital library containing most literary texts written in Greek from Homer to the fall of Byzantium in A.D. 1453. TLG currently provides access to 3,500 authors and 11,000 works. The project's goal is to create a comprehensive digital library of Greek literature from antiquity to the present era.", "http://stephanus.tlg.uci.edu/inst/fontsel", "", "true", "	", "",2 ],
["wf_galetwayne", "Twayne's Author Series", "2", "0", "", "Database composed of Twayne's three print literature series-United States Authors, English Authors, and World Authors. Covers almost 600 authors from ancient times to the present. Users can search by name, genre, nationality, gender, language, and time period. Includes updated information such as biography, history of literary movements, criticisms, and other useful research material.", "http://infotrac.galegroup.com/itweb/tusc49521?db=Twayne", "Twayne's Authors Series", "true", "	", "",2 ],
["wf_newscong", "U.S. Congressional Serial Set", "2", "0", "", "The U.S. Serial Set includes Congressional reports and documents as well as executive agency and departmental reports ordered to be printed by Congress.  The Serial Set captures American life from the late 19th century onward from westward expansion, scientific exploration, politics, international relations, business and manufacturing.", "http://web.lexis-nexis.com/congcomp", "The acclaimed U.S. Congressional Serial Set, 1817-1980 from Readex is the most accurate and comprehensive digital edition of this national treasure, enabling researchers to quickly and easily explore U.S. history and culture in unprecedented depth and detail.", "true", "	", "",2 ],
["wf_ovid_ulrich", "Ulrich's International Periodicals Directory", "2", "0", "", "Ulrich's International Periodicals Directory provides data on over 210,000 regularly published and irregularly issued serials including over 47,000 cessations since 1979. This reference provides purchasing and contact information (conventional and electronic) for over 90,000 publishers in 200 countries.", "http://web5.silverplatter.com/webspirs/start.ws?customer=c148003&databases=UIGP", "", "false", "	", "",2 ],
["wf_unionlists", "UnionLists", "2", "0", "", "This database shows over 7 million holdings for journals and other covered items among OCLC member libraries. It can help you determine if a library holds a specific journal issue. Updated semiannually.", "http://newfirstsearch.oclc.org/dbname=UnionLists", "", "true", "	", "",2 ],
["~LINK_ONLY_15153", "<!-- link only -->USA Trade Online", "2", "0", "", "Contains monthly and annual data, searchable by commodity down to the 10-digit HS commodity code level, details by partner country and customs port area. Covers only trade between the United States and its foreign partners, not trade between two foreign countries.", "http://www.usatradeonline.gov", "Contains monthly and annual data, searchable by commodity down to the 10-digit HS commodity code level, details by partner country and customs port area. Covers only trade between the United States and its foreign partners, not trade between two foreign countries.", "true", "	", "",2 ],
["wf_ebscoxml_voh", "Vocational and Career Collection", "2", "0", "", "Vocational & Career Collection is designed for vocational and technical libraries servicing high schools, community colleges, trade institutions and the general public. This collection provides full text coverage for nearly 400 trade and industry-related periodicals.", "http://search.ebscohost.com/login.asp?profile=vs", "Vocational & Career Collection™", "true", "	", "",2 ],
["~LINK_ONLY_19084", "<!-- link only -->WDI Online", "2", "0", "", "Also known as \"World Development Indicators,\" provides time series of 575 economic and social indicators for 226 countries for the period 1960-2002.", "http://devdata.worldbank.org/dataonline/", "", "true", "	", "",2 ],
["~LINK_ONLY_15154", "<!-- link only -->Web of Knowledge", "2", "0", "", "Online version of the print versions of: Arts & Humanities Citation Index; Science Citation Index; and Social Sciences Citation Index.", "http://isiknowledge.com/wos", "Online version of the print versions of: Arts & Humanities Citation Index; Science Citation Index; and Social Sciences Citation Index.", "true", "	", "",2 ],
["wf_marquisww", "Who's Who", "2", "0", "", "A source of biographical information on 1.2 million persons from all professions and walks of life.  Also includes historical biographies of deceased individuals from Who Was Who in America 1607-present.  Limited to 1 simultaneous user.  Use is restricted to students, faculty, and staff of the University of Alabama.", "http://search.marquiswhoswho.com", "Who's Who outlines the lives and achievements of more than 25,000 of the most distinguished men and women from almost every country in the world.", "true", "	", "",2 ],
["wf_wileyinterscience", "Wiley InterScience", "2", "0", "", "For the sciences, business, and education. Includes journals and books in the areas of business, chemistry, computer science, earth science, education, engineering, law, life and medical sciences, mathematics and statistics, physics, and psychology.", "http://www3.interscience.wiley.com/cgi-bin/browsepj", "Online editions of the majority of Wiley's 400+ scientific, technical, medical and professional journals.", "true", "	", "",2 ],
["wf_alexander_womensoc", "Women and Social Movements in the United States: 1600 to 2000", "2", "0", "", "Full-text of published histories and records of women’s reform organizations throughout the United States during the 19th and early 20th centuries. It includes The History of Woman Suffrage (6 volumes, 1881-1922); proceedings of the national conventions of female Anti-Slavery societies in the 1830s; proceedings of women’s rights conventions in the 1850s and 1860s; annual reports of the Woman’s Christian Temperance Union; and local and national histories of the General Federation of Women’s Clubs. Each year, an additional 10,000 pages of material will be added.", "http://www.alexanderstreet2.com/wasmlive/", "Brings together books, images, documents, scholarly essays, commentaries, and bibliographies, documenting the multiplicity of women’s activism in public life.", "true", "	", "",2 ],
["~LINK_ONLY_15294", "<!-- link only -->World Data Analyst", "2", "0", "", "This powerful yet easy-to-use online tool lets users analyze the data among countries and regions at a glance.  World Data Analyst offers detailed statistical comparisons of countries across the world, using both the most recent statistics and historical figures.  Plus, Analyst allows subscribers to create tables, charts, and even export the information to a spreadsheet for printing and data crunching", "http://world.eb.com/", "", "true", "	", "",2 ],
["wf_jhu_shakespeare", "World Shakespeare Bibliography Online", "2", "0", "", "WSB provides annotated entries for all important books, articles, book reviews, dissertations, theatrical productions, reviews of productions, audiovisual materials, electronic media, and other scholarly and popular materials related to Shakespeare and published or produced between 1963 and 2006. The scope is international, with coverage extending to more than 118 languages and representing every country in North America, South America, and Europe, and nearly every country in Asia, Africa, and Australasia.", "http://www.worldshakesbib.org/", "Annotated entries for all important books, articles, book reviews, dissertations, theatrical productions, reviews of productions, audiovisual materials, electronic media, and other scholarly and popular materials related to Shakespeare", "true", "	", "",2 ],
["~LINK_ONLY_11750", "<!-- link only -->WorldCat", "2", "0", "", "Union catalog containing bibliographic information on 40+ million items (books, scores, films, maps, and other formats) held in thousands of academic, public, and other libraries around the world. Broad in scope with records dating to the 12th century. Can be used to verify citations, locate an item in another library, or to provide accurate citation information for interlibrary loan requests. (Does not include citations to individual articles, stories in periodicals, or book chapters).", "http://newfirstsearch.oclc.org/dbname=WorldCat", "Union catalog containing bibliographic information on 40+ million items.", "true", "	", "",2 ]];
