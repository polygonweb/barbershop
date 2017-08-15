// главное меню сайта
var menuItems = [
	{text: 'главная', link: 'index.html'},
	{text: 'информация', link: 'javascript:void(0)'},
	{text: 'новости', link: 'javascript:void(0)'},
	{text: 'прайс-лист', link: 'price.html'},
	{text: 'магазин', link: 'shop.html'},
	{text: 'контакты', link: 'javascript:void(0)'}
];

// страница прайс-листов
var bestVendors = [
	'Baxter of California',
	'Mr Natty',
	'Suavecito',
	'Malin+Goetz'
];

var priceList = {
	'стрижка': '1500 р.',
	'стрижка бороды': '500 р.',
	'накрутка усов': '350 р.'
}

// магазин
var products = [
	{
		image: 'img/content/product-1.jpg',
		link: 'product-item.html',
		title: 'Baxter of California',
		desc: 'Набор для путешествий',
		price: 500
	},
	{
		image: 'img/content/product-2.jpg',
		link: 'product-item.html',
		title: 'Baxter of California',
		desc: 'Увлажняющий кондиционер',
		price: 750
	},
	{
		image: 'img/content/product-3.jpg',
		link: 'product-item.html',
		title: 'SAUVECITO',
		desc: 'Гель для волос',
		price: 500
	},
	{
		image: 'img/content/product-4.jpg',
		link: 'product-item.html',
		title: 'American crew',
		desc: 'Глина для укладки волос',
		price: 500
	},
	{
		image: 'img/content/product-5.jpg',
		link: 'product-item.html',
		title: 'American crew',
		desc: 'Гель для волос',
		price: 500
	},
	{
		image: 'img/content/product-6.jpg',
		link: 'product-item.html',
		title: 'Baxter of California',
		desc: 'Набор для бритья',
		price: 500
	}
];

var productCard = {
	title: 'набор для путешествий «Baxter of California»',
	images: [
		{
			url: 'img/content/full-1.jpg',
			preview: 'img/content/preview-3.jpg'
		},
		{
			url: 'img/content/full-2.jpg',
			preview: 'img/content/preview-2.jpg'
		},
		{
			url: 'img/content/full-3.jpg',
			preview: 'img/content/preview-1.jpg'
		}
	],
	isAvailable: true,
	article: 'dexter-ae',
	desc: 'Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.',
	price: '2 900 руб.',
	consist: [
		'Средство для умывания (50 мл)',
		'Увлажняющий крем (50 мл)',
		'Крем для бритья (50 мл)',
		'Крем после бритья, шампунь (50 мл)',
		'Удобная кожаная косметичка'
	]
};

var filter = {
	vendors: [
		{
			title: 'Baxter of California',
			isChecked: true,
			value: 0
		},
		{
			title: 'Mr Natty',
			value: 1
		},
		{
			title: 'Suavecito',
			isChecked: true,
			value: 2
		},
		{
			title: 'Malin+Goetz',
			value: 3
		},
		{
			title: 'Murray’s',
			value: 4
		},
		{
			title: 'American Crew',
			value: 5
		}
	],
	productGroups: [
		{
			title: 'Бритвенные  принадлежности',
			value: 1
		},
		{
			title: 'Средства для ухода',
			value: 2
		},
		{
			title: 'Аксессуары',
			value: 3
		}
	]
}

// список достоинств компании
var features = [
	{
		title: 'быстро',
		text: 'мы делаем свою работу быстро! два часа пролетят незаметно и вы — счастливый обладетель стильной стрижки-минутки!'
	},
	{
		title: 'круто',
		text: 'забудьте, как вы стриглись раньше. мы сделаем из вас звезду футбола или кино! во всяком случае внешне.'
	},
	{
		title: 'дорого',
		text: 'наши мастера — профессионалы своего дела и не могут стоить дешево. к тому же, разве цена не дает определеный статус?'
	}
];

// список превью новостей
var newsList = [
	{
		text: 'нам наконец завезли ягермайстер! теперь вы можете пропустить стаканчик во время стрижки',
		date: '2014-09-25',
		formatDate: '25 сентября'
	},
	{
		text: 'в нашей команде пополнение, борис «бритва» стригунец, обладетель множетсва титулов и наград пополнил наши стройные ряды',
		date: '2014-09-19',
		formatDate: '19 сентября'
	}
];

// фотогалерея на главной
var photoGallery = {
	urls: [
		'https://static1.squarespace.com/static/553fe1a9e4b08eb21df75c13/59388d71be6594211bb0d1ac/59388e24ff7c506f1eefd6eb/1496878634168/22.jpg',
		'https://beauty.dikidi.net/assets/img/salon/9024/gallery/700x700/sg_fb11374803cb29716b5cd233818c1b41.jpg',
		'http://ic.pics.livejournal.com/nehludoff/1352401/1064915/1064915_900.jpg'
	]
}

// карта
var mapLink = {
	full: 'https://www.google.ru/maps/place/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F+%D0%9A%D0%BE%D0%BD%D1%8E%D1%88%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+19/@59.9388878,30.3209493,17z/data=!4m6!3m5!1s0x4696310fca5ba729:0xea9c53d4493c879f!4b1!8m2!3d59.9387942!4d30.3230833?hl=ru',
	embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5989424124002!2d30.320894616103434!3d59.93879686904789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1502777766967'
}

var viewModel = Object.assign({
	menuItems,
	bestVendors,
	priceList,
	products,
	productCard,
	filter,
	features,
	newsList,
	photoGallery,
	mapLink
});

module.exports = viewModel;
