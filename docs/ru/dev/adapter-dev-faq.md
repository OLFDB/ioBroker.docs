---
translatedFrom: en
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/dev/adapter-dev-faq.md
title: Часто задаваемые вопросы о разработке адаптеров
hash: Q0u88eZutx+EI0w9GtrsGf/NIfeparGmyL3IkYxQzc8=
---
# Часто задаваемые вопросы о разработке адаптера
## Введение
Идея этой страницы - собрать часто задаваемые вопросы о разработке адаптеров ioBroker.
Эта идея родилась Ральфом на канале Discord ioBroker #adapter 24 ноября 2020 года во время обсуждения с вопросом Мика.

## Пожалуйста, внесите свой вклад (это действительно просто!)
Не стесняйтесь добавлять любые вопросы и соответствующие ответы на эту страницу. Единственное ограничение: обязательно добавьте дату в ответ. В перфекционизме нет нужды, просто напишите, что помогло вам в разработке адаптера. Также приветствуются ссылки на адаптеры, в которых реализован вопрос. Нам, разработчикам, нравится видеть примеры реализации :-)

* Примечание: * Это не будет официальной документацией. Приветствуются любые подсказки, обходные пути, ссылки на даже более старые сообщения на форуме и т. Д. Намерение состоит в том, чтобы быстро поддержать и помочь разработчикам по часто задаваемым вопросам разработчиков. Если у вас есть проблемы с письмом на английском языке, используйте свой местный язык, например немецкий, русский и т. Д., Мы будем рады помочь и перевести позже.

Для обновления оглавления вы можете использовать генератор оглавления, например [luciopaiva.com/markdown-toc](https://luciopaiva.com/markdown-toc/)

# Содержание
- [Обновления адаптера] (# обновление адаптера)
  - [Публикация обновлений адаптера] (# publishing-adapter-updates)
- [Тестирование адаптера и отчеты об ошибках] (# тестирование-адаптер-отчет об ошибках)
  - [Компактный режим] (# компактный режим)
  - [Часовой] (# часовой)
- [Пользовательский интерфейс конфигурации адаптера (admin / index_m.html)] (# adapter-configuration-ui-adminindexmhtml)
  - [Проверка ввода] (# проверка ввода)

---

### Обновления адаптера
#### Публикация обновлений адаптера
** Вопрос: ** В каких файлах мне нужно изменить номер версии?

** Ответ: ** В основном нужно трогать 3 файла:

 * `io-package.json`: изменить номер версии и добавить журнал последних изменений
 * `package.json`: изменить только номер версии
 * `README.md`: добавить номер новой версии и журнал изменений

Обратите внимание, что необходимо использовать [Семантическое управление версиями] (https://semver.org/), см. [Управление версиями](https://github.com/ioBroker/ioBroker.docs/blob/master/docs/en/dev/adapterdev.md#versioning).<br> (25 ноября 2020 г.)

** Вопрос: ** Мой адаптер находится в последней версии репозитория. Я обновил адаптер на Github, а также опубликовал его на NPM. Когда пользователи увидят новую версию в админке?

** Ответ: ** ioBroker проверяет наличие любых изменений версии дважды в день.<br> (25 ноября 2020 г.)

** Вопрос: ** Как мне добавить новый адаптер в последний репозиторий?

** Ответ: ** См. [Добавить новый адаптер в последний репозиторий](https://github.com/ioBroker/ioBroker.repositories#add-a-new-adapter-to-the-latest-repository)<br> (25 ноября 2020 г.)

### Тестирование адаптера и отчет об ошибках
#### Компактный режим
** Вопрос: ** Как я могу протестировать компактный режим?

** Ответ: ** См. [Тестирование в компактном режиме](https://forum.iobroker.net/topic/32789/anleitung-f%C3%BCr-adapter-entwickler-compact-mode-testen) (на немецком языке)<br> (25 ноября 2020 г.)

#### Страж
** Вопрос: ** Как я могу добавить Sentry в свой адаптер?

** Ответ: ** См. [Sentry Read.me](https://github.com/ioBroker/plugin-sentry#readme)<br> (25 ноября 2020 г.)

### Пользовательский интерфейс конфигурации адаптера (admin / index_m.html)
#### Проверка ввода
** Вопрос: ** Я хотел бы проверить поля конфигурации адаптера с помощью основных методов адаптера, а также классов / методов кода адаптера node.js. Проверка должна происходить, когда пользователь нажимает «сохранить» в конфигурации адаптера, который затем вызывает `save()` из `admin/index_m.html`.

** Ответ: ** Вы можете использовать метод `sendTo()` для отправки переменной `obj` из `admin/index_m.html` в код адаптера, проверить содержимое там, а затем предоставить результат через обратный вызов обратно в `sendTo()` из `admin/index_m.html`.<br> Пример: это реализовано в адаптере [Фарплан](https://github.com/gaudes/ioBroker.fahrplan).<br> ПРИМЕЧАНИЕ: вам может потребоваться изменить свой `io-package.json`, см., Например, [ioBroker-Forum: функция sendTo () nicht](https://forum.iobroker.net/topic/5205/gel%C3%B6st-sendto-in-eigenem-adapter-funktioniert-nicht/).<br> (24 ноября 2020 г.)