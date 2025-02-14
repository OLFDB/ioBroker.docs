---
title: бревно
lastChanged: 10.05.2021
translatedFrom: de
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/admin/log.md
hash: 66gpVVstVxHlQUyyBYv8juocwLyP/pXvD9q5MXSJDlE=
---
Здесь постоянно выводятся сообщения системы. Последнее сообщение вверху.

![Страница журнала](../../de/admin/media/ADMIN_Log_numbers.png)

## Строка заголовка
в строке заголовка есть значки наиболее важных процессов. Для каждого значка есть контекстная справка. Для этого просто удерживайте некоторое время мышкой на значке.

### 1 - журнал обновлений
Эта кнопка обновляет список.

### 2 - Остановить обновление
При нажатии на эту кнопку постоянное обновление списка прекращается.
Вместо значка паузы теперь отображается количество новых, не отображаемых сообщений.

### 3 - удалить список
Нажатие на этот значок удаляет только список на экране.

### 4 - Очистить журнал на хосте
При нажатии на этот значок весь журнал на хосте удаляется безвозвратно.

### 5 - Загрузить журнал
С помощью этой кнопки вы можете загрузить полный ежедневный журнал за последние дни из каталога / opt / iobroker / logs:

![Загрузка журнала](../../de/admin/media/ADMIN_Log_download.png)

Вы увидите следующий экран: ![полный журнал](../../de/admin/media/ADMIN_Log_download02.png)

Поскольку строки в списке в окне журнала часто обрезаются, важно проверить здесь, есть ли дополнительная информация.

### 6 - список хостов
В журнале отображаются только сообщения, которые приходят с установленного здесь хоста. В многоузловых средах вы можете настроить хост, который будет регистрироваться здесь.

![Хозяева](../../de/admin/media/ADMIN_Log_hosts.png)

## Содержание страницы
![Хозяева](../../de/admin/media/ADMIN_Log_numbers02.png)

Существующие объекты отображаются в таблице на странице.

Заголовки столбцов 1 и 3 содержат раскрывающиеся меню, которые служат критериями фильтрации, в столбце 4 критерий фильтрации можно вводить произвольно.

### 1 - источник
С помощью этого раскрывающегося меню сообщения можно фильтровать в соответствии с экземпляром ведения журнала. В меню отображаются только те экземпляры, для которых есть записи на странице.

### 2 - время
Здесь указана отметка времени сообщения. Этот столбец нельзя отфильтровать.

### 3 - отображаемый уровень лога
Это меню можно использовать для установки серьезности отображаемого сообщения. Однако это только фильтр существующего списка.
Чтобы установить ведение журнала на определенном уровне для экземпляра, это должно быть установлено на странице экземпляра.

Ошибки отображаются красным шрифтом:

![Ошибка](../../de/admin/media/ADMIN_Log02_error.png)

Если на каком-либо хосте возникает ошибка, метка ***Журнал*** также отображается красным цветом в строке меню.

### 4 - сообщение
Соответствующее сообщение отображается в этом столбце, если оно помещается в столбец.
Остальное будет отрезано. При наведении курсора мыши вы все еще можете видеть все сообщение.
Чтобы разместить сообщение на форуме, загрузите журнал и скопируйте сообщение.