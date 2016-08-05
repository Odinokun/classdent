<h2>How to use it</h2>
<ol>
    <li>git clone</li>
    <li>"npm i" - install package from package.json</li>
    <li>"bower i" - install package from bower.json</li>
</ol>
<h5>app folder structura</h5>
<pre>
    app/
    |- bower
    |
    |- css
    |
    |- fonts
    |
    |- html
    |  |- include               # подключаемые фрагменты (svg, maps)
    |  |  |- some-svg.html
    |  |  |- google-map.html
    |  |  …                     # и т.д.
    |  |
    |  |- components            # основные повторяющиеся элементы
    |  |  |- _head.html
    |  |  |- _header.html
    |  |  |- _footer.html
    |  |  …                     # и т.д.
    |  |
    |  |- index.html            # скелеты страниц
    |
    |- img
    |
    |- js
    |
    |- sass
    |  |- base                  # шрифты, переменные, миксины
    |  |  |- _fonts.scss
    |  |  |- _variables.scss
    |  |  |- _mixin.scss
    |  |  |- _base.scss
    |  |  …                     # и т.д.
    |  |
    |  |- components            # стили элементов
    |  |  |- _header.scss
    |  |  |- _footer.scss
    |  |  …                     # и т.д.
    |  |
    |  |- pages                 # стили страниц
    |  |  |- _index.scss
    |  |  |- _about.scss
    |  |  …                     # и т.д.
    |  |
    |  |- main.scss             # главный файл Scss
    |
    |- index.html
</pre>