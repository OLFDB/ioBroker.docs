---
translatedFrom: en
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/dev/adaptertranslate.md
title: Перевод адаптеров
hash: 397W84qVYffJYSWkv8fxwwlq1WNcFCdgZ0vqe/MIGzQ=
---
# Перевод адаптеров
## Введение
ioBroker используется во всем мире в [много разных языков](https://www.iobroker.net/#en/statistics), поэтому переводы очень важны.

Адаптеры состоят из нескольких частей, которые необходимо перевести:

1. Строки в пользовательском интерфейсе администратора
1. Название и описание в `io-package.json`
1. Выпуск новостей в `io-package.json`

## Языки
Все эти короткие строки **необходимо** перевести на следующие языки:

- английский (en)
- немецкий (de)

Их **также следует** перевести на следующие дополнительные языки:

- Russion (ru)
- португальский (pt)
- голландский (nl)
- французский (фр)
- итальянский (it)
- испанский (а)
- Польский (pl)
- китайский (zh-cn)

## Автоматический перевод
Все адаптеры должны использовать автоматический перевод с использованием `gulp`.

Когда создается адаптер с [Создатель адаптера](https://github.com/ioBroker/create-adapter), создается правильный файл gulp.

Каждый раз, когда вы добавляете какие-то строки, вы можете просто использовать `gulp translateAndUpdateWordsJS`, чтобы добавить все отсутствующие переводы.

## Управляемые переводы
Автоматические переводы часто недостаточно хороши или сбивают с толку, поэтому ioBroker предлагает платформу Weblate для управляемых переводов сообщества:

https://weblate.iobroker.net/

В Weblate члены сообщества могут легко управлять переводами на любое количество языков для всех включенных адаптеров ioBroker.

Чтобы добавить адаптер в Weblate, следуйте [эти руководящие принципы](https://github.com/ioBrokerTranslator/doc/blob/master/README.md).

В настоящее время Weblate управляет строками только в пользовательском интерфейсе администратора. Это не изменяет `io-package.json` и ничего не делает с вашей документацией.