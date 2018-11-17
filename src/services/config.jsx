export const rootUrl = (() => document.location.origin)();

export const mealUrl = "/meals/";

export const mealMenu = [
  { title: "Супи", href: "soups", icon: "cake.svg", active: true },
  { title: "Салати", href: "salads", active: false },
  { title: "Аламинути", href: "fastfoods", icon: "cake.svg", active: false },
  { title: "Основни", href: "diners", icon: "cake.svg", active: false },
  { title: "Хамбургери", href: "hamburgers", active: false },
  { title: "Пици", href: "pizzas", active: false },
  { title: "Десерти", href: "sweets", active: false },
  { title: "Напитки", href: "drinks", active: false },
  { title: "Коктейли", href: "coctails", active: false }
];

export const meals = [
  { title: "Руска салата", img: "salad.jpg" },
  { title: "Пица Сицилиана", img: "pizza.jpg" },
  { title: "Пилешка супа", img: "soup.jpg" },
  { title: "Торта", img: "cake.jpg" }
];

export const singleMenu = [
  {title: "Продукти", href: "products", active: true},
  {title: "Калории", href: "calories", active: true},
  {title: "Подготовка", href: "preparation", active: true},
  {title: "Приготвяне", href: "cooking", active: true},
  {title: "Оценка", href: "similar", active: true},
]

export const urls = {
  recepie: `${rootUrl}/include/data`,
  products: `${rootUrl}/include/data`
}
