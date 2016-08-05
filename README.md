<h2>How to use it</h2>
<ol>
    <li>git clone</li>
    <li>"npm i" - install package from package.json</li>
    <li>"bower i" - install package from bower.json</li>
</ol>

sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Типографские правила
|   …                    # и т.д.
|
|– components/
|   |– _buttons.scss     # Кнопки
|   |– _carousel.scss    # Карусель
|   |– _cover.scss       # Обложка
|   |– _dropdown.scss    # Выпадающий список
|   …                    # и т.д.
|
|– layout/
|   |– _navigation.scss  # Навигация
|   |– _grid.scss        # Сетка
|   |– _header.scss      # Шапка
|   |– _footer.scss      # Подвал
|   |– _sidebar.scss     # Боковая панель
|   |– _forms.scss       # Формы
|   …                    # и т.д.
|
|– pages/
|   |– _home.scss        # Стили, особые для главной страницы
|   |– _contact.scss     # Стили, особые для страницы контактов
|   …                    # и т.д.
|
|– themes/
|   |– _theme.scss       # Тема по умолчанию
|   |– _admin.scss       # Тема админа
|   …                    # и т.д.
|
|– utils/
|   |– _variables.scss   # Переменные Sass
|   |– _functions.scss   # Функции Sass
|   |– _mixins.scss      # Примеси Sass
|   |– _helpers.scss     # Помощники классов & placeholder’ов
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   …                    # и т.д.
|
|
`– main.scss             # главный файл Sass